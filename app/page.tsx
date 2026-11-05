"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sun, ShieldCheck, Wrench, FileText, MapPin, CheckCircle, 
  ChevronRight, ArrowRight, BatteryCharging, Droplets, Shield, 
  Quote, Plus, Minus, Send, Zap, Building2, Tractor, Phone, Mail, Award
} from "lucide-react";
import DynamicQuoteForm from "@/components/DynamicQuoteForm";

export default function AMRSolarHome() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

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

  const faqs = [
    {
      q: "How do rooftop solar panels work with net metering?",
      a: "Solar panels convert daylight into clean electricity. Your home uses this power first. Excess solar power is automatically sent to the electricity grid through a bi-directional net meter. At the end of the month, TSSPDCL/TSNPDCL gives you bill credits for every unit exported."
    },
    {
      q: "How much government subsidy can I receive under PM Surya Ghar Yojana?",
      a: "Under the PM Surya Ghar Muft Bijli Yojana, residential homeowners receive a direct DBT subsidy of up to ₹78,000 (₹30,000 for 1 kW, ₹60,000 for 2 kW, and ₹78,000 for 3 kW and above). AMR Solar handles 100% of the portal paperwork and DISCOM approvals."
    },
    {
      q: "How much can I save on my electricity bills?",
      a: "Depending on your monthly power consumption and system size, rooftop solar reduces your electricity bills by up to 90%. Systems typically pay for their entire capital cost in 3 to 4 years, delivering free electricity for the remaining 20+ years."
    },
    {
      q: "Do you provide solar solutions for commercial shops, offices, and agriculture?",
      a: "Yes! AMR Solar provides specialized commercial solar installations (5 kW to 1 MW+) with 40% Accelerated Depreciation tax benefits, as well as agricultural solar water pumps (submersible and surface) and VFD motor controllers under PM-KUSUM."
    },
    {
      q: "Where does AMR Solar operate in India?",
      a: "Our Head Office is in Velgatoor, Jagtial, and our second office is in Narapally, Secunderabad. We actively install and service solar systems across Jagtial, Secunderabad, Hyderabad, Karimnagar, Peddapalli, Warangal, and all regions across India."
    }
  ];

  return (
    <div className="bg-slate-50 text-slate-800 font-sans overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 z-0 opacity-35">
          <img 
            src="/assets/images/commercial/commercial_3.jpeg" 
            alt="AMR Solar Solutions rooftop installation in India" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-950/75"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -40 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.8 }} 
              className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold"
            >
              <Sun className="w-4 h-4" /> Trusted MNRE-Approved Solar Partner in India
            </motion.div>
            
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Best Rooftop, Commercial & Agricultural Solar with <span className="text-amber-400">₹78,000 Subsidy</span>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0, x: -40 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.8, delay: 0.2 }} 
              className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed"
            >
              Power your home, shop, office, or farm with clean solar energy. AMR Solar delivers premium MNRE-approved installations, 100% net metering support, and direct government subsidies under PM Surya Ghar Muft Bijli Yojana. Save up to 90% on electricity bills today.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, x: -40 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.8, delay: 0.3 }} 
              className="flex flex-col sm:flex-row items-center gap-4 pt-4"
            >
              <a 
                href="#contact" 
                onClick={scrollToContact} 
                className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-8 py-4 rounded-full shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-3 group text-sm sm:text-base"
              >
                Get quote <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link 
                href="/subsidy" 
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold px-8 py-4 rounded-full transition-all text-center text-sm sm:text-base"
              >
                Explore ₹78,000 Subsidy
              </Link>
            </motion.div>

            {/* Quick Helpline Callout */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-300">
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Direct Helpline: <a href="tel:+917569967711" className="font-bold text-white hover:text-amber-400">+91 7569967711</a> / <a href="tel:+919347857711" className="font-bold text-white hover:text-amber-400">+91 9347857711</a></span>
              </span>
              <span className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400" />
                <a href="mailto:info@amrsolarsolutions.com" className="hover:text-amber-400">info@amrsolarsolutions.com</a>
              </span>
            </div>
          </div>

          {/* Hero Right-Side Image Showcase Card */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8, delay: 0.2 }} 
            className="lg:col-span-5 relative"
          >
            <div className="relative group">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-500 via-amber-400 to-emerald-500 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
              
              <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-slate-950">
                <img 
                  src="/assets/images/commercial/commercial_1.jpeg" 
                  alt="AMR Solar Commercial & Rooftop Installation" 
                  className="w-full h-[360px] sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/30"></div>

                {/* Floating Top Badge */}
                <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
                  <Sun className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-bold text-white">MNRE Approved Tier-1</span>
                </div>

                {/* Floating Bottom Card */}
                <div className="absolute bottom-4 inset-x-4 bg-slate-900/90 backdrop-blur-md border border-white/20 p-4 rounded-2xl flex items-center justify-between shadow-xl">
                  <div>
                    <span className="text-amber-400 font-bold text-[11px] uppercase tracking-wider block">Real AMR Project</span>
                    <h4 className="text-white font-extrabold text-sm sm:text-base">100+ Completed Projects</h4>
                    <span className="text-[11px] text-slate-300">Rooftop • Commercial • Agricultural</span>
                  </div>
                  <div className="text-right">
                    <span className="bg-amber-500 text-slate-950 font-black text-xs px-2.5 py-1 rounded-lg block text-center">
                      ₹78K Subsidy
                    </span>
                    <span className="text-[10px] text-emerald-400 font-bold mt-1 block">Save up to 90%</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section (Exact User Numbers: 100+ projects, 100+ installations, 2+ years) */}
      <section className="bg-amber-500 text-slate-950 py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: "100+", label: "Projects Completed" },
            { num: "100+", label: "Installations Completed" },
            { num: "2+", label: "Years Experience" },
            { num: "90%", label: "Average Bill Savings" }
          ].map((stat, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, scale: 0.8 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6, delay: idx * 0.1 }} 
              className="space-y-1"
            >
              <h3 className="text-4xl lg:text-5xl font-black">{stat.num}</h3>
              <p className="font-bold text-slate-900/80 text-xs sm:text-sm uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 max-w-7xl mx-auto px-6 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.8 }} 
          className="text-center max-w-3xl mx-auto space-y-4 mb-16"
        >
          <span className="text-amber-600 font-bold uppercase tracking-widest text-xs">Our Solar Services</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">End-to-End Solar Solutions for Every Need</h2>
          <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
            AMR Solar delivers complete solar energy engineering, installation, DISCOM net metering approvals, and government subsidies across India.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { 
              icon: <Sun className="w-8 h-8 text-amber-500" />, 
              title: "Residential Solar", 
              desc: "On-grid rooftop systems with bi-directional net metering and up to ₹78,000 direct DBT subsidy under PM Surya Ghar Muft Bijli Yojana.",
              link: "/residential-solar" 
            },
            { 
              icon: <Building2 className="w-8 h-8 text-blue-500" />, 
              title: "Commercial Solar", 
              desc: "Engineered for shops, commercial complexes, offices, and industrial plants (5 kW to 1 MW+). Benefit from 40% Accelerated Depreciation tax write-offs.",
              link: "/commercial-solar" 
            },
            { 
              icon: <Tractor className="w-8 h-8 text-emerald-500" />, 
              title: "Agricultural Solar", 
              desc: "Solar water pumps (3HP to 10HP) and solar VFD motor controllers for tubewells and micro-irrigation, freeing farmers from diesel costs.",
              link: "/agricultural-solar" 
            },
            { 
              icon: <BatteryCharging className="w-8 h-8 text-indigo-500" />, 
              title: "Hybrid Solar Systems", 
              desc: "Combine solar energy with intelligent Lithium battery storage for 24/7 power backup during grid power cuts.",
              link: "/residential-solar" 
            },
            { 
              icon: <FileText className="w-8 h-8 text-rose-500" />, 
              title: "Subsidies & Finance", 
              desc: "Complete documentation, portal clearance, and collateral-free bank loans starting from ~7% interest rates.",
              link: "/subsidy" 
            },
            { 
              icon: <Wrench className="w-8 h-8 text-cyan-500" />, 
              title: "Solar Maintenance & AMC", 
              desc: "Keep your solar plant operating at peak efficiency with professional module cleaning, inverter health checks, and preventive care.",
              link: "/contact" 
            }
          ].map((service, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6, delay: 0.1 + (idx * 0.1) }} 
              className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-100 border border-slate-100 hover:-translate-y-2 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-slate-100 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{service.desc}</p>
              </div>
              <Link 
                href={service.link} 
                className="inline-flex items-center gap-2 text-amber-600 font-bold text-xs uppercase tracking-wider hover:text-amber-500"
              >
                Learn More <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="bg-slate-900 text-white py-24 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8 }} 
            className="space-y-6"
          >
            <span className="text-amber-400 font-bold uppercase tracking-widest text-xs">Customer Benefits</span>
            <h2 className="text-3xl sm:text-4xl font-black leading-tight">
              Why Switching to Solar with AMR Solar Makes Total Sense
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              Investing in solar is one of the highest returning financial decisions for homeowners, businesses, and farmers in India.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 p-4 bg-slate-800/80 rounded-2xl border border-slate-700">
                <CheckCircle className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-base font-bold text-white">Save Up to 90% on Electricity</h4>
                  <p className="text-xs text-slate-300">Generate your own power during the day and bank surplus credits with TSSPDCL / TSNPDCL.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-slate-800/80 rounded-2xl border border-slate-700">
                <CheckCircle className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-base font-bold text-white">Direct Government Subsidy up to ₹78,000</h4>
                  <p className="text-xs text-slate-300">Under PM Surya Ghar Muft Bijli Yojana, credited directly to your bank account via DBT.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-slate-800/80 rounded-2xl border border-slate-700">
                <CheckCircle className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-base font-bold text-white">3 to 4 Years Payback Period</h4>
                  <p className="text-xs text-slate-300">Fast recovery of capital investment, followed by over 20+ years of virtually free energy.</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link 
                href="/projects" 
                className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-bold text-sm transition-colors"
              >
                View Our 100+ Completed Projects <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8 }} 
            className="relative"
          >
            <div className="absolute inset-0 bg-amber-500 rounded-3xl translate-x-4 translate-y-4 opacity-40"></div>
            <img 
              src="/assets/images/commercial/commercial_2.jpeg" 
              alt="Completed solar installation by AMR Solar Solutions" 
              className="relative z-10 rounded-3xl w-full h-[480px] object-cover shadow-2xl" 
            />
          </motion.div>
        </div>
      </section>

      {/* About Section Summary with Both Service Hubs */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8 }} 
            className="space-y-6"
          >
            <span className="text-amber-600 font-bold uppercase tracking-widest text-xs">About AMR Solar Solutions</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
              Committed to Sustainable Solar Power Across India
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              With 100+ projects completed, 100+ installations, and 2+ years of hands-on engineering excellence, AMR Solar Solutions is helping households, businesses, and agricultural farms transition to clean renewable power.
            </p>

            <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-700">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <span>Head Office in <strong>Velgatoor, Jagtial</strong> serving India</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <span>Office in <strong>Narapally, Secunderabad</strong> covering Greater Hyderabad</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <span>MNRE-approved Tier-1 solar panels with 25-year performance warranties</span>
              </div>
            </div>

            <div className="pt-2">
              <Link 
                href="/about" 
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-white font-bold px-7 py-3.5 rounded-full text-sm transition-all"
              >
                Read More About Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
          
          <div className="space-y-6">
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
              <div className="text-amber-500 font-black text-3xl mb-2 opacity-30">01</div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">Our Mission</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                To empower homes, businesses, and agriculture with reliable, affordable solar energy while maximizing government subsidies and eliminating electricity bills.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
              <div className="text-amber-500 font-black text-3xl mb-2 opacity-30">02</div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">Our Vision</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                To be India's foremost renewable energy leader, celebrated for engineering reliability, transparent pricing, and customer-first support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-slate-50 py-24 overflow-hidden border-t border-slate-100">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16 px-6">
          <span className="text-amber-600 font-bold uppercase tracking-widest text-xs">Customer Satisfaction</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">What Our Clients Say</h2>
          <p className="text-slate-600 text-xs sm:text-sm">Real experiences from homeowners, commercial businesses, and farmers.</p>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              quote: "AMR Solar installed a 5 kW rooftop system for our home in Jagtial. Our electricity bill dropped from ₹4,500 to almost zero, and we received the ₹78,000 subsidy directly in our account without any hassle!", 
              name: "K. Ramesh", 
              role: "Residential Customer, Jagtial" 
            },
            { 
              quote: "We installed a 25 kW solar plant for our commercial office complex in Secunderabad. Excellent workmanship, smooth net metering sanction, and great savings on our monthly operating costs.", 
              name: "S. Venkatesh", 
              role: "Commercial Customer, Secunderabad" 
            },
            { 
              quote: "The 7.5 HP solar agricultural water pump from AMR Solar transformed my farm. Now I irrigate my 8-acre field during the daytime with zero diesel cost. Highly recommend their service!", 
              name: "M. Narsimha Reddy", 
              role: "Farmer, Velgatoor Mandal" 
            }
          ].map((testimonial, idx) => (
            <div 
              key={idx} 
              className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-100 border border-slate-100 flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-amber-300 mb-4" />
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed italic mb-6">"{testimonial.quote}"</p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 bg-amber-100 text-amber-800 rounded-full flex items-center justify-center font-bold text-sm">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{testimonial.name}</h4>
                  <p className="text-[11px] text-amber-600 font-semibold">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-24 bg-white overflow-hidden border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center space-y-3 mb-16">
            <span className="text-amber-600 font-bold uppercase tracking-widest text-xs">FAQs</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">Frequently Asked Questions</h2>
            <p className="text-slate-600 text-xs sm:text-sm">Clear answers about solar installations, subsidies, and net metering.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="border border-slate-200 rounded-2xl overflow-hidden"
              >
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)} 
                  className="w-full flex items-center justify-between p-6 bg-slate-50 hover:bg-slate-100 transition-colors text-left"
                >
                  <span className="font-bold text-slate-900 text-sm sm:text-base">{faq.q}</span>
                  {activeFaq === idx ? <Minus className="w-5 h-5 text-amber-500" /> : <Plus className="w-5 h-5 text-slate-400" />}
                </button>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }} 
                      animate={{ height: "auto", opacity: 1 }} 
                      exit={{ height: 0, opacity: 0 }} 
                      className="bg-white px-6 py-4 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Enquiry Section with Dynamic Form */}
      <section id="contact" className="bg-slate-900 text-white py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8 }} 
            className="lg:col-span-5 space-y-6"
          >
            <span className="text-amber-400 font-bold uppercase tracking-widest text-xs">Get In Touch</span>
            <h2 className="text-3xl sm:text-4xl font-black">Ready to Switch to Solar Energy?</h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Take the first step toward energy independence with AMR Solar Solutions. Our certified engineers will assess your property, design your system, and process your ₹78,000 government subsidy.
            </p>

            {/* Exact Addresses from User Request */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 p-4 bg-slate-800/80 rounded-2xl border border-slate-700">
                <MapPin className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-white block font-bold text-base mb-1">Head Office:</strong>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    1-2 Muthnoor, Velgatoor, Jagtial, India - 505526
                  </p>
                  <p className="text-xs text-amber-400 font-semibold mt-1">Direct Phone: +91 7569967711</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-slate-800/80 rounded-2xl border border-slate-700">
                <MapPin className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-white block font-bold text-base mb-1">Office 2:</strong>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Narapally, Secunderabad, India - 500088
                  </p>
                  <p className="text-xs text-amber-400 font-semibold mt-1">Direct Phone: +91 9347857711</p>
                </div>
              </div>

              <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700 space-y-2 text-xs sm:text-sm">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Call: <a href="tel:+917569967711" className="font-bold text-white hover:text-amber-400">+91 7569967711</a> &nbsp;|&nbsp; <a href="tel:+919347857711" className="font-bold text-white hover:text-amber-400">+91 9347857711</a></span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-amber-400" />
                  <span>Email: <a href="mailto:info@amrsolarsolutions.com" className="font-bold text-white hover:text-amber-400">info@amrsolarsolutions.com</a></span>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Dynamic Quote Form (Switches between Residential, Commercial, Agricultural) */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8 }} 
            className="lg:col-span-7"
          >
            <DynamicQuoteForm 
              defaultCategory="Residential Solar"
              title="Get a Free Solar Quote"
              subtitle="Select your category below for a customized quotation."
            />
          </motion.div>
        </div>
      </section>

    </div>
  );
}
