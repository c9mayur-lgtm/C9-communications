# C9 Communications: Comprehensive Page & Route Audit

This document provides a full inventory of all existing pages and routes within the Next.js application.

## 1. Core Service & Marketing Pages
These are the primary landing pages for C9 Communications.

| Route | File Path | Status |
| :--- | :--- | :--- |
| `/` | `src/app/page.tsx` | **Active** |
| `/about` | `src/app/about/page.tsx` | **Active** |
| `/managed-it` | `src/app/managed-it/page.tsx` | **Active** |
| `/telco` | `src/app/telco/page.tsx` | **Active** |
| `/case-studies` | `src/app/case-studies/page.tsx` | **Active** |
| `/industries` | `src/app/industries/page.tsx` | **Active** |
| `/contact` | `src/app/contact/page.tsx` | **Active** |
| `/solutions` | `src/app/solutions/page.tsx` | **Active** |
| `/pricing` | `src/app/pricing/page.tsx` | **Active** |
| `/support` | `src/app/support/page.tsx` | **Active** |

## 2. Telco Service Sub-pages
Detailed service pages for the telecommunications stack.

| Route | File Path | Status |
| :--- | :--- | :--- |
| `/telco/business-nbn` | `src/app/telco/business-nbn/page.tsx` | **Active** |
| `/telco/teams-calling` | `src/app/telco/teams-calling/page.tsx` | **Active** |
| `/telco/phone-system` | `src/app/telco/phone-system/page.tsx` | **Active** |
| `/telco/sip-trunking` | `src/app/telco/sip-trunking/page.tsx` | **Active** |
| `/telco/contact-centre` | `src/app/telco/contact-centre/page.tsx` | **Active** |
| `/telco/inbound-services` | `src/app/telco/inbound-services/page.tsx` | **Active** |
| `/telco/enterprise-ethernet` | `src/app/telco/enterprise-ethernet/page.tsx` | **Active** |
| `/telco/fast-fibre` | `src/app/telco/fast-fibre/page.tsx` | **Active** |
| `/telco/mobile-plans` | `src/app/telco/mobile-plans/page.tsx` | **Active** |
| `/telco/voice-systems` | `src/app/telco/voice-systems/page.tsx` | **Active** |

## 3. Managed IT Service Sub-pages
Detailed service pages for the Managed IT stack.

| Route | File Path | Status |
| :--- | :--- | :--- |
| `/managed-it/helpdesk-support` | `src/app/managed-it/helpdesk-support/page.tsx` | **Active** |
| `/managed-it/infrastructure` | `src/app/managed-it/infrastructure/page.tsx` | **Active** |
| `/managed-it/network-solutions` | `src/app/managed-it/network-solutions/page.tsx` | **Active** |
| `/managed-it/security-solutions` | `src/app/managed-it/security-solutions/page.tsx` | **Active** |
| `/managed-it/strategy-consulting` | `src/app/managed-it/strategy-consulting/page.tsx` | **Active** |
| `/managed-it/cloud-services` | `src/app/managed-it/cloud-services/page.tsx` | **Active** |
| `/managed-it/outsourcing` | `src/app/managed-it/outsourcing/page.tsx` | **Active** |
| `/managed-it/backup-disaster-recovery` | `src/app/managed-it/backup-disaster-recovery/page.tsx` | **Active** |

## 4. Modern Workplace Pages
Focusing on workplace productivity and modern office tech.

| Route | File Path | Status |
| :--- | :--- | :--- |
| `/modern-workplace` | `src/app/modern-workplace/page.tsx` | **Active** |
| `/modern-workplace/productivity` | `src/app/modern-workplace/productivity/page.tsx` | **Active** |
| `/modern-workplace/collaboration` | `src/app/modern-workplace/collaboration/page.tsx` | **Active** |
| `/modern-workplace/communication-tools` | `src/app/modern-workplace/communication-tools/page.tsx` | **Active** |
| `/modern-workplace/endpoint-management` | `src/app/modern-workplace/endpoint-management/page.tsx` | **Active** |
| `/modern-workplace/cctv-people-count` | `src/app/modern-workplace/cctv-people-count/page.tsx` | **Active** |

## 5. Help & Resources (Dynamic)
The "I Need Help With" section in the megamenu now correctly links to these articles.

| Route | Slug | Content |
| :--- | :--- | :--- |
| `/help/[slug]` | `new-office-setup` | Office Relocation Checklist |
| `/help/[slug]` | `fast-secure-internet` | Business Internet Guide |
| `/help/[slug]` | `ad-on-hold` | Professional Audio Systems |
| `/help/[slug]` | `secure-wifi` | Wireless Infrastructure Guide |

## 6. Industry Vertical Pages

| Route | Industry |
| :--- | :--- |
| `/industries/healthcare` | Healthcare & Aged Care |
| `/industries/retail` | Retail & Hospitality |
| `/industries/manufacturing` | Manufacturing |
| `/industries/logistics` | Transportation & Logistics |
| `/industries/finance` | Banks & Insurance |
| `/industries/professional-services` | Consulting & Legal |
| `/industries/non-profit` | Non-Profit Organizations |

## 7. Redundant & Example Pages
These pages are likely legacy content, experiments, or redundant routes that can be reviewed for deletion.

| Route | File Path | Note |
| :--- | :--- | :--- |
| `/wordpress1` | `src/app/wordpress1/page.tsx` | Likely legacy migration file |
| `/managed-it/strategy-consulting1` | `src/app/managed-it/strategy-consulting1/page.tsx` | Duplicate of strategy page |
| `/telco/fast-fibre2` | `src/app/telco/fast-fibre2/page.tsx` | Duplicate of fast fibre |
| `/modern-workplace1` | `src/app/modern-workplace1/page.tsx` | Duplicate of workplace page |
| `/saas-experiment` | `src/app/saas-experiment/page.tsx` | Experimental route |
| `/startups` | `src/app/startups/page.tsx` | Persona landing page (Check if still needed) |

## 8. Case Study Sub-pages (Dynamic)

| Route | File Path |
| :--- | :--- |
| `/case-studies/[slug]` | `src/app/case-studies/[slug]/page.tsx` |
