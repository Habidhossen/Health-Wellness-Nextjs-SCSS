import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import User1 from "../../public/images/user1.png";
import styles from "../styles/Reviews.module.scss";

const Reviews = () => {
  const reviews = [
    {
      name: "Kilian Murphe",
      image: User1,
      content:
        "“The mindfulness courses have helped me manage stress better and find balance in my daily life. The guided meditations are a highlight! The courses are well worth the investment and have made a positive impact on my life.",
    },
    {
      name: "Kilian Murphe",
      image: User1,
      content:
        "“The mindfulness courses have helped me manage stress better and find balance in my daily life. The guided meditations are a highlight! The courses are well worth the investment and have made a positive impact on my life.",
    },
    {
      name: "Kilian Murphe",
      image: User1,
      content:
        "“The mindfulness courses have helped me manage stress better and find balance in my daily life. The guided meditations are a highlight! The courses are well worth the investment and have made a positive impact on my life.",
    },
  ];

  return (
    <section className={styles.reviews}>
      <h1 className={styles.title}>
        Learners love EduPath. See why they rate us 4.9 out of 5
      </h1>
      <div className={styles.cardContainer}>
        {reviews.map((review, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardHeader}>
              <div>
                <Image src={review.image} alt="review" width={50} height={50} />
                <h5>{review.name}</h5>
              </div>
              <div className={styles.cardQuote}>
                <FaQuoteLeft />
              </div>
            </div>
            <p>{review.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
