import styles from "./whyQuagnite.module.css";
import img1 from "@/assets/images/all/sui1.png";
import img2 from "@/assets/images/all/sui2.png";
import Image from "next/image";

const features = [
  {
    id: 1,
    title: "Education",
    description:
      "By offering tailored learning methods, Quagnite fosters a love of learning and enables every student to succeed.",
    dotColor: "#6366f1",
    isActive: true,
  },
  {
    id: 2,
    title: "Certification",
    description:
      "The pace of tech is high. Quagnite certifications show the world competency across a broad range of high-demand subjects.",
    dotColor: "#1f2937",
    isActive: false,
  },
  {
    id: 3,
    title: "Community",
    description:
      "Stronger together. Quagnite students gain instant networking opportunities and can have their skills displayed directly to potential employers.",
    dotColor: "#1f2937",
    isActive: false,
  },
];

export default function WhyQuagniteSection() {
  return (
    <section className="ic_section_space ic_bg">
      <div className="container">
        <div className={styles.ic_title_container}>
          <div>
            <h6>WHY QUAGNITE?</h6>
            <h3 className="mb_20">
              Education <span>suitable</span> to you
            </h3>
            <p className="mb_20">
              Quagnite offers an efficient process from education to employment.
              Join a pipeline of training and education that opens up
              opportunities for a better future.
            </p>
          </div>

          <div className={styles.decorativeCards}>
            <Image
              src={img1}
              height={150}
              width={150}
              alt=""
              className={styles.ic_img1}
            />
            <Image src={img2} height={100} width={100} alt="" />
          </div>
        </div>

        {/* Features Timeline */}
        <div className={styles.featuresContainer}>
          <div className={styles.timeline}>
            {features.map((feature, index) => (
              <div key={feature.id} className={styles.featureItem}>
                <div className={styles.dotContainer}>
                  <div
                    className={`${styles.dot} ${
                      feature.isActive ? styles.activeDot : ""
                    }`}
                    style={{ backgroundColor: feature.dotColor }}
                  />
                  {index < features.length - 1 && (
                    <div className={styles.line} />
                  )}
                </div>
                <div className={styles.featureContent}>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureDescription}>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative Elements */}
      </div>
    </section>
  );
}
