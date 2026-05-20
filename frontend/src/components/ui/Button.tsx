import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
}

export const Button = ({ children, className = '', variant = 'primary', ...props }: ButtonProps) => {
  const baseStyle = "inline-flex items-center justify-center rounded-lg text-sm font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue disabled:pointer-events-none disabled:opacity-50 hover:-translate-y-0.5 active:translate-y-0";
  const variants: Record<NonNullable<ButtonProps['variant']>, string> = {
    primary: "bg-slate-900 text-white hover:bg-slate-800 shadow-sm hover:shadow-md",
    secondary: "bg-brand-green text-white hover:bg-[#3E8B30] shadow-sm hover:shadow-md",
    outline: "border border-slate-200/80 bg-white hover:border-slate-300 hover:bg-slate-50 text-slate-700 shadow-sm hover:shadow",
    ghost: "hover:bg-slate-50 hover:text-brand-dark text-slate-600"
  };
  const sizeStyle = "h-10 px-4 py-2";
  
  return (
    <button className={`${baseStyle} ${variants[variant]} ${sizeStyle} ${className}`} {...props}>
      {children}
    </button>
  );
};
