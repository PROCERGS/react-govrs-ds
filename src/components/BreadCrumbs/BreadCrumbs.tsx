import type { ReactNode } from 'react'

import './BreadCrumbs.scss'

type BreadCrumbsItem = {
  label: ReactNode
  href?: string
}

type BreadCrumbsProps = {
  items?: BreadCrumbsItem[]
  homeHref?: string
  homeLabel?: string
  showHome?: boolean
  ariaLabel?: string
  className?: string
}

function getClassName(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

function HomeIcon() {
  return (
    <svg
      className="govrs-breadcrumbs__home-icon"
      width="19"
      height="14"
      viewBox="0 0 19 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M8.78125 3.625C8.84375 3.5625 8.9375 3.53125 9.03125 3.53125C9.09375 3.53125 9.1875 3.5625 9.25 3.625L15.0313 8.34375V13.4688C15.0313 13.75 14.7813 13.9688 14.5313 13.9688H11C10.75 13.9688 10.5 13.75 10.5 13.4688V10.4688C10.5 10.2188 10.2813 9.96875 10 9.96875H8C7.75 9.96875 7.5 10.2188 7.5 10.4688V13.4688C7.5 13.75 7.28125 13.9688 7.03125 13.9688H3.53125C3.25 13.9688 3.03125 13.75 3.03125 13.4688V8.375L8.78125 3.625ZM17.875 6.84375C17.9688 6.90625 18.0313 7.03125 18.0313 7.125C18.0313 7.21875 18 7.3125 17.9375 7.375L17.125 8.34375C17.0625 8.4375 16.9688 8.46875 16.8438 8.46875C16.75 8.46875 16.6563 8.4375 16.5938 8.375L9.25 2.34375C9.1875 2.28125 9.09375 2.25 9.03125 2.25C8.9375 2.25 8.84375 2.28125 8.78125 2.34375L1.4375 8.375C1.375 8.4375 1.28125 8.46875 1.1875 8.46875C1.0625 8.46875 0.968754 8.4375 0.906254 8.34375L0.0937538 7.375C0.0625038 7.3125 3.8147e-06 7.21875 3.8147e-06 7.125C3.8147e-06 7.03125 0.0625038 6.90625 0.156254 6.84375L8.0625 0.3125C8.3125 0.125 8.65625 0 9.03125 0C9.375 0 9.71875 0.125 9.96875 0.3125L12.7813 2.625V0.375C12.7813 0.15625 12.9375 0 13.1563 0H14.9063C15.0938 0 15.2813 0.15625 15.2813 0.375V4.6875L17.875 6.84375Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function BreadCrumbs({
  items = [],
  homeHref = '/',
  homeLabel = 'Página inicial',
  showHome = true,
  ariaLabel = 'Migalhas de pão',
  className,
}: BreadCrumbsProps) {
  const levelCount = (showHome ? 1 : 0) + items.length

  // Trilha com um único nível (só home ou só a página atual) não precisa de breadcrumbs.
  if (levelCount < 2) {
    return null
  }

  return (
    <nav className={getClassName('govrs-breadcrumbs', className)} aria-label={ariaLabel}>
      <ol className="govrs-breadcrumbs__list">
        {showHome ? (
          <li className="govrs-breadcrumbs__item">
            <a className="govrs-breadcrumbs__link govrs-breadcrumbs__link--home" href={homeHref} aria-label={homeLabel}>
              <HomeIcon />
            </a>
          </li>
        ) : null}

        {items.map((item, index) => {
          const isCurrent = index === items.length - 1
          const key = typeof item.label === 'string' || typeof item.label === 'number'
            ? `${item.label}-${index}`
            : index

          return (
            <li key={key} className="govrs-breadcrumbs__item">
              {isCurrent || !item.href ? (
                <span className="govrs-breadcrumbs__current" aria-current={isCurrent ? 'page' : undefined}>
                  {item.label}
                </span>
              ) : (
                <a className="govrs-breadcrumbs__link" href={item.href}>
                  {item.label}
                </a>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export namespace BreadCrumbs {
  export type Props = BreadCrumbsProps
  export type Item = BreadCrumbsItem
}

export default BreadCrumbs
