import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, Mail, Newspaper } from 'lucide-react';
import { PageHero } from '../components/patterns/PageHero';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { SectionHeader } from '../components/patterns/SectionHeader';
import { newsArticles, getCategoryClass } from '../data/news';
import { images, site } from '../data/site';
import { cn } from '../lib/cn';

export function NewsMedia() {
  const featured = newsArticles.find((a) => a.featured) ?? newsArticles[0];
  const otherArticles = newsArticles.filter((a) => a.id !== featured.id);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <PageHero
        eyebrow="News & media"
        title="Official company updates"
        description="Stay updated with A2Z Engineering — project logs, technical service notes, and corporate announcements."
        bgImage={images.buildingOffice}
      />

      <section className="section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow space-y-12">
        <Card
          interactive
          className="overflow-hidden perfect-shadow border-slate-200 bg-white transition-all duration-300 hover:border-brand-green/45"
        >
          <div className="grid lg:grid-cols-12">
            <div className="lg:col-span-7 aspect-[16/10] lg:aspect-auto overflow-hidden bg-slate-50 relative min-h-[280px]">
              <img
                src={featured.image}
                alt=""
                className="w-full h-full object-cover"
                loading="eager"
                decoding="async"
              />
              <Badge className="absolute top-4 left-4 z-20 gap-1.5 bg-white/95 text-brand-dark">
                <Newspaper className="w-3.5 h-3.5 text-brand-green" aria-hidden /> Featured
              </Badge>
            </div>
            <div className="lg:col-span-5 p-6 lg:p-10 flex flex-col justify-between gap-6">
              <div className="space-y-4">
                <span
                  className={cn(
                    'inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full border',
                    getCategoryClass(featured.categoryVariant)
                  )}
                >
                  {featured.category}
                </span>
                <h2 className="text-xl lg:text-2xl font-extrabold text-slate-950 tracking-tight">
                  {featured.title}
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">{featured.excerpt}</p>
              </div>
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-bold">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" aria-hidden /> {featured.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" aria-hidden /> {featured.readTime}
                  </span>
                </div>
                <span className="text-brand-blue uppercase tracking-wider flex items-center gap-0.5">
                  Read <ArrowRight className="w-3.5 h-3.5" aria-hidden />
                </span>
              </div>
            </div>
          </div>
        </Card>

        <div>
          <SectionHeader title="Recent announcements" className="mb-6" />
          <div className="grid md:grid-cols-2 gap-6">
            {otherArticles.map((article) => (
              <Card
                key={article.id}
                interactive
                className="overflow-hidden flex flex-col perfect-shadow border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-green/40"
              >
                <div className="aspect-[16/9] overflow-hidden bg-slate-50 relative">
                  <img
                    src={article.image}
                    alt=""
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <span
                    className={cn(
                      'absolute top-4 left-4 z-20 inline-block px-3 py-1 text-xs font-bold uppercase rounded-full border bg-white/95',
                      getCategoryClass(article.categoryVariant)
                    )}
                  >
                    {article.category}
                  </span>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between gap-4">
                  <div className="space-y-3">
                    <h4 className="text-base font-extrabold text-slate-950 tracking-tight">
                      {article.title}
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">{article.excerpt}</p>
                  </div>
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-400">
                    <span className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" aria-hidden /> {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" aria-hidden /> {article.readTime}
                      </span>
                    </span>
                    <span className="text-brand-blue uppercase tracking-wider">Read</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 border-t border-slate-200 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <Mail className="w-8 h-8 text-brand-blue mx-auto" aria-hidden />
          <h3 className="text-xl font-extrabold text-slate-950 tracking-tight">Media inquiries</h3>
          <p className="text-sm text-slate-600 leading-relaxed max-w-lg mx-auto">
            For press assets, official statements, and interview requests, contact our media desk.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              to="/contact?inquiry=media-press"
              className="inline-flex items-center justify-center min-h-[44px] text-sm font-bold text-white bg-brand-dark hover:bg-brand-dark/90 px-5 rounded-[var(--radius-md)] transition-colors"
            >
              Media inquiry form
            </Link>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center justify-center min-h-[44px] text-sm font-mono font-bold text-slate-800 bg-white border border-slate-200 px-4 rounded-[var(--radius-md)] hover:border-brand-green transition-colors"
            >
              {site.email}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
