import { useState } from 'react';
import {
  CheckCircle2,
  Sun,
  TrendingDown,
  ShieldCheck,
  Calculator,
  Info,
  Battery,
  Network,
  TableProperties,
} from 'lucide-react';
import { PageHero } from '../components/patterns/PageHero';
import { CTABand } from '../components/patterns/CTABand';
import { images } from '../data/site';

// Days in each calendar month
const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// Actual daily generation profiles (kWh/day) for 5kW, 10kW, 15kW, 20kW, and 40kW systems in Sri Lanka
const SOLAR_PROFILES: Record<number, number[]> = {
  5: [29.4, 30.9, 32.0, 27.2, 23.9, 22.5, 22.6, 24.3, 26.1, 26.2, 26.2, 26.7],
  10: [58.4, 61.9, 64.6, 55.5, 49.3, 46.3, 46.6, 49.7, 52.9, 52.7, 52.4, 53.1],
  15: [86.4, 89.5, 90.2, 74.7, 64.8, 60.0, 60.9, 66.6, 72.9, 75.0, 76.4, 78.6],
  20: [87.4, 101.0, 118.0, 112.0, 107.0, 103.0, 102.0, 103.0, 101.0, 91.3, 82.7, 78.9],
  40: [207.0, 223.0, 237.0, 208.0, 188.0, 178.0, 178.0, 188.0, 197.0, 192.0, 187.0, 188.0]
};

export const getSolarProfileForKW = (kw: number): number[] => {
  if (SOLAR_PROFILES[kw]) return SOLAR_PROFILES[kw];
  const keys = Object.keys(SOLAR_PROFILES).map(Number).sort((a, b) => a - b);
  
  if (kw <= keys[0]) {
    return SOLAR_PROFILES[5].map(v => v * (kw / 5));
  }
  if (kw >= keys[keys.length - 1]) {
    return SOLAR_PROFILES[40].map(v => v * (kw / 40));
  }
  
  for (let i = 0; i < keys.length - 1; i++) {
    const k1 = keys[i];
    const k2 = keys[i + 1];
    if (kw >= k1 && kw <= k2) {
      const p1 = SOLAR_PROFILES[k1];
      const p2 = SOLAR_PROFILES[k2];
      const t = (kw - k1) / (k2 - k1);
      return p1.map((v, idx) => v + t * (p2[idx] - v));
    }
  }
  
  return SOLAR_PROFILES[5].map(v => v * (kw / 5));
};

function SolarPerformanceChart({ profile, dailyConsumption }: { profile: number[]; dailyConsumption: number }) {
  const PL = 40; // padding left (Y-axis labels)
  const PT = 24; // padding top
  const PB = 28; // padding bottom (month labels)
  const W = 700; // total SVG width
  const H = 240; // total SVG height
  const chartH = H - PT - PB;
  const chartW = W - PL;
  
  // Find maximum value to scale Y axis dynamically
  const peakVal = Math.max(...profile, dailyConsumption);
  const maxVal = Math.ceil(Math.max(10, peakVal) / 10) * 10;
  
  const slotW = chartW / 12;
  const barW = Math.min(30, slotW * 0.55);
  
  const toY = (v: number) => PT + chartH - (v / maxVal) * chartH;
  const toBarH = (v: number) => (v / maxVal) * chartH;
  
  // Create 5 grid line ticks
  const gridLines = Array.from({ length: 5 }, (_, i) => Math.round((maxVal / 4) * i));

  // Wavy consumption curve path points (represented as an area chart in background)
  const consumptionMultipliers = [1.02, 0.98, 0.95, 0.92, 0.96, 1.05, 1.12, 1.10, 1.05, 0.98, 0.92, 0.95];
  const consPoints = profile.map((_, i) => dailyConsumption * consumptionMultipliers[i]);
  
  // Construct polygon and line point coordinates for the consumption area
  const polyPoints = [
    `${PL},${H - PB}`,
    ...consPoints.map((val, i) => {
      const cx = PL + i * slotW + slotW / 2;
      return `${cx},${toY(val)}`;
    }),
    `${PL + 11 * slotW + slotW / 2},${H - PB}`
  ].join(' ');

  const linePoints = consPoints.map((val, i) => {
    const cx = PL + i * slotW + slotW / 2;
    return `${cx},${toY(val)}`;
  }).join(' ');

  return (
    <div className="w-full overflow-x-auto">
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full min-w-[480px]" style={{ height: '260px' }}>
        {/* Y-axis grid lines + labels */}
        {gridLines.map(v => (
          <g key={v}>
            <line x1={PL} y1={toY(v)} x2={W} y2={toY(v)} stroke="#e2e8f0" strokeWidth="0.8" strokeDasharray={v === 0 ? '0' : '4 3'} />
            <text x={PL - 6} y={toY(v) + 4} textAnchor="end" fontSize="9" fill="#94a3b8" fontFamily="monospace">{v}</text>
          </g>
        ))}
        
        {/* Consumption area curve (rendered behind generation bars) */}
        <polygon points={polyPoints} fill="#cbd5e1" opacity="0.35" />
        <polyline points={linePoints} fill="none" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="3 3" />

        {/* Generation Bars */}
        {profile.map((val, i) => {
          const cx = PL + i * slotW + slotW / 2;
          const bx = cx - barW / 2;
          return (
            <g key={MONTH_NAMES[i]}>
              {/* Generation bar (green) */}
              <rect x={bx} y={toY(val)} width={barW} height={toBarH(val)} fill="#4ade80" rx="3" ry="3" />
              {/* Generation label */}
              <text x={cx} y={toY(val) - 5} textAnchor="middle" fontSize="8" fontWeight="700" fill="#374151">{val.toFixed(1)}</text>
              {/* Month label */}
              <text x={cx} y={H - 6} textAnchor="middle" fontSize="9" fill="#64748b">{MONTH_NAMES[i]}</text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export function SolarSolutions() {
  // 1. Calculator State Parameters
  const [monthlyBill, setMonthlyBill] = useState<number>(45000);
  const [viewTariffTable, setViewTariffTable] = useState<boolean>(false);

  // 2. CEB Domestic Tariff (Effective 11th May 2026) Reverse Converter
  // Calculates exactly how many kWh they consume to achieve their monthly bill
  const calculateKWhFromBill = (billLKR: number): number => {
    if (billLKR <= 230) {
      // 0-30 kWh block: kWh * 5.00 + 80
      return Math.max(0, (billLKR - 80) / 5);
    } else if (billLKR <= 630) {
      // 31-60 kWh block: 30 * 5.00 + (kWh - 30) * 9.00 + 210 = 9 * kWh + 90
      return (billLKR - 90) / 9;
    } else if (billLKR <= 1240) {
      // Category B (60-180 kWh): Block 1 (0-60 kWh) = kWh * 14.00 + 400
      return (billLKR - 400) / 14;
    } else if (billLKR <= 1840) {
      // Category B: Block 2 (61-90 kWh) = 60 * 14.00 + (kWh - 60) * 20.00 + 400 = 20 * kWh + 40
      return (billLKR - 40) / 20;
    } else if (billLKR <= 3280) {
      // Category B: Block 3 (91-120 kWh) = 60 * 14 + 30 * 20 + (kWh - 90) * 28 + 1000 = 28 * kWh - 80
      return (billLKR + 80) / 28;
    } else if (billLKR <= 6420) {
      // Category B: Block 4 (121-180 kWh) = 60*14 + 30*20 + 30*28 + (kWh-120)*44 + 1500 = 44 * kWh - 1500
      return (billLKR + 1500) / 44;
    } else if (billLKR <= 8450) {
      // Border transition between Category B & C
      return 180;
    } else {
      // Category C (Above 180 kWh): Block 1 (0-180) = 180 * 32.50 + (kWh - 180) * 100.00 + 2500
      // Bill = 5850 + 100 * kWh - 18000 + 2500 = 100 * kWh - 9650
      // kWh = (Bill + 9650) / 100
      return (billLKR + 9650) / 100;
    }
  };

  const calculatedKWh = calculateKWhFromBill(monthlyBill);

  // 3. Recommended Sizing: Map monthly bill ranges to recommended system capacity
  // - LKR 1,000 - 20,000 -> 5kW
  // - LKR 20,000 - 50,000 -> 10kW
  // - LKR 50,000 - 80,000 -> 15kW
  // - LKR 80,000 - 110,000 -> 20kW
  // - LKR 110,000 - 140,000 -> 25kW
  // - LKR 140,000 - 170,000 -> 30kW
  // - LKR 170,000 - 200,000 -> 35kW
  // - LKR 200,000+ -> 40kW
  const getRecommendedKW = (bill: number): number => {
    if (bill <= 20000) return 5.0;
    if (bill <= 50000) return 10.0;
    if (bill <= 80000) return 15.0;
    if (bill <= 110000) return 20.0;
    if (bill <= 140000) return 25.0;
    if (bill <= 170000) return 30.0;
    if (bill <= 200000) return 35.0;
    return 40.0;
  };

  const recommendedKW = getRecommendedKW(monthlyBill);

  // Helper to calculate exact A2Z engineering panel sizing based on standard inverter AC sizing
  const getPanelCount = (kw: number): number => {
    if (kw <= 5) return 10;
    const points = [
      { kw: 5, panels: 10 },
      { kw: 10, panels: 18 },
      { kw: 15, panels: 30 },
      { kw: 20, panels: 38 },
      { kw: 40, panels: 76 }
    ];
    // Bounding point interpolation
    for (let i = 0; i < points.length - 1; i++) {
      const p1 = points[i];
      const p2 = points[i + 1];
      if (kw >= p1.kw && kw <= p2.kw) {
        const t = (kw - p1.kw) / (p2.kw - p1.kw);
        return Math.round(p1.panels + t * (p2.panels - p1.panels));
      }
    }
    // Extrapolate above 40kW
    return Math.round(kw * (76 / 40));
  };

  const panelCount = getPanelCount(recommendedKW);
  // DC Array Capacity calculated from actual panels: each standard panel is 620W
  const dcCapacityKW = Math.round((panelCount * 620) / 100) / 10;
  // Dynamic DC/AC oversizing ratio
  const dcAcRatio = Math.round((dcCapacityKW / recommendedKW) * 1000) / 1000;
  const requiredArea = Math.ceil(recommendedKW * 75); // ~75 sq ft per kW

  // 4. Net-Accounting Export Rates (Ceylon Electricity Board standard rooftop buyback)
  const getExportRate = (capacityKW: number): number => {
    if (capacityKW <= 5) return 20.90;
    if (capacityKW <= 20) return 19.61;
    if (capacityKW <= 100) return 17.46;
    if (capacityKW <= 500) return 15.49;
    if (capacityKW <= 1000) return 15.07;
    return 14.46;
  };

  const exportRate = getExportRate(recommendedKW);

  // 5. Financial Sizing calculations
  // Local Sri Lankan average cost of high-quality solar turnkey EPC is roughly Rs. 235,000 per kW
  const costPerKW = 235000;
  const initialInvestment = Math.round(recommendedKW * costPerKW);
  
  // Get the actual monthly daily generation profile for this system size
  const solarProfile = getSolarProfileForKW(recommendedKW);
  
  // Total actual monthly generation (kWh) is the sum of daily generations * days in month
  const monthlyGeneration = solarProfile.reduce((sum, dailyGen, i) => sum + dailyGen * DAYS_IN_MONTH[i], 0);
  
  // Under Net-Accounting, excess energy above consumption is sold back to the grid
  const excessExportKWh = Math.max(0, monthlyGeneration - calculatedKWh);
  const exportEarnings = excessExportKWh * exportRate;

  // Monthly return consists of completely offsetting the monthly bill to Rs 0 + actual export revenue cash earnings
  const monthlySavings = monthlyBill + exportEarnings;
  const annualSavings = monthlySavings * 12;
  const lifetimeSavings = Math.round((annualSavings * 25 * 0.88) - initialInvestment); // 12% lifetime degradation adjustment

  const systems = [
    {
      title: 'Net-Accounting Interconnection',
      scheme: 'CEB & LECO Bilateral Export',
      desc: 'Seamlessly feed energy into the national grid under the official CEB Net-Accounting bilateral scheme. Offset your high retail consumption tariffs and receive credit at fixed export buyback rates.',
      icon: <Network className="w-5 h-5 text-brand-green" />,
      points: [
        'Bi-Directional Utility Net Metering',
        'Standard Export Rates up to LKR 20.90/kWh',
        'Direct Offset against High LKR 100/kWh Tiers',
        'Substation Interconnection Approvals'
      ],
      specs: 'Fully compliant with CEB Grid Interconnection codes'
    },
    {
      title: 'BESS Hybrid Storage Backup',
      scheme: 'Smart Hybrid & LFP Stack',
      desc: 'Integrate advanced Battery Energy Storage Systems (BESS) using high-voltage energy stacks to maintain operations during peak outages or load shedding.',
      icon: <Battery className="w-5 h-5 text-brand-blue" />,
      points: [
        '16kW LV Lithium Backup Stacks',
        '112kW HV Industrial Storage Arrays',
        'Intelligent Hybrid Energy Control Systems',
        'Zero-Latency Static Bypass Switch'
      ],
      specs: 'Lithium Iron Phosphate (LFP) safe battery architecture'
    },
    {
      title: 'Operations & Maintenance (O&M)',
      scheme: 'Thermographic Scan & Safety Check',
      desc: 'Maintain peak efficiency through comprehensive panel thermographic diagnostics, grounding integrity insulation tests, and structural array checkups.',
      icon: <Sun className="w-5 h-5 text-amber-500" />,
      points: [
        'Panel Thermographic Imaging Checks',
        'Insulation & Grounding Resistance tests',
        'MC4 Connector Integrity Sizing',
        'BMS Inverter Firmware Flash Tuning'
      ],
      specs: 'Insulation testing up to 1000V DC operating ranges'
    }
  ];

  const benefits = [
    { 
      title: 'Optimized Energy Yield', 
      desc: 'Deploying dynamic double-MPPT smart inverters ensures maximum power point tracking even in partial cloud offsets.', 
      icon: <TrendingDown className="w-5 h-5 text-brand-green" /> 
    },
    { 
      title: 'Certified Wind Compliance', 
      desc: 'Every mounting structure is fabricated with hot-dipped galvanized steel and wind-compliance certified up to 180 km/h.', 
      icon: <ShieldCheck className="w-5 h-5 text-slate-800" /> 
    },
    { 
      title: 'Decarbonized Grid Sourcing', 
      desc: 'Offset direct carbon emissions to meet your corporate environmental compliance goals with transparent reporting.', 
      icon: <Sun className="w-5 h-5 text-brand-green" /> 
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <PageHero
        eyebrow="Solar PV Systems"
        title="Engineering high-yield solar solutions"
        description="We evaluate your rooftop surface, active load cycles, and local substation conditions before deploying certified Net-Accounting or BESS hybrid storage networks."
        bgImage={images.heroSolar}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full space-y-16 flex-grow">
        
        {/* Section 1: Detailed Systems Architectures */}
        <div className="space-y-6">
          <div className="max-w-3xl">
            <span className="text-[9px] font-bold text-brand-blue uppercase tracking-widest block mb-2">EPC Sourcing Models</span>
            <h2 className="text-2xl font-extrabold text-slate-950 tracking-tight">Technical Grid Architectures</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {systems.map((system) => (
              <article 
                key={system.title} 
                className="bg-white border border-slate-200/80 rounded-2xl p-6 lg:p-8 hover:border-brand-green/35 shadow-sm hover:shadow-xl hover:shadow-slate-100/50 hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-center shrink-0">
                      {system.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-black text-slate-900 leading-tight">{system.title}</h3>
                      <span className="text-[8px] font-bold uppercase tracking-wider text-slate-400 block mt-0.5">{system.scheme}</span>
                    </div>
                  </div>
                  
                  <p className="text-xs leading-relaxed text-slate-600">{system.desc}</p>
                  
                  <ul className="space-y-2 pt-2 border-t border-slate-50">
                    {system.points.map((point) => (
                      <li key={point} className="flex gap-2.5 text-[10px] font-medium text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[8px] font-mono text-slate-400 font-bold uppercase tracking-widest">
                  <Info className="w-3.5 h-3.5 text-slate-300" />
                  <span>{system.specs}</span>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Section 2: Interactive Dynamic Solar ROI Sizer & Calculator */}
        <div className="bg-slate-50 border border-slate-200/60 rounded-2xl p-6 lg:p-10">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Input Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="inline-flex items-center gap-1 bg-brand-green/10 border border-brand-green/20 px-3 py-1 rounded-full text-[9px] font-black text-brand-green uppercase tracking-widest">
                  <Calculator className="w-3 h-3" /> Interactive System Sizer
                </span>
                <h3 className="text-xl font-extrabold text-slate-950 tracking-tight leading-tight">
                  Net-Accounting ROI Calculator
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Enter your current monthly electricity bill to calculate the recommended system capacity, required area, and estimated payback schedule.
                </p>
              </div>

              {/* Bill Input Range Slider */}
              <div className="space-y-2 bg-white border border-slate-200/70 p-4 rounded-xl shadow-sm">
                <div className="flex justify-between items-baseline">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Monthly Energy Bill</span>
                  <span className="text-lg font-black text-brand-dark">Rs. {monthlyBill.toLocaleString()}</span>
                </div>
                <input 
                  type="range" 
                  min="1000" 
                  max="300000" 
                  step="1000" 
                  value={monthlyBill} 
                  onChange={(e) => setMonthlyBill(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-green my-3"
                />
                <div className="flex justify-between text-[9px] font-bold text-slate-400 uppercase tracking-widest font-mono">
                  <span>Rs. 1,000</span>
                  <span>Rs. 150k</span>
                  <span>Rs. 300k</span>
                </div>
              </div>

              {/* Toggle Regulatory Reference Schedule */}
              <div>
                <button
                  onClick={() => setViewTariffTable(!viewTariffTable)}
                  className="inline-flex items-center gap-1.5 text-[9px] font-bold text-brand-blue hover:text-brand-dark uppercase tracking-wider outline-none border border-brand-blue/20 bg-brand-blue/5 px-4 py-2.5 rounded-lg w-full justify-center transition-colors"
                >
                  <TableProperties className="w-4 h-4" />
                  <span>{viewTariffTable ? 'Hide CEB Tariff Tables' : 'View CEB Regulatory Tariff Tables'}</span>
                </button>
              </div>

            </div>

            {/* Results Grid Column */}
            <div className="lg:col-span-7 bg-white border border-slate-200 rounded-xl p-6 lg:p-8 shadow-sm space-y-6">
              
              <div>
                <span className="text-[8px] font-mono font-bold text-slate-400 uppercase tracking-widest block border-b border-slate-100 pb-2 mb-4">
                  Sri Lankan CEB Net-Accounting Sizing Estimate (Domestic Tariff Schedule)
                </span>
                
                <div className="grid sm:grid-cols-3 gap-6">
                  <div className="space-y-1">
                    <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider block">Inverter AC Size</span>
                    <p className="text-2xl font-black text-brand-dark">{recommendedKW} <span className="text-xs font-bold text-slate-400">kW</span></p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider block">DC Array Capacity</span>
                    <p className="text-2xl font-black text-amber-600">{dcCapacityKW} <span className="text-xs font-bold text-slate-400">kW</span></p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider block">620W Panels (DC/AC: {dcAcRatio})</span>
                    <p className="text-2xl font-black text-brand-dark">{panelCount} <span className="text-xs font-bold text-slate-400">Units</span></p>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider block">Est. Consumption</span>
                    <p className="text-2xl font-black text-slate-700">{Math.round(calculatedKWh)} <span className="text-xs font-bold text-slate-400">kWh/mo</span></p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider block">Est. Solar Generation</span>
                    <p className="text-2xl font-black text-brand-green">{Math.round(monthlyGeneration)} <span className="text-xs font-bold text-slate-400">kWh/mo</span></p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider block">Est. Cash Export Income</span>
                    <p className="text-2xl font-black text-brand-blue">Rs. {Math.round(exportEarnings).toLocaleString()}</p>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider block">Required Roof Area</span>
                    <p className="text-2xl font-black text-slate-700">{requiredArea} <span className="text-xs font-bold text-slate-400">Sq.Ft.</span></p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider block">Export Rate (CEB)</span>
                    <p className="text-2xl font-black text-slate-700">Rs. {exportRate.toFixed(2)}</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider block">Est. 25-Yr Net Earnings</span>
                    <p className="text-2xl font-black text-brand-green">Rs. {(lifetimeSavings / 1000000).toFixed(1)}M</p>
                  </div>
                </div>
              </div>

              {/* Notes */}
              <div className="space-y-2">
                <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg flex items-start gap-2.5 text-[10px] text-amber-700 leading-relaxed select-none">
                  <Info className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <p><strong>Note:</strong> This is not an exact calculation. This is an idea to get only. Actual system performance depends on site conditions, shading, orientation, and grid parameters.</p>
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-start gap-2.5 text-[10px] text-slate-500 leading-relaxed select-none">
                  <Info className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <p><strong>Note:</strong> The project cost may vary due to the components and configurations selected. Contact us for an accurate project quotation.</p>
                </div>
              </div>

            </div>

          </div>

          {/* Collapsible Tariff Guide Tables (User provided parameters) */}
          {viewTariffTable && (
            <div className="mt-8 pt-8 border-t border-slate-200 animate-slide-up space-y-6">
              
              <div className="grid md:grid-cols-2 gap-8">
                
                {/* Standard Export Rates Table */}
                <div className="space-y-3">
                  <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-2">
                    Standard Rooftop Solar PV Export Rates
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-slate-200 text-[10px]">
                      <thead className="bg-slate-100">
                        <tr>
                          <th className="px-3 py-2 text-left font-bold text-slate-500 uppercase tracking-wider">Capacity Range</th>
                          <th className="px-3 py-2 text-right font-bold text-slate-500 uppercase tracking-wider">Buyback Rate (LKR / kWh)</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-slate-100 font-medium text-slate-600">
                        <tr><td className="px-3 py-2">0 – 5 kW</td><td className="px-3 py-2 text-right font-mono font-bold text-brand-green">LKR 20.90</td></tr>
                        <tr><td className="px-3 py-2">5 – 20 kW</td><td className="px-3 py-2 text-right font-mono font-bold text-brand-green">LKR 19.61</td></tr>
                        <tr><td className="px-3 py-2">20 – 100 kW</td><td className="px-3 py-2 text-right font-mono font-bold text-brand-green">LKR 17.46</td></tr>
                        <tr><td className="px-3 py-2">100 – 500 kW</td><td className="px-3 py-2 text-right font-mono font-bold text-brand-green">LKR 15.49</td></tr>
                        <tr><td className="px-3 py-2">500 kW – 1 MW</td><td className="px-3 py-2 text-right font-mono font-bold text-brand-green">LKR 15.07</td></tr>
                        <tr><td className="px-3 py-2">1 MW+</td><td className="px-3 py-2 text-right font-mono font-bold text-brand-green">LKR 14.46</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* CEB Domestic Import Rates Table */}
                <div className="space-y-3">
                  <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-2">
                    CEB Domestic Utility Tariffs (Effective 11th May 2026)
                  </h4>
                  <div className="overflow-x-auto max-h-[220px] overflow-y-auto border border-slate-100 rounded-lg">
                    <table className="min-w-full divide-y divide-slate-200 text-[9px]">
                      <thead className="bg-slate-100 sticky top-0">
                        <tr>
                          <th className="px-3 py-2 text-left font-bold text-slate-500 uppercase tracking-wider">Consumption Scheme</th>
                          <th className="px-3 py-2 text-right font-bold text-slate-500 uppercase tracking-wider">Energy (LKR/kWh)</th>
                          <th className="px-3 py-2 text-right font-bold text-slate-500 uppercase tracking-wider">Fixed (LKR/month)</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-slate-100 text-slate-600 font-medium">
                        <tr className="bg-slate-50/50"><td colSpan={3} className="px-3 py-1 font-bold text-[8px] text-brand-blue uppercase tracking-widest">Consumption 0 - 60 kWh</td></tr>
                        <tr><td className="px-3 py-1.5">Block 1: 0 - 30 kWh</td><td className="px-3 py-1.5 text-right font-mono">5.00</td><td className="px-3 py-1.5 text-right font-mono">80.00</td></tr>
                        <tr><td className="px-3 py-1.5">Block 2: 31 - 60 kWh</td><td className="px-3 py-1.5 text-right font-mono">9.00</td><td className="px-3 py-1.5 text-right font-mono">210.00</td></tr>
                        
                        <tr className="bg-slate-50/50"><td colSpan={3} className="px-3 py-1 font-bold text-[8px] text-brand-blue uppercase tracking-widest">Consumption 60 - 180 kWh (Category B)</td></tr>
                        <tr><td className="px-3 py-1.5">Block 1: 0 - 60 kWh</td><td className="px-3 py-1.5 text-right font-mono">14.00</td><td className="px-3 py-1.5 text-right font-mono">400.00</td></tr>
                        <tr><td className="px-3 py-1.5">Block 2: 61 - 90 kWh</td><td className="px-3 py-1.5 text-right font-mono">20.00</td><td className="px-3 py-1.5 text-right font-mono">400.00</td></tr>
                        <tr><td className="px-3 py-1.5">Block 3: 91 - 120 kWh</td><td className="px-3 py-1.5 text-right font-mono">28.00</td><td className="px-3 py-1.5 text-right font-mono">1,000.00</td></tr>
                        <tr><td className="px-3 py-1.5">Block 4: 121 - 180 kWh</td><td className="px-3 py-1.5 text-right font-mono">44.00</td><td className="px-3 py-1.5 text-right font-mono">1,500.00</td></tr>
                        <tr><td className="px-3 py-1.5">Block 5: Above 180 kWh</td><td className="px-3 py-1.5 text-right font-mono">85.00</td><td className="px-3 py-1.5 text-right font-mono">2,100.00</td></tr>

                        <tr className="bg-slate-50/50"><td colSpan={3} className="px-3 py-1 font-bold text-[8px] text-brand-blue uppercase tracking-widest">Consumption Above 180 kWh (Category C)</td></tr>
                        <tr><td className="px-3 py-1.5">Block 1: 0 - 180 kWh</td><td className="px-3 py-1.5 text-right font-mono">32.50</td><td className="px-3 py-1.5 text-right font-mono">1,500.00</td></tr>
                        <tr><td className="px-3 py-1.5">Block 2: Above 180 kWh</td><td className="px-3 py-1.5 text-right font-mono">100.00</td><td className="px-3 py-1.5 text-right font-mono">2,500.00</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>

            </div>
          )}

        </div>

        {/* Solar Performance Chart */}
        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 lg:p-10 shadow-sm">
          <div className="mb-6">
            <span className="text-[9px] font-bold text-brand-blue uppercase tracking-widest block mb-1">System Performance</span>
            <h3 className="text-xl font-extrabold text-slate-950 tracking-tight">Monthly Solar Generation vs Consumption</h3>
            <p className="text-xs text-slate-500 mt-1">Reference profile for a {recommendedKW} kW system under Sri Lanka standard irradiance conditions (kWh / day).</p>
          </div>
          {/* Legend */}
          <div className="flex items-center gap-6 mb-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-sm bg-brand-green inline-block"></span>
              <span className="text-[10px] font-semibold text-slate-500">New System Generation (kWh/day)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-sm bg-slate-400 inline-block opacity-40"></span>
              <span className="text-[10px] font-semibold text-slate-500">Consumption (kWh/day)</span>
            </div>
          </div>
          <SolarPerformanceChart profile={solarProfile} dailyConsumption={calculatedKWh / 30} />
        </div>

        {/* Section 3: Engineering Sizing Benefits */}
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="bg-white border border-slate-200/80 hover:border-slate-300 rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group">
              <div className="w-10 h-10 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {benefit.icon}
              </div>
              <h3 className="text-sm font-extrabold text-slate-950 mb-2">{benefit.title}</h3>
              <p className="text-xs leading-relaxed text-slate-600">{benefit.desc}</p>
            </div>
          ))}
        </div>

        {/* Section 4: Grid Connection Interconnection Timeline */}
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 items-center">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 shadow-md">
            <img 
              src="/images/solar.png" 
              alt="A2Z Engineering Certified Panel Array" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div className="space-y-6">
            <div className="space-y-1">
              <span className="text-[9px] font-bold text-brand-blue uppercase tracking-widest block">EPC Delivery Scope</span>
              <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight leading-tight">
                A Clear Process from Survey to Handover
              </h3>
            </div>
            
            <div className="space-y-4">
              {[
                { label: 'Site Feasibility & Load Profile Review', desc: 'Evaluating rooftop orientation, shadow angles, shading index, and maximum power demand profiles.' },
                { label: 'CAD Design & Scheme Approval', desc: 'Generating detailed single-line schematics, structural weight distribution, and CEB grid scheme application files.' },
                { label: 'Certified Mechanical Installation', desc: 'Mounting hot-dipped galvanized structures, solar array cabling routing, and dual surge protection cabinets.' },
                { label: 'Substation Interconnection & SCADA Handover', desc: 'Conducting insulation testing, utility meter swapping, active Net-Accounting syncing, and smart telemetry commissioning.' }
              ].map((step, i) => (
                <div key={step.label} className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-green text-white text-[10px] font-bold font-mono">
                    {i + 1}
                  </span>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">{step.label}</h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed mt-0.5">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>

      <CTABand
        title="Planning a solar PV installation?"
        description="Share your location, transformer capacity, and average electricity usage. We will recommend the optimal scheme with detailed cost projections."
        primaryLabel="Request site visit"
        primaryTo="/contact?inquiry=solar-site-visit"
      />
    </div>
  );
}
