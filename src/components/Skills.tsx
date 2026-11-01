import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skills, type Skill } from "../data/portfolio";
import { SectionHeading } from "./ui/SectionHeading";
import { staggerItem } from "../lib/motion";

const categories = ["All", "Frontend", "Backend & Database", "Tools & Environment"] as const;
type CategoryType = (typeof categories)[number];

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>("All");

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((s: Skill) => s.category === activeCategory);

  return (
    <section id="skills" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="container-px">
        <SectionHeading
          eyebrow="Tech Stack &amp; Proficiency"
          title="Tools I use to"
          highlight="build solutions"
          description="A production-ready stack for engineering responsive client interfaces, enterprise systems, and performant REST APIs."
        />

        {/* Category switcher */}
        <div className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-1.5 sm:gap-2">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`relative rounded-full px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm font-medium transition-colors ${
                  isActive ? "text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="skills-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500/30 to-accent-500/25 ring-1 ring-inset ring-white/15"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </button>
            );
          })}
        </div>

        <motion.div
          layout
          className="mt-8 sm:mt-12 grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                variants={staggerItem}
                className="group glass card-hover rounded-2xl p-4 sm:p-5"
              >
                <div className="flex items-center gap-3 sm:gap-3.5">
                  <span
                    className="grid h-11 w-11 sm:h-12 sm:w-12 shrink-0 place-items-center rounded-xl bg-white/[0.04] ring-1 ring-inset ring-white/10 transition-transform duration-500 group-hover:scale-110"
                    style={{ color: skill.color }}
                  >
                    <skill.icon size={22} />
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <span className="text-xs sm:text-sm font-semibold text-white truncate">{skill.name}</span>
                      <span className="chip py-0 px-1.5 text-[9px] sm:text-[10px] bg-white/[0.04] text-slate-400 border-white/5 shrink-0">
                        {skill.category}
                      </span>
                    </div>
                    <div className="mt-1 flex items-center justify-between text-[11px] sm:text-xs">
                      <span className="text-slate-400">Proficiency</span>
                      <span className="font-mono font-semibold text-primary-300">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="mt-1.5 sm:mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-primary-500 to-accent-400"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
