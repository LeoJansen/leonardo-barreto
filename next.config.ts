import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
    qualities: [25, 50, 75, 100],
    // Add intermediate widths so responsive images (e.g. ~300px) don't jump to 640w.
    deviceSizes: [320, 360, 384, 420, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
	// For non-fill images that rely on width/height, allow smaller generated sizes too.
	imageSizes: [16, 32, 48, 64, 96, 128, 171, 224, 256, 300, 320, 360, 384, 420, 500],
  },

  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
