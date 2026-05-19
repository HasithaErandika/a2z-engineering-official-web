interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 to-white pt-16 pb-16 border-b border-slate-100 overflow-hidden">
      {/* Abstract Organic Shapes (Advanced SVG Background) */}
      <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none z-0">
        <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="absolute -top-40 -right-20 w-[600px] h-[600px] opacity-10 blur-3xl">
          <circle cx="200" cy="200" r="180" fill="#7CB05D" />
        </svg>
        <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="absolute top-20 right-20 w-[300px] h-[300px] opacity-[0.2]">
          <path d="M50,300 Q200,50 350,300" fill="none" stroke="#7CB05D" strokeWidth="55" strokeLinecap="round" className="opacity-30" />
          <circle cx="50" cy="50" r="40" fill="#2B3990" className="opacity-10" />
        </svg>
      </div>

      {/* Header Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col">
          <p className="text-[10px] font-bold text-brand-blue uppercase tracking-[0.2em] mb-4">{eyebrow}</p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight mb-5">{title}</h1>
          <p className="text-base leading-relaxed text-slate-600 max-w-3xl">{description}</p>
        </div>
      </div>
    </section>
  );
}
