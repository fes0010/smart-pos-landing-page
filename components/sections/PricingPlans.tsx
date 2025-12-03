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

      {/* WhatsApp Quick Question */}
      <div className="mt-12 text-center">
        <p className="text-gray-600 mb-4">Have questions about which plan is right for you?</p>
        <a
          href="https://wa.me/254741047776?text=Hi%2C%20I%20have%20a%20question%20about%20Smart%20POS%20pricing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#20bd5a] transition-colors"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          Ask a Quick Question on WhatsApp
        </a>
      </div>

      {/* Additional trust signals */}
      <div className="mt-10 text-center">
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
