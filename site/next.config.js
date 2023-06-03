const basePath = process.env.NODE_ENV === 'development' ? '' :'/ah_reg/1.0';
/** @type {import('next').NextConfig} */
console.log("Build base path:", basePath);
const nextConfig = {
  env: {
    name: 'AlienHub',
    description: 'AlienHub Images',
    icon: '/img/logo.svg',
    listUrl: 'https://mdoryammilwalrus.github.io/ah_reg/',
    contactUrl: 'https://example.com',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath,
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
