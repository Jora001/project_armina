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

const Musice = () => {
  return (
    <main className="bg-maincolor min-h-screen w-full flex flex-col items-center">
      {/* Background Image with Title */}
      <div className="relative w-full">
        <Image
          src="/assets/images/schuller_background.svg"
          width={1540}
          height={353}
          alt="bg"
          className="w-full h-auto object-cover"
        />
        <div
          className={`${my_font.className} absolute top-1/2 left-[5%] sm:left-[7%] md:left-[10%] transform -translate-y-1/2 max-w-[90%] lg:max-w-[50%]`}
        >
          <span className="text-[#C29E76] text-[5vw] sm:text-[4vw] md:text-[3vw] lg:text-[25px] leading-tight block">
          Schule für Musik & Kunst
          </span>
          <span className="font-extrabold text-[#ffffff] text-[4vw] sm:text-[7vw] md:text-[5vw] lg:text-[40px] leading-tight block">
            MUSIKUNTERRICHT FÜR <br /> KINDER AB 4 JAHREN
          </span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row pt-[30px] pb-[30px] justify-evenly bg-maincolor px-5 lg:px-[40px]">
        <Image
          src="/assets/images/musbaby.png"
          width={446}
          height={773}
          alt="img"
          className="w-full max-w-[446px] h-auto mx-auto lg:mx-0"
        />
        <div
          className={`${my_font.className} flex flex-col text-black  max-w-full lg:w-[50%] text-[20px] font-light `}
        >
          <span className="text-justify">
            Über mich <br />
            Mein Name ist María Belén Arellano. Ich bin Schauspielerin und
            Theaterpädagogin. Mein Heimatland ist Chile, meine Ausbildung habe
            ich jedoch in Deutschland an der Theaterakademie Stuttgart
            absolviert. Ich bin leidenschaftliche Pädagogin und betreue seit
            drei Jahren verschiedene Ferienprogramme, bei denen Zirkus und
            Theater im Mittelpunkt stehen. Für mich ist das Theater ein
            wunderbares Mittel, um Geschichten zu erzählen. Kinder beherrschen
            das intuitiv, doch sie verlieren diese Fähigkeit oft im Alltag des
            Erwachsenenlebens. Mit meiner Arbeit möchte ich darauf hinwirken,
            dass generell wieder mehr gespielt wird – sowohl im Alltag als auch
            auf der Bühne. Mein Angebot richtet sich an Kinder, die ihr Spiel
            gerne auf einer Bühne zeigen würden, sowie an Erwachsene, die ihre
            kreative Seite wiederentdecken möchten. Falls ich Ihr Interesse
            geweckt habe, können Sie mich gerne über das Kontaktformular
            kontaktieren. Ich freue mich darauf, von Ihnen zu hören und Sie
            kennenzulernen. <br /> <br />
            Mit meiner Arbeit möchte ich darauf hinwirken, dass generell wieder
            mehr gespielt wird – sowohl im Alltag als auch auf der Bühne. Mein
            Angebot richtet sich an Kinder, die ihr Spiel gerne auf einer Bühne
            zeigen würden, sowie an Erwachsene, die ihre kreative Seite
            wiederentdecken möchten. <br />
            <br />
            Falls ich Ihr Interesse geweckt habe, können Sie mich gerne über das
            Kontaktformular kontaktieren. Ich freue mich darauf, von Ihnen zu
            hören und Sie kennenzulernen.
          </span>
        </div>
      </div>

      <div
        className={`${my_font.className} flex bg-maincolor text-black px-5 lg:px-[120px]`}
      >
        <span className="max-w-full lg:w-[1268px] text-[18px] lg:text-[22px] border-black border-t pt-[30px] pb-[30px] text-justify">
        <strong>Schauspielunterricht für Kinder</strong> <br />5 bis 7 Kinder pro Gruppe
          treffen sich einmal in der Woche für eine Stunde. In
          theaterpädagogischen Spielen bringe ich den Kindern die
          Schauspielkunst näher. Wir erarbeiten (Theater?)Stücke, Märchen und
          Erzählungen und setzen sie direkt um. Dadurch werden Kreativität und
          Spielfreude der Kinder intensiv gefördert. Denn mein Ziel ist es,
          ihnen Freude am gemeinsamen Spielen zu vermitteln, ihre Fantasie
          anzuregen und dabei gleichzeitig ihr Selbstbewusstsein zu stärken{" "}
          <br />
          <br />
         <strong> Schauspielunterricht für Erwachsene</strong> <br />
          <br />
          Auch bei den Erwachsenen liegt der Fokus darauf, die Freude am Spielen
          zu entdecken sowie Sicherheit und Präsenz auf der Bühne aufzubauen.
          Ich arbeite hier individuell mit jedem Einzelnen, unterstütze die
          Schüler besonders in jenen Bereichen, in denen sie sich unsicher auf
          der Bühne fühlen. Bringt jemand Gesangserfahrung mit, nutzen wir auch
          die, um die allgemeine Ausdrucksfähigkeit zu verbessern.{" "}
        </span>
      </div>

      <div className="flex flex-wrap justify-start gap-6 w-full py-8 px-5 lg:px-[120px]">
        <div className="w-full max-w-[409px] relative">
          <Image
            src="/assets/images/cover3.svg"
            alt="rectangle_video"
            width={409}
            height={278}
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-black bg-opacity-45"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <Image
              src="/assets/images/play_logo.svg"
              alt="play_logo"
              width={20.83}
              height={25}
              className="mb-2 cursor-pointer"
            />
            <span className="text-white text-2xl font-Karla text-[19px] px-4 py-2 rounded-md cursor-pointer hover-underline">
              Jetzt Spielen
            </span>
          </div>
        </div>

        <div className="w-full max-w-[409px] relative">
          <Image
            src="/assets/images/cover3.svg"
            alt="rectangle_video"
            width={409}
            height={278}
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-black bg-opacity-45"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <Image
              src="/assets/images/play_logo.svg"
              alt="play_logo"
              width={20.83}
              height={25}
              className="mb-2 cursor-pointer"
            />
            <span className="text-white text-2xl font-Karla text-[19px] px-4 py-2 rounded-md cursor-pointer hover-underline">
              Jetzt Spielen
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-start ml-[250px] w-full py-8">
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

export default Musice;
