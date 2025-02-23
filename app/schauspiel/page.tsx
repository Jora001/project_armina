"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Karla } from "next/font/google";
import { motion } from "framer-motion";
import { Footer } from "@/components";

const myFont = Karla({ weight: "700", subsets: ["latin"] });

// Team member data
const teamMembers = [
  { img: "/assets/images/image(9).png", name: "María Belén Arellano", desc: "Piano Lehrer", link: "/team/maria-belen" },
  // { img: "/assets/images/image(9).png", name: "María Belén Arellano", desc: "Piano Lehrer", link: "/team/maria-belen" },
  // { img: "/assets/images/image(9).png", name: "María Belén Arellano", desc: "Piano Lehrer", link: "/team/maria-belen" },
];

const Schauspiel: React.FC = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-maincolor min-h-screen w-full flex flex-col items-center"
    >
      {/* Background Image with Title */}
      <div className="relative w-full">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/assets/images/schuller_background.svg"
            width={1540}
            height={353}
            alt="Schule für Musik & Kunst"
            className="w-full h-auto object-cover"
            priority
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className={`${myFont.className} absolute top-1/2 left-[5%] sm:left-[7%] md:left-[10%] transform -translate-y-1/2 max-w-[90%] lg:max-w-[50%]`}
        >
          <span className="text-[#C29E76] block text-sm sm:text-lg md:text-xl">
            Schule für Musik & Kunst
          </span>
          <span
            className="font-bold text-[#ffffff] block"
            style={{ fontSize: "clamp(18px, 3.5vw, 40px)", whiteSpace: "nowrap" }}
          >
            SCHAUSPIEL
          </span>
        </motion.div>
      </div>

      {/* Team Section */}
      <section className="container mx-auto px-4 sm:px-6 md:px-8 py-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
        >
          {teamMembers.map((person, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <Image
                src={person.img}
                width={250}
                height={250}
                alt={person.name}
                className="rounded-lg shadow-md"
                loading="lazy"
              />
              <h3 className={`${myFont.className} text-lg font-bold mt-4 text-[#000000]`}>
                {person.name}
              </h3>
              <p className="text-sm text-[#544f4a] font-semibold">{person.desc}</p>
              <Link href="/jetz">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative w-[160px] h-[49px] flex items-center gap-2 border-2 border-[#C29E76] text-[#C29E76] text-lg px-6 py-3 overflow-hidden group mt-4"
                >
                  <span className="absolute left-0 w-full h-full bg-[#C29E76] scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
                  <div className="relative z-10 flex items-center gap-2 w-full justify-center">
                    <span className="group-hover:text-[#1E2B3B] font-cormorant text-[20px] whitespace-nowrap">
                      Jetzt buchen
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
      </section>
      <Footer/>
      
    </motion.main>
  );
};

export default Schauspiel;
