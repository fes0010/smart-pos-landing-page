# AI POS Landing Page

A modern, responsive landing page for an AI-powered Point of Sale system built for Kenyan businesses.

## Features

- 🎨 Modern design with Tailwind CSS
- ⚡ Next.js 14+ with App Router
- 🎭 GSAP animations with 3D effects
- 📱 Mobile-first responsive design
- ♿ Accessibility-focused
- 🚀 Optimized for performance

## Tech Stack

- **Framework:** Next.js 14+ with TypeScript
- **Styling:** Tailwind CSS
- **Animations:** GSAP (GreenSock Animation Platform)
- **Forms:** React Hook Form + Zod validation
- **Deployment:** Vercel

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Create environment file:
```bash
cp .env.local.example .env.local
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── api/               # API routes
├── components/            # React components
│   ├── sections/         # Page sections
│   ├── ui/               # Reusable UI components
│   └── forms/            # Form components
├── lib/                  # Utility functions
├── types/                # TypeScript types
├── data/                 # Content data
└── styles/               # Global styles

## Environment Variables

- `NEXT_PUBLIC_SITE_URL`: Your site URL
- `RESEND_API_KEY`: API key for email service
- `CONTACT_EMAIL`: Email to receive contact form submissions

## Deployment

Deploy to Vercel:

```bash
vercel
```

## Contact

- Phone: +254 741 047 776
- Email: festusmuruga@gmail.com
- WhatsApp: https://wa.me/254741047776

## License

Private - All rights reserved
