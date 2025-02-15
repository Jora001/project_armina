import Image from "next/image";
import Logo from "../logo";
import { Cormorant_Garamond, Karla } from "next/font/google";

const my_font1 = Cormorant_Garamond({ weight: "400", subsets: ["latin"] });
const my_font2 = Karla({ weight: "400", subsets: ["latin"] });

export default function Footer() {
  return (
    <footer className={`${my_font1.className} bg-maincolor flex flex-col md:flex-row justify-between items-center border-t border-[#6B6B6B24] py-10 px-6 md:px-[100px] relative border-b border-[#6B6B6B] w-1440px`}>
      <div className="flex flex-col md:flex-row md:items-start w-full">
        <Logo />
        <div className="text-black flex flex-col justify-around md:ml-[40px] mt-6 md:mt-0 w-full">
          <div>
            <span className="font-bold text-[21.92px] leading-[26.55px]">You can be one step ahead.</span>
            <span className="font-normal text-[19.06px] leading-[23.08px] mt-[10px] mb-[30px] block">
              Sign up to hear about our updates on the dot.
            </span>
            <div className="flex space-x-4">
              {["instagram", "twitter", "facebook", "youtube", "linkedin"].map((platform) => (
                <Image
                  key={platform}
                  src={`/assets/images/${platform}_logo.svg`}
                  width={21.84}
                  height={21.84}
                  alt={platform}
                  className="cursor-pointer"
                />
              ))}
            </div>
          </div>
          <span className={`${my_font2.className} text-[#626262] text-[12.39px] leading-[14.48px] mt-4 md:mt-0`}>
            © Alle Rechte vorbehalten | Armina Aristak
          </span>
        </div>
      </div>

      <div className={`${my_font2.className} text-[#404040] flex flex-col md:flex-row border-t md:border-t-0 md:border-l border-[#919191] text-[12.39px] leading-[14.48px] mt-6 md:mt-0 pt-6 md:pt-0 md:pl-[45px] md:pr-[110px] w-full md:w-auto`}>
        <div className="flex flex-col w-full md:w-[171.55px] h-auto md:h-[139.14px] justify-evenly">
          <div className={`${my_font1.className}`}>
            <span className="font-[700] text-black text-[13.34px] leading-[16.16px]">Schule für Musik & Kunst</span>
          </div>
          <span>Concept</span>
          <span>Subject</span>
          <span>Schüler</span>
          <span>Projects</span>
        </div>
        <div className="flex flex-col w-full md:w-[143.91px] h-auto md:h-[140.01px] justify-evenly mt-6 md:mt-0 md:ml-10">
          <div className={`${my_font1.className}`}>
            <span className="font-[700] text-black text-[13.34px] leading-[16.16px]">Armina Aristak</span>
          </div>
          <span>Vita</span>
          <span>Videos</span>
          <span>Bilder</span>
          <span>Bewertungen</span>
        </div>
      </div>
    </footer>
  );
}
