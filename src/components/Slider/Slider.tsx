import {
  useEffect,
  useId,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from 'react'

import { ensureStylesheet } from '../../runtime/ensureStylesheet'
import stylesheetUrl from './Slider.scss?url'

ensureStylesheet(stylesheetUrl)

type SliderBaseProps = {
  label?: ReactNode
  vertical?: boolean
  markGap?: number
  snapping?: boolean
  precision?: number
  min?: number
  max?: number
  className?: string
  id?: string
  disabled?: boolean
  name?: string
}

type SliderRangeValue = [number, number]
type SliderThumbKey = 'single' | 'start' | 'end'

type SliderMark = {
  value: number
  label: string
  percent: number
  isEdge: boolean
}

type SliderPositionStyle = CSSProperties & Record<'--govrs-slider-position', string>
type SliderTrackStyle = CSSProperties & Record<'--govrs-slider-start' | '--govrs-slider-end', string>

type SliderSingleProps = SliderBaseProps & {
  range?: false
  value?: number
  defaultValue?: number
  onChange?: (value: number) => void
}

type SliderRangeProps = SliderBaseProps & {
  range: true
  value?: SliderRangeValue
  defaultValue?: SliderRangeValue
  onChange?: (value: SliderRangeValue) => void
  nameStart?: string
  nameEnd?: string
}

type SliderProps = SliderSingleProps | SliderRangeProps

function isRangeValue(value: number | SliderRangeValue | undefined): value is SliderRangeValue {
  return Array.isArray(value)
}

function clampValue(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value))
}

function normalizeNumber(value: number) {
  return Number(value.toFixed(10))
}

function roundToPrecision(value: number, precision: number) {
  if (precision <= 0) {
    return Math.round(value)
  }

  const factor = 10 ** precision
  return Math.round(value * factor) / factor
}

function snapValue(value: number, min: number, max: number, step: number) {
  if (step <= 0) {
    return clampValue(value, min, max)
  }

  if (Math.abs(max - value) <= step / 2) {
    return max
  }

  const normalized = min + Math.round((value - min) / step) * step
  return clampValue(normalizeNumber(normalized), min, max)
}

function sanitizeValue(
  value: number,
  min: number,
  max: number,
  snapping: boolean,
  step: number,
  precision: number,
) {
  const clampedValue = clampValue(value, min, max)

  if (snapping) {
    return snapValue(clampedValue, min, max, step)
  }

  return clampValue(normalizeNumber(roundToPrecision(clampedValue, precision)), min, max)
}

function valueToPercent(value: number, min: number, max: number) {
  if (max <= min) {
    return 0
  }

  return ((value - min) / (max - min)) * 100
}

function percentToValue(percent: number, min: number, max: number) {
  if (max <= min) {
    return min
  }

  return min + (percent / 100) * (max - min)
}

function generateMarks(min: number, max: number, markGap: number): SliderMark[] {
  const values: number[] = []

  for (let current = min; current <= max + Number.EPSILON; current += markGap) {
    values.push(normalizeNumber(current))
  }

  if (values.at(-1) !== max) {
    values.push(max)
  }

  return values.map((value, index) => ({
    value,
    label: String(value.toFixed(0)),
    percent: valueToPercent(value, min, max),
    isEdge: index === 0 || index === values.length - 1,
  }))
}

function normalizeRangeValue(startValue: number, endValue: number): SliderRangeValue {
  return startValue <= endValue
    ? [startValue, endValue]
    : [endValue, startValue]
}

function sanitizeRangeValue(
  value: SliderRangeValue | undefined,
  min: number,
  max: number,
  snapping: boolean,
  step: number,
  precision: number,
): SliderRangeValue {
  const startValue = value?.[0] ?? min
  const endValue = value?.[1] ?? max

  return normalizeRangeValue(
    sanitizeValue(startValue, min, max, snapping, step, precision),
    sanitizeValue(endValue, min, max, snapping, step, precision),
  )
}

export function Slider(props: SliderProps) {
  const isRange = props.range === true
  const singleProps = props as SliderSingleProps
  const rangeProps = props as SliderRangeProps
  const {
    label,
    vertical = false,
    markGap,
    snapping = false,
    precision = 0,
    min = 0,
    max = 100,
    className,
    id,
    disabled = false,
    name,
  } = props
  const generatedId = useId().replace(/:/g, '')
  const sliderId = id ?? `govrs-slider-${generatedId}`
  const trackRef = useRef<HTMLDivElement>(null)
  const [draggingThumb, setDraggingThumb] = useState<SliderThumbKey | null>(null)

  const defaultGap = (max - min) / 5
  const finalMarkGap = markGap && markGap > 0
    ? markGap
    : defaultGap > 0
      ? defaultGap
      : 1
  const realStepValue = precision > 0 ? 1 / 10 ** precision : 1
  const stepForSlider = snapping ? finalMarkGap : realStepValue
  const marks = generateMarks(min, max, finalMarkGap)
  const isControlled = props.value !== undefined
  const controlledSingleValue = typeof singleProps.value === 'number' ? singleProps.value : undefined
  const controlledRangeValue = isRangeValue(rangeProps.value) ? rangeProps.value : undefined
  const defaultSingleValue = typeof singleProps.defaultValue === 'number' ? singleProps.defaultValue : undefined
  const defaultRangeValue = isRangeValue(rangeProps.defaultValue) ? rangeProps.defaultValue : undefined
  const resolvedRangeNameStart = isRange
    ? (rangeProps.nameStart ?? (name ? `${name}Start` : undefined))
    : undefined
  const resolvedRangeNameEnd = isRange
    ? (rangeProps.nameEnd ?? (name ? `${name}End` : undefined))
    : undefined

  const sanitizeSingleSliderValue = (value: number | undefined) => sanitizeValue(
    value ?? min,
    min,
    max,
    snapping,
    stepForSlider,
    precision,
  )
  const sanitizeRangeSliderValue = (value: SliderRangeValue | undefined) => sanitizeRangeValue(
    value,
    min,
    max,
    snapping,
    stepForSlider,
    precision,
  )

  const [internalSingleValue, setInternalSingleValue] = useState(() => sanitizeSingleSliderValue(
    isControlled ? controlledSingleValue : defaultSingleValue,
  ))
  const [internalRangeValue, setInternalRangeValue] = useState<SliderRangeValue>(() => sanitizeRangeSliderValue(
    isControlled ? controlledRangeValue : defaultRangeValue,
  ))

  useEffect(() => {
    if (isRange) {
      return
    }

    if (isControlled) {
      setInternalSingleValue(sanitizeSingleSliderValue(controlledSingleValue))
      return
    }

    setInternalSingleValue((currentValue) => sanitizeSingleSliderValue(currentValue))
  }, [controlledSingleValue, isControlled, isRange, min, max, snapping, stepForSlider, precision])

  useEffect(() => {
    if (!isRange) {
      return
    }

    if (isControlled) {
      setInternalRangeValue(sanitizeRangeSliderValue(controlledRangeValue))
      return
    }

    setInternalRangeValue((currentValue) => sanitizeRangeSliderValue(currentValue))
  }, [
    controlledRangeValue?.[0],
    controlledRangeValue?.[1],
    isControlled,
    isRange,
    min,
    max,
    snapping,
    stepForSlider,
    precision,
  ])

  const resolvedRangeValue = isControlled
    ? sanitizeRangeSliderValue(controlledRangeValue)
    : internalRangeValue
  const resolvedSingleValue = isControlled
    ? sanitizeSingleSliderValue(controlledSingleValue)
    : internalSingleValue

  const classes = [
    'govrs-slider',
    vertical ? 'govrs-slider--vertical' : 'govrs-slider--horizontal',
    isRange ? 'govrs-slider--range' : 'govrs-slider--single',
    !snapping ? 'govrs-slider--free' : undefined,
    disabled ? 'govrs-slider--disabled' : undefined,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const startValue: number = isRange ? resolvedRangeValue![0] : resolvedSingleValue!
  const endValue: number | undefined = isRange ? resolvedRangeValue![1] : undefined
  const startPercent = isRange ? valueToPercent(startValue, min, max) : 0
  const endPercent = isRange
    ? valueToPercent(endValue!, min, max)
    : valueToPercent(startValue, min, max)

  const rangeBarStyle: SliderTrackStyle = {
    '--govrs-slider-start': `${startPercent}%`,
    '--govrs-slider-end': `${endPercent}%`,
  }

  const getPositionStyle = (percent: number): SliderPositionStyle => ({
    '--govrs-slider-position': `${percent}%`,
  })

  const emitSingleChange = (nextValue: number) => {
    const sanitizedNextValue = sanitizeSingleSliderValue(nextValue)

    if (!isControlled) {
      setInternalSingleValue(sanitizedNextValue)
    }

    if (!isRange) {
      singleProps.onChange?.(sanitizedNextValue)
    }
  }

  const emitRangeChange = (nextValue: SliderRangeValue) => {
    const sanitizedNextValue = sanitizeRangeSliderValue(nextValue)

    if (!isControlled) {
      setInternalRangeValue(sanitizedNextValue)
    }

    if (isRange) {
      rangeProps.onChange?.(sanitizedNextValue)
    }
  }

  const emitThumbValue = (thumb: SliderThumbKey, nextValue: number) => {
    if (!isRange) {
      emitSingleChange(nextValue)
      return
    }

    const [currentStartValue, currentEndValue] = resolvedRangeValue!
    const sanitizedNextValue = sanitizeSingleSliderValue(nextValue)

    if (thumb === 'start') {
      emitRangeChange([Math.min(sanitizedNextValue, currentEndValue), currentEndValue])
      return
    }

    emitRangeChange([currentStartValue, Math.max(sanitizedNextValue, currentStartValue)])
  }

  const getValueFromPointer = (clientX: number, clientY: number) => {
    const trackRect = trackRef.current?.getBoundingClientRect()

    if (!trackRect) {
      return null
    }

    const rawPercent = vertical
      ? ((clientY - trackRect.top) / trackRect.height) * 100
      : ((clientX - trackRect.left) / trackRect.width) * 100

    return percentToValue(clampValue(rawPercent, 0, 100), min, max)
  }

  const resolveClosestThumb = (nextValue: number): SliderThumbKey => {
    if (!isRange) {
      return 'single'
    }

    const currentEndValue = endValue ?? startValue

    return Math.abs(nextValue - startValue) <= Math.abs(nextValue - currentEndValue)
      ? 'start'
      : 'end'
  }

  const updateThumbFromPointer = (thumb: SliderThumbKey, clientX: number, clientY: number) => {
    if (disabled) {
      return
    }

    const pointerValue = getValueFromPointer(clientX, clientY)

    if (pointerValue == null) {
      return
    }

    emitThumbValue(thumb, pointerValue)
  }

  const handleInputChange = (newValue: string, index?: 0 | 1) => {
    if (disabled) {
      return
    }

    const numericValue = Number(newValue)

    if (Number.isNaN(numericValue)) {
      return
    }

    if (isRange) {
      const nextStartValue = index === 0 ? numericValue : startValue
      const nextEndValue: number = index === 1 ? numericValue : endValue!

      emitRangeChange(normalizeRangeValue(nextStartValue, nextEndValue))
      return
    }

    emitSingleChange(numericValue)
  }

  const handleTrackPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (disabled || event.button !== 0) {
      return
    }

    event.preventDefault()

    const pointerValue = getValueFromPointer(event.clientX, event.clientY)

    if (pointerValue == null) {
      return
    }

    const thumb = resolveClosestThumb(pointerValue)
    setDraggingThumb(thumb)
    emitThumbValue(thumb, pointerValue)
  }

  const handleThumbPointerDown = (
    event: ReactPointerEvent<HTMLSpanElement>,
    thumb: SliderThumbKey,
  ) => {
    if (disabled || event.button !== 0) {
      return
    }

    event.preventDefault()
    event.stopPropagation()
    event.currentTarget.focus()
    setDraggingThumb(thumb)
  }

  const handleThumbKeyDown = (
    event: KeyboardEvent<HTMLSpanElement>,
    thumb: SliderThumbKey,
  ) => {
    if (disabled) {
      return
    }

    const currentValue: number = thumb === 'start'
      ? startValue
      : thumb === 'end'
        ? endValue!
        : startValue
    const pageStep = snapping ? finalMarkGap * 2 : stepForSlider * 10
    let nextValue: number | null = null

    switch (event.key) {
      case 'ArrowLeft':
        nextValue = currentValue - stepForSlider
        break
      case 'ArrowRight':
        nextValue = currentValue + stepForSlider
        break
      case 'ArrowUp':
        nextValue = vertical ? currentValue - stepForSlider : currentValue + stepForSlider
        break
      case 'ArrowDown':
        nextValue = vertical ? currentValue + stepForSlider : currentValue - stepForSlider
        break
      case 'PageUp':
        nextValue = currentValue + pageStep
        break
      case 'PageDown':
        nextValue = currentValue - pageStep
        break
      case 'Home':
        nextValue = min
        break
      case 'End':
        nextValue = max
        break
      default:
        nextValue = null
    }

    if (nextValue == null) {
      return
    }

    event.preventDefault()
    emitThumbValue(thumb, nextValue)
  }

  useEffect(() => {
    if (!draggingThumb || disabled) {
      return undefined
    }

    const handleWindowPointerMove = (event: PointerEvent) => {
      event.preventDefault()
      updateThumbFromPointer(draggingThumb, event.clientX, event.clientY)
    }

    const handleWindowPointerUp = () => {
      setDraggingThumb(null)
    }

    window.addEventListener('pointermove', handleWindowPointerMove)
    window.addEventListener('pointerup', handleWindowPointerUp)
    window.addEventListener('pointercancel', handleWindowPointerUp)

    return () => {
      window.removeEventListener('pointermove', handleWindowPointerMove)
      window.removeEventListener('pointerup', handleWindowPointerUp)
      window.removeEventListener('pointercancel', handleWindowPointerUp)
    }
  }, [disabled, draggingThumb, updateThumbFromPointer])

  const renderThumb = (thumb: SliderThumbKey, value: number, percent: number, ariaLabel: string) => (
    <span
      key={thumb}
      role="slider"
      tabIndex={disabled ? -1 : 0}
      className="govrs-slider__thumb"
      data-active={draggingThumb === thumb ? 'true' : undefined}
      aria-label={ariaLabel}
      aria-disabled={disabled || undefined}
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={value}
      aria-orientation={vertical ? 'vertical' : 'horizontal'}
      onPointerDown={(event) => handleThumbPointerDown(event, thumb)}
      onKeyDown={(event) => handleThumbKeyDown(event, thumb)}
      style={getPositionStyle(percent)}
    />
  )

  return (
    <div id={sliderId} className={classes}>
      {label ? <span className="govrs-slider__label">{label}</span> : null}

      {vertical && isRange ? (
        <input
          type="number"
          className="govrs-slider__input"
          value={startValue}
          disabled={disabled}
          onChange={(event) => handleInputChange(event.target.value, 0)}
          min={min}
          max={max}
          step={stepForSlider}
          aria-label="Valor inicial do intervalo"
        />
      ) : null}

      <div className="govrs-slider__container">
        {!vertical && isRange ? (
          <input
            type="number"
            className="govrs-slider__input"
            value={startValue}
            disabled={disabled}
            onChange={(event) => handleInputChange(event.target.value, 0)}
            min={min}
            max={max}
            step={stepForSlider}
            aria-label="Valor inicial do intervalo"
          />
        ) : null}

        <div className="govrs-slider__track-container">
          <div
            ref={trackRef}
            className="govrs-slider__track"
            onPointerDown={handleTrackPointerDown}
            aria-disabled={disabled || undefined}
          >
            <span className="govrs-slider__rail" aria-hidden="true" />
            <span className="govrs-slider__range-bar" style={rangeBarStyle} aria-hidden="true" />

            {snapping ? (
              <span className="govrs-slider__steps" aria-hidden="true">
                {marks.map((mark) => (
                  mark.isEdge ? null : (
                    <span
                      key={`step-${mark.value}`}
                      className="govrs-slider__step"
                      style={getPositionStyle(mark.percent)}
                    />
                  )
                ))}
              </span>
            ) : null}

            <span className="govrs-slider__marks" aria-hidden="true">
              {marks.map((mark) => (
                <span
                  key={`mark-${mark.value}`}
                  className="govrs-slider__mark"
                  style={getPositionStyle(mark.percent)}
                >
                  {mark.label}
                </span>
              ))}
            </span>

            <span className="govrs-slider__thumbs" aria-hidden="true">
              {isRange
                ? [
                    renderThumb('start', startValue, startPercent, 'Valor inicial do intervalo'),
                    renderThumb('end', endValue!, endPercent, 'Valor final do intervalo'),
                  ]
                : renderThumb('single', startValue, endPercent, 'Valor atual')}
            </span>
          </div>
        </div>

        {!vertical ? (
          <input
            type="number"
            className="govrs-slider__input"
            value={endValue !== undefined ? endValue : startValue}
            disabled={disabled}
            onChange={(event) => handleInputChange(event.target.value, isRange ? 1 : undefined)}
            min={min}
            max={max}
            step={stepForSlider}
            aria-label={isRange ? 'Valor final do intervalo' : 'Valor atual'}
          />
        ) : null}
      </div>

      {vertical ? (
        <input
          type="number"
          className="govrs-slider__input"
          value={endValue !== undefined ? endValue : startValue}
          disabled={disabled}
          onChange={(event) => handleInputChange(event.target.value, isRange ? 1 : undefined)}
          min={min}
          max={max}
          step={stepForSlider}
          aria-label={isRange ? 'Valor final do intervalo' : 'Valor atual'}
        />
      ) : null}

      {!isRange && name ? (
        <input
          type="hidden"
          name={name}
          value={String(startValue)}
          disabled={disabled}
        />
      ) : null}

      {isRange && resolvedRangeNameStart ? (
        <input
          type="hidden"
          name={resolvedRangeNameStart}
          value={String(startValue)}
          disabled={disabled}
        />
      ) : null}

      {isRange && resolvedRangeNameEnd ? (
        <input
          type="hidden"
          name={resolvedRangeNameEnd}
          value={String(endValue!)}
          disabled={disabled}
        />
      ) : null}
    </div>
  )
}

export namespace Slider {
  export type Props = SliderProps
  export type RangeValue = SliderRangeValue
  export type Value = number | SliderRangeValue
}

export default Slider