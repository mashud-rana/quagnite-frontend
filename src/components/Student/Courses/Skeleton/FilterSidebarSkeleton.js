import React from "react";
import { Skeleton, Card, Divider } from "antd";

const FilterSidebarSkeleton = () => {
  return (
    <div style={{ padding: "16px", background: "#fff", maxWidth: "250px" }}>
      <Card
        style={{
          borderRadius: "8px",
          border: "1px solid #f0f0f0",
        }}
        bodyStyle={{ padding: "20px" }}
      >
        {/* Ways to learn Section */}
        <div style={{ marginBottom: "24px" }}>
          <Skeleton.Input
            active
            size="small"
            style={{ width: "100px", height: "18px", marginBottom: "16px" }}
          />
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              style={{
                marginBottom: "12px",
                display: "flex",
                alignItems: "center",
                gap: "8px"
              }}
            >
              <Skeleton.Avatar active size={16} shape="square" />
              <Skeleton.Input
                active
                size="small"
                style={{ width: "110px", height: "14px" }}
              />
            </div>
          ))}
        </div>

        <Divider style={{ margin: "16px 0" }} />

        {/* Skill Level Section */}
        <div style={{ marginBottom: "24px" }}>
          <Skeleton.Input
            active
            size="small"
            style={{ width: "80px", height: "18px", marginBottom: "16px" }}
          />
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              style={{
                marginBottom: "12px",
                display: "flex",
                alignItems: "center",
                gap: "8px"
              }}
            >
              <Skeleton.Avatar active size={16} shape="square" />
              <Skeleton.Input
                active
                size="small"
                style={{ width: "90px", height: "14px" }}
              />
            </div>
          ))}
        </div>

        <Divider style={{ margin: "16px 0" }} />

        {/* Subject Section */}
        <div>
          <Skeleton.Input
            active
            size="small"
            style={{ width: "70px", height: "18px", marginBottom: "16px" }}
          />
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              style={{
                marginBottom: "12px",
                display: "flex",
                alignItems: "center",
                gap: "8px"
              }}
            >
              <Skeleton.Avatar active size={16} shape="square" />
              <Skeleton.Input
                active
                size="small"
                style={{ width: "140px", height: "14px" }}
              />
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default FilterSidebarSkeleton;