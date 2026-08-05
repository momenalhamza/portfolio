import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { profile } from "../data/profile";
import { projects } from "../data/projects";
import {
  languages,
  resumeSummary,
  skillGroups,
  softSkills,
  timeline,
} from "../data/resume";
import PdfEmbed from "./PdfEmbed";
import PrintButton from "./PrintButton";
import {
  ArrowRightIcon,
  DownloadIcon,
  ExternalIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  PinIcon,
} from "../components/ui/icons";

export const metadata: Metadata = {
  title: "CV / Résumé",
  description:
    "Full CV of Momen Hamza — AI & Machine Learning Engineer: education, certifications, technical skills and measured project results. Readable online or downloadable as PDF.",
  alternates: { canonical: "/resume" },
};

const sectionTitle =
  "font-display text-xs font-bold uppercase tracking-[0.22em] text-violet-600 dark:text-violet-300";

export default function ResumePage() {
  const education = timeline.filter((t) => t.kind !== "certification");
  const certifications = timeline.filter((t) => t.kind === "certification");
  const keyProjects = projects.slice(0, 9);

  return (
    <div className="px-6 pb-24 pt-32 sm:px-8 lg:px-12">
      <div className="container mx-auto max-w-5xl">
        {/* ---------- Header ---------- */}
        <header className="glass-raised relative overflow-hidden p-8 sm:p-10">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-violet-500/25 blur-[90px]"
          />
          <div className="relative flex flex-col gap-8 sm:flex-row sm:items-center">
            <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl ring-1 ring-violet-500/25">
              <Image
                src={profile.photo}
                alt={profile.name}
                width={456}
                height={684}
                sizes="112px"
                className="h-full w-full object-cover object-[center_18%]"
              />
            </div>

            <div className="min-w-0">
              <p className="eyebrow">Curriculum Vitae</p>
              <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
                {profile.name}
              </h1>
              <p className="mt-2 text-base font-medium text-violet-600 dark:text-violet-300">
                {profile.role}
              </p>
              <p className="muted mt-1 text-sm">{profile.discipline}</p>

              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                <a
                  href={`mailto:${profile.email}`}
                  className="muted inline-flex items-center gap-2 hover:text-violet-600 dark:hover:text-violet-300"
                >
                  <MailIcon className="h-4 w-4" />
                  {profile.email}
                </a>
                <a
                  href={`tel:${profile.phoneHref}`}
                  dir="ltr"
                  className="muted inline-flex items-center gap-2 hover:text-violet-600 dark:hover:text-violet-300"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-4 w-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.28 6.72 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.37c0-.98-.7-1.82-1.66-2l-2.9-.58a2.25 2.25 0 0 0-2.22.86l-.6.8a12.04 12.04 0 0 1-5.14-5.14l.8-.6a2.25 2.25 0 0 0 .86-2.22l-.58-2.9A2.06 2.06 0 0 0 8.3 3H6.75A2.25 2.25 0 0 0 4.5 5.25v1.5Z" />
                  </svg>
                  {profile.phone}
                </a>
                <span className="muted inline-flex items-center gap-2">
                  <PinIcon className="h-4 w-4" />
                  {profile.location}
                </span>
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="muted inline-flex items-center gap-2 hover:text-violet-600 dark:hover:text-violet-300"
                >
                  <LinkedInIcon className="h-4 w-4" />
                  LinkedIn
                </a>
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="muted inline-flex items-center gap-2 hover:text-violet-600 dark:hover:text-violet-300"
                >
                  <GitHubIcon className="h-4 w-4" />
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="no-print relative mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={profile.cv.file}
              download={profile.cv.downloadName}
              className="btn-primary group"
            >
              <span className="absolute inset-0 -translate-x-full skew-x-12 bg-white/20 transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative flex items-center gap-2">
                <DownloadIcon className="h-4 w-4" />
                Download PDF
              </span>
            </a>
            <a
              href={profile.cv.file}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              <ExternalIcon className="h-4 w-4" />
              Open PDF
            </a>
            <PrintButton />
          </div>
        </header>

        {/* ---------- Summary ---------- */}
        <section className="mt-8">
          <h2 className={sectionTitle}>Summary</h2>
          <p className="muted mt-4 leading-relaxed">{resumeSummary}</p>
        </section>

        {/* ---------- Education & training ---------- */}
        <section className="mt-12">
          <h2 className={sectionTitle}>Education & Training</h2>
          <div className="mt-5 space-y-5">
            {education.map((entry) => (
              <article
                key={entry.title}
                className="glass-raised p-6"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-base font-semibold">{entry.title}</h3>
                  <span className="muted font-mono text-xs">{entry.period}</span>
                </div>
                <p className="mt-1 text-sm font-medium text-violet-600 dark:text-violet-300">
                  {entry.org}
                  {entry.badge && (
                    <span className="muted font-normal"> · {entry.badge}</span>
                  )}
                </p>
                <ul className="mt-3 space-y-2">
                  {entry.points.map((point) => (
                    <li key={point} className="muted flex gap-3 text-sm leading-relaxed">
                      <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet-500/70" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* ---------- Key projects ---------- */}
        <section className="mt-12">
          <h2 className={sectionTitle}>Key Projects</h2>
          <div className="mt-5 space-y-5">
            {keyProjects.map((project) => (
              <article key={project.slug} className="glass-raised p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-base font-semibold">
                    {project.title}
                    <span className="muted font-normal"> — {project.subtitle}</span>
                  </h3>
                  <span className="muted font-mono text-xs">{project.year}</span>
                </div>

                <p className="muted mt-2 font-mono text-xs">
                  Tech: {project.stack.join(", ")}
                </p>

                <ul className="mt-3 space-y-2">
                  {project.results.map((result) => (
                    <li key={result} className="muted flex gap-3 text-sm leading-relaxed">
                      <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet-500/70" />
                      {result}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="group inline-flex items-center gap-1.5 font-semibold text-violet-600 dark:text-violet-300"
                  >
                    Case study
                    <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="muted inline-flex items-center gap-1.5 hover:text-violet-600 dark:hover:text-violet-300"
                    >
                      <ExternalIcon className="h-3.5 w-3.5" />
                      {project.demoLabel ?? "Live demo"}
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="muted inline-flex items-center gap-1.5 hover:text-violet-600 dark:hover:text-violet-300"
                    >
                      <GitHubIcon className="h-3.5 w-3.5" />
                      Code
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ---------- Technical skills ---------- */}
        <section className="mt-12">
          <h2 className={sectionTitle}>Technical Skills</h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.title} className="glass-raised p-6">
                <h3 className="text-sm font-semibold">{group.title}</h3>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md bg-violet-500/8 px-2 py-1 font-mono text-[11px] text-violet-700 ring-1 ring-violet-500/15 dark:text-violet-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- Certifications ---------- */}
        <section className="mt-12">
          <h2 className={sectionTitle}>Certifications & Training</h2>
          <div className="mt-5 space-y-4">
            {certifications.map((cert) => (
              <article key={cert.title} className="glass-raised p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-base font-semibold">{cert.title}</h3>
                  <span className="muted font-mono text-xs">{cert.period}</span>
                </div>
                <p className="mt-1 text-sm font-medium text-violet-600 dark:text-violet-300">
                  {cert.org}
                  {cert.badge && (
                    <span className="muted font-normal"> · {cert.badge}</span>
                  )}
                </p>
                <ul className="mt-3 space-y-2">
                  {cert.points.map((point) => (
                    <li key={point} className="muted flex gap-3 text-sm leading-relaxed">
                      <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet-500/70" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* ---------- Additional ---------- */}
        <section className="mt-12 grid gap-5 sm:grid-cols-2">
          <div className="glass-raised p-6">
            <h2 className={sectionTitle}>Languages</h2>
            <ul className="mt-4 space-y-3">
              {languages.map((lang) => (
                <li key={lang.name} className="flex items-baseline justify-between gap-4 text-sm">
                  <span className="font-medium">{lang.name}</span>
                  <span className="muted text-right text-xs">{lang.level}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-raised p-6">
            <h2 className={sectionTitle}>Soft Skills</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <span key={skill} className="chip">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- PDF ---------- */}
        <section className="no-print mt-12">
          <h2 className={sectionTitle}>The PDF itself</h2>
          <p className="muted mt-4 text-sm">
            Same content, formatted for recruiters and ATS systems.
          </p>
          <div className="mt-5">
            <PdfEmbed />
          </div>
        </section>
      </div>
    </div>
  );
}
