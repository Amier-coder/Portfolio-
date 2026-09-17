import { FiArrowUp } from "react-icons/fi";
import { navLinks, profile, socials } from "../data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-white/[0.015]">
      <div className="container-px py-12">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
          <a href="#home" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 text-sm font-bold text-white shadow-glow">
              AH
            </span>
            <span>
              <span className="block font-display text-sm font-semibold text-white">
                {profile.name}
              </span>
              <span className="block text-xs text-slate-400">{profile.role}</span>
            </span>
          </a>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-400 transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-primary-400/50 hover:text-white"
              >
                <social.icon size={17} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-slate-500">
            © {year} {profile.name}. Built with React, TypeScript &amp; Tailwind CSS.
          </p>

          <a
            href="#home"
            className="inline-flex items-center gap-2 text-xs font-medium text-slate-400 transition hover:text-white"
          >
            Back to top
            <span className="grid h-7 w-7 place-items-center rounded-full border border-white/10">
              <FiArrowUp size={13} />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
