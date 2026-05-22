import { ArrowUpRight, Mail, MapPin, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';
import { footerQuickLinks, footerServices, site } from '../../data/site';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 pt-20 pb-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid gap-12 lg:grid-cols-12 pb-16">
          
          {/* Logo & Tagline Column */}
          <div className="lg:col-span-5 space-y-6">
            <Link
              to="/"
              className="inline-flex items-center gap-3 outline-none focus-visible:ring-2 focus-visible:ring-brand-green rounded-md"
              aria-label="A2Z Engineering Home"
            >
              <img 
                src="/a2zlogo.svg" 
                alt="A2Z Engineering Logo" 
                className="h-8 w-auto opacity-90 saturate-0 brightness-200" 
                width={32} 
                height={32} 
              />
              <div className="leading-none">
                <span className="block text-sm font-extrabold tracking-tight text-white">
                  {site.name}
                </span>
                <span className="mt-0.5 block text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                  Pvt Ltd
                </span>
              </div>
            </Link>
            
            <p className="max-w-sm text-sm leading-relaxed text-slate-400 text-balance">
              {site.tagline} Deploys certified Solar PV networks, reliable commercial electrical grids, and automated energy optimization systems.
            </p>
            
            <div>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-brand-green transition-colors"
              >
                <span>Request technical survey</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
              </Link>
            </div>
          </div>

          {/* Links Container */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            
            {/* Quick Links Column */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-100 mb-6">
                Company
              </h4>
              <ul className="space-y-4">
                {footerQuickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Column */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-100 mb-6">
                Services
              </h4>
              <ul className="space-y-4">
                {footerServices.map((service) => (
                  <li key={service} className="text-sm font-medium text-slate-400 hover:text-white cursor-default transition-colors">
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-100 mb-6">
                Contact
              </h4>
              <ul className="space-y-4 text-sm font-medium">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" aria-hidden />
                  <a
                    href={site.address.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="leading-relaxed text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    {site.address.line1}
                    <br />
                    {site.address.line2}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <PhoneCall className="h-4 w-4 shrink-0 text-slate-500" aria-hidden />
                  <a
                    href={site.phoneHref}
                    className="text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    {site.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 shrink-0 text-slate-500" aria-hidden />
                  <a
                    href={`mailto:${site.email}`}
                    className="text-slate-400 hover:text-white transition-colors duration-200 break-all"
                  >
                    {site.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom (Disclaimer & Copyright) */}
        <div className="border-t border-slate-800/60 pt-8 flex flex-col gap-6">
          
          {/* Legal Disclaimer */}
          <p className="text-[11px] leading-relaxed text-slate-500 max-w-4xl text-pretty">
            All product names, logos, and brands are property of their respective owners. All company, product, and service names used in this website are for identification purposes only. Use of these names, logos, and brands does not imply endorsement.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-xs text-slate-500">
            <p>
              © {year} {site.legalName}. All rights reserved.
            </p>
            <p className="font-semibold text-slate-600 uppercase tracking-widest text-[10px]">
              Clean energy • Practical engineering
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}