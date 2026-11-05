"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Phone, Mail, MapPin, MessageSquare, Send, CheckCircle, 
  Clock, ShieldCheck, Sun, Building, ExternalLink 
} from "lucide-react";
import DynamicQuoteForm from "@/components/DynamicQuoteForm";

export default function ContactUsPage() {
  return (
    <div className="bg-slate-50 text-slate-800 font-sans overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <img 
            src="/assets/images/commercial/commercial_4.jpeg" 
            alt="Contact AMR Solar Solutions" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-900/60" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4"
          >
            <Phone className="w-4 h-4" /> Get In Touch With Our Solar Team
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight"
          >
            Contact <span className="text-amber-400">AMR Solar Solutions</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed"
          >
            Ready to switch to clean solar energy, cut electricity bills by 90%, and claim up to ₹78,000 in government subsidies? Call, WhatsApp, or visit us at our offices today!
          </motion.p>
        </div>
      </section>

      {/* Quick Action Channels (Call, WhatsApp, Email) */}
      <section className="py-12 max-w-7xl mx-auto px-6 -mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Direct Phone Call */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200 hover:-translate-y-1 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black text-slate-900 mb-1">Call Our Helplines</h3>
            <p className="text-xs text-slate-500 mb-4">Instant assistance from solar engineers</p>
            <div className="space-y-2">
              <a 
                href="tel:+917569967711" 
                className="block text-center py-2.5 px-4 rounded-xl font-bold text-sm bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-white transition-colors"
              >
                Call: +91 7569967711
              </a>
              <a 
                href="tel:+919347857711" 
                className="block text-center py-2.5 px-4 rounded-xl font-bold text-sm bg-slate-100 hover:bg-slate-200 text-slate-900 transition-colors"
              >
                Call: +91 9347857711
              </a>
            </div>
          </div>

          {/* WhatsApp Chat */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200 hover:-translate-y-1 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black text-slate-900 mb-1">Chat on WhatsApp</h3>
            <p className="text-xs text-slate-500 mb-4">Send your roof photos or electricity bill</p>
            <div className="space-y-2">
              <a 
                href="https://wa.me/917569967711?text=Hello%20AMR%20Solar%2C%20I%20am%20interested%20in%20solar%20solutions." 
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-2.5 px-4 rounded-xl font-bold text-sm bg-[#25D366] hover:bg-[#20ba59] text-white transition-colors"
              >
                WhatsApp +91 7569967711
              </a>
              <a 
                href="https://wa.me/919347857711?text=Hello%20AMR%20Solar%2C%20I%20would%20like%20a%20solar%20quote." 
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-2.5 px-4 rounded-xl font-bold text-sm bg-slate-100 hover:bg-slate-200 text-slate-900 transition-colors"
              >
                WhatsApp +91 9347857711
              </a>
            </div>
          </div>

          {/* Official Email */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200 hover:-translate-y-1 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black text-slate-900 mb-1">Email Correspondence</h3>
            <p className="text-xs text-slate-500 mb-4">Send project RFPs, documents, or enquiries</p>
            <div className="space-y-2">
              <a 
                href="mailto:info@amrsolarsolutions.com" 
                className="block text-center py-2.5 px-4 rounded-xl font-bold text-sm bg-slate-900 hover:bg-blue-600 text-white transition-colors truncate"
              >
                info@amrsolarsolutions.com
              </a>
              <div className="text-center text-xs text-slate-500 py-2">
                Fast response within 2 hours
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Main Section: Dynamic Enquiry Form & Office Locations */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Office Locations */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-amber-600 font-bold uppercase tracking-widest text-xs">Our Physical Presence</span>
              <h2 className="text-3xl font-black text-slate-900 mt-1">Visit Our Offices</h2>
              <p className="text-slate-600 text-sm mt-2">
                We maintain active offices in both Northern and Southern hubs to provide fast installation and service across India.
              </p>
            </div>

            {/* Head Office Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-slate-200 space-y-4">
              <div className="flex items-center justify-between">
                <span className="bg-amber-100 text-amber-800 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
                  Head Office
                </span>
                <MapPin className="w-5 h-5 text-amber-500" />
              </div>

              <h3 className="text-xl font-black text-slate-900">Jagtial Head Office</h3>
              
              <p className="text-slate-700 text-sm leading-relaxed">
                <strong>H.No. 1-2 Muthnoor, Velgatoor</strong><br />
                Jagtial District, India - 505526
              </p>

              <div className="pt-2 border-t border-slate-100 text-xs text-slate-600 space-y-1">
                <p><strong>Primary Contact:</strong> +91 7569967711</p>
                <p><strong>Service Radius:</strong> Jagtial, Velgatoor, Karimnagar, Peddapalli, Mancherial, Nizamabad</p>
              </div>

              <a 
                href="https://maps.google.com/?q=Velgatoor,+Jagtial,+India+505526" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-amber-600 hover:text-amber-500"
              >
                View on Google Maps <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Address 2: Secunderabad Branch */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-slate-200 space-y-4">
              <div className="flex items-center justify-between">
                <span className="bg-blue-100 text-blue-800 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
                  Branch Office 2
                </span>
                <Building className="w-5 h-5 text-blue-500" />
              </div>

              <h3 className="text-xl font-black text-slate-900">Secunderabad Office</h3>
              
              <p className="text-slate-700 text-sm leading-relaxed">
                <strong>Narapally</strong><br />
                Secunderabad, India - 500088
              </p>

              <div className="pt-2 border-t border-slate-100 text-xs text-slate-600 space-y-1">
                <p><strong>Primary Contact:</strong> +91 9347857711 / +91 7569967711</p>
                <p><strong>Service Radius:</strong> Secunderabad, Hyderabad, Medchal, Ghatkesar, Uppal, Rangareddy</p>
              </div>

              <a 
                href="https://maps.google.com/?q=Narapally,+Secunderabad,+India+500088" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-500"
              >
                View on Google Maps <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Operating Hours */}
            <div className="bg-slate-900 text-white rounded-3xl p-6 text-xs space-y-2">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                <Clock className="w-4 h-4" /> Working Hours:
              </div>
              <p className="text-slate-300">Monday - Saturday: 9:00 AM - 7:00 PM</p>
              <p className="text-slate-300">Sunday: 10:00 AM - 3:00 PM (Emergency & WhatsApp Consultation)</p>
            </div>
          </div>

          {/* Dynamic Quote Form */}
          <div className="lg:col-span-7">
            <DynamicQuoteForm 
              defaultCategory="Residential Solar"
              title="Send Us an Enquiry"
              subtitle="Select your category below and our team will get back to you with accurate pricing and subsidy details."
            />
          </div>

        </div>
      </section>

      {/* Trust & Experience Stats */}
      <section className="bg-amber-500 text-slate-950 py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl sm:text-4xl font-black">100+</div>
            <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900/80 mt-1">Projects Completed</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black">100+</div>
            <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900/80 mt-1">Installations Completed</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black">2+</div>
            <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900/80 mt-1">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black">100%</div>
            <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900/80 mt-1">Subsidy Assistance</div>
          </div>
        </div>
      </section>

    </div>
  );
}
