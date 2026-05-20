import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CheckCircle, Send } from 'lucide-react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Textarea } from '../ui/Textarea';
import { Select } from '../ui/Select';
import {
  inquiryTypes,
  inquiryTypeMap,
  preferredContactMethods,
  projectSectors,
} from '../../data/inquiryTypes';
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 6000);
    }, 1200);
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
            Inquiry received
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed max-w-sm mb-1">
            Thank you, <strong>{activeType.shortLabel}</strong> request logged.
          </p>
          <p className="text-xs text-slate-500 max-w-sm">{activeType.responseNote}</p>
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
          Choose your inquiry type, then share project details. All fields marked with * are
          required.
        </p>
      </div>

      <div className="p-6 lg:p-8 space-y-8">
        {/* Inquiry type selector */}
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
                  label="Phone *"
                  name="phone"
                  id="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="+94 7X XXX XXXX"
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
                  placeholder="e.g. Colombo, Gampaha, Kandy"
                  autoComplete="address-level2"
                />
              </div>
              <input type="hidden" name="inquiryType" value={inquiryId} />
              <Textarea
                label="Project details *"
                name="message"
                id="message"
                required
                rows={5}
                key={inquiryId}
                placeholder={activeType.messagePlaceholder}
              />
            </div>
          </div>

          <div className="border-t border-slate-100 pt-6">
            <Select
              label="Preferred contact method"
              name="contactMethod"
              id="contact-method"
              defaultValue="any"
            >
              {preferredContactMethods.map((m) => (
                <option key={m.value} value={m.value}>
                  {m.label}
                </option>
              ))}
            </Select>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
            <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
              By submitting, you agree we may contact you about this inquiry. We do not share your
              details with third parties.
            </p>
            <Button
              type="submit"
              variant="accent"
              size="lg"
              className="w-full sm:w-auto shrink-0 gap-2"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                'Sending…'
              ) : (
                <>
                  Submit inquiry
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
