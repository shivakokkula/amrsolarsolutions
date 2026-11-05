import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MessageCircle } from "lucide-react";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "AMR Solar Solutions | Rooftop, Commercial & Agricultural Solar in India",
  description: "AMR Solar Solutions provides MNRE-approved residential rooftop solar systems with government subsidies up to ₹78,000, commercial solar plants, and agricultural solar pumps across India. Save 90% on electricity bills.",
  keywords: "AMR Solar, solar panels India, rooftop solar Jagtial, solar installation Secunderabad, solar subsidy India, agricultural solar pumps, commercial solar panels, PM Surya Ghar Muft Bijli Yojana, net metering India",
  metadataBase: new URL("https://www.amrsolarsolutions.com"),
  alternates: {
    canonical: "https://www.amrsolarsolutions.com",
  },
  openGraph: {
    title: "AMR Solar Solutions | Best Solar Panel Installation with Government Subsidy",
    description: "MNRE-approved solar systems. Up to ₹78,000 government subsidy. Save up to 90% on electricity bills with residential, commercial & agricultural solar.",
    url: "https://www.amrsolarsolutions.com",
    siteName: "AMR Solar Solutions",
    type: "website",
    images: [
      {
        url: "https://www.amrsolarsolutions.com/assets/amr_logo.jpeg",
        width: 1200,
        height: 630,
        alt: "AMR Solar Solutions - Clean Energy Installation"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AMR Solar Solutions | Rooftop, Commercial & Agricultural Solar",
    description: "MNRE-approved solar systems. Up to ₹78,000 subsidy. Save 90% on electricity bills.",
    images: ["https://www.amrsolarsolutions.com/assets/amr_logo.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  const schemaOrgData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.amrsolarsolutions.com",
    name: "AMR Solar Solutions",
    image: "https://www.amrsolarsolutions.com/assets/amr_logo.jpeg",
    description: "MNRE-approved rooftop solar system installation with government subsidies up to ₹78,000, commercial solar solutions, and agricultural solar pumps.",
    url: "https://www.amrsolarsolutions.com",
    telephone: ["+917569967711", "+919347857711"],
    email: "info@amrsolarsolutions.com",
    priceRange: "₹",
    areaServed: ["India", "Jagtial", "Secunderabad", "Hyderabad", "Karimnagar", "Peddapalli", "Warangal"],
    serviceType: [
      "Residential Rooftop Solar Installation",
      "Commercial Solar Power Plants",
      "Agricultural Solar Pumps & Irrigation",
      "Net Metering Assistance",
      "Government Subsidy Guidance",
      "Hybrid Solar Battery Systems"
    ],
    sameAs: [
      "https://wa.me/919347857711",
      "https://wa.me/917569967711"
    ],
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "1-2 Muthnoor, Velgatoor",
        addressLocality: "Jagtial",
        addressRegion: "India",
        postalCode: "505526",
        addressCountry: "IN"
      },
      {
        "@type": "PostalAddress",
        streetAddress: "Narapally",
        addressLocality: "Secunderabad",
        addressRegion: "India",
        postalCode: "500088",
        addressCountry: "IN"
      }
    ]
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

        <Footer />

        {/* Floating WhatsApp Quick Action */}
        <a
          href="https://wa.me/919347857711?text=Hello%20AMR%20Solar%2C%20I%20am%20interested%20in%20solar%20solutions."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp with AMR Solar"
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.45)] transition-all duration-300 hover:scale-110 hover:bg-[#1fb85d]"
        >
          <MessageCircle className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={2.4} />
        </a>
      </body>
    </html>
  );
}
