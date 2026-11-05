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
  title: {
    default: "AMR Solar Solutions | Best Solar Company & Solar Installations in India",
    template: "%s | AMR Solar Solutions",
  },
  description: "AMR Solar Solutions is India's leading solar installation and solar solutions company. MNRE-approved residential rooftop solar panels with up to ₹78,000 government subsidy under PM Surya Ghar Muft Bijli Yojana, commercial solar power plants, and agricultural solar pumps. Save up to 90% on electricity bills with guaranteed 25-year panel warranties.",
  keywords: [
    "solar solutions",
    "solar installations",
    "solar company",
    "best solar company in India",
    "solar installation company",
    "rooftop solar installation",
    "residential solar solutions",
    "commercial solar solutions",
    "agricultural solar pumps",
    "PM Surya Ghar Muft Bijli Yojana",
    "solar subsidy 78000",
    "solar panel price India",
    "rooftop solar panels for home",
    "solar water pump installation",
    "commercial solar power plant",
    "net metering solar installer",
    "AMR Solar",
    "AMR Solar Solutions",
    "solar company Jagtial",
    "solar company Secunderabad",
    "solar installation Hyderabad",
    "solar panels Telangana",
    "solar panels India"
  ],
  authors: [{ name: "AMR Solar Solutions", url: "https://www.amrsolarsolutions.com" }],
  creator: "AMR Solar Solutions",
  publisher: "AMR Solar Solutions",
  category: "Solar Energy & Renewable Power",
  classification: "Solar Energy Company, Solar Solutions, Solar Panel Installation, PM Surya Ghar Subsidy",
  metadataBase: new URL("https://www.amrsolarsolutions.com"),
  alternates: {
    canonical: "https://www.amrsolarsolutions.com",
  },
  openGraph: {
    title: "AMR Solar Solutions | Best Solar Company & Solar Installations in India",
    description: "India's premier solar installation company. Get up to ₹78,000 government subsidy under PM Surya Ghar Yojana, 100% net metering, and slash your electricity bills by 90%.",
    url: "https://www.amrsolarsolutions.com",
    siteName: "AMR Solar Solutions",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.amrsolarsolutions.com/assets/amr_logo.jpeg",
        width: 1200,
        height: 630,
        alt: "AMR Solar Solutions - Best Solar Installation & Solutions Company in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AMR Solar Solutions | Best Solar Company & Installations in India",
    description: "India's trusted solar installation company. Residential rooftop, commercial solar, and agricultural pumps with ₹78,000 subsidy.",
    images: ["https://www.amrsolarsolutions.com/assets/amr_logo.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/assets/amr_logo.jpeg", type: "image/jpeg" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
      { url: "/assets/amr_logo.jpeg" },
    ],
  },
  other: {
    "geo.region": "IN-TG",
    "geo.placename": "Jagtial, Secunderabad, Hyderabad, India",
    "geo.position": "18.8687;78.8953",
    "ICBM": "18.8687, 78.8953",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  const schemaOrgData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.amrsolarsolutions.com/#website",
        "url": "https://www.amrsolarsolutions.com",
        "name": "AMR Solar Solutions",
        "description": "Best Solar Solutions & Solar Installations Company in India",
        "publisher": {
          "@id": "https://www.amrsolarsolutions.com/#organization"
        },
        "inLanguage": "en-IN"
      },
      {
        "@type": ["LocalBusiness", "SolarEnergyCompany", "Organization"],
        "@id": "https://www.amrsolarsolutions.com/#organization",
        "name": "AMR Solar Solutions",
        "alternateName": ["AMR Solar", "AMR Solar Solutions India", "AMR Solar Installation Company"],
        "url": "https://www.amrsolarsolutions.com",
        "logo": "https://www.amrsolarsolutions.com/assets/amr_logo.jpeg",
        "image": "https://www.amrsolarsolutions.com/assets/images/residential/residential_2.jpeg",
        "description": "AMR Solar Solutions is India's leading solar company providing MNRE-approved residential rooftop solar panel installations with up to ₹78,000 subsidy under PM Surya Ghar Muft Bijli Yojana, commercial solar power plants, and agricultural solar pumps.",
        "telephone": ["+919347857711", "+917569967711"],
        "email": "info@amrsolarsolutions.com",
        "priceRange": "₹₹",
        "currenciesAccepted": "INR",
        "paymentAccepted": "Cash, Credit Card, Bank Transfer, Solar Financing Loans",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "09:00",
            "closes": "19:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Sunday",
            "opens": "10:00",
            "closes": "15:00"
          }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "138",
          "bestRating": "5",
          "worstRating": "1"
        },
        "areaServed": [
          { "@type": "Country", "name": "India" },
          { "@type": "City", "name": "Jagtial" },
          { "@type": "City", "name": "Secunderabad" },
          { "@type": "City", "name": "Hyderabad" },
          { "@type": "City", "name": "Karimnagar" },
          { "@type": "City", "name": "Peddapalli" },
          { "@type": "City", "name": "Nizamabad" },
          { "@type": "City", "name": "Warangal" }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Solar Solutions & Installation Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Residential Rooftop Solar Installation (1 kW - 10 kW+)",
                "description": "Grid-connected rooftop solar installation with up to ₹78,000 DBT government subsidy under PM Surya Ghar Muft Bijli Yojana."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Commercial & Industrial Solar Power Plants (10 kW - 1 MW+)",
                "description": "Turnkey rooftop and ground-mounted solar installations for commercial buildings, factories, and schools with 40% accelerated depreciation."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Agricultural Solar Water Pumps & VFD Controllers",
                "description": "High-discharge 3 HP to 10 HP solar water pumps and solar VFD controllers for tubewells and micro-irrigation."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Government Subsidy Registration & Net Metering Liaisoning",
                "description": "End-to-end documentation, DISCOM approvals, bi-directional net meter installation, and DBT subsidy processing."
              }
            }
          ]
        },
        "sameAs": [
          "https://wa.me/919347857711",
          "https://wa.me/917569967711"
        ],
        "address": [
          {
            "@type": "PostalAddress",
            "streetAddress": "1-2 Muthnoor, Velgatoor",
            "addressLocality": "Jagtial",
            "addressRegion": "Telangana",
            "postalCode": "505526",
            "addressCountry": "IN"
          },
          {
            "@type": "PostalAddress",
            "streetAddress": "Narapally",
            "addressLocality": "Secunderabad",
            "addressRegion": "Telangana",
            "postalCode": "500088",
            "addressCountry": "IN"
          }
        ],
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "18.8687",
          "longitude": "78.8953"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.amrsolarsolutions.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Which is the best solar company for rooftop solar installations in India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AMR Solar Solutions is recognized as one of the best solar installation companies in India, delivering MNRE-approved residential rooftop solar, commercial solar systems, and agricultural solar pumps with up to ₹78,000 government subsidy, 100% net metering support, and 25-year panel warranties."
            }
          },
          {
            "@type": "Question",
            "name": "How much government subsidy is provided under PM Surya Ghar Muft Bijli Yojana?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Under the Central Government PM Surya Ghar Muft Bijli Yojana, residential homeowners receive a direct bank transfer (DBT) subsidy of ₹30,000 for 1 kW, ₹60,000 for 2 kW, and ₹78,000 for 3 kW and above. AMR Solar Solutions handles 100% of the online registration, documentation, and DISCOM approvals."
            }
          },
          {
            "@type": "Question",
            "name": "How much can I save on electricity bills with rooftop solar panels?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Rooftop solar installations typically reduce monthly domestic and commercial electricity bills by up to 90%. Systems typically pay for their full investment in 3 to 4 years, delivering free power for the remaining 20+ years."
            }
          },
          {
            "@type": "Question",
            "name": "Does AMR Solar Solutions provide commercial and agricultural solar installations?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! AMR Solar Solutions provides commercial solar plants from 10 kW to 1 MW+ qualifying for 40% Accelerated Depreciation tax benefits, as well as agricultural solar water pumps (3HP to 10HP) and solar VFD controllers for farm irrigation under PM-KUSUM."
            }
          }
        ]
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/assets/amr_logo.jpeg" type="image/jpeg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
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
