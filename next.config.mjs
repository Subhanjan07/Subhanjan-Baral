// next.config.js
const isGitHubPages = process.env.GITHUB_ACTIONS || false;

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // ← This line disables the incompatible image optimization
  },
  basePath: '/Subhanjan-Baral',
  
};

export default nextConfig;
