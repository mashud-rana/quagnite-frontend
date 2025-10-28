"use client";

import React, { useState, useEffect } from "react";
import styles from "./examInterface.module.css";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { useParams } from "next/navigation";
import { useExamResultQuery } from "@/redux/features/student/exam/examApi";
import ExamQuestionNavSkeleton from "./Skeleton/ExamQuestionNavSkeleton";
import NotDataFound from "@/components/Empty/NotDataFound";

const ExamResultAnswer = () => {

  const { resultId } = useParams()
  const [questions,setQuestions] = useState([])
  const [model,setModel] = useState(null);
  const [givenQuestions,setGivenQuestions] = useState([])
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


  console.log('Response Data:', model, questions, givenQuestions);

  const totalQuestions = questions ? questions.length : 0;
  const currentQuestion = currentQusIndex + 1;
  const progress = (currentQuestion / totalQuestions) * 100;

  const [submitted, setSubmitted] = useState(false);
  const [results, setResults] = useState(Array(totalQuestions).fill(null));

  const question = {
    id: 1,
    question: "Which of the following are examples of Development?",
    options: [
      "Key (for opening door)",
      "32668 to 32667",
      "32768 to 32767",
      "Out Heart Choker Necklace Heart",
    ],
    correctAnswers: [2],
    type: "multiple",
  };



  if(isLoading || isFetching){
    return <ExamQuestionNavSkeleton />;
  }
  if(isError){
    return <NotDataFound message={`Something is wrong!! ${error?.data?.message}`} />;
  }

  return (
    <div className={styles.examContent}>
      <div style={{ position: 'fixed', bottom: 12, right: 12, width: 220, zIndex: 999 }}>
        <video src={model?.full_video_url} loop autoPlay playsInline  style={{ width: '100%', borderRadius: 6, border: '1px solid #ddd' }} />
          
        </div>
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
            {
          questions && questions.length > 0 ? 
          (
            questions.map((q, index) => (
          <div  className={styles.ic_box_container} key={index} 
          onClick={()=> clickQuestionHandler(index)}
          >
            {
          q.isCorrect === true ? (
            <FaCheck size={20} className={`${styles.correct}`} />
          ) : q.isCorrect === false ? (
            <FaTimesCircle size={20} className={`${styles.incorrect}`} />
          ) : q.isCorrect === null ? (
            <FaCheckCircle size={20} className={`${styles.skipped}`} />
          ) : null 
            }
            
              <div className={styles.statusBox}>
            <span>{index + 1}</span>
              </div>
            </div>
          ))
            )
            : null
          }
         
      </div>

      {/* Question Section */}
      <div>
        <div className={styles.questionText}>1. {question.question}</div>

  
          <div className={styles.optionsContainer}>
            {
              questions[currentQusIndex] ? 
              (
                    questions[currentQusIndex]?.answers && Object.entries(questions[currentQusIndex]?.answers).map(([key, value]) => {
                const isCorrectAnswer = questions[currentQusIndex].correctAnswer === String(key);
                const isGivenAnswer = String(questions[currentQusIndex].givenAnswer) === String(key);
                const isCorrect = isGivenAnswer && isCorrectAnswer;
                const isWrong = isGivenAnswer && !isCorrectAnswer;
                
                return (
                  <div key={key} className={`${styles.optionItem} 
                  ${isCorrect ? styles.ic_currect_bg : ''}
                  ${isWrong ? styles.ic_wrong_bg : ''}
                  ${isCorrectAnswer && !isGivenAnswer ? styles.ic_currect_bg : ''}
                  `}>
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
                      <span className={styles.optionText}>{key.toUpperCase()}. {value}</span>
                    </label>
                  </div>
                )
                    })
                  ) : null
                }
        </div>

        {/* Submit Button */}

        <h6 className={styles.ic_score}> Score: {model?.score}% - Keep Pushing!</h6>
      </div>
    </div>
  );
};

export default ExamResultAnswer;
