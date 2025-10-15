'use client';

import Image from 'next/image';
import { useCallback, useState, ChangeEvent, FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import Modal from '@/components/modals/Modal';
import { motion, useReducedMotion, type Variants } from 'framer-motion';

type FormState = {
  senderEmail: string;
  senderName: string;
  contentMessage: string;
};

export default function ContactShowcaseSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalSuccess, setIsModalSuccess] = useState(false);
  const [formData, setFormData] = useState<FormState>({
    senderEmail: '',
    senderName: '',
    contentMessage: '',
  });

  const reduce = useReducedMotion();

  const sectionDrop: Variants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: -24 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: [0.16, 1, 0.3, 1],
        when: 'beforeChildren',
        staggerChildren: 0.18,
        delayChildren: 0.08,
      },
    },
  };

  const itemDrop: Variants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: -14 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const tinyDrop: Variants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
  };

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        const res = await fetch('/api/send', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData satisfies FormState),
        });

        const ok = res.ok;
        setIsModalSuccess(ok);
        setIsModalOpen(true);
        if (ok) {
          setFormData({ senderEmail: '', senderName: '', contentMessage: '' });
        }
      } catch {
        setIsModalSuccess(false);
        setIsModalOpen(true);
      }
    },
    [formData]
  );

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  return (
    <motion.section
      id='contact'
      variants={sectionDrop}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.2, margin: '-10% 0% -10% 0%' }}
      className='relative isolate mx-auto flex w-full max-w-[1440px] flex-col items-center bg-transparent py-10 md:py-30'
    >
      <motion.div
        variants={sectionDrop}
        className='custom-container mx-auto flex w-full flex-col gap-8 md:gap-16'
      >
        <motion.div
          variants={sectionDrop}
          className='grid w-full grid-cols-1 items-start gap-6 md:grid-cols-2 md:gap-12'
        >
          <motion.div
            variants={itemDrop}
            className='flex min-w-0 flex-col gap-6 md:gap-10'
          >
            <motion.div
              variants={itemDrop}
              className='flex flex-col gap-2 md:gap-3'
            >
              <motion.h2
                variants={tinyDrop}
                className='text-display-sm leading-[38px] font-bold tracking-[-0.02em] text-neutral-950 md:text-[40px] md:leading-[56px] md:tracking-[-0.03em]'
              >
                Let’s Work Together
              </motion.h2>

              <motion.p
                variants={tinyDrop}
                className='letter-spacing-xxs text-sm font-medium text-neutral-950 md:text-[16px]'
              >
                Have a project in mind or just want to say hi? Drop me a message
                — I’d love to hear from you.
              </motion.p>
            </motion.div>

            <motion.div
              variants={itemDrop}
              className='flex-cols flex justify-between gap-3.5 md:justify-start md:gap-5'
            >
              {[
                { src: '/images/image-1.png', alt: 'Portfolio image 1' },
                { src: '/images/image-2.png', alt: 'Portfolio image 2' },
                { src: '/images/image-3.png', alt: 'Portfolio image 3' },
              ].map((img, i) => (
                <motion.div
                  key={img.src}
                  variants={tinyDrop}
                  transition={{ delay: 0.05 * i }}
                  className='relative h-[110px] w-[110px] overflow-hidden rounded-sm md:h-[142px] md:w-[142px] md:rounded-xs'
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes='(min-width: 768px) 142px, 110px'
                    className='object-cover'
                    priority={i === 0}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div variants={itemDrop} className='min-w-0 pt-40 md:pt-0'>
            <motion.div
              variants={itemDrop}
              className='relative z-[1] rounded-2xl bg-white p-4 text-neutral-950 shadow-[0_0_28px_rgba(197,197,197,0.25)] md:rounded-[24px] md:p-8'
            >
              <Image
                src='/images/contact.png'
                alt='Contact illustration'
                width={192}
                height={170}
                className='absolute -top-40 left-1/2 z-10 -translate-x-1/2'
                priority
              />

              <motion.form
                onSubmit={handleSubmit}
                variants={sectionDrop}
                className='flex flex-col gap-5 md:gap-6'
                noValidate
              >
                <motion.div
                  variants={tinyDrop}
                  className='flex flex-col gap-1.5 md:gap-[6px]'
                >
                  <label
                    htmlFor='senderName'
                    className='text-sm leading-7 font-bold text-neutral-950'
                  >
                    Name
                  </label>
                  <input
                    id='senderName'
                    name='senderName'
                    type='text'
                    placeholder='Enter your name'
                    value={formData.senderName}
                    onChange={handleChange}
                    required
                    aria-invalid={
                      formData.senderName.trim() === '' ? 'true' : 'false'
                    }
                    className='focus:border-primary-300 h-12 w-full rounded-xl border border-neutral-300 bg-white px-4 text-[16px] leading-[30px] font-medium text-neutral-600 ring-0 outline-none'
                  />
                </motion.div>

                <motion.div
                  variants={tinyDrop}
                  className='flex flex-col gap-1.5 md:gap-[6px]'
                >
                  <label
                    htmlFor='senderEmail'
                    className='text-sm leading-7 font-bold text-neutral-950'
                  >
                    Email
                  </label>
                  <input
                    id='senderEmail'
                    name='senderEmail'
                    type='email'
                    placeholder='Enter your email'
                    value={formData.senderEmail}
                    onChange={handleChange}
                    required
                    aria-invalid={
                      /^\S+@\S+\.\S+$/.test(formData.senderEmail)
                        ? 'false'
                        : 'true'
                    }
                    className='focus:border-primary-300 h-12 w-full rounded-xl border border-neutral-300 bg-white px-4 text-sm leading-[30px] font-medium text-neutral-600 ring-0 outline-none'
                  />
                </motion.div>

                <motion.div
                  variants={tinyDrop}
                  className='flex flex-col gap-1.5 md:gap-[6px]'
                >
                  <label
                    htmlFor='contentMessage'
                    className='text-sm leading-7 font-bold text-neutral-950'
                  >
                    Message
                  </label>
                  <textarea
                    id='contentMessage'
                    name='contentMessage'
                    placeholder='Enter your message..'
                    value={formData.contentMessage}
                    onChange={handleChange}
                    required
                    aria-invalid={
                      formData.contentMessage.trim() === '' ? 'true' : 'false'
                    }
                    className='focus:border-primary-300 h-[134px] w-full resize-none rounded-xl border border-neutral-300 bg-white px-4 py-2 text-sm leading-[30px] font-medium text-neutral-600 ring-0 outline-none'
                  />
                </motion.div>

                <motion.div variants={tinyDrop}>
                  <Button
                    type='submit'
                    className='bg-primary-300 inline-flex h-12 w-full items-center justify-center gap-1 rounded-full text-sm leading-7 font-bold text-white transition hover:opacity-90 active:opacity-80 md:h-12'
                  >
                    Let’s Talk
                  </Button>
                </motion.div>
              </motion.form>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen((v) => !v)}
        isSuccess={isModalSuccess}
      />
    </motion.section>
  );
}
