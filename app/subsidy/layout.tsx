import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PM Surya Ghar Muft Bijli Yojana ₹78,000 Subsidy & Solar Loans | AMR Solar",
  description: "Claim up to ₹78,000 direct bank transfer (DBT) subsidy for rooftop solar under PM Surya Ghar Muft Bijli Yojana with collateral-free low-interest solar bank loans (~7% EMI). AMR Solar Solutions manages 100% of portal paperwork and DISCOM net metering approvals across India.",
  keywords: [
    "PM Surya Ghar Muft Bijli Yojana",
    "solar subsidy India",
    "78000 solar subsidy",
    "rooftop solar subsidy portal",
    "solar loan 7 percent",
    "collateral free solar loan",
    "DBT solar subsidy",
    "net metering subsidy approval",
    "AMR Solar subsidy"
  ],
  metadataBase: new URL("https://www.amrsolarsolutions.com"),
  alternates: {
    canonical: "https://www.amrsolarsolutions.com/subsidy",
  },
  openGraph: {
    title: "PM Surya Ghar Yojana ₹78,000 Subsidy & Low EMI Loans | AMR Solar Solutions",
    description: "Unlock up to ₹78,000 central government DBT subsidy for rooftop solar. Full portal registration and approval support by AMR Solar Solutions.",
    url: "https://www.amrsolarsolutions.com/subsidy",
    siteName: "AMR Solar Solutions",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.amrsolarsolutions.com/assets/images/residential/residential_2.jpeg",
        width: 1200,
        height: 630,
        alt: "PM Surya Ghar Solar Subsidy by AMR Solar Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PM Surya Ghar ₹78,000 Subsidy & Loans | AMR Solar Solutions",
    description: "Get up to ₹78,000 direct bank subsidy on rooftop solar with low-interest bank loans.",
    images: ["https://www.amrsolarsolutions.com/assets/images/residential/residential_2.jpeg"],
  },
};

export default function SubsidyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
