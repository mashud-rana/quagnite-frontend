import React from "react";
import styles from "./scholarshipSponsor.module.css";
import { Col, Row } from "antd";
import img1 from "@/assets/images/apply-scholarship/scholarship-sponsor.png";
import img2 from "@/assets/images/apply-scholarship/scholarship-bg.png";
import img3 from "@/assets/images/apply-scholarship/scholarship-main-bg.png";
import Image from "next/image";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";

export default function ScholarshipSponsor() {
  return (
    <section className={`${styles.ic_scholarship_sponsor} ic_section_space`}>
      <div className="container">
        <div className={styles.ic_scholarship_sponsor_main}>
          <Row gutter={24} align="middle">
            <Col xm={24} lg={12} xl={15}>
              <CardAnimation index={0} direction="left">
                <div className={styles.ic_left}>
                  <h6 className="mb_16">CONTACT US</h6>
                  <h3 className="mb_16">Become A Sponser</h3>
                  <p className="mb-24">
                    If you would like to make a contribution to the future of
                    the technology industry in the form of a scholarship for
                    Quagnite students, we would welcome and be grateful for your
                    support. Reach out to our team for details and benefits of
                    adding your name to our list of benefactors.
                  </p>
                  <button className="ic-btn1">explore</button>
                </div>
              </CardAnimation>
            </Col>
            <Col xm={24} lg={12} xl={9}>
              <CardAnimation index={0} direction="right">
                <div className={styles.ic_right}>
                  <Image src={img1} alt="img" />
                </div>
              </CardAnimation>
            </Col>
          </Row>
          <Image src={img2} alt="img" className={styles.ic_bg_img} />
          <Image src={img3} alt="img" className={styles.ic_bg_img2} />
        </div>
      </div>
    </section>
  );
}
