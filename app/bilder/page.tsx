import React from "react";
import Image from "next/image";
import { Cormorant_Garamond } from "next/font/google";
import { Footer } from "@/components";

const my_font = Cormorant_Garamond({
  weight: "400",
  subsets: ["latin"],
});

const Bilder = () => {
  return (
    <div className="w-full min-h-screen bg-[#EFEBE8]">
      <div className="relative">
        <Image
          src="/assets/images/schuller_background.svg"
          height={353}
          width={1540}
          alt="pic"
          className="w-full h-auto"
        />
        <div
          className={`${my_font.className} flex flex-col pl-6 sm:pl-[100px] pt-[40px] absolute top-[50%] translate-y-[-50%] left-6 sm:left-[90px]`}
        >
          <span className="text-xl sm:text-2xl md:text-[28px] font-cormorant text-[#C29E76] mb-2">
            Armina Aristak
          </span>{" "}
          <span className="text-3xl sm:text-4xl md:text-[60px] font-cormorant text-white font-bold">
            BILDER{" "}
          </span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-3 mt-[20px] mb-[30px] px-4 sm:px-0">
        <Image
          src="/assets/images/image.svg"
          width={407}
          height={518}
          alt="image"
          className="hover:grayscale-0 transition duration-500 w-full sm:w-auto"
        />

        <div className="grid grid-cols-2 gap-2 w-full sm:w-auto">
          <Image
            src="/assets/images/image (1).svg"
            width={407}
            height={274}
            alt="image"
            className="col-span-2 hover:grayscale-0 transition duration-300 w-full"
          />
          <Image
            src="/assets/images/image (3).svg"
            width={199}
            height={234}
            alt="image"
            className="hover:grayscale-0 transition duration-300 w-full"
          />
          <Image
            src="/assets/images/image (4).svg"
            width={199}
            height={234}
            alt="image"
            className="hover:grayscale-0 transition duration-300 w-full"
          />
        </div>

        <Image
          src="/assets/images/image (2).svg"
          width={415}
          height={518}
          alt="image"
          className="hover:grayscale-0 transition duration-300 w-full sm:w-auto"
        />
      </div>

      <Footer />
    </div>
  );
};

export default Bilder;
