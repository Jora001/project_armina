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
    // Hero section title fade-in
    gsap.fromTo(
      heroTextRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 0.5 }
    );

    // Image slide-up animation
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 0.8 }
    );

    // Form slide-up animation
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
    <div className="w-full min-h-screen bg-[#EFEBE8]">
      {/* Hero Section */}
      <div className="relative w-full h-[200px] md:h-[353px] mt-5 bg-[url(/assets/images/kontakt_image.svg)] bg-cover bg-center">
        <div
          className="absolute inset-0 bg-[rgba(42,46,57,0.20)] flex flex-col h-full justify-center ml-[150px] space-y-6"
          ref={heroTextRef}
        >
          <h1 className="text-3xl md:text-5xl font-cormorant text-white font-bold">
            KONTAKT
          </h1>
          <h2 className="text-3xl md:text-5xl font-cormorant text-white font-bold">
            AUFNEHMEN
          </h2>
        </div>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col md:flex-row items-center justify-center px-4 py-8 md:py-6">
        {/* Image */}
        <div className="hidden md:block w-full md:w-[488px]" ref={imageRef}>
          <Image
            src="/assets/images/Hero_image.svg"
            alt="Hero image"
            width={488}
            height={743}
            className="w-full h-auto"
          />
        </div>

        {/* Contact Form */}
        <div
          className="w-full md:w-[693px] bg-white md:p-12 h-[743px]"
          ref={formRef}
        >
          <div className="space-y-14">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Image
                  src="/assets/images/letter_icon.svg"
                  alt="email icon"
                  width={30}
                  height={23}
                />
                <p className="text-lg md:text-2xl font-Karla">
                  andreaDesign@gmail.com
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  src="/assets/images/phone_icon.svg"
                  alt="phone icon"
                  width={30}
                  height={30}
                />
                <p className="text-lg md:text-2xl font-Karla">
                  +34 123 456 789
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  src="/assets/images/location_icon.svg"
                  alt="location icon"
                  width={30}
                  height={38}
                />
                <p className="text-lg md:text-2xl font-Karla">
                  123 Street 487 House
                </p>
              </div>
            </div>

            {/* Form */}
            <form className="space-y-6" onSubmit={handleSend} noValidate>
              <div>
                <label className="text-[#1E2B3B] text-lg font-cormorant block mb-2">
                  Name*
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full border-b-2 p-2 focus:outline-none ${
                    errors.name ? "border-red-500" : "border-[#959595]"
                  }`}
                  placeholder="John Smith"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="text-[#1E2B3B] text-lg font-cormorant block mb-2">
                  Email*
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full border-b-2 p-2 focus:outline-none ${
                    errors.email ? "border-red-500" : "border-[#959595]"
                  }`}
                  placeholder="email@gmail.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="text-[#1E2B3B] text-lg font-cormorant block mb-2">
                  Ihre Nachricht
                </label>
                <div className="border border-[#1E2B3B] rounded-lg p-2 h-[110px]">
                  <textarea className="w-full h-full outline-none bg-transparent resize-none" />
                </div>
              </div>

              {/* Send Button */}
              <button
                type="submit"
                className={`w-full h-[56px] font-cormorant text-lg font-semibold transition-transform duration-300 transform hover:scale-105 ${
                  isSent ? "bg-green-500" : "bg-[#1E2B3B] hover:bg-[#35475D]"
                } text-white rounded-lg`}
              >
                {isSent ? "Gesendet!" : "Senden"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;
