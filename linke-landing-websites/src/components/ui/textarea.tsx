import * as React from 'react'
import { cn } from './lib'

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn('w-full min-h-[120px] rounded-md border p-3 text-sm outline-none focus:ring-2 focus:ring-neutral-300', className)}
      {...props}
    />
  )
)
Textarea.displayName = 'Textarea'
