/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vmtkbfznzxcnleapefgn.supabase.co",
      },
    ],
  },
};

export default nextConfig;
