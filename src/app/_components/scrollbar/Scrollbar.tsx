"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import Styles from "./Scrollbar.module.scss";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

const Scrollbar = () => {
  const cards = [
    {
      id: 1,
      title: "Product 1",
      imageUrl:
        "https://m.media-amazon.com/images/I/61SD6NfzdpL._AC_UL320_.jpg",
      category: "jacket",
    },
    {
      id: 4,
      title: "Product 4",
      imageUrl:
        "https://m.media-amazon.com/images/I/81zszsf9IWL._AC_UL320_.jpg",
    },
    {
      id: 7,
      title: "Product 4",
      imageUrl:
        "https://m.media-amazon.com/images/I/71f9x1YGVuL._AC_UL320_.jpg",
    },
    {
      id: 2,
      title: "Product 2",
      imageUrl:
        "https://m.media-amazon.com/images/I/617PqifhwSL._AC_UL320_.jpg",
    },
    {
      id: 7,
      title: "Product 4",
      imageUrl:
        "https://m.media-amazon.com/images/I/81DUo3Z7NmL._AC_UL320_.jpg",
    },
    {
      id: 5,
      title: "Product 4",
      imageUrl:
        "https://m.media-amazon.com/images/I/71FATuUg6KL._AC_UL320_.jpg",
    },
    {
      id: 6,
      title: "Product 4",
      imageUrl:
        "https://m.media-amazon.com/images/I/81Fih1Bai-L._AC_UL320_.jpg",
    },
    {
      id: 7,
      title: "Product 4",
      imageUrl:
        "https://m.media-amazon.com/images/I/71aplh5AFZL._AC_UL320_.jpg",
    },
    {
      id: 3,
      title: "Product 3",
      imageUrl:
        "https://m.media-amazon.com/images/I/61+vlw4aZaL._AC_UL320_.jpg",
    },
  ];

  return (
  <div className={Styles.scrollbarContainer}>
      <h2 className={Styles.heading}>New Arrivals</h2>
      <div className={Styles.swiperWrapper}>
        <Swiper
        loop={true}
          modules={[Autoplay]}
               autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 100,
            },
          }}
        >
          {cards.map((card) => (
            <SwiperSlide key={card.id} className={Styles.swiperSlide}>
              <div className={Styles.card}>
                <div className={Styles.imageWrapper}>
                  <Image
                    src={card.imageUrl}
                    alt={card.title}
                  
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

 

export default Scrollbar;
