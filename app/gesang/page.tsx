"use client";  // ❗ Անհրաժեշտ է, որպեսզի `useState`-ը աշխատի

import React, { useState } from "react";
import { Cormorant_Garamond, Karla } from "next/font/google";
import Image from "next/image";
import Form from "@/components/form";

const my_font = Cormorant_Garamond({
  weight: "400",
  subsets: ["latin"],
});
const my_font2 = Karla({
  weight: "400",
  subsets: ["latin"],
});

const Facher = () => {
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
    <div className="flex flex-col justify-center mt-[100px] bg-maincolor">
      {/* Background Image with Title */}
      <div className="relative w-full">
        <Image
          src="/assets/images/schuller_background.svg"
          width={1540}
          height={353}
          alt="bg"
          className="w-full h-auto object-cover"
        />
        <div
          className={`${my_font.className} absolute top-1/2 left-[5%] sm:left-[7%] md:left-[10%] transform -translate-y-1/2 max-w-[90%] lg:max-w-[50%]`}
        >
          <span className="text-[#C29E76] text-[4vw] sm:text-[3vw] md:text-[2vw] lg:text-[28px] leading-tight block">
          Schule für Musik & Kunst          </span>
          <span className="font-extrabold text-[#ffffff] text-[8vw] sm:text-[6vw] md:text-[4vw] lg:text-[50px] leading-tight block">
          GESANG
          </span>
        </div>
      </div>

      {/* Grid of Images with Play Icon */}
      <div
        className={`${my_font2.className} text-white grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 p-[20px] sm:p-[40px] md:p-[60px] lg:p-[90px]`}
      >
        {[
          "/assets/images/pic_1_schuller.svg",
          "/assets/images/pic_2_schuller.svg",
          "/assets/images/pic_3_schuller.svg",
          "/assets/images/pic_4_schuller.svg",
          "/assets/images/pic_5_schuller.svg",
          "/assets/images/pic_6_schuller.svg",
        ].map((src, index) => (
          <div key={index} className="relative w-full">
            <Image
              src={src}
              width={411}
              height={278}
              alt="pic"
              className="w-full h-auto filter brightness-[45%]"
            />
            {/* Play Button */}
            <div className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer">
              <button onClick={() => openModal(`/assets/videos/video_${index + 1}.mp4`)}>
                <Image
                  src="/assets/images/play_logo.svg"
                  width={40}
                  height={40}
                  alt="Play"
                  className="mb-2"
                />
              </button>
              <span className="text-[14px] sm:text-[16px] md:text-[18px]">
                Jetzt Spielen
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className={`${my_font.className} flex justify-center`}>
        <button className="border-[#1E2B3B] border-solid border-[1px] w-[138px] h-[48px] text-[#1E2B3B] font-bold">
          Alles sehen
        </button>
      </div>

      {/* Form Component */}
      <div className="relative">
        <div className="absolute left-0 right-0 flex justify-center">
          <Form />
        </div>
      </div>

      {/* Video Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="relative w-[80%] lg:w-[60%] xl:w-[50%] bg-black p-4 rounded-lg">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-3xl font-bold cursor-pointer"
            >
              ×
            </button>

            {/* Video Player */}
            <video controls autoPlay className="w-full h-auto rounded-md">
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default Facher;