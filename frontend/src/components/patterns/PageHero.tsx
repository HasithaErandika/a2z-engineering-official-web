import { ChevronDown } from 'lucide-react';
import { cn } from '../../lib/cn';
import { images } from '../../data/site';

export interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  bgImage?: string;
  className?: string;
}

export function PageHero({
  eyebrow,
  title,
  description,
  bgImage = images.heroSolar,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        'relative min-h-[280px] md:min-h-[340px] w-full overflow-hidden bg-slate-950 flex items-center border-b border-slate-200',
        className
      )}
    >
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt=""
          className="w-full h-full object-cover opacity-40"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-brand-blue/25 z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full py-16">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-bold text-brand-green uppercase tracking-[0.2em] block">
            {eyebrow}
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {title}
          </h1>
          <p className="text-sm md:text-base text-slate-200 max-w-2xl leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      <div
        className="absolute bottom-6 right-8 z-20 text-white/40 text-xs font-mono tracking-widest uppercase flex items-center gap-1.5 pointer-events-none hidden md:flex"
        aria-hidden
      >
        <span>Scroll</span>
        <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
      </div>
    </section>
  );
}
