'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

type Item = { href: string; label: string };

export default function MobileMenu({
  id,
  open,
  onClose,
  title,
  items,
}: {
  id?: string;
  open: boolean;
  onClose: () => void;
  title: string;
  items: Item[];
}) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    const prev = document.body.style.overflow;
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    closeBtnRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div id={id} className='pointer-events-auto fixed inset-0 z-[60] md:hidden'>
      {/* overlay */}
      <button
        aria-label='Close menu by overlay'
        onClick={onClose}
        className='absolute inset-0 z-40 px-4'
      />

      {/* card */}
      <div
        role='dialog'
        aria-modal='true'
        aria-label={`${title} menu`}
        className='w- absolute inset-x-4 top-5 right-4 left-4 z-50 mx-auto h-[812px] rounded-2xl border border-white/10 bg-black/20 p-4 backdrop-blur-[20px]'
      >
        <div className='mx-auto flex h-[34px] w-full items-center justify-between'>
          <div className='text-[20px] leading-[34px] font-bold text-white'>
            {title}
          </div>
          <button
            ref={closeBtnRef}
            onClick={onClose}
            aria-label='Close menu'
            className='grid h-8 w-8 place-items-center rounded-full text-white'
          >
            <Image src='/icons/xclose.svg' alt='mouse' width={24} height={24} />
          </button>
        </div>

        <nav className='mx-auto mt-4 flex w-full flex-col'>
          {items.map((it) => (
            <a
              key={it.href}
              href={it.href}
              onClick={onClose}
              className='flex h-[46px] items-center py-2 text-[16px] leading-[30px] font-medium tracking-[-0.03em] text-white ring-pink-400/40 outline-none focus:ring'
            >
              {it.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
