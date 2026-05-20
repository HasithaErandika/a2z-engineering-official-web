import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState, useEffect, useCallback } from 'react';
import { SectionHeader } from '../patterns/SectionHeader';
import { Card } from '../ui/Card';

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
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth);
    }
  }, []);

  useEffect(() => {
    checkScroll();
    const ro = new ResizeObserver(checkScroll);
    if (scrollRef.current) ro.observe(scrollRef.current);
    return () => ro.disconnect();
  }, [checkScroll]);

  const scroll = (direction: 'left' | 'right') => {
    scrollRef.current?.scrollBy({ left: direction === 'left' ? -360 : 360, behavior: 'smooth' });
  };

  return (
    <section className="section bg-white border-t border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
          <SectionHeader
            eyebrow="Testimonials"
            title="What our clients say"
            description="Feedback from residential and commercial customers who worked with our engineering team."
            className="mb-0"
          />

          <div className="flex items-center gap-4 shrink-0">
            <div className="hidden sm:flex items-center gap-3 bg-slate-50 px-4 py-3 rounded-[var(--radius-md)] border border-slate-200">
              <div className="flex text-amber-400" aria-hidden>
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900 leading-tight">13 Google reviews</p>
                <p className="text-xs text-slate-500">Verified customer ratings</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                aria-label="Previous testimonial"
                className="w-11 h-11 rounded-[var(--radius-md)] border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 disabled:opacity-30 transition-colors focus-visible:ring-2 focus-visible:ring-brand-blue"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                aria-label="Next testimonial"
                className="w-11 h-11 rounded-[var(--radius-md)] border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 disabled:opacity-30 transition-colors focus-visible:ring-2 focus-visible:ring-brand-blue"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div
          ref={scrollRef}
          onScroll={checkScroll}
          role="region"
          aria-label="Customer testimonials"
          aria-live="polite"
          className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {reviews.map((testimonial) => (
            <Card
              key={testimonial.name}
              interactive
              className="min-w-[292px] md:min-w-[340px] flex-shrink-0 snap-start p-6 flex flex-col"
            >
              <div className="flex justify-between items-start mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-sm font-bold text-brand-dark">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{testimonial.name}</h4>
                    <div className="flex text-amber-400 mt-1" aria-label={`${testimonial.stars} stars`}>
                      {[...Array(testimonial.stars)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" aria-hidden />
                      ))}
                    </div>
                  </div>
                </div>
                <Quote className="w-6 h-6 text-slate-300 shrink-0" aria-hidden />
              </div>
              <p className="text-slate-600 leading-relaxed text-sm flex-grow">
                &ldquo;{testimonial.content}&rdquo;
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
