# Implementation Plan

- [x] 1. Update Hero section with shorter headline and unified CTAs
  - [x] 1.1 Update heroContent in data/content.ts with shorter headline
    - Change headline to under 15 words
    - Emphasize AI and profit/time benefits
    - Keep Kenyan market references in subheadline
    - _Requirements: 1.1, 1.2, 1.3_

  - [x] 1.2 Update Hero.tsx CTAs to single demo + WhatsApp
    - Keep "Try Live Demo" as primary CTA
    - Replace "Request Free Demo" with "Chat on WhatsApp" button
    - Add WhatsApp icon to secondary CTA
    - Use pre-filled message for demo request
    - _Requirements: 2.1, 2.2, 2.3_

- [x] 2. Create TrustStack component
  - [x] 2.1 Create new TrustStack.tsx component
    - Display consolidated trust signals in horizontal layout
    - Include: 30-day money-back, FREE installation, 24-hour setup, customer satisfaction
    - Style with badges/icons for visual impact
    - _Requirements: 4.1, 4.2_

  - [x] 2.2 Add TrustStack to page.tsx after Hero
    - Import and position TrustStack component
    - _Requirements: 4.1_

- [x] 3. Update Contact section
  - [x] 3.1 Remove duplicate trust signals from Contact.tsx
    - Remove "Why choose us?" card
    - Keep contact form and contact info
    - _Requirements: 4.3_

  - [x] 3.2 Add prominent WhatsApp button to Contact section
    - Add WhatsApp as primary contact method
    - Use context-specific pre-filled message
    - _Requirements: 3.2, 3.3_

- [x] 4. Add WhatsApp to Pricing section
  - [x] 4.1 Add WhatsApp quick-question button to PricingPlans.tsx
    - Position below pricing cards
    - Use pricing-specific pre-filled message
    - Style as prominent but secondary to main CTAs
    - _Requirements: 3.1, 3.3_

- [x] 5. Add product images to feature sections
  - [x] 5.1 Update AIFeatures.tsx with product screenshots
    - Replace generic SVG icons with product images
    - Use images from public/images/ directory
    - Add appropriate alt text for accessibility
    - _Requirements: 6.1, 6.3_

  - [x] 5.2 Update ProductShowcase.tsx with product screenshot
    - Add pospage.png as main showcase image
    - Display alongside feature descriptions
    - _Requirements: 6.2, 6.3_

- [x] 6. Final review
  - Verify all WhatsApp links have correct pre-filled messages
  - Verify product images load correctly
  - Test responsive layout on mobile
  - Confirm no duplicate trust signals between sections
