/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, X } from "lucide-react";

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
    setTimeout(() => setIsVisible(false), 2000);
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
            className="fixed bottom-6 left-1/2 transform -translate-x-1/2 w-[90%] max-w-xl backdrop-blur-lg bg-white/80 border border-white/40 text-gray-900 text-base p-6 flex flex-col items-center rounded-2xl shadow-2xl z-50"
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
                <p className="text-center font-semibold text-lg leading-relaxed">
                  🍪 We use cookies to enhance your browsing experience. By clicking "Accept," you consent to our use of cookies.
                </p>
                <div className="flex space-x-4 mt-5">
                  <motion.button
                    onClick={handleConsent}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold text-sm transition-all shadow-md"
                  >
                    Accept
                  </motion.button>
                  <motion.button
                    onClick={() => setIsVisible(false)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 rounded-full font-semibold text-sm transition-all shadow-md"
                  >
                    Reject
                  </motion.button>
                  <motion.button
                    onClick={() => setShowTerms(true)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-full font-semibold text-sm transition-all shadow-md"
                  >
Impressum                  </motion.button>
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
              className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-6"
            >
              <motion.div
                initial={{ scale: 0.85 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.85 }}
                className="bg-white rounded-2xl p-8 max-w-4xl w-full shadow-2xl overflow-y-auto max-h-[80vh] relative"
              >
                <button onClick={() => setShowTerms(false)} className="absolute top-4 right-4">
                  <X className="text-gray-600 hover:text-gray-900" size={28} />
                </button>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                IMPRESSUM                </h2>

                <div className="space-y-6 text-gray-800 leading-relaxed px-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Impressum</h3>
                    <p>
                    

Angaben gemäß § 5 TMG: <br />

Schule für Musik und Kunst Armina Aristak <br />

Luise-Duttenhofer-Weg 14, <br />

71334, Waiblingen <br />

Telefon: +34 123 456 789 <br />

E-Mail: andreaDesign@gmail.com

<br />

Steuernummer: 90129/27508 <br />

Finanzamt Waiblingen <br />

Inhaltliche Verantwortliche: Armine Ghukasyan
                    </p>
                  </div>

                  <div className="border-l-4 border-red-500 pl-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Haftungsausschluss</h3>
                   
                    <h5 className="text-xl font-semibold text-gray-700 mb-2">Haftung für Inhalte</h5>

                    <p>
                    Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach § 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                    </p>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Haftung für Links</h3>
                    <p>
                    Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                    </p>
                  </div>


                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Urheberrecht</h3>
                    <p>
Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.                    </p>
                  </div>
                </div>

                <div className="mt-8 flex justify-center space-x-6">
                  <motion.button
                    onClick={() => setShowTerms(false)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-2 rounded-full font-semibold text-sm transition-all shadow-md"
                  >
                    Close
                  </motion.button>
                  <motion.button
                    onClick={handleConsent}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-semibold text-sm transition-all shadow-md"
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
