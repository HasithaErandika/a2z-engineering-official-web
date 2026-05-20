import { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';
import { Button } from '../ui/Button';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('a2z-cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('a2z-cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('a2z-cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-auto sm:max-w-md z-[999] animate-slide-in-bottom"
      role="dialog"
      aria-labelledby="cookie-title"
      aria-describedby="cookie-desc"
    >
      <div className="bg-white border border-slate-200 p-6 rounded-[var(--radius-lg)] shadow-[var(--shadow-card-hover)] flex flex-col gap-4 relative">
        <button
          type="button"
          onClick={handleDecline}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center rounded-sm focus-visible:ring-2 focus-visible:ring-brand-blue"
          aria-label="Dismiss cookie notice"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-start gap-4 pr-8">
          <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100">
            <Cookie className="w-5 h-5 text-brand-dark" aria-hidden />
          </div>
          <div>
            <h4 id="cookie-title" className="text-slate-900 font-bold mb-1 tracking-tight text-sm">
              We value your privacy
            </h4>
            <p id="cookie-desc" className="text-slate-500 text-xs leading-relaxed">
              We use cookies to enhance your browsing experience and analyze site traffic. By
              clicking Accept, you consent to our use of cookies.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="secondary" onClick={handleAccept} className="w-full text-xs h-9">
            Accept
          </Button>
          <Button variant="outline" onClick={handleDecline} className="w-full text-xs h-9">
            Decline
          </Button>
        </div>
      </div>
    </div>
  );
}
