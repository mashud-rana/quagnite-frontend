import React from "react";
import { Menu, Dropdown, Button } from "antd";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  DownOutlined,
} from "@ant-design/icons";
import styles from "./header.module.css";
import Link from "next/link";

const menuItems = [
  {
    key: "about",
    label: <a href="#">About Us</a>,
  },
  {
    key: "partner",
    label: <a href="#">Partner Assist</a>,
  },
  {
    key: "assist",
    label: (
      <Dropdown
        menu={{
          items: [
            {
              key: "assist1",
              label: <a href="#">Assist Option 1</a>,
            },
            {
              key: "assist2",
              label: <a href="#">Assist Option 2</a>,
            },
          ],
        }}
        trigger={["click"]}
      >
        <span>
          Assist <DownOutlined />
        </span>
      </Dropdown>
    ),
  },
  {
    key: "index",
    label: <a href="#">Index</a>,
  },
];

const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.navbar}>
        {/* Logo */}
        <div className={styles.logo}>
          <Link href="/">LOGO</Link>
        </div>

        {/* Menu */}
        <div className={styles.menuCenter}>
          <Menu mode="horizontal" selectable={false} items={menuItems} />
        </div>

        {/* Right Section */}
        <div className={styles.rightSection}>
          <span className={styles.switchText}>INDIVIDUAL</span> |
          <span className={styles.switchText}>ORGANISATION</span>
          <SearchOutlined className={styles.icon} />
          <ShoppingCartOutlined className={styles.icon} />
          <Button type="primary" className={styles.loginBtn}>
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
