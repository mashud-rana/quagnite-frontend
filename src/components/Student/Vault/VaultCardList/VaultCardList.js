"use client";
import styles from "./vaultCardList.module.css";
import certificate from "@/assets/images/all/certificate.png";
import resume from "@/assets/images/all/resume.png";
import Image from "next/image";
import bg from "@/assets/images/all/community-bg.png";
import { useRouter } from "next/navigation";

const VaultCardList = () => {
  const router = useRouter();
  return (
    <div className={styles.vaultContainer}>
      {/* Page Header */}
      <h1 className="ic_text2_36 ic_white fw_400">Vault</h1>

      {/* Main Content */}
      <div className={styles.mainContent}>
        {/* Certificates Card */}
        <div className={styles.vaultCard} onClick={() => router.push('/student/vault/certificates')}>
          <div
            className={styles.cardGradient}
            style={{ backgroundImage: `url(${bg.src})` }}
          >
            <h2 className="ic_text2_36 ic_white fw_400">Certificates</h2>

            <div className={styles.cardBottom}>
              <h3 className="ic_text2_36 ic_white fw_400">
                Recent Certificate
              </h3>
              <hr className={styles.ic_hr} />

              <div className={styles.itemDetails}>
                <div className={styles.itemInfo}>
                  <p className={styles.itemTitle}>App Development</p>
                  <div className={styles.itemMeta}>
                    <span className={styles.metaItem}>Date- 1st feb,2023</span>
                    <span className={styles.metaItem}>
                      Certificate no.-3123466
                    </span>
                  </div>
                </div>

                <Image
                  src={certificate}
                  alt="Certificate preview"
                  className={styles.previewImage}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Resumes Card */}
        <div className={styles.vaultCard} onClick={() => router.push('/student/vault/resumes')}>
          <div
            className={styles.cardGradient}
            style={{ backgroundImage: `url(${bg.src})` }}
          >
            <h2 className="ic_text2_36 ic_white fw_400">Resumes</h2>

            <div className={styles.cardBottom}>
              <h3 className="ic_text2_36 ic_white fw_400">
                Last Updated Resume
              </h3>
              <hr className={styles.ic_hr} />

              <div className={styles.itemDetails}>
                <div className={styles.itemInfo}>
                  <p className={styles.itemTitle}>Myresume123</p>
                  <div className={styles.itemMeta}>
                    <span className={styles.metaItem}>Date- 1st feb,2023</span>
                    <span className={styles.metaItem}>File type- PDF</span>
                  </div>
                </div>

                <Image
                  src={resume}
                  alt="Resume preview"
                  className={styles.previewImage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VaultCardList;
