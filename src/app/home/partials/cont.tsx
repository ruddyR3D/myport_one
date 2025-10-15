'use client';

import Image from 'next/image';
import React from 'react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Modal from '@/components/modals/Modal';

export default function ContactShowcaseSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalSuccess, setIsModalSuccess] = useState(false);

  const [formData, setFormData] = useState({
    senderEmail: '',
    senderName: '',
    contentMessage: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Pesan berhasil dikirim!');
        // Reset form setelah pengiriman berhasil
        setFormData({
          senderEmail: '',
          senderName: '',
          contentMessage: '',
        });
        setIsModalSuccess(true);
        setIsModalOpen(true);
      } else {
        console.log('Gagal');
        setIsModalSuccess(false);
        setIsModalOpen(true);
      }
    } catch (e) {
      setIsModalSuccess(false);
      setIsModalOpen(true);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id='contact'
      className='relative isolate mx-auto flex w-full max-w-[1440px] flex-col items-center bg-transparent py-10 md:py-30'
    >
      <div className='custom-container mx-auto flex w-full flex-col gap-8 md:gap-16'>
        {/* GRID 2 KOLOM KUAT (desktop) → 1 KOLOM (mobile) */}
        <div className='grid w-full grid-cols-1 items-start gap-6 md:grid-cols-2 md:gap-12'>
          {/* LEFT: Title + Copy + 3 images */}
          <div className='flex min-w-0 flex-col gap-6 md:gap-10'>
            {/* Heading & subcopy */}
            <div className='flex flex-col gap-2 md:gap-3'>
              <h2 className='text-display-sm leading-[38px] font-bold tracking-[-0.02em] text-neutral-950 md:text-[40px] md:leading-[56px] md:tracking-[-0.03em]'>
                Let’s Work Together
              </h2>

              <p className='letter-spacing-xxs text-sm font-medium text-neutral-950 md:text-[16px]'>
                Have a project in mind or just want to say hi? Drop me a message
                — I’d love to hear from you.
              </p>
            </div>

            {/* Thumbnails: image-1, image-2, image-3 */}
            <div className='flex-cols flex justify-between gap-3.5 md:justify-start md:gap-5'>
              {/* image-1 (rounded) */}
              <div className='relative h-[110px] w-[110px] overflow-hidden rounded-sm md:h-[142px] md:w-[142px] md:rounded-xs'>
                <Image
                  src='/images/image-1.png'
                  alt='Portfolio image 1'
                  fill
                  sizes='(min-width: 768px) 142px, 110px'
                  className='object-cover'
                  priority
                />
              </div>

              {/* image-2 */}
              <div className='relative h-[110px] w-[110px] overflow-hidden rounded-sm md:h-[142px] md:w-[142px] md:rounded-xs'>
                <Image
                  src='/images/image-2.png'
                  alt='Portfolio image 2'
                  fill
                  sizes='(min-width: 768px) 142px, 110px'
                  className='object-cover'
                />
              </div>

              {/* image-3 */}
              <div className='relative h-[110px] w-[110px] overflow-hidden rounded-sm md:h-[142px] md:w-[142px] md:rounded-xs'>
                <Image
                  src='/images/image-3.png'
                  alt='Portfolio image 3'
                  fill
                  sizes='(min-width: 768px) 142px, 110px'
                  className='object-cover'
                />
              </div>
            </div>
          </div>

          {/* RIGHT: Contact Card */}
          <div className='min-w-0 pt-40 md:pt-0'>
            <div className='relative z-[1] rounded-2xl bg-white p-4 text-neutral-950 shadow-[0_0_28px_rgba(197,197,197,0.25)] md:rounded-[24px] md:p-8'>
              {' '}
              {/* Top Illustration */}
              <Image
                src='/images/contact.png'
                alt='Contact'
                width={192}
                height={170}
                className='absolute -top-40 left-1/2 z-10 -translate-x-1/2'
                priority
              />
              <form
                onSubmit={handleSubmit}
                className='flex flex-col gap-5 md:gap-6'
              >
                {/* Name */}
                <div className='flex flex-col gap-1.5 md:gap-[6px]'>
                  <label
                    htmlFor='name'
                    className='text-sm leading-7 font-bold text-neutral-950'
                  >
                    Name
                  </label>
                  <input
                    id='name'
                    name='name'
                    type='text'
                    placeholder='Enter your name'
                    className='focus:border-primary-300 h-12 w-full rounded-xl border border-neutral-300 bg-white px-4 text-[16px] leading-[30px] font-medium text-neutral-600 ring-0 outline-none'
                  />
                </div>

                {/* Email */}
                <div className='flex flex-col gap-1.5 md:gap-[6px]'>
                  <label
                    htmlFor='email'
                    className='text-sm leading-7 font-bold text-neutral-950'
                  >
                    Email
                  </label>
                  <input
                    id='email'
                    name='email'
                    type='email'
                    placeholder='Enter your email'
                    className='focus:border-primary-300 h-12 w-full rounded-xl border border-neutral-300 bg-white px-4 text-sm leading-[30px] font-medium text-neutral-600 ring-0 outline-none'
                  />
                </div>

                {/* Message */}
                <div className='flex flex-col gap-1.5 md:gap-[6px]'>
                  <label
                    htmlFor='message'
                    className='text-sm leading-7 font-bold text-neutral-950'
                  >
                    Message
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    placeholder='Enter your message..'
                    className='focus:border-primary-300 h-[134px] w-full resize-none rounded-xl border border-neutral-300 bg-white px-4 py-2 text-sm leading-[30px] font-medium text-neutral-600 ring-0 outline-none'
                  />
                </div>

                {/* Submit */}
                <Button
                  type='submit'
                  className='bg-primary-300 inline-flex h-12 w-full items-center justify-center gap-1 rounded-full text-sm leading-7 font-bold text-white transition hover:opacity-90 active:opacity-80 md:h-12'
                >
                  Let’s Talk
                </Button>
              </form>
              {/* Optional: elemen dekoratif bisa ditempatkan absolut di sini bila perlu */}
              {/* <div className="pointer-events-none absolute -top-6 right-8 h-24 w-24 rounded-full bg-white/10 blur-2xl" /> */}
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(!isModalOpen)}
        isSuccess={isModalSuccess}
      />
    </section>
  );
}
