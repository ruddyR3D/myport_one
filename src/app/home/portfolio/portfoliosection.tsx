import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface PortfolioItem {
  imageSrc: string;
  category: string;
  title: string;
  description: string;
  link: string;
}

const allPortfolioData: PortfolioItem[] = [
  {
    imageSrc: '/images/image1.png',
    category: 'Web Development',
    title: 'Best Portfolio 1',
    description: 'A responsive web application for e-commerce.',
    link: '/portfolio/detail-1',
  },
  {
    imageSrc: '/images/image2.png',
    category: 'Web Development',
    title: 'Best Portfolio 2',
    description: 'A dynamic personal blog platform.',
    link: '/portfolio/detail-2',
  },
  {
    imageSrc: '/images/image3.png',
    category: 'Web Development',
    title: 'Best Portfolio 3',
    description: 'An interactive dashboard for data visualization.',
    link: '/portfolio/detail-3',
  },
  // create new all item portfolio global
  {
    imageSrc: '/images/image4.png',
    category: 'Mobile App',
    title: 'Mobile App Design',
    description: 'User-friendly mobile app interface design.',
    link: '/portfolio/detail-4',
  },
  {
    imageSrc: '/images/image5.png',
    category: 'UI/UX Design',
    title: 'Website Redesign',
    description: 'Modern and intuitive website redesign project.',
    link: '/portfolio/detail-5',
  },
];

const PortfolioPage: React.FC = () => {
  return (
    <div className='relative mx-auto flex w-full max-w-[1440px] flex-col items-center bg-transparent py-10 text-neutral-950 md:py-20'>
      <div className='custom-container mx-auto flex w-full flex-col gap-8 px-4 md:gap-16'>
        <h1 className='text-center text-3xl font-bold md:text-5xl'>
          All My Portfolio Projects
        </h1>
        <p className='text-center text-lg text-neutral-800'>
          Explore the full range of my creative and technical work.
        </p>

        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {allPortfolioData.map((portfolio, index) => (
            <Link
              key={index}
              href={portfolio.link}
              className='group flex flex-col overflow-hidden rounded-[20px] shadow-sm transition-transform duration-300 ease-in-out hover:scale-[1.01] hover:shadow-lg'
            >
              {/* Image Container */}
              <div className='relative flex h-[361px] w-full items-center justify-center rounded-t-[20px] bg-neutral-100 p-4'>
                <Image
                  src={portfolio.imageSrc}
                  alt={portfolio.title}
                  width={354}
                  height={354}
                  className='h-full w-full rounded-md object-cover'
                />
              </div>

              {/* Info Container */}
              <div className='flex w-full flex-col justify-between gap-3 rounded-b-[20px] bg-neutral-100 p-4'>
                <p className='text-sm font-medium text-neutral-800 md:text-base'>
                  {portfolio.category}
                </p>
                <h3 className='text-lg leading-tight font-bold text-neutral-950 md:text-xl'>
                  {portfolio.title}
                </h3>
                <div className='h-px w-full bg-neutral-300' />
                <p className='text-sm leading-tight font-medium text-neutral-800 md:text-base'>
                  {portfolio.description}
                </p>
                <Button
                  variant='outline'
                  size='circle'
                  className='bg-accent-100 hover:bg-accent-200 size-9 self-end'
                >
                  <Image
                    src='/icons/arrow.svg'
                    alt='View Portfolio'
                    width={20}
                    height={20}
                  />
                </Button>
              </div>
            </Link>
          ))}
        </div>

        <div className='mt-8 text-center'>
          <Link href='/' passHref>
            <Button variant='outline'>
              <span className='text-base leading-loose font-semibold text-neutral-950'>
                Back to Home
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
