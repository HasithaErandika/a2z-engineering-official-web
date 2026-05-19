import { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';
import { Button } from '../ui/Button';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted or dismissed cookies
    const consent = localStorage.getItem('a2z-cookie-consent');
    if (!consent) {
      // Small delay for better UX
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
    <div className="fixed bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-auto sm:max-w-md z-[999] animate-in slide-in-from-bottom-8 fade-in duration-500">
      <div className="bg-white border border-slate-200 p-6 rounded-lg shadow-xl flex flex-col gap-4 relative">
        <button 
          onClick={handleDecline}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-start gap-4 pr-6">
           <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100">
             <Cookie className="w-5 h-5 text-brand-dark" />
           </div>
           <div>
             <h4 className="text-slate-900 font-bold mb-1 tracking-tight">We value your privacy</h4>
             <p className="text-slate-500 text-xs leading-relaxed">
               We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept", you consent to our use of cookies.
             </p>
           </div>
        </div>

        <div className="flex items-center gap-3 mt-2">
           <Button variant="primary" onClick={handleAccept} className="w-full bg-brand-dark hover:bg-brand-blue text-white text-xs h-9">
             Accept Cookies
           </Button>
           <Button variant="outline" onClick={handleDecline} className="w-full text-xs h-9 border-slate-200">
             Decline
           </Button>
        </div>
      </div>
    </div>
  );
}
