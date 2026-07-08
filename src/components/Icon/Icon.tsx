import type { AnchorHTMLAttributes} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'

import './Icon.scss'

type IconStyle = 'solid' | 'brand'
type IconSize = 'xs' | 'sm' | 'lg' | '2x' | '3x' | '4x' | '5x'

export namespace Icon {
  export type Size = IconSize
  export type Style = IconStyle
}

type IconProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children' | 'href'> & {
  icon: IconDefinition
  size?: IconSize
  href?: string
  label?: string
  decorative?: boolean
  className?: string
}

export function Icon({
  icon,
  size,
  href,
  label,
  decorative = false,
  className,
  ...props
}: IconProps) {
  const classes = [
    'govrs-icon',
    size ? `govrs-icon--${size}` : undefined,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const ariaProps = {
    ...(decorative && { 'aria-hidden': true }),
    ...(label && !decorative && { 'aria-label': label }),
  }

  if (href) {
    return (
      <a href={href} className={classes} {...ariaProps} {...props}>
        <FontAwesomeIcon icon={icon} />
      </a>
    )
  }

  return (
    <span className={classes} {...ariaProps} {...props}>
      <FontAwesomeIcon icon={icon} />
    </span>
  )
}
