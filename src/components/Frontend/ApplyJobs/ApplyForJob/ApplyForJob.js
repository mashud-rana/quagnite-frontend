import React from 'react';
import { Row, Col, Steps } from 'antd';
import styles from './applyforjob.module.css';

const stepsData = ['A', 'B', 'C']; // ইচ্ছেমতো এখান থেকে step বাড়ানো/কমানো যাবে

export default function ApplyForJob() {
  return (
    <section className={`${styles.ic_apply_for_job} ic_section_space`}>
      <div className="container">
        <h6 className="mb-35">Apply For Job</h6>
        <Row justify="center" align="middle">
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <div className={styles.ic_step}>
              <Steps
                current={1} 
                items={stepsData.map((label) => ({
                  title: label,
                  icon: <span style={{ display: 'none' }}></span>,
                }))}
              />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}
