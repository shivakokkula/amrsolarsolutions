import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About AMR Solar | Leading Solar Energy Solutions Provider",
  description: "Learn about AMR Solar's mission, vision, and commitment to providing affordable, sustainable rooftop solar systems with government subsidies up to ₹78,000.",
  keywords: "about AMR Solar, solar energy company, MNRE approved installer, solar panel provider, renewable energy solutions, sustainable energy",
  metadataBase: new URL("https://amrsolar.com"),
  alternates: {
    canonical: "https://amrsolar.com/about",
  },
  openGraph: {
    title: "About AMR Solar | Leading Solar Energy Solutions",
    description: "Discover how AMR Solar helps homeowners reduce electricity costs through certified solar installations and government support.",
    url: "https://amrsolar.com/about",
    siteName: "AMR Solar",
    type: "website",
  },
};

import AboutPageClient from "./page-client";

export default function AboutPage() {
  return <AboutPageClient />;
}
