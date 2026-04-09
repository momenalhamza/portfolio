"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative py-20 bg-white dark:bg-black">
      <div className="absolute bottom-0 right-0 w-full h-96 bg-gradient-to-t from-purple-100/20 dark:from-purple-900/20 via-transparent to-transparent" />

      <div className="container max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2"
          >
            <div className="relative group">
              <div className="relative rounded-lg overflow-hidden bg-white">
                <Image
                  src="/Images/me.jpeg"
                  alt="Momen Hamza"
                  width={600}
                  height={700}
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8">
              About Me
            </h2>

            <div className="space-y-6 text-gray-600 dark:text-gray-300">
              <p>
                Hello! I&apos;m Momen Hamza, a recent graduate in Computer Science
                and Artificial Intelligence with a strong interest in machine
                learning, deep learning, computer vision, and data analysis.
              </p>

              <p>
                I graduated from Tafila Technical University and built hands-on
                experience through academic and practical projects in predictive
                modeling, intelligent systems, and AI-powered applications.
              </p>

              <p>
                I enjoy solving real-world problems using Python, TensorFlow,
                Scikit-learn, and modern AI tools. My graduation project focused
                on developing a smart detection system for visually impaired
                users using YOLOv8, Streamlit, and Arabic voice guidance.
              </p>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-6">
                Technologies I Work With
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "Python",
                  "Machine Learning",
                  "Deep Learning",
                  "TensorFlow",
                  "Scikit-learn",
                  "Computer Vision",
                  "Data Analysis",
                  "Natural Language Processing",
                  "YOLOv8",
                  "Streamlit",
                ].map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-white dark:bg-gray-800 ring-1 ring-purple-500/20
                    text-gray-700 dark:text-gray-300 rounded-lg text-sm hover:ring-purple-500/40
                    shadow-sm hover:shadow transition-all duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-12">
              {[
                { number: "2025", label: "Graduate", color: "from-purple-600 to-indigo-600" },
                { number: "5", label: "Projects", color: "from-blue-600 to-cyan-600" },
                { number: "2", label: "Courses", color: "from-emerald-600 to-teal-600" },
                { number: "AI", label: "Focus", color: "from-orange-600 to-amber-600" },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -5 }}
                  className="p-4 rounded-lg bg-white dark:bg-gray-800 ring-1 ring-gray-200/50
                  dark:ring-gray-800/50 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}