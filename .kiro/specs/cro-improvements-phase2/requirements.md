# Requirements Document

## Introduction

Phase 2 CRO improvements to address remaining conversion killers identified in the expert roast. Focus on reducing friction, eliminating redundancy, enhancing WhatsApp prominence, improving headline clarity, and adding real product screenshots/images.

## Glossary

- **CRO**: Conversion Rate Optimization
- **CTA**: Call to Action button/link
- **WhatsApp CTA**: Prominent WhatsApp chat button integrated at key decision points
- **Trust Stack**: Consolidated section displaying all trust indicators and guarantees
- **PAS**: Problem-Agitate-Solve copywriting framework
- **Product Images**: Actual screenshots of the Smart POS interface stored in public/images/

## Requirements

### Requirement 1

**User Story:** As a landing page visitor, I want a clear, punchy headline, so that I immediately understand the value proposition.

#### Acceptance Criteria

1. WHEN a visitor views the hero section THEN the Hero component SHALL display a headline under 15 words
2. WHEN displaying the headline THEN the Hero component SHALL emphasize "AI" and profit/time benefits prominently
3. WHEN displaying the subheadline THEN the Hero component SHALL include specific Kenyan market references (duka, M-Pesa)

### Requirement 2

**User Story:** As a landing page visitor, I want a single clear demo CTA, so that I don't get confused about which option to choose.

#### Acceptance Criteria

1. WHEN a visitor views the hero CTAs THEN the Hero component SHALL display one primary demo CTA button
2. WHEN displaying secondary actions THEN the Hero component SHALL use "Chat on WhatsApp" as the alternative CTA
3. WHEN a visitor clicks the WhatsApp CTA THEN the system SHALL open WhatsApp with a pre-filled demo request message

### Requirement 3

**User Story:** As a landing page visitor, I want WhatsApp prominently available at decision points, so that I can quickly get answers when considering a purchase.

#### Acceptance Criteria

1. WHEN a visitor views the Pricing section THEN the Pricing component SHALL display a WhatsApp quick-question button
2. WHEN a visitor views the Contact section THEN the Contact component SHALL display WhatsApp as a primary contact method
3. WHEN WhatsApp buttons are clicked THEN the system SHALL open WhatsApp with context-specific pre-filled messages

### Requirement 4

**User Story:** As a landing page visitor, I want to see trust signals consolidated in one place, so that I feel confident about the purchase decision.

#### Acceptance Criteria

1. WHEN a visitor scrolls past the hero THEN the page SHALL display a consolidated Trust Stack section
2. WHEN displaying the Trust Stack THEN the section SHALL include money-back guarantee, free installation, setup time, and customer satisfaction
3. WHEN the Contact section displays trust signals THEN the Contact component SHALL NOT repeat the same trust points shown in the Trust Stack

### Requirement 5

**User Story:** As a landing page visitor, I want distinct value propositions in Benefits vs Advantages, so that I don't experience content fatigue from repetition.

#### Acceptance Criteria

1. WHEN displaying the Benefits section THEN the Benefits component SHALL focus on emotional outcomes using PAS framework
2. WHEN displaying the Advantages section THEN the Advantages component SHALL focus on competitive differentiators with comparison callouts
3. WHEN both sections are viewed THEN the content SHALL NOT repeat the same messaging or points



### Requirement 6

**User Story:** As a landing page visitor, I want to see actual product screenshots, so that I can visualize what I'm buying instead of generic icons.

#### Acceptance Criteria

1. WHEN a visitor views the AI Features section THEN the AIFeatures component SHALL display actual product screenshots instead of generic icons
2. WHEN a visitor views the ProductShowcase section THEN the ProductShowcase component SHALL show real interface screenshots for each feature tab
3. WHEN displaying feature highlights THEN the components SHALL use product images from public/images/ directory
