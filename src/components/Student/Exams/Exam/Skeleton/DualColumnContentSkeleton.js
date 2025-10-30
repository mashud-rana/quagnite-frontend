import React from "react";
import { Skeleton, Card, Row, Col } from "antd";

const DualColumnContentSkeleton = () => {
  return (
    <div style={{ padding: "24px", background: "#f5f5f5" }}>
          <style jsx>
        {`
          .ant-skeleton-image{
                display: inline-block;
                width: -webkit-fill-available !important;
          }
                .ant-skeleton.ant-skeleton-element {
                width:100% !important;
                }
                .ant-skeleton.ant-skeleton-element{}
                  width: 100% !important;
                }
            .ant-skeleton-image{
             width: 100% !important;
            }
        `}
      </style>
      <Row gutter={[24, 24]}>
        {/* Left Column - Large Card */}
        <Col xs={24} md={12}>
          <Card
            style={{
              borderRadius: "12px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}
            bodyStyle={{ padding: 0 }}
          >
            {/* Large Image */}
            <Skeleton.Image
              active
              style={{
                width: "100%",
                height: "320px",
                borderRadius: "12px 12px 0 0",
                display: "block"
              }}
            />

            {/* Content */}
            <div style={{ padding: "24px" }}>
              {/* Title and Meta */}
              <div style={{ 
                display: "flex", 
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: "12px" 
              }}>
                <Skeleton.Input
                  active
                  size="default"
                  style={{ width: "60%", height: "22px" }}
                />
                <Skeleton.Input
                  active
                  size="small"
                  style={{ width: "100px", height: "18px" }}
                />
              </div>

              {/* Description */}
              <Skeleton
                active
                title={false}
                paragraph={{
                  rows: 3,
                  width: ["100%", "95%", "70%"]
                }}
                style={{ marginBottom: "20px" }}
              />

              {/* Button */}
              <Skeleton.Button
                active
                size="large"
                style={{
                  width: "140px",
                  height: "40px",
                  borderRadius: "6px"
                }}
              />
            </div>
          </Card>
        </Col>

        {/* Right Column - Small Cards */}
        <Col xs={24} md={12}>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {[...Array(2)].map((_, index) => (
              <Card
                key={index}
                style={{
                  borderRadius: "12px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                }}
                bodyStyle={{ padding: "16px" }}
              >
                <div style={{ display: "flex", gap: "16px" }}>
                  {/* Thumbnail */}
                  <Skeleton.Image
                    active
                    style={{
                      width: "140px",
                      height: "120px",
                      borderRadius: "8px",
                      flexShrink: 0
                    }}
                  />

                  {/* Content */}
                  <div style={{ flex: 1 }}>
                    {/* Title and Meta */}
                    <div style={{ 
                      display: "flex", 
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: "10px" 
                    }}>
                      <Skeleton.Input
                        active
                        size="small"
                        style={{ width: "70%", height: "18px" }}
                      />
                      <Skeleton.Input
                        active
                        size="small"
                        style={{ width: "80px", height: "16px" }}
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
                      style={{ marginBottom: "12px" }}
                    />

                    {/* Button */}
                    <Skeleton.Button
                      active
                      size="default"
                      style={{
                        width: "130px",
                        height: "36px",
                        borderRadius: "6px"
                      }}
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default DualColumnContentSkeleton;