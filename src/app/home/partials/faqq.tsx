'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

type FaqItem = { no: string; q: string; a: string };

const ITEMS: FaqItem[] = [
  {
    no: '01',
    q: 'What technologies do you work with?',
    a: 'I mainly work with HTML, CSS, JavaScript, and frameworks like React, Next.js, and Vue. I also have experience using Tailwind CSS, TypeScript, and working with APIs.',
  },
  {
    no: '02',
    q: 'Do you work on freelance or remote projects?',
    a: 'Yes. I take on freelance and remote collaborations with clear scopes, timelines, and communication cadences across time zones.',
  },
  {
    no: '03',
    q: 'Can you convert Figma or Sketch designs into code?',
    a: 'Absolutely. I translate high-fidelity designs into pixel-perfect, accessible, responsive components while preserving design intent.',
  },
  {
    no: '04',
    q: 'Do you collaborate with backend developers or teams?',
    a: 'Yes. I integrate with REST/GraphQL APIs, align on contracts, and iterate quickly with backend teammates for smooth delivery.',
  },
  {
    no: '05',
    q: 'Are you available for full-time roles?',
    a: 'Open to discussing full-time roles that match product vision, team culture, and growth opportunities.',
  },
];

export default function FaqqSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const reduce = useReducedMotion();
  const easeOut = [0.16, 1, 0.3, 1] as const;

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const dropIn = {
    hidden: reduce
      ? { opacity: 0 }
      : { opacity: 0, y: -24, filter: 'blur(6px)' },
    show: reduce
      ? { opacity: 1 }
      : {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          transition: { duration: 0.45, ease: easeOut },
        },
  };

  const itemDrop = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: -14 },
    show: reduce
      ? { opacity: 1 }
      : { opacity: 1, y: 0, transition: { duration: 0.32, ease: easeOut } },
  };

  return (
    <motion.section
      id='faq'
      initial={dropIn.hidden}
      whileInView={dropIn.show}
      viewport={{ once: true, amount: 0.15, margin: '12% 0% -6% 0%' }}
      className='relative isolate mx-auto flex w-full max-w-360 flex-col items-center bg-neutral-100 py-10 text-white md:py-20'
    >
      <motion.div
        className='custom-container mx-auto flex w-full flex-col gap-8 md:gap-16'
        variants={container}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.header
          variants={dropIn}
          className='mx-auto w-full max-w-[847px] text-center'
        >
          <h2 className='text-display-sm md:text-display-xl leading-[38px] font-bold tracking-[-0.02em] text-neutral-950 md:leading-[56px] md:tracking-[-0.03em]'>
            Let’s Clear Things Up
          </h2>
          <p className='md:text-md text-sm leading-7 text-neutral-950 md:leading-[30px]'>
            I&rsquo;ve answered a few questions that usually come up when
            working with a frontend developer like me.
          </p>
        </motion.header>

        <motion.ul variants={container} className='flex w-full flex-col'>
          {ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.li key={item.no} variants={itemDrop} className='w-full'>
                <div className='flex w-full items-start gap-3 py-5 md:gap-10'>
                  <div className='flex w-7 justify-center md:w-12'>
                    <span className='md:text-display-xs text-lg leading-8 font-semibold text-neutral-950 tabular-nums md:leading-9'>
                      {item.no}
                    </span>
                  </div>

                  <div className='min-w-0 flex-1'>
                    <h3 className='md:text-display-xs min-w-0 text-lg leading-8 font-semibold tracking-[-0.02em] text-neutral-950 md:leading-9 md:tracking-[-0.03em]'>
                      {item.q}
                    </h3>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.p
                          id={`faq-panel-${item.no}`}
                          initial={
                            reduce
                              ? { opacity: 0 }
                              : { opacity: 0, y: -8, height: 0 }
                          }
                          animate={
                            reduce
                              ? { opacity: 1 }
                              : { opacity: 1, y: 0, height: 'auto' }
                          }
                          exit={
                            reduce
                              ? { opacity: 0 }
                              : { opacity: 0, y: -8, height: 0 }
                          }
                          transition={{ duration: 0.25, ease: easeOut }}
                          className='md:text-md mt-2 overflow-hidden text-sm leading-7 font-medium text-neutral-700 md:mt-3 md:leading-[30px]'
                        >
                          {item.a}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className='flex shrink-0 items-start'>
                    <button
                      type='button'
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${item.no}`}
                      onClick={() => setOpenIndex(isOpen ? -1 : i)}
                      className={[
                        'inline-flex h-8 w-8 items-center justify-center rounded-full transition-all md:h-12 md:w-12',
                        isOpen
                          ? 'bg-primary-300 focus-visible:ring-primary-400/100 hover:shadow-[0_0_32px_rgba(183,96,128,0.8)] focus-visible:ring-2'
                          : 'bg-white ring-1 ring-neutral-300 ring-inset hover:shadow-[0_0_32px_rgba(0,0,0,0.6)] focus-visible:ring-2 focus-visible:ring-neutral-950/20',
                      ].join(' ')}
                    >
                      <motion.svg
                        width='16'
                        height='16'
                        viewBox='0 0 24 24'
                        fill='none'
                        className='md:h-6 md:w-6'
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                      >
                        <path
                          d='M5 12h14'
                          stroke={isOpen ? '#FFFFFF' : '#0a0d12'}
                          strokeWidth='2'
                          strokeLinecap='round'
                        />

                        <motion.path
                          d='M12 5v14'
                          stroke={isOpen ? '#FFFFFF' : '#0a0d12'}
                          strokeWidth='2'
                          strokeLinecap='round'
                          animate={{ opacity: isOpen ? 1 : 0 }}
                          transition={{ duration: 0.15 }}
                        />
                      </motion.svg>
                    </button>
                  </div>
                </div>

                {i < ITEMS.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.2 }}
                    className='my-5'
                  >
                    <div className='h-px w-full bg-neutral-300' />
                  </motion.div>
                )}
              </motion.li>
            );
          })}
        </motion.ul>
      </motion.div>
    </motion.section>
  );
}
