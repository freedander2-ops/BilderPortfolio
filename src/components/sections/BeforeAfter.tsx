"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { FADE_UP, STAGGER_CHILDREN, CINEMATIC_TRANSITION } from "@/lib/motion/index";

const comparisonItems = [
  {
    title: "Санузел в ЖК 'Пресня'",
    before: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&q=80&w=1200",
    after: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=1200",
    description: "Полная перепланировка, замена коммуникаций и укладка широкоформатного керамогранита с запилом под 45°."
  }
];

export default function BeforeAfter() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(Math.max(position, 0), 100));
  };

  return (
    <section id="before-after" className="py-48 md:py-64 bg-black overflow-hidden relative">
       <div className="container mx-auto px-6 relative z-10">
          <motion.div
            variants={STAGGER_CHILDREN}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mb-32 text-center"
          >
            <motion.div variants={FADE_UP} className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-10 bg-orange-500/50" />
              <span className="text-zinc-500 font-medium uppercase tracking-[0.6em] text-[10px]">
                06 — transformation
              </span>
              <div className="h-px w-10 bg-orange-500/50" />
            </motion.div>
            <motion.h3
              variants={FADE_UP}
              className="text-6xl md:text-[100px] font-heading font-light text-white leading-[0.8] tracking-tighter mb-12"
            >
              До и <span className="text-zinc-700 italic">После</span>
            </motion.h3>
          </motion.div>

          {comparisonItems.map((item, i) => (
            <div key={i} className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={CINEMATIC_TRANSITION}
                viewport={{ once: true }}
                className="relative aspect-[16/9] rounded-[48px] overflow-hidden border border-white/5 cursor-col-resize select-none shadow-2xl"
                ref={containerRef}
                onMouseMove={handleMove}
                onTouchMove={handleMove}
              >
                {/* After Image */}
                <Image
                  src={item.after}
                  alt="После"
                  fill
                  className="object-cover"
                  priority
                />

                {/* Before Image (Clipped) */}
                <div
                  className="absolute inset-0 z-10 overflow-hidden pointer-events-none"
                  style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
                >
                   <Image
                    src={item.before}
                    alt="До"
                    fill
                    className="object-cover grayscale"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>

                {/* Slider Handle */}
                <div
                  className="absolute top-0 bottom-0 z-20 w-1 bg-white flex items-center justify-center pointer-events-none"
                  style={{ left: `${sliderPos}%` }}
                >
                  <div className="w-12 h-12 rounded-full bg-white border-4 border-black/10 shadow-2xl flex items-center justify-center">
                    <div className="flex gap-1">
                      <div className="w-1 h-3 bg-zinc-300 rounded-full" />
                      <div className="w-1 h-3 bg-zinc-300 rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Labels */}
                <div className="absolute top-10 left-10 z-30 px-6 py-3 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[10px] uppercase tracking-widest font-bold text-white">
                  ДО
                </div>
                <div className="absolute top-10 right-10 z-30 px-6 py-3 rounded-full bg-orange-500/80 backdrop-blur-md border border-white/10 text-[10px] uppercase tracking-widest font-bold text-white">
                  ПОСЛЕ
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="mt-16 text-center"
              >
                <h4 className="text-3xl font-heading font-light text-white mb-6 tracking-tight">{item.title}</h4>
                <p className="text-zinc-500 text-xl font-light leading-relaxed max-w-3xl mx-auto">{item.description}</p>
              </motion.div>
            </div>
          ))}
       </div>
    </section>
  );
}
