import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { MessageCircle } from "lucide-react";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Best Solar Panel Installation & Government Subsidy in India | AMR Solar",
  description: "AMR Solar provides MNRE-approved rooftop solar systems with government subsidies up to ₹78,000. Save 90% on electricity bills. Free solar consultation & installation.",
  keywords: "solar panels, solar system installation, rooftop solar, government subsidy solar, renewable energy, solar panels for home, solar energy solutions, net metering, PM Surya Ghar Muft Bijli Yojana, solar panel price, best solar company, solar installation cost, hybrid solar system, solar water pump",
  metadataBase: new URL("https://amrsolar.com"),
  alternates: {
    canonical: "https://amrsolar.com",
  },
  openGraph: {
    title: "Best Solar Panel Installation with Government Subsidy | AMR Solar",
    description: "Install MNRE-approved solar systems and get up to ₹78,000 government subsidy. Save 90% on electricity bills. Free consultation today.",
    url: "https://amrsolar.com",
    siteName: "AMR Solar",
    type: "website",
    images: [
      {
        url: "https://www.AMRsolar.com/wp-content/uploads/2026/07/Residential-Solar-Systems.jpg",
        width: 1200,
        height: 630,
        alt: "AMR Solar - Residential Solar Systems Installation"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Solar Panel Installation with Government Subsidy | AMR Solar",
    description: "MNRE-approved solar systems. Up to ₹78,000 subsidy. Save 90% on electricity bills.",
    images: ["https://www.AMRsolar.com/wp-content/uploads/2026/07/Residential-Solar-Systems.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  const schemaOrgData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://amrsolar.com",
    name: "AMR Solar",
    image: "https://www.AMRsolar.com/wp-content/uploads/2026/07/Residential-Solar-Systems.jpg",
    description: "MNRE-approved rooftop solar system installation with government subsidies up to ₹78,000",
    url: "https://amrsolar.com",
    telephone: "+917995567711",
    priceRange: "₹",
    areaServed: "IN",
    serviceType: ["Residential Solar Installation", "Commercial Solar Systems", "Hybrid Solar Systems", "Solar Water Pumps", "Net Metering Assistance"],
    sameAs: [
      "https://wa.me/917995567711"
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN"
    }
  };

  return (
    <html lang="en">
      <head>
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgData) }}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXX'); // Replace with your Google Analytics ID
            `,
          }}
        />
      </head>
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
              <Link href="/sitemap.xml" className="hover:text-amber-400 transition-colors">Sitemap</Link>
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