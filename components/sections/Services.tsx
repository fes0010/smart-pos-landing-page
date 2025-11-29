'use client'

import React, { useEffect, useRef } from 'react'
import Section from '@/components/ui/Section'
import { Card, CardHeader, CardContent } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { gsap } from '@/lib/gsap-config'

const services = [
  {
    id: 'smart-pos',
    title: 'Smart POS System',
    description: 'AI-powered point of sale and inventory management for retail and wholesale businesses.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    features: [
      'Automated daily business reports',
      'Dual retail/wholesale pricing',
      'Real-time inventory tracking',
      'M-Pesa integration',
    ],
    cta: { text: 'Try Demo', href: 'https://demopos.munene.shop' },
    highlighted: true,
  },
  {
    id: 'ai-consultation',
    title: 'AI & Automation Consulting',
    description: 'Cut through the AI hype. Get practical guidance on automating your manual business tasks.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    features: [
      'AI readiness assessment',
      'Process automation strategy',
      'Tool selection & implementation',
      'Team training & support',
    ],
    cta: { text: 'Book Consultation', href: '#contact' },
    highlighted: false,
  },
  {
    id: 'custom-automation',
    title: 'Custom Automation Solutions',
    description: 'Bespoke automation systems tailored to your specific business workflows and challenges.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    features: [
      'Workflow analysis & optimization',
      'Custom integrations',
      'Report automation',
      'Ongoing maintenance',
    ],
    cta: { text: 'Discuss Your Project', href: '#contact' },
    highlighted: false,
  },
]

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
            stagger: 0.2,
            duration: 0.8,
            scrollTrigger: {
              trigger: '.services-grid',
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
      <div className="text-center mb-16">
        <h2 className="services-heading text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          How We Help Your Business
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          From ready-to-use POS systems to custom AI solutions — we help Kenyan businesses 
          automate manual work and make smarter decisions
        </p>
      </div>

      <div className="services-grid grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service) => (
          <Card
            key={service.id}
            className={`service-card hover:shadow-xl transition-all duration-300 ${
              service.highlighted ? 'border-2 border-primary-500 relative' : ''
            }`}
          >
            {service.highlighted && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary-600 text-white px-4 py-1 rounded-full text-xs font-bold">
                FLAGSHIP PRODUCT
              </div>
            )}
            <CardHeader className="text-center pt-8">
              <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                service.highlighted 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-primary-100 text-primary-600'
              }`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                    <svg className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={service.highlighted ? 'primary' : 'outline'}
                size="md"
                href={service.cta.href}
                className="w-full"
                target={service.cta.href.startsWith('http') ? '_blank' : undefined}
              >
                {service.cta.text}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}
