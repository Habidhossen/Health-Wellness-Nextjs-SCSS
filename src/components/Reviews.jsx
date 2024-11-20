"use client";

import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import User1 from "../../public/images/user1.png";
import styles from "../styles/Reviews.module.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import required modules
import { Autoplay, Pagination } from "swiper/modules";

const Reviews = () => {
  const reviews = [
    {
      name: "Kilian Murphe",
      image: User1,
      content:
        "“The mindfulness courses have helped me manage stress better and find balance in my daily life. The guided meditations are a highlight! The courses are well worth the investment and have made a positive impact on my life.",
    },
    {
      name: "Sarah Hopkins",
      image: User1,
      content:
        "“The mindfulness courses have helped me manage stress better and find balance in my daily life. The guided meditations are a highlight! The courses are well worth the investment and have made a positive impact on my life.",
    },
    {
      name: "Luma Karim",
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
      name: "Sarah Hopkins",
      image: User1,
      content:
        "“The mindfulness courses have helped me manage stress better and find balance in my daily life. The guided meditations are a highlight! The courses are well worth the investment and have made a positive impact on my life.",
    },
    {
      name: "Luma Karim",
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
      name: "Sarah Hopkins",
      image: User1,
      content:
        "“The mindfulness courses have helped me manage stress better and find balance in my daily life. The guided meditations are a highlight! The courses are well worth the investment and have made a positive impact on my life.",
    },
    {
      name: "Luma Karim",
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
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className={styles.swiper}
        breakpoints={{
          // For large screens (Desktop)
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          // For medium screens (Tablet)
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          // For small screens (Mobile)
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        }}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <div>
                  <Image
                    src={review.image}
                    alt="review"
                    width={50}
                    height={50}
                  />
                  <h5>{review.name}</h5>
                </div>
                <div className={styles.cardQuote}>
                  <FaQuoteLeft />
                </div>
              </div>
              <p>{review.content}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Reviews;
