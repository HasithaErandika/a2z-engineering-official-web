import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Services } from '../components/sections/Services';
import { Testimonials } from '../components/sections/Testimonials';
import { CTABand } from '../components/patterns/CTABand';

export function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <CTABand
        title="Need a site visit or project estimate?"
        description="Send your requirement and our team will guide you through the practical next steps for solar, electrical, or HVAC work."
        primaryLabel="Contact A2Z Engineering"
        primaryTo="/contact?inquiry=solar-site-visit"
        secondaryLabel="View portfolio"
        secondaryTo="/portfolio"
      />
    </div>
  );
}
