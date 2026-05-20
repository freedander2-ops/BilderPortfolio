'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import { CINEMATIC_TRANSITION, GLASS_STYLES } from '@/lib/motion/index';

const projects = [
  {
    id: 1,
    title: 'Минимализм в ЖК "Сити"',
    category: 'Капитальный ремонт',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop',
    description: 'Интеграция теневых профилей и бесщелевых примыканий. Безупречная геометрия стен и скрытое освещение.'
  },
  {
    id: 2,
    title: 'Пентхаус Art Residence',
    category: 'Дизайнерская отделка',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop',
    description: 'Работа с широкоформатным керамогранитом 1200x2400. Монтаж сложного инженерного освещения.'
  },
  {
    id: 3,
    title: 'Лофт на Покровке',
    category: 'Реставрация и инженерия',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
    description: 'Открытые коммуникации в стиле индустриальный шик. Сохранение исторической фактуры кирпича.'
  },
  {
    id: 4,
    title: 'Вилла в Барвихе',
    category: 'Премиальный малярный сервис',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop',
    description: 'Идеально гладкие стены под лампу Лосева. Использование экологичных английских красок.'
  }
];

export default function Portfolio() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-65%']);
  const backgroundBlur = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 10, 10, 0]);

  return (
    <section ref={targetRef} className="relative h-[450vh] bg-black" id="portfolio">
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
              03 — Selected Projects
            </p>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ...CINEMATIC_TRANSITION, delay: 0.1 }}
            className="text-7xl md:text-[140px] font-heading font-light text-white leading-[0.8] tracking-tighter"
          >
            Showcase
          </motion.h2>
        </div>

        {/* Horizontal Scrolling Gallery */}
        <motion.div style={{ x }} className="flex gap-16 md:gap-32 px-20 md:px-48 will-change-transform">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ clipPath: 'inset(10% 20% 10% 20% round 48px)', opacity: 0 }}
              whileInView={{ clipPath: 'inset(0% 0% 0% 0% round 48px)', opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative h-[68vh] w-[85vw] md:w-[65vw] flex-shrink-0 overflow-hidden rounded-[48px] ${GLASS_STYLES.premium} border-white/5 transition-all duration-1000 will-change-transform transform-gpu`}
            >
              {/* Image Layer with Zoom & Filter */}
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="100vw"
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-[transform,filter] duration-[2s] cubic-bezier(0.22, 1, 0.36, 1) will-change-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-90 group-hover:opacity-50 transition-opacity duration-1000" />

                {/* Secondary light overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/5 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              </div>

              {/* Content Overlay */}
              <div className="relative h-full p-14 md:p-24 flex flex-col justify-end z-20">
                <motion.div
                   className="max-w-3xl"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-3 mb-6"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                    <p className="text-orange-500 text-[10px] uppercase tracking-[0.4em] font-bold">
                      {project.category}
                    </p>
                  </motion.div>

                  <h3 className="text-5xl md:text-7xl font-heading font-light text-white mb-8 leading-[0.9] tracking-tight group-hover:text-orange-50 transition-colors duration-700">
                    {project.title}
                  </h3>

                  <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-1000 delay-200">
                    {project.description}
                  </p>
                </motion.div>
              </div>

              {/* Refined Corner Index */}
              <div className="absolute top-14 right-14 text-white/5 font-heading text-[120px] leading-none font-light group-hover:text-orange-500/10 transition-colors duration-1000 select-none">
                0{project.id}
              </div>

              {/* Interaction Hint */}
              <div className="absolute bottom-10 right-14 opacity-0 group-hover:opacity-40 transition-opacity duration-700 delay-500">
                <span className="text-[10px] text-white tracking-[0.3em] font-medium uppercase">View Details</span>
              </div>

              {/* 3D Depth Card Effect Overlay */}
              <div className="absolute inset-0 pointer-events-none group-hover:bg-gradient-to-tr from-white/10 to-transparent mix-blend-overlay transition-opacity duration-1000" />
            </motion.div>
          ))}

          {/* Enhanced Final CTA slide */}
          <div className={`h-[68vh] w-[85vw] md:w-[65vw] flex-shrink-0 flex flex-col justify-center items-center rounded-[48px] border border-white/10 ${GLASS_STYLES.dark} will-change-transform transform-gpu`}>
             <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={CINEMATIC_TRANSITION}
               className="text-center px-10"
             >
               <h3 className="text-6xl md:text-[100px] font-heading font-light text-white mb-16 tracking-tighter leading-none">
                 Ready to <br /> <span className="text-orange-500 italic">transform?</span>
               </h3>
               <a
                 href="#contact"
                 className="group relative inline-flex items-center gap-8 px-16 py-8 rounded-full bg-white text-black font-bold tracking-[0.3em] text-[10px] md:text-xs overflow-hidden transition-all hover:scale-105 active:scale-95"
               >
                 <span className="relative z-10">ОСТАВИТЬ ЗАЯВКУ</span>
                 <motion.div
                   className="absolute inset-0 bg-orange-500"
                   initial={{ y: "100%" }}
                   whileHover={{ y: 0 }}
                   transition={CINEMATIC_TRANSITION}
                 />
               </a>
             </motion.div>
          </div>
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
