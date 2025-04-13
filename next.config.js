/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    
    // Speed up development builds
    if (process.env.NODE_ENV === 'development') {
      config.watchOptions = {
        ignored: ['**/node_modules', '**/.git'],
        poll: 1000, // Check for changes every second
      }
    }
    
    return config;
  },
}

module.exports = nextConfig 