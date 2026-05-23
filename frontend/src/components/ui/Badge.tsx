import { cn } from '../../lib/cn';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'accent' | 'muted' | 'topSelling';
}

const variants: Record<NonNullable<BadgeProps['variant']>, string> = {
  default: 'bg-slate-100 text-slate-700 border-slate-200',
  accent: 'bg-brand-green/10 text-brand-green border-brand-green/20',
  muted: 'bg-slate-50 text-slate-500 border-slate-200',
  topSelling:
    'border-orange-300/60 bg-gradient-to-r from-orange-500 via-orange-500 to-amber-500 text-white shadow-md shadow-orange-500/30 ring-1 ring-inset ring-white/20',
};

export function Badge({ className, variant = 'default', children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wider',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
