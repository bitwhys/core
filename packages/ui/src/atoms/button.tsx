import * as React from 'react'

export type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  children: React.ReactNode
}
export const Button = ({ children, variant, size, leftIcon, rightIcon }: ButtonProps) => {
  return <button className="py-2 px-4 bg-neutral-9">{children}</button>
}
