import * as React from 'react'
import { cn } from './lib'

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('border rounded-xl bg-white', className)} {...props} />
}
export function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('p-4 border-b bg-white/50 rounded-t-xl', className)} {...props} />
}
export function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={cn('font-semibold leading-none tracking-tight', className)} {...props} />
}
export function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('p-4', className)} {...props} />
}
