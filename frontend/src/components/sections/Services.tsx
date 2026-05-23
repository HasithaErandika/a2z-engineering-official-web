import { Sun, Wind, Wrench, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { homeServices } from '../../data/services';
import { SectionHeader } from '../patterns/SectionHeader';
import { Card } from '../ui/Card';
import { cn } from '../../lib/cn';

const icons = [Sun, Wind, Wrench];
const iconStyles = [
  'bg-brand-green/10 border-brand-green/20 text-brand-green',
  'bg-brand-blue/10 border-brand-blue/20 text-brand-blue',
  'bg-brand-dark/10 border-brand-dark/20 text-brand-dark',
];

export function Services() {
  return (
    <section
      id="services"
      className="section bg-gradient-to-b from-[#eef4fb] via-white to-[#f4f8ef] border-y border-brand-blue/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our expertise"
          title="Core engineering services"
          description="We keep the scope clear from the first site visit to handover, so customers understand what is being installed, why it is needed, and how it will be maintained."
        />

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {homeServices.map((service, i) => {
            const Icon = icons[i];
            return (
              <Link key={service.title} to={service.href} className="group block scroll-target">
                <Card
                  interactive
                  className={cn(
                    'h-full p-8 flex flex-col justify-between service-card perfect-shadow border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1',
                    service.borderHover
                  )}
                >
                  <div className="space-y-6 relative z-10">
                    <div
                      className={cn(
                        'w-12 h-12 rounded-[var(--radius-md)] flex items-center justify-center border',
                        iconStyles[i]
                      )}
                    >
                      <Icon className="w-6 h-6" aria-hidden />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-lg font-extrabold text-slate-950 tracking-tight group-hover:text-brand-green transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed text-sm">{service.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 group-hover:text-brand-green uppercase tracking-widest pt-6 mt-6 border-t border-slate-100 relative z-10">
                    <span>Explore solutions</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" aria-hidden />
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
