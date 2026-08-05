"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import ProjectCard from "./ProjectCard";
import { projectCategories, projects } from "../data/projects";

export default function Projects() {
  const [active, setActive] = useState<string>("All");

  const visible = useMemo(
    () =>
      active === "All"
        ? projects
        : projects.filter((project) => project.category === active),
    [active],
  );

  const counts = useMemo(() => {
    const map: Record<string, number> = { All: projects.length };
    projects.forEach((p) => {
      map[p.category] = (map[p.category] ?? 0) + 1;
    });
    return map;
  }, []);

  return (
    <section id="projects" className="relative px-6 py-24 sm:px-8 lg:px-12">
      <div className="container mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Selected work"
          title="Every project here runs — most of them are live"
          description="Eleven systems across agentic AI, computer vision, multilingual NLP, machine learning and analytics. Open a case study for the problem, the approach and the measured result."
        />

        {/* Filters */}
        <div className="mb-12 flex flex-wrap justify-center gap-2">
          {projectCategories.map((category) => {
            const isActive = active === category;
            return (
              <button
                key={category}
                onClick={() => setActive(category)}
                aria-pressed={isActive}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-white"
                    : "muted hover:text-violet-600 dark:hover:text-violet-300"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="filter-pill"
                    transition={{ type: "spring", stiffness: 320, damping: 30 }}
                    className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 shadow-[0_8px_24px_-8px_rgb(124_58_237/0.7)]"
                  />
                )}
                {!isActive && (
                  <span className="absolute inset-0 -z-10 rounded-full border border-[rgb(var(--border-subtle))] bg-[rgb(var(--surface-raised))]/60" />
                )}
                {category}
                <span
                  className={`ml-1.5 font-mono text-[11px] ${
                    isActive ? "text-white/70" : "opacity-60"
                  }`}
                >
                  {counts[category] ?? 0}
                </span>
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <motion.div layout className="grid gap-7 lg:grid-cols-2">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((project, i) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: [0.21, 0.6, 0.35, 1] }}
              >
                <ProjectCard
                  project={project}
                  variant={project.featured ? "featured" : "compact"}
                  priority={i < 2}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
