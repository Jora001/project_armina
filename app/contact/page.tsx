"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { Footer } from "@/components";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const [isSent, setIsSent] = useState(false);

  const heroTextRef = useRef(null);
  const formRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroTextRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 0.5 }
    );
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 0.8 }
    );
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 1 }
    );
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.value.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, [e.target.name]: "" }));
    }
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { name?: string; email?: string } = {};
    if (!formData.name.trim()) newErrors.name = "Name is required!";
    if (!formData.email.trim()) newErrors.email = "Email is required!";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email format!";
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      setFormData({ name: "", email: "" });
    }, 2000);
  };

  return (
    <main className="bg-maincolor min-h-screen w-full flex flex-col items-center">
      {/* Hero Section */}
      <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[353px] mt-4 sm:mt-5 bg-[url(/assets/images/kontakt_image.svg)] bg-cover bg-center">
        <div
          className="absolute inset-0 bg-[rgba(42,46,57,0.20)] flex flex-col h-full justify-center pl-4 sm:pl-6 md:pl-10 lg:pl-[150px] space-y-4 sm:space-y-6"
          ref={heroTextRef}
        >
          <h1 className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-cormorant text-white font-bold leading-tight">
            KONTAKT
          </h1>
          <h2 className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-cormorant text-white font-bold leading-tight">
            AUFNEHMEN
          </h2>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 w-full max-w-[1400px] mx-auto gap-6 md:gap-8">
        <div className="w-full  max-w-[400px] md:max-w-[488px]" ref={imageRef}>
          <Image
            src="/assets/images/Hero_image.svg"
            alt="Hero image"
            width={488}
            height={743}
            className="w-full h-auto md:h-[600px] lg:h-[783px] object-cover"
          />
        </div>

        <div
          className="w-full md:w-[100%] max-w-[693px] bg-white p-6 sm:p-8 md:p-10 lg:p-12"
          ref={formRef}
        >
          <div className="space-y-10 sm:space-y-12 md:space-y-14">
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-3 sm:gap-4">
                <Image
                  src="/assets/images/letter_icon.svg"
                  alt="email icon"
                  width={24}
                  height={18}
                  className="w-5 h-4 sm:w-6 sm:h-5 md:w-[30px] md:h-[23px]"
                />
                <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-Karla">
                  andreaDesign@gmail.com
                </p>
              </div>
              <div className="flex items-center gap-3 sm:gap-4">
                <Image
                  src="/assets/images/phone_icon.svg"
                  alt="phone icon"
                  width={24}
                  height={24}
                  className="w-5 h-5 sm:w-6 sm:h-6 md:w-[30px] md:h-[30px]"
                />
                <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-Karla">
                  +34 123 456 789
                </p>
              </div>
              <div className="flex items-center gap-3 sm:gap-4">
                <Image
                  src="/assets/images/location_icon.svg"
                  alt="location icon"
                  width={24}
                  height={32}
                  className="w-5 h-6 sm:w-6 sm:h-7 md:w-[30px] md:h-[38px]"
                />
                <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-Karla">
                  123 Street 487 House
                </p>
              </div>
            </div>

            <form className="space-y-6 sm:space-y-8" onSubmit={handleSend} noValidate>
              <div>
                <label className="text-[#1E2B3B] text-[16px] sm:text-[18px] md:text-[20px] font-cormorant block mb-2">
                  Name*
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full border-b-2 p-2 sm:p-3 focus:outline-none text-[14px] sm:text-[16px] ${
                    errors.name ? "border-red-500" : "border-[#959595]"
                  }`}
                  placeholder="John Smith"
                />
                {errors.name && (
                  <p className="text-red-500 text-[12px] sm:text-[14px] mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="text-[#1E2B3B] text-[16px] sm:text-[18px] md:text-[20px] font-cormorant block mb-2">
                  Email*
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full border-b-2 p-2 sm:p-3 focus:outline-none text-[14px] sm:text-[16px] ${
                    errors.email ? "border-red-500" : "border-[#959595]"
                  }`}
                  placeholder="email@gmail.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-[12px] sm:text-[14px] mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="text-[#1E2B3B] text-[16px] sm:text-[18px] md:text-[20px] font-cormorant block mb-2">
                  Ihre Nachricht
                </label>
                <div className="border border-[#1E2B3B] rounded-lg p-2 sm:p-3 h-[80px] sm:h-[100px] md:h-[110px]">
                  <textarea className="w-full h-full outline-none bg-transparent resize-none text-[14px] sm:text-[16px]" />
                </div>
              </div>

              <button
                type="submit"
                className={`w-full h-[48px] sm:h-[56px] font-cormorant text-[16px] sm:text-[18px] md:text-[20px] font-semibold transition-transform duration-300 transform hover:scale-105 ${
                  isSent ? "bg-green-500" : "bg-[#1E2B3B] hover:bg-[#35475D]"
                } text-white rounded-lg`}
              >
                {isSent ? "Gesendet!" : "Senden"}
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default Contact;