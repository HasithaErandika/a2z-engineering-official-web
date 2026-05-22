import { ArrowUpRight, Play } from 'lucide-react';
import { companyStats } from '../../data/site';
import { ButtonLink } from '../ui/ButtonLink';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export function Hero() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative w-full min-h-[85vh] flex items-center overflow-hidden bg-white px-4 py-16 sm:py-24 border-b border-slate-100"
    >
      {/* Premium Radial Grid Background Mesh */}
      <div className="absolute inset-0 pointer-events-none hero-grid animate-fade-in" />

      {/* Decorative Blur Ambient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-green/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-brand-blue/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Heading, Subtitle & Interactive Controls */}
          <div className="lg:col-span-6 flex flex-col items-center text-center lg:items-start lg:text-left space-y-6">
            <h1 className="mt-0 max-w-2xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl leading-[1.05] text-balance">
              Powering your <span className="text-brand-green">infrastructure</span> the sustainable way.
            </h1>

            <p className="max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base md:text-lg text-pretty">
              A2Z Engineering deploys certified Solar PV networks, heavy-duty electrical grids, and
              intelligent HVAC systems. Lower operational utility costs while securing a clean,
              sustainable future.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-2 w-full sm:w-auto">
              <ButtonLink to="/contact?inquiry=solar-site-visit" variant="accent" size="lg" className="w-full sm:w-auto gap-2">
                Get started
                <ArrowUpRight className="w-4 h-4" aria-hidden />
              </ButtonLink>
              <ButtonLink
                to="/portfolio"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto gap-2 bg-white/80 hover:bg-slate-50 border-slate-200/80 shadow-sm backdrop-blur"
              >
                <Play className="w-3.5 h-3.5 text-slate-500 fill-slate-500" aria-hidden />
                Explore portfolio
              </ButtonLink>
            </div>

            {/* Premium horizontal stats block (from ShipYourDraft signals design) */}
            <div className="mt-8 grid w-full max-w-xl grid-cols-3 gap-3">
              <div className="rounded-2xl border border-slate-200/70 bg-white/75 p-4 text-left shadow-sm shadow-slate-200/40 backdrop-blur">
                <p className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                  {companyStats.installedCapacityKw} kW
                </p>
                <p className="mt-1 text-[10px] font-extrabold uppercase tracking-wider text-slate-500 leading-none">
                  Solar Capacity
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200/70 bg-white/75 p-4 text-left shadow-sm shadow-slate-200/40 backdrop-blur">
                <p className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                  {companyStats.projectsCompleted}
                </p>
                <p className="mt-1 text-[10px] font-extrabold uppercase tracking-wider text-slate-500 leading-none">
                  Projects done
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200/70 bg-white/75 p-4 text-left shadow-sm shadow-slate-200/40 backdrop-blur">
                <p className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                  {companyStats.connectedInfrastructure}
                </p>
                <p className="mt-1 text-[10px] font-extrabold uppercase tracking-wider text-slate-500 leading-none">
                  Infrastructure
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Workflow Map in Premium Black Outer Wrapper */}
          <div className="lg:col-span-6 relative mt-8 lg:mt-0 flex justify-center w-full">
            <div className="relative w-full max-w-[500px]" aria-label="Animated engineering workflow">

              {/* Premium Black outer boundary frame */}
              <div className="relative rounded-[2rem] border border-slate-200/80 bg-slate-950 p-3 shadow-2xl shadow-slate-950/20">

                {/* Clean white inner workspace */}
                <div className="rounded-[1.45rem] bg-white p-4 sm:p-5">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <div className="flex items-center gap-2.5">
                      <img src="/a2zlogo.svg" alt="" className="h-7 w-auto bg-slate-50 p-1 rounded-md border border-slate-100" />
                      <div>
                        <p className="text-xs font-extrabold text-slate-900 uppercase tracking-wider leading-none">
                          Integration Map
                        </p>
                        <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mt-1 leading-none">
                          Real-time delivery
                        </p>
                      </div>
                    </div>
                    <div className="rounded-full bg-emerald-50 px-3 py-1 text-[9px] font-extrabold uppercase tracking-wider text-emerald-700 flex items-center gap-1.5">
                      {!reducedMotion && (
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden />
                      )}
                      Active
                    </div>
                  </div>

                  {/* Progressive Stage Pills */}
                  <div className="mt-5 grid grid-cols-4 gap-2">
                    {['Survey', 'Design', 'Deploy', 'Sustain'].map((stage, index) => (
                      <div
                        key={stage}
                        className="stage-pill rounded-xl border border-slate-200 bg-slate-50 px-2 py-2.5 text-center text-[10px] font-extrabold uppercase tracking-wider text-slate-600"
                        style={{ '--delay': `${index * 0.45}s` } as React.CSSProperties}
                      >
                        {stage}
                      </div>
                    ))}
                  </div>

                  {/* Interactive SVG Diagram */}
                  <svg
                    className="mt-6 h-auto w-full"
                    viewBox="0 0 480 300"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                  >
                    <defs>
                      <linearGradient id="flowGradient" x1="60" y1="80" x2="420" y2="230" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#525f96" />
                        <stop offset="0.55" stopColor="#5986b1" />
                        <stop offset="1" stopColor="#76a754" />
                      </linearGradient>
                    </defs>

                    {/* Flow Paths with drawFlow animations */}
                    {!reducedMotion && (
                      <>
                        <path
                          className="flow-line"
                          d="M158 70C212 70 237 117 238 178"
                          stroke="url(#flowGradient)"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                        <path
                          className="flow-line flow-line-two"
                          d="M322 71C272 78 245 120 240 178"
                          stroke="url(#flowGradient)"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                        <path
                          className="flow-line flow-line-three"
                          d="M241 252C254 279 306 283 342 254C377 226 388 168 387 106"
                          stroke="url(#flowGradient)"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                      </>
                    )}

                    {/* Solar PV Terminal */}
                    <g className="cursor-pointer transition-transform duration-300 hover:-translate-y-0.5">
                      <rect x="28" y="32" width="130" height="72" rx="16" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1.5" />
                      <rect x="38" y="44" width="22" height="22" rx="6" fill="#f0fdf4" />
                      <circle cx="49" cy="55" r="3" stroke="#76a754" strokeWidth="1.5" fill="none" />
                      <line x1="49" y1="49" x2="49" y2="51" stroke="#76a754" strokeWidth="1.2" strokeLinecap="round" />
                      <line x1="49" y1="59" x2="49" y2="61" stroke="#76a754" strokeWidth="1.2" strokeLinecap="round" />
                      <line x1="43" y1="55" x2="45" y2="55" stroke="#76a754" strokeWidth="1.2" strokeLinecap="round" />
                      <line x1="53" y1="55" x2="55" y2="55" stroke="#76a754" strokeWidth="1.2" strokeLinecap="round" />

                      <text x="68" y="48" fontFamily="Plus Jakarta Sans, system-ui" fontSize="9" fontWeight="800" fill="#0f172a">
                        SOLAR PV
                      </text>
                      <text x="68" y="58" fontFamily="Plus Jakarta Sans, system-ui" fontSize="7.5" fontWeight="600" fill="#475569">
                        80 kW Online
                      </text>
                      <circle cx="70" cy="68" r="2" fill="#76a754" />
                      <text x="76" y="71" fontFamily="Plus Jakarta Sans, system-ui" fontSize="6.5" fontWeight="800" fill="#76a754">
                        GENERATING
                      </text>
                    </g>

                    {/* HVAC CTRL Terminal */}
                    <g className="cursor-pointer transition-transform duration-300 hover:-translate-y-0.5">
                      <rect x="322" y="34" width="130" height="72" rx="16" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1.5" />
                      <rect x="332" y="46" width="22" height="22" rx="6" fill="#eff6ff" />
                      <circle cx="343" cy="57" r="3" stroke="#5986b1" strokeWidth="1.5" fill="none" />
                      <path d="M343 54c.5 1.5 2 1.5 2 0s-1.5-2-2 0zm0 6c-.5-1.5-2-1.5-2 0s1.5 2 2 0zm3-3c-1.5-.5-1.5-2 0-2s2 1.5 0 2zm-6 0c1.5.5 1.5 2 0 2s-2-1.5 0-2z" fill="#5986b1" />

                      <text x="362" y="50" fontFamily="Plus Jakarta Sans, system-ui" fontSize="9" fontWeight="800" fill="#0f172a">
                        HVAC CTRL
                      </text>
                      <text x="362" y="60" fontFamily="Plus Jakarta Sans, system-ui" fontSize="7.5" fontWeight="600" fill="#475569">
                        Temp Control
                      </text>
                      <circle cx="364" cy="70" r="2" fill="#5986b1" />
                      <text x="370" y="73" fontFamily="Plus Jakarta Sans, system-ui" fontSize="6.5" fontWeight="800" fill="#5986b1">
                        OPTIMIZED
                      </text>
                    </g>

                    {/* Smart Grid Terminal */}
                    <g className="cursor-pointer transition-transform duration-300 hover:-translate-y-0.5">
                      <rect x="175" y="180" width="130" height="72" rx="16" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1.5" />
                      <rect x="185" y="192" width="22" height="22" rx="6" fill="#f5f3ff" />
                      <path d="M197 197l-3.5 5.5h3l-.5 4 4.5-6.5h-3l1.5-3z" fill="#525f96" />

                      <text x="215" y="196" fontFamily="Plus Jakarta Sans, system-ui" fontSize="9" fontWeight="800" fill="#0f172a">
                        SMART GRID
                      </text>
                      <text x="215" y="206" fontFamily="Plus Jakarta Sans, system-ui" fontSize="7.5" fontWeight="600" fill="#475569">
                        Net-Accounting
                      </text>
                      <circle cx="217" cy="216" r="2" fill="#525f96" />
                      <text x="223" y="219" fontFamily="Plus Jakarta Sans, system-ui" fontSize="6.5" fontWeight="800" fill="#525f96">
                        SYNCHRONIZED
                      </text>
                    </g>

                    {/* Dynamic pulse glow nodes */}
                    {!reducedMotion && (
                      <>
                        <circle className="flow-node" cx="158" cy="70" r="6" fill="#525f96" />
                        <circle className="flow-node node-two" cx="322" cy="71" r="6" fill="#5986b1" />
                        <circle className="flow-node node-three" cx="240" cy="178" r="7" fill="#76a754" />
                      </>
                    )}
                  </svg>
                </div>
              </div>
              {/* 15+ Years — bottom-right of animated diagram */}
              <div
                className="absolute -bottom-5 -right-2 sm:-right-5 sm:-bottom-6 z-30 pointer-events-none"
                aria-label={`${companyStats.yearsExperience} years of trust`}
              >
                <div className="rounded-2xl border-2 border-brand-green/30 bg-white px-5 py-4 shadow-xl shadow-slate-900/10 backdrop-blur-sm">
                  <p className="text-3xl sm:text-4xl font-extrabold text-brand-green leading-none tabular-nums">
                    {companyStats.yearsExperience}
                  </p>
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-700 mt-2 whitespace-nowrap">
                    Years of trust
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Brand & Partner Marquee Band */}
        <div className="w-full mt-16 pt-8 border-t border-slate-100/80 relative z-20 space-y-5">
          <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 text-center mb-2">
            Integrating solutions from certified global engineering leaders
          </p>

          {/* Row 1: Solar & Grid Infrastructure (Slides Left) */}
          <div className="w-full overflow-hidden gradient-mask">
            <div className="w-max flex flex-nowrap gap-12 sm:gap-16 items-center animate-slide-left py-1.5 select-none">
              {BRANDS_SOLAR.concat(BRANDS_SOLAR).concat(BRANDS_SOLAR).map((brand, idx) => (
                <div
                  key={`${brand.name}-${idx}`}
                  className="flex items-center justify-center px-4 py-2 select-none"
                  title={brand.name}
                >
                  <img
                    src={brand.image}
                    alt={`${brand.name} logo`}
                    className={`${brand.height} w-auto object-contain opacity-75 hover:opacity-100 hover:scale-105 transition-all duration-300 cursor-pointer`}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: HVAC & Automation systems (Slides Right) */}
          <div className="w-full overflow-hidden gradient-mask">
            <div className="w-max flex flex-nowrap gap-12 sm:gap-16 items-center animate-slide-right py-1.5 select-none">
              {BRANDS_CLIMATE.concat(BRANDS_CLIMATE).concat(BRANDS_CLIMATE).concat(BRANDS_CLIMATE).map((brand, idx) => (
                <div
                  key={`${brand.name}-${idx}`}
                  className="flex items-center justify-center px-4 py-2 select-none"
                  title={brand.name}
                >
                  <img
                    src={brand.image}
                    alt={`${brand.name} logo`}
                    className={`${brand.height} w-auto object-contain opacity-75 hover:opacity-100 hover:scale-105 transition-all duration-300 cursor-pointer`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

const BRANDS_SOLAR = [
  { name: 'Huawei', image: '/brands/huawei_logo.png', height: 'h-6 sm:h-7' },
  { name: 'GoodWe', image: '/brands/goodwe.png', height: 'h-6 sm:h-7' },
  { name: 'Solis', image: '/brands/solis.png', height: 'h-5 sm:h-6' },
  { name: 'Jinko Solar', image: '/brands/jinko.png', height: 'h-5 sm:h-6' },
  { name: 'JA Solar', image: '/brands/JASolar.png', height: 'h-7 sm:h-8' },
];

const BRANDS_CLIMATE = [
  { name: 'Schneider Electric', image: '/brands/Schnider.png', height: 'h-7 sm:h-8' },
  { name: 'ABB Power Grids', image: '/brands/ABB.png', height: 'h-7 sm:h-8' },
  { name: 'Phoenix Contact', image: '/brands/Phoenix_Contact.png', height: 'h-5 sm:h-6' },
  { name: 'Siemens Systems', image: '/brands/Siemens.png', height: 'h-5 sm:h-6' },
  { name: 'Daikin Climate', image: '/brands/Daikin.png', height: 'h-6 sm:h-7' },
  { name: 'Carrier HVAC', image: '/brands/Carrier.png', height: 'h-6 sm:h-7' },
];