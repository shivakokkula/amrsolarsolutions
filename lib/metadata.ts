import { Metadata } from "next";

export const generatePageMetadata = (
  page: string, 
  title: string, 
  description: string, 
  keywords: string[] = []
): Metadata => {
  const baseUrl = "https://www.amrsolarsolutions.com";
  const path = page === "home" ? "" : page;
  
  return {
    title: `${title} | AMR Solar Solutions`,
    description: description,
    keywords: keywords.join(", "),
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `${baseUrl}/${path}`,
    },
    openGraph: {
      title: `${title} | AMR Solar Solutions`,
      description: description,
      url: `${baseUrl}/${path}`,
      siteName: "AMR Solar Solutions",
      type: "website",
      images: [
        {
          url: "https://images.unsplash.com/photo-1509391366360-12009a30f785?w=1200&q=80",
          width: 1200,
          height: 630,
          alt: "AMR Solar Solutions"
        }
      ],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
};

export const seoKeywords = {
  home: [
    "solar panels India", 
    "rooftop solar Jagtial",
    "solar installation Secunderabad",
    "government subsidy solar",
    "renewable energy India",
    "solar panels for home",
    "solar energy solutions",
    "net metering",
    "PM Surya Ghar Muft Bijli Yojana",
    "MNRE approved solar installer",
    "best solar company India",
    "residential solar",
    "commercial solar",
    "agricultural solar pump"
  ],
  residential: [
    "residential rooftop solar",
    "home solar panel installation India",
    "net metering India",
    "PM Surya Ghar subsidy",
    "rooftop solar systems Jagtial Secunderabad",
    "hybrid solar battery for home",
    "save electricity bill solar"
  ],
  commercial: [
    "commercial solar installation",
    "solar panels for shops and offices",
    "industrial rooftop solar India",
    "solar tax benefits accelerated depreciation",
    "commercial net metering",
    "factory solar panels Secunderabad Hyderabad"
  ],
  agricultural: [
    "agricultural solar water pump",
    "solar motor for irrigation India",
    "PM KUSUM solar scheme",
    "solar tubewell pump",
    "agricultural solar power Velgatoor Jagtial",
    "drip irrigation solar system"
  ],
  subsidy: [
    "PM Surya Ghar Muft Bijli Yojana",
    "₹78000 solar subsidy",
    "government solar subsidy India",
    "solar financing low interest bank loan",
    "solar subsidy eligibility criteria",
    "MNRE subsidy rooftop solar"
  ],
  projects: [
    "completed solar installations India",
    "solar project gallery",
    "residential solar projects Hyderabad",
    "commercial solar installations Warangal Jagtial",
    "agricultural pump installations"
  ],
  contact: [
    "AMR Solar contact number",
    "AMR Solar Jagtial address",
    "AMR Solar Secunderabad office",
    "solar quotation India",
    "solar site visit India"
  ]
};
