import { Metadata } from "next";

export const generatePageMetadata = (page: string, title: string, description: string, keywords: string[] = []): Metadata => {
  const baseUrl = "https://amrsolar.com";
  
  return {
    title: title,
    description: description,
    keywords: keywords.join(", "),
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `${baseUrl}/${page === "home" ? "" : page}`,
    },
    openGraph: {
      title: title,
      description: description,
      url: `${baseUrl}/${page === "home" ? "" : page}`,
      siteName: "AMR Solar",
      type: "website",
      images: [
        {
          url: "https://www.AMRsolar.com/wp-content/uploads/2026/07/Residential-Solar-Systems.jpg",
          width: 1200,
          height: 630,
          alt: "AMR Solar - Solar Solutions"
        }
      ],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
};

// Keywords for SEO
export const seoKeywords = {
  home: [
    "solar panels", 
    "solar system installation",
    "rooftop solar",
    "government subsidy solar",
    "renewable energy",
    "solar panels for home",
    "solar energy solutions",
    "net metering",
    "PM Surya Ghar Muft Bijli Yojana",
    "MNRE approved solar",
    "best solar company",
    "solar installation cost",
    "save on electricity bills",
    "hybrid solar system",
    "solar water pump"
  ],
  subsidy: [
    "PM Surya Ghar Muft Bijli Yojana",
    "government solar subsidy",
    "solar panel subsidy",
    "₹78,000 subsidy",
    "solar energy subsidy",
    "residential solar subsidy",
    "rooftop solar subsidy"
  ],
  projects: [
    "solar project",
    "solar installation projects",
    "residential solar projects",
    "solar case studies",
    "solar ROI calculation",
    "solar bill reduction"
  ]
};
