import { ArrowUpRight, Mail, MapPin, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  const year = new Date().getFullYear();
  const quickLinks = [
    { label: 'About', href: '/about' },
    { label: 'Solar Solutions', href: '/solar' },
    { label: 'Products', href: '/products' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'News', href: '/news' },
  ];

  const services = ['Solar PV systems', 'Electrical installation', 'HVAC maintenance', 'Civil installation'];

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.35fr_0.8fr_0.8fr_1fr]">
          <div>
            <Link to="/" className="inline-flex items-center gap-3">
              <img src="/a2zlogo.svg" alt="A2Z Engineering Logo" className="h-9 w-auto" />
              <div className="leading-none">
                <span className="block text-sm font-extrabold tracking-tight text-slate-950">A2Z Engineering</span>
                <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">Pvt Ltd</span>
              </div>
            </Link>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-600">
              Engineering services for solar PV, electrical systems, HVAC, and supporting infrastructure across residential and commercial projects.
            </p>
            <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-dark hover:text-brand-blue transition-colors">
              Request a consultation
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-[0.18em] text-slate-900">Company</h4>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm font-medium text-slate-600 hover:text-brand-dark transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-[0.18em] text-slate-900">Services</h4>
            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service} className="text-sm font-medium text-slate-600">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-[0.18em] text-slate-900">Contact</h4>
            <ul className="mt-5 space-y-4">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                <a href="https://www.google.com/maps/place/A2Z+Engineering+(Pvt)+Ltd/@6.8584842,80.0869738,1139m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3ae3ad561c57f781:0xcd4de2842c93df62!8m2!3d6.8584842!4d80.0918447!16s%2Fg%2F11vr956rqf?entry=ttu&g_ep=EgoyMDI2MDQwNi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-sm leading-relaxed text-slate-600 hover:text-brand-dark transition-colors">
                  158/C/1, Ingiriya Rd,<br />Meepe Junction, Padukka
                </a>
              </li>
              <li className="flex items-center gap-3">
                <PhoneCall className="h-4 w-4 shrink-0 text-brand-green" />
                <a href="tel:+94112995998" className="text-sm font-medium text-slate-600 hover:text-brand-dark transition-colors">
                  +94 112 995 998
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-brand-green" />
                <a href="mailto:info@a2zengineering.lk" className="break-all text-sm font-medium text-slate-600 hover:text-brand-dark transition-colors">
                  info@a2zengineering.lk
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>Copyright {year} A2Z Engineering (Pvt) Ltd. All rights reserved.</p>
          <p className="font-medium text-slate-500">Clean energy. Practical engineering. Reliable support.</p>
        </div>
      </div>
    </footer>
  );
}
