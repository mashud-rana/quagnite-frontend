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

  const {
    activeRecordings,
    openCamera,
    startRecording,
    stopRecording,
    createRecording,
    cancelRecording,
    closeCamera ,
    clearAllRecordings
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
    await submitExam(formData).unwrap();
    
  };

  //Response examSubmit action
  useEffect(()=>{
    if(submitExamIsSuccess){
      toastSuccess('Exam submitted successfully');
     
      // web camp api hit
      closeCamera(currentRecording);
      cancelRecording(currentRecording);
      clearAllRecordings();
      setCurrentRecording(null);
      setTimeout(()=>{
        router.push(`/student/exams/progress/${examUuid}/${enrollUuid}?camera=${cameraId}&mic=${micId}`);
      },1000)
    }
    if (submitExamIsError) {
        toastError(
          submitExamError?.message || "Something is wrong. Please try again."
        );
      }
  },[submitExamIsSuccess, submitExamIsError, submitExamError])

  // Step 1: Open camera and start recording
  const startWebCamp = async () => {
    
    const recording = await createRecording();
    if (recording) await openCamera(recording.id);
    await startRecording(recording.id);
    setCurrentRecording(recording.id);
  };
 
   // ✅ Start recording when exam starts
  useEffect(() => {
      startWebCamp();
  }, []);
  

  //score calculate
  useEffect(()=>{
    setScore((correctAnswer / qusCount) * 100);
  },[correctAnswer, qusCount])

  //set Query Data
  useEffect(()=>{
    if(isSuccess){
      setQuestions(startExamData?.data?.questions || [])
      setTimer(startExamData?.data?.exam?.duration * 60 || 1800)
      setQusCount(startExamData?.data?.questions?.length || 0)
      setPassMark(startExamData?.data?.exam?.pass_mark || 0)
    }
  },[isSuccess, startExamData])

  const totalQuestions = qusCount;
  const currentQuestion = currentQusIndex + 1;
  const progress = (currentQuestion / totalQuestions) * 100;

 
  if(isLoading || isFetching){
    return <ExamQuestionSkeleton />
  }

  if(startExamData?.data?.enrollExam?.attempt >= 3){
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
            <h5>{startExamData?.data?.exam?.title || "Untitled Exam"}</h5>
            <div className={styles.examInfo}>
              <span className="fw_500">Question {currentQusIndex + 1}/{qusCount}</span>
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
              <button
                className="ic_common_primary_btn"
                disabled={!selectedAnswer || submitExamIsLoading}
                onClick={submitAnswer}
              >
                SUBMIT ANSWER 
                {
                  submitExamIsLoading && <Spin indicator={antIcon} /> 
                }
              </button>
            </div>
          </div>
        </div>
       
      }
    </>
   
  );
};

export default ExamInterface;
