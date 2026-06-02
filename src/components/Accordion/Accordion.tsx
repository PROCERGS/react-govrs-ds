import {
  isValidElement,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type ReactNode,
  type SyntheticEvent,
} from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronDown,
  faMagnifyingGlass,
  faTimes,
} from '@fortawesome/free-solid-svg-icons'

import { ensureStylesheet } from '../../runtime/ensureStylesheet'
import stylesheetUrl from './Accordion.scss?url'

ensureStylesheet(stylesheetUrl)

type AccordionTheme = 'default' | 'dark'
type AccordionTitleSize = 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

type AccordionItem = {
  id?: string
  title: string
  content?: ReactNode
  disabled?: boolean
  searchText?: string
}

type AccordionProps = {
  items: AccordionItem[]
  headline?: ReactNode
  titleSize?: AccordionTitleSize
  theme?: AccordionTheme
  rightArrows?: boolean
  collapsed?: boolean
  nonExclusive?: boolean
  filtering?: boolean
  filterPlaceholder?: string
  filterLabel?: string
  clearFilterLabel?: string
  noResultsMessage?: ReactNode
  className?: string
}

function getClassName(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

function extractTextContent(node: ReactNode): string {
  if (node === null || node === undefined || typeof node === 'boolean') {
    return ''
  }

  if (typeof node === 'string' || typeof node === 'number') {
    return String(node)
  }

  if (Array.isArray(node)) {
    return node.map(extractTextContent).join(' ')
  }

  if (isValidElement<{ children?: ReactNode }>(node)) {
    return extractTextContent(node.props.children)
  }

  return ''
}

function getInitialOpenItems(items: AccordionItem[], collapsed: boolean) {
  if (collapsed || items.length === 0) {
    return []
  }

  return [items[0].id ?? '']
}

export function Accordion({
  items,
  headline,
  titleSize = 'h3',
  theme = 'default',
  rightArrows = true,
  collapsed = true,
  nonExclusive = true,
  filtering = false,
  filterPlaceholder = 'Digite para filtrar...',
  filterLabel = 'Filtrar painéis do accordion',
  clearFilterLabel = 'Limpar filtro',
  noResultsMessage = 'Nenhum painel corresponde ao filtro informado.',
  className,
}: AccordionProps) {
  const generatedId = useId().replace(/:/g, '')
  const [filterValue, setFilterValue] = useState('')

  const normalizedItems = useMemo(
    () =>
      items.map((item, index) => ({
        ...item,
        id: item.id ?? `govrs-accordion-${generatedId}-item-${index}`,
      })),
    [generatedId, items],
  )

  const itemIdsKey = normalizedItems.map((item) => item.id).join('|')
  const detailsRefs = useRef<Map<string, HTMLDetailsElement>>(new Map())
  const openItemsRef = useRef<Set<string>>(
    new Set(getInitialOpenItems(normalizedItems, collapsed)),
  )

  useEffect(() => {
    const nextOpenItems = new Set(getInitialOpenItems(normalizedItems, collapsed))

    openItemsRef.current = nextOpenItems
    detailsRefs.current.forEach((detailsElement, itemId) => {
      const shouldBeOpen = nextOpenItems.has(itemId)

      if (detailsElement.open !== shouldBeOpen) {
        detailsElement.open = shouldBeOpen
      }
    })
  }, [collapsed, itemIdsKey])

  useEffect(() => {
    if (nonExclusive || openItemsRef.current.size <= 1) {
      return
    }

    const nextOpenItems = new Set<string>()

    normalizedItems.some((item) => {
      const itemId = item.id ?? ''

      if (!openItemsRef.current.has(itemId)) {
        return false
      }

      nextOpenItems.add(itemId)
      return true
    })

    openItemsRef.current = nextOpenItems
    detailsRefs.current.forEach((detailsElement, itemId) => {
      const shouldBeOpen = nextOpenItems.has(itemId)

      if (detailsElement.open !== shouldBeOpen) {
        detailsElement.open = shouldBeOpen
      }
    })
  }, [itemIdsKey, nonExclusive, normalizedItems])

  const filteredItems = useMemo(() => {
    const normalizedFilter = filterValue.trim().toLowerCase()

    if (!filtering || normalizedFilter.length === 0) {
      return normalizedItems
    }

    return normalizedItems.filter((item) => {
      const haystack = [item.title, item.searchText ?? extractTextContent(item.content)]
        .join(' ')
        .toLowerCase()

      return haystack.includes(normalizedFilter)
    })
  }, [filterValue, filtering, normalizedItems])

  function handleToggle(
    itemId: string,
    disabled: boolean | undefined,
    event: SyntheticEvent<HTMLDetailsElement>,
  ) {
    const detailsElement = event.currentTarget

    if (disabled) {
      if (detailsElement.open) {
        detailsElement.open = false
      }

      openItemsRef.current.delete(itemId)
      return
    }

    if (detailsElement.open) {
      if (nonExclusive) {
        openItemsRef.current.add(itemId)
        return
      }

      const nextOpenItems = new Set([itemId])

      openItemsRef.current = nextOpenItems
      detailsRefs.current.forEach((element, currentItemId) => {
        const shouldBeOpen = nextOpenItems.has(currentItemId)

        if (element.open !== shouldBeOpen) {
          element.open = shouldBeOpen
        }
      })
      return
    }

    openItemsRef.current.delete(itemId)
  }

  const HeadingTag = titleSize
  const filterId = `govrs-accordion-${generatedId}-filter`
  const accordionGroupName = `govrs-accordion-${generatedId}-group`

  return (
    <div
      className={getClassName('govrs-accordion', className)}
      data-theme={theme}
      data-right-arrows={String(rightArrows)}
    >
      {headline ? <h2 className="govrs-accordion__headline">{headline}</h2> : null}

      {filtering ? (
        <div className="govrs-accordion__filter">
          <label htmlFor={filterId} className="govrs-accordion__visually-hidden">
            {filterLabel}
          </label>

          <div className="govrs-accordion__filter-control">
            <span className="govrs-accordion__filter-icon" aria-hidden="true">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </span>

            <input
              id={filterId}
              type="search"
              className="govrs-accordion__filter-input"
              value={filterValue}
              placeholder={filterPlaceholder}
              onChange={(event) => setFilterValue(event.target.value)}
            />

            {filterValue ? (
              <button
                type="button"
                className="govrs-accordion__filter-clear"
                onClick={() => setFilterValue('')}
                aria-label={clearFilterLabel}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            ) : null}
          </div>
        </div>
      ) : null}

      <div className="govrs-accordion__list">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => {
            const itemId = item.id ?? ''

            return (
              <details
                key={itemId}
                className="govrs-accordion__item"
                name={nonExclusive ? undefined : accordionGroupName}
                data-disabled={String(Boolean(item.disabled))}
                onToggle={(event) => handleToggle(itemId, item.disabled, event)}
                ref={(node) => {
                  if (node) {
                    detailsRefs.current.set(itemId, node)

                    const shouldBeOpen = openItemsRef.current.has(itemId)

                    if (node.open !== shouldBeOpen) {
                      node.open = shouldBeOpen
                    }

                    return
                  }

                  detailsRefs.current.delete(itemId)
                }}
              >
                <summary
                  className="govrs-accordion__trigger"
                  aria-disabled={item.disabled ? 'true' : undefined}
                  tabIndex={item.disabled ? -1 : undefined}
                  onClick={
                    item.disabled
                      ? (event) => {
                          event.preventDefault()
                        }
                      : undefined
                  }
                >
                  <HeadingTag className={`govrs-accordion__heading govrs-accordion__heading--${titleSize}`}>
                    <span className="govrs-accordion__heading-content">
                      <span className="govrs-accordion__icon" aria-hidden="true">
                        <FontAwesomeIcon icon={faChevronDown} />
                      </span>
                      <span className="govrs-accordion__title">{item.title}</span>
                    </span>
                  </HeadingTag>
                </summary>

                <div>
                  <div className="govrs-accordion__content-body">{item.content}</div>
                </div>
              </details>
            )
          })
        ) : (
          <div className="govrs-accordion__empty" role="status">
            {noResultsMessage}
          </div>
        )}
      </div>
    </div>
  )
}

export namespace Accordion {
  export type Props = AccordionProps
  export type Item = AccordionItem
  export type Theme = AccordionTheme
  export type TitleSize = AccordionTitleSize
}

export default Accordion