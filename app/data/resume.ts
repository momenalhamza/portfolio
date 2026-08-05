export type TimelineEntry = {
  title: string;
  org: string;
  period: string;
  kind: "education" | "program" | "certification";
  points: string[];
  badge?: string;
};

export const timeline: TimelineEntry[] = [
  {
    title: "AI.SPIRE: Applied AI and ML Systems",
    org: "LevelUp Economy & Istidama Consulting",
    period: "2026",
    kind: "program",
    badge: "24-week intensive",
    points: [
      "Python for AI — Applied NLP & Knowledge Systems: a 24-week intensive covering applied NLP, machine learning, RAG systems and knowledge graphs.",
      "Built and deployed end-to-end AI systems integrating NLP pipelines, vector search and APIs.",
      "Developed professional skills in technical communication, teamwork and AI system documentation.",
    ],
  },
  {
    title: "Advanced Data Analytics — Tech for Jobs Program",
    org: "Correlation One (USAID)",
    period: "Mar 2025",
    kind: "certification",
    badge: "Graduated with Honors · 250 hours",
    points: [
      "Comprehensive applied data analytics program: Excel, analytical SQL, Python (NumPy / pandas), statistics and EDA, and BI with Tableau and Looker Studio.",
      "Completed an end-to-end capstone project.",
    ],
  },
  {
    title: "B.Sc. in Computer Science and Artificial Intelligence",
    org: "Tafila Technical University",
    period: "Sep 2020 – Jan 2025",
    kind: "education",
    points: [
      "Coursework: Machine Learning, Deep Learning, Natural Language Processing, Computer Vision, Algorithm Design, Software Engineering, and Ethical AI (bias and privacy).",
      "Graduation project: a real-time YOLOv8 detection system with Arabic voice guidance for visually impaired users.",
    ],
  },
  {
    title: "Python AI (Machine Learning)",
    org: "The Hope International Company",
    period: "Oct 2024",
    kind: "certification",
    points: [
      "Applied machine learning training with Python.",
    ],
  },
  {
    title: "ASP.NET (MVC)",
    org: "The Hope International Company",
    period: "Dec 2023",
    kind: "certification",
    points: ["Web application development with the ASP.NET MVC framework."],
  },
];

export type SkillGroup = {
  title: string;
  blurb: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages & Databases",
    blurb: "Where the data lives and how I get to it.",
    skills: ["Python", "SQL", "PostgreSQL", "SQLite"],
  },
  {
    title: "ML & Frameworks",
    blurb: "Classical models through to deep architectures.",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Neural Networks",
      "Regression",
      "Decision Trees",
      "Random Forests",
      "Class-Imbalance Handling",
      "TensorFlow",
      "PyTorch",
      "scikit-learn",
      "CNNs",
      "EfficientNet",
      "Vision Transformers (ViT)",
    ],
  },
  {
    title: "Computer Vision & NLP",
    blurb: "Systems that see and systems that read.",
    skills: [
      "YOLOv8",
      "Object Detection",
      "Image Classification",
      "Grad-CAM",
      "Data Augmentation",
      "Transformers (BERT / RoBERTa / GPT / Qwen)",
      "Embeddings (word2vec / BERT / SBERT)",
      "spaCy",
      "Hugging Face",
      "NER",
      "Multilingual & Code-Switching NLP",
      "Wav2Vec2",
    ],
  },
  {
    title: "Retrieval, Data & BI",
    blurb: "Grounding models in real knowledge, and reporting on it.",
    skills: [
      "RAG Pipelines",
      "Vector Databases (Weaviate, FAISS)",
      "Knowledge Graphs (Neo4j)",
      "Triple Stores (Fuseki)",
      "SPARQL",
      "Statistics",
      "Hypothesis Testing",
      "EDA",
      "Predictive Modeling",
      "Advanced Excel",
      "Tableau",
      "Looker Studio",
      "KPI Design",
      "Matplotlib",
      "Seaborn",
      "Plotly",
    ],
  },
  {
    title: "MLOps & Tools",
    blurb: "Getting models out of the notebook and into production.",
    skills: [
      "FastAPI",
      "Docker",
      "Docker Compose",
      "Next.js",
      "GitHub Actions",
      "Hugging Face Spaces",
      "Streamlit",
      "Gradio",
      "Git",
      "JupyterLab",
      "Unit Testing",
      "Agentic AI-assisted IDEs",
    ],
  },
];

export const softSkills = [
  "Problem Solving",
  "Critical Thinking",
  "Adaptability",
  "Creativity",
  "Communication & Presentation",
  "Leadership",
];

export const languages = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Professional working proficiency" },
];

export const resumeSummary =
  "Artificial Intelligence and Data Science graduate specializing in deep learning, computer vision, and NLP, with growing depth in applied AI engineering and data analytics. Hands-on experience designing and deploying end-to-end ML systems — from CNN- and transformer-based models to real-time, multimodal, and multilingual applications — and building production-style pipelines (RAG, vector databases, knowledge graphs, FastAPI + Docker). Comfortable across the full data workflow — from SQL analytics, statistics, EDA, and BI dashboards through to model training and live deployment. Passionate about building practical AI that solves real-world problems.";
