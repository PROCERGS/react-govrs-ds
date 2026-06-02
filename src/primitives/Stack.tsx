import type { CSSProperties, ElementType, HTMLAttributes, ReactNode } from 'react'

import { ensureStylesheet } from '../runtime/ensureStylesheet'
import stylesheetUrl from './Stack.scss?url'

ensureStylesheet(stylesheetUrl)

type StackProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType
  children?: ReactNode
  direction?: CSSProperties['flexDirection']
  align?: CSSProperties['alignItems']
  justify?: CSSProperties['justifyContent']
  gap?: number | string
  display?: CSSProperties['display']
  wrap?: CSSProperties['flexWrap']
}

const gapClassMap: Record<string, string> = {
  '0': 'govrs-stack--gap-0',
  '1': 'govrs-stack--gap-1',
  '1.5': 'govrs-stack--gap-1-5',
  '2': 'govrs-stack--gap-2',
  '2.5': 'govrs-stack--gap-2-5',
  '3': 'govrs-stack--gap-3',
  '3.5': 'govrs-stack--gap-3-5',
  '3.75': 'govrs-stack--gap-3-75',
  '4': 'govrs-stack--gap-4',
  '4.5': 'govrs-stack--gap-4-5',
  '5': 'govrs-stack--gap-5',
  '6': 'govrs-stack--gap-6',
  '7': 'govrs-stack--gap-7',
  '7.5': 'govrs-stack--gap-7-5',
  '8': 'govrs-stack--gap-8',
  gutter: 'govrs-stack--gap-gutter',
}

function resolveGap(gap?: number | string) {
  if (gap == null) {
    return undefined
  }

  return gapClassMap[String(gap)]
}

function normalizeClassValue(value?: string) {
  if (!value) {
    return undefined
  }

  return value
    .trim()
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase()
}

export function Stack({
  as: Component = 'div',
  children,
  direction = 'column',
  align,
  justify,
  gap,
  display = 'flex',
  wrap,
  className,
  style: _style,
  ...props
}: StackProps) {
  const classes = [
    'govrs-stack',
    `govrs-stack--display-${normalizeClassValue(display)}`,
    `govrs-stack--direction-${normalizeClassValue(direction)}`,
    align ? `govrs-stack--align-${normalizeClassValue(align)}` : undefined,
    justify ? `govrs-stack--justify-${normalizeClassValue(justify)}` : undefined,
    wrap ? `govrs-stack--wrap-${normalizeClassValue(wrap)}` : undefined,
    resolveGap(gap),
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

export type { StackProps }