"use client";
import Image from "next/image";
import "swiper/css";
import React from "react";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Form from "@/components/form";
import Slider from "@/components/slider/Slider";
import GallerySection from "@/components/Gallery";
import { useRouter } from "next/navigation";
import CookieConsent from "@/components/CookieConsent/CookieConsent";
import Firstsection from "@/components/firstsection";
import { Footer } from "@/components";

export default function Home() {
  const router = useRouter();

  return (
    <main className="w-full min-h-screen flex flex-col">
      <CookieConsent />
      <Slider />
      <Firstsection />

      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full md:w-1/2">
          <Image
            src="/assets/images/imagetwos.png"
            alt="image3"
            width={531}
            height={608}
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="flex-1 bg-[#1E2B3B] text-white flex items-center px-6 sm:px-8 md:px-12 py-8 md:py-14">
          <div className="relative w-full max-w-[700px] mx-auto">
            <Image
              src="/assets/images/image4.svg"
              alt="image4"
              width={80}
              height={84}
              className="absolute left-4 sm:left-8 top-[-20px] md:top-0 w-12 sm:w-16 md:w-20"
            />
            <p className="text-[24px] sm:text-[28px] md:text-[33.36px] font-cormorant font-bold mt-[60px] md:mt-[70px]">
              Armina Aristak
            </p>
            <p className="text-[14px] sm:text-[16px] md:text-[18px] font-Karla font-thin mt-4 md:mt-5 leading-relaxed">
            Doctoral student in music education at the Martin Luther University Halle-Wittenberg. Scholarship holder of the SWR vocal ensemble. Prize winner 2016  and 2018 at the International Festival Young Opera Singer Schloss Rheinsberg,  where she appeared in numerous concerts and opera performances. The work  with various conductors and directors left a deep and positive impression on  their musical life path. <br /><br />This was followed by performances with the Brandenburg Orchestra, participation in various opera performances with small solo games as well as solo concerts in Baden-Baden, Gechingen, Göppingen, Stuttgart, Mittelbergheim.
            </p>
            <p
              onClick={() => router.push('/vita')}
              className="text-[#B7B7B7] font-Karla text-[14px] sm:text-[16px] cursor-pointer mt-6 underline hover:text-white"
            >
              Read more
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#EFEBE8] py-12">
        <GallerySection />
      </div>

      <div className="bg-[#EFEBE8] flex-1 pb-20">
        <div className="container mx-auto px-6 md:px-12 py-12">
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-8 md:ml-[100px]">
            <Image 
              src="/assets/images/vertical_line.svg" 
              alt="vertical_line" 
              width={7} 
              height={45} 
              className="hidden md:block" 
            />
            <h2 className="font-cormorant text-[28px] sm:text-[36px] md:text-[60px] text-[#000000] font-medium text-center sm:text-left flex-1">
              Was Unsere Schüler Sagen
            </h2>
            <p
              className="text-[#1E2B3B] text-[14px] md:text-[18px] font-cormorant font-bold border-2 border-[#1E2B3B] px-4 py-2 cursor-pointer hover:shadow-2xl"
              onClick={() => router.push('/Bewertungen')}
            >
              Alles sehen
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
          {[
              { name: "Petra Harres", text: "I searched the Internet for a singing teacher and came acome into Armina - an absolute stroke of luck!!!She has a great, expressive and powerful voice and is a very sensitive, talented teacher. Using examples, it illustrates what can be improved. She always remains patient and calm. Every singing lesson with her is a win and on top of that it's really fun" },
              { name: "Meyer Irmgard", text: "My daughter gave me singing lessons at Armina's.Armina has a great voice, works with great joy and transmits this joy. Sensitive and competent she teaches singing techniques and practiced them with me, so that after a short time a success could be heard. It was a lot of fun!" },
              { name: "Alex Schmidt", text: "My daughter gave me singing lessons at Armina's.Armina has a great voice, works with great joy and transmits this joy. Sensitive and competent she teaches singing techniques and practiced them with me, so that after a short time a success could be heard. It was a lot of fun!" },
          ].map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-[20px] sm:text-[24px] md:text-[28px] font-bold text-[#1E2B3B] font-cormorant mb-2">
                  {item.name}
                </h2>
                <p className="text-[13px] sm:text-[14px] md:text-[15px] text-[#000000] font-karla font-thin">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="px-6 md:px-12 pb-20">
            <Form />
        </div>
      </div>

      <div className="w-full">
        <Footer />
      </div>
    </main>
  );
}