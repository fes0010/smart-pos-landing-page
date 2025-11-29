'use client'

import React, { useEffect, useRef, useState } from 'react'
import Section from '@/components/ui/Section'
import { gsap } from '@/lib/gsap-config'

const faqs = [
  {
    question: 'How long does it take to set up Smart POS?',
    answer: 'We can have your system up and running within 24 hours. This includes installation, initial product setup, and basic training for you and your staff. We handle everything remotely or can visit your shop in Nairobi.',
  },
  {
    question: 'Does Smart POS work with M-Pesa?',
    answer: 'Yes! Smart POS fully integrates with M-Pesa for seamless mobile money payments. You can also accept cash, bank transfers, and offer credit to trusted customers—all tracked in one system.',
  },
  {
    question: 'Can I use Smart POS for both retail and wholesale?',
    answer: 'Absolutely. Our dual-pricing mode lets you set different prices for retail and wholesale customers on the same products. Switch between modes instantly during checkout.',
  },
  {
    question: 'What makes the AI features different from regular reports?',
    answer: 'Unlike static reports, our AI analyzes your data and gives you actionable insights in plain language. It automatically generates daily summaries at closing time, identifies trends, and even answers questions like "Which products made the most profit this week?"',
  },
  {
    question: 'Do I need internet to use Smart POS?',
    answer: 'Smart POS works best with internet for real-time sync and AI features. However, the core POS functions can work offline, and data syncs automatically when you reconnect.',
  },
  {
    question: 'Is my business data secure?',
    answer: 'Yes. All data is encrypted and stored securely. We offer both cloud-hosted and self-hosted options. With self-hosting, you maintain complete control over your data with no vendor lock-in.',
  },
  {
    question: 'Can I try before I buy?',
    answer: 'Yes! We offer a free live demo at demopos.munene.shop where you can explore all features. We also provide a 30-day money-back guarantee on all plans.',
  },
  {
    question: 'What kind of support do you offer?',
    answer: 'All plans include email support. Professional and Premium plans include phone and WhatsApp support. Premium customers get a dedicated account manager and 24/7 priority support.',
  },
  {
    question: 'Do you offer AI consulting for other business needs?',
    answer: 'Yes! Beyond Smart POS, we help businesses understand and implement AI automation for various manual tasks. We cut through the hype and provide practical solutions that actually save you time and money.',
  },
]

export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null)
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        gsap.fromTo('.faq-heading', 
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: '.faq-heading',
              start: 'top 85%',
            },
          }
        )

        gsap.fromTo('.faq-item', 
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.6,
            scrollTrigger: {
              trigger: '.faq-list',
              start: 'top 85%',
            },
          }
        )
      }, sectionRef)

      return () => ctx.revert()
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <Section ref={sectionRef} id="faq" className="bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="faq-heading text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about Smart POS
          </p>
        </div>

        <div className="faq-list space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="faq-item border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA after FAQ */}
        <div className="mt-12 text-center p-8 bg-primary-50 rounded-2xl">
          <p className="text-gray-700 mb-4">Still have questions?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
            >
              Contact Us
            </a>
            <a
              href="https://wa.me/254741047776"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-white font-semibold rounded-lg hover:bg-[#20bd5a] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </Section>
  )
}
