import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

export function Testimonials() {
  const reviews = [
    { name: "Yasasri Prabash", content: "Honestly I must say that we are really happy after installing solar system into my home with the support of A2Z engineering team. More than the service they offered, team was very friendly and explained everything. Specially I must thank Mr Indika for valuable advices. I would highly recommend the Service of the team and wish you all the best.", stars: 5 },
    { name: "Pasan Chandrasiri", content: "I bought a 10kW on-grid solar system from A2Z, and it is working very well. The panel installation was done to get maximum efficiency. So far, I have been happy with the installation, quality of equipment, and support. I highly recommend A2Z.", stars: 5 },
    { name: "Ashan", content: "I want to extend my heartfelt thanks for the outstanding work done on the setup and installation of my rooftop solar.", stars: 5 },
    { name: "Aloka Warnakula", content: "I recently had a 5kW solar power system installed at my home by A2Z Engineering (Pvt) Ltd, and I am very satisfied with the work.", stars: 5 },
    { name: "Chaminda Senevirathne", content: "Highly recommend the quality service of A2Z Engineering.", stars: 5 },
    { name: "Roys Hettiarachchi", content: "Excellent service. No hesitation to recommend.", stars: 5 },
    { name: "Dinaya Jayasekara", content: "Quick service and good quality. Best customer service.", stars: 5 },
    { name: "Gayan SD", content: "Excellent service.", stars: 5 },
    { name: "Amandi Rashmika", content: "", stars: 5 },
    { name: "Dulma Ayeshika", content: "", stars: 5 },
    { name: "Vishmika Jayadini", content: "", stars: 5 },
    { name: "Jayindu Karunanayaka", content: "", stars: 5 },
    { name: "Hiruni Kavinga", content: "", stars: 5 }
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -360 : 360;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-white border-t border-slate-100 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-10 h-1 bg-brand-muted rounded-full"></span>
              <h2 className="text-xs font-bold text-brand-dark uppercase tracking-widest">Testimonials</h2>
            </div>
            <h3 className="text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight">What Our Clients Say</h3>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600">
              Feedback from residential and commercial customers who worked with our engineering team.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-3 bg-slate-50 px-4 py-3 rounded-lg border border-slate-200">
              <div className="flex text-amber-400">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900 leading-tight">13 Google Reviews</p>
                <p className="text-[11px] text-slate-500">Verified customer ratings</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button onClick={() => scroll('left')} disabled={!canScrollLeft} aria-label="Previous testimonial" className="w-10 h-10 rounded-md border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:text-brand-dark disabled:opacity-30 disabled:hover:bg-transparent transition-all">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={() => scroll('right')} disabled={!canScrollRight} aria-label="Next testimonial" className="w-10 h-10 rounded-md border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:text-brand-dark disabled:opacity-30 disabled:hover:bg-transparent transition-all">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="relative -mx-4 sm:mx-0 px-4 sm:px-0">
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10 hidden sm:block pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10 hidden sm:block pointer-events-none"></div>
          
          <div ref={scrollRef} onScroll={checkScroll} className="flex overflow-x-auto gap-4 sm:gap-5 pb-10 pt-2 snap-x snap-mandatory scrollbar-hide hide-scroll-bar items-stretch" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {reviews.map((testimonial, index) => (
              <div key={index} className={`min-w-[292px] max-w-[292px] md:min-w-[340px] md:max-w-[340px] flex-shrink-0 snap-start bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col hover:shadow-xl hover:shadow-slate-100/50 hover:-translate-y-1.5 transition-all duration-300 ${!testimonial.content ? 'justify-center items-center text-center' : ''}`}>
                {testimonial.content ? (
                  <>
                    <div className="flex justify-between items-start mb-5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-sm font-bold text-brand-dark shrink-0">{testimonial.name.charAt(0)}</div>
                        <div>
                          <h4 className="font-bold text-slate-900 leading-tight text-sm">{testimonial.name}</h4>
                          <div className="flex items-center gap-1 text-amber-400 mt-1">
                            {[...Array(testimonial.stars)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                          </div>
                        </div>
                      </div>
                      <Quote className="w-6 h-6 text-slate-300 opacity-30 shrink-0" />
                    </div>
                    <div className="relative flex-grow">
                      <p className="text-slate-600 leading-relaxed text-sm line-clamp-6">"{testimonial.content}"</p>
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col items-center py-4">
                    <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-base font-bold text-brand-dark shrink-0 mb-4">{testimonial.name.charAt(0)}</div>
                    <h4 className="font-bold text-slate-900 text-sm mb-2">{testimonial.name}</h4>
                    <div className="flex items-center gap-1 text-amber-400 mb-4">
                      {[...Array(testimonial.stars)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                    </div>
                    <span className="text-brand-dark text-[10px] font-bold uppercase tracking-widest bg-slate-100 px-3 py-1.5 rounded-md">Verified 5-Star Rating</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <style>{`.hide-scroll-bar::-webkit-scrollbar { display: none; }`}</style>
      </div>
    </section>
  );
}
