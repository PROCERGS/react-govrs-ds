import {
  useEffect,
  useRef,
  useState,
  type FocusEventHandler,
  type KeyboardEventHandler,
  type ReactNode,
  type Ref,
} from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'

import './Tag.scss'

type TagVariant = 'default' | 'persistent' | 'persistentGroup' | 'status' | 'count'
type TagStatus = 'online' | 'offline' | 'away'
type TagId = string | number

type TagLeadingIconProps = {
  showIcon?: boolean
  Icon?: IconDefinition
}

type TagBaseProps = {
  className?: string
}

type TagLabelProps = {
  label?: ReactNode
  children?: ReactNode
}

type TagPersistentItemBaseProps = TagBaseProps & TagLabelProps & TagLeadingIconProps & {
  disabled?: boolean
  checkIcon?: boolean
  checked?: boolean
  defaultChecked?: boolean
  onChange?: (checked: boolean) => void
}

type TagDefaultProps = TagBaseProps & TagLabelProps & TagLeadingIconProps & {
  variant?: 'default'
  disabled?: boolean
  showClose?: boolean
  closeButtonLabel?: string
  onClose?: () => void
}

type TagPersistentProps = TagPersistentItemBaseProps & {
  variant: 'persistent'
}

type TagGroupItem = TagPersistentItemBaseProps & {
  id: TagId
}

type TagPersistentGroupProps = TagBaseProps & {
  variant: 'persistentGroup'
  items: TagGroupItem[]
  radio?: boolean
  defaultSelected?: TagId | null
  selected?: TagId | null
  onChange?: (selected: TagId | null) => void
  allowUnselect?: boolean
  ariaLabel?: string
}

type TagStatusProps = TagBaseProps & TagLeadingIconProps & {
  variant: 'status'
  status?: TagStatus
  label?: ReactNode
  showLabel?: boolean
}

type TagCountProps = TagBaseProps & {
  variant: 'count'
  count?: number | string
}

type TagProps =
  | TagDefaultProps
  | TagPersistentProps
  | TagPersistentGroupProps
  | TagStatusProps
  | TagCountProps

type PersistentChipProps = TagPersistentItemBaseProps & {
  role?: 'radio'
  ariaChecked?: boolean
  tabIndex?: number
  onKeyDown?: KeyboardEventHandler<HTMLButtonElement>
  onFocus?: FocusEventHandler<HTMLButtonElement>
  buttonRef?: Ref<HTMLButtonElement>
}

function joinClasses(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

function getFirstEnabledIndex(items: TagGroupItem[]) {
  return items.findIndex((item) => !item.disabled)
}

function getBoundaryEnabledIndex(items: TagGroupItem[], fromEnd = false) {
  if (!fromEnd) {
    return getFirstEnabledIndex(items)
  }

  for (let index = items.length - 1; index >= 0; index -= 1) {
    if (!items[index]?.disabled) {
      return index
    }
  }

  return -1
}

function getNextEnabledIndex(items: TagGroupItem[], currentIndex: number, direction: 1 | -1) {
  if (!items.length) {
    return -1
  }

  let nextIndex = currentIndex

  for (let step = 0; step < items.length; step += 1) {
    nextIndex = (nextIndex + direction + items.length) % items.length

    if (!items[nextIndex]?.disabled) {
      return nextIndex
    }
  }

  return -1
}

function resolveRadioTabStopIndex(items: TagGroupItem[], selected: TagId | null) {
  const selectedIndex = items.findIndex((item) => item.id === selected && !item.disabled)

  if (selectedIndex >= 0) {
    return selectedIndex
  }

  return getFirstEnabledIndex(items)
}

function resolveContent(label: ReactNode | undefined, children: ReactNode | undefined, fallback: ReactNode) {
  if (label != null) {
    return label
  }

  if (children != null) {
    return children
  }

  return fallback
}

function formatCountValue(value: number | string | undefined) {
  const numericValue = Number(value)

  if (Number.isFinite(numericValue)) {
    return numericValue > 999 ? '999+' : String(numericValue)
  }

  return value != null ? String(value) : '0'
}

function getStatusLabel(status: TagStatus) {
  switch (status) {
    case 'offline':
      return 'Offline'
    case 'away':
      return 'Ausente'
    case 'online':
    default:
      return 'Online'
  }
}

function CloseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M16.0625 14L19.1875 17.1562C19.5938 17.5312 19.5938 18.1562 19.1875 18.5312L18.5 19.2188C18.125 19.625 17.5 19.625 17.125 19.2188L14 16.0938L10.8438 19.2188C10.4688 19.625 9.84375 19.625 9.46875 19.2188L8.78125 18.5312C8.375 18.1562 8.375 17.5312 8.78125 17.1562L11.9062 14L8.78125 10.875C8.375 10.5 8.375 9.875 8.78125 9.5L9.46875 8.8125C9.84375 8.40625 10.4688 8.40625 10.8438 8.8125L14 11.9375L17.125 8.8125C17.5 8.40625 18.125 8.40625 18.5 8.8125L19.1875 9.5C19.5938 9.875 19.5938 10.5 19.1875 10.875L16.0625 14Z"
      />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 32" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M11.4062 21.75L6.21874 16.5625C5.90624 16.25 5.90624 15.7188 6.21874 15.4062L7.34374 14.2812C7.65624 13.9688 8.15624 13.9688 8.46874 14.2812L12 17.7812L19.5 10.2812C19.8125 9.96875 20.3125 9.96875 20.625 10.2812L21.75 11.4062C22.0625 11.7188 22.0625 12.25 21.75 12.5625L12.5625 21.75C12.25 22.0625 11.7187 22.0625 11.4062 21.75Z"
      />
    </svg>
  )
}

function TagLeadingIcon({ Icon }: { Icon: IconDefinition }) {
  return (
    <span className="govrs-tag__icon" aria-hidden="true">
      <FontAwesomeIcon icon={Icon} />
    </span>
  )
}

function DefaultTag({
  label,
  children,
  disabled = false,
  showIcon = false,
  Icon,
  showClose = true,
  className,
  closeButtonLabel = 'Fechar tag',
  onClose,
}: TagDefaultProps) {
  const [visible, setVisible] = useState(true)
  const content = resolveContent(label, children, 'Tag')

  if (!visible) {
    return null
  }

  const classes = joinClasses(
    'govrs-tag',
    'govrs-tag--default',
    disabled && 'govrs-tag--disabled',
    className,
  )

  return (
    <span className={classes} aria-disabled={disabled || undefined}>
      {showIcon && Icon && <TagLeadingIcon Icon={Icon} />}
      <span className="govrs-tag__label">{content}</span>
      {showClose && (
        <button
          type="button"
          className="govrs-tag__action"
          aria-label={closeButtonLabel}
          disabled={disabled}
          onClick={() => {
            if (disabled) {
              return
            }

            setVisible(false)
            onClose?.()
          }}
        >
          <CloseIcon />
        </button>
      )}
    </span>
  )
}

function PersistentChip({
  label,
  children,
  disabled = false,
  showIcon = false,
  Icon,
  checkIcon = true,
  checked,
  defaultChecked = false,
  onChange,
  className,
  role,
  ariaChecked,
  tabIndex,
  onKeyDown,
  onFocus,
  buttonRef,
}: PersistentChipProps) {
  const [internalChecked, setInternalChecked] = useState(defaultChecked)
  const isControlled = checked !== undefined
  const currentChecked = isControlled ? checked : internalChecked
  const content = resolveContent(label, children, 'Tag persistente')

  return (
    <button
      ref={buttonRef}
      type="button"
      className={joinClasses(
        'govrs-tag',
        'govrs-tag--persistent',
        currentChecked && 'govrs-tag--checked',
        disabled && 'govrs-tag--disabled',
        className,
      )}
      disabled={disabled}
      tabIndex={tabIndex}
      aria-pressed={role === 'radio' || !checkIcon ? undefined : currentChecked}
      role={role}
      aria-checked={role === 'radio' ? ariaChecked : undefined}
      onKeyDown={onKeyDown}
      onFocus={onFocus}
      onClick={() => {
        const nextChecked = !currentChecked

        if (!isControlled) {
          setInternalChecked(nextChecked)
        }

        onChange?.(nextChecked)
      }}
    >
      {showIcon && Icon && <TagLeadingIcon Icon={Icon} />}
      <span className="govrs-tag__label">{content}</span>
      {checkIcon && currentChecked && (
        <span className="govrs-tag__indicator" aria-hidden="true">
          <CheckIcon />
        </span>
      )}
    </button>
  )
}

function PersistentGroupTag({
  items,
  radio = false,
  defaultSelected = null,
  selected,
  onChange,
  allowUnselect = true,
  ariaLabel = 'Grupo de tags',
  className,
}: TagPersistentGroupProps) {
  const [internalSelected, setInternalSelected] = useState<TagId | null>(defaultSelected)
  const isControlled = selected !== undefined
  const currentSelected = isControlled ? selected : internalSelected
  const itemRefs = useRef<Array<HTMLButtonElement | null>>([])
  const [focusIndex, setFocusIndex] = useState(() => resolveRadioTabStopIndex(items, currentSelected))

  useEffect(() => {
    itemRefs.current = itemRefs.current.slice(0, items.length)
    setFocusIndex(resolveRadioTabStopIndex(items, currentSelected))
  }, [items, currentSelected])

  function updateRadioSelection(nextSelected: TagId | null) {
    if (nextSelected === currentSelected) {
      return
    }

    const previousItem = items.find((item) => item.id === currentSelected)

    if (previousItem) {
      previousItem.onChange?.(false)
    }

    const nextItem = items.find((item) => item.id === nextSelected)

    if (nextItem) {
      nextItem.onChange?.(true)
    }

    if (!isControlled) {
      setInternalSelected(nextSelected)
    }

    onChange?.(nextSelected)
  }

  function focusRadio(index: number) {
    if (index < 0) {
      return
    }

    setFocusIndex(index)
    itemRefs.current[index]?.focus()
  }

  function handleRadioKeyDown(index: number): KeyboardEventHandler<HTMLButtonElement> {
    return (event) => {
      let nextIndex = -1

      switch (event.key) {
        case 'ArrowRight':
        case 'ArrowDown':
          nextIndex = getNextEnabledIndex(items, index, 1)
          break
        case 'ArrowLeft':
        case 'ArrowUp':
          nextIndex = getNextEnabledIndex(items, index, -1)
          break
        case 'Home':
          nextIndex = getBoundaryEnabledIndex(items)
          break
        case 'End':
          nextIndex = getBoundaryEnabledIndex(items, true)
          break
        default:
          return
      }

      if (nextIndex < 0 || nextIndex === index) {
        return
      }

      event.preventDefault()

      const nextItem = items[nextIndex]

      if (!nextItem) {
        return
      }

      updateRadioSelection(nextItem.id)
      focusRadio(nextIndex)
    }
  }

  if (!radio) {
    return (
      <div className={joinClasses('govrs-tag-group', className)} role="group" aria-label={ariaLabel}>
        {items.map((item) => (
          <PersistentChip
            key={item.id}
            label={item.label}
            children={item.children}
            disabled={item.disabled}
            showIcon={item.showIcon}
            Icon={item.Icon}
            checkIcon={item.checkIcon}
            checked={item.checked}
            defaultChecked={item.defaultChecked}
            onChange={item.onChange}
            className={item.className}
          />
        ))}
      </div>
    )
  }

  return (
    <div
      className={joinClasses('govrs-tag-group', className)}
      role="radiogroup"
      aria-label={ariaLabel}
      aria-orientation="horizontal"
    >
      {items.map((item, index) => {
        const currentChecked = item.id === currentSelected
        const currentTabIndex = item.disabled ? undefined : index === focusIndex ? 0 : -1

        return (
          <PersistentChip
            key={item.id}
            label={item.label}
            children={item.children}
            disabled={item.disabled}
            showIcon={item.showIcon}
            Icon={item.Icon}
            checkIcon={item.checkIcon ?? true}
            checked={currentChecked}
            className={item.className}
            role="radio"
            ariaChecked={currentChecked}
            tabIndex={currentTabIndex}
            onFocus={() => {
              setFocusIndex(index)
            }}
            onKeyDown={handleRadioKeyDown(index)}
            buttonRef={(element) => {
              itemRefs.current[index] = element
            }}
            onChange={(nextChecked) => {
              if (!nextChecked && allowUnselect) {
                updateRadioSelection(null)
                return
              }

              if (!nextChecked) {
                return
              }

              updateRadioSelection(item.id)
            }}
          />
        )
      })}
    </div>
  )
}

function StatusTag({ status = 'online', label, showLabel = true, className }: TagStatusProps) {
  const resolvedLabel = label ?? getStatusLabel(status)
  const shouldRenderLabel = showLabel && resolvedLabel !== ''
  const accessibleLabel = typeof resolvedLabel === 'string' && resolvedLabel.length > 0
    ? resolvedLabel
    : getStatusLabel(status)

  return (
    <span
      className={joinClasses('govrs-tag-status', `govrs-tag-status--${status}`, className)}
      aria-label={accessibleLabel}
    >
      <span className="govrs-tag-status__dot" aria-hidden="true" />
      {shouldRenderLabel && <span className="govrs-tag-status__label">{resolvedLabel}</span>}
    </span>
  )
}

function CountTag({ count, className }: TagCountProps) {
  const displayCount = formatCountValue(count)

  return (
    <span className={joinClasses('govrs-tag', 'govrs-tag--count', className)} aria-label={`Contagem ${displayCount}`}>
      <span className="govrs-tag__label">{displayCount}</span>
    </span>
  )
}

export function Tag(props: TagProps) {
  switch (props.variant) {
    case 'persistent':
      return <PersistentChip {...props} />
    case 'persistentGroup':
      return <PersistentGroupTag {...props} />
    case 'status':
      return <StatusTag {...props} />
    case 'count':
      return <CountTag {...props} />
    case 'default':
    default:
      return <DefaultTag {...props} />
  }
}

export namespace Tag {
  export type Props = TagProps
  export type Variant = TagVariant
  export type Status = TagStatus
  export type LeadingIcon = IconDefinition
  export type DefaultProps = TagDefaultProps
  export type PersistentProps = TagPersistentProps
  export type PersistentGroupProps = TagPersistentGroupProps
  export type StatusProps = TagStatusProps
  export type CountProps = TagCountProps
  export type GroupItem = TagGroupItem
}