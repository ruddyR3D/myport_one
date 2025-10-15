'use client';

import * as React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { motion, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';

type Tech = {
  title: string;
  desc: string;
  icon: string;
  variant: 'gold' | 'light';
};

const TECHS: Tech[] = [
  {
    title: 'HTML',
    desc: 'Crafting semantic, accessible HTML structures.',
    icon: '/icons/html.svg',
    variant: 'gold',
  },
  {
    title: 'CSS',
    desc: 'Modern layouts with Tailwind & CSS custom props.',
    icon: '/icons/css.svg',
    variant: 'light',
  },
  {
    title: 'JS',
    desc: 'Clean, modular, and testable user interactions.',
    icon: '/icons/js.svg',
    variant: 'gold',
  },
  {
    title: 'React',
    desc: 'Composable UI with hooks & patterns that scale.',
    icon: '/icons/react.svg',
    variant: 'light',
  },
  {
    title: 'Next',
    desc: 'App Router, streaming UI, and SEO-first builds.',
    icon: '/icons/next.svg',
    variant: 'gold',
  },
  {
    title: 'Node',
    desc: 'APIs that are fast, typed, and robust.',
    icon: '/icons/node.svg',
    variant: 'light',
  },
];

export default function WorkflowSection() {
  const [index, setIndex] = React.useState(0);
  const [perPage, setPerPage] = React.useState(2);
  const reduce = useReducedMotion();
  const easeOut = [0.16, 1, 0.3, 1] as const;

  React.useEffect(() => {
    const compute = () => setPerPage(window.innerWidth >= 768 ? 4 : 2);
    compute();
    window.addEventListener('resize', compute);
    return () => window.removeEventListener('resize', compute);
  }, []);

  const total = TECHS.length;
  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);

  const CARD_W_DESKTOP = 215;
  const CARD_W_MOBILE = 165;
  const GAP_DESKTOP = 20;
  const GAP_MOBILE = 16;

  const isDesktop = perPage === 4;
  const cardW = isDesktop ? CARD_W_DESKTOP : CARD_W_MOBILE;
  const gap = isDesktop ? GAP_DESKTOP : GAP_MOBILE;

  const viewportW = isDesktop ? 920 : 361;
  const trackW = total * cardW + (total - 1) * gap;
  const translateX = -(index * (cardW + gap));

  const sectionDrop: Variants = reduce
    ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: -24 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: easeOut },
        },
      };

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
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

  const cardItem: Variants = reduce
    ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: -12 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.3, ease: easeOut },
        },
      };

  return (
    <motion.section
      id='skills'
      className='relative isolate mx-auto flex w-full max-w-360 flex-col items-center bg-transparent py-10 md:py-20'
      variants={sectionDrop}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.2, margin: '10% 0% -6% 0%' }}
    >
      <motion.div
        className='custom-container mx-auto flex w-full flex-col gap-6 md:gap-12'
        variants={container}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className='absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(158,56,94,0)_0%,rgba(158,56,94,0.1)_99.95%)]' />

        <motion.div
          className='mx-auto flex w-full flex-col items-center gap-2 text-center md:px-0'
          variants={dropItem}
        >
          <h2 className='text-display-md md:text-display-xl leading-[38px] font-bold tracking-[-0.06em] text-neutral-950 md:leading-[56px] md:tracking-[-0.03em]'>
            Code, Design, and Everything in Between
          </h2>
          <p className='md:text-md px-5 text-sm leading-[28px] font-medium tracking-[-0.03em] text-neutral-950 md:leading-[30px]'>
            These are the technologies that power my workflow and bring ideas to
            life.
          </p>
        </motion.div>

        <motion.div
          className='mx-auto mr-auto flex w-full max-w-230 flex-col gap-8 overflow-hidden'
          variants={container}
        >
          <div
            className='flex will-change-transform'
            style={{
              width: `${trackW}px`,
              gap: `${gap}px`,
              transform: `translateX(${translateX}px)`,
              transition: 'transform 280ms cubic-bezier(.22,.61,.36,1)',
            }}
          >
            {TECHS.map((t, i) => (
              <motion.div key={i} variants={cardItem}>
                <CardTech tech={t} width={cardW} />
              </motion.div>
            ))}
          </div>

          {/* Controls */}
          <motion.div
            className='mx-auto flex items-center gap-3'
            variants={dropItem}
          >
            <Button
              variant='outline'
              onClick={prev}
              aria-label='Previous'
              className='group h-[45px] w-[45px] rounded-full border-neutral-300 p-0 hover:bg-transparent focus-visible:ring-2 focus-visible:ring-black/40 active:bg-black/10'
            >
              <span className='relative inline-block h-6 w-6 transition-[filter] duration-150 group-hover:brightness-0 group-active:brightness-0'>
                <Image src='/icons/left3.svg' alt='Prev' fill />
              </span>
            </Button>

            <Button
              variant='outline'
              onClick={next}
              aria-label='Next'
              className='group h-[45px] w-[45px] rounded-full border-neutral-300 p-0 hover:bg-transparent focus-visible:ring-2 focus-visible:ring-black/40 active:bg-black/10'
            >
              <span className='relative inline-block h-6 w-6 transition-[filter] duration-150 group-hover:brightness-0 group-active:brightness-0'>
                <Image src='/icons/right3.svg' alt='Next' fill />
              </span>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

function CardTech({ tech, width }: { tech: Tech; width: number }) {
  const isGold = tech.variant === 'gold';
  return (
    <div
      className={[
        'flex h-[281px] flex-col items-center gap-3 rounded-[100px] px-4 py-10',
        isGold ? 'bg-secondary-100' : 'bg-neutral-25 border border-neutral-300',
      ].join(' ')}
      style={{ width }}
    >
      <div
        className={[
          'grid h-15 w-15 place-items-center rounded-full',
          isGold ? 'bg-neutral-25' : 'bg-neutral-100',
        ].join(' ')}
      >
        <Image src={tech.icon} alt={tech.title} width={36} height={36} />
      </div>

      <div className='flex w-35 flex-col items-center md:w-[183px]'>
        <div className='text-md text-center leading-[30px] font-semibold text-neutral-950'>
          {tech.title}
        </div>
        <p className='md:text-md font-regular mt-1 text-center text-sm leading-[28px] text-neutral-800 md:leading-[30px]'>
          {tech.desc}
        </p>
      </div>
    </div>
  );
}
