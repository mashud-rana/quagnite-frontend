import React from "react";
import styles from "./success.module.css";
import Image from "next/image";
import team1 from "@/assets/images/all/team1.png";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";

const Success = () => {
  return (
    <div className="ic_section_space_top ic_white">
      <div className={styles.ic_wrapper}>
        <div className="container">
          <CardAnimation index={0} direction="up">
            <div className={styles.ic_grid}>
              <div className={styles.ic_text_wrapper}>
                <h6>SUCCESS STORIES</h6>
                <h4 className={styles.ic_title}>
                  Lorem ipsum, consecte adipiscing elit.
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  dignissim dui id lobortis vulputate. Nulla sodales enim quis
                  euismod consectetur. 
                </p>
              </div>

              <div className={styles.ic_img_wrapper}>
                <div className={`${styles.ic_image_container}`}>
                  <Image
                    src={team1}
                    alt=""
                    width={400}
                    height={300}
                    className={styles.ic_member_image}
                  />
                </div>
              </div>
            </div>
          </CardAnimation>
        </div>
      </div>
    </div>
  );
};

export default Success;
