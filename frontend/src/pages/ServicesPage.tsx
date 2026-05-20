import { useState } from 'react';
import {
  Zap,
  Wind,
  Radio,
  Wrench,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { PageHero } from '../components/patterns/PageHero';
import { CTABand } from '../components/patterns/CTABand';
import { Card } from '../components/ui/Card';
import { Disclosure } from '../components/ui/Disclosure';
import { ButtonLink } from '../components/ui/ButtonLink';
import { images } from '../data/site';

export function ServicesPage() {
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
      <PageHero
        eyebrow="Services"
        title="Engineering services with clear scope"
        description="We keep each project practical: understand the site, define the technical requirement, install carefully, and support the system after handover."
        bgImage={images.facilityPreview}
      />

      {/* Services Grid Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full flex-grow">
        <div className="grid md:grid-cols-2 gap-8">
          {serviceCategories.map((category) => (
            <Card
              key={category.id}
              id={category.id}
              interactive
              className={`scroll-target p-6 lg:p-8 flex flex-col justify-between ${category.glowColor}`}
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

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between gap-4 flex-wrap">
                <Disclosure
                  id={`spec-${category.id}`}
                  title={
                    selectedServiceSpec === category.id
                      ? 'Hide specifications'
                      : 'View engineering specs'
                  }
                  open={selectedServiceSpec === category.id}
                  onToggle={() =>
                    setSelectedServiceSpec(
                      selectedServiceSpec === category.id ? null : category.id
                    )
                  }
                  className="flex-1 min-w-[200px]"
                >
                  <div className="grid gap-2 text-slate-700">
                    <p>
                      <span className="font-bold text-slate-400 uppercase text-xs block">
                        Tolerance
                      </span>
                      {category.specs.tolerances}
                    </p>
                    <p>
                      <span className="font-bold text-slate-400 uppercase text-xs block">
                        Standards
                      </span>
                      {category.specs.standards}
                    </p>
                    <p>
                      <span className="font-bold text-slate-400 uppercase text-xs block">
                        Hardware
                      </span>
                      {category.specs.hardware}
                    </p>
                    <p>
                      <span className="font-bold text-slate-400 uppercase text-xs block">
                        Structural
                      </span>
                      {category.specs.windLoad}
                    </p>
                  </div>
                </Disclosure>

                <ButtonLink to="/contact?inquiry=services-epc" variant="outline" size="sm" className="gap-1 shrink-0">
                  Inquire <ArrowRight className="w-3.5 h-3.5" aria-hidden />
                </ButtonLink>
              </div>
            </Card>
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
                className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm flex flex-col justify-between relative group hover:border-brand-blue/30 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
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

      <CTABand
        variant="light"
        title="Ready to plan your technical integration?"
        description="Every project starts with site conditions, structural requirements, and budget. Consult our registered structural and electrical engineers."
        primaryLabel="Book feasibility study"
        primaryTo="/contact?inquiry=services-epc"
      />

    </div>
  );
}
