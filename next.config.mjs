// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: [
//       "astralpaints.kwebmakerdigitalagency.com",
//       "astral-paints-landing.vercel.app",
//       //   "fonts.google.com",
//     ],
//   },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "astralpaints.kwebmakerdigitalagency.com",
      },
      {
        protocol: "https",
        hostname: "astral-paints-landing.vercel.app",
      },
      {
        protocol: "https",
        hostname: "s3-alpha-sig.figma.com",
      },
    ],
  },
};

export default nextConfig;
