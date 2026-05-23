import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { useRef, useState, useEffect, useCallback } from 'react';
import { SectionHeader } from '../patterns/SectionHeader';
import { cn } from '../../lib/cn';

// Minimalist Google G Logo SVG
const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" aria-hidden="true">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

const reviews = [
  { name: 'Yasasri Prabash', content: 'Honestly I must say that we are really happy after installing solar system into my home with the support of A2Z engineering team. More than the service they offered, team was very friendly and explained everything. I would highly recommend the Service of the team.', stars: 5 },
  { name: 'Pasan Chandrasiri', content: 'I bought a 10kW on-grid solar system from A2Z, and it is working very well. The panel installation was done to get maximum efficiency. I highly recommend A2Z.', stars: 5 },
  { name: 'Ashan', content: 'I want to extend my heartfelt thanks for the outstanding work done on the setup and installation of my rooftop solar.', stars: 5 },
  { name: 'Aloka Warnakula', content: 'I recently had a 5kW solar power system installed at my home by A2Z Engineering (Pvt) Ltd, and I am very satisfied with the work.', stars: 5 },
  { name: 'Chaminda Senevirathne', content: 'Highly recommend the quality service of A2Z Engineering.', stars: 5 },
  { name: 'Roys Hettiarachchi', content: 'Excellent service. No hesitation to recommend.', stars: 5 },
  { name: 'Dinaya Jayasekara', content: 'Quick service and good quality. Best customer service.', stars: 5 },
  { name: 'Gayan SD', content: 'Excellent service.', stars: 5 },
  { name: 'Amandi Rashmika', content: 'Verified 5-star Google review.', stars: 5 },
  { name: 'Dulma Ayeshika', content: 'Verified 5-star Google review.', stars: 5 },
  { name: 'Vishmika Jayadini', content: 'Verified 5-star Google review.', stars: 5 },
  { name: 'Jayindu Karunanayaka', content: 'Verified 5-star Google review.', stars: 5 },
  { name: 'Hiruni Kavinga', content: 'Verified 5-star Google review.', stars: 5 },
];

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth - 10);
    }
  }, []);

  useEffect(() => {
    checkScroll();
    const ro = new ResizeObserver(checkScroll);
    if (scrollRef.current) ro.observe(scrollRef.current);
    return () => ro.disconnect();
  }, [checkScroll]);

  const scroll = (direction: 'left' | 'right') => {
    scrollRef.current?.scrollBy({ left: direction === 'left' ? -380 : 380, behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-gradient-to-b from-violet-50/40 via-slate-50/80 to-white border-t border-violet-100/60 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Controls Area */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-6">
          <SectionHeader
            eyebrow="Client Testimonials"
            title="Trusted by homeowners and enterprises."
            description="Real feedback from clients who chose A2Z for their Solar PV and infrastructure projects."
            className="mb-0 max-w-2xl"
          />

          <div className="flex items-center gap-5 shrink-0">
            {/* Premium Google Rating Badge */}
            <div className="hidden sm:flex items-center gap-4 bg-white px-5 py-3.5 rounded-2xl border border-slate-200/80 shadow-sm">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1.5 text-amber-400" aria-hidden>
                  <span className="text-lg font-black text-slate-900 leading-none mr-1">5.0</span>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                  <GoogleIcon />
                  Based on 13 verified reviews
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                aria-label="Previous testimonial"
                className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:text-slate-900 hover:border-slate-300 disabled:opacity-40 disabled:hover:bg-white disabled:hover:border-slate-200 transition-all focus-visible:ring-2 focus-visible:ring-brand-green shadow-sm"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                aria-label="Next testimonial"
                className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:text-slate-900 hover:border-slate-300 disabled:opacity-40 disabled:hover:bg-white disabled:hover:border-slate-200 transition-all focus-visible:ring-2 focus-visible:ring-brand-green shadow-sm"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Container with Right-side Fade Mask */}
        <div className="relative -mx-4 px-4 sm:mx-0 sm:px-0">
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex overflow-x-auto gap-5 pb-8 pt-2 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {reviews.map((testimonial, idx) => {
              // Determine if this is just a rating or a full review text
              const isShortRating = testimonial.content === 'Verified 5-star Google review.';

              return (
                <div
                  key={`${testimonial.name}-${idx}`}
                  className={cn(
                    "relative flex-shrink-0 snap-start bg-white rounded-2xl border border-slate-200 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_4px_25px_rgb(0,0,0,0.06)] hover:border-slate-300 transition-all duration-300 flex flex-col p-7",
                    isShortRating ? "w-[280px]" : "w-[340px] md:w-[400px]"
                  )}
                >
                  {/* Card Header: Avatar & Info */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-3.5">
                      <div className="w-11 h-11 rounded-full bg-gradient-to-br from-brand-green/20 to-brand-blue/10 border border-slate-100 flex items-center justify-center text-sm font-extrabold text-slate-700">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm leading-tight">{testimonial.name}</h4>
                        <div className="flex items-center gap-1.5 mt-1" aria-label={`${testimonial.stars} stars`}>
                          <div className="flex text-amber-400">
                            {[...Array(testimonial.stars)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 fill-current" aria-hidden />
                            ))}
                          </div>
                          {!isShortRating && (
                            <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded ml-1">
                              <CheckCircle2 className="w-3 h-3" />
                              Verified
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    {!isShortRating && <Quote className="w-8 h-8 text-slate-100 shrink-0" aria-hidden />}
                  </div>

                  {/* Card Body */}
                  {isShortRating ? (
                    <div className="flex flex-col items-start justify-center flex-grow mt-2">
                      <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-lg border border-slate-100">
                        <GoogleIcon />
                        <span className="text-xs font-semibold text-slate-600">Google Verified Rating</span>
                      </div>
                    </div>
                  ) : (
                    <p className="text-slate-600 leading-relaxed text-sm flex-grow">
                      "{testimonial.content}"
                    </p>
                  )}

                  {/* Card Footer for Long Reviews */}
                  {!isShortRating && (
                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-400">
                      <GoogleIcon />
                      Posted on Google
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Gradient fade to indicate more content on the right */}
          <div 
            className={cn(
              "absolute right-0 top-0 bottom-8 w-24 bg-gradient-to-l from-violet-50/80 to-transparent pointer-events-none transition-opacity duration-300",
              canScrollRight ? "opacity-100" : "opacity-0"
            )} 
          />
        </div>
      </div>
    </section>
  );
}