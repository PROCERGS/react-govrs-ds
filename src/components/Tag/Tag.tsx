import type { ReactNode } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'

import './Tag.scss'


export type TagVariant = 'interactive' | 'text' | 'icon' | 'score' | 'status'

export type TagBaseProps = {
  className?: string
}

export type TagContentProps = TagBaseProps & {
  label?: ReactNode
  children?: ReactNode
}

export type TagIconProps = {
  Icon?: IconDefinition
  showIcon?: boolean
}

export type TagInteractiveProps = TagContentProps & TagIconProps & {
  variant?: 'interactive'
  disabled?: boolean
  selected?: boolean
  showButton?: boolean
  showLabel?: boolean
  closeButtonLabel?: string
  onClose?: () => void
}

export type TagTextProps = TagContentProps & TagIconProps & {
  variant: 'text'
  showLabel?: boolean
}

export type TagIconOnlyProps = TagBaseProps & {
  variant: 'icon'
  Icon?: IconDefinition
  label?: string
}

export type TagScoreProps = TagBaseProps & {
  variant: 'score'
  score?: number | string
}

export type TagStatusProps = TagContentProps & {
  variant: 'status'
  showLabel?: boolean
}

export type TagProps =
  | TagInteractiveProps
  | TagTextProps
  | TagIconOnlyProps
  | TagScoreProps
  | TagStatusProps

function joinClasses(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

function resolveContent(label: ReactNode | undefined, children: ReactNode | undefined, fallback: ReactNode) {
  if (label != null) {
    return label
  }

  if (children != null) {
    return children
  }

  return fallback
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 28 28" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M16.0625 14L19.1875 17.1562C19.5938 17.5312 19.5938 18.1562 19.1875 18.5312L18.5 19.2188C18.125 19.625 17.5 19.625 17.125 19.2188L14 16.0938L10.8438 19.2188C10.4688 19.625 9.84375 19.625 9.46875 19.2188L8.78125 18.5312C8.375 18.1562 8.375 17.5312 8.78125 17.1562L11.9062 14L8.78125 10.875C8.375 10.5 8.375 9.875 8.78125 9.5L9.46875 8.8125C9.84375 8.40625 10.4688 8.40625 10.8438 8.8125L14 11.9375L17.125 8.8125C17.5 8.40625 18.125 8.40625 18.5 8.8125L19.1875 9.5C19.5938 9.875 19.5938 10.5 19.1875 10.875L16.0625 14Z"
      />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 28 32" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M11.4062 21.75L6.21874 16.5625C5.90624 16.25 5.90624 15.7188 6.21874 15.4062L7.34374 14.2812C7.65624 13.9688 8.15624 13.9688 8.46874 14.2812L12 17.7812L19.5 10.2812C19.8125 9.96875 20.3125 9.96875 20.625 10.2812L21.75 11.4062C22.0625 11.7188 22.0625 12.25 21.75 12.5625L12.5625 21.75C12.25 22.0625 11.7187 22.0625 11.4062 21.75Z"
      />
    </svg>
  )
}

function TagLeadingIcon({ Icon }: { Icon: IconDefinition }) {
  return (
    <span className="govrs-tag__icon" aria-hidden="true">
      <FontAwesomeIcon icon={Icon} />
    </span>
  )
}

function InteractiveTag({
  label,
  children,
  disabled = false,
  selected = false,
  showButton = true,
  showIcon = true,
  showLabel = true,
  Icon,
  closeButtonLabel = 'Remover tag',
  onClose,
  className,
}: TagInteractiveProps) {
  const content = resolveContent(label, children, 'Label')

  return (
    <span
      className={joinClasses(
        'govrs-tag',
        'govrs-tag--interactive',
        selected && 'govrs-tag--selected',
        disabled && 'govrs-tag--disabled',
        (!showIcon || !Icon) && 'govrs-tag--without-icon',
        className,
      )}
      aria-disabled={disabled || undefined}
    >
      {showIcon && Icon && <TagLeadingIcon Icon={Icon} />}
      {showLabel && <span className="govrs-tag__label">{content}</span>}
      {selected ? (
        <span className="govrs-tag__action govrs-tag__action--indicator" aria-hidden="true">
          <CheckIcon />
        </span>
      ) : showButton ? (
        <button
          type="button"
          className="govrs-tag__action"
          aria-label={closeButtonLabel}
          disabled={disabled}
          onClick={onClose}
        >
          <CloseIcon />
        </button>
      ) : null}
    </span>
  )
}

function TextTag({
  label,
  children,
  showIcon = true,
  showLabel = true,
  Icon,
  className,
}: TagTextProps) {
  const content = resolveContent(label, children, 'Label')

  return (
    <span
      className={joinClasses(
        'govrs-tag',
        'govrs-tag--text',
        className,
      )}
    >
      {showIcon && Icon && <TagLeadingIcon Icon={Icon} />}
      {showLabel && <span className="govrs-tag__label">{content}</span>}
    </span>
  )
}

function IconTag({ Icon, label = 'Tag', className }: TagIconOnlyProps) {
  return (
    <span className={joinClasses('govrs-tag', 'govrs-tag--icon', className)} aria-label={label}>
      {Icon && <TagLeadingIcon Icon={Icon} />}
    </span>
  )
}

function ScoreTag({ score = 9, className }: TagScoreProps) {
  return (
    <span className={joinClasses('govrs-tag', 'govrs-tag--score', className)} aria-label={`Pontuação ${score}`}>
      <span className="govrs-tag__label">{score}</span>
    </span>
  )
}

function StatusTag({ label, children, showLabel = true, className }: TagStatusProps) {
  const content = resolveContent(label, children, 'Label')

  return (
    <span
      className={joinClasses('govrs-tag-status', className)}
      aria-label={showLabel ? undefined : typeof content === 'string' ? content : 'Status'}
    >
      <span className="govrs-tag-status__dot" aria-hidden="true" />
      {showLabel && <span className="govrs-tag-status__label">{content}</span>}
    </span>
  )
}

export function Tag(props: TagProps) {
  switch (props.variant) {
    case 'text':
      return <TextTag {...props} />
    case 'icon':
      return <IconTag {...props} />
    case 'score':
      return <ScoreTag {...props} />
    case 'status':
      return <StatusTag {...props} />
    case 'interactive':
    default:
      return <InteractiveTag {...props} />
  }
}
