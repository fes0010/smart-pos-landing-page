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

      // Testimonial entrance animation
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
              {heroContent.headline.split(' ').map((word, index) => {
                // Highlight "Smart" and "POS" with gradient
                const isHighlighted = word === 'Smart' || word === 'POS'
                return (
                  <span
                    key={index}
                    className={`word inline-block mr-2 ${
                      isHighlighted
                        ? 'bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent'
                        : ''
                    }`}
                  >
                    {word}
                  </span>
                )
              })}
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

          {/* Spotlight Testimonial */}
          <div ref={imageRef} className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-lg mx-auto border border-gray-100">
              {/* Quote Icon */}
              <div className="mb-6">
                <svg className="w-12 h-12 text-primary-500 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 text-lg leading-relaxed mb-6">
                &ldquo;Smart POS completely transformed my business. I used to spend 3+ hours daily on manual reports and stock counting. Now the AI handles everything automatically. My profit visibility improved so much that I discovered which products were actually losing money. I even launched an online store that brings in new customers every week!&rdquo;
              </blockquote>

              {/* Highlight Badge */}
              <div className="inline-flex items-center gap-2 bg-success-50 text-success-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Saved 3+ hours daily • Increased profit visibility • Launched online store
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold text-xl">
                  J
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900 text-lg">John</div>
                  <div className="text-gray-600">Smart Traders, Kagio</div>
                </div>
              </div>

              {/* Store Link */}
              <a
                href="https://store.munene.shop"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-2 w-full bg-primary-50 hover:bg-primary-100 text-primary-700 font-medium py-3 px-4 rounded-xl transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Visit John&apos;s Online Store
              </a>
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
