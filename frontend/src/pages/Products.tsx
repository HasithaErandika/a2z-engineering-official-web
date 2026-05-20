import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Search, 
  ArrowRight, 
  Globe, 
  ShieldCheck, 
  Layers, 
  BadgeHelp 
} from 'lucide-react';
import { PageHeader } from '../components/shared/PageHeader';
import { productsList, productDetailsMap } from '../data/productDetails';

const ProductVisual = ({ type, title }: { type: string; title: string }) => {
  const image = type === 'Panels' ? '/images/solar-panel-product.png' : '/images/inverter-product.png';
  return (
    <div className="w-full h-full relative overflow-hidden bg-slate-50">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
      />
      {/* Visual Overlay Wash */}
      <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-slate-900/0 transition-colors duration-300"></div>
    </div>
  );
};

export function Products() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Panels', 'Inverters', 'Hybrids', 'Batteries'];

  // Filter products by category AND search query
  const filteredProducts = productsList.filter((product) => {
    const matchesCategory = selectedCategory === 'All' || product.type === selectedCategory;
    
    const details = productDetailsMap[product.id];
    const brandMatch = product.brand.toLowerCase().includes(searchQuery.toLowerCase());
    const titleMatch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    const advantageMatch = details?.advantage.toLowerCase().includes(searchQuery.toLowerCase()) || false;
    const descMatch = details?.description.toLowerCase().includes(searchQuery.toLowerCase()) || false;
    const matchesSearch = brandMatch || titleMatch || advantageMatch || descMatch;
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <PageHeader
        eyebrow="Products"
        title="Tier-1 Engineering Components"
        description="A2Z Engineering sources solar PV modules, grid-tied inverters, and battery storage modules specifically optimized for tropical climates and long product lifetimes."
        bgImage="/images/solar-panel-product.png"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full flex-grow space-y-10">
        
        {/* Search and Category Pill Filters Control Panel */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 bg-slate-50 border border-slate-200/50 p-6 rounded-2xl">
          
          {/* Category Selector Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2.5 text-xs font-bold rounded-lg border uppercase tracking-wider outline-none transition-all ${
                  selectedCategory === cat
                    ? 'bg-slate-900 border-slate-900 text-white shadow-sm'
                    : 'bg-white text-slate-500 border-slate-200 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                {cat === 'All' ? 'All Components' : cat}
              </button>
            ))}
          </div>

          {/* Sizing Search Input field */}
          <div className="relative max-w-sm w-full">
            <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-slate-400">
              <Search className="w-4 h-4" />
            </span>
            <input
              type="text"
              placeholder="Search components or brands..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-slate-250 rounded-lg py-2.5 pl-10 pr-4 text-xs placeholder-slate-400 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green shadow-sm"
            />
          </div>

        </div>

        {/* Dynamic Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((item) => {
              const details = productDetailsMap[item.id];
              return (
                <article 
                  key={item.id} 
                  className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-slate-100/50 hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between hover:border-brand-green/35"
                >
                  {/* Aspect Graphic Thumbnail */}
                  <div className="aspect-[16/10] bg-slate-50 overflow-hidden relative">
                    <ProductVisual type={item.type} title={item.title} />
                    
                    {/* Country of origin badge */}
                    {details && (
                      <span className="absolute top-4 left-4 z-20 inline-flex items-center gap-1 bg-white/95 border border-slate-100 rounded-full px-2.5 py-1 text-[8px] font-black uppercase tracking-wider text-slate-500 shadow-sm">
                        <Globe className="w-3 h-3 text-brand-blue" /> {details.country}
                      </span>
                    )}

                    {/* Component Type tag */}
                    <span className="absolute bottom-4 right-4 z-20 inline-block px-2.5 py-1 text-[8px] font-black uppercase tracking-widest rounded-full bg-brand-green text-white shadow-sm">
                      {item.type}
                    </span>
                  </div>

                  {/* Component Details description block */}
                  <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                    
                    <div className="space-y-3">
                      <div>
                        <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest block">
                          Sourced Manufacturer
                        </span>
                        <span className="text-[10px] font-black text-slate-800 uppercase tracking-wider block mt-0.5">
                          {item.brand}
                        </span>
                      </div>

                      <h3 className="text-base font-black text-slate-900 tracking-tight leading-snug">
                        {item.title}
                      </h3>

                      {details && (
                        <p className="text-slate-500 text-[11px] leading-relaxed line-clamp-3">
                          {details.description}
                        </p>
                      )}
                    </div>

                    {/* Advantage checklist badges */}
                    {details && (
                      <div className="pt-3 border-t border-slate-50 space-y-2 select-none">
                        <div className="flex gap-1.5 text-[9px] font-semibold text-brand-dark leading-relaxed">
                          <ShieldCheck className="w-3.5 h-3.5 text-brand-green shrink-0 mt-0.5" />
                          <span>{details.advantage.split(',')[0]}</span>
                        </div>
                        {details.advantage.split(',')[1] && (
                          <div className="flex gap-1.5 text-[9px] font-semibold text-brand-dark leading-relaxed">
                            <Layers className="w-3.5 h-3.5 text-brand-blue shrink-0 mt-0.5" />
                            <span>{details.advantage.split(',')[1].trim()}</span>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Action navigation trigger */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[9px] font-mono text-slate-400 font-bold uppercase tracking-wider">
                        {details?.models ? `${details.models.length} Model Series` : 'Direct Integration'}
                      </span>
                      
                      <button 
                        onClick={() => navigate(`/products/${item.id}`)} 
                        className="inline-flex items-center gap-1 text-[10px] font-bold text-brand-blue uppercase tracking-widest outline-none group-hover:translate-x-0.5 transition-transform"
                      >
                        <span>View More</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20 border border-slate-150 rounded-2xl bg-slate-50 space-y-3">
            <div className="w-10 h-10 bg-slate-100 border border-slate-200 rounded-full flex items-center justify-center mx-auto">
              <BadgeHelp className="w-5 h-5 text-slate-400" />
            </div>
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider">
              No matching components found
            </h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
              We couldn't find any hardware models matching "{searchQuery}" under the active filters.
            </p>
            <div className="pt-2">
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                className="text-[10px] font-bold text-brand-blue hover:text-brand-dark uppercase tracking-widest border border-brand-blue/20 bg-white px-4 py-2 rounded-lg"
              >
                Reset Sizing Filters
              </button>
            </div>
          </div>
        )}

      </section>
    </div>
  );
}
