import {
  cloneElement,
  isValidElement,
  useId,
  type KeyboardEvent,
  type ReactElement,
  type ReactNode,
} from 'react'

import { ensureStylesheet } from '../../runtime/ensureStylesheet'
import stylesheetUrl from './Tooltip.scss?url'

ensureStylesheet(stylesheetUrl)

type TooltipPosition = 'top' | 'right' | 'bottom' | 'left'
type TooltipState = 'success' | 'warning' | 'error' | 'info'

type TooltipProps = {
  icon?: ReactNode
  title?: ReactNode
  position?: TooltipPosition
  state?: TooltipState
  children?: ReactNode
  content?: ReactNode
  className?: string
  defaultTriggerLabel?: string
}

type TriggerElementProps = {
  className?: string
  tabIndex?: number
  href?: string
  role?: string
  ['aria-describedby']?: string
  ['data-tooltip-preserve']?: boolean
}

function getClassName(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

function isFocusableTriggerElement(element: ReactElement<TriggerElementProps>) {
  if (element.props.tabIndex !== undefined || element.props.href) {
    return true
  }

  if (typeof element.type !== 'string') {
    return false
  }

  return ['button', 'input', 'select', 'textarea', 'summary'].includes(element.type)
}

export function Tooltip({
  icon = null,
  title,
  position = 'top',
  state,
  children,
  content = null,
  className,
  defaultTriggerLabel = 'Mostrar informação contextual',
}: TooltipProps) {
  const generatedId = useId().replace(/:/g, '')
  const tooltipId = `govrs-tooltip-${generatedId}`

  const hasContent = content !== null && content !== undefined
  const triggerNode = hasContent ? children : null
  const bodyNode = hasContent ? content : children
  const hasIcon = Boolean(icon)
  const hasBody = bodyNode !== null && bodyNode !== undefined
  const describedBy = hasBody ? tooltipId : undefined

  function handleKeyDown(event: KeyboardEvent<HTMLSpanElement>) {
    if (event.key === 'Escape' && event.target instanceof HTMLElement) {
      event.target.blur()
    }
  }

  function renderTrigger() {
    if (!hasContent) {
      return (
        <button
          type="button"
          className="govrs-tooltip__trigger"
          aria-describedby={describedBy}
          aria-label={defaultTriggerLabel}
        >
          <span className="govrs-tooltip__trigger-icon" aria-hidden="true">
            i
          </span>
        </button>
      )
    }

    if (isValidElement<TriggerElementProps>(triggerNode)) {
      const preserveClassName = Boolean(triggerNode.props['data-tooltip-preserve'])
      const interactiveTrigger = isFocusableTriggerElement(triggerNode)

      return cloneElement(triggerNode, {
        className: preserveClassName
          ? triggerNode.props.className
          : getClassName(
              triggerNode.props.className,
              interactiveTrigger ? undefined : 'govrs-tooltip__trigger-target',
            ),
        tabIndex: triggerNode.props.tabIndex ?? (interactiveTrigger ? undefined : 0),
        'aria-describedby': describedBy,
      })
    }

    return (
      <span
        className="govrs-tooltip__trigger-target"
        tabIndex={0}
        aria-describedby={describedBy}
      >
        {triggerNode}
      </span>
    )
  }

  return (
    <span
      className={getClassName('govrs-tooltip', className)}
      data-position={position}
      data-state={state ?? 'default'}
      onKeyDownCapture={handleKeyDown}
    >
      {renderTrigger()}

      {hasBody ? (
        <span
          id={tooltipId}
          role="tooltip"
          className={getClassName('govrs-tooltip__box', hasIcon && 'govrs-tooltip__box--with-icon')}
        >
          {hasIcon ? (
            <span className="govrs-tooltip__inner">
              <span className="govrs-tooltip__icon" aria-hidden="true">
                {icon}
              </span>

              <span className="govrs-tooltip__main">
                {title ? <span className="govrs-tooltip__title">{title}</span> : null}
                <span className="govrs-tooltip__body">{bodyNode}</span>
              </span>
            </span>
          ) : (
            <>
              {title ? (
                <span className="govrs-tooltip__header">
                  <span className="govrs-tooltip__title">{title}</span>
                </span>
              ) : null}

              <span className="govrs-tooltip__body">{bodyNode}</span>
            </>
          )}

          <span className="govrs-tooltip__arrow" aria-hidden="true" />
        </span>
      ) : null}
    </span>
  )
}

export namespace Tooltip {
  export type Props = TooltipProps
  export type Position = TooltipPosition
  export type State = TooltipState
}

export default Tooltip