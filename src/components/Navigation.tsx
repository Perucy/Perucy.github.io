import { Button } from "./ui/button";
import { Home, User, Briefcase, FolderGit2, Mail, GraduationCap, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import headshotImage from 'figma:asset/28c3c3bee1427aece60221fcc5772c721259f245.png';

export function Navigation() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [greeting, setGreeting] = useState("");
  const [isDark, setIsDark] = useState(true);

  const navLinks = [
    { href: "#home", label: "Home", icon: Home },
    { href: "#about", label: "About", icon: User },
    { href: "#projects", label: "Projects", icon: FolderGit2 },
    { href: "#education", label: "Education", icon: GraduationCap },
    { href: "#experience", label: "Experience", icon: Briefcase },
    { href: "#contact", label: "Contact", icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    
    // Set greeting based on time of day
    const updateGreeting = () => {
      const hour = new Date().getHours();
      if (hour >= 5 && hour < 12) {
        setGreeting("Good Morning");
      } else if (hour >= 12 && hour < 18) {
        setGreeting("Good Afternoon");
      } else {
        setGreeting("Good Evening");
      }
    };
    
    updateGreeting();
    // Update greeting every minute
    const interval = setInterval(updateGreeting, 60000);
    
    // Initialize dark mode
    const htmlElement = document.documentElement;
    htmlElement.classList.add('dark');
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);

  const toggleTheme = () => {
    const htmlElement = document.documentElement;
    if (isDark) {
      htmlElement.classList.remove('dark');
      setIsDark(false);
    } else {
      htmlElement.classList.add('dark');
      setIsDark(true);
    }
  };

  return (
    <motion.nav
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <motion.div
        className="relative bg-background/80 backdrop-blur-xl border border-border/50 shadow-lg overflow-hidden"
        animate={{
          borderRadius: isExpanded ? "1.5rem" : "9999px",
          width: isExpanded ? "auto" : isScrolled ? "280px" : "200px",
          paddingLeft: isExpanded ? "1.5rem" : "1rem",
          paddingRight: isExpanded ? "1.5rem" : "1rem",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onHoverStart={() => setIsExpanded(true)}
        onHoverEnd={() => setIsExpanded(false)}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 pointer-events-none" />
        
        <div className="relative flex items-center gap-2 h-14">
          {/* Logo - Headshot */}
          <motion.div 
            className="flex-shrink-0 relative"
            animate={{ 
              scale: isExpanded ? 1 : 1.1,
            }}
          >
            <div className="relative w-8 h-8 rounded-full overflow-hidden ring-2 ring-primary/50">
              <ImageWithFallback
                src={headshotImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
            </div>
          </motion.div>

          <AnimatePresence>
            {isExpanded ? (
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-1"
              >
                {navLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      className="relative px-3 py-2 rounded-xl text-muted-foreground hover:text-foreground transition-colors group flex items-center gap-2"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => setActiveSection(link.href.slice(1))}
                    >
                      <Icon className="h-4 w-4" />
                      <span className="text-sm whitespace-nowrap">{link.label}</span>
                      {activeSection === link.href.slice(1) && (
                        <motion.div
                          layoutId="activeSection"
                          className="absolute inset-0 bg-accent/50 rounded-xl -z-10"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </motion.a>
                  );
                })}
                
                {/* Theme Toggle */}
                <motion.button
                  onClick={toggleTheme}
                  className="relative px-3 py-2 rounded-xl text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 ml-2"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <AnimatePresence mode="wait">
                    {isDark ? (
                      <motion.div
                        key="sun"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Sun className="h-4 w-4" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="moon"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Moon className="h-4 w-4" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2 ml-2"
              >
                <div className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-1 h-1 rounded-full bg-primary"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 1, 0.3],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {isScrolled ? "Menu" : greeting}
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Mobile hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isExpanded ? 0 : 0.6 }}
        className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-muted-foreground whitespace-nowrap md:hidden"
      >
        Hover to expand
      </motion.div>
    </motion.nav>
  );
}