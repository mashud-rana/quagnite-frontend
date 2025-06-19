"use client";
import React, { useState } from "react";
import styles from "./header.module.css";
import {
  FaSearch,
  FaShoppingCart,
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import Link from "next/link";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [assistOpen, setAssistOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const toggleAssist = () => setAssistOpen(!assistOpen);

  return (
    <header className="container">
      <div className={styles.ic_header}>
        {/* Logo */}
        <div className={styles.ic_logo}>
          <Image src={logo} height={49} width={217} alt="logo"></Image>
        </div>

        {/* Navigation */}
        <nav className={`${styles.nav} ${mobileMenuOpen ? styles.open : ""}`}>
          <ul className={styles.menu}>
            <li>
              <Link href="#">About Us</Link>
            </li>
            <li>
              <Link href="#">Partner</Link>
            </li>
            <li className={styles.dropdown}>
              <button className={styles.dropdownBtn} onClick={toggleAssist}>
                Assist
                <FaChevronDown
                  className={`${styles.arrow} ${
                    assistOpen ? styles.rotate : ""
                  }`}
                />
              </button>
              {assistOpen && (
                <ul className={styles.submenu}>
                  <li>
                    <Link href="#">Submenu 1</Link>
                  </li>
                  <li>
                    <Link href="#">Submenu 2</Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a href="#">Index</a>
            </li>

            <li className={styles.ic_organisation_show}>
              <span className={styles.type}>INDIVIDUAL</span>
              <span className={styles.pipe}>|</span>
              <span className={styles.type}>ORGANISATION</span>
            </li>
          </ul>
        </nav>

        {/* Actions */}
        <div className={styles.actions}>
          <div className={styles.ic_individual}>
            <span className={styles.type}>INDIVIDUAL</span>
            <span className={styles.pipe}>|</span>
            <span className={styles.type}>ORGANISATION</span>
          </div>
          <FaSearch className={styles.icon} />
          <FaShoppingCart className={styles.icon} />
          <button className={styles.loginBtn}>Login</button>
          <button className={styles.mobileToggle} onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
