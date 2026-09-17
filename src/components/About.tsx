import { motion } from "framer-motion";
import { profile, services, stats } from "../data/portfolio";
import { Reveal, Stagger } from "./ui/Reveal";
import { staggerItem } from "../lib/motion";
import { SectionHeading } from "./ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="About Me"
          title="Turning ideas into"
          highlight="reliable products"
          description="A developer who cares about both how it looks and how it works under the hood."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="space-y-5 text-base leading-relaxed text-slate-400">
              {profile.bio.map((paragraph, index) => (
                <Reveal key={index} direction="up" delay={index * 0.08}>
                  <p>{paragraph}</p>
                </Reveal>
              ))}
            </div>

            <Stagger className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4" stagger={0.1}>
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={staggerItem}
                  className="glass card-hover rounded-2xl p-4 text-center"
                >
                  <p className="font-display text-2xl font-bold text-gradient sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-slate-400">{stat.label}</p>
                </motion.div>
              ))}
            </Stagger>
          </div>

          <Stagger className="grid gap-5 sm:grid-cols-2" stagger={0.09}>
            {services.map((service) => (
              <motion.article
                key={service.title}
                variants={staggerItem}
                className="group glass card-hover relative overflow-hidden rounded-2xl p-6"
              >
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary-500/20 blur-2xl transition-opacity duration-500 group-hover:opacity-100 sm:opacity-0" />
                <span className="relative grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary-500/25 to-accent-500/20 text-primary-200 ring-1 ring-inset ring-white/10">
                  <service.icon size={22} />
                </span>
                <h3 className="relative mt-5 font-display text-lg font-semibold text-white">
                  {service.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-slate-400">
                  {service.description}
                </p>
              </motion.article>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
