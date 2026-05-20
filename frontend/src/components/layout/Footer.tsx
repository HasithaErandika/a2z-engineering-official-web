import { ArrowUpRight, Mail, MapPin, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';
import { footerQuickLinks, footerServices, site } from '../../data/site';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.35fr_0.8fr_0.8fr_1fr]">
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-3 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
            >
              <img src="/a2zlogo.svg" alt="A2Z Engineering Logo" className="h-9 w-auto" width={36} height={36} />
              <div className="leading-none">
                <span className="block text-sm font-extrabold tracking-tight text-slate-950">
                  {site.name}
                </span>
                <span className="mt-1 block text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                  Pvt Ltd
                </span>
              </div>
            </Link>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-600">{site.tagline}</p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-dark hover:text-brand-blue transition-colors min-h-[44px]"
            >
              Request a consultation
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>

          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-[0.18em] text-slate-900">Company</h4>
            <ul className="mt-5 space-y-3">
              {footerQuickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm font-medium text-slate-600 hover:text-brand-dark transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-[0.18em] text-slate-900">Services</h4>
            <ul className="mt-5 space-y-3">
              {footerServices.map((service) => (
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
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" aria-hidden />
                <a
                  href={site.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm leading-relaxed text-slate-600 hover:text-brand-dark transition-colors"
                >
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <PhoneCall className="h-4 w-4 shrink-0 text-brand-green" aria-hidden />
                <a
                  href={site.phoneHref}
                  className="text-sm font-medium text-slate-600 hover:text-brand-dark transition-colors"
                >
                  {site.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-brand-green" aria-hidden />
                <a
                  href={`mailto:${site.email}`}
                  className="break-all text-sm font-medium text-slate-600 hover:text-brand-dark transition-colors"
                >
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>
            Copyright {year} {site.legalName}. All rights reserved.
          </p>
          <p className="font-medium text-slate-500">Clean energy. Practical engineering. Reliable support.</p>
        </div>
      </div>
    </footer>
  );
}
