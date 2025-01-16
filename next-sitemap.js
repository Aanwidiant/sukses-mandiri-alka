console.log('next-sitemap config loaded');

// next-sitemap.config.js
/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://sukses-mandiri-alka.vercel.app/',
    generateRobotsTxt: true,
    outDir: './public',
}