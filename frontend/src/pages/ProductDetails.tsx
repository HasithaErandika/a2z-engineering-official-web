import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  ExternalLink,
  Globe,
  Layers,
  Cpu,
  BadgeCheck,
  CalendarCheck,
} from 'lucide-react';
import { productDetailsMap, productsList } from '../data/productDetails';
import { PageHero } from '../components/patterns/PageHero';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { ButtonLink } from '../components/ui/ButtonLink';

function DetailVisual({ image, title }: { image: string; title: string }) {
  return (
    <div className="w-full aspect-[4/3] rounded-[var(--radius-lg)] overflow-hidden border border-slate-200 shadow-[var(--shadow-card)] bg-slate-50">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}

export function ProductDetails() {
  const { productId } = useParams<{ productId: string }>();

  const productMeta = productsList.find((p) => p.id === productId);
  const activeDetails = productId ? productDetailsMap[productId] : null;

  if (!productMeta || !activeDetails) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center">
        <Card className="max-w-md p-8">
          <h2 className="text-xl font-extrabold text-slate-950 mb-2">Component not found</h2>
          <p className="text-sm text-slate-600 mb-6">
            The requested product details page could not be located.
          </p>
          <ButtonLink to="/products" variant="primary">
            Return to products
          </ButtonLink>
        </Card>
      </div>
    );
  }

  const headerBgImage = productMeta.image;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="relative">
        <PageHero
          eyebrow={`${productMeta.type} specification`}
          title={productMeta.title}
          description={`${productMeta.brand} · Origin: ${activeDetails.country}`}
          bgImage={headerBgImage}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 absolute top-6 left-0 right-0 z-30">
          <Link
            to="/products"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-white/90 hover:text-white uppercase tracking-wider bg-white/10 hover:bg-white/20 px-3 py-2 rounded-full transition-colors focus-visible:ring-2 focus-visible:ring-white"
          >
            <ArrowLeft className="w-3.5 h-3.5" aria-hidden /> Back to catalog
          </Link>
        </div>
      </div>

      <section className="section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <DetailVisual image={productMeta.image} title={productMeta.title} />

            <Card variant="muted" className="p-6 space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
                <BadgeCheck className="w-5 h-5 text-brand-green shrink-0" aria-hidden />
                <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider">
                  Engineering assessment
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-slate-600">
                A2Z Engineering vets all imported items for grid compatibility, temperature
                coefficient suitability, and Sri Lankan seaside weather resilience before deployment.
              </p>
              <Card className="p-4">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  Core field advantage
                </span>
                <span className="font-bold text-slate-800 text-sm leading-snug block">
                  {activeDetails.advantage}
                </span>
              </Card>
              <div className="flex flex-wrap gap-3 text-xs font-mono font-bold text-slate-500">
                <span className="flex items-center gap-1">
                  <Cpu className="w-3.5 h-3.5 text-brand-green" aria-hidden /> {productMeta.brand}
                </span>
                <span className="flex items-center gap-1">
                  <Globe className="w-3.5 h-3.5 text-brand-blue" aria-hidden /> {activeDetails.country}
                </span>
              </div>
            </Card>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <h3 className="text-sm font-extrabold text-slate-950 uppercase tracking-wider border-b border-slate-100 pb-2">
                Product overview
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">{activeDetails.description}</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <h3 className="text-sm font-extrabold text-slate-950 uppercase tracking-wider">
                  Model series and capacities
                </h3>
                <Badge variant="muted">{activeDetails.models.length} series</Badge>
              </div>
              <div className="grid gap-3">
                {activeDetails.models.map((modelLine, idx) => (
                  <Card key={idx} className="p-5 flex items-start gap-4">
                    <div className="w-8 h-8 bg-slate-50 border border-slate-100 rounded-[var(--radius-md)] flex items-center justify-center shrink-0">
                      <Layers className="w-4 h-4 text-brand-blue" aria-hidden />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-slate-400 uppercase block">
                        Configuration {String(idx + 1).padStart(2, '0')}
                      </span>
                      <p className="text-sm font-bold text-slate-800 leading-relaxed mt-1">
                        {modelLine}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <Card variant="muted" className="p-6 flex flex-col sm:flex-row gap-6 sm:items-center sm:justify-between">
              <div className="space-y-2">
                <Badge variant="default" className="gap-1">
                  <CalendarCheck className="w-3.5 h-3.5" aria-hidden /> Project deployment
                </Badge>
                <h4 className="text-sm font-extrabold text-slate-900">
                  Need this component in your installation?
                </h4>
                <p className="text-sm text-slate-500">
                  Contact our engineering desk for single-line diagrams, structural analysis, and
                  utility interconnection approvals.
                </p>
              </div>
              <div className="flex gap-2 shrink-0">
                <a
                  href={activeDetails.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 items-center justify-center gap-1.5 rounded-[var(--radius-md)] border border-slate-200 bg-white px-4 text-xs font-bold uppercase text-slate-700 hover:bg-slate-100 transition-colors focus-visible:ring-2 focus-visible:ring-brand-blue"
                >
                  Catalog <ExternalLink className="w-3.5 h-3.5" aria-hidden />
                </a>
                <ButtonLink to="/contact?inquiry=product-spec" variant="accent" size="md">
                  Inquire
                </ButtonLink>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
