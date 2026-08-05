"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "./ui/Reveal";
import { profile } from "../data/profile";
import {
  ArrowRightIcon,
  DownloadIcon,
  GitHubIcon,
  HuggingFaceIcon,
  LinkedInIcon,
  MailIcon,
  PinIcon,
} from "./ui/icons";

const channels = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: <MailIcon className="h-5 w-5" />,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phoneHref}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.28 6.72 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.37c0-.98-.7-1.82-1.66-2l-2.9-.58a2.25 2.25 0 0 0-2.22.86l-.6.8a12.04 12.04 0 0 1-5.14-5.14l.8-.6a2.25 2.25 0 0 0 .86-2.22l-.58-2.9A2.06 2.06 0 0 0 8.3 3H6.75A2.25 2.25 0 0 0 4.5 5.25v1.5Z" />
      </svg>
    ),
  },
  {
    label: "Location",
    value: profile.location,
    icon: <PinIcon className="h-5 w-5" />,
  },
];

const socials = [
  { label: "GitHub", href: profile.socials.github, icon: <GitHubIcon className="h-5 w-5" /> },
  { label: "LinkedIn", href: profile.socials.linkedin, icon: <LinkedInIcon className="h-5 w-5" /> },
  { label: "Hugging Face", href: profile.socials.huggingface, icon: <HuggingFaceIcon className="h-5 w-5" /> },
  {
    label: "Neural Digest",
    href: profile.socials.telegram,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M21.94 4.3 18.9 19.1c-.23 1.02-.84 1.27-1.7.79l-4.7-3.46-2.27 2.18c-.25.25-.46.46-.94.46l.34-4.78 8.7-7.86c.38-.34-.08-.53-.58-.19L6.99 13.1l-4.62-1.45c-1-.31-1.02-1 .21-1.48l18.06-6.96c.84-.31 1.57.2 1.3 1.09Z" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 py-24 sm:px-8 lg:px-12">
      <div className="container mx-auto max-w-6xl">
        <Reveal>
          <div className="glass-raised relative overflow-hidden p-8 sm:p-12 lg:p-16">
            {/* glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-violet-500/25 blur-[100px]"
            />

            <div className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <span className="eyebrow">Contact</span>
                <h2 className="mt-5 text-3xl font-bold sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
                  Let&apos;s build something that{" "}
                  <span className="text-gradient">actually ships</span>
                </h2>
                <p className="muted mt-5 max-w-xl text-base leading-relaxed sm:text-lg">
                  I&apos;m {profile.availability} — computer vision, NLP, agentic
                  AI or analytics. If you have a problem worth measuring,
                  I&apos;d like to hear about it.
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <a href={`mailto:${profile.email}`} className="btn-primary group">
                    <span className="absolute inset-0 -translate-x-full skew-x-12 bg-white/20 transition-transform duration-700 group-hover:translate-x-full" />
                    <span className="relative flex items-center gap-2">
                      Send me an email
                      <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </a>
                  <Link href="/resume" className="btn-ghost">
                    <DownloadIcon className="h-4 w-4" />
                    Get my CV
                  </Link>
                </div>

                <div className="mt-9 flex flex-wrap gap-3">
                  {socials.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ y: -3 }}
                      className="chip gap-2 px-4 py-2 transition-colors hover:border-violet-500/40 hover:text-violet-600 dark:hover:text-violet-300"
                    >
                      {social.icon}
                      {social.label}
                    </motion.a>
                  ))}
                </div>
              </div>

              <ul className="space-y-4">
                {channels.map((channel, i) => {
                  const content = (
                    <div className="flex items-center gap-4">
                      <span className="inline-flex rounded-xl bg-violet-500/10 p-3 text-violet-600 ring-1 ring-violet-500/20 dark:text-violet-300">
                        {channel.icon}
                      </span>
                      <div className="min-w-0">
                        <p className="text-xs font-semibold uppercase tracking-wider text-violet-600 dark:text-violet-300">
                          {channel.label}
                        </p>
                        <p className="mt-0.5 truncate text-sm font-medium" dir="ltr">
                          {channel.value}
                        </p>
                      </div>
                    </div>
                  );

                  return (
                    <Reveal key={channel.label} delay={0.08 * i}>
                      {channel.href ? (
                        <a
                          href={channel.href}
                          className="block rounded-2xl border border-[rgb(var(--border-subtle))] bg-[rgb(var(--surface-raised))]/60 p-5 transition-colors hover:border-violet-500/40 hover:bg-violet-500/5"
                        >
                          {content}
                        </a>
                      ) : (
                        <div className="rounded-2xl border border-[rgb(var(--border-subtle))] bg-[rgb(var(--surface-raised))]/60 p-5">
                          {content}
                        </div>
                      )}
                    </Reveal>
                  );
                })}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
