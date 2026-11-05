"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Tractor, Droplets, Sun, Zap, ShieldCheck, ArrowRight, 
  CheckCircle, Waves, Phone, Mail, MessageSquare, Award, 
  Sprout, HelpCircle, Layers, ArrowDownToLine
} from "lucide-react";
import DynamicQuoteForm from "@/components/DynamicQuoteForm";

export default function AgriculturalSolarPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const solutions = [
    {
      title: "Solar Submersible Water Pumps",
      badge: "Deep Borewell Irrigation",
      desc: "Specially designed for deep borewells ranging from 100 ft to 500+ ft. Delivers maximum water discharge even during low morning or late afternoon sunlight using MPPT technology.",
      capacities: "3 HP, 5 HP, 7.5 HP & 10 HP Systems",
      image: "/assets/images/agricultural/agricultural_1.jpeg",
      features: [
        "Stainless steel pump body with sand-resistant impellers",
        "High-efficiency BLDC / AC submersible motors",
        "Auto-start and dry-run protection sensors",
        "Eligible for PM-KUSUM government subsidies"
      ],
      icon: Droplets,
    },
    {
      title: "Surface & Monoblock Solar Pumps",
      badge: "Canals, Rivers & Open Wells",
      desc: "Engineered for surface water sources, rivers, agricultural ponds, and open wells. Pumps high volumes of water directly to crop fields and sprinkler networks.",
      capacities: "2 HP, 3 HP & 5 HP Systems",
      image: "/assets/images/agricultural/agricultural_3.jpeg",
      features: [
        "High flow volume for flood and furrow irrigation",
        "Lightweight and low maintenance construction",
        "Operates directly on solar DC power without batteries",
        "Durable weather-resistant outdoor housing"
      ],
      icon: Waves,
    },
    {
      title: "Solar VFD Agricultural Motor Controllers",
      badge: "Convert Existing Motor to Solar",
      desc: "Already have an electric borewell pump? Our Solar Variable Frequency Drive (VFD) controller allows your existing 3-phase agricultural motor to run effortlessly on solar power.",
      capacities: "3 HP to 15 HP Controller Units",
      image: "/assets/images/agricultural/agricultural_4.jpeg",
      features: [
        "Compatible with all existing 3-phase induction motors",
        "Dual-input capability: Runs on Solar + Grid / DG backup",
        "Protects motors from voltage surges and phase loss",
        "Smooth soft-start prevents mechanical pump wear"
      ],
      icon: Zap,
    },
    {
      title: "Micro-Irrigation & Drip Solar Systems",
      badge: "Water & Power Efficiency",
      desc: "Integrated solar pumping matched with automated drip and sprinkler setups for orchards, horticulture, cotton, paddy, and vegetable cultivation.",
      capacities: "Customized by Acreage & Crop Layout",
      image: "/assets/images/agricultural/agricultural_5.jpeg",
      features: [
        "Maintains precise operating water pressure",
        "Saves up to 60% water and boosts crop harvest yield",
        "Timer-based daylight irrigation scheduling",
        "Eliminates dependency on erratic night-time grid supply"
      ],
      icon: Sprout,
    }
  ];

  const pumpTable = [
    { hp: "3 HP Solar Pump", depth: "100 - 200 ft", discharge: "35,000 - 55,000 L / day", land: "2 - 4 Acres", idealFor: "Vegetables, Pulses, Horticulture" },
    { hp: "5 HP Solar Pump", depth: "150 - 300 ft", discharge: "60,000 - 95,000 L / day", land: "4 - 8 Acres", idealFor: "Cotton, Maize, Chillies, Paddy" },
    { hp: "7.5 HP Solar Pump", depth: "250 - 450 ft", discharge: "90,000 - 1,40,000 L / day", land: "8 - 14 Acres", idealFor: "Commercial Farming, Multiple Borewells" },
    { hp: "10 HP Solar Pump", depth: "350 - 600+ ft", discharge: "1,30,000 - 2,00,000 L / day", land: "15+ Acres", idealFor: "Large Agricultural Estates & Lifting" },
  ];

  const faqs = [
    {
      q: "Can a solar pump work on cloudy days?",
      a: "Yes. Our solar pump systems use advanced MPPT (Maximum Power Point Tracking) controllers that optimize power even during cloudy or diffuse light conditions, providing continuous water discharge."
    },
    {
      q: "Do solar water pumps require batteries?",
      a: "No batteries are needed! Agricultural solar pumps run directly from solar panels during daylight hours. This eliminates expensive battery replacements and makes the system practically maintenance-free."
    },
    {
      q: "Can I convert my existing borewell motor to solar without buying a new pump?",
      a: "Yes! With our Solar VFD (Variable Frequency Drive) Controller and solar panel array, your existing 3-phase electric pump can operate seamlessly on solar power with dual solar/grid support."
    },
    {
      q: "What warranty comes with AMR Solar agricultural systems?",
      a: "AMR Solar provides a 25-year performance warranty on solar panels, 5 years comprehensive warranty on solar pump sets and VFD controllers, and local on-site service support across India."
    }
  ];

  return (
    <div className="bg-slate-50 text-slate-800 font-sans overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <img 
            src="/assets/images/agricultural/agricultural_4.jpeg" 
            alt="Agricultural solar water pump and irrigation systems in India" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-900/50" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: -20 }} 
              animate={{ opacity: 1, y: 0 }} 
              className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold"
            >
              <Tractor className="w-4 h-4" /> Empowering Farmers with Solar Irrigation
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight"
            >
              Solar Water Pumps & <span className="text-amber-400">Agricultural Motors</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl"
            >
              Reliable daytime irrigation for your crops. Eliminate diesel costs and erratic night power cuts with high-performance submersible solar pumps, solar VFD controllers, and drip irrigation solutions across India.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a 
                href="#agri-enquiry" 
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-7 py-3.5 rounded-full shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2 text-sm sm:text-base"
              >
                Get Agricultural Solar Quote <ArrowRight className="w-4 h-4" />
              </a>

              <a 
                href="https://wa.me/917569967711?text=Hello%20AMR%20Solar%2C%20I%20am%20interested%20in%20Agricultural%20Solar%20Pumps." 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-6 py-3.5 rounded-full transition-all flex items-center gap-2 text-sm sm:text-base"
              >
                <MessageSquare className="w-4 h-4" /> WhatsApp Farmer Desk
              </a>
            </motion.div>

            <div className="pt-4 grid grid-cols-3 gap-4 border-t border-slate-800 text-slate-300 text-xs sm:text-sm">
              <div>
                <span className="block text-xl sm:text-2xl font-black text-amber-400">₹0</span>
                <span>Electricity & Diesel Bill</span>
              </div>
              <div>
                <span className="block text-xl sm:text-2xl font-black text-amber-400">Daytime</span>
                <span>Uninterrupted Irrigation</span>
              </div>
              <div>
                <span className="block text-xl sm:text-2xl font-black text-amber-400">25 Years</span>
                <span>Module Durability</span>
              </div>
            </div>
          </div>

          {/* Right Hero Showcase Image & Highlights */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ delay: 0.2 }} 
            className="lg:col-span-5 space-y-4"
          >
            <div className="relative rounded-3xl overflow-hidden border border-emerald-500/30 shadow-2xl bg-slate-950 group">
              <img 
                src="/assets/images/agricultural/agricultural_2.jpeg" 
                alt="Agricultural Solar Pump Field Installation" 
                className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
              
              <div className="absolute top-3 left-4 bg-emerald-950/90 border border-emerald-500/30 px-3 py-1 rounded-full flex items-center gap-2 text-xs font-bold text-emerald-300 shadow-lg">
                <Tractor className="w-3.5 h-3.5 text-amber-400" /> PM-KUSUM Supported
              </div>

              <div className="absolute bottom-3 inset-x-4 bg-slate-900/90 backdrop-blur-md border border-white/20 p-3 rounded-2xl flex items-center justify-between">
                <div>
                  <h4 className="text-white font-bold text-xs sm:text-sm">AMR Solar Water Pump</h4>
                  <p className="text-[11px] text-slate-300">Borewell & Canal Irrigation</p>
                </div>
                <span className="bg-amber-500 text-slate-950 font-black text-xs px-2.5 py-1 rounded-lg">
                  3 HP - 10 HP
                </span>
              </div>
            </div>

            <div className="bg-slate-800/90 border border-slate-700 p-5 rounded-3xl text-white space-y-3">
              <h3 className="text-base font-bold text-amber-400 border-b border-slate-700 pb-2">Why Farmers Choose AMR Solar</h3>
              
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white">Daytime Pumping</strong>
                    <span className="text-slate-400 text-[11px]">No nighttime hazard</span>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white">Heavy-Duty VFD</strong>
                    <span className="text-slate-400 text-[11px]">Protects pump motor</span>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white">PM-KUSUM</strong>
                    <span className="text-slate-400 text-[11px]">Subsidy guidance</span>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white">Local Service</strong>
                    <span className="text-slate-400 text-[11px]">Rapid rural support</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Agricultural Solutions We Deliver */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-emerald-600 font-bold uppercase tracking-widest text-xs">Comprehensive Irrigation Solutions</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">Modern Solar Pumping for Farms Across India</h2>
          <p className="text-slate-600 text-sm sm:text-base">
            From deep borewells to open wells and canals, AMR Solar delivers robust, high-efficiency solar pumping setups tailored to your water source and crop needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.title}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xl shadow-slate-100 flex flex-col justify-between hover:border-emerald-500 transition-all group"
              >
                <div>
                  <div className="relative h-48 sm:h-56 overflow-hidden bg-slate-900">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-amber-400">
                      {item.badge}
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-xs font-bold text-emerald-600 mb-4">{item.capacities}</p>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">{item.desc}</p>
                    
                    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 mb-8 border-t border-slate-100 pt-6">
                      {item.features.map((feat, fidx) => (
                        <li key={fidx} className="flex items-center gap-2.5">
                          <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="px-8 pb-8">
                  <a 
                    href="#agri-enquiry" 
                    className="w-full block text-center py-3 px-4 rounded-xl font-bold text-sm bg-slate-900 hover:bg-emerald-600 text-white transition-colors"
                  >
                    Enquire for {item.title}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Solar Pump Sizing Table */}
      <section className="bg-white border-y border-slate-200 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-emerald-600 font-bold uppercase tracking-widest text-xs">Pumping Capacities</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">Recommended Solar Pump Sizing Chart</h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Choose the right horsepower capacity based on your borewell depth and total cultivated acreage.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl shadow-xl shadow-slate-100 border border-slate-200">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-900 text-white uppercase text-[11px] tracking-wider">
                  <th className="py-4 px-6 font-bold">Motor Capacity</th>
                  <th className="py-4 px-6 font-bold">Borewell Depth</th>
                  <th className="py-4 px-6 font-bold">Daily Water Output</th>
                  <th className="py-4 px-6 font-bold">Irrigation Coverage</th>
                  <th className="py-4 px-6 font-bold">Ideal Crops</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {pumpTable.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 1 ? "bg-slate-50/60" : "bg-white hover:bg-emerald-50/30 transition-colors"}>
                    <td className="py-4 px-6 font-black text-slate-900 text-sm sm:text-base text-emerald-700">{row.hp}</td>
                    <td className="py-4 px-6 font-semibold">{row.depth}</td>
                    <td className="py-4 px-6 font-bold text-slate-900">{row.discharge}</td>
                    <td className="py-4 px-6">
                      <span className="bg-amber-100 text-amber-900 font-bold px-2.5 py-1 rounded-full text-xs">
                        {row.land}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-slate-600">{row.idealFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Enquiry Form Section with Dynamic Form (Matches exact user screenshot) */}
      <section id="agri-enquiry" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="text-emerald-400 font-bold uppercase tracking-widest text-xs">Farmer Assistance Desk</span>
            <h2 className="text-3xl sm:text-4xl font-black leading-tight">
              Get an Estimate for Your Farm or Borewell
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              Call or message AMR Solar today. Our agricultural team will calculate the exact solar panel wattage, pump head, and pipe dimensions required for your borewell.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-800 text-amber-400 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Direct Farmer Helpline:</div>
                  <div className="font-bold text-white text-base">
                    <a href="tel:+917569967711" className="hover:text-amber-400">+91 7569967711</a> &nbsp;|&nbsp; 
                    <a href="tel:+919347857711" className="hover:text-amber-400 ml-2">+91 9347857711</a>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-800 text-emerald-400 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Email Address:</div>
                  <div className="font-bold text-white text-base">
                    <a href="mailto:info@amrsolarsolutions.com" className="hover:text-amber-400">info@amrsolarsolutions.com</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-slate-800/80 rounded-2xl border border-slate-700 text-xs text-slate-300 space-y-2">
              <strong className="text-white block font-semibold text-sm">Head Office Location:</strong>
              <p>H.No. 1-2 Muthnoor, Velgatoor, Jagtial District, India - 505526</p>
              <p className="text-slate-400 text-[11px]">Serving Jagtial, Karimnagar, Peddapalli, Mancherial, Nizamabad, and across India.</p>
            </div>
          </div>

          {/* Form component matching user's exact uploaded UI */}
          <div className="lg:col-span-7">
            <DynamicQuoteForm 
              defaultCategory="Agricultural Solar"
              title="Agricultural Solar Installation Enquiry"
              subtitle="Example of the form your developer can add to AMR Solar Solutions."
            />
          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12 space-y-3">
            <span className="text-emerald-600 font-bold uppercase tracking-widest text-xs">Farmer FAQs</span>
            <h2 className="text-3xl font-black text-slate-900">Frequently Asked Questions on Solar Pumps</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden">
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 bg-slate-50 hover:bg-slate-100 transition-colors text-left"
                >
                  <span className="font-bold text-slate-900 text-sm sm:text-base">{faq.q}</span>
                  <HelpCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 ml-4" />
                </button>
                {activeFaq === idx && (
                  <div className="p-5 text-slate-600 text-xs sm:text-sm leading-relaxed bg-white border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
