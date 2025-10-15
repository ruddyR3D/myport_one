'use client';

import * as React from 'react';
import Image from 'next/image';

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
  return (
    <section className='bg- w-full'>
      <div className='mx-auto w-full max-w-[1440px] py-10 md:py-20'>
        <div className='custom-container mx-auto flex w-full flex-col gap-6 md:gap-12'>
          <div className='flex flex-col items-center gap-2'>
            <h2 className='text-display-sm md:text-display-xl text-center font-bold text-neutral-950'>
              More Than Just Code
            </h2>
            <p className='md:text-md text-center text-sm font-medium text-neutral-950'>
              We care about design, performance, and user experience all in one.
            </p>
          </div>

          <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
            <div className='bg-secondary-100 flex h-full flex-col items-center justify-center gap-6 rounded-xl px-4 py-8 md:h-[620px] md:gap-8 md:p-8'>
              <div className='flex flex-col items-center gap-3'>
                <div className='text-center text-[18px] leading-8 font-bold text-[#0A0D12]'>
                  With Me
                </div>

                <div className='grid h-20 w-20 shrink-0 place-items-center overflow-hidden rounded-full bg-[#B76080] md:h-[100px] md:w-[100px]'>
                  <Image
                    src='/images/redstar.png'
                    alt='portrait'
                    width={86}
                    height={104}
                    className='object-contain object-center'
                    priority={false}
                  />
                </div>
              </div>

              <ul className='flex w-full max-w-[524px] flex-col items-center justify-center gap-3 md:gap-6'>
                {POSITIVES.map((it, i) => (
                  <li
                    key={i}
                    className='flex w-full items-center justify-center gap-3'
                  >
                    <span className='grid h-6 w-6 shrink-0 place-items-center'>
                      <Image
                        src='/icons/checklist2.svg'
                        alt='Check'
                        width={24}
                        height={24}
                      />
                    </span>
                    <span className='text-center text-[16px] leading-[30px] font-semibold tracking-[-0.03em] text-[#0A0D12] md:text-[18px] md:leading-8'>
                      {it.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className='flex h-full flex-col items-center justify-center gap-6 rounded-xl border border-[#D5D7DA] px-4 py-8 md:h-[620px] md:gap-8 md:p-8'>
              <div className='flex flex-col items-center gap-3'>
                <div className='text-center text-[18px] leading-8 font-semibold text-[#0A0D12]'>
                  Another Talent
                </div>

                <div className='grid h-20 w-20 shrink-0 place-items-center overflow-hidden rounded-full bg-[#D5D7DA] md:h-[100px] md:w-[100px]'>
                  <Image
                    src='/images/placeholder.png'
                    alt='Profile'
                    width={45}
                    height={45}
                    className='object-contain object-center'
                  />
                </div>
              </div>
              <div className='flex w-full max-w-[524px] flex-col items-center gap-3 md:gap-6'>
                <ul className='flex w-full max-w-[524px] flex-col items-center justify-center gap-3 md:gap-6'>
                  {NEGATIVES.map((it, i) => (
                    <li
                      key={i}
                      className='flex w-full items-center justify-center gap-3'
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
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
