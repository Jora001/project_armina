
import React from "react";
import { Cormorant_Garamond, Karla } from "next/font/google";
import Image from "next/image";

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
      <div>
        <Image src="assets/images/schuller_background.svg" width={1540} height={353} alt="bg" className="relative" />
          <div className={`${my_font.className} flex flex-col pl-[100px] pt-[110px] absolute top-[120px] left-[10px]`}>
            <span className="text-[#C29E76] text-[28px] leading-[26.49px] mb-[10px]">
              Schule für Musik & Kunst
            </span>
            <span className="font-extrabold text-[60px] leading-[72.66px]">
              KONZEPT
            </span>
          </div>
      </div>
      <div className="flex justify-around p-[80px]">
        <Image src="assets/images/konzept-pic.svg" height={530} width={379} alt="pic" className="mr-[30px]" />
        <div className={`${my_font2.className} font-[300] w-[835px] text-black text-[24px] flex flex-col justify-between leading-[28.06px]`}>
          <span>Musik ist eine Weltsprache. Sie reinigt die Seele und gibt Mut und Kraft in den unterschiedlichsten Situationen des Lebens.</span>
          <span>Ziel der Schule für Musik und Kunst Armina Aristak ist es, die Schüler auf ein hohes künstlerisches Niveau zu bringen. Sie bietet Gesangs-, Instrumental- und Schauspiel-Unterricht an. Kinder und Jugendliche, Erwachsene und Senioren singen, spielen und schauspielern in einem gemeinsamen Projekt und treten auf der Bühne auf. Mit Erfolg: Viele Schüler haben bereits Aufträge von professionellen Theatern erhalten</span>
          <div className="flex flex-col">
            <span>Zum nächstmöglichsten Zeitpunkt suchen wir Laienmusiker für unser Ensemble. Kinder und Jugendliche, Erwachsene und Senioren, die Lust haben, an unseren Projekten teilzunehmen, sind herzlich eingeladen. Ein Termin für das Vorspiel wird persönlich vereinbart.</span>
            <span>Bei Interesse bitten wir Sie, das Kontaktformular auszufüllen.</span>
          </div>
          <div className="font-[700] flex flex-col">
            <span>Wir freuen uns auf gemeinsame Projekte mit Ihnen.</span>
            <span>Vielen Dank</span>
          </div>
        </div>
      </div>
    </div>)
}

export default konzept;
