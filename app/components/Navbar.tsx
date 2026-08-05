"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import { profile } from "../data/profile";
import { DocumentIcon } from "./ui/icons";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "journey", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const { resolvedTheme, setTheme } = useTheme();
  const pathname = usePathname();
  const onHome = pathname === "/";

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight the section currently in view.
  useEffect(() => {
    if (!onHome) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0.01, 0.25, 0.5] },
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [onHome]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const hrefFor = (id: string) =>
    onHome ? `#${id}` : id === "home" ? "/" : `/#${id}`;

  if (!mounted) return null;
  const isDark = resolvedTheme === "dark";

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.21, 0.6, 0.35, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-[rgb(var(--border-subtle))] bg-[rgb(var(--color-background))]/75 py-3 backdrop-blur-xl"
            : "py-5"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 sm:px-8 lg:px-12">
          <Link href="/" className="group flex items-center gap-3">
            <span className="relative grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 font-display text-sm font-bold text-white shadow-[0_8px_24px_-8px_rgb(124_58_237/0.8)]">
              {profile.initials}
            </span>
            <span className="hidden text-left sm:block">
              <span className="block text-sm font-semibold leading-tight">
                {profile.name}
              </span>
              <span className="muted block text-[11px] leading-tight">
                {profile.role}
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 rounded-full border border-[rgb(var(--border-subtle))] bg-[rgb(var(--surface))]/60 p-1 backdrop-blur-xl lg:flex">
            {sections.map((section) => {
              const isActive = onHome && active === section.id;
              return (
                <Link
                  key={section.id}
                  href={hrefFor(section.id)}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-white"
                      : "muted hover:text-violet-600 dark:hover:text-violet-300"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      transition={{ type: "spring", stiffness: 340, damping: 32 }}
                      className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600"
                    />
                  )}
                  {section.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/resume"
              className={`hidden items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold transition-colors sm:inline-flex ${
                pathname === "/resume"
                  ? "border-violet-500/50 bg-violet-500/10 text-violet-600 dark:text-violet-300"
                  : "border-[rgb(var(--border-subtle))] hover:border-violet-500/50 hover:bg-violet-500/5"
              }`}
            >
              <DocumentIcon className="h-4 w-4" />
              CV
            </Link>

            <button
              onClick={() => setTheme(isDark ? "light" : "dark")}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              className="grid h-10 w-10 place-items-center rounded-xl border border-[rgb(var(--border-subtle))] transition-colors hover:border-violet-500/50 hover:bg-violet-500/5"
            >
              {isDark ? (
                <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-amber-400">
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-violet-600">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>

            <button
              onClick={() => setOpen(true)}
              aria-label="Open navigation menu"
              className="grid h-10 w-10 place-items-center rounded-xl border border-[rgb(var(--border-subtle))] transition-colors hover:border-violet-500/50 hover:bg-violet-500/5 lg:hidden"
            >
              <span className="flex flex-col gap-1.5">
                <span className="block h-0.5 w-5 rounded-full bg-current" />
                <span className="block h-0.5 w-5 rounded-full bg-current" />
                <span className="block h-0.5 w-3.5 rounded-full bg-current" />
              </span>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[55] bg-black/60 backdrop-blur-md lg:hidden"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 240 }}
              className="fixed right-0 top-0 z-[56] flex h-dvh w-full max-w-xs flex-col border-l border-[rgb(var(--border-subtle))] bg-[rgb(var(--color-background))] lg:hidden"
            >
              <div className="flex items-center justify-between border-b border-[rgb(var(--border-subtle))] p-6">
                <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-300">
                  Navigate
                </span>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close navigation menu"
                  className="grid h-9 w-9 place-items-center rounded-lg transition-colors hover:bg-violet-500/10"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-5 w-5">
                    <path strokeLinecap="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4">
                {sections.map((section, i) => (
                  <motion.div
                    key={section.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.05 }}
                  >
                    <Link
                      href={hrefFor(section.id)}
                      onClick={() => setOpen(false)}
                      className="group flex items-center gap-4 rounded-xl p-4 transition-colors hover:bg-violet-500/5"
                    >
                      <span className="font-mono text-xs text-violet-500">
                        0{i + 1}
                      </span>
                      <span className="text-lg font-medium transition-transform group-hover:translate-x-1">
                        {section.label}
                      </span>
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-4 px-4"
                >
                  <Link
                    href="/resume"
                    onClick={() => setOpen(false)}
                    className="btn-primary w-full"
                  >
                    <DocumentIcon className="h-4 w-4" />
                    View / download CV
                  </Link>
                </motion.div>
              </div>

              <div className="border-t border-[rgb(var(--border-subtle))] p-6">
                <p className="muted text-xs">
                  © {new Date().getFullYear()} {profile.name}
                </p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
