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

    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        toggleRef.current &&
        !toggleRef.current.contains(e.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  return (
    <>
      {/* Premium Subtle Ambient Background Glow behind nav */}
      <div
        className="absolute top-0 left-0 right-0 h-48 -z-10 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(118, 167, 84, 0.08) 0%, rgba(255, 255, 255, 0) 70%)'
        }}
        aria-hidden="true"
      />

      <nav className="fixed top-0 z-50 w-full pt-4 pb-2 px-4 pointer-events-none flex justify-center">
        <div className="w-full max-w-5xl pointer-events-auto">
          
          {/* Desktop Navbar View */}
          <div className="hidden md:flex items-center justify-between gap-5 rounded-full border border-slate-200/40 bg-white/70 shadow-sm shadow-slate-100/50 backdrop-blur-md px-6 py-2 text-slate-800 transition-all duration-300">
            
            <Link
              to="/"
              className="flex items-center gap-2.5 outline-none focus-visible:ring-2 focus-visible:ring-brand-green rounded-md"
              aria-label={`${site.name} home`}
            >
              <img src="/a2zlogo.svg" alt="" className="h-6 w-auto" width={24} height={24} />
              <div className="leading-none flex flex-col justify-center">
                <span className="block text-sm font-bold tracking-tight text-slate-900">
                  {site.name}
                </span>
                <span className="mt-0.5 block text-[8px] font-bold uppercase tracking-[0.15em] text-slate-400">
                  Pvt Ltd
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="flex items-center gap-1.5 text-xs font-semibold">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    'transition-all duration-200 px-3 py-1.5 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-brand-green',
                    isActive(link.href)
                      ? 'bg-slate-950 text-white font-bold shadow-sm shadow-slate-950/10'
                      : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Desktop CTA actions */}
            <div className="flex items-center gap-4">
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors"
              >
                <PhoneCall className="h-3.5 w-3.5" aria-hidden />
                <span>{site.phone}</span>
              </a>
              <ButtonLink
                to="/contact"
                className="px-5 py-2 text-xs font-semibold text-white bg-slate-950 hover:bg-slate-850 rounded-full transition-all duration-200 shadow-md shadow-slate-950/10 hover:scale-[1.02] active:scale-[0.98] leading-none shrink-0"
              >
                Contact
              </ButtonLink>
            </div>
          </div>

          {/* Mobile Navbar View */}
          <div className="flex md:hidden relative items-center justify-between gap-3 py-2 px-4 rounded-full border border-slate-200/40 bg-white/70 shadow-sm shadow-slate-100/50 backdrop-blur-md">
            <Link
              to="/"
              className="flex items-center gap-2 outline-none"
              aria-label={`${site.name} home`}
            >
              <img src="/a2zlogo.svg" alt="" className="h-5 w-auto" />
              <span className="text-xs font-bold tracking-tight text-slate-900">
                {site.name}
              </span>
            </Link>

            <button
              ref={toggleRef}
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center justify-center rounded-full border border-slate-200/50 bg-white/80 p-1.5 text-slate-700 hover:text-slate-900 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green shadow-sm"
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>

            {/* Mobile Dropdown Menu (ShipYourDraft detailed dropdown style) */}
            {isMenuOpen && (
              <div
                ref={menuRef}
                className="absolute right-0 top-[calc(100%+0.5rem)] w-52 rounded-2xl border border-slate-200/40 bg-white/95 shadow-xl shadow-slate-200/30 p-3 flex flex-col gap-1.5 backdrop-blur-md animate-in fade-in slide-in-from-top-2 duration-200"
              >
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={cn(
                      'px-3 py-2 rounded-lg text-xs font-semibold transition-all',
                      isActive(link.href)
                        ? 'bg-slate-950 text-white font-bold'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
                
                <div className="h-px bg-slate-200/50 my-1 mx-2" />
                
                <a
                  href={site.phoneHref}
                  className="flex items-center px-3 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all gap-2"
                >
                  <PhoneCall className="h-3.5 w-3.5 animate-pulse" aria-hidden />
                  Call Us
                </a>
                <ButtonLink
                  to="/contact"
                  className="mt-1 flex items-center justify-center px-4 py-2.5 text-xs font-semibold text-white bg-slate-950 hover:bg-slate-850 rounded-full transition-all duration-200 shadow-md shadow-slate-950/10 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Contact
                </ButtonLink>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}