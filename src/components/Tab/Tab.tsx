import {
  Children,
  Fragment,
  isValidElement,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactElement,
  type ReactNode,
} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'

import './Tab.scss'

export type TabId = string | number
type TabLabel = ReactNode

type TabItemBaseProps = {
  id: TabId
  children: ReactNode
  disabled?: boolean
  className?: string
}

type TabItemWithLabelProps = TabItemBaseProps & {
  label: TabLabel
  icon?: IconDefinition
  ariaLabel?: string
}

type TabItemIconOnlyProps = TabItemBaseProps & {
  label?: never
  icon: IconDefinition
  ariaLabel: string
}

export type TabItemProps = TabItemWithLabelProps | TabItemIconOnlyProps

export type TabProps = {
  children: ReactNode
  activeId?: TabId
  defaultActiveId?: TabId
  onActiveChange?: (activeId: TabId) => void
  ariaLabel?: string
  hideTabList?: boolean
  className?: string
}

type ResolvedTabItem = {
  element: ReactElement<TabItemProps>
  id: TabId
  triggerId: string
  panelId: string
}

function getClassName(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

function TabItem({ children }: TabItemProps) {
  return <>{children}</>
}

function getTabItemElements(children: ReactNode): Array<ReactElement<TabItemProps>> {
  return Children.toArray(children).flatMap((child) => {
    if (
      isValidElement<{ children?: ReactNode }>(child)
      && child.type === Fragment
    ) {
      return getTabItemElements(child.props.children)
    }

    return isValidElement<TabItemProps>(child) && child.type === TabItem
      ? [child]
      : []
  })
}

function getFirstAvailableId(items: ResolvedTabItem[]) {
  return items.find((item) => !item.element.props.disabled)?.id ?? items[0]?.id
}

function isAvailableId(items: ResolvedTabItem[], id: TabId | undefined) {
  return id !== undefined && items.some((item) => item.id === id && !item.element.props.disabled)
}

function TabRoot({
  children,
  activeId,
  defaultActiveId,
  onActiveChange,
  ariaLabel = 'Abas',
  hideTabList = false,
  className,
}: TabProps) {
  const generatedId = useId().replace(/:/g, '')
  const triggerRefs = useRef(new Map<TabId, HTMLButtonElement>())
  const items = getTabItemElements(children)
    .map((element, index): ResolvedTabItem => ({
      element,
      id: element.props.id,
      triggerId: `govrs-tab-${generatedId}-trigger-${index}`,
      panelId: `govrs-tab-${generatedId}-panel-${index}`,
    }))

  const firstAvailableId = getFirstAvailableId(items)
  const isControlled = activeId !== undefined
  const [internalActiveId, setInternalActiveId] = useState<TabId | undefined>(
    () =>
      isAvailableId(items, defaultActiveId)
        ? defaultActiveId
        : firstAvailableId,
  )

  const requestedActiveId = isControlled ? activeId : internalActiveId
  const resolvedActiveId = isAvailableId(items, requestedActiveId)
    ? requestedActiveId
    : firstAvailableId

  function activateTab(nextId: TabId) {
    if (!isAvailableId(items, nextId)) {
      return
    }

    if (!isControlled) {
      setInternalActiveId(nextId)
    }

    if (nextId !== resolvedActiveId) {
      onActiveChange?.(nextId)
    }
  }

  function moveFocus(currentId: TabId, direction: 'next' | 'previous' | 'first' | 'last') {
    const availableItems = items.filter((item) => !item.element.props.disabled)

    if (availableItems.length === 0) {
      return
    }

    const currentIndex = availableItems.findIndex((item) => item.id === currentId)
    let nextItem: ResolvedTabItem

    if (direction === 'first') {
      nextItem = availableItems[0]
    } else if (direction === 'last') {
      nextItem = availableItems[availableItems.length - 1]
    } else {
      const offset = direction === 'next' ? 1 : -1
      const nextIndex = (currentIndex + offset + availableItems.length) % availableItems.length
      nextItem = availableItems[nextIndex]
    }

    activateTab(nextItem.id)
    triggerRefs.current.get(nextItem.id)?.focus()
  }

  function handleTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, itemId: TabId) {
    switch (event.key) {
      case 'ArrowRight':
        event.preventDefault()
        moveFocus(itemId, 'next')
        break
      case 'ArrowLeft':
        event.preventDefault()
        moveFocus(itemId, 'previous')
        break
      case 'Home':
        event.preventDefault()
        moveFocus(itemId, 'first')
        break
      case 'End':
        event.preventDefault()
        moveFocus(itemId, 'last')
        break
      default:
        break
    }
  }

  return (
    <div className={getClassName('govrs-tab', className)}>
      {!hideTabList && items.length > 0 ? (
        <div className="govrs-tab__list" role="tablist" aria-label={ariaLabel}>
          {items.map((item) => {
            const { id, triggerId, panelId, element } = item
            const isActive = id === resolvedActiveId
            const { ariaLabel: itemAriaLabel, disabled, icon, label } = element.props
            const isIconOnly = icon && !label

            return (
              <button
                key={id}
                ref={(node) => {
                  if (node) {
                    triggerRefs.current.set(id, node)
                    return
                  }

                  triggerRefs.current.delete(id)
                }}
                id={triggerId}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={panelId}
                aria-label={itemAriaLabel}
                aria-disabled={disabled || undefined}
                tabIndex={isActive ? 0 : -1}
                disabled={disabled}
                className={getClassName(
                  'govrs-tab__trigger',
                  isActive && 'govrs-tab__trigger--active',
                  isIconOnly && 'govrs-tab__trigger--icon-only',
                )}
                onClick={() => activateTab(id)}
                onKeyDown={(event) => handleTabKeyDown(event, id)}
              >
                {icon ? (
                  <FontAwesomeIcon
                    icon={icon}
                    aria-hidden
                    className={label ? 'govrs-tab__icon' : undefined}
                  />
                ) : null}
                {label}
              </button>
            )
          })}
        </div>
      ) : null}

      <div className="govrs-tab__panels">
        {items.map((item) => {
          const { element, id, triggerId, panelId } = item
          const isActive = id === resolvedActiveId

          return (
            <div
              key={id}
              id={panelId}
              role={hideTabList ? undefined : 'tabpanel'}
              aria-labelledby={hideTabList ? undefined : triggerId}
              hidden={!isActive}
              className={getClassName('govrs-tab__panel', element.props.className)}
            >
              {element.props.children}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export const Tab = Object.assign(TabRoot, { Item: TabItem })

export default Tab
