import {
  FaFacebook,
  FaInstagram,
  FaRss,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import styles from "../styles/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3>Categories</h3>
          <ul>
            <li>Nutrition and diet</li>
            <li>Fitness training</li>
            <li>Mindfulness</li>
            <li>Mental health</li>
            <li>Personal growth</li>
            <li>Social well-being</li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3>About</h3>
          <ul>
            <li>About us</li>
            <li>Our partners</li>
            <li>Investors</li>
            <li>Career</li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3>Resources</h3>
          <ul>
            <li>FAQ</li>
            <li>Refund policies</li>
            <li>Terms and conditions</li>
            <li>Cookie</li>
            <li>Latest posts</li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3>Support</h3>
          <ul>
            <li>Get in touch</li>
            <li>Visit our forum</li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>Join our official channels</p>
        <div className={styles.socialIcons}>
          <FaInstagram />
          <FaTwitter />
          <FaFacebook />
          <FaRss />
          <FaYoutube />
        </div>
        <p>© 2024 EduPath. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
