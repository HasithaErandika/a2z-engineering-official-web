import { PageHeader } from '../components/shared/PageHeader';

export function NewsMedia() {
  const articles = [
    {
      title: 'A2Z Engineering launches updated digital presence',
      category: 'Company update',
      desc: 'The updated website gives customers a clearer way to review services, products, project work and contact details.',
      image: '/images/facility-preview.png'
    },
    {
      title: 'Solar connectivity work continues across commercial sites',
      category: 'Project update',
      desc: 'Recent project activity highlights the demand for practical, grid-connected solar systems for businesses.',
      image: '/images/solar-panel-product.png'
    },
    {
      title: 'Maintenance remains important after installation',
      category: 'Service note',
      desc: 'Regular inspection helps solar, HVAC and electrical systems perform safely and reliably over time.',
      image: '/images/building-office.png'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <PageHeader
        eyebrow="News and media"
        title="Company updates"
        description="Updates from A2Z Engineering, including project notes, service information and company announcements."
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <article key={article.title} className="border border-slate-200 rounded-lg overflow-hidden bg-white">
              <div className="aspect-[4/3] overflow-hidden bg-slate-50">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-brand-dark mb-3">{article.category}</p>
                <h2 className="text-lg font-extrabold text-slate-950 tracking-tight mb-3">{article.title}</h2>
                <p className="text-sm leading-relaxed text-slate-600">{article.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-12 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-extrabold text-slate-950 tracking-tight mb-3">Media inquiries</h2>
          <p className="text-sm text-slate-600 leading-relaxed">For company information or official statements, contact <span className="font-bold text-brand-dark">info@a2zengineering.lk</span>.</p>
        </div>
      </section>
    </div>
  );
}
