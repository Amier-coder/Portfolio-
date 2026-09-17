import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowRight, FiExternalLink, FiGithub } from "react-icons/fi";
import { projects, type Category } from "../data/portfolio";
import { SectionHeading } from "./ui/SectionHeading";

const filters: Category[] = ["All", "Web App", "E-Commerce", "UI / UX", "Game"];

export function Projects() {
  const [active, setActive] = useState<Category>("All");

  const visible = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  return (
    <section id="projects" className="relative py-24 sm:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected"
          highlight="projects"
          description="A collection of apps and interfaces I've built — from e-commerce flows to custom media players."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {filters.map((filter) => {
            const isActive = active === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActive(filter)}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500/30 to-accent-500/25 ring-1 ring-inset ring-white/15"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{filter}</span>
              </button>
            );
          })}
        </div>

        <motion.div layout className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 24, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.97 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="group glass card-hover relative flex flex-col overflow-hidden rounded-3xl"
              >
                <div
                  className={`relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br ${project.gradient}`}
                >
                  <div className="bg-grid absolute inset-0 opacity-40" />
                  <span className="relative grid h-16 w-16 place-items-center rounded-2xl bg-base/50 text-white ring-1 ring-inset ring-white/10 backdrop-blur-sm transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
                    <project.icon size={30} />
                  </span>
                  <span className="absolute left-4 top-4 chip bg-base/60">{project.category}</span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-semibold text-white transition-colors group-hover:text-primary-200">
                    {project.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="chip">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition hover:text-white"
                    >
                      <FiGithub /> Code
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="ml-auto inline-flex items-center gap-2 text-sm font-medium text-accent-400 transition hover:text-accent-300"
                      >
                        Live Demo <FiExternalLink />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-12 flex justify-center">
          <a
            href="https://github.com/Amier-coder?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="btn-ghost group"
          >
            <FiGithub />
            View all repositories
            <FiArrowRight className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
