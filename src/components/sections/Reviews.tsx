'use client';

import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';
import { FADE_UP, STAGGER_CHILDREN, GLASS_STYLES, CINEMATIC_TRANSITION } from '@/lib/motion/index';

const reviews = [
  {
    name: 'Александр Петров',
    role: 'Владелец квартиры в ЖК "Маяк"',
    text: 'Работа выполнена безупречно. Делали капитальный ремонт под ключ. Особенно порадовало внимание к деталям в санузле — плитка уложена идеально, стыки ровные. Рекомендую!',
    rating: 5,
  },
  {
    name: 'Мария Соколова',
    role: 'Дизайнер интерьеров',
    text: 'Сотрудничаю с мастером уже на третьем объекте. Для дизайнера важно, чтобы реализация соответствовала проекту. Здесь я всегда спокойна за результат и сроки.',
    rating: 5,
  },
  {
    name: 'Дмитрий Волков',
    role: 'Загородный дом',
    text: 'Требовалось выполнить сложную декоративную штукатурку. Результат превзошел ожидания. Человек действительно мастер своего дела, знает все тонкости материалов.',
    rating: 5,
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-40 bg-black relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.04),transparent_65%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={STAGGER_CHILDREN}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-4xl mx-auto mb-32"
        >
          <motion.div variants={FADE_UP} className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-10 bg-white/10" />
            <span className="text-zinc-500 font-medium uppercase tracking-[0.6em] text-[10px]">
              05 — the testimonials
            </span>
            <div className="h-px w-10 bg-white/10" />
          </motion.div>
          <motion.h3
            variants={FADE_UP}
            className="text-6xl md:text-[110px] font-heading font-light text-white mb-12 leading-[0.85] tracking-tighter"
          >
            Доверие <br /> <span className="text-zinc-700 italic">репутация</span>
          </motion.h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ ...CINEMATIC_TRANSITION, delay: index * 0.15 }}
              className={`${GLASS_STYLES.premium} border-white/[0.03] p-16 rounded-[56px] relative group hover:border-white/10 transition-all duration-1000 transform-gpu hover:shadow-2xl hover:shadow-orange-500/5`}
            >
              <Quote className="absolute top-14 right-14 w-14 h-14 text-zinc-900 group-hover:text-orange-500/10 transition-all duration-1000 rotate-12" />

              <div className="flex gap-2 mb-12">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-orange-500 text-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]" />
                ))}
              </div>

              <p className="text-zinc-400 text-xl md:text-2xl leading-relaxed font-light italic mb-16 relative z-10 tracking-wide group-hover:text-zinc-300 transition-colors duration-700">
                &quot;{review.text}&quot;
              </p>

              <div className="mt-auto border-t border-white/[0.05] pt-12">
                <h4 className="text-white font-heading font-light text-2xl tracking-wide group-hover:text-orange-500 transition-colors duration-700">{review.name}</h4>
                <p className="text-zinc-600 text-[10px] uppercase tracking-[0.3em] font-bold mt-4">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
