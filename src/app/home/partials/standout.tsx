'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import type { CSSProperties } from 'react';

type Item = { text: string };

const POSITIVES: Item[] = [
  { text: 'React Expert' },
  { text: 'Precise Website Implementation' },
  { text: 'TypeScript Proficiency' },
  { text: 'Clean, Maintainable Code' },
  { text: 'Responsive Website Development' },
  { text: 'Performance Optimization' },
  { text: 'UI Design Proficiency (Figma)' },
];

const NEGATIVES: Item[] = [
  { text: 'Basic React Knowledge' },
  { text: 'Inconsistent Design Translation' },
  { text: 'Little to No TypeScript Knowledge' },
  { text: 'Unstructured Code' },
  { text: 'Inconsistent Responsiveness' },
  { text: 'Slow and Heavy Websites' },
  { text: 'No Design Skills' },
];

export default function StandoutSection() {
  const reduce = useReducedMotion();
  const easeOut = [0.16, 1, 0.3, 1] as const;

  const sectionDrop: Variants = reduce
    ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
    : {
        hidden: {
          opacity: 0,
          y: -28,
          filter: 'blur(6px)' as CSSProperties['filter'],
        },
        show: {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)' as CSSProperties['filter'],
          transition: { duration: 0.5, ease: easeOut },
        },
      };

  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.08,
      },
    },
  };

  const dropItem: Variants = reduce
    ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: -16 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.35, ease: easeOut },
        },
      };

  const listItem: Variants = reduce
    ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: -10 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.28, ease: easeOut },
        },
      };

  return (
    <motion.section
      id='standout'
      className='w-full bg-transparent'
      variants={sectionDrop}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.18, margin: '10% 0% -6% 0%' }}
    >
      <div className='mx-auto w-full max-w-360 py-10 md:py-20'>
        <motion.div
          className='custom-container mx-auto flex w-full flex-col gap-6 md:gap-12'
          variants={container}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className='flex flex-col items-center gap-2'
            variants={dropItem}
          >
            <h2 className='text-display-sm md:text-display-xl text-center font-bold text-neutral-950'>
              More Than Just Code
            </h2>
            <p className='md:text-md text-center text-sm font-medium text-neutral-950'>
              We care about design, performance, and user experience all in one.
            </p>
          </motion.div>

          <motion.div
            className='grid grid-cols-1 gap-6 md:grid-cols-2'
            variants={container}
          >
            <motion.div
              className='bg-secondary-100 flex h-full flex-col items-center justify-center gap-6 rounded-xl px-4 py-8 md:h-155 md:gap-8 md:p-8'
              variants={dropItem}
            >
              <motion.div
                className='flex flex-col items-center gap-3'
                variants={container}
              >
                <motion.div
                  className='text-center text-lg leading-8 font-bold text-neutral-950'
                  variants={dropItem}
                >
                  With Me
                </motion.div>

                <motion.div
                  className='bg-primary-300 grid h-20 w-20 shrink-0 place-items-center overflow-hidden rounded-full md:h-25 md:w-25'
                  variants={dropItem}
                >
                  <Image
                    src='/images/hero1.png'
                    alt='portrait'
                    width={104}
                    height={104}
                    className='object-contain object-center'
                    priority={false}
                  />
                </motion.div>
              </motion.div>

              <motion.ul
                className='flex w-full max-w-131 flex-col items-center justify-center gap-3 md:gap-6'
                variants={container}
              >
                {POSITIVES.map((it, i) => (
                  <motion.li
                    key={i}
                    className='flex w-full items-center justify-center gap-3'
                    variants={listItem}
                  >
                    <span className='grid h-6 w-6 shrink-0 place-items-center'>
                      <Image
                        src='/icons/checklist2.svg'
                        alt='Check'
                        width={24}
                        height={24}
                      />
                    </span>
                    <span className='text-md text-center leading-[30px] font-semibold tracking-[-0.03em] text-neutral-950 md:text-lg md:leading-8'>
                      {it.text}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            <motion.div
              className='flex h-full flex-col items-center justify-center gap-6 rounded-xl border border-neutral-300 px-4 py-8 md:h-155 md:gap-8 md:p-8'
              variants={dropItem}
            >
              <motion.div
                className='flex flex-col items-center gap-3'
                variants={container}
              >
                <motion.div
                  className='text-center text-lg leading-8 font-semibold text-neutral-950'
                  variants={dropItem}
                >
                  Another Talent
                </motion.div>

                <motion.div
                  className='grid h-20 w-20 shrink-0 place-items-center overflow-hidden rounded-full bg-neutral-300 md:h-25 md:w-25'
                  variants={dropItem}
                >
                  <Image
                    src='/images/placeholder.png'
                    alt='Profile'
                    width={45}
                    height={45}
                    className='object-contain object-center'
                  />
                </motion.div>
              </motion.div>

              <motion.ul
                className='flex w-full max-w-131 flex-col items-center justify-center gap-3 md:gap-6'
                variants={container}
              >
                {NEGATIVES.map((it, i) => (
                  <motion.li
                    key={i}
                    className='flex w-full items-center justify-center gap-3'
                    variants={listItem}
                  >
                    <span className='grid h-6 w-6 shrink-0 place-items-center'>
                      <Image
                        src='/icons/crossx2.svg'
                        alt='Close'
                        width={24}
                        height={24}
                      />
                    </span>
                    <span className='text-md text-center leading-[30px] font-semibold tracking-[-0.03em] text-neutral-950 md:text-lg md:leading-8'>
                      {it.text}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
