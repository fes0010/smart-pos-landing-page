export interface CTAButton {
  text: string
  href: string
  variant: 'primary' | 'secondary' | 'outline'
  onClick?: () => void
}

export interface AIFeature {
  id: string
  title: string
  description: string
  icon: string
  highlights: string[]
  exampleQuestions?: string[]
}

export interface Benefit {
  id: string
  title: string
  problem: string
  description: string
  icon: string
  outcomes: string[]
}

export interface POSFeature {
  id: string
  title: string
  description: string
  icon: string
}

export interface POSFeatureCategory {
  id: string
  category: string
  features: POSFeature[]
}

export interface PricingPlan {
  id: string
  name: string
  price: number | 'custom'
  currency: string
  period: string
  description: string
  features: string[]
  highlighted: boolean
  badge?: string
  cta: {
    text: string
    href: string
  }
}

export interface ContactFormData {
  name: string
  businessName: string
  phone: string
  email?: string
  message: string
  interestedPlan?: string
}

export interface FormSubmissionResponse {
  success: boolean
  message: string
  errors?: Record<string, string>
}

export interface ContactInfo {
  phone: string
  whatsapp: string
  email: string
  location: string
  hours: string
  socialMedia: {
    whatsapp: string
    facebook?: string
    twitter?: string
    linkedin?: string
  }
}
