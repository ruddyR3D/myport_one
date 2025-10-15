'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import * as React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';

type PortfolioItem = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  href: string;
  best?: boolean;
};

const ITEMS: PortfolioItem[] = [
  {
    id: 'p1',
    title: 'Portfolio 1',
    category: 'Web Development',
    description:
      'We translated design mockups into pixel-perfect, responsive components, ensuring a smooth user experience across all devices.',
    image: '/images/project1.png',
    href: '/portfolio/1',
    best: true,
  },
  {
    id: 'p2',
    title: 'Portfolio 2',
    category: 'Web Development',
    description:
      'We translated design mockups into pixel-perfect, responsive components, ensuring a smooth user experience across all devices.',
    image: '/images/project2.png',
    href: '/portfolio/2',
    best: true,
  },
  {
    id: 'p3',
    title: 'Portfolio 3',
    category: 'Web Development',
    description:
      'We translated design mockups into pixel-perfect, responsive components, ensuring a smooth user experience across all devices.',
    image: '/images/project3.png',
    href: '/portfolio/3',
    best: true,
  },
];

export default function PortfolioSection() {
  const reduce = useReducedMotion();
  const easeOut = [0.16, 1, 0.3, 1] as const;

  const sectionDrop: Variants = reduce
    ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: -24, filter: 'blur(6px)' },
        show: {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          transition: { duration: 0.5, ease: easeOut },
        },
      };

  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
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

  const cardDrop: Variants = reduce
    ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: -18 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.4, ease: easeOut },
        },
      };

  return (
    <motion.section
      id='projects'
      className='relative isolate mx-auto flex w-full max-w-360 flex-col items-center bg-transparent py-10 md:py-20'
      variants={sectionDrop}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.18, margin: '10% 0% -6% 0%' }}
    >
      <motion.div
        className='custom-container mx-auto flex w-full flex-col gap-6 md:gap-12'
        variants={container}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className='mx-auto flex w-full max-w-[1200px] flex-col gap-6'
          variants={container}
        >
          <motion.div
            className='flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between'
            variants={dropItem}
          >
            <div className='max-w-171.5'>
              <h2 className='text-display-sm md:text-display-xl text-left font-bold tracking-[-0.04em] text-neutral-950 md:leading-[56px] md:tracking-[-0.03em]'>
                Design to{' '}
                <span className='text-primary-300'>Code Accuracy</span>
              </h2>
              <p className='spacing-[2px] md:text-md mt-2 text-sm font-medium text-neutral-950 md:leading-[30px] md:tracking-[-0.03em]'>
                We translated design mockups into pixel-perfect, responsive
                components, ensuring a smooth user experience across all
                devices.
              </p>
            </div>

            <Button
              asChild
              className='h-14 w-full justify-between rounded-full border border-neutral-300 bg-transparent pr-2 pl-4 text-neutral-950 hover:shadow-[0_0_32px_rgba(0,0,0,0.6)] focus-visible:ring-2 focus-visible:ring-neutral-950/20 md:w-39 md:justify-center md:pr-1 md:pl-4'
            >
              <Link
                href='/portfolio'
                aria-label='See All Portfolios'
                className='inline-flex items-center gap-2'
              >
                <span className='text-md leading-[30px] font-semibold md:w-22'>
                  See All
                </span>
                <span className='inline-flex size-9 items-center justify-center rounded-full bg-neutral-950'>
                  <Image
                    src='/icons/rightw.svg'
                    alt='arrow right'
                    width={20}
                    height={20}
                  />
                </span>
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className='mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-3'
          variants={container}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.2 }}
        >
          {ITEMS.map((item) => (
            <motion.article
              key={item.id}
              className='flex flex-col'
              variants={cardDrop}
            >
              <div className='w/full relative isolate flex aspect-square max-w-full items-center rounded-2xl bg-neutral-100 p-4 md:aspect-square'>
                {item.best && (
                  <div className='pointer-events-none absolute top-7 left-0 z-[2] -translate-x-2'>
                    <Image
                      src='/icons/best.svg'
                      alt='Best Portfolio'
                      width={97}
                      height={29}
                      className='mr-2'
                    />
                  </div>
                )}

                <div className='relative z-[1] h-full w-full overflow-hidden rounded-lg'>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes='(max-width: 768px) 100vw, 33vw'
                    className='object-cover'
                    priority
                  />
                </div>
              </div>

              <div className='flex items-center justify-between rounded-2xl bg-neutral-100 p-4'>
                <div className='mx-auto flex w-full max-w-[95%] flex-col gap-3'>
                  <h3 className='text-md leading-[32px] font-bold text-neutral-950 md:text-lg'>
                    {item.title}
                  </h3>
                  <hr className='border-neutral-300' />
                  <p className='md:text-md text-xs leading-[30px] font-medium tracking-[-0.03em] text-neutral-600'>
                    {item.category}
                  </p>
                </div>

                <Button
                  asChild
                  aria-label={`Open ${item.title}`}
                  className='bg-primary-300 size-9 rounded-full p-2 hover:shadow-[0_0_32px_rgba(183,96,128,0.8)] focus-visible:ring-2 focus-visible:ring-[#B76080]/200'
                >
                  <Link href={item.href}>
                    <Image
                      src='/icons/rightw.svg'
                      alt=''
                      width={20}
                      height={20}
                    />
                  </Link>
                </Button>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
