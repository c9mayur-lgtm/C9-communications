import type { Metadata } from "next";
import { Geist, Geist_Mono, Syne, DM_Sans } from "next/font/google";
import { headers } from "next/headers";
import { Navbar } from "@/components/layout/Navbar";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { WpFooter } from "@/components/layout/WpFooter";
import { WpFloatingContact } from "@/components/wordpress/WpFloatingContact";
import { BusinessAdvisor } from "@/components/wordpress/BusinessAdvisor";
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
  metadataBase: new URL('https://c9communications.com.au'),
  title: {
    default: "C9 Communications | Business NBN, Cloud Voice & Managed IT",
    template: "%s | C9 Communications Australia"
  },
  description: "Australia's trusted partner for business nbn®, C9X cloud phone systems, and enterprise managed IT services. 99.99% uptime SLA with 24/7 local engineering support.",
  keywords: ["Business NBN", "Cloud Phone System", "Managed IT Services", "C9X", "Australian Telco"],
  authors: [{ name: "C9 Communications" }],
  creator: "C9 Communications",
  publisher: "C9 Communications",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://c9communications.com.au",
    siteName: "C9 Communications",
    title: "C9 Communications | Modern Telco & IT Solutions",
    description: "Secure, fast, and reliable business connectivity and IT services powered by Australian experts.",
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
    description: "Secure, fast, and reliable business connectivity and IT services.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const currentPath = headersList.get('x-pathname') || '';
  
  // List of paths that render their own Navbar/Breadcrumbs/Footer to avoid doubling
  const pagesWithSelfNavigation = [
    '/managed-it/helpdesk-support',
    '/managed-it/outsourcing'
  ];

  const hasSelfNav = pagesWithSelfNavigation.includes(currentPath);

  return (
    <html lang="en-AU">
      <body className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} ${dmSans.variable} antialiased selection:bg-purple-500/30`}>
        {!hasSelfNav && <Navbar />}
        {!hasSelfNav && <Breadcrumbs />}
        {children}
        {!hasSelfNav && <WpFooter />}
        <WpFloatingContact />
        <BusinessAdvisor />
      </body>
    </html>
  );
}
