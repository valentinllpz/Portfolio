/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    GHTOKEN: process.env.GHTOKEN,
  },
}

module.exports = nextConfig

 