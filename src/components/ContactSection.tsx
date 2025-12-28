import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Linkedin, MapPin, Github } from "lucide-react";
import { motion } from "motion/react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4">Let's Connect</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Interested in working together? Connect with me on LinkedIn for projects, collaborations, and opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <a href="https://www.linkedin.com/in/perucy-mussiba-361846222/" target="_blank" rel="noopener noreferrer">
              <Card className="backdrop-blur-sm bg-card/80 dark:bg-card/40 border-border/50 dark:border-border/30 hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 dark:opacity-100 transition-opacity rounded-lg" />
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-lg opacity-0 group-hover:opacity-100 blur transition duration-500" />
                <CardContent className="flex items-center gap-4 pt-6 relative">
                  <motion.div 
                    className="h-14 w-14 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Linkedin className="h-6 w-6 text-primary" />
                  </motion.div>
                  <div>
                    <p className="text-muted-foreground">Connect on LinkedIn</p>
                    <p>Perucy Mussiba</p>
                  </div>
                </CardContent>
              </Card>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <a href="https://github.com/perucy" target="_blank" rel="noopener noreferrer">
              <Card className="backdrop-blur-sm bg-card/80 dark:bg-card/40 border-border/50 dark:border-border/30 hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 dark:opacity-100 transition-opacity rounded-lg" />
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-lg opacity-0 group-hover:opacity-100 blur transition duration-500" />
                <CardContent className="flex items-center gap-4 pt-6 relative">
                  <motion.div 
                    className="h-14 w-14 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Github className="h-6 w-6 text-primary" />
                  </motion.div>
                  <div>
                    <p className="text-muted-foreground">View my work on GitHub</p>
                    <p>@perucy</p>
                  </div>
                </CardContent>
              </Card>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <Card className="backdrop-blur-sm bg-card/80 dark:bg-card/40 border-border/50 dark:border-border/30">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 dark:opacity-100 transition-opacity rounded-lg" />
            <CardContent className="flex items-center gap-4 pt-6 relative">
              <motion.div 
                className="h-14 w-14 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <MapPin className="h-6 w-6 text-primary" />
              </motion.div>
              <div>
                <p className="text-muted-foreground">Location</p>
                <p>Medford, MA</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-primary/10 to-accent dark:from-primary/20 dark:to-accent/50 backdrop-blur-sm border-border/50">
            <CardContent className="pt-6 text-center">
              <h4 className="mb-2">Open to Opportunities</h4>
              <p className="text-muted-foreground">
                Available for freelance projects and full-time positions
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}