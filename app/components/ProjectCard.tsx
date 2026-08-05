"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "../data/projects";
import ProjectCover from "./ui/ProjectCover";
import { ArrowRightIcon, ExternalIcon, GitHubIcon } from "./ui/icons";

type ProjectCardProps = {
  project: Project;
  /** Featured cards get a taller cover and the full metric row. */
  variant?: "featured" | "compact";
  priority?: boolean;
};

export default function ProjectCard({
  project,
  variant = "featured",
  priority = false,
}: ProjectCardProps) {
  const isFeatured = variant === "featured";

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: [0.21, 0.6, 0.35, 1] }}
      className="glass-raised group flex h-full flex-col overflow-hidden transition-colors hover:border-violet-500/40"
    >
      <Link
        href={`/projects/${project.slug}`}
        className="relative block"
        aria-label={`Open ${project.title} case study`}
      >
        <ProjectCover
          project={project}
          priority={priority}
          className={isFeatured ? "h-60 sm:h-64" : "h-44"}
        />

        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-md">
            {project.category}
          </span>
          <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-md">
            {project.year}
          </span>
        </div>

        {project.demoUrl && (
          <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/20 px-3 py-1 text-[11px] font-semibold text-emerald-50 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {project.demoLabel ?? "Live"}
          </span>
        )}

        {/* right padding keeps long titles clear of the cover's metric block */}
        <div className="absolute bottom-4 left-5 right-5 pr-24 sm:pr-28">
          <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
            {project.title}
          </h3>
          <p className="mt-0.5 text-sm text-white/70">{project.subtitle}</p>
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <p className="muted text-sm leading-relaxed">{project.short}</p>

        {isFeatured && (
          <dl className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {project.metrics.slice(0, 4).map((metric) => (
              <div
                key={metric.label}
                className="rounded-xl border border-[rgb(var(--border-subtle))] bg-[rgb(var(--surface-raised))]/60 px-3 py-2.5"
              >
                <dt className="font-display text-base font-bold text-violet-600 dark:text-violet-300">
                  {metric.value}
                </dt>
                <dd className="muted mt-0.5 text-[11px] leading-snug">
                  {metric.label}
                </dd>
              </div>
            ))}
          </dl>
        )}

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tags.slice(0, isFeatured ? 6 : 4).map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-violet-500/8 px-2 py-1 font-mono text-[11px] text-violet-700 ring-1 ring-violet-500/15 dark:text-violet-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-[rgb(var(--border-subtle))] pt-5">
          <Link
            href={`/projects/${project.slug}`}
            className="group/cta inline-flex items-center gap-1.5 text-sm font-semibold text-violet-600 dark:text-violet-300"
          >
            Case study
            <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover/cta:translate-x-1" />
          </Link>

          <span className="ml-auto flex items-center gap-2">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="muted inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium transition-colors hover:bg-violet-500/10 hover:text-violet-600 dark:hover:text-violet-300"
              >
                <ExternalIcon className="h-3.5 w-3.5" />
                Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="muted inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium transition-colors hover:bg-violet-500/10 hover:text-violet-600 dark:hover:text-violet-300"
              >
                <GitHubIcon className="h-3.5 w-3.5" />
                Code
              </a>
            )}
          </span>
        </div>
      </div>
    </motion.article>
  );
}
