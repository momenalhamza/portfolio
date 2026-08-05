import Image from "next/image";
import type { Project } from "../../data/projects";

type ProjectCoverProps = {
  project: Project;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

/**
 * Screenshot when the project has one, otherwise a generated cover:
 * gradient + grid + the project's headline metric. No stock photography.
 */
export default function ProjectCover({
  project,
  className = "",
  priority = false,
  sizes = "(max-width: 1024px) 100vw, 640px",
}: ProjectCoverProps) {
  const headline = project.metrics[0];

  if (project.image) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.accent} transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]`}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.35) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />
      {/* node-graph motif: hints at a system rather than a stock photo */}
      <svg
        aria-hidden
        viewBox="0 0 400 200"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full opacity-40"
      >
        <g stroke="rgba(255,255,255,.45)" strokeWidth="0.6" fill="none">
          <path d="M40 150 L120 110 L200 140 L280 90 L360 120" />
          <path d="M40 150 L110 60 L200 140" />
          <path d="M200 140 L250 40 L360 120" />
        </g>
        <g fill="rgba(255,255,255,.75)">
          {[
            [40, 150],
            [120, 110],
            [200, 140],
            [280, 90],
            [360, 120],
            [110, 60],
            [250, 40],
          ].map(([cx, cy]) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="2.6" />
          ))}
        </g>
      </svg>

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

      {/* Headline metric sits centre-right, clear of the category chips
          (top-left) and the live badge (top-right). */}
      {headline && (
        <div className="absolute right-6 top-1/2 -translate-y-1/2 text-right">
          <p className="font-display text-4xl font-bold leading-none text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)] sm:text-5xl">
            {headline.value}
          </p>
          <p className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-white/80">
            {headline.label}
          </p>
        </div>
      )}

      <span
        aria-hidden
        className="absolute -bottom-10 right-2 font-display text-[8rem] font-bold leading-none text-white/10"
      >
        {project.title.charAt(0)}
      </span>
    </div>
  );
}
