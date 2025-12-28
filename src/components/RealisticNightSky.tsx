import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  brightness: number;
  color: string;
  twinkleSpeed: number;
  twinkleDelay: number;
}

interface ShootingStar {
  id: number;
  startX: number;
  startY: number;
  delay: number;
  duration: number;
}

// Star color temperatures (like real stars)
const STAR_COLORS = [
  "rgba(255, 255, 255, 1)",      // White (most common)
  "rgba(255, 255, 255, 1)",      // White
  "rgba(255, 255, 255, 1)",      // White
  "rgba(255, 255, 255, 1)",      // White
  "rgba(245, 245, 255, 1)",      // Blue-white
  "rgba(255, 250, 240, 1)",      // Yellow-white
  "rgba(255, 240, 220, 1)",      // Orange
  "rgba(255, 220, 200, 1)",      // Red-orange
];

// Dark colors for light mode stars
const STAR_COLORS_LIGHT = [
  "rgba(30, 30, 40, 0.8)",       // Dark gray (most common)
  "rgba(30, 30, 40, 0.8)",       // Dark gray
  "rgba(30, 30, 40, 0.8)",       // Dark gray
  "rgba(30, 30, 40, 0.8)",       // Dark gray
  "rgba(40, 40, 80, 0.7)",       // Blue-dark
  "rgba(60, 50, 30, 0.7)",       // Yellow-dark
  "rgba(80, 50, 40, 0.7)",       // Orange-dark
  "rgba(90, 40, 40, 0.7)",       // Red-dark
];

export function RealisticNightSky() {
  const [stars, setStars] = useState<Star[]>([]);
  const [milkyWayStars, setMilkyWayStars] = useState<Star[]>([]);
  const [shootingStars, setShootingStars] = useState<ShootingStar[]>([]);

  useEffect(() => {
    // Generate regular stars with natural distribution
    const newStars: Star[] = [];
    const starCount = 300;
    
    for (let i = 0; i < starCount; i++) {
      // Power law distribution for brightness (most stars are dim)
      const brightnessFactor = Math.random();
      const brightness = Math.pow(brightnessFactor, 3); // Cubic distribution makes most stars dim
      
      newStars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: brightness * 2 + 0.3, // Most stars tiny, few large
        brightness: brightness * 0.7 + 0.2,
        color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
        twinkleSpeed: Math.random() * 4 + 3, // Slower, more natural twinkling
        twinkleDelay: Math.random() * 10,
      });
    }
    setStars(newStars);

    // Generate Milky Way band (concentrated stars in a diagonal band)
    const milkyWayStarsArray: Star[] = [];
    const milkyWayStarCount = 400;
    
    for (let i = 0; i < milkyWayStarCount; i++) {
      // Create a diagonal band from top-left to bottom-right
      const bandCenter = Math.random() * 100;
      const bandWidth = 25; // Width of the Milky Way band
      
      // Random position along the band
      const alongBand = Math.random() * 100;
      const perpendicular = (Math.random() - 0.5) * bandWidth;
      
      // Convert to x, y (diagonal orientation)
      const angle = -Math.PI / 6; // ~30 degree tilt
      const x = alongBand * Math.cos(angle) - perpendicular * Math.sin(angle);
      const y = alongBand * Math.sin(angle) + perpendicular * Math.cos(angle);
      
      // Adjust to fit screen
      const finalX = ((x / 100) * 120 - 10); // Extend beyond edges slightly
      const finalY = ((y / 100) * 120 - 10);
      
      if (finalX >= 0 && finalX <= 100 && finalY >= 0 && finalY <= 100) {
        const brightnessFactor = Math.random();
        const brightness = Math.pow(brightnessFactor, 4) * 0.6; // Milky Way stars are dimmer
        
        milkyWayStarsArray.push({
          id: i + starCount,
          x: finalX,
          y: finalY,
          size: brightness * 1.5 + 0.2,
          brightness: brightness * 0.5 + 0.1,
          color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
          twinkleSpeed: Math.random() * 5 + 4,
          twinkleDelay: Math.random() * 10,
        });
      }
    }
    setMilkyWayStars(milkyWayStarsArray);

    // Rare shooting stars
    const newShootingStars: ShootingStar[] = [];
    for (let i = 0; i < 8; i++) {
      newShootingStars.push({
        id: i,
        startX: Math.random() * 80 + 10,
        startY: Math.random() * 50,
        delay: i * 4 + Math.random() * 8,
        duration: Math.random() * 0.6 + 0.6,
      });
    }
    setShootingStars(newShootingStars);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Deep Night Sky Gradient - Only visible in dark mode */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background dark:from-[#000814] dark:via-[#001d3d] dark:to-[#000814] transition-colors duration-700" />
      
      {/* Milky Way Glow (subtle dust/gas clouds) - Only visible in dark mode */}
      <motion.div
        className="absolute inset-0 opacity-0 dark:opacity-100 transition-opacity duration-700"
        style={{
          background: `
            radial-gradient(ellipse 80% 30% at 30% 40%, rgba(100, 100, 150, 0.03) 0%, transparent 60%),
            radial-gradient(ellipse 70% 25% at 50% 50%, rgba(120, 120, 180, 0.04) 0%, transparent 70%),
            radial-gradient(ellipse 60% 20% at 70% 60%, rgba(100, 100, 150, 0.025) 0%, transparent 60%)
          `,
          transform: "rotate(-30deg)",
          transformOrigin: "center",
        }}
        animate={{
          opacity: [0.6, 0.8, 0.6],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* All stars - Theme aware */}
      <div className="absolute inset-0 transition-opacity duration-700">
        {/* Milky Way Stars (background layer) */}
        {milkyWayStars.map((star) => (
          <motion.div
            key={`milky-${star.id}`}
            className="absolute rounded-full"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
            animate={{
              opacity: [
                star.brightness * 0.6,
                star.brightness * 1.2,
                star.brightness * 0.6,
              ],
            }}
            transition={{
              duration: star.twinkleSpeed,
              repeat: Infinity,
              delay: star.twinkleDelay,
              ease: "easeInOut",
            }}
          >
            {/* Dark mode star */}
            <div 
              className="absolute inset-0 rounded-full opacity-0 dark:opacity-100 transition-opacity duration-700"
              style={{
                backgroundColor: star.color,
              }}
            />
            {/* Light mode star */}
            <div 
              className="absolute inset-0 rounded-full opacity-100 dark:opacity-0 transition-opacity duration-700"
              style={{
                backgroundColor: STAR_COLORS_LIGHT[STAR_COLORS.indexOf(star.color)] || "rgba(30, 30, 40, 0.6)",
              }}
            />
          </motion.div>
        ))}
        
        {/* Regular Stars (foreground layer) */}
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
            animate={{
              opacity: [
                star.brightness * 0.4,
                star.brightness * 1.1,
                star.brightness * 0.4,
              ],
              scale: star.brightness > 0.5 ? [1, 1.15, 1] : 1,
            }}
            transition={{
              duration: star.twinkleSpeed,
              repeat: Infinity,
              delay: star.twinkleDelay,
              ease: "easeInOut",
            }}
          >
            {/* Dark mode star */}
            <div 
              className="absolute inset-0 rounded-full opacity-0 dark:opacity-100 transition-opacity duration-700"
              style={{
                backgroundColor: star.color,
                boxShadow: star.brightness > 0.6 
                  ? `0 0 ${star.size * 2}px ${star.color.replace("1)", "0.4)")}` 
                  : "none",
              }}
            />
            {/* Light mode star */}
            <div 
              className="absolute inset-0 rounded-full opacity-100 dark:opacity-0 transition-opacity duration-700"
              style={{
                backgroundColor: STAR_COLORS_LIGHT[STAR_COLORS.indexOf(star.color)] || "rgba(30, 30, 40, 0.7)",
                boxShadow: star.brightness > 0.6 
                  ? `0 0 ${star.size}px rgba(30, 30, 40, 0.2)` 
                  : "none",
              }}
            />
          </motion.div>
        ))}
        
        {/* A Few Bright Stars with Natural Flicker */}
        <motion.div
          className="absolute"
          style={{ left: "25%", top: "20%", width: "3px", height: "3px" }}
        >
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{
              opacity: [0.8, 1, 0.85, 1, 0.8],
              scale: [1, 1.2, 1.1, 1.25, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Dark mode bright star */}
            <div
              className="absolute inset-0 rounded-full bg-white opacity-0 dark:opacity-100 transition-opacity duration-700"
              style={{
                boxShadow: "0 0 10px rgba(255, 255, 255, 0.6), 0 0 20px rgba(200, 220, 255, 0.3)",
              }}
            />
            {/* Light mode bright star */}
            <div
              className="absolute inset-0 rounded-full opacity-100 dark:opacity-0 transition-opacity duration-700"
              style={{
                backgroundColor: "rgba(40, 40, 60, 0.9)",
                boxShadow: "0 0 4px rgba(40, 40, 60, 0.3)",
              }}
            />
          </motion.div>
        </motion.div>
        
        <motion.div
          className="absolute"
          style={{ left: "70%", top: "35%", width: "3px", height: "3px" }}
        >
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{
              opacity: [0.85, 1, 0.8, 1, 0.85],
              scale: [1, 1.15, 1.2, 1.1, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            {/* Dark mode bright star */}
            <div
              className="absolute inset-0 rounded-full bg-white opacity-0 dark:opacity-100 transition-opacity duration-700"
              style={{
                boxShadow: "0 0 10px rgba(255, 255, 255, 0.6), 0 0 20px rgba(255, 240, 220, 0.3)",
              }}
            />
            {/* Light mode bright star */}
            <div
              className="absolute inset-0 rounded-full opacity-100 dark:opacity-0 transition-opacity duration-700"
              style={{
                backgroundColor: "rgba(50, 45, 35, 0.9)",
                boxShadow: "0 0 4px rgba(50, 45, 35, 0.3)",
              }}
            />
          </motion.div>
        </motion.div>
        
        <motion.div
          className="absolute"
          style={{ left: "15%", top: "65%", width: "2.5px", height: "2.5px" }}
        >
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{
              opacity: [0.75, 1, 0.8, 0.95, 0.75],
              scale: [1, 1.2, 1, 1.15, 1],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          >
            {/* Dark mode bright star */}
            <div
              className="absolute inset-0 rounded-full bg-white opacity-0 dark:opacity-100 transition-opacity duration-700"
              style={{
                boxShadow: "0 0 8px rgba(255, 255, 255, 0.5), 0 0 16px rgba(255, 250, 240, 0.3)",
              }}
            />
            {/* Light mode bright star */}
            <div
              className="absolute inset-0 rounded-full opacity-100 dark:opacity-0 transition-opacity duration-700"
              style={{
                backgroundColor: "rgba(45, 40, 35, 0.85)",
                boxShadow: "0 0 3px rgba(45, 40, 35, 0.3)",
              }}
            />
          </motion.div>
        </motion.div>
        
        <motion.div
          className="absolute"
          style={{ left: "85%", top: "25%", width: "2.5px", height: "2.5px" }}
        >
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{
              opacity: [0.8, 0.95, 1, 0.85, 0.8],
              scale: [1, 1.1, 1.2, 1.05, 1],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            {/* Dark mode bright star */}
            <div
              className="absolute inset-0 rounded-full bg-white opacity-0 dark:opacity-100 transition-opacity duration-700"
              style={{
                boxShadow: "0 0 8px rgba(255, 255, 255, 0.5), 0 0 16px rgba(245, 245, 255, 0.3)",
              }}
            />
            {/* Light mode bright star */}
            <div
              className="absolute inset-0 rounded-full opacity-100 dark:opacity-0 transition-opacity duration-700"
              style={{
                backgroundColor: "rgba(35, 35, 50, 0.85)",
                boxShadow: "0 0 3px rgba(35, 35, 50, 0.3)",
              }}
            />
          </motion.div>
        </motion.div>
        
        {/* Rare Shooting Stars - Only in dark mode */}
        <div className="opacity-0 dark:opacity-100 transition-opacity duration-700">
          {shootingStars.map((shootingStar) => (
            <motion.div
              key={shootingStar.id}
              className="absolute h-[1px] w-[80px]"
              style={{
                left: `${shootingStar.startX}%`,
                top: `${shootingStar.startY}%`,
                background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.9) 60%, transparent)",
                filter: "blur(0.5px)",
              }}
              initial={{
                opacity: 0,
                x: 0,
                y: 0,
                rotate: 45,
              }}
              animate={{
                opacity: [0, 1, 1, 0],
                x: [0, 250],
                y: [0, 180],
              }}
              transition={{
                duration: shootingStar.duration,
                delay: shootingStar.delay,
                repeat: Infinity,
                repeatDelay: 30,
                ease: [0.2, 0, 0.8, 1],
              }}
            />
          ))}
        </div>
        
        {/* Subtle atmospheric glow at horizon - Only dark mode */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-[30%] opacity-0 dark:opacity-100 transition-opacity duration-700"
          style={{
            background: "linear-gradient(to top, rgba(10, 20, 40, 0.3) 0%, transparent 100%)",
          }}
        />
        
        {/* Very subtle light pollution glow (optional, adds realism) - Only dark mode */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-[15%] opacity-0 dark:opacity-100 transition-opacity duration-700"
          style={{
            background: "radial-gradient(ellipse at bottom, rgba(40, 50, 80, 0.08) 0%, transparent 70%)",
          }}
        />
        
        {/* Gentle vignette for depth and readability - Only dark mode */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,8,20,0.4)_100%)] opacity-0 dark:opacity-100 transition-opacity duration-700" />
      </div>
      
      {/* Light Mode: Clean gradient background for readability */}
      <div className="absolute inset-0 opacity-100 dark:opacity-0 transition-opacity duration-700 bg-gradient-to-br from-background via-muted/20 to-background" />
    </div>
  );
}