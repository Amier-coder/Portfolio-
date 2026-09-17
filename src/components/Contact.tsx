import { useState, type ChangeEvent, type FormEvent } from "react";
import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import { FaWhatsapp } from "react-icons/fa6";
import { FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";
import { profile, socials } from "../data/portfolio";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

type FormState = { name: string; email: string; message: string };

const initialForm: FormState = { name: "", email: "", message: "" };

export function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [sent, setSent] = useState(false);

  const handleChange =
    (field: keyof FormState) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: event.target.value }));
      setSent(false);
    };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setForm(initialForm);
  };

  const infoItems: { icon: IconType; label: string; value: string; href?: string }[] = [
    { icon: FiMail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: FiPhone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { icon: FaWhatsapp, label: "WhatsApp", value: profile.phone, href: profile.whatsapp },
    { icon: FiMapPin, label: "Location", value: `${profile.location} · ${profile.timezone}` },
  ];

  return (
    <section id="contact" className="relative py-24 sm:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something"
          highlight="great together"
          description="Have a project, a role, or just an idea? My inbox is always open."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal direction="right">
            <div className="flex h-full flex-col gap-5">
              {infoItems.map((item) => {
                const content = (
                  <>
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary-500/25 to-accent-500/20 text-primary-200 ring-1 ring-inset ring-white/10">
                      <item.icon size={18} />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-wide text-slate-500">
                        {item.label}
                      </span>
                      <span className="block text-sm font-medium text-white">{item.value}</span>
                    </span>
                  </>
                );

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="glass card-hover flex items-center gap-4 rounded-2xl p-5"
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={item.label}
                    className="glass flex items-center gap-4 rounded-2xl p-5"
                  >
                    {content}
                  </div>
                );
              })}

              <div className="glass rounded-2xl p-5">
                <p className="text-xs uppercase tracking-wide text-slate-500">Find me online</p>
                <div className="mt-3 flex gap-3">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                      className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-primary-400/50 hover:text-white hover:shadow-glow"
                    >
                      <social.icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.1}>
            <form onSubmit={handleSubmit} className="glass rounded-3xl p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-300">Name</span>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={handleChange("name")}
                    placeholder="Your name"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-primary-400/60 focus:ring-2 focus:ring-primary-500/20"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-300">Email</span>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={handleChange("email")}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-primary-400/60 focus:ring-2 focus:ring-primary-500/20"
                  />
                </label>
              </div>

              <label className="mt-5 block">
                <span className="mb-2 block text-sm font-medium text-slate-300">Message</span>
                <textarea
                  required
                  rows={6}
                  value={form.message}
                  onChange={handleChange("message")}
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-primary-400/60 focus:ring-2 focus:ring-primary-500/20"
                />
              </label>

              <motion.button
                type="submit"
                whileTap={{ scale: 0.98 }}
                className="btn-primary mt-6 w-full sm:w-auto"
              >
                <FiSend />
                Send Message
              </motion.button>

              {sent && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 text-sm text-emerald-400"
                >
                  Thanks! Your email client should open with the message ready to send.
                </motion.p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
