"use client";

import { motion } from "motion/react";
import { FADE_UP, STAGGER_CHILDREN, GLASS_STYLES } from "@/lib/motion/index";
import { Layers, Droplets, Zap, ShieldCheck, Microscope, Compass } from "lucide-react";

const items = [
  {
    title: "Геометрия",
    description: "Контроль вертикалей и плоскостей с допуском до 1мм на 2 метра. Используем профессиональное лазерное оборудование Bosch и Hilti.",
    icon: Compass
  },
  {
    title: "Инженерия",
    description: "Монтаж систем Rehau и Far. Индивидуальные щиты с защитой от скачков напряжения и протечек воды в каждой мокрой зоне.",
    icon: Zap
  },
  {
    title: "Материалы",
    description: "Работаем только с сертифицированными смесями Knauf и лакокрасочными покрытиями премиум-класса (Little Greene, Benjamin Moore).",
    icon: Droplets
  },
  {
    title: "Подготовка",
    description: "Многослойная подготовка поверхностей под лампу Лосева. Использование стеклохолста для защиты от микротрещин.",
    icon: Layers
  }
];

export default function Quality() {
  return (
    <section id="quality" className="py-48 md:py-64 bg-black relative overflow-hidden">
      {/* Decorative Layer */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_100%_50%,rgba(67,56,202,0.1),transparent_70%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-32 items-center mb-32">
          <motion.div 
            variants={STAGGER_CHILDREN}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <motion.div variants={FADE_UP} className="flex items-center gap-4 mb-8">
              <div className="h-px w-10 bg-orange-500/50" />
              <span className="text-zinc-500 font-medium uppercase tracking-[0.6em] text-[10px]">
                07 — standards
              </span>
            </motion.div>
            <motion.h3 
              variants={FADE_UP}
              className="text-6xl md:text-[100px] font-heading font-light text-white leading-[0.8] tracking-tighter mb-12"
            >
              Стандарты <br /> <span className="text-zinc-700 italic">качества</span>
            </motion.h3>
            <motion.p 
              variants={FADE_UP}
              className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed tracking-wide"
            >
              Мы не просто делаем ремонт. Мы создаем инженерную основу, которая прослужит десятилетиями. Каждый этап проходит внутренний технадзор.
            </motion.p>
          </motion.div>

          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-10">
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`p-12 rounded-[48px] ${GLASS_STYLES.premium} border-white/[0.03] group hover:bg-orange-500 transition-all duration-1000 shadow-2xl`}
              >
                <div className="w-16 h-16 rounded-2xl bg-zinc-900 flex items-center justify-center mb-10 group-hover:bg-white transition-colors duration-700">
                  <item.icon className="w-8 h-8 text-orange-500 group-hover:text-orange-500" />
                </div>
                <h4 className="text-2xl font-heading font-light text-white mb-6 group-hover:text-black transition-colors duration-700 tracking-tight">
                  {item.title}
                </h4>
                <p className="text-zinc-500 text-base leading-relaxed font-light group-hover:text-black/70 transition-colors duration-700">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Quality Seal CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`mt-20 p-12 md:p-16 rounded-[64px] ${GLASS_STYLES.dark} border-white/5 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left`}
        >
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-24 h-24 rounded-full border-2 border-orange-500/20 flex items-center justify-center">
              <ShieldCheck className="w-12 h-12 text-orange-500" />
            </div>
            <div>
              <h4 className="text-3xl font-heading font-light text-white mb-3">Бескомпромиссная гарантия</h4>
              <p className="text-zinc-500 text-lg font-light">3 года на все инженерные и отделочные работы по договору.</p>
            </div>
          </div>
          <a href="#contact" className="px-12 py-6 bg-white text-black font-bold tracking-[0.3em] text-[10px] rounded-full hover:bg-orange-500 hover:text-white transition-all duration-500">
            ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ
          </a>
        </motion.div>
      </div>
    </section>
  );
}
