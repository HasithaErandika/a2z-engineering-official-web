import type { ReactNode } from 'react';
import { Calculator, Info, TableProperties, BarChart3 } from 'lucide-react';
import { SolarPerformanceChart } from './SolarPerformanceChart';
import { cn } from '../../lib/cn';

export type SolarRoiPerformanceProps = {
  monthlyBill: number;
  onMonthlyBillChange: (value: number) => void;
  viewTariffTable: boolean;
  onToggleTariffTable: () => void;
  recommendedKW: number;
  dcCapacityKW: number;
  panelCount: number;
  dcAcRatio: number;
  calculatedKWh: number;
  monthlyGeneration: number;
  exportEarnings: number;
  requiredArea: number;
  exportRate: number;
  lifetimeSavings: number;
  solarProfile: number[];
};

function MetricCell({
  label,
  value,
  unit,
  accent = 'default',
}: {
  label: string;
  value: ReactNode;
  unit?: string;
  accent?: 'default' | 'green' | 'amber' | 'blue';
}) {
  const valueColor = {
    default: 'text-slate-800',
    green: 'text-brand-green',
    amber: 'text-amber-600',
    blue: 'text-brand-blue',
  }[accent];

  return (
    <div className="rounded-xl border border-slate-200/80 bg-slate-50/50 p-3.5 hover:bg-white hover:border-slate-300/80 transition-colors">
      <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider block leading-tight">
        {label}
      </span>
      <p className={cn('text-xl font-black mt-1 tabular-nums', valueColor)}>
        {value}
        {unit && <span className="text-[10px] font-bold text-slate-400 ml-0.5">{unit}</span>}
      </p>
    </div>
  );
}

export function SolarRoiPerformanceCard({
  monthlyBill,
  onMonthlyBillChange,
  viewTariffTable,
  onToggleTariffTable,
  recommendedKW,
  dcCapacityKW,
  panelCount,
  dcAcRatio,
  calculatedKWh,
  monthlyGeneration,
  exportEarnings,
  requiredArea,
  exportRate,
  lifetimeSavings,
  solarProfile,
}: SolarRoiPerformanceProps) {
  return (
    <section className="rounded-2xl border border-slate-200/80 bg-white shadow-lg shadow-slate-200/40 overflow-hidden">
      {/* Unified header */}
      <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-brand-dark px-6 py-5 sm:px-8 sm:py-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div className="space-y-2">
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1 rounded-full border border-brand-green/30 bg-brand-green/15 px-2.5 py-1 text-[9px] font-black uppercase tracking-widest text-brand-green">
                <Calculator className="w-3 h-3" aria-hidden />
                ROI sizer
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[9px] font-black uppercase tracking-widest text-white/90">
                <BarChart3 className="w-3 h-3" aria-hidden />
                Live performance
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-tight">
              Net-Accounting ROI & generation outlook
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
              Adjust your bill to size the system, then review CEB net-accounting estimates and monthly
              generation versus consumption for the same {recommendedKW} kW design.
            </p>
          </div>
          <div className="shrink-0 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-right backdrop-blur-sm">
            <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400">Recommended AC</p>
            <p className="text-2xl font-black text-brand-green tabular-nums">
              {recommendedKW} <span className="text-sm text-white/70">kW</span>
            </p>
          </div>
        </div>
      </div>

      <div className="p-6 sm:p-8 space-y-8">
        {/* —— ROI calculator —— */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
          <div className="lg:col-span-4 space-y-4">
            <p className="text-[9px] font-bold text-brand-blue uppercase tracking-widest">Step 1 · Your bill</p>
            <div className="rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-5 shadow-sm space-y-4">
              <div className="flex justify-between items-baseline gap-2">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                  Monthly energy bill
                </span>
                <span className="text-lg font-black text-brand-dark tabular-nums">
                  Rs. {monthlyBill.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min={1000}
                max={300000}
                step={1000}
                value={monthlyBill}
                onChange={(e) => onMonthlyBillChange(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-full appearance-none cursor-pointer accent-brand-green"
                aria-label="Monthly energy bill in LKR"
              />
              <div className="flex justify-between text-[9px] font-bold text-slate-400 uppercase tracking-widest font-mono">
                <span>Rs. 1k</span>
                <span>Rs. 150k</span>
                <span>Rs. 300k</span>
              </div>
            </div>
            <button
              type="button"
              onClick={onToggleTariffTable}
              className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl border border-brand-blue/20 bg-brand-blue/5 px-4 py-3 text-[10px] font-bold text-brand-blue uppercase tracking-wider hover:bg-brand-blue/10 transition-colors"
            >
              <TableProperties className="w-4 h-4" aria-hidden />
              {viewTariffTable ? 'Hide CEB tariff tables' : 'View CEB regulatory tariffs'}
            </button>
          </div>

          <div className="lg:col-span-8 space-y-4">
            <p className="text-[9px] font-bold text-brand-green uppercase tracking-widest">
              Step 2 · Net-accounting estimate
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <MetricCell label="Inverter AC size" value={recommendedKW} unit="kW" accent="default" />
              <MetricCell label="DC array" value={dcCapacityKW} unit="kW" accent="amber" />
              <MetricCell label={`620W panels (DC/AC ${dcAcRatio})`} value={panelCount} unit="units" />
              <MetricCell label="Est. consumption" value={Math.round(calculatedKWh)} unit="kWh/mo" />
              <MetricCell
                label="Est. solar generation"
                value={Math.round(monthlyGeneration)}
                unit="kWh/mo"
                accent="green"
              />
              <MetricCell
                label="Est. export income"
                value={`Rs. ${Math.round(exportEarnings).toLocaleString()}`}
                accent="blue"
              />
              <MetricCell label="Roof area" value={requiredArea} unit="sq.ft." />
              <MetricCell label="CEB export rate" value={`Rs. ${exportRate.toFixed(2)}`} />
              <MetricCell
                label="25-yr net earnings"
                value={`Rs. ${(lifetimeSavings / 1_000_000).toFixed(1)}M`}
                accent="green"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-2">
              <div className="p-3 bg-amber-50 border border-amber-200/80 rounded-xl flex gap-2 text-[10px] text-amber-800 leading-relaxed">
                <Info className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" aria-hidden />
                <p>
                  <strong>Indicative only.</strong> Actual yield depends on site shading, orientation, and
                  grid parameters.
                </p>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex gap-2 text-[10px] text-slate-600 leading-relaxed">
                <Info className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" aria-hidden />
                <p>
                  <strong>Quotation.</strong> Project cost varies by components—contact us for an accurate
                  proposal.
                </p>
              </div>
            </div>
          </div>
        </div>

        {viewTariffTable && (
          <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-5 sm:p-6 animate-slide-up">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-2">
                  Rooftop solar export rates
                </h4>
                <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white">
                  <table className="min-w-full divide-y divide-slate-200 text-[10px]">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="px-3 py-2 text-left font-bold text-slate-500 uppercase">Capacity</th>
                        <th className="px-3 py-2 text-right font-bold text-slate-500 uppercase">LKR/kWh</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-600 font-medium">
                      {[
                        ['0 – 5 kW', '20.90'],
                        ['5 – 20 kW', '19.61'],
                        ['20 – 100 kW', '17.46'],
                        ['100 – 500 kW', '15.49'],
                        ['500 kW – 1 MW', '15.07'],
                        ['1 MW+', '14.46'],
                      ].map(([cap, rate]) => (
                        <tr key={cap}>
                          <td className="px-3 py-2">{cap}</td>
                          <td className="px-3 py-2 text-right font-mono font-bold text-brand-green">
                            {rate}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-2">
                  CEB domestic tariffs (May 2026)
                </h4>
                <div className="overflow-x-auto max-h-[220px] overflow-y-auto rounded-lg border border-slate-200 bg-white text-[9px]">
                  <table className="min-w-full divide-y divide-slate-200">
                    <thead className="bg-slate-100 sticky top-0">
                      <tr>
                        <th className="px-3 py-2 text-left font-bold text-slate-500 uppercase">Scheme</th>
                        <th className="px-3 py-2 text-right font-bold text-slate-500 uppercase">Energy</th>
                        <th className="px-3 py-2 text-right font-bold text-slate-500 uppercase">Fixed</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-600 font-medium">
                      <tr className="bg-slate-50/50">
                        <td colSpan={3} className="px-3 py-1 font-bold text-[8px] text-brand-blue uppercase">
                          Consumption 0 – 60 kWh
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 py-1.5">Block 1: 0 – 30 kWh</td>
                        <td className="px-3 py-1.5 text-right font-mono">5.00</td>
                        <td className="px-3 py-1.5 text-right font-mono">80.00</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-1.5">Block 2: 31 – 60 kWh</td>
                        <td className="px-3 py-1.5 text-right font-mono">9.00</td>
                        <td className="px-3 py-1.5 text-right font-mono">210.00</td>
                      </tr>
                      <tr className="bg-slate-50/50">
                        <td colSpan={3} className="px-3 py-1 font-bold text-[8px] text-brand-blue uppercase">
                          Consumption 60 – 180 kWh (Category B)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 py-1.5">Block 1: 0 – 60 kWh</td>
                        <td className="px-3 py-1.5 text-right font-mono">14.00</td>
                        <td className="px-3 py-1.5 text-right font-mono">400.00</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-1.5">Block 2: 61 – 90 kWh</td>
                        <td className="px-3 py-1.5 text-right font-mono">20.00</td>
                        <td className="px-3 py-1.5 text-right font-mono">400.00</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-1.5">Block 3: 91 – 120 kWh</td>
                        <td className="px-3 py-1.5 text-right font-mono">28.00</td>
                        <td className="px-3 py-1.5 text-right font-mono">1,000.00</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-1.5">Block 4: 121 – 180 kWh</td>
                        <td className="px-3 py-1.5 text-right font-mono">44.00</td>
                        <td className="px-3 py-1.5 text-right font-mono">1,500.00</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-1.5">Block 5: Above 180 kWh</td>
                        <td className="px-3 py-1.5 text-right font-mono">85.00</td>
                        <td className="px-3 py-1.5 text-right font-mono">2,100.00</td>
                      </tr>
                      <tr className="bg-slate-50/50">
                        <td colSpan={3} className="px-3 py-1 font-bold text-[8px] text-brand-blue uppercase">
                          Consumption above 180 kWh (Category C)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 py-1.5">Block 1: 0 – 180 kWh</td>
                        <td className="px-3 py-1.5 text-right font-mono">32.50</td>
                        <td className="px-3 py-1.5 text-right font-mono">1,500.00</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-1.5">Block 2: Above 180 kWh</td>
                        <td className="px-3 py-1.5 text-right font-mono">100.00</td>
                        <td className="px-3 py-1.5 text-right font-mono">2,500.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center" aria-hidden>
            <div className="w-full border-t border-slate-200" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-4 text-[9px] font-bold uppercase tracking-widest text-slate-400">
              System performance preview
            </span>
          </div>
        </div>

        {/* —— Performance chart —— */}
        <div className="rounded-xl border border-slate-200/80 bg-gradient-to-br from-brand-blue/[0.04] via-white to-brand-green/[0.06] p-5 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
            <div>
              <p className="text-[9px] font-bold text-brand-blue uppercase tracking-widest mb-1">
                Monthly profile
              </p>
              <h4 className="text-lg font-extrabold text-slate-950 tracking-tight">
                Solar generation vs consumption
              </h4>
              <p className="text-xs text-slate-500 mt-1">
                Daily kWh under Sri Lanka irradiance for your {recommendedKW} kW design.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 shrink-0">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-sm bg-brand-green" />
                <span className="text-[10px] font-semibold text-slate-600">Generation</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-sm bg-slate-400/40" />
                <span className="text-[10px] font-semibold text-slate-600">Consumption</span>
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-slate-100 bg-white/80 p-2 sm:p-4">
            <SolarPerformanceChart
              profile={solarProfile}
              dailyConsumption={calculatedKWh / 30}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
