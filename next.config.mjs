/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "s3-alpha-sig.figma.com",
                port: "",
            },
            {
                protocol: "https",
                hostname: "vbb4t3282iqbbjxe.public.blob.vercel-storage.com",
                port: "",
            },
        ],
    },
    transpilePackages: ["mui-tel-input"],
};

export default nextConfig;
