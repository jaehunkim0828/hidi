/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/HiDi', // "username.github.io"가 아니면 반드시 설정
  assetPrefix: '/HiDi',
};

module.exports = nextConfig;
