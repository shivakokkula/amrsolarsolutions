"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sun, Building2, Tractor, House, ArrowRight, 
  CheckCircle, Zap, Droplets, MapPin, Award, 
  BarChart3, ShieldCheck 
} from "lucide-react";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<"All" | "Residential" | "Commercial" | "Agricultural">("All");

  const projectList = [
    {
      id: 1,
      title: "5 kW Residential Rooftop Solar",
      category: "Residential",
      location: "Velgatoor, Jagtial",
      capacity: "5 kW On-Grid",
      savings: "85% Bill Reduction",
      generation: "600+ Units / Month",
      image: "/assets/images/residential/residential_2.jpeg",
      description: "Custom rooftop solar installation utilizing high-efficiency Mono PERC modules with bi-directional net metering under PM Surya Ghar Yojana. The client received ₹78,000 direct subsidy.",
      metrics: ["Subsidy: ₹78,000 Received", "Payback: 3.2 Years", "DISCOM Approved"],
    },
    {
      id: 2,
      title: "10 kW Luxury Home Hybrid Solar",
      category: "Residential",
      location: "Narapally, Secunderabad",
      capacity: "10 kW Hybrid with Battery",
      savings: "90% Bill Reduction",
      generation: "1,200+ Units / Month",
      image: "/assets/images/residential/residential_4.jpeg",
      description: "Turnkey hybrid rooftop system with Lithium-ion battery storage, ensuring zero downtime during grid power outages while feeding excess generation back to grid.",
      metrics: ["Battery Backup: 10 kWh", "Full Home HVAC Powered", "Net Metered"],
    },
    {
      id: 3,
      title: "3 kW PM Surya Ghar Rooftop Solar",
      category: "Residential",
      location: "Hyderabad, India",
      capacity: "3 kW Domestic Solar",
      savings: "Zero Electric Bill",
      generation: "360+ Units / Month",
      image: "/assets/images/residential/residential_3.jpeg",
      description: "Complete turnkey domestic rooftop installation eligible for ₹78,000 maximum Central DBT subsidy with elevated structure and bi-directional meter.",
      metrics: ["100% Paperwork Managed", "Elevated Terrace Structure", "DBT Subsidy Credited"],
    },
    {
      id: 4,
      title: "6 kW Rooftop Solar Canopy & Shade Pergola",
      category: "Residential",
      location: "Secunderabad, India",
      capacity: "6 kW Solar Canopy",
      savings: "88% Bill Reduction",
      generation: "720+ Units / Month",
      image: "/assets/images/residential/residential_5.jpeg",
      description: "Elevated rooftop solar canopy structure providing clean solar power while transforming the terrace into a shaded usable outdoor living space.",
      metrics: ["Elevated Canopy Design", "₹78,000 Subsidy Approved", "Usable Terrace Living"],
    },
    {
      id: 5,
      title: "25 kW Commercial Complex Installation",
      category: "Commercial",
      location: "Hyderabad",
      capacity: "25 kW LT Commercial",
      savings: "₹32,000 Saved Monthly",
      generation: "3,100 Units / Month",
      image: "/assets/images/commercial/commercial_1.jpeg",
      description: "Designed for a multi-story retail and office commercial complex. Fully matched daytime air conditioning loads and qualified for 40% Accelerated Depreciation tax benefit.",
      metrics: ["40% Tax Depreciation", "3 Year Payback Period", "Real-time Remote Monitoring"],
    },
    {
      id: 6,
      title: "50 kW Industrial Factory Solar Plant",
      category: "Commercial",
      location: "Secunderabad Industrial Belt",
      capacity: "50 kW HT Solar Plant",
      savings: "₹65,000 Saved Monthly",
      generation: "6,200 Units / Month",
      image: "/assets/images/commercial/commercial_3.jpeg",
      description: "Heavy-duty solar panel installation over industrial metal shed with customized clamp mounting and HT grid synchronization, dramatically reducing peak power tariffs.",
      metrics: ["Replaces DG Fuel", "Custom Shed Clamping", "High Surge Motor Protection"],
    },
    {
      id: 7,
      title: "100 kW Commercial Warehouse Solar Setup",
      category: "Commercial",
      location: "Secunderabad",
      capacity: "100 kW HT Rooftop",
      savings: "₹1,20,000 Saved Monthly",
      generation: "12,500 Units / Month",
      image: "/assets/images/commercial/commercial_2.jpeg",
      description: "Large-scale commercial shed rooftop installation featuring high-durability mono-crystalline panels and multi-MPPT inverters.",
      metrics: ["40% IT Depreciation", "Remote App Monitoring", "Net Metered"],
    },
    {
      id: 8,
      title: "40 kW Commercial Showroom & Office",
      category: "Commercial",
      location: "Karimnagar / Jagtial",
      capacity: "40 kW Commercial Rooftop",
      savings: "₹50,000 Saved Monthly",
      generation: "5,000 Units / Month",
      image: "/assets/images/commercial/commercial_4.jpeg",
      description: "Commercial building rooftop setup offsetting heavy daytime HVAC and showroom lighting tariffs with continuous online monitoring.",
      metrics: ["40% Accelerated Depreciation", "Payback in 3.4 Years", "Net Metering Enabled"],
    },
    {
      id: 9,
      title: "7.5 HP Solar Agricultural Borewell Pump",
      category: "Agricultural",
      location: "Jagtial District",
      capacity: "7.5 HP Deep Submersible",
      savings: "100% Diesel Free Irrigation",
      generation: "1,10,000 L/Day Water Discharge",
      image: "/assets/images/agricultural/agricultural_1.jpeg",
      description: "High-discharge agricultural solar pump irrigating 10 acres of paddy and cotton fields. Farmers now enjoy uninterrupted daylight irrigation without depending on night-time electricity.",
      metrics: ["Borewell Depth: 280 ft", "10 Acres Irrigated", "Dry Run Auto-Protection"],
    },
    {
      id: 10,
      title: "5 HP Solar VFD Tubewell Conversion",
      category: "Agricultural",
      location: "Peddapalli",
      capacity: "5 HP Solar VFD Controller",
      savings: "Zero Power Fluctuations",
      generation: "70,000 L/Day Discharge",
      image: "/assets/images/agricultural/agricultural_2.jpeg",
      description: "Retrofitted an existing 3-phase electric motor with an AMR Solar MPPT VFD controller and solar array, giving the farmer full irrigation freedom throughout the day.",
      metrics: ["Dual Solar/Grid Mode", "Eliminates Voltage Drops", "5-Year Full Warranty"],
    },
    {
      id: 11,
      title: "10 HP Agricultural Solar Borewell System",
      category: "Agricultural",
      location: "Velgatoor, Jagtial",
      capacity: "10 HP Heavy-Duty Pump",
      savings: "100% Free Daylight Pumping",
      generation: "1,60,000 L/Day Water Discharge",
      image: "/assets/images/agricultural/agricultural_4.jpeg",
      description: "Custom solar pump installation with heavy-duty galvanized structure powering irrigation for extensive crop acreage.",
      metrics: ["High-Pressure Lift", "Sand-Resistant Pump", "5-Year Full Warranty"],
    },
    {
      id: 12,
      title: "Solar Water Pumping & Drip Integration",
      category: "Agricultural",
      location: "Karimnagar",
      capacity: "5 HP Solar Water Pump",
      savings: "Zero Fuel Overhead",
      generation: "85,000 L/Day Water Discharge",
      image: "/assets/images/agricultural/agricultural_3.jpeg",
      description: "High-efficiency agricultural solar setup powering a network of drip irrigation systems with automated pressure regulation.",
      metrics: ["Drip Irrigation Ready", "Automatic Daytime Start", "Zero Maintenance"],
    },
    {
      id: 13,
      title: "Farm Micro-Irrigation Solar Setup",
      category: "Agricultural",
      location: "Nizamabad",
      capacity: "3 HP Monoblock Solar Pump",
      savings: "100% Diesel Free",
      generation: "45,000 L/Day Water Discharge",
      image: "/assets/images/agricultural/agricultural_5.jpeg",
      description: "Canal-lift solar pumping system delivering reliable daytime irrigation for horticultural crops and vegetables.",
      metrics: ["High Volume Discharge", "Low Maintenance", "PM-KUSUM Supported"],
    }
  ];

  const filteredProjects = activeCategory === "All" 
    ? projectList 
    : projectList.filter(p => p.category === activeCategory);

  return (
    <div className="bg-slate-50 text-slate-800 font-sans overflow-hidden pb-20">
      
      {/* Hero Header */}
      <section className="relative bg-slate-900 text-white py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <img 
            src="/assets/images/commercial/commercial_2.jpeg" 
            alt="AMR Solar Projects Portfolio" 
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
            <Award className="w-4 h-4" /> 100+ Completed Projects Across India
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight"
          >
            Our Solar <span className="text-amber-400">Installation Projects</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed"
          >
            Explore real photographs and completed installations across residential rooftops, commercial complexes, and agricultural solar pumps in Jagtial, Secunderabad, Hyderabad, and beyond.
          </motion.p>
        </div>
      </section>

      {/* Stats Ribbon */}
      <section className="bg-amber-500 text-slate-950 py-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center font-bold"
        >
          <div>
            <div className="text-3xl sm:text-4xl font-black">100+</div>
            <div className="text-xs uppercase tracking-wider text-slate-900/80">Projects Completed</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black">100+</div>
            <div className="text-xs uppercase tracking-wider text-slate-900/80">Installations Completed</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black">2+</div>
            <div className="text-xs uppercase tracking-wider text-slate-900/80">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black">25 Years</div>
            <div className="text-xs uppercase tracking-wider text-slate-900/80">Panel Performance</div>
          </div>
        </motion.div>
      </section>

      {/* Category Filter Pills */}
      <section className="py-12 max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {(["All", "Residential", "Commercial", "Agricultural"] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-slate-900 text-white shadow-lg"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-amber-500 hover:text-amber-600"
              }`}
            >
              {cat === "All" ? "All Projects" : `${cat} Solar`}
            </button>
          ))}
        </motion.div>
      </section>

      {/* Projects Showcase Cards */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((p) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xl shadow-slate-100 flex flex-col justify-between transition-all group"
              >
                <div>
                  <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                    <img 
                      src={p.image} 
                      alt={p.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-amber-400 text-xs font-bold px-3 py-1 rounded-full">
                      {p.category}
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-xl flex items-center justify-between">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-amber-400" /> {p.location}
                      </span>
                      <span className="font-bold text-amber-400">{p.capacity}</span>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-black text-slate-900">{p.title}</h3>
                    
                    <div className="flex items-center justify-between p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs font-bold">
                      <span className="text-slate-700">Client Savings:</span>
                      <span className="text-amber-800 font-black">{p.savings}</span>
                    </div>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {p.description}
                    </p>

                    <div className="pt-2 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
                      {p.metrics.map((m, midx) => (
                        <div key={midx} className="flex items-center gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                          <span>{m}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link 
                    href="/contact"
                    className="block w-full text-center py-3 rounded-xl bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-white font-bold text-xs transition-colors"
                  >
                    Get Quote for Similar System
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Ready to Start CTA */}
      <section className="mt-20 max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="space-y-2">
            <span className="text-amber-400 font-bold uppercase tracking-widest text-xs">Ready to Save</span>
            <h3 className="text-2xl sm:text-3xl font-black">Want Your Property Powered by AMR Solar?</h3>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
              Get in touch with us for a free site assessment and customized solar proposal in Jagtial, Secunderabad, or anywhere in India.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
            <Link 
              href="/contact" 
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-8 py-4 rounded-full text-sm transition-all flex items-center justify-center gap-2"
            >
              Get Free Site Visit <ArrowRight className="w-4 h-4" />
            </Link>
            <a 
              href="tel:+917569967711" 
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-4 rounded-full border border-white/20 text-sm transition-all text-center"
            >
              Call +91 7569967711
            </a>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
