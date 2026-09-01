import { ShieldCheck, Lock, Eye, FileText } from "lucide-react";

const sections = [
  {
    icon: Lock,
    title: "Information We Collect",
    text: "We may collect your name, phone number, email, address, and project-related requirements when you contact AMR Solar for consultation, site visits, quotations, or service support.",
  },
  {
    icon: Eye,
    title: "How We Use It",
    text: "Your information is used to prepare solar proposals, process subsidy support, schedule site visits, respond to your queries, and improve the quality of our services.",
  },
  {
    icon: ShieldCheck,
    title: "Information Protection",
    text: "We use appropriate technical and organizational measures to protect personal information from unauthorized access, misuse, modification, or disclosure.",
  },
  {
    icon: FileText,
    title: "Third-Party Sharing",
    text: "We do not sell or rent your personal data. Information may only be shared with trusted partners, vendors, or authorities when required to fulfill your service request or legal obligations.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-slate-50 text-slate-800">
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-400">Privacy Policy</p>
          <h1 className="mt-4 text-4xl sm:text-5xl font-black tracking-tight">Your information is handled with care</h1>
          <p className="mt-5 text-lg text-slate-300">
            This Privacy Policy explains how AMR Solar Renewable Energy Solutions uses and protects the information you share with us online, by phone, or in person.
          </p>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {sections.map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-white border border-slate-200 rounded-3xl p-7 shadow-sm">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-600">
                <Icon className="h-6 w-6" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">{title}</h2>
              <p className="mt-3 text-slate-600 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        <div className="space-y-8 text-slate-700">
          <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
            <h3 className="text-2xl font-black text-slate-900">Cookies and Website Analytics</h3>
            <p className="mt-4 leading-relaxed">
              Our website may use cookies or standard analytical tools to understand website traffic, improve performance, and optimize user experience. You may disable cookies in your browser settings if you prefer.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
            <h3 className="text-2xl font-black text-slate-900">Your Rights</h3>
            <p className="mt-4 leading-relaxed">
              You have the right to request access to, correction of, or deletion of your personal data, as permitted by applicable law. If you have any concerns, you may contact us directly to discuss your information preferences.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
            <h3 className="text-2xl font-black text-slate-900">Contact Us</h3>
            <p className="mt-4 leading-relaxed">
              For any privacy-related questions, please contact us at <a href="mailto:rudra.bairam@zohomail.in" className="text-amber-600 font-semibold">rudra.bairam@zohomail.in</a> or call <a href="tel:+917995567711" className="text-amber-600 font-semibold">+91 7995567711</a>.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
