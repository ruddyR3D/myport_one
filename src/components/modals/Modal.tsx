import Image from 'next/image';
import React from 'react';
import SuccessIcon from '../../../public/images/message-success.png';
import FailedIcon from '../../../public/images/message-failed.png';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  isSuccess: boolean;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, isSuccess }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className='custom-container fixed inset-0 flex bg-transparent'
      style={{ zIndex: 1000 }}
    >
      <div
        className='relative m-auto h-[25rem] w-[30rem] rounded-xl bg-white shadow-lg'
        style={{ zIndex: 1001 }}
      >
        <div
          className={`mb-4 flex justify-center ${isSuccess ? 'bg-secondary-100' : 'bg-neutral-200'} h-1/2 rounded-t-xl`}
        >
          <div className='relative h-32 w-32'>
            {isSuccess ? (
              <Image
                src={SuccessIcon}
                width={350}
                height={350}
                alt='Message Sent'
                className='absolute -bottom-3 scale-200 object-contain'
              />
            ) : (
              <Image
                src={FailedIcon}
                width={350}
                height={350}
                alt='Message Failed'
                className='absolute -bottom-8 scale-180 object-contain'
              />
            )}
          </div>
        </div>

        {isSuccess ? (
          <div className='absolute bottom-6 flex flex-col gap-4 px-6'>
            <h2 className='text-center text-xl font-bold text-black'>
              Got Your Message!
            </h2>
            <p className='mb-5 text-center text-gray-600'>
              Really appreciate you reaching out. Ill be in touch soon.
            </p>

            <button
              onClick={onClose}
              className='bg-primary-300 w-full rounded-full py-3 font-semibold text-white transition-colors hover:bg-[#974e69] focus:outline-none'
            >
              Back to Home
            </button>
          </div>
        ) : (
          <div className='absolute bottom-6 flex flex-col gap-4 px-6'>
            <h2 className='text-center text-xl font-bold text-black'>
              Message Failed to Send!
            </h2>
            <p className='text-center text-gray-600'>
              Sorry about that. Please check your connection and try again.
            </p>

            <button
              onClick={onClose}
              className='bg-primary-300 w-full rounded-full py-3 font-semibold text-white transition-colors hover:bg-[#974e69] focus:outline-none'
            >
              Try Again!
            </button>
          </div>
        )}
      </div>
      <div className='fixed inset-0 top-0 bottom-0 bg-black opacity-50'></div>
    </div>
  );
};

export default Modal;
