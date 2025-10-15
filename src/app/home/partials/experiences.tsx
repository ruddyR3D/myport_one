'use client';

import * as React from 'react';
import Image from 'next/image';

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
  return (
    <section className='relative isolate mx-auto flex w-full max-w-[1440px] flex-col items-center bg-neutral-950 py-10 md:py-20'>
      <div className='custom-container mx-auto flex w-full flex-col gap-8 md:gap-16'>
        {/* Header */}
        <div className='mx-auto flex w-full flex-col gap-6 md:flex-row md:items-start md:justify-between md:gap-2'>
          <h2 className='text-display-sm text-neutral-25 md:text-display-xl max-w-[365px] leading-[38px] font-bold tracking-[-0.02em] md:mx-0 md:leading-[56px] md:tracking-[-0.03em]'>
            Experiences That{' '}
            <span className='text-secondary-100'>Shaped Me</span>!
          </h2>
          <p className='text-neutral-25 w-full text-sm leading-[28px] font-semibold tracking-[-0.02em] md:mx-0 md:w-[366px] md:text-lg md:leading-[32px] md:tracking-[-0.03em]'>
            From startups to side projects, every step has been a chance to
            learn, build, and level up.
          </p>
        </div>

        <div className='mx-auto w-full max-w-[1242px]'>
          <hr className='w-full border-neutral-800' />
        </div>

        <div className='mx-auto flex w-full max-w-[1200px] flex-col'>
          {JOBS.map((job, i) => (
            <React.Fragment key={i}>
              <div className='flex flex-col gap-6 md:flex-row md:items-start md:justify-between md:gap-[50px] lg:gap-[98px]'>
                <div className='flex w-full max-w-[178px] flex-col gap-1 md:mx-0'>
                  <span className='text-sm leading-[28px] font-medium text-neutral-400'>
                    {job.period}
                  </span>
                  <span className='text-md text-neutral-25 leading-[30px] font-bold md:text-xl md:leading-[34px]'>
                    {job.role}
                  </span>
                </div>

                <div className='h-[71px] w-[121px] flex-shrink-0 items-center justify-center md:mx-0 md:h-[112px] md:w-[192px]'>
                  <div className='h-[71px] rounded-2xl border border-neutral-800 bg-neutral-950 p-1 md:h-[112px] md:p-1.75'>
                    <div className='h-[60px] rounded-2xl border border-neutral-800 bg-neutral-950 p-6 md:h-[96px]'>
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
              </div>

              {i < JOBS.length - 1 && (
                <>
                  <div className='hidden md:block'>
                    <hr className='my-8 w-full border-neutral-800' />
                  </div>
                  <div className='md:hidden'>
                    <hr className='my-6 w-full border-neutral-800' />
                  </div>
                </>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
