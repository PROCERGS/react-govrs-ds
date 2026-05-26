import {
  Fragment,
  cloneElement,
  isValidElement,
  useCallback,
  useEffect,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
  type ReactElement,
  type ReactNode,
} from 'react'

import { Tooltip } from '../Tooltip/Tooltip'

import './Step.scss'

type StepOrientation = 'horizontal' | 'vertical'
type StepVariant = 'default' | 'dotted' | 'plain'
type StepLabelPosition = 'above' | 'below' | 'left' | 'right'
type StepState = Tooltip.State
type StepInteractionEvent = ReactMouseEvent<HTMLElement>
type StepClickHandler = (
  event: StepInteractionEvent,
  step: StepItem,
  index: number,
) => void

type StepItem = {
  label?: ReactNode
  icon?: ReactNode
  href?: string
  onClick?: StepClickHandler
  state?: StepState
  number?: number
}

type ResolvedStepItem = StepItem & {
  active: boolean
}

type StepProps = {
  orientation?: StepOrientation
  steps?: StepItem[]
  activeIndex: number
  onStepClick?: StepClickHandler
  labelPosition?: StepLabelPosition
  variant?: StepVariant
  className?: string
}

type StepLayoutProps = {
  steps: ResolvedStepItem[]
  labelPosition: StepLabelPosition
  variant: StepVariant
  className?: string
}

function getClassName(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

function clampActiveIndex(index: number | undefined, totalSteps: number) {
  if (totalSteps <= 0) {
    return 0
  }

  const resolvedIndex = index ?? 0

  return Math.max(0, Math.min(resolvedIndex, totalSteps - 1))
}

function getTooltipPosition(labelPosition: StepLabelPosition, orientation: StepOrientation) {
  if (orientation === 'vertical') {
    switch (labelPosition) {
      case 'left':
        return 'left'
      case 'above':
        return 'top'
      case 'below':
        return 'bottom'
      case 'right':
      default:
        return 'right'
    }
  }

  switch (labelPosition) {
    case 'above':
      return 'top'
    case 'left':
      return 'left'
    case 'right':
      return 'right'
    case 'below':
    default:
      return 'bottom'
  }
}

function getStepAriaLabel(label: ReactNode, index: number) {
  if (typeof label === 'string' || typeof label === 'number') {
    return String(label)
  }

  return `Passo ${index + 1}`
}

function setCssCustomProperty(
  element: HTMLElement | null,
  propertyName: string,
  propertyValue?: string | null,
) {
  if (!element) {
    return
  }

  if (propertyValue == null || propertyValue === '') {
    element.style.removeProperty(propertyName)
    return
  }

  element.style.setProperty(propertyName, propertyValue)
}

function preserveTooltipTrigger(trigger: ReactNode) {
  if (!isValidElement(trigger)) {
    return trigger
  }

  return cloneElement(trigger as ReactElement<Record<string, unknown>>, {
    'data-tooltip-preserve': true,
  })
}

const DOTTED_STATE_ICON_SIZE = 18

function renderDottedStateIcon(state: StepState, size: number) {
  switch (state) {
    case 'success':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width={size} height={size} aria-hidden="true">
          <path
            fill="currentColor"
            d="M6.2 11.3L2.6 7.7a.9.9 0 0 1 1.3-1.3l2.3 2.3 6-6a.9.9 0 1 1 1.3 1.3l-6.9 6.9a.9.9 0 0 1-1.4 0z"
          />
        </svg>
      )
    case 'error':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width={size} height={size} aria-hidden="true">
          <path
            fill="currentColor"
            d="M10.6 5.4a.9.9 0 0 0-1.2 0L8 6.8 6.6 5.4A.9.9 0 0 0 5.4 6.6L6.8 8l-1.4 1.4a.9.9 0 1 0 1.2 1.2L8 9.2l1.4 1.4a.9.9 0 0 0 1.2-1.2L9.2 8l1.4-1.4a.9.9 0 0 0 0-1.2z"
          />
        </svg>
      )
    case 'warning':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width={size} height={size} aria-hidden="true">
          <path
            fill="currentColor"
            d="M8 3.4L14 12H2L8 3.4zM8 6.5a.7.7 0 1 0 0 1.4.7.7 0 0 0 0-1.4zm0 2.3a.6.6 0 0 0-.6.6v1.1c0 .3.3.6.6.6s.6-.3.6-.6V9.4c0-.3-.3-.6-.6-.6z"
          />
        </svg>
      )
    case 'info':
    default:
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width={size} height={size} aria-hidden="true">
          <path
            fill="currentColor"
            d="M8 3.2A4.8 4.8 0 1 0 8 12.8 4.8 4.8 0 0 0 8 3.2zM8.6 10.9H7.4V7.4h1.2v3.5zM8 5.4a.6.6 0 1 1 0-1.2.6.6 0 0 1 0 1.2z"
          />
        </svg>
      )
  }
}

function renderStateIcon(state: StepState, size: number) {
  switch (state) {
    case 'success':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 28 28" fill="none" aria-hidden="true">
          <circle cx="14" cy="14" r="14" fill="#168821" />
          <path
            d="M11.4063 19.75L6.21877 14.5625C5.90627 14.25 5.90627 13.7188 6.21877 13.4062L7.34377 12.2812C7.65627 11.9688 8.15627 11.9688 8.46877 12.2812L12 15.7812L19.5 8.28125C19.8125 7.96875 20.3125 7.96875 20.625 8.28125L21.75 9.40625C22.0625 9.71875 22.0625 10.25 21.75 10.5625L12.5625 19.75C12.25 20.0625 11.7188 20.0625 11.4063 19.75Z"
            fill="white"
          />
        </svg>
      )
    case 'error':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 28 28" fill="none" aria-hidden="true">
          <circle cx="14" cy="14" r="14" fill="#E52207" />
          <path
            d="M16.0625 14L19.1875 17.1562C19.5938 17.5312 19.5938 18.1562 19.1875 18.5312L18.5 19.2188C18.125 19.625 17.5 19.625 17.125 19.2188L14 16.0938L10.8438 19.2188C10.4688 19.625 9.84377 19.625 9.46877 19.2188L8.78127 18.5312C8.37502 18.1562 8.37502 17.5312 8.78127 17.1562L11.9063 14L8.78127 10.875C8.37502 10.5 8.37502 9.875 8.78127 9.5L9.46877 8.8125C9.84377 8.40625 10.4688 8.40625 10.8438 8.8125L14 11.9375L17.125 8.8125C17.5 8.40625 18.125 8.40625 18.5 8.8125L19.1875 9.5C19.5938 9.875 19.5938 10.5 19.1875 10.875L16.0625 14Z"
            fill="white"
          />
        </svg>
      )
    case 'warning':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 28 28" fill="none" aria-hidden="true">
          <circle cx="14" cy="14" r="7.5" fill="white" stroke="#1A7235" />
          <circle cx="14" cy="14" r="14" fill="#FFCD07" />
          <path
            d="M22.7813 19.7812C23.3438 20.7812 22.625 22 21.4688 22H6.50002C5.34377 22 4.62502 20.75 5.18752 19.7812L12.6875 6.75C13.25 5.75 14.7188 5.78125 15.2813 6.75L22.7813 19.7812ZM14 17.0625C13.1875 17.0625 12.5625 17.7188 12.5625 18.5C12.5625 19.3125 13.1875 19.9375 14 19.9375C14.7813 19.9375 15.4375 19.3125 15.4375 18.5C15.4375 17.7188 14.7813 17.0625 14 17.0625ZM12.625 11.9062L12.8438 16.1562C12.875 16.375 13.0313 16.5 13.2188 16.5H14.75C14.9375 16.5 15.0938 16.375 15.125 16.1562L15.3438 11.9062C15.375 11.6875 15.1875 11.5 14.9688 11.5H13C12.7813 11.5 12.5938 11.6875 12.625 11.9062Z"
            fill="#333333"
          />
        </svg>
      )
    case 'info':
    default:
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width={size} height={size} aria-hidden="true" focusable="false">
          <circle cx="14" cy="14" r="14" fill="#2d86d8" />
          <path
            fill="white"
            transform="translate(6.25,6.25)"
            d="M7.75 0C3.46875 0 0 3.5 0 7.75C0 12.0312 3.46875 15.5 7.75 15.5C12 15.5 15.5 12.0312 15.5 7.75C15.5 3.5 12 0 7.75 0ZM7.75 3.4375C8.46875 3.4375 9.0625 4.03125 9.0625 4.75C9.0625 5.5 8.46875 6.0625 7.75 6.0625C7 6.0625 6.4375 5.5 6.4375 4.75C6.4375 4.03125 7 3.4375 7.75 3.4375ZM9.5 11.375C9.5 11.5938 9.3125 11.75 9.125 11.75H6.375C6.15625 11.75 6 11.5938 6 11.375V10.625C6 10.4375 6.15625 10.25 6.375 10.25H6.75V8.25H6.375C6.15625 8.25 6 8.09375 6 7.875V7.125C6 6.9375 6.15625 6.75 6.375 6.75H8.375C8.5625 6.75 8.75 6.9375 8.75 7.125V10.25H9.125C9.3125 10.25 9.5 10.4375 9.5 10.625V11.375Z"
          />
        </svg>
      )
  }
}

function StepHorizontal({
  steps,
  labelPosition,
  variant,
  className,
}: StepLayoutProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const updateLabelSlot = useCallback(() => {
    const container = containerRef.current

    if (!container) {
      return
    }

    if (labelPosition !== 'above') {
      setCssCustomProperty(container, '--govrs-step-horizontal-label-slot', null)
      return
    }

    container.classList.add('govrs-step-horizontal--measuring')

    const labels = container.querySelectorAll<HTMLElement>('.govrs-step-horizontal__label--above')

    if (labels.length === 0) {
      container.classList.remove('govrs-step-horizontal--measuring')
      setCssCustomProperty(container, '--govrs-step-horizontal-label-slot', null)
      return
    }

    let maximumHeight = 0

    labels.forEach((label) => {
      const rect = label.getBoundingClientRect()

      if (rect.height > maximumHeight) {
        maximumHeight = rect.height
      }
    })

    container.classList.remove('govrs-step-horizontal--measuring')
    setCssCustomProperty(
      container,
      '--govrs-step-horizontal-label-slot',
      `${Math.round(maximumHeight + 8)}px`,
    )
  }, [labelPosition])

  useEffect(() => {
    updateLabelSlot()
    window.addEventListener('resize', updateLabelSlot)

    let resizeObserver: ResizeObserver | null = null

    if (typeof ResizeObserver !== 'undefined' && containerRef.current) {
      resizeObserver = new ResizeObserver(() => {
        updateLabelSlot()
      })

      containerRef.current
        .querySelectorAll<HTMLElement>('.govrs-step-horizontal__label--above')
        .forEach((label) => resizeObserver?.observe(label))
    }

    return () => {
      window.removeEventListener('resize', updateLabelSlot)
      resizeObserver?.disconnect()
    }
  }, [labelPosition, steps, updateLabelSlot])

  if (steps.length === 0) {
    return null
  }

  const isDottedVariant = variant === 'dotted'
  const isPlainVariant = variant === 'plain'

  return (
    <div
      ref={containerRef}
      className={getClassName(
        'govrs-step-horizontal',
        `govrs-step-horizontal--label-${labelPosition}`,
        variant !== 'default' && `govrs-step-horizontal--${variant}`,
        className,
      )}
      role="list"
    >
      {steps.map((step, index) => {
        const isActive = Boolean(step.active)
        const number = step.number ?? index + 1
        const isClickable = Boolean(step.href || typeof step.onClick === 'function')
        const hasState = Boolean(step.state)
        const tooltipPosition = getTooltipPosition(labelPosition, 'horizontal')

        const handleClick = (event: StepInteractionEvent) => {
          step.onClick?.(event, step, index)
        }

        if (isPlainVariant) {
          const circleClassName = getClassName(
            'govrs-step-horizontal__circle',
            'govrs-step-horizontal__circle--plain',
            isActive && 'is-active',
            isClickable && 'is-clickable',
          )

          const circleNode = step.href ? (
            <a
              className={circleClassName}
              href={step.href}
              onClick={handleClick}
              aria-current={isActive ? 'step' : undefined}
              aria-label={getStepAriaLabel(step.label, index)}
            />
          ) : isClickable ? (
            <button
              type="button"
              className={circleClassName}
              onClick={handleClick}
              aria-current={isActive ? 'step' : undefined}
              aria-label={getStepAriaLabel(step.label, index)}
            />
          ) : (
            <div className={circleClassName} aria-current={isActive ? 'step' : undefined} />
          )

          return (
            <div
              key={`${index}-${typeof step.label === 'string' ? step.label : 'step'}`}
              className={getClassName(
                'govrs-step-horizontal__item',
                hasState && 'govrs-step-horizontal__item--has-state',
              )}
              role="listitem"
            >
              {labelPosition === 'left' && step.label ? (
                <div className="govrs-step-horizontal__label govrs-step-horizontal__label--left">
                  {step.label}
                </div>
              ) : null}

              {labelPosition === 'above' && step.label ? (
                <div className="govrs-step-horizontal__label govrs-step-horizontal__label--above">
                  {step.label}
                </div>
              ) : null}

              {step.label ? (
                <Tooltip position={tooltipPosition} state={step.state} content={step.label}>
                  {preserveTooltipTrigger(circleNode)}
                </Tooltip>
              ) : (
                circleNode
              )}

              {index < steps.length - 1 && !isPlainVariant ? (
                <div className="govrs-step-horizontal__connector" aria-hidden="true" />
              ) : null}
            </div>
          )
        }

        const renderDefaultCircleNode = () => {
          const circleClassName = getClassName(
            'govrs-step-horizontal__circle',
            isDottedVariant && 'govrs-step-horizontal__circle--dotted',
            isActive && 'is-active',
            isClickable && 'is-clickable',
          )
          const ariaCurrent: 'step' | undefined = isActive ? 'step' : undefined

          const statusNode = !isDottedVariant && step.state ? (
            <span
              className={getClassName(
                'govrs-step-horizontal__status',
                `govrs-step-horizontal__status--${step.state}`,
                isActive && 'is-active',
              )}
            >
              {renderStateIcon(step.state, 28)}
            </span>
          ) : null

          const contentNode = !isDottedVariant ? (
            <>
              {step.icon ? (
                <span className="govrs-step-horizontal__icon">{step.icon}</span>
              ) : (
                <span className="govrs-step-horizontal__number">{number}</span>
              )}
              {statusNode}
            </>
          ) : null
          const ariaLabel = getStepAriaLabel(step.label, index)

          const baseProps = {
            className: circleClassName,
            'aria-current': ariaCurrent,
          }

          if (step.href) {
            return (
              <a {...baseProps} href={step.href} onClick={handleClick} aria-label={ariaLabel}>
                {contentNode}
              </a>
            )
          }

          if (isClickable) {
            return (
              <button type="button" {...baseProps} onClick={handleClick} aria-label={ariaLabel}>
                {contentNode}
              </button>
            )
          }

          return <div {...baseProps}>{contentNode}</div>
        }

        const renderDottedStateNode = () => {
          if (!step.state) {
            return renderDefaultCircleNode()
          }

          const stateClassName = getClassName(
            'govrs-step-horizontal__status',
            'govrs-step-horizontal__status--dotted',
            `govrs-step-horizontal__status--${step.state}`,
            isActive && 'is-active',
            isClickable && 'is-clickable',
          )

          const iconNode = renderDottedStateIcon(step.state, DOTTED_STATE_ICON_SIZE)
          const ariaLabel = getStepAriaLabel(step.label, index)

          if (step.href) {
            return (
              <a className={stateClassName} href={step.href} onClick={handleClick} aria-current={isActive ? 'step' : undefined} aria-label={ariaLabel}>
                {iconNode}
              </a>
            )
          }

          if (isClickable) {
            return (
              <button type="button" className={stateClassName} onClick={handleClick} aria-current={isActive ? 'step' : undefined} aria-label={ariaLabel}>
                {iconNode}
              </button>
            )
          }

          return (
            <div className={stateClassName} aria-current={isActive ? 'step' : undefined}>
              {iconNode}
            </div>
          )
        }

        const triggerNode = isDottedVariant ? renderDottedStateNode() : renderDefaultCircleNode()
        const wrappedTriggerNode =
          isDottedVariant && step.label ? (
            <Tooltip position={tooltipPosition} state={step.state} content={step.label}>
              {preserveTooltipTrigger(triggerNode)}
            </Tooltip>
          ) : (
            triggerNode
          )

        const nextStep = steps[index + 1]
        const connectorClassName = getClassName(
          'govrs-step-horizontal__connector',
          isDottedVariant && step.state && 'govrs-step-horizontal__connector--adj-left-large',
          isDottedVariant && nextStep?.state && 'govrs-step-horizontal__connector--adj-right-large',
        )

        return (
          <Fragment key={`${index}-${typeof step.label === 'string' ? step.label : 'step'}`}>
            <div
              className={getClassName(
                'govrs-step-horizontal__item',
                hasState && 'govrs-step-horizontal__item--has-state',
              )}
              role="listitem"
            >
              {labelPosition === 'left' && step.label ? (
                <div className="govrs-step-horizontal__label govrs-step-horizontal__label--left">
                  {step.label}
                </div>
              ) : null}

              {labelPosition === 'above' && step.label ? (
                <div className="govrs-step-horizontal__label govrs-step-horizontal__label--above">
                  {step.label}
                </div>
              ) : null}

              {wrappedTriggerNode}

              {!isDottedVariant && labelPosition === 'below' && step.label ? (
                <div className="govrs-step-horizontal__label govrs-step-horizontal__label--below">
                  {step.label}
                </div>
              ) : null}

              {!isDottedVariant && labelPosition === 'right' && step.label ? (
                <div className="govrs-step-horizontal__label govrs-step-horizontal__label--right">
                  {step.label}
                </div>
              ) : null}
            </div>

            {index < steps.length - 1 && !isPlainVariant ? (
              <div className={connectorClassName} aria-hidden="true" />
            ) : null}
          </Fragment>
        )
      })}
    </div>
  )
}

function StepVertical({
  steps,
  labelPosition,
  variant,
  className,
}: StepLayoutProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const updateLabelSlot = useCallback(() => {
    const container = containerRef.current

    if (!container) {
      return
    }

    if (labelPosition !== 'right' && labelPosition !== 'left') {
      setCssCustomProperty(container, '--govrs-step-vertical-label-slot', null)
      return
    }

    container.classList.add('govrs-step-vertical--measuring')

    const labels = container.querySelectorAll<HTMLElement>(
      '.govrs-step-vertical__label--right, .govrs-step-vertical__label--left',
    )

    if (labels.length === 0) {
      container.classList.remove('govrs-step-vertical--measuring')
      setCssCustomProperty(container, '--govrs-step-vertical-label-slot', null)
      return
    }

    let maximumWidth = 0

    labels.forEach((label) => {
      const rect = label.getBoundingClientRect()

      if (rect.width > maximumWidth) {
        maximumWidth = rect.width
      }
    })

    setCssCustomProperty(
      container,
      '--govrs-step-vertical-label-slot',
      `${Math.round(maximumWidth + 12)}px`,
    )

    container.classList.remove('govrs-step-vertical--measuring')
  }, [labelPosition])

  const updateMeasurements = useCallback(() => {
    const container = containerRef.current

    if (!container) {
      return
    }

    const circles = container.querySelectorAll<HTMLElement>(
      '.govrs-step-vertical__circle, .govrs-step-vertical__status',
    )

    if (circles.length === 0) {
      return
    }

    let maximumHeight = 0

    circles.forEach((circle) => {
      const rect = circle.getBoundingClientRect()

      if (rect.height > maximumHeight) {
        maximumHeight = rect.height
      }
    })

    if (maximumHeight <= 0) {
      return
    }

    const stepSize = Math.round(maximumHeight)
    const connectorGap = Math.round(Math.max(12, stepSize * 0.12))

    setCssCustomProperty(container, '--govrs-step-vertical-size', `${stepSize}px`)
    setCssCustomProperty(container, '--govrs-step-vertical-connector-gap', `${connectorGap}px`)
  }, [])

  useEffect(() => {
    updateLabelSlot()
    updateMeasurements()
    window.addEventListener('resize', updateLabelSlot)
    window.addEventListener('resize', updateMeasurements)

    let resizeObserver: ResizeObserver | null = null

    if (typeof ResizeObserver !== 'undefined' && containerRef.current) {
      resizeObserver = new ResizeObserver(() => {
        updateLabelSlot()
        updateMeasurements()
      })
      resizeObserver.observe(containerRef.current)
    }

    return () => {
      window.removeEventListener('resize', updateLabelSlot)
      window.removeEventListener('resize', updateMeasurements)
      resizeObserver?.disconnect()
    }
  }, [labelPosition, steps, updateLabelSlot, updateMeasurements])

  if (steps.length === 0) {
    return null
  }

  const isDottedVariant = variant === 'dotted'
  const isPlainVariant = variant === 'plain'

  return (
    <div
      ref={containerRef}
      className={getClassName(
        'govrs-step-vertical',
        `govrs-step-vertical--label-${labelPosition}`,
        variant !== 'default' && `govrs-step-vertical--${variant}`,
        className,
      )}
      role="list"
    >
      {steps.map((step, index) => {
        const isActive = Boolean(step.active)
        const number = step.number ?? index + 1
        const isClickable = Boolean(step.href || typeof step.onClick === 'function')
        const hasState = Boolean(step.state)
        const tooltipPosition = getTooltipPosition(labelPosition, 'vertical')

        const handleClick = (event: StepInteractionEvent) => {
          step.onClick?.(event, step, index)
        }

        if (isPlainVariant) {
          const circleClassName = getClassName(
            'govrs-step-vertical__circle',
            'govrs-step-vertical__circle--plain',
            isActive && 'is-active',
            isClickable && 'is-clickable',
          )
          const ariaLabel = getStepAriaLabel(step.label, index)

          const circleNode = step.href ? (
            <a
              className={circleClassName}
              href={step.href}
              onClick={handleClick}
              aria-current={isActive ? 'step' : undefined}
              aria-label={ariaLabel}
            />
          ) : isClickable ? (
            <button
              type="button"
              className={circleClassName}
              onClick={handleClick}
              aria-current={isActive ? 'step' : undefined}
              aria-label={ariaLabel}
            />
          ) : (
            <div className={circleClassName} aria-current={isActive ? 'step' : undefined} />
          )

          return (
            <div
              key={`${index}-${typeof step.label === 'string' ? step.label : 'step'}`}
              className={getClassName(
                'govrs-step-vertical__item',
                hasState && 'govrs-step-vertical__item--has-state',
              )}
              role="listitem"
            >
              {labelPosition === 'left' && step.label ? (
                <div className="govrs-step-vertical__label govrs-step-vertical__label--left">
                  {step.label}
                </div>
              ) : null}

              {step.label ? (
                <Tooltip position={tooltipPosition} state={step.state} content={step.label}>
                  {preserveTooltipTrigger(circleNode)}
                </Tooltip>
              ) : (
                circleNode
              )}

              {labelPosition === 'right' && step.label ? (
                <div className="govrs-step-vertical__label govrs-step-vertical__label--right">
                  {step.label}
                </div>
              ) : null}

              {index < steps.length - 1 && !isPlainVariant ? (
                <div className="govrs-step-vertical__connector" aria-hidden="true" />
              ) : null}
            </div>
          )
        }

        const renderDefaultCircleNode = () => {
          const circleClassName = getClassName(
            'govrs-step-vertical__circle',
            isDottedVariant && 'govrs-step-vertical__circle--dotted',
            isActive && 'is-active',
            isClickable && 'is-clickable',
          )
          const ariaCurrent: 'step' | undefined = isActive ? 'step' : undefined
          const statusNode = !isDottedVariant && step.state ? (
            <span className={getClassName('govrs-step-vertical__status', `govrs-step-vertical__status--${step.state}`)}>
              {renderStateIcon(step.state, 24)}
            </span>
          ) : null
          const contentNode = !isDottedVariant ? (
            <>
              {step.icon ? (
                <span className="govrs-step-vertical__icon">{step.icon}</span>
              ) : (
                <span className="govrs-step-vertical__number">{number}</span>
              )}
              {statusNode}
            </>
          ) : null
          const ariaLabel = getStepAriaLabel(step.label, index)
          const baseProps = {
            className: circleClassName,
            'aria-current': ariaCurrent,
          }

          if (step.href) {
            return (
              <a {...baseProps} href={step.href} onClick={handleClick} aria-label={ariaLabel}>
                {contentNode}
              </a>
            )
          }

          if (isClickable) {
            return (
              <button type="button" {...baseProps} onClick={handleClick} aria-label={ariaLabel}>
                {contentNode}
              </button>
            )
          }

          return <div {...baseProps}>{contentNode}</div>
        }

        const renderDottedStateNode = () => {
          if (!step.state) {
            return renderDefaultCircleNode()
          }

          const stateClassName = getClassName(
            'govrs-step-vertical__status',
            'govrs-step-vertical__status--dotted',
            `govrs-step-vertical__status--${step.state}`,
            isClickable && 'is-clickable',
          )
          const iconNode = renderDottedStateIcon(step.state, DOTTED_STATE_ICON_SIZE)
          const ariaLabel = getStepAriaLabel(step.label, index)

          if (step.href) {
            return (
              <a className={stateClassName} href={step.href} onClick={handleClick} aria-current={isActive ? 'step' : undefined} aria-label={ariaLabel}>
                {iconNode}
              </a>
            )
          }

          if (isClickable) {
            return (
              <button type="button" className={stateClassName} onClick={handleClick} aria-current={isActive ? 'step' : undefined} aria-label={ariaLabel}>
                {iconNode}
              </button>
            )
          }

          return (
            <div className={stateClassName} aria-current={isActive ? 'step' : undefined}>
              {iconNode}
            </div>
          )
        }

        const triggerNode = isDottedVariant ? renderDottedStateNode() : renderDefaultCircleNode()
        const wrappedTriggerNode =
          isDottedVariant && step.label ? (
            <Tooltip position={tooltipPosition} state={step.state} content={step.label}>
              {preserveTooltipTrigger(triggerNode)}
            </Tooltip>
          ) : (
            triggerNode
          )

        const nextStep = steps[index + 1]
        const connectorClassName = getClassName(
          'govrs-step-vertical__connector',
          isDottedVariant && step.state && 'govrs-step-vertical__connector--adj-top-large',
          isDottedVariant && nextStep?.state && 'govrs-step-vertical__connector--adj-bottom-large',
        )

        return (
          <Fragment key={`${index}-${typeof step.label === 'string' ? step.label : 'step'}`}>
            <div
              className={getClassName(
                'govrs-step-vertical__item',
                hasState && 'govrs-step-vertical__item--has-state',
              )}
              role="listitem"
            >
              {labelPosition === 'left' && step.label ? (
                <div className="govrs-step-vertical__label govrs-step-vertical__label--left">
                  {step.label}
                </div>
              ) : null}

              {labelPosition === 'above' && step.label ? (
                <div className="govrs-step-vertical__label govrs-step-vertical__label--above">
                  {step.label}
                </div>
              ) : null}

              {wrappedTriggerNode}

              {!isDottedVariant && labelPosition === 'right' && step.label ? (
                <div className="govrs-step-vertical__label govrs-step-vertical__label--right">
                  {step.label}
                </div>
              ) : null}

              {!isDottedVariant && labelPosition === 'below' && step.label ? (
                <div className="govrs-step-vertical__label govrs-step-vertical__label--below">
                  {step.label}
                </div>
              ) : null}
            </div>

            {index < steps.length - 1 && !isPlainVariant ? (
              <div className={connectorClassName} aria-hidden="true" />
            ) : null}
          </Fragment>
        )
      })}
    </div>
  )
}

export function Step({
  orientation = 'horizontal',
  steps = [],
  activeIndex,
  onStepClick,
  labelPosition = 'below',
  variant = 'default',
  className,
}: StepProps) {
  const LayoutComponent = orientation === 'vertical' ? StepVertical : StepHorizontal
  const totalSteps = steps.length
  const [internalIndex, setInternalIndex] = useState(() =>
    clampActiveIndex(activeIndex, totalSteps),
  )

  useEffect(() => {
    const nextIndex = clampActiveIndex(activeIndex, totalSteps)

    setInternalIndex((currentIndex) =>
      currentIndex === nextIndex ? currentIndex : nextIndex,
    )
  }, [activeIndex, totalSteps])

  const resolvedSteps = steps.map((step, index) => {
    const originalOnClick = step.onClick
    const mappedStep: ResolvedStepItem = {
      ...step,
      active: index === internalIndex,
    }

    mappedStep.onClick = (event) => {
      originalOnClick?.(event, step, index)

      const isInternalActivationPrevented = event.defaultPrevented

      onStepClick?.(event, step, index)

      if (isInternalActivationPrevented) {
        return
      }

      setInternalIndex(index)
    }

    return mappedStep
  })

  return (
    <LayoutComponent
      steps={resolvedSteps}
      labelPosition={labelPosition}
      variant={variant}
      className={className}
    />
  )
}

export namespace Step {
  export type Props = StepProps
  export type Item = StepItem
  export type Variant = StepVariant
  export type State = StepState
  export type Orientation = StepOrientation
  export type LabelPosition = StepLabelPosition
  export type InteractionEvent = StepInteractionEvent
  export type ClickHandler = StepClickHandler
}

export default Step