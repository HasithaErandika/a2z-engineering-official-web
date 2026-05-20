import { images } from './site';

export interface NewsArticle {
  id: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  category: string;
  categoryVariant: 'blue' | 'green' | 'neutral';
  featured?: boolean;
}

export const newsArticles: NewsArticle[] = [
  {
    id: 'digital-presence',
    title: 'A2Z Engineering launches updated digital presence',
    date: 'May 18, 2026',
    readTime: '3 min read',
    excerpt:
      'The newly deployed official web platform gives clients a streamlined gateway to review our engineering catalog, Tier-1 products database, and EPC portfolios.',
    image: images.facilityPreview,
    category: 'Company update',
    categoryVariant: 'blue',
    featured: true,
  },
  {
    id: 'commercial-solar',
    title: 'Solar connectivity work continues across commercial sites',
    date: 'May 12, 2026',
    readTime: '4 min read',
    excerpt:
      'A2Z crews continue grid integrations across manufacturing plants, focusing on Net-Accounting schemes with high-yield PV modules.',
    image: images.solarPanelProduct,
    category: 'Project update',
    categoryVariant: 'green',
  },
  {
    id: 'maintenance-audits',
    title: 'Mechanical maintenance and efficiency audits post-handover',
    date: 'May 05, 2026',
    readTime: '5 min read',
    excerpt:
      'Regular inspection and thermal scan audits ensure industrial solar arrays, HVAC systems, and distribution panels run safely over decades.',
    image: images.buildingOffice,
    category: 'Service note',
    categoryVariant: 'neutral',
  },
];

const categoryStyles = {
  blue: 'bg-brand-blue/10 text-brand-blue border-brand-blue/20',
  green: 'bg-brand-green/10 text-brand-green border-brand-green/20',
  neutral: 'bg-slate-100 text-slate-800 border-slate-200',
} as const;

export function getCategoryClass(variant: NewsArticle['categoryVariant']) {
  return categoryStyles[variant];
}
