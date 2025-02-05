/* eslint-disable react/no-unescaped-entities */
import { Header } from '@/components';
import React from 'react';
import Image from 'next/image';

const Bewertungen = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto mt-[100px]">
        <div className="bg-[#EFEBE8] mt-[20px]">
          <div className="flex gap-1 ml-[9rem]">
            <Image
              src="/assets/images/vertical_line.svg"
              alt="vertical_line"
              width={7}
              height={45}
              className="mt-[10px]"
            />
            <span className="md:text-[60px] font-cormorant mt-[10px]">
              Was Unsere Schüler Sagen
            </span>
          </div>

          <div className="grid grid-cols-2 gap-8 mt-10 ml-[180px]">
            <div className="w-fit mx-auto text-left space-y-5 flex flex-col">
              <span className="text-2xl font-bold md:text-[32px] font-cormorant text-[#1E2B3B] max-w-md lg:max-w-lg">
                Meyer Irmgard
              </span>
              <span className="text-sm font-Karla md:text-[16px] text-[#000000] capitalize max-w-sm">
                My daughter gave me singing lessons at Armina&apos;s. Armina has a great voice, works with great joy and transmits this joy. Sensitive and competent, she teaches singing techniques and practices them with me, so that after a short time, success could be heard. It was a lot of fun!
              </span>
            </div>

            <div className="w-fit mx-auto text-left space-y-5 flex flex-col">
              <span className="text-2xl font-bold md:text-[32px] font-cormorant text-[#1E2B3B] max-w-md lg:max-w-lg">
                Petra Harres
              </span>
              <span className="text-sm font-Karla md:text-[16px] text-[#000000] capitalize max-w-sm">
                I searched the internet for a singing teacher and found Armina—an absolute stroke of luck! She has a great, expressive, and powerful voice and is a very sensitive, talented teacher. Using examples, she illustrates what can be improved while remaining patient and calm. Every singing lesson with her is a win, and on top of that, it's really fun.
              </span>
            </div>

            <div className="w-fit mx-auto text-left space-y-5 flex flex-col">
              <span className="text-2xl font-bold md:text-[32px] font-cormorant text-[#1E2B3B] max-w-md lg:max-w-lg">
                Lisa Schmitt
              </span>
              <span className="text-sm font-Karla md:text-[16px] text-[#000000] capitalize max-w-sm">
                Armina is an outstanding teacher with a unique ability to make learning fun. Her passion for singing is contagious, and I have improved so much thanks to her techniques and encouragement. Highly recommended!
              </span>
            </div>

            <div className="w-fit mx-auto text-left space-y-5 flex flex-col">
              <span className="text-2xl font-bold md:text-[32px] font-cormorant text-[#1E2B3B] max-w-md lg:max-w-lg">
                Michael Bauer
              </span>
              <span className="text-sm font-Karla md:text-[16px] text-[#000000] capitalize max-w-sm">
                I was hesitant at first, but after my first lesson with Armina, I knew I had made the right choice. She is professional, kind, and incredibly knowledgeable about vocal techniques. I can already hear a big difference in my voice.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bewertungen;
