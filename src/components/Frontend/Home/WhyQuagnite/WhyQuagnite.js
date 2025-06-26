import styles from "./whyQuagnite.module.css";
import img1 from "@/assets/images/all/sui1.png";
import img2 from "@/assets/images/all/sui2.png";
import img3 from "@/assets/images/all/dashboard.png";
import Image from "next/image";

const features = [
  {
    id: 1,
    title: "Education",
    description:
      "By offering tailored learning methods, Quagnite fosters a love of learning and enables every student to succeed.",
    dotColor: "#1f2937",
    isActive: false,
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
        <div>
          <div className={styles.ic_title_container}>
            <div>
              <div className={styles.ic_width}>
                <h6 className="mb_16">WHY QUAGNITE?</h6>
                <h3 className="mb_20">
                  Education <span>suitable</span> to you
                </h3>
              </div>
              <p className={styles.ic_description}>
                Quagnite offers an efficient process from education to
                employment. Join a pipeline of training and education that opens
                up opportunities for a better future.
              </p>
            </div>

            <div className={styles.ic_icon_Cards}>
              <Image
                src={img1}
                height={200}
                width={200}
                alt=""
                className={styles.ic_img1}
              />
              <Image
                className={styles.ic_img2}
                src={img2}
                height={100}
                width={100}
                alt=""
              />
            </div>
          </div>

          {/* Features Timeline */}
          <div className={styles.featuresContainer}>
            <div className={styles.timeline}>
              {features.map((feature, index) => (
                <div key={feature.id} className={styles.featureItem}>
                  <div className={styles.dotContainer}>
                    <div
                      className={`${styles.dot}`}
                      style={{ backgroundColor: feature.dotColor }}
                    />
                    {index < features.length - 1 && (
                      <div className={styles.line} />
                    )}
                  </div>
                  <div className={styles.featureContent}>
                    <h5 className={styles.ic_featureTitle}>{feature.title}</h5>
                    <p className={styles.ic_text}>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.ic_img3}>
          <Image src={img3} height={500} width={1200} alt="" />
        </div>
      </div>
    </section>
  );
}
