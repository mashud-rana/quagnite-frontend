// "use client";

// import Image from "next/image";
// import styles from "./teachers.module.css";

// import teacher1 from "@/assets/images/teachers/t1.png";
// import teacher2 from "@/assets/images/teachers/t2.png";
// import teacher3 from "@/assets/images/teachers/t1.png";
// import teacher4 from "@/assets/images/teachers/t1.png";
// import teacher5 from "@/assets/images/teachers/t1.png";
// import teacher6 from "@/assets/images/teachers/t1.png";
// import teacher7 from "@/assets/images/teachers/t1.png";

// import { useEffect, useState } from "react";

// const teachersData = [
//   {
//     id: 1,
//     name: "Alice Johnson",
//     image: teacher1,
//     testimonial:
//       "Teaching has always been my passion. I love helping students discover their potential and guiding them through their learning journey.",
//   },
//   {
//     id: 2,
//     name: "John Smith",
//     image: teacher2,
//     testimonial:
//       "Innovation in education is key to preparing students for the future. I strive to make learning engaging and practical.",
//   },
//   {
//     id: 3,
//     name: "Maria Chen",
//     image: teacher3,
//     testimonial:
//       "Every student has unique strengths. My goal is to create an inclusive environment where everyone can thrive and succeed.",
//   },
//   {
//     id: 4,
//     name: "David Lee",
//     image: teacher4,
//     testimonial:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     id: 5,
//     name: "Emily Brown",
//     image: teacher5,
//     testimonial:
//       "Education is the foundation of progress. I'm committed to providing quality instruction that inspires lifelong learning.",
//   },
//   {
//     id: 6,
//     name: "Carlos Diaz",
//     image: teacher6,
//     testimonial:
//       "Technology and education go hand in hand. I focus on integrating modern tools to enhance the learning experience.",
//   },
//   {
//     id: 7,
//     name: "Sofia Kim",
//     image: teacher7,
//     testimonial:
//       "Building confidence in students is just as important as teaching curriculum. I believe in nurturing both knowledge and character.",
//   },
// ];

// const TeachersSlider = () => {
//   const [activeIndex, setActiveIndex] = useState(3); // Start with John Morris
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);

//   useEffect(() => {
//     if (!isAutoPlaying) return;

//     const interval = setInterval(() => {
//       setActiveIndex((prevIndex) => (prevIndex + 1) % teachersData.length);
//     }, 3500);

//     return () => clearInterval(interval);
//   }, [isAutoPlaying]);

//   const handleTeacherClick = (index) => {
//     setActiveIndex(index);
//     setIsAutoPlaying(false);
//     setTimeout(() => setIsAutoPlaying(true), 8000);
//   };

//   // Get 7 teachers to display (3 left, 1 center, 3 right)
//   const getVisibleTeachers = () => {
//     const visible = [];
//     const totalTeachers = teachersData.length;

//     // Positions: 1, 2, 3, 4(center), 5, 6, 7
//     for (let position = 1; position <= 7; position++) {
//       const offset = position - 4; // -3, -2, -1, 0, 1, 2, 3
//       const teacherIndex =
//         (activeIndex + offset + totalTeachers) % totalTeachers;

//       visible.push({
//         ...teachersData[teacherIndex],
//         position: position,
//         isCenter: position === 4,
//         teacherIndex: teacherIndex,
//       });
//     }

//     return visible;
//   };

//   const visibleTeachers = getVisibleTeachers();
//   const centerTeacher = visibleTeachers.find((t) => t.isCenter);

//   return (
//     <section className={styles.sliderSection}>
//       <div className={styles.container}>
//         <div className={styles.testimonialContainer}>
//           <blockquote className={styles.testimonial}>
//             {centerTeacher?.testimonial}
//           </blockquote>
//         </div>

//         <div className={styles.teachersContainer}>
//           <div className={styles.teachersTrack}>
//             {visibleTeachers.map((teacher, index) => (
//               <div
//                 key={`${teacher.id}-${teacher.position}`}
//                 className={`${styles.teacherItem} ${
//                   styles[`position${teacher.position}`]
//                 } ${teacher.isCenter ? styles.center : ""}`}
//                 onClick={() => handleTeacherClick(teacher.teacherIndex)}
//               >
//                 <div className={styles.imageContainer}>
//                   <Image
//                     src={teacher.image || "/placeholder.svg"}
//                     alt={teacher.name}
//                     className={styles.teacherImage}
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className={styles.activeTeacherName}>{centerTeacher?.name}</div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TeachersSlider;

"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import teacher1 from "@/assets/images/teachers/t1.png";
import teacher2 from "@/assets/images/teachers/t2.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";

import styles from "./teachers.module.css";
import Image from "next/image";

const teachersData = [
  {
    id: 1,
    name: "Sarah Johnson",
    image: teacher1,
    testimonial:
      "Teaching has always been my passion. I love helping students discover their potential and guiding them through their learning journey.",
  },
  {
    id: 2,
    name: "Michael Chen",
    image: teacher2,
    testimonial:
      "Innovation in education is key to preparing students for the future. I strive to make learning engaging and practical.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    image: teacher2,
    testimonial:
      "Every student has unique strengths. My goal is to create an inclusive environment where everyone can thrive and succeed.",
  },
  {
    id: 4,
    name: "John Morris",
    image: teacher2,
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 5,
    name: "Lisa Thompson",
    image: teacher2,
    testimonial:
      "Education is the foundation of progress. I'm committed to providing quality instruction that inspires lifelong learning.",
  },
  {
    id: 6,
    name: "David Park",
    image: teacher2,
    testimonial:
      "Technology and education go hand in hand. I focus on integrating modern tools to enhance the learning experience.",
  },
  {
    id: 7,
    name: "Amanda Wilson",
    image: teacher2,
    testimonial:
      "Building confidence in students is just as important as teaching curriculum. I believe in nurturing both knowledge and character.",
  },
];

export default function TeacherSlider() {
  const [activeIndex, setActiveIndex] = useState(3);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  const handleSlideClick = (index) => {
    if (swiperInstance && index !== activeIndex) {
      swiperInstance.slideToLoop(index);
    }
  };

  return (
    <section className={styles.sliderSection}>
      <div className="container">
        {/* Testimonial */}
        <div className={styles.testimonialContainer}>
          <blockquote
            className={styles.testimonial}
            key={`testimonial-${activeIndex}`}
          >
            {teachersData[activeIndex]?.testimonial}
          </blockquote>
        </div>

        {/* Swiper Carousel */}
        <div className={styles.carouselContainer}>
          {/* <Swiper
            modules={[Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView="auto"
            initialSlide={3}
            spaceBetween={30}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={600}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            onSwiper={setSwiperInstance}
            onSlideChange={handleSlideChange}
            className={styles.teacherSwiper}
          > */}

          <Swiper
            modules={[Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView="auto"
            initialSlide={4}
            spaceBetween={100}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={1000}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            onSwiper={setSwiperInstance}
            onSlideChange={handleSlideChange}
            className={styles.teacherSwiper}
          >
            {teachersData.map((teacher, index) => (
              <SwiperSlide key={teacher.id} className={styles.teacherSlide}>
                <div
                  className={`${styles.slideContent} ${
                    index === activeIndex ? styles.activeSlide : ""
                  }`}
                  onClick={() => handleSlideClick(index)}
                >
                  <div className={styles.imageWrapper}>
                    <Image
                      src={teacher.image || "/placeholder.svg"}
                      alt={teacher.name}
                      className={styles.teacherImage}
                      width={150}
                      height={150}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Active Teacher Name */}
          <div className={styles.teacherName} key={`name-${activeIndex}`}>
            {teachersData[activeIndex]?.name}
          </div>
        </div>
      </div>
    </section>
  );
}
