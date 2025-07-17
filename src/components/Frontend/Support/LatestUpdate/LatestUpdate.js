import React from "react";
import styles from "./latestUpsate.module.css";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";
import bg from "@/assets/images/all/latest-update-bg.png";

const LatestUpdate = () => {
  const datas = [
    {
      id: 1,
      title: "Lorem Ipsum dolar sit amwr",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ante tincidunt, aliquet erat non, faucibus libero. Donec laoreet elementum condimentum. Pellentesque ornare rhoncus venenatis. Sed massa est, sodales vel posuere a, fringilla in augue. In viverra mattis sem in elementum. Fusce ac erat est. Etiam vel justo dignissim, lacinia erat ut, fringilla est. Nulla tristique molestie neque at interdum.",
    },

    {
      id: 2,
      title: "Lorem Ipsum dolar sit amwr",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ante tincidunt, aliquet erat non, faucibus libero. Donec laoreet elementum condimentum. Pellentesque ornare rhoncus venenatis. Sed massa est, sodales vel posuere a, fringilla in augue. In viverra mattis sem in elementum. Fusce ac erat est. Etiam vel justo dignissim, lacinia erat ut, fringilla est. Nulla tristique molestie neque at interdum.",
    },
  ];
  return (
    <section className="ic_section_space">
      <div className="container">
        <div className={styles.ic_flex}>
          <h6>Latest updates</h6>
          <button className={styles.ic_btn}>See all</button>
        </div>

        <div className={styles.ic_grid}>
          {datas.map((data, index) => (
            <CardAnimation index={index} key={data?.id}>
              <div className={styles.ic_card}>
                <h4 className="mb_16">{data?.title}</h4>
                <p className={styles.ic_des}>{data?.des}</p>
              </div>
            </CardAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestUpdate;
