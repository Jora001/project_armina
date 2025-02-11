/* eslint-disable react/no-unescaped-entities */


"use client";

import { useState } from "react";
import Image from "next/image";

const Form = () => {
  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const handleSend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => setIsSent(false), 3000);
  };

  return (
    <div className="h-[100vh] w-[100%] bg-[#EFEBE8] flex justify-center items-center">
      <div className="w-[1219px] bg-white mt-[10px] ml-20 p-10 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left Side: Contact Information */}
          <div>
            <p className="md:text-[50px] font-cormorant font-bold leading-tight">
              Let's talk <br />
              on something{" "}
              <span className="text-[#C29E76]">great</span>
              <br />
              together
            </p>
            <div className="flex items-center mt-6">
              <Image
                src="/assets/images/letter_icon.svg"
                alt="letter_icon"
                width={30}
                height={23}
              />
              <p className="ml-4 md:text-[24px] font-Karla">
                andreaDesign@gmail.com
              </p>
            </div>
            <div className="flex items-center mt-6">
              <Image
                src="/assets/images/phone_icon.svg"
                alt="phone_icon"
                width={30}
                height={30}
              />
              <p className="ml-4 md:text-[24px] font-Karla">
                +34 123 456 789
              </p>
            </div>
            <div className="flex items-center mt-6">
              <Image
                src="/assets/images/location_icon.svg"
                alt="location_icon"
                width={30}
                height={38}
              />
              <p className="ml-4 md:text-[24px] font-Karla">
                123 Street 487 House
              </p>
            </div>
          </div>

          {/* Right Side: Form */}
          <div>
            <form className="space-y-6" onSubmit={handleSend}>
              <div>
                <label className="text-[#1E2B3B] text-lg font-cormorant block mb-2">
                  Your name
                </label>
                <input
                  type="text"
                  className={`w-full border-b-2 focus:outline-none p-2 ${isNameFocused ? "border-[#1E2B3B]" : "border-[#959595]"}`}
                  placeholder="John Smith"
                  onFocus={() => setIsNameFocused(true)}
                  onBlur={() => setIsNameFocused(false)}
                />
              </div>

              <div>
                <label className="text-[#1E2B3B] text-lg font-cormorant block mb-2">
                  Your email
                </label>
                <input
                  type="email"
                  className={`w-full border-b-2 focus:outline-none p-2 ${isEmailFocused ? "border-[#1E2B3B]" : "border-[#959595]"}`}
                  placeholder="email@gmail.com"
                  onFocus={() => setIsEmailFocused(true)}
                  onBlur={() => setIsEmailFocused(false)}
                />
              </div>

              <div>
                <label className="text-[#1E2B3B] text-lg font-cormorant block mb-2">
                  Your message
                </label>
                <div className="border border-[#1E2B3B] rounded-lg p-2 h-[110px]">
                  <textarea className="w-full h-full outline-none bg-transparent resize-none" />
                </div>
              </div>

              <button
                type="submit"
                className={`w-full h-[56px] font-cormorant text-lg font-semibold transition-colors duration-300
                  ${isSent ? "bg-green-500" : "bg-[#1E2B3B] hover:bg-[#35485D]"} text-white`}
              >
                {isSent ? "Sent Successfully!" : "Send message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
