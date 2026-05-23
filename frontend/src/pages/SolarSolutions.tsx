import { useState } from 'react';
import { Sun, TrendingDown, ShieldCheck } from 'lucide-react';
import { PageHero } from '../components/patterns/PageHero';
import { CTABand } from '../components/patterns/CTABand';
import { WhatA2zSolar } from '../components/solar/WhatA2zSolar';
import { SolarSystemTypesSection } from '../components/solar/SolarSystemTypesSection';
import { WarrantyGrid } from '../components/solar/WarrantyGrid';
import { ServiceMaintenanceSection } from '../components/solar/ServiceMaintenanceSection';
import { SolarFAQ } from '../components/solar/SolarFAQ';
import { SolarRoiPerformanceCard } from '../components/solar/SolarRoiPerformanceCard';
import { images } from '../data/site';

// Days in each calendar month
const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
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

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full space-y-20 flex-grow">
        <WhatA2zSolar />
        <SolarSystemTypesSection />

        <WarrantyGrid />

        <SolarRoiPerformanceCard
          monthlyBill={monthlyBill}
          onMonthlyBillChange={setMonthlyBill}
          viewTariffTable={viewTariffTable}
          onToggleTariffTable={() => setViewTariffTable((v) => !v)}
          recommendedKW={recommendedKW}
          dcCapacityKW={dcCapacityKW}
          panelCount={panelCount}
          dcAcRatio={dcAcRatio}
          calculatedKWh={calculatedKWh}
          monthlyGeneration={monthlyGeneration}
          exportEarnings={exportEarnings}
          requiredArea={requiredArea}
          exportRate={exportRate}
          lifetimeSavings={lifetimeSavings}
          solarProfile={solarProfile}
        />

        <ServiceMaintenanceSection />

        <SolarFAQ />

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
