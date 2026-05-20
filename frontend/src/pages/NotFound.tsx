import { Link } from 'react-router-dom';
import { ButtonLink } from '../components/ui/ButtonLink';

export function NotFound() {
  return (
    <div className="section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center min-h-[50vh]">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-green mb-4">404</p>
      <h1 className="text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight mb-4">
        Page not found
      </h1>
      <p className="text-sm text-slate-600 max-w-md mb-8 leading-relaxed">
        The page you requested does not exist or may have been moved. Return to the homepage or
        contact our engineering team.
      </p>
      <div className="flex flex-wrap gap-3 justify-center">
        <ButtonLink to="/" variant="primary">
          Back to home
        </ButtonLink>
        <ButtonLink to="/contact" variant="outline">
          Contact us
        </ButtonLink>
      </div>
      <Link to="/products" className="mt-6 text-sm font-semibold text-brand-blue hover:text-brand-dark transition-colors">
        Browse product catalog
      </Link>
    </div>
  );
}
