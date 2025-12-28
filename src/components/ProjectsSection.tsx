import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { TechLogo } from "./TechLogo";
import { motion } from "motion/react";

export function ProjectsSection() {
  const projects = [
    {
      title: "CreFin",
      description: "In the works",
      image: "https://images.unsplash.com/photo-1660810731526-0720827cbd38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BlciUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NTk5MjQyOTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Node.js", "PostgreSQL", "FastAPI", "Flutter", "TensorFlow"],
      github: "https://github.com/Perucy/crefin-frontend",
      demo: "https://example.com",
    },
    {
      title: "VulnGPT",
      description: "Developers at TSP needed faster access to vulnerability information scattered across multiple resources. I built VulnGPT to solve this—an AI-powered tool that lets teams query security data using natural language and get contextualized, actionable insights instantly.",
      image: "https://images.unsplash.com/photo-1757165792338-b4e8a88ae1c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNoJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc1OTk3MDg2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Python", "LangChain", "OpenAI API", "AstraDB", "Streamlit"],
      github: "https://github.com/Perucy/vulngpt",
      demo: "https://example.com",
    },
    {
      title: "FitPro",
      description: "AI fitness coach that listens to your body and your music. Syncs WHOOP recovery data with Spotify to curate workout-optimized playlists, delivering real-time audio cues that adapt to your heart rate and music tempo.",
      image: "https://images.unsplash.com/photo-1748280621226-91f9530fc329?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwYXBwJTIwd29ya291dHxlbnwxfHx8fDE3NjA0Nzg2Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["React Native", "FastAPI", "PostgreSQL", "Redis", "Docker", "Google Cloud"],
      github: "https://github.com/Perucy/fitpro",
      demo: "https://example.com",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work showcasing different technologies and problem-solving approaches.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-500 h-full flex flex-col backdrop-blur-sm bg-card/80 dark:bg-card/40 border-border/50 dark:border-border/30 hover:-translate-y-2">
                {/* Glass morphism overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 dark:opacity-100 transition-opacity pointer-events-none" />
                
                {/* Hover glow */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-lg opacity-0 group-hover:opacity-100 blur transition duration-500" />
                
                <div className="relative h-48 overflow-hidden bg-muted">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardHeader className="relative">
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className="dark:text-foreground/90">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="relative flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="group-hover:bg-primary/10 dark:group-hover:bg-primary/20 transition-colors flex items-center gap-1.5">
                        <TechLogo name={tag} className="w-3.5 h-3.5 object-contain" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="relative">
                  <Button size="sm" className="w-full gap-2" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}