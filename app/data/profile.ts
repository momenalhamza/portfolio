export const profile = {
  name: "Momen Hamza",
  initials: "MH",
  role: "AI & Machine Learning Engineer",
  discipline: "Computer Vision · NLP · Data Science & Analytics",
  roles: [
    "Machine Learning Engineer",
    "Computer Vision Developer",
    "NLP & LLM Engineer",
    "Data Analyst",
  ],
  tagline:
    "I build AI systems that see, listen, retrieve and decide — then I ship them to production.",
  summary:
    "Artificial Intelligence and Data Science graduate specializing in deep learning, computer vision and NLP, with growing depth in applied AI engineering and analytics. I design end-to-end ML systems — from CNN- and transformer-based models to real-time multimodal and multilingual applications — and production-style pipelines with RAG, vector databases, knowledge graphs, FastAPI and Docker.",
  location: "Amman, Jordan",
  email: "momenalhamza@gmail.com",
  phone: "+962 77 040 2583",
  phoneHref: "+962770402583",
  availability: "Open to AI / ML engineering roles",
  photo: "/Images/momen-hamza.jpeg",
  siteUrl: "https://momenalhamza-portfolio.vercel.app",
  cv: {
    file: "/CV_Momen_Hamza.pdf",
    downloadName: "Momen-Hamza-CV.pdf",
    updated: "August 2026",
  },
  socials: {
    github: "https://github.com/momenalhamza",
    linkedin: "https://www.linkedin.com/in/momen-alhamza-7b04102b5/",
    huggingface: "https://huggingface.co/momenalhamza",
    telegram: "https://t.me/DailyNeural_AI",
  },
  /** Headline numbers — every one of these is backed by a project below. */
  stats: [
    { value: "10+", label: "AI systems built end to end" },
    { value: "5", label: "Live public demos" },
    { value: "96.7%", label: "Agent routing accuracy" },
    { value: "164", label: "Automated tests written" },
  ],
} as const;

export type Profile = typeof profile;
