import React from "react";
import styles from "./cart.module.css";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import img from "@/assets/images/all/resume.png";
import Image from "next/image";

const Cart = () => {
  const cartItems = [
    {
      id: "1",
      title: "Blockchain Mastery",
      price: 220,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis venenatis magna. Aenean mattis id lacus at accumsan. Vestibulum non malesuada ex. Ut ultrices nulla ut tortor ullamcorper fermentum. Praesent sagittis enim sit amet ligula pharetra mattis id facilisis purus. Sed eu ante semper, varius velit vitae, sagittis turpis. Donec et posuere lectus. Praesent dignissim vulputate ipsum a molestie. Quisque ullamcorper non ligula ut tempus. Nullam tempor consectetur ultricies.",
      thumbnail: "/blockchain-course-thumb.png",
      category: "blockchain",
    },
    {
      id: "2",
      title: "Generative AI Mastery",
      price: 120,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis venenatis magna. Aenean mattis id lacus at accumsan. Vestibulum non malesuada ex. Ut ultrices nulla ut tortor ullamcorper fermentum. Praesent sagittis enim sit amet ligula pharetra mattis id facilisis purus. Sed eu ante semper, varius velit vitae, sagittis turpis. Donec et posuere lectus. Praesent dignissim vulputate ipsum a molestie. Quisque ullamcorper non ligula ut tempus. Nullam tempor consectetur ultricies.",
      thumbnail: "/ai-course-thumb.png",
      category: "ai",
    },
  ];

  return (
    <div>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <Link href="#" className={styles.ic_back_button} aria-label="Go back">
            <FaArrowLeft />
          </Link>
          <h1 className="ic_text_36">My Resume</h1>
        </div>
        <button className="ic_common_primary_btn">upload resume</button>
      </div>

      <div className={styles.cartItems}>
        {cartItems.map((item) => (
          <div key={item.id} className={styles.cartItem}>
            <div>
              <Image
                src={img}
                alt={item.title}
                className={styles.thumbnailImage}
              />
            </div>

            <div>
              <h5 className={styles.itemTitle}>{item.title}</h5>
              <div className={`${styles.itemPrice} ic_text_36`}>
                ${item.price}
              </div>
              <p className={styles.itemDescription}>{item.description}</p>
              <button className={styles.removeButton}>Remove From Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
