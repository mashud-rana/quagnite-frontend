'use client';

import { useParams, useSearchParams } from "next/navigation";
import React,{ useEffect, useRef, useState } from "react";
import { toastError, toastSuccess } from "@/utils/helper";

import styles from "./examInterface.module.css";
import Link from "next/link";
import { useStartExamQuery } from "@/redux/features/student/exam/examApi";

const ExamInterface = () => {

  const { examUuid, enrollUuid } = useParams()
  const searchParams = useSearchParams();
  const cameraId = searchParams.get("camera");
  const micId = searchParams.get("mic");
 

  const videoRef = useRef(null);
  const recorderRef = useRef(null);
  const [chunks, setChunks] = useState([]);
  const [recording, setRecording] = useState(false);
  const [loading, setLoading] = useState(true);
  
  const [timer, setTimer] = useState(60 * 30); // 30 minutes for example
  const [questions,setQuestions] = useState([])
  const [currentQusIndex, setCurrentQusIndex] = useState(0);
  const [index, setIndex] = useState(0);
  const [qusCount, setQusCount] = useState(0);
  const [passMark, setPassMark] = useState(0);
  const [score, setScore] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [examStart, setExamStart] = useState(true);
  const [examEnd, setExamEnd] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  

  //fetch api
  const { 
    data:startExamData,
    isSuccess, 
    isLoading, 
    error, 
    refetch,
    isFetching 
  } = useStartExamQuery({examUuid, enrollUuid});

  // ✅ Timer countdown
   useEffect(() => {
    let interval;
    // if (recording && timer > 0) {
    if ( timer > 0) {
      interval = setInterval(() => setTimer(t => t - 1), 1000);
    }
    if (timer <= 0 ) {
      // stop and auto submit
      // stopRecordingAndSubmit();
    }
    return () => clearInterval(interval);
  }, [timer]);
  // }, [recording, timer]);

  // // ✅ Start camera and recording when page loads
  // useEffect(() => {
  // const startRecording = async () => {
  //   try {
  //     const constraints = {
  //       video: cameraId ? { deviceId: { exact: cameraId } } : true,
  //       audio: micId ? { deviceId: { exact: micId } } : true,
  //     };

  //     const stream = await navigator.mediaDevices.getUserMedia(constraints);
  //     if (videoRef.current) {
  //       videoRef.current.srcObject = stream;
  //     }

  //     const recorder = new MediaRecorder(stream, { mimeType: "video/webm" });
  //     recorderRef.current = recorder;

  //     recorder.ondataavailable = (e) => {
  //       if (e.data.size > 0) setChunks((prev) => [...prev, e.data]);
  //     };

      
  //     recorder.start(1000); // collect 1 second chunks
  //     // recorder.start();
  //     setRecording(true);
  //     toastSuccess("Exam recording started.");
  //   } catch (error) {
  //     toastError("Failed to access selected camera or mic.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // startRecording();

  // // 🧹 Cleanup on page leave
  // return () => {
  //   recorderRef.current?.stop();
  //   if (videoRef.current?.srcObject) {
  //     videoRef.current.srcObject.getTracks().forEach((t) => t.stop());
  //   }
  // };
  // }, [cameraId, micId]);

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

  console.log('questions', questions);
  console.log('selectedAnswer', selectedAnswer);

  
  return (
    <div className={styles.examContent}>
       <div style={{ position: 'fixed', bottom: 12, left: 12, width: 220, zIndex: 999 }}>
        <video ref={videoRef} autoPlay muted playsInline style={{ width: '100%', borderRadius: 6, border: '1px solid #ddd' }} />
      </div>
      {/* Exam Title and Info */}
      <div className={styles.examHeader}>
        <h5>{startExamData?.data?.exam?.title || "Untitled Exam"}</h5>
        <div className={styles.examInfo}>
          <span className="fw_500">Question {currentQusIndex + 1}/{qusCount}</span>
          <div className={styles.timer}>{Math.floor(timer / 60)} : {timer % 60}</div>
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
          <Link
            href="/student/exams/submit-exam"
            className="ic_common_primary_btn"
          >
            SUBMIT ANSWER
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExamInterface;
