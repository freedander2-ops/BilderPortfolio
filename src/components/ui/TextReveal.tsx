'use client';

import { motion } from 'motion/react';
import { CINEMATIC_TRANSITION } from '@/lib/motion/index';

export default function TextReveal({ text, className = "" }: { text: string; className?: string }) {
  const words = text.split(" ");

  return (
    <div className={`overflow-hidden flex flex-wrap justify-center ${className}`}>
      {words.map((word, i) => (
        <div key={i} className="overflow-hidden mr-[0.25em] last:mr-0">
          <motion.span
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{
              ...CINEMATIC_TRANSITION,
              delay: i * 0.05
            }}
            className="block"
          >
            {word}
          </motion.span>
        </div>
      ))}
    </div>
  );
}
