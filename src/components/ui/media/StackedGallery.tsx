"use client";

import { motion } from "motion/react";
import Image from "next/image";

interface StackedGalleryProps {
  images: string[];
}

export default function StackedGallery({ images }: StackedGalleryProps) {
  return (
    <div className="grid grid-cols-12 gap-6 h-full w-full p-10">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="col-span-8 relative rounded-3xl overflow-hidden aspect-[4/3] shadow-xl"
      >
        <Image src={images[0] || ""} alt="Main" fill className="object-cover" />
      </motion.div>
      
      <div className="col-span-4 flex flex-col gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative rounded-3xl overflow-hidden aspect-square shadow-lg"
        >
          <Image src={images[1] || images[0] || ""} alt="Sub 1" fill className="object-cover" />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="relative rounded-3xl overflow-hidden aspect-square shadow-lg"
        >
          <Image src={images[2] || images[0] || ""} alt="Sub 2" fill className="object-cover" />
        </motion.div>
      </div>
    </div>
  );
}
