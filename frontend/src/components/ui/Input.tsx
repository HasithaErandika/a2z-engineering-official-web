import { cn } from '../../lib/cn';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
}

export function Input({ className, label, error, hint, id, ...props }: InputProps) {
  const inputId = id ?? (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  return (
    <div className="space-y-2">
      {label && (
        <label htmlFor={inputId} className="block text-xs font-bold text-slate-600">
          {label}
        </label>
      )}
      <input
        id={inputId}
        aria-invalid={error ? true : undefined}
        className={cn(
          'w-full rounded-[var(--radius-md)] border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900',
          'placeholder:text-slate-400 transition-colors duration-200',
          'focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green',
          error && 'border-red-400 focus:ring-red-200',
          className
        )}
        {...props}
      />
      {hint && !error && <p className="text-xs text-slate-500">{hint}</p>}
      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  );
}
