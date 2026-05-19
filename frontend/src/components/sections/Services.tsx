import { Sun, Wind, Network } from 'lucide-react';

export function Services() {
  const services = [
    {
      title: 'Solar PV and Electrical',
      description: 'Site inspection, system design, installation, grid connection support and scheduled maintenance.',
      icon: <Sun className="w-5 h-5 text-brand-green" />
    },
    {
      title: 'HVAC and Air Conditioning',
      description: 'Installation, servicing and repair for residential, commercial and light industrial cooling systems.',
      icon: <Wind className="w-5 h-5 text-brand-dark" />
    },
    {
      title: 'Civil and Technical Support',
      description: 'Mounting, brackets, minor construction, cabling support and infrastructure preparation for projects.',
      icon: <Network className="w-5 h-5 text-brand-dark" />
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-dark mb-4">Services</p>
          <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-950 tracking-tight mb-4">Core engineering services</h2>
          <p className="text-sm leading-relaxed text-slate-600">We keep the scope clear from the first site visit to handover, so customers understand what is being installed, why it is needed and how it will be maintained.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {services.map((service) => (
            <div key={service.title} className="bg-white p-6 rounded-lg border border-slate-200">
              <div className="w-10 h-10 rounded-md bg-slate-50 flex items-center justify-center mb-5 border border-slate-200">
                {service.icon}
              </div>
              <h3 className="text-base font-bold text-slate-950 mb-3 tracking-tight">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
