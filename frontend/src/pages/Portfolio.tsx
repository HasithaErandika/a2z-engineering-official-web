import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { PageHero } from '../components/patterns/PageHero';
import { StatGroup } from '../components/patterns/StatGroup';
import { SectionHeader } from '../components/patterns/SectionHeader';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { CTABand } from '../components/patterns/CTABand';
import { companyStats, images } from '../data/site';
import { portfolioProjects } from '../data/portfolio';
import { cn } from '../lib/cn';

export function Portfolio() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <PageHero
        eyebrow="Project work"
        title="Project portfolio"
        description="A summary of completed residential, commercial and industrial energy projects handled by A2Z Engineering."
        bgImage={images.facilityPreview}
      />

      <StatGroup
        variant="bar"
        stats={[
          { value: `${companyStats.installedCapacityKw} kW`, label: 'Installed capacity' },
          { value: companyStats.projectsCompleted, label: 'Total projects' },
          { value: companyStats.connectedInfrastructure, label: 'Connected infrastructure' },
        ]}
      />

      <section className="section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <SectionHeader title="Selected projects" />
        <div className="grid md:grid-cols-3 gap-6">
          {portfolioProjects.map((proj) => {
            const isExpanded = expandedId === proj.id;
            return (
              <article key={proj.id}>
                <Card interactive className="overflow-hidden flex flex-col h-full">
                  <div className="aspect-[4/3] overflow-hidden bg-slate-50">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="p-6 lg:p-8 flex-grow flex flex-col">
                    <Badge variant="accent" className="mb-3 w-fit">
                      {proj.capacity}
                    </Badge>
                    <h3 className="text-lg font-extrabold text-slate-950 mb-1 tracking-tight">
                      {proj.location}
                    </h3>
                    <p className="text-sm font-bold text-slate-800 mb-3">{proj.title}</p>
                    <p
                      className={cn(
                        'text-xs leading-relaxed text-slate-600',
                        !isExpanded && 'line-clamp-3'
                      )}
                    >
                      {proj.impact}
                    </p>
                    <button
                      type="button"
                      onClick={() => setExpandedId(isExpanded ? null : proj.id)}
                      aria-expanded={isExpanded}
                      className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-1 text-xs font-bold text-brand-blue uppercase tracking-wider hover:text-brand-dark transition-colors min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-sm"
                    >
                      <span>{isExpanded ? 'Show less' : 'View details'}</span>
                      <ArrowRight
                        className={cn('w-3.5 h-3.5 transition-transform', isExpanded && 'rotate-90')}
                        aria-hidden
                      />
                    </button>
                  </div>
                </Card>
              </article>
            );
          })}
        </div>
      </section>

      <CTABand
        title="Discuss your next project"
        description="Share site details and load profiles. Our engineering team will recommend sizing, hardware, and grid connection strategy."
        primaryLabel="Request consultation"
        primaryTo="/contact?inquiry=portfolio-reference"
        secondaryLabel="Solar solutions"
        secondaryTo="/solar"
      />
    </div>
  );
}
