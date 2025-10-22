import React from "react";
import { Skeleton, Card } from "antd";

const CourseCardListSkeleton = () => {
  return (
    <div style={{ padding: "24px", background: "#f5f5f5", maxWidth: "800px", margin: "0 auto" }}>
      {[...Array(3)].map((_, index) => (
        <Card
          key={index}
          style={{
            borderRadius: "12px",
            marginBottom: "20px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          }}
          bodyStyle={{ padding: "20px" }}
        >
          <div style={{ display: "flex", gap: "20px" }}>
            {/* Course Thumbnail */}
            <Skeleton.Image
              active
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "8px",
                flexShrink: 0
              }}
            />

            {/* Course Details */}
            <div style={{ flex: 1 }}>
              {/* Course Title */}
              <Skeleton.Input
                active
                size="default"
                style={{
                  width: "50%",
                  height: "22px",
                  marginBottom: "12px"
                }}
              />

              {/* Course Description */}
              <Skeleton
                active
                title={false}
                paragraph={{
                  rows: 3,
                  width: ["100%", "98%", "85%"]
                }}
                style={{ marginBottom: "16px" }}
              />

              {/* Course Meta Information Row 1 */}
              <div style={{ display: "flex", gap: "20px", marginBottom: "8px" }}>
                {/* Level */}
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <Skeleton.Avatar active size={14} shape="square" />
                  <Skeleton.Input active size="small" style={{ width: "60px", height: "14px" }} />
                </div>

                {/* Duration */}
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <Skeleton.Avatar active size={14} shape="circle" />
                  <Skeleton.Input active size="small" style={{ width: "40px", height: "14px" }} />
                </div>
              </div>

              {/* Course Meta Information Row 2 */}
              <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "12px" }}>
                <Skeleton.Avatar active size={14} shape="square" />
                <Skeleton.Input active size="small" style={{ width: "90px", height: "14px" }} />
              </div>

              {/* Rating and Button Row */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                {/* Star Rating */}
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <Skeleton.Input active size="small" style={{ width: "70px", height: "14px" }} />
                  <Skeleton.Input active size="small" style={{ width: "25px", height: "14px" }} />
                </div>

                {/* Action Button */}
                <Skeleton.Button
                  active
                  size="default"
                  style={{
                    width: "150px",
                    height: "36px",
                    borderRadius: "6px"
                  }}
                />
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default CourseCardListSkeleton;