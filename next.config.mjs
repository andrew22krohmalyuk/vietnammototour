/** @type {import('next').NextConfig} */
import packageJson from './package.json' with { type: 'json' };

const nextConfig = {
  /* config options here */
  output: 'export',
  distDir: 'dist',
  reactStrictMode: true,
  basePath: `/${packageJson.name}`,
};

export default nextConfig;
