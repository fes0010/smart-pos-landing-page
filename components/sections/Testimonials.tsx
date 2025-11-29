'use client'

import React, { useEffect, useRef } from 'react'
import Section from '@/components/ui/Section'
import { Card, CardContent } from '@/components/ui/Card'
import { gsap } from '@/lib/gsap-config'

const testimonials = [
  {
    id: 'john-smart-traders',
    name: 'John',
    business: 'Smart Traders',
    location: 'Kagio',
    quote: 'Smart POS transformed how I run my shop. The daily AI reports save me hours of manual work, and I can now see exactly where my profit is coming from. The dual pricing for retail and wholesale customers is a game-changer.',
    rating: 5,
    storeLink: 'https://store.munene.shop',
    highlight: 'Saved 3+ hours daily on manual reporting',
  },
  {
    id: 'placeholder-2',
    name: 'Mary W.',
    business: 'Mama Mary Wholesale',
    location: 'Nakuru',
    quote: 'I was skeptical about AI at first, but the conversational assistant is incredible. I just ask "what sold best this week?" and get instant answers. My staff loves how easy it is to use.',
    rating: 5,
    highlight: 'Reduced stock-outs by 60%',
  },
  {
    id: 'placeholder-3',
    name: 'Peter K.',
    business: 'PK Electronics',
    location: 'Mombasa',
    quote: 'The credit management feature alone paid for the subscription. I now have clear visibility on who owes what, and the automated reminders have improved my collections significantly.',
    rating: 5,
    highlight: 'Improved debt collection by 40%',
  },
]

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        gsap.fromTo('.testimonials-heading', 
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: '.testimonials-heading',
              start: 'top 85%',
            },
          }
        )

        gsap.fromTo('.testimonial-card', 
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.2,
            duration: 0.8,
            scrollTrigger: {
              trigger: '.testimonials-grid',
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
    <Section ref={sectionRef} id="testimonials" className="bg-gray-50">
      <div className="text-center mb-16">
        <h2 className="testimonials-heading text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Trusted by Kenyan Business Owners
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          See how Smart POS is helping shops across Kenya save time and grow profits
        </p>
      </div>

      <div className="testimonials-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial) => (
          <Card
            key={testimonial.id}
            className="testimonial-card hover:shadow-xl transition-all duration-300"
          >
            <CardContent className="p-6">
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Highlight Badge */}
              {testimonial.highlight && (
                <div className="inline-flex items-center gap-2 bg-success-50 text-success-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {testimonial.highlight}
                </div>
              )}

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.business}</div>
                  <div className="text-xs text-gray-500">{testimonial.location}</div>
                </div>
              </div>

              {/* Store Link */}
              {testimonial.storeLink && (
                <a
                  href={testimonial.storeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700 font-medium"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  View their online store
                </a>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Stats Bar */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
        <div>
          <div className="text-3xl md:text-4xl font-bold text-primary-600">50+</div>
          <div className="text-gray-600 text-sm">Active Shops</div>
        </div>
        <div>
          <div className="text-3xl md:text-4xl font-bold text-primary-600">10K+</div>
          <div className="text-gray-600 text-sm">Daily Transactions</div>
        </div>
        <div>
          <div className="text-3xl md:text-4xl font-bold text-primary-600">98%</div>
          <div className="text-gray-600 text-sm">Customer Satisfaction</div>
        </div>
        <div>
          <div className="text-3xl md:text-4xl font-bold text-primary-600">24hr</div>
          <div className="text-gray-600 text-sm">Setup Time</div>
        </div>
      </div>
    </Section>
  )
}
