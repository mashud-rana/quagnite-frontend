import React from "react";
import { Skeleton, Card, Row, Col } from "antd";

const ExamCompletionCardsSkeleton = () => {
  return (
    <div style={{ padding: "24px", background: "#f5f5f5" }}>
       <style>
        {`
          .ant-skeleton-image{
                display: inline-block;
                width: -webkit-fill-available !important;
          }
                .ant-skeleton.ant-skeleton-element {
                width:100% !important;
                }
        `}
      </style>
      <Row gutter={[24, 24]}>
        {[...Array(3)].map((_, index) => (
          <Col xs={24} sm={12} lg={8} key={index}>
            <Card
              style={{
                borderRadius: "12px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              }}
              bodyStyle={{ padding: "0" }}
            >
              {/* Image */}
              <Skeleton.Image
                  active
                  style={{
                  width: "100%",
                  height: "140px",
                  borderRadius: "8px",
                  }}
              />

              {/* Content Section */}
              <div style={{ padding: "20px" }}>
                {/* Title and Status Badge */}
                <div style={{ 
                  display: "flex", 
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "12px" 
                }}>
                  <Skeleton.Input
                    active
                    size="default"
                    style={{ width: "65%", height: "20px" }}
                  />
                  <Skeleton.Button
                    active
                    size="small"
                    style={{ width: "100px", height: "24px", borderRadius: "12px" }}
                  />
                </div>

                {/* Description */}
                <Skeleton
                  active
                  title={false}
                  paragraph={{
                    rows: 3,
                    width: ["100%", "95%", "80%"]
                  }}
                  style={{ marginBottom: "16px" }}
                />

                {/* Exam ID */}
                <div style={{ marginBottom: "12px" }}>
                  <Skeleton.Input
                    active
                    size="small"
                    style={{ width: "140px", height: "16px" }}
                  />
                </div>

                {/* Completion Date */}
                <div style={{ marginBottom: "16px" }}>
                  <Skeleton.Input
                    active
                    size="small"
                    style={{ width: "180px", height: "16px" }}
                  />
                </div>

                {/* Certificate Section */}
                <div style={{ marginBottom: "16px" }}>
                  <Skeleton.Input
                    active
                    size="small"
                    style={{ width: "100px", height: "16px", marginBottom: "8px" }}
                  />
                  <Skeleton.Input
                    active
                    size="small"
                    style={{ width: "200px", height: "14px" }}
                  />
                </div>

                {/* Action Buttons */}
                <div style={{ 
                  display: "flex", 
                  gap: "12px",
                  justifyContent: "flex-end"
                }}>
                  <Skeleton.Avatar
                    active
                    size={40}
                    shape="circle"
                  />
                  <Skeleton.Avatar
                    active
                    size={40}
                    shape="circle"
                  />
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ExamCompletionCardsSkeleton;