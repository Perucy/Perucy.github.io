import { motion } from "motion/react";
import { useEffect, useState } from "react";
import backgroundImage from 'figma:asset/f5945889938777582fc40d32480547ccac8fc236.png';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleDelay: number;
}

export function StarryNightBackground() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    // Generate additional twinkling stars overlay
    const generatedStars: Star[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 60, // Upper 60% of screen
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.5 + 0.3,
      twinkleDelay: Math.random() * 5,
    }));

    setStars(generatedStars);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: 'center center',
        }}
      />
      
      {/* Subtle overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
      
      {/* Additional twinkling stars overlay */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            boxShadow: `0 0 ${star.size * 2}px rgba(255,255,255,0.8)`,
          }}
          animate={{
            opacity: [star.opacity, star.opacity * 0.2, star.opacity],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: star.twinkleDelay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Shooting star effect */}
      <motion.div
        className="absolute w-1 h-1 bg-white rounded-full"
        style={{
          top: "20%",
          left: "30%",
          boxShadow: "0 0 10px 3px rgba(255,255,255,0.9)",
        }}
        animate={{
          x: [0, 300],
          y: [0, 150],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 12,
          ease: "easeOut",
        }}
      >
        {/* Shooting star trail */}
        <div 
          className="absolute top-0 left-0 w-20 h-0.5 bg-gradient-to-r from-white to-transparent"
          style={{
            transform: "rotate(-25deg) translateX(-20px)",
            filter: "blur(1px)",
          }}
        />
      </motion.div>

      {/* Another shooting star from different angle */}
      <motion.div
        className="absolute w-1 h-1 bg-white rounded-full"
        style={{
          top: "15%",
          right: "20%",
          boxShadow: "0 0 10px 3px rgba(255,255,255,0.9)",
        }}
        animate={{
          x: [0, -250],
          y: [0, 120],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          repeatDelay: 18,
          ease: "easeOut",
          delay: 6,
        }}
      >
        {/* Shooting star trail */}
        <div 
          className="absolute top-0 left-0 w-20 h-0.5 bg-gradient-to-r from-white to-transparent"
          style={{
            transform: "rotate(25deg) translateX(-20px)",
            filter: "blur(1px)",
          }}
        />
      </motion.div>

      {/* Glowing orbs/planets effect (like the circles in the image) */}
      <motion.div
        className="absolute top-[12%] left-[28%] w-16 h-16 rounded-full border-2 border-cyan-400/60"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          boxShadow: "0 0 30px rgba(34, 211, 238, 0.4)",
        }}
      />

      <motion.div
        className="absolute top-[8%] right-[15%] w-12 h-12 rounded-full border-2 border-purple-400/50"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        style={{
          boxShadow: "0 0 25px rgba(192, 132, 252, 0.3)",
        }}
      />

      {/* Atmospheric glow at the horizon */}
      <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-cyan-900/20 via-purple-900/10 to-transparent pointer-events-none" />
      
      {/* Subtle vignette for depth */}
      <div className="absolute inset-0 bg-radial-gradient opacity-30 pointer-events-none" 
        style={{
          background: "radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.5) 100%)",
        }}
      />
    </div>
  );
}
