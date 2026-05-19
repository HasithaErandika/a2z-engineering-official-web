import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, PhoneCall, X } from 'lucide-react';
import { Button } from '../ui/Button';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Solar', href: '/solar' },
    { name: 'Products', href: '/products' },
    { name: 'Services', href: '/services' },
    { name: 'News', href: '/news' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-6">
          <Link to="/" className="flex shrink-0 items-center gap-3 outline-none" onClick={() => setIsMenuOpen(false)}>
            <img src="/a2zlogo.svg" alt="A2Z Engineering Logo" className="h-9 w-auto" />
            <div className="leading-none">
              <span className="block text-sm font-extrabold tracking-tight text-slate-950">A2Z Engineering</span>
              <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">Pvt Ltd</span>
            </div>
          </Link>

          <div className="hidden xl:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`relative py-1.5 text-sm font-semibold transition-all outline-none border-b-2 tracking-tight ${
                  isActive(link.href)
                    ? 'border-brand-green text-brand-dark font-bold'
                    : 'border-transparent text-slate-600 hover:text-brand-dark hover:border-slate-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+94112995998" className="hidden xl:inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-brand-dark transition-colors">
              <PhoneCall className="h-4 w-4 text-brand-green" />
              +94 112 995 998
            </a>
            <Link to="/contact">
              <Button variant="secondary" className="h-10 px-5 bg-brand-dark text-white hover:bg-brand-dark text-sm font-bold shadow-none">
                Contact
              </Button>
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="xl:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="xl:hidden border-t border-slate-200 bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
            <div className="grid gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`px-4 py-3 text-sm font-bold transition-all border-l-4 ${
                    isActive(link.href)
                      ? 'border-brand-green bg-slate-50 text-brand-dark'
                      : 'border-transparent text-slate-600 hover:bg-slate-50 hover:text-slate-950'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="mt-4 grid gap-3 border-t border-slate-100 pt-4 sm:grid-cols-2">
              <a href="tel:+94112995998" className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-slate-200 text-sm font-bold text-slate-700">
                <PhoneCall className="h-4 w-4 text-brand-green" />
                Call Now
              </a>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button variant="secondary" className="h-11 w-full bg-brand-dark text-white hover:bg-brand-dark font-bold">
                  Contact
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
