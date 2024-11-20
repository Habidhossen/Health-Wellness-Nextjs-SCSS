import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import banner2 from "../../public/images/banner2.png";
import styles from "../styles/Service.module.scss";

const Service = () => {
  return (
    <section className={styles.service}>
      <div>
        <h1 className={styles.serviceTitle}>We provide...</h1>
        <h6>
          <span>
            <FaCheckCircle />
          </span>
          Personalized routine
        </h6>
        <h6>
          <span>
            <FaCheckCircle />
          </span>
          Follow-up after completing courses
        </h6>
        <hr />
        <h6>
          <span>
            <FaCheckCircle />
          </span>
          Access to additional resources
        </h6>
        <p>
          We offer access to a variety of additional resources to enhance your
          experience, including exclusive tools, guides, and support materials
          designed to help you achieve your goals more effectively.
        </p>
        <hr />
        <h6>
          <span>
            <FaCheckCircle />
          </span>
          Free community support
        </h6>
        <button className={styles.serviceButton}>
          Lear More About Our Services
        </button>
      </div>
      <div>
        <Image src={banner2} alt="banner_cover" />
      </div>
    </section>
  );
};

export default Service;
