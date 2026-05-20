"use client";

import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, Phone, Send } from "lucide-react";
import { useState, useEffect } from "react";
import Magnetic from "./Magnetic";

export default function StickyMobileActions() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const telegramLink = process.env.NEXT_PUBLIC_TELEGRAM_LINK || "https://t.me/your_username";

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-10 right-8 z-[999] flex flex-col gap-6 md:hidden"
        >
          <Magnetic>
            <a
              href="tel:+79000000000"
              className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center shadow-2xl border border-black/5"
            >
              <Phone className="w-7 h-7" />
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href={telegramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 rounded-full bg-[#229ED9] text-white flex items-center justify-center shadow-2xl"
            >
              <MessageCircle className="w-7 h-7" />
            </a>
          </Magnetic>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
