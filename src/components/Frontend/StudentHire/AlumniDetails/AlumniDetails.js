import React from "react";
import styles from "./alumniDetails.module.css";
import Image from "next/image";
import img1 from "@/assets/images/student-hire/img1.png";
import img2 from "@/assets/images/student-hire/img2.png";
import icon1 from "@/assets/images/student-hire/icon1.png";
import icon2 from "@/assets/images/student-hire/icon2.png";
import icon3 from "@/assets/images/student-hire/icon3.png";
import icon4 from "@/assets/images/student-hire/icon4.png";
import icon5 from "@/assets/images/student-hire/icon5.png";
import { Col, Row } from "antd";
import logo from "@/assets/images/student-hire/right-icon.svg";
import rating1 from "@/assets/images/student-hire/ratings-icon1.svg";
import rating2 from "@/assets/images/student-hire/ratings-icon2.svg";
import rating3 from "@/assets/images/student-hire/govment.svg";

export default function AlumniDetails() {
  return (
    <section className={styles.ic_alumni_details}>
      <div className="container">
        <div className={styles.ic_alumni_details_main}>
          <Row gutter={24} justify="space-between">
            <Col xs={24} md={12} xl={11}>
              <div className={styles.ic_left}>
                <div className={`${styles.ic_mainImage} mb_20`}>
                  <Image src={img1} alt="img" />
                </div>
                <div className={styles.ic_subImages}>
                  <Image src={img2} alt="img" />
                  <Image src={img2} alt="img" />
                  <Image src={img2} alt="img" />
                </div>
              </div>
            </Col>
            <Col xs={24} md={12} xl={12}>
              <div className={styles.ic_right}>
                <h6 className="mb-35">Alumni Details</h6>
                <h4 className="mb-24">Mr.Lorem Ipsum Dola</h4>
                <p className={`${styles.ic_designation} mb-24`}>
                  Bio & Experience
                </p>
                <p className="mb-24">
                  John has over 10 years of experience in building scalable web
                  applications and has contributed to multiple open-source
                  projects.
                </p>

                <div className={`${styles.ic_expertise} mb-24`}>
                  <p className={`${styles.ic_designation} mb_16`}>Expertise</p>
                  <ul>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                  </ul>
                </div>

                <div className={`${styles.ic_courses} ic_section_heading`}>
                  <p className={`${styles.ic_designation} mb-24`}>
                    Completed Courses
                  </p>
                  <div className={styles.ic_courseItems}>
                    <div className={styles.ic_courseItem}>
                      <Image src={icon1} alt="icon" />
                    </div>
                    <div className={styles.ic_courseItem}>
                      <Image src={icon2} alt="icon" />
                    </div>
                    <div className={styles.ic_courseItem}>
                      <Image src={icon3} alt="icon" />
                    </div>
                    <div className={styles.ic_courseItem}>
                      <Image src={icon4} alt="icon" />
                    </div>
                    <div className={styles.ic_courseItem}>
                      <Image src={icon5} alt="icon" />
                    </div>
                  </div>
                </div>
                <div className={`${styles.ic_expertise} `}>
                  <p className={`${styles.ic_designation} mb_16`}>
                    Rated by others partners
                  </p>
                  <div className={`${styles.ic_related} ic_section_heading`}>
                    <div className={styles.ic_related_left}>
                      <Image src={logo} alt="logo" />
                    </div>
                    <div className={styles.ic_related_right}>
                      <div className="mb-6">
                        <Image src={rating1} alt="logo" />
                        <Image src={rating1} alt="logo" />
                        <Image src={rating1} alt="logo" />
                        <Image src={rating2} alt="logo" />
                        <Image src={rating2} alt="logo" />
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                      </p>
                    </div>
                  </div>
                  <div className={`${styles.ic_expertise} mb-24`}>
                    <p className={`${styles.ic_designation} mb_16`}>Industry</p>
                    <Image src={rating3} alt="icon" />
                    <p>Government</p>
                  </div>
                  <button type="submit" className="ic_btn">
                    REQUEST A RESUME
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
}
