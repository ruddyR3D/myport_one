'use client';

import React, { useState } from 'react';

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

  return (
    <section
      id='faq'
      className='relative isolate mx-auto flex w-full max-w-[1440px] flex-col items-center bg-neutral-100 py-10 text-white md:py-20'
    >
      <div className='custom-container mx-auto flex w-full flex-col gap-8 md:gap-16'>
        <header className='mx-auto w-full max-w-[847px] text-center'>
          <h2 className='text-display-sm md:text-display-xl leading-[38px] font-bold tracking-[-0.02em] text-neutral-950 md:leading-[56px] md:tracking-[-0.03em]'>
            Let’s Clear Things Up
          </h2>
          <p className='md:text-md text-sm leading-7 text-neutral-950 md:leading-[30px]'>
            I&rsquo;ve answered a few questions that usually come up when
            working with a frontend developer like me.
          </p>
        </header>

        <ul className='gap- flex w-full flex-col'>
          {ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <li key={item.no} className='w-full'>
                <div className='flex w-full items-start gap-3 py-5 md:gap-10'>
                  <div className='flex w-[28px] justify-center md:w-[48px]'>
                    <span className='md:text-display-xs text-lg leading-8 font-semibold text-neutral-950 tabular-nums md:leading-9'>
                      {item.no}
                    </span>
                  </div>

                  <div className='min-w-0 flex-1'>
                    <h3 className='md:text-display-xs min-w-0 text-lg leading-8 font-semibold tracking-[-0.02em] text-neutral-950 md:leading-9 md:tracking-[-0.03em]'>
                      {item.q}
                    </h3>
                    {isOpen && (
                      <p
                        id={`faq-panel-${item.no}`}
                        className='md:text-md mt-2 text-sm leading-7 font-medium text-neutral-700 md:mt-3 md:leading-[30px]'
                      >
                        {item.a}
                      </p>
                    )}
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
                          ? 'bg-[#B76080] hover:shadow-[0_0_32px_rgba(183,96,128,0.8)] focus-visible:ring-2 focus-visible:ring-[#860D39]/100'
                          : 'bg-white ring-1 ring-neutral-300 ring-inset hover:shadow-[0_0_32px_rgba(0,0,0,0.6)] focus-visible:ring-2 focus-visible:ring-neutral-950/20',
                      ].join(' ')}
                    >
                      {isOpen ? (
                        <svg
                          width='16'
                          height='16'
                          viewBox='0 0 24 24'
                          fill='none'
                          className='md:h-6 md:w-6'
                        >
                          <path
                            d='M12 5v14M5 12h14'
                            stroke='#FFFFFF'
                            strokeWidth='2'
                            strokeLinecap='round'
                          />
                        </svg>
                      ) : (
                        <svg
                          width='16'
                          height='16'
                          viewBox='0 0 24 24'
                          fill='none'
                          className='md:h-6 md:w-6'
                        >
                          <path
                            d='M5 12h14'
                            stroke='#0a0d12'
                            strokeWidth='2'
                            strokeLinecap='round'
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                {i < ITEMS.length - 1 && (
                  <div className='my-5'>
                    <div className='h-px w-full bg-neutral-300' />
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
