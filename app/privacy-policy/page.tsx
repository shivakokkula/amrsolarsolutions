import { Shield, Eye, Lock, FileText, Bell } from "lucide-react";

const points = [
  {
    icon: Shield,
    title: "Information We Collect",
    text: "We collect personal information such as your name, contact phone number, email address, property city/location, and solar requirements when you submit enquiry or contact forms on our website.",
  },
  {
    icon: Eye,
    title: "How We Use Your Information",
    text: "Your information is used solely to provide free solar quotes, respond to inquiries, schedule roof surveys, deliver net metering guidance, and assist with government subsidy applications.",
  },
  {
    icon: Lock,
    title: "Information Security",
    text: "We implement secure technical safeguards to protect your personal information. We do not sell, rent, or trade your contact details with external third-party advertisers.",
  },
  {
    icon: FileText,
    title: "Government & DISCOM Sharing",
    text: "With your consent, relevant documentation is shared strictly with authorized government bodies and electricity distribution companies (such as MNRE, National Portal for Rooftop Solar, and regional DISCOMs across India) solely for subsidy clearance and net metering commissioning.",
  },
  {
    icon: Bell,
    title: "Policy Updates",
    text: "We may update our privacy policy periodically to reflect operational changes or regulatory requirements. Any modifications will be posted here with an updated date.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-slate-50 text-slate-800">
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-400">Privacy Policy</p>
          <h1 className="mt-4 text-4xl sm:text-5xl font-black tracking-tight">Your Privacy Matters to Us</h1>
          <p className="mt-5 text-lg text-slate-300">
            AMR Solar Solutions is dedicated to safeguarding your privacy and ensuring your personal information is treated with transparency and security.
          </p>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {points.map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-600">
                <Icon className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-black text-slate-900">{title}</h2>
              <p className="mt-4 leading-relaxed text-slate-600">{text}</p>
            </div>
          ))}
        </div>

        <div className="space-y-8 text-slate-700 mt-10">
          <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
            <h3 className="text-2xl font-black text-slate-900">Cookies and Website Analytics</h3>
            <p className="mt-4 leading-relaxed">
              Our website may use standard analytics to improve browsing speed, page loading, and user experience. You can choose to disable cookies in your browser settings if preferred.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
            <h3 className="text-2xl font-black text-slate-900">Contact Us Regarding Privacy</h3>
            <p className="mt-4 leading-relaxed">
              For any privacy questions or requests regarding your personal information, please contact us at:
            </p>
            <div className="mt-4 space-y-2 text-slate-800">
              <p><strong>Email:</strong> <a href="mailto:info@amrsolarsolutions.com" className="text-amber-600 hover:underline">info@amrsolarsolutions.com</a></p>
              <p><strong>Phone:</strong> <a href="tel:+917569967711" className="text-amber-600 hover:underline">+91 7569967711</a> / <a href="tel:+919347857711" className="text-amber-600 hover:underline">+91 9347857711</a></p>
              <p><strong>Head Office:</strong> 1-2 Muthnoor, Velgatoor, Jagtial, India - 505526</p>
              <p><strong>Branch Office:</strong> Narapally, Secunderabad, India - 500088</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
