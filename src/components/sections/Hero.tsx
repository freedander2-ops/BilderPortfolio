"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { CINEMATIC_TRANSITION } from "@/lib/motion/index";
import Magnetic from "../ui/Magnetic";
import TextReveal from "../ui/TextReveal";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  const y1 = useTransform(scrollY, [0, 800], [0, 400]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const scale = useTransform(scrollY, [0, 1000], [1, 1.2]);
  const blur = useTransform(scrollY, [0, 500], [0, 10]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen min-h-[800px] w-full flex items-center justify-center overflow-hidden bg-[#020202]"
    >
      {/* Cinematic Background Layer */}
      <motion.div
        style={{ y: y1, scale, filter: `blur(${blur}px)` }}
        className="absolute inset-0 z-0 will-change-transform"
      >
        {/* Deep Atmospheric Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,#1e1e3a,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_100%,#121212,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,#080808,transparent_50%)]" />

        {/* Dynamic Light Sources */}
        <motion.div
          animate={{
            opacity: [0.15, 0.35, 0.15],
            scale: [1, 1.15, 1],
            x: [0, 20, 0],
            y: [0, -10, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] bg-indigo-500/10 blur-[180px] rounded-full will-change-transform transform-gpu"
        />
        <motion.div
          animate={{
            opacity: [0.08, 0.2, 0.08],
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
            y: [0, 20, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] bg-orange-600/5 blur-[150px] rounded-full will-change-transform transform-gpu"
        />

        {/* Textured Overlay for Surface Feel */}
        <div
          className="absolute inset-0 opacity-40 grayscale mix-blend-soft-light"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1920&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </motion.div>

      {/* Finely Detailed Carbon Overlay */}
      <div className="absolute inset-0 z-[1] opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      {/* Floating Micro-Particles (Simulating Dust in Light) */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.2, 0],
              y: [-100, 100],
              x: [-50, 50]
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 1.5
            }}
            className="absolute bg-white/40 blur-[2px] rounded-full"
            style={{
              width: `${2 + i}px`,
              height: `${2 + i}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Content Layer */}
      <motion.div
        style={{ opacity }}
        className="relative z-30 text-center px-6 max-w-7xl will-change-transform"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ...CINEMATIC_TRANSITION, delay: 0.1 }}
          className="mb-14 inline-flex items-center gap-4 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_12px_rgba(249,115,22,0.8)] animate-pulse" />
          <span className="text-[10px] md:text-xs uppercase tracking-[0.6em] text-zinc-300 font-medium">
            ART OF RENOVATION • EST 2012
          </span>
        </motion.div>

        <div className="relative mb-20">
          <motion.h1
            initial={{ opacity: 0, scale: 1.1, filter: 'blur(20px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-7xl md:text-[120px] lg:text-[160px] font-heading font-light leading-[0.8] tracking-tighter"
          >
            <span className="block text-white mb-4 drop-shadow-[0_20px_50px_rgba(255,255,255,0.1)]">MAKSIM</span>
            <span className="block italic text-transparent bg-clip-text bg-gradient-to-b from-zinc-100 via-zinc-400 to-zinc-700/20">
              SERGEEVICH
            </span>
          </motion.h1>

        </div>

        <TextReveal
          text="Создание исключительных интерьеров, где технологическое совершенство встречается с искусством."
          className="text-lg md:text-2xl text-zinc-400 font-light max-w-4xl mx-auto mb-24 leading-relaxed tracking-wide"
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...CINEMATIC_TRANSITION, delay: 1.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-12"
        >
          <Magnetic>
            <a
              href="#portfolio"
              className="group relative px-14 py-7 overflow-hidden rounded-full bg-white text-black font-bold transition-all duration-500 hover:shadow-[0_0_60px_rgba(255,255,255,0.2)] transform-gpu active:scale-95 border border-white"
            >
              <span className="relative z-10 tracking-[0.25em] text-[10px] md:text-xs group-hover:text-white transition-colors duration-500">СМОТРЕТЬ РАБОТЫ</span>
              <motion.div
                className="absolute inset-0 bg-orange-500"
                initial={{ y: "100%" }}
                whileHover={{ y: 0 }}
                transition={CINEMATIC_TRANSITION}
              />
            </a>
          </Magnetic>

          <Magnetic>
            <a
              href="#contact"
              className="group relative px-14 py-7 rounded-full border border-white/20 hover:border-orange-500 transition-all duration-500 backdrop-blur-sm transform-gpu active:scale-95"
            >
              <span className="relative z-10 tracking-[0.25em] text-[10px] md:text-xs font-bold text-white group-hover:text-orange-500 transition-colors duration-500">ОБСУДИТЬ ПРОЕКТ</span>
              <div className="absolute inset-0 bg-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
            </a>
          </Magnetic>
        </motion.div>
      </motion.div>

      {/* Refined Scroll Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1.5 }}
        className="absolute bottom-12 left-12 z-30 flex items-center gap-8"
      >
        <div className="relative w-px h-32 bg-white/5 overflow-hidden">
          <motion.div
            animate={{ y: [-128, 128] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-white/40 to-transparent"
          />
        </div>
        <span className="text-[9px] uppercase tracking-[0.5em] text-white/30 font-medium rotate-90 origin-left ml-2 select-none">
          EXPLORE EXPERIENCE
        </span>
      </motion.div>
    </section>
  );
}
