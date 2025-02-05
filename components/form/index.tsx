import { useState } from "react";

const Form = () => {
  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSend = () => {
    setIsSent(true);
    setTimeout(() => setIsSent(false), 3000);
  };

  return (
    <div>
      <form className="space-y-6 mr-[20px]">
        <div>
          <label className="text-[#1E2B3B] text-lg font-cormorant block mb-2">
            Your name
          </label>
          <input
            type="text"
            className={`w-full border-b-2 focus:outline-none p-2 ${isNameFocused ? 'border-[#1E2B3B]' : 'border-[#959595]'}`}
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
            className={`w-full border-b-2 focus:outline-none p-2 ${isEmailFocused ? 'border-[#1E2B3B]' : 'border-[#959595]'}`}
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
          onClick={handleSend}
          className={`w-full h-[56px] font-cormorant text-lg font-semibold transition-colors duration-300
                  ${isSent ? "bg-green-500" : "bg-[#1E2B3B] hover:bg-[#35485D]"} text-white`}
        >
          {isSent ? "Sent Successfully!" : "Send message"}
        </button>
      </form>
    </div>
  );
};

export default Form;
