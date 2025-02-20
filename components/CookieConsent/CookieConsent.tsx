/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    const consent = sessionStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleConsent = () => {
    setAccepted(true);
    sessionStorage.setItem("cookieConsent", "true");
    setTimeout(() => setIsVisible(false), 2000); // Close after animation
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Cookie Consent Popup */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed bottom-6 left-1/3 transform -translate-x-1/2 w-[95%] max-w-lg backdrop-blur-lg bg-white/40 border border-white/30 text-gray-900 text-base p-6 flex flex-col items-center rounded-3xl shadow-2xl z-50"
          >
            {accepted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex flex-col items-center"
              >
                <CheckCircle className="text-green-600" size={48} />
                <p className="text-green-700 font-semibold text-lg mt-2">Welcome!</p>
              </motion.div>
            ) : (
              <>
                <p className="text-center font-cormorant font-semibold text-lg leading-relaxed">
                  🍪 We use cookies to enhance your browsing experience. By clicking "Accept," you consent to our use of cookies.
                </p>
                <div className="flex space-x-4 mt-5">
                  <motion.button
                    onClick={handleConsent}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-2 rounded-full font-semibold text-sm transition-all shadow-md"
                  >
                    Accept
                  </motion.button>
                  <motion.button
                    onClick={() => setIsVisible(false)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-7 py-2 rounded-full font-semibold text-sm transition-all shadow-md"
                  >
                    Reject
                  </motion.button>
                  <motion.button
                    onClick={() => setShowTerms(true)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-7 py-2 rounded-full font-semibold text-sm transition-all shadow-md"
                  >
                    Terms & Conditions
                  </motion.button>
                </div>
              </>
            )}
          </motion.div>

          {/* Terms & Conditions Modal */}
          {showTerms && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="bg-white rounded-lg p-6 max-w-lg w-full shadow-lg"
              >
                <h2 className="text-2xl font-semibold mb-4">Terms & Conditions</h2>
                <p className="text-gray-700">
                  By using our website, you agree to our Terms & Conditions. We use cookies to improve your experience and provide personalized services.
                </p>
                <div className="mt-5 flex justify-end space-x-4">
                  <motion.button
                    onClick={() => setShowTerms(false)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gray-400 hover:bg-gray-500 text-white px-5 py-2 rounded-full font-semibold text-sm transition-all shadow-md"
                  >
                    Close
                  </motion.button>
                  <motion.button
                    onClick={handleConsent}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full font-semibold text-sm transition-all shadow-md"
                  >
                    Accept & Continue
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;