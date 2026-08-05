import type { Metadata } from "next";
import { Inter, Sora, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Aurora from "./components/ui/Aurora";
import ScrollProgress from "./components/ui/ScrollProgress";
import { profile } from "./data/profile";

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const display = Sora({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: `${profile.name} — ${profile.role}`,
    template: `%s · ${profile.name}`,
  },
  description:
    "AI & Machine Learning Engineer specialising in computer vision, multilingual NLP, agentic RAG systems and data analytics. Live demos, measured results and full case studies.",
  keywords: [
    "Momen Hamza",
    "AI Engineer",
    "Machine Learning Engineer",
    "Computer Vision",
    "NLP",
    "RAG",
    "YOLOv8",
    "PyTorch",
    "Data Analytics",
    "Jordan",
  ],
  authors: [{ name: profile.name, url: profile.siteUrl }],
  creator: profile.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: profile.siteUrl,
    siteName: `${profile.name} — Portfolio`,
    title: `${profile.name} — ${profile.role}`,
    description:
      "Computer vision, multilingual NLP and agentic RAG systems — built end to end, deployed live, and measured.",
    // Social image comes from app/opengraph-image.tsx (generated at build time).
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description:
      "Computer vision, multilingual NLP and agentic RAG systems — built end to end, deployed live, and measured.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

/** Person schema so search engines read the profile as structured data. */
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  email: `mailto:${profile.email}`,
  telephone: profile.phone,
  url: profile.siteUrl,
  image: `${profile.siteUrl}${profile.photo}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Amman",
    addressCountry: "JO",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Tafila Technical University",
  },
  knowsAbout: [
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "Natural Language Processing",
    "Retrieval-Augmented Generation",
    "Data Analytics",
  ],
  sameAs: [
    profile.socials.github,
    profile.socials.linkedin,
    profile.socials.huggingface,
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${sans.variable} ${display.variable} ${mono.variable} font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Aurora />
          <ScrollProgress />
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-lg focus:bg-violet-600 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
          >
            Skip to content
          </a>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
