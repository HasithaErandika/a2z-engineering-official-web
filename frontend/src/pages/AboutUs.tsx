import { ArrowRight, ShieldCheck, CheckCircle2, User } from 'lucide-react';
import { PageHero } from '../components/patterns/PageHero';
import { CTABand } from '../components/patterns/CTABand';
import { Card } from '../components/ui/Card';
import { ButtonLink } from '../components/ui/ButtonLink';
import { SectionHeader } from '../components/patterns/SectionHeader';
import { companyStats, images } from '../data/site';

export function AboutUs() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <PageHero
        eyebrow="A2Z Engineering Pvt Ltd"
        title="Accountable delivery and clear planning"
        description="We engineer certified solar PV grids, heavy electrical distribution lines, and industrial HVAC systems with structural compliance."
        bgImage={images.buildingOffice}
      />

      <section className="section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <Card className="overflow-hidden">
              <img
                src={images.facilityPreview}
                alt="A2Z Engineering operations"
                className="w-full aspect-[4/3] object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="p-6 border-t border-slate-100 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-2xl font-extrabold text-brand-dark">{companyStats.installedCapacityKw}</p>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">kW installed</p>
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-brand-green">{companyStats.projectsCompleted}</p>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Projects</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <SectionHeader
              eyebrow="About A2Z Engineering"
              title="Become a partner in sustainable industrial engineering"
              description="A2Z Engineering supports commercial, residential, and industrial deployments with operational transparency, practical engineering models, and responsive lifecycle management."
              className="mb-0"
            />

            <p className="text-sm text-slate-600 leading-relaxed">
              Every deployment—from high-yield solar arrays to heavy-load ventilation networks—is designed
              with verified load evaluations and wind-compliance structures.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <Card className="p-5 flex gap-4">
                <ShieldCheck className="w-5 h-5 text-brand-green shrink-0" aria-hidden />
                <div>
                  <h4 className="text-xs font-extrabold text-brand-dark uppercase tracking-wider">
                    Turnkey mission
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed mt-1">
                    Robust mechanical designs and complete grid integration clearances.
                  </p>
                </div>
              </Card>
              <Card className="p-5 flex gap-4">
                <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0" aria-hidden />
                <div>
                  <h4 className="text-xs font-extrabold text-brand-dark uppercase tracking-wider">
                    Corporate vision
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed mt-1">
                    Lifelong compliance partner for green commercial transitions.
                  </p>
                </div>
              </Card>
            </div>

            <ButtonLink to="/services" variant="primary" size="lg" className="gap-2">
              Explore services <ArrowRight className="w-4 h-4" aria-hidden />
            </ButtonLink>
          </div>
        </div>
      </section>

      <CTABand
        title="Engineering with integrity"
        description="We handle engineering scope, structural checks, Tier-1 hardware sourcing, and state electricity board approvals."
        primaryLabel="Inquire EPC operations"
        primaryTo="/contact?inquiry=project-consultation"
      />

      <section className="section bg-slate-50 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Executive board"
            title="Corporate leadership"
            align="center"
            className="mb-10"
          />
          <div className="grid md:grid-cols-2 gap-5">
            <Card interactive className="p-6 flex items-center gap-5">
              <div className="w-10 h-10 bg-slate-50 rounded-[var(--radius-md)] flex items-center justify-center border border-slate-100 shrink-0">
                <User className="w-5 h-5 text-brand-green" aria-hidden />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Indika Wickramasinghe</h4>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-dark block mt-1">
                  Director operations
                </span>
              </div>
            </Card>
            <Card interactive className="p-6 flex items-center gap-5">
              <div className="w-10 h-10 bg-slate-50 rounded-[var(--radius-md)] flex items-center justify-center border border-slate-100 shrink-0">
                <User className="w-5 h-5 text-brand-blue" aria-hidden />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Dhammika Chandrasiri</h4>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-dark block mt-1">
                  Director CFO
                </span>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
