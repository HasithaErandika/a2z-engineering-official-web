import { useEffect, useState } from 'react';

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const duration = 1500;
    const start = Date.now();
    
    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(newProgress);
      
      if (newProgress === 100) {
        clearInterval(interval);
        setFading(true);
        setTimeout(() => {
          onComplete();
        }, 500);
      }
    }, 20);
    
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center transition-opacity duration-500 ${fading ? 'opacity-0' : 'opacity-100'}`}
    >
      <div className="relative mb-8 flex h-36 w-36 items-center justify-center">
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 144 144" role="img" aria-label="Loading A2Z Engineering">
          <defs>
            <linearGradient id="loader-gradient" x1="18" y1="18" x2="126" y2="126">
              <stop offset="0%" stopColor="#76A754" />
              <stop offset="52%" stopColor="#63A3C2" />
              <stop offset="100%" stopColor="#525F96" />
            </linearGradient>
          </defs>
          <circle cx="72" cy="72" r="58" fill="none" stroke="#E2E8F0" strokeWidth="2" />
          <circle cx="72" cy="72" r="58" fill="none" stroke="url(#loader-gradient)" strokeWidth="4" strokeLinecap="round" strokeDasharray="92 272">
            <animateTransform attributeName="transform" type="rotate" from="0 72 72" to="360 72 72" dur="1.4s" repeatCount="indefinite" />
            <animate attributeName="stroke-dasharray" values="70 294;130 234;70 294" dur="1.4s" repeatCount="indefinite" />
          </circle>
          <path d="M38 98 C52 86 58 58 72 46 C88 60 92 85 106 98" fill="none" stroke="#76A754" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.36" />
        </svg>
        <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-slate-100 bg-white shadow-sm">
          <img src="/a2zlogo.svg" alt="A2Z Engineering Logo" className="w-16 h-auto" />
        </div>
      </div>
      
      <h2 className="text-brand-dark font-bold tracking-[0.22em] uppercase mb-5 text-[10px]">Preparing Site</h2>

      <div className="w-56 h-1 bg-slate-100 rounded-full overflow-hidden">
        <div className="h-full bg-brand-green transition-all duration-75 ease-out rounded-full relative" style={{ width: `${progress}%` }}>
          <div className="absolute top-0 left-0 bottom-0 w-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full animate-[shimmer_1.5s_infinite]" />
        </div>
      </div>
    </div>
  );
}
