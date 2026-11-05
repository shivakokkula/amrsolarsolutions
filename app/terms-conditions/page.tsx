import { CheckCircle, ShieldAlert, Scale, Handshake } from "lucide-react";

const items = [
  {
    icon: CheckCircle,
    title: "Service Scope",
    text: "AMR Solar offers consultation, design, supply, installation, maintenance, and subsidy-related guidance for solar energy systems. Please note that final project scope depends on site conditions, system requirements, and applicable government norms.",
  },
  {
    icon: Scale,
    title: "Pricing and Approval",
    text: "Prices, estimates, and subsidy benefits are indicative and may vary based on project size, location, equipment selection, and current regulatory approvals or documentation requirements.",
  },
  {
    icon: ShieldAlert,
    title: "Customer Responsibilities",
    text: "Customers are expected to provide access to the site, necessary permissions, timely documentation, and cooperation during installation, inspections, or net metering processes.",
  },
  {
    icon: Handshake,
    title: "Limitation of Liability",
    text: "AMR Solar strives to provide dependable services, but we are not liable for indirect, incidental, or consequential losses arising from delays, force majeure events, or third-party dependencies beyond our control.",
  },
];

export default function TermsConditionsPage() {
  return (
    <div className="bg-slate-50 text-slate-800">
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-400">Terms & Conditions</p>
          <h1 className="mt-4 text-4xl sm:text-5xl font-black tracking-tight">Website and service terms</h1>
          <p className="mt-5 text-lg text-slate-300">
            These terms govern your use of the AMR Solar website and any services obtained through our company.
          </p>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-6 py-20">
        <div className="space-y-6">
          {items.map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-600">
                <Icon className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-black text-slate-900">{title}</h2>
              <p className="mt-4 leading-relaxed text-slate-600">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-slate-900 text-white rounded-3xl p-8">
          <h3 className="text-2xl font-black">Governing Law</h3>
          <p className="mt-4 leading-relaxed text-slate-300">
            These terms are governed by the laws of India, and any disputes arising from them shall be subject to the jurisdiction of competent courts in India, unless otherwise required by applicable law.
          </p>
        </div>
      </main>
    </div>
  );
}
