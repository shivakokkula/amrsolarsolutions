"use client";

import { motion } from "framer-motion";
import { ArrowRight, BatteryCharging, Building2, CheckCircle, House, Leaf, SunMedium } from "lucide-react";

const projects = [
  {
    title: "Residential Rooftop Solar",
    location: "Hyderabad",
    capacity: "5 kW",
    description: "A premium rooftop installation that reduced the homeowner's monthly power bill by nearly 70% while improving energy independence.",
    icon: House,
  },
  {
    title: "Commercial Solar Array",
    location: "Warangal",
    capacity: "22 kW",
    description: "A smart commercial installation designed to lower operating costs, maximize daylight generation, and support sustainability goals.",
    icon: Building2,
  },
  {
    title: "Hybrid Backup System",
    location: "Peddapalli",
    capacity: "8 kW",
    description: "Battery-backed system with optimized solar usage for uninterrupted power and stronger resilience during grid outages.",
    icon: BatteryCharging,
  },
];

const highlights = [
  "End-to-end site assessment and design",
  "MNRE-approved equipment and premium installation quality",
  "Net metering and subsidy support guidance",
  "Reliable maintenance and performance monitoring",
];

export default function ProjectsPage() {
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
    <div className="bg-slate-50 text-slate-800 overflow-hidden">
      <section className="relative bg-slate-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=1600&q=80"
            alt="Solar project installation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-900/40" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 px-4 py-2 rounded-full text-sm font-semibold">
              <SunMedium className="w-4 h-4" /> Project Portfolio
            </span>
            <h1 className="mt-6 text-4xl sm:text-6xl font-black tracking-tight leading-tight">
              Solar systems built for <span className="text-amber-400">real savings</span>
            </h1>
            <p className="mt-6 text-lg text-slate-300 max-w-2xl">
              From rooftops to commercial facilities, AMR Solar delivers efficient and future-ready solar installations that lower power bills and support cleaner energy adoption.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-slate-200 rounded-3xl p-8 shadow-lg shadow-slate-100 hover:-translate-y-1 transition-all"
              >
                <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7" />
                </div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-600">{project.location}</p>
                <h2 className="mt-4 text-2xl font-black text-slate-900">{project.title}</h2>
                <div className="mt-4 inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">
                  Capacity: {project.capacity}
                </div>
                <p className="mt-6 text-slate-600 leading-relaxed">{project.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="bg-white border-t border-slate-200 py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-amber-600 font-bold uppercase tracking-widest text-sm">Why clients choose us</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
              Thoughtful execution from design to final commissioning.
            </h2>
            <div className="mt-8 space-y-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-700 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-2xl">
            <div className="flex items-center gap-3 text-amber-400 font-bold uppercase tracking-widest text-xs">
              <Leaf className="w-4 h-4" /> Sustainable impact
            </div>
            <div className="mt-8 grid grid-cols-2 gap-6 text-center">
              <div className="bg-slate-800/80 rounded-2xl p-6">
                <div className="text-4xl font-black text-white">50%</div>
                <div className="mt-2 text-sm text-slate-300">Lower bills</div>
              </div>
              <div className="bg-slate-800/80 rounded-2xl p-6">
                <div className="text-4xl font-black text-white">25Y</div>
                <div className="mt-2 text-sm text-slate-300">Performance life</div>
              </div>
              <div className="bg-slate-800/80 rounded-2xl p-6 col-span-2">
                <div className="text-4xl font-black text-white">₹78K</div>
                <div className="mt-2 text-sm text-slate-300">Max government subsidy support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-amber-500 text-slate-950 py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-slate-800/75">Ready to start</p>
            <h3 className="mt-2 text-3xl font-black">Plan your solar project with AMR Solar</h3>
          </div>
          <a
            href="/#contact"
            onClick={scrollToContact}
            className="inline-flex items-center gap-3 bg-slate-950 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-slate-900/20 transition-all hover:bg-slate-800"
          >
            Get Free Quote <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
