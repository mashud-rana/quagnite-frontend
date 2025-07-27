import Image from "next/image";
import React from "react";
import styles from "./products.module.css";

const ProductCard = ({ imageSrc, title, description }) => {
  return (
    <div className={styles.productCard}>
      <div className={styles.productImageWrapper}>
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
          className={styles.productImage}
          priority
        />
      </div>
      <div className={styles.productContent}>
        <p className={styles.productTitle}>{title}</p>
        <p className={styles.productDescription}>{description}</p>
        <div>
          <button className={styles.ic_btn}>EXPLORE</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
