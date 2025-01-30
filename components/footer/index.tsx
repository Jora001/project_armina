import Image from "next/image";
import Logo from "../logo";
import { Cormorant_Garamond, Karla } from 'next/font/google';

const my_font1 = Cormorant_Garamond({weight: "400"});
const my_font2 = Karla({weight: "400"});

export default function Footer(){
    return (<footer className={`${my_font1.className} bg-maincolor flex justify-between items-center border-t border-[#6B6B6B24] h-[300px] pl-[100px] relative`}>
        <div className="flex">
            <Logo />
            <div>
                <div className="text-black flex flex-col justify-around ml-[40px]">
                    <div className="flex flex-col">
                        <span className="font-bold text-[21.92px] leading-[26.55px]">You can be one step ahead.</span>
                        <span className="font-normal text-[19.06px] leading-[23.08px] mt-[10px] mb-[30px]">Sign up to hear about our updates on the dot.</span>
                        <div className="flex justify-between w-[318px]">
                            <Image src="/assets/images/instagram_logo.svg" width={21.84} height={21.84} alt="logo" className="cursor-pointer"/>
                            <Image src="/assets/images/twitter_logo.svg" width={21.84} height={21.84} alt="logo" className="cursor-pointer"/>
                            <Image src="/assets/images/facebook_logo.svg" width={21.84} height={21.84} alt="logo" className="cursor-pointer"/>
                            <Image src="/assets/images/youtube_logo.svg" width={21.84} height={21.84} alt="logo" className="cursor-pointer"/>
                            <Image src="/assets/images/linkedin_logo.svg" width={21.84} height={21.84} alt="logo" className="cursor-pointer"/>                   
                        </div>
                    </div>
                </div>
                <span className={`${my_font2.className} text-[#626262] text-[12.39px] leading-[14.48px] absolute bottom-[17px] ml-10`}>©  Alle Rechte vorbehalten | Armina Aristak</span>
            </div>
        </div>
        <div className= {`${my_font2.className} text-[#404040] flex border-l border-[#919191] text-[12.39px] leading-[14.48px]`}>
            <div className= "flex flex-col">
                <span className={`${my_font1.className} text-black text-[13.34px] leading-[16.16px]`}>Schule fur musik & kunst</span>
                <span>Concept</span>
                <span>Subject</span>
                <span>Schuller</span>
                <span>Projects</span>
            </div>
            <div className="flex flex-col">
                <span className={`${my_font1.className} text-black text-[13.34px] leading-[16.16px]`}>Armina Aristak</span>
                <span>Vita</span>
                <span>Videos</span>
                <span>Bilder</span>
                <span>Bewertuken</span>
            </div>
        </div>
    </footer>)
}