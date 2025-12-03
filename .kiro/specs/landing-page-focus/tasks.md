# Implementation Plan

- [x] 1. Update Benefits content with PAS copy
  - [x] 1.1 Update benefits array in data/content.ts with problem-first copy
    - Add problem statement to each benefit
    - Rewrite descriptions as solutions
    - Keep outcomes as supporting points
    - _Requirements: 2.1, 2.2, 2.3_

  - [x] 1.2 Update Benefits.tsx to display problem statement
    - Render problem text above the description
    - Style problem as a question/hook
    - _Requirements: 2.1, 2.2_

- [x] 2. Refactor Services section for POS focus
  - [x] 2.1 Redesign Services.tsx layout for Smart POS hero
    - Make Smart POS card larger/full-width
    - Remove equal 3-column grid
    - _Requirements: 1.1_

  - [x] 2.2 Add condensed other services mention
    - Add simple text below POS card
    - Include contact link for custom AI solutions
    - Remove separate AI Consulting and Custom Automation cards
    - _Requirements: 1.2, 1.3_

- [x] 3. Final review
  - Verify visual hierarchy emphasizes Smart POS
  - Confirm PAS copy reads naturally
  - Test responsive layout on mobile
