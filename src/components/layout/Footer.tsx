"use client";

import { motion } from "motion/react";
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  Instagram, 
  ArrowUpRight 
} from "lucide-react";
import { GLASS_STYLES } from "@/lib/motion/index";
import Magnetic from "../ui/Magnetic";

const navLinks = [
  { name: "Обо мне", href: "#about" },
  { name: "Услуги", href: "#services" },
  { name: "Портфолио", href: "#portfolio" },
  { name: "Процесс", href: "#process" },
  { name: "FAQ", href: "#faq" },
  { name: "Контакты", href: "#contact" },
];

export default function Footer() {
  const telegramLink = process.env.NEXT_PUBLIC_TELEGRAM_LINK || "https://t.me/your_username";

  return (
    <footer className="bg-black border-t border-white/5 pt-32 pb-16 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Top CTA Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 mb-40 items-center">
          <div>
            <h3 className="text-5xl md:text-7xl font-heading font-light text-white mb-8 tracking-tighter">
              Готовы обсудить <br /> <span className="text-zinc-700 italic">ваш объект?</span>
            </h3>
            <p className="text-xl text-zinc-500 font-light max-w-md leading-relaxed">
              Напишите мне в удобном мессенджере или оставьте заявку через форму. Я отвечу в течение часа.
            </p>
          </div>
          <div className="flex flex-wrap gap-8">
            <Magnetic>
              <a 
                href={telegramLink}
                className="group relative px-12 py-6 rounded-full bg-[#229ED9] text-white font-bold tracking-widest text-[10px] flex items-center gap-4 overflow-hidden"
              >
                <MessageCircle className="w-5 h-5" />
                TELEGRAM
                <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
              </a>
            </Magnetic>
            <Magnetic>
              <a 
                href="https://wa.me/79000000000"
                className="group relative px-12 py-6 rounded-full bg-[#25D366] text-white font-bold tracking-widest text-[10px] flex items-center gap-4 overflow-hidden"
              >
                <MessageCircle className="w-5 h-5" />
                WHATSAPP
                <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
              </a>
            </Magnetic>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
          <div className="col-span-1 lg:col-span-1">
            <h4 className="text-white font-heading text-2xl mb-8">Maksim S.</h4>
            <p className="text-zinc-600 text-sm leading-relaxed mb-8">
              Премиальная отделка интерьеров в Москве и области. 15 лет безупречной репутации.
            </p>
            <div className="flex gap-6">
              {[Instagram, MessageCircle, Mail].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-500 hover:text-white hover:border-white transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h5 className="text-zinc-400 text-[10px] uppercase tracking-[0.4em] font-bold mb-10">Навигация</h5>
            <ul className="space-y-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-zinc-600 hover:text-orange-500 transition-colors text-sm uppercase tracking-widest">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-zinc-400 text-[10px] uppercase tracking-[0.4em] font-bold mb-10">Контакты</h5>
            <ul className="space-y-8">
              <li>
                <p className="text-zinc-700 text-[9px] uppercase tracking-widest mb-2">Телефон</p>
                <a href="tel:+79000000000" className="text-white text-xl font-heading font-light hover:text-orange-500 transition-colors">
                  +7 (900) 000-00-00
                </a>
              </li>
              <li>
                <p className="text-zinc-700 text-[9px] uppercase tracking-widest mb-2">E-mail</p>
                <a href="mailto:info@example.com" className="text-white text-xl font-heading font-light hover:text-orange-500 transition-colors">
                  info@example.com
                </a>
              </li>
            </ul>
          </div>

          <div>
             <h5 className="text-zinc-400 text-[10px] uppercase tracking-[0.4em] font-bold mb-10">Локация</h5>
             <p className="text-white text-xl font-heading font-light leading-relaxed">
               Москва, <br /> Московская область
             </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-zinc-700 text-[9px] uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} MAKSIM SERGEEVICH. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-12">
            <a href="#" className="text-zinc-700 text-[9px] uppercase tracking-[0.3em] hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" className="text-zinc-700 text-[9px] uppercase tracking-[0.3em] hover:text-white transition-colors">Пользовательское соглашение</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
