import Image from "next/image";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

import {
  FaCheckCircle,
  FaClock,
  FaReadme,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";
import styles from "../styles/Courses.module.scss";

const Courses = () => {
  // Consolidated course data array
  const courses = [
    {
      id: 1,
      title: "Foundation of Sleep: Sleep Science and Sleep Disorders",
      level: "Beginner",
      category: "Nutrition and Diet",
      rating: 4.9,
      reviews: 566,
      duration: "6h 34m",
      lessons: 3,
      instructor: {
        name: "Kilian Murphe",
        image: "/images/user1.png", // Replace with actual image path
      },
      price: "$40",
      image: "/images/courses1.png", // Replace with actual image path
    },
    {
      id: 2,
      title: "Parenting in the Digital Age: Navigating Screen Time",
      level: "Intermediate",
      category: "Health and Wellness",
      rating: 4.8,
      reviews: 420,
      duration: "5h 12m",
      lessons: 4,
      instructor: {
        name: "Sarah Hopkins",
        image: "/images/user2.png",
      },
      price: "$50",
      image: "/images/courses2.png",
    },
    {
      id: 3,
      title: "Holistic Health: Integrating Mind, Body, and Spirit",
      level: "Beginner",
      category: "Nutrition and Diet",
      rating: 4.7,
      reviews: 385,
      duration: "4h 20m",
      lessons: 3,
      instructor: {
        name: "Luma Karim",
        image: "/images/user3.png",
      },
      image: "/images/courses3.png",
    },
    {
      id: 4,
      title: "Introduction to Health and Nutrition",
      level: "Beginner",
      category: "Nutrition and Diet",
      rating: 4.9,
      reviews: 540,
      duration: "6h 15m",
      lessons: 5,
      instructor: {
        name: "Kate Winslate",
        image: "/images/user4.png",
      },
      price: "$30",
      image: "/images/courses4.png",
    },
  ];

  return (
    <section className={styles.courses}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <h1>Our popular courses</h1>
          <p>
            By taking proactive steps to nurture mental health, we can enhance
            our quality of life, build resilience, and foster a sense of inner
            peace and balance.
          </p>
        </div>
        <div className={styles.headerButtons}>
          <button>
            <MdArrowBackIos />
          </button>
          <button>
            <MdArrowForwardIos />
          </button>
        </div>
      </div>

      {/* Render Course Cards */}
      <div className={styles.cardGrid}>
        {courses.map((course) => (
          <div key={course.id} className={styles.card}>
            {/* Course Image */}
            <Image
              src={course.image}
              alt={course.title}
              width={300}
              height={200}
            />
            <div className={styles.cardBody}>
              {/* Tags */}
              <div>
                <span className={styles.badge1}>{course.level}</span>
                <span className={styles.badge2}>{course.category}</span>
              </div>
              {/* Title */}
              <h2 className={styles.cardTitle}>{course.title}</h2>
              {/* Ratings */}
              <div className={styles.cardRatings}>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
                <span>
                  {course.rating} ({course.reviews})
                </span>
              </div>
              {/* Duration and Lessons */}
              <div className={styles.cardDuration}>
                <p>
                  <span>
                    <FaClock />
                  </span>
                  {course.duration}
                </p>
                <hr />
                <p>
                  <span>
                    <FaReadme />
                  </span>
                  {course.lessons} Lessons
                </p>
              </div>
              <hr className={styles.divider} />
              <div className={styles.cardFooter}>
                <div>
                  <Image
                    src={course.instructor.image}
                    alt={course.instructor.name}
                    width={40}
                    height={40}
                  />
                  <h6>{course.instructor.name}</h6>
                </div>
                {course.price ? (
                  <h4>{course.price}</h4>
                ) : (
                  <button>
                    <span>
                      <FaCheckCircle />
                    </span>
                    Enrolled
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
