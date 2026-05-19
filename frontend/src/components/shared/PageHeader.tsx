import { ChevronDown } from 'lucide-react';

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
  bgImage?: string; // Optional custom background image path specific to each subpage
}

export function PageHeader({ eyebrow, title, description, bgImage = '/images/hero-solar.png' }: PageHeaderProps) {
  return (
    <section className="relative h-[320px] md:h-[360px] w-full overflow-hidden bg-slate-950 flex items-center border-b border-slate-200">
      
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage} 
          alt={title} 
          className="w-full h-full object-cover opacity-45"
        />
        {/* Corporate brand-blue/dark gradient wash */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-brand-blue/30 z-10"></div>
      </div>

      {/* Banner Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] font-bold text-brand-green uppercase tracking-[0.25em] block">
            {eyebrow}
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
            {title}
          </h1>
          <p className="text-sm text-slate-200 max-w-2xl leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 right-8 z-20 text-white/50 text-[10px] font-mono tracking-widest uppercase flex items-center gap-1.5 pointer-events-none">
        <span>Scroll</span>
        <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
      </div>

    </section>
  );
}
