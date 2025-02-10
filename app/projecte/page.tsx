"use client"
import React from 'react'
import Image from 'next/image'
import Form from '@/components/form'


const projecte = () => {
  return (

    <div className='w-full min-h-screen bg-[#EFEBE8] md:mt-[100px]'>
    <div className='relative w-full h-[200px] md:h-[353px] md:mt-5 sm:mt-2 bg-[url(/assets/images/kontakt_image.svg)] bg-cover bg-center'>
<div className="absolute inset-0 bg-[rgba(42,46,57,0.20)]">
<div className='flex flex-col h-full justify-center md:ml-[150px]  ml-6 space-y-6'>
  <h1 className='text-3xl md:text-5xl font-cormorant text-white font-bold '>
    Projekte
  </h1>
</div>
</div>
</div>
   <div className=' flex flex-wrap md:mt-[60px] md:ml-[150px] gap-5 md:flex-row'>
<Image src="/assets/images/piano_img.svg" alt='piano_img' width={274} height={581} className='object-cover w-full md:w-auto'/>
<Image src="/assets/images/sertificate.svg" alt='sertificate' width={274} height={581} className='object-cover w-full md:w-auto'/>
<div>

</div>

</div> 
<div className="h-[110vh] bg-[#EFEBE8] md:ml-[70px]">
<div className="max-w-[95%] md:w-[1219px] min-h-[400px] md:h-[596px] items-center justify-center bg-white  md:mt-[100px] pt-20 md:ml-[80px]">
  <div className=" grid grid-cols-1 md:grid-cols-2 gap-28 md:ml-16 m-6">
   <div>
      <p className="text-2xl md:text-[50px] font-cormorant font-bold leading-tight">
      Let`&apos`s talk <br></br>
        on something <span className="text-[#C29E76]">great </span><br></br>
        together
        </p>
          <div className="flex items-center  ">
          <Image src="/assets/images/letter_icon.svg" alt="letter_icon" width={30} height={23} className="mt-[30px]"/>
          <p className="md:ml-9 ml-3 mt-[30px] m-19 md:text-[24px] font-Karla">andreaDesign@gmail.com</p>
          </div>
          <div className="flex items-center ">
          <Image src="/assets/images/phone_icon.svg" alt="letter_icon" width={30} height={30} className="mt-[30px]"/>
          <p className="md:ml-9 ml-3 mt-[30px] m-19 md:text-[24px] font-Karla">+34 123 456 789</p>
          </div>
          <div className="flex items-center">
          <Image src="/assets/images/location_icon.svg" alt="letter_icon" width={30} height={38} className="mt-[30px]"/>
          <p className="md:ml-9 ml-3 mt-[30px] m-19 md:text-[24px] font-Karla">123 Street 487 House</p>
          </div>
    </div>
         <Form />
     </div>
  </div>
 </div>
</div>
  )
}

export default projecte