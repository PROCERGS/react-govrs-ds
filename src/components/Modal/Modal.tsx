import {
  useEffect,
  useId,
  useRef,
  useState,
  type ChangeEvent,
  type ReactNode,
} from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronDown,
  faChevronUp,
  faImage,
  faXmark,
} from '@fortawesome/free-solid-svg-icons'

import { Button } from '../Button/Button'
import { Input } from '../Input/Input'

import { ensureStylesheet } from '../../runtime/ensureStylesheet'
import stylesheetUrl from './Modal.scss?url'

ensureStylesheet(stylesheetUrl)

type ModalAction = {
  label: string
  onClick: () => void
  variant?: Button.Variant
  disabled?: boolean
}

type ModalItem = {
  label: ReactNode
  img?: string
  image?: string
  imageAlt?: string
  content?: ReactNode
}

type ModalInputConfig = Omit<
  Input.Props,
  'defaultValue' | 'helperText' | 'label' | 'onChange' | 'value'
> & {
  label: ReactNode
  auxiliaryText?: ReactNode
  helperText?: ReactNode
  defaultValue?: string
  value?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

type ModalBaseProps = {
  title?: ReactNode
  onClose?: () => void
  buttonLeft?: ModalAction
  buttonRight?: ModalAction
  closeOnOverlayClick?: boolean
  closeOnEscape?: boolean
  children?: ReactNode
  className?: string
}

type ModalItemsProps = ModalBaseProps & {
  type: 'items'
  items?: ModalItem[]
  inputs?: never
}

type ModalFormProps = ModalBaseProps & {
  type: 'form'
  inputs?: ModalInputConfig[]
  items?: never
}

type ModalCustomProps = ModalBaseProps & {
  type: 'custom'
  items?: never
  inputs?: never
}

type ModalProps = ModalItemsProps | ModalFormProps | ModalCustomProps

function getClassName(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(' ')
}

function getFocusableElements(container: HTMLElement | null) {
  if (!container) {
    return []
  }

  const focusableElements = container.querySelectorAll<HTMLElement>(
    'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
  )

  return Array.from(focusableElements).filter((element) => {
    const styles = window.getComputedStyle(element)

    return styles.display !== 'none' && styles.visibility !== 'hidden' && !element.ariaHidden
  })
}

function ModalPlaceholder() {
  return (
    <span className="govrs-modal__placeholder" aria-hidden="true">
      <FontAwesomeIcon icon={faImage} />
    </span>
  )
}

function ModalItemsList({
  items = [],
  imageErrors,
  onImageError,
}: {
  items?: ModalItem[]
  imageErrors: Set<number>
  onImageError: (index: number) => void
}) {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set())

  function toggleItem(index: number) {
    setOpenItems((currentOpenItems) => {
      const nextOpenItems = new Set(currentOpenItems)

      if (nextOpenItems.has(index)) {
        nextOpenItems.delete(index)
      } else {
        nextOpenItems.add(index)
      }

      return nextOpenItems
    })
  }

  return (
    <div className="govrs-modal__items">
      {items.map((item, index) => {
        const isOpen = openItems.has(index)
        const resolvedImage = item.image ?? item.img
        const resolvedAlt = item.imageAlt ?? (typeof item.label === 'string' ? item.label : 'Item do modal')

        return (
          <article key={`${index}-${String(resolvedAlt)}`} className="govrs-modal__item">
            <button
              type="button"
              className="govrs-modal__item-toggle"
              onClick={() => toggleItem(index)}
              aria-expanded={isOpen}
            >
              <span className="govrs-modal__item-summary">
                {resolvedImage && !imageErrors.has(index) ? (
                  <img
                    className="govrs-modal__item-image"
                    src={resolvedImage}
                    alt={resolvedAlt}
                    onError={() => onImageError(index)}
                  />
                ) : (
                  <ModalPlaceholder />
                )}

                <span className="govrs-modal__item-label">{item.label}</span>
              </span>

              <FontAwesomeIcon
                icon={isOpen ? faChevronUp : faChevronDown}
                className="govrs-modal__item-icon"
              />
            </button>

            {isOpen && item.content ? (
              <div className="govrs-modal__item-content">{item.content}</div>
            ) : null}
          </article>
        )
      })}
    </div>
  )
}

function ModalFormFields({ inputs = [] }: { inputs?: ModalInputConfig[] }) {
  const [inputValues, setInputValues] = useState<Record<string, string>>({})

  return (
    <div className="govrs-modal__form-fields">
      {inputs.map((input, index) => {
        const {
          auxiliaryText,
          defaultValue,
          helperText,
          label,
          onChange,
          value,
          ...inputProps
        } = input

        const fieldKey = input.name ?? input.id ?? `field-${index}`
        const currentValue = value ?? inputValues[fieldKey] ?? defaultValue ?? ''

        return (
          <Input
            {...inputProps}
            key={fieldKey}
            label={label}
            helperText={helperText ?? auxiliaryText}
            value={currentValue}
            onChange={(event) => {
              if (value === undefined) {
                setInputValues((currentInputValues) => ({
                  ...currentInputValues,
                  [fieldKey]: event.target.value,
                }))
              }

              onChange?.(event)
            }}
          />
        )
      })}
    </div>
  )
}

export function Modal({
  title,
  onClose,
  buttonLeft,
  buttonRight,
  type,
  children,
  items,
  inputs,
  closeOnOverlayClick = true,
  closeOnEscape = true,
  className,
}: ModalProps) {
  const generatedId = useId().replace(/:/g, '')
  const titleId = `govrs-modal-title-${generatedId}`
  const bodyId = `govrs-modal-body-${generatedId}`
  const overlayRef = useRef<HTMLDivElement | null>(null)
  const dialogRef = useRef<HTMLDivElement | null>(null)
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set())

  useEffect(() => {
    const dialog = dialogRef.current

    if (!dialog) {
      return
    }

    const previouslyFocusedElement =
      document.activeElement instanceof HTMLElement ? document.activeElement : null
    const previousOverflow = document.body.style.overflow

    document.body.style.overflow = 'hidden'

    const focusableElements = getFocusableElements(dialog)
    const initialFocus = focusableElements[0]

    if (initialFocus) {
      initialFocus.focus()
    } else {
      dialog.focus()
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape' && closeOnEscape && onClose) {
        event.preventDefault()
        onClose()
        return
      }

      if (event.key !== 'Tab') {
        return
      }

      const currentFocusableElements = getFocusableElements(dialog)

      if (currentFocusableElements.length === 0) {
        event.preventDefault()
        dialogRef.current?.focus()
        return
      }

      const firstElement = currentFocusableElements[0]
      const lastElement = currentFocusableElements[currentFocusableElements.length - 1]

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault()
        lastElement.focus()
      }

      if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault()
        firstElement.focus()
      }
    }

    dialog.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      dialog.removeEventListener('keydown', handleKeyDown)
      previouslyFocusedElement?.focus()
    }
  }, [closeOnEscape, onClose])

  function handleImageError(index: number) {
    setImageErrors((currentImageErrors) => new Set(currentImageErrors).add(index))
  }

  function handleOverlayClick(event: React.MouseEvent<HTMLDivElement>) {
    if (!closeOnOverlayClick || !onClose || event.target !== overlayRef.current) {
      return
    }

    onClose()
  }

  function renderBodyContent() {
    if (type === 'items') {
      return (
        <>
          {children ? <div className="govrs-modal__lead">{children}</div> : null}
          <ModalItemsList items={items} imageErrors={imageErrors} onImageError={handleImageError} />
        </>
      )
    }

    if (type === 'form') {
      return (
        <>
          {children ? <div className="govrs-modal__lead">{children}</div> : null}
          <ModalFormFields inputs={inputs} />
        </>
      )
    }

    return children ? <div className="govrs-modal__lead govrs-modal__lead--custom">{children}</div> : null
  }

  return (
    <div
      ref={overlayRef}
      className={getClassName('govrs-modal', className)}
      onClick={handleOverlayClick}
    >
      <div
        ref={dialogRef}
        className="govrs-modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? titleId : undefined}
        aria-label={title ? undefined : 'Modal'}
        aria-describedby={bodyId}
        data-type={type}
        tabIndex={-1}
      >
        {title || onClose ? (
          <header className="govrs-modal__header">
            {title ? (
              <h2 id={titleId} className="govrs-modal__title">
                {title}
              </h2>
            ) : (
              <span className="govrs-modal__title-placeholder" />
            )}

            {onClose ? (
              <button
                type="button"
                className="govrs-modal__close"
                aria-label="Fechar modal"
                onClick={onClose}
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            ) : null}
          </header>
        ) : null}

        <div id={bodyId} className="govrs-modal__body">
          {renderBodyContent()}
        </div>

        {buttonLeft || buttonRight ? (
          <footer className="govrs-modal__footer">
            {buttonLeft ? (
              <Button
                variant={buttonLeft.variant ?? 'secondary'}
                onClick={buttonLeft.onClick}
                disabled={buttonLeft.disabled}
              >
                {buttonLeft.label}
              </Button>
            ) : null}

            {buttonRight ? (
              <Button
                variant={buttonRight.variant ?? 'primary'}
                onClick={buttonRight.onClick}
                disabled={buttonRight.disabled}
              >
                {buttonRight.label}
              </Button>
            ) : null}
          </footer>
        ) : null}
      </div>
    </div>
  )
}

export namespace Modal {
  export type Props = ModalProps
  export type Action = ModalAction
  export type InputConfig = ModalInputConfig
  export type Item = ModalItem
}

export default Modal