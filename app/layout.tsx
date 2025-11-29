import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Smart POS Kenya | #1 AI-Powered POS System for Shops & Dukas',
  description: 'Smart POS is Kenya\'s leading AI-powered point of sale system. Automated daily reports, real-time inventory, M-Pesa integration, dual retail/wholesale pricing. Free demo available. Trusted by 50+ shops in Nairobi, Mombasa, Nakuru, Kagio & beyond.',
  keywords: 'Smart POS, Smart POS Kenya, POS system Kenya, POS system Nairobi, best POS Kenya, duka management software, wholesale shop software Kenya, retail management Kenya, M-Pesa POS integration, inventory management Kenya, AI business reports, shop management software, point of sale Kenya, business automation Kenya, AI consultation Kenya, POS Mombasa, POS Nakuru, shop software Kenya, retail software Kenya, wholesale POS Kenya',
  openGraph: {
    title: 'Smart POS Kenya | AI-Powered POS for Shops & Dukas',
    description: 'Kenya\'s smartest POS system with AI automation. Daily reports, M-Pesa, inventory tracking. Try free demo!',
    locale: 'en_KE',
    type: 'website',
    url: 'https://munene.shop',
    siteName: 'Smart POS Kenya',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Smart POS Kenya | AI-Powered POS System',
    description: 'Kenya\'s #1 AI-powered POS for retail & wholesale. Free demo available!',
  },
  alternates: {
    canonical: 'https://munene.shop',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'google237cfd5fe1fced1f',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Software Application Schema
  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Smart POS',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, iOS, Android',
    description: 'AI-powered point of sale and inventory management system for retail and wholesale businesses in Kenya',
    offers: {
      '@type': 'Offer',
      price: '1700',
      priceCurrency: 'KES',
      priceValidUntil: '2025-12-31',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '150',
    },
  }

  // Local Business Schema for Google Maps
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://munene.shop',
    name: 'Smart POS Kenya',
    description: 'AI-powered POS system and business automation solutions for Kenyan shops, dukas, and wholesale businesses.',
    url: 'https://munene.shop',
    telephone: '+254741047776',
    email: 'festusmuruga@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Nairobi',
      addressLocality: 'Nairobi',
      addressRegion: 'Nairobi County',
      postalCode: '00100',
      addressCountry: 'KE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -1.2921,
      longitude: 36.8219,
    },
    areaServed: [
      { '@type': 'City', name: 'Nairobi' },
      { '@type': 'City', name: 'Mombasa' },
      { '@type': 'City', name: 'Nakuru' },
      { '@type': 'City', name: 'Kisumu' },
      { '@type': 'City', name: 'Eldoret' },
      { '@type': 'Country', name: 'Kenya' },
    ],
    priceRange: 'KES 1,700 - KES 5,000/month',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '20:00',
    },
    sameAs: [
      'https://wa.me/254741047776',
    ],
    image: 'https://munene.shop/og-image.png',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '50',
    },
  }

  // Organization Schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Smart POS Kenya',
    url: 'https://munene.shop',
    logo: 'https://munene.shop/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+254741047776',
      contactType: 'sales',
      areaServed: 'KE',
      availableLanguage: ['English', 'Swahili'],
    },
  }

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
