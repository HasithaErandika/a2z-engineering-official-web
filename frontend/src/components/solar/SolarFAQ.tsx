import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { solarFaqs } from '../../data/solarSystems';
import { cn } from '../../lib/cn';

export function SolarFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="space-y-6">
      <div className="max-w-3xl">
        <span className="text-[9px] font-bold text-brand-blue uppercase tracking-widest block mb-2">
          Common questions
        </span>
        <h2 className="text-2xl font-extrabold text-slate-950 tracking-tight">
          Frequently Asked Questions
        </h2>
      </div>
      <div className="divide-y divide-slate-200 border border-slate-200/80 rounded-2xl overflow-hidden bg-white">
        {solarFaqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={faq.question}>
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-slate-50/80 transition-colors"
                aria-expanded={isOpen}
              >
                <span className="text-sm font-bold text-slate-900 pr-4">{faq.question}</span>
                <ChevronDown
                  className={cn(
                    'w-5 h-5 text-slate-400 shrink-0 transition-transform',
                    isOpen && 'rotate-180'
                  )}
                  aria-hidden
                />
              </button>
              {isOpen && (
                <div className="px-5 pb-4 -mt-1">
                  <p className="text-xs text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
