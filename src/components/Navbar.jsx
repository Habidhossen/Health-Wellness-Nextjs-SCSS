"use client";

import Link from "next/link";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { SlHandbag } from "react-icons/sl";
import styles from "../styles/Navbar.module.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        {/* Logo */}
        <div className={styles.logoContainer}>
          <Link href="/" className={styles.logo}>
            Logo
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className={styles.hamburgerMenu} onClick={toggleMenu}>
          {isOpen ? <MdClose /> : <HiOutlineMenuAlt3 />}
        </div>

        {/* Navigation Links & Login Button */}
        <div className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}>
          <div className={styles.navLinksContainer}>
            <div className={styles.centeredLinks}>
              <Link href="/" className={styles.navLink} onClick={toggleMenu}>
                Courses <FaChevronDown />
              </Link>
              <Link href="/" className={styles.navLink} onClick={toggleMenu}>
                Instructor <FaChevronDown />
              </Link>
              <Link href="/" className={styles.navLink} onClick={toggleMenu}>
                Blogs <FaChevronDown />
              </Link>
              <Link href="/" className={styles.navLink} onClick={toggleMenu}>
                About
              </Link>
              <Link href="/" className={styles.navLink} onClick={toggleMenu}>
                Contact
              </Link>
            </div>
            <Link href="" className={styles.iconButton} onClick={toggleMenu}>
              <SlHandbag />
            </Link>
            <Link href="/" className={styles.button} onClick={toggleMenu}>
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
