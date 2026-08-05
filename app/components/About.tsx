"use client";

import { motion } from "framer-motion";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import { profile } from "../data/profile";
import { languages, softSkills } from "../data/resume";

const pillars = [
  {
    title: "Agentic AI & RAG",
    body: "Hybrid retrieval over vector search, BM25 and knowledge graphs, with LLM routing, grounded fact-checking and human handoff.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v3m0 12v3M3 12h3m12 0h3M5.6 5.6l2.1 2.1m8.6 8.6 2.1 2.1m0-12.8-2.1 2.1M7.7 16.3l-2.1 2.1" />
        <circle cx="12" cy="12" r="3.2" />
      </svg>
    ),
  },
  {
    title: "Computer Vision",
    body: "YOLOv8 detection, EfficientNet and ViT classification, Grad-CAM interpretability — trained on datasets I build and balance myself.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.04 12.32a1 1 0 0 1 0-.64C3.42 7.51 7.36 4.5 12 4.5s8.57 3.01 9.96 7.18a1 1 0 0 1 0 .64C20.58 16.49 16.64 19.5 12 19.5s-8.57-3.01-9.96-7.18Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    ),
  },
  {
    title: "Multilingual NLP",
    body: "Intent classification, NER and cross-lingual retrieval across Arabic, English, French and code-switched text.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.42-4.03 8-9 8a9.9 9.9 0 0 1-4.26-.95L3 20l1.4-3.72C3.51 15.04 3 13.57 3 12c0-4.42 4.03-8 9-8s9 3.58 9 8Z" />
      </svg>
    ),
  },
  {
    title: "Ship it, then measure it",
    body: "FastAPI, Docker, GitHub Actions, Hugging Face Spaces — plus evaluation sets and test suites so improvement is provable, not felt.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7Z" />
      </svg>
    ),
  },
];

const facts = [
  { label: "Degree", value: "B.Sc. Computer Science & Artificial Intelligence" },
  { label: "University", value: "Tafila Technical University · 2020 – 2025" },
  { label: "Latest program", value: "AI.SPIRE — Applied AI & ML Systems (2026)" },
  { label: "Based in", value: profile.location },
  { label: "Focus", value: "Agentic AI · Computer Vision · NLP · Analytics" },
];

export default function About() {
  return (
    <section id="about" className="relative px-6 py-24 sm:px-8 lg:px-12">
      <div className="container mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About me"
          title="I don't stop at a notebook — I ship the system"
          description="Artificial Intelligence and Data Science graduate working end to end: dataset, model, evaluation, deployment, and the numbers that prove it works."
        />

        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Narrative */}
          <div className="space-y-6">
            <Reveal>
              <p className="text-lg leading-relaxed">
                I graduated from{" "}
                <span className="font-semibold text-violet-600 dark:text-violet-300">
                  Tafila Technical University
                </span>{" "}
                in Computer Science and Artificial Intelligence, and I have spent
                that time building systems rather than only studying them.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="muted leading-relaxed">
                My graduation project was a real-time assistive system for
                visually impaired users: I built the dataset myself — annotation,
                class balancing, augmentation — trained a 16-class YOLOv8 detector
                on 250K images to 80% mAP@0.5, and generated spoken Arabic
                guidance describing object, direction and distance.
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="muted leading-relaxed">
                Since then I have shipped an EfficientNet-B3 MRI classifier at 95%
                test accuracy with Grad-CAM interpretability, a multimodal emotion
                recognition system fusing vision and speech, a multilingual
                chatbot at 92.45% intent accuracy with cross-lingual retrieval,
                and — most recently — a production agentic support system with
                hybrid retrieval, 96.7% routing accuracy and a 164-test suite.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="muted leading-relaxed">
                The thread through all of it: define the metric first, build the
                evaluation set, then earn the improvement. That is how routing
                went from 86.7% to 96.7%, escalation recall from 33% to 100%, and
                response time down by 67%.
              </p>
            </Reveal>

            <div className="grid gap-4 pt-4 sm:grid-cols-2">
              {pillars.map((pillar, i) => (
                <Reveal key={pillar.title} delay={0.1 + i * 0.07}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="glass-raised h-full p-6 transition-colors hover:border-violet-500/40"
                  >
                    <span className="inline-flex rounded-xl bg-violet-500/10 p-2.5 text-violet-600 ring-1 ring-violet-500/20 dark:text-violet-300">
                      {pillar.icon}
                    </span>
                    <h3 className="mt-4 text-base font-semibold">
                      {pillar.title}
                    </h3>
                    <p className="muted mt-2 text-sm leading-relaxed">
                      {pillar.body}
                    </p>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Side panel */}
          <div className="space-y-6">
            <Reveal delay={0.1}>
              <div className="glass-raised p-8">
                <h3 className="text-lg font-semibold">Quick facts</h3>
                <dl className="mt-6 space-y-5">
                  {facts.map((fact) => (
                    <div
                      key={fact.label}
                      className="border-b border-[rgb(var(--border-subtle))] pb-4 last:border-0 last:pb-0"
                    >
                      <dt className="text-xs font-semibold uppercase tracking-wider text-violet-600 dark:text-violet-300">
                        {fact.label}
                      </dt>
                      <dd className="mt-1.5 text-sm leading-relaxed">
                        {fact.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="glass-raised p-8">
                <h3 className="text-lg font-semibold">Languages</h3>
                <ul className="mt-4 space-y-3">
                  {languages.map((lang) => (
                    <li
                      key={lang.name}
                      className="flex items-baseline justify-between gap-4 text-sm"
                    >
                      <span className="font-medium">{lang.name}</span>
                      <span className="muted text-right text-xs">
                        {lang.level}
                      </span>
                    </li>
                  ))}
                </ul>

                <h3 className="mt-8 text-lg font-semibold">Beyond the code</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {softSkills.map((skill) => (
                    <span key={skill} className="chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
