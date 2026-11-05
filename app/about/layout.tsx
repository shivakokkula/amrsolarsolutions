import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About AMR Solar Solutions | Top Solar Installation Company in India",
  description: "Discover AMR Solar Solutions — India's trusted MNRE-approved solar energy company with 100+ installations and offices in Jagtial and Secunderabad. Engineering turnkey rooftop, commercial, and agricultural solar solutions with up to ₹78,000 subsidies.",
  keywords: [
    "about AMR solar solutions",
    "best solar company India",
    "top solar installation company",
    "solar company Jagtial",
    "solar installation Secunderabad",
    "solar company Hyderabad",
    "MNRE approved solar installer",
    "solar solutions provider India"
  ],
  metadataBase: new URL("https://www.amrsolarsolutions.com"),
  alternates: {
    canonical: "https://www.amrsolarsolutions.com/about",
  },
  openGraph: {
    title: "About AMR Solar Solutions | Leading Solar Company in India",
    description: "100+ projects completed, 2+ years of hands-on solar engineering excellence. Learn about AMR Solar Solutions' mission to bring clean renewable energy across India.",
    url: "https://www.amrsolarsolutions.com/about",
    siteName: "AMR Solar Solutions",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.amrsolarsolutions.com/assets/amr_logo.jpeg",
        width: 1200,
        height: 630,
        alt: "About AMR Solar Solutions Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About AMR Solar Solutions | Top Solar Company in India",
    description: "MNRE-approved solar installation company delivering residential, commercial, and agricultural solar across India.",
    images: ["https://www.amrsolarsolutions.com/assets/amr_logo.jpeg"],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

