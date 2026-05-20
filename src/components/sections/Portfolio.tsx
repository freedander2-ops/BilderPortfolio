'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { projects } from '@/data/projects';
import CurtainReveal from '../ui/media/CurtainReveal';
import FloatingDepth from '../ui/media/FloatingDepth';
import StackedGallery from '../ui/media/StackedGallery';
import { CINEMATIC_TRANSITION, GLASS_STYLES } from '@/lib/motion/index';

export default function Portfolio() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-85%']);
  const backgroundBlur = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 10, 10, 0]);

  return (
    <section ref={targetRef} className="relative h-[800vh] bg-black" id="portfolio">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">

        {/* Background Atmosphere Transition */}
        <motion.div
          style={{ backdropFilter: `blur(${backgroundBlur}px)` }}
          className="absolute inset-0 pointer-events-none z-0"
        />

        {/* Section Header Overlay */}
        <div className="absolute top-24 left-10 md:left-24 z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={CINEMATIC_TRANSITION}
            className="flex items-center gap-6 mb-6"
          >
            <div className="h-px w-12 bg-white/20" />
            <p className="text-[10px] uppercase tracking-[0.6em] text-zinc-500 font-medium">
              03 — Systemic Showcase
            </p>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ...CINEMATIC_TRANSITION, delay: 0.1 }}
            className="text-7xl md:text-[140px] font-heading font-light text-white leading-[0.8] tracking-tighter"
          >
            Storytelling
          </motion.h2>
        </div>

        {/* Horizontal Scrolling Gallery */}
        <motion.div style={{ x }} className="flex gap-40 px-24 md:px-64 items-center will-change-transform">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className={`group relative h-[80vh] w-[90vw] md:w-[85vw] flex-shrink-0 overflow-hidden rounded-[64px] ${GLASS_STYLES.premium} border-white/5 transition-all duration-1000 will-change-transform transform-gpu flex flex-col md:flex-row`}
            >
              {/* Media Section */}
              <div className="relative w-full md:w-3/5 h-1/2 md:h-full overflow-hidden">
                {project.layoutType === 'curtain' && (
                  <CurtainReveal src={project.mainImage} alt={project.title} />
                )}
                {project.layoutType === 'floating' && (
                  <FloatingDepth src={project.mainImage} alt={project.title} />
                )}
                {project.layoutType === 'stacked' && (
                   <StackedGallery images={[project.mainImage, ...project.gallery.map(m => m.url)]} />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 pointer-events-none" />
              </div>

              {/* Story Section */}
              <div className="relative w-full md:w-2/5 h-1/2 md:h-full p-12 md:p-20 flex flex-col justify-center z-20">
                <motion.div
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.5 }}
                   className="max-w-xl"
                >
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                    <p className="text-orange-500 text-[10px] uppercase tracking-[0.4em] font-bold">
                      {project.category} • {project.year}
                    </p>
                  </div>

                  <h3 className="text-4xl md:text-6xl font-heading font-light text-white mb-10 leading-[0.9] tracking-tight group-hover:text-orange-50 transition-colors duration-700">
                    {project.title}
                  </h3>

                  <p className="text-zinc-600 text-[10px] uppercase tracking-[0.3em] font-bold mb-4">The Challenge</p>
                  <p className="text-zinc-400 text-lg font-light leading-relaxed mb-10">
                    {project.description}
                  </p>

                  <p className="text-zinc-600 text-[10px] uppercase tracking-[0.3em] font-bold mb-4">The Result</p>
                  <p className="text-zinc-500 text-base font-light leading-relaxed italic mb-12">
                    &quot;{project.fullStory.substring(0, 150)}...&quot;
                  </p>

                  <div className="flex flex-wrap gap-4 mb-14">
                    {project.features.map(f => (
                      <span key={f} className="px-4 py-2 rounded-full border border-white/10 text-[9px] uppercase tracking-widest text-zinc-500">
                        {f}
                      </span>
                    ))}
                  </div>

                  <a href={`#project-${project.slug}`} className="inline-flex items-center gap-6 group/btn">
                    <div className="w-12 h-[1px] bg-zinc-800 group-hover/btn:w-20 group-hover/btn:bg-orange-500 transition-all duration-700" />
                    <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-zinc-400 group-hover/btn:text-white transition-colors">View Deep Dive</span>
                  </a>
                </motion.div>

                {/* Index Background */}
                <div className="absolute top-10 right-10 text-white/[0.02] font-heading text-[180px] leading-none font-light select-none pointer-events-none">
                  0{project.id}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Dynamic Scroll Progress Indicator */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 w-64 h-[1px] bg-white/5 hidden md:block">
        <motion.div
          style={{ scaleX: scrollYProgress }}
          className="h-full bg-gradient-to-r from-orange-500 to-white origin-left shadow-[0_0_10px_rgba(249,115,22,0.5)]"
        />
      </div>
    </section>
  );
}
