import React from "react";
import styles from "./announcement.module.css";
import Image from "next/image";
import img from "@/assets/images/all/instractor.png";

const Announcement = () => {
  return (
    <div className={styles.announcementsContainer}>
      <div className={styles.announcementHeader}>
        <Image
          src={img}
          width={50}
          height={50}
          alt="Leslie Alexander"
          className={styles.instructorAvatar}
        />
        <div className={styles.announcementMeta}>
          <h3 className={styles.instructorName}>Leslie Alexander</h3>
          <div className={styles.announcementInfo}>
            <span className={styles.announcementText}>
              Posted an announcement
            </span>
            <span className={styles.timestamp}>10 days ago</span>
          </div>
        </div>
      </div>

      <hr className={styles.ic_hr} />

      <div className={styles.announcementContent}>
        <h2 className={styles.announcementTitle}>
          My 2022 New Year Presents in Advance
        </h2>

        <div className={styles.announcementBody}>
          <p className={styles.paragraph}>
            Hey there, I hope you are doing well. :
          </p>

          <p className={styles.paragraph}>
            Seven months back, I published my very first course on Udemy, since
            then I started this journey of creating and sharing with you, also
            listened and learned a lot from your feedback. Thank you so much for
            supporting the courses! To reward you for long-term support as an
            established student and get ready for the coming year, I hand-picked
            3 flutter development courses out of my 7 paid courses on Udemy and
            opened their 5 days FREE coupons for you. You can find topics you
            like to enroll in and start learning now for FREE if you haven&#39;t
            done yet. Please note since Udemy&#39;s IPO it has a new coupon
            policy to allow FREE coupons open to the first 1000 enrollments and
            expires in 5 days so make sure you start earlier before they expire.
          </p>

          <div className={styles.coursesList}>
            <p className={styles.courseItem}>
              1. Carousel UI from Scratch with Flutter -&gt; Enroll Here
            </p>
            <p className={styles.courseItem}>
              2. Artistic UI from Scratch with Flutter -&gt; Enroll Here
            </p>
            <p className={styles.courseItem}>
              3. Flutter Music Player App with State Management from Scratch
              -&gt; Enroll Here
            </p>
          </div>

          <p className={styles.paragraph}>
            As a bonus, I am also giving the Flutter UI Certification-Your
            Complete UI Masterclass&quot; course at a discounted price of 360
            INR (4.84$). That is 2560INR (34.4$) -&gt; 360 INR (4.84$).
          </p>

          <p className={styles.paragraph}>
            This course has 10 amazing UIs which you will be developing and
            enhancing your UI development skills in Flutter. This discounted
            price will be there for five days so make sure to enroll and enhance
            your UI development skills in flutter.
          </p>

          <p className={styles.paragraph}>
            Flutter UI Certification-Your Complete UI Masterclass -&gt; Enroll
            here
          </p>

          <div className={styles.signature}>
            <p className={styles.paragraph}>See you in class:</p>
            <p className={styles.paragraph}>Yours Truly,</p>
            <p className={styles.paragraph}>Leslie Alexander</p>
          </div>
        </div>
      </div>

      {/* Previous Announcement Button */}
      <div className={styles.announcementFooter}>
        <button className={styles.previousButton}>
          SEE PREVIOUS ANNOUNCEMENT
        </button>
      </div>
    </div>
  );
};

export default Announcement;
