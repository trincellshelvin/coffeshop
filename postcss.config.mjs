/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},  // Add autoprefixer plugin
    ...(process.env.NODE_ENV === 'production' ? {cssnano: {preset: 'default'}} : {}),  // Add cssnano plugin for production
  },
};

export default config;
