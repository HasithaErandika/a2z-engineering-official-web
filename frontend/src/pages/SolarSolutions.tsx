import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  Sun, 
  TrendingDown, 
  ShieldCheck, 
  Calculator, 
  Info, 
  Battery, 
  Cpu, 
  Network,
  TableProperties
} from 'lucide-react';
import { PageHeader } from '../components/shared/PageHeader';

export function SolarSolutions() {
  const navigate = useNavigate();

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

  // 3. Recommended Sizing: At least 5 kW baseline as recommended by A2Z standard configuration
  // Average solar generation in Sri Lanka is 120 kWh per month per 1 kW (worst-case 5kW generates 600 units)
  const mathematicalSizing = calculatedKWh / 120;
  const recommendedKW = Math.max(5.0, Math.round(mathematicalSizing * 10) / 10);
  
  // 620W panels is standard for A2Z high-yield installations
  const panelCount = Math.ceil((recommendedKW * 1000) / 620);
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
  
  // Monthly solar generation = recommendedKW * 120 kWh (5kW generates 600 units)
  const monthlyGeneration = recommendedKW * 120;
  
  // Under Net-Accounting, excess energy above consumption is sold back to the grid
  const excessExportKWh = Math.max(0, monthlyGeneration - calculatedKWh);
  const exportEarnings = excessExportKWh * exportRate;

  // Monthly return consists of completely offsetting the monthly bill to Rs 0 + actual export revenue cash earnings
  const monthlySavings = monthlyBill + exportEarnings;
  const annualSavings = monthlySavings * 12;
  const paybackPeriod = Math.round((initialInvestment / annualSavings) * 10) / 10;
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
      <PageHeader
        eyebrow="Solar PV Systems"
        title="Engineering High-Yield Solar Solutions"
        description="We evaluate your specific rooftop surface, active load cycles, and local substation conditions before deploying certified Net-Accounting or BESS Hybrid storage networks."
        bgImage="/images/hero-solar.png"
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
                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#4E9F3D] my-3"
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
                    <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider block">Recommended Size</span>
                    <p className="text-2xl font-black text-brand-dark">{recommendedKW} <span className="text-xs font-bold text-slate-400">kW</span></p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider block">620W Panels Needed</span>
                    <p className="text-2xl font-black text-brand-dark">~{panelCount} <span className="text-xs font-bold text-slate-400">Units</span></p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider block">Required Roof Area</span>
                    <p className="text-2xl font-black text-[#4E9F3D]">{requiredArea} <span className="text-xs font-bold text-slate-400">Sq.Ft.</span></p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider block">CEB Export Buyback Rate</span>
                    <p className="text-2xl font-black text-brand-blue">Rs. {exportRate.toFixed(2)}</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider block">Calculated Monthly Consumption</span>
                    <p className="text-2xl font-black text-slate-800">{Math.round(calculatedKWh)} <span className="text-xs font-bold text-slate-400">kWh</span></p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider block">Capital Payback Period</span>
                    <p className="text-2xl font-black text-[#4E9F3D]">{paybackPeriod} <span className="text-xs font-bold text-slate-400">Years</span></p>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-5">
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Projected Capital Sizing Cost</span>
                  <span className="text-sm font-black text-slate-800">Rs. {initialInvestment.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Estimated 25-Year Net Earnings</span>
                  <span className="text-lg font-black text-[#4E9F3D]">Rs. {lifetimeSavings.toLocaleString()}</span>
                </div>
              </div>

              <div className="p-3.5 bg-slate-50 border border-slate-150 rounded-lg flex items-start gap-2.5 text-[10px] text-slate-500 leading-relaxed select-none">
                <Info className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                <p>
                  *Sizing is dynamically calculated to match 100% of your energy consumption under standard meteorological conditions in Sri Lanka. Buyback calculations apply CEB Net-Accounting tariff slabs.
                </p>
              </div>

            </div>

          </div>

          {/* Collapsible Tariff Guide Tables (User provided parameters) */}
          {viewTariffTable && (
            <div className="mt-8 pt-8 border-t border-slate-200 animate-in fade-in slide-in-from-top-2 duration-300 space-y-6">
              
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
                        <tr><td className="px-3 py-2">0 – 5 kW</td><td className="px-3 py-2 text-right font-mono font-bold text-[#4E9F3D]">LKR 20.90</td></tr>
                        <tr><td className="px-3 py-2">5 – 20 kW</td><td className="px-3 py-2 text-right font-mono font-bold text-[#4E9F3D]">LKR 19.61</td></tr>
                        <tr><td className="px-3 py-2">20 – 100 kW</td><td className="px-3 py-2 text-right font-mono font-bold text-[#4E9F3D]">LKR 17.46</td></tr>
                        <tr><td className="px-3 py-2">100 – 500 kW</td><td className="px-3 py-2 text-right font-mono font-bold text-[#4E9F3D]">LKR 15.49</td></tr>
                        <tr><td className="px-3 py-2">500 kW – 1 MW</td><td className="px-3 py-2 text-right font-mono font-bold text-[#4E9F3D]">LKR 15.07</td></tr>
                        <tr><td className="px-3 py-2">1 MW+</td><td className="px-3 py-2 text-right font-mono font-bold text-[#4E9F3D]">LKR 14.46</td></tr>
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
          <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-slate-150 shadow-md">
            <img 
              src="/images/solar-panel-product.png" 
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

        {/* Section 5: Survey Consultation CTA Box */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 lg:p-12 text-center space-y-6">
          <div className="inline-flex items-center gap-1.5 text-[9px] font-bold text-brand-blue uppercase tracking-widest bg-brand-blue/5 border border-brand-blue/10 px-3.5 py-1.5 rounded-full mx-auto">
            <Cpu className="w-3.5 h-3.5" /> Turnkey Sourcing EPC
          </div>
          <h3 className="text-2xl font-extrabold text-slate-950 tracking-tight leading-none">
            Planning a Solar PV Installation?
          </h3>
          <p className="text-xs leading-relaxed text-slate-600 max-w-2xl mx-auto">
            Share your location, transformer capacity, and average electricity usage. A2Z Engineering will recommend the optimal turnkey scheme (Net-Metering, Net-Accounting, or BESS Hybrid Backup) with detailed cost projections.
          </p>
          <div className="pt-2">
            <button 
              onClick={() => navigate('/contact')} 
              className="inline-flex items-center gap-2 rounded-lg bg-[#4E9F3D] hover:bg-brand-dark px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:shadow-lg transition-all outline-none"
            >
              Request Site Visit <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </section>
    </div>
  );
}
