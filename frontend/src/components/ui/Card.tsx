import { cn } from '../../lib/cn';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'outline' | 'muted';
  interactive?: boolean;
}

const variantStyles: Record<NonNullable<CardProps['variant']>, string> = {
  default: 'bg-white border border-slate-200/80 shadow-[var(--shadow-card)]',
  elevated: 'bg-white border border-slate-200 shadow-[var(--shadow-card-hover)]',
  outline: 'bg-white border border-slate-200',
  muted: 'bg-slate-50 border border-slate-200/80',
};

export function Card({
  className,
  variant = 'default',
  interactive = false,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        'rounded-[var(--radius-lg)]',
        variantStyles[variant],
        interactive &&
          'transition-all duration-200 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-0.5',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('p-6 lg:p-8 pb-0', className)} {...props} />;
}

export function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('p-6 lg:p-8', className)} {...props} />;
}

export function CardFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('p-6 lg:p-8 pt-0', className)} {...props} />;
}
