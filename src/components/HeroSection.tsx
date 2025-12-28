import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ArrowRight, Github, Linkedin, Sparkles, Code2, Terminal } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import headshotImage from 'figma:asset/28c3c3bee1427aece60221fcc5772c721259f245.png';

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentText, setCurrentText] = useState("");
  const fullText = "const developer = new SoftwareEngineer();";
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setCurrentText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 80);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Floating particles data
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <section
      ref={sectionRef}
      id="home"
      className="min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Animated gradient mesh background */}
      <motion.div 
        className="absolute inset-0 -z-20"
        style={{ y, opacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/20" />
        <motion.div
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-cyan-500/20 to-pink-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Spotlight effect */}
      <motion.div
        className="absolute -z-10 w-[600px] h-[600px] rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(120,119,198,0.3) 0%, transparent 70%)",
          left: mousePosition.x - 300,
          top: mousePosition.y - 300,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      />

      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary/20"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.initialX}%`,
            top: `${particle.initialY}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div 
          className="text-center space-y-8"
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
        >
          {/* Badge with animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="secondary" className="px-4 py-1.5 gap-2">
              <Sparkles className="h-3 w-3" />
              Available for new opportunities
            </Badge>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="relative group">
              {/* Animated gradient border */}
              <motion.div
                className="absolute -inset-1 rounded-full opacity-75 blur-lg"
                style={{
                  background: "linear-gradient(90deg, #8b5cf6, #ec4899, #3b82f6, #8b5cf6)",
                  backgroundSize: "200% 200%",
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              
              {/* Secondary glow effect */}
              <motion.div
                className="absolute -inset-2 rounded-full opacity-40 blur-2xl"
                style={{
                  background: "linear-gradient(90deg, #8b5cf6, #ec4899, #3b82f6, #8b5cf6)",
                  backgroundSize: "200% 200%",
                }}
                animate={{
                  backgroundPosition: ["100% 50%", "0% 50%", "100% 50%"],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Image container */}
              <div className="relative rounded-full overflow-hidden w-40 h-40 border-4 border-background shadow-2xl">
                <ImageWithFallback
                  src={headshotImage}
                  alt="Professional headshot"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
            
            {/* Name below headshot */}
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent text-4xl"
            >
              Perucy
            </motion.h3>
          </motion.div>

          {/* Main heading with stagger animation */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-2">
              <motion.h1 
                className="relative"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  background: "linear-gradient(90deg, hsl(var(--foreground)), hsl(var(--primary)), #8b5cf6, #ec4899, hsl(var(--primary)), hsl(var(--foreground)))",
                  backgroundSize: "200% 100%",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Full-Stack Software Engineer
              </motion.h1>
            </div>
            <div className="max-w-2xl mx-auto space-y-4">
              <p className="text-lg">
                Backend engineer building AI-powered tools and scalable infrastructure.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 text-muted-foreground">
                <span>Previously:</span>
                <span className="px-3 py-1 rounded-full bg-primary/10 dark:bg-primary/20 text-foreground/90 border border-primary/20">
                  Software Engineer @ Qualcomm
                </span>
                <span className="text-border">|</span>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/50 dark:bg-accent/30 text-foreground/90 border border-accent/30">
                  Research Assistant @ TSP
                </span>
              </div>
              <p className="text-lg italic">
                <span className="text-muted-foreground not-italic">Currently:</span> Turning complex problems into elegant code.
              </p>
            </div>
          </motion.div>

          {/* Code snippet with typewriter effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-xl mx-auto"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-accent/50 rounded-2xl blur-lg opacity-25 group-hover:opacity-50 transition duration-500" />
              <div className="relative bg-muted/50 backdrop-blur-sm border border-border rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-xs text-muted-foreground ml-auto">index.ts</span>
                </div>
                <div className="font-mono text-sm text-left">
                  <span className="text-primary">{currentText}</span>
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="inline-block w-0.5 h-5 bg-foreground ml-0.5 align-middle"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Button size="lg" className="gap-2 relative group overflow-hidden" asChild>
              <a href="https://github.com/perucy" target="_blank" rel="noopener noreferrer">
                <span className="relative z-10 flex items-center gap-2">
                  View My Work <ArrowRight className="h-4 w-4" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary to-primary/60"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 backdrop-blur-sm" asChild>
              <a href="https://www.linkedin.com/in/perucy-mussiba-361846222/overlay/1760213850692/single-media-viewer/?profileId=ACoAADgCbnkBXUv1_eTeIxyE_ehsfIFNkmqdgFM" target="_blank" rel="noopener noreferrer">
                View My Resume
              </a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex items-center justify-center gap-4 pt-4"
          >
            {[
              { icon: Github, href: "https://github.com/perucy" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/perucy-mussiba-361846222/" },
            ].map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative p-3 rounded-full bg-muted/50 text-muted-foreground hover:text-foreground transition-colors backdrop-blur-sm border border-border/50"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Enhanced Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-20 max-w-4xl mx-auto"
        >
          {[
            { value: "3+", label: "Years Experience", color: "from-blue-500 to-cyan-500" },
            { value: "20+", label: "Projects Completed", color: "from-purple-500 to-pink-500" },
            { value: "15+", label: "Technologies", color: "from-green-500 to-emerald-500" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="relative group"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r opacity-0 group-hover:opacity-30 rounded-2xl blur transition duration-300" 
                style={{ background: `linear-gradient(to right, var(--tw-gradient-stops))` }} 
              />
              <div className="relative bg-muted/30 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center">
                <h2 className={`bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value}
                </h2>
                <p className="text-muted-foreground mt-1">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 right-8"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
            <motion.div
              className="w-1.5 h-1.5 bg-muted-foreground/50 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}