import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://c9-communications.vercel.app';
  
  const mainPages = [
    '',
    '/telco',
    '/managed-it',
    '/enterprise',
    '/industries',
    '/case-studies',
    '/contact',
    '/about',
    '/blog',
    '/privacy-policy',
    '/terms',
    '/sitemap',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const telcoPages = [
    '/telco/phone-system',
    '/telco/contact-centre',
    '/telco/sip-trunking',
    '/telco/teams-calling',
    '/telco/fast-fibre',
    '/telco/business-nbn',
    '/telco/mobile-plans',
    '/telco/inbound-services',
    '/telco/enterprise-ethernet',
    '/telco/voice-systems',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const managedItPages = [
    '/managed-it/infrastructure',
    '/managed-it/security-solutions',
    '/managed-it/backup-disaster-recovery',
    '/managed-it/cloud-services',
    '/managed-it/helpdesk-support',
    '/managed-it/network-solutions',
    '/managed-it/outsourcing',
    '/managed-it/strategy-consulting',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const industryPages = [
    '/industries/retail',
    '/industries/healthcare',
    '/industries/hospitality',
    '/industries/education',
    '/industries/professional-services',
    '/industries/real-estate',
    '/industries/non-profit',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [...mainPages, ...telcoPages, ...managedItPages, ...industryPages];
}
