import { PageHeader } from '../components/shared/PageHeader';

export function AboutUs() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <PageHeader
        eyebrow="Corporate profile"
        title="About A2Z Engineering"
        description="We provide practical engineering services for solar PV, electrical systems, HVAC and supporting infrastructure, with a focus on clear communication and reliable project delivery."
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="aspect-[4/5] overflow-hidden border border-slate-200 rounded-lg bg-slate-50">
            <img src="/images/building-office.png" alt="A2Z Engineering office" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-2xl font-extrabold mb-5 text-slate-950 tracking-tight">Our approach</h2>
            <div className="space-y-5 text-slate-600 leading-relaxed">
              <p>A2Z Engineering works with homeowners, businesses and industrial customers who need dependable technical services, not confusing promises. Each project starts with the site condition, load requirement and customer budget.</p>
              <p>Our team supports design, installation, maintenance and repair work across solar PV, electrical, air conditioning and related infrastructure services.</p>
            </div>
            <div className="mt-8 grid sm:grid-cols-2 gap-5">
              <div className="rounded-lg border border-slate-200 p-5">
                <h3 className="text-sm font-bold text-slate-950 mb-2">Mission</h3>
                <p className="text-sm leading-relaxed text-slate-600">Deliver well-planned engineering services that are safe, practical and maintained after handover.</p>
              </div>
              <div className="rounded-lg border border-slate-200 p-5">
                <h3 className="text-sm font-bold text-slate-950 mb-2">Vision</h3>
                <p className="text-sm leading-relaxed text-slate-600">Become a trusted service partner for customers who value clean energy, quality workmanship and responsive support.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 border-y border-slate-200 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-slate-950 tracking-tight mb-8 text-center">Leadership</h2>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h3 className="text-base font-bold text-slate-950">Indika Wickramasinghe</h3>
              <p className="text-xs font-bold uppercase tracking-widest text-brand-dark mt-2">Director Operations</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h3 className="text-base font-bold text-slate-950">Dhammika Chandrasiri</h3>
              <p className="text-xs font-bold uppercase tracking-widest text-brand-dark mt-2">Director CFO</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
