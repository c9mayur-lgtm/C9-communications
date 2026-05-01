# C9 Communications: Project Alignment & Requirements

This document outlines the current technical status, pending requirements, and the roadmap for integrating internal systems and content management.

---

## 1. Questions for Management (Requirements Gathering)

### Form Integrations (CRM & Lead Flow)
*   **Target System**: Which internal software or CRM (Salesforce, HubSpot, Zoho, etc.) should the consultation forms push data into?
*   **Fallback**: Should we implement a direct email notification system (e.g., to `sales@c9communications.com.au`) as a temporary measure?
*   **Data Fields**: Are there any additional specific data points we need to capture from leads (e.g., Industry, Employee Count, Budget)?

### Content Management (CMS)
*   **User Access**: Who will be responsible for publishing blogs and case studies? 
*   **Workflow**: Do we want a user-friendly dashboard (Headless CMS like Sanity or Contentful) for the marketing team, or will content be managed via code/Git?
*   **Legacy Content**: Is there existing content from a previous platform that needs to be imported?

### Third-Party Tools & Services
*   **Engagement**: Do we require a Live Chat integration (e.g., Intercom, Drift)?
*   **Scheduling**: Should we integrate an automated booking tool like Calendly into the "Schedule Strategy Session" CTA?
*   **Marketing**: Which email marketing platform should be connected to the newsletter subscription?

---

## 2. What We Are Providing (Deliverables)

### High-Authority Design System
*   **Enterprise Aesthetic**: A fully custom "Sharp-Edged" design (no rounded corners, shadows, or fluff) optimized for executive-level trust.
*   **Performance**: Built on Next.js 15+ for sub-second page loads and perfect Core Web Vitals.

### Interactive Infrastructure
*   **Functional Forms**: Secure "Server Action" handlers with real-time validation and submission feedback (already implemented in the core).
*   **Insights Hub**: A dynamic architecture for Articles, Blogs, and Case Studies with clean, SEO-friendly URLs.

### Operational Readiness
*   **SEO Core**: Automated sitemaps, semantic HTML5 structure, and `robots.txt` configuration for search engine and AI discovery.
*   **Clean Navigation**: Audited site-wide routing with absolute internal links and standardized UI components.

---

## 3. Critical Technical Clarifications Needed

### Search Engine Optimization (SEO)
*   **Target Keywords**: What are the top 5-10 primary keywords we want to rank for?
*   **Tracking**: Do we have existing Google Analytics 4 (GA4) or GTM containers, or should we set up new ones?

### Asset Management
*   **Custom Imagery**: Do we have professional photography of the Australian engineering team or local office environments to replace current high-fidelity stock assets?

### Launch Logistics
*   **Timeline**: What is the target date for the official production launch?
*   **Access**: We will need DNS access to point the domain to the new infrastructure for the final go-live.

---

**Prepared by**: Antigravity AI
**Date**: May 1, 2026
