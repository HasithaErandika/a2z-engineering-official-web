import { Sun, Wind, Network } from 'lucide-react';

export function Services() {
  const services = [
    {
      title: "Electrical Power & Solar PV",
      description: "Complete design, implementation, and maintenance of solar PV and electrical systems.",
      icon: <Sun className="w-6 h-6 text-brand-green" />
    },
    {
      title: "HVAC & Air Conditioning",
      description: "Expert installation and maintenance of domestic and industrial air conditioning systems.",
      icon: <Wind className="w-6 h-6 text-brand-blue" />
    },
    {
      title: "Civil Construction",
      description: "Comprehensive networking solutions layered with specialized civil construction.",
      icon: <Network className="w-6 h-6 text-brand-lightblue" />
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 mb-4 justify-center">
             <span className="w-10 h-1 bg-brand-muted rounded-full"></span>
             <h2 className="text-xs font-bold text-brand-dark uppercase tracking-widest">What We Do</h2>
             <span className="w-10 h-1 bg-brand-muted rounded-full"></span>
          </div>
          <h3 className="text-2xl lg:text-3xl font-extrabold text-slate-900 mb-6 tracking-tight">Our Key Services</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm hover:shadow-md hover:border-brand-lightblue/30 transition-all group">
              <div className="w-12 h-12 rounded-md bg-slate-50 flex items-center justify-center mb-6 shadow-sm border border-slate-100 group-hover:-translate-y-1 transition-transform">
                {service.icon}
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-3 tracking-tight">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
