"use client"; // ❗ Անհրաժեշտ է, որպեսզի `useState`-ը աշխատի

import React, { useState } from "react";
import { Cormorant_Garamond, Karla } from "next/font/google";
import Image from "next/image";
import Form from "@/components/form";
import { motion } from "framer-motion";
import { Footer } from "@/components";

const my_font = Cormorant_Garamond({
  weight: "400",
  subsets: ["latin"],
});
const my_font2 = Karla({
  weight: "400",
  subsets: ["latin"],
});

const Stimmbildung = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");

  const openModal = (src: string) => {
    setVideoSrc(src);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setVideoSrc("");
  };

  return (
    <motion.main
      className="bg-maincolor min-h-screen w-full flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="relative w-full">
        <Image
          src="/assets/images/schuller_background.svg"
          width={1540}
          height={353}
          alt="bg"
          className="w-full h-auto object-cover"
        />
        <motion.div
          className={`${my_font.className} absolute top-1/2 left-[5%] sm:left-[7%] md:left-[10%] transform -translate-y-1/2 max-w-[90%] lg:max-w-[50%]`}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <span className="text-[#C29E76] text-[4vw] sm:text-[3vw] md:text-[2vw] lg:text-[28px] leading-tight block">
            Schule für Musik & Kunst
          </span>
          <span className="font-extrabold text-[#ffffff] text-[5vw] sm:text-[7vw] md:text-[5vw] lg:text-[50px] leading-tight block">
            Stimmbildung
          </span>
        </motion.div>
      </div>

      <motion.div
        className={`${my_font2.className} text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 p-[20px] sm:p-[40px] md:p-[60px] lg:p-[90px]`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        {[
          "/assets/images/pic_1_schuller.svg",
          "/assets/images/pic_2_schuller.svg",
          "/assets/images/pic_3_schuller.svg",
          "/assets/images/pic_4_schuller.svg",
          "/assets/images/pic_5_schuller.svg",
          "/assets/images/pic_6_schuller.svg",
        ].map((src, index) => (
          <motion.div
            key={index}
            className="relative w-full cursor-pointer"
            onClick={() => openModal(`/assets/videos/video_${index + 1}.mp4`)}
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src={src}
              width={411}
              height={278}
              alt="pic"
              className="w-full h-auto filter brightness-[45%] rounded-lg"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <Image
                src="/assets/images/play_logo.svg"
                width={40}
                height={40}
                alt="Play"
                className="mb-2"
              />
              <span className="text-[14px] sm:text-[16px] md:text-[18px]">
                Jetzt Spielen
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="flex justify-center mt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <button className="border-[#1E2B3B] border-solid border-[1px] px-6 py-2 text-[#1E2B3B] font-bold rounded-md transition-all hover:bg-[#1E2B3B] hover:text-white">
          Alles sehen
        </button>
      </motion.div>

      <motion.div
        className="mt-10 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      ></motion.div>

      {isModalOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="relative w-[90%] md:w-[70%] lg:w-[50%] bg-black p-4 rounded-lg"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-3xl font-bold cursor-pointer"
            >
              ×
            </button>
            <video controls autoPlay className="w-full h-auto rounded-md">
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </motion.div>
      )}
      <Form />
      <Footer />
    </motion.main>
  );
};

export default Stimmbildung;
