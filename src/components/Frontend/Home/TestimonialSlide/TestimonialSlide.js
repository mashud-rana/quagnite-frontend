"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./TestimonialSlider.module.css";
import teacher1 from "@/assets/images/teachers/t1.png";
import teacher2 from "@/assets/images/teachers/t2.png";

const slideItems = [
  {
    id: 1,
    name: "Sarah Johnson",
    image: teacher1,
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    name: "Michael Chen",
    image: teacher2,
    quote:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 3,
    name: "Emily Davis",
    image: teacher1,
    quote:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: 4,
    name: "John Morris",
    image: teacher2,
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 5,
    name: "Lisa Anderson",
    image: teacher1,
    quote:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 6,
    name: "David Wilson",
    image: teacher2,
    quote:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  },
  {
    id: 7,
    name: "Rachel Brown",
    image: teacher1,
    quote:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.",
  },
];

export default function TestimonialSlider() {
  //   const [currentSlide, setCurrentSlide] = useState(3);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setCurrentSlide((prev) => (prev + 1) % slideItems.length);
  //     }, 3000);

  //     return () => clearInterval(interval);
  //   }, []);

  // ..........................................................

  //   const [currentIndex, setCurrentIndex] = useState(0);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setCurrentIndex((prev) => (prev + 1) % slideItems.length);
  //     }, 3000);

  //     return () => clearInterval(interval);
  //   }, []);

  //   const getItemForPosition = (position) => {
  //     const index = (currentIndex + position) % slideItems.length;
  //     return slideItems[index];
  //   };

  //   const activeItem = getItemForPosition(3);
  // ----------------------------------------------------------------

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = slideItems.length;
  const centerPosition = 3; // 4th position (0-indexed)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 3000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  // Get item for any position
  const getItemForPosition = (position) => {
    const index = (currentIndex + position) % totalSlides;
    return slideItems[index];
  };

  // Get active item (center position)
  const activeItem = getItemForPosition(centerPosition);

  return (
    // <div className={styles.container}>
    //   <div className={styles.content}>
    //     <div className={styles.testimonialQuote}>
    //       {slideItems[currentSlide]?.quote}
    //     </div>

    //     <div className={styles.sliderContainer}>
    //       <div className={styles.slider}>
    //         {slideItems.map((item, index) => (
    //           <div
    //             key={item.id}
    //             // className={`${styles.slide}
    //             //  ${index === currentSlide ? styles.slideActive : ""}
    //             // `}
    //             className={`${styles.slide}
    //            `}
    //           >
    //             <div className={styles.circle}>
    //               <Image
    //                 src={item.image || "/placeholder.svg"}
    //                 alt={item.name}
    //                 className={styles.slideImage}
    //                 width={300}
    //                 height={300}
    //               />
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </div>

    //     <div className={styles.activeName}>
    //       {slideItems[currentSlide]?.name}
    //     </div>
    //   </div>
    // </div>

    //   .....................................................

    // <div className={styles.container}>
    //   <div className={styles.content}>
    //     <div className={styles.testimonialQuote}>{activeItem.quote}</div>

    //     <div className={styles.sliderContainer}>
    //       <div className={styles.slider}>
    //         <div className={`${styles.slide} ${styles.position1}`}>
    //           <div className={styles.circle}>
    //             <img
    //               src={getItemForPosition(0).image || "/placeholder.svg"}
    //               alt={getItemForPosition(0).name}
    //               className={styles.slideImage}
    //             />
    //           </div>
    //         </div>

    //         <div className={`${styles.slide} ${styles.position2}`}>
    //           <div className={styles.circle}>
    //             <img
    //               src={getItemForPosition(1).image || "/placeholder.svg"}
    //               alt={getItemForPosition(1).name}
    //               className={styles.slideImage}
    //             />
    //           </div>
    //         </div>

    //         <div className={`${styles.slide} ${styles.position3}`}>
    //           <div className={styles.circle}>
    //             <img
    //               src={getItemForPosition(2).image || "/placeholder.svg"}
    //               alt={getItemForPosition(2).name}
    //               className={styles.slideImage}
    //             />
    //           </div>
    //         </div>

    //         <div
    //           className={`${styles.slide} ${styles.position4} ${styles.slideActive}`}
    //         >
    //           <div className={styles.circle}>
    //             <img
    //               src={getItemForPosition(3).image || "/placeholder.svg"}
    //               alt={getItemForPosition(3).name}
    //               className={styles.slideImage}
    //             />
    //           </div>
    //         </div>

    //         <div className={`${styles.slide} ${styles.position5}`}>
    //           <div className={styles.circle}>
    //             <img
    //               src={getItemForPosition(4).image || "/placeholder.svg"}
    //               alt={getItemForPosition(4).name}
    //               className={styles.slideImage}
    //             />
    //           </div>
    //         </div>

    //         <div className={`${styles.slide} ${styles.position6}`}>
    //           <div className={styles.circle}>
    //             <img
    //               src={getItemForPosition(5).image || "/placeholder.svg"}
    //               alt={getItemForPosition(5).name}
    //               className={styles.slideImage}
    //             />
    //           </div>
    //         </div>

    //         <div className={`${styles.slide} ${styles.position7}`}>
    //           <div className={styles.circle}>
    //             <img
    //               src={getItemForPosition(6).image || "/placeholder.svg"}
    //               alt={getItemForPosition(6).name}
    //               className={styles.slideImage}
    //             />
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     <div className={styles.activeName}>{activeItem.name}</div>
    //   </div>
    // </div>

    //   ----------------------------------------------
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.testimonialQuote}>{activeItem.quote}</div>

        <div className={styles.sliderContainer}>
          <div className={styles.slider}>
            {Array.from({ length: totalSlides }, (_, position) => {
              const item = getItemForPosition(position);
              const isCenter = position === centerPosition;

              return (
                <div
                  key={position}
                  className={`${styles.slide} ${
                    styles[`position${position + 1}`]
                  } ${isCenter ? styles.slideActive : ""}`}
                >
                  <div className={styles.circle}>
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className={styles.slideImage}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles.activeName}>{activeItem.name}</div>
      </div>
    </div>
  );
}
