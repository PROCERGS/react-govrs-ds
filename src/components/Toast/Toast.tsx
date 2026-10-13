import { useCallback, useEffect, useState, type ReactNode } from 'react'

import { Alerts } from '../Alerts/Alerts'

import './Toast.scss'


type ToastPosition = 'bottom-center' | 'bottom-left' | 'bottom-right' | 'top-center' | 'top-left' | 'top-right'

type ToastProps = {
  variant?: Alerts.Variant
  message?: ReactNode
  children?: ReactNode
  duration?: number
  dismissible?: boolean
  onClose?: () => void
  /** Visual icon to display. Pass `false` to hide the icon entirely. */
  icon?: ReactNode | false
  /** Where the toast appears on screen. */
  position?: ToastPosition
  /** Explicit ARIA role for the toast container. Defaults to `'status'` for non-error variants and `'alert'` for error. */
  ariaRole?: 'status' | 'alert'
}

export function Toast({
  variant = 'info',
  message,
  children,
  duration = 5000,
  dismissible = true,
  onClose,
  icon = true,
  position = 'bottom-center',
  ariaRole,
}: ToastProps) {
  const [visible, setVisible] = useState(true)

  const dismiss = useCallback(() => {
    setVisible(false)
    onClose?.()
  }, [onClose])

  useEffect(() => {
    if (!visible || !Number.isFinite(duration) || duration <= 0) return undefined

    const timeoutId = window.setTimeout(dismiss, duration)
    return () => window.clearTimeout(timeoutId)
  }, [dismiss, duration, visible])

  if (!visible) return null

  const effectiveRole = ariaRole ?? (variant === 'error' ? 'alert' : 'status')

  return (
    <div className="govrs-toast" data-position={position}>
      <Alerts
        variant={variant}
        message={message}
        dismissible={dismissible}
        onClose={dismiss}
        role={effectiveRole}
        icon={icon}
      >
        {children}
      </Alerts>
    </div>
  )
}

export namespace Toast {
  export type Props = ToastProps
  export type Variant = Alerts.Variant
  export type Position = ToastPosition
}

export default Toast
