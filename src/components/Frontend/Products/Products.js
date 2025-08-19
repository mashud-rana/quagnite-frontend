import React from "react";
import styles from "./products.module.css";
import ProductCard from "./ProductCard";
import img from "@/assets/images/all/product.png";

const Products = ({ title }) => {
  const products = [
    {
      id: 1,
      image: img,
      title: "Lorem Ipsum Dolar Sit Amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      isPrimary: true,
    },
    {
      id: 2,
      image: img,
      title: "Lorem Ipsum Dolar Sit Amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      isPrimary: false,
    },
    {
      id: 3,
      image: img,
      title: "Lorem Ipsum Dolar Sit Amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      isPrimary: false,
    },
    {
      id: 4,
      image: img,
      title: "Lorem Ipsum Dolar Sit Amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      isPrimary: false,
    },
    {
      id: 5,
      image: img,
      title: "Lorem Ipsum Dolar Sit Amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      isPrimary: false,
    },
    {
      id: 6,
      image: img,
      title: "Lorem Ipsum Dolar Sit Amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      isPrimary: false,
    },
  ];

  return (
    <section className="ic_section_space_top">
      <div className={styles.ic_wrapper}>
        <div className="container">
          <div className={styles.productsSection}>
            <div className={styles.sidebar}>
              <h4 className={styles.sidebarHeading}>{title}</h4>
              <div className={styles.filterGroup}>
                <select className={styles.selectDropdown}>
                  <option value="">Price</option>
                  <option value="low-to-high">Low to High</option>
                  <option value="high-to-low">High to Low</option>
                </select>

                <select className={styles.selectDropdown}>
                  <option value="">School</option>
                  <option value="school-a">School A</option>
                  <option value="school-b">School B</option>
                </select>

                <select className={styles.selectDropdown}>
                  <option value="">Industry</option>
                  <option value="tech">Tech</option>
                  <option value="finance">Finance</option>
                </select>

                <select className={styles.selectDropdown}>
                  <option value="">Difficulty level</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>

                <select className={styles.selectDropdown}>
                  <option value="">Duration</option>
                  <option value="short">Short</option>
                  <option value="medium">Medium</option>
                  <option value="long">Long</option>
                </select>

                <select className={styles.selectDropdown}>
                  <option value="">Type</option>
                  <option value="online">Online</option>
                  <option value="in-person">In-person</option>
                </select>
              </div>
            </div>
            <div className={styles.productGrid}>
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  imageSrc={product.image}
                  title={product.title}
                  description={product.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
