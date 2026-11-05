import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact AMR Solar Solutions | Free Solar Quotation & Rooftop Survey",
  description: "Contact AMR Solar Solutions for free rooftop solar feasibility surveys, quotations, and subsidy support. Call +91 9347857711 / +91 7569967711 or chat on WhatsApp for fast solar consultation across India.",
  keywords: [
    "contact AMR solar solutions",
    "solar company phone number",
    "free solar quote India",
    "solar installation consultation",
    "rooftop solar feasibility survey",
    "solar installation Jagtial",
    "solar installer Secunderabad",
    "solar inquiry WhatsApp"
  ],
  metadataBase: new URL("https://www.amrsolarsolutions.com"),
  alternates: {
    canonical: "https://www.amrsolarsolutions.com/contact",
  },
  openGraph: {
    title: "Contact AMR Solar Solutions | Fast Solar Consultation & Quote",
    description: "Get in touch with AMR Solar Solutions. Call, WhatsApp, or request a free rooftop site inspection for residential, commercial, or agricultural solar.",
    url: "https://www.amrsolarsolutions.com/contact",
    siteName: "AMR Solar Solutions",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.amrsolarsolutions.com/assets/amr_logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Contact AMR Solar Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact AMR Solar Solutions | Free Solar Quote",
    description: "Call +91 9347857711 / +91 7569967711 or chat on WhatsApp for free solar consultation and subsidy help.",
    images: ["https://www.amrsolarsolutions.com/assets/amr_logo.jpeg"],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

