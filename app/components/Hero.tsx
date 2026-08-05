"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { profile } from "../data/profile";
import {
  ArrowRightIcon,
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  PinIcon,
} from "./ui/icons";

/** Cycles the role list with a typing/erasing effect. */
function useTypewriter(words: readonly string[], speed = 70) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [erasing, setErasing] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];

    if (!erasing && text === word) {
      const hold = setTimeout(() => setErasing(true), 1600);
      return () => clearTimeout(hold);
    }

    if (erasing && text === "") {
      setErasing(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }

    const tick = setTimeout(
      () =>
        setText((current) =>
          erasing
            ? word.slice(0, current.length - 1)
            : word.slice(0, current.length + 1),
        ),
      erasing ? speed / 2 : speed,
    );
    return () => clearTimeout(tick);
  }, [text, erasing, index, words, speed]);

  return text;
}

const orbitTags = ["PyTorch", "YOLOv8", "RAG · Neo4j", "FastAPI"];

export default function Hero() {
  const typed = useTypewriter(profile.roles);

  return (
    <section
      id="home"
      className="relative flex min-h-svh items-center overflow-hidden px-6 pb-20 pt-32 sm:px-8 lg:px-12"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
          {/* ---------- Copy ---------- */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {profile.availability}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="mt-7 text-[2.75rem] font-bold leading-[1.05] sm:text-6xl lg:text-7xl"
            >
              Hi, I&apos;m <span className="text-gradient">Momen Hamza</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.16 }}
              className="mt-5 flex items-center justify-center gap-2 text-xl font-medium sm:text-2xl lg:justify-start"
            >
              <span className="muted">I build as a</span>
              <span className="font-display font-semibold text-violet-600 dark:text-violet-300">
                {typed}
                <span className="ml-0.5 inline-block animate-blink">|</span>
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.24 }}
              className="muted mx-auto mt-7 max-w-2xl text-base leading-relaxed sm:text-lg lg:mx-0"
            >
              {profile.tagline} Computer vision, multilingual NLP and agentic RAG
              systems — trained, evaluated and deployed live, with the numbers to
              back them up.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.32 }}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start"
            >
              <Link href="#projects" className="btn-primary group">
                <span className="absolute inset-0 -translate-x-full skew-x-12 bg-white/20 transition-transform duration-700 group-hover:translate-x-full" />
                <span className="relative flex items-center gap-2">
                  Explore my work
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>

              <Link href="/resume" className="btn-ghost group">
                <DownloadIcon className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                View / download CV
              </Link>
            </motion.div>

            {/* Contact strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.44 }}
              className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm lg:justify-start"
            >
              <a
                href={`mailto:${profile.email}`}
                className="muted inline-flex items-center gap-2 transition-colors hover:text-violet-600 dark:hover:text-violet-300"
              >
                <MailIcon className="h-4 w-4" />
                {profile.email}
              </a>
              <span className="muted inline-flex items-center gap-2">
                <PinIcon className="h-4 w-4" />
                {profile.location}
              </span>
              <span className="flex items-center gap-2">
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub profile"
                  className="muted rounded-lg p-2 transition-colors hover:bg-violet-500/10 hover:text-violet-600 dark:hover:text-violet-300"
                >
                  <GitHubIcon className="h-4 w-4" />
                </a>
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn profile"
                  className="muted rounded-lg p-2 transition-colors hover:bg-violet-500/10 hover:text-violet-600 dark:hover:text-violet-300"
                >
                  <LinkedInIcon className="h-4 w-4" />
                </a>
              </span>
            </motion.div>
          </div>

          {/* ---------- Portrait ---------- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.21, 0.6, 0.35, 1] }}
            className="relative mx-auto w-full max-w-sm lg:max-w-md"
          >
            {/* rotating conic ring */}
            <div
              aria-hidden
              className="absolute -inset-6 rounded-[2.5rem] bg-[conic-gradient(from_0deg,rgb(139_92_246/0.5),transparent_35%,rgb(99_102_241/0.5),transparent_70%,rgb(139_92_246/0.5))] blur-2xl animate-spin-slow"
            />

            <div className="glass-raised relative overflow-hidden rounded-[2rem] p-2">
              <div className="relative overflow-hidden rounded-[1.6rem]">
                <Image
                  src={profile.photo}
                  alt={`${profile.name} — ${profile.role}`}
                  width={912}
                  height={1368}
                  priority
                  sizes="(max-width: 1024px) 90vw, 440px"
                  className="h-auto w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-display text-lg font-semibold text-white">
                    {profile.name}
                  </p>
                  <p className="text-sm text-white/75">{profile.role}</p>
                </div>
              </div>
            </div>

            {/* floating tech chips */}
            {orbitTags.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + i * 0.12 }}
                className={`chip absolute hidden animate-float shadow-lg backdrop-blur-md sm:flex ${
                  [
                    "-left-6 top-10",
                    "-right-4 top-1/3",
                    "-left-8 bottom-24",
                    "-right-6 bottom-10",
                  ][i]
                }`}
                style={{ animationDelay: `${i * 1.4}s` }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* ---------- Stat band ---------- */}
        <motion.dl
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="glass-raised mt-20 grid grid-cols-2 gap-px overflow-hidden lg:grid-cols-4"
        >
          {profile.stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-[rgb(var(--surface-raised))]/40 px-6 py-7 text-center"
            >
              <dt className="font-display text-3xl font-bold text-gradient">
                {stat.value}
              </dt>
              <dd className="muted mt-1.5 text-xs sm:text-sm">{stat.label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
