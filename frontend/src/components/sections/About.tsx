import { companyStats, images } from '../../data/site';
import { SectionHeader } from '../patterns/SectionHeader';
import { StatGroup } from '../patterns/StatGroup';

export function About() {
  return (
    <section id="about" className="relative w-full bg-white px-4 py-20 sm:px-6 sm:py-24 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with high-end shadow and floating badge */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/3] overflow-hidden rounded-[2rem] border border-slate-200/80 bg-slate-50 shadow-xl shadow-slate-200/40">
              <img
                src={images.buildingOffice}
                alt="A2Z Engineering project work"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            {/* Absolute floating glassmorphic location tag */}
            <div className="absolute -bottom-5 left-5 right-5 rounded-2xl border border-slate-200/80 bg-white/90 p-4 shadow-xl shadow-slate-950/5 backdrop-blur sm:left-auto sm:w-72">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 leading-none">
                  Island-wide engineering
                </p>
                <p className="mt-1.5 text-xs font-bold text-slate-900 leading-tight">
                  Based in Meepe, Sri Lanka, executing globally.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Copywriting and high-contrast structured milestones */}
          <div className="order-1 lg:order-2 flex flex-col gap-6">
            <div>
              <SectionHeader
                eyebrow="About A2Z"
                title="Careful, accountable engineering work from a focused team."
                description="A2Z Engineering is a Sri Lanka based service firm deploying certified Solar PV networks, reliable electrical grids, and intelligent HVAC networks. We focus on practical designs, high-end calibrations, and responsive maintenance."
                className="text-left mb-6"
              />
            </div>

            {/* Premium Lean details blocks */}
            <div className="grid gap-3 sm:grid-cols-2 mt-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-950">Lean scope planning</p>
                <p className="mt-2 text-xs leading-relaxed text-slate-500">
                  We prioritize absolute clarity from the initial site visit to handover. Customers understand what is being installed, why it is needed, and how it will be maintained.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-950">Production standards</p>
                <p className="mt-2 text-xs leading-relaxed text-slate-500">
                  Every panel placement, electrical layout, and HVAC node is calibrated for high resilience, maximum efficiency, and long-term operating durability.
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100">
              <StatGroup
                stats={[
                  { value: companyStats.yearsExperience, label: 'Years trust' },
                  { value: companyStats.projectsCompleted, label: 'Completed sites' },
                  { value: '24/7', label: 'Support SLA' },
                ]}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
