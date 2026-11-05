"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Building2, Factory, Store, Briefcase, Zap, TrendingUp, 
  ShieldCheck, ArrowRight, CheckCircle, Calculator, Phone, 
  Mail, Award, DollarSign, BarChart3, HelpCircle
} from "lucide-react";
import DynamicQuoteForm from "@/components/DynamicQuoteForm";

export default function CommercialSolarPage() {
  const sectors = [
    {
      title: "Retail Shops & Commercial Complexes",
      icon: Store,
      desc: "Ideal for retail stores, supermarkets, malls, and showrooms with high daytime air conditioning and lighting loads. Solar directly offsets peak commercial tariff rates.",
      benefits: ["Offsets peak daytime electricity tariffs", "Rapid 3-year capital payback", "Custom aesthetic rooftop mounting"]
    },
    {
      title: "Corporate Offices & IT Parks",
      icon: Briefcase,
      desc: "High-density office environments benefit from consistent daytime solar generation matching HVAC and computer server power requirements.",
      benefits: ["Substantial operational OPEX reduction", "Achieve green building ESG certifications", "Real-time generation dashboard"]
    },
    {
      title: "Manufacturing & Industrial Units",
      icon: Factory,
      desc: "High-capacity rooftop or ground-mount systems (50 kW to 500+ kW) for textile mills, packaging, food processing, cold storage, and heavy fabrication plants.",
      benefits: ["Displaces expensive diesel generator fuel", "Handles inductive loads & motor start-ups", "Seamless HT/LT net metering integration"]
    },
    {
      title: "Hospitals & Educational Institutions",
      icon: Building2,
      desc: "Schools, colleges, universities, and healthcare facilities with extensive roof areas can achieve sustainable, budget-predictable clean energy.",
      benefits: ["Predictable electricity costs for decades", "Uninterrupted clean power", "Promotes sustainability to community"]
    }
  ];

  // Capacity table provided by user
  const capacitySuitability = [
    { capacity: "5 kW", suitableFor: "Small shops, offices, clinics" },
    { capacity: "10 kW", suitableFor: "Retail stores, small restaurants, offices" },
    { capacity: "15 kW", suitableFor: "Showrooms, restaurants, small commercial buildings" },
    { capacity: "20 kW", suitableFor: "Offices, supermarkets, small hotels" },
    { capacity: "25 kW", suitableFor: "Schools, hospitals, medium businesses" },
    { capacity: "30 kW", suitableFor: "Commercial complexes, warehouses" },
    { capacity: "50 kW", suitableFor: "Hotels, schools, factories, warehouses" },
    { capacity: "75 kW", suitableFor: "Medium industries, large commercial buildings" },
    { capacity: "100 kW", suitableFor: "Factories, hospitals, large warehouses" },
    { capacity: "150 kW", suitableFor: "Manufacturing units, industrial facilities" },
    { capacity: "200 kW", suitableFor: "Large factories, industrial buildings" },
    { capacity: "250 kW", suitableFor: "Industrial facilities, large warehouses" },
    { capacity: "500 kW", suitableFor: "Large industrial and commercial projects" },
    { capacity: "1 MW+", suitableFor: "Custom industrial and utility-scale projects" }
  ];

  // Generation table provided by user
  const generationEstimates = [
    { capacity: "10 kW", generation: "1,200 – 1,350 units", roofArea: "~1,000 sq.ft", avgMonthlySavings: "₹12,000 – ₹15,000" },
    { capacity: "25 kW", generation: "3,000 – 3,375 units", roofArea: "~2,500 sq.ft", avgMonthlySavings: "₹30,000 – ₹37,000" },
    { capacity: "50 kW", generation: "6,000 – 6,750 units", roofArea: "~5,000 sq.ft", avgMonthlySavings: "₹60,000 – ₹75,000" },
    { capacity: "100 kW", generation: "12,000 – 13,500 units", roofArea: "~10,000 sq.ft", avgMonthlySavings: "₹1,20,000 – ₹1,50,000" },
    { capacity: "250 kW", generation: "30,000 – 33,750 units", roofArea: "~25,000 sq.ft", avgMonthlySavings: "₹3,00,000 – ₹3,75,000" },
    { capacity: "500 kW", generation: "60,000 – 67,500 units", roofArea: "~50,000 sq.ft", avgMonthlySavings: "₹6,00,000 – ₹7,50,000" }
  ];

  const financialBenefits = [
    {
      title: "40% Accelerated Depreciation",
      desc: "Under Section 32 of the Indian Income Tax Act, commercial enterprises can claim up to 40% depreciation on solar assets in the very first year, yielding massive corporate tax savings.",
      icon: DollarSign,
    },
    {
      title: "3 to 4 Years Payback Period",
      desc: "Commercial tariffs in India range from ₹9 to ₹12+ per unit. A solar installation pays for its capital cost within 3 to 4 years, delivering free electricity for the remaining 20+ years.",
      icon: TrendingUp,
    },
    {
      title: "Protection Against Tariff Hikes",
      desc: "Commercial utility tariffs increase steadily every few years. Solar locks in your levelized cost of energy (LCOE) at approximately ₹2.50 to ₹3.00 per unit for 25 years.",
      icon: ShieldCheck,
    },
    {
      title: "Flexible Investment Options",
      desc: "Choose between Capex (full self-ownership with immediate maximum tax depreciation) or bank loan financing through low-interest green enterprise credit lines.",
      icon: Award,
    }
  ];

  return (
    <div className="bg-slate-50 text-slate-800 font-sans overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <img 
            src="/assets/images/commercial/commercial_3.jpeg" 
            alt="Commercial solar plant installation for offices and industries" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-900/50" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: -20 }} 
              animate={{ opacity: 1, y: 0 }} 
              className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-blue-400 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold"
            >
              <Building2 className="w-4 h-4" /> Commercial & Industrial Solar Installations
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight"
            >
              Solar Installations for <span className="text-amber-400">Shops, Offices & Industries</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl"
            >
              Dramatically lower your operational overheads with customized rooftop and shed solar systems ranging from 5 kW to 1 MW+. Benefit from 40% Accelerated Depreciation tax write-offs and full investment payback in 3 to 4 years.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a 
                href="#commercial-quote" 
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-7 py-3.5 rounded-full shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2 text-sm sm:text-base"
              >
                Get Commercial Solar Quote <ArrowRight className="w-4 h-4" />
              </a>

              <a 
                href="tel:+917569967711" 
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3.5 rounded-full border border-white/20 transition-all flex items-center gap-2 text-sm sm:text-base"
              >
                <Phone className="w-4 h-4 text-amber-400" /> Talk to Specialist: +91 7569967711
              </a>
            </motion.div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-3xl overflow-hidden border border-slate-700 shadow-2xl group">
              <img 
                src="/assets/images/commercial/commercial_1.jpeg" 
                alt="Commercial Rooftop Solar Project" 
                className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-4 right-4 flex justify-between items-center text-xs">
                <span className="bg-blue-600 text-white font-bold px-2.5 py-1 rounded-lg">Commercial Project</span>
                <span className="text-amber-400 font-bold">5 kW - 1 MW+ Range</span>
              </div>
            </div>

            <div className="bg-slate-800/90 border border-slate-700 p-6 rounded-3xl text-white space-y-4">
              <h3 className="text-lg font-bold text-amber-400 border-b border-slate-700 pb-2">Commercial Advantage</h3>
              
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white">40% Depreciation</strong>
                    <span className="text-slate-400 text-[11px]">Sec 32 IT Act benefit</span>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white">3-4 Yrs Payback</strong>
                    <span className="text-slate-400 text-[11px]">20+ yrs free energy</span>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white">Net Metering</strong>
                    <span className="text-slate-400 text-[11px]">HT & LT DISCOM approval</span>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white">Custom Mounts</strong>
                    <span className="text-slate-400 text-[11px]">Tin shed & RCC roof</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Table 1: Solar Capacity & Suitable Business Types (User Specified) */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">System Sizing Matrix</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">Solar Capacity & Suitable Business Types</h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Find the ideal solar plant capacity engineered specifically for your business facility and power consumption pattern.
          </p>
        </div>

        <div className="overflow-x-auto rounded-3xl shadow-xl shadow-slate-100 border border-slate-200 bg-white">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-900 text-white uppercase text-[11px] tracking-wider">
                <th className="py-4 px-6 font-bold w-1/4">Solar Capacity</th>
                <th className="py-4 px-6 font-bold w-3/4">Suitable For</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {capacitySuitability.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 1 ? "bg-slate-50/70" : "bg-white hover:bg-blue-50/30 transition-colors"}>
                  <td className="py-4 px-6 font-black text-slate-900 text-sm sm:text-base text-blue-700 whitespace-nowrap">
                    {row.capacity}
                  </td>
                  <td className="py-4 px-6 font-medium text-slate-800">
                    {row.suitableFor}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Table 2: Commercial Capacity & Estimated Monthly Generation (User Specified) */}
      <section className="py-16 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-amber-400 font-bold uppercase tracking-widest text-xs">Power Generation Estimates</span>
            <h2 className="text-3xl sm:text-4xl font-black">Estimated Monthly Solar Generation & Savings</h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Average solar power generation and approximate utility bill offset under high solar irradiance conditions across India.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl shadow-2xl border border-slate-700 bg-slate-800/90">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-950 text-white uppercase text-[11px] tracking-wider border-b border-slate-700">
                  <th className="py-4 px-6 font-bold">Capacity</th>
                  <th className="py-4 px-6 font-bold">Estimated Monthly Generation</th>
                  <th className="py-4 px-6 font-bold">Approx. Rooftop Space</th>
                  <th className="py-4 px-6 font-bold">Approx. Monthly Savings</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/60 text-slate-300">
                {generationEstimates.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 1 ? "bg-slate-800/40" : "bg-slate-800/80 hover:bg-slate-700/50 transition-colors"}>
                    <td className="py-4 px-6 font-black text-white text-sm sm:text-base text-amber-400">{row.capacity}</td>
                    <td className="py-4 px-6 font-bold text-emerald-400">{row.generation}</td>
                    <td className="py-4 px-6 text-slate-400">{row.roofArea}</td>
                    <td className="py-4 px-6 font-semibold text-white">{row.avgMonthlySavings}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-center text-xs text-slate-400 mt-4">
            * Actual monthly generation depends on shadow-free orientation, panel angle, and seasonal solar irradiance.
          </p>
        </div>
      </section>

      {/* Sectors We Serve Grid */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">Sector Expertise</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">Commercial Solar Tailored to Your Industry</h2>
          <p className="text-slate-600 text-sm sm:text-base">
            We analyze your 12-month load curves and facility layout to engineer the most cost-effective solar generation architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sectors.map((sec, idx) => {
            const Icon = sec.icon;
            return (
              <div 
                key={sec.title}
                className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl shadow-slate-100 flex flex-col justify-between hover:border-blue-400 transition-all"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{sec.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{sec.desc}</p>
                  
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 mb-8 border-t border-slate-100 pt-6">
                    {sec.benefits.map((b, bidx) => (
                      <li key={bidx} className="flex items-center gap-2.5">
                        <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a 
                  href="#commercial-quote" 
                  className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm hover:text-blue-500"
                >
                  Request Feasibility Audit <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* Financial ROI and Depreciation Section */}
      <section className="bg-slate-900 text-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-amber-400 font-bold uppercase tracking-widest text-xs">Balance Sheet Benefits</span>
            <h2 className="text-3xl sm:text-4xl font-black">Why Solar is Your Strongest Financial Asset</h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Accelerated depreciation combined with fixed levelized energy costs guarantees dramatic improvements to your company's EBITDA.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {financialBenefits.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-slate-800/80 border border-slate-700 p-6 rounded-3xl space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dynamic Commercial Quote Form Section */}
      <section id="commercial-quote" className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">Direct Commercial Consultation</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
              Get Your Custom Commercial Solar Proposal
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm">
              Our certified commercial solar engineers will conduct a comprehensive roof load assessment, match daytime consumption curve, and prepare an Accelerated Depreciation financial schedule.
            </p>

            <div className="space-y-4 pt-4 border-t border-slate-200 text-sm">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-600" />
                <div>
                  <span className="text-xs text-slate-500 block">Corporate Enquiries:</span>
                  <a href="tel:+917569967711" className="font-bold text-slate-900 hover:text-blue-600">+91 7569967711</a> / 
                  <a href="tel:+919347857711" className="font-bold text-slate-900 hover:text-blue-600 ml-2">+91 9347857711</a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <div>
                  <span className="text-xs text-slate-500 block">Corporate Email:</span>
                  <a href="mailto:info@amrsolarsolutions.com" className="font-bold text-slate-900 hover:text-blue-600">info@amrsolarsolutions.com</a>
                </div>
              </div>
            </div>

            <div className="p-6 bg-slate-900 text-white rounded-3xl space-y-2 text-xs">
              <strong className="text-amber-400 block font-bold text-sm">Service Areas:</strong>
              <p className="text-slate-300">Secunderabad, Hyderabad, Medchal, Jagtial, Karimnagar, Warangal, and industrial corridors across India.</p>
            </div>
          </div>

          {/* Dynamic Quote Form */}
          <div className="lg:col-span-7">
            <DynamicQuoteForm 
              defaultCategory="Commercial Solar"
              title="Commercial Solar Enquiry & Sizing"
              subtitle="Choose your estimated capacity from the dropdown below."
            />
          </div>

        </div>
      </section>

    </div>
  );
}
