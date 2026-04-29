import type { Metadata } from "next";
import { Geist, Geist_Mono, Syne, DM_Sans } from "next/font/google";
import { ConditionalHeader } from "@/components/layout/ConditionalHeader";
import { ConditionalFooter } from "@/components/layout/ConditionalFooter";
import { WpFloatingContact } from "@/components/wordpress/WpFloatingContact";
import { BusinessAdvisor } from "@/components/wordpress/BusinessAdvisor";
import { CookieConsent } from "@/components/layout/CookieConsent";
import { InquiryProvider } from "@/components/context/InquiryContext";
import { AudienceProvider } from "@/components/context/AudienceContext";
import { AudienceSwitcher } from "@/components/layout/AudienceSwitcher";
import { NextStepStrip } from "@/components/layout/NextStepStrip";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://c9-communications.vercel.app'),
  title: {
    default: "C9 Communications | Small Business nbn™, Cloud Voice & Managed IT",
    template: "%s | C9 Communications Australia"
  },
  description: "C9 Communications delivers enterprise-grade managed IT, network, and security services for multi-site organisations across Australia, backed by 24/7 operations, SLA-driven support, and proven large-scale deployments.",
  keywords: ["Small Business nbn™", "Cloud Phone System", "Managed IT Services", "C9 phone system", "Australian Telco", "Business Connectivity", "IT Governance"],
  icons: {
    icon: '/favicon.ico',
  },
  authors: [{ name: "C9 Communications" }],
  creator: "C9 Communications",
  publisher: "C9 Communications",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://c9-communications.vercel.app',
  },
  verification: {
    google: 'verification_token_here', // User can replace this later
    yandex: 'yandex',
    yahoo: 'yahoo',
    other: {
      me: ['support@c9communications.com.au'],
    },
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://c9-communications.vercel.app",
    siteName: "C9 Communications",
    title: "C9 Communications | Modern Telco & IT Solutions",
    description: "C9 Communications delivers enterprise-grade managed IT, network, and security services for multi-site organisations across Australia.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "C9 Communications - Modern Business Telco",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "C9 Communications | Modern Telco & IT Solutions",
    description: "Enterprise-grade managed IT, network, and security services for multi-site organisations across Australia.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const revalidate = 0;
export const dynamic = 'force-dynamic';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU">
      <body className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} ${dmSans.variable} antialiased selection:bg-purple-500/30`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "C9 Communications",
              "url": "https://c9-communications.vercel.app",
              "logo": "https://c9-communications.vercel.app/images/c9_logo.svg",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+61-1300-999-999",
                "contactType": "customer service",
                "areaServed": "AU",
                "availableLanguage": "en"
              },
              "sameAs": [
                "https://www.linkedin.com/company/c9-communications",
                "https://twitter.com/c9communications"
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "C9 Communications",
              "url": "https://c9-communications.vercel.app",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://c9-communications.vercel.app/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        <AudienceProvider>
          <InquiryProvider>
            <div className="flex flex-col min-h-screen">
              <ConditionalHeader />
              <div className="flex-1">
                {children}
              </div>
              <NextStepStrip />
              <ConditionalFooter />
            </div>
            <WpFloatingContact />
            <BusinessAdvisor />
            <CookieConsent />
            <Analytics />
          </InquiryProvider>
        </AudienceProvider>
      </body>
    </html>
  );
}
