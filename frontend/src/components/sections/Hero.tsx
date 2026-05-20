import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, Play } from 'lucide-react';

export function Hero() {
  const navigate = useNavigate();

  return (
    <section id="hero" className="relative bg-gradient-to-b from-slate-50 via-white to-white overflow-hidden py-16 lg:py-24 border-b border-slate-100">
      
      {/* Premium Backdrop Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-green/5 blur-[100px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-brand-blue/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Premium Copywriting & Actions */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              Powering Up Your <br className="hidden sm:inline" />
              <span className="font-serif italic font-normal text-brand-green">Infrastructure</span> <br />
              the <span className="font-serif italic font-normal text-slate-700">Green Way</span>
            </h1>
            
            <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              A2Z Engineering deploys certified Solar PV networks, heavy-duty electrical grids, and intelligent HVAC systems. Lower operational utility costs while securing a clean, sustainable future today.
            </p>

            {/* Actions Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => navigate('/contact')}
                className="inline-flex h-12 items-center justify-center px-7 bg-[#4E9F3D] hover:bg-brand-dark text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-md hover:shadow-lg transition-all outline-none gap-2 group cursor-pointer"
              >
                Get Started 
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
              
              <button
                onClick={() => navigate('/portfolio')}
                className="inline-flex h-12 items-center justify-center px-7 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider rounded-full shadow-sm hover:shadow transition-all outline-none gap-2 cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 text-slate-400 fill-slate-400" />
                Explore Portfolio
              </button>
            </div>
          </div>

          {/* Right Column: Live SVG & Floating Info Collage */}
          <div className="lg:col-span-6 relative mt-8 lg:mt-0 flex justify-center">
            <div className="relative w-full max-w-lg select-none px-4 sm:px-6">
              
              {/* Floating Card: Industry Experience */}
              <div className="absolute -top-6 -left-2 sm:-left-6 bg-white/95 backdrop-blur-md border border-slate-100 p-5 rounded-2xl shadow-xl z-20 w-40 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <p className="text-2xl font-black text-brand-dark leading-none flex items-baseline">
                  15<span className="text-brand-green text-lg font-bold ml-0.5">+</span>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-brand-green ml-2">Years</span>
                </p>
                <p className="text-[9px] font-bold text-slate-500 tracking-wider uppercase mt-2">
                  of Experience
                </p>
              </div>

              {/* Floating Card: Happy Customers */}
              <div className="absolute -bottom-6 -right-2 sm:-right-6 bg-white/95 backdrop-blur-md border border-slate-100 p-5 rounded-2xl shadow-xl z-20 w-44 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Corporate Trust</span>
                
                {/* Engineers / Clients Avatars Row */}
                <div className="flex -space-x-1.5 mb-2.5">
                  <div className="w-6 h-6 rounded-full bg-slate-900 border-2 border-white flex items-center justify-center text-[6px] font-extrabold text-white">CEB</div>
                  <div className="w-6 h-6 rounded-full bg-brand-green border-2 border-white flex items-center justify-center text-[6px] font-extrabold text-white text-center leading-none">LEC</div>
                  <div className="w-6 h-6 rounded-full bg-brand-blue border-2 border-white flex items-center justify-center text-[6px] font-extrabold text-white">A2Z</div>
                  <div className="w-6 h-6 rounded-full bg-brand-dark border-2 border-white flex items-center justify-center text-[6px] font-extrabold text-brand-green">✓</div>
                </div>
                
                <p className="text-xl font-black text-[#4E9F3D] leading-none">
                  384+
                </p>
                <p className="text-[8px] font-bold text-slate-500 uppercase tracking-wider mt-1">
                  Completed Projects
                </p>
              </div>

              {/* Main Premium Card Container */}
              <div className="live-dashboard-card bg-white/85 backdrop-blur-md border border-slate-200/80 rounded-3xl p-5 sm:p-6 shadow-xl relative z-10 transition-all duration-300 hover:border-slate-350/80">
                
                {/* Terminal Header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-400"></span>
                    <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  </div>
                  <span className="text-[9px] font-bold text-slate-450 tracking-widest uppercase font-mono flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-ping"></span>
                    Active Integration Map
                  </span>
                </div>

                {/* SVG */}
                <svg className="w-full h-auto" viewBox="0 0 480 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="flowGradient" x1="60" y1="80" x2="420" y2="230" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#111827"/>
                      <stop offset="0.55" stopColor="#7C3AED"/>
                      <stop offset="1" stopColor="#0F766E"/>
                    </linearGradient>
                  </defs>

                  {/* Flow Lines */}
                  <path className="flow-line" d="M158 70C212 70 237 117 238 178" stroke="url(#flowGradient)" strokeWidth="3" strokeLinecap="round" />
                  <path className="flow-line flow-line-two" d="M322 71C272 78 245 120 240 178" stroke="url(#flowGradient)" strokeWidth="3" strokeLinecap="round" />
                  <path className="flow-line flow-line-three" d="M241 252C254 279 306 283 342 254C377 226 388 168 387 106" stroke="url(#flowGradient)" strokeWidth="3" strokeLinecap="round" />

                  {/* Card 1: Solar Array (Left) */}
                  <g className="cursor-pointer transition-transform duration-300 hover:translate-y-[-2px]">
                    <rect x="28" y="32" width="130" height="72" rx="16" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1.5" />
                    <rect x="42" y="48" width="22" height="22" rx="6" fill="#F0FDF4" />
                    {/* Sun Icon inside card */}
                    <path d="M53 52v2M53 64v2M47 59h2M57 59h2M49 55l1.5 1.5M55 61l1.5 1.5M49 63l1.5-1.5M55 57l1.5-1.5" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round"/>
                    <circle cx="53" cy="59" r="2.5" fill="#22C55E" />
                    
                    <text x="72" y="54" fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="bold" fill="#0F172A">SOLAR PV</text>
                    <text x="72" y="66" fontFamily="system-ui, sans-serif" fontSize="8" fontWeight="600" fill="#22C55E">Generating</text>
                    <text x="72" y="78" fontFamily="system-ui, sans-serif" fontSize="7.5" fill="#64748B">Active Arrays</text>
                  </g>

                  {/* Card 2: HVAC System (Right) */}
                  <g className="cursor-pointer transition-transform duration-300 hover:translate-y-[-2px]">
                    <rect x="322" y="34" width="130" height="72" rx="16" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1.5" />
                    <rect x="336" y="50" width="22" height="22" rx="6" fill="#EFF6FF" />
                    {/* Fan Icon inside card */}
                    <path d="M347 61a3 3 0 100-6 3 3 0 000 6z" stroke="#3B82F6" strokeWidth="1.5"/>
                    <path d="M347 52v3M347 61v3M343 57h3M349 57h3" stroke="#3B82F6" strokeWidth="1" strokeLinecap="round"/>
                    
                    <text x="366" y="56" fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="bold" fill="#0F172A">HVAC CTRL</text>
                    <text x="366" y="68" fontFamily="system-ui, sans-serif" fontSize="8" fontWeight="600" fill="#3B82F6">Smart Load</text>
                    <text x="366" y="80" fontFamily="system-ui, sans-serif" fontSize="7.5" fill="#64748B">Optimized</text>
                  </g>

                  {/* Card 3: Grid Sync Controller (Bottom) */}
                  <g className="cursor-pointer transition-transform duration-300 hover:translate-y-[-2px]">
                    <rect x="175" y="180" width="130" height="72" rx="16" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1.5" />
                    <rect x="189" y="196" width="22" height="22" rx="6" fill="#F5F3FF" />
                    {/* Lightning Icon inside card */}
                    <path d="M201 201l-4 6h3l-1 5 5-7h-3l2-4z" fill="#7C3AED" />
                    
                    <text x="219" y="202" fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="bold" fill="#0F172A">SMART GRID</text>
                    <text x="219" y="214" fontFamily="system-ui, sans-serif" fontSize="8" fontWeight="600" fill="#7C3AED">Synchronized</text>
                    <text x="219" y="226" fontFamily="system-ui, sans-serif" fontSize="7.5" fill="#64748B">Central Optimizer</text>
                  </g>

                  {/* Flow Nodes (Circles) */}
                  <circle className="flow-node" cx="158" cy="70" r="6" fill="#111827" />
                  <circle className="flow-node node-two" cx="322" cy="71" r="6" fill="#7C3AED" />
                  <circle className="flow-node node-three" cx="240" cy="178" r="7" fill="#0F766E" />
                </svg>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

