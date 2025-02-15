"use client";
import React from "react";
import { Cormorant_Garamond, Karla } from "next/font/google";
import Image from "next/image";
import Form from "@/components/form";

const my_font = Cormorant_Garamond({
  weight: "400",
  subsets: ["latin"],
});
const my_font2 = Karla({
  weight: "300",
  subsets: ["latin"],
});

const konzept = () => {
  return (
    <div className="flex justify-center flex-col mt-[100px] bg-maincolor">
<div className="relative w-full">
  <Image 
    src="assets/images/schuller_background.svg" 
    width={1540} 
    height={353} 
    alt="bg" 
    className="w-full h-auto object-cover"
  />
  <div className={`${my_font.className} absolute top-1/2 left-[5%] sm:left-[7%] md:left-[10%] transform -translate-y-1/2 max-w-[90%] lg:max-w-[50%]`}>
    <span className="text-[#C29E76] text-[4vw] sm:text-[3vw] md:text-[2vw] lg:text-[28px] leading-tight block">
      Schule für Musik & Kunst
    </span>
    <span className="font-extrabold text-[#ffffff] text-[8vw] sm:text-[6vw] md:text-[4vw] lg:text-[60px] leading-tight block">
      KONZEPT
    </span>
  </div>
</div>




      <div className="flex flex-col lg:flex-row justify-around p-6 sm:p-10 md:p-16 lg:p-20">
        <Image src="assets/images/konzept-pic.svg" height={530} width={379} alt="pic" className="mb-6 lg:mb-0 lg:mr-8 w-full max-w-[400px]" />
        <div className={`${my_font2.className} font-light text-black text-[4vw] sm:text-[3vw] md:text-[2.5vw] lg:text-[24px] flex flex-col justify-between leading-snug max-w-full lg:max-w-[835px]`}>
          <span>Musik ist eine Weltsprache. Sie reinigt die Seele und gibt Mut und Kraft in den unterschiedlichsten Situationen des Lebens.</span>
          <span>Ziel der Schule für Musik und Kunst Armina Aristak ist es, die Schüler auf ein hohes künstlerisches Niveau zu bringen. Sie bietet Gesangs-, Instrumental- und Schauspiel-Unterricht an. Kinder und Jugendliche, Erwachsene und Senioren singen, spielen und schauspielern in einem gemeinsamen Projekt und treten auf der Bühne auf. Mit Erfolg: Viele Schüler haben bereits Aufträge von professionellen Theatern erhalten.</span>
          <div className="flex flex-col">
            <span>Zum nächstmöglichsten Zeitpunkt suchen wir Laienmusiker für unser Ensemble. Kinder und Jugendliche, Erwachsene und Senioren, die Lust haben, an unseren Projekten teilzunehmen, sind herzlich eingeladen. Ein Termin für das Vorspiel wird persönlich vereinbart.</span>
            <span>Bei Interesse bitten wir Sie, das Kontaktformular auszufüllen.</span>
          </div>
          <div className="font-bold flex flex-col">
            <span>Wir freuen uns auf gemeinsame Projekte mit Ihnen.</span>
            <span>Vielen Dank</span>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute left-0 right-0 flex justify-center">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default konzept;