/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'AlienHub',
    description: 'AlienHub Images',
    icon: '/img/logo.svg',
    listUrl: 'https://mdoryammilwalrus.github.io/ah_reg/',
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: process.env.NODE_ENV === 'development' ? '' :'/ah_reg/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
