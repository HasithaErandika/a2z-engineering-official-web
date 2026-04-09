export function Products() {
  const products = [
    { title: "High-Efficiency Solar Panels", brand: "Jinko Solar / JA Solar", type: "Panels" },
    { title: "Smart Hybrid Inverters", brand: "Solis", type: "Inverters" },
    { title: "Grid-Tied Inverters", brand: "GoodWe", type: "Inverters" },
    { title: "High-Capacity Storage", brand: "Solax", type: "Batteries" },
    { title: "Commercial Inverters", brand: "Solis / GoodWe", type: "Inverters" },
    { title: "Lithium-ion Battery Banks", brand: "Solax", type: "Batteries" }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      
      {/* Advanced Organic Header Design */}
      <section className="relative bg-gradient-to-br from-slate-50 to-white pt-16 pb-16 border-b border-slate-100 overflow-hidden">
        {/* Abstract Organic Shapes (Advanced SVG) */}
        <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none z-0">
          <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="absolute -top-20 -right-20 w-[600px] h-[600px] opacity-10 blur-3xl">
            <circle cx="200" cy="200" r="150" fill="#7CB05D" />
          </svg>
          <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="absolute top-20 right-20 w-[200px] h-[200px] opacity-[0.3]">
            <rect x="50" y="50" width="100" height="100" rx="40" fill="#7CB05D" className="opacity-40" />
            <circle cx="150" cy="150" r="50" fill="#2B3990" className="opacity-10" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="flex flex-col">
              <span className="text-[10px] font-bold text-brand-blue uppercase tracking-[0.2em] mb-4">Industrial Components</span>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-brand-dark tracking-tight">Products From A2Z Engineering</h1>
              <p className="text-lg text-slate-600 leading-relaxed max-w-4xl italic border-l-4 border-brand-blue pl-6 py-1">
                “Discover an array of cutting-edge products meticulously crafted and utilized by A2Z Engineering to meet the diverse needs of modern industries.”
              </p>
           </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full flex-grow">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((item, i) => (
             <div key={i} className="bg-white border border-slate-100 rounded-2xl p-8 hover:shadow-md transition-all group flex flex-col">
               <div className="aspect-[4/3] bg-slate-50 rounded-xl mb-8 flex items-center justify-center border border-slate-100 overflow-hidden relative">
                 <span className="text-slate-300 font-bold tracking-widest uppercase text-xs">Visual Component</span>
                 <div className="absolute top-4 left-4 bg-white border border-slate-100 text-brand-dark text-[10px] font-bold px-3 py-1 rounded-full shadow-sm">
                   {item.type}
                 </div>
               </div>
               
               <p className="text-[10px] font-bold text-brand-green uppercase tracking-widest mb-2">{item.brand}</p>
               <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-brand-blue transition-colors tracking-tight leading-snug">{item.title}</h3>
               
               <div className="flex-grow"></div>
               
               <button className="text-xs border-t border-slate-100 pt-6 mt-6 w-full text-left text-brand-dark font-bold uppercase tracking-wider hover:text-brand-blue self-start transition-colors flex justify-between items-center group-hover:border-brand-lightblue/20 outline-none">
                 <span>View Specifications</span>
                 <span className="text-brand-lightblue group-hover:translate-x-1 transition-transform">→</span>
               </button>
             </div>
          ))}
        </div>
      </section>

      {/* Product Origin Section */}
      <section className="bg-slate-50 py-20 border-t border-slate-100">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-6">Our Commitment to Quality</h3>
            <p className="text-slate-600 leading-relaxed text-lg italic">
              We exclusively source and deploy products from global leaders in solar technology. Every component in an A2Z Engineering installation—from panels to battery storage—is chosen for its durability, efficiency, and industrial-grade performance.
            </p>
         </div>
      </section>

    </div>
  );
}
