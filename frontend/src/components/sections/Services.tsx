import { Sun, Wind, Network, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Services() {
  const services = [
    {
      title: 'Solar PV and Electrical',
      description: 'Site inspection, system design, installation, grid connection support and scheduled maintenance.',
      icon: <Sun className="w-6 h-6 text-emerald-600 transition-transform duration-500 group-hover:rotate-45" />,
      link: '/solar',
      colorClass: 'emerald',
      bgGlow: 'bg-emerald-500/5',
      iconBg: 'bg-emerald-50 border-emerald-100 text-emerald-600',
      hoverBorder: 'hover:border-emerald-250 hover:shadow-lg hover:shadow-emerald-100/20'
    },
    {
      title: 'HVAC and Air Conditioning',
      description: 'Installation, servicing and repair for residential, commercial and light industrial cooling systems.',
      icon: <Wind className="w-6 h-6 text-sky-600 transition-transform duration-500 group-hover:translate-x-0.5" />,
      link: '/services#hvac',
      colorClass: 'sky',
      bgGlow: 'bg-sky-500/5',
      iconBg: 'bg-sky-50 border-sky-100 text-sky-600',
      hoverBorder: 'hover:border-sky-250 hover:shadow-lg hover:shadow-sky-100/20'
    },
    {
      title: 'Civil and Technical Support',
      description: 'Mounting, brackets, minor construction, cabling support and infrastructure preparation for projects.',
      icon: <Network className="w-6 h-6 text-indigo-600 transition-transform duration-500 group-hover:scale-105" />,
      link: '/services#civil',
      colorClass: 'indigo',
      bgGlow: 'bg-indigo-500/5',
      iconBg: 'bg-indigo-50 border-indigo-100 text-indigo-600',
      hoverBorder: 'hover:border-indigo-250 hover:shadow-lg hover:shadow-indigo-100/20'
    }
  ];

  return (
    <section 
      id="services" 
      className="relative py-20 lg:py-28 bg-slate-50/50 border-y border-slate-100 overflow-hidden"
      style={{
        backgroundImage: 'radial-gradient(circle, #e2e8f0 1.2px, transparent 1.2px)',
        backgroundSize: '24px 24px'
      }}
    >
      {/* Background Soft Glows */}
      <div className="absolute top-1/3 left-[5%] w-80 h-80 bg-brand-green/5 blur-[100px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute bottom-1/3 right-[5%] w-96 h-96 bg-brand-blue/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-center md:text-left space-y-4">
          <span className="inline-flex items-center gap-1.5 text-[9px] font-black text-brand-green uppercase tracking-[0.25em] bg-brand-green/10 border border-brand-green/20 px-3.5 py-1.5 rounded-full">
            Our Expertise
          </span>
          
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Core Engineering Services
          </h2>
          
          <p className="text-sm md:text-base leading-relaxed text-slate-600 max-w-2xl">
            We keep the scope clear from the first site visit to handover, so customers understand what is being installed, why it is needed and how it will be maintained.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link 
              key={service.title} 
              to={service.link}
              className={`group flex flex-col justify-between bg-white/90 backdrop-blur-sm p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1.5 cursor-pointer select-none ${service.hoverBorder}`}
            >
              <div className="space-y-6">
                {/* Icon Container */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300 group-hover:scale-105 ${service.iconBg}`}>
                  {service.icon}
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-slate-950 tracking-tight transition-colors group-hover:text-brand-dark">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-xs">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Read More Link */}
              <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 group-hover:text-brand-dark uppercase tracking-widest pt-6 mt-6 border-t border-slate-100 transition-colors">
                <span>Explore Solutions</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

