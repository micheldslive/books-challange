/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL,
    MAX_AGE: process.env.MAX_AGE,
  },
  images: {
    domains: [
      'localhost',
      'files-books.ioasys.com.br',
      'd2drtqy2ezsot0.cloudfront.net',
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}
