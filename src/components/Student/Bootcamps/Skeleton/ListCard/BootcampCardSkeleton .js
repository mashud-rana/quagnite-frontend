import React from "react";
import { Row, Col, Card, Skeleton, Button } from "antd";

const BootcampCardSkeleton  = () => {
  const items = Array.from({ length: 6 });

  return (
    <Row gutter={[24, 24]}>
      {items.map((_, i) => (
        <Col xs={24} sm={12} md={8} key={i}>
          <Card
            bordered
            style={{
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}
            cover={
              <Skeleton.Image
                active
                style={{
                  width: "100%",
                  height: 160,
                  borderRadius: "8px 8px 0 0",
                  objectFit: "cover",
                }}
              />
            }
          >
            <Skeleton active paragraph={{ rows: 2 }} title={true} />

            <div style={{ marginTop: "16px" }}>
              <Skeleton.Button
                active
                style={{
                  width: 140,
                  height: 36,
                  borderRadius: "8px",
                }}
              />
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default BootcampCardSkeleton ;
