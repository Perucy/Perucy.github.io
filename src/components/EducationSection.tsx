import image_4859842958cfef21e2ba52a93712b89022b762e5 from 'figma:asset/4859842958cfef21e2ba52a93712b89022b762e5.png';
import image_4be8b67f8cbbfc7b5f0e826418dde232ae507846 from 'figma:asset/4be8b67f8cbbfc7b5f0e826418dde232ae507846.png';
import { Badge } from "./ui/badge";
import {
  GraduationCap,
  BookOpen,
  Award,
  FileText,
  ExternalLink,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function EducationSection() {
  const [selectedCategory, setSelectedCategory] = useState<
    string | null
  >(null);
  const [expandedAbstracts, setExpandedAbstracts] = useState<Set<number>>(new Set());

  const courses = [
    { name: "Artificial Intelligence", category: "AI/ML" },
    { name: "Machine Learning", category: "AI/ML" },
    { name: "Operating Systems", category: "Systems" },
    { name: "Computer Vision", category: "Systems" },
    { name: "Advanced Algorithms", category: "Theory" },
    { name: "Data Structures", category: "Theory" },
    { name: "Software Engineering", category: "Development" },
    { name: "Linear Algebra", category: "Mathematics" },
    { name: "Discrete Mathematics", category: "Mathematics" },
    { name: "Calculus I", category: "Mathematics" },
    { name: "Calculus II", category: "Mathematics" },
    { name: "Calculus III", category: "Mathematics" },
    { name: "Physics", category: "Natural Sciences"},
    { name: "Chemistry", category: "Natural Sciences"},
    { name: "Biology", category: "Natural Sciences"},
  ];

  const categories = [
    "AI/ML",
    "Systems",
    "Theory",
    "Development",
    "Mathematics",
    "Natural Sciences"
  ];

  const awards = [
    {
      name: "Dean's List",
      organization: "Tufts University",
      year: "2022-2025",
      icon: Award,
      color: "from-emerald-400 to-teal-500",
    },
  ];

  const publications = [
    {
      title: "VulnGPT: A Modular System for Assisting System Administrators with Vulnerability Information",
      authors: ["Perucy Mussiba", "Carson Powers", "Daniel Votipka", "Sam Cohen"],
      affiliation: {
        name: "Tufts Security and Privacy Lab",
        link: "https://tsp.cs.tufts.edu/"
      },
      venue: "34th USENIX SECURITY SYMPOSIUM (SOUPS 2025)",
      year: "2025",
      link: "https://www.usenix.org/conference/soups2025/presentation/mussiba-poster",
      abstract: "In modern networks, security depends on system administrators' (sysadmins) ability to efficiently patch known vulnerabilities in software. To do this without disrupting network operations, sysadmins must determine the vulnerability's impact, the likelihood of exploitation, how to patch or deploy other mitigations, and what impact patching will have on operations. Prior work found processing available information to make this decision is a major challenge for sysadmins. One potential solution is to use large-language model-based AI agents to perform the information collection and present sysadmins a vulnerability information summary. This is promising, but introduces a different potential issues inherent to AI agents (e.g., hallucinations) and questions of human-AI interaction. We perform an initial investigation of this approach's utility by manually assessing the accuracy of vulnerability information from one popular AI agent, ChatGPT, for 50 vulnerabilities. We find ChatGPT is mostly accurate, but introduces some errors. We then introduce VulnGPT, a modular system built around ChatGPT, which focuses the AI agent on websites with relevant information to avoid ChatGPT's inaccuracies, and enables users to incorporate local information. We also discuss how this system can be used to enable future research into sysadmin-AI collaboration during patching.",
    },
    // Add more publications here
  ];

  return (
    <section
      id="education"
      className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-accent/20 to-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.05),transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-4">Education</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Academic foundation and continuous learning in
            computer science
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 md:gap-6">
          {/* Main Degree Card - Large */}
          <motion.div
            className="md:col-span-6 lg:col-span-12 row-span-2"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="h-full bg-gradient-to-br from-primary/10 via-background to-accent/30 rounded-3xl p-8 border border-border/50 relative overflow-hidden group hover:shadow-2xl transition-all duration-500 backdrop-blur-sm dark:border-border/30">
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-100 dark:opacity-100"
                animate={{
                  backgroundPosition: [
                    "0% 0%",
                    "100% 100%",
                    "0% 0%",
                  ],
                }}
                transition={{ duration: 10, repeat: Infinity }}
                style={{ backgroundSize: "200% 200%" }}
              />

              {/* Glass morphism overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 dark:opacity-100 transition-opacity" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                  <Badge className="bg-green-500/20 text-green-700 dark:text-green-300 border-green-500/30">
                    2022 - 2026
                  </Badge>
                </div>

                <h3 className="mb-2 text-foreground">Bachelor of Science</h3>
                <h4 className="text-primary mb-4">
                  Computer Science
                </h4>

                <div className="flex items-center gap-2 mb-6">
                  <div className="h-10 w-10 rounded-full overflow-hidden bg-white flex items-center justify-center p-1 shadow-md">
                    <ImageWithFallback
                      src={image_4859842958cfef21e2ba52a93712b89022b762e5}
                      alt="Tufts University Logo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-foreground">
                      Tufts University
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Medford, Massachusetts
                    </p>
                  </div>
                </div>

                <p className="text-foreground leading-relaxed">
                  Strong foundation in computer science
                  fundamentals, software engineering, and
                  distributed systems. Completed rigorous
                  coursework in algorithms, operating systems,
                  and machine learning while maintaining
                  academic excellence.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Relevant Coursework Card */}
          <motion.div
            className="md:col-span-6 lg:col-span-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="h-full bg-card rounded-3xl p-6 border border-border hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <BookOpen className="h-5 w-5 text-white" />
                </div>
                <h4 className="text-foreground">Relevant Coursework</h4>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 mb-4">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                    selectedCategory === null
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-card text-foreground border-border hover:border-primary/50 hover:bg-accent/50"
                  }`}
                >
                  All
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                      selectedCategory === cat
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-card text-foreground border-border hover:border-primary/50 hover:bg-accent/50"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Course Tags */}
              <div className="flex flex-wrap gap-2">
                {courses
                  .filter(
                    (course) =>
                      !selectedCategory ||
                      course.category === selectedCategory,
                  )
                  .map((course, idx) => (
                    <motion.div
                      key={course.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <Badge
                        variant="secondary"
                        className="hover:bg-accent transition-colors cursor-pointer"
                      >
                        {course.name}
                      </Badge>
                    </motion.div>
                  ))}
              </div>
            </div>
          </motion.div>

          {/* Awards & Honors Card */}
          <motion.div
            className="md:col-span-6 lg:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="h-full bg-card rounded-3xl p-6 border border-border hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
                  <Award className="h-5 w-5 text-white" />
                </div>
                <h4 className="text-foreground">Awards & Honors</h4>
              </div>

              <div className="space-y-3">
                {awards.map((award, idx) => {
                  const Icon = award.icon;
                  return (
                    <motion.div
                      key={award.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + idx * 0.1 }}
                      whileHover={{ x: 4 }}
                      className="relative rounded-2xl p-4 bg-gradient-to-br from-accent/50 to-accent border border-border overflow-hidden group cursor-pointer"
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${award.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                      />
                      <div className="relative z-10 flex items-start gap-3">
                        <div
                          className={`h-8 w-8 rounded-lg bg-gradient-to-br ${award.color} flex items-center justify-center flex-shrink-0`}
                        >
                          <Icon className="h-4 w-4 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm mb-1 text-foreground">
                            {award.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {award.organization}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            {award.year}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Research Publications Card */}
          <motion.div
            className="md:col-span-6 lg:col-span-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="bg-card rounded-3xl p-6 border border-border hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                  <FileText className="h-5 w-5 text-white" />
                </div>
                <h4 className="text-foreground">Research Publications</h4>
              </div>

              <div className="space-y-4">
                {publications.map((pub, idx) => (
                  <motion.div
                    key={pub.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 + idx * 0.1 }}
                    className="relative rounded-2xl p-5 bg-gradient-to-br from-accent/30 to-accent/50 border border-border overflow-hidden group hover:shadow-md transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="relative z-10">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h4 className="text-foreground flex-1 leading-snug">
                          {pub.title}
                        </h4>
                        {pub.link && (
                          <a
                            href={pub.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-shrink-0 h-8 w-8 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors group/link"
                          >
                            <ExternalLink className="h-4 w-4 text-primary group-hover/link:scale-110 transition-transform" />
                          </a>
                        )}
                      </div>

                      <div className="mb-2 flex flex-wrap items-center gap-x-1 gap-y-1 text-sm text-muted-foreground">
                        {pub.authors.map((author, i) => (
                          <span key={i}>
                            <span className={author === "Perucy Mussiba" ? "text-primary" : ""}>
                              {author}
                            </span>
                            {i < pub.authors.length - 1 && <span>, </span>}
                          </span>
                        ))}
                      </div>

                      {pub.affiliation && (
                        <div className="mb-2">
                          <a
                            href={pub.affiliation.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-primary hover:underline inline-flex items-center gap-1 group/affiliation"
                          >
                            <span>{pub.affiliation.name}</span>
                            <ExternalLink className="h-3 w-3 opacity-70 group-hover/affiliation:opacity-100 transition-opacity" />
                          </a>
                        </div>
                      )}

                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <Badge className="bg-violet-500/20 text-violet-700 dark:text-violet-300 border-violet-500/30">
                          {pub.venue}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{pub.year}</span>
                      </div>

                      {pub.abstract && (
                        <div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {expandedAbstracts.has(idx) 
                              ? pub.abstract 
                              : `${pub.abstract.slice(0, 250)}${pub.abstract.length > 250 ? '...' : ''}`
                            }
                          </p>
                          {pub.abstract.length > 250 && (
                            <button
                              onClick={() => {
                                const newExpanded = new Set(expandedAbstracts);
                                if (expandedAbstracts.has(idx)) {
                                  newExpanded.delete(idx);
                                } else {
                                  newExpanded.add(idx);
                                }
                                setExpandedAbstracts(newExpanded);
                              }}
                              className="mt-2 text-primary hover:text-primary/80 text-sm inline-flex items-center gap-1 transition-colors"
                            >
                              {expandedAbstracts.has(idx) ? (
                                <>
                                  <span>Read less</span>
                                  <ChevronUp className="h-4 w-4" />
                                </>
                              ) : (
                                <>
                                  <span>Read more</span>
                                  <ChevronDown className="h-4 w-4" />
                                </>
                              )}
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
