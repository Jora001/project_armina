"use client"
import React from 'react'
import Image from 'next/image'
import Form from '@/components/form'

const menvideos = () => {
  return (
    <div className="w-full min-h-screen bg-[#EFEBE8]">

      {/* <div className='w-full min-h-screen bg-[#EFEBE8] md:mt-[100px]'> */}
      <div className='relative w-full h-[200px] md:h-[353px] md:mt-[5px] sm:mt-2 bg-[url(/assets/images/kontakt_image.svg)] bg-cover bg-center'>
        <div className='absolute inset-0 bg-[rgba(42,46,57,0.20)]'>
          <div className='container mx-auto px-4 sm:px-8 h-full flex flex-col justify-center md:ml-28'>
            <div className='flex flex-col gap-5'>
            <span className='text-xl sm:text-2xl md:text-[28px] font-cormorant text-[#C29E76] mb-2'>
              Armina Aristak
            </span>
            <span className='text-3xl sm:text-4xl md:text-[60px] font-cormorant text-white font-bold'>
              MEINE VIDEOS
            </span>
            </div>
          </div>
        </div>
      </div>

  <div className="container mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-8 md:mt-8 ">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 place-items-center">
      <div className="w-full max-w-[409px] relative">
        <Image src="/assets/images/cover1.svg" alt="rectangle_video" width={409} height={278} className="w-full h-auto"/>
          <div className="absolute inset-0 bg-black bg-opacity-45"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
               <Image src="/assets/images/play_logo.svg" alt="play_logo" width={20.83} height={25} className="mb-2 cursor-pointer"/>
                  <span className="text-white text-2xl font-Karla text-[19px]  px-4 py-2 rounded-md cursor-pointer hover-underline">
                      Jetzt Spielen
                  </span>
            </div>
        </div>

<div className="w-full max-w-[409px] relative">
  <Image src="/assets/images/cover2.svg" alt="rectangle_video" width={409} height={278} className="w-full h-auto"/>
    <div className="absolute inset-0 bg-black bg-opacity-45"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <Image src="/assets/images/play_logo.svg" alt="play_logo" width={20.83} height={25} className="mb-2 cursor-pointer"/>
           <span className="text-white text-2xl font-Karla text-[19px]  px-4 py-2 rounded-md cursor-pointer hover-underline">
               Jetzt Spielen
           </span>
    </div>
</div>
        <div className="w-full max-w-[409px] relative"><Image src="/assets/images/cover3.svg" alt="rectangle_video" width={409} height={278} className="w-full h-auto"/>
          <div className="absolute inset-0 bg-black bg-opacity-45"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <Image src="/assets/images/play_logo.svg" alt="play_logo"width={20.83} height={25} className="mb-2 cursor-pointer"/>
                  <span className="text-white text-2xl font-Karla text-[19px]  px-4 py-2 rounded-md cursor-pointer  hover-underline">
                    Jetzt Spielen
                  </span>
            </div>
          </div>
        </div>
      </div>
    <Form /> 
  </div>
// </div>
  )
}

export default menvideos