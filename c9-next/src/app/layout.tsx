import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-purple-500/30`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
