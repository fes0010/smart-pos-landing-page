'use client'

import React, { useEffect, useRef } from 'react'
import Section from '@/components/ui/Section'
import { Card, CardHeader, CardContent } from '@/components/ui/Card'
import { benefits } from '@/data/content'
import { gsap } from '@/lib/gsap-config'

const iconMap: Record<string, React.ReactNode> = {
  Sparkles: (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  ),
  Lightning: (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  Eye: (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  ),
  Lock: (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  ),
}

const colorMap: Record<string, string> = {
  freedom: 'from-purple-500 to-pink-500',
  convenience: 'from-blue-500 to-cyan-500',
  clarity: 'from-green-500 to-emerald-500',
  safety: 'from-orange-500 to-red-500',
}

export default function Benefits() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in section heading
      gsap.from('.benefits-heading', {
        opacity: 0,
        y: 30,
        duration: 1,
        scrollTrigger: {
          trigger: '.benefits-heading',
          start: 'top 80%',
        },
      })

      // Staggered animation for benefit cards
      gsap.from('.benefit-card', {
        opacity: 0,
        y: 50,
        stagger: 0.15,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.benefits-grid',
          start: 'top 80%',
        },
      })

      // Icon bounce animation when cards enter viewport
      gsap.from('.benefit-icon', {
        scale: 0,
        rotation: 180,
        stagger: 0.15,
        duration: 0.6,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.benefits-grid',
          start: 'top 80%',
        },
      })
    }, sectionRef)

    // Scale animation on hover
    const cards = document.querySelectorAll('.benefit-card')
    cards.forEach((card) => {
      const handleMouseEnter = () => {
        gsap.to(card, {
          scale: 1.05,
          duration: 0.3,
          ease: 'power2.out',
        })
      }

      const handleMouseLeave = () => {
        gsap.to(card, {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out',
        })
      }

      card.addEventListener('mouseenter', handleMouseEnter)
      card.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => ctx.revert()
  }, [])

  return (
    <Section ref={sectionRef} className="bg-gray-50">
      <div className="text-center mb-16">
        <h2 className="benefits-heading text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          What This Means for Your Business
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Real outcomes that transform how you run your shop every single day
        </p>
      </div>

      <div className="benefits-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((benefit) => (
          <Card
            key={benefit.id}
            className="benefit-card text-center hover:shadow-xl transition-shadow duration-300"
          >
            <CardHeader>
              <div className={`benefit-icon w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${colorMap[benefit.id]} p-4 text-white shadow-lg`}>
                {iconMap[benefit.icon]}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-left">
                {benefit.outcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                    <svg className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}
