import type { NextConfig } from 'next';

// const nextConfig: NextConfig = {
//   /* config options here */
//   output: 'standalone',
// };

// export default nextConfig;

const nextConfig = {
  turbopack: {
    root: '.', // Forces Turbopack to look only at the project folder
  },
};
module.exports = nextConfig;
