import image_d13af367988802e60c4e7ff4e5b75b2b77e0d004 from 'figma:asset/d13af367988802e60c4e7ff4e5b75b2b77e0d004.png';
import image_99c0591ec614d4f4d4d48e6725f879036830cc49 from 'figma:asset/99c0591ec614d4f4d4d48e6725f879036830cc49.png';
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Badge } from "./ui/badge";
import { MapPin, Calendar } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { TechLogo } from "./TechLogo";

interface Experience {
  company: string;
  logo: string | typeof image_99c0591ec614d4f4d4d48e6725f879036830cc49;
  logoColor: string;
  position: string;
  location: string;
  period: string;
  responsibilities: string[];
  technologies: string[];
}

export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"]
  });

  // Calculate circle position based on scroll progress
  const circleY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const experiences: Experience[] = [
    {
      company: "Qualcomm",
      logo: image_99c0591ec614d4f4d4d48e6725f879036830cc49,
      logoColor: "from-blue-600 to-blue-400",
      position: "Software Engineering Intern",
      location: "San Diego, CA",
      period: "May 2025 - August 2025",
      responsibilities: [
        "Engineered MCP server in Python enabling natural language database queries, reducing lookup time by 60% for 50+ internal users",
        "Deployed on AWS EKS using Docker with OAuth via Kong Gateway, handling 100+ requests per minute under 200ms latency",
        "Implemented comprehensive LLM evals and CI/CD pipeline (GitHub Actions) achieving 95% accuracy across 1000+ daily queries",
        "Built monitoring and observability infrastructure with automated alerts achieving 99.9% uptime and sub-5-minute incident detection",
      ],
      technologies: ["Python", "MCP", "Docker", "Kubernetes", "Git"]
    },
    {
      company: "Tufts Security and Privacy Lab",
      logo: image_99c0591ec614d4f4d4d48e6725f879036830cc49,
      logoColor: "from-blue-600 to-blue-400",
      position: "Undergraduate Researcher",
      location: "Medford, MA",
      period: "June 2023 - May 2025",
      responsibilities: [
        "Developed VulnGPT AI vulnerability assessment tool with Python and LangChain, reducing research time by 85% for 20+ researchers",
        "Built intelligent web extraction pipeline with AstraDB integration processing 100+ CVE vulnerabilities daily, achieving 92% accuracy",
        "Automated vulnerability data processing with Python scripts, improving team efficiency by 70% across 500+ security reports",
        "Authored research paper presented at SOUPS 2025 on human-AI collaboration, demonstrating 3x faster vulnerability assessment",
      ],
      technologies: ["Python", "LangChain", "AstraDB", "OpenAI", "GitHub Actions", "FastAPI"]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActiveIndex(index);
          }
        });
      },
      { threshold: 0.5, rootMargin: "-20% 0px -20% 0px" }
    );

    const elements = document.querySelectorAll(".experience-item");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-accent/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.05),transparent_50%)] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-4">Work Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building innovative solutions at leading technology companies
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />
          
          {/* Animated Progress Line */}
          <motion.div 
            className="absolute left-8 md:left-1/2 top-0 w-0.5 bg-gradient-to-b from-primary via-primary to-transparent -translate-x-1/2"
            style={{
              height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
            }}
          />

          {/* Single Moving Circle (Seek Head) */}
          <motion.div
            ref={timelineRef}
            className="absolute left-8 md:left-1/2 -translate-x-1/2 pointer-events-none z-20"
            style={{
              top: circleY,
            }}
          >
            <motion.div
              className="relative"
              animate={{
                scale: activeIndex !== null ? [1, 1.1, 1] : 1,
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {/* Outer pulsing ring */}
              <motion.div
                className="absolute inset-0 rounded-full bg-primary/30 blur-sm"
                animate={{
                  scale: [1, 1.8, 1],
                  opacity: [0.6, 0, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              {/* Middle ring */}
              <div className="absolute -inset-2 rounded-full bg-primary/20" />
              {/* Inner circle */}
              <div className="w-5 h-5 rounded-full bg-primary border-4 border-background shadow-lg relative z-10" />
            </motion.div>
          </motion.div>

          {/* Experience Items */}
          <div className="space-y-16 md:space-y-24">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                data-index={index}
                className="experience-item relative"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="grid md:grid-cols-2 gap-8 items-start">
                  {/* Left Side - Company Info */}
                  <motion.div 
                    className={`${index % 2 === 0 ? 'md:col-start-1 md:text-right md:pr-12' : 'md:col-start-2 md:text-left md:pl-12'}`}
                    initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <div className={`${index % 2 === 0 ? 'md:inline-block' : 'md:inline-block'}`}>
                      {/* Company Logo */}
                      <motion.div
                        className={`w-24 h-24 rounded-2xl bg-white dark:bg-white flex items-center justify-center mb-4 shadow-lg p-4 ${index % 2 === 0 ? 'md:ml-auto' : ''}`}
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <ImageWithFallback 
                          src={exp.company === "Qualcomm" ? image_d13af367988802e60c4e7ff4e5b75b2b77e0d004 : exp.company === "Tufts Security and Privacy Lab" ? image_99c0591ec614d4f4d4d48e6725f879036830cc49 : exp.logo} 
                          alt={`${exp.company} logo`}
                          className="w-full h-full object-contain"
                        />
                      </motion.div>
                      
                      <h3 className="mb-1">{exp.company}</h3>
                      <h4 className="text-foreground mb-3">{exp.position}</h4>
                      
                      <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                        <div className={`flex items-center gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                        <div className={`flex items-center gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Center Timeline Node - REMOVED */}

                  {/* Right Side - Responsibilities */}
                  <motion.div 
                    className={`${index % 2 === 0 ? 'md:col-start-2 md:pl-12' : 'md:col-start-1 md:row-start-1 md:pr-12'}`}
                    initial={{ x: index % 2 === 0 ? 50 : -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <div className={`bg-card border border-border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${
                      activeIndex === index ? 'ring-2 ring-primary/20 border-primary/50' : ''
                    }`}>
                      <h4 className="mb-4 text-primary">Key Responsibilities</h4>
                      <ul className="space-y-3 mb-6">
                        {exp.responsibilities.map((resp, idx) => (
                          <motion.li
                            key={idx}
                            className="flex gap-3 text-sm text-muted-foreground"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + idx * 0.1 }}
                          >
                            <span className="text-primary mt-1.5 flex-shrink-0">●</span>
                            <span>{resp}</span>
                          </motion.li>
                        ))}
                      </ul>
                      
                      <div className="pt-4 border-t border-border">
                        <p className="text-xs text-muted-foreground mb-3">Technologies Used</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, idx) => (
                            <motion.div
                              key={tech}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.5 + idx * 0.05 }}
                            >
                              <Badge variant="secondary" className="text-xs flex items-center gap-1.5">
                                <TechLogo name={tech} className="w-3 h-3" />
                                {tech}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}