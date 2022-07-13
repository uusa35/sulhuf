/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['ecommerce.iads-kw.com', 'ecommerce-backend.test', 'http://sulhuf.test', 'http://dev-api.trysedalia.com']
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/:path*',
  //       destination: 'http://ecommerce-backend.test/:path*',
  //     },
  //   ]
  // },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
}
