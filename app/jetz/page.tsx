"use client";

import { Cormorant_Garamond } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
const my_font = Cormorant_Garamond({
  weight: "400",
  subsets: ["latin"],
});

const Jetz = () => {
  return (
    <main className="bg-maincolor min-h-screen w-full flex flex-col items-center">
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
          <span className="text-[#C29E76] text-[4vw] sm:text-[3vw] md:text-[2vw] lg:text-[28px] leading-tight block">
            Schule für Musik & Kunst
          </span>
          <span className="font-extrabold text-[#ffffff] text-[8vw] sm:text-[6vw] md:text-[4vw] lg:text-[50px] leading-tight block">
            SCHAUSPIEL
          </span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row pt-[30px] pb-[30px] justify-evenly bg-maincolor px-5 lg:px-[40px]">
        <Image
          src="/assets/images/image(10).png"
          width={446}
          height={773}
          alt="img"
          className="w-full max-w-[446px] h-auto mx-auto lg:mx-0"
        />
        <div
          className={`${my_font.className} flex flex-col text-black  max-w-full lg:w-[50%] text-[18px] font-light `}
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
        <span className="max-w-full lg:w-[1268px] text-[18px] lg:text-[24px] border-black border-t pt-[30px] pb-[30px] text-justify">
          Schauspielunterricht für Kinder <br />5 bis 7 Kinder pro Gruppe
          treffen sich einmal in der Woche für eine Stunde. In
          theaterpädagogischen Spielen bringe ich den Kindern die
          Schauspielkunst näher. Wir erarbeiten (Theater?)Stücke, Märchen und
          Erzählungen und setzen sie direkt um. Dadurch werden Kreativität und
          Spielfreude der Kinder intensiv gefördert. Denn mein Ziel ist es,
          ihnen Freude am gemeinsamen Spielen zu vermitteln, ihre Fantasie
          anzuregen und dabei gleichzeitig ihr Selbstbewusstsein zu stärken{" "}
          <br />
          <br />
          Schauspielunterricht für Erwachsene <br />
          <br />
          Auch bei den Erwachsenen liegt der Fokus darauf, die Freude am Spielen
          zu entdecken sowie Sicherheit und Präsenz auf der Bühne aufzubauen.
          Ich arbeite hier individuell mit jedem Einzelnen, unterstütze die
          Schüler besonders in jenen Bereichen, in denen sie sich unsicher auf
          der Bühne fühlen. Bringt jemand Gesangserfahrung mit, nutzen wir auch
          die, um die allgemeine Ausdrucksfähigkeit zu verbessern.{" "}
        </span>
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
    </main>
  );
};

export default Jetz;
