"use client";

import { useState } from "react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(true); // Always visible on page load

  const handleConsent = () => {
    setIsVisible(false); // Hide after clicking
  };

  if (!isVisible) return null; // If dismissed, do not render

  return (
    <div className="fixed top-0 left-0 w-full h-[60vh] bg-gray-900 text-white text-sm p-4 flex justify-center items-center z-30 opacity-95 gap-12">
      <p className="text-center text-[30px] font-cormorant font-bold">
        This website uses cookies to improve your experience.
      </p>
      <div className="space-x-4 items-center justify-center">
        <button
          onClick={handleConsent}
          className="bg-green-500 hover:bg-green-600 text-white px-14 py-3 rounded font-bold"
        >
          Accept
        </button>
        <button
          onClick={handleConsent}
          className="bg-red-500 hover:bg-red-600 text-white px-14 py-3 rounded font-bold"
        >
          Reject
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;