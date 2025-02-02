// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.sanity.io',
          pathname: '/images/**',
        },
        {
          protocol: "https",
          hostname: "morent-car-rent-ux9i.vercel.app",
          pathname: "/_next/image/**",
        },
      ],
    },
  };
  
  export default nextConfig;
  
  
