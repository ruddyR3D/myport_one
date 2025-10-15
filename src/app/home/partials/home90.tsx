'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home90() {
  return (
    <section
      id='home'
      className='relative isolate mx-auto w-full max-w-360 overflow-hidden bg-[#A53F65]'
    >
      {/* ===== Background (shared) ===== */}
      <div className='absolute inset-0 -z-10'>
        {/* base white sheet */}
        <div className='absolute top-[-0.83px] left-1/2 h-213 w-[1199px] -translate-x-1/2 bg-white md:top-0 md:h-256 md:w-full' />
        {/* mesh */}
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
        {/* tint */}
        <div className='absolute inset-0 top-[-0.83px] bg-[#A53860]/[0.94]' />
      </div>

      {/* ================================================================= */}
      {/* =============================== MOBILE ========================== */}
      {/* ================================================================= */}
      <div className='custom-container relative mx-auto flex h-257 w-full flex-col md:hidden'>
        {/* intro card (mic + headline + paragraph) */}
        <div className='relative top-22 z-10 flex h-[429px] w-full flex-col gap-[25px]'>
          <div className='flex h-[178px] w-full flex-col items-start gap-2'>
            <div className='flex h-12 w-12 items-center justify-center rounded-full border border-[#B76080] p-[6px]'>
              <Image src='/icons/mic.svg' alt='mic' width={14} height={20} />
            </div>
            <div className='text-md flex h-[30px] w-full leading-[30px] font-bold tracking-[-0.02em]'>
              Hi, I&apos;m R3D Creative
            </div>
            <p className='flex h-21 w-full text-sm leading-7 font-medium'>
              a frontend developer passionate about creating seamless digital
              experiences that are fast, responsive, and user-friendly.
            </p>
          </div>

          {/* metrics */}
          <div className='flex h-56.5 w-full flex-col gap-5'>
            {/* row 1 */}
            <div className='flex w-full items-start justify-between'>
              <div className='flex min-w-0 flex-1 flex-col items-start gap-[3px]'>
                <p className='text-display-md leading-10.5 font-bold tracking-[-0.02em]'>
                  2+
                </p>
                <p className='text-xs leading-6 font-semibold tracking-[-0.03em]'>
                  Years Experience
                </p>
              </div>
              <div className='mx-15 flex h-[69px] items-center'>
                <div className='h-full border-l border-[#B76080]' />
              </div>
              <div className='flex min-w-0 flex-1 flex-col items-start gap-[3px]'>
                <p className='text-display-md leading-10.5 font-bold tracking-[-0.02em]'>
                  99%
                </p>
                <p className='text-xs leading-6 font-semibold tracking-[-0.03em]'>
                  Client Satisfaction
                </p>
              </div>
            </div>
            {/* row 2 */}
            <div className='flex w-full items-start justify-between'>
              <div className='flex min-w-0 flex-1 flex-col items-start gap-[3px]'>
                <p className='text-display-md leading-10.5 font-bold tracking-[-0.02em]'>
                  3
                </p>
                <p className='text-xs leading-6 font-semibold tracking-[-0.03em]'>
                  Project Delivered
                </p>
              </div>
              <div className='mx-15 flex h-[69px] items-center'>
                <div className='h-full border-l border-[#B76080]' />
              </div>
              <div className='flex min-w-0 flex-1 flex-col items-start gap-[3px]'>
                <p className='text-display-md leading-10.5 font-bold tracking-[-0.02em]'>
                  50
                </p>
                <p className='text-xs leading-6 font-semibold tracking-[-0.03em]'>
                  Clients Worldwide
                </p>
              </div>
            </div>

            {/* CTA (pill kuning + tombol bulat hitam) */}
            {/* <Button
              asChild
              className='bg-secondary-100 mt-2 flex h-12 w-full items-center justify-between rounded-full pr-2 pl-4 text-neutral-950 focus-visible:ring-2 focus-visible:ring-neutral-950/20'
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
            </Button> */}
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
        {/* handwritten Junior tag */}
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
        {/* FRONTEND/DEVELOPER (image) */}
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
        {/* developer outline image overlay */}
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
        {/* Available for Hire pill */}
        <div className='absolute top-[555px] left-1/2 z-50 inline-flex h-8 w-38 -translate-x-1/2 items-center gap-[6px] rounded-full border border-[#B76080] bg-[#860D39] px-4 py-1 whitespace-nowrap'>
          <span className='h-2 w-2 rounded-full bg-[#E26190]' />
          <span className='text-xs font-semibold'>Available for Hire</span>
        </div>
        {/* portrait */}
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
        {/* decorative stars */}
        <div className='absolute top-181.5 left-[-28px] flex h-22.5 w-22.5 rotate-[15deg] opacity-80'>
          <div className='relative h-full w-full'>
            <Image
              src='/images/redstar2.png'
              alt='redstar'
              fill
              priority
              className='object-contain object-center'
            />
          </div>
        </div>
        <div className='absolute top-[871px] right-[2px] z-10 flex h-24.5 w-24.5 rotate-[deg] opacity-80'>
          <div className='relative h-full w-full'>
            <Image
              src='/images/redstar2.png'
              alt='redstar'
              fill
              priority
              className='object-contain object-center'
            />
          </div>
        </div>
        {/* scroll down */}
        <div className='absolute top-245 bottom-8 left-1/2 z-50 inline-flex -translate-x-1/2 items-center gap-2 whitespace-nowrap'>
          <span className='text-xs leading-none font-semibold'>
            Scroll Down
          </span>
          <Image src='/icons/mouse.svg' alt='mouse' width={20} height={20} />
        </div>
      </div>

      {/* ================================================================= */}
      {/* =============================== DESKTOP ========================= */}
      {/* ================================================================= */}
      <div className='custom-container relative hidden h-256 w-full md:block'>
        {/* badge */}
        <div className='bg-primary-400 border-primary-300 absolute top-[227px] left-1/2 z-40 inline-flex h-9.5 -translate-x-1/2 items-center gap-2 rounded-full border px-4 whitespace-nowrap'>
          <span className='inline-block h-4 w-4 rounded-full bg-[#E26190]' />
          <span className='text-[16px] leading-none font-semibold'>
            Available for Hire
          </span>
        </div>
        {/* redstar (desktop) — anchor center, offset 1440 */}
        <div className='absolute top-181.5 left-1/2 flex h-[74px] w-[74px] -translate-x-[415px] md:top-[365px] md:h-[166px] md:w-[166px]'>
          <div className='relative h-full w-full'>
            <Image
              src='/images/redstar2.png'
              alt='Junior'
              fill
              className='object-contain'
            />
          </div>
        </div>
        {/* Junior DESKTOP — anchor center, offset 1440 */}
        <div className='-rotate-[10 deg] absolute top-[624px] left-[17px] z-40 flex h-[81px] w-[116px] md:top-[210px] md:left-1/2 md:h-[142px] md:w-[202px] md:-translate-x-[410px]'>
          <div className='relative h-full w-full'>
            <Image
              src='/images/junior.png'
              alt='Junior'
              fill
              className='object-contain'
            />
          </div>
        </div>
        {/* redstar3 DESKTOP — anchor center, offset 1440 */}
        <div className='absolute top-[871px] left-[292px] flex h-24.5 w-24.5 translate-x-0 md:top-[755px] md:left-1/2 md:h-[166px] md:w-[166px] md:translate-x-[170px]'>
          <div className='relative h-full w-full'>
            <Image
              src='/images/redstar.png'
              alt='Junior'
              fill
              className='object-contain'
            />
          </div>
        </div>
        <div className='absolute bottom-8 left-1/2 z-50 inline-flex -translate-x-1/2 items-center gap-2 whitespace-nowrap'>
          <span className='text-[16px] leading-none font-semibold'>
            Scroll Down
          </span>
          <Image src='/icons/mouse.svg' alt='scroll' width={24} height={24} />
        </div>

        {/* CENTER STACK (tetap di tengah */}
        <div className='custom-container absolute top-0 left-1/2 flex h-257 w-full -translate-x-1/2 md:w-[881px]'>
          {/* FRONTEND + DEVELOPER */}
          <div className='absolute top-163 left-1/2 z-10 flex h-54.5 w-full -translate-x-1/2 md:top-[259px] md:h-[398px] md:w-[658px]'>
            <div className='relative h-full w-full'>
              <Image
                src='/images/group1.png'
                alt='group1'
                fill
                className='object-contain'
              />
            </div>
          </div>

          {/*  DEVELOPER */}
          <div className='absolute top-189.5 left-1/2 z-10 flex h-[113px] w-full -translate-x-1/2 md:top-[452px] md:h-[205px] md:w-[654px]'>
            <div className='relative h-full w-full'>
              <Image
                src='/images/developer.png'
                alt='DEVELOPER'
                fill
                className='object-contain'
              />
            </div>
          </div>
          {/* Portrait */}
          <div className='absolute top-[600px] left-1/2 z-20 flex h-113 w-[375px] -translate-x-1/2 md:top-[289px] md:h-[735px] md:w-[610px]'>
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
          {/* Outline DEVELOPER LINE */}
          <div className='absolute top-189.5 left-1/2 z-30 flex h-[113px] w-full -translate-x-1/2 md:top-[452px] md:h-[205px] md:w-[654px]'>
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

        {/* LEFT: intro — anchor ke center + clamp supaya aman <1440 */}
        <div className='absolute top-[88px] left-[16px] z-20 flex h-[178px] w-full flex-col items-start gap-2 md:top-[614px] md:left-[max(16px,calc(50%-720px+120px))] md:h-[221px] md:w-[451px] md:gap-3.5'>
          <div className='flex h-12 w-[48px] items-center justify-center rounded-full border border-[#B76080] p-[6px] md:h-[63px] md:w-[63px]'>
            {/* mic mobile (20px) */}
            <Image
              src='/icons/mic.svg'
              alt='mic'
              width={14}
              height={20}
              className='block md:hidden'
            />
            {/* mic desktop (26px) */}
            <Image
              src='/icons/mic.svg'
              alt='mic'
              width={18}
              height={26}
              className='hidden md:block'
            />
          </div>

          <div className='flex h-[30px] w-full text-[16px] leading-[30px] font-bold tracking-[-0.02em] whitespace-nowrap text-white md:h-[34px] md:w-[451px] md:text-[20px] md:leading-[34px]'>
            Hi, I’m R3D Creative
          </div>
          <p className='/* desktop overrides */ flex h-21 w-full text-lg leading-7 font-medium text-white md:h-[96px] md:w-[451px] md:text-[18px] md:leading-[32px]'>
            a frontend developer passionate about creating seamless digital
            experiences that are fast, responsive, and user-friendly.
          </p>
        </div>

        {/* Tech rail kiri — ikut kiri yang sama, juga di-clamp */}
        <div
          className='absolute z-20 flex rounded-full border border-[#B76080] md:flex md:flex-col md:items-center md:justify-center'
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
            ['/icons/html.svg', 40.5],
            ['/icons/react.svg', 44],
          ].map(([src, size], i) => (
            <div
              key={String(src)}
              className={`${
                i !== 3 ? 'mb-[21.78px]' : ''
              } relative flex h-[69.43px] w-[69.43px] items-center justify-center rounded-full border border-[#B76080]`}
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

        {/* RIGHT: metrics + CTA — anchor ke center + clamp kanan */}
        <div className='left- absolute top-[291px] z-20 flex h-[266px] w-full md:top-[237px] md:left-[min(calc(100%-16px-222px),calc(50%+720px-222px-120px))] md:h-[568px] md:w-[222px]'>
          <div className='flex h-full w-full flex-col gap-5'>
            {/* ====== Item 1 ====== */}
            <div>
              <div className='flex flex-col gap-[3px]'>
                <div className='text-display-md leading-10.5 font-bold md:text-[48px] md:leading-[60px]'>
                  2+
                </div>
                <div className='text-xs leading-6 font-semibold md:text-[16px] md:leading-[30px]'>
                  Years Experience
                </div>
              </div>
              <div className='mt-5 h-px w-full bg-[#B76080] md:mt-5' />
            </div>

            {/* ====== Item 2 ====== */}
            <div>
              <div className='flex flex-col gap-[3px]'>
                <div className='text-display-md leading-10.5 font-bold md:text-[48px] md:leading-[60px]'>
                  99%
                </div>
                <div className='text-xs leading-6 font-semibold md:text-[16px] md:leading-[30px]'>
                  Client Satisfaction
                </div>
              </div>
              <div className='mt-5 h-px w-full bg-[#B76080] md:mt-5' />
            </div>

            {/* ====== Item 3 ====== */}
            <div>
              <div className='flex flex-col gap-[3px]'>
                <div className='text-display-md leading-10.5 font-bold md:text-[48px] md:leading-[60px]'>
                  3
                </div>
                <div className='text-xs leading-6 font-semibold md:text-[16px] md:leading-[30px]'>
                  Project Delivered
                </div>
              </div>
              <div className='mt-5 h-px w-full bg-[#B76080] md:mt-5' />
            </div>

            {/* ====== Item 4 ====== */}
            <div>
              <div className='flex flex-col gap-[3px]'>
                <div className='text-display-md leading-10.5 font-bold md:text-[48px] md:leading-[60px]'>
                  50
                </div>
                <div className='text-xs leading-6 font-semibold md:text-[16px] md:leading-[30px]'>
                  Clients Worldwide
                </div>
              </div>
              {/* divider terakhir tidak diperlukan di desktop tingginya cukup */}
            </div>

            {/* ====== CTA pill kuning + tombol bulat hitam ====== */}
            {/* <Button
              asChild
              className='bg-secondary-100 mt-2 inline-flex h-12 w-full items-center justify-between rounded-full pr-2 pl-4 text-neutral-950 focus-visible:ring-2 focus-visible:ring-neutral-950/20 md:h-14 md:w-[222px]'
            >
              <Link
                href='#contact'
                aria-label='Go to Contact section'
                className='flex w-full items-center justify-between'
              >
                <span className='text-sm leading-7 font-semibold md:text-[16px] md:leading-none'>
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
            </Button> */}
            <Button
              asChild
              className='bg-secondary-100 mt-2 inline-flex h-12 w-full items-center justify-between rounded-full pr-2 pl-4 text-neutral-950 hover:text-white hover:shadow-[0_0_32px_rgba(248,162,4,0.6)] focus-visible:ring-2 focus-visible:ring-neutral-950/20 md:h-14 md:w-[222px]'
            >
              <Link
                href='#contact'
                aria-label='Go to Contact section'
                className='flex w-full items-center justify-between'
              >
                <span className='text-sm leading-7 font-semibold md:text-[16px] md:leading-none'>
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
    </section>
  );
}
