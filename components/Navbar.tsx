"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sun, Phone, Mail, Menu, X, ArrowRight, 
  ChevronDown, Home, Users, Zap, Building2, 
  Tractor, Briefcase, IndianRupee 
} from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(true);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Top Announcement & Quick Contact Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <span className="flex items-center gap-2 font-medium">
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <a href="tel:+917569967711" className="hover:text-amber-400 transition-colors">+91 7569967711</a>
              <span className="text-slate-600">/</span>
              <a href="tel:+919347857711" className="hover:text-amber-400 transition-colors">+91 9347857711</a>
            </span>
            <span className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <a href="mailto:info@amrsolarsolutions.com" className="hover:text-amber-400 transition-colors">info@amrsolarsolutions.com</a>
            </span>
          </div>
          <div className="text-amber-400 font-semibold flex items-center gap-1.5 text-center">
            <span>☀️ PM Surya Ghar Muft Bijli Yojana: Direct Govt Subsidy up to ₹78,000!</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0 cursor-pointer group">
            <img 
              src="/assets/amr_logo.jpeg" 
              alt="AMR Solar Solutions" 
              className="h-12 sm:h-14 w-auto object-contain rounded-xl shadow-sm border border-slate-100 group-hover:scale-105 transition-transform" 
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-2 xl:gap-3 font-semibold text-slate-700 text-sm">
            <Link 
              href="/" 
              className={`px-3.5 py-2 rounded-xl transition-colors whitespace-nowrap ${
                isActive("/") ? "text-amber-600 bg-amber-50 font-bold" : "hover:text-amber-600 hover:bg-slate-50"
              }`}
            >
              Home
            </Link>

            <Link 
              href="/about" 
              className={`px-3.5 py-2 rounded-xl transition-colors whitespace-nowrap ${
                isActive("/about") ? "text-amber-600 bg-amber-50 font-bold" : "hover:text-amber-600 hover:bg-slate-50"
              }`}
            >
              About Us
            </Link>

            {/* Solar Solutions Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <button 
                type="button"
                onClick={() => setServicesDropdown(!servicesDropdown)}
                className={`px-3.5 py-2 rounded-xl transition-colors whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
                  pathname.includes("solar") ? "text-amber-600 bg-amber-50 font-bold" : "hover:text-amber-600 hover:bg-slate-50"
                }`}
              >
                <span>Solar Solutions</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdown ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {servicesDropdown && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 top-full pt-2 w-72 z-50"
                  >
                    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-2.5 space-y-1">
                      <Link 
                        href="/residential-solar" 
                        onClick={() => setServicesDropdown(false)}
                        className={`flex items-center gap-3 p-3 rounded-xl transition-colors ${
                          isActive("/residential-solar") ? "bg-amber-50 text-amber-600 font-bold" : "hover:bg-slate-50 text-slate-700 hover:text-amber-600"
                        }`}
                      >
                        <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0">
                          <Zap className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-bold text-xs text-slate-900">Residential Solar</div>
                          <div className="text-[11px] text-slate-500 font-normal">Rooftops & Net Metering</div>
                        </div>
                      </Link>

                      <Link 
                        href="/commercial-solar" 
                        onClick={() => setServicesDropdown(false)}
                        className={`flex items-center gap-3 p-3 rounded-xl transition-colors ${
                          isActive("/commercial-solar") ? "bg-blue-50 text-blue-600 font-bold" : "hover:bg-slate-50 text-slate-700 hover:text-blue-600"
                        }`}
                      >
                        <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                          <Building2 className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-bold text-xs text-slate-900">Commercial Solar</div>
                          <div className="text-[11px] text-slate-500 font-normal">Shops, Offices & Plants</div>
                        </div>
                      </Link>

                      <Link 
                        href="/agricultural-solar" 
                        onClick={() => setServicesDropdown(false)}
                        className={`flex items-center gap-3 p-3 rounded-xl transition-colors ${
                          isActive("/agricultural-solar") ? "bg-emerald-50 text-emerald-600 font-bold" : "hover:bg-slate-50 text-slate-700 hover:text-emerald-600"
                        }`}
                      >
                        <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                          <Tractor className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-bold text-xs text-slate-900">Agricultural Solar</div>
                          <div className="text-[11px] text-slate-500 font-normal">Pumps, Motors & Irrigation</div>
                        </div>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link 
              href="/projects" 
              className={`px-3.5 py-2 rounded-xl transition-colors whitespace-nowrap ${
                isActive("/projects") ? "text-amber-600 bg-amber-50 font-bold" : "hover:text-amber-600 hover:bg-slate-50"
              }`}
            >
              Our Projects
            </Link>

            <Link 
              href="/subsidy" 
              className={`px-3.5 py-2 rounded-xl transition-colors whitespace-nowrap ${
                isActive("/subsidy") ? "text-amber-600 bg-amber-50 font-bold" : "hover:text-amber-600 hover:bg-slate-50"
              }`}
            >
              Subsidies & Finance
            </Link>

            <Link 
              href="/contact" 
              className={`px-3.5 py-2 rounded-xl transition-colors whitespace-nowrap ${
                isActive("/contact") ? "text-amber-600 bg-amber-50 font-bold" : "hover:text-amber-600 hover:bg-slate-50"
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link 
              href="/contact" 
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full shadow-md shadow-amber-500/20 transition-all flex items-center gap-2 group whitespace-nowrap"
            >
              Get quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            aria-label="Toggle Navigation Menu"
            className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-7 h-7 text-slate-900" /> : <Menu className="w-7 h-7 text-slate-900" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }} 
              animate={{ opacity: 1, height: "auto" }} 
              exit={{ opacity: 0, height: 0 }} 
              className="lg:hidden border-b border-slate-200 bg-white overflow-hidden shadow-2xl"
            >
              <div className="px-6 py-5 space-y-2 max-h-[80vh] overflow-y-auto">
                <div className="pb-3 border-b border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Navigation Menu</span>
                  <span className="text-xs font-semibold text-amber-600">AMR Solar</span>
                </div>

                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between p-3 rounded-xl text-sm font-semibold transition-all ${
                    isActive("/") ? "bg-amber-500 text-slate-950 shadow-sm" : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Home className={`w-5 h-5 ${isActive("/") ? "text-slate-950" : "text-amber-500"}`} />
                    <span>Home</span>
                  </div>
                  <ArrowRight className="w-4 h-4 opacity-50" />
                </Link>

                <Link
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between p-3 rounded-xl text-sm font-semibold transition-all ${
                    isActive("/about") ? "bg-amber-500 text-slate-950 shadow-sm" : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Users className={`w-5 h-5 ${isActive("/about") ? "text-slate-950" : "text-amber-500"}`} />
                    <span>About Us</span>
                  </div>
                  <ArrowRight className="w-4 h-4 opacity-50" />
                </Link>

                {/* Mobile Solar Solutions Dropdown */}
                <div className="pt-1">
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="w-full flex items-center justify-between p-3 rounded-xl text-sm font-bold text-slate-800 bg-slate-50 hover:bg-slate-100 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <Sun className="w-4 h-4 text-amber-500" />
                      Solar Solutions
                    </span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                  </button>

                  {mobileServicesOpen && (
                    <div className="pl-4 pr-1 py-2 space-y-1">
                      <Link
                        href="/residential-solar"
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center gap-2.5 p-2.5 rounded-lg text-xs font-semibold ${
                          isActive("/residential-solar") ? "text-amber-600 bg-amber-50 font-bold" : "text-slate-600 hover:text-amber-600"
                        }`}
                      >
                        <Zap className="w-4 h-4 text-amber-500" />
                        <span>Residential Solar (Rooftops & Subsidy)</span>
                      </Link>

                      <Link
                        href="/commercial-solar"
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center gap-2.5 p-2.5 rounded-lg text-xs font-semibold ${
                          isActive("/commercial-solar") ? "text-blue-600 bg-blue-50 font-bold" : "text-slate-600 hover:text-blue-600"
                        }`}
                      >
                        <Building2 className="w-4 h-4 text-blue-500" />
                        <span>Commercial Solar (Shops & Offices)</span>
                      </Link>

                      <Link
                        href="/agricultural-solar"
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center gap-2.5 p-2.5 rounded-lg text-xs font-semibold ${
                          isActive("/agricultural-solar") ? "text-emerald-600 bg-emerald-50 font-bold" : "text-slate-600 hover:text-emerald-600"
                        }`}
                      >
                        <Tractor className="w-4 h-4 text-emerald-500" />
                        <span>Agricultural Solar (Pumps & Motors)</span>
                      </Link>
                    </div>
                  )}
                </div>

                <Link
                  href="/projects"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between p-3 rounded-xl text-sm font-semibold transition-all ${
                    isActive("/projects") ? "bg-amber-500 text-slate-950 shadow-sm" : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Briefcase className={`w-5 h-5 ${isActive("/projects") ? "text-slate-950" : "text-amber-500"}`} />
                    <span>Our Projects</span>
                  </div>
                  <ArrowRight className="w-4 h-4 opacity-50" />
                </Link>

                <Link
                  href="/subsidy"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between p-3 rounded-xl text-sm font-semibold transition-all ${
                    isActive("/subsidy") ? "bg-amber-500 text-slate-950 shadow-sm" : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <IndianRupee className={`w-5 h-5 ${isActive("/subsidy") ? "text-slate-950" : "text-amber-500"}`} />
                    <span>Subsidies & Finance</span>
                  </div>
                  <ArrowRight className="w-4 h-4 opacity-50" />
                </Link>

                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between p-3 rounded-xl text-sm font-semibold transition-all ${
                    isActive("/contact") ? "bg-amber-500 text-slate-950 shadow-sm" : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Phone className={`w-5 h-5 ${isActive("/contact") ? "text-slate-950" : "text-amber-500"}`} />
                    <span>Contact Us</span>
                  </div>
                  <ArrowRight className="w-4 h-4 opacity-50" />
                </Link>

                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <div className="bg-slate-50 p-3.5 rounded-xl text-xs space-y-1.5 text-slate-600">
                    <p className="font-bold text-slate-900">Direct Contact Numbers:</p>
                    <div className="flex flex-col gap-1 text-slate-700">
                      <a href="tel:+917569967711" className="flex items-center gap-2 hover:text-amber-600">
                        <Phone className="w-3.5 h-3.5 text-amber-500" /> +91 7569967711
                      </a>
                      <a href="tel:+919347857711" className="flex items-center gap-2 hover:text-amber-600">
                        <Phone className="w-3.5 h-3.5 text-amber-500" /> +91 9347857711
                      </a>
                    </div>
                  </div>

                  <Link 
                    href="/contact" 
                    onClick={() => setMobileMenuOpen(false)} 
                    className="block text-center bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3.5 rounded-xl shadow-md"
                  >
                    Get quote & Site Survey
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
