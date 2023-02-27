/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true
  },
  images: {
    unoptimized: true,
  },
  compiler: {
    styledComponents: true,
  }
}

module.exports = nextConfig

const withImages = require('next-images')
module.exports = withImages()
