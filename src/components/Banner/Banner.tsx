import type { ReactNode } from 'react'

import './Banner.scss'


type BannerType = 'quadrado' | 'variant4'

type BannerProps = {
  type?: BannerType
  image?: ReactNode
  imageUrl?: string
  imageAlt?: string
  linkUrl?: string
  className?: string
}

function joinClasses(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

export function Banner({
  type,
  image,
  imageUrl,
  imageAlt = '',
  linkUrl,
  className,
}: BannerProps) {
  const classes = joinClasses('govrs-banner', type && `govrs-banner--${type}`, className)
  const resolvedImageAlt = imageAlt.trim()
  const resolvedImageUrl = imageUrl?.trim()
  const resolvedLinkUrl = linkUrl?.trim()
  const graphicAccessibilityProps = resolvedLinkUrl
    ? { 'aria-hidden': true }
    : resolvedImageAlt
      ? { role: 'img' as const, 'aria-label': resolvedImageAlt }
      : undefined
  const bannerImage = image ? (
    <div className="govrs-banner__graphic" {...graphicAccessibilityProps}>{image}</div>
  ) : resolvedImageUrl ? (
    <img
      className="govrs-banner__image"
      src={resolvedImageUrl}
      alt={resolvedImageAlt}
      loading="lazy"
    />
  ) : null

  if (!resolvedLinkUrl) {
    return <div className={classes}>{bannerImage}</div>
  }

  return (
    <a
      className={classes}
      href={resolvedLinkUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={resolvedImageAlt || 'Banner'}
    >
      {bannerImage}
    </a>
  )
}

export namespace Banner {
  export type Props = BannerProps
  export type Type = BannerType
}

export default Banner
