import Image from "next/image";
import React from "react";
import styles from "./community.module.css";
import img from "@/assets/images/all/community.png";
import bg from "@/assets/images/all/community-bg.png";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";

const Community = () => {
  const forumCards = [
    {
      id: 1,
      type: "blue",
      subtitle: "COMMUNITY FORUM",
      heading: "Lorem Ipsum Dolar",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dignissim dui id lobortis vulputate. Nulla sodales enim quis euismod consectetur. Ut in laoreet diam, nec efficitur felis. Suspendisse potenti. Pellentesque rutrum nec diam sed pharetra. Maecenas pulvinar varius efficitur. Sed iaculis condimentum semper. Nunc molestie neque nullanisl. Duis vel tellus quis sem viverra semper ac at est. Praesent in erat metus. Nulla dapibus orci vel odio ultrices, a tempus ante dictum. Nam erat felis, mattis ultrices nulla in, suscipit varius eros. In hac habitasse platea dictumst. Nulla porta in nisl et malesuada. ",
    },
    {
      id: 2,
      type: "purple",
      subtitle: "COMMUNITY FORUM",
      heading: "Lorem Ipsum Dolar",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dignissim dui id lobortis vulputate. Nulla sodales enim quis euismod consectetur. Ut in laoreet diam, nec efficitur felis. Suspendisse potenti. Pellentesque rutrum nec diam sed pharetra. Maecenas pulvinar varius efficitur. Sed iaculis condimentum semper. Nunc molestie neque nullanisl. Duis vel tellus quis sem viverra semper ac at est. Praesent in erat metus. Nulla dapibus orci vel odio ultrices, a tempus ante dictum. Nam erat felis, mattis ultrices nulla in, suscipit varius eros. In hac habitasse platea dictumst. Nulla porta in nisl et malesuada.",
    },
    {
      id: 3,
      type: "green",
      subtitle: "COMMUNITY FORUM",
      heading: "Lorem Ipsum Dolar",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dignissim dui id lobortis vulputate. Nulla sodales enim quis euismod consectetur. Ut in laoreet diam, nec efficitur felis. Suspendisse potenti. Pellentesque rutrum nec diam sed pharetra. Maecenas pulvinar varius efficitur. Sed iaculis condimentum semper. Nunc molestie neque nullanisl. Duis vel tellus quis sem viverra semper ac at est. Praesent in erat metus. Nulla dapibus orci vel odio ultrices, a tempus ante dictum. Nam erat felis, mattis ultrices nulla in, suscipit varius eros. In hac habitasse platea dictumst. Nulla porta in nisl et malesuada. ",
    },
    {
      id: 4,
      type: "orange",
      subtitle: "COMMUNITY FORUM",
      heading: "Lorem Ipsum Dolar",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dignissim dui id lobortis vulputate. Nulla sodales enim quis euismod consectetur. Ut in laoreet diam, nec efficitur felis. Suspendisse potenti. Pellentesque rutrum nec diam sed pharetra. Maecenas pulvinar varius efficitur. Sed iaculis condimentum semper.",
    },
    {
      id: 5,
      type: "teal",
      subtitle: "COMMUNITY FORUM",
      heading: "Lorem Ipsum Dolar",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dignissim dui id lobortis vulputate. Nulla sodales enim quis euismod consectetur. Ut in laoreet diam, nec efficitur felis. Suspendisse potenti. Pellentesque rutrum nec diam sed pharetra. Maecenas pulvinar varius efficitur. Sed iaculis condimentum semper.",
    },
  ];

  return (
    <section
      className="ic_section_space_58"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <CardAnimation index={1} direction="up">
          <div className={styles.contentWrapper}>
            <div className={styles.imageColumn}>
              <div className={styles.imageCard}>
                <Image
                  src={img}
                  alt="Two young men in discussion, one wearing plaid shirt and another in checkered shirt"
                  // fill
                  // style={{ objectFit: "cover" }}
                  className={styles.communityImage}
                  priority
                />
              </div>
            </div>

            <div className={styles.contentColumn}>
              <div className={styles.scrollableContainer}>
                {forumCards.map((card) => (
                  <div
                    key={card.id}
                    // className={`${styles.forumCard} ${
                    //   styles[card.type + "Card"]
                    // }`}

                    className={`${styles.forumCard} 
                  }`}
                  >
                    <h6 className="mb-12">{card.subtitle}</h6>
                    <h4 className="mb_16">{card.heading}</h4>
                    <p>{card.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardAnimation>
      </div>
    </section>
  );
};

export default Community;
