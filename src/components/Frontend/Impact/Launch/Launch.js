import Image from "next/image";
import styles from "./launch.module.css";
import img1 from "@/assets/images/all/teammate.png";
import AnimateOnScroll from "@/components/Share/ClientComponent/AnimateOnScroll";

const Launch = () => {
  return (
    <section className="ic_section_space">
      <div className="container">
        <div className="ic_bg_white radious_16">
          <AnimateOnScroll>
            <div className={styles.teammateContainer}>
              {/* Left Image */}
              <div className={styles.teammateImage}>
                <Image
                  src={img1}
                  alt="Teammate"
                  width={550}
                  height={400}
                  className={styles.teammateImg}
                />
              </div>

              {/* Right Content */}
              <div className={styles.teammateContent}>
                <h6>LAUNCH YOUR CAREER</h6>
                <h4 className={styles.title}>
                  Join the ranks of Quagnite grads who are making things better
                  every day.
                </h4>
                <p>
                  A stable foundation is the most important part of a fulfilled
                  life. Quagnite can give you the skills to persevere through
                  challenges and achieve true independence, but you don’t have
                  to go alone.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Launch;
