import React from "react";
import Link from "next/link";
import { Sun, Phone, Mail, MapPin, ArrowRight, ShieldCheck, Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-900 text-sm mt-auto">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Company Info */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <img 
                src="/assets/amr_logo.jpeg" 
                alt="AMR Solar Solutions" 
                className="h-14 sm:h-16 w-auto object-contain rounded-xl shadow-md border border-slate-800 group-hover:scale-105 transition-transform" 
              />
              <div>
                <span className="text-2xl font-black tracking-tight text-white">AMR</span>
                <span className="text-2xl font-bold text-amber-500 ml-1">SOLAR</span>
                <p className="text-[10px] tracking-widest font-semibold text-slate-400 uppercase">Renewable Energy Solutions</p>
              </div>
            </Link>
            <p className="text-slate-400 leading-relaxed text-sm pt-2">
              Empowering homes, commercial enterprises, and agriculture across India with clean, reliable, MNRE-approved solar power systems. Save up to 90% on electricity bills with government subsidies and seamless net metering.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="bg-amber-500/10 text-amber-400 text-xs px-3 py-1 rounded-full border border-amber-500/20 font-semibold">
                100+ Projects Completed
              </span>
              <span className="bg-amber-500/10 text-amber-400 text-xs px-3 py-1 rounded-full border border-amber-500/20 font-semibold">
                100+ Installations
              </span>
              <span className="bg-amber-500/10 text-amber-400 text-xs px-3 py-1 rounded-full border border-amber-500/20 font-semibold">
                2+ Years Experience
              </span>
            </div>
          </div>

          {/* Quick Menu Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-xs border-b border-slate-800 pb-2">Website Menu</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="/" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-amber-500" /> Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-amber-500" /> About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-amber-500" /> Our Projects
                </Link>
              </li>
              <li>
                <Link href="/subsidy" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-amber-500" /> Subsidies & Finance
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-amber-500" /> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Solar Solutions */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-xs border-b border-slate-800 pb-2">Solar Solutions</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="/residential-solar" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-amber-500" /> Residential Solar
                </Link>
              </li>
              <li>
                <Link href="/commercial-solar" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-amber-500" /> Commercial Solar
                </Link>
              </li>
              <li>
                <Link href="/agricultural-solar" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-amber-500" /> Agricultural Solar
                </Link>
              </li>
              <li>
                <Link href="/residential-solar#net-metering" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-500" /> Net Metering Guidance
                </Link>
              </li>
              <li>
                <Link href="/subsidy#pm-surya-ghar" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-500" /> PM Surya Ghar Scheme
                </Link>
              </li>
            </ul>
          </div>

          {/* Office Locations & Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-xs border-b border-slate-800 pb-2">Office Locations</h4>
            
            <div className="space-y-3 text-slate-400 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold">Head Office:</strong>
                  1-2 Muthnoor, Velgatoor, Jagtial, India - 505526
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold">Office 2:</strong>
                  Narapally, Secunderabad, India - 500088
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800/80 space-y-1.5">
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <div className="flex gap-2">
                    <a href="tel:+917569967711" className="text-slate-300 hover:text-amber-400 font-medium">+91 7569967711</a>
                    <span>|</span>
                    <a href="tel:+919347857711" className="text-slate-300 hover:text-amber-400 font-medium">+91 9347857711</a>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <a href="mailto:info@amrsolarsolutions.com" className="text-slate-300 hover:text-amber-400 font-medium">info@amrsolarsolutions.com</a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs">
          <p>© {new Date().getFullYear()} AMR Solar Renewable Energy Solutions. All Rights Reserved.</p>
          <div className="flex flex-wrap gap-6 justify-center">
            <Link href="/privacy-policy" className="hover:text-amber-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms-conditions" className="hover:text-amber-400 transition-colors">Terms & Conditions</Link>
            <Link href="/sitemap.xml" className="hover:text-amber-400 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

