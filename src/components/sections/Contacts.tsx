'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Send,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  CheckCircle2
} from 'lucide-react';
import { FADE_UP, STAGGER_CHILDREN, GLASS_STYLES, CINEMATIC_TRANSITION } from '@/lib/motion/index';

export default function Contacts() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    await new Promise(resolve => setTimeout(resolve, 2000));
    setFormState('success');
  };

  const telegramLink = process.env.NEXT_PUBLIC_TELEGRAM_LINK || 'https://t.me/your_username';

  return (
    <section id="contact" className="py-40 bg-black relative overflow-hidden">
      {/* Cinematic Atmosphere Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(67,56,202,0.08),transparent_50%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] blur-[180px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-start">

          {/* Left Side: Contact Narrative */}
          <motion.div
            variants={STAGGER_CHILDREN}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={FADE_UP} className="flex items-center gap-4 mb-8">
              <div className="h-px w-10 bg-white/20" />
              <span className="text-zinc-500 font-medium uppercase tracking-[0.6em] text-[10px]">
                06 — the dialogue
              </span>
            </motion.div>

            <motion.h3
              variants={FADE_UP}
              className="text-6xl md:text-[100px] font-heading font-light text-white mb-12 leading-[0.85] tracking-tighter"
            >
              Начнем ваш <br /> <span className="text-zinc-700 italic">проект?</span>
            </motion.h3>

            <motion.p
              variants={FADE_UP}
              className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed mb-20 max-w-xl tracking-wide"
            >
              Готовы начать ремонт или остались вопросы?
              Напишите мне, и я проконсультирую вас по стоимости и срокам.
            </motion.p>

            <div className="space-y-14">
              {[
                { icon: Phone, label: "Телефон", value: "+7 (900) 000-00-00", href: "tel:+79000000000" },
                { icon: Mail, label: "E-mail", value: "info@example.com", href: "mailto:info@example.com" },
                { icon: MapPin, label: "Локация", value: "Москва и область", href: null },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={FADE_UP}
                  className="flex items-center gap-10 group"
                >
                  <div className={`w-20 h-20 rounded-[28px] ${GLASS_STYLES.premium} flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 transition-all duration-700 shadow-2xl`}>
                    <item.icon className="w-7 h-7 text-orange-500 group-hover:text-white transition-colors duration-700" />
                  </div>
                  <div>
                    <h4 className="text-zinc-600 text-[10px] uppercase tracking-[0.4em] font-bold mb-3">{item.label}</h4>
                    {item.href ? (
                      <a href={item.href} className="text-2xl md:text-3xl text-white font-heading font-light hover:text-orange-500 transition-colors duration-500 tracking-tight">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-2xl md:text-3xl text-white font-heading font-light tracking-tight">
                        {item.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={FADE_UP}
              className="mt-24"
            >
              <a
                href={telegramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-6 px-14 py-7 bg-[#229ED9] hover:bg-[#1e8ec4] text-white rounded-full font-bold tracking-[0.3em] text-[10px] transition-all hover:scale-105 active:scale-95 shadow-[0_20px_40px_rgba(34,158,217,0.3)]"
              >
                <MessageCircle className="w-6 h-6" />
                НАПИСАТЬ В TELEGRAM
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side: Interactive Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={CINEMATIC_TRANSITION}
            className={`${GLASS_STYLES.premium} border-white/[0.03] p-16 md:p-24 rounded-[64px] relative overflow-hidden shadow-2xl transform-gpu`}
          >
            {formState === 'success' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center p-16 bg-black/95 backdrop-blur-3xl z-10"
              >
                <div className="w-32 h-32 bg-green-500/10 rounded-full flex items-center justify-center mb-10 shadow-[0_0_50px_rgba(34,197,94,0.1)]">
                  <CheckCircle2 className="w-16 h-16 text-green-500" />
                </div>
                <h3 className="text-4xl font-heading font-light text-white mb-6 tracking-tight">Заявка получена!</h3>
                <p className="text-zinc-500 font-light text-xl">Я свяжусь с вами в ближайшее рабочее время.</p>
                <button
                  onClick={() => setFormState('idle')}
                  className="mt-16 text-orange-500 font-bold tracking-[0.4em] text-[10px] uppercase hover:text-white transition-colors"
                >
                  Отправить повторно
                </button>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="relative group">
                  <label className="block text-zinc-600 text-[10px] uppercase tracking-[0.4em] font-bold mb-6 ml-1 group-focus-within:text-orange-500 transition-colors">Имя</label>
                  <input
                    required
                    type="text"
                    placeholder="Александр"
                    className="w-full bg-transparent border-b border-zinc-800 py-5 text-white text-lg font-light focus:outline-none focus:border-orange-500 transition-colors placeholder:text-zinc-800"
                  />
                </div>
                <div className="relative group">
                  <label className="block text-zinc-600 text-[10px] uppercase tracking-[0.4em] font-bold mb-6 ml-1 group-focus-within:text-orange-500 transition-colors">Телефон</label>
                  <input
                    required
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    className="w-full bg-transparent border-b border-zinc-800 py-5 text-white text-lg font-light focus:outline-none focus:border-orange-500 transition-colors placeholder:text-zinc-800"
                  />
                </div>
              </div>

              <div className="relative group">
                <label className="block text-zinc-600 text-[10px] uppercase tracking-[0.4em] font-bold mb-6 ml-1 group-focus-within:text-orange-500 transition-colors">Тип работ</label>
                <select className="w-full bg-transparent border-b border-zinc-800 py-5 text-white text-lg font-light focus:outline-none focus:border-orange-500 transition-colors appearance-none cursor-pointer">
                  <option className="bg-zinc-950">Капитальный ремонт</option>
                  <option className="bg-zinc-950">Отделка санузла</option>
                  <option className="bg-zinc-950">Малярные работы</option>
                  <option className="bg-zinc-950">Дизайнерский ремонт</option>
                  <option className="bg-zinc-950">Другое</option>
                </select>
                <div className="absolute right-0 bottom-6 pointer-events-none text-zinc-600">
                  <Send className="w-4 h-4 rotate-90" />
                </div>
              </div>

              <div className="relative group">
                <label className="block text-zinc-600 text-[10px] uppercase tracking-[0.4em] font-bold mb-6 ml-1 group-focus-within:text-orange-500 transition-colors">Описание проекта</label>
                <textarea
                  rows={4}
                  placeholder="Опишите ваши пожелания..."
                  className="w-full bg-transparent border-b border-zinc-800 py-5 text-white text-lg font-light focus:outline-none focus:border-orange-500 transition-colors resize-none placeholder:text-zinc-800"
                ></textarea>
              </div>

              <button
                disabled={formState === 'submitting'}
                className="group relative w-full h-20 overflow-hidden rounded-full bg-white text-black font-bold tracking-[0.4em] text-[10px] md:text-xs transition-all hover:shadow-[0_0_60px_rgba(255,255,255,0.3)] disabled:opacity-50 transform-gpu active:scale-[0.98]"
              >
                <span className="relative z-10">
                  {formState === 'submitting' ? "ОТПРАВКА..." : "ОТПРАВИТЬ ЗАПРОС"}
                </span>
                <motion.div
                  className="absolute inset-0 bg-orange-500"
                  initial={{ y: "100%" }}
                  whileHover={{ y: 0 }}
                  transition={CINEMATIC_TRANSITION}
                />
              </button>

              <p className="text-zinc-700 text-[9px] text-center uppercase tracking-[0.2em] font-medium leading-relaxed max-w-xs mx-auto">
                Отправляя форму, вы подтверждаете согласие с политикой конфиденциальности
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
