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
  const [currentSlide, setCurrentSlide] = useState(3); // Start with index 3 (John Morris)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideItems.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.testimonialQuote}>
          {slideItems[currentSlide]?.quote}
        </div>

        <div className={styles.sliderContainer}>
          <div className={styles.slider}>
            {slideItems.map((item, index) => (
              <div
                key={item.id}
                // className={`${styles.slide}
                //  ${index === currentSlide ? styles.slideActive : ""}
                // `}
                className={`${styles.slide}
               `}
              >
                <div className={styles.circle}>
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className={styles.slideImage}
                    width={300}
                    height={300}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.activeName}>
          {slideItems[currentSlide]?.name}
        </div>
      </div>
    </div>
  );
}
