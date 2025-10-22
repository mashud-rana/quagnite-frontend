import React from "react";
import { Skeleton, Card, Row, Col, Divider } from "antd";

const CourseDetailsSkeleton = () => {
  return (
    <div style={{ padding: "24px", background: "#f5f5f5" }}>
         <style>
        {`
          .ant-skeleton.ant-skeleton-element {
                display: inline-block;
                width: -webkit-fill-available !important;
          }
        `}
      </style>
      <Card
        style={{
          borderRadius: "12px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        }}
        bodyStyle={{ padding: "0" }}
      >
        {/* Header Section */}
        <div style={{ padding: "24px" }}>
          <Row gutter={24}>
            {/* Left: Course Info */}
            <Col xs={24} md={16}>
              {/* Course Title */}
              <Skeleton.Input
                active
                size="large"
                style={{ width: "70%", height: "32px", marginBottom: "12px" }}
              />

              {/* Author Info */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                <Skeleton.Input
                  active
                  size="small"
                  style={{ width: "100px", height: "16px" }}
                />
                <Skeleton.Input
                  active
                  size="small"
                  style={{ width: "80px", height: "16px" }}
                />
              </div>

              {/* Hero Image/Video */}
              <Skeleton.Image
                active
                style={{
                  width: "100%",
                  height: "320px",
                  borderRadius: "8px"
                }}
              />

              {/* Browse Course Button */}
              <div style={{ marginTop: "16px" }}>
                <Skeleton.Button
                  active
                  size="large"
                  style={{
                    width: "150px",
                    height: "40px",
                    borderRadius: "6px"
                  }}
                />
              </div>
            </Col>

            {/* Right: Instructor Info */}
            <Col xs={24} md={8}>
              <div style={{ 
                padding: "20px", 
                background: "#fafafa", 
                borderRadius: "8px",
                border: "1px solid #f0f0f0"
              }}>
                <Skeleton.Input
                  active
                  size="small"
                  style={{ width: "80px", height: "16px", marginBottom: "16px" }}
                />

                {/* Instructor Avatar */}
                <div style={{ textAlign: "center", marginBottom: "16px" }}>
                  <Skeleton.Avatar
                    active
                    size={80}
                    shape="circle"
                  />
                </div>

                {/* Instructor Name */}
                <div style={{ textAlign: "center", marginBottom: "8px" }}>
                  <Skeleton.Input
                    active
                    size="default"
                    style={{ width: "120px", height: "20px" }}
                  />
                </div>

                {/* Instructor Title */}
                <div style={{ textAlign: "center", marginBottom: "12px" }}>
                  <Skeleton.Input
                    active
                    size="small"
                    style={{ width: "150px", height: "14px" }}
                  />
                  <div style={{ marginTop: "6px" }}>
                    <Skeleton.Input
                      active
                      size="small"
                      style={{ width: "120px", height: "14px" }}
                    />
                  </div>
                </div>

                <Divider style={{ margin: "16px 0" }} />

                {/* Level Info */}
                <div style={{ marginBottom: "8px" }}>
                  <Skeleton.Input
                    active
                    size="small"
                    style={{ width: "100px", height: "14px" }}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </div>

        {/* Navigation Tabs */}
        <div style={{ 
          borderTop: "1px solid #f0f0f0",
          borderBottom: "1px solid #f0f0f0",
          padding: "0 24px"
        }}>
          <div style={{ 
            display: "flex", 
            gap: "32px",
            padding: "16px 0"
          }}>
            {["Course Content", "Course Overview", "Announcements", "Reviews", "Discussion", "Notes"].map((_, index) => (
              <Skeleton.Button
                key={index}
                active
                size="small"
                style={{
                  width: "100px",
                  height: "20px",
                  borderRadius: "4px"
                }}
              />
            ))}
          </div>
        </div>

        {/* Course Content Section */}
        <div style={{ padding: "24px" }}>
          {/* Total Duration */}
          <div style={{ 
            display: "flex", 
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px"
          }}>
            <Skeleton.Input
              active
              size="small"
              style={{ width: "120px", height: "16px" }}
            />
            <Skeleton.Button
              active
              size="default"
              style={{
                width: "120px",
                height: "36px",
                borderRadius: "6px"
              }}
            />
          </div>

          {/* Content Items List */}
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "16px",
                marginBottom: "12px",
                background: "#fafafa",
                borderRadius: "8px",
                border: "1px solid #f0f0f0"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <Skeleton.Avatar active size={20} shape="square" />
                <Skeleton.Input
                  active
                  size="small"
                  style={{ width: "200px", height: "16px" }}
                />
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <Skeleton.Input
                  active
                  size="small"
                  style={{ width: "50px", height: "14px" }}
                />
                <Skeleton.Avatar active size={16} shape="circle" />
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default CourseDetailsSkeleton;