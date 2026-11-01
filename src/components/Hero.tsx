import { useEffect, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiDownload, FiMapPin } from "react-icons/fi";
import { profile, socials } from "../data/portfolio";

function useTypewriter(words: string[], speed = 85, pause = 1500) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    let timeout: number | undefined;

    if (!deleting && text === current) {
      timeout = window.setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    } else {
      timeout = window.setTimeout(
        () => {
          setText((prev) =>
            deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
          );
        },
        deleting ? speed / 2 : speed
      );
    }

    return () => {
      if (timeout) window.clearTimeout(timeout);
    };
  }, [text, deleting, index, words, speed, pause]);

  return text;
}

const codeLines: { indent: number; content: ReactNode }[] = [
  {
    indent: 0,
    content: (
      <>
        <span className="text-primary-300">const</span>{" "}
        <span className="text-accent-400">developer</span>{" "}
        <span className="text-slate-500">=</span> <span className="text-slate-300">{"{"}</span>
      </>
    ),
  },
  {
    indent: 1,
    content: (
      <>
        <span className="text-slate-400">name:</span>{" "}
        <span className="text-emerald-300">'Ameer Hamza'</span>
        <span className="text-slate-500">,</span>
      </>
    ),
  },
  {
    indent: 1,
    content: (
      <>
        <span className="text-slate-400">role:</span>{" "}
        <span className="text-emerald-300">'Full Stack &amp; Frontend'</span>
        <span className="text-slate-500">,</span>
      </>
    ),
  },
  {
    indent: 1,
    content: (
      <>
        <span className="text-slate-400">stack:</span>{" "}
        <span className="text-slate-300">[</span>
        <span className="text-emerald-300">'React'</span>
        <span className="text-slate-500">, </span>
        <span className="text-emerald-300">'Laravel'</span>
        <span className="text-slate-500">, </span>
        <span className="text-emerald-300">'MySQL'</span>
        <span className="text-slate-300">]</span>
        <span className="text-slate-500">,</span>
      </>
    ),
  },
  {
    indent: 1,
    content: (
      <>
        <span className="text-slate-400">systems:</span>{" "}
        <span className="text-emerald-300">'ERP &amp; POS'</span>
        <span className="text-slate-500">,</span>
      </>
    ),
  },
  {
    indent: 1,
    content: (
      <>
        <span className="text-slate-400">available:</span>{" "}
        <span className="text-accent-400">true</span>
        <span className="text-slate-500">,</span>
      </>
    ),
  },
  { indent: 0, content: <span className="text-slate-300">{"}"}</span> },
];

export function Hero() {
  const typed = useTypewriter(profile.roles);

  return (
    <section id="home" className="relative flex min-h-screen items-center pt-24 pb-16 sm:pt-28 sm:pb-20 overflow-hidden w-full max-w-full">
      <div className="container-px grid items-center gap-8 sm:gap-10 lg:gap-14 lg:grid-cols-[1.05fr_0.95fr] w-full max-w-full min-w-0">
        <div className="w-full max-w-full min-w-0 flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-2 sm:gap-3 w-full max-w-full"
          >
            {profile.available && (
              <span className="chip border-emerald-400/25 bg-emerald-400/10 text-emerald-300 text-[11px] sm:text-xs shrink-0">
                <span className="relative mr-2 flex h-2 w-2 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Available for work
              </span>
            )}
            <span className="chip text-[11px] sm:text-xs max-w-full min-w-0">
              <FiMapPin className="mr-1.5 text-primary-300 shrink-0" />
              <span className="truncate block max-w-[170px] xs:max-w-[240px] sm:max-w-none">
                {profile.location}
              </span>
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-5 sm:mt-7 text-2xl xs:text-3xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-extrabold leading-[1.12] tracking-tight text-white w-full max-w-full"
          >
            Hi, I&apos;m{" "}
            <span className="text-gradient text-shadow-glow">{profile.firstName}</span>
            <br />
            <span className="text-white">I build scalable web apps.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-3.5 sm:mt-5 flex min-h-[28px] sm:min-h-[32px] items-center font-display text-sm xs:text-base sm:text-xl font-medium text-slate-200 w-full max-w-full min-w-0 overflow-hidden"
          >
            <span className="mr-2 text-slate-500 font-mono shrink-0">&gt;</span>
            <span className="truncate">{typed}</span>
            <span className="ml-1 inline-block h-4 sm:h-5 w-[2px] animate-pulse bg-accent-400 shrink-0" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-4 sm:mt-5 max-w-xl text-xs xs:text-sm sm:text-base lg:text-lg leading-relaxed text-slate-300 w-full max-w-full"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto"
          >
            <a href="#projects" className="btn-primary group text-center justify-center w-full sm:w-auto">
              View My Work
              <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>
            <a href={profile.resumeUrl} download="Ameer-Hamza-Resume.pdf" className="btn-ghost group text-center justify-center w-full sm:w-auto">
              <FiDownload className="transition-transform group-hover:translate-y-0.5" />
              Download CV
            </a>

            <div className="flex items-center justify-center sm:justify-start gap-3 pt-2 sm:pt-0 sm:pl-1">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-primary-400/50 hover:text-white hover:shadow-glow shrink-0"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-full sm:max-w-md lg:max-w-none min-w-0 mt-4 sm:mt-6 lg:mt-0"
        >
          <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-primary-500/20 via-fuchsia-500/10 to-accent-500/20 blur-2xl pointer-events-none" />

          <div className="glass relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-card w-full max-w-full min-w-0 border border-white/10">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 sm:px-5 py-3 sm:py-4">
              <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-rose-400/80 shrink-0" />
              <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-amber-400/80 shrink-0" />
              <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-emerald-400/80 shrink-0" />
              <span className="ml-3 font-mono text-[11px] sm:text-xs text-slate-500 truncate">developer.ts</span>
            </div>

            <div className="p-4 sm:p-6 w-full max-w-full min-w-0">
              <div className="mb-4 sm:mb-6 flex items-center gap-3 sm:gap-4 min-w-0">
                <div className="relative shrink-0">
                  <div className="animate-spin-slow absolute -inset-[2px] rounded-2xl bg-[conic-gradient(from_0deg,#7c5cff,#22d3ee,#e879f9,#7c5cff)] opacity-80" />
                  <div className="relative grid h-12 w-12 sm:h-16 sm:w-16 place-items-center overflow-hidden rounded-2xl bg-base font-display text-base sm:text-xl font-bold text-white">
                    {profile.photo ? (
                      <img
                        src={profile.photo}
                        alt={profile.name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      "AH"
                    )}
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-display text-base sm:text-lg font-semibold text-white truncate">{profile.name}</p>
                  <p className="text-xs sm:text-sm text-slate-400 truncate">{profile.role}</p>
                </div>
              </div>

              <div className="w-full max-w-full min-w-0 overflow-x-auto rounded-xl bg-black/25 p-3 sm:p-4">
                <pre className="font-mono text-[11px] sm:text-[13px] leading-5 sm:leading-6 text-slate-300">
                  <code>
                    {codeLines.map((line, i) => (
                      <div
                        key={i}
                        className="flex items-start"
                        style={{ paddingLeft: `${line.indent * 12}px` }}
                      >
                        <span className="mr-2 sm:mr-3 select-none text-slate-700 font-mono text-[10px] sm:text-xs shrink-0 w-3 text-right">{i + 1}</span>
                        <span className="whitespace-pre">{line.content}</span>
                      </div>
                    ))}
                  </code>
                </pre>
              </div>
            </div>
          </div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="glass absolute -left-3 top-20 hidden rounded-2xl px-3.5 py-2.5 shadow-card md:block lg:-left-5"
          >
            <p className="text-[11px] text-slate-400">Experience</p>
            <p className="font-display text-base font-bold text-white">Full-Stack</p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="glass absolute -right-3 bottom-14 hidden rounded-2xl px-3.5 py-2.5 shadow-card md:block lg:-right-5"
          >
            <p className="text-[11px] text-slate-400">Focus</p>
            <p className="font-display text-base font-bold text-white">ERP &amp; POS</p>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-500 transition hover:text-white lg:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.25em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="grid h-8 w-8 place-items-center rounded-full border border-white/10"
        >
          <FiArrowRight className="rotate-90 text-xs" />
        </motion.span>
      </motion.a>
    </section>
  );
}
