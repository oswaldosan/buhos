import { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import { jsonLd } from './metadata';

const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Búhos Digital | Internet Experts & Technical Solutions',
  description: 'From concept to deployment, we craft cutting-edge digital solutions that empower businesses to thrive in the modern tech landscape. Experts in Web Development, DevOps, Cloud Solutions, and System Architecture.',
  keywords: 'web development, devops, cloud solutions, system architecture, technical seo, mobile development, digital transformation, software development, Honduras tech, Latin America development',
  openGraph: {
    title: 'Búhos Digital | Internet Experts & Technical Solutions',
    description: 'Transforming Ideas into Digital Reality - Full spectrum digital transformation and technical solutions.',
    url: 'https://buhosdigital.com',
    siteName: 'Búhos Digital',
    images: [
      {
        url: '/og-image.png', // Make sure to add this image to your public folder
        width: 1200,
        height: 630,
        alt: 'Búhos Digital - Technical Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Búhos Digital | Internet Experts',
    description: 'Transforming Ideas into Digital Reality - Full spectrum digital transformation and technical solutions.',
    images: ['/og-image.png'],
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
  verification: {
    google: 'your-google-verification-code', // Add your Google verification code
  },
  alternates: {
    canonical: 'https://buhosdigital.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ffbb00" />
        <meta name="msapplication-TileColor" content="#061c2e" />
        <meta name="theme-color" content="#061c2e" />
      </head>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}