import { Clock, Mail, MapPin, Navigation, PhoneCall, ExternalLink } from 'lucide-react';
import { site } from '../../data/site';
import { cn } from '../../lib/cn';

export function ContactInfoPanel() {
  return (
    <div className="space-y-6">
      {/* Location — primary panel */}
      <div className="rounded-[var(--radius-lg)] border border-slate-200 bg-white overflow-hidden shadow-[var(--shadow-card)]">
        <div className="bg-slate-950 px-6 py-5 text-white">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-green mb-2">
            Head office
          </p>
          <h2 className="text-lg font-extrabold tracking-tight">Visit or find us</h2>
          <p className="text-sm text-slate-300 mt-2 leading-relaxed">
            Padukka, Western Province — serving projects across Sri Lanka.
          </p>
        </div>

        <div className="p-6 space-y-5">
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-[var(--radius-md)] bg-brand-green/10 border border-brand-green/20 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-brand-green" aria-hidden />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-950 leading-snug">
                {site.address.line1}
                <br />
                {site.address.line2}
              </p>
              <p className="text-xs text-slate-500 mt-1">Sri Lanka</p>
            </div>
          </div>

          <a
            href={site.address.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'flex items-center justify-center gap-2 w-full min-h-[44px] rounded-[var(--radius-md)]',
              'border border-slate-200 bg-slate-50 text-sm font-bold text-slate-800',
              'hover:bg-white hover:border-brand-green/40 hover:text-brand-dark transition-colors',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2'
            )}
          >
            <Navigation className="w-4 h-4 text-brand-green" aria-hidden />
            Open in Google Maps
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" aria-hidden />
          </a>
        </div>
      </div>

      {/* Direct contact actions */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
        <a
          href={site.phoneHref}
          className={cn(
            'group flex items-center gap-4 p-5 rounded-[var(--radius-lg)] border border-slate-200 bg-white',
            'hover:border-brand-green/30 hover:shadow-[var(--shadow-card-hover)] transition-all duration-200',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue'
          )}
        >
          <div className="w-11 h-11 rounded-full bg-brand-green/10 flex items-center justify-center shrink-0 group-hover:bg-brand-green/15 transition-colors">
            <PhoneCall className="w-5 h-5 text-brand-green" aria-hidden />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Call us</p>
            <p className="text-base font-extrabold text-slate-950 tracking-tight">{site.phone}</p>
          </div>
        </a>

        <a
          href={`mailto:${site.email}`}
          className={cn(
            'group flex items-center gap-4 p-5 rounded-[var(--radius-lg)] border border-slate-200 bg-white',
            'hover:border-brand-blue/30 hover:shadow-[var(--shadow-card-hover)] transition-all duration-200',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue'
          )}
        >
          <div className="w-11 h-11 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0 group-hover:bg-brand-blue/15 transition-colors">
            <Mail className="w-5 h-5 text-brand-blue" aria-hidden />
          </div>
          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Email</p>
            <p className="text-sm font-extrabold text-slate-950 break-all">{site.email}</p>
          </div>
        </a>
      </div>

      {/* Hours */}
      <div className="rounded-[var(--radius-lg)] border border-slate-200 bg-slate-50/80 p-6">
        <div className="flex items-center gap-2 mb-4">
          <Clock className="w-4 h-4 text-brand-dark" aria-hidden />
          <h3 className="text-sm font-extrabold text-slate-950 uppercase tracking-wider">
            Office hours
          </h3>
        </div>
        <dl className="space-y-3 text-sm">
          {[
            { day: 'Monday – Friday', time: site.hours.weekday, active: true },
            { day: 'Saturday', time: site.hours.saturday, active: true },
            { day: 'Sunday', time: site.hours.sunday, active: false },
          ].map((row) => (
            <div
              key={row.day}
              className="flex justify-between gap-4 py-2 border-b border-slate-200/80 last:border-0"
            >
              <dt className="text-slate-600 font-medium">{row.day}</dt>
              <dd
                className={cn(
                  'font-bold tabular-nums',
                  row.active ? 'text-slate-900' : 'text-slate-400'
                )}
              >
                {row.time}
              </dd>
            </div>
          ))}
        </dl>
        <p className="text-xs text-slate-500 mt-4 leading-relaxed">
          Urgent field support for existing clients — call during business hours.
        </p>
      </div>

      <div className="rounded-[var(--radius-lg)] bg-brand-dark/5 border border-brand-dark/10 p-5">
        <p className="text-xs font-bold text-brand-dark uppercase tracking-wider mb-2">
          Prefer to talk first?
        </p>
        <p className="text-sm text-slate-600 leading-relaxed mb-4">
          Speak with our desk before submitting a form — we can route you to solar, HVAC, or
          procurement specialists immediately.
        </p>
        <a
          href={site.phoneHref}
          className={cn(
            'inline-flex w-full items-center justify-center rounded-[var(--radius-md)] h-10 px-4 text-sm font-bold',
            'bg-brand-dark text-white hover:bg-brand-dark/90 transition-colors',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2'
          )}
        >
          Call {site.phone}
        </a>
      </div>
    </div>
  );
}
