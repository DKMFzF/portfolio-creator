import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,

  async rewrites() {
    return [
      { source: "/@dkmfzf", destination: "/" },
      { source: "/@dkmfzf/:path*", destination: "/:path*" },
    ];
  },
};

export default nextConfig;
