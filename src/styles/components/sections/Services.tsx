"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { FADE_UP, STAGGER_CHILDREN, GLASS_STYLES, CINEMATIC_TRANSITION } from "@/lib/motion/index";

const services = [
  {
    title: "Капитальный ремонт",
    description: "Комплексная трансформация пространства: от перепланировки до финального декора. Контроль всех этапов.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800",
    id: "01"
  },
  {
    title: "Высокоточная плитка",
    description: "Работа с крупным форматом, запилы под 45°, эпоксидная затирка. Идеальная геометрия ваших ванных комнат.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
    id: "02"
  },
  {
    title: "Малярное искусство",
    description: "Подготовка стен под лампу Лосева, безвоздушная покраска, декоративные штукатурки любой сложности.",
    image: "https://images.unsplash.com/photo-1562664377-709f2c337eb2?auto=format&fit=crop&q=80&w=800",
    id: "03"
  },
  {
    title: "Инженерные решения",
    description: "Проектирование и монтаж систем электроснабжения и водоснабжения с учетом современных стандартов комфорта.",
    image: "https://images.unsplash.com/photo-1558223108-630d93211d81?auto=format&fit=crop&q=80&w=800",
    id: "04"
  }
];

export default function Services() {
  return (
    <section className="bg-black py-48 md:py-64 relative overflow-hidden" id="services">
      {/* Decorative Atmosphere Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(30,30,60,0.15),transparent_50%)] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(60,30,30,0.05),transparent_50%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/5 blur-[160px] rounded-full pointer-events-none animate-pulse" />

      <div className="container mx-auto px-6 relative z-10">
        
        <motion.div 
          variants={STAGGER_CHILDREN}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col mb-32"
        >
          <motion.div variants={FADE_UP} className="flex items-center gap-4 mb-8">
            <div className="h-px w-10 bg-orange-500/50" />
            <span className="text-zinc-500 font-medium uppercase tracking-[0.6em] text-[10px]">
              02 — expertise
            </span>
          </motion.div>
          <motion.h3 
            variants={FADE_UP}
            className="text-6xl md:text-8xl font-heading font-light text-white leading-[0.9] tracking-tighter"
          >
            Искусство <span className="text-zinc-700 italic">деталей</span>
          </motion.h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ...CINEMATIC_TRANSITION, delay: i * 0.15 }}
              viewport={{ once: true, margin: "-50px" }}
              className={`group relative h-[550px] overflow-hidden rounded-[56px] ${GLASS_STYLES.premium} border-white/[0.03] hover:border-white/10 transition-all duration-700 transform-gpu`}
            >
              {/* Background Image Layer */}
              <div className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-1000 ease-out">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover opacity-20 group-hover:opacity-40 group-hover:scale-105 transition-all duration-[2s] will-change-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
              </div>

              {/* Index Number */}
              <div className="text-zinc-900 font-heading text-[120px] leading-none absolute top-12 right-12 select-none group-hover:text-orange-500/5 transition-colors duration-1000">
                {service.id}
              </div>

              {/* Content */}
              <div className="relative h-full p-14 lg:p-20 flex flex-col justify-end z-20">
                <h4 className="text-4xl md:text-5xl text-white font-heading font-light mb-8 group-hover:text-orange-500 transition-colors duration-700 tracking-tight">
                  {service.title}
                </h4>
                
                <p className="text-zinc-500 text-lg md:text-xl max-w-sm leading-relaxed group-hover:text-zinc-300 transition-colors duration-700 font-light mb-12">
                  {service.description}
                </p>

                <div className="flex items-center gap-6 opacity-0 translate-x-[-20px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700">
                   <div className="w-12 h-px bg-orange-500" />
                   <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-orange-500">Explore Solution</span>
                </div>
              </div>
              
              {/* Hover highlight overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
