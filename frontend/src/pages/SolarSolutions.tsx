import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Sun, 
  TrendingDown, 
  Layers, 
  ShieldCheck, 
  Cpu, 
  ArrowRight, 
  BarChart3,
  Award,
  Zap
} from 'lucide-react';

export function SolarSolutions() {
  const navigate = useNavigate();
  const [activeSystemTab, setActiveSystemTab] = useState<string>("hybrid");

  const systemArchitectures = {
    ongrid: {
      title: "On-Grid Net-Metered Systems",
      subtitle: "CEB / LECO Grid Tied Synchronous Integration",
      description: "Directly synchronized with the national grid. Ideal for maximizing financial returns via Net-Metering, Net-Accounting, or Net-Plus programs. Standard grid-tied configurations channel generated electricity into your distribution boards, immediately offsetting your active power draw. Any excess is pushed back to the grid for monetary credit.",
      benefits: [
        "Eliminate active commercial and residential electricity utility bills",
        "Lowest capital expenditure cost with the fastest payback period (3-4 years)",
        "Zero battery degradation overhead – utility grid acts as a virtual battery",
        "Integrated anti-islanding safety shutdown systems for utility linemen protection"
      ],
      efficiency: "98.8% Max Inverter Conversion",
      bestFor: "Commercial complexes, industrial facilities, and homes with stable grids"
    },
    hybrid: {
      title: "Hybrid Smart Backup Systems",
      subtitle: "Uninterrupted Power Autonomy & Lithium Storage Racks",
      description: "Combining string solar generation, smart utility synchronization, and advanced high-voltage lithium battery stacks. Hybrid systems offer total blackout security. Operating as the brain of your microgrid, hybrid systems orchestrate grid feedback and backup storage, dynamically shifting load priorities to protect high-priority production lines.",
      benefits: [
        "Uninterrupted business continuity with seamless <10ms emergency transfer",
        "Peak-shaving functionality to completely bypass heavy utility tariff bands",
        "Highly expandable high-voltage LFP (Lithium Iron Phosphate) cabinet stacking",
        "Intelligent smart charging from solar panels to extend battery cycle life"
      ],
      efficiency: "97.6% Battery Round-Trip Efficiency",
      bestFor: "Factories, operations centers, and areas prone to utility grid instability"
    },
    offgrid: {
      title: "Off-Grid Standalone Microgrids",
      subtitle: "Complete Energy Sovereignty for Isolated Sites",
      description: "Completely decoupled from the municipal electricity network. Off-grid systems utilize heavy-duty solar panel arrays, dedicated MPPT solar charge regulators, and robust industrial deep-cycle battery banks to run massive loads without any grid connection whatsoever.",
      benefits: [
        "100% electrical independence from utility price changes and grid failure",
        "Integrated backup diesel generator automatic auto-start (AMF) controls",
        "Double-insulated industrial surge cabinets for heavy tropical storm defense",
        "Perfect energy supply solution for agricultural, telecom, and deep interior sites"
      ],
      efficiency: "Fully Self-Sustained System Layout",
      bestFor: "Remote telecom towers, plantation sites, eco-resorts, and off-grid facilities"
    }
  };

  const reasons = [
    { 
      title: "Massive Cost Savings", 
      desc: "Instantly drop active electricity utility rates to Rs 0. High-efficiency modules maximize energy offset yields even during low-light rainy seasons.", 
      icon: <TrendingDown className="w-5 h-5 text-brand-green" /> 
    },
    { 
      title: "Engineered Grid Safety", 
      desc: "All installations carry certified arc-fault circuit interrupters (AFCI), reverse-current shielding, and dual DC/AC surge protection systems.", 
      icon: <ShieldCheck className="w-5 h-5 text-brand-blue" /> 
    },
    { 
      title: "Tier-1 Sourcing Only", 
      desc: "A2Z exclusively deploys certified Tier-1 panels (Jinko Solar, JA Solar, Longi) and smart inverters (Solis, GoodWe, Huawei, SolaX) with factory warranties.", 
      icon: <Award className="w-5 h-5 text-brand-dark" /> 
    },
    { 
      title: "Dynamic Smart Telemetry", 
      desc: "Monitor raw production logs, individual battery cell temperatures, and self-consumption levels directly from your phone or commercial SCADA.", 
      icon: <BarChart3 className="w-5 h-5 text-brand-lightblue" /> 
    },
    { 
      title: "Long-Term Energy Yields", 
      desc: "Our structural engineering division constructs double-hot-dipped galvanized mounting frames rated for wind loads up to 180 km/h.", 
      icon: <Layers className="w-5 h-5 text-amber-500" /> 
    },
    { 
      title: "Eco-Friendly Future", 
      desc: "Directly offset tons of CO2 emissions each year. Elevate your corporation's ESG rating and brand integrity with clean solar energy.", 
      icon: <Sun className="w-5 h-5 text-brand-green" /> 
    }
  ];

  const services = [
    { 
      title: "Commercial Site Feasibility Surveys", 
      desc: "We perform full mechanical roof testing, shadow vector analysis, and utility transformer load tests to map maximum solar potential." 
    },
    { 
      title: "Dynamic Blueprint & SLD Design", 
      desc: "Our senior electrical engineers construct custom Single Line Diagrams (SLD), structural weight distribution maps, and multi-MPPT layouts." 
    },
    { 
      title: "Fast Sourcing & Procurement", 
      desc: "Direct global supply chains with Tier-1 manufacturers ensure you receive verified serial numbers and brand-new component releases." 
    },
    { 
      title: "Turnkey EPC Installation", 
      desc: "From DC cabling conduits and grounding arrays to grid-connection coordination with local CEB/LECO inspectors, we handle the full cycle." 
    }
  ];

  const partners = [
    { name: "Jinko Solar", origin: "China" },
    { name: "JA Solar", origin: "China" },
    { name: "Longi Solar", origin: "China" },
    { name: "Solis Ginlong", origin: "China" },
    { name: "GoodWe Power", origin: "China" },
    { name: "Huawei Solar", origin: "China" }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      
      {/* Advanced Organic Header Design (Aligned with ContactPage.tsx) */}
      <section className="relative bg-gradient-to-br from-slate-50 to-white pt-16 pb-16 border-b border-slate-100 overflow-hidden">
        {/* Abstract Organic Shapes (Advanced SVG) */}
        <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none z-0">
          <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="absolute -top-40 -right-20 w-[600px] h-[600px] opacity-10 blur-3xl">
            <circle cx="200" cy="200" r="180" fill="#7CB05D" />
          </svg>
          <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="absolute top-20 right-20 w-[300px] h-[300px] opacity-[0.2]">
            <path d="M50,300 Q200,50 350,300" fill="none" stroke="#7CB05D" strokeWidth="55" strokeLinecap="round" className="opacity-30" />
            <circle cx="50" cy="50" r="40" fill="#2B3990" className="opacity-10" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-brand-blue uppercase tracking-[0.2em] mb-4">Engineering Excellence</span>
            <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-brand-dark tracking-tight leading-tight">
              Solar PV Systems
            </h1>
            <p className="text-base text-slate-600 leading-relaxed max-w-4xl">
              At A2Z Engineering (Pvt) Ltd, we are dedicated to providing clean, renewable energy solutions for homes and businesses through advanced Solar PV technology and expert integration.
            </p>
          </div>
        </div>
      </section>

      {/* Main Sub-Page Content Container (Unified Grid Structure) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full flex-grow space-y-16">
        
        {/* Row 1: Interactive Systems Selector & Technical Visual */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: Systems Selector Card Container (ContactPage style form card) */}
          <div className="bg-slate-50 border border-slate-100 p-6 lg:p-8 rounded-lg shadow-sm space-y-6">
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-1 bg-brand-green rounded-full"></span>
              <h2 className="text-[10px] font-bold text-brand-dark uppercase tracking-widest">Topology Integration</h2>
            </div>
            
            {/* Flat Tabs Selection Grid */}
            <div className="grid grid-cols-3 gap-2 bg-white/60 p-1.5 border border-slate-200/50 rounded-lg">
              {(Object.keys(systemArchitectures) as Array<keyof typeof systemArchitectures>).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveSystemTab(key)}
                  className={`py-2 text-[9px] font-bold uppercase tracking-wider rounded transition-all duration-200 outline-none text-center ${
                    activeSystemTab === key
                      ? 'bg-brand-dark text-white shadow-sm'
                      : 'text-slate-600 hover:text-brand-dark hover:bg-slate-100/50'
                  }`}
                >
                  {key === "ongrid" ? "On-Grid" : key === "hybrid" ? "Hybrid" : "Off-Grid"}
                </button>
              ))}
            </div>

            {/* Tab Content Display */}
            <div className="space-y-4 pt-2">
              <div>
                <span className="text-[9px] font-bold text-brand-blue uppercase tracking-widest block mb-1">
                  {systemArchitectures[activeSystemTab as keyof typeof systemArchitectures].subtitle}
                </span>
                <h3 className="text-lg font-extrabold text-slate-900 tracking-tight">
                  {systemArchitectures[activeSystemTab as keyof typeof systemArchitectures].title}
                </h3>
              </div>
              
              <p className="text-slate-600 text-xs leading-relaxed">
                {systemArchitectures[activeSystemTab as keyof typeof systemArchitectures].description}
              </p>

              <div className="bg-white border border-slate-200/60 rounded-lg p-4 space-y-3">
                <span className="text-[9px] font-bold text-brand-dark uppercase tracking-widest block border-b border-slate-100 pb-1.5">
                  Top Benefits
                </span>
                <ul className="space-y-2.5">
                  {systemArchitectures[activeSystemTab as keyof typeof systemArchitectures].benefits.map((benefit, i) => (
                    <li key={i} className="flex gap-2.5 text-xs text-slate-600 leading-relaxed">
                      <span className="w-4 h-4 rounded bg-brand-green/10 flex items-center justify-center shrink-0 text-brand-green text-[9px] font-black">
                        ✓
                      </span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="bg-white/80 border border-slate-200/50 rounded-lg px-3 py-2 text-xs">
                  <span className="text-slate-400 block text-[8px] font-bold uppercase tracking-wider">Topology Spec</span>
                  <span className="font-bold text-slate-700">
                    {systemArchitectures[activeSystemTab as keyof typeof systemArchitectures].efficiency}
                  </span>
                </div>
                <div className="bg-white/80 border border-slate-200/50 rounded-lg px-3 py-2 text-xs">
                  <span className="text-slate-400 block text-[8px] font-bold uppercase tracking-wider">Best Suited For</span>
                  <span className="font-bold text-brand-blue truncate block">
                    {systemArchitectures[activeSystemTab as keyof typeof systemArchitectures].bestFor}
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Visual Frame & Engineering Metrics */}
          <div className="space-y-6">
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Deploying Maximum Efficiency</h2>
            
            {/* Visual Frame */}
            <div className="relative border border-slate-200/60 p-2.5 bg-white rounded-lg shadow-sm group">
              <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t-2 border-l-2 border-brand-green"></div>
              <div className="absolute -top-1.5 -right-1.5 w-3 h-3 border-t-2 border-r-2 border-brand-green"></div>
              <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 border-b-2 border-l-2 border-brand-green"></div>
              <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b-2 border-r-2 border-brand-green"></div>
              
              <div className="aspect-[4/3] rounded overflow-hidden bg-slate-50 relative">
                <img
                  src="/images/hero-solar.png"
                  alt="A2Z Engineering Premium Solar Installation"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent"></div>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white border border-slate-100 rounded-lg p-4 shadow-sm text-center">
                <span className="block text-xl font-black text-brand-dark font-mono">22.8%</span>
                <span className="text-[8px] font-bold uppercase tracking-wider text-slate-400 block mt-1">Module efficiency</span>
              </div>
              <div className="bg-white border border-slate-100 rounded-lg p-4 shadow-sm text-center">
                <span className="block text-xl font-black text-brand-green font-mono">180 km/h</span>
                <span className="text-[8px] font-bold uppercase tracking-wider text-slate-400 block mt-1">Wind Load rating</span>
              </div>
              <div className="bg-white border border-slate-100 rounded-lg p-4 shadow-sm text-center">
                <span className="block text-xl font-black text-brand-blue font-mono">&lt;10 ms</span>
                <span className="text-[8px] font-bold uppercase tracking-wider text-slate-400 block mt-1">Backup Switch</span>
              </div>
            </div>

          </div>
        </div>

        {/* Row 2: Animated Energy Flow Blueprint */}
        <div className="space-y-6">
          <h2 className="text-xl font-extrabold text-slate-900 tracking-tight border-l-4 border-brand-blue pl-4 py-0.5">
            Complete Energy Flow Blueprint
          </h2>
          
          <div className="bg-slate-950 border border-slate-900 rounded-lg p-8 relative overflow-x-auto min-w-[700px] lg:min-w-0 shadow-md">
            {/* Blueprint Grid Lines Overlay */}
            <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:32px_32px]"></div>

            <div className="relative z-10 flex justify-between items-center gap-6 py-4 font-mono text-[10px] text-white">
              
              {/* Node 1: Panels */}
              <div className="flex flex-col items-center text-center w-36 border border-brand-green/30 bg-slate-900/60 rounded-lg p-4 shadow-sm shrink-0">
                <Sun className="w-8 h-8 text-amber-500 animate-pulse mb-3" />
                <span className="text-brand-green font-bold block">1. N-TYPE PANELS</span>
                <span className="text-[7px] text-slate-400 mt-1 uppercase">DC Collection</span>
              </div>

              {/* Tracer 1 */}
              <div className="flex-grow h-[2px] bg-slate-800 relative">
                <div className="absolute top-0 bottom-0 left-0 w-8 bg-brand-green shadow-[0_0_8px_#7CB05D] animate-[ping_1.5s_infinite_linear] rounded"></div>
              </div>

              {/* Node 2: Inverter */}
              <div className="flex flex-col items-center text-center w-36 border border-brand-blue/30 bg-slate-900/60 rounded-lg p-4 shadow-sm shrink-0">
                <Cpu className="w-8 h-8 text-brand-blue mb-3" />
                <span className="text-brand-blue font-bold block">2. SMART INVERTER</span>
                <span className="text-[7px] text-slate-400 mt-1 uppercase">DC to AC conversion</span>
              </div>

              {/* Tracer 2 */}
              <div className="flex-grow h-[2px] bg-slate-800 relative">
                <div className="absolute top-0 bottom-0 left-0 w-8 bg-brand-green shadow-[0_0_8px_#7CB05D] animate-[ping_1.5s_infinite_linear_0.5s] rounded"></div>
              </div>

              {/* Node 3: Storage */}
              <div className="flex flex-col items-center text-center w-36 border border-brand-green/30 bg-slate-900/60 rounded-lg p-4 shadow-sm shrink-0">
                <Zap className="w-8 h-8 text-brand-green mb-3" />
                <span className="text-brand-green font-bold block">3. LFP STORAGE</span>
                <span className="text-[7px] text-slate-400 mt-1 uppercase">Backup Battery Stack</span>
              </div>

              {/* Tracer 3 */}
              <div className="flex-grow h-[2px] bg-slate-800 relative">
                <div className="absolute top-0 bottom-0 left-0 w-8 bg-brand-green shadow-[0_0_8px_#7CB05D] animate-[ping_1.5s_infinite_linear_1s] rounded"></div>
              </div>

              {/* Node 4: Load / Grid */}
              <div className="flex flex-col items-center text-center w-36 border border-slate-700 bg-slate-900/60 rounded-lg p-4 shadow-sm shrink-0">
                <Layers className="w-8 h-8 text-brand-blue mb-3" />
                <span className="text-slate-300 font-bold block">4. LOAD / GRID</span>
                <span className="text-[7px] text-slate-400 mt-1 uppercase">Power Consumption</span>
              </div>

            </div>
          </div>
        </div>

        {/* Row 3: Why Choose Solar PV Systems & Turnkey Scope */}
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Why Transition Cards */}
          <div className="space-y-6">
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Why Transition to Solar PV?</h2>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {reasons.slice(0, 4).map((r, i) => (
                <div key={i} className="bg-white border border-slate-100 rounded-lg p-5 hover:shadow-md transition-all flex flex-col">
                  <div className="mb-3.5 bg-slate-50 w-9 h-9 rounded flex items-center justify-center border border-slate-100 shrink-0">
                    {r.icon}
                  </div>
                  <h4 className="text-xs font-bold text-brand-dark mb-1.5 tracking-wider uppercase">{r.title}</h4>
                  <p className="text-slate-500 text-[11px] leading-relaxed flex-grow">{r.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Turnkey Scope Cards (ContactPage style form block) */}
          <div className="bg-slate-50 border border-slate-100 p-6 lg:p-8 rounded-lg shadow-sm space-y-6">
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-1 bg-brand-blue rounded-full"></span>
              <h2 className="text-[10px] font-bold text-brand-dark uppercase tracking-widest">Turnkey Scope</h2>
            </div>
            <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">Our Project Lifecycle Scope</h3>
            
            <div className="space-y-4">
              {services.map((s, i) => (
                <div key={i} className="flex gap-3 pb-4 border-b border-slate-200/50 last:border-0 last:pb-0">
                  <span className="text-brand-green font-mono text-xs font-extrabold shrink-0">0{i+1}.</span>
                  <div>
                    <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">{s.title}</h4>
                    <p className="text-slate-500 text-[11px] leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Row 4: Verified Procurement Alliances */}
        <div className="space-y-6">
          <h2 className="text-xl font-extrabold text-slate-900 tracking-tight border-l-4 border-brand-green pl-4 py-0.5">
            Verified Global Procurement Alliances
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {partners.map(p => (
              <div key={p.name} className="bg-white border border-slate-150 rounded-lg p-5 flex flex-col items-center justify-center text-center shadow-sm hover:border-brand-lightblue/20 transition-all">
                <span className="font-mono text-xs font-bold text-slate-700 tracking-wider uppercase block mb-1">
                  {p.name}
                </span>
                <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest font-mono">
                  {p.origin}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 5: Call to Action Integration Survey */}
        <div className="bg-slate-50 border border-slate-100 p-8 rounded-lg shadow-sm text-center space-y-5 max-w-4xl mx-auto">
          <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">Ready for a Zero-Electricity Facility?</h3>
          <p className="text-slate-600 leading-relaxed text-xs max-w-2xl mx-auto italic">
            "At A2Z Engineering, we perform comprehensive mechanical roof load profiling and utility integration assessments. Transition your factory or residence to a high-yield, safe microgrid with absolute structural and electrical compliance."
          </p>
          <div className="pt-2">
            <button
              onClick={() => navigate('/contact')}
              className="inline-flex items-center gap-2 bg-brand-dark hover:bg-brand-blue text-white text-[10px] font-bold uppercase tracking-widest px-8 py-3.5 rounded-lg shadow-sm hover:shadow-md transition-all outline-none"
            >
              Inquire Integration Survey <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </section>

    </div>
  );
}
