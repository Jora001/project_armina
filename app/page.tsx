/* eslint-disable react/no-unescaped-entities */

"use client";
import Image from "next/image";
import "swiper/css";
import React from "react";

import "swiper/css/pagination";
import "swiper/css/autoplay";
import Form from "@/components/form";
import Slider from "@/components/slider/Slider";
import GallerySection from "@/components/Gallery";
// import { Footer } from "@/components";
// import { useState from 'react';
import { useRouter } from "next/navigation";
import CookieConsent from "@/components/CookieConsent/CookieConsent";

export default function Home() {
  const router = useRouter();

  return (
    <main className="w-full">
      <CookieConsent />
      <Slider />
      <div className="min-h-screen bg-[#EFEBE8] flex flex-col items-right px-6 md:px-12 lg:px-20 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 max-w-6xl w-full">
          {/* Image Section */}
          <div className="relative">
            {/* Background Shape (Behind the Image) */}
            <Image
              src="/assets/images/square.svg"
              alt="square"
              width={265}
              height={327}
              className="hidden md:block absolute top-[50%] right-[135px] w-[150px] md:w-[200px] lg:w-[265px] z-[-0]"
            />

            {/* Main Image (Above the Background Shape) */}
            <Image
              src="/assets/images/image2.svg"
              alt="image2"
              width={416}
              height={416}
              className="relative ml-[25px] mt-[120px] shadow-xl w-[250px] md:w-[350px] lg:w-[416px] h-auto"
            />
          </div>

          {/* Text Section */}
          <div className="text-center md:text-left">
            <h1 className="text-[32px] md:text-[50px] lg:text-[60px] text-[#1E2B3B] font-cormorant font-medium whitespace-nowrap">
              Exploring The Beauty <br /> Of Adornments
            </h1>

            <div className="flex items-center justify-center md:justify-start  gap-4 mt-4 max-w-4xl w-200">
              <Image
                src="/assets/images/line.svg"
                width={7}
                height={0.8}
                alt="line"
                className="drop-shadow-lg hidden md:block"
              />
              <p className="text-[16px] md:text-[18px] lg:text-[18px] font-Karla text-[#1E2B3B] font-light leading-[1.4]">
                Ziel der Schule für Musik und Kunst{" "}
                <span className="whitespace-nowrap">Schüler</span> auf ein hohes
                künstlerisches Niveau zu bringen. Sie bietet Gesangs- <br />
                Instrumental- und Schauspiel-Unterricht an. Kinder und
                Jugendliche, Erwachsene und Senioren singen, spielen und
                schauspielern.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center md:justify-start mt-36 gap-8 md:gap-16 text-center">
          {/* 10+ */}
          <div className="flex flex-col items-center">
            <h2 className="text-[60px] md:text-[80px] text-[#1B2733] font-['Cormorant_Garamond'] font-bold leading-none">
              10+
            </h2>
            <p className="text-[20px] md:text-[24px] leading-[26px] md:leading-[29.06px] text-[#1E2B3B] font-['Cormorant_Garamond']">
              Allüren der Erfahrung
            </p>
            <p className="text-[16px] md:text-[20px] leading-[20px] md:leading-[23.38px] text-[#1E2B3B] font-['Cormorant_Garamond'] font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          {/* 8+ */}
          <div className="flex flex-col items-center">
            <h2 className="text-[60px] md:text-[80px] text-[#1B2733] font-['Cormorant_Garamond'] font-bold leading-none">
              8+
            </h2>
            <p className="text-[20px] md:text-[24px] leading-[26px] md:leading-[29.06px] text-[#1E2B3B] font-['Cormorant_Garamond']">
              Allüren der Erfahrung
            </p>
            <p className="text-[16px] md:text-[20px] leading-[20px] md:leading-[23.38px] text-[#1E2B3B] font-['Cormorant_Garamond'] font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          {/* 120+ */}
          <div className="flex flex-col items-center">
            <h2 className="text-[60px] md:text-[80px] text-[#1B2733] font-['Cormorant_Garamond'] font-bold leading-none">
              120+
            </h2>
            <p className="text-[20px] md:text-[24px] leading-[26px] md:leading-[29.06px] text-[#1E2B3B] font-['Cormorant_Garamond']">
              Allüren der Erfahrung
            </p>
            <p className="text-[16px] md:text-[20px] leading-[20px] md:leading-[23.38px] text-[#1E2B3B] font-['Cormorant_Garamond'] font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>

        {/* Statistics Section */}
        {/* <div className="grid  md:grid-cols-3  mt-20 w-full ml-15 max-w-8xl">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center md:items-start"
            >
              <span className="text-[50px] md:text-[60px] lg:text-[80px] font-cormorant text-[#1E2B3B] font-bold">
                {stat.number}
              </span>
              <span className="text-[18px] md:text-[22px] lg:text-[24px] font-cormorant text-[#1E2B3B] font-bold">
                {stat.title}
              </span>
              <span className="text-[16px] md:text-[18px] lg:text-[20px] font-Karla text-[#1E2B3B] text-center md:text-left">
                {stat.description}
              </span>
            </div>
          ))}
        </div> */}
      </div>
      <div className="flex flex-col md:flex-row h-auto w-full">
        {/* Image Section */}
        <div className="w-full md:w-auto flex justify-center md:justify-start">
          <Image
            src="/assets/images/image3.svg"
            alt="image3"
            width={531}
            height={608}
            className="w-[90%] md:w-[531px] h-auto"
          />
        </div>

        {/* Text Section */}
        <div className="flex-1 bg-[#1E2B3B] text-white flex flex-col justify-center w-full md:w-[80%] mx-auto px-6 sm:px-8 md:px-12 py-8 md:py-14">
          <div className="relative w-[90%] max-w-[700px] mx-auto">
            {/* Small Decorative Image */}
            <Image
              src="/assets/images/image4.svg"
              alt="image4"
              width={80}
              height={84}
              className="absolute left-4 sm:left-18 top-[-20px] md:top-0 md:left-[20px]"
            />
            {/* Title */}
            <p className="text-[24px]  md:left-[60px] sm:text-[28px] md:text-[33.36px] font-cormorant font-bold mt-[80px]  md:mt-[90px]">
              Armina Aristak
            </p>
            {/* Description */}
            <p className="text-[16px] sm:text-[18px] md:text-[20px] font-Karla font-thin mt-4 md:mt-5 whitespace-normal leading-relaxed">
              Doctoral student in music education at the Martin Luther
              University Halle-Wittenberg. Scholarship holder of the SWR vocal
              ensemble. Prize winner 2016 and 2018 at the International Festival
              Young Opera Singer Schloss Rheinsberg, where she appeared in
              numerous concerts and opera performances.
              <br />
              <br />
              This was followed by performances with the Brandenburg Orchestra,
              participation in various opera performances with small solo games
              as well as solo concerts in Baden-Baden, Gechingen, Göppingen,
              Stuttgart, Mittelbergheim.
            </p>
            {/* Read More */}
            <p
  onClick={() => window.location.href = '/vita'}
  className="text-[#B7B7B7] font-Karla text-[16px] sm:text-[18px] cursor-pointer mt-6 underline"
>
  Read more
</p>
          </div>
        </div>
      </div>

      <div className="h-[125vh] bg-[#EFEBE8]">
        <div className="h-[125vh] bg-[#EFEBE8]">
          <GallerySection />
        </div>



















        <div className="min-h-screen bg-[#EFEBE8] sm:mt-0 mt-[500px]">
      <div className="bg-[#EFEBE8] min-h-[40vh] flex flex-col justify-center relative px-6 md:px-12">
        {/* Title and Button in one row */}
        <div className="flex flex-wrap items-center gap-4 md:ml-[100px] relative">
          <Image
            src="/assets/images/vertical_line.svg"
            alt="vertical_line"
            width={7}
            height={45}
            className="hidden md:block"
          />
          <h2 className="font-cormorant text-[36px] md:text-[60px] text-[#000000] font-medium text-center md:text-left">
            Was Unsere Schüler Sagen
          </h2>
          <div className="ml-auto">
            <p
              className="text-[#1E2B3B] text-[16px] md:text-[20px] font-cormorant font-bold border-2 border-[#1E2B3B] px-5 py-2 cursor-pointer hover:shadow-2xl transition-all duration-500"
              onClick={() => router.push('/Bewertungen')}
            >
              Alles sehen
            </p>
          </div>
        </div>

        <div className="bg-[#EFEBE8] min-h-[60vh] flex justify-center px-4 sm:px-6">
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8 py-8">
            <div className="text-center sm:text-left  p-4 rounded-lg shadow-md">
              <h2 className="text-[24px] md:text-[32px] font-bold text-[#1E2B3B] font-cormorant mb-2">
                Petra Harres
              </h2>
              <p className="text-[14px] md:text-[16px] text-[#000000] font-karla font-thin">
                I searched the Internet for a singing teacher and came across Armina - an absolute stroke of luck!!! She has a great, expressive and powerful voice and is a very sensitive, talented teacher. Using examples, it illustrates what can be improved. She always remains patient and calm. Every singing lesson with her is a win and on top of that, it's really fun.
              </p>
            </div>

            <div className="text-center sm:text-left  p-4 rounded-lg shadow-md">
              <h2 className="text-[24px] md:text-[32px] font-bold text-[#1E2B3B] font-cormorant mb-2">
                Meyer Irmgard
              </h2>
              <p className="text-[14px] md:text-[16px] text-[#000000] font-karla font-thin">
                My daughter gave me singing lessons at Armina's. Armina has a great voice, works with great joy, and transmits this joy. Sensitive and competent, she teaches singing techniques and practices them with me, so that after a short time, a success could be heard. It was a lot of fun!
              </p>
            </div>

            <div className="text-center sm:text-left  p-4 rounded-lg shadow-md">
              <h2 className="text-[24px] md:text-[32px] font-bold text-[#1E2B3B] font-cormorant mb-2">
                Alex Schmidt
              </h2>
              <p className="text-[14px] md:text-[16px] text-[#000000] font-karla font-thin">
                Armina's lessons have greatly improved my singing confidence. Her professional approach and encouraging attitude made me enjoy every session. I highly recommend her!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute top-20 left-0 right-0 flex justify-center">
          <Form />
        </div>
      </div>
    </div>
      </div>

      {/*  <div className="flex flex-col min-h-screen">
  
  <Footer />
</div> */}
    </main>
  );
}
