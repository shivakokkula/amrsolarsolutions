import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | AMR Solar Solutions",
  description: "Read the Privacy Policy of AMR Solar Solutions. Learn how we protect customer data and information across our solar solutions and consultation services in India.",
  metadataBase: new URL("https://www.amrsolarsolutions.com"),
  alternates: {
    canonical: "https://www.amrsolarsolutions.com/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

