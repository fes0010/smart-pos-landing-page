# Design Document

## Overview

Phase 2 CRO improvements focusing on: shorter headline, unified CTAs, WhatsApp prominence, consolidated trust signals, distinct section content, and real product images. These changes target conversion friction points identified in the expert roast.

## Architecture

No architectural changes. This is a content, layout, and image update to existing React components plus one new TrustStack component.

## Components and Interfaces

### Hero.tsx Changes
- Shorten headline to under 15 words
- Replace dual CTAs with: "Try Live Demo" (primary) + "Chat on WhatsApp" (secondary)
- Update WhatsApp CTA to use pre-filled demo request message

### New TrustStack.tsx Component
- Create new section component to display consolidated trust signals
- Position after Hero section in page.tsx
- Include: 30-day money-back guarantee, FREE installation, 24-hour setup, customer satisfaction

### Contact.tsx Changes
- Remove "Why choose us?" card that repeats trust signals
- Make WhatsApp a primary contact method with prominent button
- Add context-specific pre-filled WhatsApp message

### PricingPlans.tsx Changes
- Add WhatsApp quick-question button below pricing cards
- Use pricing-specific pre-filled message

### AIFeatures.tsx Changes
- Replace generic SVG icons with actual product screenshots
- Use images from public/images/ directory

### ProductShowcase.tsx Changes
- Add product screenshot display for each feature tab
- Use pospage.png as main showcase image

### data/content.ts Changes
- Update heroContent.headline to shorter version
- Ensure benefits and advantages content is distinct (no overlap)

## Data Models

### WhatsApp Message Types
```typescript
const whatsappMessages = {
  hero: "Hi, I'd like to request a free demo of Smart POS",
  pricing: "Hi, I have a question about Smart POS pricing",
  contact: "Hi, I'm interested in Smart POS and would like to chat"
}
```

### TrustStack Items
```typescript
interface TrustItem {
  icon: string
  title: string
  description: string
}
```

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system-essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

This feature is primarily a UI/content refactor. The acceptance criteria are visual layout, content, and image changes best verified through manual review and example-based tests.

No property-based tests identified - this is a content/layout/image update with example-based verification.

## Error Handling

- If product images fail to load, display fallback placeholder or keep existing icons
- If WhatsApp link fails, ensure href is still valid wa.me URL
- Maintain existing error boundaries in React components

## Testing Strategy

Manual visual review is the primary testing approach:
1. Verify headline is under 15 words and contains "AI" + benefit keywords
2. Verify single primary demo CTA + WhatsApp secondary CTA in hero
3. Verify TrustStack section appears after hero with all trust items
4. Verify WhatsApp buttons in Pricing and Contact sections
5. Verify Contact section no longer repeats trust signals
6. Verify product images display in AIFeatures and ProductShowcase
7. Verify all WhatsApp links have correct pre-filled messages

No property-based tests needed for this content-focused change.
