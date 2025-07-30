"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./newEvent.module.css";
import img from "@/assets/images/all/new-event.png";
import bg from "@/assets/images/all/new-event-bg.png";

const NewEvent = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Email submitted:", email);
    // You can add your email submission logic here
  };
  return (
    <section
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        // backgroundPosition: "center",
        // borderRadius: "16px",
      }}
    >
      <div className="container">
        <div className={styles.signupSection}>
          <div className={styles.decorativeElements}>
            <div className={styles.orangeLine1}></div>
            <div className={styles.orangeLine2}></div>
            <div className={styles.purpleCircle1}></div>
            <div className={styles.purpleCircle2}></div>
          </div>

          <div className={styles.contentWrapper}>
            <div className={styles.formColumn}>
              <h6 className="mb_16">SIGN UP</h6>
              <h4 className={styles.sectionHeading}>
                Find out when we announce new events!
              </h4>

              <form onSubmit={handleSubmit} className={styles.signupForm}>
                <div className={styles.inputWrapper}>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={styles.emailInput}
                    required
                  />
                </div>
                <div>
                  <button type="submit" className="ic_btn">
                    GET NOTIFIED
                  </button>
                </div>
              </form>
            </div>

            <div className={styles.imageColumn}>
              <div className={styles.imageContainer}>
                <Image
                  src={img}
                  alt="Smiling man with glasses holding a laptop"
                  fill
                  style={{ objectFit: "contain" }}
                  className={styles.manImage}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewEvent;
