'use client';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqData = [
  {
    id: 1,
    question: 'What technologies do you work with?',
    answer:
      'I mainly work with HTML, CSS, JavaScript, and frameworks like React, Next.js, and Vue. I also have experience using Tailwind CSS, TypeScript, and working with APIs.',
  },
  {
    id: 2,
    question: 'Do you work on freelance or remote projects?',
    answer:
      'Yes, I am available for freelance and remote projects. Feel free to discuss your project needs with me.',
  },
  {
    id: 3,
    question: 'Can you convert Figma or Sketch designs into code?',
    answer:
      'Absolutely. I am proficient in translating UI/UX designs from tools like Figma and Sketch into high-quality, responsive front-end code.',
  },
  {
    id: 4,
    question: 'Do you collaborate with backend developers or teams?',
    answer:
      'Yes, I frequently collaborate with backend developers and integrated teams, ensuring smooth API integration and workflow alignment.',
  },
  {
    id: 5,
    question: 'Are you available for full-time roles?',
    answer:
      "I consider full-time opportunities based on project alignment and long-term potential. Let's discuss the specifics of the role.",
  },
] as const;

type FAQItem = (typeof faqData)[number];

type FAQItemProps = {
  item: FAQItem;
  isOpen: boolean;
  toggleAccordion: (id: number) => void;
};

const FAQRow: React.FC<FAQItemProps> = ({ item, isOpen, toggleAccordion }) => {
  return (
    <div className='mx-auto flex w-full flex-col'>
      <button
        type='button'
        className='flex w-full items-center justify-between text-left'
        onClick={() => toggleAccordion(item.id)}
        aria-expanded={isOpen}
        aria-controls={`faq-content-${item.id}`}
      >
        <div className='flex flex-1 items-center gap-3 md:gap-10'>
          <span className='w-6 text-left text-lg font-semibold text-black md:text-2xl'>
            {String(item.id).padStart(2, '0')}
          </span>
          <h3 className='flex-1 text-base font-semibold text-[#0A0D12] md:text-2xl'>
            {item.question}
          </h3>
        </div>

        <div
          className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors duration-300 md:h-12 md:w-12 ${
            isOpen
              ? 'bg-[#B76080] text-white'
              : 'border border-neutral-300 bg-white text-neutral-950 ring-1 ring-neutral-300'
          }`}
          aria-hidden
        >
          {isOpen ? (
            <Plus className='h-4 w-4 md:h-6 md:w-6' />
          ) : (
            <Minus className='h-4 w-4 md:h-6 md:w-6' />
          )}
        </div>
      </button>

      <div
        id={`faq-content-${item.id}`}
        role='region'
        aria-labelledby={`faq-heading-${item.id}`}
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className='pl-10 text-sm font-medium text-[#414651] md:pl-16 md:text-base md:leading-8'>
          {item.answer}
        </p>
      </div>
    </div>
  );
};

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(faqData[0].id);

  const toggleAccordion = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className='relative isolate mx-auto flex w-full max-w-[1440px] flex-col items-center bg-neutral-100 py-10 text-white md:py-20'>
      <div className='custom-container mx-auto flex w-full flex-col gap-8 md:gap-16'>
        <header className='mx-auto flex w-full flex-col items-center gap-2 text-center text-black md:gap-4'>
          <h2 className='text-3xl font-bold md:text-5xl'>
            Let’s Clear Things Up
          </h2>
          <p className='text-sm font-medium md:text-base'>
            I’ve answered a few questions that usually come up when working with
            a frontend developer like me.
          </p>
        </header>

        <ul role='list' className='mx-auto flex w-full flex-col gap-5'>
          {faqData.map((item, index) => (
            <li key={item.id} className='w-full'>
              <FAQRow
                item={item}
                isOpen={openId === item.id}
                toggleAccordion={toggleAccordion}
              />
              {index < faqData.length - 1 && (
                <hr className='mt-5 w-full border-t border-[#D5D7DA]' />
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
