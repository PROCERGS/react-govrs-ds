import { useId, type InputHTMLAttributes, type ReactNode } from 'react'

import './Switch.scss'


type SwitchProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> & {
  label?: ReactNode
  description?: ReactNode
}

export function Switch({
  id,
  label,
  description,
  className,
  disabled = false,
  ...props
}: SwitchProps) {
  const generatedId = useId().replace(/:/g, '')
  const inputId = id ?? `govrs-switch-${generatedId}`
  const descriptionId = description ? `${inputId}-description` : undefined

  const inputClasses = ['govrs-switch', className].filter(Boolean).join(' ')

  return (
    <label className={`govrs-switch-field ${disabled ? 'govrs-switch-field--disabled' : ''}`}>
      <input
        {...props}
        id={inputId}
        type="checkbox"
        role="switch"
        className={inputClasses}
        disabled={disabled}
        aria-describedby={descriptionId}
      />

      {(label || description) ? (
        <span className="govrs-switch-field__content">
          {label ? <span className="govrs-switch-field__label">{label}</span> : null}
          {description ? (
            <span id={descriptionId} className="govrs-switch-field__description">
              {description}
            </span>
          ) : null}
        </span>
      ) : null}
    </label>
  )
}

export namespace Switch {
  export type Props = SwitchProps
}

export default Switch