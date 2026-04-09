import { useEffect, useState } from 'react';

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const duration = 1500; // 1.5 seconds loading
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
        }, 500); // 500ms fade out
      }
    }, 20);
    
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center transition-opacity duration-500 ${fading ? 'opacity-0' : 'opacity-100'}`}
    >
      <div className="relative mb-12 flex justify-center">
        {/* Clean Logo Container */}
        <div className="relative text-center flex flex-col items-center justify-center">
          <img src="/a2zlogo.svg" alt="A2Z Engineering Logo" className="w-32 h-auto" />
        </div>
      </div>
      
      {/* Loading Text */}
      <h2 className="text-brand-dark font-bold tracking-widest uppercase mb-6 text-[10px]">
        Loading Environment
      </h2>

      {/* Progress Bar Container */}
      <div className="w-64 h-1 bg-slate-100 rounded-full overflow-hidden">
        <div 
          className="h-full bg-brand-green transition-all duration-75 ease-out rounded-full relative"
          style={{ width: `${progress}%` }}
        >
          {/* Subtle Shine effect on progress bar */}
          <div className="absolute top-0 left-0 bottom-0 w-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full animate-[shimmer_1.5s_infinite]" />
        </div>
      </div>
    </div>
  );
}
