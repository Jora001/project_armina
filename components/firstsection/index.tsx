import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Define the prop types for Counter
type CounterProps = {
  end: number;
};

const Counter: React.FC<CounterProps> = ({ end }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
  
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );
  
    if (currentRef) {
      observer.observe(currentRef);
    }
  
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);
  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setCount(Math.floor(start));
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isVisible, end]);

  return <div ref={ref}>{count}+</div>;
};

const Firstsection: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#EFEBE8] flex flex-col items-center px-4 md:px-12 lg:px-20 py-12">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 max-w-7xl w-full"
      >
        <div className="relative flex justify-center">
        <Image
              src="/assets/images/square.svg"
              alt="square"
              width={265}
              height={327}
              
              className="hidden md:block absolute top-[35%] right-[135px] w-[150px] md:w-[200px] lg:w-[265px] z-[-0]"
            />
          <Image
            src="/assets/images/imageyea.png"
            alt="image2"
            width={416}
            height={416}
            className="relative shadow-xl w-[80%] md:w-[350px] lg:w-[416px] h-auto"
          />
        </div>

        <div className="text-center md:text-left px-4">
          <h1 className="text-[28px] md:text-[50px] lg:text-[60px] text-[#1E2B3B] font-cormorant font-medium">
            Exploring The Beauty <br /> Of Adornments
          </h1>
           <div className="flex items-center justify-center md:justify-start  gap-4 mt-4 max-w-4xl w-200">
              <Image
                src="/assets/images/line.svg"
                width={7}
                height={0.8}
                alt="line"
                className="drop-shadow-lg hidden md:block"
              />
              <p className="text-[16px] md:text-[18px] lg:text-[18px] font-Karla text-[#1E2B3B] font-light leading-[1.4]">
                Ziel der Schule für Musik und Kunst{" "}
                <span className="whitespace-nowrap">Schüler</span> auf ein hohes
                künstlerisches Niveau zu bringen. Sie bietet Gesangs- <br />
                Instrumental- und Schauspiel-Unterricht an. Kinder und
                Jugendliche, Erwachsene und Senioren singen, spielen und
                schauspielern.
              </p>
            </div>
        </div>
      </motion.div>

      <div className="flex flex-col md:flex-row justify-center md:justify-between mt-20 gap-8 md:gap-16 text-center w-full max-w-7xl">
        {[
          { number: 10, title: 'Allüren der Erfahrung' },
          { number: 8, title: 'Allüren der Erfahrung' },
          { number: 120, title: 'Allüren der Erfahrung' },
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="flex flex-col items-center w-full md:w-1/3"
          >
            <h2 className="text-[48px] md:text-[80px] text-[#1B2733] font-['Cormorant_Garamond'] font-bold leading-none">
              <Counter end={stat.number} />
            </h2>
            <p className="text-[18px] md:text-[24px] leading-[26px] md:leading-[29.06px] text-[#1E2B3B] font-['Cormorant_Garamond']">
              {stat.title}
            </p>
            <p className="text-[14px] md:text-[20px] leading-[20px] md:leading-[23.38px] text-[#1E2B3B] font-['Cormorant_Garamond'] font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Firstsection;
