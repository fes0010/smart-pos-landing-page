'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import { gsap } from '@/lib/gsap-config'

const features = [
  {
    id: 'pos-transaction',
    title: 'Quick Transactions',
    description: 'Process sales in seconds with smart product search and multiple payment options including M-Pesa.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    highlights: ['Fast product search', 'M-Pesa integration', 'Receipt printing'],
  },
  {
    id: 'dual-pricing',
    title: 'Dual Pricing Mode',
    description: 'Seamlessly switch between retail and wholesale pricing for the same products.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
      </svg>
    ),
    highlights: ['Retail prices', 'Wholesale prices', 'Customer-specific pricing'],
  },
  {
    id: 'inventory',
    title: 'Real-Time Inventory',
    description: 'Track stock levels automatically with every sale. Get alerts before you run out.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    highlights: ['Auto stock updates', 'Low stock alerts', 'Restock workflows'],
  },
  {
    id: 'ai-reports',
    title: 'AI Daily Reports',
    description: 'Wake up to comprehensive business insights delivered automatically every day.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    highlights: ['Profit analysis', 'Top products', 'Recommendations'],
  },
]

export default function ProductShowcase() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeTab, setActiveTab] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          '.showcase-heading',
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: '.showcase-heading',
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
    <Section
      ref={sectionRef}
      id="product-demo"
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
    >
      <div className="text-center mb-12">
        <h2 className="showcase-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          See Smart POS in Action
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6">
          Watch how easy it is to manage your business with Smart POS
        </p>
      </div>

      {/* Demo Video */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
          <video
            className="w-full aspect-video"
            controls
            poster="/demo-video-poster.jpg"
            preload="metadata"
          >
            <source src="/demo-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mb-12">
        <p className="text-gray-400 max-w-2xl mx-auto mb-6">
          Ready to try it yourself? Use our demo account to explore all features
        </p>
        
        {/* Demo Credentials */}
        <div className="inline-flex flex-col sm:flex-row gap-4 items-center justify-center bg-gray-800/80 rounded-xl px-6 py-4 mb-8 border border-gray-700">
          <div className="flex items-center gap-2 text-sm">
            <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
            </svg>
            <span className="text-gray-400">Email:</span>
            <code className="bg-gray-700 px-2 py-1 rounded text-primary-300 font-mono">demo@user.com</code>
          </div>
          <div className="hidden sm:block w-px h-6 bg-gray-600" />
          <div className="flex items-center gap-2 text-sm">
            <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span className="text-gray-400">Password:</span>
            <code className="bg-gray-700 px-2 py-1 rounded text-primary-300 font-mono">demo1234</code>
          </div>
        </div>

        <Button
          variant="primary"
          size="lg"
          href="https://demopos.munene.shop"
          target="_blank"
          className="bg-white text-gray-900 hover:bg-gray-100"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Try Live Demo
        </Button>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {features.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeTab === index
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Feature Display */}
        <div className="bg-gray-800/50 rounded-2xl p-8 md:p-12 border border-gray-700">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Content */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  {features[activeTab].icon}
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold">
                    {features[activeTab].title}
                  </h3>
                  <p className="text-gray-300 text-lg mt-2">
                    {features[activeTab].description}
                  </p>
                </div>
              </div>

              <ul className="space-y-3">
                {features[activeTab].highlights.map((highlight, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-primary-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-200">{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4">
                <Button
                  variant="outline"
                  size="md"
                  href="https://demopos.munene.shop"
                  target="_blank"
                  className="border-white text-white hover:bg-white/10"
                >
                  Explore This Feature →
                </Button>
              </div>
            </div>

            {/* Product Screenshot */}
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-600">
              <Image
                src="/images/pospage.png"
                alt={`Smart POS ${features[activeTab].title} interface`}
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
