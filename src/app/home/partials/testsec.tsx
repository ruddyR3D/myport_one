'use client';

import * as React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

type Testimony = {
  name: string;
  role: string;
  rating: 1 | 2 | 3 | 4 | 5;
  feedback: string;
  avatar: string;
};

const DATA: Testimony[] = [
  {
    name: 'Thom Haye',
    role: 'Project Manager',
    rating: 5,
    feedback:
      'Working with Edwin Anderson was a smooth experience from start to finish. He translated our design into clean, responsive code and even suggested improvements we hadn’t thought of. Highly recommended!',
    avatar: '/images/testi1.png',
  },
  {
    name: 'Emily Carter',
    role: 'Head of Product',
    rating: 5,
    feedback:
      'Working with Edwin Anderson was a smooth experience from start to finish. He translated our design into clean, responsive code and even suggested improvements we hadn’t thought of. Highly recommended!',
    avatar: '/images/testi2.png',
  },
  {
    name: 'Sarah Lee',
    role: 'Engineering Manager',
    rating: 4,
    feedback:
      'Working with Edwin Anderson was a smooth experience from start to finish. He translated our design into clean, responsive code and even suggested improvements we hadn’t thought of. Highly recommended!',
    avatar: '/images/testi3.png',
  },
  {
    name: 'Michael Brown',
    role: 'Lead Developer',
    rating: 5,
    feedback:
      'Working with Edwin Anderson was a smooth experience from start to finish. He translated our design into clean, responsive code and even suggested improvements we hadn’t thought of. Highly recommended!',
    avatar: '/images/testi1.png',
  },
  {
    name: 'Sarah Tan',
    role: 'Product Manager at Finovate',
    rating: 5,
    feedback:
      'Working with Edwin Anderson was a smooth experience from start to finish. He translated our design into clean, responsive code and even suggested improvements we hadn’t thought of. Highly recommended!',
    avatar: '/images/testi2.png',
  },
];

export default function TesSection() {
  const [idx, setIdx] = React.useState(0);
  const next = () => setIdx((p) => (p + 1) % DATA.length);
  const prev = () => setIdx((p) => (p - 1 + DATA.length) % DATA.length);

  const getItem = (o: number) => DATA[(idx + o + DATA.length) % DATA.length];
  const top = getItem(0);
  const mid = getItem(1);
  const bot = getItem(2);

  const StarRow = ({ count }: { count: number }) => (
    <div className='flex items-center gap-1'>
      {Array.from({ length: count }).map((_, i) => (
        <Image
          key={i}
          src='/icons/star.svg'
          alt='star'
          width={24}
          height={24}
          className='h-6 w-6'
        />
      ))}
    </div>
  );

  const Card = ({
    item,
    layer,
  }: {
    item: Testimony;
    layer: 'top' | 'mid' | 'bot';
  }) => {
    const layerStyles =
      layer === 'top'
        ? 'z-[30] scale-100 translate-y-0 shadow-xl bg-primary-300 text-white'
        : layer === 'mid'
          ? 'z-[20] top-9 scale-[0.92] md:top-4 md:scale-[0.92] -translate-y-1 md:translate-y-6 bg-[#D4A0B3] text-white/95 shadow-lg'
          : 'z-[10] top-6 scale-[0.85] md:top-6 md:scale-[0.85] translate-y-9 md:translate-y-12 bg-primary-100 text-white/90 shadow-md';

    return (
      <article
        className={[
          'absolute top-0 left-1/2 w-full max-w-[1200px] -translate-x-1/2',
          'rounded-2xl px-6 py-8 md:rounded-3xl md:px-10 md:py-8',
          'transition-all duration-500 will-change-transform',
          layerStyles,
        ].join(' ')}
      >
        <div className='mx-auto flex max-w-[1120px] flex-col items-center gap-6'>
          <StarRow count={item.rating} />
          <p className='text-center text-[16px] leading-[30px] tracking-[-0.03em] md:text-[24px] md:leading-[36px]'>
            “{item.feedback}”
          </p>
          <div className='flex flex-col items-center gap-3'>
            <Image
              src={item.avatar}
              alt={`${item.name} avatar`}
              width={64}
              height={64}
              className='h-16 w-16 rounded-full object-cover'
            />
            <div className='flex flex-col items-center'>
              <span className='text-[18px] leading-[32px] font-semibold tracking-[-0.03em]'>
                {item.name}
              </span>
              <span className='text-[14px] leading-[28px] tracking-[-0.03em] opacity-90 md:text-[16px] md:leading-[30px]'>
                {item.role}
              </span>
            </div>
          </div>
        </div>
      </article>
    );
  };

  return (
    <section className='relative isolate mx-auto flex w-full max-w-[1440px] flex-col items-center bg-transparent py-10 text-white md:py-20'>
      <div className='custom-container mx-auto flex w-full flex-col gap-8 md:gap-16'>
        <div className='mx-auto flex w-full flex-col items-center gap-2 text-[#0A0D12]'>
          <h2 className='text-display-sm w-full max-w-[847px] text-center leading-[38px] font-bold tracking-[-0.02em] md:text-[40px] md:leading-[56px] md:tracking-[-0.03em]'>
            What They Say About Working With Me
          </h2>
          <p className='md:text-md w-full max-w-[847px] text-center text-sm leading-[28px] font-medium tracking-[-0.03em] md:leading-[30px]'>
            Real words from clients, teammates, and mentors I’ve collaborated
            with on various projects.
          </p>
        </div>

        <div className='relative mx-auto flex w-full flex-col gap-12 md:gap-6'>
          <div className='relative z-[2] h-[473px] w-full md:h-[440px]'>
            <Card item={bot} layer='bot' />
            <Card item={mid} layer='mid' />
            <Card item={top} layer='top' />
          </div>
          <div className='flex items-center justify-center gap-3'>
            <Button
              aria-label='Previous testimonial'
              onClick={prev}
              variant='outline'
              size='default'
              className='group size-[45px] rounded-full border border-[#D5D7DA] bg-white p-[10px] ring-1 ring-[#E5E7EB] hover:bg-transparent hover:shadow-[0_0_32px_rgba(0,0,0,0.6)] focus-visible:ring-2 focus-visible:ring-neutral-950/20'
              title='Previous'
            >
              <Image
                src='/icons/left2.svg'
                alt='Prev'
                width={24}
                height={24}
                className='transition group-hover:brightness-500 group-hover:invert'
              />
            </Button>
            <Button
              aria-label='Next testimonial'
              onClick={next}
              variant='outline'
              size='default'
              className='group size-[45px] rounded-full border border-[#D5D7DA] bg-white p-[10px] ring-1 ring-[#E5E7EB] hover:bg-transparent hover:shadow-[0_0_32px_rgba(0,0,0,0.6)] focus-visible:ring-2 focus-visible:ring-neutral-950/20'
              title='Next'
            >
              <Image
                src='/icons/right2.svg'
                alt='Next'
                width={24}
                height={24}
                className='transition group-hover:brightness-500 group-hover:invert'
              />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
