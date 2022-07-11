/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: []
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  future: {
    webpack5: true
  },
  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false
    }
    return config
  }
}

module.exports = nextConfig
