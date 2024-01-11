/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
    env: {
      AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
    },
    // ... other configurations
  }