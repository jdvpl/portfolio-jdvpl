/** @type {import('next').NextConfig} */
const nextConfig = {
  // Performance optimizations
  swcMinify: true,
  reactStrictMode: true,

  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Experimental features for better performance
  experimental: {
    optimizeCss: true,
  },

  // Webpack optimizations
  webpack: (config, { isServer }) => {
    // Optimize bundle size
    config.optimization = {
      ...config.optimization,
      moduleIds: 'deterministic',
      runtimeChunk: 'single',
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          default: false,
          vendors: false,
          // Vendor chunk for react and react-dom
          react: {
            name: 'react',
            chunks: 'all',
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            priority: 40,
          },
          // Three.js and related libraries
          three: {
            name: 'three',
            chunks: 'all',
            test: /[\\/]node_modules[\\/](@react-three|three|maath)[\\/]/,
            priority: 35,
          },
          // Animation libraries
          animation: {
            name: 'animation',
            chunks: 'all',
            test: /[\\/]node_modules[\\/](framer-motion|react-type-animation)[\\/]/,
            priority: 30,
          },
          // Other node_modules
          lib: {
            test: /[\\/]node_modules[\\/]/,
            name: 'lib',
            chunks: 'all',
            priority: 10,
          },
        },
      },
    };

    return config;
  },
};

export default nextConfig;
