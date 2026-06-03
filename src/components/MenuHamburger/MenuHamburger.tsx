import { useEffect, useId, useRef, useState, type HTMLAttributeAnchorTarget, type ReactNode } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faChevronDown,
  faChevronRight,
  faXmark,
} from '@fortawesome/free-solid-svg-icons'

import './MenuHamburger.scss'


type MenuHamburgerItem = {
  id?: string | number
  title?: ReactNode
  label?: ReactNode
  href?: string
  url?: string
  items?: MenuHamburgerItem[]
  target?: HTMLAttributeAnchorTarget
  rel?: string
}

type MenuHamburgerProps = {
  items: MenuHamburgerItem[]
  className?: string
  id?: string
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  navigationLabel?: string
  openButtonLabel?: string
  closeButtonLabel?: string
  expandButtonLabel?: string
  collapseButtonLabel?: string
  maxDesktopLevels?: number
}

function getClassName(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

function getItemLabel(item: MenuHamburgerItem) {
  return item.title ?? item.label ?? ''
}

function getItemHref(item: MenuHamburgerItem) {
  return item.href ?? item.url
}

function getItemChildren(item: MenuHamburgerItem) {
  return item.items ?? []
}

function resetObjectState() {
  return {}
}

type MenuItemLinkProps = {
  item: MenuHamburgerItem
  className: string
  children: ReactNode
}

function MenuItemLink({ item, className, children }: MenuItemLinkProps) {
  const href = getItemHref(item)

  if (!href) {
    return <span className={className}>{children}</span>
  }

  return (
    <a
      className={className}
      href={href}
      target={item.target}
      rel={item.rel}
    >
      {children}
    </a>
  )
}

export function MenuHamburger({
  items,
  className,
  id,
  open,
  defaultOpen = false,
  onOpenChange,
  navigationLabel = 'Navegação principal',
  openButtonLabel = 'Abrir menu',
  closeButtonLabel = 'Fechar menu',
  expandButtonLabel = 'Expandir submenu',
  collapseButtonLabel = 'Recolher submenu',
  maxDesktopLevels = 4,
}: MenuHamburgerProps) {
  const generatedId = useId().replace(/:/g, '')
  const rootRef = useRef<HTMLDivElement | null>(null)
  const previousOpenRef = useRef<boolean>(open ?? defaultOpen)

  const isOpenControlled = open !== undefined
  const [internalOpen, setInternalOpen] = useState(defaultOpen)
  const isOpen = isOpenControlled ? open : internalOpen
  const [activeLevels, setActiveLevels] = useState<MenuHamburgerItem[][]>([])
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>(resetObjectState)
  const [isMobile, setIsMobile] = useState(false)

  const menuId = id ?? `govrs-menu-hamburger-${generatedId}`
  const contentId = `${menuId}-content`

  function resetNavigationState() {
    setActiveLevels([])
    setExpandedItems(resetObjectState)
  }

  function setOpenState(nextOpen: boolean) {
    if (!isOpenControlled) {
      setInternalOpen(nextOpen)
    }

    onOpenChange?.(nextOpen)
  }

  function closeMenu() {
    resetNavigationState()
    setOpenState(false)
  }

  function toggleMenu() {
    resetNavigationState()
    setOpenState(!isOpen)
  }

  function handleDesktopLevelChange(level: number, nextItems: MenuHamburgerItem[]) {
    if (isMobile) {
      return
    }

    setActiveLevels((currentLevels) => {
      const normalizedMaxLevels = Math.max(1, maxDesktopLevels)
      const nextLevels = [...currentLevels]

      nextLevels[level] = nextItems

      return nextLevels.slice(0, Math.min(level + 1, normalizedMaxLevels))
    })
  }

  function toggleExpanded(itemPath: string) {
    setExpandedItems((currentExpandedItems) => ({
      ...currentExpandedItems,
      [itemPath]: !currentExpandedItems[itemPath],
    }))
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

  useEffect(() => {
    if (!isOpen) {
      return undefined
    }

    function handleClickOutside(event: MouseEvent) {
      if (event.target instanceof Node && rootRef.current?.contains(event.target)) {
        return
      }

      closeMenu()
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) {
      return undefined
    }

    function handleEscapeKey(event: KeyboardEvent) {
      if (event.key !== 'Escape') {
        return
      }

      closeMenu()
    }

    document.addEventListener('keydown', handleEscapeKey)

    return () => {
      document.removeEventListener('keydown', handleEscapeKey)
    }
  }, [isOpen])

  useEffect(() => {
    if (previousOpenRef.current === isOpen) {
      return
    }

    previousOpenRef.current = isOpen
    resetNavigationState()
  }, [isOpen])

  useEffect(() => {
    resetNavigationState()
  }, [items])

  function renderMobileMenuItem(
    item: MenuHamburgerItem,
    itemPath: string,
    level = 0,
  ): ReactNode {
    const childItems = getItemChildren(item)
    const hasChildren = childItems.length > 0
    const isExpanded = expandedItems[itemPath] ?? false
    const clampedDepth = Math.min(level, 4)
    const submenuId = `${menuId}-submenu-${itemPath}`
    const itemContentClassName = getClassName(
      'govrs-menu-hamburger__item-content',
      level > 0 && `govrs-menu-hamburger__item-content--depth-${clampedDepth}`,
      level > 0 && (level % 2 === 0
        ? 'govrs-menu-hamburger__item-content--level-even'
        : 'govrs-menu-hamburger__item-content--level-odd'),
    )

    return (
      <li key={itemPath} className="govrs-menu-hamburger__item">
        <div className={itemContentClassName}>
          <MenuItemLink item={item} className="govrs-menu-hamburger__link">
            <span className="govrs-menu-hamburger__label">{getItemLabel(item)}</span>
          </MenuItemLink>

          {hasChildren ? (
            <button
              type="button"
              className="govrs-menu-hamburger__expand-button"
              aria-controls={submenuId}
              aria-expanded={isExpanded}
              aria-label={isExpanded ? collapseButtonLabel : expandButtonLabel}
              onClick={(event) => {
                event.preventDefault()
                toggleExpanded(itemPath)
              }}
            >
              <FontAwesomeIcon icon={isExpanded ? faChevronDown : faChevronRight} />
            </button>
          ) : null}
        </div>

        {hasChildren && isExpanded ? (
          <ul id={submenuId} className="govrs-menu-hamburger__submenu">
            {childItems.map((childItem, index) => renderMobileMenuItem(childItem, `${itemPath}-${index}`, level + 1))}
          </ul>
        ) : null}
      </li>
    )
  }

  function renderDesktopItem(
    item: MenuHamburgerItem,
    itemPath: string,
    level: number,
  ) {
    const childItems = getItemChildren(item)
    const hasChildren = childItems.length > 0

    return (
      <li
        key={itemPath}
        className="govrs-menu-hamburger__item"
        onMouseEnter={() => handleDesktopLevelChange(level, childItems)}
        onFocus={() => handleDesktopLevelChange(level, childItems)}
      >
        <MenuItemLink item={item} className="govrs-menu-hamburger__link">
          <span className="govrs-menu-hamburger__label">{getItemLabel(item)}</span>
          {hasChildren ? (
            <span className="govrs-menu-hamburger__chevron" aria-hidden="true">
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
          ) : null}
        </MenuItemLink>
      </li>
    )
  }

  return (
    <div
      id={menuId}
      ref={rootRef}
      className={getClassName('govrs-menu-hamburger', className)}
      data-open={String(isOpen)}
      data-mobile={String(isMobile)}
    >
      <button
        type="button"
        className="govrs-menu-hamburger__toggle"
        aria-controls={contentId}
        aria-expanded={isOpen}
        aria-label={isOpen ? closeButtonLabel : openButtonLabel}
        onClick={toggleMenu}
      >
        <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
      </button>

      {isOpen ? (
        <div id={contentId} className="govrs-menu-hamburger__content">
          <nav className="govrs-menu-hamburger__navigation" aria-label={navigationLabel}>
            {isMobile ? (
              <ul className="govrs-menu-hamburger__list govrs-menu-hamburger__list--mobile">
                {items.map((item, index) => renderMobileMenuItem(item, String(index)))}
              </ul>
            ) : (
              <div className="govrs-menu-hamburger__levels">
                <ul className="govrs-menu-hamburger__list govrs-menu-hamburger__list--level-even">
                  {items.map((item, index) => renderDesktopItem(item, String(index), 0))}
                </ul>

                {activeLevels.map((levelItems, index) => {
                  if (levelItems.length === 0) {
                    return null
                  }

                  const levelClassName = (index + 1) % 2 === 0
                    ? 'govrs-menu-hamburger__list--level-even'
                    : 'govrs-menu-hamburger__list--level-odd'

                  return (
                    <ul
                      key={`level-${index}`}
                      className={getClassName('govrs-menu-hamburger__list', levelClassName)}
                    >
                      {levelItems.map((item, itemIndex) => (
                        renderDesktopItem(item, `${index + 1}-${itemIndex}`, index + 1)
                      ))}
                    </ul>
                  )
                })}
              </div>
            )}
          </nav>
        </div>
      ) : null}
    </div>
  )
}

export namespace MenuHamburger {
  export type Props = MenuHamburgerProps
  export type Item = MenuHamburgerItem
}

export default MenuHamburger