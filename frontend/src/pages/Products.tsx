import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { productsList } from '../data/productDetails';

// Helper to render product visuals with high-fidelity generated assets and custom SVG CAD modules
const ProductVisual = ({ type, title }: { type: string; title: string }) => {
  if (type === "Panels") {
    return (
      <img
        src="/images/solar-panel-product.png"
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
    );
  }
  if (type === "Inverters" || type === "Hybrids") {
    return (
      <img
        src="/images/inverter-product.png"
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
    );
  }
  
  // Batteries: Premium Technical CAD/SVG representation
  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-950 to-slate-900 flex flex-col items-center justify-center p-6 relative overflow-hidden transition-all duration-700 group-hover:from-slate-900 group-hover:to-slate-800">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      {/* Circuit Traces */}
      <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 0,20 H 60 L 80,40 V 100" fill="none" stroke="#7CB05D" strokeWidth="1" strokeDasharray="4 2" />
        <path d="M 200,120 H 140 L 120,100 V 20" fill="none" stroke="#2B3990" strokeWidth="1" strokeDasharray="4 2" />
      </svg>
      
      {/* Sleek Battery Body */}
      <div className="w-20 h-28 border-2 border-brand-green/30 bg-black/40 rounded-lg p-2.5 flex flex-col justify-between relative shadow-inner z-10">
        {/* Battery Cap */}
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-2 bg-brand-green/30 rounded-t-sm"></div>
        
        {/* Connection Terminals */}
        <div className="flex justify-between -mt-1 px-1">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse"></span>
        </div>
        
        {/* LED Bars */}
        <div className="flex flex-col-reverse gap-1.5 flex-grow justify-end pt-3">
          <div className="h-1.5 w-full rounded bg-brand-green/80 shadow-[0_0_8px_#7CB05D] animate-pulse"></div>
          <div className="h-1.5 w-full rounded bg-brand-green/70"></div>
          <div className="h-1.5 w-full rounded bg-brand-green/60"></div>
          <div className="h-1.5 w-full rounded bg-brand-green/45"></div>
          <div className="h-1.5 w-full rounded bg-brand-green/20"></div>
        </div>

        {/* Tech Label */}
        <div className="border-t border-brand-green/20 pt-1.5 flex flex-col items-center">
          <span className="text-[6px] font-bold text-brand-green tracking-widest uppercase">LI-ION CELL</span>
          <span className="text-[5px] font-mono text-slate-400">48V 100AH</span>
        </div>
      </div>
      
      <div className="mt-3 text-[8px] font-bold text-slate-400 font-mono z-10 flex gap-2">
        <span className="text-brand-green">SYSTEM ACTIVE</span>
        <span className="opacity-50">|</span>
        <span>TEMP: 26°C</span>
      </div>
    </div>
  );
};

export function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const navigate = useNavigate();

  const categories = ["All", "Panels", "Inverters", "Hybrids", "Batteries"];

  const filteredProducts = selectedCategory === "All"
    ? productsList
    : productsList.filter(p => p.type === selectedCategory);

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
              <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-brand-dark tracking-tight">Products From A2Z Engineering</h1>
              <p className="text-base text-slate-600 leading-relaxed max-w-4xl italic border-l-4 border-brand-blue pl-6 py-1">
                “Discover an array of cutting-edge products meticulously crafted and utilized by A2Z Engineering to meet the diverse needs of modern industries.”
              </p>
           </div>
        </div>
      </section>

      {/* Primary Products Interface */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full flex-grow">
        
        {/* Category Filters - Sleek, Flat Professional Buttons */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-md border transition-all duration-200 outline-none ${
                selectedCategory === cat
                  ? 'bg-brand-dark text-white border-brand-dark shadow-sm'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              {cat === "All" ? "All Components" : cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((item, i) => (
             <div key={i} className="bg-white border border-slate-100 rounded-lg p-6 hover:shadow-md transition-all group flex flex-col">
                <div className="aspect-[4/3] bg-slate-50 rounded-md mb-8 flex items-center justify-center border border-slate-100 overflow-hidden relative">
                  <ProductVisual type={item.type} title={item.title} />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm border border-slate-100 text-brand-dark text-[10px] font-bold px-3 py-1 rounded-full shadow-sm z-10">
                    {item.type}
                  </div>
                </div>
                
                <p className="text-[10px] font-bold text-brand-green uppercase tracking-widest mb-2">{item.brand}</p>
                <h3 className="text-base font-bold text-slate-900 mb-4 group-hover:text-brand-blue transition-colors tracking-tight leading-snug">{item.title}</h3>
                
                <div className="flex-grow"></div>
                
                <button 
                  onClick={() => navigate(`/products/${item.id}`)}
                  className="text-xs border-t border-slate-100 pt-6 mt-6 w-full text-left text-brand-dark font-bold uppercase tracking-wider hover:text-brand-blue self-start transition-colors flex justify-between items-center group-hover:border-brand-lightblue/20 outline-none"
                >
                  <span>View More</span>
                  <span className="text-brand-lightblue group-hover:translate-x-1 transition-transform">→</span>
                </button>
             </div>
          ))}
        </div>
      </section>

      {/* Product Origin Section */}
      <section className="bg-slate-50 py-16 border-t border-slate-100">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-6">Our Commitment to Quality</h3>
            <p className="text-slate-600 leading-relaxed text-base italic">
              We exclusively source and deploy products from global leaders in solar technology. Every component in an A2Z Engineering installation—from panels to battery storage—is chosen for its durability, efficiency, and industrial-grade performance.
            </p>
         </div>
      </section>

    </div>
  );
}
