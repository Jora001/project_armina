"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    subtitle: "Ohne Musik wär‘ alles nichts.\nDie Musik steckt nicht in den Noten,\n sondern in der Stille dazwischen.",
    description: "Wolfgang Amadeus Mozart",
    image: "/assets/images/dasnam.png",
  },
  {
    id: 2,
    subtitle: "Ohne Musik wär‘ alles nichts.\nDie Musik steckt nicht in den Noten,\n sondern in der Stille dazwischen.",
    description: "Wolfgang Amadeus Mozart",
    image: "/assets/images/ere.png",
  },
  {
    id: 3,
    subtitle: "Ohne Musik wär‘ alles nichts.\nDie Musik steckt nicht in den Noten,\n sondern in der Stille dazwischen.",
    description: "Wolfgang Amadeus Mozart",
    image: "/assets/images/cax.png",
  },
  {
    id: 4,
    subtitle: "Ohne Musik wär‘ alles nichts.\nDie Musik steckt nicht in den Noten,\n sondern in der Stille dazwischen.",
    description: "Wolfgang Amadeus Mozart",
    image: "/assets/images/ton.png",
  },
  {
    id: 5,
    subtitle: "Ohne Musik wär‘ alles nichts.\nDie Musik steckt nicht in den Noten,\n sondern in der Stille dazwischen.",
    description: "Wolfgang Amadeus Mozart",
    image: "/assets/images/Group80(1).png",
  },
  {
    id: 6,
    subtitle: "Ohne Musik wär‘ alles nichts.\nDie Musik steckt nicht in den Noten,\n sondern in der Stille dazwischen.",
    description: "Wolfgang Amadeus Mozart",
    image: "/assets/images/abc.png",
  },
  {
    id: 7,
    subtitle: "Ohne Musik wär‘ alles nichts.\nDie Musik steckt nicht in den Noten,\n sondern in der Stille dazwischen.",
    description: "Wolfgang Amadeus Mozart",
    image: "/assets/images/aristak.png",
  },
];

const Slider = () => {
  return (
    <div className="relative w-full h-screen">
      <Swiper
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop
        allowTouchMove
        speed={1500}
        className="mySwiper w-full h-screen"
      >
        {slides.map((slide) => (
          <SwiperSlide
            key={slide.id}
            className="relative w-full h-screen flex justify-start items-center bg-black"
          >
            <motion.img
              src={slide.image}
              alt={`Slide ${slide.id}`}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
            />

            <div className="absolute left-10 sm:left-16 md:left-24 lg:left-32 bottom-32 text-left">
              <p
                className="text-[28px] sm:text-[40px] md:text-[50px] lg:text-[60px] font-sans font-bold text-[#012347] whitespace-pre-line leading-[70px]"
                style={{
                  WebkitTextStroke: "2px #1453C9",
                  textShadow: "4px 0px 0px rgba(20, 49, 81, 1)",
                }}
              >
                {slide.subtitle}
              </p>
              <p
                className="text-[16px] sm:text-[10px] md:text-[20px] lg:text-[22px] font-sans text-[#143151]"
                style={{
                  WebkitTextStroke: "1px #1453C9",
                  textShadow: "4px 0px 0px rgba(20, 49, 81, 1)",
                }}
              >
                {slide.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-pagination absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10"></div>

      <style jsx>{`
        .swiper-pagination {
          display: flex !important;
          justify-content: center;
          align-items: center;
          bottom: 20px !important;
          position: absolute !important;
          width: auto;
          z-index: 10;
        }

        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background-color: white;
          opacity: 0.7;
          border-radius: 50%;
          transition: opacity 0.3s ease, transform 0.3s ease;
        }

        .swiper-pagination-bullet-active {
          opacity: 1;
          transform: scale(1.3);
          background-color: #c29e76;
        }
      `}</style>
    </div>
  );
};

export default Slider;
