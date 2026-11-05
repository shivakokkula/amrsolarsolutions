import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Residential Rooftop Solar Installation Company | ₹78,000 Subsidy",
  description: "AMR Solar Solutions is the #1 residential rooftop solar installation company in India. Get up to ₹78,000 direct DBT subsidy under PM Surya Ghar Muft Bijli Yojana, 100% net metering, 25-year panel warranty, and cut monthly electricity bills by up to 90%. Book a free rooftop solar survey!",
  keywords: [
    "residential solar solutions",
    "rooftop solar installation company",
    "best solar installation company",
    "home solar panel installation",
    "PM Surya Ghar subsidy solar company",
    "3kw rooftop solar price India",
    "5kw solar rooftop cost",
    "10kw home solar system",
    "residential rooftop solar panels",
    "net metering residential solar India",
    "AMR Solar residential"
  ],
  metadataBase: new URL("https://www.amrsolarsolutions.com"),
  alternates: {
    canonical: "https://www.amrsolarsolutions.com/residential-solar",
  },
  openGraph: {
    title: "Best Residential Rooftop Solar Installation Company | AMR Solar Solutions",
    description: "Slash your home electricity bills by 90% with MNRE-approved residential rooftop solar panels. Claim up to ₹78,000 government subsidy with complete paperwork assistance.",
    url: "https://www.amrsolarsolutions.com/residential-solar",
    siteName: "AMR Solar Solutions",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.amrsolarsolutions.com/assets/images/residential/residential_2.jpeg",
        width: 1200,
        height: 630,
        alt: "Residential Rooftop Solar Installation by AMR Solar Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Residential Rooftop Solar Installation | ₹78,000 Subsidy - AMR Solar",
    description: "Install residential rooftop solar with up to ₹78,000 PM Surya Ghar subsidy. Cut power bills by 90%.",
    images: ["https://www.amrsolarsolutions.com/assets/images/residential/residential_2.jpeg"],
  },
};

export default function ResidentialSolarLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

