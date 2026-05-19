import { CheckCircle2 } from 'lucide-react';
import { PageHeader } from '../components/shared/PageHeader';

export function ServicesPage() {
  const serviceCategories = [
    {
      title: 'Solar and electrical installation',
      desc: 'Design, installation, grid connection support and maintenance for residential and commercial electrical systems.',
      points: ['Load assessment', 'Electrical wiring and protection', 'Solar PV installation', 'Maintenance and troubleshooting']
    },
    {
      title: 'Air conditioning services',
      desc: 'Installation, service and repair work for domestic and commercial air conditioning systems.',
      points: ['New AC installation', 'Routine maintenance', 'Fault diagnosis', 'Energy efficiency checks']
    },
    {
      title: 'Telecommunication support',
      desc: 'Technical support for communication infrastructure, mounting requirements and site preparation.',
      points: ['Network support work', 'Cable routing', 'Equipment mounting', 'Site readiness support']
    },
    {
      title: 'Civil and construction support',
      desc: 'Practical civil works, brackets, plumbing support and small construction tasks required around technical projects.',
      points: ['Bracket fabrication', 'Minor civil works', 'Plumbing support', 'Mounting structures']
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <PageHeader
        eyebrow="Services"
        title="Engineering services with clear scope"
        description="We keep each project practical: understand the site, define the requirement, install carefully and support the system after handover."
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid md:grid-cols-2 gap-6">
          {serviceCategories.map((category) => (
            <article key={category.title} className="border border-slate-200 rounded-lg p-6 bg-white">
              <h2 className="text-xl font-extrabold text-slate-950 tracking-tight mb-3">{category.title}</h2>
              <p className="text-sm leading-relaxed text-slate-600 mb-6">{category.desc}</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {category.points.map((point) => (
                  <div key={point} className="flex gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 border-y border-slate-200 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-slate-950 tracking-tight mb-8 text-center">How we work</h2>
          <div className="grid md:grid-cols-4 gap-5">
            {['Inspect', 'Plan', 'Install', 'Support'].map((step, i) => (
              <div key={step} className="bg-white border border-slate-200 rounded-lg p-5 text-center">
                <p className="mx-auto mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-slate-950 text-white text-sm font-bold">{i + 1}</p>
                <h3 className="text-sm font-bold text-slate-950">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
