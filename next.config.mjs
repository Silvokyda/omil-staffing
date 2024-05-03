/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/omil-staffing",
    output: "export",
    reactStrictMode: true,
    images: {
        loader: "akamai",
        path: "/",
    },
    assetPrefix: "/omil-staffing",
};

export default nextConfig;
