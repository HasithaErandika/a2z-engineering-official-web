import { useNavigate } from 'react-router-dom';
import { ArrowRight, ShieldCheck, CheckCircle2, User, Sun } from 'lucide-react';
import { PageHeader } from '../components/shared/PageHeader';

export function AboutUs() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      
      <PageHeader 
        eyebrow="A2Z Engineering Pvt Ltd"
        title="Accountable Delivery & Clear Planning"
        description="We engineer certified solar PV grids, heavy electrical distribution lines, and industrial HVAC systems with absolute structural compliance."
        bgImage="/images/building-office.png"
      />

      {/* 2. Interactive Corporate Profile (Center Section of Reference Image) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Custom SVG Smartphone Mockup Showcase */}
          <div className="lg:col-span-5 relative flex justify-center z-10">
            {/* Soft backdrop green halo */}
            <div className="absolute inset-0 bg-brand-green/5 blur-3xl rounded-full translate-x-4"></div>
            
            {/* Smartphone Chassis Frame */}
            <div className="relative w-[280px] h-[550px] bg-slate-950 border-[10px] border-slate-900 rounded-[36px] shadow-2xl p-3 flex flex-col justify-between overflow-hidden">
              
              {/* Speaker Notch */}
              <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-24 h-4 bg-slate-900 rounded-full z-30"></div>
              
              {/* Dynamic Viewport Content */}
              <div className="relative flex-grow bg-white rounded-[24px] overflow-hidden flex flex-col justify-between p-4 z-20 select-none">
                
                {/* Viewport Header */}
                <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                  <img src="/a2zlogo.svg" alt="A2Z Logo" className="w-8 h-auto" />
                  <span className="text-[6px] font-mono font-bold text-slate-400">TELEMETRY ACTIVE</span>
                </div>
                
                {/* Viewport Graphic: Mini Solar/Wind diagram */}
                <div className="my-3 bg-slate-50 border border-slate-100 rounded-lg p-2.5 flex flex-col items-center justify-center">
                  <div className="relative w-16 h-16 mb-2">
                    <Sun className="w-6 h-6 text-amber-500 animate-pulse absolute top-1 left-1" />
                    <svg className="w-full h-full opacity-35" viewBox="0 0 100 100">
                      <line x1="50" y1="90" x2="50" y2="40" stroke="#000" strokeWidth="2" />
                      <circle cx="50" cy="40" r="4" fill="#000" />
                    </svg>
                  </div>
                  <span className="text-[8px] font-black text-brand-dark">3,752.58 kW</span>
                  <span className="text-[6px] font-bold text-slate-400 uppercase tracking-wider">Installed Grid Offset</span>
                </div>

                {/* Viewport Copy */}
                <div className="space-y-1.5">
                  <span className="text-[5px] font-bold text-brand-green uppercase tracking-widest block">EPC Compliance</span>
                  <p className="text-[9px] font-black text-slate-900 leading-tight">Engineering Your Future the Green Way</p>
                  <p className="text-[7px] text-slate-500 leading-relaxed">Lower active commercial utility draw to Rs 0 via Net-Metering.</p>
                </div>

                {/* Viewport Footer */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[6px] font-bold text-slate-400">© 2026 A2Z ENG</span>
                  <span className="w-1.5 h-1.5 bg-brand-green rounded-full animate-ping"></span>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Mission Content (Matches text & pill button of reference image) */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[10px] font-bold text-brand-blue uppercase tracking-[0.2em] block">
              About A2Z Engineering
            </span>
            <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Become a Partner in Sustainable <br />
              Industrial Engineering
            </h2>
            
            <div className="space-y-4 text-slate-600 leading-relaxed text-sm">
              <p>
                A2Z Engineering is a premier service-providing corporation supporting major commercial, residential, and industrial deployments. We focus strictly on operational transparency, practical engineering models, and responsive support lifecycle management.
              </p>
              <p>
                Every deployment—from multi-megawatt N-type solar arrays to heavy-load air ventilation networks—is designed with verified load evaluations and engineered wind-compliance structures.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex gap-4">
                <ShieldCheck className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-black text-brand-dark uppercase tracking-wider">Turnkey Mission</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed mt-1.5">
                    Deliver robust mechanical designs and complete grid integration clearances.
                  </p>
                </div>
              </div>
              <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex gap-4">
                <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-black text-brand-dark uppercase tracking-wider">Corporate Vision</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed mt-1.5">
                    Operate as a lifelong compliance service partner for green commercial transitions.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct inquiry pill button (Replaces the reference blue button with exact visual style) */}
            <div className="pt-4">
              <button
                onClick={() => navigate('/services')}
                className="inline-flex items-center gap-3 bg-[#1e293b] hover:bg-brand-blue text-white text-[11px] font-black uppercase tracking-widest px-7 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all outline-none"
              >
                <span>Explore Services</span>
                <span className="w-5 h-5 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </span>
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Bottom High-Contrast Block (Matches bottom dark blue block of the reference image) */}
      <section className="bg-gradient-to-br from-brand-blue to-slate-950 text-white py-16 relative overflow-hidden border-t border-slate-900">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            
            {/* Left side text */}
            <div className="md:col-span-7">
              <h3 className="text-2xl md:text-3xl font-black tracking-tight leading-none">
                Engineering with Integrity.
              </h3>
              <p className="text-xs text-brand-muted mt-3 max-w-xl leading-relaxed">
                We handle the complete scope of engineering, structural checks, global Tier-1 hardware sourcing, and state electricity board approvals.
              </p>
            </div>

            {/* Right side link detail */}
            <div className="md:col-span-5 flex md:justify-end">
              <button
                onClick={() => navigate('/contact')}
                className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-white hover:text-brand-green transition-colors outline-none group"
              >
                <span>Inquire EPC Operations</span>
                <span className="w-7 h-7 border border-white/20 rounded-full flex items-center justify-center group-hover:border-brand-green transition-colors shrink-0">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Leadership & Executive Members */}
      <section className="bg-slate-50 border-t border-slate-100 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[9px] font-bold text-brand-blue uppercase tracking-widest block mb-2">Executive Board</span>
            <h3 className="text-2xl font-extrabold text-slate-950 tracking-tight">Corporate Leadership</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:shadow-slate-100/50 hover:-translate-y-1.5 transition-all duration-300 flex items-center gap-5">
              <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center border border-slate-100 shrink-0">
                <User className="w-5 h-5 text-brand-green" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Indika Wickramasinghe</h4>
                <span className="text-[9px] font-bold uppercase tracking-widest text-brand-dark block mt-1">Director Operations</span>
              </div>
            </div>
            
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:shadow-slate-100/50 hover:-translate-y-1.5 transition-all duration-300 flex items-center gap-5">
              <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center border border-slate-100 shrink-0">
                <User className="w-5 h-5 text-brand-blue" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Dhammika Chandrasiri</h4>
                <span className="text-[9px] font-bold uppercase tracking-widest text-brand-dark block mt-1">Director CFO</span>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
