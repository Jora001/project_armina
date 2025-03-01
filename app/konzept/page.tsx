"use client";
import React, { useRef } from "react";
import { Cormorant_Garamond, Karla } from "next/font/google";
import Image from "next/image";
import Form from "@/components/form";
import { Footer } from "@/components";
import { motion } from "framer-motion";

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

  return (
    <main className="bg-maincolor min-h-screen w-full flex flex-col items-center ">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative w-full"
      >
        <Image
          src="/assets/images/schuller_background.svg"
          width={1540}
          height={353}
          alt="bg"
          className="w-full h-auto object-cover"
          priority
        />
        <motion.div
          ref={titleRef}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className={`${my_font.className} absolute top-1/2 left-4 sm:left-10 md:left-16 transform -translate-y-1/2 w-[90%] md:w-[60%] lg:w-[50%]`}
        >
          <span className="text-[#C29E76] text-[5vw] sm:text-[4vw] md:text-[3vw] lg:text-[25px] leading-tight block">
            Schule für Musik & Kunst
          </span>
          <span className="font-extrabold text-[#ffffff] text-[5vw] sm:text-[7vw] md:text-[5vw] lg:text-[50px] leading-tight block">
            KONZEPT
          </span>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center"
      >
        <div className="w-full max-w-[1400px] px-4 sm:px-8 md:px-12 lg:px-20 py-10 flex flex-col lg:flex-row items-center gap-8">
          <motion.div
            ref={imgRef}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/assets/images/konzept-pic.svg"
              height={530}
              width={379}
              alt="pic"
              className="w-full max-w-[400px] lg:max-w-[500px] h-auto"
            />
          </motion.div>

          <motion.div
            ref={textRef}
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`${my_font2.className} text-black text-[5vw] sm:text-[3.5vw] md:text-[2.5vw] lg:text-[22px] leading-snug max-w-full lg:max-w-[835px]`}
          >
            <p className="mb-4">
              Musik ist eine Weltsprache. Sie reinigt die Seele und gibt Mut und
              Kraft in den unterschiedlichsten Situationen des Lebens.
            </p>
            <p className="mb-4">
              Ziel der Schule für Musik und Kunst Armina Aristak ist es, die
              Schüler auf ein hohes künstlerisches Niveau zu bringen. Sie bietet
              Gesangs-, Instrumental- und Schauspiel-Unterricht an. Kinder und
              Jugendliche, Erwachsene und Senioren singen, spielen und
              schauspielern in einem gemeinsamen Projekt und treten auf der
              Bühne auf. Mit Erfolg: Viele Schüler haben bereits Aufträge von
              professionellen Theatern erhalten.
            </p>
            <p className="mb-4">
              Zum nächstmöglichsten Zeitpunkt suchen wir Laienmusiker für unser
              Ensemble. Kinder und Jugendliche, Erwachsene und Senioren, die
              Lust haben, an unseren Projekten teilzunehmen, sind herzlich
              eingeladen. Ein Termin für das Vorspiel wird persönlich
              vereinbart. Bei Interesse bitten wir Sie, das Kontaktformular
              auszufüllen.
            </p>
            <div className="font-bold mt-6">
              <p>Wir freuen uns auf gemeinsame Projekte mit Ihnen.</p>
              <p>Vielen Dank</p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        ref={formRef}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full flex justify-center py-10 px-4"
      >
        <Form />
      </motion.div>

      <Footer />
    </main>
  );
};

export default Konzept;
