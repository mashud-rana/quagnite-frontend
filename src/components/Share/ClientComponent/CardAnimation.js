// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// const CardAnimation = ({ children, index = 0 }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, delay: index * 0.1 }}
//       viewport={{ once: true, amount: 0.3 }}
//     >
//       {children}
//     </motion.div>
//   );
// };

// export default CardAnimation;

"use client";
import React from "react";
import { motion } from "framer-motion";
const CardAnimation = ({ children, index = 0, direction = "up" }) => {
  const getInitial = () => {
    switch (direction) {
      case "left":
        return { opacity: 0, x: -40 };
      case "right":
        return { opacity: 0, x: 40 };
      case "down":
        return { opacity: 0, y: -40 };
      default: // "up"
        return { opacity: 0, y: 40 };
    }
  };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default CardAnimation;
