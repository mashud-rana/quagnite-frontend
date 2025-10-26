'use client';

import { useParams, useRouter, useSearchParams } from "next/navigation";
import React,{ useEffect, useRef, useState } from "react";
import { appendInFormData, toastError, toastSuccess, antIcon } from "@/utils/helper";

import styles from "./examInterface.module.css";
import Link from "next/link";
import { useStartExamQuery, useSubmitExamMutation } from "@/redux/features/student/exam/examApi";
import { Modal, Spin } from "antd";
import SkillChart from "@/components/Student/Exams/SkillChart/SkillChart";
import Timer from "./Timer";
import ExamQuestionSkeleton from "./Skeleton/ExamQuestionSkeleton";
import NotDataFound from "@/components/Empty/NotDataFound";

import { useRecordWebcam } from 'react-record-webcam';



const ExamInterface = () => {
  const router = useRouter();
  const { examUuid, enrollUuid } = useParams()
  const searchParams = useSearchParams();
  const cameraId = searchParams.get("camera");
  const micId = searchParams.get("mic");

  
  const [timer, setTimer] = useState(60 * 30); // 30 minutes for example
  const [questions,setQuestions] = useState([])
  const [currentQusIndex, setCurrentQusIndex] = useState(0);
  const [qusCount, setQusCount] = useState(0);
  const [passMark, setPassMark] = useState(0);
  const [score, setScore] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [wrongAnswer, setWrongAnswer] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");

    // Keep the current recording object (or at least its id) in state
  const [currentRecording, setCurrentRecording] = useState(null);

  const [isOnline, setIsOnline] = useState(true);
  const [pendingSubmission, setPendingSubmission] = useState(null);
  //visibility check
  const [isPageVisible, setIsPageVisible] = useState(true);
  const [validExam, setValidExam] = useState(true);

  const {
    activeRecordings,
    openCamera,
    startRecording,
    stopRecording,
    createRecording,
    cancelRecording,
    closeCamera ,
    clearAllRecordings,
    devicesByType
  } = useRecordWebcam({
    fileName: "exam_record",
    mimeType: "video/webm",
    options: {
      video: cameraId ? { deviceId: { exact: cameraId } } : true,
      audio: micId ? { deviceId: { exact: micId } } : true,
    },
  });

  
  //fetch api
  const { 
    data:startExamData,
    isSuccess, 
    isLoading, 
    error, 
    refetch,
    isFetching 
  } = useStartExamQuery({examUuid, enrollUuid});

   const [submitExam, { 
      data:submitExamData,
      isLoading: submitExamIsLoading, 
      isSuccess: submitExamIsSuccess,
      isError: submitExamIsError,
      error: submitExamError 
    }] = useSubmitExamMutation();



  //ans submit
  const submitAnswer = () => {
    if(!validExam){
      toastError("You are not allowed to take this exam.");
      return;
    }
    if(!selectedAnswer){
      //select ans first before submit ans
      toastError('Select option first before submit ansewer')
      return;
    }

    //check answer
    if(selectedAnswer === questions[currentQusIndex]?.correctAnswer){
      setCorrectAnswer(correctAnswer + 1);
    }else{
      setWrongAnswer(wrongAnswer + 1);
    }
    if(parseInt(currentQusIndex + 1) == parseInt(qusCount) ){
      stopRecordingAndSubmit();
    }else{

      setCurrentQusIndex(currentQusIndex + 1);
    }
    setSelectedAnswer("");
  }

  
  const stopRecordingAndSubmit = async () => {
    if(!validExam){
      toastError("You are not allowed to take this exam.");
      return;
    }
    let examId = startExamData?.data?.exam?.id;

    const formData = appendInFormData(
      {
        exam_id: startExamData?.data?.exam?.id,
        enroll_id: startExamData?.data?.enrollExam?.id,
        score: score,
        correct_ans:correctAnswer,
        wrong_ans:wrongAnswer,
        total_qus:qusCount,
      }
    );
    const recorded = await stopRecording(currentRecording);
    // Upload the blob to a back-end
    formData.append('video', recorded.blob, `exam_${examId}_user.webm`);
    console.log("Submitting exam with data:", formData);
    if (!isOnline) {
      toastError("You're offline. Exam will be auto-submitted when you're back online.");
      setPendingSubmission(formData); // store the formData for later submission
      return;
    }
    await submitExam(formData).unwrap();
    
  };

    //visibility check
  useEffect(()=>{
    const handleVisibilityChange = () => {
      if(!validExam) return;
      setIsPageVisible(!document.hidden);
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () =>{
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    }

  },[])

   //before unload auto submit when page reload or closed
    useEffect(() => {
    const handleBeforeUnload = async (event) => {
      if(!validExam) return;
      // Show browser's default confirmation popup
      event.preventDefault();
      event.returnValue = "Are you sure you want to leave? The Exam will be ended.";
  
      // Auto-submit exam before closing
      await stopRecordingAndSubmit();
    };
  
    window.addEventListener("beforeunload", handleBeforeUnload);
  
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [currentRecording, validExam]);

  //online offline check
  useEffect(() => {
    if(!validExam) return;
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [validExam]);

  
//when page invisible then auto submit
useEffect(()=>{
  if(!isPageVisible && currentRecording){
     if(!validExam) return;
    toastError("Page is not visible. Auto-submitting your exam...");
    stopRecordingAndSubmit();
  }
},[isPageVisible, currentRecording])
  //auto submit when back online
useEffect(() => {
  const submitPendingExam = async () => {
     if(!validExam) return;
    if (isOnline && pendingSubmission) {
      toastSuccess("You're back online! Submitting your exam...");
      try {
        await submitExam(pendingSubmission).unwrap();
        setPendingSubmission(null);
      } catch (err) {
        toastError("Auto-submit failed. Please try manually.");
      }
    }
  };
  submitPendingExam();
}, [isOnline]);


  //Response examSubmit action
  useEffect(() => {
  const cleanupRecording = async () => {
    if (submitExamIsSuccess) {
      toastSuccess('Exam submitted successfully');

      try {
        // ✅ Stop the webcam properly
        if (currentRecording) {
          await cancelRecording(currentRecording); // cleanup internal state
        }
        setCurrentRecording(null);

        // ✅ Redirect after ensuring camera is off
         router.push(`/student/exams/progress/${examUuid}/${enrollUuid}?camera=${cameraId}&mic=${micId}`);

      } catch (err) {
        console.error('Failed to close camera:', err);
        toastError('Failed to close webcam. Please check permissions.');
      }
    }

    if (submitExamIsError) {
      toastError(submitExamError?.message || "Something is wrong. Please try again.");
    }
  };

  cleanupRecording();
}, [submitExamIsSuccess, submitExamIsError, submitExamError]);


  // Step 1: Open camera and start recording
  const startWebCamp = async () => {
    if(!validExam) return;
    const recording = await createRecording();
    if (recording) await openCamera(recording.id);
    await startRecording(recording.id);
    setCurrentRecording(recording.id);
  };
 
   // ✅ Start recording when exam starts
  // useEffect(() => {
  //     startWebCamp();
  // }, []);
  

  //score calculate
  useEffect(()=>{
    setScore((correctAnswer / qusCount) * 100);
  },[correctAnswer, qusCount])

  //set Query Data and camera open when success
  useEffect(()=>{
    if(isSuccess){
      if(startExamData?.data?.enrollExam?.attempt > 3){
        setValidExam(false);
        return;
      }
      setQuestions(startExamData?.data?.questions || [])
      setTimer(startExamData?.data?.exam?.duration * 60 || 1800)
      setQusCount(startExamData?.data?.questions?.length || 0)
      setPassMark(startExamData?.data?.exam?.pass_mark || 0)
      startWebCamp();
    }
    if(submitExamIsError){
      toastError(submitExamError?.data?.message || "Something is wrong. Please try again.");
    }
  },[isSuccess, startExamData,submitExamIsError, submitExamError])

  

  const totalQuestions = qusCount;
  const currentQuestion = currentQusIndex + 1;
  const progress = (currentQuestion / totalQuestions) * 100;

 
  if(isLoading || isFetching){
    return <ExamQuestionSkeleton />
  }

  if(startExamData?.data?.enrollExam?.attempt > 3){
    return <NotDataFound message="You have exceeded the maximum number of attempts." />
  }
  
  return (
    <>
      {
         
        <div className={styles.examContent}>
          <div style={{ position: 'fixed', bottom: 12, left: 12, width: 220, zIndex: 999 }}>
            {
              activeRecordings.map((recording) => (
                <video key={recording.id} 
                ref={recording.webcamRef} loop autoPlay playsInline  style={{ width: '100%', borderRadius: 6, border: '1px solid #ddd' }} />
              ))
            }
            
          </div>
          {/* Exam Title and Info */}
          <div className={styles.examHeader}>
            {!isOnline && (
              <p style={{ color: 'red', fontSize: 13, marginTop: 5 }}>
                ⚠️ You are offline. Your progress is saved locally.
              </p>
            )}

            <h5>{startExamData?.data?.exam?.title || "Untitled Exam"}</h5>
            <div className={styles.examInfo}>
              <span className="fw_500">Question {currentQuestion}/{qusCount}</span>
              {/* <div className={styles.timer}>{Math.floor(timer / 60)} : {timer % 60}</div> */}
              <Timer duration={timer} onSubmit={stopRecordingAndSubmit} />
            </div>
          </div>

          {/* Progress Bar */}
          <div className={styles.progressBarWrapper}>
            <div
              className={styles.progressBarFill}
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          {/* Question Section */}
          <div>
            <div className={styles.questionText}>{currentQusIndex + 1}. {questions[currentQusIndex]?.question} </div>

            {/* Answer Options */}
            <div className={`${styles.optionsContainer} mb-24`}>
              {questions[currentQusIndex]?.answers && Object.entries(questions[currentQusIndex]?.answers).map(([key, value]) => (
                <div key={key} className={styles.optionItem}>
                  <label className={styles.optionLabel}>
                        <input
                          type="radio"
                          name="answer"
                          className={styles.optionInput}
                          value={key}
                          checked={String(selectedAnswer) === String(key)}
                          onChange={(e) => setSelectedAnswer(e.target.value)}
                        />
                    <span className={styles.customCheckbox}></span>
                    <span className={styles.optionText}>{key.toUpperCase()}. {value}</span>
                  </label>
                </div>
              ))}
            </div>

            {/* Submit Button */}
            <div className={`${styles.submitContainer} ic_text_end`}>
              {/* <button
                className="ic_common_primary_btn"
                disabled={!selectedAnswer || submitExamIsLoading}
                onClick={submitAnswer}
              >
                SUBMIT ANSWER 
                {
                  submitExamIsLoading && <Spin indicator={antIcon} /> 
                }
              </button> */}
              <button
                className="ic_common_primary_btn"
                disabled={!selectedAnswer || submitExamIsLoading 
                }
                onClick={submitAnswer}
              >
                {isOnline ? "SUBMIT ANSWER" : "OFFLINE MODE"}
                {submitExamIsLoading && <Spin indicator={antIcon} />}
              </button>
            </div>
          </div>
        </div>
       
      }
    </>
   
  );
};

export default ExamInterface;
