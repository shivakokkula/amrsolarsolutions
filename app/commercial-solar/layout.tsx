import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial & Industrial Solar Solutions & Installation Company",
  description: "Top commercial solar solutions company in India. AMR Solar Solutions installs turnkey rooftop solar plants (10 kW to 1 MW+) for shops, offices, commercial complexes, schools, and factories. Save up to 80% on operational power costs and claim 40% Accelerated Depreciation tax benefits.",
  keywords: [
    "commercial solar solutions",
    "commercial solar installation company",
    "industrial solar power plant company",
    "rooftop solar for business",
    "industrial solar panel installation",
    "40% accelerated depreciation solar",
    "factory solar rooftop installation",
    "commercial solar company India",
    "AMR Solar commercial"
  ],
  metadataBase: new URL("https://www.amrsolarsolutions.com"),
  alternates: {
    canonical: "https://www.amrsolarsolutions.com/commercial-solar",
  },
  openGraph: {
    title: "Commercial & Industrial Solar Solutions & Installation | AMR Solar",
    description: "Lower business electricity overheads with customized 10 kW to 1 MW+ commercial solar installations. Claim 40% tax depreciation with 3-year ROI payback.",
    url: "https://www.amrsolarsolutions.com/commercial-solar",
    siteName: "AMR Solar Solutions",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.amrsolarsolutions.com/assets/images/commercial/commercial_1.jpeg",
        width: 1200,
        height: 630,
        alt: "Commercial Solar Power Plant Installation by AMR Solar Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial & Industrial Solar Solutions | AMR Solar",
    description: "Turnkey commercial solar power plants with 40% tax depreciation and up to 80% bill reduction.",
    images: ["https://www.amrsolarsolutions.com/assets/images/commercial/commercial_1.jpeg"],
  },
};

export default function CommercialSolarLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

