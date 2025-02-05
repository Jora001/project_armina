/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client"
import Form from "@/components/form";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
 // import Link from "next/link";

 export default function Home() {
  const [isNameFocused, setIsNameFocused] = useState(false);
    const [isEmailFocused, setIsEmailFocused] = useState(false);
      const [isSent, setIsSent] = useState(false);
        const handleSend = () => {
          setIsSent(true);
            setTimeout(() => setIsSent(false), 3000); 
  };

  return (
    <div className="w-full h-auto mt-[90px]">
      <Swiper
          direction={"vertical"} 
          pagination={{ clickable: true, el: ".swiper-pagination" }}
          modules={[Pagination, Autoplay]} 
          autoplay={{ delay: 2000, disableOnInteraction: false }} 
          loop={true} 
          speed={1500}
          className="mySwiper w-full h-[100vh]"
          >
          <SwiperSlide className="flex justify-center items-center bg-cover bg-center bg-[url('/assets/images/image1.svg')]">
            <div className="h-[100vh] bg-[url('/assets/images/image1.svg')] mt-[2vh] bg-cover bg-center relative ">
              <div className="h-[100vh] absolute inset-0" style={{ backgroundColor: "rgba(42, 46, 57, 0.51)" }}>
                 <div className="w-[80%] mx-auto flex flex-col gap-[0rem] h-[100%] justify-center">
                    <p className="font-cormorant text-[28px] text-[#C29E76] ">Schul</p>
                    <p className="md:text-[60px] text-white font-cormorant font-bold">Mezzosopran/Gesangspädagogin</p>
                    <p className="md:text-[20px] text-[#FFFFFF] font-thin font-Karla ">
                        Ziel der Schule für Musik und Kunst Armina Aristak ist es, die Schüler auf ein<br></br>
                        hohes künstlerisches Niveau zu bringen. Sie bietet Gesangs-, Instrumental- <br></br>
                        und Schauspiel-Unterricht an. Kinder und Jugendliche, Erwachsene und<br></br> 
                        Senioren singen, spielen und schauspielern.
                     </p>
                      <div className="flex">
                        <p className="font-cormorant text-[28px] text-[#C29E76] mt-8 font-bold cursor-pointer">Lesen Sie Meer</p> 
                          <Image src="/assets/images/vector.svg" alt="vectorcursor" width={16} height={16} className=" cursor-pointer mt-8 mx-3.5"/>
                    </div>
                  </div>
                </div>
              </div>
          </SwiperSlide>
            <SwiperSlide className="flex justify-center items-center bg-cover bg-center bg-[url('/assets/images/image1.svg')]">
            <div className="h-[100vh] bg-[url('/assets/images/image1.svg')] mt-[2vh] bg-cover bg-center relative ">
              <div className="h-[100vh] absolute inset-0" style={{ backgroundColor: "rgba(42, 46, 57, 0.51)" }}>
                <div className="w-[80%] mx-auto flex flex-col gap-[0rem] h-[100%] justify-center">
                  <p className="font-cormorant text-[28px] text-[#C29E76] ">Schul</p>
                  <p className="md:text-[60px] text-white font-cormorant font-bold">Mezzosopran/Gesangspädagogin</p>
                  <p className="md:text-[20px] text-[#FFFFFF] font-thin font-Karla ">
                    Ziel der Schule für Musik und Kunst Armina Aristak ist es, die Schüler auf ein<br></br>
                    hohes künstlerisches Niveau zu bringen. Sie bietet Gesangs-, Instrumental- <br></br>
                    und Schauspiel-Unterricht an. Kinder und Jugendliche, Erwachsene und<br></br> 
                    Senioren singen, spielen und schauspielern.
                  </p>
                  <div className="flex">
                    <p className="font-cormorant text-[28px] text-[#C29E76] mt-8 font-bold cursor-pointer">Lesen Sie Meer</p> 
                      <Image src="/assets/images/vector.svg" alt="vectorcursor" width={16} height={16} className=" cursor-pointer mt-8 mx-3.5"/>
                  </div>
                </div>
              </div>
            </div>
            </SwiperSlide>

            <SwiperSlide className="flex justify-center items-center bg-cover bg-center bg-[url('/assets/images/image1.svg')]">
              <div className="h-[100vh] bg-[url('/assets/images/image1.svg')] mt-[2vh] bg-cover bg-center relative ">
                <div className="h-[100vh] absolute inset-0" style={{ backgroundColor: "rgba(42, 46, 57, 0.51)" }}>
                  <div className="w-[80%] mx-auto flex flex-col gap-[0rem] h-[100%] justify-center">
                    <p className="font-cormorant text-[28px] text-[#C29E76] ">Schul</p>
                    <p className="md:text-[60px] text-white font-cormorant font-bold">Mezzosopran/Gesangspädagogin</p>
                    <p className="md:text-[20px] text-[#FFFFFF] font-thin font-Karla ">
                      Ziel der Schule für Musik und Kunst Armina Aristak ist es, die Schüler auf ein<br></br>
                      hohes künstlerisches Niveau zu bringen. Sie bietet Gesangs-, Instrumental- <br></br>
                      und Schauspiel-Unterricht an. Kinder und Jugendliche, Erwachsene und<br></br> 
                      Senioren singen, spielen und schauspielern.
                    </p>
                      <div className="flex">
                        <p className="font-cormorant text-[28px] text-[#C29E76] mt-8 font-bold cursor-pointer">Lesen Sie Meer</p> 
                         <Image src="/assets/images/vector.svg" alt="vectorcursor" width={16} height={16} className=" cursor-pointer mt-8 mx-3.5"/>
                      </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <div className="swiper-pagination absolute right-10"></div>
      </Swiper>

                <div>
                  <nav className=" h-[137px] flex">
                     <div className="w-[27%] bg-[#FFFFFF] flex items-center justify-center">
                       <p className="font-Karla md:text-[20px] text-[#1E2B3B] font-thin">Ziel der Schule <br></br>für Musik </p>
                     </div>
                        <div className="w-[55%] bg-[#1E2B3B] flex items-center justify-center">
                          <p className="font-Karla text-[#FFFFFF] md:text-[20px] font-thin">
                            Ziel der Schule für Musik und Kunst Armina Aristak ist es, die Schüler <br></br>
                            auf ein hohes künstlerisches Niveau zu bringen. Sie bietet Gesangs.
                          </p>
                        </div>
                          <div className="w-[310px] bg-[#C29E76] flex items-center justify-center">
                            <p className="font-cormorant text-[28px] text-[#1E2B3B] font-bold hover:animate transition-all duration-200 cursor-pointer">Buk Nov</p>
                            <Image src="/assets/images/vector2.svg" alt="vector2" width={16} height={16} className="cursor-pointer mx-7"/>
                          </div>
                    </nav>
                  </div>
    
                    <div className="h-[130vh] bg-[#EFEBE8] flex">
                      <Image src="/assets/images/square.svg"alt="square" width={265} height={327} className="ml-[260] mt-[250] absolute" />
                        <Image src="/assets/images/image2.svg" alt="image2" width={416} height={416} className="absolute ml-[125] mt-[120] shadow-xl"/>
                          <div className="items-center justify-center absolute ml-[600] mt-[120]">
                             <p className="md:text-[80px] text-[#1E2B3B]  font-cormorant font-weight font-medium">Exploring The Beauty <br></br>Of Adornments</p>
                              <div className="flex items-center gap-4 ml-1.5">
                                <Image src="/assets/images/line.svg" width={7} height={0.8} alt="line" className="drop-shadow-lg"/>
                                  <p className="md:text-[20px] font-Karla text-[#1E2B3B] font-light leading-[1.1]">
                                      Ziel der Schule für Musik und Kunst Armina Aristak ist es, die Schüler <br></br>
                                      auf ein hohes künstlerisches Niveau zu bringen. Sie bietet Gesangs-, <br></br>
                                      Instrumental- und Schauspiel-Unterricht an. Kinder und Jugendliche, <br></br>
                                      Erwachsene und Senioren singen, spielen und schauspielern.
                                    </p>
                              </div>
                            </div>

                              <div className="flex justify-between items-start gap-[95px] mt-[600px] ml-[200px] space-x-12">
                                <div className="w-1/3 flex flex-col items-start">
                                    <p className="flex flex-col items-start self-start">
                                     <span className="md:text-[80px] font-cormorant text-[#1E2B3B] font-bold">10+</span>
                                        <span className="md:text-[24px] font-cormorant text-[#1E2B3B] font-bold">Allüren der Erfahrung</span>
                                          <span className="md:text-[20px] font-Karla text-[#1E2B3B] ">Lorem ipsum dolor sit amet.</span>
                                     </p>
                                 </div>

                                    <div className="w-1/3 flex flex-col items-start">
                                      <p className="flex flex-col items-start  self-start">
                                        <span className="md:text-[80px] font-cormorant text-[#1E2B3B] font-bold">8+</span>
                                        <span className="md:text-[24px] font-cormorant text-[#1E2B3B] font-bold ">Allüren der Erfahrung</span>
                                        <span className="md:text-[20px] font-Karla text-[#1E2B3B] ">Lorem ipsum dolor sit amet.</span>
                                      </p>
                                    </div>

                                      <div className="w-1/3 flex flex-col items-start">
                                        <p className="flex flex-col items-start  self-start">
                                          <span className="md:text-[80px] font-cormorant text-[#1E2B3B] font-bold">120+</span>
                                          <span className="md:text-[24px] font-cormorant text-[#1E2B3B] font-bold ">Studenten</span>
                                          <span className="md:text-[20px] font-Karla text-[#1E2B3B] ">Lorem ipsum dolor sit amet.</span>
                                        </p>
                                      </div>
                                    </div>
                      </div>

        <div className="flex h-auto">
          <div className="">
            <Image src="/assets/images/image3.svg" alt="image3" width={531} height={608}  />
          </div>
            <div className="flex-1 bg-[#1E2B3B] text-white flex flex-col justify-center  w-[80%] mx-auto ">
              <div className="flex flex-col items-start w-[80%] mx-auto mt-[50px]">
                  <Image src="/assets/images/image4.svg" alt="image4" width={80} height={84} className="absolute mr-[715px] mb-[370]"/>
                    <p className="md:text-[33.36px] font-cormorant w-[80%] font-bold mt-[90px]">Armina Aristak</p>
                    <p className="md:text-[20px] font-Karla w-[100%] font-thin mt-5 whitespace-normal">
                      Doctoral student in music education at the Martin Luther University Halle-
                      Wittenberg. Scholarship holder of the SWR vocal ensemble. Prize winner 2016  
                      and 2018 at the International Festival Young Opera Singer Schloss Rheinsberg,  
                      where she appeared in numerous concerts and opera performances. The work  
                      with various conductors and directors left a deep and positive impression on  
                      their musical life path.
                      <br /><br />
                      This was followed by performances with the Brandenburg Orchestra,  
                      participation in various opera performances with small solo games as well as  
                      solo concerts in Baden-Baden, Gechingen, Göppingen, Stuttgart, Mittelbergheim.
                  </p>
                    <p className="text-[#B7B7B7] font-Karla text-[18px] cursor-pointer mt-6 self-start m-0 p-0 underline text-thin">
                      Read more
                    </p>
               </div>
            </div>
        </div>

<div className="h-[125vh] bg-[#EFEBE8]">
  <div className="flex flex-col items-center justify-center">
    <p className="font-cormorant text-[40px] text-[#1E2B3B] mt-[40px] font-bold">Fotogalerie</p>
    <p className="font-cormorant md:text-[20px] text-[#1E2B3B] italic mt-[10px]">Facellus lorem malesuada ligula pulvinar commodo maecenas</p>
      <div className="grid md:grid-cols-3 gap-3 mt-[2rem]">
        <Image src="/assets/images/rectangle13.svg" alt="rectangle13" width={407} height={613} 
               className="grayscale transition-transform duration-500 hover:grayscale-0 hover:scale-110"/>
        <Image src="/assets/images/rectangle14.svg" alt="rectangle14" width={407} height={325} 
               className="grayscale transition-transform duration-500 hover:grayscale-0 hover:scale-110"/>
        <Image src="/assets/images/rectangle12.svg" alt="rectangle12" width={415} height={613} 
               className="grayscale transition-transform duration-500 hover:grayscale-0 hover:scale-110"/>
        <Image src="/assets/images/rectangle15.svg" alt="rectangle15" width={199} height={277} 
               className="absolute mt-[336px] ml-[427px] grayscale transition-transform duration-500 hover:grayscale-0 hover:scale-110" />
        <Image src="/assets/images/rectangle16.svg" alt="rectangle16" width={199} height={277} 
               className="absolute mt-[336px] ml-[635px] grayscale transition-transform duration-500 hover:grayscale-0 hover:scale-110"/>
      </div>
  </div>
    <div className="bg-[#EFEBE8] h-[40vh]">
        <Image src="/assets/images/vertical_line.svg" alt="vertical_line" width={7} height={45} className="mt-[100px] ml-[130px] absolute"/>
          <p className="font-cormorant md:text-[60px] text-[#000000] mt-[80px] ml-[150px] absolute font-medium">Was Unsere Schüler Sagen</p>
          <p className="text-[#1E2B3B] md:text-[20px] font-cormorant   absolute mt-[110px] ml-[1250px] font-bold border-2 
                        border-[#1E2B3B] px-5 py-2 cursor-pointer hover:shadow-2xl transition-all duration-500 ">Alles sehen</p>
    </div>
      <div className="bg-[#EFEBE8] min-h-screen flex  ">
        <div className="container mx-auto grid grid-cols-3 gap-10 justify-center ml-[80px]">
          <div className="text-left">
            <h2 className="md:text-[32px] font-bold text-[#1E2B3B] font-cormorant mb-2">Petra Harres</h2>
              <p className="md:text-[16px] text-[#000000] font-karla font-thin">
                I searched the Internet for a singing teacher and came acome into Armina - an absolute stroke of luck!!!
                She has a great, expressive and powerful voice and is a very sensitive, talented teacher. Using examples, 
                it illustrates what can be improved. She always remains patient and calm. Every singing lesson with her is 
                a win and on top of that it's really fun
              </p>
          </div>
            <div className="text-left">
              <h2 className="md:text-[32px] font-bold text-[#1E2B3B] font-cormorant mb-2">Meyer Irmgard</h2>
                <p className="md:text-[16px] text-[#000000] font-karla font-thin ">
                  My daughter gave me singing lessons at Armina's.Armina has a great voice, works with great joy and transmits this joy. 
                  Sensitive and competent she teaches singing techniques and practiced them with me, 
                  so that after a short time a success could be heard. It was a lot of fun! 
              </p>
           </div>
             <div className="text-left">
                <h2 className="md:text-[32px] font-bold text-[#1E2B3B] font-cormorant mb-2">Meyer Irmgard</h2>
                 <p className="md:text-[16px] text-[#000000] font-karla font-thin ">
                    My daughter gave me singing lessons at Armina's.Armina has a great voice, works with great joy and transmits this joy. 
                    Sensitive and competent she teaches singing techniques and practiced them with me, 
                    so that after a short time a success could be heard. It was a lot of fun! 
                 </p>
              </div>
        
        <div className="h-[110vh] bg-[#EFEBE8]">
          <div className="w-[1219px] h-[596px] items-center justify-center bg-white  mt-[100px] pt-20 ml-[80px]">
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-28 ml-16">
             <div>
                <p className="md:text-[50px] font-cormorant font-bold leading-tight">
                Let's talk <br></br>
                  on something <span className="text-[#C29E76]">great </span><br></br>
                  together
                  </p>
                    <div className="flex items-center  ">
                    <Image src="/assets/images/letter_icon.svg" alt="letter_icon" width={30} height={23} className="mt-[30px]"/>
                    <p className="ml-9 mt-[30px] m-19 md:text-[24px] font-Karla">andreaDesign@gmail.com</p>
                    </div>
                    <div className="flex items-center ">
                    <Image src="/assets/images/phone_icon.svg" alt="letter_icon" width={30} height={30} className="mt-[30px]"/>
                    <p className="ml-9 mt-[30px] m-19 md:text-[24px] font-Karla">+34 123 456 789</p>
                    </div>
                    <div className="flex items-center">
                    <Image src="/assets/images/location_icon.svg" alt="letter_icon" width={30} height={38} className="mt-[30px]"/>
                    <p className="ml-9 mt-[30px] m-19 md:text-[24px] font-Karla">123 Street 487 House</p>
                    </div>
              </div>
                <Form />
               </div>
            </div>
           </div>
        </div>
      </div>
     </div>
    </div> 
  );
}


