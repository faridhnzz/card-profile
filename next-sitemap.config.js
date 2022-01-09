const config = require('./config.json');

module.exports = {
  siteUrl: config.siteUrl,
  changefreq: config.sitemap.changefreq,
  priority: config.sitemap.priority,
  exclude: config.sitemap.exclude,
  generateRobotsTxt: config.generateRobotsTxt,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/_next/static/',
      },
    ],
  },
};
