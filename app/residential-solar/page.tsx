"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Sun, Zap, ShieldCheck, Banknote, ArrowRight, CheckCircle, 
  BatteryCharging, Home, ArrowDownToLine, Phone, MessageSquare, 
  Calculator, Sparkles, HelpCircle, Layers, FileCheck
} from "lucide-react";
import { useContactForm } from "@/lib/hooks/useContactForm";

export default function ResidentialSolarPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [calcBill, setCalcBill] = useState(3000);
  const { loading, success, error, submitForm, reset } = useContactForm();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    cityLocation: "",
    type: "Residential Solar",
    email: "",
    phone: "",
    message: ""
  });

  // Calculate recommended system size & savings based on monthly bill
  const recommendedKw = Math.max(1, Math.min(10, Math.round(calcBill / 1000)));
  const monthlyUnits = recommendedKw * 120;
  const subsidyAmount = recommendedKw >= 3 ? 78000 : (recommendedKw === 2 ? 60000 : 30000);
  const estimatedCost = recommendedKw * 65000;
  const netInvestment = Math.max(0, estimatedCost - subsidyAmount);
  const annualSavings = Math.round(monthlyUnits * 7.5 * 12);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const isOk = await submitForm(formData);
    if (isOk) {
      const confirmationMsg = formData.email?.trim()
        ? `Thank you ${formData.firstName}! Your residential solar enquiry has been received. A confirmation copy has also been sent to ${formData.email.trim()}. Our team will contact you shortly.`
        : "Thank you! Your residential solar enquiry has been received. Our team will contact you shortly.";
      alert(confirmationMsg);
      setFormData({
        firstName: "",
        lastName: "",
        cityLocation: "",
        type: "Residential Solar",
        email: "",
        phone: "",
        message: ""
      });
      reset();
    }
  };

  const systems = [
    {
      title: "On-Grid Rooftop Solar",
      badge: "Most Popular & ₹78K Subsidy",
      kw: "1 kW – 10 kW On-Grid",
      image: "/assets/images/residential/residential_2.jpeg",
      desc: "Connected directly to your state electricity grid (DISCOM). Exports surplus power generated during daytime and automatically offsets your night-time grid usage through net metering.",
      features: [
        "Eligible for maximum government subsidy up to ₹78,000",
        "Lowest initial investment and fastest ROI payback (3-4 years)",
        "Zero battery replacement or maintenance costs",
        "Saves up to 90% on monthly domestic electricity bills"
      ],
      icon: Sun,
    },
    {
      title: "Hybrid Solar Systems",
      badge: "Solar + Battery Backup",
      kw: "3 kW – 15 kW Hybrid",
      image: "/assets/images/residential/residential_4.jpeg",
      desc: "The ultimate combination of grid-tied savings and battery energy storage. Keeps your home powered continuously even during grid power outages and night peak hours.",
      features: [
        "Uninterrupted power during power cuts & blackouts",
        "Smart inverter prioritizes solar > battery > grid",
        "Long-life Lithium-ion / Solar Tubular battery options",
        "Net metering enabled with backup security"
      ],
      icon: BatteryCharging,
    },
    {
      title: "Off-Grid Solar Solutions",
      badge: "100% Grid Independent",
      kw: "3 kW – 20 kW Standalone",
      image: "/assets/images/residential/residential_3.jpeg",
      desc: "Standalone solar power plant engineered for remote farmhouses, independent villas, or locations where grid connectivity is unstable or unavailable.",
      features: [
        "Complete freedom from grid electricity bills",
        "Heavy-duty deep cycle battery bank integration",
        "Robust pure sine wave solar PCU inverters",
        "Built-in surge and lightning protection"
      ],
      icon: Zap,
    }
  ];

  const residentialGallery = [
    {
      title: "5 kW On-Grid Rooftop Solar",
      location: "Velgatoor, Jagtial",
      subsidy: "₹78,000 Subsidy Received",
      savings: "85% Bill Reduction",
      image: "/assets/images/residential/residential_2.jpeg",
      desc: "High-efficiency Mono PERC modules with bi-directional net meter installed under PM Surya Ghar Muft Bijli Yojana."
    },
    {
      title: "10 kW Luxury Home Hybrid Solar",
      location: "Narapally, Secunderabad",
      subsidy: "Net Metered + Battery",
      savings: "90% Bill Reduction",
      image: "/assets/images/residential/residential_4.jpeg",
      desc: "Turnkey rooftop installation with Lithium-ion battery backup, powering heavy AC loads and home appliances 24x7."
    },
    {
      title: "3 kW Domestic Rooftop Solar",
      location: "Hyderabad, India",
      subsidy: "₹78,000 Direct DBT Subsidy",
      savings: "Zero Electric Bill",
      image: "/assets/images/residential/residential_3.jpeg",
      desc: "Turnkey residential rooftop plant producing 360+ units monthly with elevated galvanised iron structure."
    },
    {
      title: "6 kW Rooftop Solar Canopy & Shade Pergola",
      location: "Secunderabad / Hyderabad",
      subsidy: "₹78,000 Subsidy Approved",
      savings: "88% Bill Reduction",
      image: "/assets/images/residential/residential_5.jpeg",
      desc: "Elevated high-clearance solar canopy structure creating a functional shade roof over the terrace for family outdoor living."
    }
  ];

  const netMeteringSteps = [
    {
      step: "01",
      title: "Free Rooftop Solar Feasibility Survey",
      desc: "Our certified solar engineers visit your home in Jagtial, Secunderabad, Hyderabad, or anywhere in India to inspect roof shadow, angle, and load capacity."
    },
    {
      step: "02",
      title: "DISCOM Approval & Documentation",
      desc: "AMR Solar submits your online net metering application to electricity DISCOMs and obtains feasibility clearance without any hassle for you."
    },
    {
      step: "03",
      title: "Premium MNRE Installation",
      desc: "We install high-efficiency TOPCon/Mono PERC solar panels, galvanized iron mounting structures, and solar inverters within 3 to 5 business days."
    },
    {
      step: "04",
      title: "Bi-Directional Meter & Subsidy",
      desc: "The electricity department inspects the plant, installs the bi-directional net meter, and your direct DBT subsidy up to ₹78,000 is credited straight to your bank account."
    }
  ];

  const systemCapacities = [
    { kw: "1 kW", units: "120 Units", area: "100 sq.ft", subsidy: "₹30,000", idealFor: "Small 1-2 BHK Homes, Basic Lights & Fans" },
    { kw: "2 kW", units: "240 Units", area: "200 sq.ft", subsidy: "₹60,000", idealFor: "2-3 BHK Homes, Refrigerator & Washing Machine" },
    { kw: "3 kW", units: "360 Units", area: "300 sq.ft", subsidy: "₹78,000", idealFor: "3-4 BHK Homes, 1 Inverter AC + Home Appliances" },
    { kw: "5 kW", units: "600 Units", area: "500 sq.ft", subsidy: "₹78,000", idealFor: "Large Independent Houses / Villas with 2-3 ACs" },
    { kw: "10 kW", units: "1,200 Units", area: "1,000 sq.ft", subsidy: "₹78,000", idealFor: "Luxury Bungalows, Multi-Floor Residences" },
  ];

  const faqs = [
    {
      q: "How does net metering work with AMR Solar in India?",
      a: "With net metering, your rooftop solar plant generates electricity throughout the day. Whatever power your home doesn't consume immediately is automatically exported to the grid. The bi-directional meter records both exported and imported power. At the end of the billing cycle, you only pay for the net units, and surplus credits carry forward to the next month!"
    },
    {
      q: "How much government subsidy do I get under PM Surya Ghar Muft Bijli Yojana?",
      a: "Under the PM Surya Ghar scheme, the Central Government provides a direct bank transfer (DBT) subsidy of ₹30,000 for a 1 kW system, ₹60,000 for a 2 kW system, and ₹78,000 for 3 kW and above. AMR Solar handles 100% of the portal registration and paperwork for you."
    },
    {
      q: "What is the lifespan and warranty of residential solar panels?",
      a: "AMR Solar installs Tier-1 MNRE-approved solar modules with a 25-year performance warranty and 10 to 12 years product warranty. Inverters typically carry 5 to 10 years warranty."
    },
    {
      q: "How long does the entire installation and meter setup take?",
      a: "Physical installation on your rooftop takes only 2 to 4 days. The complete cycle, including DISCOM net meter inspection and sanction, typically concludes within 2 to 3 weeks."
    }
  ];

  return (
    <div className="bg-slate-50 text-slate-800 font-sans overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-35">
          <img 
            src="/assets/images/residential/residential_2.jpeg" 
            alt="Residential rooftop solar installation" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-900/50" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: -20 }} 
              animate={{ opacity: 1, y: 0 }} 
              className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold"
            >
              <Sun className="w-4 h-4" /> PM Surya Ghar Muft Bijli Yojana Partner
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight"
            >
              Residential Rooftop Solar Systems with <span className="text-amber-400">₹78,000 Subsidy</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl"
            >
              Slash your monthly electricity bills by up to 90%. AMR Solar delivers customized on-grid and hybrid rooftop solar installations with full net metering assistance and direct government subsidy processing across India.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a 
                href="#enquiry-form" 
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-7 py-3.5 rounded-full shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2 group text-sm sm:text-base"
              >
                Get Free Rooftop Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a 
                href="https://wa.me/919347857711?text=Hello%20AMR%20Solar%2C%20I%20am%20interested%20in%20Residential%20Rooftop%20Solar." 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-6 py-3.5 rounded-full transition-all flex items-center gap-2 text-sm sm:text-base"
              >
                <MessageSquare className="w-4 h-4" /> WhatsApp Us
              </a>
            </motion.div>

            <div className="pt-4 grid grid-cols-3 gap-4 border-t border-slate-800 text-slate-300 text-xs sm:text-sm">
              <div>
                <span className="block text-xl sm:text-2xl font-black text-amber-400">Up to 90%</span>
                <span>Bill Reduction</span>
              </div>
              <div>
                <span className="block text-xl sm:text-2xl font-black text-amber-400">₹78,000</span>
                <span>Direct Subsidy</span>
              </div>
              <div>
                <span className="block text-xl sm:text-2xl font-black text-amber-400">25 Years</span>
                <span>Panel Warranty</span>
              </div>
            </div>
          </div>

          {/* Quick Consultation Card & Image */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl group">
              <img 
                src="/assets/images/residential/residential_2.jpeg" 
                alt="Residential Rooftop Solar Installation by AMR" 
                className="w-full h-44 sm:h-52 object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-4 right-4 flex justify-between items-center text-xs">
                <span className="bg-amber-500 text-slate-950 font-black px-2.5 py-1 rounded-lg">Rooftop Solar</span>
                <span className="text-white font-bold">1 kW - 10 kW+</span>
              </div>
            </div>
            <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold">
                  <Banknote className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-black text-lg text-slate-900">Subsidy Breakdown</h3>
                  <p className="text-xs text-slate-500">PM Surya Ghar Yojana (India)</p>
                </div>
              </div>

              <div className="space-y-2.5 text-xs sm:text-sm">
                <div className="flex justify-between items-center p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="font-semibold text-slate-700">1 kW System (120 units/mo)</span>
                  <span className="font-black text-emerald-600">₹30,000 Subsidy</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="font-semibold text-slate-700">2 kW System (240 units/mo)</span>
                  <span className="font-black text-emerald-600">₹60,000 Subsidy</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-amber-50 rounded-xl border border-amber-200">
                  <div>
                    <span className="font-bold text-slate-900 block">3 kW System & Above</span>
                    <span className="text-[11px] text-amber-700">360+ units/mo (Most Popular)</span>
                  </div>
                  <span className="font-black text-emerald-600 text-base">₹78,000 Subsidy</span>
                </div>
              </div>

              <div className="mt-5 p-4 bg-slate-900 text-white rounded-2xl text-xs space-y-2">
                <div className="flex items-center gap-2 text-amber-400 font-bold">
                  <CheckCircle className="w-4 h-4" /> 100% Paperwork Handled by AMR Solar
                </div>
                <p className="text-slate-300 text-[11px]">
                  From national portal registration and TSSPDCL feasibility to net meter inspection, our dedicated team manages every step.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Rooftop Systems Types */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <span className="text-amber-600 font-bold uppercase tracking-widest text-xs">Tailored For Every Home</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">Choose Your Residential Solar Architecture</h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Whether you want maximum grid savings, battery backup for outages, or 100% independence, we build the right system for your roof.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {systems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-100 border border-slate-100 flex flex-col justify-between transition-all group"
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
                    <div className="absolute bottom-4 right-4 bg-amber-500/90 backdrop-blur-md px-3 py-1 rounded-xl text-xs font-black text-slate-950">
                      {item.kw}
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">{item.desc}</p>
                    
                    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 mb-8 border-t border-slate-100 pt-6">
                      {item.features.map((feat, fidx) => (
                        <li key={fidx} className="flex items-start gap-2.5">
                          <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="px-8 pb-8">
                  <a 
                    href="#enquiry-form"
                    className="w-full block text-center py-3.5 px-4 rounded-xl font-bold text-sm bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-white transition-colors"
                  >
                    Enquire for {item.title}
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Completed Residential Installations Showcase Gallery */}
      <section className="py-20 bg-slate-100/70 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6 }} 
            className="text-center max-w-3xl mx-auto mb-16 space-y-3"
          >
            <span className="text-amber-600 font-bold uppercase tracking-widest text-xs">Real Rooftop Portfolio</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">Featured Residential Rooftop Installations</h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Real rooftop solar projects installed by AMR Solar with ₹78,000 DBT subsidy credit and bi-directional net metering.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {residentialGallery.map((p, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xl shadow-slate-100 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-52 overflow-hidden bg-slate-900">
                    <img 
                      src={p.image} 
                      alt={p.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-amber-400">
                      {p.subsidy}
                    </div>
                  </div>
                  <div className="p-6 space-y-3">
                    <h4 className="font-bold text-slate-900 text-lg leading-snug">{p.title}</h4>
                    <div className="text-xs text-amber-600 font-bold">
                      {p.location}
                    </div>
                    <div className="p-2.5 bg-emerald-50 rounded-xl border border-emerald-100 text-xs font-black text-emerald-700">
                      {p.savings}
                    </div>
                    <p className="text-slate-600 text-xs leading-relaxed">{p.desc}</p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <a 
                    href="#enquiry-form"
                    className="block text-center py-3 rounded-xl bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-white font-bold text-xs transition-colors"
                  >
                    Check Subsidy for My Roof
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Net Metering Process Section */}
      <section id="net-metering" className="bg-slate-900 text-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center space-y-4 mb-16"
          >
            <span className="text-amber-400 font-bold uppercase tracking-widest text-xs">Bi-Directional Energy Flow</span>
            <h2 className="text-3xl sm:text-4xl font-black">How Net Metering Works with AMR Solar</h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Turn your rooftop into a mini power station that banks units in the grid and generates electricity credits.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {netMeteringSteps.map((step, idx) => (
              <motion.div 
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="bg-slate-800/80 border border-slate-700 p-6 rounded-3xl relative flex flex-col justify-between"
              >
                <div>
                  <div className="text-4xl font-black text-amber-400/40 mb-4">{step.step}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{step.desc}</p>
                </div>
                <div className="mt-6 flex items-center gap-1.5 text-xs text-amber-400 font-semibold">
                  <CheckCircle className="w-3.5 h-3.5" /> AMR Assisted
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 bg-slate-800 rounded-3xl p-6 sm:p-8 border border-slate-700 flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold flex-shrink-0">
                <FileCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Need Net Metering for Your Existing Home?</h4>
                <p className="text-xs sm:text-sm text-slate-300">We assist with sanction approvals, transformer feasibility check, and DISCOM clearances.</p>
              </div>
            </div>
            <a 
              href="tel:+917569967711" 
              className="whitespace-nowrap bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3 rounded-full text-xs sm:text-sm transition-all"
            >
              Call +91 7569967711
            </a>
          </motion.div>
        </div>
      </section>

      {/* System Sizing & Savings Matrix */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 space-y-3"
        >
          <span className="text-amber-600 font-bold uppercase tracking-widest text-xs">System Sizing Guide</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">Rooftop Capacities, Generation & Subsidies</h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Select the system that best matches your monthly power usage and available rooftop shadow-free area.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-x-auto bg-white rounded-3xl shadow-xl shadow-slate-100 border border-slate-200"
        >
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-900 text-white uppercase text-[11px] tracking-wider">
                <th className="py-4 px-6 font-bold">Capacity</th>
                <th className="py-4 px-6 font-bold">Monthly Units</th>
                <th className="py-4 px-6 font-bold">Roof Space Required</th>
                <th className="py-4 px-6 font-bold">Govt Subsidy</th>
                <th className="py-4 px-6 font-bold">Ideal Application</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {systemCapacities.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 1 ? "bg-slate-50/60" : "bg-white hover:bg-amber-50/30 transition-colors"}>
                  <td className="py-4 px-6 font-black text-slate-900 text-sm sm:text-base">{row.kw}</td>
                  <td className="py-4 px-6 font-semibold text-amber-600">{row.units}</td>
                  <td className="py-4 px-6">{row.area}</td>
                  <td className="py-4 px-6">
                    <span className="bg-emerald-100 text-emerald-800 font-bold px-2.5 py-1 rounded-full text-xs">
                      {row.subsidy}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-slate-600">{row.idealFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </section>

      {/* Interactive Bill Calculator */}
      <section className="bg-amber-500 py-16 text-slate-950">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-amber-300/40"
          >
            <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
              <span className="text-amber-600 font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-1.5">
                <Calculator className="w-4 h-4" /> Quick ROI Estimator
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900">Estimate Your Solar Savings & Subsidy</h3>
              <p className="text-slate-600 text-xs sm:text-sm">Drag the slider to match your average monthly electricity bill.</p>
            </div>

            <div className="space-y-6 max-w-xl mx-auto">
              <div>
                <div className="flex justify-between items-center font-bold text-slate-800 mb-2">
                  <span>Monthly Electricity Bill:</span>
                  <span className="text-2xl font-black text-amber-600">₹{calcBill.toLocaleString()}</span>
                </div>
                <input 
                  type="range" 
                  min="1000" 
                  max="12000" 
                  step="500"
                  value={calcBill}
                  onChange={(e) => setCalcBill(parseInt(e.target.value))}
                  className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>₹1,000 / mo</span>
                  <span>₹6,000 / mo</span>
                  <span>₹12,000 / mo</span>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center pt-4">
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <div className="text-xs text-slate-500 font-semibold">Recommended</div>
                  <div className="text-xl font-black text-slate-900 mt-1">{recommendedKw} kW</div>
                </div>

                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <div className="text-xs text-slate-500 font-semibold">Monthly Units</div>
                  <div className="text-xl font-black text-slate-900 mt-1">~{monthlyUnits}</div>
                </div>

                <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-100">
                  <div className="text-xs text-emerald-700 font-semibold">Govt Subsidy</div>
                  <div className="text-xl font-black text-emerald-700 mt-1">₹{subsidyAmount.toLocaleString()}</div>
                </div>

                <div className="bg-amber-50 p-4 rounded-2xl border border-amber-200">
                  <div className="text-xs text-amber-800 font-semibold">Annual Savings</div>
                  <div className="text-xl font-black text-amber-700 mt-1">₹{annualSavings.toLocaleString()}</div>
                </div>
              </div>

              <div className="text-center pt-2">
                <a 
                  href="#enquiry-form"
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-8 py-3.5 rounded-full shadow-lg transition-all"
                >
                  Book Free Site Survey For This Capacity <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enquiry Form & Contact Section */}
      <section id="enquiry-form" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-6"
          >
            <span className="text-amber-400 font-bold uppercase tracking-widest text-xs">Start Your Solar Journey</span>
            <h2 className="text-3xl sm:text-4xl font-black leading-tight">
              Request Your Free Residential Rooftop Consultation
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              Speak directly with an AMR Solar engineer. We will evaluate your roof layout, calculate exact net metering savings, and process your PM Surya Ghar subsidy application.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-800 text-amber-400 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Direct Helpline Numbers</div>
                  <div className="font-bold text-white text-base">
                    <a href="tel:+917569967711" className="hover:text-amber-400">+91 7569967711</a> &nbsp;|&nbsp; 
                    <a href="tel:+919347857711" className="hover:text-amber-400 ml-2">+91 9347857711</a>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-800 text-amber-400 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Official Support Email</div>
                  <div className="font-bold text-white text-base">
                    <a href="mailto:info@amrsolarsolutions.com" className="hover:text-amber-400">info@amrsolarsolutions.com</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-slate-800/80 rounded-2xl border border-slate-700 text-xs text-slate-300 space-y-2">
              <strong className="text-white block font-semibold text-sm">Service Coverage:</strong>
              <p>Jagtial, Secunderabad, Hyderabad, Karimnagar, Peddapalli, Warangal, and all regions across India.</p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 bg-white text-slate-900 rounded-3xl p-8 shadow-2xl"
          >
            <h3 className="text-2xl font-black mb-2 text-slate-900">Residential Solar Enquiry</h3>
            <p className="text-xs text-slate-500 mb-6">Fill in your details for a customized rooftop proposal.</p>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="First Name *" 
                  required
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 px-4 py-3.5 rounded-xl focus:outline-none focus:border-amber-500" 
                />
                <input 
                  type="text" 
                  placeholder="Last Name *" 
                  required
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 px-4 py-3.5 rounded-xl focus:outline-none focus:border-amber-500" 
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input 
                  type="tel" 
                  placeholder="Mobile Phone *" 
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/[^0-9]/g, '') })}
                  className="w-full bg-slate-50 border border-slate-200 px-4 py-3.5 rounded-xl focus:outline-none focus:border-amber-500" 
                />
                <input 
                  type="text" 
                  placeholder="City / Village" 
                  required
                  value={formData.cityLocation}
                  onChange={(e) => setFormData({ ...formData, cityLocation: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 px-4 py-3.5 rounded-xl focus:outline-none focus:border-amber-500" 
                />
              </div>

              <input 
                type="email" 
                placeholder="Email Address *" 
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 px-4 py-3.5 rounded-xl focus:outline-none focus:border-amber-500" 
              />

              <select 
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 px-4 py-3.5 rounded-xl focus:outline-none focus:border-amber-500 font-medium"
              >
                <option value="Residential Solar (1-3 kW)">Residential Solar (1 - 3 kW with ₹78,000 Subsidy)</option>
                <option value="Residential Solar (4-10 kW)">Residential Solar (4 - 10 kW for Larger Homes/Villas)</option>
                <option value="Hybrid Solar with Battery Backup">Hybrid Solar with Battery Backup</option>
                <option value="Net Metering Consultation Only">Net Metering Assistance Only</option>
              </select>

              <textarea 
                rows={3}
                placeholder="Tell us about your monthly electricity bill or roof type..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl focus:outline-none focus:border-amber-500 resize-none"
              />

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-4 rounded-xl shadow-lg transition-all cursor-pointer disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Submit Rooftop Solar Enquiry"}
              </button>

              {error && <p className="text-red-500 text-xs text-center">{error}</p>}
              {success && <p className="text-emerald-600 text-xs text-center font-bold">Request received! We will call you shortly.</p>}
            </form>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 space-y-3"
          >
            <span className="text-amber-600 font-bold uppercase tracking-widest text-xs">Got Questions?</span>
            <h2 className="text-3xl font-black text-slate-900">Residential Solar Frequently Asked Questions</h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="border border-slate-200 rounded-2xl overflow-hidden"
              >
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 bg-slate-50 hover:bg-slate-100 transition-colors text-left"
                >
                  <span className="font-bold text-slate-900 text-sm sm:text-base">{faq.q}</span>
                  <HelpCircle className="w-5 h-5 text-amber-500 flex-shrink-0 ml-4" />
                </button>
                {activeFaq === idx && (
                  <div className="p-5 text-slate-600 text-xs sm:text-sm leading-relaxed bg-white border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

