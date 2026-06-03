import { useMemo, useState, type CSSProperties, type Key, type ReactNode } from 'react'

import { Card } from '../Card/Card'

import './List.scss'


type ListVariant = 'default' | 'check' | 'link' | 'card'
type ListMediaPreset = 'mixed' | 'images' | 'icons' | 'none'
type ListLinkMediaPreset = 'icons' | 'none'
type ListItemIdentity = {
  id?: string | number
  key?: string | number
}

type ListGroupedItem = ListItemIdentity & {
  title: string
  text?: string
  image?: string
  imageAlt?: string
  icon?: ReactNode
  label?: string
}

type ListDefaultItem = ListGroupedItem

type ListCheckItem = ListGroupedItem & {
  checked?: boolean
}

type ListLinkItem = ListItemIdentity & {
  title: string
  meta?: string
  href?: string
  icon?: ReactNode
}

type ListCardItem = Card.Props & ListItemIdentity

type ListItemKey<T> = (item: T, index: number) => Key

type ListBaseProps<T> = {
  items?: T[]
  itemKey?: ListItemKey<T>
  className?: string
}

type ListDefaultProps = ListBaseProps<ListDefaultItem> & {
  variant?: 'default'
  horizontal?: boolean
  labeled?: boolean
  collapsible?: boolean
  mediaPreset?: ListMediaPreset
}

type ListCheckProps = ListBaseProps<ListCheckItem> & {
  variant: 'check'
  horizontal?: boolean
  labeled?: boolean
  collapsible?: boolean
  mediaPreset?: ListMediaPreset
  onToggle?: (item: ListCheckItem, options: { multiple: boolean }) => void
  onToggleGroup?: (label: string, checked: boolean) => void
  multiple?: boolean
  title?: string
}

type ListLinkProps = ListBaseProps<ListLinkItem> & {
  variant: 'link'
  mediaPreset?: ListLinkMediaPreset
  numbered?: boolean
  invert?: boolean
}

type ListCardProps = ListBaseProps<ListCardItem> & {
  variant: 'card'
  perRow?: number
}

type ListProps = ListDefaultProps | ListCheckProps | ListLinkProps | ListCardProps

type ListGroup<T> = {
  label: string | null
  items: T[]
}

function joinClassNames(...classNames: Array<string | false | null | undefined>) {
  return classNames.filter(Boolean).join(' ')
}

function getListItemKey<T extends ListItemIdentity>(
  item: T,
  index: number,
  itemKey?: ListItemKey<T>,
) {
  return itemKey ? itemKey(item, index) : item.id ?? item.key ?? index
}

function buildGroups<T extends { label?: string }>(items: T[], labeled: boolean): ListGroup<T>[] {
  if (!labeled) {
    return [{ label: null, items }]
  }

  const groups = new Map<string | null, T[]>()

  items.forEach((item) => {
    const label = item.label ?? null
    const currentItems = groups.get(label) ?? []
    currentItems.push(item)
    groups.set(label, currentItems)
  })

  return Array.from(groups.entries()).map(([label, groupedItems]) => ({
    label,
    items: groupedItems,
  }))
}

function resolveMediaPreset(
  item: Pick<ListGroupedItem, 'image' | 'imageAlt' | 'icon'>,
  mediaPreset: ListMediaPreset = 'mixed',
) {
  if (mediaPreset === 'images') {
    return {
      image: item.image,
      imageAlt: item.imageAlt,
      icon: undefined,
    }
  }

  if (mediaPreset === 'icons') {
    return {
      image: undefined,
      imageAlt: undefined,
      icon: item.icon,
    }
  }

  if (mediaPreset === 'none') {
    return {
      image: undefined,
      imageAlt: undefined,
      icon: undefined,
    }
  }

  return {
    image: item.image,
    imageAlt: item.imageAlt,
    icon: item.icon,
  }
}

function ListChevron({ expanded }: { expanded: boolean }) {
  return (
    <svg
      className={joinClassNames('govrs-list__chevron', expanded && 'govrs-list__chevron--expanded')}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M6 9L12 15L18 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ListGroupHeader({
  label,
  expanded,
  collapsible,
  onToggle,
  groupChecked,
  showGroupCheckbox,
  onToggleGroup,
}: {
  label: string
  expanded: boolean
  collapsible: boolean
  onToggle: () => void
  groupChecked?: boolean
  showGroupCheckbox?: boolean
  onToggleGroup?: (checked: boolean) => void
}) {
  return (
    <div className="govrs-list__group-header">
      <div className="govrs-list__group-header-left">
        <span className="govrs-list__group-label">{label}</span>

        {showGroupCheckbox && onToggleGroup ? (
          <input
            type="checkbox"
            className="govrs-list__group-checkbox"
            aria-label={`Selecionar todos em ${label}`}
            checked={groupChecked}
            onChange={(event) => onToggleGroup(event.target.checked)}
          />
        ) : null}
      </div>

      {collapsible ? (
        <button
          type="button"
          className="govrs-list__group-toggle"
          aria-expanded={expanded}
          onClick={onToggle}
        >
          <span className="govrs-list__group-toggle-label">{expanded ? 'Recolher' : 'Expandir'}</span>
          <ListChevron expanded={expanded} />
        </button>
      ) : null}
    </div>
  )
}

function DefaultItem({
  item,
  mediaPreset = 'mixed',
}: {
  item: ListDefaultItem
  mediaPreset?: ListMediaPreset
}) {
  const media = resolveMediaPreset(item, mediaPreset)
  const hasImage = Boolean(media.image)
  const hasIcon = Boolean(media.icon) && !hasImage

  return (
    <div
      className={joinClassNames(
        'govrs-list-default__inner',
        hasImage && 'govrs-list-default__inner--with-image',
      )}
    >
      {hasImage || hasIcon ? (
        <div className="govrs-list-default__media" aria-hidden>
          {hasImage ? (
            <img
              src={media.image}
              alt={media.imageAlt || item.title || ''}
              className="govrs-list-default__image"
            />
          ) : (
            <span className="govrs-list-default__icon">{media.icon}</span>
          )}
        </div>
      ) : null}

      <div
        className={joinClassNames(
          'govrs-list-default__content',
          !item.text && 'govrs-list-default__content--no-text',
        )}
      >
        <div className="govrs-list-default__title">{item.title}</div>
        {item.text ? <div className="govrs-list-default__text">{item.text}</div> : null}
      </div>
    </div>
  )
}

function DefaultVariant({
  items = [],
  itemKey,
  className,
  horizontal = false,
  labeled = false,
  collapsible = false,
  mediaPreset = 'mixed',
}: ListDefaultProps) {
  const groups = useMemo(() => buildGroups(items, labeled), [items, labeled])
  const [openMap, setOpenMap] = useState<Map<string, boolean>>(() => new Map())

  const isCollapsible = labeled && collapsible

  function toggleGroup(label: string) {
    setOpenMap((previousState) => {
      const nextState = new Map(previousState)
      nextState.set(label, !nextState.get(label))
      return nextState
    })
  }

  return (
    <div className={joinClassNames('govrs-list', className)}>
      {groups.map((group, groupIndex) => {
        const groupLabel = group.label
        const isExpanded = groupLabel ? Boolean(openMap.get(groupLabel)) : true

        return (
          <section
            className="govrs-list__group"
            key={groupLabel ?? `group-${groupIndex}`}
          >
            {groupLabel ? (
              <ListGroupHeader
                label={groupLabel}
                expanded={isExpanded}
                collapsible={isCollapsible}
                onToggle={() => toggleGroup(groupLabel)}
              />
            ) : null}

            {!isCollapsible || isExpanded ? (
              <ul
                className={joinClassNames(
                  'govrs-list__base',
                  'govrs-list-default',
                  horizontal && 'govrs-list__base--horizontal',
                )}
              >
                {group.items.map((item, index) => (
                  <li
                    key={getListItemKey(item, index, itemKey)}
                    className="govrs-list-default__item"
                  >
                    <DefaultItem item={item} mediaPreset={mediaPreset} />
                  </li>
                ))}
              </ul>
            ) : null}
          </section>
        )
      })}
    </div>
  )
}

function CheckItem({
  item,
  multiple,
  onToggle,
  mediaPreset = 'mixed',
}: {
  item: ListCheckItem
  multiple: boolean
  onToggle?: (item: ListCheckItem, options: { multiple: boolean }) => void
  mediaPreset?: ListMediaPreset
}) {
  const media = resolveMediaPreset(item, mediaPreset)
  const hasImage = Boolean(media.image)
  const hasIcon = Boolean(media.icon) && !hasImage

  return (
    <div className="govrs-list-check__inner">
      {hasImage || hasIcon ? (
        <div className="govrs-list-check__media" aria-hidden>
          {hasImage ? (
            <img
              src={media.image}
              alt={media.imageAlt || item.title || ''}
              className="govrs-list-check__image"
            />
          ) : (
            <span className="govrs-list-check__icon">{media.icon}</span>
          )}
        </div>
      ) : null}

      <div
        className={joinClassNames(
          'govrs-list-check__content',
          !item.text && 'govrs-list-check__content--no-text',
        )}
      >
        <div className="govrs-list-check__label-text">{item.title}</div>
        {item.text ? <div className="govrs-list-check__text">{item.text}</div> : null}
      </div>

      <div className="govrs-list-check__checkbox">
        <input
          type="checkbox"
          aria-label={`Selecionar ${item.title}`}
          checked={Boolean(item.checked)}
          onChange={() => onToggle?.(item, { multiple })}
        />
      </div>
    </div>
  )
}

function CheckVariant({
  items = [],
  itemKey,
  className,
  horizontal = false,
  labeled = false,
  collapsible = false,
  mediaPreset = 'mixed',
  onToggle,
  onToggleGroup,
  multiple = false,
  title,
}: ListCheckProps) {
  const groups = useMemo(() => buildGroups(items, labeled), [items, labeled])
  const [openMap, setOpenMap] = useState<Map<string, boolean>>(() => new Map())

  const isCollapsible = labeled && collapsible

  function toggleGroup(label: string) {
    setOpenMap((previousState) => {
      const nextState = new Map(previousState)
      nextState.set(label, !nextState.get(label))
      return nextState
    })
  }

  return (
    <div className={joinClassNames('govrs-list', 'govrs-list-check-wrapper', className)}>
      {title ? <h3 className="govrs-list-check__title">{title}</h3> : null}

      {groups.map((group, groupIndex) => {
        const groupLabel = group.label
        const isExpanded = groupLabel ? Boolean(openMap.get(groupLabel)) : true
        const groupChecked = group.items.every((item) => Boolean(item.checked))

        return (
          <section
            className="govrs-list__group"
            key={groupLabel ?? `group-${groupIndex}`}
          >
            {groupLabel ? (
              <ListGroupHeader
                label={groupLabel}
                expanded={isExpanded}
                collapsible={isCollapsible}
                onToggle={() => toggleGroup(groupLabel)}
                groupChecked={groupChecked}
                showGroupCheckbox={labeled && multiple}
                onToggleGroup={
                  onToggleGroup ? (checked) => onToggleGroup(groupLabel, checked) : undefined
                }
              />
            ) : null}

            {!isCollapsible || isExpanded ? (
              <ul
                className={joinClassNames(
                  'govrs-list__base',
                  'govrs-list-check',
                  horizontal && 'govrs-list__base--horizontal',
                )}
              >
                {group.items.map((item, index) => (
                  <li
                    key={getListItemKey(item, index, itemKey)}
                    className="govrs-list-check__item"
                  >
                    <CheckItem
                      item={item}
                      multiple={multiple}
                      onToggle={onToggle}
                      mediaPreset={mediaPreset}
                    />
                  </li>
                ))}
              </ul>
            ) : null}
          </section>
        )
      })}
    </div>
  )
}

function LinkVariant({
  items = [],
  itemKey,
  className,
  mediaPreset = 'none',
  numbered = false,
  invert = false,
}: ListLinkProps) {
  return (
    <nav className={joinClassNames('govrs-list-link', className)} role="navigation">
      <ul className="govrs-list-link__list">
        {items.map((item, index) => {
          const media = resolveMediaPreset(item, mediaPreset)
          const showIcon = Boolean(media.icon)
          const showNumber = !showIcon && numbered
          const titleNode = item.href ? (
            <a href={item.href} className="govrs-list-link__anchor">
              {item.title}
            </a>
          ) : (
            <span className="govrs-list-link__anchor">{item.title}</span>
          )

          return (
            <li
              key={getListItemKey(item, index, itemKey)}
              className="govrs-list-link__item"
            >
              {showIcon || showNumber ? (
                <div className="govrs-list-link__left" aria-hidden>
                  {showIcon ? (
                    <span className="govrs-list-link__icon">{media.icon}</span>
                  ) : (
                    <span className="govrs-list-link__number">{index + 1}</span>
                  )}
                </div>
              ) : null}

              <div className="govrs-list-link__content">
                {invert ? (
                  <>
                    {titleNode}
                    <p className="govrs-list-link__meta">{item.meta || ''}</p>
                  </>
                ) : (
                  <>
                    <p className="govrs-list-link__meta">{item.meta || ''}</p>
                    {titleNode}
                  </>
                )}
              </div>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

function CardVariant({ items = [], itemKey, className, perRow = 3 }: ListCardProps) {
  const gridStyle = {
    '--govrs-list-card-cols': perRow,
  } as CSSProperties

  return (
    <div className={joinClassNames('govrs-list-card', className)} role="list" style={gridStyle}>
      {items.map((item, index) => {
        const { id: _id, key: _key, ...cardProps } = item

        return (
          <article
            role="listitem"
            key={getListItemKey(item, index, itemKey)}
            className="govrs-list-card__item"
          >
            <Card {...cardProps} />
          </article>
        )
      })}
    </div>
  )
}

export function List(props: ListProps) {
  if (props.variant === 'check') {
    return <CheckVariant {...props} />
  }

  if (props.variant === 'link') {
    return <LinkVariant {...props} />
  }

  if (props.variant === 'card') {
    return <CardVariant {...props} />
  }

  return <DefaultVariant {...props} />
}

export namespace List {
  export type Props = ListProps
  export type Variant = ListVariant
  export type MediaPreset = ListMediaPreset
  export type LinkMediaPreset = ListLinkMediaPreset
  export type DefaultItem = ListDefaultItem
  export type CheckItem = ListCheckItem
  export type LinkItem = ListLinkItem
  export type CardItem = ListCardItem
}