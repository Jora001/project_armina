import React from "react";
import { Cormorant_Garamond, Karla } from "next/font/google";
import Image from "next/image";

const my_font = Cormorant_Garamond({
  weight: "400",
  subsets: ["latin"], // Specify a subset for the Cormorant Garamond font
});
const my_font2 = Karla({
  weight: "400",
  subsets: ["latin"], // Specify a subset for the Karla font
});

const schuller = () => {
  return (
    <div className="flex justify-center flex-col mt-[100px] bg-maincolor">
      <div>
        <Image src="assets/images/schuller_background.svg" width={1540} height={353} alt="bg" className="relative" />
          <div className={`${my_font.className} flex flex-col pl-[100px] pt-[110px] absolute top-[120px] left-[10px]`}>
            <span className="text-[#C29E76] text-[28px] leading-[26.49px] mb-[10px]">
              Schule für Musik & Kunst
            </span>
            <span className="font-extrabold text-[60px] leading-[72.66px]">
              SCHÜLLER
            </span>
          </div>
      </div>
      <div className={`${my_font2.className} text-white grid grid-cols-3 gap-7 p-[90px]`}>
<div className='relative'>
    <Image src="/assets/images/pic_1_schuller.svg" width={411} height={278} alt='pic' className='z-2 filter brightness-[45%]' />
    <div className='absolute top-[120px] left-[155px] z-3'>
        <Image src="/assets/images/play_logo.svg" width={20.83} height={25} alt='play' className='ml-10'  />
        <span>Jetzt Spielen</span>
    </div>
</div>
<div className='relative'>
    <Image src="/assets/images/pic_2_schuller.svg" width={411} height={278} alt='pic' className='z-2 filter brightness-[45%]' />
    <div className='absolute top-[120px] left-[155px] z-3'>
        <Image src="/assets/images/play_logo.svg" width={20.83} height={25} alt='play' className='ml-10'  />
        <span>Jetzt Spielen</span>
    </div>
</div>
<div className='relative'>
    <Image src="/assets/images/pic_3_schuller.svg" width={411} height={278} alt='pic' className='z-2 filter brightness-[45%]' />
    <div className='absolute top-[120px] left-[155px] z-3'>
        <Image src="/assets/images/play_logo.svg" width={20.83} height={25} alt='play' className='ml-10' />
        <span>Jetzt Spielen</span>
    </div>
</div>
<div className='relative'>
    <Image src="/assets/images/pic_4_schuller.svg" width={411} height={278} alt='pic' className='z-2 filter brightness-[45%]' />
    <div className='absolute top-[120px] left-[155px] z-3'>
        <Image src="/assets/images/play_logo.svg" width={20.83} height={25} alt='play' className='ml-10'  />
        <span>Jetzt Spielen</span>
    </div>
</div>
<div className='relative'>
    <Image src="/assets/images/pic_5_schuller.svg" width={411} height={278} alt='pic' className='z-2 filter brightness-[45%]' />
    <div className='absolute top-[120px] left-[155px] z-3'>
        <Image src="/assets/images/play_logo.svg" width={20.83} height={25} alt='play' className='ml-10'  />
        <span>Jetzt Spielen</span>
    </div>
</div>
<div className='relative'>
    <Image src="/assets/images/pic_6_schuller.svg" width={411} height={278} alt='pic' className='z-2 filter brightness-[45%]' />
    <div className='absolute top-[120px] left-[155px] z-3'>
        <Image src="/assets/images/play_logo.svg" width={20.83} height={25} alt='play' className='ml-10'  />
        <span>Jetzt Spielen</span>
    </div>
</div>
</div>
<div className={`${my_font.className} flex justify-center`}>
<button className='border-[#1E2B3B] border-solid border-[1px] w-[138px] h-[48px] text-[#1E2B3B] font-bold'>Alles sehen</button>
</div>
</div>)
};

export default schuller;

{/* <div className={`${my_font2.className} text-white grid grid-cols-3 gap-7 p-[90px]`}>
<div className='relative'>
    <Image src="/assets/images/pic_1_schuller.svg" width={411} height={278} alt='pic' className='z-2 filter brightness-[45%]' />
    <div className='absolute top-[120px] left-[155px] z-3'>
        <Image src="/assets/images/play_logo.svg" width={20.83} height={25} alt='play' className='ml-10'  />
        <span>Jetzt Spielen</span>
    </div>
</div>
<div className='relative'>
    <Image src="/assets/images/pic_2_schuller.svg" width={411} height={278} alt='pic' className='z-2 filter brightness-[45%]' />
    <div className='absolute top-[120px] left-[155px] z-3'>
        <Image src="/assets/images/play_logo.svg" width={20.83} height={25} alt='play' className='ml-10'  />
        <span>Jetzt Spielen</span>
    </div>
</div>
<div className='relative'>
    <Image src="/assets/images/pic_3_schuller.svg" width={411} height={278} alt='pic' className='z-2 filter brightness-[45%]' />
    <div className='absolute top-[120px] left-[155px] z-3'>
        <Image src="/assets/images/play_logo.svg" width={20.83} height={25} alt='play' className='ml-10' />
        <span>Jetzt Spielen</span>
    </div>
</div>
<div className='relative'>
    <Image src="/assets/images/pic_4_schuller.svg" width={411} height={278} alt='pic' className='z-2 filter brightness-[45%]' />
    <div className='absolute top-[120px] left-[155px] z-3'>
        <Image src="/assets/images/play_logo.svg" width={20.83} height={25} alt='play' className='ml-10'  />
        <span>Jetzt Spielen</span>
    </div>
</div>
<div className='relative'>
    <Image src="/assets/images/pic_5_schuller.svg" width={411} height={278} alt='pic' className='z-2 filter brightness-[45%]' />
    <div className='absolute top-[120px] left-[155px] z-3'>
        <Image src="/assets/images/play_logo.svg" width={20.83} height={25} alt='play' className='ml-10'  />
        <span>Jetzt Spielen</span>
    </div>
</div>
<div className='relative'>
    <Image src="/assets/images/pic_6_schuller.svg" width={411} height={278} alt='pic' className='z-2 filter brightness-[45%]' />
    <div className='absolute top-[120px] left-[155px] z-3'>
        <Image src="/assets/images/play_logo.svg" width={20.83} height={25} alt='play' className='ml-10'  />
        <span>Jetzt Spielen</span>
    </div>
</div>
</div>
<div className={`${my_font.className} flex justify-center`}>
<button className='border-[#1E2B3B] border-solid border-[1px] w-[138px] h-[48px] text-[#1E2B3B] font-bold'>Alles sehen</button>
</div>
</div>)
} */}