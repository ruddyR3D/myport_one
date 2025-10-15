'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { motion, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';

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
      <div className='flex size-12 items-center justify-center rounded-full border border-neutral-300 md:size-[63px] md:border-[1.3125px]'>
        <span className='text-[24px] leading-[28px] font-bold text-black md:text-[32px] md:leading-[36px]'>
          {icon}
        </span>
      </div>

      <h3 className='md:text-display-xs text-lg leading-8 font-bold tracking-[-0.01em] text-neutral-950 md:leading-9'>
        {title}
      </h3>

      <p className='md:text-md font-regular text-sm leading-7 tracking-[-0.03em] text-neutral-950 md:leading-loose'>
        {description}
      </p>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const reduce = useReducedMotion();
  const easeOut = [0.16, 1, 0.3, 1] as const;

  const sectionDrop: Variants = reduce
    ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: -24 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: easeOut },
        },
      };

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12, delayChildren: 0.06 },
    },
  };

  const itemDrop: Variants = reduce
    ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: -14 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.35, ease: easeOut },
        },
      };

  return (
    <motion.section
      className={cn(
        'relative isolate mx-auto flex w-full max-w-360 flex-col items-center bg-transparent py-10 text-neutral-950 md:py-20'
      )}
      variants={sectionDrop}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.2, margin: '10% 0% -6% 0%' }}
    >
      <motion.div
        className='custom-container mx-auto flex w-full flex-col gap-4 md:flex-row md:gap-10'
        variants={container}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.15 }}
      >
        {servicesData.map((service, index) => (
          <React.Fragment key={index}>
            <motion.div variants={itemDrop}>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </motion.div>

            {index < servicesData.length - 1 && (
              <>
                <motion.div
                  className='block h-px w-full bg-neutral-300 md:hidden'
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.div
                  className='hidden h-44 w-px shrink-0 translate-y-7 bg-neutral-300 md:block'
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.2, delay: 0.05 }}
                />
              </>
            )}
          </React.Fragment>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default ServicesSection;
