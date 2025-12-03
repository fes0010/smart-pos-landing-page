'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import Section from '@/components/ui/Section'
import { Card, CardHeader, CardContent } from '@/components/ui/Card'
import { aiFeatures } from '@/data/content'
import { gsap } from '@/lib/gsap-config'

const iconMap: Record<string, React.ReactNode> = {
  DocumentReport: (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  Chat: (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  ),
  Shield: (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
}

export default function AIFeatures() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in section heading
      gsap.from('.ai-features-heading', {
        opacity: 0,
        y: 30,
        duration: 1,
        scrollTrigger: {
          trigger: '.ai-features-heading',
          start: 'top 80%',
        },
      })

      // Staggered animation for feature cards
      gsap.from('.ai-feature-card', {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.ai-features-grid',
          start: 'top 80%',
        },
      })
    }, sectionRef)

    // 3D card tilt effect on hover
    const cards = document.querySelectorAll('.ai-feature-card')
    cards.forEach((card) => {
      const handleMouseMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        
        const centerX = rect.width / 2
        const centerY = rect.height / 2
        
        const rotateX = (y - centerY) / 10
        const rotateY = (centerX - x) / 10
        
        gsap.to(card, {
          rotationX: rotateX,
          rotationY: rotateY,
          transformPerspective: 1000,
          duration: 0.3,
          ease: 'power2.out',
        })
      }

      const handleMouseLeave = () => {
        gsap.to(card, {
          rotationX: 0,
          rotationY: 0,
          duration: 0.5,
          ease: 'power2.out',
        })
      }

      card.addEventListener('mousemove', handleMouseMove as EventListener)
      card.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => ctx.revert()
  }, [])

  return (
    <Section ref={sectionRef} id="features" className="bg-white">
      <div className="text-center mb-16">
        <h2 className="ai-features-heading text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          AI That Works for You 24/7
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Automated reports, conversational insights, and complete transparency—all powered by AI
        </p>
      </div>

      {/* Product Flyer Showcase */}
      <div className="mb-12 max-w-2xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/images/flyer.png"
            alt="Smart POS - AI-powered point of sale system for Kenyan businesses"
            width={800}
            height={1000}
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="ai-features-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {aiFeatures.map((feature) => (
          <Card
            key={feature.id}
            className="ai-feature-card hover:shadow-xl transition-shadow duration-300"
            hover
          >
            <CardHeader>
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 mb-4">
                {iconMap[feature.icon]}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {feature.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                    <svg className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              
              {feature.exampleQuestions && (
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="text-sm font-semibold text-gray-900 mb-3">Example questions:</p>
                  <div className="space-y-2">
                    {feature.exampleQuestions.map((question, index) => (
                      <p key={index} className="text-sm text-gray-600 italic">
                        {question}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}
