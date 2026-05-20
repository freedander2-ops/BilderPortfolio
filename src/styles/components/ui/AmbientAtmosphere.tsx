"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function AmbientAtmosphere() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Moving Ambient Gradients */}
      <motion.div 
        style={{ y: y1, rotate }}
        className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-indigo-500/5 blur-[180px] rounded-full animate-pulse transform-gpu" 
      />
      <motion.div 
        style={{ y: y2, rotate: -rotate }}
        className="absolute top-[40%] -right-[15%] w-[60vw] h-[60vw] bg-orange-600/[0.03] blur-[150px] rounded-full transform-gpu" 
      />
      
      {/* Floating Highlights */}
      <motion.div
        animate={{ 
          opacity: [0.1, 0.3, 0.1],
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/3 w-64 h-64 bg-white/5 blur-[120px] rounded-full"
      />

      {/* Global Grain Texture Layer */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
    </div>
  );
}
