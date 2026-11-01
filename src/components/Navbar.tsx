import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { navLinks, profile } from "../data/portfolio";
import { useActiveSection } from "../hooks/useActiveSection";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const ids = useMemo(() => navLinks.map((link) => link.href.slice(1)), []);
  const active = useActiveSection(ids);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-base/80 backdrop-blur-xl shadow-lg shadow-black/20"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="container-px flex h-[72px] items-center justify-between">
        <a href="#home" className="group flex items-center gap-3">
          <span className="relative grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 text-sm font-bold text-white shadow-glow">
            AH
            <span className="absolute inset-0 rounded-xl ring-1 ring-white/20 transition group-hover:ring-white/40" />
          </span>
          <span className="hidden font-display text-sm font-semibold tracking-wide text-white xs:block sm:block">
            {profile.name}
            <span className="block text-[11px] font-normal text-slate-400">{profile.role}</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1 backdrop-blur-md lg:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative block rounded-full px-3.5 py-1.5 text-xs xl:px-4 xl:py-2 xl:text-sm font-medium transition-colors ${
                    isActive ? "text-white" : "text-slate-400 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500/25 to-accent-500/20 ring-1 ring-inset ring-white/10"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <a href="#contact" className="btn-primary hidden lg:inline-flex text-xs xl:text-sm py-2 px-5">
            Let&apos;s Talk
          </a>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-white transition hover:border-primary-400/50 lg:hidden"
          >
            {open ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="max-h-[calc(100vh-72px)] overflow-y-auto border-t border-white/10 bg-base/95 backdrop-blur-2xl lg:hidden shadow-2xl"
          >
            <ul className="container-px flex flex-col gap-1 py-4">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.03 * index }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/[0.05] hover:text-white"
                  >
                    <span>{link.label}</span>
                    <span className="text-xs text-primary-400/60 font-mono">0{index + 1}</span>
                  </a>
                </motion.li>
              ))}
              <li className="pt-3">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="btn-primary w-full text-center"
                >
                  Let&apos;s Talk
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
