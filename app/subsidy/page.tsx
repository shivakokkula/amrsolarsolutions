"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Sun, ShieldCheck, Zap, Banknote, Leaf, 
  Activity, ArrowRight, Home, ArrowDownToLine 
} from "lucide-react";

export default function SubsidyPage() {
  const scrollToContact = (event?: React.MouseEvent<HTMLAnchorElement>) => {
    const target = document.getElementById("contact");

    if (event) {
      event.preventDefault();
    }

    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState(null, "", "/#contact");
      return;
    }

    window.location.href = "/#contact";
  };

  return (
    <div className="bg-slate-50 text-slate-800 font-sans overflow-hidden pb-24">
      
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 z-0 opacity-40">
          <img src="https://images.unsplash.com/photo-1509391366360-12009a30f785?w=1600&q=80" alt="Solar Panels" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-900/40"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 px-4 py-2 rounded-full text-sm font-semibold">
              <Banknote className="w-4 h-4" /> Solar Subsidy & Government Benefits
            </motion.div>
            
            <motion.h1 initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
              PM Surya Ghar <span className="text-amber-400">Muft Bijli Yojana</span>
            </motion.h1>
            
            <motion.p initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="text-lg text-slate-300">
              Take advantage of the Government of India’s rooftop solar subsidy and enjoy lower electricity bills, long-term savings, and clean energy with AMR Solar Renewable Energy.
            </motion.p>
            
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-col sm:flex-row gap-4 pt-4">
              <div className="bg-slate-800/80 border border-slate-700 p-4 rounded-xl flex items-center gap-4">
                <Banknote className="w-8 h-8 text-amber-400" />
                <div>
                  <p className="text-sm text-slate-400 font-bold uppercase">Max Subsidy</p>
                  <p className="text-xl font-black text-white">Up to ₹78,000</p>
                </div>
              </div>
              <div className="bg-slate-800/80 border border-slate-700 p-4 rounded-xl flex items-center gap-4">
                <Zap className="w-8 h-8 text-amber-400" />
                <div>
                  <p className="text-sm text-slate-400 font-bold uppercase">Energy Benefit</p>
                  <p className="text-xl font-black text-white">300 Free Units/Mo</p>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} className="pt-4">
              <a href="/#contact" onClick={scrollToContact} className="inline-flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-8 py-4 rounded-full shadow-lg shadow-amber-500/20 transition-all group">
                Get Free Consultation <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About The Scheme */}
      <section className="py-24 max-w-7xl mx-auto px-6 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <motion.span initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-amber-600 font-bold uppercase tracking-widest text-sm">
              About the Scheme
            </motion.span>
            
            <motion.h2 initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
              Power Your Home with Government-Supported Solar Energy
            </motion.h2>
            
            <motion.p initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="text-lg text-slate-600 leading-relaxed">
              The PM Surya Ghar Muft Bijli Yojana is a flagship initiative by the Government of India that encourages homeowners to install rooftop solar systems through attractive financial assistance. 
            </motion.p>
            
            <motion.p initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="text-lg text-slate-600 leading-relaxed">
              The scheme helps reduce electricity bills, promotes clean energy, and supports India’s transition toward a sustainable future. At <strong className="text-slate-900">AMR Solar</strong>, we provide complete support—from consultation and installation to subsidy processing and net metering approvals.
            </motion.p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { icon: <Zap />, text: "Up to 300 Free Units Every Month" },
              { icon: <Banknote />, text: "Government Subsidy up to ₹78,000" },
              { icon: <Activity />, text: "Lower Monthly Electricity Bills" },
              { icon: <ArrowDownToLine />, text: "Earn Through Net Metering" },
              { icon: <ShieldCheck />, text: "Energy Independence" },
              { icon: <Leaf />, text: "Cleaner & Greener Environment" },
            ].map((benefit, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, x: -50 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.5, delay: 0.2 + (idx * 0.1) }} 
                className="bg-white p-6 rounded-2xl shadow-lg shadow-slate-100 border border-slate-100 flex flex-col gap-4"
              >
                <div className="w-12 h-12 bg-amber-50 text-amber-500 rounded-xl flex items-center justify-center">
                  {benefit.icon}
                </div>
                <h4 className="font-bold text-slate-900">{benefit.text}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subsidy Tiers Section */}
      <section className="bg-slate-900 py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <span className="text-amber-400 font-bold uppercase tracking-widest text-sm">Subsidy Structure</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">How Much Subsidy Can You Get?</h2>
            <p className="text-slate-400">The subsidy amount depends on the capacity of the solar plant installed on your roof.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { kw: "1 kW Solar System", amount: "30,000" },
              { kw: "2 kW Solar System", amount: "60,000" },
              { kw: "3 kW and Above", amount: "78,000", highlight: true },
            ].map((tier, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, x: -50 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.5, delay: idx * 0.2 }} 
                className={`p-8 rounded-3xl relative overflow-hidden border ${tier.highlight ? 'bg-amber-500 border-amber-400 text-slate-950' : 'bg-slate-800 border-slate-700 text-white'}`}
              >
                <p className={`text-sm font-bold uppercase mb-2 ${tier.highlight ? 'text-slate-800' : 'text-slate-400'}`}>Up to ₹</p>
                <h3 className="text-5xl font-black mb-6">{tier.amount}</h3>
                <div className={`w-12 h-1 mb-6 ${tier.highlight ? 'bg-slate-900' : 'bg-amber-500'}`}></div>
                <p className="text-xl font-bold">{tier.kw}</p>
                {tier.highlight && (
                  <div className="absolute -right-6 -top-6 text-amber-400/20">
                    <Sun className="w-32 h-32" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works / The Flow */}
      <section className="py-24 max-w-7xl mx-auto px-6 overflow-hidden">
        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center max-w-2xl mx-auto space-y-4 mb-20">
          <span className="text-amber-600 font-bold uppercase tracking-widest text-sm">System Flow</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">How The System Works</h2>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2 relative">
          {/* Connector Line (Hidden on mobile) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-amber-200 -z-10 -translate-y-1/2 rounded-full"></div>

          {[
            { icon: <Sun className="w-8 h-8" />, label: "Sunlight" },
            { icon: <Zap className="w-8 h-8" />, label: "Solar panel" },
            { icon: <Home className="w-8 h-8" />, label: "Your home" },
            { icon: <Activity className="w-8 h-8" />, label: "Smart meter" },
            { icon: <ArrowDownToLine className="w-8 h-8" />, label: "Grid export" },
          ].map((step, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, x: -50 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.5, delay: idx * 0.15 }} 
              className="flex flex-col items-center gap-4 bg-white md:bg-transparent p-4 md:p-0 rounded-xl w-full md:w-auto z-10"
            >
              <div className="w-20 h-20 bg-amber-500 text-slate-950 rounded-full flex items-center justify-center shadow-lg shadow-amber-500/30 border-4 border-white">
                {step.icon}
              </div>
              <p className="font-bold text-slate-900 text-center">{step.label}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.8 }} className="text-center mt-20">
          <a href="/#contact" onClick={scrollToContact} className="inline-flex items-center justify-center gap-3 bg-slate-900 hover:bg-slate-800 text-white font-bold px-10 py-4 rounded-full shadow-xl transition-all">
            Get Your Free Consultation
          </a>
        </motion.div>
      </section>

    </div>
  );
}