import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ArrowRight, Globe, ShieldCheck, BadgeHelp, Star } from 'lucide-react';


import { PageHero } from '../components/patterns/PageHero';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { productsList, productDetailsMap, sortProductsTopSellingFirst } from '../data/productDetails';
import { WhatA2zProducts } from '../components/products/WhatA2zProducts';
import { images } from '../data/site';

function ProductVisual({ image, title }: { image: string; title: string }) {
  return (
    <div className="w-full h-full relative overflow-hidden bg-slate-50">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors duration-300" />
    </div>
  );
}

export function Products() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Panels', 'Inverters', 'Hybrids', 'Batteries'];

  const filteredProducts = sortProductsTopSellingFirst(
    productsList.filter((product) => {
      const matchesCategory = selectedCategory === 'All' || product.type === selectedCategory;
      const details = productDetailsMap[product.id];
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        !q ||
        product.brand.toLowerCase().includes(q) ||
        product.title.toLowerCase().includes(q) ||
        details?.advantage.toLowerCase().includes(q) ||
        details?.description.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    })
  );

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <PageHero
        eyebrow="Products"
        title="Tier-1 engineering components"
        description="A2Z Engineering sources solar PV modules, grid-tied inverters, and battery storage modules optimized for tropical climates and long product lifetimes."
        bgImage={images.solarPanelProduct}
      />

      <section className="section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow space-y-10">
        <WhatA2zProducts />

        <Card variant="muted" className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                aria-pressed={selectedCategory === cat}
                className={`px-4 py-2.5 min-h-[44px] text-xs font-bold rounded-[var(--radius-md)] border uppercase tracking-wider transition-colors focus-visible:ring-2 focus-visible:ring-brand-blue ${
                  selectedCategory === cat
                    ? 'bg-slate-900 border-slate-900 text-white'
                    : 'bg-white text-slate-500 border-slate-200 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                {cat === 'All' ? 'All components' : cat}
              </button>
            ))}
          </div>

          <div className="relative max-w-sm w-full">
            <label htmlFor="product-search" className="sr-only">
              Search components
            </label>
            <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-slate-400">
              <Search className="w-4 h-4" aria-hidden />
            </span>
            <input
              id="product-search"
              type="search"
              placeholder="Search components or brands…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-[var(--radius-md)] py-2.5 pl-10 pr-4 text-sm placeholder-slate-400 focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/30"
            />
          </div>
        </Card>

        {filteredProducts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((item) => {
              const details = productDetailsMap[item.id];
              return (
                <Card
                  key={item.id}
                  interactive
                  className="overflow-hidden flex flex-col perfect-shadow border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-blue/40 group"
                >
                  <div className="aspect-[16/10] bg-slate-50 overflow-hidden relative">
                    <ProductVisual image={item.image} title={item.title} />
                    {details && (
                      <div className="absolute top-4 left-4 z-20 flex flex-wrap items-center gap-2 max-w-[calc(100%-5rem)]">
                        {item.topSelling && (
                          <Badge variant="topSelling" className="px-2.5 py-1 text-[10px] tracking-widest">
                            <Star className="w-3 h-3 fill-amber-100 text-amber-50 mr-1" aria-hidden />
                            Top selling
                          </Badge>
                        )}
                        <span className="inline-flex items-center gap-1 bg-white/95 border border-slate-100 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase text-slate-500 shadow-sm backdrop-blur-sm">
                          <Globe className="w-3 h-3 text-brand-blue shrink-0" aria-hidden />
                          {details.country}
                        </span>
                      </div>
                    )}
                    <Badge variant="accent" className="absolute bottom-4 right-4 z-20">
                      {item.type}
                    </Badge>
                  </div>

                  <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                        {item.brand}
                      </span>
                      <h3 className="text-base font-extrabold text-slate-900 tracking-tight">{item.title}</h3>

                      {details && (
                        <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">
                          {details.description}
                        </p>
                      )}
                    </div>

                    {details && (
                      <div className="pt-3 border-t border-slate-100 space-y-2 text-xs font-semibold text-brand-dark">
                        <div className="flex gap-1.5">
                          <ShieldCheck className="w-3.5 h-3.5 text-brand-green shrink-0" aria-hidden />
                          <span>{details.advantage.split(',')[0]}</span>
                        </div>
                      </div>
                    )}

                    <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-mono text-slate-400 font-bold uppercase">
                        {details?.models ? `${details.models.length} series` : 'Direct integration'}
                      </span>
                      <div className="flex items-center gap-3">
                        {details && (
                          <a
                            href={details.officialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1 text-[10px] font-bold text-slate-500 uppercase tracking-wider hover:text-brand-blue min-h-[44px] focus-visible:ring-2 focus-visible:ring-brand-blue rounded-sm"
                          >
                            Catalog <Globe className="w-3 h-3" aria-hidden />
                          </a>
                        )}
                        <button
                          type="button"
                          onClick={() => navigate(`/products/${item.id}`)}
                          className="inline-flex items-center gap-1 text-xs font-bold text-brand-blue uppercase tracking-wider min-h-[44px] focus-visible:ring-2 focus-visible:ring-brand-blue rounded-sm"
                        >
                          View more <ArrowRight className="w-3.5 h-3.5" aria-hidden />
                        </button>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        ) : (
          <Card variant="muted" className="text-center py-16 space-y-4">
            <BadgeHelp className="w-8 h-8 text-slate-400 mx-auto" aria-hidden />
            <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider">
              No matching components
            </h3>
            <p className="text-sm text-slate-500 max-w-sm mx-auto">
              No hardware models match your search under the active filters.
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
            >
              Reset filters
            </Button>
          </Card>
        )}
      </section>
    </div>
  );
}
