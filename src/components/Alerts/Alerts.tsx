import { useState, type MouseEvent, type ReactNode } from 'react'

import { Stack, Text } from '../../primitives'

import './Alerts.scss'

type AlertVariant = 'success' | 'warning' | 'error' | 'info'

type AlertsProps = {
  variant?: AlertVariant
  message?: ReactNode
  children?: ReactNode
  dismissible?: boolean
  onClose?: (event: MouseEvent<HTMLButtonElement>) => void
}

const SuccessIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 21" aria-hidden>
    <path
      d="M22.1875 10.5C22.1875 15.8516 17.8125 20.1875 12.5 20.1875C7.14844 20.1875 2.8125 15.8516 2.8125 10.5C2.8125 5.1875 7.14844 0.8125 12.5 0.8125C17.8125 0.8125 22.1875 5.1875 22.1875 10.5ZM11.3672 15.6562L18.5547 8.46875C18.7891 8.23438 18.7891 7.80469 18.5547 7.57031L17.6562 6.71094C17.4219 6.4375 17.0312 6.4375 16.7969 6.71094L10.9375 12.5703L8.16406 9.83594C7.92969 9.5625 7.53906 9.5625 7.30469 9.83594L6.40625 10.6953C6.17188 10.9297 6.17188 11.3594 6.40625 11.5938L10.4688 15.6562C10.7031 15.8906 11.1328 15.8906 11.3672 15.6562Z"
      fill="currentColor"
    />
  </svg>
)

const WarningIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 21" aria-hidden>
    <path
      d="M23.4766 17.7266C24.1797 18.9766 23.2812 20.5 21.8359 20.5H3.125C1.67969 20.5 0.78125 18.9375 1.48438 17.7266L10.8594 1.4375C11.5625 0.1875 13.3984 0.226562 14.1016 1.4375L23.4766 17.7266ZM12.5 14.3281C11.4844 14.3281 10.7031 15.1484 10.7031 16.125C10.7031 17.1406 11.4844 17.9219 12.5 17.9219C13.4766 17.9219 14.2969 17.1406 14.2969 16.125C14.2969 15.1484 13.4766 14.3281 12.5 14.3281ZM10.7812 7.88281L11.0547 13.1953C11.0938 13.4688 11.2891 13.625 11.5234 13.625H13.4375C13.6719 13.625 13.8672 13.4688 13.9062 13.1953L14.1797 7.88281C14.2188 7.60938 13.9844 7.375 13.7109 7.375H11.25C10.9766 7.375 10.7422 7.60938 10.7812 7.88281Z"
      fill="currentColor"
    />
  </svg>
)

const ErrorIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 21" aria-hidden>
    <path
      d="M12.5 0.8125C17.8516 0.8125 22.1875 5.14844 22.1875 10.5C22.1875 15.8516 17.8516 20.1875 12.5 20.1875C7.14844 20.1875 2.8125 15.8516 2.8125 10.5C2.8125 5.14844 7.14844 0.8125 12.5 0.8125ZM17.2266 13.0781L14.6875 10.5L17.2266 7.96094C17.4219 7.80469 17.4219 7.49219 17.2266 7.29688L15.7031 5.77344C15.5078 5.57812 15.1953 5.57812 15.0391 5.77344L12.5 8.3125L9.96094 5.77344C9.76562 5.57812 9.45312 5.57812 9.29688 5.77344L7.73438 7.29688C7.53906 7.49219 7.53906 7.80469 7.73438 7.96094L10.3125 10.5L7.73438 13.0391C7.53906 13.2344 7.53906 13.5469 7.73438 13.7031L9.25781 15.2656C9.45312 15.4609 9.76562 15.4609 9.92188 15.2656L12.5 12.6875L15.0391 15.2656C15.1953 15.4609 15.5078 15.4609 15.7031 15.2656L17.2266 13.7422C17.4219 13.5469 17.4219 13.2344 17.2266 13.0781Z"
      fill="currentColor"
    />
  </svg>
)

const InfoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" aria-hidden>
    <path
      d="M9.6875 0C15 0 19.375 4.375 19.375 9.6875C19.375 15.0391 15 19.375 9.6875 19.375C4.33594 19.375 0 15.0391 0 9.6875C0 4.375 4.33594 0 9.6875 0ZM9.6875 4.29688C8.75 4.29688 8.04688 5.03906 8.04688 5.9375C8.04688 6.875 8.75 7.57812 9.6875 7.57812C10.5859 7.57812 11.3281 6.875 11.3281 5.9375C11.3281 5.03906 10.5859 4.29688 9.6875 4.29688ZM11.875 14.2188V13.2812C11.875 13.0469 11.6406 12.8125 11.4062 12.8125H10.9375V8.90625C10.9375 8.67188 10.7031 8.4375 10.4688 8.4375H7.96875C7.69531 8.4375 7.5 8.67188 7.5 8.90625V9.84375C7.5 10.1172 7.69531 10.3125 7.96875 10.3125H8.4375V12.8125H7.96875C7.69531 12.8125 7.5 13.0469 7.5 13.2812V14.2188C7.5 14.4922 7.69531 14.6875 7.96875 14.6875H11.4062C11.6406 14.6875 11.875 14.4922 11.875 14.2188Z"
      fill="currentColor"
    />
  </svg>
)

export function Alerts({
  variant = 'success',
  message = null,
  children,
  dismissible = false,
  onClose,
}: AlertsProps) {
  const role = variant === 'error' ? 'alert' : 'status'
  const [visible, setVisible] = useState(true)

  const content = message != null ? message : children

  if (!visible) return null

  const handleClose = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setVisible(false)
    if (onClose) onClose(e)
  }

  return (
    <Stack className={`govrs-alert govrs-alert--${variant}`} role={role} direction="row" align="center" gap={2}>
      <div className="govrs-alert__icon" aria-hidden>
        {variant === 'success' && <SuccessIcon />}
        {variant === 'warning' && <WarningIcon />}
        {variant === 'error' && <ErrorIcon />}
        {variant === 'info' && <InfoIcon />}
      </div>

      <Stack className="govrs-alert__content" justify="center">
        <Text>{content}</Text>
      </Stack>

      {dismissible && (
        <button
          type="button"
          className="govrs-alert__close"
          aria-label="Fechar alerta"
          onClick={handleClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            aria-hidden
          >
            <path
              d="M18.0625 16L21.1875 12.875C21.5938 12.5 21.5938 11.875 21.1875 11.5L20.5 10.8125C20.125 10.4062 19.5 10.4062 19.125 10.8125L16 13.9375L12.8438 10.8125C12.4688 10.4062 11.8438 10.4062 11.4688 10.8125L10.7812 11.5C10.375 11.875 10.375 12.5 10.7812 12.875L13.9062 16L10.7812 19.1562C10.375 19.5312 10.375 20.1562 10.7812 20.5312L11.4688 21.2188C11.8438 21.625 12.4688 21.625 12.8438 21.2188L16 18.0938L19.125 21.2188C19.5 21.625 20.125 21.625 20.5 21.2188L21.1875 20.5312C21.5938 20.1562 21.5938 19.5312 21.1875 19.1562L18.0625 16Z"
              fill="currentColor"
            />
          </svg>
        </button>
      )}
    </Stack>
  )
}

export namespace Alerts {
  export type Props = AlertsProps
  export type Variant = AlertVariant
}
