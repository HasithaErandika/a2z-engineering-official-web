import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

export function Hero() {
  return (
    <section id="hero" className="bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <div className="grid lg:grid-cols-[1fr_340px] gap-12 items-center">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-dark mb-5">Solar PV, HVAC and electrical engineering</p>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-950 leading-[1.1] mb-6">
              Practical engineering services for homes and businesses.
            </h1>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl">
              A2Z Engineering designs, installs and maintains reliable solar, electrical and air conditioning systems with clear project planning and dependable after-service support.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="secondary" className="h-11 px-6 bg-brand-green hover:bg-brand-dark text-white font-bold">
                Request a Quote
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline" className="h-11 px-6 border-slate-300 text-slate-800 hover:bg-slate-50 font-bold">
                View Projects
              </Button>
            </div>
          </div>

          <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
            <div className="flex items-center gap-3 border-b border-slate-200 pb-5 mb-5">
              <img src="/a2zlogo.svg" alt="" className="w-10 h-auto" />
              <div>
                <p className="text-sm font-bold text-slate-950">A2Z Engineering</p>
                <p className="text-xs text-slate-500">Pvt Ltd</p>
              </div>
            </div>
            <dl className="grid gap-4">
              <div>
                <dt className="text-xs font-bold uppercase tracking-widest text-slate-500">Installed capacity</dt>
                <dd className="mt-1 text-2xl font-extrabold text-brand-dark">3,752.58 kW</dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-widest text-slate-500">Completed projects</dt>
                <dd className="mt-1 text-2xl font-extrabold text-brand-dark">384</dd>
              </div>
            </dl>
            <p className="mt-5 text-sm leading-relaxed text-slate-600">
              Residential, commercial and grid-tied work delivered with structured installation and maintenance support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
