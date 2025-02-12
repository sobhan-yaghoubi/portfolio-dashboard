/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bulrqikoligizkegyzcz.supabase.co",
        pathname: "/**",
      },
    ],
  },
}

export default nextConfig
