export function NewsMedia() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      
      {/* Advanced Organic Header Design */}
      <section className="relative bg-gradient-to-br from-slate-50 to-white pt-16 pb-16 border-b border-slate-100 overflow-hidden">
        {/* Abstract Organic Shapes (Advanced SVG) */}
        <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none z-0">
          <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="absolute -top-10 -right-20 w-[600px] h-[600px] opacity-10 blur-3xl">
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
               <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-brand-dark tracking-tight leading-tight">
                 News & Media
               </h1>
               <p className="text-lg text-slate-600 leading-relaxed max-w-4xl">
                 Stay updated with the latest technological breakthroughs, project completions, and corporate announcements from A2Z Engineering.
               </p>
            </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full flex-grow">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Featured Article */}
          <article className="bg-brand-dark rounded-2xl overflow-hidden shadow-sm group">
             <div className="aspect-video bg-slate-800 border-b border-white/10 flex items-center justify-center relative">
               <span className="text-white/20 font-bold text-sm tracking-widest uppercase">Project Milestone Visual</span>
               <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-60"></div>
             </div>
             <div className="p-10 relative">
                <div className="absolute top-0 right-10 -translate-y-1/2 bg-brand-green text-white text-[10px] font-bold px-4 py-1.5 rounded-full shadow-md uppercase tracking-wider">
                  Featured News
                </div>
                <h3 className="text-3xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                  Official Website Launch: A New Era of Engineering Transparency
                </h3>
                <blockquote className="border-l-4 border-brand-blue pl-6 py-2 mb-8">
                   <p className="text-lg text-brand-muted font-medium italic leading-relaxed">
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
                <article key={i} className="bg-white border border-slate-100 rounded-2xl p-6 flex flex-col sm:flex-row gap-8 items-start shadow-sm group">
                   <div className="w-full sm:w-1/3 aspect-video sm:aspect-square bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100 shrink-0">
                      <span className="text-slate-300 font-bold text-[10px] tracking-widest uppercase">News_{i}</span>
                   </div>
                   <div className="pt-2">
                      <div className="flex items-center gap-2 mb-3">
                         <span className="w-6 h-0.5 bg-brand-green"></span>
                         <p className="text-[10px] font-bold text-brand-blue uppercase tracking-widest">Industry Update</p>
                      </div>
                      <h3 className="text-xl font-extrabold text-slate-900 mb-4 tracking-tight leading-snug group-hover:text-brand-dark transition-colors">
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
      <section className="bg-slate-50 py-20 border-t border-slate-100">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-xl font-extrabold text-brand-dark tracking-tight uppercase tracking-widest text-[11px] mb-4">Media Inquiries</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              For press releases, high-resolution brand assets, or official statements, please reach out to our media relations team at <span className="font-bold text-brand-blue">info@a2zengineering.lk</span>
            </p>
         </div>
      </section>

    </div>
  );
}
