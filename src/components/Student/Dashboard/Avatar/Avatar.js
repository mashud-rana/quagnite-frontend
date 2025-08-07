"use client";

import React, { useState } from "react";
import styles from "./avatar.module.css";
import Image from "next/image";

export function Avatar({ src, alt = "", fallback = "", className = "" }) {
  const [imageError, setImageError] = useState(false);

  const handleError = () => {
    setImageError(true);
  };

  return (
    <div className={`${styles.avatar} ${className}`}>
      {!imageError && src ? (
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          className={styles.image}
          width={500}
          height={200}
          onError={handleError}
        />
      ) : (
        <div className={styles.fallback}>{fallback.substring(0, 2)}</div>
      )}
    </div>
  );
}
