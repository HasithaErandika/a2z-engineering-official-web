import { PageHero } from '../components/patterns/PageHero';
import { ContactForm } from '../components/forms/ContactForm';
import { ContactInfoPanel } from '../components/forms/ContactInfoPanel';
import { images } from '../data/site';

export function ContactPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <PageHero
        eyebrow="Contact"
        title="Talk to our engineering team"
        description="Solar site visits, EPC feasibility, product specifications, project consultations, and media requests — routed to the right specialists."
        bgImage={images.buildingOffice}
      />

      <section className="section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow">
        <div className="grid lg:grid-cols-12 gap-10 xl:gap-14 items-start">
          <aside className="lg:col-span-5 xl:col-span-4 lg:sticky lg:top-28">
            <ContactInfoPanel />
          </aside>

          <div className="lg:col-span-7 xl:col-span-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
