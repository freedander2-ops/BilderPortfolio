"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { FADE_UP } from "@/lib/motion/variants";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Parallax effects
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.1]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Layer with Parallax */}
      <motion.div
        style={{ y: y1, scale }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-cinematic-gradient from-premium-muted/50 via-black to-black z-10" />
        <div
          className="absolute inset-0 opacity-30 grayscale contrast-125"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </motion.div>

      {/* Atmospheric Gradients */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black to-transparent opacity-80" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent opacity-80" />
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-premium-gold/5 blur-[120px] rounded-full" />
      </div>

      {/* Content Layer */}
      <motion.div
        style={{ y: y2, opacity }}
        className="relative z-20 text-center px-4 max-w-5xl"
      >
        <motion.div
          variants={FADE_UP}
          initial="initial"
          animate="animate"
          className="mb-6 inline-block"
        >
          <span className="text-xs uppercase tracking-[0.5em] text-premium-gold font-medium">
            Professional Renovation & Design
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="text-6xl md:text-8xl lg:text-9xl font-heading mb-8 leading-none tracking-tight text-gradient"
        >
          MAKSIM <br />
          <span className="italic font-light">SERGEEVICH</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-lg md:text-xl text-white/40 font-light max-w-2xl mx-auto mb-12 leading-relaxed tracking-wide"
        >
          Crafting immersive living spaces where cinematic aesthetic meets
          uncompromising technical precision.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <a
            href="#portfolio"
            className="group relative px-12 py-4 overflow-hidden rounded-full bg-white text-black font-semibold transition-all hover:scale-105 active:scale-95"
          >
            <span className="relative z-10">EXPLORE WORK</span>
            <div className="absolute inset-0 bg-premium-gold translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
          </a>
          <a
            href="#contact"
            className="px-12 py-4 rounded-full border border-white/10 glass hover:bg-white/5 transition-colors tracking-widest text-xs font-bold"
          >
            GET IN TOUCH
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/20">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-premium-gold/50 to-transparent" />
      </motion.div>
    </section>
  );
}
