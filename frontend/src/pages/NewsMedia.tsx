// Custom featured visual: digital mockup representing website launch
const FeaturedVisual = () => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-950 to-brand-dark flex flex-col items-center justify-center p-6 relative overflow-hidden group">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-brand-green/20 rounded-full blur-3xl opacity-60"></div>
      
      {/* Floating organic shape in background */}
      <svg className="absolute -top-10 -right-10 w-40 h-40 opacity-10 blur-xl text-brand-green" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" fill="currentColor" />
      </svg>
      
      {/* Browser Mockup */}
      <div className="w-72 md:w-96 h-48 rounded-lg bg-slate-900 border border-slate-700/50 shadow-2xl flex flex-col overflow-hidden relative z-10 transition-transform duration-500 group-hover:-translate-y-1 group-hover:shadow-brand-green/10">
        {/* Browser Top Bar */}
        <div className="h-6 bg-slate-950 px-3 flex items-center gap-1.5 border-b border-slate-800">
          <span className="w-2 h-2 rounded-full bg-red-500"></span>
          <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
          <div className="mx-auto w-36 h-3.5 rounded bg-slate-900 text-[8px] font-mono text-slate-500 flex items-center justify-center tracking-tight">
            a2zengineering.lk
          </div>
        </div>
        
        {/* Browser Content */}
        <div className="flex-grow p-4 flex gap-4 bg-slate-900/90 relative">
          <div className="w-1/2 flex flex-col justify-center">
            <div className="h-2 w-12 bg-brand-green rounded mb-2"></div>
            <div className="h-4 w-28 bg-white rounded mb-2"></div>
            <div className="h-2 w-20 bg-slate-500 rounded"></div>
          </div>
          <div className="w-1/2 relative flex items-center justify-center">
            {/* Minimalist Solar Panel Mockup */}
            <div className="w-20 h-20 bg-slate-950 border border-brand-green/20 rounded rotate-12 flex flex-col p-1 gap-1">
              <div className="grid grid-cols-3 gap-1 flex-grow">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="bg-brand-green/30 border border-brand-green/10 rounded-sm"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Engineering Overlay elements */}
      <div className="absolute bottom-3 left-6 font-mono text-[9px] text-brand-green font-bold tracking-widest flex items-center gap-1.5 z-10">
        <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-ping"></span>
        PORTAL ONLINE
      </div>
    </div>
  );
};

// Hybrid article visual helper: blending photorealistic assets with custom network vectors
const NewsVisual = ({ index }: { index: number }) => {
  if (index === 1) {
    return (
      <img
        src="/images/solar-panel-product.png"
        alt="Solar panel array installation"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
    );
  }
  if (index === 3) {
    return (
      <img
        src="/images/facility-preview.png"
        alt="A2Z Engineering Facility"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
    );
  }

  // index === 2: Solar Connectivity SVG Network
  return (
    <div className="w-full h-full bg-slate-950 flex flex-col items-center justify-center p-3 relative overflow-hidden transition-all duration-700 group-hover:bg-slate-900">
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:12px_12px]"></div>
      
      {/* Network Nodes and Links */}
      <svg className="w-full h-full opacity-60" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        {/* Connections */}
        <line x1="20" y1="50" x2="50" y2="20" stroke="#7CB05D" strokeWidth="0.75" strokeDasharray="3 1.5" />
        <line x1="50" y1="20" x2="80" y2="45" stroke="#7CB05D" strokeWidth="0.75" />
        <line x1="80" y1="45" x2="60" y2="80" stroke="#2B3990" strokeWidth="0.75" />
        <line x1="60" y1="80" x2="20" y2="50" stroke="#7CB05D" strokeWidth="0.75" />
        <line x1="50" y1="20" x2="60" y2="80" stroke="#2B3990" strokeWidth="0.5" strokeDasharray="2 1" />
        
        {/* Nodes */}
        <circle cx="20" cy="50" r="3" fill="#7CB05D" className="animate-ping" />
        <circle cx="20" cy="50" r="2.5" fill="#7CB05D" />
        
        <circle cx="50" cy="20" r="3" fill="#7CB05D" />
        
        <circle cx="80" cy="45" r="4.5" fill="#2B3990" className="animate-pulse" />
        <circle cx="80" cy="45" r="3" fill="#2B3990" />
        
        <circle cx="60" cy="80" r="3" fill="#7CB05D" />
      </svg>
      <div className="absolute bottom-2 left-2 text-[7px] font-mono text-brand-green uppercase font-bold tracking-widest">GRID CONNECTIVITY</div>
    </div>
  );
};

export function NewsMedia() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      
      {/* Advanced Organic Header Design */}
      <section className="relative bg-gradient-to-br from-slate-50 to-white pt-16 pb-16 border-b border-slate-100 overflow-hidden">
        {/* Abstract Organic Shapes (Advanced SVG) */}
        <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none z-0">
          <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="absolute -top-7 -right-20 w-[600px] h-[600px] opacity-10 blur-3xl">
            <ellipse cx="200" cy="200" rx="150" ry="150" fill="#7CB05D" />
          </svg>
          <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="absolute top-20 right-10 w-[300px] h-[300px] opacity-[0.2]">
            <path d="M50,150 Q150,50 250,150 T350,250" fill="none" stroke="#7CB05D" strokeWidth="50" strokeLinecap="round" className="opacity-30" />
            <circle cx="300" cy="300" r="40" fill="#2B3990" className="opacity-10" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col">
               <span className="text-[10px] font-bold text-brand-blue uppercase tracking-[0.2em] mb-4">A2Z Press Center</span>
               <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-brand-dark tracking-tight leading-tight">
                 News & Media
               </h1>
               <p className="text-base text-slate-600 leading-relaxed max-w-4xl">
                 Stay updated with the latest technological breakthroughs, project completions, and corporate announcements from A2Z Engineering.
               </p>
            </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full flex-grow">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Featured Article */}
          <article className="bg-brand-dark rounded-lg overflow-hidden shadow-sm group">
             <div className="aspect-video overflow-hidden border-b border-white/10 relative">
               <FeaturedVisual />
             </div>
             <div className="p-7 relative">
                <div className="absolute top-0 right-10 -translate-y-1/2 bg-brand-green text-white text-[10px] font-bold px-4 py-1.5 rounded-full shadow-md uppercase tracking-wider">
                  Featured News
                </div>
                <h3 className="text-2xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                  Official Website Launch: A New Era of Engineering Transparency
                </h3>
                <blockquote className="border-l-4 border-brand-blue pl-6 py-2 mb-8">
                   <p className="text-base text-brand-muted font-medium italic leading-relaxed">
                     “Our new digital headquarters provides a high-fidelity gateway to explore our extensive range of industrial solar and civil engineering solutions.”
                   </p>
                </blockquote>
                <button className="text-brand-lightblue font-bold text-xs uppercase tracking-widest hover:text-white transition-colors flex items-center gap-2 group-hover:gap-3 outline-none">
                  Read Full Story <span>→</span>
                </button>
             </div>
          </article>

          {/* Regular Articles List */}
          <div className="flex flex-col gap-6">
             {[1,2,3].map((i) => (
                <article key={i} className="bg-white border border-slate-100 rounded-lg p-6 flex flex-col sm:flex-row gap-6 items-start shadow-sm group w-full">
                   <div className="w-full sm:w-1/3 aspect-video sm:aspect-square overflow-hidden rounded-md border border-slate-100 shrink-0 relative">
                      <NewsVisual index={i} />
                   </div>
                   <div className="pt-2">
                      <div className="flex items-center gap-2 mb-3">
                         <span className="w-6 h-0.5 bg-brand-green"></span>
                         <p className="text-[10px] font-bold text-brand-blue uppercase tracking-widest">Industry Update</p>
                      </div>
                      <h3 className="text-2xl font-extrabold text-slate-900 mb-4 tracking-tight leading-snug group-hover:text-brand-dark transition-colors">
                        Expanding Solar Connectivity Across Polonnaruwa
                      </h3>
                      <button className="text-slate-400 font-bold text-[10px] uppercase tracking-widest hover:text-brand-dark transition-colors outline-none">
                        Read More →
                      </button>
                   </div>
                </article>
             ))}
          </div>

        </div>
      </section>

      {/* Media Inquiries Overlay */}
      <section className="bg-slate-50 py-16 border-t border-slate-100">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-extrabold text-brand-dark tracking-tight uppercase tracking-widest text-[11px] mb-4">Media Inquiries</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              For press releases, high-resolution brand assets, or official statements, please reach out to our media relations team at <span className="font-bold text-brand-blue">info@a2zengineering.lk</span>
            </p>
         </div>
      </section>

    </div>
  );
}
