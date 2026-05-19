import { PageHeader } from '../components/shared/PageHeader';

export function Portfolio() {
  const projects = [
    { title: 'Factory solar installation', location: 'Nuriya Road, Deraniyagala', capacity: '80 kW', impact: 'Commercial solar installation supporting daily factory energy demand.' },
    { title: 'Commercial building solar', location: 'Hospital Junction, Polonnaruwa', capacity: '100 kW', impact: 'Grid-connected solar system built to reduce long-term electricity cost.' },
    { title: 'Residential grid-tied project', location: 'Narahenpita Road, Nawala', capacity: '40 kW', impact: 'Rooftop solar installation designed for reliable grid-tied production.' }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <PageHeader
        eyebrow="Project work"
        title="Project Portfolio"
        description="A summary of completed residential, commercial and industrial energy projects handled by A2Z Engineering."
      />

      <section className="bg-slate-950 py-10 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-3 gap-8">
          <div><p className="text-3xl font-extrabold">3,752.58 kW</p><p className="text-xs uppercase tracking-widest text-slate-400 mt-2">Installed capacity</p></div>
          <div><p className="text-3xl font-extrabold">384</p><p className="text-xs uppercase tracking-widest text-slate-400 mt-2">Total projects</p></div>
          <div><p className="text-3xl font-extrabold">1.6 MW+</p><p className="text-xs uppercase tracking-widest text-slate-400 mt-2">Connected infrastructure</p></div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <h2 className="text-2xl font-extrabold text-slate-950 mb-8 tracking-tight">Selected projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((proj, i) => (
            <article key={proj.location} className="bg-white border border-slate-200 rounded-lg overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden bg-slate-50">
                <img src={i === 0 ? '/images/facility-preview.png' : i === 1 ? '/images/building-office.png' : '/images/solar-panel-product.png'} alt={proj.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <p className="text-xs font-bold text-brand-green uppercase tracking-widest mb-3">{proj.capacity}</p>
                <h3 className="text-lg font-bold text-slate-950 mb-2">{proj.location}</h3>
                <p className="text-sm font-medium text-brand-dark mb-3">{proj.title}</p>
                <p className="text-sm leading-relaxed text-slate-600">{proj.impact}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
