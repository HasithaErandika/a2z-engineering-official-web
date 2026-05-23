import { Package, ShieldCheck, Globe } from 'lucide-react';
import { images } from '../../data/site';
import { ButtonLink } from '../ui/ButtonLink';

export function WhatA2zProducts() {
  return (
    <section className="rounded-2xl border border-slate-200/80 bg-gradient-to-br from-brand-blue/[0.06] via-white to-brand-green/[0.05] overflow-hidden">
      <div className="grid lg:grid-cols-12 gap-0 items-stretch">
        <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-center space-y-5 order-2 lg:order-1">
          <span className="text-[9px] font-bold text-brand-blue uppercase tracking-widest">
            What A2Z supplies
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Tier-1 solar components, curated for Sri Lankan conditions
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed max-w-xl">
            A2Z Engineering procures and integrates modules, inverters, hybrid systems, and battery
            storage from globally certified manufacturers. Every line in our catalog is vetted for
            grid compatibility, tropical performance, and long warranty support before we specify it
            on your project.
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              { icon: Package, label: 'Panels & inverters', text: 'Jinko, Huawei, Solis, GoodWe' },
              { icon: ShieldCheck, label: 'Warranty backed', text: 'Factory & A2Z support' },
              { icon: Globe, label: 'Official catalogs', text: 'Verified manufacturer links' },
            ].map(({ icon: Icon, label, text }) => (
              <div
                key={label}
                className="flex items-start gap-2.5 rounded-xl border border-slate-200/80 bg-white/90 px-3 py-2.5 shadow-sm min-w-[140px] flex-1"
              >
                <Icon className="w-4 h-4 text-brand-green shrink-0 mt-0.5" aria-hidden />
                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-wider text-slate-800">
                    {label}
                  </p>
                  <p className="text-[10px] text-slate-500 mt-0.5">{text}</p>
                </div>
              </div>
            ))}
          </div>
          <ButtonLink to="/contact?inquiry=product-spec" variant="accent" size="md" className="w-fit">
            Request a specification
          </ButtonLink>
        </div>
        <div className="lg:col-span-5 order-1 lg:order-2 relative min-h-[220px] lg:min-h-full bg-slate-100">
          <img
            src={images.productsShowcase}
            alt="Tier-1 solar panels, inverters, and battery systems supplied by A2Z Engineering"
            className="absolute inset-0 w-full h-full object-cover object-center"
            loading="eager"
            decoding="async"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/20 lg:bg-gradient-to-l lg:from-white/30 lg:to-transparent"
            aria-hidden
          />
        </div>
      </div>
    </section>
  );
}
