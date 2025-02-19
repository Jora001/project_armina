"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Cormorant_Garamond } from "next/font/google";

const Form = dynamic(() => import("@/components/form"), { ssr: false });

const my_font = Cormorant_Garamond({ weight: "700", subsets: ["latin"] });

const Instrumental = () => {
  useEffect(() => {
    const handleResize = () => {
      console.log("Window resized:", window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="bg-maincolor min-h-screen w-full flex flex-col items-center">
        <div className="relative w-full">
          <Image
            src="/assets/images/schuller_background.svg"
            width={1540}
            height={353}
            alt="bg"
            className="w-full h-auto object-cover"
            priority
          />
          <div
            className={`${my_font.className} absolute top-1/2 left-[5%] sm:left-[7%] md:left-[10%] transform -translate-y-1/2 max-w-[90%] lg:max-w-[50%]`}
          >
            <span
              className="text-[#C29E76] block"
              style={{ fontSize: "clamp(12px, 2vw, 24px)", whiteSpace: "nowrap" }}
            >
              Schule für Musik & Kunst
            </span>
            <span
              className="font-extrabold text-[#ffffff] block"
              style={{ fontSize: "clamp(18px, 3.5vw, 40px)", whiteSpace: "nowrap" }}
            >
              SCHAUSPIEL
            </span>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-8 md:mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-6 place-items-center">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="relative w-full max-w-[411px]">
                <Image
                  src={`/assets/images/pic_${num}_schuller.svg`}
                  alt={`pic_${num}_shuller`}
                  width={411}
                  height={278}
                  className="w-full h-auto"
                  priority
                />
                <div className="absolute inset-0 bg-black bg-opacity-45 flex items-center justify-center">
                  <Link href="/forex">
                    <button className="relative w-[160px] h-[49px] flex items-center gap-2 border-2 border-[#C29E76] text-[#C29E76] text-lg px-6 py-3 overflow-hidden group">
                      <span className="absolute left-0 w-full h-full bg-[#C29E76] scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
                      <div className="relative z-10 flex items-center gap-2 w-full justify-center">
                        <span className="group-hover:text-[#1E2B3B] font-cormorant text-[20px] whitespace-nowrap">
                          Jetzt buchen
                        </span>
                        <Image
                          src="/assets/images/vector.svg"
                          alt="vector-cursor"
                          width={16}
                          height={16}
                          className="w-4 h-4 transition duration-300 ease-in-out group-hover:opacity-0"
                        />
                        <Image
                          src="/assets/images/black_Vector_cursor.svg"
                          alt="vector-cursor"
                          width={16}
                          height={16}
                          className="w-4 h-4 transition duration-300 ease-in-out opacity-0 group-hover:opacity-100"
                        />
                      </div>
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      <Form />
    </main>
  );
};

export default Instrumental;
