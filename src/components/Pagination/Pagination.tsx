import {
  Children,
  createContext,
  isValidElement,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react'

import { breakpoints } from '../../tokens'
import './Pagination.scss'

const DEFAULT_PAGE_SIZES = [20, 50, 100] as const
const PAGINATION_MOBILE_MEDIA_QUERY = `(max-width: ${breakpoints.smartphonePortraitMax})`
const PAGINATION_DESKTOP_MEDIA_QUERY = `(min-width: ${breakpoints.desktopMin})`
const NUMBERS_SIBLING_COUNT_DESKTOP = 2
const NUMBERS_SIBLING_COUNT_COMPACT = 1

export type PaginationGroupAlign = 'start' | 'center' | 'end'
export type PaginationPagesVariant = 'numbers' | 'jump'
type PaginationViewport = 'mobile' | 'tablet' | 'desktop'

type PaginationProps = {
  totalItems: number
  page?: number
  defaultPage?: number
  pageSize?: number
  defaultPageSize?: number
  pageSizeOptions?: number[]
  onPageChange?: (page: number) => void
  onPageSizeChange?: (pageSize: number) => void
  siblingCount?: number
  ariaLabel?: string
  className?: string
  children?: ReactNode
}

type PaginationGroupProps = {
  align: PaginationGroupAlign
  children?: ReactNode
  className?: string
}

type PaginationPartProps = {
  className?: string
}

type PaginationPagesProps = PaginationPartProps & {
  variant: PaginationPagesVariant
}

type PaginationContextValue = {
  page: number
  pageSize: number
  totalItems: number
  totalPages: number
  startItem: number
  endItem: number
  pageSizeOptions: number[]
  isPageSizeFixed: boolean
  siblingCount: number
  ariaLabel: string
  setPage: (page: number) => void
  setPageSize: (pageSize: number) => void
}

const PaginationContext = createContext<PaginationContextValue | null>(null)

function getClassName(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

function normalizePositiveInteger(value: number | undefined, fallback: number) {
  if (!Number.isFinite(value) || value == null) {
    return fallback
  }

  return Math.max(1, Math.floor(value))
}

function normalizeNonNegativeInteger(value: number | undefined, fallback: number) {
  if (!Number.isFinite(value) || value == null) {
    return fallback
  }

  return Math.max(0, Math.floor(value))
}

function usePaginationContext(componentName: string) {
  const context = useContext(PaginationContext)

  if (!context) {
    throw new Error(`${componentName} deve ser usado dentro de <Pagination>.`)
  }

  return context
}

function resolvePaginationViewport(): PaginationViewport {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return 'desktop'
  }

  if (window.matchMedia(PAGINATION_MOBILE_MEDIA_QUERY).matches) {
    return 'mobile'
  }

  if (window.matchMedia(PAGINATION_DESKTOP_MEDIA_QUERY).matches) {
    return 'desktop'
  }

  return 'tablet'
}

function usePaginationViewport() {
  const [viewport, setViewport] = useState<PaginationViewport>(() => resolvePaginationViewport())

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      return undefined
    }

    const mobileQuery = window.matchMedia(PAGINATION_MOBILE_MEDIA_QUERY)
    const desktopQuery = window.matchMedia(PAGINATION_DESKTOP_MEDIA_QUERY)

    const updateViewport = () => {
      if (mobileQuery.matches) {
        setViewport('mobile')
        return
      }

      if (desktopQuery.matches) {
        setViewport('desktop')
        return
      }

      setViewport('tablet')
    }

    updateViewport()

    if (typeof mobileQuery.addEventListener === 'function') {
      mobileQuery.addEventListener('change', updateViewport)
      desktopQuery.addEventListener('change', updateViewport)
      return () => {
        mobileQuery.removeEventListener('change', updateViewport)
        desktopQuery.removeEventListener('change', updateViewport)
      }
    }

    mobileQuery.addListener(updateViewport)
    desktopQuery.addListener(updateViewport)
    return () => {
      mobileQuery.removeListener(updateViewport)
      desktopQuery.removeListener(updateViewport)
    }
  }, [])

  return viewport
}

function ArrowLeftIcon() {
  return (
    <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M0.281269 4.53125L4.53127 0.28125C4.84377 0 5.31252 0 5.59377 0.28125L6.31252 1C6.59377 1.28125 6.59377 1.78125 6.31252 2.0625L3.28127 5.0625L6.31252 8.09375C6.59377 8.375 6.59377 8.84375 6.31252 9.15625L5.59377 9.84375C5.31252 10.1562 4.84377 10.1562 4.53127 9.84375L0.281269 5.59375C1.90735e-05 5.3125 1.90735e-05 4.84375 0.281269 4.53125Z"
        fill="currentColor"
      />
    </svg>
  )
}

type PageItem = number | 'ellipsis-start' | 'ellipsis-end'

function buildPageItems(
  totalPages: number,
  currentPage: number,
  siblingCount: number,
  { includeBoundaryPages = true }: { includeBoundaryPages?: boolean } = {},
): PageItem[] {
  if (totalPages <= 1) {
    return [1]
  }

  const clampedSiblingCount = Math.max(0, siblingCount)
  const leftSibling = Math.max(currentPage - clampedSiblingCount, 1)
  const rightSibling = Math.min(currentPage + clampedSiblingCount, totalPages)

  if (!includeBoundaryPages) {
    const items: PageItem[] = []

    if (leftSibling > 1) {
      items.push('ellipsis-start')
    }

    for (let page = leftSibling; page <= rightSibling; page += 1) {
      items.push(page)
    }

    if (rightSibling < totalPages) {
      items.push('ellipsis-end')
    }

    return items
  }

  const totalNumbers = clampedSiblingCount * 2 + 3
  const totalBlocks = totalNumbers + 2

  if (totalPages <= totalBlocks) {
    return Array.from({ length: totalPages }, (_, index) => index + 1)
  }

  const showLeftEllipsis = leftSibling > 2
  const showRightEllipsis = rightSibling < totalPages - 1
  const items: PageItem[] = [1]

  if (showLeftEllipsis) {
    items.push('ellipsis-start')
  } else {
    for (let page = 2; page < leftSibling; page += 1) {
      items.push(page)
    }
  }

  for (let page = leftSibling; page <= rightSibling; page += 1) {
    if (page !== 1 && page !== totalPages) {
      items.push(page)
    }
  }

  if (showRightEllipsis) {
    items.push('ellipsis-end')
  } else {
    for (let page = rightSibling + 1; page < totalPages; page += 1) {
      items.push(page)
    }
  }

  if (totalPages > 1) {
    items.push(totalPages)
  }

  return items
}

function countPagesElements(node: ReactNode): number {
  return Children.toArray(node).reduce<number>((count, child) => {
    if (!isValidElement(child)) {
      return count
    }

    if (child.type === PaginationPages) {
      return count + 1
    }

    if (child.type === PaginationGroup) {
      return count + countPagesElements((child.props as PaginationGroupProps).children)
    }

    return count
  }, 0)
}

function PaginationGroup({ align, children, className }: PaginationGroupProps) {
  return (
    <div className={getClassName('govrs-pagination__group', `govrs-pagination__group--${align}`, className)}>
      {children}
    </div>
  )
}

function PaginationPageSize({ className }: PaginationPartProps) {
  const { pageSize, pageSizeOptions, isPageSizeFixed, setPageSize } = usePaginationContext('Pagination.PageSize')

  if (isPageSizeFixed) {
    return null
  }

  return (
    <div className={getClassName('govrs-pagination__page-size', className)}>
      <span className="govrs-pagination__label">Exibir</span>
      <select
        className="govrs-pagination__select"
        value={pageSize}
        aria-label="Itens por página"
        onChange={(event) => setPageSize(Number(event.target.value))}
      >
        {pageSizeOptions.map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>
    </div>
  )
}

function PaginationRange({ className }: PaginationPartProps) {
  const { startItem, endItem, totalItems } = usePaginationContext('Pagination.Range')

  return (
    <span className={getClassName('govrs-pagination__range', className)}>
      {startItem}-{endItem} de {totalItems} itens
    </span>
  )
}

function PaginationPages({ variant, className }: PaginationPagesProps) {
  const {
    page,
    totalPages,
    ariaLabel,
    setPage,
  } = usePaginationContext('Pagination.Pages')
  const viewport = usePaginationViewport()
  const isMobile = viewport === 'mobile'

  const isFirstPage = page <= 1
  const isLastPage = page >= totalPages

  if (variant === 'jump') {
    return (
      <nav className={getClassName('govrs-pagination__pages', 'govrs-pagination__pages--jump', className)} aria-label={ariaLabel}>
        <span className="govrs-pagination__label">Página</span>
        <select
          className="govrs-pagination__select"
          value={page}
          aria-label="Ir para página"
          onChange={(event) => setPage(Number(event.target.value))}
        >
          {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
            <option key={pageNumber} value={pageNumber}>
              {pageNumber}
            </option>
          ))}
        </select>
        <button
          type="button"
          className="govrs-pagination__pager-button"
          aria-label="Página anterior"
          disabled={isFirstPage}
          onClick={() => setPage(page - 1)}
        >
          <ArrowLeftIcon />
        </button>
        <button
          type="button"
          className="govrs-pagination__pager-button govrs-pagination__pager-button--next"
          aria-label="Próxima página"
          disabled={isLastPage}
          onClick={() => setPage(page + 1)}
        >
          <ArrowLeftIcon />
        </button>
      </nav>
    )
  }

  const effectiveSiblingCount = viewport === 'desktop'
    ? NUMBERS_SIBLING_COUNT_DESKTOP
    : NUMBERS_SIBLING_COUNT_COMPACT
  const pageItems = buildPageItems(totalPages, page, effectiveSiblingCount, {
    includeBoundaryPages: !isMobile,
  })

  return (
    <nav className={getClassName('govrs-pagination__pages', 'govrs-pagination__pages--numbers', className)} aria-label={ariaLabel}>
      <button
        type="button"
        className="govrs-pagination__pager-button"
        aria-label="Página anterior"
        disabled={isFirstPage}
        onClick={() => setPage(page - 1)}
      >
        <ArrowLeftIcon />
      </button>

      {pageItems.map((item) => {
        if (item === 'ellipsis-start' || item === 'ellipsis-end') {
          const targetPage = item === 'ellipsis-start' ? 1 : totalPages

          if (isMobile) {
            return (
              <button
                key={item}
                type="button"
                className="govrs-pagination__ellipsis govrs-pagination__ellipsis--action"
                aria-label={item === 'ellipsis-start' ? 'Ir para a primeira página' : 'Ir para a última página'}
                onClick={() => setPage(targetPage)}
              >
                …
              </button>
            )
          }

          return (
            <span
              key={item}
              className="govrs-pagination__ellipsis"
              aria-hidden="true"
            >
              …
            </span>
          )
        }

        const isActive = item === page

        return (
          <button
            key={item}
            type="button"
            className={getClassName('govrs-pagination__page', isActive && 'govrs-pagination__page--active')}
            aria-label={`Página ${item}`}
            aria-current={isActive ? 'page' : undefined}
            disabled={isActive}
            onClick={() => setPage(item)}
          >
            {item}
          </button>
        )
      })}

      <button
        type="button"
        className="govrs-pagination__pager-button govrs-pagination__pager-button--next"
        aria-label="Próxima página"
        disabled={isLastPage}
        onClick={() => setPage(page + 1)}
      >
        <ArrowLeftIcon />
      </button>
    </nav>
  )
}

function DefaultNumbersComposition() {
  return (
    <PaginationGroup align="center">
      <PaginationPages variant="numbers" />
    </PaginationGroup>
  )
}

function PaginationRoot({
  totalItems,
  page: controlledPage,
  defaultPage = 1,
  pageSize: controlledPageSize,
  defaultPageSize = DEFAULT_PAGE_SIZES[0],
  pageSizeOptions = [...DEFAULT_PAGE_SIZES],
  onPageChange,
  onPageSizeChange,
  siblingCount = 2,
  ariaLabel = 'Paginação',
  className,
  children,
}: PaginationProps) {
  const isPageControlled = controlledPage !== undefined
  const isPageSizeControlled = controlledPageSize !== undefined
  const normalizedOptions = useMemo(() => {
    const uniqueOptions = Array.from(
      new Set(
        pageSizeOptions
          .map((option) => normalizePositiveInteger(option, DEFAULT_PAGE_SIZES[0]))
          .filter((option) => option > 0),
      ),
    )

    return uniqueOptions.length > 0 ? uniqueOptions : [...DEFAULT_PAGE_SIZES]
  }, [pageSizeOptions])

  const [internalPage, setInternalPage] = useState(() => normalizePositiveInteger(defaultPage, 1))
  const [internalPageSize, setInternalPageSize] = useState(() => {
    const initial = normalizePositiveInteger(defaultPageSize, normalizedOptions[0])
    return normalizedOptions.includes(initial) ? initial : normalizedOptions[0]
  })

  const resolvedTotalItems = normalizeNonNegativeInteger(totalItems, 0)
  const isPageSizeFixed = normalizedOptions.length <= 1
    || (isPageSizeControlled && onPageSizeChange == null)
  const requestedPageSize = isPageSizeControlled
    ? normalizePositiveInteger(controlledPageSize, normalizedOptions[0])
    : internalPageSize
  const resolvedPageSize = isPageSizeFixed && isPageSizeControlled
    ? requestedPageSize
    : normalizedOptions.includes(requestedPageSize)
      ? requestedPageSize
      : normalizedOptions[0]
  const totalPages = Math.max(1, Math.ceil(resolvedTotalItems / resolvedPageSize) || 1)
  const requestedPage = isPageControlled
    ? normalizePositiveInteger(controlledPage, 1)
    : internalPage
  const resolvedPage = Math.min(requestedPage, totalPages)
  const startItem = resolvedTotalItems > 0 ? (resolvedPage - 1) * resolvedPageSize + 1 : 0
  const endItem = resolvedTotalItems > 0
    ? Math.min(resolvedPage * resolvedPageSize, resolvedTotalItems)
    : 0

  const pagesWarningShownRef = useRef(false)

  useEffect(() => {
    if (import.meta.env.PROD || pagesWarningShownRef.current) {
      return
    }

    if (children == null) {
      return
    }

    const pagesCount = countPagesElements(children)

    if (pagesCount > 1) {
      pagesWarningShownRef.current = true
      console.warn(
        '[Pagination] Use apenas um Pagination.Pages por barra. As variantes "numbers" e "jump" são mutuamente exclusivas.',
      )
    }
  }, [children])

  function setPage(nextPage: number) {
    const clampedPage = Math.min(Math.max(1, Math.floor(nextPage)), totalPages)

    if (!isPageControlled) {
      setInternalPage(clampedPage)
    }

    if (clampedPage !== resolvedPage) {
      onPageChange?.(clampedPage)
    }
  }

  function setPageSize(nextPageSize: number) {
    const normalizedSize = normalizePositiveInteger(nextPageSize, resolvedPageSize)
    const safeSize = normalizedOptions.includes(normalizedSize)
      ? normalizedSize
      : resolvedPageSize

    if (safeSize === resolvedPageSize) {
      return
    }

    if (!isPageSizeControlled) {
      setInternalPageSize(safeSize)
    }

    if (!isPageControlled) {
      setInternalPage(1)
    }

    onPageSizeChange?.(safeSize)
  }

  const contextValue = useMemo<PaginationContextValue>(() => ({
    page: resolvedPage,
    pageSize: resolvedPageSize,
    totalItems: resolvedTotalItems,
    totalPages,
    startItem,
    endItem,
    pageSizeOptions: normalizedOptions,
    isPageSizeFixed,
    siblingCount: normalizeNonNegativeInteger(siblingCount, 2),
    ariaLabel,
    setPage,
    setPageSize,
  }), [
    resolvedPage,
    resolvedPageSize,
    resolvedTotalItems,
    totalPages,
    startItem,
    endItem,
    normalizedOptions,
    isPageSizeFixed,
    siblingCount,
    ariaLabel,
    isPageControlled,
    isPageSizeControlled,
    onPageChange,
    onPageSizeChange,
  ])

  const content = children ?? <DefaultNumbersComposition />

  return (
    <PaginationContext.Provider value={contextValue}>
      <div className={getClassName('govrs-pagination', className)}>
        {content}
      </div>
    </PaginationContext.Provider>
  )
}

export const Pagination = Object.assign(PaginationRoot, {
  Group: PaginationGroup,
  PageSize: PaginationPageSize,
  Range: PaginationRange,
  Pages: PaginationPages,
})

export namespace Pagination {
  export type Props = PaginationProps
  export type GroupProps = PaginationGroupProps
  export type PagesProps = PaginationPagesProps
  export type GroupAlign = PaginationGroupAlign
  export type PagesVariant = PaginationPagesVariant
}

export default Pagination
