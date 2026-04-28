import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/business1', 
        '/business2', 
        '/greenfield1', 
        '/greenfield2',
        '/modern-workplace1',
        '/enterprise1',
        '/home1',
        '/homepage-v2',
        '/wordpress1'
      ],
    },
    sitemap: 'https://c9-communications.vercel.app/site-map.xml',
  };
}
