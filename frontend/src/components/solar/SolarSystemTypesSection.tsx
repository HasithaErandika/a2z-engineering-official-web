import { useState } from 'react';
import { ChevronDown, CheckCircle2 } from 'lucide-react';
import { solarSystemTypes } from '../../data/solarSystems';
import { LiveEnergyFlowDiagram } from './LiveEnergyFlowDiagram';
import { cn } from '../../lib/cn';

const accentBorder: Record<string, string> = {
  green: 'border-brand-green/25',
  blue: 'border-brand-blue/25',
  amber: 'border-amber-300/40',
  violet: 'border-violet-300/40',
};

const accentBadge: Record<string, string> = {
  green: 'bg-brand-green/10 text-brand-green',
  blue: 'bg-brand-blue/10 text-brand-blue',
  amber: 'bg-amber-50 text-amber-800',
  violet: 'bg-violet-50 text-violet-800',
};

export function SolarSystemTypesSection() {
  const [openId, setOpenId] = useState<string | null>('on-grid');

  return (
    <div className="space-y-4">
      <div className="max-w-3xl mb-6">
        <span className="text-[9px] font-bold text-brand-blue uppercase tracking-widest block mb-2">
          System architectures
        </span>
        <h2 className="text-2xl font-extrabold text-slate-950 tracking-tight">
          On-Grid · Off-Grid · Hybrid · Battery Backup
        </h2>
        <p className="mt-2 text-sm text-slate-600 leading-relaxed">
          Expand each option to view a live energy-flow diagram and summary. All layouts are
          horizontal for quick comparison.
        </p>
      </div>

      <div className="space-y-2">
        {solarSystemTypes.map((system) => {
          const isOpen = openId === system.id;
          return (
            <article
              key={system.id}
              id={system.id}
              className={cn(
                'scroll-mt-28 rounded-xl border bg-white overflow-hidden shadow-sm transition-shadow',
                isOpen ? accentBorder[system.accent] : 'border-slate-200/80',
                isOpen && 'shadow-md'
              )}
            >
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? null : system.id)}
                className="w-full flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 px-4 py-3.5 text-left hover:bg-slate-50/80 transition-colors"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <ChevronDown
                    className={cn(
                      'w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200',
                      isOpen && 'rotate-180'
                    )}
                    aria-hidden
                  />
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-sm font-extrabold text-slate-950">{system.title}</h3>
                      <span
                        className={cn(
                          'text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full',
                          accentBadge[system.accent]
                        )}
                      >
                        {system.tagline}
                      </span>
                    </div>
                    {!isOpen && (
                      <p className="text-xs text-slate-500 mt-1 line-clamp-1">{system.summary}</p>
                    )}
                  </div>
                </div>
                {!isOpen && (
                  <div className="hidden md:block w-[min(100%,280px)] shrink-0 opacity-80">
                    <LiveEnergyFlowDiagram
                      type={system.id}
                      accent={system.accent}
                      compact
                    />
                  </div>
                )}
              </button>

              {isOpen && (
                <div className="px-4 pb-4 pt-0 border-t border-slate-100 animate-slide-up">
                  <div className="flex flex-col xl:flex-row gap-4 xl:gap-6 pt-4">
                    <div className="xl:w-[42%] space-y-3 shrink-0">
                      <p className="text-xs font-medium text-slate-700 leading-relaxed">
                        {system.summary}
                      </p>
                      <p className="text-[11px] text-slate-600 leading-relaxed line-clamp-4">
                        {system.description[0]}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {system.highlights.slice(0, 4).map((item) => (
                          <span
                            key={item}
                            className="inline-flex items-center gap-1 text-[10px] font-medium text-slate-600 bg-slate-50 border border-slate-100 rounded-full px-2.5 py-1"
                          >
                            <CheckCircle2 className="w-3 h-3 text-brand-green shrink-0" />
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="xl:flex-1 min-w-0">
                      <LiveEnergyFlowDiagram type={system.id} accent={system.accent} />
                    </div>
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
}
