import { motion } from "motion/react";
import { useEffect, useState } from "react";
import backgroundImage from 'figma:asset/34a29761784977870633c9d782f4f48627520f26.png';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  delay: number;
  duration: number;
}

export function MountainSunriseBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate floating light particles (like dust in sunbeams)
    const generatedParticles: Particle[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: 100 + Math.random() * 20, // Start below screen
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.4 + 0.2,
      delay: Math.random() * 10,
      duration: Math.random() * 20 + 15, // 15-35 seconds
    }));

    setParticles(generatedParticles);
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
      
      {/* Subtle overlay gradient for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
      
      {/* Warm glow overlay to enhance the sunset feel */}
      <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 via-transparent to-cyan-900/10 pointer-events-none" />

      {/* Floating light particles (atmospheric dust in sunbeams) */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white/80"
          style={{
            left: `${particle.x}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            boxShadow: `0 0 ${particle.size * 3}px rgba(255,255,255,0.6)`,
          }}
          initial={{ y: particle.y + "%", opacity: 0 }}
          animate={{
            y: [particle.y + "%", (particle.y - 120) + "%"],
            x: [0, Math.sin(particle.id) * 30],
            opacity: [0, particle.opacity, particle.opacity, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear",
          }}
        />
      ))}

      {/* Lens flare effect near the sun area */}
      <div className="absolute top-[35%] left-1/2 -translate-x-1/2 w-96 h-96 pointer-events-none">
        <motion.div
          className="absolute inset-0 rounded-full bg-orange-300/10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            filter: "blur(40px)",
          }}
        />
      </div>

      {/* Secondary lens flare */}
      <div className="absolute top-[30%] left-[55%] w-64 h-64 pointer-events-none">
        <motion.div
          className="absolute inset-0 rounded-full bg-yellow-200/8"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          style={{
            filter: "blur(30px)",
          }}
        />
      </div>

      {/* Atmospheric haze in the distance */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-cyan-900/5 pointer-events-none" />
      
      {/* Very subtle vignette for depth */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none" 
        style={{
          background: "radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.4) 100%)",
        }}
      />

      {/* Subtle film grain for realism */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3.5' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
