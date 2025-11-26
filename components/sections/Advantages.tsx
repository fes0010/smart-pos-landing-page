'use client'

import React, { useEffect, useRef } from 'react'
import Section from '@/components/ui/Section'
import { advantages } from '@/data/content'
import { gsap } from '@/lib/gsap-config'

const iconComponents: Record<string, React.ReactNode> = {
  Grid: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />,
  DollarSign: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
  Package: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />,
  Shield: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
  Lock: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />,
  Zap: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />,
  TrendingUp: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />,
  BarChart: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />,
  Database: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />,
}

export default function Advantages() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.advantages-heading', {
        opacity: 0,
        y: 30,
        duration: 1,
        scrollTrigger: {
          trigger: '.advantages-heading',
          start: 'top 80%',
        },
      })

      gsap.from('.advantage-item', {
        opacity: 0,
        x: -30,
        stagger: 0.1,
        duration: 0.6,
        scrollTrigger: {
          trigger: '.advantages-list',
          start: 'top 80%',
        },
      })

      // Number counter animation
      const numbers = document.querySelectorAll('.advantage-number')
      numbers.forEach((number, index) => {
        gsap.from(number, {
          textContent: 0,
          duration: 1,
          ease: 'power1.out',
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: number,
            start: 'top 80%',
            once: true,
          },
          onUpdate: function() {
            const current = Math.ceil(this.targets()[0].textContent)
            this.targets()[0].textContent = current
          }
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <Section ref={sectionRef} className="bg-gray-50">
      <div className="text-center mb-16">
        <h2 className="advantages-heading text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Why Choose Smart POS
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Built specifically for Kenyan businesses with features that matter
        </p>
      </div>

      <div className="advantages-list grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {advantages.map((advantage, index) => (
          <div
            key={advantage.id}
            className="advantage-item flex gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <span className="advantage-number text-2xl font-bold text-primary-600">
                  {index + 1}
                </span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-start gap-3 mb-2">
                <div className="w-8 h-8 text-primary-600 flex-shrink-0">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {iconComponents[advantage.icon]}
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{advantage.title}</h3>
              </div>
              <p className="text-gray-600">{advantage.description}</p>
              
              {/* Comparison callout for specific advantages */}
              {(advantage.id === 'one-system' || advantage.id === 'real-profit') && (
                <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 bg-success-50 text-success-700 rounded-full text-sm font-medium">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  vs {advantage.id === 'one-system' ? 'spreadsheets' : 'sales-only systems'}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 text-center">
        <p className="text-lg text-gray-600 mb-6">
          Join hundreds of Kenyan businesses already using Smart POS
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-300"
          >
            View Pricing
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary-600 text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-colors duration-300"
          >
            Request Demo
          </a>
        </div>
      </div>
    </Section>
  )
}
