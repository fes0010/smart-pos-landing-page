import React from 'react'
import { cn } from '@/lib/utils'
import Container from './Container'

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  containerSize?: 'sm' | 'md' | 'lg' | 'xl'
  noPadding?: boolean
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, children, containerSize = 'lg', noPadding = false, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(!noPadding && 'py-16 md:py-24', className)}
        {...props}
      >
        <Container size={containerSize}>{children}</Container>
      </section>
    )
  }
)

Section.displayName = 'Section'

export default Section
