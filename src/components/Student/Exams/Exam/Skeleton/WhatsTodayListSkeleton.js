import React from "react";
import { Skeleton, Card } from "antd";

const WhatsTodayListSkeleton = () => {
  return (
    <div style={{ padding: "24px", background: "#f5f5f5" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Section Title */}
        <div style={{ marginBottom: "24px" }}>
          <Skeleton.Input
            active
            size="large"
            style={{ width: "150px", height: "32px" }}
          />
        </div>

        {/* List Items */}
        {[...Array(3)].map((_, index) => (
          <Card
            key={index}
            style={{
              borderRadius: "12px",
              marginBottom: "20px",
              boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
            }}
            bodyStyle={{ padding: "24px" }}
          >
            <div style={{ display: "flex", gap: "20px" }}>
              {/* Thumbnail Image */}
              <Skeleton.Image
                active
                style={{
                  width: "160px",
                  height: "140px",
                  borderRadius: "8px",
                  flexShrink: 0
                }}
              />

              {/* Content Section */}
              <div style={{ flex: 1 }}>
                {/* Title */}
                <Skeleton.Input
                  active
                  size="default"
                  style={{
                    width: "40%",
                    height: "24px",
                    marginBottom: "16px"
                  }}
                />

                {/* Description Paragraphs */}
                <Skeleton
                  active
                  title={false}
                  paragraph={{
                    rows: 5,
                    width: ["100%", "100%", "98%", "95%", "85%"]
                  }}
                />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default WhatsTodayListSkeleton;