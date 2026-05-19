import { useParams, useNavigate, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  ExternalLink, 
  Globe, 
  Layers, 
  Cpu, 
  BadgeCheck, 
  CalendarCheck 
} from 'lucide-react';
import { productDetailsMap, productsList } from '../data/productDetails';

const DetailVisual = ({ type, title }: { type: string; title: string }) => {
  const image = type === 'Panels' ? '/images/solar-panel-product.png' : '/images/inverter-product.png';
  return (
    <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden border border-slate-150 shadow-md relative group bg-slate-50">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500" 
      />
      <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-slate-900/0 transition-colors"></div>
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
        <div className="max-w-md bg-white border border-slate-200 p-8 rounded-2xl shadow-sm">
          <h2 className="text-xl font-extrabold text-slate-950 mb-2">Component Not Found</h2>
          <p className="text-sm text-slate-600 mb-6">The requested product details page could not be located.</p>
          <Link to="/products" className="inline-flex h-11 items-center justify-center px-6 bg-slate-900 hover:bg-brand-blue text-white text-xs font-bold uppercase tracking-widest rounded-lg transition-colors">
            Return to Products
          </Link>
        </div>
      </div>
    );
  }

  // Determine dynamic background image for header based on product type
  const headerBgImage = 
    productMeta.type === 'Panels' 
      ? '/images/solar-panel-product.png' 
      : productMeta.type === 'Batteries'
      ? '/images/facility-preview.png'
      : '/images/inverter-product.png';

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      
      {/* 1. Premium Panoramic Component Header */}
      <div className="relative bg-slate-950 py-20 overflow-hidden flex items-center min-h-[300px]">
        {/* Background visual image wash */}
        <div className="absolute inset-0 z-0">
          <img 
            src={headerBgImage} 
            alt={productMeta.title} 
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-brand-blue/30 z-10"></div>
        </div>

        {/* Back Link and Header Text */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
          <div className="space-y-4">
            
            <button 
              onClick={() => navigate('/products')} 
              className="inline-flex items-center gap-1.5 text-[9px] font-bold text-slate-300 hover:text-white uppercase tracking-widest outline-none bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full transition-all"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Catalog
            </button>

            <div className="max-w-3xl space-y-3 pt-2">
              <span className="text-[10px] font-bold text-brand-green uppercase tracking-[0.25em] block">
                {productMeta.type} SPECIFICATION SHEET
              </span>
              
              <h1 className="text-2xl md:text-4xl font-black text-white tracking-tight leading-tight">
                {productMeta.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-slate-300 text-[10px] font-mono font-bold uppercase tracking-wider pt-1">
                <span className="flex items-center gap-1">
                  <Cpu className="w-3.5 h-3.5 text-brand-green" /> {productMeta.brand}
                </span>
                <span className="text-slate-500">|</span>
                <span className="flex items-center gap-1">
                  <Globe className="w-3.5 h-3.5 text-brand-blue" /> Origin: {activeDetails.country}
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 2. Specification Sheet Body */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full flex-grow">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Visuals & Sourcing Guidelines */}
          <div className="lg:col-span-5 space-y-6">
            <DetailVisual type={productMeta.type} title={productMeta.title} />
            
            {/* Why We Use this component panel */}
            <div className="bg-slate-50 border border-slate-200/60 rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-200/50 pb-3">
                <BadgeCheck className="w-5 h-5 text-brand-green shrink-0" />
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider">
                  Engineering Assessment
                </h3>
              </div>
              
              <div className="space-y-4 text-xs leading-relaxed text-slate-650">
                <p>
                  A2Z Engineering vets all imported items for grid compatibility, temperature coefficient suitability, and Sri Lankan seaside weather resilience before deployment.
                </p>
                <div className="p-3.5 bg-white border border-slate-150 rounded-xl space-y-1.5 shadow-sm">
                  <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest block">Core Field Advantage</span>
                  <span className="font-bold text-slate-800 text-[10px] leading-tight block">{activeDetails.advantage}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Descriptions & Detailed Models Spec Grid */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Component Summary */}
            <div className="space-y-3">
              <h3 className="text-sm font-black text-slate-950 uppercase tracking-widest border-b border-slate-100 pb-2">
                Product Overview & Sizing Notes
              </h3>
              <p className="text-slate-600 leading-relaxed text-xs">
                {activeDetails.description}
              </p>
            </div>

            {/* Model Series Specification Table */}
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <h3 className="text-sm font-black text-slate-950 uppercase tracking-widest">
                  Listed Model Series & Capacities
                </h3>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest bg-slate-50 border border-slate-150 px-2.5 py-1 rounded-full">
                  {activeDetails.models.length} Series Cataloged
                </span>
              </div>

              {/* Specification Grid cards */}
              <div className="grid gap-4">
                {activeDetails.models.map((modelLine, idx) => (
                  <div 
                    key={idx} 
                    className="bg-white border border-slate-150 hover:border-slate-350 rounded-xl p-5 shadow-sm flex items-start gap-4 transition-colors group"
                  >
                    <div className="w-8 h-8 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-brand-green/5 transition-colors">
                      <Layers className="w-4 h-4 text-brand-blue group-hover:text-brand-green transition-colors shrink-0" />
                    </div>
                    
                    <div className="space-y-1 w-full">
                      <span className="text-[8px] font-mono font-bold text-slate-450 uppercase tracking-wider block">
                        Model Configuration 0{idx + 1}
                      </span>
                      <p className="text-xs font-bold text-slate-800 leading-relaxed">
                        {modelLine}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Turnkey Project Suitability CTA */}
            <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50 flex flex-col sm:flex-row gap-6 sm:items-center sm:justify-between">
              <div className="space-y-1">
                <span className="inline-flex items-center gap-1 bg-brand-blue/5 border border-brand-blue/10 px-2.5 py-1 rounded-full text-[8px] font-black text-brand-blue uppercase tracking-widest">
                  <CalendarCheck className="w-3.5 h-3.5" /> Project Deployment
                </span>
                <h4 className="text-sm font-black text-slate-900 leading-tight">
                  Need this component in your installation?
                </h4>
                <p className="text-[11px] text-slate-500 leading-normal">
                  Contact our engineering desk for custom single-line diagrams, weight distribution structural analysis, and utility interconnection safety approvals.
                </p>
              </div>

              <div className="flex gap-2.5 shrink-0 self-start sm:self-center">
                <a 
                  href={activeDetails.officialUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex h-10 items-center justify-center gap-1.5 rounded-lg border border-slate-250 bg-white px-4 text-[10px] font-bold uppercase tracking-wider text-slate-700 hover:bg-slate-100 transition-colors outline-none"
                >
                  <span>Catalog</span> <ExternalLink className="w-3.5 h-3.5 text-slate-450" />
                </a>
                
                <button 
                  onClick={() => navigate('/contact')} 
                  className="h-10 rounded-lg bg-[#4E9F3D] hover:bg-brand-dark px-5 text-[10px] font-bold uppercase tracking-widest text-white shadow-sm hover:shadow transition-colors outline-none"
                >
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
