'use client';

import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Clock, 
  FileText, 
  Award, 
  Handshake, 
  Sparkles 
} from 'lucide-react';
import { FADE_UP, STAGGER_CHILDREN, CINEMATIC_TRANSITION } from '@/lib/motion/index';

const benefits = [
  {
    title: 'Гарантия качества',
    description: 'Предоставляю официальную гарантию на все виды работ до 3 лет. Работаю строго по СНиП и ГОСТ.',
    icon: ShieldCheck,
  },
  {
    title: 'Соблюдение сроков',
    description: 'Четко прописываю сроки в договоре. За каждый день просрочки — материальная ответственность.',
    icon: Clock,
  },
  {
    title: 'Прозрачная смета',
    description: 'Никаких скрытых платежей. Стоимость фиксируется в начале работ и не меняется в процессе.',
    icon: FileText,
  },
  {
    title: 'Опыт 10+ лет',
    description: 'Сотни реализованных объектов: от косметического ремонта квартир до отделки загородных домов.',
    icon: Award,
  },
  {
    title: 'Работа без посредников',
    description: 'Вы общаетесь напрямую с мастером. Это экономит до 20% бюджета на услуги прорабов.',
    icon: Handshake,
  },
  {
    title: 'Чистота на объекте',
    description: 'Ежедневная уборка и вынос мусора. Сдаю объект в идеальном состоянии, готовым к жизни.',
    icon: Sparkles,
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-48 md:py-64 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-600/[0.03] blur-[180px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/[0.02] blur-[150px] rounded-full translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          variants={STAGGER_CHILDREN}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-5xl mb-32"
        >
          <motion.div variants={FADE_UP} className="flex items-center gap-4 mb-8">
            <div className="h-px w-10 bg-white/20" />
            <span className="text-zinc-500 font-medium uppercase tracking-[0.6em] text-[10px]">
              04 — the values
            </span>
          </motion.div>
          <motion.h3 
            variants={FADE_UP}
            className="text-6xl md:text-[100px] font-heading font-light text-white mb-12 leading-[0.8] tracking-tighter"
          >
            Ценности и <br /> <span className="text-zinc-700 italic">принципы</span>
          </motion.h3>
          <motion.p 
            variants={FADE_UP}
            className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed max-w-3xl tracking-wide"
          >
            Ремонт — это не просто отделка стен, это инвестиция в ваш комфорт. 
            Я делаю этот процесс максимально простым и предсказуемым.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.05] border border-white/[0.05] rounded-[40px] overflow-hidden">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
              className="p-14 bg-black hover:bg-zinc-900/40 transition-all duration-700 group relative overflow-hidden"
            >
              {/* Subtle hover background highlight */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              
              <div className="w-20 h-20 rounded-3xl bg-zinc-900/50 border border-white/[0.05] flex items-center justify-center mb-12 group-hover:bg-orange-500 transition-all duration-700 group-hover:scale-110 shadow-2xl">
                <benefit.icon className="w-10 h-10 text-orange-500 group-hover:text-white transition-colors duration-700" />
              </div>
              
              <h4 className="text-3xl font-heading font-light text-white mb-8 group-hover:text-orange-500 transition-colors duration-700 tracking-tight">
                {benefit.title}
              </h4>
              
              <p className="text-zinc-500 text-lg leading-relaxed font-light group-hover:text-zinc-300 transition-colors duration-700">
                {benefit.description}
              </p>

              {/* Corner accent */}
              <div className="absolute top-8 right-8 w-1 h-1 rounded-full bg-white/10 group-hover:bg-orange-500/50 group-hover:scale-[3] transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
