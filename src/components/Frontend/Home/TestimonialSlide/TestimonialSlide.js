// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import styles from "./TestimonialSlider.module.css";
// import teacher1 from "@/assets/images/teachers/t1.png";
// import teacher2 from "@/assets/images/teachers/t2.png";

// const slideItems = [
//   {
//     id: 1,
//     name: "Sarah Johnson",
//     image: teacher1,
//     quote:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     id: 2,
//     name: "Michael Chen",
//     image: teacher2,
//     quote:
//       "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//   },
//   {
//     id: 3,
//     name: "Emily Davis",
//     image: teacher1,
//     quote:
//       "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//   },
//   {
//     id: 4,
//     name: "John Morris",
//     image: teacher2,
//     quote:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     id: 5,
//     name: "Lisa Anderson",
//     image: teacher1,
//     quote:
//       "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//   },
//   {
//     id: 6,
//     name: "David Wilson",
//     image: teacher2,
//     quote:
//       "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
//   },
//   {
//     id: 7,
//     name: "Rachel Brown",
//     image: teacher1,
//     quote:
//       "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.",
//   },
// ];

// const TestimonialSlide = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const totalSlides = slideItems.length;
//   const centerPosition = 3; // 4th position (0-indexed)

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % totalSlides);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [totalSlides]);

//   // Get item for any position
//   const getItemForPosition = (position) => {
//     const index = (currentIndex + position) % totalSlides;
//     return slideItems[index];
//   };

//   // Get active item (center position)
//   const activeItem = getItemForPosition(centerPosition);
//   return (
//     <div className="container">
//       <div className={styles.content}>
//         <div className={styles.testimonialQuote}>{activeItem.quote}</div>

//         <div className={styles.sliderContainer}>
//           <div className={styles.slider}>
//             {Array.from({ length: totalSlides }, (_, position) => {
//               const item = getItemForPosition(position);
//               const isCenter = position === centerPosition;

//               return (
//                 <div
//                   key={position}
//                   className={`${styles.slide} ${
//                     styles[`position${position + 1}`]
//                   } ${isCenter ? styles.slideActive : ""}`}
//                 >
//                   <div className={styles.circle}>
//                     <Image
//                       src={item.image || "/placeholder.svg"}
//                       alt={item.name}
//                       className={styles.slideImage}
//                       height={300}
//                       width={300}
//                     />
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         <div className={styles.activeName}>{activeItem.name}</div>
//       </div>
//     </div>
//   );
// };

// export default TestimonialSlide;

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./TestimonialSlider.module.css";
import teacher1 from "@/assets/images/teachers/t1.png";
import teacher2 from "@/assets/images/teachers/t2.png";
import bg from "@/assets/images/all/testi-bg.png";

// Constants
const SLIDE_INTERVAL = 3000;
const CENTER_INDEX = 3;

// Testimonials data
const testimonials = [
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

const TestimonialSlide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = testimonials.length;

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, SLIDE_INTERVAL);

    return () => clearInterval(interval);
  }, [total]);

  // Get slide item at a given offset
  const getSlideItem = (offset) => {
    return testimonials[(currentIndex + offset) % total];
  };

  const activeTestimonial = getSlideItem(CENTER_INDEX);

  return (
    <section
      className="ic_section_space_58"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <div className={styles.content}>
          {/* Quote */}
          <p className={styles.testimonialQuote}>{activeTestimonial.quote}</p>

          {/* Slider images */}
          <div className={styles.sliderContainer}>
            <div className={styles.slider}>
              {Array.from({ length: total }).map((_, position) => {
                const testimonial = getSlideItem(position);
                const isCenter = position === CENTER_INDEX;

                return (
                  <div
                    key={testimonial.id}
                    className={`${styles.slide} ${
                      styles[`position${position + 1}`] || ""
                    } ${isCenter ? styles.slideActive : ""}`}
                  >
                    <div className={styles.circle}>
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={300}
                        height={300}
                        className={styles.slideImage}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Name */}
          <div className={styles.activeName}>{activeTestimonial.name}</div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlide;
