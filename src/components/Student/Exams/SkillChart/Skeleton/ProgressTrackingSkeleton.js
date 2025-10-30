import React from "react";
import { Skeleton, Card, Row, Col } from "antd";

const ProgressTrackingSkeleton = () => {
  return (
    <div style={{ padding: "24px", background: "#f5f5f5" }}>
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
          marginBottom: "32px"
        }}>
          {/* Title */}
          <Skeleton.Input
            active
            size="large"
            style={{ width: "250px", height: "36px" }}
          />

          {/* Certificate Button */}
          <Skeleton.Button
            active
            size="large"
            style={{ width: "160px", height: "44px", borderRadius: "8px" }}
          />
        </div>

        <Row gutter={32}>
          {/* Left Column - Progress Info */}
          <Col xs={24} md={10}>
            <div style={{ 
              display: "flex", 
              flexDirection: "column",
              justifyContent: "center",
              height: "100%",
              paddingTop: "40px"
            }}>
              {/* Progress Text 1 */}
              <div style={{ marginBottom: "16px", textAlign: "center" }}>
                <Skeleton.Input
                  active
                  size="default"
                  style={{ width: "300px", height: "20px" }}
                />
              </div>

              {/* Progress Text 2 */}
              <div style={{ marginBottom: "32px", textAlign: "center" }}>
                <Skeleton.Input
                  active
                  size="default"
                  style={{ width: "220px", height: "20px" }}
                />
              </div>

              {/* Action Buttons */}
              <div style={{ 
                display: "flex", 
                justifyContent: "center",
                gap: "16px",
                marginBottom: "24px" 
              }}>
                <Skeleton.Button
                  active
                  size="large"
                  style={{ width: "140px", height: "44px", borderRadius: "8px" }}
                />
                <Skeleton.Button
                  active
                  size="large"
                  style={{ width: "180px", height: "44px", borderRadius: "8px" }}
                />
              </div>

              {/* Chances Remaining */}
              <div style={{ textAlign: "center" }}>
                <Skeleton.Input
                  active
                  size="small"
                  style={{ width: "180px", height: "18px" }}
                />
              </div>
            </div>
          </Col>

          {/* Right Column - Chart */}
          <Col xs={24} md={14}>
            <Card
              style={{
                border: "2px solid #E5E7EB",
                borderRadius: "12px",
                background: "#fff"
              }}
              bodyStyle={{ padding: "24px" }}
            >
              {/* Chart Legend */}
              <div style={{ 
                display: "flex", 
                justifyContent: "flex-end",
                gap: "20px",
                marginBottom: "20px" 
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <Skeleton.Avatar active size={12} shape="circle" />
                  <Skeleton.Input
                    active
                    size="small"
                    style={{ width: "100px", height: "14px" }}
                  />
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <Skeleton.Avatar active size={12} shape="circle" />
                  <Skeleton.Input
                    active
                    size="small"
                    style={{ width: "120px", height: "14px" }}
                  />
                </div>
              </div>

              {/* Chart Area */}
              <div style={{ 
                height: "280px",
                background: "#F9FAFB",
                borderRadius: "8px",
                padding: "20px",
                position: "relative"
              }}>
                {/* Y-axis labels */}
                <div style={{ 
                  position: "absolute",
                  left: "10px",
                  top: "20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "45px"
                }}>
                  {["300", "240", "180", "120", "60", "0"].map((label, index) => (
                    <Skeleton.Input
                      key={index}
                      active
                      size="small"
                      style={{ width: "30px", height: "12px" }}
                    />
                  ))}
                </div>

                {/* Chart bars */}
                <div style={{ 
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "space-around",
                  height: "220px",
                  paddingLeft: "50px",
                  paddingRight: "20px",
                  gap: "10px"
                }}>
                  {[220, 170, 210, 130, 270].map((height, index) => (
                    <Skeleton.Button
                      key={index}
                      active
                      block
                      style={{
                        width: "60px",
                        height: `${height}px`,
                        borderRadius: "4px 4px 0 0"
                      }}
                    />
                  ))}
                </div>

                {/* X-axis labels */}
                <div style={{ 
                  display: "flex",
                  justifyContent: "space-around",
                  paddingLeft: "50px",
                  paddingRight: "20px",
                  marginTop: "12px"
                }}>
                  {["0-10m", "20-30m", "40-50m", "60-70m", "80-100m"].map((label, index) => (
                    <Skeleton.Input
                      key={index}
                      active
                      size="small"
                      style={{ width: "50px", height: "12px" }}
                    />
                  ))}
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default ProgressTrackingSkeleton;