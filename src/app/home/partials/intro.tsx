'use client';

import * as React from 'react';

const IntroSection: React.FC = () => {
  return (
    <section
      id='about'
      className='relative isolate mx-auto flex w-full max-w-[1440px] flex-col items-center bg-transparent py-10 text-white md:py-20'
    >
      <div className='custom-container mx-auto flex w-full flex-col'>
        <div className='mx-auto flex h-[190px] w-full md:h-[132px] md:w-[892px]'>
          <p className='text-display-sm line-height md:text-display-lg md:text-line-height text-center leading-tight font-medium tracking-[-0.05em] text-neutral-950 md:tracking-[-0.02em]'>
            As frontend developers , we bring designs to life with{' '}
            <span className='text-primary-200'>clean, responsive code</span>{' '}
            that blends creativity 🎨 with usability 🌟.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
