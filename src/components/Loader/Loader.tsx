import { useEffect, useId, useState } from 'react'
import type { HTMLAttributes, ReactNode } from 'react'

import './Loader.scss'


type LoaderVariant = 'default' | 'percentage'
type LoaderLabelPosition = 'top' | 'bottom' | 'left' | 'right'

type LoaderProps = Omit<HTMLAttributes<HTMLDivElement>, 'children' | 'color'> & {
  variant?: LoaderVariant
  label?: ReactNode
  labelPosition?: LoaderLabelPosition
  value?: number | string
  color?: string
}

type DefaultLoaderProps = Omit<LoaderProps, 'variant' | 'value' | 'color'>
type PercentageLoaderProps = Omit<LoaderProps, 'variant' | 'label' | 'labelPosition'>

const PROGRESS_SIZE = 84
const PROGRESS_STROKE_WIDTH = 10
const PROGRESS_SPACING = 30
const PROGRESS_CENTER = PROGRESS_SIZE / 2
const PROGRESS_RADIUS = PROGRESS_SIZE / 2 - PROGRESS_STROKE_WIDTH / 2
const PROGRESS_INNER_RADIUS = PROGRESS_RADIUS - PROGRESS_STROKE_WIDTH / 2 - PROGRESS_SPACING
const PROGRESS_CIRCUMFERENCE = 2 * Math.PI * PROGRESS_RADIUS
const DEFAULT_PROGRESS_COLOR = 'var(--govrs-color-brand-primary, #1A7235)'

function clampPercentage(value: number | string | undefined): number {
  const normalizedValue = Number(String(value ?? 0).replace(/[^0-9.-]/g, '')) || 0

  return Math.max(0, Math.min(100, normalizedValue))
}

function getLoaderClassName(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(' ')
}

function hasVisibleLabel(label: ReactNode) {
  if (label == null || label === false) {
    return false
  }

  if (typeof label === 'string') {
    return label.trim().length > 0
  }

  return true
}

function getLabelPosition(labelPosition: LoaderLabelPosition | undefined): LoaderLabelPosition {
  if (labelPosition === 'top' || labelPosition === 'left' || labelPosition === 'right') {
    return labelPosition
  }

  return 'bottom'
}

function LoaderLabel({
  id,
  label,
  position,
}: {
  id: string
  label: ReactNode
  position: LoaderLabelPosition
}) {
  return <span id={id} className={`govrs-loader__label govrs-loader__label--${position}`}>{label}</span>
}

function DefaultLoader({
  label,
  labelPosition = 'bottom',
  className,
  ...props
}: DefaultLoaderProps) {
  const labelId = useId()
  const resolvedLabelPosition = getLabelPosition(labelPosition)
  const hasLabel = hasVisibleLabel(label)

  const accessibilityProps = props['aria-label'] || props['aria-labelledby']
    ? {}
    : hasLabel
      ? { 'aria-labelledby': labelId }
      : { 'aria-label': 'Carregando' }

  const showLabelBefore = hasLabel && (resolvedLabelPosition === 'top' || resolvedLabelPosition === 'left')
  const showLabelAfter = hasLabel && !showLabelBefore

  return (
    <div
      {...props}
      {...accessibilityProps}
      className={getLoaderClassName(
        'govrs-loader',
        'govrs-loader--default',
        `govrs-loader--label-${resolvedLabelPosition}`,
        className,
      )}
      role="status"
      aria-live="polite"
    >
      {showLabelBefore ? (
        <LoaderLabel id={labelId} label={label} position={resolvedLabelPosition} />
      ) : null}

      <span className="govrs-loader__spinner-wrap" aria-hidden="true">
        <svg className="govrs-loader__spinner" viewBox="0 0 50 50" focusable="false">
          <circle className="govrs-loader__path" cx="25" cy="25" r="20" fill="none" strokeWidth="4" />
        </svg>
      </span>

      {showLabelAfter ? (
        <LoaderLabel id={labelId} label={label} position={resolvedLabelPosition} />
      ) : null}
    </div>
  )
}

function PercentageLoader({ value = 65, color = DEFAULT_PROGRESS_COLOR, className, ...props }: PercentageLoaderProps) {
  const percentage = clampPercentage(value)
  const roundedPercentage = Math.round(percentage)
  const targetOffset = PROGRESS_CIRCUMFERENCE - (percentage / 100) * PROGRESS_CIRCUMFERENCE
  const [offset, setOffset] = useState(PROGRESS_CIRCUMFERENCE)

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setOffset(targetOffset)
    }, 20)

    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [targetOffset])

  const accessibilityProps = props['aria-label'] || props['aria-labelledby']
    ? {}
    : { 'aria-label': 'Progresso' }

  return (
    <div
      {...props}
      {...accessibilityProps}
      className={getLoaderClassName('govrs-loader', 'govrs-loader--percentage', className)}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={percentage}
      aria-valuetext={`${roundedPercentage}%`}
    >
      <svg
        className="govrs-loader__progress-svg"
        viewBox={`0 0 ${PROGRESS_SIZE} ${PROGRESS_SIZE}`}
        aria-hidden="true"
        focusable="false"
      >
        <circle
          className="govrs-loader__progress-track"
          cx={PROGRESS_CENTER}
          cy={PROGRESS_CENTER}
          r={PROGRESS_RADIUS}
          transform={`rotate(270 ${PROGRESS_CENTER} ${PROGRESS_CENTER})`}
          strokeWidth={PROGRESS_STROKE_WIDTH}
        />

        <circle
          className="govrs-loader__progress-bar"
          cx={PROGRESS_CENTER}
          cy={PROGRESS_CENTER}
          r={PROGRESS_RADIUS}
          transform={`rotate(270 ${PROGRESS_CENTER} ${PROGRESS_CENTER})`}
          strokeWidth={PROGRESS_STROKE_WIDTH}
          stroke={color}
          strokeDasharray={PROGRESS_CIRCUMFERENCE}
          strokeDashoffset={offset}
        />

        <circle
          className="govrs-loader__progress-center"
          cx={PROGRESS_CENTER}
          cy={PROGRESS_CENTER}
          r={PROGRESS_INNER_RADIUS}
        />

        <text
          className="govrs-loader__percentage-text"
          x={PROGRESS_CENTER}
          y={PROGRESS_CENTER}
          fill={color}
        >
          {roundedPercentage}%
        </text>
      </svg>
    </div>
  )
}

export function Loader({
  variant = 'default',
  label,
  labelPosition,
  value,
  color,
  ...props
}: LoaderProps) {
  if (variant === 'percentage') {
    return <PercentageLoader {...props} value={value} color={color} />
  }

  return <DefaultLoader {...props} label={label} labelPosition={labelPosition} />
}

export namespace Loader {
  export type Props = LoaderProps
  export type Variant = LoaderVariant
  export type LabelPosition = LoaderLabelPosition
}

export default Loader