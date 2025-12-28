import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Code2, Database, Layout, Server, Smartphone, Zap } from "lucide-react";
import { TechLogo } from "./TechLogo";
import { motion } from "motion/react";

export function SkillsSection() {
  const skills = [
    {
      icon: Code2,
      title: "Frontend Development",
      description: "Building responsive and performant user interfaces",
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Creating robust and scalable server-side applications",
      technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
    },
    {
      icon: Database,
      title: "Database Design",
      description: "Designing efficient and optimized database schemas",
      technologies: ["SQL", "NoSQL", "Redis", "Prisma"],
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Cross-platform mobile app development",
      technologies: ["React Native", "Flutter", "iOS", "Android"],
    },
    {
      icon: Zap,
      title: "DevOps & Cloud",
      description: "Deploying and managing cloud infrastructure",
      technologies: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    },
    {
      icon: Layout,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user experiences",
      technologies: ["Figma", "Design Systems", "Accessibility", "Animation"],
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/20">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive skill set across the full stack, enabling me to build complete solutions from concept to deployment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 backdrop-blur-sm bg-card/80 dark:bg-card/40 border-border/50 dark:border-border/30 dark:shadow-lg dark:shadow-primary/5">
                {/* Glass morphism overlay for dark mode */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 dark:opacity-100 transition-opacity" />
                
                {/* Hover glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg opacity-0 group-hover:opacity-100 blur transition duration-500" />
                
                <div className="relative">
                  <CardHeader>
                    <motion.div 
                      className="h-12 w-12 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 5 }}
                    >
                      <skill.icon className="h-6 w-6 text-primary" />
                    </motion.div>
                    <CardTitle>{skill.title}</CardTitle>
                    <CardDescription>{skill.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skill.technologies.map((tech) => (
                        <motion.span
                          key={tech}
                          className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full group-hover:bg-primary/10 dark:group-hover:bg-primary/20 transition-colors flex items-center gap-1.5"
                          whileHover={{ scale: 1.05 }}
                        >
                          <TechLogo name={tech} className="w-4 h-4" />
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}