export function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-tr from-slate-100 to-slate-50 overflow-hidden relative border border-slate-200 shadow-sm">
               <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-slate-400 font-bold uppercase tracking-widest text-xs">Facility Preview Image</span>
               </div>
               <div className="absolute top-0 right-0 w-48 h-48 bg-brand-green/10 rounded-bl-full" />
            </div>
            
            <div className="absolute -bottom-10 -right-4 bg-white text-brand-dark p-8 rounded-2xl shadow-xl hidden md:block border border-slate-100 z-10">
              <p className="text-5xl font-extrabold mb-1">15<span className="text-brand-green">+</span></p>
              <p className="text-xs font-bold text-slate-500 tracking-widest uppercase">Years Experience</p>
            </div>
          </div>
          
          <div className="animate-in fade-in slide-in-from-right-8 duration-1000 delay-300">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-10 h-1 bg-brand-muted rounded-full"></span>
              <h2 className="text-xs font-bold text-brand-dark uppercase tracking-widest">A Bit About Us</h2>
            </div>
            <h3 className="text-3xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
              Outstanding Outcome & Professional Solutions
            </h3>
            
            <p className="text-slate-600 mb-6 leading-relaxed text-lg">
              A2Z Engineering is a service providing limited liability company located in Sri-Lanka with over 15+ years of combined experience.
            </p>
            
            <blockquote className="border-l-4 border-brand-green pl-6 italic text-slate-700 bg-slate-50 py-4 mt-8 rounded-r-lg border border-slate-100 border-l-brand-green">
              <p className="font-medium tracking-tight">“Harvesting Sunshine, powering the world Sustainably.”</p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
