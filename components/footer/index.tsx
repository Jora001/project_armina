import Image from "next/image";
import Logo from "../logo";
import { Cormorant_Garamond, Karla } from 'next/font/google';

const my_font1 = Cormorant_Garamond({weight: "400"});
const my_font2 = Karla({weight: "400"});

export default function Footer(){
    return (<footer className={`${my_font1.className} bg-maincolor flex`}>
        <Logo />
        <div className="text-black flex flex-col">
            <span className="font-bold text-[21.92px] leading-[26.55px]">You can be one step ahead.</span>
            <span className="font-normal text-[19.06px] leading-[23.08px]">Sign up to hear about our updates on the dot.</span>
            <div className="flex">
                <Image src="/assets/images/instagram_logo.svg" width={21.84} height={21.84} alt="logo"/>
                <Image src="/assets/images/twitter_logo.svg" width={21.84} height={21.84} alt="logo"/>
                <Image src="/assets/images/facebook_logo.svg" width={21.84} height={21.84} alt="logo"/>
                <Image src="/assets/images/youtube_logo.svg" width={21.84} height={21.84} alt="logo"/>
                <Image src="/assets/images/linkedin_logo.svg" width={21.84} height={21.84} alt="logo"/>
            </div>
            <span className={`${my_font2.className} text-[#626262] text-[12.39px] leading-[14.48px]`}>©  Alle Rechte vorbehalten | Armina Aristak</span>
        </div>
    </footer>)
}