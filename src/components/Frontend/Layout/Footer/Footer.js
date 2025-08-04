import React from "react";
import styles from "./footer.module.css";
import img from "@/assets/images/footer-logo.png";
import Image from "next/image";
import Link from "next/link";
import { RiInstagramLine } from "react-icons/ri";
import { BsDiscord, BsTwitterX } from "react-icons/bs";

const footerData = {
  resources: [
    { name: "Press", href: "#" },
    { name: "Blogs", href: "#" },
    { name: "Wiki", href: "#" },
    { name: "Community", href: "#" },
    { name: "Events", href: "#" },
  ],
  support: [
    { name: "Help Desk", href: "#" },
    { name: "Updates", href: "#" },
    { name: "Contact Us", href: "#" },
    { name: "Submit Ticket", href: "#" },
    { name: "FAQ", href: "#" },
  ],
  quickLinks: [
    { name: "Career", href: "#" },
    { name: "Reports", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Legal", href: "#" },
    { name: "Sitemap", href: "#" },
  ],
};

const Footer = () => {
  return (
    <footer className="ic_section_space_footer ic_bg_black">
      <div className="container">
        <div className={styles.topLineWrapper}></div>
        <div className={styles.content}>
          {/* Brand Section */}
          <div className={styles.brandSection}>
            <div>
              <Link href="/">
                <Image
                  className={styles.logo}
                  src={img}
                  alt=""
                  height={49}
                  width={417}
                />
              </Link>
            </div>

            <div className={styles.socialIcons}>
              <Link href="#" className={styles.socialIcon}>
                <BsDiscord />
              </Link>
              <a href="#" className={styles.socialIcon} aria-label="Instagram">
                <RiInstagramLine />
              </a>
              <a
                href="#"
                className={styles.socialIcon}
                aria-label="X (Twitter)"
              >
                <BsTwitterX />
              </a>
            </div>

            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ut
              labore et dolore magna aliqua.
            </p>
          </div>

          {/* Links Sections */}
          <div className={styles.linksSection}>
            <div className={styles.linkColumn}>
              <h3 className={styles.columnTitle}>Resources</h3>
              <ul className={styles.linkList}>
                {footerData.resources.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className={styles.link}>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.linkColumn}>
              <h3 className={styles.columnTitle}>Support</h3>
              <ul className={styles.linkList}>
                {footerData.support.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className={styles.link}>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.linkColumn}>
              <h3 className={styles.columnTitle}>Quick Links</h3>
              <ul className={styles.linkList}>
                {footerData.quickLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className={styles.link}>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className={styles.newsletterSection}>
            <div>
              <h3 className={styles.columnTitle}>
                Subscribe to our newsletter
              </h3>
              <form className={styles.newsletterForm}>
                <input
                  type="email"
                  placeholder="Enter you mail address"
                  className={styles.emailInput}
                  required
                />
                <button type="submit" className={styles.submitButton}>
                  SUBMIT
                </button>
              </form>
            </div>

            <p className={styles.copyright}>
              © 2024 Quagnite Inc. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
