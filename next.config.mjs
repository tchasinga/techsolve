// next.config.mjs

import withVideos from 'next-videos';

/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'dist',
};

export default withVideos(nextConfig);
