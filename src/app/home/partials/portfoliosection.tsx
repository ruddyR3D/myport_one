'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

type PortfolioItem = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  href: string;
  best?: boolean;
};

const ITEMS: PortfolioItem[] = [
  {
    id: 'p1',
    title: 'Portfolio 1',
    category: 'Web Development',
    description:
      'We translated design mockups into pixel-perfect, responsive components, ensuring a smooth user experience across all devices.',
    image: '/images/project9.png',
    href: '/portfolio/1',
    best: true,
  },
  {
    id: 'p2',
    title: 'Portfolio 2',
    category: 'Web Development',
    description:
      'We translated design mockups into pixel-perfect, responsive components, ensuring a smooth user experience across all devices.',
    image: '/images/project8.png',
    href: '/portfolio/2',
    best: true,
  },
  {
    id: 'p3',
    title: 'Portfolio 3',
    category: 'Web Development',
    description:
      'We translated design mockups into pixel-perfect, responsive components, ensuring a smooth user experience across all devices.',
    image: '/images/image-2.png',
    href: '/portfolio/3',
    best: true,
  },
];

export default function PortfolioSection() {
  return (
    <section
      id='projects'
      className='relative isolate mx-auto flex w-full max-w-[1440px] flex-col items-center bg-transparent py-10 md:py-20'
    >
      <div className='custom-container mx-auto flex w-full flex-col gap-6 md:gap-12'>
        {/* Header */}
        <div className='mx-auto flex w-full max-w-[1200px] flex-col gap-6'>
          <div className='flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between'>
            <div className='max-w-[686px]'>
              <h2 className='text-display-sm md:text-display-xl text-left font-bold tracking-[-0.04em] text-neutral-950 md:leading-[56px] md:tracking-[-0.03em]'>
                Design to{' '}
                <span className='text-primary-300'>Code Accuracy</span>
              </h2>
              <p className='spacing-[2px] md:text-md mt-2 text-sm font-medium text-neutral-950 md:leading-[30px] md:tracking-[-0.03em]'>
                We translated design mockups into pixel-perfect, responsive
                components, ensuring a smooth user experience across all
                devices.
              </p>
            </div>

            {/* See All (button bulat menuju halaman lain) */}
            <Button
              asChild
              className='h-14 w-full justify-between rounded-full border border-neutral-300 bg-transparent pr-2 pl-4 text-neutral-950 hover:shadow-[0_0_32px_rgba(0,0,0,0.6)] focus-visible:ring-2 focus-visible:ring-neutral-950/20 md:w-[156px] md:justify-center md:pr-1 md:pl-4'
            >
              <Link
                href='/portfolio'
                aria-label='See All Portfolios'
                className='inline-flex items-center gap-2'
              >
                <span className='text-[16px] leading-[30px] font-[600] md:w-[88px]'>
                  See All
                </span>
                <span className='inline-flex size-9 items-center justify-center rounded-full bg-neutral-950 text-neutral-950'>
                  <Image
                    src='/icons/rightw.svg'
                    alt='arrow right'
                    width={20}
                    height={20}
                    className='text-white'
                  />
                </span>
              </Link>
            </Button>
          </div>
        </div>

        {/* Cards */}
        <div className='mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-3'>
          {ITEMS.map((item) => (
            <article key={item.id} className='flex flex-col'>
              {/* Image container */}
              <div className='relative isolate flex aspect-square w-full max-w-full items-center rounded-2xl bg-neutral-100 p-4 md:aspect-square'>
                {/* Badge Best Portfolio */}
                {item.best && (
                  <div className='pointer-events-none absolute top-7 left-0 z-[2] -translate-x-2'>
                    <Image
                      src='/icons/best.svg'
                      alt='Best Portfolio'
                      width={97}
                      height={29}
                      className='mr-2'
                    />
                  </div>
                )}

                {/* Image */}
                <div className='relative z-[1] h-full w-full overflow-hidden rounded-lg'>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes='(max-width: 768px) 100vw, 33vw'
                    className='object-cover'
                    priority
                  />
                </div>
              </div>

              {/* Info + CTA */}
              <div className='flex items-center justify-between rounded-2xl bg-neutral-100 p-4'>
                <div className='mx-auto flex w-full max-w-[95%] flex-col gap-3'>
                  <h3 className='text-[18px] leading-[32px] font-[700] text-neutral-950'>
                    {item.title}
                  </h3>
                  <hr className='border-neutral-300' />
                  <p className='text-[16px] leading-[30px] font-[500] tracking-[-0.03em] text-neutral-600'>
                    {item.category}
                  </p>
                </div>

                {/* Button bulat menuju link card */}
                <Button
                  asChild
                  aria-label={`Open ${item.title}`}
                  className='bg-primary-300 size-9 rounded-full p-2 hover:shadow-[0_0_32px_rgba(183,96,128,0.8)] focus-visible:ring-2 focus-visible:ring-[#B76080]/200'
                >
                  <Link href={item.href}>
                    <Image
                      src='/icons/rightw.svg'
                      alt=''
                      width={20}
                      height={20}
                    />
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
