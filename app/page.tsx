/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */

"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import Form from "@/components/form";
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
    <div className="w-full h-auto mt-[87px] ">
      <Swiper
        direction={"vertical"}
        pagination={{ clickable: true, el: ".swiper-pagination" }}
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        speed={1500}
        className="mySwiper w-full h-[100vh]"
      >
        {slides.map((slide) => (
          <SwiperSlide
            key={slide.id}
            className="flex justify-center items-center bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="h-[100vh] mt-[2vh] bg-cover bg-center relative">
              <div
                className="h-[100vh] absolute inset-0"
                style={{ backgroundColor: "rgba(42, 46, 57, 0.51)" }}
              >
                <div className="w-[80%] mx-auto flex flex-col h-[100%] justify-center">
                  <p className="font-cormorant text-[28px] text-[#C29E76]">
                    {slide.title}
                  </p>
                  <p
                    className="md:text-[60px] text-white font-cormorant font-bold"
                    dangerouslySetInnerHTML={{ __html: slide.subtitle }}
                  >
                    {/* {slide.subtitle} */}
                  </p>
                  <p
                    className="md:text-[20px] text-[#FFFFFF] font-thin font-Karla"
                    dangerouslySetInnerHTML={{ __html: slide.description }}
                  >
                    {/* {slide.description} */}
                  </p>
                  <div className="flex">
                    <p className="font-cormorant text-[28px] text-[#C29E76] mt-8 font-bold cursor-pointer">
                      Lesen Sie Meer
                    </p>
                    <Image
                      src="/assets/images/vector.svg"
                      alt="vectorcursor"
                      width={16}
                      height={16}
                      className="cursor-pointer mt-8 mx-3.5"
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination absolute right-10"></div>
      </Swiper>
      <div>
        <nav className=" h-[137px] flex">
          <div className="w-[27%] bg-[#FFFFFF] flex items-center justify-center">
            <p className="font-Karla md:text-[20px] text-[#1E2B3B] font-thin">
              Ziel der Schule <br></br>für Musik{" "}
            </p>
          </div>
          <div className="w-[55%] bg-[#1E2B3B] flex items-center justify-center">
            <p className="font-Karla text-[#FFFFFF] md:text-[20px] font-thin">
              Ziel der Schule für Musik und Kunst Armina Aristak ist es, die
              Schüler <br></br>
              auf ein hohes künstlerisches Niveau zu bringen. Sie bietet
              Gesangs.
            </p>
          </div>
          <div className="w-[310px] bg-[#C29E76] flex items-center justify-center">
            <p className="font-cormorant text-[28px] text-[#1E2B3B] font-bold hover:animate transition-all duration-200 cursor-pointer">
              Buk Nov
            </p>
            <Image
              src="/assets/images/vector2.svg"
              alt="vector2"
              width={16}
              height={16}
              className="cursor-pointer mx-7"
            />
          </div>
        </nav>
      </div>
      <div className="h-[130vh] bg-[#EFEBE8] flex relative">
        {/* Background Images */}
        <Image
          src="/assets/images/square.svg"
          alt="square"
          width={265}
          height={327}
          className="ml-[260px] mt-[250px] absolute"
        />
        <Image
          src="/assets/images/image2.svg"
          alt="image2"
          width={416}
          height={416}
          className="absolute ml-[125px] mt-[120px] shadow-xl"
        />

        {/* Title & Description */}
        <div className="absolute ml-[600px] mt-[120px] flex flex-col self-start">
          <p className="md:text-[80px] text-[#1E2B3B] font-cormorant font-medium">
            Exploring The Beauty <br /> Of Adornments
          </p>

          <div className="flex items-center gap-4 ml-1.5">
            <Image
              src="/assets/images/line.svg"
              width={7}
              height={0.8}
              alt="line"
              className="drop-shadow-lg"
            />
            <p className="text-[20px] font-Karla text-[#1E2B3B] font-light leading-[1.1]">
              Ziel der Schule für Musik und Kunst Armina Aristak ist es, die
              Schüler <br />
              auf ein hohes künstlerisches Niveau zu bringen. Sie bietet
              Gesangs-, <br />
              Instrumental- und Schauspiel-Unterricht an. Kinder und
              Jugendliche, <br />
              Erwachsene und Senioren singen, spielen und schauspielern.
            </p>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="flex justify-between items-start gap-[95px] mt-[600px] ml-[200px] space-x-12">
          {stats.map((stat, index) => (
            <div key={index} className="w-1/3 flex flex-col items-start">
              <p className="flex flex-col items-start self-start">
                <span className="md:text-[80px] font-cormorant text-[#1E2B3B] font-bold">
                  {stat.number}
                </span>
                <span className="md:text-[24px] font-cormorant text-[#1E2B3B] font-bold">
                  {stat.title}
                </span>
                <span className="md:text-[20px] font-Karla text-[#1E2B3B]">
                  {stat.description}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col md:flex-row h-auto">
  <div className="w-full md:w-[531px]">
    <Image 
      src="/assets/images/image3.svg" 
      alt="image3" 
      width={531} 
      height={608} 
      className="block w-full"
    />
  </div>
        <div className="flex-1 bg-[#1E2B3B] text-white flex flex-col justify-center w-full md:w-[80%] mx-auto">
    <div className="flex flex-col items-start w-[80%] mx-auto mt-[50px]">
      <Image 
        src="/assets/images/image4.svg" 
        alt="image4" 
        width={80} 
        height={84} 
        className="absolute mr-[715px] mb-[370]"
      />
      <p className="md:text-[33.36px] font-cormorant w-[80%] font-bold mt-[90px]">Armina Aristak</p>
                    <p className="md:text-[20px] font-Karla w-[100%] font-thin mt-5 whitespace-normal">
                      Doctoral student in music education at the Martin Luther University Halle-
                      Wittenberg. Scholarship holder of the SWR vocal ensemble. Prize winner 2016  
                      and 2018 at the International Festival Young Opera Singer Schloss Rheinsberg,  
                      where she appeared in numerous concerts and opera performances. The work  
                      with various conductors and directors left a deep and positive impression on  
                      their musical life path.
                      <br /><br />
                      This was followed by performances with the Brandenburg Orchestra,  
                      participation in various opera performances with small solo games as well as  
                      solo concerts in Baden-Baden, Gechingen, Göppingen, Stuttgart, Mittelbergheim.
                  </p>
                    <p className="text-[#B7B7B7] font-Karla text-[18px] cursor-pointer mt-6 self-start m-0 p-0 underline text-thin">
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
          <div className="grid md:grid-cols-3 gap-3 mt-[2rem]">
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
              className="absolute mt-[336px] ml-[427px] grayscale transition-transform duration-500 hover:grayscale-0 hover:scale-110"
            />
            <Image
              src="/assets/images/rectangle16.svg"
              alt="rectangle16"
              width={199}
              height={277}
              className="absolute mt-[336px] ml-[635px] grayscale transition-transform duration-500 hover:grayscale-0 hover:scale-110"
            />
          </div>
        </div>
        <div className="bg-[#EFEBE8] py-12 sm:py-16 md:py-20">
  <div className="container mx-auto px-4 sm:px-6 md:px-8">
    <div className="relative mb-12 sm:mb-16">
      <Image 
        src="/assets/images/vertical_line.svg" 
        alt="vertical_line" 
        width={7} 
        height={45} 
        className="absolute left-0 sm:left-4 md:left-8"
      />
<div className="grid grid-cols-2 items-center">
  <h1 className="font-cormorant text-3xl sm:text-4xl md:text-[60px] text-[#000000] pl-8 sm:pl-12 md:pl-16 font-medium">
    Was Unsere Schüler Sagen
  </h1>
  <span className="text-[#1E2B3B] md:text-[20px] font-cormorant font-bold border-2 border-[#1E2B3B] 
                   px-5 py-2 cursor-pointer hover:shadow-2xl transition-all duration-500 
                   justify-self-end text-right mr-5 sm:mr-10 md:mr-16">
    Alles sehen
  </span>
</div>
</div>
</div>
</div>
        <div className="bg-[#EFEBE8] min-h-screen flex  ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
            <div className="p-3 sm:p-5">
              <h2 className="text-2xl md:text-[32px] font-bold text-[#1E2B3B] font-cormorant mb-2">
                Petra Harres
              </h2>
              <p className="text-sm sm:text-base md:text-[16px] text-[#000000] font-karla font-thin">
                I searched the Internet for a singing teacher and came acome
                into Armina - an absolute stroke of luck!!! She has a great,
                expressive and powerful voice and is a very sensitive, talented
                teacher. Using examples, it illustrates what can be improved.
                She always remains patient and calm. Every singing lesson with
                her is a win and on top of that it's really fun
              </p>
            </div>
            <div className="p-4 sm:p-6">
              <h2 className="text-2xl md:text-[32px] font-bold text-[#1E2B3B] font-cormorant mb-2">
                Meyer Irmgard
              </h2>
              <p className="text-sm sm:text-base md:text-[16px] text-[#000000] font-karla font-thin ">
                My daughter gave me singing lessons at Armina's.Armina has a
                great voice, works with great joy and transmits this joy.
                Sensitive and competent she teaches singing techniques and
                practiced them with me, so that after a short time a success
                could be heard. It was a lot of fun!
              </p>
            </div>
            <div className="p-4 sm:p-6">
              <h2 className="text-2xl md:text-[32px] font-bold text-[#1E2B3B] font-cormorant mb-2">
                Meyer Irmgard
              </h2>
              <p className="text-sm sm:text-base md:text-[16px] text-[#000000] font-karla font-thin ">
                My daughter gave me singing lessons at Armina's.Armina has a
                great voice, works with great joy and transmits this joy.
                Sensitive and competent she teaches singing techniques and
                practiced them with me, so that after a short time a success
                could be heard. It was a lot of fun!
              </p>
            </div>
            
          </div>
          
        </div>
        <div className="relative">
  <div className=" top [-500px] ">
    <Form />
  </div>
</div>
      </div>
    </div>
  );
}
