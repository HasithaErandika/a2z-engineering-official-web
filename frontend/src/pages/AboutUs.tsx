export function AboutUs() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      
      {/* Advanced Organic Header Design */}
      <section className="relative bg-gradient-to-br from-slate-50 to-white pt-16 pb-16 border-b border-slate-100 overflow-hidden">
        {/* Abstract Organic Shapes (Advanced SVG) */}
        <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none z-0">
          <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="absolute -top-20 -right-20 w-[600px] h-[600px] opacity-10 blur-3xl">
            <circle cx="200" cy="200" r="150" fill="#7CB05D" />
          </svg>
          <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="absolute top-20 -right-40 w-[400px] h-[400px] opacity-[0.15]">
            <path d="M200,50 Q250,150 150,200 T200,350" fill="none" stroke="#2B3990" strokeWidth="40" strokeLinecap="round" className="opacity-20" />
            <circle cx="300" cy="100" r="80" fill="#7CB05D" className="opacity-40" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="flex flex-col">
              <span className="text-[10px] font-bold text-brand-blue uppercase tracking-[0.2em] mb-4">Corporate Profile</span>
              <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-brand-dark tracking-tight">About Us</h1>
              <p className="text-base text-slate-600 leading-relaxed max-w-4xl">
                Leading the way in engineering excellence since inception, A2Z Engineering (Pvt) Ltd provides dependable products, services, and structural support for modern industrial infrastructure.
              </p>
           </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="aspect-[4/5] overflow-hidden relative border border-slate-100 rounded-lg shadow-sm group">
             <img 
               src="/images/building-office.png" 
               alt="A2Z Engineering Corporate Office Building" 
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
             />
          </div>
          <div className="pt-4">
            <h2 className="text-2xl font-extrabold mb-8 text-slate-900 tracking-tight">Our Story</h2>
            <div className="space-y-6">
              <p className="text-base text-slate-600 leading-relaxed font-medium">
                A2Z Engineering (Pvt) Ltd. is the leading expert in engineering solutions and works to provide dependable products, services, and support to its customers.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                A2Z Engineering, with our mother company located in Las Vegas, USA, can directly construct sophisticated solutions with its business partners to bring positive and productive services and solutions for its customers and clients.
              </p>
            </div>
            
            <blockquote className="mt-10 border-l-4 border-brand-green pl-6 py-2">
              <p className="text-base font-bold text-brand-dark italic tracking-tight leading-snug">
                "Outstanding Outcome — Innovative Design — Professional Solution"
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-slate-50 py-16 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid md:grid-cols-2 gap-6">
           <div className="bg-white p-7 rounded-lg shadow-sm border border-slate-100">
              <div className="w-12 h-1 bg-brand-blue mb-6 rounded-full"></div>
              <h3 className="text-2xl font-extrabold text-brand-dark mb-4 tracking-tight uppercase tracking-widest text-sm text-[12px]">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Our Vision is to provide Clean, Green and Safe work to our clients and create and maintain an organization of highly skilled service professionals that serve our Clients’ needs with honesty and integrity. Ultimately, our goal is to become the service provider of choice to those seeking quality, personal service, and value.
              </p>
           </div>
           <div className="bg-white p-7 rounded-lg shadow-sm border border-slate-100">
              <div className="w-12 h-1 bg-brand-green mb-6 rounded-full"></div>
              <h3 className="text-2xl font-extrabold text-brand-dark mb-4 tracking-tight uppercase tracking-widest text-sm text-[12px]">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Our mission is to provide design, install, maintenance and repair services that surpass our Clients’ expectations. We always try to provide our services by using Green technology and methods in order to create and maintain clean and nature friendly environment. We are committed to the success of our Clients, our business partners, and our employees.
              </p>
           </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-brand-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-4">Our Leadership</h3>
              <p className="text-brand-muted max-w-2xl mx-auto">Guided by industry veterans across Sri Lanka and the USA.</p>
           </div>
           
           <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/5 border border-white/10 rounded-lg p-6 flex items-center gap-6">
                 <div className="w-16 h-16 bg-brand-blue rounded-full flex shrink-0 items-center justify-center text-base font-bold border-2 border-brand-green/30">
                    IW
                 </div>
                 <div>
                    <h4 className="text-lg font-bold tracking-tight mb-1">Indika Wickramasinghe</h4>
                    <p className="text-brand-green font-bold text-xs uppercase tracking-widest">Director Operations</p>
                 </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-lg p-6 flex items-center gap-6">
                 <div className="w-16 h-16 bg-brand-blue rounded-full flex shrink-0 items-center justify-center text-base font-bold border-2 border-brand-green/30">
                    DC
                 </div>
                 <div>
                    <h4 className="text-lg font-bold tracking-tight mb-1">Dhammika Chandrasiri</h4>
                    <p className="text-brand-green font-bold text-xs uppercase tracking-widest">Director CFO</p>
                 </div>
              </div>
           </div>

           <div className="mt-20 text-center">
              <h4 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
                Switch to Solar, <br className="sm:hidden" />
                <span className="text-brand-lightblue">Power Your Dreams</span>
              </h4>
           </div>
        </div>
      </section>

    </div>
  );
}
