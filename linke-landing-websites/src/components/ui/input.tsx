import * as React from 'react'
import { cn } from './lib'

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn('w-full h-10 rounded-md border px-3 text-sm outline-none focus:ring-2 focus:ring-neutral-300', className)}
      {...props}
    />
  )
)
Input.displayName = 'Input'
