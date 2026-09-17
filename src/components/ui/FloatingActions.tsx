import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";
import { profile } from "../../data/portfolio";

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col items-center gap-3 sm:right-8">
      <a
        href={profile.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative grid h-12 w-12 place-items-center rounded-full bg-[#25D366] text-white shadow-lg shadow-emerald-500/30 transition-transform duration-300 hover:scale-110"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40" />
        <FaWhatsapp className="relative" size={22} />
      </a>

      <AnimatePresence>
        {showTop && (
          <motion.a
            href="#home"
            aria-label="Back to top"
            initial={{ opacity: 0, scale: 0.6, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 12 }}
            transition={{ duration: 0.25 }}
            className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-base/80 text-white backdrop-blur-xl transition hover:border-primary-400/60 hover:shadow-glow"
          >
            <FiArrowUp size={20} />
          </motion.a>
        )}
      </AnimatePresence>
    </div>
  );
}
