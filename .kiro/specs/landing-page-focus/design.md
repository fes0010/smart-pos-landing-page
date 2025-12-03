# Design Document

## Overview

Simple refactor of two landing page sections to improve conversion focus. The Services section will highlight Smart POS as the hero product, and the Benefits section will use PAS copywriting.

## Architecture

No architectural changes. This is a content and layout update to existing React components.

## Components and Interfaces

### Services.tsx Changes
- Remove the 3-column equal grid
- Create a hero layout for Smart POS (full width or 2/3 width)
- Add a subtle "Other Services" text mention below with contact link
- Remove the separate AI Consulting and Custom Automation cards

### Benefits.tsx Changes  
- Keep existing 4-card grid structure
- Update content in `data/content.ts` to use PAS framework

### data/content.ts Changes
- Rewrite `benefits` array with PAS-style copy:
  - Add `problem` field to each benefit
  - Update `description` to be the solution
  - Keep `outcomes` as supporting points

## Data Models

Updated Benefit type (optional - can keep existing structure):

```typescript
interface Benefit {
  id: string
  title: string           // Short benefit name
  problem: string         // Pain point question/statement
  description: string     // Solution statement  
  icon: string
  outcomes: string[]
}
```



## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system-essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

This feature is primarily a UI/content refactor with no complex logic requiring property-based testing. The acceptance criteria are visual layout and copywriting changes that are best verified through manual review and example-based tests.

No testable properties identified - this is a content/layout update.

## Error Handling

- If benefits data is missing the `problem` field, fall back to displaying just the description
- Maintain existing error boundaries in the React components

## Testing Strategy

Manual visual review is the primary testing approach for this UI refactor:
1. Verify Services section displays Smart POS prominently
2. Verify other services are de-emphasized with contact link
3. Verify Benefits section shows problem-first copy
4. Verify 4-card grid layout is maintained

No property-based tests needed for this content-focused change.
