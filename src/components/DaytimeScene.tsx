import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface Bird {
  id: number;
  startY: number;
  duration: number;
  delay: number;
  size: number;
  depth: number;
}

export function DaytimeScene() {
  const [birds, setBirds] = useState<Bird[]>([]);

  useEffect(() => {
    // Generate random birds with depth for atmospheric perspective
    const generatedBirds: Bird[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      startY: Math.random() * 35 + 5, // 5% to 40% from top
      duration: Math.random() * 20 + 25, // 25-45 seconds
      delay: Math.random() * 15,
      size: Math.random() * 0.5 + 0.7, // 0.7 to 1.2
      depth: Math.random(), // 0-1, for perspective (closer = larger, darker)
    }));

    setBirds(generatedBirds);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Realistic Sky Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#87CEEB] via-[#B0D4F1] to-[#FFF4E6] dark:from-[#1a1f3a] dark:via-[#2d2147] dark:to-[#4a2c2a]" />
      
      {/* Distant Mountains/Hills for depth */}
      <div className="absolute bottom-[25%] left-0 right-0 h-[20%] opacity-40 dark:opacity-30">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 200">
          <path 
            d="M0,200 L0,120 Q100,80 200,100 T400,90 T600,110 T800,95 T1000,105 L1000,200 Z" 
            fill="#6B8E95"
            className="dark:fill-[#2a3f4a]"
          />
          <path 
            d="M0,200 L0,140 Q150,100 300,130 T600,125 T900,135 L1000,130 L1000,200 Z" 
            fill="#8BA8AD"
            className="dark:fill-[#3d5159]"
          />
        </svg>
      </div>

      {/* Realistic Clouds with better shaping */}
      <div className="absolute inset-0">
        {/* Cloud 1 - Large fluffy cloud */}
        <motion.div
          className="absolute top-[12%]"
          animate={{ x: ["-15%", "115%"] }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        >
          <svg width="200" height="80" viewBox="0 0 200 80" className="opacity-80 dark:opacity-40">
            <ellipse cx="50" cy="50" rx="35" ry="25" fill="white" />
            <ellipse cx="80" cy="45" rx="40" ry="30" fill="white" />
            <ellipse cx="115" cy="50" rx="38" ry="28" fill="white" />
            <ellipse cx="145" cy="55" rx="35" ry="25" fill="white" />
            <ellipse cx="90" cy="30" rx="30" ry="22" fill="white" />
          </svg>
        </motion.div>

        {/* Cloud 2 - Medium cloud */}
        <motion.div
          className="absolute top-[22%]"
          animate={{ x: ["115%", "-15%"] }}
          transition={{ duration: 110, repeat: Infinity, ease: "linear" }}
        >
          <svg width="160" height="65" viewBox="0 0 160 65" className="opacity-75 dark:opacity-35">
            <ellipse cx="40" cy="40" rx="30" ry="20" fill="white" />
            <ellipse cx="70" cy="35" rx="35" ry="25" fill="white" />
            <ellipse cx="105" cy="40" rx="32" ry="22" fill="white" />
            <ellipse cx="80" cy="22" rx="25" ry="18" fill="white" />
          </svg>
        </motion.div>

        {/* Cloud 3 - Small cloud */}
        <motion.div
          className="absolute top-[8%]"
          animate={{ x: ["-10%", "110%"] }}
          transition={{ duration: 70, repeat: Infinity, ease: "linear", delay: 30 }}
        >
          <svg width="120" height="50" viewBox="0 0 120 50" className="opacity-70 dark:opacity-30">
            <ellipse cx="30" cy="30" rx="25" ry="18" fill="white" />
            <ellipse cx="55" cy="27" rx="28" ry="20" fill="white" />
            <ellipse cx="82" cy="32" rx="26" ry="19" fill="white" />
          </svg>
        </motion.div>

        {/* Cloud 4 - Another medium cloud */}
        <motion.div
          className="absolute top-[32%]"
          animate={{ x: ["-15%", "115%"] }}
          transition={{ duration: 95, repeat: Infinity, ease: "linear", delay: 45 }}
        >
          <svg width="180" height="70" viewBox="0 0 180 70" className="opacity-65 dark:opacity-25">
            <ellipse cx="45" cy="45" rx="32" ry="23" fill="white" />
            <ellipse cx="78" cy="40" rx="38" ry="27" fill="white" />
            <ellipse cx="115" cy="47" rx="34" ry="24" fill="white" />
            <ellipse cx="85" cy="25" rx="28" ry="20" fill="white" />
          </svg>
        </motion.div>
      </div>

      {/* Realistic Flying Birds */}
      {birds.map((bird) => {
        // Calculate opacity and color based on depth
        const opacity = 0.3 + bird.depth * 0.6;
        const birdColor = bird.depth > 0.6 ? "#1a1a1a" : "#2d3748";
        
        return (
          <motion.div
            key={bird.id}
            className="absolute"
            style={{
              top: `${bird.startY}%`,
              left: "-5%",
              opacity: opacity,
            }}
            animate={{
              x: ["0vw", "105vw"],
              y: [0, Math.sin(bird.id * 0.5) * 30, 0],
            }}
            transition={{
              duration: bird.duration,
              repeat: Infinity,
              delay: bird.delay,
              ease: "linear",
            }}
          >
            {/* Realistic bird silhouette */}
            <svg
              width={32 * bird.size * (0.8 + bird.depth * 0.4)}
              height={20 * bird.size * (0.8 + bird.depth * 0.4)}
              viewBox="0 0 32 20"
              fill="none"
            >
              {/* Bird body and wings in flying position */}
              <path
                d="M16 10 Q10 4, 4 8 Q8 6, 12 9 Z"
                fill={birdColor}
              />
              <path
                d="M16 10 Q22 4, 28 8 Q24 6, 20 9 Z"
                fill={birdColor}
              />
              {/* Small body */}
              <ellipse cx="16" cy="11" rx="2" ry="3" fill={birdColor} />
            </svg>
          </motion.div>
        );
      })}

      {/* Realistic Ground - Rolling hills with grass */}
      <div className="absolute bottom-0 left-0 right-0 h-[28%]">
        {/* Hill layers for depth */}
        <svg className="absolute bottom-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 280">
          {/* Back hill - lighter */}
          <path 
            d="M0,280 L0,150 Q250,100 500,130 T1000,140 L1000,280 Z" 
            fill="#7CB342"
            className="dark:fill-[#2d5016]"
          />
          {/* Middle hill */}
          <path 
            d="M0,280 L0,180 Q200,140 400,165 T800,175 T1000,170 L1000,280 Z" 
            fill="#689F38"
            className="dark:fill-[#3d6621]"
          />
          {/* Front hill - darker, more saturated */}
          <path 
            d="M0,280 L0,210 Q300,180 600,200 T1000,195 L1000,280 Z" 
            fill="#558B2F"
            className="dark:fill-[#2d4a1a]"
          />
        </svg>

        {/* Grass texture overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-[60%] overflow-hidden">
          {/* Dense grass blades */}
          {Array.from({ length: 120 }).map((_, i) => (
            <div
              key={i}
              className="absolute bottom-0"
              style={{
                left: `${(i * 0.85) % 100}%`,
                width: "2px",
                height: `${Math.random() * 15 + 8}px`,
                background: `linear-gradient(to top, #4a7c2f, #5d9c3b)`,
                transform: `rotate(${Math.random() * 8 - 4}deg)`,
                opacity: 0.4 + Math.random() * 0.3,
              }}
            />
          ))}
        </div>
      </div>

      {/* Realistic Van and Person */}
      <div className="absolute bottom-[16%] left-1/2 -translate-x-1/2 transform scale-75 sm:scale-100">
        {/* Person sitting - more realistic proportions */}
        <motion.div
          className="absolute -top-24 left-1/2 -translate-x-1/2"
          animate={{
            y: [0, -3, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg width="50" height="70" viewBox="0 0 50 70">
            {/* Head */}
            <ellipse cx="25" cy="12" rx="9" ry="11" fill="#d4a574" />
            {/* Hair */}
            <path d="M16 8 Q25 2 34 8 Q34 12 34 15 L16 15 Q16 12 16 8 Z" fill="#3d2817" />
            {/* Neck */}
            <rect x="21" y="21" width="8" height="6" fill="#d4a574" />
            {/* Torso */}
            <path d="M15 27 L35 27 L38 50 L12 50 Z" fill="#4a90e2" />
            {/* Arms - one pointing up */}
            <path d="M14 30 L8 28 L10 35 L16 36 Z" fill="#d4a574" />
            <path d="M36 30 L42 28 L40 35 L34 36 Z" fill="#d4a574" />
            {/* Legs sitting */}
            <path d="M18 50 L16 68 L22 68 L20 50 Z" fill="#2c3e50" />
            <path d="M32 50 L30 68 L36 68 L34 50 Z" fill="#2c3e50" />
          </svg>
        </motion.div>

        {/* Realistic Van */}
        <svg width="140" height="90" viewBox="0 0 140 90" fill="none">
          <defs>
            {/* Van gradients for realistic shading */}
            <linearGradient id="vanBody" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="50%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#d97706" />
            </linearGradient>
            <linearGradient id="vanRoof" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fcd34d" />
              <stop offset="100%" stopColor="#fbbf24" />
            </linearGradient>
            <radialGradient id="wheel">
              <stop offset="0%" stopColor="#4a5568" />
              <stop offset="60%" stopColor="#2d3748" />
              <stop offset="100%" stopColor="#1a202c" />
            </radialGradient>
          </defs>
          
          {/* Shadow under van */}
          <ellipse cx="70" cy="82" rx="50" ry="5" fill="#000000" opacity="0.2" />
          
          {/* Main van body */}
          <rect x="15" y="40" width="110" height="32" rx="3" fill="url(#vanBody)" />
          
          {/* Van cabin/roof */}
          <path d="M30 40 L30 22 L45 18 L95 18 L105 22 L105 40 Z" fill="url(#vanRoof)" />
          
          {/* Windshield */}
          <path d="M47 20 L47 38 L62 38 L62 23 Z" fill="#B8D4E8" opacity="0.7" />
          <path d="M73 23 L73 38 L103 38 L103 23 Z" fill="#B8D4E8" opacity="0.7" />
          
          {/* Side windows */}
          <rect x="25" y="45" width="18" height="14" rx="2" fill="#B8D4E8" opacity="0.65" />
          <rect x="97" y="45" width="18" height="14" rx="2" fill="#B8D4E8" opacity="0.65" />
          
          {/* Door detail */}
          <line x1="70" y1="42" x2="70" y2="70" stroke="#d97706" strokeWidth="2" />
          
          {/* Door handle */}
          <rect x="75" y="54" width="6" height="2" rx="1" fill="#8b5a00" />
          
          {/* Headlights */}
          <circle cx="22" cy="50" r="3" fill="#fff8dc" opacity="0.9" />
          <circle cx="118" cy="50" r="3" fill="#fecaca" opacity="0.9" />
          
          {/* Side mirror */}
          <rect x="12" y="48" width="5" height="3" rx="1" fill="#d97706" />
          
          {/* Wheels with realistic shading */}
          <g>
            {/* Front wheel */}
            <circle cx="35" cy="72" r="12" fill="url(#wheel)" />
            <circle cx="35" cy="72" r="8" fill="#2d3748" />
            <circle cx="35" cy="72" r="4" fill="#4a5568" />
            {/* Wheel spokes */}
            <circle cx="35" cy="72" r="6" fill="none" stroke="#718096" strokeWidth="1" />
            
            {/* Back wheel */}
            <circle cx="105" cy="72" r="12" fill="url(#wheel)" />
            <circle cx="105" cy="72" r="8" fill="#2d3748" />
            <circle cx="105" cy="72" r="4" fill="#4a5568" />
            <circle cx="105" cy="72" r="6" fill="none" stroke="#718096" strokeWidth="1" />
          </g>
          
          {/* Bumper */}
          <rect x="15" y="70" width="110" height="3" rx="1" fill="#b45309" opacity="0.8" />
          
          {/* Roof rack detail */}
          <rect x="35" y="14" width="3" height="4" rx="1" fill="#9ca3af" />
          <rect x="67" y="14" width="3" height="4" rx="1" fill="#9ca3af" />
          <rect x="99" y="14" width="3" height="4" rx="1" fill="#9ca3af" />
        </svg>
      </div>

      {/* Realistic Sun with atmospheric glow */}
      <div className="absolute top-[12%] right-[12%]">
        {/* Sun glow/atmosphere */}
        <div className="absolute inset-0 w-32 h-32 -translate-x-6 -translate-y-6">
          <div className="w-full h-full rounded-full bg-yellow-200/40 dark:bg-yellow-600/20 blur-3xl" />
        </div>
        {/* Sun core */}
        <motion.div
          className="relative w-20 h-20 rounded-full bg-gradient-radial from-yellow-200 via-yellow-300 to-orange-400 dark:from-yellow-500 dark:via-yellow-600 dark:to-orange-600"
          style={{
            boxShadow: "0 0 40px rgba(251, 191, 36, 0.6)",
          }}
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Atmospheric haze for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent dark:from-transparent pointer-events-none" />
      
      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/40 pointer-events-none" />
    </div>
  );
}
