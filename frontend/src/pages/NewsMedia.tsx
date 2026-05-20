import { 
  ArrowRight, 
  Calendar, 
  Clock, 
  Mail, 
  Newspaper 
} from 'lucide-react';
import { PageHeader } from '../components/shared/PageHeader';

export function NewsMedia() {
  const articles = [
    {
      id: 1,
      title: 'A2Z Engineering Launches Updated Digital Presence',
      category: 'Company Update',
      categoryColor: 'bg-brand-blue/10 text-brand-blue border-brand-blue/20',
      desc: 'The newly deployed official web platform gives clients a streamlined, high-fidelity gateway to review our engineering catalog, active Tier-1 products database, and detailed EPC portfolios.',
      image: '/images/facility-preview.png',
      date: 'May 18, 2026',
      readTime: '3 min read'
    },
    {
      id: 2,
      title: 'Solar Connectivity Work Continues Across Commercial Sites',
      category: 'Project Update',
      categoryColor: 'bg-brand-green/10 text-brand-green border-brand-green/20',
      desc: 'A2Z mechanical crews continue fast-paced grid integrations across manufacturing plants, focusing on Net-Accounting schemes with 620W high-yield PV modules.',
      image: '/images/solar-panel-product.png',
      date: 'May 12, 2026',
      readTime: '4 min read'
    },
    {
      id: 3,
      title: 'Mechanical Maintenance & Efficiency Audits Post-Handover',
      category: 'Service Note',
      categoryColor: 'bg-slate-100 text-slate-800 border-slate-200',
      desc: 'Regular engineering inspection and thermal scan audits ensure industrial solar arrays, central AC vents, and heavy distribution panels run safely over decades.',
      image: '/images/building-office.png',
      date: 'May 05, 2026',
      readTime: '5 min read'
    }
  ];

  const [featured, ...otherArticles] = articles;

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <PageHeader
        eyebrow="News & Media"
        title="Official Company Updates"
        description="Stay updated with A2Z Engineering. Read our project logs, technical service notes, and official corporate announcements."
        bgImage="/images/building-office.png"
      />

      {/* Main Content Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full flex-grow space-y-16">
        
        {/* 1. Featured Spotlight Article (Splits to 2 Columns) */}
        <article className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-slate-100/50 hover:-translate-y-1.5 transition-all duration-300 group hover:border-brand-blue/30">
          <div className="grid lg:grid-cols-12">
            
            {/* Spotlight Image Container */}
            <div className="lg:col-span-7 aspect-[16/10] lg:aspect-auto overflow-hidden bg-slate-50 relative min-h-[300px]">
              <img 
                src={featured.image} 
                alt={featured.title} 
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500" 
              />
              <span className="absolute top-4 left-4 z-20 inline-flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest bg-white/95 text-brand-dark px-3 py-1 rounded-full shadow-sm">
                <Newspaper className="w-3.5 h-3.5 text-brand-green" /> Featured Article
              </span>
            </div>

            {/* Spotlight Text Container */}
            <div className="lg:col-span-5 p-6 lg:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                
                {/* Category Pill Tag */}
                <div>
                  <span className={`inline-block px-3 py-1 text-[9px] font-black uppercase tracking-wider rounded-full border ${featured.categoryColor}`}>
                    {featured.category}
                  </span>
                </div>

                <h2 className="text-xl lg:text-2xl font-black text-slate-950 tracking-tight leading-snug">
                  {featured.title}
                </h2>
                
                <p className="text-slate-600 text-xs leading-relaxed">
                  {featured.desc}
                </p>

              </div>

              {/* Spotlight Metadata and Read Link */}
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-4 text-[10px] text-slate-400 font-bold font-mono">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{featured.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{featured.readTime}</span>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1 text-[9px] font-black text-brand-blue uppercase tracking-widest group-hover:translate-x-0.5 transition-transform pointer-events-none">
                  <span>Read Log</span> <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>

            </div>

          </div>
        </article>

        {/* 2. Secondary Articles Grid */}
        <div className="space-y-6">
          <h3 className="text-sm font-black text-slate-950 uppercase tracking-widest border-b border-slate-100 pb-2 mb-6">
            Recent Announcements & Publications
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {otherArticles.map((article) => (
              <article 
                key={article.id} 
                className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-slate-100/50 hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between hover:border-brand-green/35"
              >
                
                {/* Thumbnail Image */}
                <div className="aspect-[16/9] overflow-hidden bg-slate-50 relative">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                  <span className={`absolute top-4 left-4 z-20 inline-block px-3 py-1 text-[8px] font-black uppercase tracking-wider rounded-full bg-white/95 border ${article.categoryColor} shadow-sm`}>
                    {article.category}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <h4 className="text-base font-black text-slate-950 tracking-tight leading-snug">
                      {article.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {article.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-50 flex items-center justify-between text-[9px] font-bold text-slate-400 font-mono">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {article.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {article.readTime}</span>
                    </div>
                    <span className="text-brand-blue uppercase tracking-widest font-sans font-black flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                      Read <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

              </article>
            ))}
          </div>
        </div>

      </section>

      {/* Inquiries / Contact Section */}
      <section className="bg-slate-50 border-t border-slate-200 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center mx-auto shadow-sm">
            <Mail className="w-5 h-5 text-brand-blue" />
          </div>
          <h3 className="text-xl font-extrabold text-slate-950 tracking-tight">
            Official Media Inquiries
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed max-w-lg mx-auto">
            For company press assets, official statements, and executive interview requests, please direct your technical inquiries to our media desk.
          </p>
          <div className="pt-2">
            <span className="text-xs font-mono font-bold text-slate-800 bg-white border border-slate-200 px-4 py-2 rounded-lg">
              info@a2zengineering.lk
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
