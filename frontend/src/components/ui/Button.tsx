import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
}

export const Button = ({ children, className = '', variant = 'primary', ...props }: ButtonProps) => {
  const baseStyle = "inline-flex items-center justify-center rounded-md text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue disabled:pointer-events-none disabled:opacity-50";
  const variants: Record<NonNullable<ButtonProps['variant']>, string> = {
    primary: "bg-slate-900 text-slate-50 hover:bg-brand-dark shadow-sm",
    secondary: "bg-brand-blue text-white hover:bg-brand-dark shadow-sm",
    outline: "border border-slate-200 bg-white hover:bg-slate-50 hover:text-brand-dark",
    ghost: "hover:bg-slate-50 hover:text-brand-dark text-slate-600"
  };
  const sizeStyle = "h-10 px-4 py-2";
  
  return (
    <button className={`${baseStyle} ${variants[variant]} ${sizeStyle} ${className}`} {...props}>
      {children}
    </button>
  );
};
