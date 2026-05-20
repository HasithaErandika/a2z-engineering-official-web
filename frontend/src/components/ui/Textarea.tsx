import { cn } from '../../lib/cn';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export function Textarea({ className, label, error, id, ...props }: TextareaProps) {
  const inputId = id ?? (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  return (
    <div className="space-y-2">
      {label && (
        <label htmlFor={inputId} className="block text-xs font-bold text-slate-600">
          {label}
        </label>
      )}
      <textarea
        id={inputId}
        aria-invalid={error ? true : undefined}
        className={cn(
          'w-full min-h-[120px] rounded-[var(--radius-md)] border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 resize-y',
          'placeholder:text-slate-400 transition-colors duration-200',
          'focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green',
          error && 'border-red-400 focus:ring-red-200',
          className
        )}
        {...props}
      />
      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  );
}
