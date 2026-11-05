import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solar Installation Projects & Portfolio | AMR Solar Solutions",
  description: "Explore 100+ successful residential rooftop, commercial power plant, and agricultural solar pump installation projects by AMR Solar Solutions across India. View real generation metrics, electricity savings, and ₹78,000 subsidy case studies.",
  keywords: [
    "solar installation projects",
    "solar company portfolio",
    "residential solar case studies",
    "commercial solar installation results",
    "agricultural solar pump projects",
    "solar ROI case studies India",
    "rooftop solar results",
    "AMR Solar projects"
  ],
  metadataBase: new URL("https://www.amrsolarsolutions.com"),
  alternates: {
    canonical: "https://www.amrsolarsolutions.com/projects",
  },
  openGraph: {
    title: "Solar Installation Projects & Portfolio | AMR Solar Solutions",
    description: "Real rooftop, commercial, and agricultural solar installations completed with verified 90% power bill reductions and DBT subsidy credits.",
    url: "https://www.amrsolarsolutions.com/projects",
    siteName: "AMR Solar Solutions",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.amrsolarsolutions.com/assets/images/commercial/commercial_1.jpeg",
        width: 1200,
        height: 630,
        alt: "Solar Installation Portfolio by AMR Solar Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solar Installation Projects | AMR Solar Solutions",
    description: "View verified solar installation results and customer case studies across India.",
    images: ["https://www.amrsolarsolutions.com/assets/images/commercial/commercial_1.jpeg"],
  },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
