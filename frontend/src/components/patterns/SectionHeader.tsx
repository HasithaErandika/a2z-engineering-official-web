import { cn } from '../../lib/cn';

export interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
  action?: React.ReactNode;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
  action,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4 mb-10',
        align === 'center' && 'text-center items-center',
        action && 'md:flex-row md:items-end md:justify-between',
        className
      )}
    >
      <div className={cn('space-y-3 max-w-2xl', align === 'center' && 'mx-auto')}>
        {eyebrow && (
          <span className="text-xs font-bold text-brand-green uppercase tracking-[0.2em] block">
            {eyebrow}
          </span>
        )}
        <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-950 tracking-tight">{title}</h2>
        {description && (
          <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
        )}
      </div>
      {action}
    </div>
  );
}
