import React from "react";
import { Skeleton, Row, Col, Card } from "antd";

const BootcampDetailSkeleton = () => {
  const milestones = Array.from({ length: 5 });

  return (
    <>
      <style>
        {`
          .ant-skeleton.ant-skeleton-element {
                display: inline-block;
                width: -webkit-fill-available !important;
          }
        `}
      </style>
      
      <div style={{ padding: "24px" }}>
        {/* Header Section */}
        <div style={{ marginBottom: 24 }}>
          <Skeleton.Input active size="large" style={{ width: "60%" }} />
          <div style={{ marginTop: 8 }}>
            <Skeleton.Input active size="small" style={{ width: "30%" }} />
          </div>
        </div>

        {/* Banner Image */}
        <Skeleton.Image
          active
          style={{
            width: "100%",
            height: 200,
            borderRadius: 12,
            marginBottom: 24,
            objectFit: "cover",
          }}
        />

        {/* Tab Navigation Bar */}
        <Row gutter={12} style={{ marginBottom: 24 }}>
          {["Introduction", "Course Overview", "Evaluations", "Discussions", "Notes"].map(
            (tab, i) => (
              <Col key={i}>
                <Skeleton.Button
                  active
                  size="small"
                  style={{
                    width: 120,
                    height: 36,
                    borderRadius: 8,
                  }}
                />
              </Col>
            )
          )}
        </Row>

        {/* Milestones Section */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {milestones.map((_, i) => (
            <Card
              key={i}
              bordered
              style={{
                borderRadius: 10,
                overflow: "hidden",
                boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
              }}
            >
              <Skeleton.Input
                active
                size="default"
                style={{ width: "70%", marginBottom: 10 }}
              />
              <Skeleton paragraph={{ rows: 2, width: "100%" }} active />
              <div style={{ marginTop: 12 }}>
                <Skeleton.Button
                  active
                  size="small"
                  style={{ width: 120, height: 36, borderRadius: 6 }}
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default BootcampDetailSkeleton;