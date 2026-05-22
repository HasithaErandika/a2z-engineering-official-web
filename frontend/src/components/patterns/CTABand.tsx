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
  secondaryLabel = 'View portfolio',
  secondaryTo = '/portfolio',
  variant = 'dark',
  className,
}: CTABandProps) {
  const isLight = variant === 'light';

  return (
    <section className={cn('w-full bg-white px-4 py-20 sm:py-24', className)}>
      <div
        className={cn(
          'mx-auto max-w-6xl overflow-hidden rounded-[2rem] border transition-all duration-300',
          isLight
            ? 'bg-slate-50 border-slate-200/80 shadow-2xl shadow-slate-200/10'
            : 'bg-slate-950 border-slate-800 shadow-2xl shadow-slate-950/15'
        )}
      >
        <div className="grid gap-8 p-6 sm:p-8 md:grid-cols-[1fr_360px] md:p-10">
          
          {/* Left Column: Information, headings, and buttons */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-2">
              <p
                className={cn(
                  'text-[10px] font-extrabold uppercase tracking-widest',
                  isLight ? 'text-brand-blue' : 'text-slate-400'
                )}
              >
                Next steps
              </p>
              <h2
                className={cn(
                  'max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl leading-tight text-balance',
                  isLight ? 'text-slate-900' : 'text-white'
                )}
              >
                {title}
              </h2>
            </div>
            
            <p
              className={cn(
                'max-w-2xl text-sm leading-relaxed text-pretty',
                isLight ? 'text-slate-600' : 'text-slate-400'
              )}
            >
              {description}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <ButtonLink
                to={primaryTo}
                variant="accent"
                size="lg"
                className="w-full sm:w-auto text-center"
              >
                {primaryLabel}
              </ButtonLink>
              {secondaryLabel && secondaryTo && (
                <ButtonLink
                  to={secondaryTo}
                  variant="outline"
                  size="lg"
                  className={cn(
                    'w-full sm:w-auto text-center transition-all duration-200',
                    isLight
                      ? 'border-slate-200 text-slate-800 hover:bg-slate-100 hover:text-slate-900'
                      : 'border-white/15 text-white hover:border-white/30 hover:bg-white/5'
                  )}
                >
                  {secondaryLabel}
                </ButtonLink>
              )}
            </div>
          </div>

          {/* Right Column: Beautiful animated progressive engineering steps */}
          <div
            className={cn(
              'relative min-h-[280px] rounded-3xl border p-5 flex flex-col justify-between overflow-hidden',
              isLight
                ? 'border-slate-200 bg-slate-100/50'
                : 'border-white/10 bg-white/[0.03]'
            )}
          >
            {/* Animated progress track at the top */}
            <div
              className={cn(
                'absolute inset-x-5 top-5 h-1.5 rounded-full overflow-hidden',
                isLight ? 'bg-slate-200' : 'bg-white/10'
              )}
            >
              <div
                className={cn(
                  'progress-line h-full rounded-full',
                  isLight ? 'bg-slate-800' : 'bg-white'
                )}
              />
            </div>

            {/* Stepper details */}
            <div className="mt-8 space-y-3">
              {/* Step 1: Active Step */}
              <div
                className={cn(
                  'rounded-2xl p-4 shadow-lg border transition-all duration-300',
                  isLight
                    ? 'bg-slate-900 text-white border-slate-950 shadow-slate-900/10'
                    : 'bg-white text-slate-950 border-slate-100 shadow-black/20'
                )}
              >
                <p
                  className={cn(
                    'text-[9px] font-extrabold uppercase tracking-widest',
                    isLight ? 'text-slate-400' : 'text-slate-500'
                  )}
                >
                  Step 1: Survey Scheduled
                </p>
                <p className="mt-1 text-xs font-extrabold leading-tight">
                  Detailed site survey & energy utilization audit
                </p>
              </div>

              {/* Step 2: Inactive Step */}
              <div
                className={cn(
                  'rounded-2xl border p-4 transition-all duration-300',
                  isLight
                    ? 'border-slate-200 bg-white text-slate-800'
                    : 'border-white/10 bg-white/[0.04] text-white'
                )}
              >
                <p
                  className={cn(
                    'text-[9px] font-extrabold uppercase tracking-widest',
                    isLight ? 'text-slate-400' : 'text-slate-400'
                  )}
                >
                  Step 2: Engineering blueprinted
                </p>
                <p
                  className={cn(
                    'mt-1 text-xs font-semibold leading-tight',
                    isLight ? 'text-slate-600' : 'text-slate-300'
                  )}
                >
                  Blueprints, structural loads & grid modeling
                </p>
              </div>

              {/* Step 3: Inactive Step */}
              <div
                className={cn(
                  'rounded-2xl border p-4 transition-all duration-300',
                  isLight
                    ? 'border-slate-200 bg-white text-slate-800'
                    : 'border-white/10 bg-white/[0.04] text-white'
                )}
              >
                <p
                  className={cn(
                    'text-[9px] font-extrabold uppercase tracking-widest',
                    isLight ? 'text-slate-400' : 'text-slate-400'
                  )}
                >
                  Step 3: Secure Handover
                </p>
                <p
                  className={cn(
                    'mt-1 text-xs leading-tight',
                    isLight ? 'text-slate-600' : 'text-slate-300'
                  )}
                >
                  Installation certification & active support synchronization
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
