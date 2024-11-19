"use client";

import Link from "next/link";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { SlHandbag } from "react-icons/sl";
import styles from "../styles/Navbar.module.scss";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navLeft}>
        <h2>Logo</h2>
      </div>

      <div className={`${styles.navCenter} ${isMenuOpen ? styles.open : ""}`}>
        <ul className={styles.navLinks}>
          <li>
            <Link href="">
              Courses <FaChevronDown />
            </Link>
          </li>
          <li>
            <Link href="">
              Instructor <FaChevronDown />
            </Link>
          </li>
          <li>
            <Link href="">
              Blogs <FaChevronDown />
            </Link>
          </li>
          <li>
            <Link href="">About</Link>
          </li>
          <li>
            <Link href="">Contact</Link>
          </li>
        </ul>
      </div>

      <div className={styles.navRight}>
        <Link href="">
          <SlHandbag />
        </Link>
        <button className={styles.button}>Login</button>
      </div>

      {/* Hamburger menu */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
    </nav>
  );
};

export default Navbar;
