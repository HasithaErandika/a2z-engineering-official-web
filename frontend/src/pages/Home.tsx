import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Services } from '../components/sections/Services';
import { Testimonials } from '../components/sections/Testimonials';
import { Button } from '../components/ui/Button';

export function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <section className="bg-slate-950 py-16 border-t border-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4 tracking-tight">Need a site visit or project estimate?</h2>
          <p className="text-slate-300 mb-8 text-base leading-relaxed">Send your requirement and our team will guide you through the practical next steps for solar, electrical or HVAC work.</p>
          <Button variant="secondary" className="h-11 px-7 bg-brand-green hover:bg-white hover:text-slate-950 text-white font-bold">
            Contact A2Z Engineering
          </Button>
        </div>
      </section>
    </div>
  );
}
