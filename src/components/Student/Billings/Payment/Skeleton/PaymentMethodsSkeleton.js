import React from "react";
import { Skeleton, Card, Row, Col, Divider } from "antd";

const PaymentMethodsSkeleton = () => {
  return (
    <div style={{ padding: "24px", background: "#f5f5f5" }}>
      {/* Credit Card Section */}
      <Card
        style={{
          borderRadius: "12px",
          marginBottom: "24px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        }}
      >
        <div style={{ marginBottom: "20px" }}>
          <Skeleton.Input
            active
            size="small"
            style={{ width: "120px", height: "24px", marginBottom: "16px" }}
          />
        </div>

        {/* Credit Cards Grid */}
        <Row gutter={16}>
          {[...Array(3)].map((_, index) => (
            <Col xs={24} sm={12} lg={8} key={index}>
              <Card
                bordered
                style={{
                  borderRadius: "8px",
                  border: "1px solid #e8e8e8",
                  marginBottom: "16px",
                }}
              >
                {/* Card Brand/Logo */}
                <div style={{ marginBottom: "12px" }}>
                  <Skeleton.Avatar
                    active
                    size="small"
                    shape="square"
                    style={{ width: "60px", height: "40px", borderRadius: "4px" }}
                  />
                </div>

                {/* Card Number */}
                <Skeleton.Input
                  active
                  size="small"
                  style={{ width: "100%", height: "16px", marginBottom: "8px" }}
                />
                <Skeleton.Input
                  active
                  size="small"
                  style={{ width: "80%", height: "14px", marginBottom: "8px" }}
                />

                {/* Expiry */}
                <Skeleton.Input
                  active
                  size="small"
                  style={{ width: "60%", height: "14px" }}
                />
              </Card>
            </Col>
          ))}
        </Row>

        {/* Add New Card Button */}
        <Skeleton.Button
          active
          style={{
            width: "140px",
            height: "36px",
            borderRadius: "6px",
            marginTop: "8px",
          }}
        />
      </Card>

      {/* Available Payment Methods Section */}
      <Card
        style={{
          borderRadius: "12px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        }}
      >
        <div style={{ marginBottom: "20px" }}>
          <Skeleton.Input
            active
            size="small"
            style={{ width: "200px", height: "24px" }}
          />
        </div>

        {/* Payment Method Items */}
        {[...Array(3)].map((_, index) => (
          <div key={index}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                padding: "16px 0",
              }}
            >
              {/* Payment Logo */}
              <Skeleton.Avatar
                active
                size="large"
                shape="square"
                style={{ width: "50px", height: "30px", borderRadius: "4px" }}
              />

              {/* Payment Description */}
              <Skeleton.Input
                active
                size="small"
                style={{ width: "250px", height: "16px" }}
              />
            </div>
            {index < 2 && <Divider style={{ margin: "0" }} />}
          </div>
        ))}
      </Card>
    </div>
  );
};

export default PaymentMethodsSkeleton;