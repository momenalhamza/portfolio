export type ProjectCategory =
  | "Agentic AI & RAG"
  | "Computer Vision"
  | "NLP & LLMs"
  | "Machine Learning"
  | "Data Analysis";

export type Metric = { value: string; label: string };

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  short: string;
  summary: string;
  category: ProjectCategory;
  year: string;
  featured: boolean;
  /** Real screenshot when one exists — otherwise a generated cover is used. */
  image?: string;
  /** Tailwind gradient stops for the generated cover. */
  accent: string;
  tags: string[];
  metrics: Metric[];
  problem: string;
  approach: string[];
  results: string[];
  stack: string[];
  demoUrl?: string;
  demoLabel?: string;
  githubUrl?: string;
  note?: string;
};

export const projects: Project[] = [
  {
    slug: "meridian-retail-agentic-support",
    title: "Meridian Retail",
    subtitle: "Agentic Customer Support System",
    short:
      "A production-grade AI agent with hybrid retrieval — vector search, BM25 and a knowledge graph — not a scripted chatbot.",
    summary:
      "A production-grade customer support agent built on hybrid retrieval: dense vector search in Weaviate, BM25 keyword search, and a Neo4j knowledge graph, with Groq-hosted LLMs handling intent classification, generation and grounded fact-checking. Deployed live across five cloud services with a 164-test automated suite behind it.",
    category: "Agentic AI & RAG",
    year: "2026",
    featured: true,
    accent: "from-violet-600 via-fuchsia-600 to-indigo-600",
    tags: [
      "Python",
      "Weaviate",
      "Neo4j",
      "BM25",
      "Groq LLMs",
      "FastAPI",
      "Docker",
      "Next.js",
    ],
    metrics: [
      { value: "96.7%", label: "Routing accuracy" },
      { value: "95.9%", label: "Groundedness" },
      { value: "−67%", label: "Response time" },
      { value: "164", label: "Automated tests" },
    ],
    problem:
      "Scripted support bots fail the moment a customer asks something slightly off-script, and naive RAG confidently invents answers. The system needed to route correctly, stay grounded in real documents, and know when to hand a conversation to a human.",
    approach: [
      "Built hybrid retrieval combining dense vector search (Weaviate), BM25 keyword search, and a Neo4j knowledge graph so both semantic and exact-match queries land.",
      "Used Groq-hosted LLMs for intent classification, answer generation and a separate grounded fact-checking pass.",
      "Tuned routing thresholds iteratively against a hand-labelled held-out set, lifting routing accuracy from an 86.7% baseline to 96.7%.",
      "Diagnosed and fixed a critical escalation-detection gap, raising escalation recall from 33% to 100% on adversarial cases with zero false-positive regressions.",
      "Profiled the pipeline and removed redundant embedding computation in the groundedness check, cutting mean response time from 3.32s to 1.08s.",
      "Wrote a 164-test unit and integration suite covering routing logic, guardrails, retrieval and escalation flows.",
      "Migrated from a local Docker environment to production across Weaviate Cloud, Neo4j AuraDB, Upstash Redis, Render and Vercel.",
    ],
    results: [
      "96.7% routing accuracy and 95.9% groundedness on a 60-example hand-labelled held-out set.",
      "Escalation recall raised from 33% to 100% on adversarial test cases, no false-positive regressions.",
      "67% faster mean response time (3.32s → 1.08s) after profiling.",
      "Extended post-launch with Arabic support via native query translation for cross-lingual retrieval, voice input, file attachments, persistent chat history, and a two-way human-handoff workflow through an internal admin dashboard.",
    ],
    stack: [
      "Python",
      "Weaviate",
      "Neo4j",
      "BM25",
      "Groq LLMs",
      "FastAPI",
      "Docker",
      "Redis (Upstash)",
      "Next.js",
      "Render",
      "Vercel",
    ],
    note: "Deployed production system — access on request.",
  },
  {
    slug: "smart-detection-visually-impaired",
    title: "Smart Detection System for the Visually Impaired",
    subtitle: "Graduation Project",
    short:
      "Real-time YOLOv8 navigation aid that speaks Arabic guidance: what is ahead, in which direction, how far.",
    summary:
      "A real-time assistive navigation system that detects traffic signs, obstacles, pedestrians and stairs from live video, then generates Arabic voice guidance describing object type, direction and distance so a visually impaired user can move independently.",
    category: "Computer Vision",
    year: "2025",
    featured: true,
    accent: "from-amber-500 via-orange-600 to-rose-600",
    tags: ["Python", "YOLOv8", "Deep Learning", "gTTS", "Streamlit"],
    metrics: [
      { value: "80%", label: "mAP@0.5" },
      { value: "70%", label: "F1 score" },
      { value: "16", label: "Detection classes" },
      { value: "250K", label: "Training images" },
    ],
    problem:
      "Navigation aids for visually impaired users are built mostly for English speakers and stop at generic obstacle warnings. The goal was Arabic-first guidance that names the object, its direction and its distance, in real time.",
    approach: [
      "Built the training dataset end to end: annotation, class balancing and augmentation.",
      "Trained a 16-class YOLOv8 detector on 250K images for live video processing.",
      "Derived direction and distance cues from detection geometry to make the guidance actionable.",
      "Generated Arabic voice guidance with gTTS so the user never has to look at a screen.",
      "Delivered a Streamlit interface presenting live video with synchronised visual and audio feedback.",
    ],
    results: [
      "80% mAP@0.5 and 70% F1 across 16 detection classes.",
      "Real-time detection with synchronised Arabic audio guidance on object, direction and distance.",
      "Complete custom dataset built, balanced and augmented from scratch.",
    ],
    stack: [
      "Python",
      "YOLOv8",
      "Ultralytics",
      "OpenCV",
      "gTTS",
      "Streamlit",
    ],
  },
  {
    slug: "brain-tumor-classification",
    title: "Brain Tumor Classification",
    subtitle: "EfficientNet-B3 with Grad-CAM interpretability",
    short:
      "MRI classifier across four diagnoses at 95% test accuracy, with Grad-CAM heatmaps and a full-stack live demo.",
    summary:
      "A fine-tuned EfficientNet-B3 that classifies brain MRI scans into glioma, meningioma, pituitary tumour or no tumour, with Grad-CAM heatmaps showing which regions drove each prediction — served as a containerised FastAPI + React application.",
    category: "Computer Vision",
    year: "2025",
    featured: true,
    image: "/Images/project-brain-tumor.png",
    accent: "from-cyan-500 via-sky-600 to-indigo-600",
    tags: [
      "Python",
      "PyTorch",
      "EfficientNet-B3",
      "Grad-CAM",
      "FastAPI",
      "React",
      "Docker",
    ],
    metrics: [
      { value: "95%", label: "Test accuracy" },
      { value: "5,600", label: "MRI scans" },
      { value: "4", label: "Diagnostic classes" },
      { value: "Live", label: "Full-stack demo" },
    ],
    problem:
      "Reading MRI scans is slow specialist work, and a black-box classifier is unusable in a clinical setting — a radiologist needs to see why the model decided what it decided.",
    approach: [
      "Fine-tuned EfficientNet-B3 on 5,600 labelled MRI scans across four classes.",
      "Applied preprocessing and augmentation to reduce overfitting on scanner-specific artefacts.",
      "Added Grad-CAM heatmaps to visualise the regions driving each prediction for clinical review.",
      "Built a FastAPI inference backend with a React frontend and containerised the stack with Docker.",
      "Deployed as a public live demo accepting MRI uploads for real-time inference.",
    ],
    results: [
      "95% test accuracy across glioma, meningioma, pituitary and no-tumour scans.",
      "Interpretable predictions through Grad-CAM overlays rather than a bare label.",
      "Publicly accessible full-stack demo running real-time inference on uploaded scans.",
    ],
    stack: [
      "Python",
      "PyTorch",
      "EfficientNet-B3",
      "Grad-CAM",
      "FastAPI",
      "React",
      "Docker",
    ],
    demoUrl: "https://momenalhamza-brain-tumor-classification.hf.space/",
    demoLabel: "Live demo",
    githubUrl: "https://github.com/momenalhamza/Brain-Tumor-Classification",
  },
  {
    slug: "voice-facial-emotion-recognition",
    title: "Voice & Facial Emotion Recognition",
    subtitle: "Multimodal late-fusion system",
    short:
      "Fuses facial expression and voice emotion into one prediction, with switchable custom-trained and foundation-model paths.",
    summary:
      "A multimodal emotion recognition system that fuses facial-expression analysis with voice-emotion analysis to classify five emotions, offering both custom-trained models (ResNet-18 + BiLSTM) and pretrained foundation models (ViT + Wav2Vec2) as switchable inference paths, with live webcam and microphone streaming.",
    category: "Computer Vision",
    year: "2025",
    featured: true,
    image: "/Images/project-emotion.png",
    accent: "from-rose-500 via-fuchsia-600 to-violet-600",
    tags: [
      "Python",
      "PyTorch",
      "ResNet-18",
      "BiLSTM",
      "ViT",
      "Wav2Vec2",
      "Streamlit",
    ],
    metrics: [
      { value: "76.86%", label: "Late-fusion accuracy" },
      { value: "31,338", label: "Face images" },
      { value: "9,227", label: "Audio samples" },
      { value: "5", label: "Emotion classes" },
    ],
    problem:
      "A single modality is fragile: a face can be occluded or neutral while the voice is clearly distressed, and vice versa. The system had to keep working when one channel carries little signal.",
    approach: [
      "Trained a custom vision branch (ResNet-18) on 31,338 face images from FER2013.",
      "Trained a custom audio branch (BiLSTM) on 9,227 samples from RAVDESS, CREMA-D and TESS.",
      "Added a foundation-model path with Vision Transformer and Wav2Vec2 as a switchable alternative.",
      "Engineered a rich acoustic feature set: MFCC, log-mel, zero-crossing rate and prosodic features (F0, jitter, shimmer, HNR).",
      "Combined the branches with late fusion so face and voice predictions become one decision.",
      "Shipped a live Streamlit demo with real-time webcam and microphone streaming.",
    ],
    results: [
      "76.86% accuracy with late fusion of the custom-trained models across five emotions.",
      "Two switchable inference paths: custom-trained and pretrained foundation models.",
      "Live public demo running real-time inference from webcam and microphone.",
    ],
    stack: [
      "Python",
      "PyTorch",
      "ResNet-18",
      "BiLSTM",
      "Vision Transformer",
      "Wav2Vec2",
      "Librosa",
      "Streamlit",
    ],
    demoUrl:
      "https://huggingface.co/spaces/momenalhamza/emotion-recognition-multimodal",
    demoLabel: "Live demo",
    githubUrl:
      "https://github.com/momenalhamza/Voice-and-facial-emotion-detection-system",
  },
  {
    slug: "multilingual-intent-ner-chatbot",
    title: "Multilingual Intent & NER Chatbot",
    subtitle: "Arabic · English · French · code-switching",
    short:
      "Cross-lingual customer-service assistant: ask in Arabic, retrieve from an English knowledge base, stream the reply.",
    summary:
      "A multilingual customer-service chatbot with automatic language detection, intent classification, named entity recognition, FAISS retrieval and LLM-generated replies — including cross-lingual retrieval where an Arabic query searches an English knowledge base.",
    category: "NLP & LLMs",
    year: "2025",
    featured: true,
    image: "/Images/project-chatbot.png",
    accent: "from-emerald-500 via-teal-600 to-cyan-600",
    tags: ["Python", "DistilBERT", "FAISS", "Qwen2.5", "Gradio"],
    metrics: [
      { value: "92.45%", label: "Intent accuracy" },
      { value: "99.62%", label: "Language detection" },
      { value: "0.8455", label: "NER F1" },
      { value: "1.78s", label: "Median latency" },
    ],
    problem:
      "Users in the region code-switch mid-sentence, and most pipelines assume one language per message. On top of that, the knowledge base is usually only available in English.",
    approach: [
      "Automatic language detection as the first pipeline stage, covering Arabic, English, French and code-switched input.",
      "DistilBERT-based intent classification over the supported intent set.",
      "Named entity recognition to make replies specific rather than generic.",
      "FAISS vector retrieval with cross-lingual support: query in Arabic, retrieve from an English knowledge base.",
      "Qwen2.5 for reply generation, with token-by-token streaming in a Gradio interface.",
    ],
    results: [
      "92.45% intent-classification accuracy and 99.62% language-detection accuracy on a held-out test set.",
      "0.8455 NER F1 with a 1.78s median response latency.",
      "Live public demo with streaming replies and true cross-lingual retrieval.",
    ],
    stack: [
      "Python",
      "DistilBERT",
      "FAISS",
      "Qwen2.5",
      "Transformers",
      "Gradio",
      "Hugging Face Spaces",
    ],
    demoUrl: "https://huggingface.co/spaces/momenalhamza/multilingual-chatbot",
    demoLabel: "Live demo",
    githubUrl:
      "https://github.com/momenalhamza/multilingual-intent-ner-chatbot",
  },
  {
    slug: "neural-digest-ai-content-bot",
    title: "Neural Digest",
    subtitle: "Automated AI content bot",
    short:
      "Publishes 8 daily Arabic AI posts from arXiv and RSS — running entirely on GitHub Actions with zero servers.",
    summary:
      "A fully automated Telegram bot that publishes eight educational AI posts a day — arXiv papers, news and technical concepts — explained in Arabic by Groq-hosted Llama 3.3, with generated image cards. The whole pipeline runs on GitHub Actions with no server infrastructure at all.",
    category: "NLP & LLMs",
    year: "2026",
    featured: true,
    accent: "from-indigo-500 via-blue-600 to-sky-600",
    tags: [
      "Python",
      "Groq",
      "Llama 3.3 70B",
      "GitHub Actions",
      "Telegram API",
      "Pillow",
    ],
    metrics: [
      { value: "8/day", label: "Automated posts" },
      { value: "0", label: "Servers required" },
      { value: "24/7", label: "Unattended runtime" },
      { value: "Live", label: "Public channel" },
    ],
    problem:
      "Keeping an Arabic-speaking audience current with AI research means reading arXiv daily and rewriting it clearly — a task nobody sustains manually for long.",
    approach: [
      "Source fetching from arXiv and RSS feeds for papers, news and concept material.",
      "Groq-powered Llama 3.3 70B summarisation and Arabic explanation of each item.",
      "JSON-based deduplication so the same paper is never posted twice.",
      "Pillow-generated image cards so every post is visual, not a wall of text.",
      "Automatic fallback modes when no fresh content is available that day.",
      "Scheduled entirely through GitHub Actions — no server, no hosting bill.",
    ],
    results: [
      "Eight educational AI posts published daily, unattended.",
      "Zero infrastructure: the whole pipeline lives in GitHub Actions.",
      "Live public Telegram channel with graceful degradation when sources are quiet.",
    ],
    stack: [
      "Python",
      "Groq API",
      "Llama 3.3 70B",
      "GitHub Actions",
      "Telegram Bot API",
      "arXiv / RSS",
      "Pillow",
    ],
    demoUrl: "https://t.me/DailyNeural_AI",
    demoLabel: "Live channel",
  },
  {
    slug: "laptop-advisor",
    title: "Laptop Advisor",
    subtitle: "Recommendation assistant",
    short:
      "Matches users to laptops from a 150-model catalogue by budget, use case and target specs — live on Hugging Face.",
    summary:
      "An AI recommendation assistant for the Jordanian laptop market that matches a user's budget, use case and target specifications against a 150-laptop catalogue, deployed as a public live demo.",
    category: "Machine Learning",
    year: "2026",
    featured: false,
    accent: "from-slate-500 via-zinc-600 to-neutral-700",
    tags: ["Python", "Gradio", "Hugging Face Spaces", "Recommendation"],
    metrics: [
      { value: "150", label: "Laptops in catalogue" },
      { value: "3", label: "Matching dimensions" },
      { value: "Live", label: "Public demo" },
    ],
    problem:
      "Buyers in a local market cannot map spec sheets to their actual needs, and generic global recommenders ignore what is really available and at what price.",
    approach: [
      "Curated a 150-laptop catalogue reflecting the Jordanian market.",
      "Modelled matching across budget, intended use case and target specifications.",
      "Built a Gradio interface that returns ranked, explained recommendations on demand.",
      "Deployed publicly on Hugging Face Spaces for real-time access.",
    ],
    results: [
      "Instant, explained recommendations from a real local catalogue.",
      "Publicly accessible live demo with no setup required.",
    ],
    stack: ["Python", "pandas", "Gradio", "Hugging Face Spaces"],
    demoUrl: "https://momenalhamza-laptop-advisor.hf.space/",
    demoLabel: "Live demo",
  },
  {
    slug: "heart-disease-prediction",
    title: "Heart Disease Prediction",
    subtitle: "Clinical risk classification at scale",
    short:
      "Random Forest and SVM classifiers on a 70,000-patient dataset, reaching 88% accuracy.",
    summary:
      "A supervised classification study predicting heart-disease risk from clinical indicators across a 70,000-patient dataset, comparing Random Forest and SVM with full data cleaning, feature analysis and evaluation.",
    category: "Machine Learning",
    year: "2024",
    featured: false,
    accent: "from-red-500 via-rose-600 to-pink-600",
    tags: ["Python", "scikit-learn", "Random Forest", "SVM"],
    metrics: [
      { value: "88%", label: "Accuracy" },
      { value: "70,000", label: "Patient records" },
      { value: "2", label: "Model families compared" },
    ],
    problem:
      "Early risk signals hide in routine clinical data. A screening model can prioritise the patients who need a closer look first.",
    approach: [
      "Cleaned and explored a 70,000-patient clinical dataset, handling missing values and outliers.",
      "Analysed feature importance to understand which clinical indicators carry the signal.",
      "Trained and compared Random Forest and SVM classifiers on the same split.",
      "Evaluated with metrics appropriate to a screening task rather than raw accuracy alone.",
    ],
    results: [
      "88% accuracy predicting heart-disease risk from clinical indicators.",
      "Documented, reproducible workflow from cleaning through evaluation.",
    ],
    stack: [
      "Python",
      "scikit-learn",
      "pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
    ],
  },
  {
    slug: "telecom-churn-prediction",
    title: "Telecom Customer Churn Prediction",
    subtitle: "F1-focused, nested cross-validation",
    short:
      "Ensemble churn pipeline with nested CV built for reliable business estimates, not leaderboard scores.",
    summary:
      "An F1-focused churn-prediction pipeline on a ~4,500-customer telecom dataset, using Random Forest hyperparameter tuning, nested cross-validation and ensemble methods to produce estimates that generalise well enough to act on.",
    category: "Machine Learning",
    year: "2024",
    featured: false,
    accent: "from-purple-500 via-violet-600 to-indigo-600",
    tags: [
      "Python",
      "scikit-learn",
      "Random Forest",
      "Ensembles",
      "Nested CV",
    ],
    metrics: [
      { value: "~4,500", label: "Customer records" },
      { value: "F1", label: "Optimisation target" },
      { value: "Nested CV", label: "Validation strategy" },
    ],
    problem:
      "Churn models are usually tuned on accuracy, which flatters the majority class and misleads the business. The retention team needs to catch churners, and needs the estimate to hold up out of sample.",
    approach: [
      "Framed the objective around F1 to balance catching churners against false alarms.",
      "Tuned Random Forest hyperparameters systematically rather than by hand.",
      "Used nested cross-validation so the reported score is not contaminated by model selection.",
      "Combined models with ensemble methods for a more stable final estimate.",
    ],
    results: [
      "Reliable, generalisable churn estimates suitable for business decision-making.",
      "Validation design that reports honest performance instead of an optimistic one.",
    ],
    stack: ["Python", "scikit-learn", "pandas", "NumPy", "Matplotlib"],
  },
  {
    slug: "customer-behaviour-analysis",
    title: "Customer Behaviour Analysis",
    subtitle: "Purchase-intent classification",
    short:
      "Predicting purchase decisions from age, income and order history, with feature-level insight.",
    summary:
      "A classification study segmenting customers by age, income and order history to predict whether they will buy, and interpreting which features actually drive the decision.",
    category: "Data Analysis",
    year: "2024",
    featured: false,
    accent: "from-teal-500 via-emerald-600 to-green-600",
    tags: ["Python", "scikit-learn", "Classification", "Analytics"],
    metrics: [
      { value: "3", label: "Core feature groups" },
      { value: "Binary", label: "Purchase outcome" },
    ],
    problem:
      "Budget spent on customers who were never going to buy is wasted. The question was whether basic profile and history data separates them.",
    approach: [
      "Explored how demographics and order history relate to the purchase outcome.",
      "Engineered features from income bands, age groups and past order counts.",
      "Trained classification models to predict the purchase decision.",
      "Interpreted feature importance to explain what separates buyers from non-buyers.",
    ],
    results: [
      "Purchase-likelihood classifier built on interpretable customer features.",
      "Clear feature-level explanation of buying behaviour.",
    ],
    stack: ["Python", "scikit-learn", "pandas", "Seaborn"],
  },
  {
    slug: "laptop-price-analysis",
    title: "Laptop Specs & Price Analysis",
    subtitle: "Exploratory data analysis",
    short:
      "Quantifying which specifications actually carry the price premium, visualised for buyers.",
    summary:
      "An exploratory analysis of how CPU, RAM, storage, screen and brand drive laptop pricing, turned into visualisations that make the trade-offs readable at a glance.",
    category: "Data Analysis",
    year: "2024",
    featured: false,
    accent: "from-blue-500 via-indigo-600 to-violet-600",
    tags: ["Python", "pandas", "EDA", "Visualisation"],
    metrics: [
      { value: "EDA", label: "Method" },
      { value: "5+", label: "Price drivers analysed" },
    ],
    problem:
      "A spec sheet does not tell a buyer which upgrade is worth paying for. The analysis set out to quantify what each specification actually costs.",
    approach: [
      "Cleaned and normalised a messy specifications dataset.",
      "Analysed price distribution across brands, CPU tiers, RAM and storage.",
      "Built visualisations that expose each price driver clearly.",
      "Summarised findings as practical buying guidance.",
    ],
    results: [
      "Quantified which specifications carry the largest price premium.",
      "Visual summary usable directly as buying advice.",
    ],
    stack: ["Python", "pandas", "NumPy", "Matplotlib", "Seaborn"],
  },
];

export const projectCategories = [
  "All",
  "Agentic AI & RAG",
  "Computer Vision",
  "NLP & LLMs",
  "Machine Learning",
  "Data Analysis",
] as const;

export const featuredProjects = projects.filter((p) => p.featured);

export const getProject = (slug: string) =>
  projects.find((project) => project.slug === slug);
