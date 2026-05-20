import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, PhoneCall, X } from 'lucide-react';
import { navLinks, site } from '../../data/site';
import { ButtonLink } from '../ui/ButtonLink';
import { cn } from '../../lib/cn';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
        toggleRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-6">
          <Link
            to="/"
            className="flex shrink-0 items-center gap-3 rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
          >
            <img src="/a2zlogo.svg" alt="A2Z Engineering Logo" className="h-9 w-auto" width={36} height={36} />
            <div className="leading-none">
              <span className="block text-sm font-extrabold tracking-tight text-slate-950">
                {site.name}
              </span>
              <span className="mt-1 block text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                Pvt Ltd
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  'relative py-1.5 text-sm font-semibold transition-colors outline-none border-b-2 tracking-tight',
                  isActive(link.href)
                    ? 'border-brand-green text-brand-dark'
                    : 'border-transparent text-slate-600 hover:text-brand-dark hover:border-slate-300'
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-brand-dark transition-colors min-h-[44px]"
            >
              <PhoneCall className="h-4 w-4 text-brand-green" aria-hidden />
              {site.phone}
            </a>
            <ButtonLink to="/contact" variant="secondary" size="md">
              Contact
            </ButtonLink>
          </div>

          <button
            ref={toggleRef}
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div
          id="mobile-nav"
          ref={menuRef}
          className="lg:hidden border-t border-slate-200 bg-white shadow-lg animate-slide-up"
        >
          <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
            <div className="grid gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    'px-4 py-3 min-h-[44px] flex items-center text-sm font-bold transition-colors border-l-4 rounded-r-sm',
                    isActive(link.href)
                      ? 'border-brand-green bg-slate-50 text-brand-dark'
                      : 'border-transparent text-slate-600 hover:bg-slate-50 hover:text-slate-950'
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="mt-4 grid gap-3 border-t border-slate-100 pt-4 sm:grid-cols-2">
              <a
                href={site.phoneHref}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-[var(--radius-md)] border border-slate-200 text-sm font-bold text-slate-700"
              >
                <PhoneCall className="h-4 w-4 text-brand-green" aria-hidden />
                Call now
              </a>
              <ButtonLink to="/contact" variant="secondary" className="h-11 w-full justify-center">
                Contact
              </ButtonLink>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
