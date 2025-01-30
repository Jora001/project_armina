import Image from "next/image";
import Logo from "../logo";
import { Cormorant_Garamond } from 'next/font/google';

const my_font = Cormorant_Garamond({weight: "400"});


export default function Footer(){
    return (<footer className={`${my_font.className} bg-maincolor flex`}>
        <Logo />
        <div className="text-black flex flex-col">
            <span className="font-bold">You can be one step ahead.</span>
            <span className="font-normal">Sign up to hear about our updates on the dot.</span>
            <div className="flex">
                <Image src="/assets/images/instagram_logo.svg" width={21.84} height={21.84} alt="logo"/>
                <Image src="/assets/images/twitter_logo.svg" width={21.84} height={21.84} alt="logo"/>
                <Image src="/assets/images/facebook_logo.svg" width={21.84} height={21.84} alt="logo"/>
                <Image src="/assets/images/youtube_logo.svg" width={21.84} height={21.84} alt="logo"/>
                <Image src="/assets/images/linkedin_logo.svg" width={21.84} height={21.84} alt="logo"/>
            </div>
        </div>
    </footer>)
}