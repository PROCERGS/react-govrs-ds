import { useEffect, useId, useState, type ReactNode } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

import { MenuHamburger } from '../MenuHamburger/MenuHamburger'
import { Search } from '../Search/Search'
import './Header.scss'

import defaultLogoSrc from './govrs-symbol.svg?url'

type HeaderProps = {
  siteTitle: ReactNode
  homeHref?: string
  logo?: ReactNode
  logoHref?: string
  logoAriaLabel?: string
  menuItems?: MenuHamburger.Item[]
  menuOpen?: boolean
  onMenuOpenChange?: (open: boolean) => void
  searchValue?: string
  defaultSearchValue?: string
  onSearchValueChange?: Search.Props['onChange']
  onSearch?: Search.Props['onSearch']
  searchActive?: boolean
  defaultSearchActive?: boolean
  onSearchActiveChange?: (active: boolean) => void
  searchPlaceholder?: string
  searchInputAriaLabel?: string
  searchButtonLabel?: string
  searchCloseButtonLabel?: string
  showScrollTopButton?: boolean
  scrollTargetId?: string
  scrollTopButtonLabel?: string
  onScrollTop?: () => void
  className?: string
}

function getClassName(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

export function Header({
  siteTitle,
  homeHref = '/',
  logo,
  logoHref = 'https://www.estado.rs.gov.br/inicial',
  logoAriaLabel = 'Governo do Estado do Rio Grande do Sul',
  menuItems = [],
  menuOpen,
  
  onMenuOpenChange,
  searchValue,
  defaultSearchValue = '',
  onSearchValueChange,
  onSearch,
  searchActive,
  defaultSearchActive = false,
  onSearchActiveChange,
  searchPlaceholder = 'O que você procura?',
  searchInputAriaLabel = 'Campo de busca',
  searchButtonLabel = 'Pesquisar',
  searchCloseButtonLabel = 'Fechar busca',
  showScrollTopButton = true,
  scrollTargetId = 'main',
  scrollTopButtonLabel = 'Voltar ao topo',
  onScrollTop,
  className,
}: HeaderProps) {
  const generatedId = useId().replace(/:/g, '')
  const isSearchActiveControlled = searchActive !== undefined
  const [internalSearchActive, setInternalSearchActive] = useState(defaultSearchActive)
  const [isMobile, setIsMobile] = useState(false)
  const mobileSearchActive = isSearchActiveControlled ? searchActive : internalSearchActive
  const isSearchActive = isMobile ? mobileSearchActive : true
  const isMenuOpenControlled = menuOpen !== undefined
  const [internalMenuOpen, setInternalMenuOpen] = useState(false)
  const isMenuOpen = isMenuOpenControlled ? menuOpen : internalMenuOpen
  const hasMenu = menuItems.length > 0

  function handleMenuOpenChange(nextOpen: boolean) {
    if (!isMenuOpenControlled) {
      setInternalMenuOpen(nextOpen)
    }

    onMenuOpenChange?.(nextOpen)
  }

  function setSearchActiveState(nextActive: boolean) {
    if (!isSearchActiveControlled) {
      setInternalSearchActive(nextActive)
    }

    onSearchActiveChange?.(nextActive)
  }

  function handleScrollToTop() {
    if (typeof document === 'undefined') {
      onScrollTop?.()
      return
    }

    const target = document.getElementById(scrollTargetId)

    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    onScrollTop?.()
  }

  useEffect(() => {
    if (typeof window === 'undefined' || typeof getComputedStyle !== 'function') {
      return undefined
    }

    const rawBreakpoint = getComputedStyle(document.documentElement).getPropertyValue(
      '--govrs-breakpoint-smartphone-landscape-tablet-portrait-max',
    )
    const breakpoint = (rawBreakpoint || '48rem').trim()

    const mediaQuery = window.matchMedia(`(max-width: ${breakpoint})`)

    const updateMobileState = () => setIsMobile(mediaQuery.matches)

    updateMobileState()

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', updateMobileState)
      return () => mediaQuery.removeEventListener('change', updateMobileState)
    }

    mediaQuery.addListener(updateMobileState)
    return () => mediaQuery.removeListener(updateMobileState)
  }, [])

  return (
    <header
      className={getClassName('govrs-header-wrapper', className)}
      data-menu-open={isMenuOpen && hasMenu ? 'true' : undefined}
    >
      <div className="govrs-header">
        <div className="govrs-header__logo-nav-wrapper">
          <div
            className={getClassName(
              'govrs-header__identity',
              isMobile && mobileSearchActive && 'govrs-header__identity--hidden',
            )}
          >
            {hasMenu ? (
              <MenuHamburger
                id={`govrs-header-menu-${generatedId}`}
                items={menuItems}
                open={menuOpen}
                onOpenChange={handleMenuOpenChange}
              />
            ) : null}

            <a
              className="govrs-header__logo-link"
              href={logoHref}
              aria-label={logoAriaLabel}
            >
              {logo ?? (
                <img
                  className="govrs-header__logo-image"
                  src={defaultLogoSrc}
                  alt=""
                  aria-hidden="true"
                />
              )}
            </a>

            <a className="govrs-header__title" href={homeHref}>
              {siteTitle}
            </a>
          </div>

          <div
            className={getClassName(
              'govrs-header__search-wrapper',
              isMobile && mobileSearchActive && 'govrs-header__search-wrapper--active',
            )}
          >
            <Search
              id={`govrs-header-search-${generatedId}`}
              value={searchValue}
              defaultValue={defaultSearchValue}
              onChange={onSearchValueChange}
              onSearch={onSearch}
              collapsible={isMobile}
              active={isSearchActive}
              onActiveChange={setSearchActiveState}
              placeholder={searchPlaceholder}
              inputAriaLabel={searchInputAriaLabel}
              searchButtonLabel={searchButtonLabel}
              closeButtonLabel={searchCloseButtonLabel}
              fullWidth
            />
          </div>
        </div>

        {showScrollTopButton ? (
          <button
            type="button"
            className="govrs-header__scroll-top"
            aria-label={scrollTopButtonLabel}
            onClick={handleScrollToTop}
          >
            <FontAwesomeIcon icon={faChevronUp} />
          </button>
        ) : null}
      </div>
    </header>
  )
}

export namespace Header {
  export type Props = HeaderProps
}

export default Header