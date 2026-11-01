import { motion } from "framer-motion";
import { FiBriefcase, FiLayers, FiCreditCard, FiGlobe, FiMapPin, FiCode } from "react-icons/fi";
import { experience } from "../data/portfolio";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal, Stagger } from "./ui/Reveal";
import { staggerItem } from "../lib/motion";

export function Experience() {
  const getProjectIcon = (title: string) => {
    if (title.toLowerCase().includes("erp")) return <FiLayers className="text-primary-300" />;
    if (title.toLowerCase().includes("pos")) return <FiCreditCard className="text-emerald-300" />;
    return <FiGlobe className="text-accent-300" />;
  };

  return (
    <section id="experience" className="relative py-24 sm:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="Career Journey"
          title="Work Experience &"
          highlight="Key Systems"
          description="Enterprise software development, full-stack systems, and production web applications."
        />

        <div className="relative mx-auto mt-16 max-w-4xl space-y-12">
          {experience.map((item, index) => (
            <Reveal key={`${item.company}-${item.period}`} direction="up" delay={index * 0.1}>
              <div className="glass card-hover relative overflow-hidden rounded-3xl p-6 sm:p-8">
                {/* Header info */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-white/10 pb-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="chip border-primary-400/30 bg-primary-500/10 text-primary-300">
                        <FiBriefcase className="mr-1.5" />
                        {item.period}
                      </span>
                      {item.location && (
                        <span className="chip text-slate-400">
                          <FiMapPin className="mr-1.5 text-accent-400" />
                          {item.location}
                        </span>
                      )}
                    </div>
                    <h3 className="mt-3 font-display text-2xl font-bold text-white">
                      {item.role}
                    </h3>
                    <p className="text-base font-medium text-gradient">{item.company}</p>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-slate-300 sm:text-base">
                  {item.description}
                </p>

                {/* Sub-projects if present (e.g. ERP, POS, The PARA) */}
                {item.projects && item.projects.length > 0 && (
                  <div className="mt-8 space-y-5">
                    <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent-400">
                      <FiCode />
                      Key Systems &amp; Core Contributions
                    </h4>

                    <div className="grid gap-4 sm:grid-cols-1">
                      {item.projects.map((proj) => (
                        <div
                          key={proj.title}
                          className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-colors hover:border-white/20 hover:bg-white/[0.04]"
                        >
                          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                            <div className="flex items-center gap-2.5">
                              <span className="grid h-8 w-8 place-items-center rounded-lg bg-white/[0.06] text-sm">
                                {getProjectIcon(proj.title)}
                              </span>
                              <h5 className="font-display text-base font-semibold text-white">
                                {proj.title}
                              </h5>
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                              {proj.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="rounded-md bg-white/[0.05] px-2 py-0.5 text-[11px] font-medium text-slate-300"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          <p className="mt-3 text-xs leading-relaxed text-slate-400 sm:text-sm">
                            {proj.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Highlights */}
                <div className="mt-7 border-t border-white/10 pt-6">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Impact &amp; Engineering Highlights
                  </h4>
                  <Stagger className="mt-3 grid gap-2.5 sm:grid-cols-2" stagger={0.06}>
                    {item.highlights.map((highlight) => (
                      <motion.div
                        key={highlight}
                        variants={staggerItem}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-primary-400 to-accent-400 shadow-glow" />
                        <span>{highlight}</span>
                      </motion.div>
                    ))}
                  </Stagger>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
