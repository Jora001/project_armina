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
   <Form />
</div>
  )
}

export default projecte