/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true, Enables React's Strict Mode

  // Custom Webpack configuration
  webpack: (config, { dev }) => {
    if (dev) {
      config.devtool = 'source-map'; // Enable source maps in development
    }

    // Any additional webpack customizations go here
    return config;
  },

  // Other configurations can go here
  // Example: Setting up environment variables
  env: {
    // CUSTOM_API_URL: process.env.CUSTOM_API_URL, // Example environment variable
  },
};

export default nextConfig;