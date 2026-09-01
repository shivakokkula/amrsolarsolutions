"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sun, Phone, Mail, Menu, X, ArrowRight } from "lucide-react";

const scrollToContact = (event?: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
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

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-slate-900 text-slate-300 text-xs sm:text-sm py-2 px-4 sm:px-12 flex flex-col sm:flex-row justify-between items-center gap-2 border-b border-slate-800">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-amber-400" /> +91 7995567711
          </span>
          <span className="hidden md:flex items-center gap-2">
            <Mail className="w-4 h-4 text-amber-400" /> rudra.bairam@zohomail.in
          </span>
        </div>
        <div className="text-amber-400 font-medium">
          Unlock Government Subsidies up to ₹78,000! ☀️
        </div>
      </div>

      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 cursor-pointer">
            <div className="bg-gradient-to-tr from-amber-500 to-amber-300 p-2.5 rounded-xl shadow-md text-slate-900">
              <Sun className="w-6 h-6 animate-spin-slow" />
            </div>
            <div>
              <span className="text-xl font-black tracking-tight text-slate-900">AMR</span>
              <span className="text-xl font-bold text-amber-500 ml-1">SOLAR</span>
              <p className="text-[10px] tracking-widest font-semibold text-slate-500 uppercase">Renewable Energy Solutions</p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8 font-medium text-slate-600">
            <Link href="/" className="hover:text-amber-500 transition-colors">Home</Link>
            <Link href="/#solutions" className="hover:text-amber-500 transition-colors">Solutions</Link>
            <Link href="/projects" className="hover:text-amber-500 transition-colors">Projects</Link>
            <Link href="/subsidy" className="hover:text-amber-500 transition-colors">Subsidy</Link>
            <Link className="hover:text-amber-500 transition-colors" href="/about">About Us</Link>
          </nav>

          <div className="hidden lg:block">
            <Link href="/#contact" onClick={scrollToContact} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg shadow-blue-600/20 transition-all duration-300 flex items-center gap-2 group">
              Get Free Quote 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 text-slate-700 focus:outline-none">
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="lg:hidden absolute w-full bg-white border-b border-slate-200 px-6 py-6 space-y-4 shadow-xl">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block font-medium text-slate-600">Home</Link>
            <Link href="/projects" onClick={() => setMobileMenuOpen(false)} className="block font-medium text-slate-600">Projects</Link>
            <Link href="/subsidy" onClick={() => setMobileMenuOpen(false)} className="block font-medium text-slate-600">Subsidy</Link>
            <Link href="/#contact" onClick={(event) => { setMobileMenuOpen(false); scrollToContact(event); }} className="block text-center bg-blue-600 text-white font-semibold py-3 rounded-xl">Get Free Quote</Link>
          </motion.div>
        )}
      </header>
    </>
  );
}