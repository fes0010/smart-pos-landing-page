'use client'

import React, { useEffect, useRef } from 'react'
import Section from '@/components/ui/Section'
import { Card, CardHeader, CardContent } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { gsap } from '@/lib/gsap-config'

const smartPOS = {
  id: 'smart-pos',
  title: 'Smart POS System',
  description: 'AI-powered point of sale, inventory, and business management for all types of businesses.',
  icon: (
    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  features: [
    'AI-powered daily reports & insights',
    'Debt & credit management',
    'Order tracking with AI',
    'Customer database',
    'Real-time inventory tracking',
    'M-Pesa integration',
    'Dual retail/wholesale pricing',
    'Complete audit trails',
  ],
  businessTypes: [
    'Minimarts',
    'Retail & Wholesale',
    'Agrovets',
    'Chemists',
    'Wines & Spirits',
    'Restaurants',
  ],
  cta: { text: 'Try Demo', href: 'https://demopos.munene.shop' },
}

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        gsap.fromTo('.services-heading', 
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: '.services-heading',
              start: 'top 85%',
            },
          }
        )

        gsap.fromTo('.service-card', 
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: '.service-card',
              start: 'top 85%',
            },
          }
        )
      }, sectionRef)

      return () => ctx.revert()
    }, 100)

    return () => clearTimeout(timer)
  }, [])


  return (
    <Section ref={sectionRef} id="services" className="bg-white">
      <div className="text-center mb-12">
        <h2 className="services-heading text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Our Flagship Product
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Everything you need to run your shop smarter — sales, inventory, and insights in one system
        </p>
      </div>

      <Card className="service-card max-w-5xl mx-auto border-2 border-primary-500 relative hover:shadow-xl transition-all duration-300">
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary-600 text-white px-4 py-1 rounded-full text-xs font-bold">
          FLAGSHIP PRODUCT
        </div>
        
        <div className="md:flex">
          <CardHeader className="text-center md:text-left md:w-1/2 pt-8 md:pt-6">
            <div className="w-24 h-24 mx-auto md:mx-0 mb-4 rounded-2xl flex items-center justify-center bg-primary-600 text-white">
              {smartPOS.icon}
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              {smartPOS.title}
            </h3>
            <p className="text-gray-600 mb-4">{smartPOS.description}</p>
            
            {/* Business Types */}
            <div className="flex flex-wrap gap-2">
              {smartPOS.businessTypes.map((type, index) => (
                <span key={index} className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-medium">
                  {type}
                </span>
              ))}
            </div>
          </CardHeader>
          
          <CardContent className="md:w-1/2 md:pt-6">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {smartPOS.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                  <svg className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button
              variant="primary"
              size="lg"
              href={smartPOS.cta.href}
              className="w-full md:w-auto"
              target="_blank"
            >
              {smartPOS.cta.text}
            </Button>
          </CardContent>
        </div>
      </Card>

      {/* De-emphasized other services mention */}
      <div className="text-center mt-10 text-gray-500">
        <p className="text-sm">
          Looking for custom AI solutions or automation consulting?{' '}
          <a href="#contact" className="text-primary-600 hover:text-primary-700 font-medium underline">
            Let&apos;s talk →
          </a>
        </p>
      </div>
    </Section>
  )
}
