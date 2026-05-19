export function About() {
  return (
    <section id="about" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] rounded-lg overflow-hidden border border-slate-200 bg-slate-50">
            <img src="/images/facility-preview.png" alt="A2Z Engineering project work" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-dark mb-4">About A2Z</p>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-950 tracking-tight mb-5">
              Engineering work handled with clear planning and accountable delivery.
            </h2>
            <p className="text-slate-600 leading-relaxed mb-5">
              A2Z Engineering is a Sri Lanka based service company supporting solar PV, electrical, HVAC and infrastructure work. We focus on practical design, careful installation and responsive maintenance.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 pt-2">
              <div className="border-l-2 border-brand-green pl-4">
                <p className="text-2xl font-extrabold text-brand-dark">15+</p>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Years experience</p>
              </div>
              <div className="border-l-2 border-slate-300 pl-4">
                <p className="text-2xl font-extrabold text-brand-dark">384</p>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Projects</p>
              </div>
              <div className="border-l-2 border-slate-300 pl-4">
                <p className="text-2xl font-extrabold text-brand-dark">24/7</p>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Support focus</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
