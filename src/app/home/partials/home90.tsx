'use client';

import * as React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  motion,
  useReducedMotion,
  useMotionValue,
  animate,
} from 'framer-motion';

function useCountUp(target: number, duration = 1.2) {
  const ref = React.useRef<HTMLSpanElement | null>(null);
  const mv = useMotionValue(0);
  React.useEffect(() => {
    const controls = animate(mv, target, { duration });
    const unsub = mv.on('change', (v) => {
      if (ref.current) ref.current.textContent = String(Math.round(v));
    });
    return () => {
      controls.stop();
      unsub();
    };
  }, [target, duration, mv]);
  return ref;
}
function Count({
  value,
  suffix = '',
  className = '',
}: {
  value: number;
  suffix?: string;
  className?: string;
}) {
  const r = useCountUp(value);
  return (
    <span className={`tabular-nums ${className}`}>
      <span ref={r} aria-hidden='true' />
      {suffix}
    </span>
  );
}

export default function Home90() {
  const prefersReduce = useReducedMotion();

  return (
    <motion.section
      id='home'
      initial={prefersReduce ? { opacity: 0 } : { opacity: 0, y: -24 }}
      whileInView={prefersReduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.35, margin: '-10% 0% -10% 0%' }}
      className='relative isolate mx-auto w-full max-w-360 overflow-hidden bg-[#A53F65]'
    >
      <div className='absolute inset-0 -z-10'>
        <div className='absolute top-[-0.83px] left-1/2 h-213 w-[1199px] -translate-x-1/2 bg-white md:top-0 md:h-256 md:w-full' />

        <div className='pointer-events-none absolute top-[-0.83px] left-1/2 h-213 w-[1199px] -translate-x-1/2 md:top-0 md:h-256 md:w-full'>
          <div className='relative h-full w-full'>
            <Image
              src='/images/bghero.png'
              alt=''
              fill
              priority
              sizes='100vw'
              className='object-cover object-center mix-blend-luminosity'
            />
          </div>
        </div>

        <div className='absolute inset-0 top-[-0.83px] bg-[#A53860]/[0.94]' />
      </div>

      {/* ================================================================= */}
      {/* =============================== MOBILE ========================== */}
      {/* ================================================================= */}
      <div className='custom-container relative mx-auto flex h-257 w-full flex-col md:hidden'>
        <div className='relative top-22 z-10 flex h-[429px] w-full flex-col gap-[25px]'>
          <div className='flex h-44.5 w-full flex-col items-start gap-2'>
            <div className='border-primary-300 flex h-12 w-12 items-center justify-center rounded-full border p-[6px]'>
              <Image src='/icons/mic.svg' alt='mic' width={14} height={20} />
            </div>
            <div className='text-md flex h-7.5 w-full leading-[30px] font-bold tracking-[-0.02em]'>
              Hi, I&apos;m R3D Creative
            </div>
            <p className='flex h-21 w-full text-sm leading-7 font-medium'>
              a frontend developer passionate about creating seamless digital
              experiences that are fast, responsive, and user-friendly.
            </p>
          </div>

          <div className='flex h-56.5 w-full flex-col gap-5'>
            <div className='flex w-full items-start justify-between'>
              <div className='flex min-w-0 flex-1 flex-col items-start gap-[3px]'>
                <p className='text-display-md leading-10.5 font-bold tracking-[-0.02em]'>
                  <Count value={2} suffix='+' />
                </p>
                <p className='text-xs leading-6 font-semibold tracking-[-0.03em]'>
                  Years Experience
                </p>
              </div>
              <div className='mx-15 flex h-[69px] items-center'>
                <div className='border-primary-300 h-full border-l' />
              </div>
              <div className='flex min-w-0 flex-1 flex-col items-start gap-[3px]'>
                <p className='text-display-md leading-10.5 font-bold tracking-[-0.02em]'>
                  <Count value={99} suffix='%' />
                </p>
                <p className='text-xs leading-6 font-semibold tracking-[-0.03em]'>
                  Client Satisfaction
                </p>
              </div>
            </div>

            <div className='flex w-full items-start justify-between'>
              <div className='flex min-w-0 flex-1 flex-col items-start gap-[3px]'>
                <p className='text-display-md leading-10.5 font-bold tracking-[-0.02em]'>
                  <Count value={3} />
                </p>
                <p className='text-xs leading-6 font-semibold tracking-[-0.03em]'>
                  Project Delivered
                </p>
              </div>
              <div className='mx-15 flex h-[69px] items-center'>
                <div className='border-primary-300 h-full border-l' />
              </div>
              <div className='flex min-w-0 flex-1 flex-col items-start gap-[3px]'>
                <p className='text-display-md leading-10.5 font-bold tracking-[-0.02em]'>
                  <Count value={50} />
                </p>
                <p className='text-xs leading-6 font-semibold tracking-[-0.03em]'>
                  Clients Worldwide
                </p>
              </div>
            </div>

            <Button
              asChild
              className='bg-secondary-100 mt-2 flex h-12 w-full items-center justify-between rounded-full pr-2 pl-4 text-neutral-950 hover:text-white hover:shadow-[0_0_32px_rgba(248,162,4,0.6)] focus-visible:ring-2 focus-visible:ring-neutral-950/20'
            >
              <Link
                href='#contact'
                aria-label='Go to Contact section'
                className='flex w-full items-center justify-between'
              >
                <span className='text-sm leading-7 font-semibold'>
                  Contact Me
                </span>

                <span className='grid h-9 w-9 place-items-center rounded-full bg-neutral-950 text-white'>
                  <Image
                    src='/icons/right2.svg'
                    alt='go'
                    width={18}
                    height={18}
                  />
                </span>
              </Link>
            </Button>
          </div>
        </div>

        <div className='left-4 max-w-[393px] min-w-[393px]'>
          <div className='absolute top-158.5 left-[5px] z-30 flex h-[81px] w-32.5 -rotate-[5deg]'>
            <div className='relative h-full w-full'>
              <Image
                src='/images/junior.png'
                alt='Junior'
                fill
                priority
                className='object-contain object-left-top'
              />
            </div>
          </div>
        </div>

        <div className='absolute top-163 left-1/2 z-10 flex h-54.5 w-[357px] -translate-x-1/2'>
          <div className='relative h-full w-full'>
            <Image
              src='/images/group1.png'
              alt='group1'
              fill
              priority
              className='object-contain object-center'
            />
          </div>
        </div>
        <div className='absolute top-189.5 left-1/2 z-10 flex h-27.5 w-[353px] -translate-x-1/2'>
          <div className='relative h-full w-full'>
            <Image
              src='/images/developer.png'
              alt='developerline'
              fill
              priority
              className='object-contain object-center'
            />
          </div>
        </div>

        <div className='absolute top-189.5 left-1/2 z-30 flex h-27.5 w-[353px] -translate-x-1/2'>
          <div className='relative h-full w-full'>
            <Image
              src='/images/developerline.png'
              alt='developerline'
              fill
              priority
              className='object-contain object-center'
            />
          </div>
        </div>

        <div className='border-primary-300 bg-primary-400 absolute top-[555px] left-1/2 z-50 inline-flex h-8 w-38 -translate-x-1/2 items-center gap-[6px] rounded-full border px-4 py-1 whitespace-nowrap'>
          <span className='h-2 w-2 rounded-full bg-[#E26190]' />
          <span className='text-xs font-semibold'>Available for Hire</span>
        </div>

        <div className='absolute top-144 left-1/2 z-20 flex h-113 w-[375px] -translate-x-1/2'>
          <div className='relative h-full w-full'>
            <Image
              src='/images/hero2.png'
              alt='Portrait'
              fill
              priority
              className='object-contain object-center'
            />
          </div>
        </div>

        <motion.div
          className='absolute top-181.5 left-[-28px] flex h-22.5 w-22.5 opacity-80'
          style={{ willChange: 'transform', transformOrigin: '50% 50%' }}
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, ease: 'linear', duration: 18 }}
        >
          <div className='relative h-full w-full'>
            <Image
              src='/images/redstar2.png'
              alt='redstar'
              fill
              priority
              className='object-contain object-center'
            />
          </div>
        </motion.div>

        <motion.div
          className='absolute top-[871px] right-[2px] z-10 flex h-24.5 w-24.5 opacity-80'
          style={{ willChange: 'transform', transformOrigin: '50% 50%' }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, ease: 'linear', duration: 18 }}
        >
          <div className='relative h-full w-full'>
            <Image
              src='/images/redstar2.png'
              alt='redstar'
              fill
              priority
              className='object-contain object-center'
            />
          </div>
        </motion.div>

        <motion.div
          className='absolute top-245 bottom-8 left-1/2 z-50 inline-flex -translate-x-1/2 items-center gap-2 whitespace-nowrap'
          animate={prefersReduce ? {} : { y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
        >
          <span className='text-xs leading-none font-semibold'>
            Scroll Down
          </span>
          <Image src='/icons/mouse.svg' alt='mouse' width={20} height={20} />
        </motion.div>
      </div>

      {/* ================================================================= */}
      {/* =============================== DESKTOP ========================= */}
      {/* ================================================================= */}
      <div className='custom-container relative hidden h-256 w-full md:block'>
        <div className='bg-primary-400 border-primary-300 absolute top-[227px] left-1/2 z-40 inline-flex h-9.5 -translate-x-1/2 items-center gap-2 rounded-full border px-4 whitespace-nowrap'>
          <span className='inline-block h-4 w-4 rounded-full bg-[#E26190]' />
          <span className='md:text-md text-xs leading-none font-semibold'>
            Available for Hire
          </span>
        </div>

        <motion.div
          className='absolute top-[365px] left-1/2 flex h-41.5 w-41.5 -translate-x-[415px]'
          style={{ willChange: 'transform', transformOrigin: '50% 50%' }}
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, ease: 'linear', duration: 18 }}
        >
          <div className='relative h-full w-full'>
            <Image
              src='/images/redstar2.png'
              alt='Junior'
              fill
              className='object-contain'
            />
          </div>
        </motion.div>

        <div className='absolute top-156 left-[17px] z-40 flex h-[81px] w-29 -rotate-[2deg] md:top-52.5 md:left-1/2 md:h-35.5 md:w-50.5 md:-translate-x-[410px]'>
          <div className='relative h-full w-full'>
            <Image
              src='/images/junior.png'
              alt='Junior'
              fill
              className='object-contain'
            />
          </div>
        </div>

        <motion.div
          className='absolute md:top-[755px] md:left-1/2 md:h-41.5 md:w-41.5 md:translate-x-[170px]'
          style={{ willChange: 'transform', transformOrigin: '50% 50%' }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, ease: 'linear', duration: 18 }}
        >
          <div className='relative h-full w-full'>
            <Image
              src='/images/redstar.png'
              alt='Junior'
              fill
              className='object-contain'
            />
          </div>
        </motion.div>

        <motion.div
          className='absolute bottom-8 left-1/2 z-50 inline-flex -translate-x-1/2 items-center gap-2 whitespace-nowrap'
          animate={prefersReduce ? {} : { y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
        >
          <span className='md:text-md text-xs leading-none font-semibold'>
            Scroll Down
          </span>
          <Image src='/icons/mouse.svg' alt='scroll' width={24} height={24} />
        </motion.div>

        <div className='custom-container absolute top-0 left-1/2 flex h-257 w-full -translate-x-1/2 md:w-[881px]'>
          <div className='absolute top-163 left-1/2 z-10 flex h-54.5 w-full -translate-x-1/2 md:top-[259px] md:h-99.5 md:w-164.5'>
            <div className='relative h-full w-full'>
              <Image
                src='/images/group1.png'
                alt='group1'
                fill
                className='object-contain'
              />
            </div>
          </div>

          <div className='absolute top-189.5 left-1/2 z-10 flex h-[113px] w-full -translate-x-1/2 md:top-113 md:h-[205px] md:w-163.5'>
            <div className='relative h-full w-full'>
              <Image
                src='/images/developer.png'
                alt='DEVELOPER'
                fill
                className='object-contain'
              />
            </div>
          </div>

          <div className='absolute top-150 left-1/2 z-20 flex h-113 w-[375px] -translate-x-1/2 md:top-[289px] md:h-[735px] md:w-152.5'>
            <div className='relative h-full w-full'>
              <Image
                src='/images/hero.png'
                alt='Portrait'
                fill
                priority
                className='object-contain'
              />
            </div>
          </div>

          <div className='absolute top-189.5 left-1/2 z-30 flex h-[113px] w-full -translate-x-1/2 md:top-113 md:h-[205px] md:w-163.5'>
            <div className='relative h-full w-full'>
              <Image
                src='/images/developerline.png'
                alt='DEVELOPERLINE'
                fill
                className='object-contain'
              />
            </div>
          </div>
        </div>

        <div className='absolute top-22 left-4 z-20 flex h-44.5 w-full flex-col items-start gap-2 md:top-153.5 md:left-[max(16px,calc(50%-720px+120px))] md:h-[221px] md:w-[451px] md:gap-3.5'>
          <div className='border-primary-300 flex h-12 w-12 items-center justify-center rounded-full border p-[6px] md:h-[63px] md:w-[63px]'>
            <Image
              src='/icons/mic.svg'
              alt='mic'
              width={14}
              height={20}
              className='block md:hidden'
            />

            <Image
              src='/icons/mic.svg'
              alt='mic'
              width={18}
              height={26}
              className='hidden md:block'
            />
          </div>

          <div className='text-md flex h-[30px] w-full leading-[30px] font-bold tracking-[-0.02em] whitespace-nowrap text-white md:h-[34px] md:w-[451px] md:text-xl md:leading-[34px]'>
            Hi, I’m R3D Creative
          </div>
          <p className='flex h-21 w-full text-sm leading-7 font-medium text-white md:h-24 md:w-[451px] md:text-lg md:leading-[32px]'>
            a frontend developer passionate about creating seamless digital
            experiences that are fast, responsive, and user-friendly.
          </p>
        </div>

        <div
          className='border-primary-300 absolute z-20 flex rounded-full border md:flex md:flex-col md:items-center md:justify-center'
          style={{
            left: 'max(16px, calc(50% - 720px + 120px))',
            top: 107,
            width: 113,
            height: 408,
          }}
        >
          {[
            ['/icons/js.svg', 40],
            ['/icons/css.svg', 40],
            ['/icons/html.svg', 40],
            ['/icons/react.svg', 44],
          ].map(([src, size], i) => (
            <div
              key={String(src)}
              className={`${
                i !== 3 ? 'mb-[21.78px]' : ''
              } border-primary-300 relative flex h-[69.43px] w-[69.43px] items-center justify-center rounded-full border`}
            >
              {i === 2 && (
                <div className='absolute top-[18.52px] left-[23.14px] h-[31.25px] w-[23.14px] bg-white' />
              )}
              <div
                className='relative z-[1]'
                style={{ width: size as number, height: size as number }}
              >
                <Image
                  src={src as string}
                  alt=''
                  fill
                  className='object-contain'
                />
              </div>
            </div>
          ))}
        </div>

        <div className='left- absolute top-[291px] z-20 flex h-66.5 w-full md:top-[237px] md:left-[min(calc(100%-16px-222px),calc(50%+720px-222px-120px))] md:h-142 md:w-55.5'>
          <div className='flex h-full w-full flex-col gap-5'>
            <div>
              <div className='flex flex-col gap-[3px]'>
                <div className='text-display-md md:text-display-2xl leading-10.5 font-bold md:leading-[60px]'>
                  <Count value={2} suffix='+' />
                </div>
                <div className='text-xs leading-6 font-semibold md:text-[16px] md:leading-[30px]'>
                  Years Experience
                </div>
              </div>
              <div className='bg-primary-300 mt-5 h-px w-full md:mt-5' />
            </div>

            <div>
              <div className='flex flex-col gap-[3px]'>
                <div className='text-display-md md:text-display-2xl leading-10.5 font-bold md:leading-[60px]'>
                  <Count value={99} suffix='%' />
                </div>
                <div className='md:text-md text-xs leading-6 font-semibold md:leading-[30px]'>
                  Client Satisfaction
                </div>
              </div>
              <div className='bg-primary-300 mt-5 h-px w-full md:mt-5' />
            </div>

            <div>
              <div className='flex flex-col gap-[3px]'>
                <div className='text-display-md md:text-display-2xl leading-10.5 font-bold md:leading-[60px]'>
                  <Count value={3} />
                </div>
                <div className='md:text-md text-xs leading-6 font-semibold md:leading-[30px]'>
                  Project Delivered
                </div>
              </div>
              <div className='bg-primary-300 mt-5 h-px w-full md:mt-5' />
            </div>

            <div>
              <div className='flex flex-col gap-[3px]'>
                <div className='text-display-md md:text-display-2xl leading-10.5 font-bold md:leading-[60px]'>
                  <Count value={50} />
                </div>
                <div className='md:text-md text-xs leading-6 font-semibold md:leading-[30px]'>
                  Clients Worldwide
                </div>
              </div>
            </div>

            <Button
              asChild
              className='bg-secondary-100 mt-2 inline-flex h-12 w-full items-center justify-between rounded-full pr-2 pl-4 text-neutral-950 hover:text-white hover:shadow-[0_0_32px_rgba(248,162,4,0.6)] focus-visible:ring-2 focus-visible:ring-neutral-950/20 md:h-14 md:w-55.5'
            >
              <Link
                href='#contact'
                aria-label='Go to Contact section'
                className='flex w-full items-center justify-between'
              >
                <span className='md:text-md text-sm leading-7 font-semibold md:leading-none'>
                  Contact Me
                </span>

                <span className='grid h-9 w-9 place-items-center rounded-full bg-neutral-950 text-white md:h-10 md:w-10'>
                  <Image
                    src='/icons/right2.svg'
                    alt='go'
                    width={18}
                    height={18}
                  />
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
