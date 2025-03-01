/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import Image from "next/image";

const Form = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (value.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    }
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) newErrors.name = "Name is required!";
    if (!formData.email.trim()) newErrors.email = "Email is required!";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email format!";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty!";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSent(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setIsSent(false), 2000);
  };

  return (
    <div className="h-screen w-full bg-[#EFEBE8] flex justify-center items-center">
      <div className="w-[1219px] bg-white mt-[10px] p-10 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <span className="md:text-[50px] font-cormorant font-bold leading-tight">
              Let's talk <br />
              on something <span className="text-[#C29E76]">great</span> <br />
              together
            </span>
            <div className="flex items-center mt-6">
              <Image src="/assets/images/letter_icon.svg" alt="letter_icon" width={30} height={23} />
              <span className="ml-4 md:text-[24px] font-Karla">andreaDesign@gmail.com</span>
            </div>
            <div className="flex items-center mt-6">
              <Image src="/assets/images/phone_icon.svg" alt="phone_icon" width={30} height={30} />
              <span className="ml-4 md:text-[24px] font-Karla">+34 123 456 789</span>
            </div>
            <div className="flex items-center mt-6">
              <Image src="/assets/images/location_icon.svg" alt="location_icon" width={30} height={38} />
              <span className="ml-4 md:text-[24px] font-Karla">123 Street 487 House</span>
            </div>
          </div>

          <div>
            <form className="space-y-6" onSubmit={handleSend} noValidate>
              <div>
                <label className="text-[#1E2B3B] text-lg font-cormorant block mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                  className={`w-full border-b-2 p-2 focus:outline-none ${errors.name ? "border-red-500" : "border-[#959595]"}`}
                  placeholder="John Smith"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="text-[#1E2B3B] text-lg font-cormorant block mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  className={`w-full border-b-2 p-2 focus:outline-none ${errors.email ? "border-red-500" : "border-[#959595]"}`}
                  placeholder="email@gmail.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="text-[#1E2B3B] text-lg font-cormorant block mb-2">Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full border-b-2 p-2 focus:outline-none h-28 resize-none ${errors.message ? "border-red-500" : "border-[#959595]"}`}
                  placeholder="Type your message..."
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSent}
                className={`w-full h-[56px] font-cormorant text-lg font-semibold transition-colors duration-300 ${isSent ? "bg-green-500 opacity-50 cursor-not-allowed" : "bg-[#1E2B3B] hover:bg-[#35485D] text-white"}`}
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
