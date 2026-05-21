"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

interface FloatingDepthProps {
  src: string;
  alt: string;
  title?: string;
}

export default function FloatingDepth({ src, alt, title }: FloatingDepthProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);

  return (
    <div ref={containerRef} className="relative w-full h-full p-20 flex items-center justify-center">
      <motion.div 
        style={{ y, scale }}
        className="relative w-full h-full max-w-4xl shadow-2xl rounded-[64px] overflow-hidden transform-gpu"
      >
        <Image src={src} alt={alt} fill className="object-cover" />
        <div className="absolute inset-0 bg-black/20" />
        
        {title && (
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="absolute bottom-12 left-12 z-10"
          >
            <h4 className="text-white font-heading text-4xl">{title}</h4>
          </motion.div>
        )}
      </motion.div>
      
      {/* Floating accent elements */}
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [100, -100]) }}
        className="absolute top-1/4 right-0 w-32 h-32 bg-orange-500/10 blur-3xl rounded-full"
      />
    </div>
  );
}
