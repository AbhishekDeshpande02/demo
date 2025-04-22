// next.config.js
const nextConfig = {
    output: 'standalone', // Required for Cloudflare Functions (SSR)
    experimental: {
      runtime: 'edge', // Edge support
    },
    images: {
      unoptimized: true // Cloudflare Pages doesn't support Image Optimization yet
    }
  }
  
  module.exports = nextConfig
  