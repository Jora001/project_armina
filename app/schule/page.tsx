"use client";

import React, { useState } from "react";
import { Cormorant_Garamond, Karla } from "next/font/google";
import Image from "next/image";

const my_font = Cormorant_Garamond({
  weight: "400",
  subsets: ["latin"],
});
const my_font2 = Karla({
  weight: "400",
  subsets: ["latin"],
});

const videos = [
  "/assets/videos/video1.mp4",
  "/assets/videos/video2.mp4",
  "/assets/videos/video3.mp4",
  "/assets/videos/video4.mp4",
  "/assets/videos/video5.mp4",
  "/assets/videos/video6.mp4",
];

const Schule = () => {
  const [videoSrc, setVideoSrc] = useState<string | null>(null);

  return (
    <div className="flex justify-center flex-col bg-maincolor">
      <div
        className="h-[353px] mt-[75px] w-full flex justify-start  bg-no-repeat"
        style={{
          backgroundImage: `url('/assets/images/schuller_background.svg'), url('/assets/images/Rectangle.png')`,
          backgroundPosition: "top left, center",
          backgroundSize: "cover, contain", 
        }}
      >
        <div className={`${my_font.className} flex flex-col pl-[100px] pt-[110px]`}>
          <span className="text-[#C29E76] text-[28px] leading-[26.49px] mb-[10px]">
            Schule für Musikk & Kunst
          </span>
          <span className="font-extrabold text-[60px] leading-[72.66px]">SCHÜLLER</span>
        </div>
      </div>

      <div className={`${my_font2.className} text-white grid grid-cols-3 gap-7 p-[90px]`}>
        {videos.map((video, index) => (
          <div key={index} className="relative cursor-pointer" onClick={() => setVideoSrc(video)}>
            {/* Նկար */}
            <Image
              src={`/assets/images/pic_${index + 1}_schuller.svg`}
              width={471}
              height={278}
              alt="pic"
              className="filter brightness-[45%]"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-30">
              <Image src="/assets/images/play_logo.svg" width={40} height={40} alt="play" />
              <span className="mt-2 text-lg font-semibold">Jetzt Spielen</span>
            </div>
          </div>
        ))}
      </div>

      <div className={`${my_font.className} flex justify-center`}>
        <button className="border-[#1E2B3B] border-solid border-[1px] w-[138px] h-[48px] text-[#1E2B3B] font-bold">
          Alles sehen
        </button>
      </div>

      {videoSrc && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative bg-white p-4 rounded-lg">
            <button className="absolute top-2 right-2 text-black" onClick={() => setVideoSrc(null)}>
              ✖
            </button>
            <video src={videoSrc} controls className="w-[600px] h-[340px] rounded-lg"></video>
          </div>
        </div>
      )}
    </div>
  );
};

export default Schule;
