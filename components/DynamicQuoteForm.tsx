"use client";

import React, { useState } from "react";
import { Send, CheckCircle, MessageSquare, Phone, Sun, Building2, Tractor, ArrowRight } from "lucide-react";
import { useContactForm } from "@/lib/hooks/useContactForm";

export type SolarCategory = "Residential Solar" | "Commercial Solar" | "Agricultural Solar";

interface DynamicQuoteFormProps {
  defaultCategory?: SolarCategory;
  className?: string;
  title?: string;
  subtitle?: string;
}

export default function DynamicQuoteForm({
  defaultCategory = "Residential Solar",
  className = "",
  title = "Get a Free Solar Quote",
  subtitle = "Select your requirement below for a customized quotation."
}: DynamicQuoteFormProps) {
  const [category, setCategory] = useState<SolarCategory>(defaultCategory);
  
  // Common Fields
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [districtVillage, setDistrictVillage] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Agricultural specific fields (as in user screenshot)
  const [motorCapacity, setMotorCapacity] = useState("5 HP");
  const [installationRequirement, setInstallationRequirement] = useState("Convert existing electric borewell motor to solar");
  const [borewellDepth, setBorewellDepth] = useState("");

  // Commercial specific fields (as in user prompt)
  const [businessName, setBusinessName] = useState("");
  const [solarCapacity, setSolarCapacity] = useState("10 kW");
  const [commercialMonthlyBill, setCommercialMonthlyBill] = useState("");

  // Residential specific fields
  const [residentialKw, setResidentialKw] = useState("3 kW (360 units/mo - ₹78,000 Subsidy)");
  const [residentialMonthlyBill, setResidentialMonthlyBill] = useState("");

  const { loading, success, error, submitForm, reset } = useContactForm();

  // Commercial kW generation lookup
  const getCommercialGeneration = (cap: string) => {
    if (cap.startsWith("10 kW")) return "1,200 – 1,350 units / month";
    if (cap.startsWith("25 kW")) return "3,000 – 3,375 units / month";
    if (cap.startsWith("50 kW")) return "6,000 – 6,750 units / month";
    if (cap.startsWith("100 kW")) return "12,000 – 13,500 units / month";
    if (cap.startsWith("250 kW")) return "30,000 – 33,750 units / month";
    if (cap.startsWith("500 kW")) return "60,000 – 67,500 units / month";
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      firstName: fullName,
      phone,
      cityLocation: districtVillage,
      type: category,
      email,
      message,
      // Pass category specific data
      ...(category === "Agricultural Solar" && {
        motorCapacity,
        installationRequirement,
        borewellDepth,
      }),
      ...(category === "Commercial Solar" && {
        solarCapacity,
        businessName,
        monthlyBill: commercialMonthlyBill,
      }),
      ...(category === "Residential Solar" && {
        solarCapacity: residentialKw,
        monthlyBill: residentialMonthlyBill,
      }),
    };

    const isOk = await submitForm(payload);
    if (isOk) {
      const confirmationMsg = email.trim()
        ? `Thank you ${fullName}! Your ${category} enquiry has been sent to AMR Solar Solutions. A confirmation copy has also been sent to ${email.trim()}. Our team will contact you shortly.`
        : `Thank you ${fullName}! Your ${category} enquiry has been sent to AMR Solar Solutions. Our team will contact you shortly.`;
      alert(confirmationMsg);
      // Reset form
      setFullName("");
      setPhone("");
      setDistrictVillage("");
      setEmail("");
      setMessage("");
      setBorewellDepth("");
      setBusinessName("");
      setCommercialMonthlyBill("");
      setResidentialMonthlyBill("");
    }
  };

  // WhatsApp formatted string generator
  const getWhatsAppLink = () => {
    let text = `Hello AMR Solar, I would like an enquiry for ${category}.\n`;
    text += `*Name:* ${fullName || 'Not specified'}\n`;
    text += `*Phone:* ${phone || 'Not specified'}\n`;
    text += `*Location:* ${districtVillage || 'Not specified'}\n`;

    if (category === "Agricultural Solar") {
      text += `*Motor Capacity:* ${motorCapacity}\n`;
      text += `*Requirement:* ${installationRequirement}\n`;
      if (borewellDepth) text += `*Borewell Depth:* ${borewellDepth} ft\n`;
    } else if (category === "Commercial Solar") {
      if (businessName) text += `*Business:* ${businessName}\n`;
      text += `*Solar Capacity:* ${solarCapacity}\n`;
      if (commercialMonthlyBill) text += `*Monthly Bill:* ${commercialMonthlyBill}\n`;
    } else {
      text += `*Capacity/Subsidy:* ${residentialKw}\n`;
      if (residentialMonthlyBill) text += `*Monthly Bill:* ${residentialMonthlyBill}\n`;
    }

    if (message) text += `*Note:* ${message}\n`;

    return `https://wa.me/917569967711?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className={`bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 text-slate-800 ${className}`}>
      
      {/* Form Header */}
      <div className="mb-6">
        <h3 className="text-2xl font-black text-slate-900 tracking-tight">{title}</h3>
        {subtitle && <p className="text-xs sm:text-sm text-slate-500 mt-1">{subtitle}</p>}
      </div>

      {/* Dynamic Type Selector Dropdown / Pills */}
      <div className="mb-6 space-y-2">
        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
          Select Solar Category *
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          <button
            type="button"
            onClick={() => setCategory("Residential Solar")}
            className={`p-3 rounded-xl border text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
              category === "Residential Solar"
                ? "bg-amber-500 text-slate-950 border-amber-500 shadow-md"
                : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
            }`}
          >
            <Sun className="w-4 h-4" /> Residential
          </button>

          <button
            type="button"
            onClick={() => setCategory("Commercial Solar")}
            className={`p-3 rounded-xl border text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
              category === "Commercial Solar"
                ? "bg-blue-600 text-white border-blue-600 shadow-md"
                : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
            }`}
          >
            <Building2 className="w-4 h-4" /> Commercial
          </button>

          <button
            type="button"
            onClick={() => setCategory("Agricultural Solar")}
            className={`p-3 rounded-xl border text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
              category === "Agricultural Solar"
                ? "bg-emerald-600 text-white border-emerald-600 shadow-md"
                : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
            }`}
          >
            <Tractor className="w-4 h-4" /> Agricultural
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">

        {/* ============================================================ */}
        {/* AGRICULTURAL SOLAR FIELDS (Matches user's exact uploaded UI) */}
        {/* ============================================================ */}
        {category === "Agricultural Solar" && (
          <div className="space-y-4">
            
            {/* Farmer / Customer name */}
            <div>
              <label className="block text-slate-700 font-bold mb-1">
                Farmer / Customer name *
              </label>
              <input
                type="text"
                placeholder="Full name"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl focus:outline-none focus:border-emerald-500"
              />
            </div>

            {/* Mobile number */}
            <div>
              <label className="block text-slate-700 font-bold mb-1">
                Mobile number *
              </label>
              <input
                type="tel"
                placeholder="10-digit mobile number"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, ''))}
                className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="block text-slate-700 font-bold mb-1">
                City / Village
              </label>
              <input
                type="text"
                placeholder="e.g. Peddapalli, India"
                required
                value={districtVillage}
                onChange={(e) => setDistrictVillage(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl focus:outline-none focus:border-emerald-500"
              />
            </div>

            {/* Motor capacity Radio Group */}
            <div>
              <label className="block text-slate-700 font-bold mb-2">
                Motor capacity *
              </label>
              <div className="space-y-2">
                {[
                  "3 HP",
                  "5 HP",
                  "7.5 HP",
                  "10 HP or above",
                  "Not sure"
                ].map((cap) => (
                  <label
                    key={cap}
                    className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-colors ${
                      motorCapacity === cap
                        ? "bg-emerald-50 border-emerald-500 text-emerald-950 font-semibold"
                        : "bg-slate-50/70 border-slate-200 text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    <input
                      type="radio"
                      name="motorCapacity"
                      value={cap}
                      checked={motorCapacity === cap}
                      onChange={(e) => setMotorCapacity(e.target.value)}
                      className="w-4 h-4 text-emerald-600 focus:ring-emerald-500 accent-emerald-600 cursor-pointer"
                    />
                    <span>{cap}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Installation requirement Radio Group */}
            <div>
              <label className="block text-slate-700 font-bold mb-2">
                Installation requirement *
              </label>
              <div className="space-y-2">
                {[
                  "Convert existing electric borewell motor to solar",
                  "Install a new solar water pump",
                  "Replace a diesel pump"
                ].map((req) => (
                  <label
                    key={req}
                    className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-colors ${
                      installationRequirement === req
                        ? "bg-emerald-50 border-emerald-500 text-emerald-950 font-semibold"
                        : "bg-slate-50/70 border-slate-200 text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    <input
                      type="radio"
                      name="installationRequirement"
                      value={req}
                      checked={installationRequirement === req}
                      onChange={(e) => setInstallationRequirement(e.target.value)}
                      className="w-4 h-4 text-emerald-600 focus:ring-emerald-500 accent-emerald-600 cursor-pointer"
                    />
                    <span>{req}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Borewell depth (feet, optional) */}
            <div>
              <label className="block text-slate-700 font-bold mb-1">
                Borewell depth (feet, optional)
              </label>
              <input
                type="text"
                placeholder="e.g. 300"
                value={borewellDepth}
                onChange={(e) => setBorewellDepth(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl focus:outline-none focus:border-emerald-500"
              />
            </div>

            {/* Optional Email */}
            <div>
              <label className="block text-slate-700 font-semibold mb-1">
                Email Address (Optional)
              </label>
              <input
                type="email"
                placeholder="your.email@example.com (optional)"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl focus:outline-none focus:border-emerald-500"
              />
            </div>

          </div>
        )}

        {/* ============================================================ */}
        {/* COMMERCIAL SOLAR FIELDS (Includes all user requested kW options) */}
        {/* ============================================================ */}
        {category === "Commercial Solar" && (
          <div className="space-y-4">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-700 font-bold mb-1">
                  Contact Person Name *
                </label>
                <input
                  type="text"
                  placeholder="Full name"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1">
                  Business / Company Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Retail Store, Office, Factory"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-700 font-bold mb-1">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  placeholder="10-digit mobile number"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, ''))}
                  className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1">
                  City / Village
                </label>
                <input
                  type="text"
                  placeholder="e.g. Secunderabad, Hyderabad, Jagtial"
                  required
                  value={districtVillage}
                  onChange={(e) => setDistrictVillage(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            {/* Commercial Solar Capacity Dropdown (All exact options from user prompt) */}
            <div>
              <label className="block text-slate-700 font-bold mb-1">
                Commercial Solar Capacity & Application *
              </label>
              <select
                value={solarCapacity}
                onChange={(e) => setSolarCapacity(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl focus:outline-none focus:border-blue-500 font-medium"
              >
                <option value="5 kW (Small shops, offices, clinics)">5 kW — Small shops, offices, clinics</option>
                <option value="10 kW (Retail stores, small restaurants, offices)">10 kW — Retail stores, small restaurants, offices</option>
                <option value="15 kW (Showrooms, restaurants, small commercial buildings)">15 kW — Showrooms, restaurants, small commercial buildings</option>
                <option value="20 kW (Offices, supermarkets, small hotels)">20 kW — Offices, supermarkets, small hotels</option>
                <option value="25 kW (Schools, hospitals, medium businesses)">25 kW — Schools, hospitals, medium businesses</option>
                <option value="30 kW (Commercial complexes, warehouses)">30 kW — Commercial complexes, warehouses</option>
                <option value="50 kW (Hotels, schools, factories, warehouses)">50 kW — Hotels, schools, factories, warehouses</option>
                <option value="75 kW (Medium industries, large commercial buildings)">75 kW — Medium industries, large commercial buildings</option>
                <option value="100 kW (Factories, hospitals, large warehouses)">100 kW — Factories, hospitals, large warehouses</option>
                <option value="150 kW (Manufacturing units, industrial facilities)">150 kW — Manufacturing units, industrial facilities</option>
                <option value="200 kW (Large factories, industrial buildings)">200 kW — Large factories, industrial buildings</option>
                <option value="250 kW (Industrial facilities, large warehouses)">250 kW — Industrial facilities, large warehouses</option>
                <option value="500 kW (Large industrial and commercial projects)">500 kW — Large industrial and commercial projects</option>
                <option value="1 MW+ (Custom industrial and utility-scale projects)">1 MW+ — Custom industrial and utility-scale projects</option>
                <option value="Need Energy Audit / Not Sure">Need Energy Audit / Unsure of Capacity</option>
              </select>

              {getCommercialGeneration(solarCapacity) && (
                <div className="mt-2 p-2.5 bg-blue-50 border border-blue-200 rounded-lg text-xs text-blue-900 font-semibold flex items-center justify-between">
                  <span>Estimated Monthly Generation:</span>
                  <span className="font-bold text-blue-700">{getCommercialGeneration(solarCapacity)}</span>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-700 font-semibold mb-1">
                  Monthly Power Bill or Sanctioned Load
                </label>
                <input
                  type="text"
                  placeholder="e.g. ₹45,000 / month or 30 kW"
                  value={commercialMonthlyBill}
                  onChange={(e) => setCommercialMonthlyBill(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="corporate.email@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

          </div>
        )}

        {/* ============================================================ */}
        {/* RESIDENTIAL SOLAR FIELDS */}
        {/* ============================================================ */}
        {category === "Residential Solar" && (
          <div className="space-y-4">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-700 font-bold mb-1">
                  Homeowner Name *
                </label>
                <input
                  type="text"
                  placeholder="Full name"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  placeholder="10-digit mobile number"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, ''))}
                  className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-700 font-bold mb-1">
                  City / Village
                </label>
                <input
                  type="text"
                  placeholder="e.g. Jagtial, Secunderabad, Karimnagar"
                  required
                  value={districtVillage}
                  onChange={(e) => setDistrictVillage(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>

            {/* Residential Rooftop Capacity */}
            <div>
              <label className="block text-slate-700 font-bold mb-1">
                Select System Capacity & Subsidy *
              </label>
              <select
                value={residentialKw}
                onChange={(e) => setResidentialKw(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl focus:outline-none focus:border-amber-500 font-medium"
              >
                <option value="1 kW (120 units/mo - ₹30,000 Subsidy)">1 kW (120 units/mo - ₹30,000 Govt Subsidy)</option>
                <option value="2 kW (240 units/mo - ₹60,000 Subsidy)">2 kW (240 units/mo - ₹60,000 Govt Subsidy)</option>
                <option value="3 kW (360 units/mo - ₹78,000 Subsidy)">3 kW (360 units/mo - ₹78,000 Max Subsidy - Most Popular)</option>
                <option value="5 kW (600 units/mo - ₹78,000 Subsidy)">5 kW (600 units/mo - Large Home / 2-3 ACs)</option>
                <option value="10 kW (1,200 units/mo - ₹78,000 Subsidy)">10 kW (1,200 units/mo - Luxury Villa / Duplex)</option>
                <option value="Not sure / Need rooftop survey">Not sure / Need rooftop survey</option>
              </select>
            </div>

            <div>
              <label className="block text-slate-700 font-semibold mb-1">
                Average Monthly Electricity Bill
              </label>
              <input
                type="text"
                placeholder="e.g. ₹2,500 / month"
                value={residentialMonthlyBill}
                onChange={(e) => setResidentialMonthlyBill(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl focus:outline-none focus:border-amber-500"
              />
            </div>

          </div>
        )}

        {/* Message / Remarks */}
        <div>
          <label className="block text-slate-700 font-semibold mb-1">
            Additional Notes / Questions (Optional)
          </label>
          <textarea
            rows={2}
            placeholder="Any specific questions, roof type, or timings..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-xl focus:outline-none focus:border-amber-500 resize-none"
          />
        </div>

        {/* Form Action Buttons */}
        <div className="pt-2 space-y-3">
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-4 rounded-xl text-white font-bold transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 text-sm sm:text-base ${
              category === "Agricultural Solar"
                ? "bg-slate-900 hover:bg-emerald-600"
                : category === "Commercial Solar"
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold"
            }`}
          >
            <Send className="w-4 h-4" />
            {loading ? "Submitting Enquiry..." : "Send Enquiry to AMR Solar"}
          </button>

          {/* Quick WhatsApp Alternative (as shown in user demonstration) */}
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 rounded-xl border border-emerald-500/30 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold transition-colors flex items-center justify-center gap-2 text-xs sm:text-sm"
          >
            <MessageSquare className="w-4 h-4 text-emerald-600" />
            Or Send Instantly via WhatsApp (+91 7569967711)
          </a>
        </div>

        {error && <p className="text-red-500 text-xs text-center font-medium">{error}</p>}
        {success && (
          <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-center text-xs font-bold flex items-center justify-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <span>Enquiry submitted successfully! Our team will contact you shortly.</span>
          </div>
        )}

      </form>
    </div>
  );
}

