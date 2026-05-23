import { useCountUp } from '../../hooks/useCountUp';

type Props = {
  end: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  formatValue?: (n: number) => string;
};

export function AnimatedStat({ end, decimals = 0, prefix = '', suffix = '', label, formatValue }: Props) {
  const { ref, value, formatted } = useCountUp({ end, decimals, duration: 1100 });

  const display = formatValue ? formatValue(value) : `${prefix}${decimals > 0 ? formatted : Number(formatted).toLocaleString()}${suffix}`;

  return (
    <div
      ref={ref}
      className="rounded-2xl border border-slate-200/70 bg-white/75 p-4 text-left shadow-sm shadow-slate-200/40 backdrop-blur"
    >
      <p className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl tabular-nums">{display}</p>
      <p className="mt-1 text-[10px] font-extrabold uppercase tracking-wider text-slate-500 leading-none">
        {label}
      </p>
    </div>
  );
}
