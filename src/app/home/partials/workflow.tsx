// 'use client';

// import React, { useState, useRef, useEffect, useCallback } from 'react';
// import Image from 'next/image';
// import { cn } from '@/lib/utils';
// import { Button } from '@/components/ui/button';

// interface TechItem {
//   iconSrc: string;
//   title: string;
//   description: string;
//   isFeatured?: boolean;
// }

// const techStackData: TechItem[] = [
//   {
//     iconSrc: '/icons/html.svg',
//     title: 'HTML',
//     description: 'Crafting semantic, accessible HTML structures.',
//     isFeatured: true,
//   },
//   {
//     iconSrc: '/icons/css.svg',
//     title: 'CSS',
//     description: 'Crafting semantic, accessible CSS structures.',
//     isFeatured: false,
//   },
//   {
//     iconSrc: '/icons/js.svg',
//     title: 'Javascript',
//     description: 'Crafting semantic, accessible JavaScript structures.',
//     isFeatured: true,
//   },
//   {
//     iconSrc: '/icons/react.svg',
//     title: 'React',
//     description: 'Crafting semantic, accessible React components.',
//     isFeatured: false,
//   },
//   {
//     iconSrc: '/icons/docker.svg',
//     title: 'Docker',
//     description: 'Streamlining deployment with containerization.',
//     isFeatured: true,
//   },
//   {
//     iconSrc: '/icons/ejs.svg',
//     title: 'EJS',
//     description: 'Building dynamic server-side templates efficiently.',
//     isFeatured: false,
//   },
//   {
//     iconSrc: '/icons/ts.svg',
//     title: 'TypeScript',
//     description: 'Enhancing JavaScript with static type definitions.',
//     isFeatured: true,
//   },
//   {
//     iconSrc: '/icons/mongodb.svg',
//     title: 'MongoDB',
//     description: 'Flexible NoSQL database for modern applications.',
//     isFeatured: false,
//   },
// ];

// const TechCard = React.forwardRef<
//   HTMLDivElement,
//   TechItem & { className?: string }
// >(({ iconSrc, title, description, isFeatured = false, className }, ref) => {
//   return (
//     <div
//       ref={ref}
//       className={cn(
//         'flex w-[215px] flex-shrink-0 flex-col items-center gap-3 rounded-[100px] px-4 py-10 transition-all duration-300 ease-in-out',
//         isFeatured
//           ? 'bg-secondary-100 shadow-md md:shadow-lg'
//           : 'hover:border-primary-200 border border-neutral-300 bg-neutral-50 hover:shadow-sm',
//         className
//       )}
//     >
//       <div
//         className={cn(
//           'flex size-[60px] items-center justify-center rounded-full p-2.5',
//           isFeatured ? 'bg-neutral-25' : 'bg-neutral-100'
//         )}
//       >
//         <Image src={iconSrc} alt={`${title} icon`} width={35} height={35} />
//       </div>

//       <h3 className='text-center text-base leading-loose font-semibold text-neutral-950'>
//         {title}
//       </h3>

//       <p className='min-h-[90px] text-center text-base leading-loose font-normal tracking-[-0.03em] text-neutral-800'>
//         {description}
//       </p>
//     </div>
//   );
// });

// TechCard.displayName = 'TechCard';

// const WorkflowSection: React.FC = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [cardsPerPage, setCardsPerPage] = useState(2);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const cardRef = useRef<HTMLDivElement>(null); //
//   const updateCardsPerPage = useCallback(() => {
//     if (window.innerWidth >= 768) {
//       setCardsPerPage(4);
//     } else {
//       setCardsPerPage(2);
//     }

//     setCurrentIndex(0);
//   }, []);

//   useEffect(() => {
//     updateCardsPerPage();
//     window.addEventListener('resize', updateCardsPerPage);
//     return () => window.removeEventListener('resize', updateCardsPerPage);
//   }, [updateCardsPerPage]);

//   const totalPages = Math.ceil(techStackData.length / cardsPerPage);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
//   };

//   useEffect(() => {
//     if (containerRef.current && cardRef.current) {
//       const cardWidth = cardRef.current.offsetWidth;
//       const gap = 20;

//       const slideDistance = (cardWidth + gap) * cardsPerPage;

//       const scrollLeft = currentIndex * slideDistance;

//       containerRef.current.scrollTo({
//         left: scrollLeft,
//         behavior: 'smooth',
//       });
//     }
//   }, [currentIndex, cardsPerPage]);

//   return (
//     <section className='relative isolate mx-auto flex w-full max-w-[1440px] flex-col items-center bg-gradient-to-b from-transparent to-[rgba(158,56,94,0.1)] py-10 text-white md:py-20'>
//       <div className='custom-container mx-auto flex w-full flex-col items-center gap-8 px-4 md:gap-12'>
//         {/* Header Section */}
//         <div className='flex max-w-[847px] flex-col items-center gap-2 text-center'>
//           <h2 className='text-2xl leading-9 font-bold text-neutral-950 md:text-4xl md:leading-[56px] md:tracking-[-0.03em]'>
//             Code, Design, and Everything in Between
//           </h2>
//           <p className='text-base leading-loose font-medium text-neutral-950 md:text-base md:leading-loose md:tracking-[-0.03em]'>
//             These are the technologies that power my workflow and bring ideas to
//             life.
//           </p>
//         </div>

//         {/* Tech Cards Container */}
//         <div className='relative w-full overflow-hidden'>
//           <div
//             ref={containerRef}
//             className='flex snap-x snap-mandatory flex-row gap-5 overflow-x-hidden transition-transform duration-300 ease-in-out'
//           >
//             {techStackData.map((tech, index) => (
//               <TechCard
//                 key={index}
//                 iconSrc={tech.iconSrc}
//                 title={tech.title}
//                 description={tech.description}
//                 isFeatured={tech.isFeatured}
//                 ref={index === 0 ? cardRef : null}
//                 className='snap-center' //
//               />
//             ))}
//           </div>
//         </div>

//         {/* Navigation Buttons */}
//         <div className='flex flex-row items-center gap-3'>
//           <Button
//             size='ringCircle'
//             variant='ring'
//             className='size-[45.33px]'
//             onClick={handlePrev}
//             disabled={currentIndex === 0} // Disable prev jika di halaman pertama
//           >
//             <Image
//               src='/icons/left2.svg' // Ganti ke arrow.svg, lalu rotate
//               alt='Previous'
//               width={24}
//               height={24}
//             />
//           </Button>

//           <Button
//             size='ringCircle'
//             variant='ring'
//             className='size-[45.33px]'
//             onClick={handleNext}
//             disabled={currentIndex === totalPages - 1} // Disable next jika di halaman terakhir
//           >
//             <Image src='/icons/right2.svg' alt='Next' width={24} height={24} />
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WorkflowSection;

// 90%
'use client';
import * as React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

type Tech = {
  title: string;
  desc: string;
  icon: string; // from /public/icons
  variant: 'gold' | 'light';
};

const TECHS: Tech[] = [
  {
    title: 'HTML',
    desc: 'Crafting semantic, accessible HTML structures.',
    icon: '/icons/html.svg',
    variant: 'gold',
  },
  {
    title: 'CSS',
    desc: 'Modern layouts with Tailwind & CSS custom props.',
    icon: '/icons/css.svg',
    variant: 'light',
  },
  {
    title: 'JS',
    desc: 'Clean, modular, and testable user interactions.',
    icon: '/icons/js.svg',
    variant: 'gold',
  },
  {
    title: 'React',
    desc: 'Composable UI with hooks & patterns that scale.',
    icon: '/icons/react.svg',
    variant: 'light',
  },
  {
    title: 'Next',
    desc: 'App Router, streaming UI, and SEO-first builds.',
    icon: '/icons/next.svg',
    variant: 'gold',
  },
  {
    title: 'Node',
    desc: 'APIs that are fast, typed, and robust.',
    icon: '/icons/node.svg',
    variant: 'light',
  },
];

export default function WorkflowSection() {
  const [index, setIndex] = React.useState(0);
  const [perPage, setPerPage] = React.useState(2);

  React.useEffect(() => {
    const compute = () => {
      // mengikuti breakpoint md: desktop 4, mobile 2
      setPerPage(window.innerWidth >= 768 ? 4 : 2);
    };
    compute();
    window.addEventListener('resize', compute);
    return () => window.removeEventListener('resize', compute);
  }, []);

  const total = TECHS.length;
  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);

  // ukuran tetap agar "kolom kuat tidak terdorong"
  const CARD_W_DESKTOP = 215; // px
  const CARD_W_MOBILE = 165; // px
  const GAP_DESKTOP = 20; // px
  const GAP_MOBILE = 16; // px

  const isDesktop = perPage === 4;
  const cardW = isDesktop ? CARD_W_DESKTOP : CARD_W_MOBILE;
  const gap = isDesktop ? GAP_DESKTOP : GAP_MOBILE;

  const viewportW = isDesktop ? 920 : 361; // sesuai Figma
  const trackW = total * cardW + (total - 1) * gap;
  const translateX = -(index * (cardW + gap));

  return (
    <section
      id='skills'
      className='relative isolate mx-auto flex w-full max-w-[1440px] flex-col items-center bg-transparent py-10 md:py-20'
    >
      <div className='custom-container mx-auto flex w-full flex-col gap-6 md:gap-12'>
        {/* BG gradient sesuai spec */}
        <div className='absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(158,56,94,0)_0%,rgba(158,56,94,0.1)_99.95%)]' />

        {/* Heading */}
        <div className='mx-auto flex w-full flex-col items-center gap-2 text-center md:px-0'>
          <h2 className='text-display-md leading-[38px] font-bold tracking-[-0.06em] text-[#0A0D12] md:text-[40px] md:leading-[56px] md:tracking-[-0.03em]'>
            Code, Design, and Everything in Between
          </h2>
          <p className='px-5 text-sm leading-[28px] font-medium tracking-[-0.03em] text-[#0A0D12] md:text-[16px] md:leading-[30px]'>
            These are the technologies that power my workflow and bring ideas to
            life.
          </p>
        </div>

        {/* Viewport (fixed width so columns stay strong) */}
        {/* Viewport: never > from container */}
        <div className='mx-auto mr-auto flex w-full max-w-[920px] flex-col gap-8 overflow-hidden'>
          {/* Track */}
          <div
            className='flex will-change-transform'
            style={{
              width: `${trackW}px`,
              gap: `${gap}px`,
              transform: `translateX(${translateX}px)`,
              transition: 'transform 280ms cubic-bezier(.22,.61,.36,1)',
            }}
          >
            {TECHS.map((t, i) => (
              <CardTech key={i} tech={t} width={cardW} />
            ))}
          </div>

          {/* Controls */}
          <div className='mx-auto flex items-center gap-3'>
            <Button
              variant='outline'
              onClick={prev}
              aria-label='Previous'
              className='group h-[45px] w-[45px] rounded-full border-[#D5D7DA] p-0 hover:bg-transparent focus-visible:ring-2 focus-visible:ring-black/40 active:bg-black/10'
            >
              <span className='relative inline-block h-6 w-6 transition-[filter] duration-150 group-hover:brightness-0 group-active:brightness-0'>
                <Image src='/icons/left3.svg' alt='Prev' fill />
              </span>
            </Button>

            <Button
              variant='outline'
              onClick={next}
              aria-label='Next'
              className='group h-[45px] w-[45px] rounded-full border-[#D5D7DA] p-0 hover:bg-transparent focus-visible:ring-2 focus-visible:ring-black/40 active:bg-black/10'
            >
              <span className='relative inline-block h-6 w-6 transition-[filter] duration-150 group-hover:brightness-0 group-active:brightness-0'>
                <Image src='/icons/right3.svg' alt='Next' fill />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function CardTech({ tech, width }: { tech: Tech; width: number }) {
  const isGold = tech.variant === 'gold';
  return (
    <div
      className={[
        'flex h-[281px] flex-col items-center gap-3 rounded-[100px] px-4 py-10',
        isGold ? 'bg-secondary-100' : 'border border-[#D5D7DA] bg-[#FDFDFD]',
      ].join(' ')}
      style={{ width }}
    >
      {/* Tech Icon */}
      <div
        className={[
          'grid h-[60px] w-[60px] place-items-center rounded-full',
          isGold ? 'bg-[#FDFDFD]' : 'bg-[#F5F5F5]',
        ].join(' ')}
      >
        <Image src={tech.icon} alt={tech.title} width={36} height={36} />
      </div>

      {/* Texts */}
      <div className='flex w-[140.5px] flex-col items-center md:w-[183px]'>
        <div className='text-center text-[16px] leading-[30px] font-[600] text-[#0A0D12]'>
          {tech.title}
        </div>
        <p className='mt-1 text-center text-[14px] leading-[28px] text-[#252B37] md:text-[16px] md:leading-[30px]'>
          {tech.desc}
        </p>
      </div>
    </div>
  );
}
