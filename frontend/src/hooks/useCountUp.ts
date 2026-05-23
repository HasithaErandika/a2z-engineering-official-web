import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from './useReducedMotion';

type Options = {
  end: number;
  duration?: number;
  decimals?: number;
  startOnView?: boolean;
};

export function useCountUp({ end, duration = 1200, decimals = 0, startOnView = true }: Options) {
  const reducedMotion = useReducedMotion();
  const [value, setValue] = useState(reducedMotion ? end : 0);
  const [started, setStarted] = useState(!startOnView || reducedMotion);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reducedMotion) {
      setValue(end);
      return;
    }
    if (!startOnView) {
      setStarted(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [startOnView, reducedMotion, end]);

  useEffect(() => {
    if (!started || reducedMotion) return;
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(end * eased);
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [started, end, duration, reducedMotion]);

  const formatted =
    decimals > 0 ? value.toFixed(decimals) : String(Math.round(value));

  return { ref, value, formatted, started };
}
