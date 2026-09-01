import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solar Installation Projects & Case Studies | AMR Solar",
  description: "Explore our successful solar panel installation projects. See real results including ROI calculations, electricity bill savings, and customer testimonials.",
  keywords: "solar projects, solar installation case studies, residential solar projects, commercial solar projects, solar ROI, solar case studies, solar installation results, energy savings projects",
  metadataBase: new URL("https://www.amrsolarsolutions.com"),
  alternates: {
    canonical: "https://www.amrsolarsolutions.com/projects",
  },
  openGraph: {
    title: "Solar Installation Projects & Case Studies | AMR Solar",
    description: "View successful solar installations with detailed project information and savings calculations.",
    url: "https://www.amrsolarsolutions.com/projects",
    siteName: "AMR Solar",
    type: "website",
  },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
