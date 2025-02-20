import { Footer, Header } from '@/components';
import React from 'react';
import Image from 'next/image';

const Bewertungen = () => {
  const data = [
    {
      name: 'Meyer Irmgard',
      text: `I searched the Internet for a singing teacher and came across Armina – an absolute stroke of luck!!! She has a great, expressive and powerful voice and is a very sensitive, talented teacher. Using examples, she illustrates what can be improved. She always remains patient and calm. Every singing lesson with her is a win and on top of that it's really fun.`,
    },
    {
      name: 'Meyer Irmgard',
      text: `My daughter gave me singing lessons at Armina's. Armina has a great voice, works with great joy and transmits this joy. Sensitive and competent she teaches singing techniques and practiced them with me, so that after a short time a success could be heard. It was a lot of fun!`,
    },
    {
      name: 'Petra Harres',
      text: `I searched the Internet for a singing teacher and came across Armina – an absolute stroke of luck! She has a great, expressive and powerful voice and is a very sensitive, talented teacher. Using examples, she illustrates what can be improved. She always remains patient and calm. Every singing lesson with her is a win and on top of that it's really fun.`,
    },
    {
      name: 'Petra Harres',
      text: `I searched the Internet for a singing teacher and came across Armina – an absolute stroke of luck! She has a great, expressive and powerful voice and is a very sensitive, talented teacher. Using examples, she illustrates what can be improved. She always remains patient and calm. Every singing lesson with her is a win and on top of that it's really fun.`,
    },
    {
      name: 'Petra Harres',
      text: `I searched the Internet for a singing teacher and came across Armina – an absolute stroke of luck! She has a great, expressive and powerful voice and is a very sensitive, talented teacher. Using examples, she illustrates what can be improved. She always remains patient and calm. Every singing lesson with her is a win and on top of that it's really fun.`,
    },
    {
      name: 'Petra Harres',
      text: `I searched the Internet for a singing teacher and came across Armina – an absolute stroke of luck! She has a great, expressive and powerful voice and is a very sensitive, talented teacher. Using examples, she illustrates what can be improved. She always remains patient and calm. Every singing lesson with her is a win and on top of that it's really fun.`,
    },
  ];

  return (
    <div className='w-full min-h-screen bg-[#EFEBE8] flex flex-col items-center'>
      <Header />

      <div className='flex-grow container mx-auto mt-40 md:mt-16 lg:mt-24 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32'>
        <div className='text-center'>
          <div className='flex justify-center items-center gap-2'>
            <Image
              src='/assets/images/vertical_line.svg'
              alt='vertical_line'
              width={7}
              height={45}
              className='mt-[10px]'
            />
            <span className='text-3xl md:text-5xl lg:text-6xl font-cormorant mt-2 md:mt-4'>
              Was Unsere Schüler Sagen
            </span>
          </div>

          <div className='mt-12 grid grid-cols-1 md:grid-cols-2 gap-12'>
            {data.map((review, index) => (
              <div key={index} className='w-full text-left space-y-5'>
                <span className='text-2xl font-bold md:text-[32px] font-cormorant text-[#1E2B3B] block'>
                  {review.name}
                </span>
                <p className='text-sm font-Karla md:text-[16px] text-[#000000] capitalize'>
                  {review.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='mt-16 w-full'>
        <Footer />
      </div>
    </div>
  );
};

export default Bewertungen;
