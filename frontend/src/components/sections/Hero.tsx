import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

export function Hero() {
  return (
    <section id="hero" className="relative flex min-h-[72vh] items-center overflow-hidden bg-white pt-10">
      <div className="absolute inset-x-0 top-0 h-px bg-slate-100" />
      <div className="absolute right-0 top-0 h-full w-1/3 bg-slate-50/70" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-[1fr_360px] gap-12 items-center">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-[10px] uppercase tracking-[0.2em] font-bold text-brand-dark mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-green" />
              Engineering Excellence in Solar & HVAC
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 mb-6 leading-[1.08]">
              Professional engineering for solar, HVAC, and infrastructure.
            </h1>
            
            <p className="text-base md:text-lg text-slate-600 mb-8 max-w-2xl leading-relaxed">
              We provide engineering services that surpass our clients' expectations. With cutting-edge solutions in solar PV and HVAC, we harvest sunshine to power the world sustainably.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="secondary" className="h-11 px-6 text-sm tracking-wide font-bold bg-brand-green hover:bg-brand-blue text-white transition-colors">
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline" className="h-11 px-6 text-sm tracking-wide font-bold border-slate-300 text-brand-dark hover:bg-slate-50 transition-colors">
                View Our Projects
              </Button>
            </div>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center gap-3">
              <img src="/a2zlogo.svg" alt="" className="w-10 h-auto" />
              <div>
                <p className="text-sm font-bold text-slate-950">A2Z Engineering</p>
                <p className="text-xs text-slate-500">Clean energy and technical services</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-md bg-slate-50 p-4">
                <span className="block text-2xl font-extrabold text-brand-dark leading-none">3,752.58</span>
                <span className="mt-2 block text-[10px] font-bold text-slate-500 uppercase tracking-widest">kW Capacity</span>
              </div>
              <div className="rounded-md bg-slate-50 p-4">
                <span className="block text-2xl font-extrabold text-brand-dark leading-none">384</span>
                <span className="mt-2 block text-[10px] font-bold text-slate-500 uppercase tracking-widest">Projects</span>
              </div>
            </div>
            <p className="mt-5 border-t border-slate-100 pt-4 text-xs leading-relaxed text-slate-500">
              Updated project data for grid-tied, residential, and commercial engineering work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
