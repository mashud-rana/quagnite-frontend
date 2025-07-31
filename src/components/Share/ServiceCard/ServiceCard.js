"use client";
import React from "react";
import Image from "next/image";
import { Row, Col } from "antd";
import styles from "./service.module.css";

export default function ServiceCard({ data = [], buttonText = "View" }) {
  return (
    <Row gutter={24} className={styles.ic_service_item}>
      {data.map((alumni, index) => (
        <Col xs={24} sm={12} md={12} lg={8} key={index} className="mb-24">
          <div className={styles.ic_alumni_card}>
            <div className={`${styles.ic_alumni_img} mb-12`}>
              <Image src={alumni.image} alt={alumni.name} />
            </div>
            <p className="mb_16 fw_600">{alumni.name}</p>
            <p className="mb-24">{alumni.description}</p>
            <button type="default" className="ic-btn1 ic-btn2">
              {buttonText}
            </button>
          </div>
        </Col>
      ))}
    </Row>
  );
}
