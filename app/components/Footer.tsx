"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { profile } from "../data/profile";
import { featuredProjects } from "../data/projects";
import {
  GitHubIcon,
  HuggingFaceIcon,
  LinkedInIcon,
  MailIcon,
  PinIcon,
} from "./ui/icons";

const socials = [
  { name: "GitHub", url: profile.socials.github, icon: <GitHubIcon className="h-4 w-4" /> },
  { name: "LinkedIn", url: profile.socials.linkedin, icon: <LinkedInIcon className="h-4 w-4" /> },
  {
    name: "Hugging Face",
    url: profile.socials.huggingface,
    icon: <HuggingFaceIcon className="h-4 w-4" />,
  },
];

const siteLinks = [
  { name: "About", href: "/#about" },
  { name: "Capabilities", href: "/#skills" },
  { name: "Projects", href: "/#projects" },
  { name: "Education", href: "/#journey" },
  { name: "CV", href: "/resume" },
  { name: "Contact", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-[rgb(var(--border-subtle))] px-6 pt-16 sm:px-8 lg:px-12">
      <div className="container mx-auto max-w-7xl">
        <div className="grid gap-12 pb-14 lg:grid-cols-[1.4fr_0.8fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 font-display text-sm font-bold text-white">
                {profile.initials}
              </span>
              <span>
                <span className="block text-sm font-semibold">{profile.name}</span>
                <span className="muted block text-xs">{profile.role}</span>
              </span>
            </Link>

            <p className="muted mt-6 max-w-sm text-sm leading-relaxed">
              {profile.tagline} Computer vision, multilingual NLP, agentic
              retrieval systems and analytics — built end to end and measured.
            </p>

            <div className="mt-6 flex gap-2">
              {socials.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  whileHover={{ y: -3 }}
                  className="grid h-10 w-10 place-items-center rounded-xl border border-[rgb(var(--border-subtle))] transition-colors hover:border-violet-500/50 hover:bg-violet-500/5 hover:text-violet-600 dark:hover:text-violet-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <nav aria-label="Site">
            <h3 className="text-sm font-semibold">Explore</h3>
            <ul className="mt-5 space-y-3">
              {siteLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="muted text-sm transition-colors hover:text-violet-600 dark:hover:text-violet-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-sm font-semibold">Featured work</h3>
            <ul className="mt-5 space-y-3">
              {featuredProjects.slice(0, 5).map((project) => (
                <li key={project.slug}>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="muted text-sm transition-colors hover:text-violet-600 dark:hover:text-violet-300"
                  >
                    {project.title}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-7 space-y-2.5">
              <a
                href={`mailto:${profile.email}`}
                className="muted flex items-center gap-2 text-sm transition-colors hover:text-violet-600 dark:hover:text-violet-300"
              >
                <MailIcon className="h-4 w-4" />
                {profile.email}
              </a>
              <p className="muted flex items-center gap-2 text-sm">
                <PinIcon className="h-4 w-4" />
                {profile.location}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-[rgb(var(--border-subtle))] py-7 sm:flex-row">
          <p className="muted text-xs">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p className="muted text-xs">
            Built with Next.js, Tailwind CSS and Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
}
