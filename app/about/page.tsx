"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Sun, ShieldCheck, Users, Award, ArrowRight, 
  CheckCircle, Target, Lightbulb, MapPin, Phone, 
  Mail, Sparkles, Building2, Tractor, Zap
} from "lucide-react";

export default function AboutPage() {
  const serviceAreas = [
    {
      name: "Jagtial & Velgatoor",
      tag: "Head Office Hub",
      desc: "Our primary engineering headquarters located at 1-2 Muthnoor, Velgatoor. Providing rapid rooftop, agricultural solar water pump, and commercial installations across Jagtial district.",
      icon: MapPin,
    },
    {
      name: "Secunderabad & Hyderabad",
      tag: "Branch Office Hub",
      desc: "Operating from Narapally, Secunderabad, covering all residential townships, independent villas, commercial complexes, and industrial belts throughout the twin cities and Medchal-Malkajgiri.",
      icon: Building2,
    },
    {
      name: "Karimnagar & Peddapalli",
      tag: "Active Service Region",
      desc: "Extensive portfolio of residential rooftop systems under PM Surya Ghar Muft Bijli Yojana, commercial establishments, and micro-irrigation systems.",
      icon: Sun,
    },
    {
      name: "Warangal & Central Region",
      tag: "Active Service Region",
      desc: "Delivering turnkey solar projects for educational institutions, cold storages, agricultural pumps, and net-metered residential homes.",
      icon: Zap,
    },
    {
      name: "Mancherial, Nirmal & Nizamabad",
      tag: "Extended Reach",
      desc: "Prompt site surveys, engineering audits, and local maintenance support for farming clusters and industrial sheds across India.",
      icon: Tractor,
    },
    {
      name: "Pan-India Coverage",
      tag: "Turnkey Installations",
      desc: "MNRE-approved standard designs, prompt liaison with electricity DISCOMs, and seamless subsidy processing anywhere in the nation.",
      icon: ShieldCheck,
    }
  ];

  return (
    <div className="bg-slate-50 text-slate-800 font-sans overflow-hidden pb-20">
      
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 z-0 opacity-35">
          <img 
            src="/assets/images/commercial/commercial_3.jpeg" 
            alt="AMR Solar Solutions Team and Rooftop Solar Installations" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-900/50"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }} 
              className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold"
            >
              <Sun className="w-4 h-4" /> About AMR Solar Solutions
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ delay: 0.1 }} 
              className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight"
            >
              Building a <span className="text-amber-400">Cleaner, Brighter India</span> with Solar Energy
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ delay: 0.2 }} 
              className="text-base sm:text-lg text-slate-300 leading-relaxed"
            >
              AMR Solar Solutions is a trusted renewable energy company dedicated to empowering homeowners, businesses, and farmers across India with reliable, MNRE-approved solar installations, effortless net metering, and guaranteed government subsidies.
            </motion.p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link 
                href="/contact" 
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-7 py-3.5 rounded-full shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2"
              >
                Contact Our Team <ArrowRight className="w-4 h-4" />
              </Link>
              <a 
                href="tel:+917569967711" 
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3.5 rounded-full border border-white/20 transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-amber-400" /> +91 7569967711
              </a>
            </div>
          </div>

          {/* Right Hero Showcase Image */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ delay: 0.2 }} 
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-slate-950 group">
              <img 
                src="/assets/images/commercial/commercial_1.jpeg" 
                alt="AMR Solar Commercial Installation" 
                className="w-full h-[360px] sm:h-[400px] object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/30"></div>
              <div className="absolute bottom-4 inset-x-4 bg-slate-900/90 backdrop-blur-md border border-white/20 p-4 rounded-2xl flex items-center justify-between">
                <div>
                  <h4 className="text-white font-bold text-sm">AMR Field Installation</h4>
                  <p className="text-xs text-slate-300">100+ Completed Projects</p>
                </div>
                <span className="bg-amber-500 text-slate-950 text-xs font-black px-3 py-1.5 rounded-xl">
                  2+ Years
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats Section (Updated to user specifications) */}
      <section className="bg-amber-500 text-slate-950 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { num: "100+", label: "Projects Completed" },
              { num: "100+", label: "Installations Completed" },
              { num: "2+", label: "Years Experience" },
              { num: "90%", label: "Average Bill Savings" }
            ].map((stat, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, scale: 0.9 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.5, delay: idx * 0.1 }} 
                className="space-y-1"
              >
                <h3 className="text-4xl lg:text-5xl font-black">{stat.num}</h3>
                <p className="font-bold text-slate-900/80 text-xs sm:text-sm uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story & Mission */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-amber-600 font-bold uppercase tracking-widest text-xs">Who We Are</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
              Leading the Transition to Clean & Sustainable Solar Energy
            </h2>
            
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              At <strong className="text-slate-900">AMR Solar Solutions</strong>, we specialize in delivering end-to-end solar energy systems for residential rooftops, commercial establishments, and agricultural farms. 
            </p>
            
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Headquartered in <strong>Velgatoor, Jagtial</strong> with our regional office in <strong>Narapally, Secunderabad</strong>, we bridge the gap between world-class solar technology and accessible government initiatives like the PM Surya Ghar Muft Bijli Yojana and PM-KUSUM.
            </p>

            <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <img 
                src="/assets/amr_logo.jpeg" 
                alt="AMR Solar Solutions Brand" 
                className="h-16 w-auto object-contain rounded-xl border border-slate-100 shadow-sm"
              />
              <div>
                <h4 className="font-bold text-slate-900 text-sm">AMR Solar Solutions</h4>
                <p className="text-xs text-slate-500">Excellence in Renewable Energies • India</p>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              {[
                "Certified engineers and MNRE-approved tier-1 components",
                "100% end-to-end net metering and DISCOM liaison",
                "Up to ₹78,000 direct bank transfer (DBT) subsidy assistance",
                "Dedicated agricultural water pump and motor engineering desk"
              ].map((point, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0" />
                  <span className="text-sm font-semibold text-slate-700">{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-100 border border-slate-200 space-y-4">
              <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-black text-slate-900">Our Mission</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                To empower homes, businesses, and farmers with reliable, affordable, and sustainable solar energy solutions while eliminating electricity bills and protecting our environment.
              </p>
            </div>

            <div className="bg-slate-900 p-8 rounded-3xl shadow-xl space-y-4 text-white sm:translate-y-6">
              <div className="w-14 h-14 bg-slate-800 text-amber-400 rounded-2xl flex items-center justify-center border border-slate-700">
                <Lightbulb className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-black">Our Vision</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                To be India's most trusted solar energy partner, recognized for uncompromising installation quality, seamless customer care, and leadership in renewable adoption.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Service Areas Section (User requested: service areas) */}
      <section className="bg-slate-900 text-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-amber-400 font-bold uppercase tracking-widest text-xs">Where We Operate</span>
            <h2 className="text-3xl sm:text-4xl font-black">Our Service Areas Across India</h2>
            <p className="text-slate-300 text-sm sm:text-base">
              With offices in Jagtial and Secunderabad, our field teams deliver quick on-site surveys, installations, and maintenance services across all regions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceAreas.map((area, idx) => {
              const Icon = area.icon;
              return (
                <div 
                  key={idx}
                  className="bg-slate-800/80 border border-slate-700 p-6 rounded-3xl flex flex-col justify-between hover:border-amber-400 transition-colors"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[11px] font-bold px-3 py-1 rounded-full uppercase">
                        {area.tag}
                      </span>
                      <Icon className="w-5 h-5 text-amber-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{area.name}</h3>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{area.desc}</p>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-slate-700/60 flex items-center justify-between text-xs text-amber-400 font-semibold">
                    <span>Full Coverage</span>
                    <Link href="/contact" className="hover:underline flex items-center gap-1">
                      Request Survey <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Both Office Locations Highlight */}
          <div className="mt-12 bg-slate-800 border border-slate-700 p-8 rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                <MapPin className="w-4 h-4" /> Head Office:
              </div>
              <p className="text-white font-bold text-base">H.No. 1-2 Muthnoor, Velgatoor</p>
              <p className="text-slate-300 text-xs">Jagtial District, India - 505526</p>
              <p className="text-amber-400 text-xs font-semibold pt-1">Direct Call: +91 7569967711</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                <Building2 className="w-4 h-4" /> Secunderabad Office:
              </div>
              <p className="text-white font-bold text-base">Narapally</p>
              <p className="text-slate-300 text-xs">Secunderabad, India - 500088</p>
              <p className="text-amber-400 text-xs font-semibold pt-1">Direct Call: +91 9347857711</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance Banner */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center flex-shrink-0 font-bold">
              <ShieldCheck className="w-9 h-9" />
            </div>
            <div>
              <h3 className="text-2xl font-black text-slate-900 mb-1">MNRE-Approved Quality Equipment</h3>
              <p className="text-slate-600 text-xs sm:text-sm">
                We only deploy certified Tier-1 Mono PERC & TOPCon solar panels with 25-year performance warranties.
              </p>
            </div>
          </div>
          <Link 
            href="/contact" 
            className="whitespace-nowrap bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-white font-bold px-8 py-4 rounded-full text-sm transition-all"
          >
            Get quote Today
          </Link>
        </div>
      </section>

    </div>
  );
}
