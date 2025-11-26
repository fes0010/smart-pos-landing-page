'use client'

import React, { useEffect, useRef } from 'react'
import Section from '@/components/ui/Section'
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { pricingPlans } from '@/data/pricing'
import { formatPrice } from '@/lib/utils'
import { gsap } from '@/lib/gsap-config'

export default function PricingPlans() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in section heading
      gsap.from('.pricing-heading', {
        opacity: 0,
        y: 30,
        duration: 1,
        scrollTrigger: {
          trigger: '.pricing-heading',
          start: 'top 80%',
        },
      })

      // Staggered entrance animation for pricing cards
      gsap.from('.pricing-card', {
        opacity: 0,
        y: 60,
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.pricing-grid',
          start: 'top 80%',
        },
      })

      // Pulse animation for "Most Popular" badge
      gsap.to('.popular-badge', {
        scale: 1.05,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    }, sectionRef)

    // 3D card tilt effect on hover
    const cards = document.querySelectorAll('.pricing-card')
    cards.forEach((card) => {
      const handleMouseMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        
        const centerX = rect.width / 2
        const centerY = rect.height / 2
        
        const rotateX = (y - centerY) / 20
        const rotateY = (centerX - x) / 20
        
        gsap.to(card, {
          rotationX: rotateX,
          rotationY: rotateY,
          transformPerspective: 1000,
          duration: 0.3,
          ease: 'power2.out',
        })

        // Add glow effect
        gsap.to(card, {
          boxShadow: '0 20px 60px rgba(59, 130, 246, 0.3)',
          duration: 0.3,
        })
      }

      const handleMouseLeave = () => {
        gsap.to(card, {
          rotationX: 0,
          rotationY: 0,
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
          duration: 0.5,
          ease: 'power2.out',
        })
      }

      card.addEventListener('mousemove', handleMouseMove as EventListener)
      card.addEventListener('mouseleave', handleMouseLeave)
    })

    // Magnetic effect for CTA buttons
    const magneticBtns = document.querySelectorAll('.pricing-cta')
    magneticBtns.forEach((btn) => {
      const handleMouseMove = (e: MouseEvent) => {
        const rect = btn.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        const deltaX = (e.clientX - centerX) * 0.2
        const deltaY = (e.clientY - centerY) * 0.2

        gsap.to(btn, {
          x: deltaX,
          y: deltaY,
          duration: 0.3,
          ease: 'power2.out',
        })
      }

      const handleMouseLeave = () => {
        gsap.to(btn, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: 'elastic.out(1, 0.3)',
        })
      }

      btn.addEventListener('mousemove', handleMouseMove as EventListener)
      btn.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => ctx.revert()
  }, [])

  return (
    <Section ref={sectionRef} id="pricing" className="bg-white">
      <div className="text-center mb-16">
        <h2 className="pricing-heading text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6">
          All plans include FREE installation and setup support
        </p>
        <div className="inline-flex items-center gap-2 bg-success-50 text-success-700 px-6 py-3 rounded-full font-semibold">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          30-Day Money-Back Guarantee
        </div>
      </div>

      <div className="pricing-grid grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {pricingPlans.map((plan) => (
          <Card
            key={plan.id}
            className={`pricing-card relative ${
              plan.highlighted
                ? 'border-2 border-primary-500 shadow-2xl scale-105'
                : 'border border-gray-200'
            }`}
          >
            {plan.badge && (
              <div className="popular-badge absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                {plan.badge}
              </div>
            )}

            <CardHeader className="text-center pt-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {plan.name}
              </h3>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              
              <div className="mb-6">
                {typeof plan.price === 'number' ? (
                  <>
                    <div className="text-4xl md:text-5xl font-bold text-gray-900">
                      {formatPrice(plan.price, plan.currency)}
                    </div>
                    <div className="text-gray-600 mt-2">per {plan.period}</div>
                  </>
                ) : (
                  <div className="text-4xl md:text-5xl font-bold text-gray-900">
                    Custom
                  </div>
                )}
              </div>
            </CardHeader>

            <CardContent>
              <ul className="space-y-3">
                {plan.features.map((feature, index) => (
                  <li
                    key={index}
                    className={`flex items-start gap-3 text-sm ${
                      feature.endsWith(':') ? 'font-semibold text-gray-900 mt-4' : 'text-gray-700'
                    }`}
                  >
                    {!feature.endsWith(':') && (
                      <svg className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    )}
                    <span className={!feature.endsWith(':') ? '' : 'ml-8'}>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter>
              <Button
                variant={plan.highlighted ? 'primary' : 'outline'}
                size="lg"
                href={plan.cta.href}
                className="pricing-cta w-full"
              >
                {plan.cta.text}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Additional trust signals */}
      <div className="mt-16 text-center">
        <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>No Setup Fees</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Cancel Anytime</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>24/7 Support</span>
          </div>
        </div>
      </div>
    </Section>
  )
}
