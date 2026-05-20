import { PageHeader } from '../components/shared/PageHeader';

export function Portfolio() {
  const projects = [
    { title: '80kW Industrial Net-Accounting Array', location: 'Nuriya Road, Deraniyagala', capacity: '80 kW', impact: 'Optimizes daily operations by delivering 80 kW of clean, self-generated industrial power, reducing reliance on grid energy.' },
    { title: '100kW Commercial Rooftop PV', location: 'Hospital Junction, Polonnaruwa', capacity: '100 kW', impact: 'Engineered a high-capacity 100 kW grid-connected net-metered system to offset peak commercial demand cycles.' },
    { title: '40kW Premium Residential Grid-Tied', location: 'Narahenpita Road, Nawala', capacity: '40 kW', impact: 'Deploys a robust 40 kW rooftop solar array, maximizing long-term energy yield for high-load residential consumers.' }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <PageHeader
        eyebrow="Project work"
        title="Project Portfolio"
        description="A summary of completed residential, commercial and industrial energy projects handled by A2Z Engineering."
        bgImage="/images/facility-preview.png"
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
            <article key={proj.location} className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-slate-100/50 hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between">
              <div className="aspect-[4/3] overflow-hidden bg-slate-50">
                <img src={i === 0 ? '/images/facility-preview.png' : i === 1 ? '/images/building-office.png' : '/images/solar-panel-product.png'} alt={proj.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 lg:p-8 flex-grow flex flex-col justify-between">
                <div>
                  <p className="text-[10px] font-black text-brand-green uppercase tracking-widest mb-3 bg-brand-green/10 border border-brand-green/20 px-3 py-1 inline-block rounded-full">{proj.capacity}</p>
                  <h3 className="text-xl font-black text-slate-950 mb-2 tracking-tight">{proj.location}</h3>
                  <p className="text-sm font-bold text-slate-800 mb-4">{proj.title}</p>
                  <p className="text-xs leading-relaxed text-slate-600 mb-6">{proj.impact}</p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center gap-1 text-[10px] font-bold text-brand-blue uppercase tracking-widest group-hover:translate-x-0.5 transition-transform cursor-pointer">
                  <span>View Details</span>
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
