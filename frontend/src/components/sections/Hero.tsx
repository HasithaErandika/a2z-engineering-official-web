import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, Play, Sun } from 'lucide-react';

export function Hero() {
  const navigate = useNavigate();

  return (
    <section id="hero" className="relative bg-gradient-to-b from-slate-50/60 via-white to-white overflow-hidden pb-16 pt-10 border-b border-slate-150">
      
      {/* Premium Backdrop Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-green/10 blur-[100px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-brand-blue/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Premium Copywriting */}
        <div className="text-center space-y-6 max-w-4xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 text-[9px] font-black text-brand-blue uppercase tracking-[0.25em] bg-brand-blue/5 border border-brand-blue/10 px-3.5 py-1.5 rounded-full">
            <Sun className="w-3 h-3 text-brand-green" /> Smart Industrial Integrations
          </span>
          
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
            Powering Up Your <span className="font-serif italic font-normal text-brand-green">Infrastructure</span> <br />
            the <span className="font-serif italic font-normal text-slate-700">Green Way</span>
          </h1>
          
          <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            A2Z Engineering deploys certified Solar PV networks, heavy-duty electrical grids, and intelligent HVAC systems. Lower operational utility costs while securing a clean, sustainable future today.
          </p>

          {/* Centered Actions Buttons */}
          <div className="flex flex-wrap justify-center gap-3.5 pt-4">
            <button
              onClick={() => navigate('/contact')}
              className="inline-flex h-12 items-center justify-center px-7 bg-[#4E9F3D] hover:bg-brand-dark text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-md hover:shadow-lg transition-all outline-none gap-2 group"
            >
              Get Started 
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            
            <button
              onClick={() => navigate('/portfolio')}
              className="inline-flex h-12 items-center justify-center px-7 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider rounded-full shadow-sm hover:shadow transition-all outline-none gap-2"
            >
              <Play className="w-3.5 h-3.5 text-slate-400 fill-slate-400" />
              Explore Portfolio
            </button>
          </div>
        </div>

        {/* Master Illustrative Collage Display */}
        <div className="relative w-full max-w-5xl mx-auto mt-16 min-h-[380px] lg:min-h-[460px] select-none">
          
          {/* Background Animated SVG Wind Turbines */}
          <div className="absolute bottom-16 left-1/3 opacity-30 z-0 hidden md:block">
            <svg className="w-20 h-40" viewBox="0 0 100 200" xmlns="http://www.w3.org/2000/svg">
              <line x1="50" y1="200" x2="50" y2="80" stroke="#94A3B8" strokeWidth="2" />
              <g className="animate-[spin_8s_infinite_linear] origin-[50px_80px]">
                <line x1="50" y1="80" x2="50" y2="20" stroke="#94A3B8" strokeWidth="2" />
                <line x1="50" y1="80" x2="102" y2="110" stroke="#94A3B8" strokeWidth="2" />
                <line x1="50" y1="80" x2="-2" y2="110" stroke="#94A3B8" strokeWidth="2" />
              </g>
            </svg>
          </div>

          <div className="absolute bottom-24 left-1/2 opacity-20 z-0 hidden lg:block">
            <svg className="w-28 h-56" viewBox="0 0 100 200" xmlns="http://www.w3.org/2000/svg">
              <line x1="50" y1="200" x2="50" y2="80" stroke="#94A3B8" strokeWidth="2" />
              <g className="animate-[spin_12s_infinite_linear] origin-[50px_80px]">
                <line x1="50" y1="80" x2="50" y2="10" stroke="#94A3B8" strokeWidth="2" />
                <line x1="50" y1="80" x2="110" y2="115" stroke="#94A3B8" strokeWidth="2" />
                <line x1="50" y1="80" x2="-10" y2="115" stroke="#94A3B8" strokeWidth="2" />
              </g>
            </svg>
          </div>

          {/* Left Floating Card: Industry Experience */}
          <div className="absolute top-12 left-0 sm:left-4 lg:-left-6 bg-white/90 backdrop-blur-md border border-slate-100 p-6 rounded-2xl shadow-xl z-20 w-44 hover:shadow-2xl transition-shadow duration-300">
            <p className="text-3xl font-black text-brand-dark leading-none flex items-baseline">
              15<span className="text-brand-green text-lg font-bold ml-0.5">+</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-green ml-2">Years</span>
            </p>
            <p className="text-[10px] font-bold text-slate-500 tracking-wider uppercase mt-2">
              of Industry Experience
            </p>
          </div>

          {/* Right Floating Card: Happy Customers */}
          <div className="absolute top-20 right-0 sm:right-4 lg:-right-6 bg-white/90 backdrop-blur-md border border-slate-100 p-5 rounded-2xl shadow-xl z-20 w-48 hover:shadow-2xl transition-shadow duration-300">
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-2.5">Corporate Trust</span>
            
            {/* Engineers / Clients Avatars Row */}
            <div className="flex -space-x-2 mb-3">
              <div className="w-7 h-7 rounded-full bg-slate-900 border-2 border-white flex items-center justify-center text-[7px] font-extrabold text-white">CEB</div>
              <div className="w-7 h-7 rounded-full bg-brand-green border-2 border-white flex items-center justify-center text-[7px] font-extrabold text-white text-center leading-none">LEC</div>
              <div className="w-7 h-7 rounded-full bg-brand-blue border-2 border-white flex items-center justify-center text-[7px] font-extrabold text-white">A2Z</div>
              <div className="w-7 h-7 rounded-full bg-brand-dark border-2 border-white flex items-center justify-center text-[7px] font-extrabold text-brand-green">✓</div>
            </div>
            
            <p className="text-2xl font-black text-[#4E9F3D] leading-none">
              384+
            </p>
            <p className="text-[9px] font-bold text-slate-500 uppercase tracking-wider mt-1.5">
              Completed Projects
            </p>
          </div>

          {/* Central Layered Perspective Collage Assets */}
          <div className="absolute inset-x-0 bottom-0 flex justify-center items-end gap-6 z-10 px-4">
            
            {/* Collage Item 1: Plant SVG Illustration (Left Balance) */}
            <div className="w-32 sm:w-44 mb-4 shrink-0 relative hidden sm:block">
              {/* Plant Pot SVG */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-t from-slate-200 to-white border border-slate-350 rounded-full shadow-md z-10"></div>
              
              <svg className="w-full h-auto relative z-20 -mb-2" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Leaves */}
                <path d="M60 70 C40 50 15 52 20 20 C45 35 48 55 60 70 Z" fill="#7CB05D" opacity="0.9" />
                <path d="M60 70 C80 50 105 52 100 20 C75 35 72 55 60 70 Z" fill="#6DA24F" opacity="0.9" />
                <path d="M60 70 C50 40 30 25 45 10 C60 25 58 45 60 70 Z" fill="#8AC26A" opacity="0.9" />
                <path d="M60 70 C70 40 90 25 75 10 C60 25 62 45 60 70 Z" fill="#75A857" opacity="0.8" />
                <path d="M60 110 L60 70" stroke="#7C7267" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>

            {/* Collage Item 2: Solar Panels Framed Card (Right side) */}
            <div className="w-64 sm:w-80 border-2 border-slate-100 bg-white p-3 rounded-2xl shadow-lg relative group transition-transform duration-700 hover:scale-102 shrink-0">
              
              {/* Floating Node Label 1: Save 40% */}
              <div className="absolute -top-6 left-1/3 bg-white/95 border border-slate-100 px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5 z-30 pointer-events-none animate-pulse">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green"></span>
                <span className="text-[8px] font-bold text-slate-800 uppercase tracking-wider font-mono">
                  Save up to 40% on Energy
                </span>
              </div>

              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-50 border border-slate-200/50 relative">
                <img
                  src="/images/solar-panel-product.png"
                  alt="A2Z Engineering Certified Panels Sourcing"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Collage Item 3: Project Facility Framed Card (Center layer) */}
            <div className="w-56 border-2 border-slate-100 bg-white p-2.5 rounded-xl shadow-md absolute bottom-0 left-1/4 -translate-x-1/2 z-20 hidden md:block hover:scale-102 transition-transform duration-500 shrink-0">
              
              {/* Floating Node Label 2: Hybrid Solutions */}
              <div className="absolute -top-4 left-6 bg-white/95 border border-slate-100 px-3 py-1 rounded-full shadow-sm flex items-center gap-1.5 z-30 pointer-events-none">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue"></span>
                <span className="text-[7px] font-bold text-slate-700 uppercase tracking-widest font-mono">
                  Hybrid Solutions
                </span>
              </div>

              <div className="aspect-[4/3] rounded-lg overflow-hidden bg-slate-50 border border-slate-150">
                <img
                  src="/images/facility-preview.png"
                  alt="Engineering Facility Integration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Floating Node Label 3: Grid Sync */}
            <div className="absolute bottom-32 right-12 bg-white/95 border border-slate-100 px-3 py-1 rounded-full shadow-sm flex items-center gap-1.5 z-20 pointer-events-none hidden lg:flex">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
              <span className="text-[7px] font-bold text-slate-700 uppercase tracking-widest font-mono">
                Solar Wind Grid-Sync
              </span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
