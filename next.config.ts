import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/subsidies-finance",
        destination: "/subsidy",
      },
    ];
  },
};

export default nextConfig;
