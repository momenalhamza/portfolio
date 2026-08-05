"use client";

import { motion } from "framer-motion";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import { skillGroups } from "../data/resume";

/** Numbers taken straight from shipped projects — each one is defensible. */
const proof = [
  { value: "96.7%", label: "Agent routing accuracy", context: "Meridian Retail" },
  { value: "95%", label: "MRI test accuracy", context: "Brain Tumor Classification" },
  { value: "92.45%", label: "Intent accuracy", context: "Multilingual Chatbot" },
  { value: "80%", label: "mAP@0.5 · 16 classes", context: "Smart Detection (YOLOv8)" },
  { value: "76.86%", label: "Multimodal fusion accuracy", context: "Emotion Recognition" },
  { value: "88%", label: "Risk classification accuracy", context: "Heart Disease Prediction" },
];

const groupIcons = [
  // Languages & Databases
  <svg key="db" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="h-5 w-5">
    <ellipse cx="12" cy="6" rx="8" ry="3" />
    <path strokeLinecap="round" d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
  </svg>,
  // ML & Frameworks
  <svg key="ml" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="h-5 w-5">
    <circle cx="5" cy="6" r="2" />
    <circle cx="5" cy="18" r="2" />
    <circle cx="12" cy="12" r="2" />
    <circle cx="19" cy="7" r="2" />
    <circle cx="19" cy="17" r="2" />
    <path strokeLinecap="round" d="M7 6.8 10.3 11M7 17.2 10.3 13M13.8 11 17.2 7.8M13.8 13l3.4 3.2" />
  </svg>,
  // CV & NLP
  <svg key="cv" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="h-5 w-5">
    <rect x="3" y="4" width="18" height="14" rx="2" />
    <path strokeLinecap="round" d="M3 9h18M8 4v5M7 13h4m2 0h4" />
  </svg>,
  // Retrieval, Data & BI
  <svg key="bi" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="h-5 w-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18M7 16v-4m5 4V8m5 8v-6" />
  </svg>,
  // MLOps & Tools
  <svg key="ops" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="h-5 w-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.3 4.3a4 4 0 0 0 5.4 5.4l4 4a2 2 0 1 1-2.8 2.8l-4-4a4 4 0 0 1-5.4-5.4l-1.9-1.9a2 2 0 0 1 2.8-2.8l1.9 1.9Z" />
  </svg>,
];

const marqueeStack = [
  "Python",
  "PyTorch",
  "TensorFlow",
  "scikit-learn",
  "Transformers",
  "YOLOv8",
  "EfficientNet",
  "Wav2Vec2",
  "FAISS",
  "Weaviate",
  "Neo4j",
  "Groq",
  "FastAPI",
  "Docker",
  "Next.js",
  "GitHub Actions",
  "Streamlit",
  "Gradio",
  "SQL",
  "PostgreSQL",
  "Tableau",
  "Looker Studio",
  "spaCy",
  "OpenCV",
];

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-24 sm:px-8 lg:px-12">
      <div className="container mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Capabilities"
          title="A stack that covers the whole path to production"
          description="From SQL and statistics through deep learning architectures to retrieval, deployment and evaluation."
        />

        {/* Proof band */}
        <div className="mb-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {proof.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.06}>
              <div className="glass-raised group relative overflow-hidden p-6">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <p className="font-display text-3xl font-bold text-gradient">
                  {item.value}
                </p>
                <p className="mt-2 text-sm font-medium">{item.label}</p>
                <p className="muted mt-1 font-mono text-[11px] uppercase tracking-wider">
                  {item.context}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Capability matrix */}
        <div className="grid gap-6 lg:grid-cols-2">
          {skillGroups.map((group, i) => (
            <Reveal
              key={group.title}
              delay={i * 0.07}
              className={i === skillGroups.length - 1 ? "lg:col-span-2" : ""}
            >
              <motion.div
                whileHover={{ y: -3 }}
                className="glass-raised h-full p-7 transition-colors hover:border-violet-500/40"
              >
                <div className="flex items-start gap-4">
                  <span className="inline-flex shrink-0 rounded-xl bg-violet-500/10 p-3 text-violet-600 ring-1 ring-violet-500/20 dark:text-violet-300">
                    {groupIcons[i]}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold">{group.title}</h3>
                    <p className="muted mt-1 text-sm">{group.blurb}</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ y: -2 }}
                      className="chip transition-colors hover:border-violet-500/40 hover:text-violet-600 dark:hover:text-violet-300"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Tech marquee */}
      <div className="relative mt-20 overflow-hidden mask-fade-x">
        <div className="flex w-max animate-marquee gap-3">
          {[...marqueeStack, ...marqueeStack].map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="chip whitespace-nowrap px-4 py-2 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
