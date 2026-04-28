import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://c9communications.com.au'
  const lastModified = new Date()

  const routes = [
    '',
    '/about',
    '/blog',
    '/business',
    '/case-studies',
    '/contact',
    '/enterprise',
    '/industries',
    '/insights',
    '/managed',
    '/managed-it',
    '/solutions',
    '/telco',
    '/support',
    '/pricing',
    '/privacy-policy',
    '/terms',
    // Telco sub-pages
    '/telco/sip-trunking',
    '/telco/contact-centre',
    '/telco/teams-calling',
    '/telco/phone-system',
    '/telco/inbound-services',
    '/telco/business-nbn',
    '/telco/c9voice',
    '/telco/enterprise-ethernet',
    '/telco/fast-fibre',
    '/telco/mobile-plans',
    '/telco/voice-systems',
    // Managed IT sub-pages
    '/managed-it/backup-disaster-recovery',
    '/managed-it/cloud-services',
    '/managed-it/helpdesk-support',
    '/managed-it/infrastructure',
    '/managed-it/network-solutions',
    '/managed-it/outsourcing',
    '/managed-it/security-solutions',
    '/managed-it/strategy-consulting',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === '' ? 'daily' : 'weekly' as any,
    priority: route === '' ? 1.0 : 0.8,
  }))
}
