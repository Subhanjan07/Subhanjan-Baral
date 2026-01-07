// next.config.js
const isGitHubPages = process.env.GITHUB_ACTIONS || process.env.GITHUB_PAGES === 'true';
const isProduction = process.env.NODE_ENV === 'production';

const nextConfig = {
  // Only use static export for production builds (GitHub Pages)
  ...(isProduction && { output: 'export' }),
  images: {
    unoptimized: true, // ← This line disables the incompatible image optimization
  },
  // Only set basePath for GitHub Pages deployment, not for localhost
  ...(isGitHubPages && { basePath: '/Subhanjan-Baral' }),
};

export default nextConfig;
