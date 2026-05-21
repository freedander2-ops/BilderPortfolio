"use client";

import { motion } from "motion/react";
import { FADE_UP, STAGGER_CHILDREN, GLASS_STYLES } from "@/lib/motion/index";
import { Shield, Medal, Star, Users } from "lucide-react";

const trustItems = [
  {
    icon: Shield,
    label: "Безопасность",
    value: "100%",
    description: "Прохождение всех технических проверок и испытаний инженерии."
  },
  {
    icon: Medal,
    label: "Опыт",
    value: "15+",
    description: "Лет в сфере премиальной отделки и управления объектами."
  },
  {
    icon: Star,
    label: "Рейтинг",
    value: "5.0",
    description: "Средний балл по отзывам в независимых сервисах и агрегаторах."
  },
  {
    icon: Users,
    label: "Команда",
    value: "20+",
    description: "Проверенных узкопрофильных специалистов под моим руководством."
  }
];

export default function Trust() {
  return (
    <section className="py-48 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {trustItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`p-12 rounded-[48px] ${GLASS_STYLES.dark} border-white/5 text-center group hover:border-orange-500/20 transition-all duration-700`}
            >
              <div className="w-20 h-20 rounded-3xl bg-zinc-900 mx-auto flex items-center justify-center mb-10 group-hover:bg-orange-500 transition-all duration-700">
                <item.icon className="w-8 h-8 text-orange-500 group-hover:text-white transition-colors" />
              </div>
              <div className="text-5xl font-heading text-white mb-4">{item.value}</div>
              <div className="text-[10px] uppercase tracking-[0.4em] text-zinc-600 font-bold mb-6 group-hover:text-orange-500 transition-colors">
                {item.label}
              </div>
              <p className="text-zinc-500 text-sm font-light leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        {/* Cinematic Divider */}
        <div className="mt-48 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>
    </section>
  );
}
