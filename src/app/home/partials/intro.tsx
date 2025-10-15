'use client';

import * as React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const IntroSection: React.FC = () => {
  const prefersReduce = useReducedMotion();

  return (
    <motion.section
      id='about'
      initial={prefersReduce ? { opacity: 0 } : { opacity: 0, y: -24 }}
      whileInView={prefersReduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.4, margin: '-10% 0% -10% 0%' }}
      className='relative isolate mx-auto flex w-full max-w-360 flex-col items-center bg-transparent py-10 text-white md:py-20'
    >
      <div className='custom-container mx-auto flex w-full flex-col'>
        <div className='mx-auto flex h-47.5 w-full md:h-33 md:w-223'>
          <p className='text-display-sm line-height md:text-display-lg md:text-line-height text-center leading-tight font-medium tracking-[-0.05em] text-neutral-950 md:tracking-[-0.02em]'>
            As frontend developers , we bring designs to life with{' '}
            <span className='text-primary-200'>clean, responsive code</span>{' '}
            that blends creativity 🎨 with usability 🌟.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default IntroSection;
