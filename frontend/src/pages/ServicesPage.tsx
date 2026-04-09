import { CheckCircle2 } from 'lucide-react';

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
          <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="absolute -top-10 -right-20 w-[600px] h-[600px] opacity-10 blur-3xl">
            <ellipse cx="200" cy="200" rx="180" ry="120" fill="#7CB05D" />
          </svg>
          <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="absolute top-10 right-10 w-[300px] h-[300px] opacity-[0.2]">
            <path d="M100,100 Q200,300 300,100" fill="none" stroke="#7CB05D" strokeWidth="50" strokeLinecap="round" className="opacity-20" />
            <circle cx="200" cy="200" r="40" fill="#2B3990" className="opacity-10" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col">
               <span className="text-[10px] font-bold text-brand-blue uppercase tracking-[0.2em] mb-4">Service Solutions</span>
               <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-brand-dark tracking-tight">Our Engineering Services</h1>
               <p className="text-lg text-slate-600 leading-relaxed max-w-4xl">
                 Dedicated to precision and excellence. From telecommunications infrastructure to complex civil engineering, we deliver professional solutions tailored to modern industrial standards.
               </p>
            </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full flex-grow space-y-24">
         {serviceCategories.map((category, index) => {
            const isReversed = index % 2 !== 0;
            return (
               <div key={category.id} className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-start`}>
                  
                  {/* Visual Context Wrapper */}
                  <div className="w-full lg:w-5/12">
                     <div className="aspect-[4/3] bg-slate-50 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-center p-6">
                        <div className="w-full h-full bg-white rounded-xl border border-slate-100 flex items-center justify-center">
                           <span className="text-slate-300 font-bold uppercase tracking-widest text-[10px]">[{category.visual}]</span>
                        </div>
                     </div>
                  </div>

                  {/* Text Data Block */}
                  <div className="w-full lg:w-7/12 pt-4">
                     <div className="inline-flex items-center gap-3 mb-6">
                        <span className="w-10 h-1 bg-brand-lightblue rounded-full"></span>
                        <h2 className="text-[10px] font-bold text-brand-dark uppercase tracking-widest">Engineering Division</h2>
                     </div>
                     <h3 className="text-3xl font-extrabold text-slate-900 mb-6 tracking-tight">{category.title}</h3>
                     <p className="text-slate-600 leading-relaxed mb-10 text-lg">{category.desc}</p>
                     
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
      <section className="bg-brand-dark py-20 text-white">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-3xl font-extrabold mb-6 tracking-tight uppercase tracking-widest text-sm text-[12px] opacity-70">The A2Z Standard</h3>
            <h4 className="text-3xl md:text-5xl font-extrabold tracking-tighter mb-8 leading-tight">
               Precision Installation. <span className="text-brand-green">Guaranteed Integrity.</span>
            </h4>
            <p className="text-brand-muted mb-10 text-lg max-w-2xl mx-auto italic">
               Our multi-disciplinary team ensures that every phase of your project is handled with technical mastery and professional rigour.
            </p>
         </div>
      </section>

    </div>
  );
}
