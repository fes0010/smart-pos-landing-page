'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { TextPlugin } from 'gsap/TextPlugin'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, TextPlugin)

  // Global GSAP defaults
  gsap.defaults({
    ease: 'power2.out',
    duration: 0.8,
  })

  // ScrollTrigger defaults
  ScrollTrigger.defaults({
    toggleActions: 'play none none reverse',
    start: 'top 80%',
    end: 'bottom 20%',
  })
}

export { gsap, ScrollTrigger, ScrollToPlugin, TextPlugin }
