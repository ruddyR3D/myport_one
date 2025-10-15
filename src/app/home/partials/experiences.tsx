'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';

type Job = {
  period: string;
  role: string;
  desc: string;
  logo: '/icons/airbnb.svg' | '/icons/airtasker.svg' | '/icons/slack.svg';
};

const JOBS: Job[] = [
  {
    period: '2025 - Present',
    role: 'Frontend Developer',
    desc: 'Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.',
    logo: '/icons/airbnb.svg',
  },
  {
    period: '2025 - Present',
    role: 'Frontend Developer',
    desc: 'Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.',
    logo: '/icons/airtasker.svg',
  },
  {
    period: '2025 - Present',
    role: 'Frontend Developer',
    desc: 'Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.',
    logo: '/icons/slack.svg',
  },
];

export default function ExperiencesSection() {
  const reduce = useReducedMotion();

  const easeOut = [0.16, 1, 0.3, 1] as const;

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.02,
      },
    },
  };

  const downReveal = {
    hidden: reduce
      ? { opacity: 0 }
      : { opacity: 0, y: -36, filter: 'blur(6px)' },
    show: reduce
      ? { opacity: 1 }
      : {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          transition: { duration: 0.45, ease: easeOut },
        },
  };

  const subtleDown = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: -20 },
    show: reduce
      ? { opacity: 1 }
      : { opacity: 1, y: 0, transition: { duration: 0.38, ease: easeOut } },
  };

  return (
    <motion.section
      initial={
        reduce ? { opacity: 0 } : { opacity: 0, y: -24, filter: 'blur(6px)' }
      }
      whileInView={
        reduce ? { opacity: 1 } : { opacity: 1, y: 0, filter: 'blur(0px)' }
      }
      transition={{ duration: 0.5, ease: easeOut }}
      viewport={{ once: true, amount: 0.18, margin: '10% 0% -5% 0%' }}
      className='relative isolate mx-auto flex w-full max-w-360 flex-col items-center bg-neutral-950 py-10 md:py-20'
    >
      <motion.div
        className='custom-container mx-auto flex w-full flex-col gap-8 md:gap-16'
        variants={containerVariants}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.18 }}
      >
        <motion.div
          className='mx-auto flex w-full flex-col gap-6 md:flex-row md:items-start md:justify-between md:gap-2'
          variants={downReveal}
        >
          <h2 className='text-display-sm text-neutral-25 md:text-display-xl max-w-[365px] leading-[38px] font-bold tracking-[-0.02em] md:mx-0 md:leading-[56px] md:tracking-[-0.03em]'>
            Experiences That{' '}
            <span className='text-secondary-100'>Shaped Me</span>!
          </h2>
          <p className='text-neutral-25 w-full text-sm leading-[28px] font-semibold tracking-[-0.02em] md:mx-0 md:w-91.5 md:text-lg md:leading-[32px] md:tracking-[-0.03em]'>
            From startups to side projects, every step has been a chance to
            learn, build, and level up.
          </p>
        </motion.div>

        <motion.div
          className='mx-auto w-full max-w-310.5'
          variants={subtleDown}
        >
          <hr className='w-full border-neutral-800' />
        </motion.div>

        <motion.div
          className='mx-auto flex w-full max-w-[1200px] flex-col'
          variants={containerVariants}
        >
          {JOBS.map((job, i) => (
            <React.Fragment key={i}>
              <motion.div
                variants={downReveal}
                className='flex flex-col gap-6 will-change-transform md:flex-row md:items-start md:justify-between md:gap-[50px] lg:gap-24.5'
              >
                <div className='flex w-full max-w-44.5 flex-col gap-1 md:mx-0'>
                  <span className='text-sm leading-[28px] font-medium text-neutral-400'>
                    {job.period}
                  </span>
                  <span className='text-md text-neutral-25 leading-[30px] font-bold md:text-xl md:leading-[34px]'>
                    {job.role}
                  </span>
                </div>

                <div className='h-[71px] w-[121px] flex-shrink-0 items-center justify-center md:mx-0 md:h-[112px] md:w-[192px]'>
                  <div className='h-[71px] rounded-2xl border border-neutral-800 bg-neutral-950 p-1 md:h-28 md:p-1.75'>
                    <div className='h-15 rounded-2xl border border-neutral-800 bg-neutral-950 p-6 md:h-24'>
                      <Image
                        src={job.logo}
                        alt='Company logo'
                        width={128}
                        height={48}
                        className='h-auto w-full -translate-y-1.5 object-contain md:-translate-y-0.5'
                        priority={i === 0}
                      />
                    </div>
                  </div>
                </div>

                <p className='font-regular text-regular md:text-md max-w-[513px] text-sm leading-[28px] tracking-[-0.03em] text-neutral-400 md:mx-0 md:leading-[30px]'>
                  {job.desc}
                </p>
              </motion.div>

              {i < JOBS.length - 1 && (
                <>
                  <motion.div className='hidden md:block' variants={subtleDown}>
                    <hr className='my-8 w-full border-neutral-800' />
                  </motion.div>
                  <motion.div className='md:hidden' variants={subtleDown}>
                    <hr className='my-6 w-full border-neutral-800' />
                  </motion.div>
                </>
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
