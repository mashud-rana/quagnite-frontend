"use client";

import React, { useState, useEffect, useMemo } from "react";
import styles from "./examInterface.module.css";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { useParams } from "next/navigation";
import { useExamResultQuery } from "@/redux/features/student/exam/examApi";
import ExamQuestionNavSkeleton from "./Skeleton/ExamQuestionNavSkeleton";
import NotDataFound from "@/components/Empty/NotDataFound";
import PlyrReact from "@/components/Share/VideoPlayer/PlyrReact/PlyrReact";

const ExamResultAnswer = () => {

  const { resultId } = useParams()
  const [questions,setQuestions] = useState([])
  const [model,setModel] = useState(null);
  
  const [currentQusIndex, setCurrentQusIndex] = useState(0);

  //fetch result data api
  const { 
    data:examResultData,
    isSuccess, 
    isLoading, 
    error, 
    isError,
    refetch,
    isFetching 
  } = useExamResultQuery(resultId);

  //Set Response Data
  useEffect(()=>{
    console.log("Exam Result Data:", examResultData);
    if(isSuccess && examResultData){
      setModel(examResultData?.data)
      setQuestions(examResultData?.data?.results || [])
      // setGivenQuestions(
      //   examResultData?.data?.results?.filter(item => item.givenAnswer && item.givenAnswer != '') || []
      // )
    }
  },[isSuccess, examResultData])

  const clickQuestionHandler = (index)=>{
    setCurrentQusIndex(index)
  }

  const totalQuestions = questions ? questions.length : 0;
  const currentQuestion = currentQusIndex + 1;
  const progress = (currentQuestion / totalQuestions) * 100;

   // Plyr config
  const options = {
    controls: [
      "rewind",
      "play-large",
      "play",
      "progress",
      "current-time",
      "duration",
      "mute",
      "volume",
      "settings",
      "fullscreen",
    ],
    seekTime: 10,
  };

  const videoSrc = useMemo(
    () => ({
      type: "video",
      sources: [
        {
          src: model?.full_video_url,
          type: "video/webm",
        },
      ],
    }),
    [model?.full_video_url]
  );

  // ✅ Memoized player so it doesn't re-render when questions change
  const memoizedVideoPlayer = useMemo(
    () => (
      <div
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          width: 320,
          maxWidth: "90vw",
          zIndex: 1000,
          boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
          borderRadius: 12,
          background: "#fff",
          padding: 8,
        }}
      >
        <PlyrReact options={options} source={videoSrc} />
      </div>
    ),
    [videoSrc] // only re-render if video URL changes
  );

  if(isLoading || isFetching){
    return <ExamQuestionNavSkeleton />;
  }
  if(isError){
    return <NotDataFound message={`Something is wrong!! ${error?.data?.message}`} />;
  }

  return (
    <div className={styles.examContent}>
   
       {/* ✅ Memoized video player */}
      {memoizedVideoPlayer}

      {/* Exam Title and Info */}
      <div className={styles.examHeader}>
        <h5>{model?.exam?.title}</h5>
        <div className={styles.examInfo}>
          <span className="fw_500">
            Question {currentQuestion}/{totalQuestions}
          </span>
          <div className={styles.timer}>{model?.exam_complete_duration}</div>
        </div>
      </div>

      <div className={styles.progressBarWrapper}>
        <div
          className={styles.progressBarFill}
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className={styles.statusBoxContainer}>
        {questions && questions.length > 0
          ? questions.map((q, index) => (
              <div
                className={styles.ic_box_container}
                key={index}
                onClick={() => clickQuestionHandler(index)}
              >
                {q.isCorrect === true ? (
                  <FaCheck size={20} className={`${styles.correct}`} />
                ) : q.isCorrect === false ? (
                  <FaTimesCircle size={20} className={`${styles.incorrect}`} />
                ) : q.isCorrect === null ? (
                  <FaCheckCircle size={20} className={`${styles.skipped}`} />
                ) : null}

                <div className={styles.statusBox}>
                  <span>{index + 1}</span>
                </div>
              </div>
            ))
          : null}
      </div>

      {/* Question Section */}
      <div>
        <div className={styles.questionText}>
          {currentQuestion}. {questions[currentQusIndex]?.question}
        </div>

        <div className={styles.optionsContainer}>
          {questions[currentQusIndex]
            ? questions[currentQusIndex]?.answers &&
              Object.entries(questions[currentQusIndex]?.answers).map(
                ([key, value]) => {
                  const isCorrectAnswer =
                    questions[currentQusIndex].correctAnswer === String(key);
                  const isGivenAnswer =
                    String(questions[currentQusIndex].givenAnswer) ===
                    String(key);
                  const isCorrect = isGivenAnswer && isCorrectAnswer;
                  const isWrong = isGivenAnswer && !isCorrectAnswer;

                  return (
                    <div
                      key={key}
                      className={`${styles.optionItem} 
                      ${isCorrect ? styles.ic_currect_bg : ""}
                      ${isWrong ? styles.ic_wrong_bg : ""}
                      ${
                        isCorrectAnswer && !isGivenAnswer
                          ? styles.ic_currect_bg
                          : ""
                      }
                      `}
                    >
                      <label className={styles.optionLabel}>
                        <input
                          type="radio"
                          name="answer"
                          className={styles.optionInput}
                          value={key}
                          checked={isGivenAnswer}
                          disabled
                        />
                        <span className={styles.customCheckbox}></span>
                        <span className={styles.optionText}>
                          {key.toUpperCase()}. {value}
                        </span>
                      </label>
                    </div>
                  );
                }
              )
            : null}
        </div>

        {/* Submit Button */}
        <h6 className={styles.ic_score}>
          {" "}
          Score: {model?.score}% - Keep Pushing!
        </h6>
      </div>
    </div>
  );
};

export default ExamResultAnswer;
