import React from "react";
import Image from "next/image";
import { Cormorant_Garamond, Karla } from "next/font/google";
import Form from "@/components/form";
import { Footer } from "@/components";

const my_font = Cormorant_Garamond({ weight: "700", subsets: ["latin"] });
const my_font2 = Karla({ weight: "300", subsets: ["latin"] });

const Vita = () => {
  return (
    <div className={`${my_font.className} bg-maincolor`}>
      <div className="relative w-full">
        <Image
          src="/assets/images/schuller_background.svg"
          width={1540}
          height={353}
          alt="bg"
          className="w-full h-auto object-cover"
          priority
        />
        <div
          className={`${my_font.className} absolute top-[50%] left-[5%] sm:left-[7%] md:left-[10%] transform -translate-y-1/2 max-w-[90%] lg:max-w-[50%]`}
        >
          <span
            className="text-[#C29E76] block"
            style={{ fontSize: "clamp(12px, 2vw, 30px)", whiteSpace: "nowrap" }}
          >
            Armina Aristak
          </span>
          <span
            className="font-extrabold text-[#ffffff] block"
            style={{
              fontSize: "clamp(18px, 3.5vw, 45px)",
              whiteSpace: "nowrap",
              marginLeft: "10px",
            }}
          >
            VITA
          </span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row pt-[30px] pb-[30px] justify-evenly bg-maincolor px-5 lg:px-[40px]">
        <Image
          src="/assets/images/img111.svg"
          width={446}
          height={773}
          alt="img"
          className="w-full max-w-[446px] h-auto mx-auto lg:mx-0"
        />
        <div
          className={`${my_font2.className} flex flex-col text-black justify-around max-w-full lg:w-[50%] text-[22px] font-light leading-[25.72px] mt-5 lg:mt-0`}
        >
          <span
            className={`${my_font.className} text-[#C29E76] text-[18px] lg:text-[20px] xl:text-[40px] text-center lg:text-left`}
          >
            Armina Aristak
          </span>
          <span className="text-justify">
            Doktorandin im Fach Musikpädagogik an der Martin-Luther-Universität
            Halle-Wittenberg. Stipendiatin des SWR Vokalensembles. Preisträgerin
            2016 und 2018 beim Internationalen Festival Junger Opernsänger
            Schloß Rheinsberg, bei dem sie in zahlreichen Konzerten und
            Opernaufführungen auftrat. Die Arbeit mit verschiedenen Dirigenten
            und Regisseuren hinterließ einen tiefen und positiven Eindruck auf
            ihren musikalischen Lebensweg. Es folgten Auftritte mit dem
            Brandenburgischen Orchester, die Teilnahme an verschiedenen
            Opernaufführungen mit kleinen solistischen Partien sowie
            Solo-Konzerte in Baden-Baden, Gechingen, Göppingen, Stuttgart,
            Mittelbergheim. <br />
            <br />
            Armina Aristak war schon als Kind von Musik fasziniert. Geboren in
            Armenien, hat sie den Namen ihres Vaters als Künstlernamen
            angenommen. Ihre musikalische Laufbahn hat sie bereits als
            Siebenjährige in ihrer Geburtsstadt Eriwan begonnen. Während der
            Jahre in der Musikschule trat sie als Solistin in zahlreichen
            Konzerten auf. <br /> <br />
            Bereits als Teenager hat sie zudem angefangen, erste pädagogische
            Erfahrungen in der Vermittlung des Faches Gesang zu sammeln. Noch
            während ihres Studiums an der Musikhochschule Komitas in Eriwan
            eröffnete sie ihr eigenes Musikstudio für Kinder und Jugendliche.
            Hier hatten Kinder und Jugendliche die Möglichkeit, Singen zu
            lernen, aber auch kleine Auftritte zu absolvieren. Erwähnenswert
            sind die Aufführungen „The Sounds of Music“ und „Snow White“. <br />
            <br />
            Dadurch, dass sie selbst weiterhin auftrat, konnte sie die Gesangs-
            und Theaterkultur besser kennenlernen und ihr Wissen an die Schüler
            weitergeben.
          </span>
        </div>
      </div>

      <div
        className={`${my_font2.className} flex bg-maincolor text-black px-5 lg:px-[120px]`}
      >
        <span className="max-w-full lg:w-[1268px] text-[18px] lg:text-[24px] border-black border-t pt-[30px] pb-[30px] text-justify">
          Ihre Schüler im Alter von 4 bis 16 Jahren nahmen erfolgreich an
          verschiedenen Wettbewerben teil, unter anderem an Prima La Musica, dem
          Wettbewerb der Deutschen Schulakademie und den internationalen
          Gesangswettbewerben in Österreich, Deutschland und Armenien.
        </span>
      </div>

      <div className="flex flex-col bg-maincolor text-black px-5 lg:px-[120px]">
        <Image
          src="/assets/images/img000.svg"
          width={1260}
          height={521}
          alt="pic"
          className="w-full h-auto mx-auto"
        />
        <span
          className={`${my_font2.className} max-w-full lg:w-[1278px] text-[18px] lg:text-[24px] mt-[40px] text-justify`}
        >
          Ergänzend zu ihrem Hochschulstudium nahm sie an Meisterkursen bei
          Margreet Honig, Julie Kaufmann, Thomas Quasthoff und Rudolf Piernay
          teil. Sie besuchte die Internationale Hugo-Wolf-Akademie Stuttgart,
          das Internationale Liedzentrum Heidelberg und die Schubertiade
          Schwarzenberg.
        </span>
      </div>

      <div className="flex flex-col bg-maincolor text-black px-5 lg:px-[120px]">
        <span
          className={`${my_font2.className} max-w-full lg:w-[1278px] text-[18px] lg:text-[24px] mt-[40px] text-justify`}
        >
          Neben ihrer wissenschaftlichen Tätigkeit als Doktorandin widmet sie
          sich der künstlerischen und pädagogischen Arbeit. Sie ist Dozentin für
          Gesang an der Hochschule für Musik Würzburg und unterrichtet an der
          Musikschule Fürth.
        </span>
      </div>

      <div className="flex justify-center py-10">
        <div className="container mx-auto">
          <Form />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Vita;
