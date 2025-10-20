import React from "react";
import { Skeleton, Card } from "antd";

const NotificationSkeleton = () => {
  return (
    <div style={{ padding: "24px", background: "#f5f5f5" }}>
      {[...Array(3)].map((_, index) => (
        <Card
          key={index}
          style={{
            borderRadius: "12px",
            marginBottom: "24px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          }}
          bodyStyle={{ padding: "24px" }}
        >
          <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
            {/* Avatar/Thumbnail */}
            <Skeleton.Avatar
              active
              size={100}
              shape="square"
              style={{ 
                borderRadius: "8px",
                flexShrink: 0
              }}
            />

            {/* Content Section */}
            <div style={{ flex: 1 }}>
              {/* Title and Date Row */}
              <div style={{ 
                display: "flex", 
                justifyContent: "space-between", 
                alignItems: "flex-start",
                marginBottom: "12px" 
              }}>
                {/* Title */}
                <Skeleton.Input
                  active
                  size="default"
                  style={{ 
                    width: "60%", 
                    height: "24px"
                  }}
                />

                {/* Date */}
                <Skeleton.Input
                  active
                  size="small"
                  style={{ 
                    width: "100px", 
                    height: "20px"
                  }}
                />
              </div>

              {/* Description Paragraph */}
              <Skeleton
                active
                title={false}
                paragraph={{
                  rows: 3,
                  width: ["100%", "98%", "85%"]
                }}
                style={{ marginBottom: "16px" }}
              />

              {/* See More Button */}
              <Skeleton.Button
                active
                size="default"
                style={{
                  width: "100px",
                  height: "36px",
                  borderRadius: "6px"
                }}
              />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default NotificationSkeleton;