/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'blog-websites.bchat.lat',
                port: '',
                pathname: '/**',
            },
            // Adicione outros domínios se necessário
        ],
    },
};

export default nextConfig;
