
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
    <main className="w-full min-h-screen">
      <CookieConsent />
      <Slider />
      <Firstsection />

      <div className="flex flex-col md:flex-row h-auto w-full">
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <Image
            src="/assets/images/imagetwos.png"
            alt="image3"
            width={531}
            height={608}
            className="w-[100%]  h-auto max-w-full"
          />
        </div>

        <div className="flex-1 bg-[#1E2B3B] text-white flex flex-col justify-center w-full px-6 sm:px-8 md:px-12 py-8 md:py-14">
          <div className="relative w-full max-w-[700px] mx-auto">
            <Image
              src="/assets/images/image4.svg"
              alt="image4"
              width={80}
              height={84}
              className="absolute left-4 sm:left-18 top-[-20px] md:top-0"
            />
            <p className="text-[24px] sm:text-[28px] md:text-[33.36px] font-cormorant font-bold mt-[80px] md:mt-[90px]">
              Armina Aristak
            </p>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] font-Karla font-thin mt-4 md:mt-5 leading-relaxed">
            Doctoral student in music education at the Martin Luther University Halle-Wittenberg. Scholarship holder of the SWR vocal ensemble. Prize winner 2016  and 2018 at the International Festival Young Opera Singer Schloss Rheinsberg,  where she appeared in numerous concerts and opera performances. The work  with various conductors and directors left a deep and positive impression on  their musical life path. <br /><br />This was followed by performances with the Brandenburg Orchestra, participation in various opera performances with small solo games as well as solo concerts in Baden-Baden, Gechingen, Göppingen, Stuttgart, Mittelbergheim.            </p>
            <p
              onClick={() => router.push('/vita')}
              className="text-[#B7B7B7] font-Karla text-[16px] sm:text-[18px] cursor-pointer mt-6 underline"
            >
              Read more
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#EFEBE8] py-12">
        <GallerySection />
      </div>

      <div className="min-h-screen bg-[#EFEBE8]">
        <div className="min-h-[40vh] flex flex-col justify-center px-6 md:px-12">
          <div className="flex flex-wrap items-center gap-4 md:ml-[100px]">
            <Image src="/assets/images/vertical_line.svg" alt="vertical_line" width={7} height={45} className="hidden md:block" />
            <h2 className="font-cormorant text-[36px] md:text-[60px] text-[#000000] font-medium text-center md:text-left">
              Was Unsere Schüler Sagen
            </h2>
            <div className="ml-auto">
              <p
                className="text-[#1E2B3B] text-[16px] md:text-[20px] font-cormorant font-bold border-2 border-[#1E2B3B] px-5 py-2 cursor-pointer hover:shadow-2xl"
                onClick={() => router.push('/Bewertungen')}
              >
                Alles sehen
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
            {[
              { name: "Petra Harres", text: "I searched the Internet for a singing teacher and came acome into Armina - an absolute stroke of luck!!!She has a great, expressive and powerful voice and is a very sensitive, talented teacher. Using examples, it illustrates what can be improved. She always remains patient and calm. Every singing lesson with her is a win and on top of that it's really fun" },
              { name: "Meyer Irmgard", text: "My daughter gave me singing lessons at Armina's.Armina has a great voice, works with great joy and transmits this joy. Sensitive and competent she teaches singing techniques and practiced them with me, so that after a short time a success could be heard. It was a lot of fun!" },
              { name: "Alex Schmidt", text: "My daughter gave me singing lessons at Armina's.Armina has a great voice, works with great joy and transmits this joy. Sensitive and competent she teaches singing techniques and practiced them with me, so that after a short time a success could be heard. It was a lot of fun!" },
            ].map((item, index) => (
              <div key={index} className="text-center sm:text-left p-4 rounded-lg shadow-md">
                <h2 className="text-[24px] md:text-[32px] font-bold text-[#1E2B3B] font-cormorant mb-2">
                  {item.name}
                </h2>
                <p className="text-[14px] md:text-[14px] text-[#000000] font-karla font-thin">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className=" left-0 right-0 flex justify-center">
            <Form />
          </div>
        </div>
      </div>


 <div className=' w-full'>
        <Footer />
      </div>    </main>
  );
}
