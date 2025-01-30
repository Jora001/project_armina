import React from 'react'
import { Cormorant_Garamond } from 'next/font/google';

const my_font = Cormorant_Garamond({weight: "400"});

const schule = () => {
return (
    <div className='bg-[url(/assets/images/schuller_background.svg)] h-[353px] mt-[75px] w-[1440px]'>
        <div className={`${my_font.className} flex flex-col`}>
            <span className='text-[#C29E76] font-[400] text-[28px] leading-[26.49px]'>Schule für Musik & Kunst</span>
            <span className='font-bold text-[60px] leading-[72.66px]'>SCHÜLLER</span>
        </div>
    </div>
)
}

export default schule