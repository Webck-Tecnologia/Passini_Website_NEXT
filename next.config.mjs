/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    GA_MEASUREMENT_ID: process.env.GA_MEASUREMENT_ID,
  },
  async redirects() {
    return [
      // Redirecionar de HTTP para HTTPS (apenas em produção)
      ...(process.env.NODE_ENV === 'production'
        ? [
            {
              source: '/:path*',
              has: [
                {
                  type: 'host',
                  value: 'passini.com.br',
                },
              ],
              destination: 'https://passini.com.br/:path*',
              permanent: true,
            },
          ]
        : []),
      // Redirecionar de www para non-www (apenas em produção)
      ...(process.env.NODE_ENV === 'production'
        ? [
            {
              source: '/:path*',
              has: [
                {
                  type: 'host',
                  value: 'www.passini.com.br',
                },
              ],
              destination: 'https://passini.com.br/:path*',
              permanent: true,
            },
          ]
        : []),
      // Redirecionar URLs com trailing slash para URLs sem trailing slash
      {
        source: '/:path+/',
        destination: '/:path+',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/server-sitemap.xml',
        destination: '/api/server-sitemap',
      },
    ];
  },
  reactStrictMode: true,
};

export default nextConfig;