import { useEffect, useId, useRef, useState } from 'react'
import type {
  ChangeEvent,
  FormEvent,
  InputHTMLAttributes,
  KeyboardEvent,
  MouseEvent,
} from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faTimes } from '@fortawesome/free-solid-svg-icons'

import './Search.scss'


type SearchSubmitEvent =
  | FormEvent<HTMLFormElement>
  | KeyboardEvent<HTMLInputElement>
  | MouseEvent<HTMLButtonElement>
type SearchVoiceEvent = MouseEvent<HTMLButtonElement>

type SearchProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'children' | 'className' | 'defaultValue' | 'onChange' | 'size' | 'type' | 'value'
> & {
  className?: string
  inputClassName?: string
  value?: string
  defaultValue?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  onSearch?: (value: string, event: SearchSubmitEvent) => void
  active?: boolean
  defaultActive?: boolean
  onActiveChange?: (active: boolean) => void
  collapsible?: boolean
  voiceCommand?: boolean
  onVoice?: (event: SearchVoiceEvent) => void
  fullWidth?: boolean
  inputAriaLabel?: string
  searchButtonLabel?: string
  closeButtonLabel?: string
  voiceButtonLabel?: string
}

function getClassName(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(' ')
}

function VoiceCommandIcon() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 20 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 15C8.3125 15 7 13.6875 7 12V7C7 5.34375 8.3125 4 10 4C11.6562 4 13 5.34375 13 7V12C13 13.6875 11.6562 15 10 15ZM15 10C15.25 10 15.5 10.25 15.5 10.5V12C15.5 14.7812 13.4062 17.0938 10.75 17.4688V18.5H12.5C12.75 18.5 13 18.75 13 19V19.5C13 19.7812 12.75 20 12.5 20H7.5C7.21875 20 7 19.7812 7 19.5V19C7 18.75 7.21875 18.5 7.5 18.5H9.25V17.4375C6.46875 17.0625 4.5 14.5625 4.5 11.7812V10.5C4.5 10.25 4.71875 10 5 10H5.5C5.75 10 6 10.25 6 10.5V11.8438C6 13.9375 7.5 15.7812 9.59375 16C11.9688 16.2188 14 14.3438 14 12V10.5C14 10.25 14.2188 10 14.5 10H15Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function Search({
  id,
  name = 'SearchableText',
  value,
  defaultValue = '',
  onChange,
  onSearch,
  active,
  defaultActive = true,
  onActiveChange,
  collapsible = false,
  voiceCommand = false,
  onVoice,
  fullWidth = false,
  placeholder = 'O que você procura?',
  disabled = false,
  autoComplete = 'off',
  className,
  inputClassName,
  inputAriaLabel = 'Campo de busca',
  searchButtonLabel = 'Pesquisar',
  closeButtonLabel = 'Fechar busca',
  voiceButtonLabel = 'Comando por voz',
  onKeyDown,
  ...props
}: SearchProps) {
  const generatedId = useId().replace(/:/g, '')
  const inputId = id ?? `govrs-search-${generatedId}`
  const rootRef = useRef<HTMLFormElement | null>(null)
  const inputRef = useRef<HTMLInputElement | null>(null)

  const isValueControlled = value !== undefined
  const [internalValue, setInternalValue] = useState(defaultValue)
  const currentValue = isValueControlled ? value ?? '' : internalValue
  const isActiveControlled = active !== undefined
  const [internalActive, setInternalActive] = useState(defaultActive)
  const isActive = collapsible ? (isActiveControlled ? active : internalActive) : true
  const hasValue = currentValue.trim().length > 0
  const showVoiceButton = voiceCommand && (!collapsible || isActive)

  function setActiveState(nextActive: boolean) {
    if (!collapsible) {
      return
    }

    if (!isActiveControlled) {
      setInternalActive(nextActive)
    }

    onActiveChange?.(nextActive)
  }

  useEffect(() => {
    if (!collapsible || !isActive || disabled) {
      return
    }

    inputRef.current?.focus()
    inputRef.current?.select()
  }, [collapsible, disabled, isActive])

  useEffect(() => {
    if (!collapsible || !isActive || disabled) {
      return
    }

    function handleClickOutside(event: globalThis.MouseEvent) {
      if (event.target instanceof Node && rootRef.current?.contains(event.target)) {
        return
      }

      setActiveState(false)
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [collapsible, disabled, isActive])

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    if (!isValueControlled) {
      setInternalValue(event.target.value)
    }

    onChange?.(event)
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (disabled) {
      return
    }

    if (!hasValue) {
      if (collapsible) {
        setActiveState(false)
      }

      return
    }

    onSearch?.(currentValue, event)
  }

  function handleSearchButtonClick(event: MouseEvent<HTMLButtonElement>) {
    if (disabled) {
      event.preventDefault()
      return
    }

    if (collapsible && !isActive) {
      event.preventDefault()
      setActiveState(true)
      return
    }

    if (!hasValue) {
      event.preventDefault()

      if (collapsible) {
        setActiveState(false)
      }
    }
  }

  function handleVoiceButtonClick(event: MouseEvent<HTMLButtonElement>) {
    if (disabled || !voiceCommand) {
      event.preventDefault()
      return
    }

    onVoice?.(event)
  }

  function handleInputKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    onKeyDown?.(event)

    if (event.defaultPrevented) {
      return
    }

    if (event.key === 'Escape' && collapsible) {
      event.preventDefault()
      setActiveState(false)
      inputRef.current?.blur()
    }
  }

  return (
    <form
      ref={rootRef}
      className={getClassName(
        'govrs-search',
        fullWidth && 'govrs-search--block',
        collapsible && 'govrs-search--collapsible',
        voiceCommand && 'govrs-search--with-voice',
        disabled && 'govrs-search--disabled',
        className,
      )}
      onSubmit={handleSubmit}
      role="search"
      data-active={String(isActive)}
      data-collapsible={String(collapsible)}
      aria-disabled={disabled || undefined}
    >
      <div className="govrs-search__wrapper">
        <input
          {...props}
          ref={inputRef}
          id={inputId}
          name={name}
          type="search"
          value={currentValue}
          disabled={disabled}
          autoComplete={autoComplete}
          placeholder={placeholder}
          className={getClassName('govrs-search__field', inputClassName)}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          tabIndex={collapsible && !isActive ? -1 : props.tabIndex}
          aria-hidden={collapsible && !isActive ? true : undefined}
          aria-label={props['aria-label'] ?? inputAriaLabel}
        />

        <div className="govrs-search__actions">
          {showVoiceButton ? (
            <button
              type="button"
              className="govrs-search__button govrs-search__button--voice"
              aria-label={voiceButtonLabel}
              aria-controls={inputId}
              disabled={disabled}
              onClick={handleVoiceButtonClick}
            >
              <VoiceCommandIcon />
            </button>
          ) : null}

          <button
            type={isActive && hasValue ? 'submit' : 'button'}
            className="govrs-search__button govrs-search__button--search"
            aria-label={searchButtonLabel}
            aria-controls={inputId}
            aria-expanded={collapsible ? isActive : undefined}
            disabled={disabled}
            onClick={handleSearchButtonClick}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>

          {collapsible && isActive ? (
            <button
              type="button"
              className="govrs-search__button govrs-search__button--close"
              aria-label={closeButtonLabel}
              aria-controls={inputId}
              disabled={disabled}
              onClick={() => setActiveState(false)}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          ) : null}
        </div>
      </div>
    </form>
  )
}

export namespace Search {
  export type Props = SearchProps
  export type SubmitEvent = SearchSubmitEvent
  export type VoiceEvent = SearchVoiceEvent
}

export default Search