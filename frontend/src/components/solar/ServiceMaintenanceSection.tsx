import { Settings2 } from 'lucide-react';
import { solarMaintenanceServices } from '../../data/solarSystems';
import { images } from '../../data/site';
import { SectionImagePanel } from '../patterns/SectionImagePanel';

export function ServiceMaintenanceSection() {
  return (
    <section className="space-y-6">
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        <div className="lg:col-span-4 order-2 lg:order-1 lg:sticky lg:top-24 space-y-4">
          <SectionImagePanel
            src={images.panelClean}
            alt="Professional solar panel cleaning and maintenance by A2Z Engineering"
            badge="Panel care"
            caption="Safe cleaning and inspection to maintain peak generation year-round."
            aspect="natural"
          />
        </div>

        <div className="lg:col-span-8 order-1 lg:order-2 space-y-6">
          <div className="max-w-3xl">
            <span className="text-[9px] font-bold text-brand-blue uppercase tracking-widest block mb-2">
              Lifecycle support
            </span>
            <h2 className="text-2xl font-extrabold text-slate-950 tracking-tight">
              Service & Maintenance
            </h2>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Solar performs best when it is monitored, cleaned, and tested on schedule. A2Z offers
              structured O&M after installation—including two complimentary visits in the first two
              years on qualifying packages.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {solarMaintenanceServices.map((service) => (
              <div
                key={service.title}
                className="flex gap-4 rounded-xl border border-slate-200/80 bg-slate-50/50 p-6 hover:bg-white hover:border-brand-blue/30 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 shrink-0 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center">
                  <Settings2 className="w-5 h-5 text-brand-blue" aria-hidden />
                </div>
                <div>
                  <h3 className="text-sm font-extrabold text-slate-900">{service.title}</h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
