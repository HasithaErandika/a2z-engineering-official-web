export function Portfolio() {
  const projects = [
    { title: "Project 1", location: "Nuriya Road, Deraniyagala", capacity: "80 kW", impact: "Powers a large factory annually, reducing CO₂ emissions significantly." },
    { title: "Project 2", location: "Hospital Junction, Polonnaruwa", capacity: "100 kW", impact: "Supplies clean power to a commercial building, offsetting energy costs and environmental impact." },
    { title: "Project 3", location: "Narahenpita rd, Nawala", capacity: "40 kW", impact: "Supports local grid stability, feeding surplus power into the National Grid." }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      
      {/* Advanced Organic Header Design */}
      <section className="relative bg-gradient-to-br from-slate-50 to-white pt-16 pb-16 border-b border-slate-100 overflow-hidden">
        {/* Abstract Organic Shapes (Advanced SVG) */}
        <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none z-0">
          <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="absolute -top-40 -right-20 w-[700px] h-[700px] opacity-10 blur-3xl">
            <circle cx="200" cy="200" r="160" fill="#7CB05D" />
          </svg>
          <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="absolute top-10 right-20 w-[250px] h-[250px] opacity-[0.25]">
            <path d="M50,50 Q200,50 200,200 T350,350" fill="none" stroke="#7CB05D" strokeWidth="45" strokeLinecap="round" className="opacity-30" />
            <rect x="250" y="50" width="80" height="80" rx="30" fill="#2B3990" className="opacity-10" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col">
               <span className="text-[10px] font-bold text-brand-blue uppercase tracking-[0.2em] mb-4">Project Highlights</span>
               <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-brand-dark tracking-tight leading-tight">
                 Our Project Portfolio
               </h1>
               <p className="text-lg text-slate-600 leading-relaxed max-w-4xl">
                 Powering a sustainable future. From residential rooftops to large-scale industrial grids, our engineering team has connected over <strong className="text-brand-blue font-extrabold">3,752.58 kW</strong> to the National Grid today.
               </p>
            </div>
        </div>
      </section>

      {/* High-Impact Stat Strip */}
      <section className="bg-brand-dark py-12 text-white overflow-hidden relative">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center gap-12 lg:gap-24 relative z-10">
            <div className="flex flex-col">
               <span className="text-sm font-bold text-brand-green uppercase tracking-widest mb-2">Total Capacity</span>
               <span className="text-4xl lg:text-5xl font-black tracking-tighter">3,752.58 <span className="text-xl font-bold opacity-50">kW</span></span>
            </div>
            <div className="w-px h-12 bg-white/10 hidden md:block" />
            <div className="flex flex-col">
               <span className="text-sm font-bold text-brand-green uppercase tracking-widest mb-2">Total Projects</span>
               <span className="text-4xl lg:text-5xl font-black tracking-tighter">384</span>
            </div>
            <div className="w-px h-12 bg-white/10 hidden md:block" />
             <div className="flex flex-col">
               <span className="text-sm font-bold text-brand-green uppercase tracking-widest mb-2">Connected Infrastructure</span>
               <span className="text-4xl lg:text-5xl font-black tracking-tighter">1.6 <span className="text-xl font-bold opacity-50">MW+</span></span>
            </div>
         </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full flex-grow">
        
        {/* Project Highlights Grid */}
        <div className="mb-24">
           <h3 className="text-2xl font-extrabold text-slate-900 mb-10 tracking-tight">Core Project Highlights</h3>
           <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between">
                 <div>
                    <h4 className="text-lg font-bold text-brand-dark mb-4 uppercase tracking-widest text-[11px]">Division 01</h4>
                    <h5 className="text-xl font-extrabold mb-4 text-slate-900 leading-tight">Residential Solar Solutions</h5>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">Hundreds of homes across the country now run on clean energy, reducing CO₂ emissions and cutting energy bills for local families.</p>
                 </div>
                 <div className="w-10 h-1 bg-brand-blue rounded-full"></div>
              </div>
              <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between">
                 <div>
                    <h4 className="text-lg font-bold text-brand-dark mb-4 uppercase tracking-widest text-[11px]">Division 02</h4>
                    <h5 className="text-xl font-extrabold mb-4 text-slate-900 leading-tight">Commercial Installations</h5>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">From factories to modern office buildings, we have empowered businesses with reliable and cost-effective solar systems.</p>
                 </div>
                 <div className="w-10 h-1 bg-brand-green rounded-full"></div>
              </div>
              <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between">
                 <div>
                    <h4 className="text-lg font-bold text-brand-dark mb-4 uppercase tracking-widest text-[11px]">Division 03</h4>
                    <h5 className="text-xl font-extrabold mb-4 text-slate-900 leading-tight">Grid-Tied Infrastructure</h5>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">Major industrial projects feeding directly into the National Grid, contributing to a more sustainable energy infrastructure.</p>
                 </div>
                 <div className="w-10 h-1 bg-brand-lightblue rounded-full"></div>
              </div>
           </div>
        </div>

        {/* Featured Projects Cards */}
        <div className="mb-12">
            <h3 className="text-3xl font-extrabold text-slate-900 mb-10 tracking-tight">Featured Large-Scale Projects</h3>
            <div className="grid md:grid-cols-3 gap-8">
               {projects.map((proj, i) => (
                  <div key={i} className="bg-white border flex flex-col border-slate-100 rounded-2xl overflow-hidden shadow-sm group">
                     <div className="aspect-[4/3] bg-slate-50 relative flex items-center justify-center border-b border-slate-100">
                        <span className="text-slate-300 font-bold uppercase tracking-widest text-[10px]">Site Visual: work{i+2}</span>
                        <div className="absolute top-4 right-4 bg-brand-green text-white font-bold text-[10px] px-4 py-1.5 rounded-full shadow-sm">
                           {proj.capacity}
                        </div>
                     </div>
                     <div className="p-10 flex flex-col flex-grow">
                        <p className="text-brand-blue font-bold text-[10px] uppercase tracking-widest mb-3">{proj.title}</p>
                        <h4 className="text-2xl font-extrabold text-slate-900 mb-4 tracking-tight leading-tight group-hover:text-brand-dark transition-colors">{proj.location}</h4>
                        <p className="text-slate-600 font-medium text-sm leading-relaxed mb-8 flex-grow opacity-80">
                          {proj.impact}
                        </p>
                        <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                           <span className="text-[10px] font-bold text-brand-muted uppercase tracking-widest">Project: Completed</span>
                           <span className="w-2 h-2 bg-brand-green rounded-full"></span>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
        </div>

      </section>
    </div>
  );
}
