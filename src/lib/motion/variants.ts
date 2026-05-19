export const TRANSITIONS = {
  cinematic: {
    type: "spring",
    stiffness: 50,
    damping: 20,
    mass: 1,
  },
  smooth: {
    type: "tween",
    ease: "easeOut",
    duration: 0.8,
  },
};

export const FADE_UP = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: TRANSITIONS.cinematic,
};

export const STAGGER_CHILDREN = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
