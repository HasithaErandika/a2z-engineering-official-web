import { cn } from '../../lib/cn';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  hint?: string;
}

export function Select({ className, label, error, hint, id, children, ...props }: SelectProps) {
  const selectId = id ?? (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  return (
    <div className="space-y-2">
      {label && (
        <label htmlFor={selectId} className="block text-xs font-bold text-slate-600">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          id={selectId}
          aria-invalid={error ? true : undefined}
          className={cn(
            'w-full appearance-none rounded-[var(--radius-md)] border border-slate-200 bg-white px-4 py-3 pr-10 text-sm text-slate-900',
            'transition-colors duration-200 cursor-pointer',
            'focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green',
            error && 'border-red-400 focus:ring-red-200',
            className
          )}
          {...props}
        >
          {children}
        </select>
        <span
          className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-400"
          aria-hidden
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M3 4.5L6 7.5L9 4.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
      {hint && !error && <p className="text-xs text-slate-500">{hint}</p>}
      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  );
}
