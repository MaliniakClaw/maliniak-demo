/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'docs',
  assetPrefix: '.',
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;