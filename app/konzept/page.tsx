"use client";
import React, { useEffect, useRef } from "react";
import { Cormorant_Garamond, Karla } from "next/font/google";
import Image from "next/image";
import Form from "@/components/form";
import { gsap } from "gsap";
import { Footer } from "@/components";

const my_font = Cormorant_Garamond({
  weight: "400",
  subsets: ["latin"],
});
const my_font2 = Karla({
  weight: "300",
  subsets: ["latin"],
});

const Konzept = () => {
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const imgRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    gsap.from(titleRef.current, {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: "power2.out",
    });

    gsap.from(imgRef.current, {
      opacity: 0,
      x: -50,
      duration: 1.2,
      delay: 0.3,
      ease: "power2.out",
    });

    gsap.from(textRef.current, {
      opacity: 0,
      y: 30,
      duration: 1.2,
      delay: 0.5,
      ease: "power2.out",
    });

    gsap.from(formRef.current, {
      opacity: 0,
      y: 50,
      duration: 1.2,
      delay: 0.8,
      ease: "power2.out",
    });
  }, []);

  return (
    <main className="bg-maincolor min-h-screen w-full flex flex-col items-center">
      {/* Header Image Section */}
      <div className="relative w-full">
        <Image
          src="/assets/images/schuller_background.svg"
          width={1540}
          height={353}
          alt="bg"
          className="w-full h-auto object-cover"
        />
        <div
          ref={titleRef}
          className={`${my_font.className} absolute top-1/2 left-[5%] sm:left-[7%] md:left-[10%] transform -translate-y-1/2 max-w-[90%] lg:max-w-[50%]`}
        >
          <span className="text-[#C29E76] text-[5vw] sm:text-[4vw] md:text-[3vw] lg:text-[28px] leading-tight block">
            Schule für Musik & Kunst
          </span>
          <span className="font-extrabold text-[#ffffff] text-[10vw] sm:text-[7vw] md:text-[5vw] lg:text-[60px] leading-tight block">
            KONZEPT
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full max-w-[1400px] px-6 sm:px-10 md:px-16 lg:px-20 py-10 flex flex-col lg:flex-row items-center">
        {/* Left Image */}
        <Image
          ref={imgRef}
          src="/assets/images/konzept-pic.svg"
          height={530}
          width={379}
          alt="pic"
          className="mb-6 lg:mb-0 lg:mr-8 w-full max-w-[400px] lg:max-w-[500px]"
        />

        {/* Text Content */}
        <div
          ref={textRef}
          className={`${my_font2.className} text-black text-[4vw] sm:text-[3vw] md:text-[2.5vw] lg:text-[22px] leading-snug max-w-full lg:max-w-[835px]`}
        >
          <p className="mb-4">
            Musik ist eine Weltsprache. Sie reinigt die Seele und gibt Mut und Kraft in den unterschiedlichsten Situationen des Lebens.
          </p>
          <p className="mb-4">
            Ziel der Schule für Musik und Kunst Armina Aristak ist es, die Schüler auf ein hohes künstlerisches Niveau zu bringen. Sie bietet Gesangs-, Instrumental- und Schauspiel-Unterricht an. Kinder und Jugendliche, Erwachsene und Senioren singen, spielen und schauspielern in einem gemeinsamen Projekt und treten auf der Bühne auf. Mit Erfolg: Viele Schüler haben bereits Aufträge von professionellen Theatern erhalten.
          </p>
          <p className="mb-4">
            Zum nächstmöglichsten Zeitpunkt suchen wir Laienmusiker für unser Ensemble. Kinder und Jugendliche, Erwachsene und Senioren, die Lust haben, an unseren Projekten teilzunehmen, sind herzlich eingeladen. Ein Termin für das Vorspiel wird persönlich vereinbart.
          </p>
          <p className="mb-4">
            Bei Interesse bitten wir Sie, das Kontaktformular auszufüllen.
          </p>
          <div className="font-bold mt-6">
            <p>Wir freuen uns auf gemeinsame Projekte mit Ihnen.</p>
            <p>Vielen Dank</p>
          </div>
        </div>
      </div>

      {/* Form Section - Placed Below for Mobile */}
      <div ref={formRef} className="w-full flex justify-center py-10 px-6">
        <Form />
      </div>
      <Footer/>
    </main>
  );
};

export default Konzept;
