'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu } from 'lucide-react';
import { navigtionData } from '@/components/constants/navigation-data';
import MobileMenu from '@/components/ui/MobileMenu';

type Item = { label: string; href: string };

export default function ResNav() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 80], [0, -8]);
  const bgOpacity = useTransform(scrollY, [0, 80], [0.2, 0.45]);
  const borderOpacity = useTransform(scrollY, [0, 80], [0.2, 0.5]);

  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onResize = () => {
      const w = window.innerWidth;
      if (open && w > 800 && w <= 1024) setOpen(false);
    };
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [open]);

  return (
    <motion.nav
      style={{ y }}
      className='custom-container pointer-events-none fixed inset-x-0 top-1 z-50 flex items-center justify-center md:top-8'
      aria-label='Primary'
    >
      <motion.div
        style={{
          backgroundColor: `rgba(0,0,0,${bgOpacity.get()})`,
          boxShadow: `0 0 0 1px rgba(37,43,55,${borderOpacity.get()})`,
        }}
        className='text-neutral-25 pointer-events-auto relative hidden h-12 w-[553px] items-center justify-center gap-6 rounded-full px-6 supports-[backdrop-filter]:backdrop-blur-[20px] md:flex'
        role='menubar'
      >
        {navigtionData.map((item: Item, idx) => (
          <Link
            key={item.href + idx}
            href={item.href}
            className={[
              'group relative inline-flex h-11 items-center justify-center px-2',
              'text-md leading-[30px] font-medium tracking-[-0.03em] transition-colors',
              pathname === item.href
                ? 'text-white'
                : 'text-neutral-300 hover:text-white',
            ].join(' ')}
            role='menuitem'
          >
            <span
              className={[
                'absolute inset-x-1 -bottom-1 h-[2px] rounded-full',
                pathname === item.href
                  ? 'bg-white/70'
                  : 'bg-transparent group-hover:bg-white/40',
              ].join(' ')}
              aria-hidden
            />
            {item.label}
          </Link>
        ))}
      </motion.div>

      <motion.div
        style={{
          backgroundColor: `rgba(0,0,0,${bgOpacity.get()})`,
          boxShadow: `0 0 0 1px rgba(37,43,55,${borderOpacity.get()})`,
        }}
        className={[
          'custom-container text-neutral-25 pointer-events-auto relative mx-auto mt-4 flex h-12 w-full items-center justify-between rounded-full px-4 supports-[backdrop-filter]:backdrop-blur-[20px] md:hidden',
          open ? 'pointer-events-none opacity-0' : 'opacity-100',
        ].join(' ')}
        aria-hidden={open}
      >
        <Link href='/' className='text-xl leading-[34px] font-bold'>
          R3D Creative
        </Link>

        <button
          onClick={() => setOpen(true)}
          aria-label='Open menu'
          aria-haspopup='dialog'
          aria-expanded={open}
          aria-controls='mobile-menu'
          className='inline-flex h-8 w-8 items-center justify-center rounded-md outline-none hover:opacity-90 focus-visible:ring-2 focus-visible:ring-white/40'
        >
          <Menu className='h-6 w-6' />
        </button>
      </motion.div>

      <MobileMenu
        id='mobile-menu'
        open={open}
        onClose={() => setOpen(false)}
        title='R3D Creative'
        items={navigtionData}
      />
    </motion.nav>
  );
}
