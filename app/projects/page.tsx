import type { Metadata } from "next";
import Projects from "../components/Projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "All projects by Momen Hamza — agentic AI and RAG systems, computer vision, multilingual NLP, machine learning and data analysis, with measured results and live demos.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <div className="pt-20">
      <Projects />
    </div>
  );
}
