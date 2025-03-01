"use client";

import { Cormorant_Garamond } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Footer } from "@/components";

const myFont = Cormorant_Garamond({
  weight: "400",
  subsets: ["latin"],
});

const Music = () => {
  return (
    <main className="bg-maincolor min-h-screen w-full flex flex-col items-center">
      <div className="relative w-full">
        <Image
          src="/assets/images/schuller_background.svg"
          width={1540}
          height={353}
          alt="Background"
          className="w-full h-auto object-cover"
          priority
        />
        <div
          className={`${myFont.className} absolute top-1/2 left-[5%] sm:left-[7%] md:left-[10%] transform -translate-y-1/2 max-w-[90%] lg:max-w-[50%]`}
        >
          <span className="text-[#C29E76] text-[5vw] sm:text-[4vw] md:text-[3vw] lg:text-[25px] leading-tight block">
            Schule für Musik & Kunst
          </span>
          <span className="font-extrabold text-white text-[4vw] sm:text-[7vw] md:text-[5vw] lg:text-[40px] leading-tight block">
            MUSIKUNTERRICHT FÜR <br /> KINDER AB 4 JAHREN
          </span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row pt-[30px] lg:px-[70px] gap-6">
        <Image
          src="/assets/images/dasnam.png"
          width={700}
          height={500}
          alt="Dora im Musikwald"
          className="w-full lg:w-[800px] h-auto lg:h-[350px] mx-auto lg:mx-0 object-cover"
        />
        <span
          className={`${myFont.className} max-w-full lg:w-[1268px] text-[18px] lg:text-[22px] border-t border-black pt-[30px] pb-[30px] text-justify`}
        >
          <strong>Der märchenhafte Weg in die Musik –</strong> <br />
          Das Konzept „Dora im Musikwald“ <br />
          Kinder lieben Musik. Schon im Mutterleib reagieren sie auf Töne und
          Melodien, bereits in jüngsten Jahren nehmen sie Rhythmen auf, tanzen
          und singen. Das alles geschieht von selbst, ohne Unterricht. <br />
          <br />
          Wollen sie jedoch ein Instrument spielen, ist mehr nötig: Sie müssen
          Noten lernen und deren Bedeutung und Platz auf der musikalischen
          Klaviatur kennen.
        </span>
      </div>

      <div
        className={`${myFont.className} bg-maincolor text-black px-5 lg:px-[120px]`}
      >
        <span className="max-w-full lg:w-[1268px] text-[18px] lg:text-[22px] border-t border-black pt-[30px] pb-[30px] text-justify block">
          Kinder lernen gerne, am liebsten aber beim Spielen. Und sie hören
          gerne Geschichten. Was also wäre, wenn man die Freude an der Musik mit
          jener am Spielen und an Geschichten zusammenbrächte? <br />
          <br />
          Genau das tut das Konzept von Armina Aristak. <br />
          <br />
          „Dora im Musikwald“ holt die Kinder in ihrer Welt ab und führt sie wie
          von selbst in die Welt der Musik. Zusammen mit Dora lernen Kinder
          deren märchenhaften, klingenden Wald kennen und erfahren dabei
          gleichzeitig, auf welchen Grundlagen die Musik beruht und wie sie
          selbst auf einer Klaviertastatur Melodien entstehen lassen können.{" "}
          <br />
          <br />
          Armina Aristaks Lehrmethode für Kinder ab 4 Jahren beinhaltet deshalb
          nicht nur ein Buch mit altdeutschen Volksliedern, zum Lernmaterial
          gehören auch ein 120x190 Zentimeter großer Teppich mit Klaviertastatur
          und ein Set mit 72 Spielkarten. Die von Francesca R. Pasqualini
          liebevoll gestalteten Kärtchen hauchen den Figuren aus Gohar
          Ghukasyans Märchen „Dora im Musikwald“ Leben ein und vermitteln den
          Kindern spielerisch all das Wissen, das sie zum Musizieren benötigen.{" "}
          <br />
          <br />
          Die Welt der Musik ist märchenhaft, der Weg dorthin kann es auch sein.{" "}
          <br />
          <br />
          Viel Vergnügen beim Musizieren.
        </span>
      </div>

      {/* Video Thumbnails */}
      <div className="flex flex-wrap justify-start gap-6 w-full py-8 px-5 lg:px-[120px]">
        {[1, 2].map((item) => (
          <div key={item} className="w-full max-w-[409px] relative">
            <Image
              src="/assets/images/cover3.svg"
              alt={`Video Thumbnail ${item}`}
              width={409}
              height={278}
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-black bg-opacity-45" />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <Image
                src="/assets/images/play_logo.svg"
                alt="Play Button"
                width={20.83}
                height={25}
                className="mb-2 cursor-pointer"
              />
              <span
                className={`${myFont.className} text-white text-[19px] px-4 py-2 rounded-md cursor-pointer hover:underline`}
              >
                Jetzt Spielen
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-start ml-[250px] w-full py-8">
        <Link href="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative w-[160px] h-[49px] flex items-center justify-center gap-2 border-2 border-[#C29E76] bg-[#C29E76] text-black text-lg px-6 py-3 overflow-hidden group mt-4"
          >
            <span className="absolute inset-0 bg-[#C29E76] scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100" />
            <div className="relative z-10 flex items-center gap-2">
              <span
                className={`${myFont.className} text-[20px] whitespace-nowrap`}
              >
                Jetzt buchen
              </span>
              <Image
                src="/assets/images/black_Vector_cursor.svg"
                alt="Arrow Icon"
                width={16}
                height={16}
                className="w-4 h-4"
              />
            </div>
          </motion.button>
        </Link>
      </div>

      <Footer />
    </main>
  );
};

export default Music;
