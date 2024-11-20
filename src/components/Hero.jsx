import Image from "next/image";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import bannerImg from "../../public/images/banner1.png";
import styles from "../styles/Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.bannerContent}>
        <div>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
          <span>4.9 (566)</span>
        </div>
        <h1>#1 Platform Powering Health and Wellness</h1>
        <h6>
          We’re restoring home as the primary place of personal well-being
        </h6>
        <p>
          Health is not just about what you're eating. It's also about what
          you're thinking and saying
        </p>
        <button className={styles.bannerButton}>Browse Courses</button>
        <button className={styles.bannerButtonOutline}>Get Started</button>
      </div>
      <div className={styles.bannerImage}>
        <Image
          src={bannerImg}
          alt="Health and Wealth"
          placeholder="blur"
          height={760}
          width={650}
        />
      </div>
    </section>
  );
};

export default Hero;
