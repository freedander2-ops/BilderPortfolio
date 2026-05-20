"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { FADE_UP, STAGGER_CHILDREN, GLASS_STYLES, CINEMATIC_TRANSITION } from "@/lib/motion/index";
import { CheckCircle2, Clock, MapPin, Hammer, Shield, PencilRuler } from "lucide-react";

const steps = [
  {
    title: "Консультация и Замер",
    description: "Первая встреча на объекте. Обсуждаем ваши пожелания, делаем лазерные замеры и оцениваем техническое состояние помещения.",
    icon: PencilRuler,
    details: ["Лазерное сканирование", "Анализ стен и полов", "Первичная смета"]
  },
  {
    title: "Проектирование и Планирование",
    description: "Разрабатываем план работ, график поставок и детальную смету. Согласовываем этапы и фиксируем сроки в договоре.",
    icon: Clock,
    details: ["Инженерные планы", "График производства", "Подбор материалов"]
  },
  {
    title: "Черновые и Инженерные работы",
    description: "Демонтаж, возведение стен, прокладка коммуникаций. Основа вашего будущего комфорта закладывается здесь.",
    icon: CheckCircle2,
    details: ["Электромонтаж", "Сантехника", "Выравнивание стен"]
  },
  {
    title: "Чистовая отделка",
    description: "Самый ответственный этап. Укладка плитки, малярные работы, установка освещения. Каждый миллиметр имеет значение.",
    icon: CheckCircle2,
    details: ["Широкоформатный керамогранит", "Премиальная покраска", "Декор"]
  },
  {
    title: "Сдача объекта",
    description: "Финальная уборка, проверка всех систем и передача ключей. Вы заезжаете в пространство, готовое для жизни.",
    icon: Shield,
    details: ["Технический аудит", "Клининг", "Гарантийный сертификат"]
  }
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const pathLength = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);

  return (
    <section ref={containerRef} id="process" className="py-48 md:py-64 bg-black relative overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(67,56,202,0.05),transparent_50%)] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          variants={STAGGER_CHILDREN}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-32"
        >
          <motion.div variants={FADE_UP} className="flex items-center gap-4 mb-8">
            <div className="h-px w-10 bg-orange-500/50" />
            <span className="text-zinc-500 font-medium uppercase tracking-[0.6em] text-[10px]">
              05 — flow
            </span>
          </motion.div>
          <motion.h3 
            variants={FADE_UP}
            className="text-6xl md:text-8xl font-heading font-light text-white leading-[0.9] tracking-tighter"
          >
            Путь к идеальному <br /> <span className="text-zinc-700 italic">результату</span>
          </motion.h3>
        </motion.div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[1px] bg-zinc-900 -translate-x-1/2">
            <motion.div 
              style={{ scaleY: pathLength }}
              className="absolute top-0 left-0 w-full h-full bg-orange-500 origin-top shadow-[0_0_15px_rgba(249,115,22,0.5)]"
            />
          </div>

          <div className="space-y-32">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative flex flex-col md:flex-row items-center">
                  {/* Timeline Node */}
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-black border-2 border-orange-500 z-20"
                  />

                  <div className={`w-full md:w-1/2 pl-24 md:pl-0 ${isEven ? 'md:pr-32 md:text-right' : 'md:pl-32 md:order-last md:text-left'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={CINEMATIC_TRANSITION}
                      viewport={{ once: true }}
                      className={`p-10 rounded-[40px] ${GLASS_STYLES.premium} border-white/[0.03] group hover:border-orange-500/20 transition-all duration-700`}
                    >
                      <div className={`flex items-center gap-6 mb-8 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                        <div className="w-16 h-16 rounded-2xl bg-zinc-900 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-700">
                          <step.icon className="w-7 h-7 text-orange-500 group-hover:text-white transition-colors" />
                        </div>
                        <span className="text-zinc-700 font-heading text-4xl font-light">0{index + 1}</span>
                      </div>
                      
                      <h4 className="text-3xl font-heading font-light text-white mb-6 group-hover:text-orange-500 transition-colors duration-700">{step.title}</h4>
                      <p className="text-zinc-500 text-lg font-light leading-relaxed mb-10">{step.description}</p>
                      
                      <div className={`flex flex-wrap gap-4 ${isEven ? 'md:justify-end' : ''}`}>
                        {step.details.map((detail, i) => (
                          <span key={i} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] text-zinc-400 uppercase tracking-widest font-bold">
                            {detail}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
