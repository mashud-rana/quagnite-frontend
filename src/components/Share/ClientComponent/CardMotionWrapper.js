"use client";
import { motion } from "framer-motion";
import React from "react";

const CardMotionWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 4,
        scale: { type: "spring", bounce: 0.5, duration: 0.4 },
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 8px 24px rgba(92, 129, 247, 0.3)",
      }}
    >
      {children}
    </motion.div>
  );
};

export default CardMotionWrapper;
