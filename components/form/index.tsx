/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import Image from "next/image";

const Form = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const [isSent, setIsSent] = useState(false);

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
    <div className="h-[100vh] w-full bg-[#EFEBE8] flex justify-center items-center">
      <div className="w-[1219px] bg-white mt-[10px] p-10 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <span className="md:text-[50px] font-cormorant font-bold leading-tight">
              Let's talk <br />
              on something{" "}
              <span className="text-[#C29E76]">great</span>
              <br />
              together
            </span>
            <div className="flex items-center mt-6">
              <Image
                src="/assets/images/letter_icon.svg"
                alt="letter_icon"
                width={30}
                height={23}
              />
              <span className="ml-4 md:text-[24px] font-Karla">
                andreaDesign@gmail.com
              </span>
            </div>
            <div className="flex items-center mt-6">
              <Image
                src="/assets/images/phone_icon.svg"
                alt="phone_icon"
                width={30}
                height={30}
              />
              <span className="ml-4 md:text-[24px] font-Karla">
                +34 123 456 789
              </span>
            </div>
            <div className="flex items-center mt-6">
              <Image
                src="/assets/images/location_icon.svg"
                alt="location_icon"
                width={30}
                height={38}
              />
              <span className="ml-4 md:text-[24px] font-Karla">
                123 Street 487 House
              </span>
            </div>
          </div>

          <div>
            <form className="space-y-6" onSubmit={handleSend} noValidate>
              <div>
                <label className="text-[#1E2B3B] text-lg font-cormorant block mb-2">
                  Name
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
                  Email
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
                  Your Message
                </label>
                <div className="border border-[#1E2B3B] rounded-lg p-2 h-[110px]">
                  <textarea className="w-full h-full outline-none bg-transparent resize-none" />
                </div>
              </div>

              <button
                type="submit"
                className={`w-full h-[56px] font-cormorant text-lg font-semibold transition-colors duration-300 ${
                  isSent
                    ? "bg-green-500"
                    : "bg-[#1E2B3B] hover:bg-[#35485D] text-white"
                }`}
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
