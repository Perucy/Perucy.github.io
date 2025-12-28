import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleDelay: number;
}

interface CityLight {
  id: number;
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
  opacity: number;
  blinkDelay: number;
}

export function SunsetCityScene() {
  const [stars, setStars] = useState<Star[]>([]);
  const [cityLights, setCityLights] = useState<CityLight[]>([]);

  useEffect(() => {
    // Generate stars in the upper portion of the sky
    const generatedStars: Star[] = Array.from({ length: 80 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 40, // Upper 40% of screen
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.6 + 0.4,
      twinkleDelay: Math.random() * 5,
    }));

    // Generate city lights
    const generatedLights: CityLight[] = Array.from({ length: 200 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: 60 + Math.random() * 15, // Between 60-75% from top
      width: Math.random() * 3 + 1,
      height: Math.random() * 8 + 4,
      color: Math.random() > 0.7 ? '#60a5fa' : Math.random() > 0.5 ? '#fbbf24' : '#f97316',
      opacity: Math.random() * 0.5 + 0.5,
      blinkDelay: Math.random() * 8,
    }));

    setStars(generatedStars);
    setCityLights(generatedLights);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Sky gradient - teal to orange sunset */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1e5b6b] via-[#2d7a8a] to-[#ff8c42]" />
      
      {/* Middle transition gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#ff6b35]/40 to-[#ff8c42]" />

      {/* Stars in the upper sky */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{
            opacity: [star.opacity, star.opacity * 0.3, star.opacity],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: star.twinkleDelay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Shooting star */}
      <motion.div
        className="absolute w-1 h-1 bg-white rounded-full"
        style={{
          top: "15%",
          left: "40%",
          boxShadow: "0 0 8px 2px rgba(255,255,255,0.8)",
        }}
        animate={{
          x: [0, 200],
          y: [0, 100],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatDelay: 15,
          ease: "easeOut",
        }}
      />

      {/* Distant mountain silhouettes */}
      <div className="absolute bottom-0 left-0 right-0 h-[45%]">
        {/* Far mountains */}
        <svg className="absolute bottom-0 w-full h-full opacity-40" preserveAspectRatio="none" viewBox="0 0 1200 400">
          <path
            d="M0,400 L0,250 Q200,180 400,200 T800,220 Q1000,200 1200,240 L1200,400 Z"
            fill="#1a1a2e"
          />
        </svg>
        
        {/* Mid mountains */}
        <svg className="absolute bottom-0 w-full h-full opacity-60" preserveAspectRatio="none" viewBox="0 0 1200 400">
          <path
            d="M0,400 L0,280 Q300,200 500,230 T900,250 Q1100,230 1200,270 L1200,400 Z"
            fill="#16213e"
          />
        </svg>
      </div>

      {/* City skyline with buildings */}
      <div className="absolute bottom-0 left-0 right-0 h-[35%]">
        {/* Building silhouettes */}
        <div className="absolute bottom-0 w-full h-full">
          {Array.from({ length: 40 }).map((_, i) => (
            <div
              key={i}
              className="absolute bottom-0 bg-gradient-to-t from-[#0f172a] to-[#1e293b]"
              style={{
                left: `${(i * 2.8) % 100}%`,
                width: `${Math.random() * 4 + 2}%`,
                height: `${Math.random() * 60 + 40}%`,
                opacity: 0.9,
              }}
            />
          ))}
        </div>

        {/* City lights */}
        {cityLights.map((light) => (
          <motion.div
            key={light.id}
            className="absolute rounded-sm"
            style={{
              left: `${light.x}%`,
              top: `${light.y}%`,
              width: `${light.width}px`,
              height: `${light.height}px`,
              backgroundColor: light.color,
              boxShadow: `0 0 ${light.width * 2}px ${light.color}`,
            }}
            animate={{
              opacity: [light.opacity, light.opacity * 0.4, light.opacity],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: light.blinkDelay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Foreground hill/viewpoint */}
      <div className="absolute bottom-0 left-0 right-0 h-[25%]">
        <svg className="absolute bottom-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 300">
          <path
            d="M0,300 L0,150 Q300,80 600,100 T1200,120 L1200,300 Z"
            fill="url(#hillGradient)"
          />
          <defs>
            <linearGradient id="hillGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1a1a1a" />
              <stop offset="100%" stopColor="#0a0a0a" />
            </linearGradient>
          </defs>
        </svg>

        {/* Person silhouettes sitting on the hill */}
        <div className="absolute bottom-[15%] left-1/2 -translate-x-1/2 flex gap-8">
          {/* Person 1 - pointing up */}
          <motion.div
            className="relative"
            animate={{
              y: [0, -3, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <svg width="60" height="90" viewBox="0 0 60 90" fill="none">
              {/* Head */}
              <circle cx="30" cy="15" r="12" fill="#0f0f0f" />
              {/* Body */}
              <path d="M30 27 L30 55" stroke="#0f0f0f" strokeWidth="8" />
              {/* Left arm - pointing up */}
              <path d="M30 35 L15 15" stroke="#0f0f0f" strokeWidth="6" strokeLinecap="round" />
              {/* Right arm */}
              <path d="M30 35 L42 45" stroke="#0f0f0f" strokeWidth="6" strokeLinecap="round" />
              {/* Left leg */}
              <path d="M30 55 L20 75 L15 85" stroke="#0f0f0f" strokeWidth="7" strokeLinecap="round" />
              {/* Right leg */}
              <path d="M30 55 L40 75 L42 85" stroke="#0f0f0f" strokeWidth="7" strokeLinecap="round" />
            </svg>
          </motion.div>

          {/* Person 2 - sitting relaxed */}
          <motion.div
            className="relative"
            animate={{
              y: [0, -2, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            <svg width="60" height="90" viewBox="0 0 60 90" fill="none">
              {/* Head */}
              <circle cx="30" cy="15" r="12" fill="#0f0f0f" />
              {/* Body */}
              <path d="M30 27 L30 55" stroke="#0f0f0f" strokeWidth="8" />
              {/* Left arm */}
              <path d="M30 35 L20 50" stroke="#0f0f0f" strokeWidth="6" strokeLinecap="round" />
              {/* Right arm */}
              <path d="M30 35 L40 50" stroke="#0f0f0f" strokeWidth="6" strokeLinecap="round" />
              {/* Left leg */}
              <path d="M30 55 L18 75 L12 85" stroke="#0f0f0f" strokeWidth="7" strokeLinecap="round" />
              {/* Right leg */}
              <path d="M30 55 L42 75 L48 85" stroke="#0f0f0f" strokeWidth="7" strokeLinecap="round" />
            </svg>
          </motion.div>
        </div>
      </div>

      {/* Atmospheric haze overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20 pointer-events-none" />
      
      {/* Subtle noise texture for realism */}
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='4' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
