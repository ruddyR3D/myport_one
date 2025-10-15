import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'flex justify-center items-center shrink-0 disabled:pointer-events-none disabled:opacity-50 cursor-pointer outline-none disabled:text-neutral-800 transition-all duration-200',
  {
    variants: {
      variant: {
        default:
          'bg-primary-200 text-sm-bold text-white shadow-xs rounded-full ]',

        outline:
          'border-2 border-primary-200 text-primary-200 bg-transparent rounded-full hover:bg-primary-200 ',
      },
      size: {
        default: 'h-11 px-16.5',
        circle: 'size-10 rounded-full',
        outline: 'size-10 rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot='button'
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
