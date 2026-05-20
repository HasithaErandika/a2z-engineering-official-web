import { cn } from '../../lib/cn';
import { ButtonLink } from '../ui/ButtonLink';

export interface CTABandProps {
  title: string;
  description: string;
  primaryLabel?: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
  variant?: 'dark' | 'light';
  className?: string;
}

export function CTABand({
  title,
  description,
  primaryLabel = 'Contact engineering team',
  primaryTo = '/contact',
  secondaryLabel,
  secondaryTo,
  variant = 'dark',
  className,
}: CTABandProps) {
  const isDark = variant === 'dark';

  return (
    <section
      className={cn(
        'section border-t',
        isDark ? 'bg-slate-950 text-white border-slate-800' : 'bg-slate-50 text-slate-900 border-slate-200',
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-2xl space-y-3">
            <h2
              className={cn(
                'text-2xl lg:text-3xl font-extrabold tracking-tight',
                isDark ? 'text-white' : 'text-slate-950'
              )}
            >
              {title}
            </h2>
            <p className={cn('text-sm leading-relaxed', isDark ? 'text-slate-300' : 'text-slate-600')}>
              {description}
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <ButtonLink
              to={primaryTo}
              variant={isDark ? 'accent' : 'accent'}
              size="lg"
            >
              {primaryLabel}
            </ButtonLink>
            {secondaryLabel && secondaryTo && (
              <ButtonLink
                to={secondaryTo}
                variant="outline"
                size="lg"
                className={isDark ? 'border-slate-600 text-white hover:bg-slate-800 hover:text-white' : ''}
              >
                {secondaryLabel}
              </ButtonLink>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
