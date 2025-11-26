import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Smart POS | AI-Powered POS System for Kenyan Shops',
  description: 'Transform your retail or wholesale shop with AI automation. Get daily business reports, manage inventory, track profit, and make data-driven decisions. Built for Kenyan businesses.',
  keywords: 'POS system Kenya, retail management, wholesale POS, inventory management, AI business reports, shop management software, Smart POS',
  openGraph: {
    title: 'Smart POS | AI-Powered POS System for Kenyan Shops',
    description: 'Smart retail management with AI automation',
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Smart POS | AI-Powered POS System',
    description: 'Smart retail management with AI automation for Kenyan businesses',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
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
    provider: {
      '@type': 'Organization',
      name: 'Smart POS',
      telephone: '+254741047776',
      email: 'festusmuruga@gmail.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Nairobi',
        addressCountry: 'KE',
      },
    },
  }

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
