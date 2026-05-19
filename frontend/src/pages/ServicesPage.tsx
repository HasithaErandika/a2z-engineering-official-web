import { CheckCircle2 } from 'lucide-react';

// Custom Service Visualizer: Technical blueprint and CAD vector rendering modules
const ServiceVisual = ({ id }: { id: string }) => {
  switch (id) {
    case "telecom":
      return (
        <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-950 to-brand-dark flex flex-col items-center justify-center p-6 relative overflow-hidden transition-all duration-500 group-hover:from-slate-800">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
          
          {/* Cellular Tower Graphic */}
          <svg className="w-full h-full max-h-[160px] text-brand-green" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            {/* Animated Radio Waves */}
            <circle cx="50" cy="25" r="8" fill="none" stroke="currentColor" strokeWidth="1" className="animate-ping origin-center opacity-30" style={{ animationDuration: '3s' }} />
            <circle cx="50" cy="25" r="16" fill="none" stroke="currentColor" strokeWidth="0.75" className="animate-ping origin-center opacity-20" style={{ animationDuration: '4s' }} />
            <circle cx="50" cy="25" r="24" fill="none" stroke="#2B3990" strokeWidth="0.5" className="animate-ping origin-center opacity-10" style={{ animationDuration: '5s' }} />

            {/* Tower Structure */}
            <path d="M 46,85 L 48,25 L 52,25 L 54,85 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M 40,85 L 50,25 L 60,85" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2" />
            {/* Cross braces */}
            <line x1="47.5" y1="35" x2="52.5" y2="35" stroke="currentColor" strokeWidth="1" />
            <line x1="47" y1="45" x2="53" y2="45" stroke="currentColor" strokeWidth="1" />
            <line x1="46.5" y1="55" x2="53.5" y2="55" stroke="currentColor" strokeWidth="1" />
            <line x1="45" y1="70" x2="55" y2="70" stroke="currentColor" strokeWidth="1" />
            
            {/* Antennas */}
            <rect x="44" y="24" width="2" height="6" fill="#2B3990" rx="0.5" />
            <rect x="54" y="24" width="2" height="6" fill="#2B3990" rx="0.5" />
            <circle cx="50" cy="20" r="2.5" fill="currentColor" className="animate-pulse" />
          </svg>
          <div className="absolute bottom-3 left-4 text-[8px] font-mono text-slate-400 tracking-wider">FREQ: 5.8 GHz // SIGNAL ACTIVE</div>
        </div>
      );

    case "electrical":
      return (
        <div className="w-full h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-955 flex flex-col items-center justify-center p-6 relative overflow-hidden transition-all duration-500 group-hover:from-slate-900">
          <div className="absolute inset-0 opacity-[0.15] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          
          {/* Circuit Board Graphic */}
          <svg className="w-full h-full max-h-[160px]" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            {/* Connection traces */}
            <path d="M 10,20 H 40 L 50,30 V 70 L 60,80 H 90" fill="none" stroke="#7CB05D" strokeWidth="1.25" strokeLinecap="round" />
            <path d="M 10,80 H 30 L 40,70 V 30 L 50,20 H 90" fill="none" stroke="#2B3990" strokeWidth="1.25" strokeLinecap="round" strokeDasharray="3 2" />
            <path d="M 30,50 H 70" fill="none" stroke="#7CB05D" strokeWidth="0.75" />

            {/* Microchips & Nodes */}
            <rect x="38" y="38" width="24" height="24" fill="#1e293b" stroke="#7CB05D" strokeWidth="1.5" rx="2" />
            <circle cx="50" cy="50" r="4" fill="#2B3990" className="animate-pulse" />
            
            {/* Board pins */}
            <circle cx="10" cy="20" r="2.5" fill="#7CB05D" />
            <circle cx="10" cy="80" r="2.5" fill="#2B3990" />
            <circle cx="90" cy="20" r="2.5" fill="#2B3990" />
            <circle cx="90" cy="80" r="2.5" fill="#7CB05D" />

            {/* Glowing flow nodes */}
            <circle cx="50" cy="30" r="2" fill="#7CB05D" className="animate-ping" />
          </svg>
          <div className="absolute bottom-3 left-4 text-[8px] font-mono text-slate-400 tracking-wider">LOAD: NOMINAL // VOLTAGE: 230V</div>
        </div>
      );

    case "ac":
      return (
        <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 flex flex-col items-center justify-center p-6 relative overflow-hidden transition-all duration-500 group-hover:from-slate-850">
          <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(#ffffff_1.5px,transparent_1.5px)] [background-size:20px_20px]"></div>
          
          {/* Fan & HVAC airflow */}
          <svg className="w-full h-full max-h-[160px] text-brand-lightblue" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            {/* Air flow lines */}
            <path d="M 10,35 Q 30,20 50,35 T 90,35" fill="none" stroke="#38bdf8" strokeWidth="1" strokeDasharray="4 2" />
            <path d="M 10,65 Q 30,50 50,65 T 90,65" fill="none" stroke="#2B3990" strokeWidth="1" strokeDasharray="4 2" />

            {/* Fan circular body */}
            <circle cx="50" cy="50" r="24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 3" />
            <circle cx="50" cy="50" r="28" fill="none" stroke="currentColor" strokeWidth="0.75" />

            {/* Fan Blades (Animated Rotation) */}
            <g className="animate-[spin_4s_linear_infinite] origin-[50px_50px]">
              <circle cx="50" cy="50" r="4" fill="currentColor" />
              <path d="M 50,50 L 50,28 C 47,32 45,38 50,42" fill="currentColor" stroke="currentColor" strokeWidth="1" />
              <path d="M 50,50 L 50,72 C 53,68 55,62 50,58" fill="currentColor" stroke="currentColor" strokeWidth="1" />
              <path d="M 50,50 L 72,50 C 68,47 62,45 58,50" fill="currentColor" stroke="currentColor" strokeWidth="1" />
              <path d="M 50,50 L 28,50 C 32,53 38,55 42,50" fill="currentColor" stroke="currentColor" strokeWidth="1" />
            </g>
          </svg>
          <div className="absolute bottom-3 left-4 text-[8px] font-mono text-slate-400 tracking-wider">TEMP IN: 28°C // TEMP OUT: 18°C</div>
        </div>
      );

    case "civil":
      return (
        <div className="w-full h-full bg-gradient-to-br from-slate-900 to-slate-950 flex flex-col items-center justify-center p-6 relative overflow-hidden transition-all duration-500 group-hover:from-slate-850">
          {/* Blueprint style grid */}
          <div className="absolute inset-0 opacity-[0.2] bg-[linear-gradient(to_right,#0284c715_1px,transparent_1px),linear-gradient(to_bottom,#0284c715_1px,transparent_1px)] bg-[size:10px_10px]"></div>
          
          {/* Mechanical CAD diagram of brackets */}
          <svg className="w-full h-full max-h-[160px] text-brand-lightblue" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            {/* Center crosshair */}
            <line x1="50" y1="5" x2="50" y2="95" stroke="#0284c7" strokeWidth="0.5" strokeDasharray="8 4 2 4" opacity="0.3" />
            <line x1="5" y1="50" x2="95" y2="50" stroke="#0284c7" strokeWidth="0.5" strokeDasharray="8 4 2 4" opacity="0.3" />

            {/* Bracket Plate Layout */}
            <rect x="25" y="25" width="50" height="50" fill="none" stroke="currentColor" strokeWidth="1.5" rx="3" />
            <rect x="32" y="32" width="36" height="36" fill="none" stroke="#7CB05D" strokeWidth="1" strokeDasharray="4 2" />

            {/* Mounting Holes */}
            <circle cx="32" cy="32" r="3" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="68" cy="32" r="3" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="32" cy="68" r="3" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="68" cy="68" r="3" fill="none" stroke="currentColor" strokeWidth="1" />

            {/* Tension center mount */}
            <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="1.25" />
            <circle cx="50" cy="50" r="5" fill="#7CB05D" />

            {/* Dimension Lines */}
            <line x1="25" y1="85" x2="75" y2="85" stroke="#0284c7" strokeWidth="0.75" />
            <line x1="25" y1="82" x2="25" y2="88" stroke="#0284c7" strokeWidth="0.75" />
            <line x1="75" y1="82" x2="75" y2="88" stroke="#0284c7" strokeWidth="0.75" />
          </svg>
          <div className="absolute top-3 right-4 text-[6px] font-mono text-slate-400">SCALE: 1:1.5 // TOLERANCE: ±0.05</div>
        </div>
      );

    case "construction":
      return (
        <div className="w-full h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col items-center justify-center p-6 relative overflow-hidden transition-all duration-500 group-hover:from-slate-900">
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff0c_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0c_1px,transparent_1px)] bg-[size:15px_15px]"></div>
          
          {/* Hydraulic plumbing pipe network */}
          <svg className="w-full h-full max-h-[160px] text-brand-green" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            {/* Thick Pipe paths */}
            <path d="M 10,30 H 45 V 70 H 90" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" opacity="0.15" />
            <path d="M 10,30 H 45 V 70 H 90" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            
            {/* Parallel pipe */}
            <path d="M 10,42 H 35 V 82 H 90" fill="none" stroke="#2B3990" strokeWidth="4" strokeLinecap="round" opacity="0.15" />
            <path d="M 10,42 H 35 V 82 H 90" fill="none" stroke="#2B3990" strokeWidth="1.5" strokeLinecap="round" />

            {/* Pressure gauge */}
            <circle cx="65" cy="70" r="8" fill="#1e293b" stroke="currentColor" strokeWidth="1.5" />
            <line x1="65" y1="70" x2="69" y2="65" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="65" cy="70" r="1.5" fill="#7CB05D" />

            {/* Water flow arrow indicators */}
            <polygon points="25,28 30,30 25,32" fill="currentColor" />
            <polygon points="43,50 45,55 47,50" fill="currentColor" />
            <polygon points="80,68 85,70 80,72" fill="currentColor" />
          </svg>
          <div className="absolute bottom-3 left-4 text-[8px] font-mono text-slate-400 tracking-wider">SYS PRESS: 4.2 BAR // FLOW: NOMINAL</div>
        </div>
      );

    default:
      return null;
  }
};

export function ServicesPage() {
  const serviceCategories = [
    {
      id: "telecom",
      title: "Telecommunication Services",
      desc: "Telecommunication services are the backbone of modern connectivity, enabling seamless communication across the globe. At A2Z Engineering, we deliver cutting-edge telecommunications solutions designed to meet the diverse needs of individuals and businesses.",
      visual: "Telecommunication_Services_1",
      points: [
        { name: "High-Speed Internet Connectivity", detail: "Reliable and scalable network solutions to keep you online without interruption." },
        { name: "Secure Data Transmission", detail: "End-to-end encryption and advanced infrastructure to ensure your data stays protected." },
        { name: "Voice Communication Services", detail: "Clear, consistent, and cost-effective voice solutions for businesses of all sizes." },
        { name: "Mobile Solutions", detail: "Innovative and flexible mobility services to keep you connected on the go." }
      ]
    },
    {
      id: "electrical",
      title: "Electrical Installation",
      desc: "Welcome to our Electrical Installation Services, where expertise meets reliability. We provide comprehensive electrical solutions for both residential and commercial projects, ensuring safety, efficiency, and precision every step of the way.",
      visual: "Electrical_Installation_1",
      points: [
        { name: "Residential Installations", detail: "From lighting upgrades to complete home rewiring, we ensure your home’s electrical systems are safe and efficient." },
        { name: "Commercial Installations", detail: "Expert wiring and electrical setups for offices, retail spaces, and industrial buildings." },
        { name: "System Upgrades", detail: "Modernize outdated electrical systems to meet current safety codes and performance standards." },
        { name: "Custom Electrical Solutions", detail: "Tailored designs and installations to suit unique project requirements." }
      ]
    },
    {
      id: "ac",
      title: "Air Conditioning",
      desc: "Keep your cooling systems performing at their best with our professional AC maintenance and repair services. We ensure your air conditioning units operate efficiently, reliably, and safely — all year round.",
      visual: "AC_2",
      points: [
        { name: "Routine Maintenance", detail: "Comprehensive inspections, cleaning, and tune-ups to maintain peak performance." },
        { name: "Energy Efficiency Optimization", detail: "Adjustments and component checks to reduce energy consumption and operating costs." },
        { name: "Preventive Care", detail: "Early detection and correction of potential issues to avoid costly repairs." },
        { name: "AC Repairs", detail: "Fast and dependable repair services to restore comfort when your system breaks down." }
      ]
    },
    {
      id: "civil",
      title: "Civil Installation",
      desc: "We specialize in the fabrication and installation of high-quality brackets that play a vital role in cellular and microwave maintenance services. Our solutions are designed with precision and built to support the evolving needs of modern telecommunications infrastructure.",
      visual: "Security_Cam_2",
      points: [
        { name: "Custom Bracket Fabrication", detail: "Durable and precisely engineered support structures tailored to your project specifications." },
        { name: "Mounting Solutions", detail: "Intricate designs for antennas, microwave dishes, and other telecom equipment." },
        { name: "Cellular Site Grounding Systems", detail: "Expert installation to ensure safety, stability, and regulatory compliance." },
        { name: "Power System Installations", detail: "Reliable and efficient setups to keep critical communication systems operating without interruption." }
      ]
    },
    {
      id: "construction",
      title: "Construction works",
      desc: "We provide reliable and high-quality plumbing and minor civil construction solutions designed to meet the unique needs of both residential and commercial clients. Our experienced team combines technical expertise with a commitment to excellence.",
      visual: "ecosys",
      points: [
        { name: "Plumbing Solutions", detail: "Expert repair and installation services, including leaky faucets, piping systems, and drainage maintenance." },
        { name: "Civil Construction Works", detail: "Skilled handling of minor construction projects such as foundation repairs, concrete works, and structural improvements." },
        { name: "System Upgrades & Maintenance", detail: "Regular inspections and upgrades to ensure long-term functionality and safety." },
        { name: "Custom Solutions", detail: "Tailored services to meet specific project requirements and site conditions." }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      
      {/* Advanced Organic Header Design */}
      <section className="relative bg-gradient-to-br from-slate-50 to-white pt-16 pb-16 border-b border-slate-100 overflow-hidden">
        {/* Abstract Organic Shapes (Advanced SVG) */}
        <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none z-0">
          <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="absolute -top-7 -right-20 w-[600px] h-[600px] opacity-10 blur-3xl">
            <ellipse cx="200" cy="200" rx="180" ry="120" fill="#7CB05D" />
          </svg>
          <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="absolute top-7 right-10 w-[300px] h-[300px] opacity-[0.2]">
            <path d="M100,100 Q200,300 300,100" fill="none" stroke="#7CB05D" strokeWidth="50" strokeLinecap="round" className="opacity-20" />
            <circle cx="200" cy="200" r="40" fill="#2B3990" className="opacity-10" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col">
               <span className="text-[10px] font-bold text-brand-blue uppercase tracking-[0.2em] mb-4">Service Solutions</span>
               <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-brand-dark tracking-tight">Our Engineering Services</h1>
               <p className="text-base text-slate-600 leading-relaxed max-w-4xl">
                 Dedicated to precision and excellence. From telecommunications infrastructure to complex civil engineering, we deliver professional solutions tailored to modern industrial standards.
               </p>
            </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full flex-grow space-y-16">
         {serviceCategories.map((category, index) => {
            const isReversed = index % 2 !== 0;
            return (
               <div key={category.id} className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-start`}>
                  
                  {/* Visual Context Wrapper */}
                  <div className="w-full lg:w-5/12">
                     <div className="aspect-[4/3] rounded-lg border border-slate-100 shadow-sm overflow-hidden flex items-center justify-center relative group w-full">
                        <ServiceVisual id={category.id} />
                     </div>
                  </div>

                  {/* Text Data Block */}
                  <div className="w-full lg:w-7/12 pt-4">
                     <div className="inline-flex items-center gap-3 mb-6">
                        <span className="w-10 h-1 bg-brand-lightblue rounded-full"></span>
                        <h2 className="text-[10px] font-bold text-brand-dark uppercase tracking-widest">Engineering Division</h2>
                     </div>
                     <h3 className="text-2xl font-extrabold text-slate-900 mb-6 tracking-tight">{category.title}</h3>
                     <p className="text-slate-600 leading-relaxed mb-10 text-base">{category.desc}</p>
                     
                     <div className="grid sm:grid-cols-2 gap-x-10 gap-y-10">
                        {category.points.map((pt, i) => (
                           <div key={i} className="flex gap-4">
                              <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0 mt-1" />
                              <div>
                                 <h4 className="font-bold text-slate-900 mb-2 leading-tight text-sm uppercase tracking-wide">{pt.name}</h4>
                                 <p className="text-slate-500 text-[13px] leading-relaxed">{pt.detail}</p>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>

               </div>
            )
         })}
      </section>

      {/* Corporate Call to Action */}
      <section className="bg-brand-dark py-16 text-white">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-extrabold mb-6 tracking-tight uppercase tracking-widest text-sm text-[12px] opacity-70">The A2Z Standard</h3>
            <h4 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-8 leading-tight">
               Precision Installation. <span className="text-brand-green">Guaranteed Integrity.</span>
            </h4>
            <p className="text-brand-muted mb-10 text-base max-w-2xl mx-auto italic">
               Our multi-disciplinary team ensures that every phase of your project is handled with technical mastery and professional rigour.
            </p>
         </div>
      </section>

    </div>
  );
}
