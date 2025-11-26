'use client'

import React, { useEffect, useRef } from 'react'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { gsap } from '@/lib/gsap-config'

export default function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pulsing glow effect for CTA buttons
      gsap.to('.cta-glow', {
        boxShadow: '0 0 40px rgba(255, 255, 255, 0.5), 0 0 80px rgba(59, 130, 246, 0.3)',
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })

      // Floating animation for background shapes
      gsap.to('.floating-shape-1', {
        y: -30,
        x: 20,
        rotation: 360,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })

      gsap.to('.floating-shape-2', {
        y: 20,
        x: -30,
        rotation: -360,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })

      // Staggered fade-in for trust indicators
      gsap.from('.trust-indicator', {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.6,
        scrollTrigger: {
          trigger: '.trust-indicators',
          start: 'top 80%',
        },
      })

      // Magnetic effect for CTA buttons
      const magneticBtns = document.querySelectorAll('.final-cta-btn')
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
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800"
    >
      {/* Background floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-shape-1 absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="floating-shape-2 absolute bottom-20 left-20 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl" />
        
        {/* Decorative grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Shop?
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-12">
            Get started today with FREE installation and setup support
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              variant="primary"
              size="lg"
              href="#contact"
              className="final-cta-btn cta-glow bg-white text-primary-700 hover:bg-gray-50 shadow-2xl"
            >
              Request Free Demo
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="tel:+254741047776"
              className="final-cta-btn border-2 border-white text-white hover:bg-white/10"
            >
              Talk to Sales
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="trust-indicators flex flex-wrap justify-center gap-6 md:gap-8 text-white">
            <div className="trust-indicator flex items-center gap-2">
              <svg className="w-6 h-6 text-success-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">FREE Installation & Training</span>
            </div>
            <div className="trust-indicator flex items-center gap-2">
              <svg className="w-6 h-6 text-success-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">30-Day Money-Back Guarantee</span>
            </div>
            <div className="trust-indicator flex items-center gap-2">
              <svg className="w-6 h-6 text-success-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">No Credit Card Required</span>
            </div>
            <div className="trust-indicator flex items-center gap-2">
              <svg className="w-6 h-6 text-success-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">Setup in 24 Hours</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
