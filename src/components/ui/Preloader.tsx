import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] grid place-items-center bg-base"
        >
          <div className="flex flex-col items-center gap-6">
            <div className="relative grid h-20 w-20 place-items-center">
              <span className="animate-spin-slow absolute inset-0 rounded-2xl bg-[conic-gradient(from_0deg,#7c5cff,#22d3ee,#e879f9,#7c5cff)] opacity-90" />
              <span className="absolute inset-[3px] rounded-2xl bg-base" />
              <span className="relative font-display text-2xl font-bold text-gradient">AH</span>
            </div>

            <div className="h-[3px] w-48 overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.1, ease: "easeInOut" }}
                className="h-full w-full rounded-full bg-gradient-to-r from-primary-500 to-accent-400"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
