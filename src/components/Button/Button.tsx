import type { ButtonHTMLAttributes, ReactNode } from 'react'

import { ensureStylesheet } from '../../runtime/ensureStylesheet'
import stylesheetUrl from './Button.scss?url'

ensureStylesheet(stylesheetUrl)

type ButtonVariant = 'primary' | 'secondary' | 'tertiary'
type ButtonSize = 'small' | 'medium' | 'large'

type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & {
  children?: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  circle?: boolean
  fullWidth?: boolean
  loading?: boolean
  active?: boolean
  darkMode?: boolean
}

export function Button({
  children,
  variant = 'primary',
  size = 'medium',
  circle = false,
  fullWidth = false,
  loading = false,
  active = false,
  darkMode = false,
  className,
  disabled = false,
  type = 'button',
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading

  const classes = [
    'govrs-button',
    `govrs-button--${variant}`,
    `govrs-button--${size}`,
    circle ? 'govrs-button--circle' : undefined,
    fullWidth ? 'govrs-button--block' : undefined,
    loading ? 'govrs-button--loading' : undefined,
    active ? 'govrs-button--active' : undefined,
    darkMode ? 'govrs-button--dark' : undefined,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button
      {...props}
      type={type}
      className={classes}
      disabled={isDisabled}
      aria-busy={loading || undefined}
    >
      <span className="govrs-button__label">{children}</span>
    </button>
  )
}

export namespace Button {
  export type Props = ButtonProps
  export type Variant = ButtonVariant
  export type Size = ButtonSize
}

export default Button