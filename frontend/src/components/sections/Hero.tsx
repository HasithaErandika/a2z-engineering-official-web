import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center overflow-hidden pt-20 bg-brand-dark">
      {/* Background Image with Static Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-solar.png" 
          alt="Solar Energy Infrastructure" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="lg:w-2/3">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs uppercase tracking-widest font-bold mb-8">
            <span className="w-2 h-2 rounded-full bg-brand-green" />
            Engineering Excellence in Solar & HVAC
          </div>
          
          <h1 className="text-5xl lg:text-8xl font-extrabold tracking-tighter text-white mb-8 leading-[1.05]">
            Design, <br className="hidden sm:block" />
            Installation <br className="hidden sm:block" />
            <span className="text-brand-lightblue">
              & Maintenance
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-brand-muted mb-10 max-w-2xl leading-relaxed font-medium">
            We provide engineering services that surpass our clients' expectations. With cutting-edge solutions in solar PV and HVAC, we harvest sunshine to power the world sustainably.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5">
            <Button variant="secondary" className="h-16 px-10 text-lg tracking-wider font-bold bg-brand-green hover:bg-brand-blue text-white transition-colors">
              Get Started
              <ArrowRight className="ml-3 w-5 h-5" />
            </Button>
            <Button variant="outline" className="h-16 px-10 text-lg tracking-wider font-bold border-white/30 text-white hover:bg-white/10 transition-colors">
              View Our Projects
            </Button>
          </div>
          
          {/* Grounded Stats Block */}
          <div className="mt-16 bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md max-w-fit">
            <div className="flex flex-wrap items-center gap-12">
              <div className="flex flex-col">
                <span className="text-3xl lg:text-4xl font-black text-white leading-none">3,752.58 kW</span>
                <span className="text-xs font-bold text-brand-green uppercase tracking-widest mt-3">Total Capacity</span>
              </div>
              <div className="hidden sm:block w-px h-12 bg-white/10" />
              <div className="flex flex-col">
                <span className="text-3xl lg:text-4xl font-black text-white leading-none">384</span>
                <span className="text-xs font-bold text-brand-green uppercase tracking-widest mt-3">Total Projects</span>
              </div>
              <div className="hidden sm:block w-px h-12 bg-white/10" />
              <div className="flex flex-col">
                <span className="text-xs font-bold text-brand-muted uppercase tracking-widest italic">
                  Data updated<br/>upto today
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
