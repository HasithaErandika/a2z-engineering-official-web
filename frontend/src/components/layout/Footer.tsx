import { MapPin, PhoneCall, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img src="/a2zlogo.svg" alt="A2Z Engineering Logo" className="h-8 w-auto" />
              <div className="flex flex-col">
                <span className="font-bold text-lg tracking-tight text-brand-dark uppercase leading-none">
                  A2Z Engineering
                </span>
                <span className="text-[10px] text-brand-muted font-bold tracking-widest uppercase mt-0.5">
                  (Pvt) Ltd
                </span>
              </div>
            </div>
            <p className="text-slate-600 mb-6 max-w-md leading-relaxed">
              Expert providers of Power, Solar, AC & Plumbing Solutions. Harvest sunshine and power your world sustainably.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm flex items-center gap-2">
               <span className="w-1.5 h-1.5 bg-brand-green rounded-full"></span> Quick Links
            </h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-slate-600 hover:text-brand-blue transition-colors font-medium text-sm">Home</Link></li>
              <li><Link to="/about" className="text-slate-600 hover:text-brand-blue transition-colors font-medium text-sm">About Us</Link></li>
              <li><Link to="/solar" className="text-slate-600 hover:text-brand-blue transition-colors font-medium text-sm">Solar Solutions</Link></li>
              <li><Link to="/services" className="text-slate-600 hover:text-brand-blue transition-colors font-medium text-sm">Services</Link></li>
            </ul>
          </div>

          <div>
             <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm flex items-center gap-2">
                 <span className="w-1.5 h-1.5 bg-brand-green rounded-full"></span> Contact Us Now
             </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                <a 
                  href="https://www.google.com/maps/place/A2Z+Engineering+(Pvt)+Ltd/@6.8584842,80.0869738,1139m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3ae3ad561c57f781:0xcd4de2842c93df62!8m2!3d6.8584842!4d80.0918447!16s%2Fg%2F11vr956rqf?entry=ttu&g_ep=EgoyMDI2MDQwNi4wIKXMDSoASAFQAw%3D%3D" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-brand-blue transition-colors text-sm font-medium"
                >
                  158/C/1, Ingiriya Rd,<br/>Meepe Junction, Padukka
                </a>
              </li>
              <li className="flex items-center gap-3">
                <PhoneCall className="w-5 h-5 text-brand-blue shrink-0" />
                <a href="tel:+94112995998" className="text-slate-600 hover:text-brand-blue transition-colors text-sm font-medium">+94 112 995 998</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-blue shrink-0" />
                <a href="mailto:info@a2zengineering.lk" className="text-slate-600 hover:text-brand-blue transition-colors break-all text-sm font-medium">info@a2zengineering.lk</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm font-medium">
            © {new Date().getFullYear()} A2Z Engineering (Pvt) Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
