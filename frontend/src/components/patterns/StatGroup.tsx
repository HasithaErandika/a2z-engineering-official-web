import { cn } from '../../lib/cn';

export interface StatItem {
  value: string;
  label: string;
  suffix?: string;
}

export interface StatGroupProps {
  stats: StatItem[];
  variant?: 'bar' | 'inline';
  className?: string;
}

export function StatGroup({ stats, variant = 'inline', className }: StatGroupProps) {
  if (variant === 'bar') {
    return (
      <section className={cn('bg-slate-950 py-10 text-white', className)}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-extrabold tracking-tight">
                {stat.value}
                {stat.suffix && (
                  <span className="text-lg font-bold text-brand-green ml-1">{stat.suffix}</span>
                )}
              </p>
              <p className="text-xs uppercase tracking-widest text-slate-400 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <div className={cn('grid grid-cols-2 sm:grid-cols-3 gap-6', className)}>
      {stats.map((stat) => (
        <div key={stat.label} className="text-center sm:text-left">
          <p className="text-2xl font-extrabold text-brand-dark">
            {stat.value}
            {stat.suffix}
          </p>
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mt-1">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
