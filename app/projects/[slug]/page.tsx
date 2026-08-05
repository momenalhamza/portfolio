import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "../../data/projects";
import { profile } from "../../data/profile";
import ProjectCover from "../../components/ui/ProjectCover";
import Reveal from "../../components/ui/Reveal";
import {
  ArrowRightIcon,
  ExternalIcon,
  GitHubIcon,
  MailIcon,
} from "../../components/ui/icons";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };

  return {
    title: `${project.title} — ${project.subtitle}`,
    description: project.short,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.title} — ${project.subtitle}`,
      description: project.short,
      url: `${profile.siteUrl}/projects/${project.slug}`,
      // Screenshot when there is one; otherwise the generated site card applies.
      ...(project.image ? { images: [project.image] } : {}),
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];
  const prev = projects[(index - 1 + projects.length) % projects.length];

  return (
    <article className="px-6 pb-24 pt-32 sm:px-8 lg:px-12">
      <div className="container mx-auto max-w-5xl">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="muted mb-8 flex flex-wrap items-center gap-2 text-xs">
          <Link href="/" className="hover:text-violet-600 dark:hover:text-violet-300">
            Home
          </Link>
          <span aria-hidden>/</span>
          <Link href="/projects" className="hover:text-violet-600 dark:hover:text-violet-300">
            Projects
          </Link>
          <span aria-hidden>/</span>
          <span className="text-violet-600 dark:text-violet-300">{project.title}</span>
        </nav>

        {/* Header */}
        <header>
          <div className="flex flex-wrap items-center gap-2">
            <span className="chip">{project.category}</span>
            <span className="chip">{project.year}</span>
            {project.demoUrl && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                {project.demoLabel ?? "Live"}
              </span>
            )}
          </div>

          <h1 className="mt-6 text-4xl font-bold leading-[1.08] sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-3 text-lg text-violet-600 dark:text-violet-300">
            {project.subtitle}
          </p>
          <p className="muted mt-6 max-w-3xl text-base leading-relaxed sm:text-lg">
            {project.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-primary group"
              >
                <span className="absolute inset-0 -translate-x-full skew-x-12 bg-white/20 transition-transform duration-700 group-hover:translate-x-full" />
                <span className="relative flex items-center gap-2">
                  <ExternalIcon className="h-4 w-4" />
                  {project.demoLabel ?? "Open live demo"}
                </span>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost"
              >
                <GitHubIcon className="h-4 w-4" />
                View source
              </a>
            )}
            {!project.demoUrl && !project.githubUrl && (
              <a href={`mailto:${profile.email}`} className="btn-ghost">
                <MailIcon className="h-4 w-4" />
                Ask me about this project
              </a>
            )}
          </div>

          {project.note && (
            <p className="muted mt-4 text-xs">{project.note}</p>
          )}
        </header>

        {/* Cover */}
        <Reveal className="mt-12">
          <div className="glass-raised group overflow-hidden p-2">
            <ProjectCover
              project={project}
              priority
              sizes="(max-width: 1024px) 100vw, 960px"
              className="h-64 rounded-[1.25rem] sm:h-96"
            />
          </div>
        </Reveal>

        {/* Metrics */}
        <Reveal className="mt-8">
          <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {project.metrics.map((metric) => (
              <div key={metric.label} className="glass-raised p-6 text-center">
                <dt className="font-display text-3xl font-bold text-gradient">
                  {metric.value}
                </dt>
                <dd className="muted mt-1.5 text-xs leading-snug">
                  {metric.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* Body */}
        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_18rem]">
          <div className="space-y-12">
            <Reveal>
              <section>
                <h2 className="eyebrow">The problem</h2>
                <p className="mt-5 text-lg leading-relaxed">{project.problem}</p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2 className="eyebrow">How I built it</h2>
                <ol className="mt-6 space-y-4">
                  {project.approach.map((step, i) => (
                    <li key={step} className="flex gap-4">
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-violet-500/10 font-mono text-xs font-bold text-violet-600 ring-1 ring-violet-500/20 dark:text-violet-300">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="muted leading-relaxed">{step}</p>
                    </li>
                  ))}
                </ol>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2 className="eyebrow">What came out of it</h2>
                <ul className="mt-6 space-y-4">
                  {project.results.map((result) => (
                    <li key={result} className="flex gap-4">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        aria-hidden
                        className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      <p className="leading-relaxed">{result}</p>
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="glass-raised p-6">
              <h2 className="text-sm font-semibold">Tech stack</h2>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-violet-500/8 px-2 py-1 font-mono text-[11px] text-violet-700 ring-1 ring-violet-500/15 dark:text-violet-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-raised p-6">
              <h2 className="text-sm font-semibold">Want the detail?</h2>
              <p className="muted mt-2 text-sm leading-relaxed">
                Happy to walk through the architecture, the evaluation set, or the
                trade-offs behind it.
              </p>
              <a
                href={`mailto:${profile.email}?subject=${encodeURIComponent(`About ${project.title}`)}`}
                className="btn-primary mt-5 w-full"
              >
                Get in touch
              </a>
            </div>
          </aside>
        </div>

        {/* Prev / next */}
        <nav className="mt-20 grid gap-4 border-t border-[rgb(var(--border-subtle))] pt-10 sm:grid-cols-2">
          <Link
            href={`/projects/${prev.slug}`}
            className="glass-raised group p-6 transition-colors hover:border-violet-500/40"
          >
            <span className="muted flex items-center gap-2 text-xs">
              <ArrowRightIcon className="h-3.5 w-3.5 rotate-180" />
              Previous
            </span>
            <p className="mt-2 font-semibold group-hover:text-violet-600 dark:group-hover:text-violet-300">
              {prev.title}
            </p>
          </Link>
          <Link
            href={`/projects/${next.slug}`}
            className="glass-raised group p-6 text-right transition-colors hover:border-violet-500/40"
          >
            <span className="muted flex items-center justify-end gap-2 text-xs">
              Next
              <ArrowRightIcon className="h-3.5 w-3.5" />
            </span>
            <p className="mt-2 font-semibold group-hover:text-violet-600 dark:group-hover:text-violet-300">
              {next.title}
            </p>
          </Link>
        </nav>
      </div>
    </article>
  );
}
