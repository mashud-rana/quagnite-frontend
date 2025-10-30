import React from "react";
import { Skeleton, Card, Progress } from "antd";

const ExamQuestionNavSkeleton = () => {
  return (
    <div style={{ padding: "24px", background: "#f5f5f5", minHeight: "100vh" }}>
      <Card
        style={{
          borderRadius: "12px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          maxWidth: "1200px",
          margin: "0 auto"
        }}
        bodyStyle={{ padding: "32px" }}
      >
        {/* Header Section */}
        <div style={{ 
          display: "flex", 
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "24px"
        }}>
          {/* Exam Title */}
          <Skeleton.Input
            active
            size="large"
            style={{ width: "400px", height: "32px" }}
          />

          {/* Question Counter and Timer */}
          <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            <Skeleton.Input
              active
              size="default"
              style={{ width: "120px", height: "24px" }}
            />
            <Skeleton.Button
              active
              size="large"
              style={{ width: "100px", height: "44px", borderRadius: "8px" }}
            />
          </div>
        </div>

        {/* Progress Bar */}
        <div style={{ marginBottom: "32px" }}>
          <Progress 
            percent={75} 
            showInfo={false}
            strokeColor="#1890ff"
            trailColor="#E5E7EB"
            strokeWidth={8}
          />
        </div>

        {/* Question Navigation Buttons */}
        <div style={{ 
          display: "flex", 
          gap: "12px", 
          marginBottom: "32px",
          flexWrap: "wrap",
          justifyContent: "center"
        }}>
          {[...Array(12)].map((_, index) => (
            <div key={index} style={{ textAlign: "center" }}>
              {/* Checkmark indicator */}
              <div style={{ 
                height: "20px", 
                marginBottom: "4px",
                display: "flex",
                justifyContent: "center"
              }}>
                <Skeleton.Avatar 
                  active 
                  size={16} 
                  shape="circle"
                  style={{ background: "#52c41a" }}
                />
              </div>
              
              {/* Question number button */}
              <Skeleton.Button
                active
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "8px"
                }}
              />
            </div>
          ))}
        </div>

        {/* Question Text */}
        <div style={{ marginBottom: "24px" }}>
          <Skeleton.Input
            active
            size="default"
            style={{ width: "600px", height: "20px" }}
          />
        </div>

        {/* Answer Options */}
        <div style={{ marginBottom: "40px" }}>
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              style={{
                padding: "16px",
                marginBottom: "16px",
                background: "#F9FAFB",
                border: "1px solid #E5E7EB",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                gap: "12px"
              }}
            >
              <Skeleton.Avatar active size={20} shape="square" />
              <Skeleton.Input
                active
                size="default"
                style={{ width: "350px", height: "18px" }}
              />
            </div>
          ))}
        </div>

        {/* Score/Feedback Section */}
        <div style={{ 
          textAlign: "center",
          padding: "20px",
          background: "#f0f9ff",
          borderRadius: "8px",
          border: "1px solid #bae7ff"
        }}>
          <Skeleton.Input
            active
            size="large"
            style={{ width: "300px", height: "28px" }}
          />
        </div>
      </Card>
    </div>
  );
};

export default ExamQuestionNavSkeleton;