import React from 'react';
import { cn } from '../../lib/cn';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

const variantStyles: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary: 'bg-slate-900 text-white hover:bg-slate-800 shadow-sm hover:shadow-md',
  secondary: 'bg-brand-dark text-white hover:bg-brand-dark/90 shadow-sm',
  accent: 'bg-brand-green text-white hover:bg-accent-hover shadow-sm hover:shadow-md',
  outline:
    'border border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50 shadow-sm',
};

const sizeStyles: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'h-9 px-3 text-xs',
  md: 'h-10 px-4 text-sm',
  lg: 'h-12 px-6 text-sm',
};

export const Button = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  type = 'button',
  ...props
}: ButtonProps) => (
  <button
    type={type}
    className={cn(
      'inline-flex items-center justify-center rounded-[var(--radius-md)] font-bold transition-all duration-200',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2',
      'disabled:pointer-events-none disabled:opacity-50',
      'active:translate-y-0',
      variantStyles[variant],
      sizeStyles[size],
      className
    )}
    {...props}
  >
    {children}
  </button>
);
