import type { ElementType, HTMLAttributes, ReactNode } from 'react'

import './Text.scss'


type TextTone = 'default' | 'muted' | 'inverse'
type TextSize = 'sm' | 'md' | 'lg'

type TextProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType
  children?: ReactNode
  tone?: TextTone
  size?: TextSize
}

export function Text({
  as: Component = 'p',
  children,
  tone = 'default',
  size,
  className,
  style: _style,
  ...props
}: TextProps) {
  const classes = [
    'govrs-text',
    size ? `govrs-text--size-${size}` : undefined,
    tone !== 'default' ? `govrs-text--tone-${tone}` : undefined,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Component {...props} className={classes}>
      {children}
    </Component>
  )
}

export type { TextProps, TextSize, TextTone }