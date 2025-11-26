'use client'

import React, { useEffect, useRef } from 'react'
import Section from '@/components/ui/Section'
import { Card, CardHeader, CardContent } from '@/components/ui/Card'
import ContactForm from '@/components/forms/ContactForm'
import { contactInfo } from '@/data/contact'
import { gsap } from '@/lib/gsap-config'

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-heading', {
        opacity: 0,
        y: 30,
        duration: 1,
        scrollTrigger: {
          trigger: '.contact-heading',
          start: 'top 80%',
        },
      })

      gsap.from('.contact-card', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.contact-card',
          start: 'top 80%',
        },
      })

      gsap.from('.contact-info-item', {
        opacity: 0,
        x: -30,
        stagger: 0.1,
        duration: 0.6,
        scrollTrigger: {
          trigger: '.contact-info',
          start: 'top 80%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <Section ref={sectionRef} id="contact" className="bg-gray-50">
      <div className="text-center mb-16">
        <h2 className="contact-heading text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Get Started Today
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Request a free demo and see how AI can transform your business
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Form */}
        <Card className="contact-card">
          <CardHeader>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Send us a message
            </h3>
            <p className="text-gray-600">
              Fill out the form and we'll get back to you within 24 hours
            </p>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="contact-info space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Contact Information
            </h3>
            <div className="space-y-6">
              {/* Phone */}
              <div className="contact-info-item flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                  <a href={`tel:${contactInfo.phone}`} className="text-primary-600 hover:text-primary-700 transition-colors">
                    {contactInfo.phone}
                  </a>
                  <p className="text-sm text-gray-600 mt-1">WhatsApp available</p>
                </div>
              </div>

              {/* Email */}
              <div className="contact-info-item flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                  <a href={`mailto:${contactInfo.email}`} className="text-primary-600 hover:text-primary-700 transition-colors break-all">
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="contact-info-item flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Location</h4>
                  <p className="text-gray-600">{contactInfo.location}</p>
                </div>
              </div>

              {/* Hours */}
              <div className="contact-info-item flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Business Hours</h4>
                  <p className="text-gray-600">{contactInfo.hours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Signals */}
          <Card className="bg-primary-50 border-primary-100">
            <CardContent className="p-6">
              <h4 className="font-semibold text-gray-900 mb-4">Why choose us?</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <svg className="w-5 h-5 text-success-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>FREE installation & training</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <svg className="w-5 h-5 text-success-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Setup in 24 hours</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <svg className="w-5 h-5 text-success-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>30-day money-back guarantee</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <svg className="w-5 h-5 text-success-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Dedicated support team</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  )
}
