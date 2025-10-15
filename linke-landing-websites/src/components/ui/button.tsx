import * as React from 'react'
import { cn } from './lib'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  asChild?: boolean
}

export function Button({ className, variant='default', size='md', asChild, ...props }: ButtonProps) {
  const base = 'inline-flex items-center justify-center rounded-md font-medium transition-colors disabled:opacity-50 disabled:pointer-events-none'
  const variants = {
    default: 'bg-black text-white hover:opacity-90',
    secondary: 'bg-neutral-100 text-neutral-900 hover:bg-neutral-200'
  } as const
  const sizes = {
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-4 text-sm',
    lg: 'h-11 px-5 text-base'
  } as const
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...props} />
  )
}
