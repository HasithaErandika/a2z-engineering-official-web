import { companyStats, images } from '../../data/site';
import { SectionHeader } from '../patterns/SectionHeader';
import { StatGroup } from '../patterns/StatGroup';

export function About() {
  return (
    <section id="about" className="section bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] rounded-[var(--radius-lg)] overflow-hidden border border-slate-200 bg-slate-50">
            <img
              src={images.facilityPreview}
              alt="A2Z Engineering project work"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div>
            <SectionHeader
              eyebrow="About A2Z"
              title="Engineering work handled with clear planning and accountable delivery."
              description="A2Z Engineering is a Sri Lanka based service company supporting solar PV, electrical, HVAC and infrastructure work. We focus on practical design, careful installation and responsive maintenance."
              className="mb-8"
            />
            <StatGroup
              stats={[
                { value: companyStats.yearsExperience, label: 'Years experience' },
                { value: companyStats.projectsCompleted, label: 'Projects' },
                { value: '24/7', label: 'Support focus' },
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
