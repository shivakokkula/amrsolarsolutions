import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | AMR Solar Solutions",
  description: "Terms and conditions for solar installation, commissioning, maintenance, and warranty services provided by AMR Solar Solutions across India.",
  metadataBase: new URL("https://www.amrsolarsolutions.com"),
  alternates: {
    canonical: "https://www.amrsolarsolutions.com/terms-conditions",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

