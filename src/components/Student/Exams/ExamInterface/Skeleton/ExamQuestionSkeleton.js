import React from "react";
import { Skeleton, Card, Progress } from "antd";

const ExamQuestionSkeleton = () => {
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
            style={{ width: "250px", height: "32px" }}
          />

          {/* Question Counter and Timer */}
          <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            <Skeleton.Input
              active
              size="default"
              style={{ width: "100px", height: "24px" }}
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
            percent={33} 
            showInfo={false}
            strokeColor="#4F46E5"
            trailColor="#E5E7EB"
            strokeWidth={8}
          />
        </div>

        {/* Question Text */}
        <div style={{ marginBottom: "32px" }}>
          <Skeleton.Input
            active
            size="default"
            style={{ width: "400px", height: "24px" }}
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
                style={{ width: "300px", height: "18px" }}
              />
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Skeleton.Button
            active
            size="large"
            style={{ width: "160px", height: "44px", borderRadius: "8px" }}
          />
        </div>
      </Card>
    </div>
  );
};

export default ExamQuestionSkeleton;