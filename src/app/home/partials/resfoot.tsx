'use client';

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

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
    icon: '/icons/Tiktok2.svg',
    href: 'https://github.com/your_handle',
  },
] as const;

export default function Footer() {
  return (
    <footer className='w-full'>
      <div className='relative isolate mx-auto flex w-full max-w-[1440px] flex-col items-center bg-black py-8 md:py-7'>
        <div className='mx-auto w-full'>
          <div className='custom-container flex flex-col gap-6 md:flex-row md:items-center md:justify-between'>
            <div className='order-1 flex min-w-[208px] flex-nowrap items-center justify-start gap-4 md:order-2 md:gap-4'>
              {SOCIALS.map((s) => (
                <Link
                  key={s.name}
                  href={s.href}
                  target='_blank'
                  rel='noreferrer noopener'
                  aria-label={s.name}
                  className='grid h-10 w-10 place-items-center rounded-full border border-[#252B37] transition-transform duration-200 hover:scale-105 focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:outline-none'
                >
                  <Image src={s.icon} alt={s.name} width={20} height={20} />
                  <span className='sr-only'>{s.name}</span>
                </Link>
              ))}
            </div>

            <p className='order-2 w-full text-left text-xs tracking-[-0.03em] md:order-1 md:text-[16px] md:leading-[30px]'>
              © 2025 R3D. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
