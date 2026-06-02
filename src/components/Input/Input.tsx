import { useId, useState, type InputHTMLAttributes, type ReactNode } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'

import { ensureStylesheet } from '../../runtime/ensureStylesheet'
import stylesheetUrl from './Input.scss?url'

ensureStylesheet(stylesheetUrl)

type InputState = 'danger' | 'success' | 'warning' | 'info'

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> & {
  label: ReactNode
  helperText?: ReactNode
  feedback?: ReactNode
  leftIcon?: IconDefinition
  state?: InputState
  showPasswordToggle?: boolean
}

export function Input({
  id,
  label,
  helperText,
  feedback,
  leftIcon,
  state,
  showPasswordToggle,
  className,
  disabled = false,
  type = 'text',
  ...props
}: InputProps) {
  const generatedId = useId().replace(/:/g, '')
  const inputId = id ?? `govrs-input-${generatedId}`
  const helperId = helperText ? `${inputId}-helper` : undefined
  const feedbackId = feedback ? `${inputId}-feedback` : undefined
  const describedBy = [helperId, feedbackId].filter(Boolean).join(' ') || undefined

  const isPasswordField = type === 'password'
  const canTogglePassword = !disabled && isPasswordField && (showPasswordToggle ?? true)
  const [passwordVisible, setPasswordVisible] = useState(false)

  const resolvedType = isPasswordField && canTogglePassword
    ? (passwordVisible ? 'text' : 'password')
    : type

  const classes = [
    'govrs-input',
    state ? `govrs-input--${state}` : undefined,
    disabled ? 'govrs-input--disabled' : undefined,
    leftIcon ? 'govrs-input--with-icon' : undefined,
    canTogglePassword ? 'govrs-input--with-toggle' : undefined,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const feedbackRole = state === 'danger' ? 'alert' : 'status'

  return (
    <div className={classes}>
      <label htmlFor={inputId} className="govrs-input__label">
        {label}
      </label>

      <div className="govrs-input__control">
        {leftIcon ? (
          <span className="govrs-input__icon" aria-hidden="true">
            <FontAwesomeIcon icon={leftIcon} />
          </span>
        ) : null}

        <input
          {...props}
          id={inputId}
          type={resolvedType}
          className="govrs-input__field"
          disabled={disabled}
          aria-invalid={state === 'danger' || undefined}
          aria-describedby={describedBy}
        />

        {canTogglePassword ? (
          <button
            type="button"
            className="govrs-input__toggle"
            onClick={() => setPasswordVisible((current) => !current)}
            aria-label={passwordVisible ? 'Ocultar senha' : 'Mostrar senha'}
            disabled={disabled}
          >
            <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
          </button>
        ) : null}
      </div>

      {feedback ? (
        <div id={feedbackId} className="govrs-input__feedback" role={feedbackRole} aria-live="polite">
          {feedback}
        </div>
      ) : null}

      {helperText ? (
        <small id={helperId} className="govrs-input__helper">
          {helperText}
        </small>
      ) : null}
    </div>
  )
}

export namespace Input {
  export type Props = InputProps
  export type State = InputState
}

export default Input