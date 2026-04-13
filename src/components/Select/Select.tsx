import {
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronDown,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons'

import './Select.scss'

type SelectState = 'danger' | 'success' | 'warning' | 'info'

type SelectOption = {
  value: string
  label: ReactNode
  disabled?: boolean
}

type SelectValue = string | string[] | null

type SelectFeedbackContext = {
  value: SelectValue
  selectedOption: SelectOption | null
  selectedOptions: SelectOption[]
  options: SelectOption[]
  multiple: boolean
  isDisabled: boolean
}

type SelectProps = {
  options?: SelectOption[]
  value?: SelectValue
  defaultValue?: SelectValue
  onChange?: (value: string | string[], option: SelectOption) => void
  placeholder?: string
  disabled?: boolean
  ariaLabel?: string
  multiple?: boolean
  className?: string
  name?: string
  id?: string
  label?: ReactNode
  helperText?: ReactNode
  feedback?: ReactNode
  renderFeedback?: (context: SelectFeedbackContext) => ReactNode
  state?: SelectState
}

function getFirstEnabledIndex(options: SelectOption[]) {
  return options.findIndex((option) => !option.disabled)
}

function getLastEnabledIndex(options: SelectOption[]) {
  for (let index = options.length - 1; index >= 0; index -= 1) {
    if (!options[index]?.disabled) {
      return index
    }
  }

  return -1
}

function getClosestEnabledIndex(
  options: SelectOption[],
  startIndex: number,
  direction: 1 | -1,
) {
  let index = startIndex

  while (index >= 0 && index < options.length) {
    if (!options[index]?.disabled) {
      return index
    }

    index += direction
  }

  return -1
}

export function Select({
  options = [],
  value: controlledValue,
  defaultValue = null,
  onChange,
  placeholder = 'Selecione uma opção',
  disabled = false,
  ariaLabel,
  multiple = false,
  className,
  name,
  id,
  label,
  helperText,
  feedback,
  renderFeedback,
  state,
}: SelectProps) {
  const generatedId = useId().replace(/:/g, '')
  const baseId = id ?? `govrs-select-${generatedId}`
  const labelId = label ? `${baseId}-label` : undefined
  const valueId = `${baseId}-value`
  const controlId = `${baseId}-control`
  const listId = `${baseId}-list`
  const helperId = helperText ? `${baseId}-helper` : undefined
  const resolvedName = name ?? (id ? `${id}-name` : `${baseId}-name`)
  const rootRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLDivElement>(null)

  const optionValues = useMemo(() => options.map((option) => option.value), [options])

  const sanitizeValue = (nextValue: SelectValue) => {
    if (multiple) {
      if (!Array.isArray(nextValue)) {
        return [] as string[]
      }

      return Array.from(new Set(nextValue.filter((item) => optionValues.includes(item))))
    }

    if (typeof nextValue !== 'string') {
      return null
    }

    return optionValues.includes(nextValue) ? nextValue : null
  }

  const isControlled = controlledValue !== undefined

  const [internalValue, setInternalValue] = useState<SelectValue>(() => {
    const initialValue = isControlled
      ? controlledValue
      : multiple
        ? (defaultValue ?? [])
        : (defaultValue ?? null)

    return sanitizeValue(initialValue)
  })
  const [open, setOpen] = useState(false)
  const [highlightedIndex, setHighlightedIndex] = useState(-1)

  useEffect(() => {
    if (isControlled) {
      setInternalValue(sanitizeValue(controlledValue))
      return
    }

    setInternalValue((currentValue) => sanitizeValue(currentValue))
  }, [controlledValue, isControlled, multiple, optionValues.join('|')])

  useEffect(() => {
    if (!open) {
      return undefined
    }

    const handlePointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handlePointerDown)
    return () => document.removeEventListener('mousedown', handlePointerDown)
  }, [open])

  useEffect(() => {
    if (!open || highlightedIndex < 0) {
      return
    }

    const item = listRef.current?.querySelector<HTMLElement>(`#${baseId}-opt-${highlightedIndex}`)
    item?.scrollIntoView({ block: 'nearest' })
  }, [baseId, highlightedIndex, open])

  const selectedValues = multiple
    ? (Array.isArray(internalValue) ? internalValue : [])
    : []

  const selectedOption = !multiple && typeof internalValue === 'string'
    ? options.find((option) => option.value === internalValue) ?? null
    : null

  const selectedOptions = multiple
    ? options.filter((option) => selectedValues.includes(option.value))
    : selectedOption
      ? [selectedOption]
      : []

  const feedbackNode = renderFeedback
    ? renderFeedback({
        value: internalValue,
        selectedOption,
        selectedOptions,
        options,
        multiple,
        isDisabled: disabled,
      })
    : feedback

  const feedbackId = feedbackNode ? `${baseId}-feedback` : undefined
  const describedBy = [helperId, feedbackId].filter(Boolean).join(' ') || undefined

  const hasSelection = multiple ? selectedValues.length > 0 : selectedOption != null

  const summary = multiple
    ? selectedOptions.length > 0
      ? selectedOptions.length === 1
        ? selectedOptions[0]?.label
        : (
            <>
              {selectedOptions[0]?.label} + ({selectedOptions.length - 1})
            </>
          )
      : placeholder
    : (selectedOption?.label ?? placeholder)

  const resolvedAriaLabel = ariaLabel ?? (typeof label === 'string' ? label : 'Select')

  const getOpenHighlightIndex = () => {
    const selectedIndex = multiple
      ? (selectedValues.length > 0 ? options.findIndex((option) => option.value === selectedValues[0]) : -1)
      : options.findIndex((option) => option.value === internalValue)

    if (selectedIndex >= 0 && !options[selectedIndex]?.disabled) {
      return selectedIndex
    }

    return getFirstEnabledIndex(options)
  }

  const openList = () => {
    if (disabled) {
      return
    }

    setOpen(true)
    setHighlightedIndex(getOpenHighlightIndex())
  }

  const closeList = () => {
    setOpen(false)
  }

  const toggleOpen = () => {
    if (open) {
      closeList()
      return
    }

    openList()
  }

  const emitChange = (nextValue: SelectValue, option: SelectOption) => {
    if (!isControlled) {
      setInternalValue(nextValue)
    }

    onChange?.((multiple ? (nextValue as string[]) : (nextValue as string)), option)
  }

  const handleSelect = (index: number) => {
    const option = options[index]

    if (!option || option.disabled) {
      return
    }

    if (multiple) {
      const nextValues = Array.isArray(internalValue) ? [...internalValue] : []
      const itemIndex = nextValues.indexOf(option.value)

      if (itemIndex >= 0) {
        nextValues.splice(itemIndex, 1)
      } else {
        nextValues.push(option.value)
      }

      emitChange(sanitizeValue(nextValues), option)
      setHighlightedIndex(index)
      return
    }

    emitChange(option.value, option)
    closeList()
  }

  const moveHighlight = (direction: 1 | -1) => {
    if (!options.length) {
      return
    }

    if (highlightedIndex === -1) {
      setHighlightedIndex(direction === 1 ? getFirstEnabledIndex(options) : getLastEnabledIndex(options))
      return
    }

    const nextIndex = getClosestEnabledIndex(options, highlightedIndex + direction, direction)
    if (nextIndex >= 0) {
      setHighlightedIndex(nextIndex)
    }
  }

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (disabled) {
      return
    }

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault()
        if (!open) {
          openList()
        } else {
          moveHighlight(1)
        }
        break
      case 'ArrowUp':
        event.preventDefault()
        if (!open) {
          openList()
        } else {
          moveHighlight(-1)
        }
        break
      case 'Home':
        event.preventDefault()
        openList()
        setHighlightedIndex(getFirstEnabledIndex(options))
        break
      case 'End':
        event.preventDefault()
        openList()
        setHighlightedIndex(getLastEnabledIndex(options))
        break
      case 'Enter':
      case ' ':
        event.preventDefault()
        if (!open) {
          openList()
        } else if (highlightedIndex >= 0) {
          handleSelect(highlightedIndex)
        }
        break
      case 'Escape':
        if (open) {
          event.preventDefault()
          closeList()
        }
        break
      case 'Tab':
        closeList()
        break
      default:
        break
    }
  }

  const classes = [
    'govrs-select',
    multiple ? 'govrs-select--multiple' : undefined,
    open ? 'govrs-select--open' : undefined,
    disabled ? 'govrs-select--disabled' : undefined,
    state ? `govrs-select--${state}` : undefined,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes} ref={rootRef}>
      {label ? (
        <span id={labelId} className="govrs-select__label">
          {label}
        </span>
      ) : null}

      <div className="govrs-select__wrapper">
        <button
          id={controlId}
          type="button"
          className="govrs-select__control"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={listId}
          aria-labelledby={labelId ? `${labelId} ${valueId}` : undefined}
          aria-label={labelId ? undefined : resolvedAriaLabel}
          aria-describedby={describedBy}
          disabled={disabled}
          onClick={toggleOpen}
          onKeyDown={onKeyDown}
        >
          <span className="govrs-select__leading-icon" aria-hidden="true">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>

          <span
            id={valueId}
            className={`govrs-select__value ${hasSelection ? '' : 'govrs-select__value--placeholder'}`}
          >
            {summary}
          </span>

          <span className="govrs-select__indicator" aria-hidden="true">
            <FontAwesomeIcon icon={faChevronDown} />
          </span>
        </button>

        {open ? (
          <div
            id={listId}
            className="govrs-select__list"
            role="listbox"
            aria-label={resolvedAriaLabel}
            aria-multiselectable={multiple || undefined}
            ref={listRef}
          >
            <div className="govrs-select__item govrs-select__item--header" role="presentation" aria-hidden="true">
              {placeholder}
            </div>

            {options.map((option, index) => {
              const isSelected = multiple
                ? selectedValues.includes(option.value)
                : selectedOption?.value === option.value
              const isHighlighted = highlightedIndex === index

              return (
                <div
                  key={option.value}
                  id={`${baseId}-opt-${index}`}
                  className={[
                    'govrs-select__item',
                    isSelected ? 'govrs-select__item--selected' : undefined,
                    isHighlighted ? 'govrs-select__item--highlighted' : undefined,
                    option.disabled ? 'govrs-select__item--disabled' : undefined,
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  role="option"
                  aria-selected={isSelected}
                  aria-disabled={option.disabled || undefined}
                  onMouseEnter={() => {
                    if (!option.disabled) {
                      setHighlightedIndex(index)
                    }
                  }}
                  onClick={() => handleSelect(index)}
                >
                  {multiple ? (
                    <span className="govrs-select__item-marker" aria-hidden="true" />
                  ) : null}

                  <span className="govrs-select__item-label">{option.label}</span>
                </div>
              )
            })}
          </div>
        ) : null}
      </div>

      {feedbackNode ? (
        <div id={feedbackId} className="govrs-select__feedback" role={state === 'danger' ? 'alert' : 'status'} aria-live="polite">
          {feedbackNode}
        </div>
      ) : null}

      {helperText ? (
        <small id={helperId} className="govrs-select__helper">
          {helperText}
        </small>
      ) : null}

      {!multiple ? (
        <input
          type="hidden"
          name={resolvedName}
          value={typeof internalValue === 'string' ? internalValue : ''}
          disabled={disabled}
        />
      ) : (
        selectedValues.map((selectedValue) => (
          <input
            key={selectedValue}
            type="hidden"
            name={resolvedName}
            value={selectedValue}
            disabled={disabled}
          />
        ))
      )}
    </div>
  )
}

export namespace Select {
  export type Props = SelectProps
  export type Option = SelectOption
  export type Value = SelectValue
  export type FeedbackContext = SelectFeedbackContext
  export type State = SelectState
}

export default Select