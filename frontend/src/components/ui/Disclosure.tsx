import { ChevronDown } from 'lucide-react';
import { cn } from '../../lib/cn';

export interface DisclosureProps {
  id: string;
  title: string;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
  className?: string;
}

export function Disclosure({ id, title, open, onToggle, children, className }: DisclosureProps) {
  return (
    <div className={className}>
      <button
        type="button"
        id={`${id}-trigger`}
        aria-expanded={open}
        aria-controls={`${id}-panel`}
        onClick={onToggle}
        className={cn(
          'w-full flex items-center justify-between gap-2 text-left text-xs font-bold text-brand-blue uppercase tracking-wider',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-sm py-1'
        )}
      >
        <span>{title}</span>
        <ChevronDown
          className={cn('w-4 h-4 shrink-0 transition-transform duration-200', open && 'rotate-180')}
          aria-hidden
        />
      </button>
      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-trigger`}
        hidden={!open}
        className={cn(!open && 'hidden')}
      >
        {open && (
          <div className="mt-4 p-4 bg-slate-50 border border-slate-200/80 rounded-[var(--radius-md)] text-xs space-y-2.5 animate-slide-up">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}
