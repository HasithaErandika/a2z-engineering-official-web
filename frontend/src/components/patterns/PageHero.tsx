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
        'relative min-h-[300px] md:min-h-[360px] w-full overflow-hidden bg-slate-950 flex items-center border-b border-slate-900',
        className
      )}
    >
      {/* Minimalist Solar & Electrical Curves/Waves SVG Pattern (Replaced the square grid) */}
      <div className="absolute inset-0 pointer-events-none opacity-25 z-10 overflow-hidden">
        <svg className="w-full h-full min-w-[1200px]" viewBox="0 0 1440 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M-100 200 C300 380, 600 80, 1000 280 C1200 360, 1400 250, 1600 200"
            stroke="url(#solarGradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="animate-wave-slow"
          />
          <path
            d="M-50 250 C400 130, 800 320, 1100 120 C1300 40, 1400 180, 1500 160"
            stroke="url(#electricalGradient)"
            strokeWidth="1.8"
            strokeLinecap="round"
            className="animate-wave-medium"
          />
          <defs>
            <linearGradient id="solarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#76a754" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#5986b1" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#76a754" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="electricalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#5986b1" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#76a754" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#5986b1" stopOpacity="0.95" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt=""
          className="w-full h-full object-cover opacity-20"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/90 to-brand-green/10 z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full py-16">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-bold text-brand-green uppercase tracking-[0.2em] block leading-none">
            {eyebrow}
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight text-balance">
            {title}
          </h1>
          <p className="text-sm md:text-base text-slate-400 max-w-2xl leading-relaxed text-pretty">
            {description}
          </p>
        </div>
      </div>

      <div
        className="absolute bottom-6 right-8 z-20 text-white/30 text-xs font-mono tracking-widest uppercase flex items-center gap-1.5 pointer-events-none hidden md:flex"
        aria-hidden
      >
        <span>Scroll down</span>
        <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
      </div>
    </section>
  );
}
