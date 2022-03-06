/** @type {import('next').NextConfig} */
const withCss = require('@zeit/next-css')
const nextConfig = {
  reactStrictMode: true,
}
if(typeof require !== 'undefined') {
  require.extensions['.css'] = file => {}
}

module.exports = withCss({})
module.exports = nextConfig
