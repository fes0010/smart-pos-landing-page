import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: number | string, currency: string = 'KES'): string {
  if (typeof price === 'string') return price
  return `${currency} ${price.toLocaleString()}`
}
