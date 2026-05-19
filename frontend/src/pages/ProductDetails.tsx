import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, ExternalLink } from 'lucide-react';
import { productDetailsMap, productsList } from '../data/productDetails';

const DetailVisual = ({ type, title }: { type: string; title: string }) => {
  const image = type === 'Panels' ? '/images/solar-panel-product.png' : '/images/inverter-product.png';
  return (
    <div className="w-full aspect-[4/3] rounded-lg overflow-hidden border border-slate-200 bg-slate-50">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
  );
};

export function ProductDetails() {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const productMeta = productsList.find((p) => p.id === productId);
  const activeDetails = productId ? productDetailsMap[productId] : null;

  if (!productMeta || !activeDetails) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center">
        <div className="max-w-md bg-white border border-slate-200 p-8 rounded-lg">
          <h2 className="text-xl font-extrabold text-slate-950 mb-2">Component not found</h2>
          <p className="text-sm text-slate-600 mb-6">The requested product details page could not be located.</p>
          <Link to="/products" className="inline-flex h-11 items-center justify-center px-6 bg-brand-dark hover:bg-brand-dark text-white text-sm font-bold rounded-md transition-colors">
            Return to products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <div className="bg-slate-50 border-b border-slate-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button onClick={() => navigate('/products')} className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-brand-dark transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to products
          </button>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full flex-grow">
        <div className="max-w-3xl mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-dark mb-4">Product details</p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight mb-4">{productMeta.title}</h1>
          <p className="text-sm text-slate-600 leading-relaxed">Manufacturer: <span className="font-bold text-slate-800">{productMeta.brand}</span> | Country: <span className="font-bold text-slate-800">{activeDetails.country}</span></p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <DetailVisual type={productMeta.type} title={productMeta.title} />
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
              <h2 className="text-base font-bold text-slate-950 mb-3">Why we use this component</h2>
              <p className="text-sm text-slate-600 leading-relaxed">{activeDetails.advantage}</p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <div>
              <h2 className="text-xl font-extrabold text-slate-950 tracking-tight mb-3">Overview</h2>
              <p className="text-slate-600 leading-relaxed text-sm">{activeDetails.description}</p>
            </div>

            <div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-slate-200 pb-3 mb-5">
                <h2 className="text-xl font-extrabold text-slate-950 tracking-tight">Model series</h2>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{activeDetails.models.length} listed</span>
              </div>
              <div className="grid gap-3">
                {activeDetails.models.map((modelLine, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-200 rounded-lg p-4 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700 leading-relaxed">{modelLine}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 border border-slate-200 rounded-lg p-6 bg-white sm:items-center sm:justify-between">
              <div>
                <h2 className="text-base font-bold text-slate-950">Need this in a project?</h2>
                <p className="text-sm text-slate-600 mt-1">Contact us for product suitability and installation guidance.</p>
              </div>
              <div className="flex gap-3">
                <a href={activeDetails.officialUrl} target="_blank" rel="noopener noreferrer" className="inline-flex h-10 items-center gap-2 rounded-md border border-slate-200 px-4 text-sm font-bold text-slate-700 hover:bg-slate-50">
                  Manufacturer <ExternalLink className="w-4 h-4" />
                </a>
                <button onClick={() => navigate('/contact')} className="h-10 rounded-md bg-brand-green px-5 text-sm font-bold text-white hover:bg-brand-dark transition-colors">
                  Inquire
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
