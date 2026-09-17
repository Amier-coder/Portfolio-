import { motion } from "framer-motion";
import { FiBriefcase } from "react-icons/fi";
import { experience } from "../data/portfolio";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="Journey"
          title="Experience &"
          highlight="milestones"
          description="My path so far — building, learning and shipping along the way."
        />

        <div className="relative mx-auto mt-16 max-w-3xl">
          <div className="absolute left-[15px] top-2 h-full w-px bg-gradient-to-b from-primary-500/70 via-accent-500/40 to-transparent md:left-1/2" />

          <div className="space-y-10">
            {experience.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={`${item.role}-${item.period}`}
                  className={`relative flex flex-col gap-6 md:flex-row ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <Reveal
                    direction={isLeft ? "right" : "left"}
                    className="md:w-1/2 md:px-8"
                  >
                    <div className="glass card-hover rounded-2xl p-6">
                      <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-accent-400">
                        <FiBriefcase />
                        {item.period}
                      </div>
                      <h3 className="mt-3 font-display text-lg font-semibold text-white">
                        {item.role}
                      </h3>
                      <p className="text-sm text-primary-300">{item.company}</p>
                      <p className="mt-3 text-sm leading-relaxed text-slate-400">
                        {item.description}
                      </p>
                      <ul className="mt-4 space-y-2">
                        {item.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex items-start gap-2 text-sm text-slate-400"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-primary-400 to-accent-400" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>

                  <span className="absolute left-0 top-6 grid h-8 w-8 place-items-center rounded-full border border-white/15 bg-base md:left-1/2 md:-translate-x-1/2">
                    <motion.span
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      className="h-3 w-3 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 shadow-glow"
                    />
                  </span>

                  <div className="hidden md:block md:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
