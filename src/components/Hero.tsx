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
        <span className="text-slate-400">stack:</span>{" "}
        <span className="text-slate-300">[</span>
        <span className="text-emerald-300">'React'</span>
        <span className="text-slate-500">, </span>
        <span className="text-emerald-300">'TypeScript'</span>
        <span className="text-slate-500">, </span>
        <span className="text-emerald-300">'Node'</span>
        <span className="text-slate-300">]</span>
        <span className="text-slate-500">,</span>
      </>
    ),
  },
  {
    indent: 1,
    content: (
      <>
        <span className="text-slate-400">focus:</span>{" "}
        <span className="text-emerald-300">'clean, fast UIs'</span>
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
    <section id="home" className="relative flex min-h-screen items-center pt-28 pb-20">
      <div className="container-px grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-3"
          >
            {profile.available && (
              <span className="chip border-emerald-400/25 bg-emerald-400/10 text-emerald-300">
                <span className="relative mr-2 flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Available for work
              </span>
            )}
            <span className="chip">
              <FiMapPin className="mr-2 text-primary-300" />
              {profile.location} · {profile.timezone}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-7 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl xl:text-[4.25rem]"
          >
            Hi, I&apos;m{" "}
            <span className="text-gradient text-shadow-glow">{profile.firstName}</span>
            <br />
            <span className="text-white">I build for the web.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-5 flex h-8 items-center font-display text-lg font-medium text-slate-200 sm:text-xl"
          >
            <span className="mr-2 text-slate-500">&gt;</span>
            <span>{typed}</span>
            <span className="ml-1 inline-block h-5 w-[2px] animate-pulse bg-accent-400" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a href="#projects" className="btn-primary group">
              View My Work
              <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>
            <a href={profile.resumeUrl} className="btn-ghost group">
              <FiDownload className="transition-transform group-hover:translate-y-0.5" />
              Download CV
            </a>

            <div className="flex items-center gap-2 pl-1">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-primary-400/50 hover:text-white hover:shadow-glow"
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
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-primary-500/25 via-fuchsia-500/10 to-accent-500/25 blur-3xl" />

          <div className="glass relative overflow-hidden rounded-3xl shadow-card">
            <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
              <span className="h-3 w-3 rounded-full bg-rose-400/80" />
              <span className="h-3 w-3 rounded-full bg-amber-400/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
              <span className="ml-3 font-mono text-xs text-slate-500">developer.ts</span>
            </div>

            <div className="p-6">
              <div className="mb-6 flex items-center gap-4">
                <div className="relative">
                  <div className="animate-spin-slow absolute -inset-[3px] rounded-2xl bg-[conic-gradient(from_0deg,#7c5cff,#22d3ee,#e879f9,#7c5cff)] opacity-80" />
                  <div className="relative grid h-16 w-16 place-items-center overflow-hidden rounded-2xl bg-base font-display text-xl font-bold text-white">
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
                <div>
                  <p className="font-display text-lg font-semibold text-white">{profile.name}</p>
                  <p className="text-sm text-slate-400">{profile.role}</p>
                </div>
              </div>

              <pre className="overflow-hidden font-mono text-[13px] leading-7">
                <code>
                  {codeLines.map((line, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + i * 0.09, duration: 0.4 }}
                      style={{ paddingLeft: `${line.indent * 22}px` }}
                    >
                      <span className="mr-4 select-none text-slate-700">{i + 1}</span>
                      {line.content}
                    </motion.div>
                  ))}
                </code>
              </pre>
            </div>
          </div>

          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="glass absolute -left-5 top-24 hidden rounded-2xl px-4 py-3 shadow-card sm:block"
          >
            <p className="text-xs text-slate-400">Experience</p>
            <p className="font-display text-lg font-bold text-white">Full-Stack</p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="glass absolute -right-5 bottom-16 hidden rounded-2xl px-4 py-3 shadow-card sm:block"
          >
            <p className="text-xs text-slate-400">Focus</p>
            <p className="font-display text-lg font-bold text-white">Clean Code</p>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-500 transition hover:text-white lg:flex"
      >
        <span className="text-[11px] uppercase tracking-[0.25em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="grid h-9 w-9 place-items-center rounded-full border border-white/10"
        >
          <FiArrowRight className="rotate-90" />
        </motion.span>
      </motion.a>
    </section>
  );
}
