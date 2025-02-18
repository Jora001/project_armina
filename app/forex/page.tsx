"use client";

import { Cormorant_Garamond } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Footer } from "@/components";

const my_font = Cormorant_Garamond({
  weight: "400",
  subsets: ["latin"],
});

const Forex = () => {
  return (
    <main className="bg-maincolor min-h-screen w-full flex flex-col items-center">
      {/* Background Image with Title */}
      <div className="flex flex-col lg:flex-row pt-[30px] pb-[30px] justify-evenly bg-maincolor px-5 lg:px-[40px]">
        <Image 
          src="/assets/images/axjik.png" 
          width={446} 
          height={553} 
          alt="img" 
          className="w-full max-w-[379px] h-[553px] mx-auto lg:mx-0"
        />
        <div className={`${my_font.className} flex flex-col text-black max-w-full lg:w-[50%] text-[22px] font-light`}>
          <span className="text-justify">
            Musik ist eine Weltsprache. Sie reinigt die Seele und gibt Mut und Kraft in den unterschiedlichsten Situationen des Lebens. <br /><br />
            Ziel der Schule für Musik und Kunst Armina Aristak ist es, die Schüler auf ein hohes künstlerisches Niveau zu bringen. Sie bietet Gesangs-, Instrumental- und Schauspiel-Unterricht an. Kinder und Jugendliche, Erwachsene und Senioren singen, spielen und schauspielern in einem gemeinsamen Projekt und treten auf der Bühne auf. Mit Erfolg: Viele Schüler haben bereits Aufträge von professionellen Theatern erhalten. <br /><br />
            Zum nächstmöglichsten Zeitpunkt suchen wir Laienmusiker für unser Ensemble. Kinder und Jugendliche, Erwachsene und Senioren, die Lust haben, an unseren Projekten teilzunehmen, sind herzlich eingeladen. Ein Termin für das Vorspiel wird persönlich vereinbart.
            Bei Interesse bitten wir Sie, das Kontaktformular auszufüllen. <br /><br />
            <span className="text-justify font-bold text-[22px]">
  Wir freuen uns auf gemeinsame Projekte mit Ihnen. <br /> Vielen Dank.
</span>
          </span>
        </div>
      </div>

      {/* Button Section */}
      <div className="flex justify-start ml-[300px] w-full py-8">
        <Link href="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative w-[160px] h-[49px] flex items-center gap-2 border-2 border-[#C29E76] bg-[#C29E76] text-black text-lg px-6 py-3 overflow-hidden group mt-4"
          >
            <span className="absolute left-0 w-full h-full bg-[#C29E76] scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
            <div className="relative z-10 flex items-center gap-2 w-full justify-center">
              <span className="font-cormorant text-[20px] whitespace-nowrap">
                Jetzt buchen
              </span>
              <Image
                src="/assets/images/black_Vector_cursor.svg" 
                alt="vector-cursor" 
                width={16} 
                height={16} 
                className="w-4 h-4"
              />
            </div>
          </motion.button>
        </Link>
      </div>
              <Footer/>
      
    </main>
  );
};

export default Forex;
