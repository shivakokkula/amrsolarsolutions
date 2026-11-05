"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Banknote, IndianRupee, ShieldCheck, CheckCircle2, ArrowRight, 
  HelpCircle, Landmark, Percent, FileCheck, Phone, Mail, 
  Calculator, Sparkles, Building, CheckCircle
} from "lucide-react";
import { useContactForm } from "@/lib/hooks/useContactForm";

export default function SubsidiesFinancePage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const { loading, success, error, submitForm, reset } = useContactForm();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    cityLocation: "",
    type: "Subsidy & Financing Guidance",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitForm(formData);
    if (!error) {
      alert("Thank you! Your subsidy & financing enquiry has been submitted. Our subsidy specialist will contact you.");
      setFormData({
        firstName: "",
        lastName: "",
        cityLocation: "",
        type: "Subsidy & Financing Guidance",
        email: "",
        phone: "",
        message: ""
      });
      reset();
    }
  };

  const subsidySlabs = [
    {
      capacity: "1 kW Solar Plant",
      units: "120 Units / Month",
      centralSubsidy: "₹30,000",
      approxCost: "₹60,000 - ₹65,000",
      effectiveCost: "₹30,000 - ₹35,000",
      idealFor: "1-2 BHK Homes, Basic appliances",
    },
    {
      capacity: "2 kW Solar Plant",
      units: "240 Units / Month",
      centralSubsidy: "₹60,000",
      approxCost: "₹1,20,000 - ₹1,30,000",
      effectiveCost: "₹60,000 - ₹70,000",
      idealFor: "2-3 BHK Homes, Refrigerator & Washing Machine",
    },
    {
      capacity: "3 kW Solar Plant",
      units: "360 Units / Month",
      centralSubsidy: "₹78,000 (Maximum)",
      approxCost: "₹1,80,000 - ₹1,95,000",
      effectiveCost: "₹1,02,000 - ₹1,17,000",
      idealFor: "3-4 BHK Homes with 1 AC (Most Popular Choice)",
    },
    {
      capacity: "4 kW to 10 kW Plants",
      units: "480 - 1,200 Units / Month",
      centralSubsidy: "₹78,000 (Flat Capped)",
      approxCost: "₹2,40,000 - ₹5,50,000",
      effectiveCost: "Cost minus ₹78,000 Subsidy",
      idealFor: "Villas, Duplexes, Multi-Floor Residences",
    },
  ];

  const eligibilityChecklist = [
    {
      title: "Domestic Residential Consumer",
      desc: "Must have an active domestic LT (Low Tension) electricity connection in India (DISCOMs)."
    },
    {
      title: "Rooftop Ownership or Rights",
      desc: "The applicant must own the house / roof or have documented rights to install solar panels on the terrace or rooftop."
    },
    {
      title: "Shadow-Free Roof Area",
      desc: "Approximately 80 to 100 sq.ft of shadow-free rooftop space is required per 1 kW of solar panel capacity."
    },
    {
      title: "MNRE Registered Vendor Installation",
      desc: "Subsidy is valid only when installed by an approved, registered solar company like AMR Solar using Made-in-India (DCR) modules."
    },
    {
      title: "Bank Account Linked to Aadhaar",
      desc: "The Direct Benefit Transfer (DBT) subsidy is wired straight into the consumer's bank account via the National Portal."
    }
  ];

  const bankPartners = [
    {
      name: "State Bank of India (SBI)",
      scheme: "SBI Surya Ghar Solar Loan",
      interest: "~7.00% p.a.",
      tenure: "Up to 10 Years",
      highlight: "No collateral required for loans up to ₹2 Lakhs, minimal margin money."
    },
    {
      name: "Canara Bank",
      scheme: "Canara Solar Scheme",
      interest: "~7.15% p.a.",
      tenure: "Up to 7 Years",
      highlight: "Special subsidized interest rates for PM Surya Ghar registered beneficiaries."
    },
    {
      name: "Union Bank of India",
      scheme: "Union Green Energy Loan",
      interest: "~7.05% p.a.",
      tenure: "Up to 7 Years",
      highlight: "Fast digital sanction linked to national portal consumer ID."
    },
    {
      name: "Grameena Bank (TGB / India Rural Bank)",
      scheme: "Rural & Urban Solar Scheme",
      interest: "~7.00% p.a.",
      tenure: "Up to 7 - 10 Years",
      highlight: "Dedicated rural and urban solar loans with zero collateral and fast sanction for residents across India."
    }
  ];

  const faqs = [
    {
      q: "When and how do I receive the ₹78,000 subsidy?",
      a: "The subsidy is transferred directly by the Central Government (MNRE) into your bank account through Direct Benefit Transfer (DBT) within 30 to 45 days after the electricity department installs the bi-directional net meter and generates the commissioning certificate. AMR Solar handles 100% of the portal documentation."
    },
    {
      q: "Can I install solar panels with a bank loan and zero down-payment?",
      a: "Yes! Under the PM Surya Ghar scheme, leading banks like SBI, Grameena Bank (TGB), Canara Bank, and Union Bank provide collateral-free rooftop solar loans at special concessional interest rates (~7% p.a.) with up to 90% financing. In many cases, your monthly electricity bill savings are greater than your loan EMI!"
    },
    {
      q: "What documents are required to apply for the subsidy and loan?",
      a: "You will need: 1) Latest electricity bill copy, 2) Aadhaar card, 3) PAN card, 4) Bank account passbook/cancelled cheque with Aadhaar seeding, and 5) Property tax receipt or ownership proof. AMR Solar assists you in uploading all necessary files on the National Portal."
    },
    {
      q: "Is commercial solar eligible for the PM Surya Ghar ₹78,000 subsidy?",
      a: "The PM Surya Ghar subsidy is specifically designed for residential domestic consumers. However, commercial and industrial enterprises receive 40% Accelerated Depreciation tax write-offs under Section 32 of the IT Act, which delivers substantial corporate tax savings!"
    }
  ];

  return (
    <div className="bg-slate-50 text-slate-800 font-sans overflow-hidden pb-20">
      
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-35">
          <img 
            src="/assets/images/residential/residential_2.jpeg" 
            alt="PM Surya Ghar Muft Bijli Yojana Subsidies & Financing" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-900/50" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: -20 }} 
              animate={{ opacity: 1, y: 0 }} 
              className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold"
            >
              <Banknote className="w-4 h-4" /> PM Surya Ghar Muft Bijli Yojana & Bank Financing
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight"
            >
              Government Subsidies & <span className="text-amber-400">Low-Interest Financing</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl"
            >
              Unlock direct Central Government subsidies of up to <strong>₹78,000</strong> straight to your bank account. Combine it with collateral-free bank loans starting from ~7% interest rate with EMIs lower than your current electricity bill.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a 
                href="#subsidy-enquiry" 
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-7 py-3.5 rounded-full shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2 text-sm sm:text-base"
              >
                Apply for Subsidy Assistance <ArrowRight className="w-4 h-4" />
              </a>

              <a 
                href="tel:+917569967711" 
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3.5 rounded-full border border-white/20 transition-all flex items-center gap-2 text-sm sm:text-base"
              >
                <Phone className="w-4 h-4 text-amber-400" /> Call Subsidy Desk: +91 7569967711
              </a>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl group">
              <img 
                src="/assets/images/residential/residential_3.jpeg" 
                alt="AMR Solar Rooftop Subsidy Installation" 
                className="w-full h-44 sm:h-52 object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-4 right-4 flex justify-between items-center text-xs">
                <span className="bg-amber-500 text-slate-950 font-black px-2.5 py-1 rounded-lg">DBT Direct Transfer</span>
                <span className="text-white font-bold">100% Paperwork Handled</span>
              </div>
            </div>

            <div className="bg-slate-800/90 border border-slate-700 p-6 rounded-3xl text-white space-y-3">
              <h3 className="text-lg font-bold text-amber-400 border-b border-slate-700 pb-2">Subsidy at a Glance</h3>
              
              <div className="space-y-2 text-xs sm:text-sm">
                <div className="flex justify-between items-center p-2.5 bg-slate-900 rounded-xl">
                  <span>1 kW System</span>
                  <span className="font-bold text-emerald-400 text-sm sm:text-base">₹30,000 Subsidy</span>
                </div>
                <div className="flex justify-between items-center p-2.5 bg-slate-900 rounded-xl">
                  <span>2 kW System</span>
                  <span className="font-bold text-emerald-400 text-sm sm:text-base">₹60,000 Subsidy</span>
                </div>
                <div className="flex justify-between items-center p-2.5 bg-amber-500/20 border border-amber-500/40 rounded-xl">
                  <span>3 kW+ System</span>
                  <span className="font-black text-amber-400 text-sm sm:text-base">₹78,000 Max Subsidy</span>
                </div>
              </div>

              <p className="text-[11px] text-slate-400 pt-1">
                * Direct bank transfer (DBT) directly from Central Government to your Aadhaar-linked account.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Subsidy Slabs Breakdown Table */}
      <section id="pm-surya-ghar" className="py-20 max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14 space-y-3"
        >
          <span className="text-amber-600 font-bold uppercase tracking-widest text-xs">Official Slabs</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">PM Surya Ghar Subsidy Breakdown</h2>
          <p className="text-slate-600 text-sm sm:text-base">
            See exactly how much grant you receive and what your effective net investment will be for rooftop solar.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-x-auto rounded-3xl shadow-xl shadow-slate-100 border border-slate-200 bg-white"
        >
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-900 text-white uppercase text-[11px] tracking-wider">
                <th className="py-4 px-6 font-bold">System Size</th>
                <th className="py-4 px-6 font-bold">Monthly Output</th>
                <th className="py-4 px-6 font-bold">Direct DBT Subsidy</th>
                <th className="py-4 px-6 font-bold">Approx. Turnkey Cost</th>
                <th className="py-4 px-6 font-bold">Effective Cost to You</th>
                <th className="py-4 px-6 font-bold">Ideal Application</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {subsidySlabs.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 1 ? "bg-slate-50/60" : "bg-white hover:bg-amber-50/30 transition-colors"}>
                  <td className="py-4 px-6 font-black text-slate-900 text-sm sm:text-base">{row.capacity}</td>
                  <td className="py-4 px-6 font-semibold text-amber-600">{row.units}</td>
                  <td className="py-4 px-6">
                    <span className="bg-emerald-100 text-emerald-800 font-black px-3 py-1 rounded-full text-xs">
                      {row.centralSubsidy}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-slate-500">{row.approxCost}</td>
                  <td className="py-4 px-6 font-bold text-slate-900">{row.effectiveCost}</td>
                  <td className="py-4 px-6 text-slate-600">{row.idealFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </section>

      {/* Eligibility Criteria Checklist (User requested: eligibility) */}
      <section className="bg-slate-900 text-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16 space-y-3"
          >
            <span className="text-amber-400 font-bold uppercase tracking-widest text-xs">Eligibility Verification</span>
            <h2 className="text-3xl sm:text-4xl font-black">Who is Eligible for the Solar Subsidy?</h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Check if your property qualifies for the ₹78,000 PM Surya Ghar grant.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eligibilityChecklist.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-slate-800/80 border border-slate-700 p-6 rounded-3xl space-y-3 hover:border-amber-400 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center font-bold">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: eligibilityChecklist.length * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-amber-500 text-slate-950 p-6 rounded-3xl flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-900/80">Check Your Eligibility</span>
                <h3 className="text-xl font-black mt-2">Unsure if your roof qualifies?</h3>
                <p className="text-xs sm:text-sm mt-2 text-slate-900/90">
                  Send us your electricity bill number and our team will run a quick verification on the TSSPDCL / TSNPDCL portal.
                </p>
              </div>
              <a 
                href="https://wa.me/919347857711?text=Hello%20AMR%20Solar%2C%20please%20check%20my%20subsidy%20eligibility." 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-6 block text-center py-3 bg-slate-950 text-white font-bold rounded-xl text-xs hover:bg-slate-900 transition-all"
              >
                Verify on WhatsApp: 9347857711
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solar Financing & Bank Loans Section (User requested: financing) */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <span className="text-amber-600 font-bold uppercase tracking-widest text-xs">Affordable Solar Loans</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">Low-Interest Solar Financing Options</h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Nationalized banks now offer collateral-free rooftop solar loans with interest rates as low as ~7% p.a., making solar affordable for every household.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {bankPartners.map((bank, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl shadow-slate-100 space-y-5"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                    <Landmark className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-slate-900">{bank.name}</h3>
                    <p className="text-xs text-amber-600 font-bold">{bank.scheme}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-500 font-semibold">Interest Rate</div>
                  <div className="text-lg font-black text-emerald-600">{bank.interest}</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 p-4 bg-slate-50 rounded-2xl text-xs">
                <div>
                  <span className="text-slate-500 block">Loan Tenure:</span>
                  <span className="font-bold text-slate-900">{bank.tenure}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Collateral Security:</span>
                  <span className="font-bold text-emerald-600">Nil / Collateral-Free</span>
                </div>
              </div>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {bank.highlight}
              </p>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500">Loan paperwork guided by AMR Solar</span>
                <a 
                  href="#subsidy-enquiry" 
                  className="font-bold text-amber-600 hover:text-amber-500 flex items-center gap-1"
                >
                  Apply for Loan <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Subsidy & Finance Enquiry Form */}
      <section id="subsidy-enquiry" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-6"
          >
            <span className="text-amber-400 font-bold uppercase tracking-widest text-xs">Full Documentation Support</span>
            <h2 className="text-3xl sm:text-4xl font-black leading-tight">
              Let AMR Solar Manage Your Subsidy from Start to Finish
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              Navigating government portals and bank loan applications can feel overwhelming. AMR Solar handles 100% of the registration, DISCOM net metering sanction, vendor endorsement, and inspection filing.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-800 text-amber-400 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Direct Helpline Numbers:</div>
                  <div className="font-bold text-white text-base">
                    <a href="tel:+917569967711" className="hover:text-amber-400">+91 7569967711</a> &nbsp;|&nbsp; 
                    <a href="tel:+919347857711" className="hover:text-amber-400 ml-2">+91 9347857711</a>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-800 text-amber-400 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Subsidy Desk Email:</div>
                  <div className="font-bold text-white text-base">
                    <a href="mailto:info@amrsolarsolutions.com" className="hover:text-amber-400">info@amrsolarsolutions.com</a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 bg-white text-slate-900 rounded-3xl p-8 shadow-2xl"
          >
            <h3 className="text-2xl font-black mb-2 text-slate-900">Request Subsidy & Loan Support</h3>
            <p className="text-xs text-slate-500 mb-6">Enter your details to initiate your government subsidy claim.</p>

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
                  placeholder="Phone Number *" 
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
                <option value="PM Surya Ghar ₹78,000 Subsidy Guidance">PM Surya Ghar ₹78,000 Subsidy Application</option>
                <option value="Solar Bank Loan & Low EMI Scheme">Solar Bank Loan / Financing Assistance</option>
                <option value="Both Subsidy & Solar Financing">Both Subsidy Application & Bank Loan</option>
              </select>

              <textarea 
                rows={3}
                placeholder="Electricity service connection number (USCNO) or monthly bill amount..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl focus:outline-none focus:border-amber-500 resize-none"
              />

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-4 rounded-xl shadow-lg transition-all cursor-pointer disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Submit Subsidy Claim Enquiry"}
              </button>

              {error && <p className="text-red-500 text-xs text-center">{error}</p>}
              {success && <p className="text-emerald-600 text-xs text-center font-bold">Inquiry received! Our team will contact you shortly.</p>}
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
            <span className="text-amber-600 font-bold uppercase tracking-widest text-xs">Subsidy & Finance FAQs</span>
            <h2 className="text-3xl font-black text-slate-900">Common Questions on Solar Subsidies & Loans</h2>
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
