'use client';

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const SOCIALS = [
  {
    name: 'Facebook',
    icon: '/icons/facebook3.svg',
    href: 'https://twitter.com/your_handle',
  },
  {
    name: 'Instagram',
    icon: '/icons/instagram2.svg',
    href: 'https://instagram.com/your_handle',
  },
  {
    name: 'LinkedIn',
    icon: '/icons/linkedin2.svg',
    href: 'https://www.linkedin.com/in/your_handle',
  },
  {
    name: 'Tiktok',
    icon: '/icons/tiktok2.svg',
    href: 'https://github.com/your_handle',
  },
] as const;

export default function Footer() {
  const reduce = useReducedMotion();
  const easeOut = [0.16, 1, 0.3, 1] as const;

  const sectionDrop: Variants = reduce
    ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: -20 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.45, ease: easeOut },
        },
      };

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.06 } },
  };

  const itemDrop: Variants = reduce
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
    <motion.footer
      className='w-full'
      variants={sectionDrop}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.2, margin: '8% 0% -6% 0%' }}
    >
      <div className='relative isolate mx-auto flex w-full max-w-360 flex-col items-center bg-black py-8 md:py-7'>
        <div className='mx-auto w-full'>
          <motion.div
            className='custom-container flex flex-col gap-6 md:flex-row md:items-center md:justify-between'
            variants={container}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div
              className='order-1 flex min-w-52 flex-nowrap items-center justify-start gap-4 md:order-2 md:gap-4'
              variants={container}
            >
              {SOCIALS.map((s) => (
                <motion.div key={s.name} variants={itemDrop}>
                  <Link
                    href={s.href}
                    target='_blank'
                    rel='noreferrer noopener'
                    aria-label={s.name}
                    className='grid h-10 w-10 place-items-center rounded-full border border-neutral-800 transition-transform duration-200 hover:scale-105 focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:outline-none'
                  >
                    <Image src={s.icon} alt={s.name} width={20} height={20} />
                    <span className='sr-only'>{s.name}</span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              className='md:text-md font-reguler order-2 w-full text-left text-xs tracking-[-0.03em] text-white/90 md:order-1 md:leading-[30px]'
              variants={itemDrop}
            >
              © 2025 R3D. All rights reserved.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}
