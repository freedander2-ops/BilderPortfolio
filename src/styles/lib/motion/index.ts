import { Transition } from 'motion/react';

export const PURE_SPRING: Transition = {
  type: 'spring',
  stiffness: 100,
  damping: 30,
  restDelta: 0.001
};

export const GENTLE_SPRING: Transition = {
  type: 'spring',
  stiffness: 150,
  damping: 25,
};

// Refined for "Cinematic Atmosphere" - Premium Ease-Out
export const CINEMATIC_TRANSITION: Transition = {
  duration: 1.8,
  ease: [0.22, 1, 0.36, 1], // Sophisticated premium curve
};

export const SLOW_FADE: Transition = {
  duration: 1.5,
  ease: [0.16, 1, 0.3, 1],
};

export const STAGGER_CHILDREN = {
  animate: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

export const FADE_UP = {
  initial: { opacity: 0, y: 60, filter: 'blur(10px)' }, // Dramatic entrance
  animate: { 
    opacity: 1, 
    y: 0,
    filter: 'blur(0px)',
    transition: CINEMATIC_TRANSITION
  }
};

export const GLASS_STYLES = {
  base: "backdrop-blur-md bg-white/5 border border-white/10",
  premium: "backdrop-blur-xl bg-zinc-900/40 border border-white/5 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]",
  dark: "backdrop-blur-2xl bg-black/60 border border-white/5 shadow-2xl",
  glow: "relative after:absolute after:inset-0 after:rounded-[inherit] after:shadow-[0_0_25px_rgba(255,255,255,0.03)] after:pointer-events-none",
};
