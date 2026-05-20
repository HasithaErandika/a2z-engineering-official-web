import { useEffect, useState } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const LOADING_KEY = 'a2z-loading-seen';

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [fading, setFading] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (sessionStorage.getItem(LOADING_KEY) === '1') {
      onComplete();
      return;
    }

    const duration = reducedMotion ? 400 : 1200;
    let completeTimer: ReturnType<typeof setTimeout>;

    const fadeTimer = setTimeout(() => {
      setFading(true);
      sessionStorage.setItem(LOADING_KEY, '1');
      completeTimer = setTimeout(onComplete, reducedMotion ? 150 : 400);
    }, duration);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete, reducedMotion]);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center transition-opacity duration-300 ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{ fontFamily: "'Inter', sans-serif" }}
      role="status"
      aria-live="polite"
      aria-label="Loading site"
    >
      <div className="relative mb-8 flex h-36 w-36 items-center justify-center">
        {!reducedMotion && (
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 144 144" aria-hidden>
            <defs>
              <linearGradient id="loader-gradient" x1="18" y1="18" x2="126" y2="126">
                <stop offset="0%" stopColor="#76A754" />
                <stop offset="52%" stopColor="#63A3C2" />
                <stop offset="100%" stopColor="#525F96" />
              </linearGradient>
            </defs>
            <circle cx="72" cy="72" r="58" fill="none" stroke="#E2E8F0" strokeWidth="2" />
            <circle
              cx="72"
              cy="72"
              r="58"
              fill="none"
              stroke="url(#loader-gradient)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="92 272"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 72 72"
                to="360 72 72"
                dur="1.4s"
                repeatCount="indefinite"
              />
            </circle>
          </svg>
        )}
        <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-slate-100 bg-white shadow-sm">
          <img src="/a2zlogo.svg" alt="" className="w-16 h-auto" />
        </div>
      </div>
      <p className="text-brand-dark font-bold tracking-[0.22em] uppercase text-xs">Preparing site</p>
      <button
        type="button"
        onClick={() => {
          sessionStorage.setItem(LOADING_KEY, '1');
          onComplete();
        }}
        className="mt-6 text-xs font-semibold text-slate-500 hover:text-brand-dark underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-sm px-2 min-h-[44px]"
      >
        Skip
      </button>
    </div>
  );
}
