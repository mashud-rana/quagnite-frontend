import React from "react";
import styles from "./subscriptions.module.css";
import Image from "next/image";
import img from "@/assets/images/all/subscription.png";

const SubscriptionsPage = () => {
  return (
    <div>
      <div className={styles.infoHeader}>
        <p className={styles.infoTitle}>Subscriptions</p>
      </div>

      <div className={styles.ic_card_container}>
        <div>
          <h6 className={styles.ic_title}>Personal Subscription</h6>
          <p className="mb-12">Valid till sept 2025</p>

          <ul className={styles.ic_list_container}>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Nulla fermentum tortor eu mauris bibendum luctus. </li>
            <li>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas.
            </li>
            <li>
              In eu mattis urna. Cras porttitor massa ipsum, sed molestie elit
              fringilla nec.
            </li>
            <li>
              Curabitur sed massa et nulla accumsan semper. Nullam id felis
              interdum, tristique tellus et, tempor leo.
            </li>
            <li>
              Donec in faucibus felis. Class aptent taciti sociosqu ad litora
              torquent per conubia nostra, per inceptos himenaeos
            </li>
          </ul>

          <div className={styles.ic_btn_container}>
            <button className={styles.ic_btn}>Buy now</button>
            <button className={styles.ic_btn}>Upgrade</button>
          </div>
        </div>

        <div className={styles.ic_img_container}>
          <Image src={img} className={styles.ic_img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SubscriptionsPage;
