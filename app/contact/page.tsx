"use client"
import React from 'react'
import Image from 'next/image'
import { useState } from 'react';

const Contact = () => {
  const [isSent, setIsSent] = useState(false);
  
  const handleSend = () => {
    setIsSent(true);
    setTimeout(() => setIsSent(false), 3000);
  } 


  return (
    <div className=''>
      <div className='w-full min-h-screen bg-[#EFEBE8]'>

      <div className='relative w-full h-[200px] md:h-[353px] mt-5 bg-[url(/assets/images/kontakt_image.svg)] bg-cover bg-center'>
        <div className="absolute inset-0 bg-[rgba(42,46,57,0.20)]">
          <div className='flex flex-col h-full justify-center ml-[150px] space-y-6'>
            <h1 className='text-3xl md:text-5xl font-cormorant text-white font-bold '>
              KONTAKT
            </h1>
            <h2 className='text-3xl md:text-5xl font-cormorant text-white font-bold '>
              AUFNEHMEN
            </h2>
          </div>
        </div>
      </div>


<div className="flex flex-col md:flex-row items-center justify-center px-4 py-8 md:py-6">

  <div className="hidden md:block w-full md:w-[488px]">
    <Image 
      src='/assets/images/Hero_image.svg' 
      alt='Hero image' 
      width={488} 
      height={743}
      className="w-full h-auto"
    />
  </div>
  

  <div className="w-full md:w-[693px] bg-white  md:p-12 h-[743px]">
    <div className="space-y-14">
      <div className="space-y-6">
        <div className='flex items-center gap-4'>  
          <Image 
            src="/assets/images/letter_icon.svg" 
            alt="email icon" 
            width={30} 
            height={23}
          />
          <p className="text-lg md:text-2xl font-Karla">andreaDesign@gmail.com</p>                      
        </div>
        
        {/* Phone */}
        <div className='flex items-center gap-4'>  
          <Image 
            src="/assets/images/phone_icon.svg" 
            alt="phone icon" 
            width={30} 
            height={30}
          />
          <p className="text-lg md:text-2xl font-Karla">+34 123 456 789</p>                      
        </div>
        
        <div className='flex items-center gap-4'>  
          <Image 
            src="/assets/images/location_icon.svg" 
            alt="location icon" 
            width={30} 
            height={38}
          />
          <p className="text-lg md:text-2xl font-Karla">123 Street 487 House</p>                      
        </div>
     </div>

      <form className="space-y-6">
        <div>
          <label className="text-[#1E2B3B] text-lg font-cormorant block mb-2">
            Your name
          </label>
          <input 
            type="text"
            className="w-full border-b-2 border-[#959595] focus:outline-none p-2" 
            placeholder="John Smith"
          />
        </div>


        <div>
          <label className="text-[#1E2B3B] text-lg font-cormorant block mb-2">
            Your email
          </label>
          <input 
            type="email"
            className="w-full border-b-2 border-[#959595] focus:outline-none p-2"
            placeholder="email@gmail.com"
          />
        </div>
  
        <div>
          <label className="text-[#1E2B3B] text-lg font-cormorant block mb-2">
            Your message
          </label>
          <div className="border border-[#1E2B3B] rounded-lg p-2 h-[110px]">
            <textarea 
              className="w-full h-full outline-none bg-transparent resize-none"
            />
          </div>
        </div>

        <button
          onClick={handleSend}
          className={`w-full h-[56px] font-cormorant text-lg font-semibold transition-colors duration-300
            ${isSent ? "bg-green-500" : "bg-[#1E2B3B] hover:bg-[#35485D]"} text-white`}>
              {isSent ? "Sent Successfully!" : "Send message"}
        </button>
      </form>
    </div>
  </div>
</div>
</div>
    </div>
  )
}

export default Contact