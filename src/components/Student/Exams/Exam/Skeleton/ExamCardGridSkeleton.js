import React from "react";
import { Skeleton, Card, Row, Col } from "antd";

const ExamCardGridSkeleton = () => {
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
           
                <div style={{ 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center",
                padding: "20px"
                }}>
                <Skeleton.Image
                    active
                    style={{
                    width: "100%",
                    height: "140px",
                    borderRadius: "8px",
                    }}
                />
                </div>

                          {/* Content Section */}
              <div style={{ padding: "20px" }}>
                {/* Title and Tag */}
                <div style={{ 
                  display: "flex", 
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "12px" 
                }}>
                  <Skeleton.Input
                    active
                    size="default"
                    style={{ width: "60%", height: "20px" }}
                  />
                  <Skeleton.Input
                    active
                    size="small"
                    style={{ width: "80px", height: "18px" }}
                  />
                </div>

                {/* Description */}
                <Skeleton
                  active
                  title={false}
                  paragraph={{
                    rows: 3,
                    width: ["100%", "98%", "85%"]
                  }}
                  style={{ marginBottom: "16px" }}
                />

                {/* Meta Information Row 1 */}
                <div style={{ 
                  display: "flex", 
                  justifyContent: "space-between",
                  marginBottom: "12px" 
                }}>
                  <Skeleton.Input
                    active
                    size="small"
                    style={{ width: "110px", height: "14px" }}
                  />
                  <Skeleton.Input
                    active
                    size="small"
                    style={{ width: "100px", height: "14px" }}
                  />
                </div>

                {/* Meta Information Row 2 */}
                <div style={{ 
                  display: "flex", 
                  justifyContent: "space-between",
                  marginBottom: "16px" 
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <Skeleton.Avatar active size={16} shape="circle" />
                    <Skeleton.Input
                      active
                      size="small"
                      style={{ width: "90px", height: "14px" }}
                    />
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <Skeleton.Avatar active size={16} shape="square" />
                    <Skeleton.Input
                      active
                      size="small"
                      style={{ width: "80px", height: "14px" }}
                    />
                  </div>
                </div>

                {/* Action Button */}
                <Skeleton.Button
                  active
                  block
                  style={{
                    width: "100%",
                    height: "40px",
                    borderRadius: "6px"
                  }}
                />
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ExamCardGridSkeleton;