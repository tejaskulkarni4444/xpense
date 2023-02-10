/** @type {import('next').NextConfig} */
const CompressionPlugin = require('compression-webpack-plugin');

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    // Compress files for produciton
    if(!options.dev){
      config.plugins.push(new CompressionPlugin({
        test: /\.js$|\.css$|\.html$/,
      }))
    }
    return config;
  }
}

module.exports = nextConfig
