"use client";

import { motion } from "motion/react";
import { FADE_UP, STAGGER_CHILDREN, GLASS_STYLES, CINEMATIC_TRANSITION } from "@/lib/motion/index";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "С чего начать ремонт, если есть только ключи?",
    answer: "Начните с консультации и замера. Мы оценим состояние объекта, обсудим ваши пожелания и составим первичную смету. Также на этом этапе мы решим, нужен ли вам полный дизайн-проект или достаточно технического плана."
  },
  {
    question: "Работаете ли вы по договору и есть ли гарантия?",
    answer: "Да, работа ведется строго по договору. В нем фиксируются сроки, стоимость и этапы работ. Гарантия на все виды отделочных и инженерных работ составляет 3 года."
  },
  {
    question: "Помогаете ли вы с выбором и закупкой материалов?",
    answer: "Конечно. Я предоставляю список проверенных поставщиков с моими партнерскими скидками. Также могу взять на себя полную комплектацию объекта черновыми и чистовыми материалами."
  },
  {
    question: "Какова средняя стоимость квадратного метра отделки?",
    answer: "Стоимость всегда индивидуальна и зависит от сложности проекта. Премиальная отделка 'под ключ' начинается от 25 000 руб/м². Точную цифру можно назвать только после осмотра объекта и изучения ТЗ."
  },
  {
    question: "Как осуществляется контроль качества на объекте?",
    answer: "Я осуществляю личный контроль на каждом этапе. Для сложных инженерных систем проводятся технические испытания (опрессовка и т.д.). Вы также будете получать еженедельные фото и видео отчеты о ходе работ."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-48 md:py-64 bg-black relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,rgba(249,115,22,0.03),transparent_50%)] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
          
          <motion.div
            variants={STAGGER_CHILDREN}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={FADE_UP} className="flex items-center gap-4 mb-8">
              <div className="h-px w-10 bg-white/20" />
              <span className="text-zinc-500 font-medium uppercase tracking-[0.6em] text-[10px]">
                08 — the answers
              </span>
            </motion.div>
            <motion.h3 
              variants={FADE_UP}
              className="text-6xl md:text-8xl font-heading font-light text-white leading-[0.9] tracking-tighter mb-12"
            >
              Вопросы и <br /> <span className="text-zinc-700 italic">ответы</span>
            </motion.h3>
            <motion.p 
              variants={FADE_UP}
              className="text-xl text-zinc-400 font-light leading-relaxed max-w-md tracking-wide"
            >
              Собрал ответы на самые частые вопросы, чтобы наше сотрудничество было максимально прозрачным с самого начала.
            </motion.p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ...CINEMATIC_TRANSITION, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${GLASS_STYLES.premium} border-white/[0.03] rounded-[32px] overflow-hidden`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-8 md:p-10 flex items-center justify-between text-left group"
                >
                  <span className="text-xl md:text-2xl text-white font-heading font-light group-hover:text-orange-500 transition-colors duration-500 tracking-tight pr-8">
                    {faq.question}
                  </span>
                  <div className={`w-12 h-12 rounded-full border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-orange-500 transition-all duration-500 ${openIndex === index ? 'bg-orange-500 border-orange-500' : ''}`}>
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-white" />
                    ) : (
                      <Plus className="w-5 h-5 text-zinc-500 group-hover:text-orange-500" />
                    )}
                  </div>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{ height: openIndex === index ? 'auto' : 0, opacity: openIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="p-8 md:p-10 pt-0 text-zinc-500 text-lg font-light leading-relaxed border-t border-white/5 mt-2">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
