'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { GLASS_STYLES, CINEMATIC_TRANSITION } from '@/lib/motion/index';

const navLinks = [
  { name: 'О мастере', href: '#about' },
  { name: 'Услуги', href: '#services' },
  { name: 'Портфолио', href: '#portfolio' },
  { name: 'Отзывы', href: '#reviews' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled ? 'py-6' : 'py-12'
      }`}
    >
      <div className="container mx-auto px-6">
        <nav className={`flex items-center justify-between px-10 md:px-14 py-4 md:py-5 rounded-full transition-all duration-700 ${
          isScrolled
            ? 'bg-black/60 backdrop-blur-2xl border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.5)]'
            : 'bg-transparent'
        }`}>
          {/* Logo */}
          <a href="#" className="group flex items-center gap-2">
            <span className="text-2xl font-heading font-light tracking-tighter text-white">
              MA<span className="text-orange-500 italic">K</span>SIM
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group relative text-[10px] uppercase tracking-[0.4em] font-bold text-zinc-400 hover:text-white transition-colors"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-orange-500 transition-all duration-500 group-hover:w-full" />
              </a>
            ))}
            <a
              href="#contact"
              className="group relative px-10 py-3.5 bg-white text-black text-[10px] uppercase tracking-[0.3em] font-bold rounded-full overflow-hidden transition-all duration-500 hover:text-white"
            >
              <span className="relative z-10">Связаться</span>
              <motion.div
                className="absolute inset-0 bg-orange-500"
                initial={{ y: "100%" }}
                whileHover={{ y: 0 }}
                transition={CINEMATIC_TRANSITION}
              />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2 hover:text-orange-500 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={CINEMATIC_TRANSITION}
            className={`absolute top-full left-6 right-6 mt-6 p-10 rounded-[48px] md:hidden ${GLASS_STYLES.dark} border-white/10 shadow-2xl`}
          >
            <div className="flex flex-col gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[11px] uppercase tracking-[0.5em] font-bold text-zinc-400 hover:text-orange-500 transition-colors text-center"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-6 bg-white text-black text-center text-[11px] uppercase tracking-[0.4em] font-bold rounded-3xl active:bg-orange-500 active:text-white transition-colors"
              >
                Связаться
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
