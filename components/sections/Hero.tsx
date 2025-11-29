'use client'

import React, { useEffect, useRef } from 'react'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import { heroContent } from '@/data/content'
import { gsap } from '@/lib/gsap-config'

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const subheadlineRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect for background layers
      gsap.to('.hero-layer-1', {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      })

      gsap.to('.hero-layer-2', {
        yPercent: 50,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      })

      // Staggered word reveal animation for headline
      const words = headlineRef.current?.querySelectorAll('.word')
      if (words && words.length > 0) {
        gsap.fromTo(
          Array.from(words),
          {
            opacity: 0,
            y: 50,
            rotationX: -90,
          },
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            transformOrigin: 'top center',
            stagger: 0.1,
            duration: 1,
            ease: 'back.out(1.7)',
          }
        )
      }

      // Fade in subheadline
      if (subheadlineRef.current) {
        gsap.fromTo(
          subheadlineRef.current,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 0.5,
            ease: 'power2.out',
          }
        )
      }

      // Fade in CTAs
      if (ctaRef.current?.children) {
        gsap.fromTo(
          Array.from(ctaRef.current.children),
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            stagger: 0.2,
            duration: 0.8,
            delay: 0.8,
            ease: 'power2.out',
          }
        )
      }

      // Floating animation for hero image
      gsap.to('.floating-shape', {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })

      // Image entrance animation
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          {
            opacity: 0,
            scale: 0.8,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 1.2,
            delay: 0.3,
            ease: 'power2.out',
          }
        )
      }
    }, heroRef)

    // Magnetic button effect
    const magneticBtns = document.querySelectorAll('.magnetic-btn')
    magneticBtns.forEach((btn) => {
      const handleMouseMove = (e: MouseEvent) => {
        const rect = btn.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        const deltaX = (e.clientX - centerX) * 0.3
        const deltaY = (e.clientY - centerY) * 0.3

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
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-blue-50 pt-20"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="hero-layer-1 absolute top-20 right-10 w-72 h-72 bg-primary-100 rounded-full blur-3xl opacity-30" />
        <div className="hero-layer-2 absolute bottom-20 left-10 w-96 h-96 bg-accent-100 rounded-full blur-3xl opacity-20" />
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-20">
          {/* Content Column */}
          <div className="space-y-8">
            <h1
              ref={headlineRef}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
            >
              {heroContent.headline.split(' ').map((word, index) => (
                <span key={index} className="word inline-block mr-2">
                  {word}
                </span>
              ))}
            </h1>

            <p
              ref={subheadlineRef}
              className="hero-subtitle text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl"
            >
              {heroContent.subheadline}
            </p>

            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 relative z-20">
              <Button
                variant="primary"
                size="lg"
                href="https://demopos.munene.shop"
                target="_blank"
                className="magnetic-btn bg-primary-600 text-white hover:bg-primary-700 shadow-xl"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Try Live Demo
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="#contact"
                className="border-2 border-primary-600 text-primary-600 bg-white hover:bg-primary-50"
              >
                Request Free Demo
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 pt-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-success-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>FREE Installation</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-success-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Setup in 24 Hours</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-success-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>No Credit Card Required</span>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div ref={imageRef} className="relative">
            <div className="floating-shape relative aspect-square max-w-lg mx-auto">
              {/* Placeholder for hero image/illustration */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-700 rounded-3xl shadow-2xl flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <svg className="w-32 h-32 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <p className="text-xl font-semibold">AI-Powered POS System</p>
                  <p className="text-sm opacity-90 mt-2">Smart Business Management</p>
                </div>
              </div>
              
              {/* Floating stats cards */}
              <div className="absolute -top-4 -left-4 bg-white rounded-xl shadow-lg p-4 floating-shape">
                <div className="text-sm text-gray-600">Daily Reports</div>
                <div className="text-2xl font-bold text-primary-600">Automated</div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 floating-shape">
                <div className="text-sm text-gray-600">Setup Time</div>
                <div className="text-2xl font-bold text-success-600">24 Hours</div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
