import React from "react";
import styles from "./skillcollapse.module.css";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";

const DaynamicCollaps = ({ index, item, activeKey, togglePanel }) => {
  return (
    <CardAnimation index={index}>
      <div className={styles.collapseItem}>
        <div
          className={`${styles.ic_collapse_header} ${
            activeKey === item.key ? styles.active : ""
          }`}
          onClick={() => togglePanel(item.key)}
        >
          <span className={styles.ic_header_text}>{item.header}</span>
          <span className={styles.ic_expand_icon}>
            {activeKey === item.key ? "−" : "+"}
          </span>
        </div>

        <div
          className={`${styles.collapseContent} ${
            activeKey === item.key ? styles.expanded : ""
          }`}
        >
          <div className={styles.ic_content_inner}>
            <p className={styles.ic_panel_content}>{item.content}</p>
          </div>
        </div>
      </div>
    </CardAnimation>
  );
};

export default DaynamicCollaps;
