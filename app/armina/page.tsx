import React from 'react'
import Image from 'next/image'
import { Cormorant_Garamond } from 'next/font/google';

const my_font = Cormorant_Garamond({weight: "400"});

const armina = () => {
  return (
    <div className='flex flex-col bg-maincolor'>
      <div className='bg-[url(/assets/images/schuller_background.svg)] h-[353px] mt-[75px] w-[1440px]'>
        <div className={`${my_font.className} flex flex-col pl-[100px] pt-[110px]`}>
            <span className='text-[#C29E76] text-[28px] leading-[26.49px] mb-[10px]'>Armina Aristak</span>
            <span className='font-bold text-[60px] leading-[72.66px]'>BILDER</span>
        </div>
      </div>
      <div className='flex justify-center gap-3 mt-[20px] mb-[30px]'>
        <Image src="/assets/images/image.svg" width={"407"} height={"518"} alt='image' />
        <div className='grid grid-cols-2 gap-2'>
          <Image src="/assets/images/image (1).svg" width={"407"} height={"274"} alt='image' className='col-span-2' />
          <Image src="/assets/images/image (3).svg" width={"199"} height={"234"} alt='image' />
          <Image src="/assets/images/image (4).svg" width={"199"} height={"234"} alt='image' />
        </div>
        <Image src="/assets/images/image (2).svg" width={"415"} height={"518"} alt='image' />
      </div>
    </div>
  )
}

export default armina