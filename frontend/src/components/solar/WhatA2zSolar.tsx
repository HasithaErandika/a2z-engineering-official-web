import { Sun, Zap, ShieldCheck } from 'lucide-react';
import { ButtonLink } from '../ui/ButtonLink';

export function WhatA2zSolar() {
  return (
    <section className="rounded-2xl border border-brand-green/20 bg-gradient-to-r from-brand-green/8 via-white to-brand-blue/8 p-6 lg:p-10">
      <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
        <div className="space-y-4">
          <span className="text-[9px] font-bold text-brand-green uppercase tracking-widest">
            What A2Z Solar
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
            End-to-end solar engineering for Sri Lankan homes and businesses
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed max-w-2xl">
            A2Z Solar designs, supplies, and commissions grid-tied, hybrid, off-grid, and battery-backup
            systems using tier-one components. From CEB net-accounting applications to post-installation
            service, we deliver transparent sizing, certified workmanship, and long-term support.
          </p>
          <div className="flex flex-wrap gap-3 pt-1">
            <ButtonLink to="/contact?inquiry=solar-site-visit" variant="accent" size="md">
              Book a site visit
            </ButtonLink>
            <ButtonLink to="/products" variant="outline" size="md">
              View product catalog
            </ButtonLink>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[
            { icon: Sun, label: 'Tier-1 PV', text: 'Jinko, JA, Longi modules' },
            { icon: Zap, label: 'Smart inverters', text: 'Huawei, Solis, GoodWe' },
            { icon: ShieldCheck, label: 'Backed installs', text: 'Warranty & O&M included' },
          ].map(({ icon: Icon, label, text }) => (
            <div
              key={label}
              className="rounded-xl border border-white/80 bg-white/90 p-4 text-center shadow-sm"
            >
              <Icon className="w-5 h-5 text-brand-green mx-auto mb-2" aria-hidden />
              <p className="text-[10px] font-extrabold uppercase tracking-wider text-slate-800">{label}</p>
              <p className="text-[9px] text-slate-500 mt-1 leading-snug">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
