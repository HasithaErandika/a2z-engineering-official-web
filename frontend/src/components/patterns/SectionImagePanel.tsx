import { cn } from '../../lib/cn';

type Props = {
  src: string;
  alt: string;
  caption?: string;
  badge?: string;
  className?: string;
  imageClassName?: string;
  aspect?: 'portrait' | 'landscape' | 'tall' | 'wide' | 'panoramic' | 'natural';
  objectFit?: 'cover' | 'contain';
};

const aspectClass = {
  portrait: 'aspect-[4/5] min-h-[280px]',
  landscape: 'aspect-[4/3] min-h-[220px]',
  tall: 'aspect-[3/4] lg:aspect-auto lg:min-h-[420px]',
  wide: 'aspect-[16/10] min-h-[200px]',
  panoramic: 'aspect-[21/9] sm:aspect-[2/1] min-h-[160px]',
  natural: '',
};

export function SectionImagePanel({
  src,
  alt,
  caption,
  badge,
  className,
  imageClassName,
  aspect = 'tall',
  objectFit = 'cover',
}: Props) {
  if (aspect === 'natural') {
    return (
      <figure
        className={cn(
          'relative overflow-hidden rounded-2xl border border-slate-200/80 shadow-lg shadow-slate-200/50 bg-white group',
          className
        )}
      >
        {badge && (
          <span className="absolute top-3 left-3 z-10 inline-flex rounded-full border border-brand-green/30 bg-white/95 px-3 py-1 text-[9px] font-extrabold uppercase tracking-widest text-brand-green shadow-sm">
            {badge}
          </span>
        )}
        <img
          src={src}
          alt={alt}
          className={cn(
            'w-full h-auto block transition-transform duration-700 group-hover:scale-[1.01]',
            imageClassName
          )}
          loading="lazy"
          decoding="async"
        />
        {caption && (
          <figcaption className="border-t border-slate-100 bg-slate-50/80 px-4 py-3">
            <p className="text-xs font-medium text-slate-600 leading-snug text-pretty">{caption}</p>
          </figcaption>
        )}
      </figure>
    );
  }

  return (
    <figure
      className={cn(
        'relative overflow-hidden rounded-2xl border border-slate-200/80 shadow-lg shadow-slate-200/50 group',
        className
      )}
    >
      <div className={cn('relative w-full', aspectClass[aspect])}>
        <img
          src={src}
          alt={alt}
          className={cn(
            'absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-[1.02]',
            objectFit === 'contain' ? 'object-contain bg-slate-100 p-2' : 'object-cover',
            imageClassName
          )}
          loading="lazy"
          decoding="async"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/15 to-transparent"
          aria-hidden
        />
        {badge && (
          <span className="absolute top-4 left-4 z-10 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[9px] font-extrabold uppercase tracking-widest text-white backdrop-blur-md">
            {badge}
          </span>
        )}
        {caption && (
          <figcaption className="absolute bottom-0 left-0 right-0 z-10 p-4 sm:p-5">
            <p className="text-xs sm:text-sm font-semibold text-white/95 leading-snug text-pretty">
              {caption}
            </p>
          </figcaption>
        )}
      </div>
    </figure>
  );
}
