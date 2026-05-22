import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CheckCircle, Send, AlertCircle } from 'lucide-react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Textarea } from '../ui/Textarea';
import { Select } from '../ui/Select';
import {
  inquiryTypes,
  inquiryTypeMap,
  preferredContactMethods,
  projectSectors,
  type PreferredContactMethod,
} from '../../data/inquiryTypes';
import { site } from '../../data/site';
import { submitInquiry, mailtoInquiryFallback, type ContactFormPayload } from '../../lib/submitInquiry';
import { cn } from '../../lib/cn';

const DEFAULT_INQUIRY = 'solar-site-visit';

function isValidInquiryId(id: string | null): id is string {
  return !!id && id in inquiryTypeMap;
}

export function ContactForm() {
  const [searchParams, setSearchParams] = useSearchParams();
  const paramInquiry = searchParams.get('inquiry');

  const [inquiryId, setInquiryId] = useState<string>(() =>
    isValidInquiryId(paramInquiry) ? paramInquiry : DEFAULT_INQUIRY
  );
  const [contactMethod, setContactMethod] = useState<PreferredContactMethod>('email');
  const [contactMethodOther, setContactMethodOther] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const activeType = inquiryTypeMap[inquiryId] ?? inquiryTypeMap[DEFAULT_INQUIRY];

  useEffect(() => {
    if (isValidInquiryId(paramInquiry) && paramInquiry !== inquiryId) {
      setInquiryId(paramInquiry);
    }
  }, [paramInquiry, inquiryId]);

  const selectInquiry = (id: string) => {
    setInquiryId(id);
    setSearchParams({ inquiry: id }, { replace: true });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (contactMethod === 'other' && !contactMethodOther.trim()) {
      setError('Please specify how you would like us to contact you.');
      return;
    }

    const form = e.currentTarget;
    const fd = new FormData(form);

    const payload: ContactFormPayload = {
      inquiryId,
      firstName: String(fd.get('firstName') ?? '').trim(),
      lastName: String(fd.get('lastName') ?? '').trim(),
      email: String(fd.get('email') ?? '').trim(),
      phone: String(fd.get('phone') ?? '').trim(),
      organization: String(fd.get('organization') ?? '').trim() || undefined,
      sector: String(fd.get('sector') ?? '').trim() || undefined,
      location: String(fd.get('location') ?? '').trim(),
      message: String(fd.get('message') ?? '').trim(),
      contactMethod,
      contactMethodOther: contactMethod === 'other' ? contactMethodOther.trim() : undefined,
    };

    setIsSubmitting(true);

    try {
      await submitInquiry(payload);
      setIsSuccess(true);
      form.reset();
      setContactMethod('email');
      setContactMethodOther('');
      setTimeout(() => setIsSuccess(false), 8000);
    } catch {
      try {
        mailtoInquiryFallback(payload);
        setError(
          'Automatic send could not complete. Your email app should open — send the message to reach our team.'
        );
      } catch {
        setError(
          `Could not send automatically. Please email ${site.inquiryRecipients.join(' and ')} directly.`
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const sectorOptions = useMemo(
    () =>
      projectSectors.map((s) => (
        <option key={s.value || 'empty'} value={s.value}>
          {s.label}
        </option>
      )),
    []
  );

  return (
    <div className="rounded-[var(--radius-lg)] border border-slate-200 bg-white shadow-[var(--shadow-card)] overflow-hidden relative">
      {isSuccess && (
        <div
          className="absolute inset-0 bg-white flex flex-col items-center justify-center p-8 text-center z-20 animate-fade-in"
          role="status"
        >
          <div className="w-16 h-16 bg-brand-green/10 text-brand-green rounded-full flex items-center justify-center mb-6">
            <CheckCircle className="w-8 h-8" aria-hidden />
          </div>
          <h3 className="text-2xl font-extrabold text-slate-900 mb-2 tracking-tight">
            Inquiry sent
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed max-w-sm mb-1">
            Your <strong>{activeType.shortLabel}</strong> request was emailed to our engineering
            team.
          </p>
          <p className="text-xs text-slate-500 max-w-sm">
            Delivered to {site.email} and {site.emailCc}. {activeType.responseNote}
          </p>
          <Button variant="outline" onClick={() => setIsSuccess(false)} className="mt-8">
            Submit another inquiry
          </Button>
        </div>
      )}

      <div className="border-b border-slate-100 bg-slate-50/80 px-6 py-5 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-green mb-1">
          Engineering inquiry
        </p>
        <h2 className="text-xl lg:text-2xl font-extrabold text-slate-950 tracking-tight">
          Tell us what you need
        </h2>
        <p className="text-sm text-slate-600 mt-2 leading-relaxed">
          Submissions are sent to{' '}
          <span className="font-semibold text-slate-800">{site.email}</span> and{' '}
          <span className="font-semibold text-slate-800">{site.emailCc}</span>. Choose how you
          prefer us to reply.
        </p>
      </div>

      <div className="p-6 lg:p-8 space-y-8">
        <fieldset>
          <legend className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-3">
            Type of inquiry *
          </legend>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-2.5"
            role="radiogroup"
            aria-label="Type of inquiry"
          >
            {inquiryTypes.map((type) => {
              const Icon = type.icon;
              const selected = inquiryId === type.id;
              return (
                <button
                  key={type.id}
                  type="button"
                  role="radio"
                  aria-checked={selected}
                  onClick={() => selectInquiry(type.id)}
                  className={cn(
                    'flex items-start gap-3 p-3.5 rounded-[var(--radius-md)] border text-left transition-all duration-200 min-h-[44px]',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2',
                    selected
                      ? 'border-brand-green bg-brand-green/5 shadow-sm'
                      : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
                  )}
                >
                  <span
                    className={cn(
                      'w-9 h-9 rounded-[var(--radius-md)] flex items-center justify-center shrink-0 border',
                      selected
                        ? 'bg-brand-green/15 border-brand-green/25 text-brand-green'
                        : 'bg-slate-50 border-slate-100 text-slate-500'
                    )}
                  >
                    <Icon className="w-4 h-4" aria-hidden />
                  </span>
                  <span className="min-w-0">
                    <span
                      className={cn(
                        'block text-xs font-extrabold leading-tight',
                        selected ? 'text-slate-950' : 'text-slate-800'
                      )}
                    >
                      {type.shortLabel}
                    </span>
                    <span className="block text-[11px] text-slate-500 leading-snug mt-0.5 line-clamp-2">
                      {type.description}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
          <p className="text-xs text-brand-dark/80 mt-3 font-medium">{activeType.responseNote}</p>
        </fieldset>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="border-t border-slate-100 pt-6">
            <h3 className="text-sm font-extrabold text-slate-950 mb-4">Your details</h3>
            <div className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <Input
                  label="First name *"
                  name="firstName"
                  id="first-name"
                  required
                  autoComplete="given-name"
                />
                <Input
                  label="Last name *"
                  name="lastName"
                  id="last-name"
                  required
                  autoComplete="family-name"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <Input
                  label="Email *"
                  name="email"
                  id="email"
                  type="email"
                  required
                  autoComplete="email"
                />
                <Input
                  label="Phone / WhatsApp number *"
                  name="phone"
                  id="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="+94 77 XXX XXXX"
                  hint="Include country code for WhatsApp replies"
                />
              </div>
              <Input
                label="Company / organization"
                name="organization"
                id="organization"
                autoComplete="organization"
                placeholder="Optional — leave blank for residential"
              />
            </div>
          </div>

          <div className="border-t border-slate-100 pt-6">
            <h3 className="text-sm font-extrabold text-slate-950 mb-4">Project information</h3>
            <div className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <Select label="Project sector" name="sector" id="sector" defaultValue="">
                  {sectorOptions}
                </Select>
                <Input
                  label="Site location (district / city) *"
                  name="location"
                  id="location"
                  required
                  placeholder="e.g. Colombo, Gampaha, Padukka"
                  autoComplete="address-level2"
                />
              </div>
              <Textarea
                label="Your message *"
                name="message"
                id="message"
                required
                rows={5}
                key={inquiryId}
                placeholder={activeType.messagePlaceholder}
              />
            </div>
          </div>

          <div className="border-t border-slate-100 pt-6 space-y-4">
            <fieldset>
              <legend className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-3">
                How should we reply to you? *
              </legend>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5" role="radiogroup">
                {preferredContactMethods.map((method) => {
                  const selected = contactMethod === method.value;
                  return (
                    <label
                      key={method.value}
                      className={cn(
                        'flex flex-col gap-1 p-3.5 rounded-[var(--radius-md)] border cursor-pointer transition-all min-h-[44px]',
                        selected
                          ? 'border-brand-blue bg-brand-blue/5'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      )}
                    >
                      <span className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="contactMethod"
                          value={method.value}
                          checked={selected}
                          onChange={() => setContactMethod(method.value)}
                          className="accent-brand-green"
                          required
                        />
                        <span className="text-sm font-bold text-slate-900">{method.label}</span>
                      </span>
                      <span className="text-xs text-slate-500 pl-6">{method.description}</span>
                    </label>
                  );
                })}
              </div>
            </fieldset>

            {contactMethod === 'other' && (
              <Input
                label="Specify contact channel *"
                name="contactMethodOther"
                id="contact-method-other"
                value={contactMethodOther}
                onChange={(e) => setContactMethodOther(e.target.value)}
                placeholder="e.g. Microsoft Teams, site visit only, SMS"
                required
              />
            )}
          </div>

          {error && (
            <div
              className="flex gap-3 p-4 rounded-[var(--radius-md)] border border-amber-200 bg-amber-50 text-sm text-amber-900"
              role="alert"
            >
              <AlertCircle className="w-5 h-5 shrink-0" aria-hidden />
              <p>{error}</p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
            <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
              By submitting, you agree we may contact you about this inquiry. Messages are sent to{' '}
              {site.inquiryRecipients.join(' and ')}.
            </p>
            <Button
              type="submit"
              variant="accent"
              size="lg"
              className="w-full sm:w-auto shrink-0 gap-2"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                'Sending to team…'
              ) : (
                <>
                  Submit inquiry by email
                  <Send className="w-4 h-4" aria-hidden />
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
