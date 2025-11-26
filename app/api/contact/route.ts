import { NextRequest, NextResponse } from 'next/server'
import { contactFormSchema } from '@/lib/validations'
import { ZodError } from 'zod'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate the request body
    const validatedData = contactFormSchema.parse(body)

    // Here you would typically:
    // 1. Send an email using a service like Resend, SendGrid, or Nodemailer
    // 2. Save to a database
    // 3. Send to a CRM

    // For now, we'll just log it and return success
    console.log('Contact form submission:', validatedData)

    // Example: Send email using Resend (uncomment when you have API key)
    /*
    const { Resend } = require('resend')
    const resend = new Resend(process.env.RESEND_API_KEY)

    await resend.emails.send({
      from: 'AI POS <noreply@yoursite.com>',
      to: process.env.CONTACT_EMAIL || 'festusmuruga@gmail.com',
      subject: `New Contact Form Submission from ${validatedData.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Business:</strong> ${validatedData.businessName}</p>
        <p><strong>Phone:</strong> ${validatedData.phone}</p>
        <p><strong>Email:</strong> ${validatedData.email || 'Not provided'}</p>
        <p><strong>Interested Plan:</strong> ${validatedData.interestedPlan || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${validatedData.message}</p>
      `,
    })
    */

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your message! We will get back to you soon.',
      },
      { status: 200 }
    )
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation error',
          errors: error.errors.reduce((acc, err) => {
            const path = err.path.join('.')
            acc[path] = err.message
            return acc
          }, {} as Record<string, string>),
        },
        { status: 400 }
      )
    }

    console.error('Contact form error:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'An error occurred while processing your request. Please try again.',
      },
      { status: 500 }
    )
  }
}
