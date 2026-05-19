import { Clock, Mail, MapPin, PhoneCall } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { PageHeader } from '../components/shared/PageHeader';

export function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <PageHeader
        eyebrow="Contact"
        title="Talk to our engineering team"
        description="Send your requirement, request a site visit or contact us directly for solar, electrical, HVAC and related engineering services."
        bgImage="/images/building-office.png"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full flex-grow">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
          <div className="space-y-5">
            <div className="border border-slate-200 rounded-lg p-6 bg-white">
              <MapPin className="w-5 h-5 text-brand-green mb-4" />
              <h2 className="text-base font-bold text-slate-950 mb-2">Office location</h2>
              <a href="https://www.google.com/maps/place/A2Z+Engineering+(Pvt)+Ltd/@6.8584842,80.0869738,1139m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3ae3ad561c57f781:0xcd4de2842c93df62!8m2!3d6.8584842!4d80.0918447!16s%2Fg%2F11vr956rqf?entry=ttu&g_ep=EgoyMDI2MDQwNi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-sm leading-relaxed text-slate-600 hover:text-brand-dark transition-colors">
                158/C/1, Ingiriya Rd,<br />Meepe Junction, Padukka
              </a>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-5">
              <div className="border border-slate-200 rounded-lg p-6 bg-white">
                <PhoneCall className="w-5 h-5 text-brand-green mb-4" />
                <h2 className="text-base font-bold text-slate-950 mb-2">Phone</h2>
                <a href="tel:+94112995998" className="text-sm font-bold text-slate-700 hover:text-brand-dark transition-colors">+94 112 995 998</a>
              </div>
              <div className="border border-slate-200 rounded-lg p-6 bg-white">
                <Mail className="w-5 h-5 text-brand-dark mb-4" />
                <h2 className="text-base font-bold text-slate-950 mb-2">Email</h2>
                <a href="mailto:info@a2zengineering.lk" className="text-sm font-bold text-slate-700 break-all hover:text-brand-dark transition-colors">info@a2zengineering.lk</a>
              </div>
            </div>

            <div className="border border-slate-200 rounded-lg p-6 bg-slate-50">
              <Clock className="w-5 h-5 text-brand-dark mb-4" />
              <h2 className="text-base font-bold text-slate-950 mb-4">Operating hours</h2>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between gap-4"><span className="text-slate-500">Monday to Friday</span><span className="font-bold text-slate-800">08:00 AM - 05:00 PM</span></div>
                <div className="flex justify-between gap-4"><span className="text-slate-500">Saturday</span><span className="font-bold text-slate-800">09:00 AM - 03:00 PM</span></div>
                <div className="flex justify-between gap-4"><span className="text-slate-500">Sunday</span><span className="font-bold text-slate-400">Closed</span></div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-6 lg:p-8 rounded-lg">
            <h2 className="text-2xl font-extrabold text-slate-950 mb-3 tracking-tight">Send an inquiry</h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-8">Tell us about your project, location and preferred contact method.</p>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-2">First name</label>
                  <input type="text" className="w-full bg-white border border-slate-200 rounded-md px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-dark/20" required />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-2">Last name</label>
                  <input type="text" className="w-full bg-white border border-slate-200 rounded-md px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-dark/20" required />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-2">Email address</label>
                <input type="email" className="w-full bg-white border border-slate-200 rounded-md px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-dark/20" required />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-2">Message</label>
                <textarea rows={6} className="w-full bg-white border border-slate-200 rounded-md px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-dark/20 resize-none"></textarea>
              </div>
              <Button variant="primary" className="w-full h-11 bg-brand-green hover:bg-brand-dark text-white font-bold rounded-md">
                Send Inquiry
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
