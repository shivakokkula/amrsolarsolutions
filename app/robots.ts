import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/contact', '/admin', '/private'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/contact'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/contact'],
      },
    ],
    sitemap: 'https://www.amrsolarsolutions.com/sitemap.xml',
    host: 'https://www.amrsolarsolutions.com',
  };
}
