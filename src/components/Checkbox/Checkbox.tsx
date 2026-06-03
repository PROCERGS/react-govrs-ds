import { useEffect, useId, useRef, type InputHTMLAttributes, type ReactNode } from 'react'

import './Checkbox.scss'


type CheckboxVariant = 'default' | 'danger' | 'success'

type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> & {
  label?: ReactNode
  description?: ReactNode
  variant?: CheckboxVariant
  indeterminate?: boolean
  group?: boolean
}

export function Checkbox({
  id,
  label,
  description,
  variant = 'default',
  indeterminate = false,
  group = false,
  className,
  disabled = false,
  ...props
}: CheckboxProps) {
  const generatedId = useId().replace(/:/g, '')
  const inputId = id ?? `govrs-checkbox-${generatedId}`
  const descriptionId = description ? `${inputId}-description` : undefined
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate
    }
  }, [indeterminate])

  const inputClasses = [
    'govrs-checkbox',
    variant !== 'default' ? `govrs-checkbox--${variant}` : undefined,
    group ? 'govrs-checkbox--group' : undefined,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <label className={`govrs-checkbox-field ${disabled ? 'govrs-checkbox-field--disabled' : ''}`}>
      <input
        {...props}
        ref={inputRef}
        id={inputId}
        type="checkbox"
        className={inputClasses}
        disabled={disabled}
        aria-describedby={descriptionId}
        aria-invalid={variant === 'danger' || undefined}
      />

      {(label || description) ? (
        <span className="govrs-checkbox-field__content">
          {label ? <span className="govrs-checkbox-field__label">{label}</span> : null}
          {description ? (
            <span id={descriptionId} className="govrs-checkbox-field__description">
              {description}
            </span>
          ) : null}
        </span>
      ) : null}
    </label>
  )
}

export namespace Checkbox {
  export type Props = CheckboxProps
  export type Variant = CheckboxVariant
}

export default Checkbox