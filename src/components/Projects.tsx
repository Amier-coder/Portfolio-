import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowRight, FiExternalLink, FiGithub, FiStar } from "react-icons/fi";
import { projects, type Category } from "../data/portfolio";
import { SectionHeading } from "./ui/SectionHeading";

const filters: Category[] = ["All", "Enterprise", "Web App", "E-Commerce", "UI / UX", "Game"];

export function Projects() {
  const [active, setActive] = useState<Category>("All");

  const visible = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  return (
    <section id="projects" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="container-px">
        <SectionHeading
          eyebrow="Portfolio &amp; Systems"
          title="Featured"
          highlight="Projects"
          description="Enterprise ERP &amp; POS systems, responsive web applications, and dynamic full-stack solutions."
        />

        <div className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-1.5 sm:gap-2">
          {filters.map((filter) => {
            const isActive = active === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActive(filter)}
                className={`relative rounded-full px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm font-medium transition-colors ${
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

        <motion.div layout className="mt-8 sm:mt-12 grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                <div className="relative h-44 sm:h-52 overflow-hidden">
                  {project.demoImage && (
                    <img
                      src={project.demoImage}
                      alt={`${project.title} demo`}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-base/95 via-base/40 to-transparent" />
                  <div className="bg-grid absolute inset-0 opacity-30" />

                  <div className="absolute left-3 sm:left-4 top-3 sm:top-4 flex flex-wrap items-center gap-1.5 max-w-[calc(100%-60px)] z-10">
                    <span className="chip bg-base/80 font-medium text-[10px] sm:text-xs">{project.category}</span>
                    {project.featured && (
                      <span className="chip border-amber-400/30 bg-amber-400/10 text-amber-300 text-[10px] sm:text-xs">
                        <FiStar className="mr-1 text-[10px]" /> Featured
                      </span>
                    )}
                  </div>

                  <div className="absolute right-3 sm:right-4 top-3 sm:top-4 grid h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 place-items-center rounded-2xl bg-base/60 text-white ring-1 ring-inset ring-white/10 backdrop-blur-md transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6 z-10">
                    <project.icon size={22} className="sm:text-2xl" />
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-4 sm:p-6">
                  <h3 className="font-display text-base sm:text-lg font-semibold text-white transition-colors group-hover:text-primary-200">
                    {project.title}
                  </h3>
                  <p className="mt-2 flex-1 text-xs sm:text-sm leading-relaxed text-slate-400">
                    {project.description}
                  </p>

                  <div className="mt-4 sm:mt-5 flex flex-wrap gap-1.5 sm:gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="chip text-[10px] sm:text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 sm:mt-6 flex items-center gap-3 border-t border-white/10 pt-4 sm:pt-5">
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-300 transition hover:text-white"
                    >
                      <FiGithub /> Code
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="ml-auto inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-accent-400 transition hover:text-accent-300"
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

        <div className="mt-10 sm:mt-12 flex justify-center">
          <a
            href="https://github.com/Amier-coder?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="btn-ghost group text-xs sm:text-sm"
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
