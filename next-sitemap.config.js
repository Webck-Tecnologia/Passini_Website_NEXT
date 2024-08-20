module.exports = {
    siteUrl: 'https://passini.com.br',
    generateRobotsTxt: true,
    exclude: ['/admin', '/login'],
    changefreq: 'daily',
    priority: 0.7,
    sitemapSize: 5000,
    robotsTxtOptions: {
      additionalSitemaps: [
        'https://passini.com.br/server-sitemap.xml',
      ],
    },
  };