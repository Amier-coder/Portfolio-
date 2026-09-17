import { motion } from "framer-motion";
import { skills } from "../data/portfolio";
import { SectionHeading } from "./ui/SectionHeading";
import { Stagger } from "./ui/Reveal";
import { staggerItem } from "../lib/motion";

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Tools I use to"
          highlight="ship products"
          description="A modern, battle-tested toolchain for building responsive interfaces and scalable backends."
        />

        <Stagger
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.05}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={staggerItem}
              className="group glass card-hover rounded-2xl p-5"
            >
              <div className="flex items-center gap-3">
                <span
                  className="grid h-10 w-10 place-items-center rounded-xl bg-white/[0.04] ring-1 ring-inset ring-white/10 transition-transform duration-500 group-hover:scale-110"
                  style={{ color: skill.color }}
                >
                  <skill.icon size={20} />
                </span>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-white">{skill.name}</span>
                    <span className="font-mono text-xs text-slate-500">{skill.level}%</span>
                  </div>
                  <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-primary-500 to-accent-400"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
