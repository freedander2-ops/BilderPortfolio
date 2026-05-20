"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import { CINEMATIC_TRANSITION, FADE_UP, STAGGER_CHILDREN, GLASS_STYLES } from "@/lib/motion/index";

const stats = [
  { label: "Лет опыта", value: "15+" },
  { label: "Проектов", value: "250+" },
  { label: "Гарантия", value: "3 года" },
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const rotate = useTransform(scrollYProgress, [0, 1], [3, -3]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center py-48 md:py-64 overflow-hidden bg-black"
      id="about"
    >
      {/* Dynamic Background Atmosphere */}
      <motion.div 
        style={{ opacity }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-[600px] h-[600px] bg-white/5 rounded-full blur-[140px]" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          
          {/* Left Side: Visual Showcase */}
          <motion.div 
            style={{ y: y1, rotate }}
            className="relative will-change-transform"
          >
            <div className="relative z-10 rounded-[48px] overflow-hidden border border-white/[0.03] aspect-[4/5] group shadow-2xl transform-gpu">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800"
                alt="Мастер за работой"
                fill
                priority
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.5s] ease-out will-change-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            </div>
            
            {/* Floating Philosophy Card */}
            <motion.div 
              style={{ y: y2 }}
              className={`absolute -bottom-16 -right-12 p-12 rounded-[40px] ${GLASS_STYLES.dark} max-w-[360px] z-20 border-white/10 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.8)] will-change-transform`}
            >
              <motion.div 
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="text-orange-500 font-bold mb-6 uppercase tracking-[0.4em] text-[10px]"
              >
                Philosophy
              </motion.div>
              <p className="text-white/90 text-lg leading-relaxed font-light italic">
                &quot;Каждый шов, каждый угол — это подпись мастера. Я не просто делаю ремонт, я создаю пространство для жизни.&quot;
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side: Narrative Content */}
          <motion.div 
            variants={STAGGER_CHILDREN}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col"
          >
            <motion.div variants={FADE_UP} className="mb-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-10 bg-white/20" />
                <span className="text-zinc-500 font-medium uppercase tracking-[0.6em] text-[10px]">
                  01 — the craftsman
                </span>
              </div>
              <h3 className="text-7xl md:text-[100px] font-heading font-light text-white mb-12 leading-[0.8] tracking-tighter">
                Максим <br /> 
                <span className="text-zinc-700 italic">Сергеевич</span>
              </h3>
              
              <p className="text-xl md:text-2xl text-zinc-400 mb-16 leading-relaxed max-w-xl font-light tracking-wide">
                С 2008 года я занимаюсь высококачественной отделкой интерьеров. Моя специализация — сложные технические решения и безупречный визуальный результат. 
              </p>

              <div className="grid grid-cols-3 gap-16 mb-16">
                {stats.map((stat, i) => (
                  <motion.div key={i} variants={FADE_UP}>
                    <div className="text-5xl font-heading font-light text-white mb-4 tracking-tighter">{stat.value}</div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 font-bold">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={FADE_UP} className="mb-20 p-10 rounded-[32px] bg-white/[0.02] border border-white/5">
                <h4 className="text-white font-heading text-xl mb-4 italic">Философия работы</h4>
                <p className="text-zinc-500 font-light leading-relaxed">
                  Я верю, что ремонт — это не просто стройка, а создание личного пространства, где каждая деталь должна служить комфорту. Мой подход основан на честности, инженерной точности и уважении к времени заказчика.
                </p>
              </motion.div>

              <motion.div variants={FADE_UP}>
                <a 
                  href="#contact"
                  className="group inline-flex items-center gap-8 text-white py-4"
                >
                  <div className="relative flex items-center justify-center">
                    <div className="w-14 h-[1px] bg-zinc-800 group-hover:w-24 group-hover:bg-orange-500 transition-all duration-700" />
                    <div className="absolute right-0 w-2.5 h-2.5 rounded-full bg-orange-500 scale-0 group-hover:scale-100 transition-all duration-500 shadow-[0_0_15px_rgba(249,115,22,0.8)]" />
                  </div>
                  <span className="uppercase tracking-[0.4em] text-[10px] font-bold group-hover:text-orange-500 transition-colors duration-500">
                    Начать проект
                  </span>
                </a>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
