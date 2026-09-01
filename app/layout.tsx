import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { MessageCircle } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AMR Solar | Renewable Energy Solutions",
  description: "Install MNRE-approved rooftop solar systems and unlock government subsidies up to ₹78,000.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50 selection:bg-amber-400 selection:text-slate-900 flex flex-col min-h-screen`}>
        
        <Navbar />

        <main className="flex-grow overflow-x-hidden">
          {children}
        </main>

        <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900 text-sm mt-auto">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <p>© 2026 AMR Solar Renewable Energy Solutions. All Rights Reserved.</p>
            <div className="flex flex-wrap gap-6 justify-center">
              <Link href="/privacy-policy" className="hover:text-amber-400 transition-colors">Privacy Policy</Link>
              <Link href="/terms-conditions" className="hover:text-amber-400 transition-colors">Terms & Conditions</Link>
            </div>
          </div>
        </footer>

        <a
          href="https://wa.me/917995567711?text=Hello%20AMR%20Solar%2C%20I%20want%20a%20free%20quote."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.45)] transition-all duration-300 hover:scale-110 hover:bg-[#1fb85d]"
        >
          <MessageCircle className="h-8 w-8" strokeWidth={2.6} />
        </a>
      </body>
    </html>
  );
}