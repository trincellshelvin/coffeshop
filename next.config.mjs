// next.config.mjs
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
  cssLoaderOptions: {
    importLoaders: 1,
    modules: {
      localIdentName: "[local]__[hash:base64:5]",
    },
  },
  postcssLoaderOptions: {
    plugins: [
      'postcss-import',
      'postcss-flexbugs-fixes',
      'postcss-preset-env',
      autoprefixer,
      cssnano,
    ],
  },
};

export default nextConfig;
