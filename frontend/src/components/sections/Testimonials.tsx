import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

export function Testimonials() {
  const reviews = [
    { name: "Yasasri Prabash", content: "Honestly I must say that we are really happy after installing solar system into my home with the support of A2Z engineering team. More than the service they offered, team was very friendly and explained everything. Specially I must thank Mr Indika for valuable advices. I would highly recommend the Service of the team and wish you all the best 👍", stars: 5 },
    { name: "Pasan Chandrasiri", content: "I bought a 10kW on-grid solar system from A2Z, and it is working very well. The panel installation was done to get maximum efficiency. So far, I have been happy with the installation, quality of equipment, and support. I highly recommend A2Z.", stars: 5 },
    { name: "Ashan", content: "I want to extend my heartfelt thanks for the outstanding work done on the setup and installation of my rooftop solar...", stars: 5 },
    { name: "Aloka Warnakula", content: "I recently had a 5kW solar power system installed at my home by A2Z Engineering (Pvt) Ltd, and I'm so satisfied happier... View full review", stars: 5 },
    { name: "Chaminda Senevirathne", content: "Highly recommend the quality service of A2Z Engineering.", stars: 5 },
    { name: "Roys Hettiarachchi", content: "Excellent service . No hesitate to recommend .", stars: 5 },
    { name: "Dinaya Jayasekara", content: "Quick service and good quality. Best customer service. 👍", stars: 5 },
    { name: "Gayan SD", content: "Excellent Service 🥳", stars: 5 },
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
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 lg:py-32 bg-white border-t border-slate-100 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-3 mb-4">
               <span className="w-10 h-1 bg-brand-muted rounded-full"></span>
               <h2 className="text-xs font-bold text-brand-dark uppercase tracking-widest">Testimonials</h2>
            </div>
            <h3 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">What Our Clients Say</h3>
          </div>
          
          <div className="flex items-center gap-4">
             {/* Total Reviews Badge */}
             <div className="hidden sm:flex items-center gap-4 bg-slate-50 px-6 py-3 rounded-full shadow-sm border border-slate-100">
                <div className="flex -space-x-2">
                   {[1,2,3].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center overflow-hidden">
                        <span className="text-xs font-bold text-slate-500">{i}</span>
                      </div>
                   ))}
                </div>
                <div>
                   <p className="text-sm font-bold text-slate-900 leading-tight">13 Google Reviews</p>
                   <div className="flex text-amber-400 mt-0.5">
                       {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                   </div>
                </div>
             </div>

             {/* Carousel Buttons */}
             <div className="flex items-center gap-2">
                <button 
                  onClick={() => scroll('left')}
                  disabled={!canScrollLeft}
                  className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:text-brand-blue disabled:opacity-30 disabled:hover:bg-transparent transition-all shadow-sm"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => scroll('right')}
                  disabled={!canScrollRight}
                  className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:text-brand-blue disabled:opacity-30 disabled:hover:bg-transparent transition-all shadow-sm"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
             </div>
          </div>
        </div>
        
        {/* Horizontal Carousel */}
        <div className="relative -mx-4 sm:mx-0 px-4 sm:px-0">
          {/* Gradient Edges for Desktop */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10 hidden sm:block pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10 hidden sm:block pointer-events-none"></div>
          
          <div 
             ref={scrollRef}
             onScroll={checkScroll}
             className="flex overflow-x-auto gap-4 sm:gap-6 pb-12 pt-2 snap-x snap-mandatory scrollbar-hide hide-scroll-bar items-stretch"
             style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {reviews.map((testimonial, index) => (
              <div 
                key={index} 
                className={`min-w-[300px] max-w-[300px] md:min-w-[380px] md:max-w-[380px] flex-shrink-0 snap-start bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col hover:-translate-y-1 hover:shadow-md transition-all ${!testimonial.content ? 'justify-center items-center text-center' : ''}`}
              >
                {testimonial.content ? (
                  <>
                    <div className="flex justify-between items-start mb-6">
                       <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-white border border-slate-100 flex items-center justify-center text-lg font-bold text-brand-blue shadow-sm shrink-0">
                            {testimonial.name.charAt(0)}
                          </div>
                          <div>
                            <h4 className="font-bold text-slate-900 leading-tight">{testimonial.name}</h4>
                            <div className="flex items-center gap-1 text-amber-400 mt-1">
                                {[...Array(testimonial.stars)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                            </div>
                          </div>
                       </div>
                       <Quote className="w-8 h-8 text-brand-lightblue opacity-20 shrink-0" />
                    </div>
                    
                    {/* Content Area uses line clamping for very long texts to maintain uniform card heights */}
                    <div className="relative flex-grow">
                      <p className="text-slate-600 leading-relaxed text-sm line-clamp-5">
                        "{testimonial.content}"
                      </p>
                    </div>
                  </>
                ) : (
                  // Empty State UI
                  <div className="flex flex-col items-center py-6">
                      <div className="w-16 h-16 rounded-full bg-white border border-slate-100 flex items-center justify-center text-2xl font-bold text-brand-blue shadow-sm shrink-0 mb-4">
                        {testimonial.name.charAt(0)}
                      </div>
                      <h4 className="font-bold text-slate-900 text-lg mb-2">{testimonial.name}</h4>
                      <div className="flex items-center gap-1 text-amber-400 mb-4">
                         {[...Array(testimonial.stars)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                      </div>
                      <span className="text-brand-muted text-xs font-bold uppercase tracking-widest bg-brand-lightblue/10 px-4 py-1.5 rounded-full">
                        Verified 5-Star Rating
                      </span>
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
