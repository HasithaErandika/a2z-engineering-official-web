import { ArrowUpRight, Play } from 'lucide-react';
import { companyStats } from '../../data/site';
import { ButtonLink } from '../ui/ButtonLink';
import { Card } from '../ui/Card';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export function Hero() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative bg-gradient-to-b from-slate-50 via-white to-white overflow-hidden section border-b border-slate-100"
    >
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-green/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-brand-blue/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              Powering your{' '}
              <span className="text-brand-green">infrastructure</span> the sustainable way
            </h1>

            <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              A2Z Engineering deploys certified Solar PV networks, heavy-duty electrical grids, and
              intelligent HVAC systems. Lower operational utility costs while securing a clean,
              sustainable future.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-2">
              <ButtonLink to="/contact?inquiry=solar-site-visit" variant="accent" size="lg" className="gap-2">
                Get started
                <ArrowUpRight className="w-4 h-4" aria-hidden />
              </ButtonLink>
              <ButtonLink to="/portfolio" variant="outline" size="lg" className="gap-2 bg-slate-50 hover:bg-slate-100 shadow-sm border-slate-200">
                <Play className="w-3.5 h-3.5 text-slate-500 fill-slate-500" aria-hidden />
                Explore portfolio
              </ButtonLink>
            </div>
          </div>

          <div className="lg:col-span-6 relative mt-8 lg:mt-0 flex justify-center">
            <div className="relative w-full max-w-lg px-4 sm:px-6">
              <Card className="absolute -top-6 -left-2 sm:-left-6 z-20 w-40 p-5 bg-white/95 backdrop-blur-md interactive shadow-[var(--shadow-card-hover)]">
                <p className="text-2xl font-extrabold text-brand-dark leading-none">
                  {companyStats.yearsExperience}
                </p>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mt-2">
                  Years of experience
                </p>
              </Card>

              <Card className="absolute -bottom-6 -right-2 sm:-right-6 z-20 w-44 p-5 bg-white/95 backdrop-blur-md interactive shadow-[var(--shadow-card-hover)]">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  Corporate trust
                </span>
                <p className="text-xl font-extrabold text-brand-green leading-none">
                  {companyStats.projectsCompleted}
                </p>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">
                  Completed projects
                </p>
              </Card>

              <div
                className={`live-dashboard-card bg-white border border-slate-200/80 rounded-[var(--radius-lg)] p-5 sm:p-6 shadow-[var(--shadow-card)] relative z-10 ${
                  reducedMotion ? '' : ''
                }`}
              >
                <div className="flex items-center justify-end border-b border-slate-100 pb-3 mb-4">
                  <span className="text-xs font-bold text-slate-500 tracking-widest uppercase font-mono flex items-center gap-1.5">
                    {!reducedMotion && (
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" aria-hidden />
                    )}
                    Active integration map
                  </span>
                </div>

                <svg
                  className="w-full h-auto"
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
                  <g className="cursor-pointer transition-transform duration-300 hover:translate-y-[-2px]">
                    <rect x="28" y="32" width="130" height="72" rx="12" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
                    {/* Sun Icon */}
                    <rect x="38" y="44" width="22" height="22" rx="6" fill="#f0fdf4" />
                    <circle cx="49" cy="55" r="3" stroke="#76a754" strokeWidth="1.5" fill="none" />
                    <line x1="49" y1="49" x2="49" y2="51" stroke="#76a754" strokeWidth="1.2" strokeLinecap="round" />
                    <line x1="49" y1="59" x2="49" y2="61" stroke="#76a754" strokeWidth="1.2" strokeLinecap="round" />
                    <line x1="43" y1="55" x2="45" y2="55" stroke="#76a754" strokeWidth="1.2" strokeLinecap="round" />
                    <line x1="53" y1="55" x2="55" y2="55" stroke="#76a754" strokeWidth="1.2" strokeLinecap="round" />
                    
                    <text x="68" y="48" fontFamily="Plus Jakarta Sans, system-ui" fontSize="9" fontWeight="800" fill="#0f172a">
                      SOLAR PV
                    </text>
                    <text x="68" y="58" fontFamily="Plus Jakarta Sans, system-ui" fontSize="7.5" fontWeight="500" fill="#475569">
                      80 kW Online
                    </text>
                    <circle cx="70" cy="68" r="2" fill="#76a754" />
                    <text x="76" y="71" fontFamily="Plus Jakarta Sans, system-ui" fontSize="6.5" fontWeight="bold" fill="#76a754">
                      GENERATING
                    </text>
                  </g>

                  <g className="cursor-pointer transition-transform duration-300 hover:translate-y-[-2px]">
                    <rect x="322" y="34" width="130" height="72" rx="12" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
                    {/* Fan Icon */}
                    <rect x="332" y="46" width="22" height="22" rx="6" fill="#eff6ff" />
                    <circle cx="343" cy="57" r="3" stroke="#5986b1" strokeWidth="1.5" fill="none" />
                    <path d="M343 54c.5 1.5 2 1.5 2 0s-1.5-2-2 0zm0 6c-.5-1.5-2-1.5-2 0s1.5 2 2 0zm3-3c-1.5-.5-1.5-2 0-2s2 1.5 0 2zm-6 0c1.5.5 1.5 2 0 2s-2-1.5 0-2z" fill="#5986b1" />
                    
                    <text x="362" y="50" fontFamily="Plus Jakarta Sans, system-ui" fontSize="9" fontWeight="800" fill="#0f172a">
                      HVAC CTRL
                    </text>
                    <text x="362" y="60" fontFamily="Plus Jakarta Sans, system-ui" fontSize="7.5" fontWeight="500" fill="#475569">
                      Temp Control
                    </text>
                    <circle cx="364" cy="70" r="2" fill="#5986b1" />
                    <text x="370" y="73" fontFamily="Plus Jakarta Sans, system-ui" fontSize="6.5" fontWeight="bold" fill="#5986b1">
                      OPTIMIZED
                    </text>
                  </g>

                  <g className="cursor-pointer transition-transform duration-300 hover:translate-y-[-2px]">
                    <rect x="175" y="180" width="130" height="72" rx="12" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
                    {/* Bolt Icon */}
                    <rect x="185" y="192" width="22" height="22" rx="6" fill="#f5f3ff" />
                    <path d="M197 197l-3.5 5.5h3l-.5 4 4.5-6.5h-3l1.5-3z" fill="#525f96" />
                    
                    <text x="215" y="196" fontFamily="Plus Jakarta Sans, system-ui" fontSize="9" fontWeight="800" fill="#0f172a">
                      SMART GRID
                    </text>
                    <text x="215" y="206" fontFamily="Plus Jakarta Sans, system-ui" fontSize="7.5" fontWeight="500" fill="#475569">
                      Net-Accounting
                    </text>
                    <circle cx="217" cy="216" r="2" fill="#525f96" />
                    <text x="223" y="219" fontFamily="Plus Jakarta Sans, system-ui" fontSize="6.5" fontWeight="bold" fill="#525f96">
                      SYNCHRONIZED
                    </text>
                  </g>

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
          </div>
        </div>
      </div>
    </section>
  );
}
