import type { ComponentPropsWithoutRef } from 'react'

import './Divisor.scss'

export type DivisorVariant = 'default' | 'dashed'
export type DivisorThickness = 1 | 2 | 4
export type DivisorOrientation = 'horizontal' | 'vertical'

export type DivisorProps = Omit<ComponentPropsWithoutRef<'hr'>, 'orientation'> & {
  variant?: DivisorVariant
  thickness?: DivisorThickness
  orientation?: DivisorOrientation
}

export function Divisor({
  variant = 'default',
  thickness = 1,
  orientation = 'horizontal',
  className,
  ...props
}: DivisorProps) {
  const classes = [
    'govrs-divisor',
    'govrs-divisor--' + variant,
    'govrs-divisor--' + thickness,
    'govrs-divisor--' + orientation,
    className,
  ].filter(Boolean).join(' ')

  return (
    <hr
      {...props}
      className={classes}
      aria-orientation={orientation === 'vertical' ? 'vertical' : undefined}
    />
  )
}

export default Divisor
