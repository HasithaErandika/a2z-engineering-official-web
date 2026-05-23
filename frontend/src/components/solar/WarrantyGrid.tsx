import { ShieldCheck, Wrench, Battery, Sun, Umbrella, Headphones } from 'lucide-react';
import { solarWarranties } from '../../data/solarSystems';
import { images } from '../../data/site';
import { SectionImagePanel } from '../patterns/SectionImagePanel';

const icons = [Sun, Sun, Wrench, Battery, Umbrella, Headphones, ShieldCheck];

export function WarrantyGrid() {
  return (
    <section className="rounded-2xl border border-brand-green/20 bg-gradient-to-br from-brand-green/5 via-white to-brand-blue/5 p-6 lg:p-10">
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        <div className="lg:col-span-8 space-y-8">
          <div className="max-w-2xl">
            <span className="text-[9px] font-bold text-brand-green uppercase tracking-widest block mb-2">
              Peace of mind
            </span>
            <h2 className="text-2xl font-extrabold text-slate-950 tracking-tight">
              Warranty & included benefits
            </h2>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Every A2Z solar package is backed by manufacturer warranties and complimentary services
              so your investment stays protected from day one.
            </p>
          </div>

          <div className="lg:hidden">
            <SectionImagePanel
              src={images.productsShowcase}
              alt="Tier-1 solar modules and inverters covered under A2Z warranty packages"
              badge="Tier-1 hardware"
              caption="Panels, inverters, batteries, and switchgear—specified and installed by A2Z."
              aspect="natural"
            />
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {solarWarranties.map((item, i) => {
              const Icon = icons[i] ?? ShieldCheck;
              return (
                <div
                  key={item.title}
                  className="bg-white/90 border border-slate-200/80 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-brand-green/30 transition-all"
                >
                  <div className="w-9 h-9 rounded-lg bg-brand-green/10 border border-brand-green/20 flex items-center justify-center mb-3">
                    <Icon className="w-4 h-4 text-brand-green" aria-hidden />
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    {item.title}
                  </p>
                  <p className="text-xl font-black text-slate-900 mt-1 tabular-nums">{item.detail}</p>
                  <p className="text-[11px] text-slate-500 mt-2 leading-snug">{item.sub}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="hidden lg:block lg:col-span-4 lg:sticky lg:top-24">
          <SectionImagePanel
            src={images.productsShowcase}
            alt="Tier-1 solar modules and inverters covered under A2Z warranty packages"
            badge="Tier-1 hardware"
            caption="Panels, inverters, batteries, and switchgear—specified and installed by A2Z."
            aspect="natural"
          />
        </div>
      </div>
    </section>
  );
}
