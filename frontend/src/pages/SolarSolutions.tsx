import { ArrowRight, CheckCircle2, ShieldCheck, Sun, TrendingDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { PageHeader } from '../components/shared/PageHeader';

export function SolarSolutions() {
  const navigate = useNavigate();
  const systems = [
    { title: 'On-grid solar', desc: 'Grid-connected systems for homes and businesses that want to reduce monthly electricity cost.', points: ['Site inspection', 'System sizing', 'Grid connection support'] },
    { title: 'Hybrid solar', desc: 'Solar with battery backup for customers who need more control during outages or peak usage periods.', points: ['Battery sizing', 'Backup load planning', 'Smart inverter setup'] },
    { title: 'Maintenance', desc: 'Inspection, cleaning, performance checks and troubleshooting for existing solar systems.', points: ['Panel inspection', 'Inverter checks', 'Performance reporting'] }
  ];
  const benefits = [
    { title: 'Lower energy cost', desc: 'A correctly sized system can reduce long-term electricity spending.', icon: <TrendingDown className="w-5 h-5 text-brand-green" /> },
    { title: 'Safe installation', desc: 'Protection, grounding and cable routing are planned before installation begins.', icon: <ShieldCheck className="w-5 h-5 text-brand-dark" /> },
    { title: 'Clean energy', desc: 'Solar helps customers reduce dependence on conventional grid energy.', icon: <Sun className="w-5 h-5 text-brand-green" /> }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <PageHeader
        eyebrow="Solar PV systems"
        title="Solar solutions designed around the site"
        description="We inspect the roof, load requirement and grid condition before recommending an on-grid, hybrid or maintenance solution."
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full space-y-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] rounded-lg overflow-hidden border border-slate-200 bg-slate-50">
            <img src="/images/hero-solar.png" alt="Solar panel installation" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-slate-950 tracking-tight mb-5">A clear process from survey to handover</h2>
            <div className="space-y-4">
              {['Site visit and load review', 'System design and quotation', 'Installation and safety checks', 'Handover and maintenance support'].map((step, i) => (
                <div key={step} className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-green text-white text-xs font-bold">{i + 1}</span>
                  <p className="text-sm leading-relaxed text-slate-600">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {systems.map((system) => (
            <article key={system.title} className="border border-slate-200 rounded-lg p-6 bg-white">
              <h3 className="text-lg font-bold text-slate-950 mb-3">{system.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600 mb-5">{system.desc}</p>
              <ul className="space-y-2">
                {system.points.map((point) => (
                  <li key={point} className="flex gap-2 text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="bg-slate-50 border border-slate-200 rounded-lg p-6">
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-base font-bold text-slate-950 mb-2">{benefit.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{benefit.desc}</p>
            </div>
          ))}
        </div>

        <div className="rounded-lg border border-slate-200 bg-slate-50 p-8 text-center">
          <h3 className="text-xl font-extrabold text-slate-950 tracking-tight mb-3">Planning a solar installation?</h3>
          <p className="text-sm leading-relaxed text-slate-600 max-w-2xl mx-auto mb-6">Share your location and current electricity usage. We will recommend a practical system size and next steps.</p>
          <button onClick={() => navigate('/contact')} className="inline-flex items-center gap-2 rounded-md bg-brand-green px-6 py-3 text-sm font-bold text-white hover:bg-brand-dark transition-colors">
            Request site visit <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
