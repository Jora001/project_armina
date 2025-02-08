import React from 'react'
import Image from 'next/image'
import { Cormorant_Garamond } from 'next/font/google';

// Specify a subset to prevent the Next.js build error
const my_font = Cormorant_Garamond({
  weight: '400',
  subsets: ['latin'], // Choose an appropriate subset (e.g., 'latin', 'cyrillic', etc.)
});

const Bilder = () => {
  return (
    <div className="flex flex-col bg-maincolor mt-[100px]">
      <div className="relative">
        <Image 
          src="/assets/images/schuller_background.svg" 
          height={353} 
          width={1540} 
          alt="pic" 
          className="relative"
        />
        <div className={`${my_font.className} flex flex-col pl-[100px] pt-[110px] absolute top-[120px] left-[90px]`}>
          <span className="text-[#C29E76] text-[28px] leading-[26.49px] mb-[10px]">Armina Aristak</span>
          <span className="font-bold text-[60px] leading-[72.66px]">BILDER</span>
        </div>
      </div>
      <div className="flex justify-center gap-3 mt-[20px] mb-[30px]">
        <Image 
          src="/assets/images/image.svg" 
          width={407} 
          height={518} 
          alt="image" 
          className="grayscale hover:grayscale-0 transition duration-500"
        />
        <div className="grid grid-cols-2 gap-2">
          <Image 
            src="/assets/images/image (1).svg" 
            width={407} 
            height={274} 
            alt="image" 
            className="col-span-2 grayscale hover:grayscale-0 transition duration-300"
          />
          <Image 
            src="/assets/images/image (3).svg" 
            width={199} 
            height={234} 
            alt="image" 
            className="grayscale hover:grayscale-0 transition duration-300"
          />
          <Image 
            src="/assets/images/image (4).svg" 
            width={199} 
            height={234} 
            alt="image" 
            className="grayscale hover:grayscale-0 transition duration-300"
          />
        </div>
        <Image 
          src="/assets/images/image (2).svg" 
          width={415} 
          height={518} 
          alt="image" 
          className="grayscale hover:grayscale-0 transition duration-300"
        />
      </div>
    </div>
  );
}

export default Bilder;
