/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */

"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import React from "react";

import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import Form from "@/components/form";
// import { Footer } from "@/components";
// import { useState from 'react';
const slides = [
  {
    id: 1,
    title: "Schul",
    subtitle: "Mezzosopran/Gesangspädagogin",
    description: `Ziel der Schule für Musik und Kunst Armina Aristak ist es, die Schüler auf ein hohes <br /> künstlerisches Niveau zu bringen.
    Sie bietet Gesangs-, Instrumental- und <br /> Schauspiel-Unterricht an.
    Kinder und Jugendliche, Erwachsene und Senioren <br /> singen, spielen und schauspielern.`,
    image: "/assets/images/image1.svg",
  },
  {
    id: 2,
    title: "Schul",
    subtitle: "Mezzosopran/Gesangspädagogin",
    description: `Ziel der Schule für Musik und Kunst Armina Aristak ist es, die Schüler auf ein hohes <br /> künstlerisches Niveau zu bringen.
    Sie bietet Gesangs-, Instrumental- und <br /> Schauspiel-Unterricht an.
    Kinder und Jugendliche, Erwachsene und Senioren <br /> singen, spielen und schauspielern.`,
    image: "/assets/images/image1.svg",
  },
  {
    id: 3,
    title: "Schul",
    subtitle: "Mezzosopran/Gesangspädagogin",
    description: `Ziel der Schule für Musik und Kunst Armina Aristak ist es, die Schüler auf ein hohes <br /> künstlerisches Niveau zu bringen.
    Sie bietet Gesangs-, Instrumental- und <br /> Schauspiel-Unterricht an.
    Kinder und Jugendliche, Erwachsene und Senioren <br /> singen, spielen und schauspielern.`,
    image: "/assets/images/image1.svg",
  },
];
const stats = [
  {
    number: "10+",
    title: "Allüren der Erfahrung",
    description: "Lorem ipsum dolor sit amet.",
  },
  {
    number: "8+",
    title: "Allüren der Erfahrung",
    description: "Lorem ipsum dolor sit amet.",
  },
  {
    number: "120+",
    title: "Studenten",
    description: "Lorem ipsum dolor sit amet.",
  },
];
export default function Home() {
  return (
<div className="w-screen h-screen " >
<Swiper
  direction="vertical"
  pagination={{ clickable: true, el: ".swiper-pagination" }}
  modules={[Pagination, Autoplay]}
  autoplay={{ delay: 2000, disableOnInteraction: false }}
  loop
  allowTouchMove={false} // ❗ Արգելում է Swiper-ի ձեռքով փոփոխումը
        speed={1500}
  className="mySwiper w-full  h-[100vh]"
>
  {slides.map((slide) => (
    <SwiperSlide
      key={slide.id}
      className="flex justify-center items-center bg-cover bg-center "
      style={{ backgroundImage: `url(${slide.image})`, marginTop: "30px", backgroundPosition: "center bottom" }}
      >
      <div className="h-screen mt-[1vh] bg-cover bg-center relative">
        <div
          className="h-50 absolute inset-0 bg-opacity-40"
          style={{ backgroundColor: "rgba(42, 46, 57, 0.51)" }}
        >
          <div className="w-[90%] sm:w-[80%] mx-auto flex flex-col h-full justify-center text-center sm:text-left">
            <p className="font-cormorant text-[22px] sm:text-[28px] text-[#C29E76] font-bold">
              {slide.title}
            </p>
            <p className="text-[36px] sm:text-[50px] md:text-[60px] text-white font-cormorant font-bold">
              {slide.subtitle}
            </p>
            {/* ✅ Ահա լուծումը */}
            <p className="text-[16px] sm:text-[18px] md:text-[20px] text-[#FFFFFF] font-thin font-Karla">
              {slide.description.split("<br />").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
            <div className="flex justify-center sm:justify-start items-center mt-6">
              <p className="font-cormorant text-[22px] sm:text-[28px] text-[#C29E76] font-bold cursor-pointer">
                Lesen Sie Meer
              </p>
              <Image
                src="/assets/images/vector.svg"
                alt="vectorcursor"
                width={16}
                height={16}
                className="cursor-pointer mx-3.5"
              />
            </div>
          </div>
        </div>
      </div>
    </SwiperSlide>
  ))}
  <div className="swiper-pagination absolute right-5 sm:right-10"></div>
</Swiper>

      <div>
        <nav className="h-auto md:h-[137px] flex flex-col md:flex-row mt-2" >
          {/* Left Section */}
          <div className="w-full md:w-[27%] bg-[#FFFFFF] flex items-center justify-center p-4 md:p-0">
            <p className="font-Karla text-[18px] md:text-[20px] text-[#1E2B3B] font-thin text-center md:text-left">
            Wolfgang <br /> Amadeus Mozart            </p>
          </div>

          {/* Middle Section */}
          <div className="w-full md:w-[55%] bg-[#1E2B3B] flex items-center justify-center p-4 md:p-0">
            <p className="font-Karla text-[#FFFFFF] text-[16px] md:text-[20px] font-thin text-center md:text-left">
            Ohne Musik wär‘ alles nichts. <br />
            Die Musik steckt nicht in den Noten, sondern in der Stille dazwischen.
            </p>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-[310px] bg-[#C29E76] flex items-center justify-center p-4 md:p-0">
            <p className="font-cormorant text-[22px] md:text-[28px] text-[#1E2B3B] font-bold cursor-pointer">
              Buk Nov
            </p>
            <Image
              src="/assets/images/vector2.svg"
              alt="vector2"
              width={16}
              height={16}
              className="cursor-pointer mx-3 md:mx-7"
            />
          </div>
        </nav>
      </div>
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
            <h1 className="text-[32px] md:text-[50px] lg:text-[80px] text-[#1E2B3B] font-cormorant font-medium whitespace-nowrap">
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

        {/* Statistics Section */}
        <div className="grid  md:grid-cols-3  mt-20 w-full ml-15 max-w-8xl">
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
        </div>
      </div>
      <div className="flex flex-col md:flex-row h-auto w-full">
        <div className="w-full md:w-auto">
          <Image
            src="/assets/images/image3.svg"
            alt="image3"
            width={531}
            height={608}
            className="w-full md:w-[531px] h-auto"
          />
        </div>
        <div className="flex-1 bg-[#1E2B3B] text-white flex flex-col justify-center w-full md:w-[80%] mx-auto px-4 md:px-8 lg:px-12 py-6 md:py-12">
          <div className="relative w-[90%] mx-auto">
            <Image
              src="/assets/images/image4.svg"
              alt="image4"
              width={80}
              height={84}
              className="absolute left-0 top-[-20px] md:top-0 md:left-[-50px]"
            />
            <p className="md:text-[33.36px] font-cormorant w-[80%] font-bold mt-[90px]">
              Armina Aristak
            </p>
            <p className="md:text-[20px] font-Karla w-full font-thin mt-5 whitespace-normal">
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
            <p className="text-[#B7B7B7] font-Karla text-[18px] cursor-pointer mt-6 underline">
              Read more
            </p>
          </div>
        </div>
      </div>
      <div className="h-[125vh] bg-[#EFEBE8]">
        <div className="flex flex-col items-center justify-center">
          <p className="font-cormorant text-[40px] text-[#1E2B3B] mt-[40px] font-bold">
            Fotogalerie
          </p>
          <p className="font-cormorant md:text-[20px] text-[#1E2B3B] italic mt-[10px]">
            Facellus lorem malesuada ligula pulvinar commodo maecenas
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-[2rem] relative">
            <Image
              src="/assets/images/rectangle13.svg"
              alt="rectangle13"
              width={407}
              height={613}
              className="grayscale transition-transform duration-500 hover:grayscale-0 hover:scale-110"
            />
            <Image
              src="/assets/images/rectangle14.svg"
              alt="rectangle14"
              width={407}
              height={325}
              className="grayscale transition-transform duration-500 hover:grayscale-0 hover:scale-110"
            />
            <Image
              src="/assets/images/rectangle12.svg"
              alt="rectangle12"
              width={415}
              height={613}
              className="grayscale transition-transform duration-500 hover:grayscale-0 hover:scale-110"
            />
            <Image
              src="/assets/images/rectangle15.svg"
              alt="rectangle15"
              width={199}
              height={277}
              className="absolute md:mt-[336px] md:ml-[427px] grayscale transition-transform duration-500 hover:grayscale-0 hover:scale-110 hidden md:block"
            />
            <Image
              src="/assets/images/rectangle16.svg"
              alt="rectangle16"
              width={199}
              height={277}
              className="absolute md:mt-[336px] md:ml-[635px] grayscale transition-transform duration-500 hover:grayscale-0 hover:scale-110 hidden md:block"
            />
          </div>
        </div>
        <div className="bg-[#EFEBE8] min-h-[40vh] flex flex-col justify-center relative px-6 md:px-12">
          {/* Vertical line (only visible on md and larger screens) */}
          <div className="absolute left-[8%] top-[30%] hidden md:block">
            <Image
              src="/assets/images/vertical_line.svg"
              alt="vertical_line"
              width={7}
              height={45}
            />
          </div>

          {/* Title */}
          <h2 className="font-cormorant text-[36px] md:text-[60px] text-[#000000] font-medium text-center md:text-left md:ml-[150px]">
            Was Unsere Schüler Sagen
          </h2>

          {/* Button - stays centered on small screens, moves to right on larger screens */}
          <div className="flex justify-center md:justify-end mt-4 md:mt-0 md:mr-[8%]">
            <p className="text-[#1E2B3B] text-[16px] md:text-[20px] font-cormorant font-bold border-2 border-[#1E2B3B] px-5 py-2 cursor-pointer hover:shadow-2xl transition-all duration-500">
              Alles sehen
            </p>
          </div>
        </div>

        <div className="bg-[#EFEBE8] min-h-[60vh] flex justify-center px-4 sm:px-6">
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-6 md:px-12 py-8">
            <div className="text-center sm:text-left">
              <h2 className="text-[24px] md:text-[32px] font-bold text-[#1E2B3B] font-cormorant mb-2">
                Petra Harres
              </h2>
              <p className="text-[14px] md:text-[16px] text-[#000000] font-karla font-thin">
                I searched the Internet for a singing teacher and came across
                Armina - an absolute stroke of luck!!! She has a great,
                expressive and powerful voice and is a very sensitive, talented
                teacher. Using examples, it illustrates what can be improved.
                She always remains patient and calm. Every singing lesson with
                her is a win and on top of that, it's really fun.
              </p>
            </div>
            <div className="text-center sm:text-left">
              <h2 className="text-[24px] md:text-[32px] font-bold text-[#1E2B3B] font-cormorant mb-2">
                Meyer Irmgard
              </h2>
              <p className="text-[14px] md:text-[16px] text-[#000000] font-karla font-thin">
                My daughter gave me singing lessons at Armina's. Armina has a
                great voice, works with great joy, and transmits this joy.
                Sensitive and competent, she teaches singing techniques and
                practices them with me, so that after a short time, a success
                could be heard. It was a lot of fun!
              </p>
            </div>
            <div className="text-center sm:text-left">
              <h2 className="text-[24px] md:text-[32px] font-bold text-[#1E2B3B] font-cormorant mb-2">
                Meyer Irmgard
              </h2>
              <p className="text-[14px] md:text-[16px] text-[#000000] font-karla font-thin">
                My daughter gave me singing lessons at Armina's. Armina has a
                great voice, works with great joy, and transmits this joy.
                Sensitive and competent, she teaches singing techniques and
                practices them with me, so that after a short time, a success
                could be heard. It was a lot of fun!
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute  left-0 right-0 flex justify-center">
            <Form />
          </div>
        </div>
      </div>
      {/*  <div className="flex flex-col min-h-screen">
  
  <Footer />
</div> */}

    </div>
  );
}
