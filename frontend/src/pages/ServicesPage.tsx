import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Zap, 
  Wind, 
  Radio, 
  Wrench, 
  CheckCircle2, 
  ArrowRight,
  Info,
  Calendar,
  Layers
} from 'lucide-react';
import { PageHeader } from '../components/shared/PageHeader';

export function ServicesPage() {
  const navigate = useNavigate();
  const [selectedServiceSpec, setSelectedServiceSpec] = useState<string | null>(null);

  const serviceCategories = [
    {
      id: 'solar',
      title: 'Solar & Electrical EPC',
      desc: 'Design, global hardware procurement, installation, grid connection clearance, and routine maintenance for industrial, commercial, and residential electrical networks.',
      icon: <Zap className="w-5 h-5 text-brand-green" />,
      glowColor: 'group-hover:border-brand-green/35',
      points: [
        'Dynamic Heat & Power Load Profiling',
        'Certified 3-Phase Wiring & Protection',
        'Auto-Transfer Switch (ATS) Integration',
        'Lightning Protection & Grounding Grids'
      ],
      specs: {
        tolerances: 'Grounding resistance < 5 Ohms, fully certified',
        standards: 'CEB / LECO Grid Connection standards compliant',
        hardware: 'Tier-1 bifacial panels, double AC/DC surge protection cabinets',
        windLoad: 'Hot-dipped galvanized steel mounts rated up to 180 km/h wind velocity'
      }
    },
    {
      id: 'hvac',
      title: 'Industrial & Commercial HVAC',
      desc: 'Precision engineering, sizing, routine preventative maintenance, and troubleshooting for complex commercial VRF/VRV systems and heavy-duty splits.',
      icon: <Wind className="w-5 h-5 text-brand-blue" />,
      glowColor: 'group-hover:border-brand-blue/35',
      points: [
        'VRF/VRV Climate System Engineering',
        'Dynamic Space Thermal Sizing Calculations',
        'Compressor Diagnostics & Maintenance',
        'Energy Efficiency Auditing & Upgrades'
      ],
      specs: {
        tolerances: 'ASHRAE thermal standard ventilation compliant',
        standards: 'CoP (Coefficient of Performance) optimized scheduling',
        hardware: 'R32 / R410a zero-ozone depletion eco-refrigerants',
        windLoad: 'Outdoor condenser frames engineered with vibration-isolation isolation pads'
      }
    },
    {
      id: 'telecom',
      title: 'Telecom Infrastructure Support',
      desc: 'Site preparation, bracket fabrication, structured cable routing, and equipment mounting engineered to secure high-performance telecommunication microgrids.',
      icon: <Radio className="w-5 h-5 text-slate-800" />,
      glowColor: 'group-hover:border-slate-800/35',
      points: [
        'Coaxial & Fiber Conduiting Layouts',
        'Heavy Antenna Mounting Structures',
        'Grounding & Lightning Protection Rings',
        'Foundation Site Readiness Checks'
      ],
      specs: {
        tolerances: 'Structural foundation checks for vertical alignment load',
        standards: 'Telecommunication network cabinet weatherproofing standards',
        hardware: 'Stainless-steel brackets, corrosion-proof mechanical locks',
        windLoad: 'Heavy-duty pole interfaces verified against structural shear loads'
      }
    },
    {
      id: 'civil',
      title: 'Civil Works & Metal Fabrication',
      desc: 'Precision steel bracket fabrication, concrete equipment plinths, and bespoke structural metalworks designed specifically for technical equipment loads.',
      icon: <Wrench className="w-5 h-5 text-amber-500" />,
      glowColor: 'group-hover:border-amber-500/35',
      points: [
        'Hot-Dipped Galvanized Steel Framing',
        'Heavy Concrete Foundation Plinths',
        'Custom Bracket Mechanical Stiffening',
        'Anti-Corrosive Chemical Coatings'
      ],
      specs: {
        tolerances: 'ASTM structural metal welding standards compliant',
        standards: 'Grade 30 concrete compression mix profiles',
        hardware: 'Dual-coat epoxy shielding, mechanical expansion anchors',
        windLoad: 'Frames statically and dynamically verified against high-pressure wind load curves'
      }
    }
  ];

  const workflowSteps = [
    {
      title: 'Inspect',
      subtitle: '01. Feasibility Study',
      desc: 'Site shadow vector scans, electrical DB structural audits, and raw energy load data profiling.'
    },
    {
      title: 'Plan',
      subtitle: '02. Engineering Blueprints',
      desc: 'Constructing custom Single Line Diagrams (SLD), CAD prints, and electrical safety protection files.'
    },
    {
      title: 'Install',
      subtitle: '03. EPC Deployment',
      desc: 'Certified technicians install conduits, cable arrays, and structures under close structural oversight.'
    },
    {
      title: 'Support',
      subtitle: '04. SCADA & Response',
      desc: 'Setting up smart telemetry alerts, routine thermal scanner checks, and <24h emergency on-call response.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <PageHeader
        eyebrow="Services"
        title="Engineering Services with Clear Scope"
        description="We keep each project practical: understand the site, define the technical requirement, install carefully, and support the system after handover."
        bgImage="/images/facility-preview.png"
      />

      {/* Services Grid Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full flex-grow">
        <div className="grid md:grid-cols-2 gap-8">
          {serviceCategories.map((category) => (
            <article 
              key={category.id} 
              className={`bg-white border border-slate-150 p-6 lg:p-8 rounded-xl shadow-sm hover:shadow-md transition-all group flex flex-col justify-between ${category.glowColor}`}
            >
              <div className="space-y-4">
                
                {/* Header info */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-center shrink-0">
                    {category.icon}
                  </div>
                  <h2 className="text-lg font-black text-slate-950 tracking-tight leading-snug">
                    {category.title}
                  </h2>
                </div>

                <p className="text-slate-600 text-xs leading-relaxed">
                  {category.desc}
                </p>

                {/* Sub-features checklist */}
                <div className="grid sm:grid-cols-2 gap-3 pt-2">
                  {category.points.map((point) => (
                    <div key={point} className="flex gap-2.5 text-[11px] font-medium text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Action spec buttons */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setSelectedServiceSpec(selectedServiceSpec === category.id ? null : category.id)}
                  className="inline-flex items-center gap-1.5 text-[10px] font-bold text-slate-400 hover:text-brand-blue uppercase tracking-wider outline-none"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>
                    {selectedServiceSpec === category.id ? 'Hide Specifications' : 'View Engineering Specs'}
                  </span>
                </button>

                <button
                  onClick={() => navigate('/contact')}
                  className="inline-flex items-center gap-1 text-[10px] font-bold text-brand-dark hover:text-brand-blue uppercase tracking-widest outline-none group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Inquire</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Expandable Engineering Spec Sheet Block */}
              {selectedServiceSpec === category.id && (
                <div className="mt-4 p-4 bg-slate-50 border border-slate-200/50 rounded-lg text-xs space-y-2.5 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="flex items-center gap-1.5 text-brand-blue font-bold uppercase tracking-wider text-[9px] border-b border-slate-100 pb-1.5">
                    <Layers className="w-3.5 h-3.5" />
                    <span>Technical Parameters Summary</span>
                  </div>
                  <div className="grid gap-2">
                    <div>
                      <span className="text-slate-400 block text-[8px] font-bold uppercase tracking-wider">Calibration Tolerance</span>
                      <span className="font-semibold text-slate-700">{category.specs.tolerances}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[8px] font-bold uppercase tracking-wider">Design Standards</span>
                      <span className="font-semibold text-slate-700">{category.specs.standards}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[8px] font-bold uppercase tracking-wider">Hardware Integration Profile</span>
                      <span className="font-semibold text-slate-700">{category.specs.hardware}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[8px] font-bold uppercase tracking-wider">Structural Compliance</span>
                      <span className="font-semibold text-brand-green">{category.specs.windLoad}</span>
                    </div>
                  </div>
                </div>
              )}

            </article>
          ))}
        </div>
      </section>

      {/* Connection Process Timeline (Aligned to Subpage structure) */}
      <section className="bg-slate-50 border-t border-b border-slate-200 py-16 w-full select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[9px] font-bold text-brand-blue uppercase tracking-widest block mb-2">
              EPC Lifecycle Management
            </span>
            <h2 className="text-2xl font-extrabold text-slate-950 tracking-tight">
              Our Professional Workflow
            </h2>
            <p className="text-slate-500 text-xs mt-2">
              We execute installations with single-source accountability, ensuring full transparency at every phase.
            </p>
          </div>

          {/* Connected Steps Grid */}
          <div className="grid md:grid-cols-4 gap-6 relative">
            {workflowSteps.map((step, i) => (
              <div 
                key={step.title} 
                className="bg-white border border-slate-200/80 rounded-xl p-6 shadow-sm flex flex-col justify-between relative group hover:border-brand-blue/20 hover:shadow transition-all"
              >
                
                {/* Large floating number index */}
                <div className="absolute top-4 right-4 text-slate-100 font-mono text-4xl font-black select-none group-hover:text-brand-green/10 transition-colors">
                  0{i + 1}
                </div>

                <div className="space-y-4">
                  <span className="text-[9px] font-bold text-brand-blue uppercase tracking-widest block">
                    {step.subtitle}
                  </span>
                  
                  <div>
                    <h3 className="text-sm font-extrabold text-slate-900 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-[11px] text-slate-500 leading-relaxed mt-2">
                      {step.desc}
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Survey Request */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-1.5 text-[10px] font-bold text-brand-green uppercase tracking-widest bg-brand-green/5 border border-brand-green/10 px-3.5 py-1.5 rounded-full mx-auto">
            <Calendar className="w-3.5 h-3.5" /> Book Feasibility Study
          </div>
          
          <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight leading-none">
            Ready to Plan Your Technical Integration?
          </h3>
          <p className="text-slate-600 leading-relaxed text-xs max-w-2xl mx-auto italic">
            "Every project starts with the site condition, structural weights, load requirements, and customer budget. Contact A2Z Engineering today to consult with our registered structural and electrical engineers."
          </p>
          <div className="pt-2">
            <button
              onClick={() => navigate('/contact')}
              className="inline-flex items-center gap-2 bg-[#1e293b] hover:bg-brand-blue text-white text-[10px] font-bold uppercase tracking-widest px-8 py-3.5 rounded-lg shadow-sm hover:shadow-md transition-all outline-none"
            >
              Consult an Specialist <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
