"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import { timeline } from "../data/resume";
import { DocumentIcon } from "./ui/icons";

const kindStyles: Record<
  string,
  { label: string; dot: string; ring: string }
> = {
  program: {
    label: "Program",
    dot: "bg-violet-500",
    ring: "ring-violet-500/30",
  },
  education: {
    label: "Education",
    dot: "bg-indigo-500",
    ring: "ring-indigo-500/30",
  },
  certification: {
    label: "Certification",
    dot: "bg-emerald-500",
    ring: "ring-emerald-500/30",
  },
};

export default function Journey() {
  return (
    <section id="journey" className="relative px-6 py-24 sm:px-8 lg:px-12">
      <div className="container mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Education & training"
          title="How I got here"
          description="A CS and AI degree, a 250-hour honours analytics program, and a 24-week applied AI intensive — each one adding a layer I now use in production work."
        />

        <div className="relative">
          {/* rail */}
          <div
            aria-hidden
            className="absolute left-[11px] top-2 h-full w-px bg-gradient-to-b from-violet-500/60 via-violet-500/20 to-transparent sm:left-[15px]"
          />

          <ol className="space-y-8">
            {timeline.map((entry, i) => {
              const style = kindStyles[entry.kind];
              return (
                <li key={entry.title} className="relative pl-10 sm:pl-14">
                  <Reveal delay={i * 0.06}>
                    <span
                      aria-hidden
                      className={`absolute left-0 top-6 flex h-6 w-6 items-center justify-center rounded-full bg-[rgb(var(--surface))] ring-4 ${style.ring} sm:h-8 sm:w-8`}
                    >
                      <span className={`h-2.5 w-2.5 rounded-full ${style.dot}`} />
                    </span>

                    <motion.div
                      whileHover={{ y: -3 }}
                      className="glass-raised p-7 transition-colors hover:border-violet-500/40"
                    >
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="chip">{style.label}</span>
                        <span className="muted font-mono text-xs">
                          {entry.period}
                        </span>
                        {entry.badge && (
                          <span className="rounded-full bg-violet-500/10 px-3 py-1 text-[11px] font-semibold text-violet-600 ring-1 ring-violet-500/20 dark:text-violet-300">
                            {entry.badge}
                          </span>
                        )}
                      </div>

                      <h3 className="mt-4 text-lg font-semibold sm:text-xl">
                        {entry.title}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-violet-600 dark:text-violet-300">
                        {entry.org}
                      </p>

                      <ul className="mt-4 space-y-2.5">
                        {entry.points.map((point) => (
                          <li
                            key={point}
                            className="muted flex gap-3 text-sm leading-relaxed"
                          >
                            <span
                              aria-hidden
                              className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet-500/70"
                            />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 flex justify-center">
            <Link href="/resume" className="btn-ghost">
              <DocumentIcon className="h-4 w-4" />
              Read the full CV
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
