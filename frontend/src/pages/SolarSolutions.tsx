import { CheckCircle2, Factory, HandHeart, ShieldCheck, Sun } from 'lucide-react';

export function SolarSolutions() {
  const reasons = [
    { title: "Eco-Friendly Energy", desc: "Clean, renewable resource reducing carbon footprint and protecting the environment for future generations.", icon: <HandHeart className="w-6 h-6 text-brand-green" /> },
    { title: "Cost Savings", desc: "Reduce electricity bills significantly. Over time, the initial investment pays for itself with long-term savings.", icon: <CheckCircle2 className="w-6 h-6 text-brand-blue" /> },
    { title: "Energy Independence", desc: "Reduce grid reliance and ensure a stable energy source, especially in areas with frequent power outages.", icon: <ShieldCheck className="w-6 h-6 text-brand-dark" /> },
    { title: "Low Maintenance", desc: "Solar PV systems are durable and require minimal maintenance, providing a hassle-free energy solution.", icon: <Factory className="w-6 h-6 text-brand-lightblue" /> },
    { title: "Increase Property Value", desc: "Installing solar panels can increase value, making it an attractive feature for buyers or renters.", icon: <Sun className="w-6 h-6 text-amber-500" /> }
  ];

  const services = [
    { title: "Site Assessment & Consultation", desc: "Our experts evaluate your property to design a system that maximizes energy production." },
    { title: "Custom System Design", desc: "Tailored solutions that align with goals, whether powering a home or an entire business block." },
    { title: "Installation & Setup", desc: "Certified installers ensure an efficient process utilizing top-tier components." },
    { title: "Maintenance & Support", desc: "Ongoing maintenance guaranteeing your solar system operates at peak efficiency year after year." }
  ];

  const partners = ["Jinko", "JA Solar", "Solax", "Solis"];

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      
      {/* Advanced Organic Header Design */}
      <section className="relative bg-gradient-to-br from-slate-50 to-white pt-16 pb-16 border-b border-slate-100 overflow-hidden">
        {/* Abstract Organic Shapes (Advanced SVG) */}
        <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none z-0">
          <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="absolute -top-10 -right-10 w-[500px] h-[500px] opacity-10 blur-2xl">
            <circle cx="200" cy="200" r="150" fill="#7CB05D" />
          </svg>
          <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="absolute top-10 right-0 w-[300px] h-[300px] opacity-[0.2]">
            <path d="M50,200 Q150,50 350,200" fill="none" stroke="#7CB05D" strokeWidth="60" strokeLinecap="round" className="opacity-30" />
            <circle cx="100" cy="100" r="60" fill="#2B3990" className="opacity-10" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="flex flex-col">
              <span className="text-[10px] font-bold text-brand-blue uppercase tracking-[0.2em] mb-4">Engineering Excellence</span>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-brand-dark tracking-tight">Solar PV Systems</h1>
              <p className="text-lg text-slate-600 leading-relaxed max-w-4xl">
                At A2Z Engineering (Pvt) Ltd, we are dedicated to providing clean, renewable energy solutions for homes and businesses through advanced Solar PV technology and expert integration.
              </p>
           </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
         <div className="mb-12">
            <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">Why Choose Solar PV Systems?</h3>
            <div className="w-16 h-1 bg-brand-green mt-4 rounded-full"></div>
         </div>
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((r, i) => (
              <div key={i} className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm flex flex-col">
                 <div className="mb-4 bg-slate-50 w-12 h-12 rounded-xl flex items-center justify-center border border-slate-100">
                   {r.icon}
                 </div>
                 <h4 className="text-xl font-bold text-brand-dark mb-3 tracking-tight">{r.title}</h4>
                 <p className="text-slate-600 leading-relaxed text-sm flex-grow">{r.desc}</p>
              </div>
            ))}
         </div>
      </section>

      {/* Our Services */}
      <section className="bg-brand-dark py-20 text-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-extrabold mb-12 tracking-tight">Our Specific Offerings</h3>
            <div className="grid md:grid-cols-2 gap-8">
               {services.map((s, i) => (
                 <div key={i} className="flex gap-4 p-6 bg-white/5 rounded-2xl border border-white/10">
                    <div className="text-brand-green font-extrabold text-2xl">0{i+1}.</div>
                    <div>
                      <h4 className="text-xl font-bold tracking-tight mb-2">{s.title}</h4>
                      <p className="text-brand-muted text-sm leading-relaxed">{s.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Trusted Partners */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full border-b border-slate-100">
         <div className="text-center mb-12">
            <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-4">Our Trusted Partners</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We provide the best solutions sourced from the most respected names in the global energy industry.
            </p>
         </div>
         <div className="flex flex-wrap justify-center gap-6 lg:gap-12">
            {partners.map(p => (
              <div key={p} className="bg-slate-50 px-10 py-6 rounded-2xl border border-slate-100 flex items-center justify-center shrink-0 w-48 shadow-sm">
                 <span className="font-extrabold text-xl text-slate-400 tracking-widest uppercase">{p}</span>
              </div>
            ))}
         </div>
      </section>

      {/* Why A2Z Eng */}
      <section className="bg-white py-20">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-6">Why A2Z Engineering?</h3>
            <p className="text-slate-600 leading-relaxed text-lg italic">
              With years of experience and a team of certified professionals, A2Z Engineering (Pvt) Ltd is your trusted provider. We are committed to delivering reliable, affordable, and high-quality solutions, ensuring you transition cleanly to a sustainable future with absolute structural integrity.
            </p>
         </div>
      </section>

    </div>
  );
}
