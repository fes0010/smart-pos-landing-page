import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name is too long'),
  
  businessName: z.string()
    .min(2, 'Business name must be at least 2 characters')
    .max(100, 'Business name is too long'),
  
  phone: z.string()
    .regex(
      /^(\+254|0)[17]\d{8}$/,
      'Please enter a valid Kenyan phone number (e.g., 0712345678 or +254712345678)'
    ),
  
  email: z.string()
    .email('Please enter a valid email address')
    .optional()
    .or(z.literal('')),
  
  message: z.string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message is too long'),
  
  interestedPlan: z.string().optional(),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
