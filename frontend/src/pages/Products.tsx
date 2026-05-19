import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageHeader } from '../components/shared/PageHeader';
import { productsList } from '../data/productDetails';

const ProductVisual = ({ type, title }: { type: string; title: string }) => {
  const image = type === 'Panels' ? '/images/solar-panel-product.png' : '/images/inverter-product.png';
  return <img src={image} alt={title} className="w-full h-full object-cover" />;
};

export function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const navigate = useNavigate();
  const categories = ['All', 'Panels', 'Inverters', 'Hybrids', 'Batteries'];
  const filteredProducts = selectedCategory === 'All' ? productsList : productsList.filter(p => p.type === selectedCategory);

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <PageHeader
        eyebrow="Products"
        title="Solar components we work with"
        description="A2Z Engineering works with recognized panel, inverter and battery brands selected for project suitability, warranty coverage and long-term serviceability."
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full flex-grow">
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-sm font-bold rounded-md border transition-colors ${
                selectedCategory === cat
                  ? 'bg-brand-dark text-white border-brand-dark'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:text-slate-950'
              }`}
            >
              {cat === 'All' ? 'All components' : cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((item) => (
            <article key={item.id} className="bg-white border border-slate-200 rounded-lg overflow-hidden flex flex-col">
              <div className="aspect-[4/3] bg-slate-50 overflow-hidden">
                <ProductVisual type={item.type} title={item.title} />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">{item.type}</p>
                <h3 className="text-base font-bold text-slate-950 mb-3 leading-snug">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">{item.brand}</p>
                <button onClick={() => navigate(`/products/${item.id}`)} className="mt-auto text-left text-sm font-bold text-brand-dark hover:text-brand-dark transition-colors">
                  View details
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
