import { useState } from "react";

const Form = () => {
  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSend = () => {
    setIsSent(true);
    setTimeout(() => setIsSent(false), 3000);
  };

  return(
    <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 md:px-8">
      <form className="space-y-4 sm:space-y-6">
        <div>
          <label className="text-[#1E2B3B] text-base sm:text-lg font-cormorant block mb-1 sm:mb-2">
            Your name
          </label>
          <input
            type="text"
            className={`w-full border-b-2 focus:outline-none p-1.5 sm:p-2 text-sm sm:text-base
              ${isNameFocused ? 'border-[#1E2B3B]' : 'border-[#959595]'}`}
            placeholder="John Smith"
            onFocus={() => setIsNameFocused(true)}
            onBlur={() => setIsNameFocused(false)}
          />
        </div>
  
        <div>
          <label className="text-[#1E2B3B] text-base sm:text-lg font-cormorant block mb-1 sm:mb-2">
            Your email
          </label>
          <input
            type="email"
            className={`w-full border-b-2 focus:outline-none p-1.5 sm:p-2 text-sm sm:text-base
              ${isEmailFocused ? 'border-[#1E2B3B]' : 'border-[#959595]'}`}
            placeholder="email@gmail.com"
            onFocus={() => setIsEmailFocused(true)}
            onBlur={() => setIsEmailFocused(false)}
          />
        </div>
  
        <div>
          <label className="text-[#1E2B3B] text-base sm:text-lg font-cormorant block mb-1 sm:mb-2">
            Your message
          </label>
          <div className="border border-[#1E2B3B] rounded-lg p-1.5 sm:p-2 h-[90px] sm:h-[110px]">
            <textarea 
              className="w-full h-full outline-none bg-transparent resize-none text-sm sm:text-base" 
            />
          </div>
        </div>
  
        <button
          onClick={handleSend}
          className={`w-full h-[44px] sm:h-[56px] font-cormorant text-base sm:text-lg font-semibold 
            transition-colors duration-300
            ${isSent ? "bg-green-500" : "bg-[#1E2B3B] hover:bg-[#35485D]"} 
            text-white rounded-md`}
        >
          {isSent ? "Sent Successfully!" : "Send message"}
        </button>
      </form>
    </div>
  );
};

export default Form;
