/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.txt/,
      type: 'asset/source',
    })

    return config
  },
}

module.exports = nextConfig
