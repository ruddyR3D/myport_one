'use client';
import React from 'react';
import { cn } from '@/lib/utils';

interface ServiceItem {
  icon: string;
  title: string;
  description: string;
}

const servicesData: ServiceItem[] = [
  {
    icon: '⚙️',
    title: 'COMPONENT-BASED DEVELOPMENT',
    description:
      'Reusable, scalable code built with modern frameworks like React or Vue.',
  },
  {
    icon: '🎨',
    title: 'PIXEL-PERFECT UI IMPLEMENTATION',
    description:
      'Translating design into high-fidelity user interfaces with attention to detail.',
  },
  {
    icon: '📱',
    title: 'RESPONSIVE & ACCESSIBLE DESIGN',
    description:
      'Optimized layouts that work seamlessly across all screen sizes and devices.',
  },
];

const ServiceCard: React.FC<ServiceItem & { className?: string }> = ({
  icon,
  title,
  description,
  className,
}) => {
  return (
    <div className={cn('flex flex-col items-start gap-3 md:gap-4', className)}>
      <div className='flex size-[48px] items-center justify-center rounded-full border border-neutral-300 md:size-[63px] md:border-[1.3125px]'>
        <span className='text-[24px] leading-[28px] font-bold text-black md:text-[32px] md:leading-[36px]'>
          {icon}
        </span>
      </div>

      <h3 className='text-lg leading-8 font-bold text-neutral-950 md:text-2xl md:leading-9'>
        {title}
      </h3>

      <p className='text-sm leading-7 font-normal tracking-[-0.03em] text-neutral-950 md:text-base md:leading-loose'>
        {description}
      </p>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  return (
    <section
      className={cn(
        'relative isolate mx-auto flex w-full max-w-[1440px] flex-col items-center bg-transparent py-10 text-neutral-950 md:py-20'
      )}
    >
      <div className='custom-container mx-auto flex w-full flex-col gap-4 md:flex-row md:gap-10'>
        {servicesData.map((service, index) => (
          <React.Fragment key={index}>
            <ServiceCard
              icon={service.icon}
              title={service.title}
              description={service.description}
              className=''
            />

            {index < servicesData.length - 1 && (
              <>
                <div className='block h-px w-full bg-neutral-300 md:hidden' />

                <div className='hidden h-[176px] w-px shrink-0 translate-y-7 bg-neutral-300 md:block' />
              </>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
