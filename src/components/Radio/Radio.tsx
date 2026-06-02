import { useId, type InputHTMLAttributes, type ReactNode } from 'react'

import { ensureStylesheet } from '../../runtime/ensureStylesheet'
import stylesheetUrl from './Radio.scss?url'

ensureStylesheet(stylesheetUrl)

type RadioVariant = 'default' | 'danger' | 'success'

type RadioProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> & {
  label?: ReactNode
  description?: ReactNode
  variant?: RadioVariant
}

export function Radio({
  id,
  name,
  checked,
  defaultChecked,
  label,
  description,
  variant = 'default',
  className,
  disabled = false,
  ...props
}: RadioProps) {
  const generatedId = useId().replace(/:/g, '')
  const inputId = id ?? `govrs-radio-${generatedId}`
  const descriptionId = description ? `${inputId}-description` : undefined
  const normalizedName = typeof name === 'string' && name.trim().length > 0 ? name : undefined
  const resolvedDefaultChecked = normalizedName && checked === undefined ? defaultChecked : undefined

  const inputClasses = [
    'govrs-radio',
    variant !== 'default' ? `govrs-radio--${variant}` : undefined,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <label className={`govrs-radio-field ${disabled ? 'govrs-radio-field--disabled' : ''}`}>
      <input
        {...props}
        id={inputId}
        name={normalizedName}
        type="radio"
        className={inputClasses}
        disabled={disabled}
        checked={checked}
        defaultChecked={resolvedDefaultChecked}
        aria-describedby={descriptionId}
        aria-invalid={variant === 'danger' || undefined}
      />

      {(label || description) ? (
        <span className="govrs-radio-field__content">
          {label ? <span className="govrs-radio-field__label">{label}</span> : null}
          {description ? (
            <span id={descriptionId} className="govrs-radio-field__description">
              {description}
            </span>
          ) : null}
        </span>
      ) : null}
    </label>
  )
}

export namespace Radio {
  export type Props = RadioProps
  export type Variant = RadioVariant
}

export default Radio