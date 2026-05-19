import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, ShieldCheck, Cpu, Globe, CheckCircle2, ChevronRight } from 'lucide-react';
import { productDetailsMap, productsList } from '../data/productDetails';

// Dedicated visual rendering for individual product pages
const DetailVisual = ({ type }: { type: string }) => {
  if (type === "Panels") {
    return (
      <div className="w-full aspect-[4/3] rounded-xl overflow-hidden border border-slate-100 relative group shadow-md bg-slate-50">
        <img
          src="/images/solar-panel-product.png"
          alt="Monocrystalline Solar Panel Visual"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent"></div>
      </div>
    );
  }
  if (type === "Inverters" || type === "Hybrids") {
    return (
      <div className="w-full aspect-[4/3] rounded-xl overflow-hidden border border-slate-100 relative group shadow-md bg-slate-50">
        <img
          src="/images/inverter-product.png"
          alt="Smart String Inverter Visual"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent"></div>
      </div>
    );
  }

  // Batteries: High-Fidelity Animated Vector Panel
  return (
    <div className="w-full aspect-[4/3] rounded-xl bg-gradient-to-br from-slate-950 to-slate-900 border border-slate-800 flex flex-col items-center justify-center p-8 relative overflow-hidden shadow-lg group">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
      
      {/* Laser Circuits */}
      <svg className="absolute inset-0 w-full h-full opacity-35 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 0,40 H 120 L 160,80 V 200" fill="none" stroke="#7CB05D" strokeWidth="1.5" strokeDasharray="6 3" />
        <path d="M 400,240 H 280 L 240,200 V 40" fill="none" stroke="#2B3990" strokeWidth="1.5" strokeDasharray="6 3" />
      </svg>
      
      {/* 3D Glassmorphism Storage Rack */}
      <div className="w-32 h-44 border-2 border-brand-green/30 bg-black/60 rounded-xl p-4 flex flex-col justify-between relative shadow-[0_0_30px_rgba(124,176,93,0.15)] z-10 transition-transform duration-700 group-hover:scale-105">
        <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-12 h-2.5 bg-brand-green/40 rounded-t-sm"></div>
        
        {/* Terminal Ports */}
        <div className="flex justify-between -mt-2 px-1">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_#ef4444]"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-brand-blue animate-pulse shadow-[0_0_8px_#2B3990]"></span>
        </div>
        
        {/* LED Stack indicator */}
        <div className="flex flex-col-reverse gap-2 flex-grow justify-end pt-5">
          <div className="h-2 w-full rounded bg-brand-green/90 shadow-[0_0_10px_#7CB05D] animate-pulse"></div>
          <div className="h-2 w-full rounded bg-brand-green/80 shadow-[0_0_8px_#7CB05D]"></div>
          <div className="h-2 w-full rounded bg-brand-green/70"></div>
          <div className="h-2 w-full rounded bg-brand-green/50"></div>
          <div className="h-2 w-full rounded bg-brand-green/30"></div>
        </div>

        {/* Tech Panel Label */}
        <div className="border-t border-brand-green/20 pt-2.5 flex flex-col items-center">
          <span className="text-[7px] font-bold text-brand-green tracking-widest uppercase">ESS STACK MODULE</span>
          <span className="text-[6px] font-mono text-slate-400 mt-0.5">ACTIVE BALANCE</span>
        </div>
      </div>
      
      <div className="mt-4 text-[9px] font-bold text-slate-300 font-mono z-10 flex gap-3">
        <span className="text-brand-green flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-ping"></span>
          SYS_ONLINE
        </span>
        <span className="opacity-45">|</span>
        <span>TEMP: 24.8°C</span>
      </div>
    </div>
  );
};

export function ProductDetails() {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();

  // Find current product details
  const productMeta = productsList.find((p) => p.id === productId);
  const activeDetails = productId ? productDetailsMap[productId] : null;

  if (!productMeta || !activeDetails) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center">
        <div className="max-w-md bg-white border border-slate-100 p-8 rounded-xl shadow-md">
          <span className="text-4xl">⚠️</span>
          <h2 className="text-xl font-extrabold text-slate-900 mt-4 mb-2">Component Not Found</h2>
          <p className="text-sm text-slate-600 mb-6">
            The requested product details page could not be located. It may have been moved or updated.
          </p>
          <Link
            to="/products"
            className="inline-flex h-11 items-center justify-center px-6 bg-brand-dark hover:bg-brand-blue text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors"
          >
            Return to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      
      {/* Sleek Breadcrumb / Back Navigation */}
      <div className="bg-slate-50 border-b border-slate-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <button
            onClick={() => navigate('/products')}
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-brand-dark uppercase tracking-widest transition-colors outline-none"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Products
          </button>
          
          <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-500">
            <Link to="/products" className="hover:text-brand-dark transition-colors">Products</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-400 capitalize">{productMeta.type}</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="font-bold text-slate-700 truncate max-w-[150px]">{productMeta.title}</span>
          </div>
        </div>
      </div>

      {/* Main Details Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full flex-grow">
        
        {/* Engineering Header Dashboard */}
        <div className="border-b border-slate-100 pb-8 mb-12">
          <span className="text-[10px] font-bold text-brand-blue uppercase tracking-[0.25em] block mb-2">
            Procured Equipment Specification
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight leading-tight mb-4">
            {productMeta.title}
          </h1>
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center gap-2 bg-slate-50 border border-slate-100 px-3.5 py-1.5 rounded-lg text-xs text-slate-600">
              <Cpu className="w-3.5 h-3.5 text-brand-green" />
              <span className="font-bold">Manufacturer: {productMeta.brand}</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-50 border border-slate-100 px-3.5 py-1.5 rounded-lg text-xs text-slate-600">
              <Globe className="w-3.5 h-3.5 text-brand-blue" />
              <span>Country of Manufacture: <strong>{activeDetails.country}</strong></span>
            </div>
          </div>
        </div>

        {/* Dynamic Details Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Visual Asset Display */}
          <div className="lg:col-span-5 space-y-6">
            <DetailVisual type={productMeta.type} />
            
            {/* Deployment Advantage Block */}
            <div className="bg-slate-50 border border-slate-100 rounded-xl p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest leading-none mb-1">
                    A2Z Integration Standards
                  </h4>
                  <span className="text-[10px] text-slate-500 uppercase font-mono">deployment safety certified</span>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {activeDetails.advantage}
              </p>
            </div>
          </div>

          {/* Right Column: Specification Sheets */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Engineering Overview */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-brand-dark uppercase tracking-wider border-l-4 border-brand-green pl-4 py-0.5">
                Technical Overview
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {activeDetails.description}
              </p>
            </div>

            {/* Procured Models Specifications Registry */}
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                <h3 className="text-sm font-bold text-brand-dark uppercase tracking-wider border-l-4 border-brand-blue pl-4 py-0.5">
                  Procured & Installed Model Registry
                </h3>
                <span className="text-[10px] font-bold text-slate-500 uppercase font-mono bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
                  {activeDetails.models.length} Series Listed
                </span>
              </div>
              
              <div className="grid gap-3.5">
                {activeDetails.models.map((modelLine, idx) => (
                  <div 
                    key={idx} 
                    className="bg-slate-50 border border-slate-100 rounded-lg p-5 hover:border-brand-lightblue/30 hover:bg-slate-50/50 transition-all flex items-start gap-4"
                  >
                    <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-slate-800 leading-relaxed font-mono tracking-tight">
                        {modelLine}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Official Site Outbound link */}
              <div className="flex justify-end pt-2">
                <a
                  href={activeDetails.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-slate-900 hover:bg-brand-blue text-white text-[10px] font-bold px-5 py-3 rounded-lg uppercase tracking-wider shadow-md hover:shadow-lg transition-all outline-none"
                >
                  Visit Official Manufacturer Site <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Lead Capture Banner */}
            <div className="border border-slate-100 rounded-xl p-6 md:p-8 bg-gradient-to-br from-slate-50 to-white flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 shadow-sm">
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
                  Integrate this hardware in your scope?
                </h4>
                <p className="text-xs text-slate-500">
                  Request custom electrical blueprint engineering, CAD bracket design, and logistics sourcing.
                </p>
              </div>
              <button
                onClick={() => navigate('/contact')}
                className="h-10 px-6 bg-brand-green hover:bg-brand-dark text-white text-[10px] font-bold uppercase tracking-widest rounded-lg shadow-sm hover:shadow-md transition-all outline-none shrink-0"
              >
                Inquire Integration
              </button>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
