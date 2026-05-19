import { PhoneCall, Mail, Clock, Globe } from 'lucide-react';
import { Button } from '../components/ui/Button';

export function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      
      {/* Advanced Organic Header Design */}
      <section className="relative bg-gradient-to-br from-slate-50 to-white pt-16 pb-16 border-b border-slate-100 overflow-hidden">
        {/* Abstract Organic Shapes (Advanced SVG) */}
        <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none z-0">
          <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="absolute -top-40 -right-20 w-[600px] h-[600px] opacity-10 blur-3xl">
            <circle cx="200" cy="200" r="180" fill="#7CB05D" />
          </svg>
          <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="absolute top-20 right-20 w-[300px] h-[300px] opacity-[0.2]">
            <path d="M50,300 Q200,50 350,300" fill="none" stroke="#7CB05D" strokeWidth="55" strokeLinecap="round" className="opacity-30" />
            <circle cx="50" cy="50" r="40" fill="#2B3990" className="opacity-10" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col">
               <span className="text-[10px] font-bold text-brand-blue uppercase tracking-[0.2em] mb-4">Connect With Us</span>
               <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-brand-dark tracking-tight leading-tight">
                 Contact Us
               </h1>
               <p className="text-base text-slate-600 leading-relaxed max-w-4xl">
                 Connect with our engineering specialists today. Whether you're seeking a quote for a solar grid or industrial HVAC maintenance, we’re here to deliver professional-grade support.
               </p>
            </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full flex-grow">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact Details Column */}
          <div className="space-y-8">
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Our Locations & Access</h2>
            
            {/* Global Offices */}
            <div className="bg-white border border-slate-100 rounded-lg p-6 shadow-sm">
               <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center border border-slate-100">
                     <Globe className="w-5 h-5 text-brand-blue" />
                  </div>
                  <h3 className="text-sm font-bold text-brand-dark uppercase tracking-widest">Global Operations</h3>
               </div>
                              <div className="grid md:grid-cols-2 gap-7">
                  <div className="space-y-3">
                     <span className="text-[10px] font-bold text-brand-green uppercase tracking-widest">Sri Lanka HQ</span>
                     <p className="text-slate-900 font-bold text-sm leading-tight">A2Z Engineering (Pvt) Ltd</p>
                     <p className="text-slate-500 text-xs leading-relaxed">
                        158/C/1, Ingiriya Rd, <br/>
                        Meepe Junction, Padukka.
                     </p>
                     <a 
                        href="https://www.google.com/maps/place/A2Z+Engineering+(Pvt)+Ltd/@6.8584842,80.0869738,1139m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3ae3ad561c57f781:0xcd4de2842c93df62!8m2!3d6.8584842!4d80.0918447!16s%2Fg%2F11vr956rqf?entry=ttu&g_ep=EgoyMDI2MDQwNi4wIKXMDSoASAFQAw%3D%3D" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[10px] font-bold text-brand-blue uppercase tracking-widest hover:text-brand-dark transition-colors"
                     >
                        View on Map <span className="text-xs">↗</span>
                     </a>
                  </div>
                  <div className="space-y-3">
                     <span className="text-[10px] font-bold text-brand-blue uppercase tracking-widest">USA Mother Company</span>
                     <p className="text-slate-900 font-bold text-sm leading-tight">Corporate Branch</p>
                     <p className="text-slate-500 text-xs leading-relaxed">
                        Las Vegas, <br/>
                        Nevada, USA.
                     </p>
                     <a 
                        href="https://www.google.com/maps/search/Las+Vegas,+Nevada,+USA" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[10px] font-bold text-brand-blue uppercase tracking-widest hover:text-brand-dark transition-colors"
                     >
                        View on Map <span className="text-xs">↗</span>
                     </a>
                  </div>
               </div>
            </div>

            {/* Quick Contact & Hours */}
            <div className="grid md:grid-cols-2 gap-6">
               <div className="bg-white border border-slate-100 rounded-lg p-6 shadow-sm">
                  <PhoneCall className="w-5 h-5 text-brand-green mb-4" />
                  <h4 className="text-[10px] font-bold text-brand-dark uppercase tracking-widest mb-2">Phone</h4>
                  <a href="tel:+94112995998" className="text-slate-900 font-black text-base hover:text-brand-blue transition-colors">+94 112 995 998</a>
               </div>
               <div className="bg-white border border-slate-100 rounded-lg p-6 shadow-sm">
                  <Mail className="w-5 h-5 text-brand-blue mb-4" />
                  <h4 className="text-[10px] font-bold text-brand-dark uppercase tracking-widest mb-2">Email</h4>
                  <a href="mailto:info@a2zengineering.lk" className="text-slate-900 font-black text-xs break-all hover:text-brand-blue transition-colors">info@a2zengineering.lk</a>
               </div>
            </div>

            <div className="bg-white border border-slate-100 rounded-lg p-6 shadow-sm">
               <div className="flex items-center gap-4 mb-6">
                  <Clock className="w-5 h-5 text-brand-dark" />
                  <h4 className="text-[10px] font-bold text-brand-dark uppercase tracking-widest">Operating Hours</h4>
               </div>
               <div className="space-y-4 text-xs font-bold uppercase tracking-tight">
                  <div className="flex justify-between pb-3 border-b border-slate-50">
                     <span className="text-slate-500">Mon – Fri</span>
                     <span className="text-brand-dark">08:00 AM – 05:00 PM</span>
                  </div>
                  <div className="flex justify-between pb-3 border-b border-slate-50">
                     <span className="text-slate-500">Saturday</span>
                     <span className="text-brand-dark">09:00 AM – 03:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                     <span className="text-slate-500">Sunday</span>
                     <span className="text-slate-300">Closed</span>
                  </div>
               </div>
            </div>
          </div>
          
          {/* Form Column */}
          <div className="bg-slate-50 border border-slate-100 p-6 lg:p-10 rounded-lg shadow-sm">
             <div className="inline-flex items-center gap-3 mb-6">
               <span className="w-8 h-1 bg-brand-green rounded-full"></span>
               <h2 className="text-[10px] font-bold text-brand-dark uppercase tracking-widest">Direct Inquiry</h2>
             </div>
             <h3 className="text-2xl font-extrabold text-slate-900 mb-8 tracking-tight">Send us a Message</h3>
             <form className="space-y-6">
               <div className="grid sm:grid-cols-2 gap-6">
                 <div>
                   <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">First Name</label>
                   <input type="text" className="w-full bg-white border border-slate-100 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all outline-none" required />
                 </div>
                 <div>
                   <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Last Name</label>
                   <input type="text" className="w-full bg-white border border-slate-100 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all outline-none" required />
                 </div>
               </div>
               <div>
                 <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Email Address</label>
                 <input type="email" className="w-full bg-white border border-slate-100 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all outline-none" required />
               </div>
               <div>
                 <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Message Content</label>
                 <textarea rows={6} className="w-full bg-white border border-slate-100 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all outline-none resize-none"></textarea>
               </div>
               <Button variant="primary" className="w-full h-11 bg-brand-dark hover:bg-brand-blue text-white font-bold uppercase tracking-widest text-[11px] rounded-lg mt-4 transition-all">
                 Send Inquiry
               </Button>
             </form>
          </div>

        </div>
      </section>
    </div>
  );
}
