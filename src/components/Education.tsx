import { motion } from "framer-motion";
import { FaGraduationCap, FaLanguage } from "react-icons/fa6";
import { FiAward, FiBookOpen, FiCheckCircle } from "react-icons/fi";
import { educationList, languages } from "../data/portfolio";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal, Stagger } from "./ui/Reveal";
import { staggerItem } from "../lib/motion";

export function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="Academic Background"
          title="Education &"
          highlight="Languages"
          description="Formal academic qualifications, analytical training, and multilingual communication skills."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Education column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary-300">
              <FaGraduationCap className="text-base" />
              Academic Credentials
            </div>

            <div className="space-y-6">
              {educationList.map((edu, index) => (
                <Reveal key={edu.degree} direction="up" delay={index * 0.1}>
                  <div className="glass card-hover relative overflow-hidden rounded-3xl p-6 sm:p-7">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-start gap-3.5">
                        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-primary-500/25 to-accent-500/20 text-primary-200 ring-1 ring-inset ring-white/10">
                          <FiBookOpen size={20} />
                        </span>
                        <div>
                          <h3 className="font-display text-lg font-bold text-white sm:text-xl">
                            {edu.degree}
                          </h3>
                          <p className="text-sm font-medium text-gradient">
                            {edu.institution}
                          </p>
                        </div>
                      </div>

                      <span
                        className={`chip self-start text-xs font-medium sm:self-auto ${
                          edu.status.toLowerCase().includes("progress")
                            ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
                            : "border-primary-400/30 bg-primary-500/10 text-primary-300"
                        }`}
                      >
                        {edu.status}
                      </span>
                    </div>

                    <p className="mt-4 text-xs leading-relaxed text-slate-300 sm:text-sm">
                      {edu.description}
                    </p>

                    <div className="mt-5 space-y-2 border-t border-white/10 pt-4">
                      {edu.highlights.map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-2.5 text-xs text-slate-400 sm:text-sm"
                        >
                          <FiCheckCircle className="mt-0.5 shrink-0 text-accent-400" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Languages & Core Competencies column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent-400">
              <FaLanguage className="text-base" />
              Languages &amp; Communication
            </div>

            <div className="space-y-5">
              {languages.map((lang, index) => (
                <Reveal key={lang.name} direction="left" delay={index * 0.1}>
                  <div className="glass card-hover rounded-3xl p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/[0.04] text-accent-400 ring-1 ring-inset ring-white/10">
                          <FaLanguage size={20} />
                        </span>
                        <div>
                          <h4 className="font-display text-base font-semibold text-white">
                            {lang.name}
                          </h4>
                          <span className="text-xs text-primary-300">{lang.proficiency}</span>
                        </div>
                      </div>
                      <span className="font-mono text-xs font-semibold text-slate-400">
                        {lang.level}%
                      </span>
                    </div>

                    <p className="mt-3 text-xs leading-relaxed text-slate-400">
                      {lang.description}
                    </p>

                    <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-primary-500 to-accent-400"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>
                  </div>
                </Reveal>
              ))}

              {/* Professional Strengths Card */}
              <Reveal direction="up" delay={0.2}>
                <div className="glass rounded-3xl p-6 border-white/10">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary-300">
                    <FiAward className="text-base" />
                    Key Competencies
                  </div>
                  <Stagger className="mt-4 flex flex-wrap gap-2" stagger={0.04}>
                    {[
                      "Role-Based Access Control (RBAC)",
                      "MySQL Schema & Query Optimization",
                      "RESTful API Architecture",
                      "Redux State Management",
                      "ERP & POS Business Workflows",
                      "Cross-Browser & Mobile Responsiveness",
                      "Clean & Maintainable Code",
                    ].map((badge) => (
                      <motion.span
                        key={badge}
                        variants={staggerItem}
                        className="chip bg-white/[0.04] text-[11px] text-slate-300"
                      >
                        {badge}
                      </motion.span>
                    ))}
                  </Stagger>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
