import Image from "next/image";
import React from "react";
import styles from "./financing.module.css";
import img from "@/assets/images/all/financing.png";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";

const Financing = () => {
  return (
    <section>
      <div className="ic_section_space_58 radious_60 ic_bg">
        <div className="container">
          <div className={`${styles.ic_grid2}`}>
            <CardAnimation index={0} direction="up">
              <div className={styles.textContainer}>
                <h6 className="mb-24">FINANCING</h6>
                <h4 className="mb_16">
                  Sometimes you need some breathing space.
                </h4>
                <p className="mb-24">
                  Budgeting is important, but numbers can be hard. If you need
                  to arrange a payment plan, or even borrow up front, then
                  there’s a financing option here to make it work.
                </p>
                <div>
                  <button className="ic_btn">Explore</button>
                </div>
              </div>
            </CardAnimation>

            <CardAnimation index={0} direction="down">
              <Image
                className={styles.ic_img}
                src={img}
                width={400}
                height={200}
                alt=""
              />
            </CardAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Financing;
