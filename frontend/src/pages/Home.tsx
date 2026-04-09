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
      
      {/* CTA / Newsletter */}
      <section className="bg-brand-dark py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiAvPgo8cGF0aCBkPSJNMCAwbDh2OG0wLThMODhNMCB2OG00LTRoOCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZWVlIiBzdHJva2Utd2lkdGg9IjEuNSIvPgo8L3N2Zz4=')]"></div>
        <div className="absolute right-0 bottom-0 w-64 h-64 bg-brand-blue blur-[100px] opacity-40 rounded-full"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">Join 1000+ Subscribers</h3>
          <p className="text-brand-muted mb-10 text-lg">Stay in the loop with everything you need to know about modern engineering solutions.</p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 bg-white/10 border border-white/20 text-white placeholder:text-brand-muted px-4 py-2.5 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-lightblue w-full"
            />
            <Button variant="secondary" className="h-[46px] px-8 bg-brand-blue hover:bg-white hover:text-brand-dark">
              Sign Up
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
