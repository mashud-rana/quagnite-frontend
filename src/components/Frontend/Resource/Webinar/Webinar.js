import Image from "next/image";
import React from "react";
import styles from "./webinar.module.css";
import img from "@/assets/images/all/webinar.png";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";

const Webinar = () => {
  const events = [
    {
      id: 1,
      image: img,
      title: "Lorem Ipsum Dolar Sit Amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      image: img,
      title: "Lorem Ipsum Dolar Sit Amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
  return (
    <section className="ic_section_space_top">
      <div className="container">
        <CardAnimation index={0} direction="left">
          <div className="ic_title_see_btn_container">
            <h4>Available Scholarships</h4>
            <div>
              <button className="ic_see_all_btn">See All</button>
            </div>
          </div>
        </CardAnimation>

        {/* Events Grid */}
        <CardAnimation index={0} direction="up">
          <div className={styles.ic_grid}>
            {events.map((event) => (
              <div key={event.id} className={styles.eventCard}>
                <div className={styles.eventImageWrapper}>
                  <Image
                    src={event?.image}
                    alt="webiner"
                    fill
                    style={{ objectFit: "cover" }}
                    className={styles.eventImage}
                    priority
                  />
                </div>
                <div className={styles.eventContent}>
                  <div>
                    <p className="fw_600 mb_16">{event?.title}</p>
                    <p className="fw_300 oc">{event.description}</p>
                  </div>
                  <div>
                    <button className="ic_btn">EXPLORE</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardAnimation>
      </div>
    </section>
  );
};

export default Webinar;
