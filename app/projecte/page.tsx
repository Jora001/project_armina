"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Cormorant_Garamond } from "next/font/google";
import { motion } from "framer-motion";
import Form from "@/components/form";
import { Footer } from "@/components";

const myFont = Cormorant_Garamond({ weight: "700", subsets: ["latin"] });

// Team member data
const teamMembers = [
  {
    img: "/assets/images/image5.png",
    name: "Porjekt 1",
    desc: "Schauspielerin und\nTheaterpädagogin.",
    link: "/team/maria-belen",
  },
  {
    img: "/assets/images/tuxt.png",
    name: "Porjekt 2",
    desc: "Schauspielerin und\nTheaterpädagogin.",
    link: "/team/maria-belen",
  },
  {
    img: "/assets/images/bab.png",
    name: "Porjekt 3",
    desc: "Schauspielerin und\nTheaterpädagogin.",
    link: "/team/maria-belen",
  },
];

const projecte: React.FC = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-maincolor min-h-screen w-full flex flex-col items-center  "
    >
      <div className="relative w-full">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/assets/images/sch.png"
            width={1540}
            height={353}
            alt="Schule für Musik & Kunst"
            className="w-full h-auto object-cover"
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0.3 }}
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className={`${myFont.className} absolute top-1/2 left-[5%] sm:left-[7%] md:left-[10%] transform -translate-y-1/2 max-w-[90%] lg:max-w-[50%]`}
        >
          <span className="font-extrabold text-[#ffffff] block text-xl sm:text-3xl md:text-5xl">
            Projekte
          </span>
        </motion.div>
      </div>

      <section className="container mx-auto px-4 sm:px-6 md:px-8 py-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {teamMembers.map((person, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <motion.div
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0px 0px 20px rgba(0, 255, 255, 0.8)",
                }}
                transition={{ type: "spring", stiffness: 200 }}
                className="rounded-lg overflow-hidden cursor-pointer group relative"
              >
                <div className="absolute inset-0 bg-transparent group-hover:bg-cyan-500/20 transition duration-500 rounded-lg"></div>

                <Image
                  src={person.img}
                  width={320}
                  height={320}
                  alt={person.name}
                  className="rounded-lg shadow-md transition duration-500 group-hover:brightness-110"
                  loading="lazy"
                />
              </motion.div>

              <h3
                className={`${myFont.className} text-lg font-bold mt-4 text-[#000000]`}
              >
                {person.name}
              </h3>
              <p className="text-sm text-[#544f4a] font-semibold whitespace-pre-line">
                {person.desc}
              </p>

              <Link href="/detalis">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative w-[160px] h-[49px] flex items-center gap-2 border-2 border-[#C29E76] text-[#C29E76] text-lg px-6 py-3 overflow-hidden group mt-4"
                >
                  <span className="absolute left-0 w-full h-full bg-[#C29E76] scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
                  <div className="relative z-10 flex items-center gap-2 w-full justify-center">
                    <span className="group-hover:text-[#1E2B3B] font-cormorant text-[20px] whitespace-nowrap">
                      Details
                    </span>
                    <Image
                      src="/assets/images/Vector.png"
                      alt="vector-cursor"
                      width={16}
                      height={16}
                      className="w-4 h-4 transition duration-300 ease-in-out group-hover:opacity-0"
                    />
                    <Image
                      src="/assets/images/black_Vector_cursor.svg"
                      alt="vector-cursor"
                      width={16}
                      height={16}
                      className="w-4 h-4 transition duration-300 ease-in-out opacity-0 group-hover:opacity-100"
                    />
                  </div>
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="w-full flex justify-center py-10 px-6">
          <Form />
        </div>
      </section>
      <Footer />
    </motion.main>
  );
};

export default projecte;
