import Image from "next/image";
import React from "react";
import styles from "./event.module.css";
import img from "@/assets/images/all/modern.png";
import { FaRegClock } from "react-icons/fa6";
import { HiOutlineCalendar } from "react-icons/hi";

const Event = () => {
  return (
    <section className="ic_section_margin_top_80 ic_section_space_top">
      <div className="container">
        <div className={styles.ic_grid}>
          <Image
            className={styles.ic_img}
            src={img}
            width={400}
            height={200}
            alt=""
          />
          <div className={styles.textContainer}>
            <div>
              <h6 className="mb_16">Event</h6>
              <h4 className="mb_20">Event Name</h4>
              <div className="mb-24">
                <p className={styles.ic_bold}>DESCRIPTION</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  dignissim dui id lobortis vulputate. Nulla sodales enim quis
                  euismod consectetur. Ut in laoreet diam, nec efficitur felis.
                  Suspendisse potenti. Pellentesque rutrum nec diam sed
                  pharetra.
                </p>
              </div>

              <div className="mb_16">
                <p className={styles.ic_bold}>Host Name</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>

              <div className="mb_16">
                <p className={styles.ic_bold}>Category</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>

              <div className="mb_16">
                <p className={styles.ic_bold}>Theme</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              </div>

              <div className="mb_16">
                <p className={styles.ic_bold}>Location</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              </div>
            </div>

            <div className={styles.ic_data_wrapper}>
              <div className={styles.ic_icon_container}>
                <FaRegClock size={19} />
                <p className={styles.ic_bold}>Date & Time</p>
              </div>

              <div className={styles.ic_strong}>
                <span>15 June 2024</span>
                <span>11:00 am</span>
              </div>

              <div className={styles.ic_icon_container}>
                <HiOutlineCalendar size={19} />
                <p className={styles.ic_bold}>Date & Time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Event;
