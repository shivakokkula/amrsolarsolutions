"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Sun, ShieldCheck, Users, Award, ArrowRight, 
  Quote, CheckCircle, Target, Lightbulb
} from "lucide-react";

export default function AboutPage() {
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
          <img 
            src="https://images.unsplash.com/photo-1592833159155-c62df1b65634?w=1600&q=80" 
            alt="Solar Panels Installation" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-900/40"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 px-4 py-2 rounded-full text-sm font-semibold">
              <Sun className="w-4 h-4" /> About AMR Solar
            </motion.div>
            
            <motion.h1 initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
              Building a <span className="text-amber-400">Brighter Future</span> with Clean Solar Energy
            </motion.h1>
            
            <motion.p initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="text-lg text-slate-300">
              We are committed to empowering homes and businesses with sustainable, cost-effective, and highly efficient renewable energy solutions.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main About Content */}
      <section className="py-24 max-w-7xl mx-auto px-6 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <motion.span initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-amber-600 font-bold uppercase tracking-widest text-sm">
              Our Story
            </motion.span>
            
            <motion.h2 initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
              Powering a Sustainable Future Through Solar Innovation
            </motion.h2>
            
            <motion.p initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="text-lg text-slate-600 leading-relaxed">
              At <strong className="text-slate-900">AMR Solar Renewable Energy Solutions</strong>, we provide reliable and cost-effective solar energy systems for homes, businesses, and industries. 
            </motion.p>
            
            <motion.p initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="text-lg text-slate-600 leading-relaxed">
              Our expert team helps customers reduce electricity bills, access government subsidies, and embrace a cleaner, more sustainable future through high-quality, MNRE-approved solar installations.
            </motion.p>

            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} className="pt-6">
              <a href="/#contact" onClick={scrollToContact} className="inline-flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-8 py-4 rounded-full shadow-lg shadow-amber-500/20 transition-all group">
                Get Started With Us <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-100 border border-slate-100 space-y-4">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">Empower communities with reliable, affordable solar energy while reducing overall electricity costs.</p>
            </div>
            <div className="bg-slate-900 p-8 rounded-3xl shadow-xl space-y-4 text-white sm:translate-y-8">
              <div className="w-14 h-14 bg-slate-800 text-amber-400 rounded-2xl flex items-center justify-center border border-slate-700">
                <Lightbulb className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold">Our Vision</h3>
              <p className="text-slate-400 leading-relaxed">Drive the adoption of solar power through innovation to create a sustainable future for generations.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact / Stats Section */}
      <section className="bg-amber-500 text-slate-950 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-black">The Impact We Create for Our Clients</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { num: "5+", label: "Years of Experience", icon: <Award className="w-8 h-8 mx-auto mb-4 opacity-80" /> },
              { num: "350+", label: "Successful Installations", icon: <Sun className="w-8 h-8 mx-auto mb-4 opacity-80" /> },
              { num: "99%", label: "Customer Satisfaction", icon: <Users className="w-8 h-8 mx-auto mb-4 opacity-80" /> }
            ].map((stat, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, x: -50 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.5, delay: idx * 0.15 }} 
                className="bg-amber-400/30 border border-amber-400/50 p-8 rounded-3xl"
              >
                {stat.icon}
                <h3 className="text-5xl lg:text-6xl font-black mb-2">{stat.num}</h3>
                <p className="font-bold text-slate-900/80 text-lg uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white overflow-hidden">
        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center max-w-2xl mx-auto space-y-4 mb-16 px-6">
          <span className="text-amber-600 font-bold uppercase tracking-widest text-sm">What Our Clients Say</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">Real Experiences, Real Energy Savings</h2>
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              quote: "AMR Solar helped us switch to clean energy without any hassle. Their expertise and customer support were outstanding throughout the project.", 
              name: "Priya Sharma", 
              role: "Homeowner" 
            },
            { 
              quote: "The entire process was smooth and professional. The AMR Solar team handled everything from installation to subsidy support. Our electricity bills have reduced significantly, and we're extremely satisfied with the results.", 
              name: "Ramesh Kumar", 
              role: "Residential Solar Customer" 
            },
            { 
              quote: "Excellent service and quality workmanship. The installation was completed on time, and the team guided us through the net metering process. A great investment for our business.", 
              name: "Venkatesh Reddy", 
              role: "Commercial Solar Customer" 
            }
          ].map((testimonial, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, x: -50 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.5, delay: idx * 0.15 }} 
              className="bg-slate-50 p-8 rounded-3xl shadow-xl shadow-slate-100 border border-slate-100 flex flex-col justify-between"
            >
              <div>
                <Quote className="w-10 h-10 text-amber-300 mb-6" />
                <p className="text-slate-600 leading-relaxed italic mb-8">"{testimonial.quote}"</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center font-bold text-amber-700">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                  <p className="text-xs text-amber-600 font-bold uppercase tracking-wider">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Quality Assurance Banner */}
      <section className="border-t border-slate-200 bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-between gap-8 bg-slate-900 text-white p-10 rounded-3xl"
          >
            <div className="flex items-center gap-6">
              <ShieldCheck className="w-16 h-16 text-amber-400 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold mb-2">Premium Installation Quality</h3>
                <p className="text-slate-300">Certified engineers using premium-quality, MNRE-approved equipment for every project.</p>
              </div>
            </div>
            <a href="/#contact" onClick={scrollToContact} className="whitespace-nowrap bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-8 py-4 rounded-xl transition-colors">
              Request Site Visit
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  );
}