import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agricultural Solar Solutions & Solar Water Pump Installation",
  description: "Leading agricultural solar company in India. High-efficiency solar water pumps (3HP, 5HP, 7.5HP, 10HP) and solar VFD controllers for borewells, tubewells, and micro-irrigation under PM-KUSUM. 100% daylight irrigation with zero electricity or diesel costs.",
  keywords: [
    "agricultural solar solutions",
    "solar water pump installation",
    "solar borewell pump company",
    "solar pump installation India",
    "PM KUSUM solar pump",
    "5hp solar pump price",
    "7.5hp solar agricultural pump",
    "10hp solar borewell system",
    "solar VFD motor controller",
    "farm solar irrigation solutions",
    "AMR Solar agriculture"
  ],
  metadataBase: new URL("https://www.amrsolarsolutions.com"),
  alternates: {
    canonical: "https://www.amrsolarsolutions.com/agricultural-solar",
  },
  openGraph: {
    title: "Agricultural Solar Solutions & Solar Water Pumps | AMR Solar",
    description: "Empowering farmers with reliable daylight irrigation. High-discharge 3HP to 10HP solar pumps and solar VFD conversions with zero fuel costs.",
    url: "https://www.amrsolarsolutions.com/agricultural-solar",
    siteName: "AMR Solar Solutions",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.amrsolarsolutions.com/assets/images/agricultural/agricultural_1.jpeg",
        width: 1200,
        height: 630,
        alt: "Agricultural Solar Water Pump Installation by AMR Solar Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agricultural Solar Solutions & Pumps | AMR Solar",
    description: "Save 100% on diesel and electricity for farm irrigation with AMR Solar agricultural water pumps.",
    images: ["https://www.amrsolarsolutions.com/assets/images/agricultural/agricultural_1.jpeg"],
  },
};

export default function AgriculturalSolarLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

