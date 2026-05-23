import { useState, useEffect } from 'react';
import {
  Zap,
  Wind,
  Radio,
  Wrench,
  CheckCircle2,
  ArrowRight,
  Video,
} from 'lucide-react';
import { PageHero } from '../components/patterns/PageHero';
import { CTABand } from '../components/patterns/CTABand';
import { Card } from '../components/ui/Card';
import { Disclosure } from '../components/ui/Disclosure';
import { ButtonLink } from '../components/ui/ButtonLink';
import { images, companyStats } from '../data/site';
import { cn } from '../lib/cn';

export function ServicesPage() {
  const [selectedServiceSpec, setSelectedServiceSpec] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 5);
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const serviceCategories = [
    {
      id: 'solar',
      title: 'Solar & Electrical EPC',
      desc: 'Design, global hardware procurement, installation, grid connection clearance, and routine maintenance for industrial, commercial, and residential electrical networks.',
      icon: <Zap className="w-5 h-5 text-brand-green" />,
      glowColor: 'group-hover:border-brand-green/35',
      accentBar: 'border-l-brand-green',
      accentBg: 'bg-brand-green/10',
      image: images.panelClean,
      imageAlt: 'Solar panel cleaning and rooftop PV maintenance by A2Z',
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
      accentBar: 'border-l-brand-blue',
      accentBg: 'bg-brand-blue/10',
      image: images.hvacService,
      imageAlt: 'Industrial and commercial HVAC systems serviced by A2Z Engineering',
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
      accentBar: 'border-l-slate-800',
      accentBg: 'bg-slate-100',
      image: images.telecomService,
      imageAlt: 'Telecommunications infrastructure and tower works by A2Z Engineering',
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
      accentBar: 'border-l-amber-500',
      accentBg: 'bg-amber-50',
      image: images.civilWork,
      imageAlt: 'Civil works and structural installation for engineering projects',
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
    },
    {
      id: 'cctv',
      title: 'CCTV & Security Systems',
      desc: 'Design, structured cabling, camera mounting, secure NVR storage setup, and remote view configuration for commercial and industrial complexes.',
      icon: <Video className="w-5 h-5 text-indigo-600" />,
      glowColor: 'group-hover:border-indigo-600/35',
      accentBar: 'border-l-indigo-600',
      accentBg: 'bg-indigo-50',
      image: images.cctv,
      imageAlt: 'CCTV surveillance camera systems and server setup by A2Z Engineering',
      points: [
        'HD/4K IP Video Arrays',
        'Secure Local Storage NVRs',
        'Remote Access & Mobile Streams',
        'Integrated Maintenance & Service'
      ],
      specs: {
        tolerances: 'Zero packet loss over CAT6, IP67 weatherproof cameras',
        standards: 'ONVIF profile compliant protocol integration',
        hardware: 'Tier-1 IP cameras, high-capacity RAID surveillance NVRs',
        windLoad: 'Heavy-duty mounts verified against vibration & shear loads'
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
        bgImage={images.buildingOffice}
      />

      {/* Core disciplines + project visual */}
      <section className="w-full flex-grow bg-gradient-to-b from-slate-50/60 via-white to-white border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div 
              className="lg:col-span-7 space-y-8"
              onMouseEnter={() => setIsAutoPlay(false)}
              onMouseLeave={() => setIsAutoPlay(true)}
            >
              <div className="max-w-2xl">
                <span className="text-[9px] font-bold text-brand-blue uppercase tracking-widest block mb-2">
                  Core disciplines
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                  Five engineering pillars under one team
                </h2>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Hover or select a discipline to review scope, specifications, and how we integrate with your
                  site—from rooftop solar to HVAC, telecom, civil metalwork, and CCTV.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                {serviceCategories.map((category, index) => (
                  <Card
                    key={category.id}
                    id={category.id}
                    interactive
                    onMouseEnter={() => {
                      setActiveIndex(index);
                    }}
                    className={cn(
                      'group scroll-target overflow-hidden p-5 lg:p-6 flex flex-col justify-between transition-all duration-300 cursor-pointer',
                      index === 4 ? 'sm:col-span-2' : '',
                      activeIndex === index
                        ? cn('border-l-4 shadow-lg scale-[1.01] -translate-y-0.5', category.accentBar, category.accentBg)
                        : 'border-l-[3px] border-l-slate-200 bg-white hover:bg-slate-50/30'
                    )}
                  >
                    <div className="space-y-4 flex-grow flex flex-col">
                      <div className="flex items-center gap-3">
                        <div
                          className={cn(
                            'w-10 h-10 border border-slate-100 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-300',
                            activeIndex === index ? 'bg-white border-white' : category.accentBg
                          )}
                        >
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

                    <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between gap-4 flex-wrap">
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
                        <div className="grid gap-2 text-slate-700 mt-2">
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
            </div>

            <div className="lg:col-span-5 lg:sticky lg:top-24">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200/80 shadow-xl shadow-slate-300/30 min-h-[460px] lg:min-h-[calc(100vh-12rem)] lg:max-h-[640px] bg-slate-900 flex flex-col justify-end">
                {/* Slideshow Images with Crossfade */}
                {serviceCategories.map((category, idx) => (
                  <div
                    key={category.id}
                    className={cn(
                      'absolute inset-0 transition-all duration-700 ease-in-out',
                      idx === activeIndex ? 'opacity-100 scale-100 z-0' : 'opacity-0 scale-105 pointer-events-none -z-10'
                    )}
                  >
                    <img
                      src={category.image}
                      alt={category.imageAlt}
                      className="absolute inset-0 h-full w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                ))}

                {/* Overlay gradient */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-slate-950/20 z-[1]"
                  aria-hidden
                />

                {/* Navigation Dots / Pills */}
                <div className="absolute top-4 left-4 right-4 flex flex-wrap gap-1.5 z-10">
                  {serviceCategories.map((category, idx) => (
                    <button
                      key={category.id}
                      onClick={() => {
                        setActiveIndex(idx);
                        setIsAutoPlay(false);
                      }}
                      className={cn(
                        'rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider backdrop-blur-md transition-all duration-300 border text-white',
                        idx === activeIndex
                          ? 'border-white bg-white text-slate-950 shadow-sm font-black'
                          : 'border-white/15 bg-white/10 hover:bg-white/20'
                      )}
                    >
                      {category.title.split(' & ')[0].split(' ')[0]}
                    </button>
                  ))}
                </div>

                {/* Active Slide Info & Stats */}
                <div className="p-6 z-10 space-y-4">
                  <div className="space-y-1.5">
                    <span className="text-[9px] font-bold text-brand-green uppercase tracking-widest block">
                      Core Disciplines
                    </span>
                    <h3 className="text-xl font-extrabold text-white tracking-tight leading-tight">
                      {serviceCategories[activeIndex].title}
                    </h3>
                    <p className="text-white/80 text-xs leading-relaxed max-w-sm">
                      {serviceCategories[activeIndex].desc}
                    </p>
                  </div>

                  {serviceCategories[activeIndex].id === 'solar' && (
                    <div className="grid grid-cols-3 gap-2.5 pt-4 border-t border-white/15">
                      <div className="rounded-xl border border-white/10 bg-white/5 px-2.5 py-2 backdrop-blur-md text-center">
                        <p className="text-base font-black text-white tabular-nums leading-none">
                          {companyStats.installedCapacityKw}
                        </p>
                        <p className="text-[7px] font-bold uppercase tracking-wider text-white/60 mt-1">
                          kW installed
                        </p>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-white/5 px-2.5 py-2 backdrop-blur-md text-center">
                        <p className="text-base font-black text-brand-green tabular-nums leading-none">
                          {companyStats.projectsCompleted}
                        </p>
                        <p className="text-[7px] font-bold uppercase tracking-wider text-white/60 mt-1">
                          Projects
                        </p>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-white/5 px-2.5 py-2 backdrop-blur-md text-center">
                        <p className="text-base font-black text-white tabular-nums leading-none">
                          {companyStats.connectedInfrastructure}
                        </p>
                        <p className="text-[7px] font-bold uppercase tracking-wider text-white/60 mt-1">
                          Connected
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connection Process Timeline */}
      <section className="bg-slate-50 border-t border-b border-slate-200 py-16 w-full select-none overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-[9px] font-bold text-brand-blue uppercase tracking-widest block mb-2">
              EPC lifecycle management
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              Our professional workflow
            </h2>
            <p className="text-slate-500 text-sm mt-3 leading-relaxed">
              We execute installations with single-source accountability, ensuring full transparency
              at every phase—from feasibility through long-term support.
            </p>
          </div>

          <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden border border-slate-200/80 bg-white shadow-xl shadow-slate-200/40">
            <img
              src={images.professionalWorkflow}
              alt="A2Z Engineering professional workflow from site survey to installation and handover"
              className="w-full h-auto block"
              loading="lazy"
              decoding="async"
            />
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
