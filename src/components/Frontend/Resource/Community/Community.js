import Image from "next/image";
import React from "react";
import styles from "./community.module.css";

const Community = () => {
  const forumCards = [
    {
      id: 1,
      type: "blue",
      subtitle: "COMMUNITY FORUM",
      heading: "Lorem Ipsum Dolar",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dignissim dui id lobortis vulputate. Nulla sodales enim quis euismod consectetur. Ut in laoreet diam, nec efficitur felis. Suspendisse potenti. Pellentesque rutrum nec diam sed pharetra. Maecenas pulvinar varius efficitur. Sed iaculis condimentum semper.",
    },
    {
      id: 2,
      type: "purple",
      subtitle: "COMMUNITY FORUM",
      heading: "Lorem Ipsum Dolar",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dignissim dui id lobortis vulputate. Nulla sodales enim quis euismod consectetur. Ut in laoreet diam, nec efficitur felis. Suspendisse potenti. Pellentesque rutrum nec diam sed pharetra. Maecenas pulvinar varius efficitur. Sed iaculis condimentum semper.",
    },
    {
      id: 3,
      type: "green",
      subtitle: "COMMUNITY FORUM",
      heading: "Lorem Ipsum Dolar",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dignissim dui id lobortis vulputate. Nulla sodales enim quis euismod consectetur. Ut in laoreet diam, nec efficitur felis. Suspendisse potenti. Pellentesque rutrum nec diam sed pharetra. Maecenas pulvinar varius efficitur. Sed iaculis condimentum semper.",
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
    <section className={styles.communityForumSection}>
      <div className="container">
        <div className={styles.contentWrapper}>
          <div className={styles.imageColumn}>
            <div className={styles.imageCard}>
              <Image
                src="/images/community-discussion.png"
                alt="Two young men in discussion, one wearing plaid shirt and another in checkered shirt"
                fill
                style={{ objectFit: "cover" }}
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
                  className={`${styles.forumCard} ${
                    styles[card.type + "Card"]
                  }`}
                >
                  <p className={styles.cardSubtitle}>{card.subtitle}</p>
                  <h3 className={styles.cardHeading}>{card.heading}</h3>
                  <p className={styles.cardDescription}>{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
