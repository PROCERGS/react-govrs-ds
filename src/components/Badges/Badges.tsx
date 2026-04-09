import type { ReactNode } from 'react'

import { Stack, Text } from '../../primitives'

import './Badges.scss'

type BadgeVariant = 'success' | 'warning' | 'error' | 'info'

type BadgesProps = {
  variant?: BadgeVariant
  message?: ReactNode
  children?: ReactNode
  outline?: boolean
}

function SuccessIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M15.5 7.75C15.5 3.5 12 0 7.75 0C3.46875 0 0 3.5 0 7.75C0 12.0312 3.46875 15.5 7.75 15.5C12 15.5 15.5 12.0312 15.5 7.75ZM6.84375 11.875C6.65625 12.0625 6.3125 12.0625 6.125 11.875L2.875 8.625C2.6875 8.4375 2.6875 8.09375 2.875 7.90625L3.59375 7.21875C3.78125 7 4.09375 7 4.28125 7.21875L6.5 9.40625L11.1875 4.71875C11.375 4.5 11.6875 4.5 11.875 4.71875L12.5938 5.40625C12.7812 5.59375 12.7812 5.9375 12.5938 6.125L6.84375 11.875Z"
      />
    </svg>
  )
}

function ErrorIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M7.75 0C3.46875 0 0 3.46875 0 7.75C0 12.0312 3.46875 15.5 7.75 15.5C12.0312 15.5 15.5 12.0312 15.5 7.75C15.5 3.46875 12.0312 0 7.75 0ZM11.5312 9.8125C11.6875 9.9375 11.6875 10.1875 11.5312 10.3438L10.3125 11.5625C10.1562 11.7188 9.90625 11.7188 9.78125 11.5625L7.75 9.5L5.6875 11.5625C5.5625 11.7188 5.3125 11.7188 5.15625 11.5625L3.9375 10.3125C3.78125 10.1875 3.78125 9.9375 3.9375 9.78125L6 7.75L3.9375 5.71875C3.78125 5.59375 3.78125 5.34375 3.9375 5.1875L5.1875 3.96875C5.3125 3.8125 5.5625 3.8125 5.71875 3.96875L7.75 6L9.78125 3.96875C9.90625 3.8125 10.1562 3.8125 10.3125 3.96875L11.5312 5.1875C11.6875 5.34375 11.6875 5.59375 11.5312 5.71875L9.5 7.75L11.5312 9.8125Z"
      />
    </svg>
  )
}

function WarningIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="17"
      viewBox="0 0 19 17"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M18.1562 14.0312L10.6562 1C10.0938 0.03125 8.625 0 8.0625 1L0.5625 14.0312C0 15 0.71875 16.25 1.875 16.25H16.8438C18 16.25 18.7188 15.0312 18.1562 14.0312ZM9.375 11.3125C10.1562 11.3125 10.8125 11.9688 10.8125 12.75C10.8125 13.5625 10.1562 14.1875 9.375 14.1875C8.5625 14.1875 7.9375 13.5625 7.9375 12.75C7.9375 11.9688 8.5625 11.3125 9.375 11.3125ZM8 6.15625C7.96875 5.9375 8.15625 5.75 8.375 5.75H10.3438C10.5625 5.75 10.75 5.9375 10.7188 6.15625L10.5 10.4062C10.4688 10.625 10.3125 10.75 10.125 10.75H8.59375C8.40625 10.75 8.25 10.625 8.21875 10.4062L8 6.15625Z"
      />
    </svg>
  )
}

function InfoIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M7.75 0C3.46875 0 0 3.5 0 7.75C0 12.0312 3.46875 15.5 7.75 15.5C12 15.5 15.5 12.0312 15.5 7.75C15.5 3.5 12 0 7.75 0ZM7.75 3.4375C8.46875 3.4375 9.0625 4.03125 9.0625 4.75C9.0625 5.5 8.46875 6.0625 7.75 6.0625C7 6.0625 6.4375 5.5 6.4375 4.75C6.4375 4.03125 7 3.4375 7.75 3.4375ZM9.5 11.375C9.5 11.5938 9.3125 11.75 9.125 11.75H6.375C6.15625 11.75 6 11.5938 6 11.375V10.625C6 10.4375 6.15625 10.25 6.375 10.25H6.75V8.25H6.375C6.15625 8.25 6 8.09375 6 7.875V7.125C6 6.9375 6.15625 6.75 6.375 6.75H8.375C8.5625 6.75 8.75 6.9375 8.75 7.125V10.25H9.125C9.3125 10.25 9.5 10.4375 9.5 10.625V11.375Z"
      />
    </svg>
  )
}

export function Badges({
  variant = 'info',
  message = null,
  children,
  outline = false,
}: BadgesProps) {
  const content = message != null ? message : children
  const classes = ['govrs-badge', `govrs-badge--${variant}`]
  if (outline) classes.push('govrs-badge--outline')

  const renderIcon = () => {
    switch (variant) {
      case 'success':
        return <SuccessIcon />
      case 'error':
        return <ErrorIcon />
      case 'warning':
        return <WarningIcon />
      case 'info':
      default:
        return <InfoIcon />
    }
  }

  return (
    <Stack className={classes.join(' ')} direction="row" display="inline-flex" align="center" gap={1}>
      <span className="govrs-badge__icon" aria-hidden>
        {renderIcon()}
      </span>
      <Text as="span" className="govrs-badge__text" size="sm">
        {content}
      </Text>
    </Stack>
  )
}

export namespace Badges {
  export type Props = BadgesProps
  export type Variant = BadgeVariant
}
