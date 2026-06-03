import {
  type CSSProperties,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
} from 'react'
import { createPortal } from 'react-dom'

import './DatePicker.scss'


type DatePickerVariant = 'date' | 'time' | 'datetime'
type DatePickerValue = string | null
type DatePickerRangeValue = {
  start: DatePickerValue
  end: DatePickerValue
}
type DatePickerSelectionMode = 'single' | 'range'
type DatePickerRangeNameMode = 'object' | 'suffix' | 'indexed'

type TimeSegments = {
  hours: number
  minutes: number
}

type TimeDraft = {
  hours: string
  minutes: string
}

type DateTimeSegments = {
  date: Date
  time: TimeSegments
}

type CalendarDayCell = {
  date: Date
  value: string
  dayNumber: number
  isCurrentMonth: boolean
  isSelected: boolean
  isRangeStart: boolean
  isRangeEnd: boolean
  isInRange: boolean
  isToday: boolean
  isDisabled: boolean
}

type DatePickerBaseProps = {
  selectionMode?: DatePickerSelectionMode
  value?: DatePickerValue
  defaultValue?: string
  onChange?: (value: DatePickerValue) => void
  rangeValue?: DatePickerRangeValue
  defaultRangeValue?: DatePickerRangeValue
  onRangeChange?: (value: DatePickerRangeValue) => void
  nameMode?: DatePickerRangeNameMode
  startName?: string
  endName?: string
  id?: string
  name?: string
  className?: string
  ariaLabel?: string
  disabled?: boolean
  placeholder?: string
  showClearButton?: boolean
  clearButtonLabel?: string
}

type DatePickerDateProps = DatePickerBaseProps & {
  variant?: 'date'
  min?: string
  max?: string
}

type DatePickerTimeProps = DatePickerBaseProps & {
  variant: 'time'
  min?: string
  max?: string
  step?: number
}

type DatePickerDateTimeProps = DatePickerBaseProps & {
  variant: 'datetime'
  min?: string
  max?: string
  step?: number
}

type DatePickerProps = DatePickerDateProps | DatePickerTimeProps | DatePickerDateTimeProps
type DatePickerSingleProps = DatePickerDateProps | DatePickerTimeProps | DatePickerDateTimeProps
type DatePickerDateRangeProps = Omit<
  DatePickerDateProps,
  | 'selectionMode'
  | 'value'
  | 'defaultValue'
  | 'onChange'
  | 'rangeValue'
  | 'defaultRangeValue'
  | 'onRangeChange'
  | 'nameMode'
  | 'startName'
  | 'endName'
> & {
  selectionMode: 'range'
  rangeValue?: DatePickerRangeValue
  defaultRangeValue?: DatePickerRangeValue
  onRangeChange?: (value: DatePickerRangeValue) => void
  nameMode?: DatePickerRangeNameMode
  startName?: string
  endName?: string
}

const monthLabels = [
  'Janeiro',
  'Fevereiro',
  'Marco',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
]

const weekdayLabels = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']
const accessibleDateFormatter = new Intl.DateTimeFormat('pt-BR', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
})

function joinClassNames(...classNames: Array<string | false | null | undefined>) {
  return classNames.filter(Boolean).join(' ')
}

function getDefaultPlaceholder(variant: DatePickerVariant) {
  if (variant === 'time') {
    return 'Selecione o horário'
  }

  if (variant === 'datetime') {
    return 'Selecione data e horário'
  }

  return 'Selecione a data'
}

function getAriaLabel(ariaLabel: string | undefined, variant: DatePickerVariant) {
  if (ariaLabel) {
    return ariaLabel
  }

  if (variant === 'time') {
    return 'Selecionar horário'
  }

  if (variant === 'datetime') {
    return 'Selecionar data e horário'
  }

  return 'Selecionar data'
}

function getOpenButtonLabel(variant: DatePickerVariant) {
  if (variant === 'time') {
    return 'Abrir seletor de horário'
  }

  if (variant === 'datetime') {
    return 'Abrir seletor de data e horário'
  }

  return 'Abrir seletor de data'
}

function isValidValue(variant: DatePickerVariant, value: string) {
  const datePattern = /^\d{4}-\d{2}-\d{2}$/
  const timePattern = /^\d{2}:\d{2}(?::\d{2})?$/
  const datetimePattern = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(?::\d{2})?$/

  if (variant === 'time') {
    return timePattern.test(value)
  }

  if (variant === 'datetime') {
    return datetimePattern.test(value)
  }

  return datePattern.test(value)
}

function sanitizeValue(variant: DatePickerVariant, value?: string | null) {
  if (!value) {
    return null
  }

  return isValidValue(variant, value) ? value : null
}

function sanitizeConstraint(variant: DatePickerVariant, value?: string) {
  if (!value) {
    return undefined
  }

  return isValidValue(variant, value) ? value : undefined
}

function formatDateValue(date: Date) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')

  return `${year}-${month}-${day}`
}

function formatDateTimeValue(date: Date, time: TimeSegments) {
  return `${formatDateValue(date)}T${formatTimeValue(time)}`
}

function parseDateValue(value?: string | null) {
  if (!value) {
    return null
  }

  const [yearText, monthText, dayText] = value.split('-')
  const year = Number(yearText)
  const month = Number(monthText)
  const day = Number(dayText)

  if (
    Number.isNaN(year) ||
    Number.isNaN(month) ||
    Number.isNaN(day) ||
    month < 1 ||
    month > 12 ||
    day < 1 ||
    day > 31
  ) {
    return null
  }

  const date = new Date(year, month - 1, day)

  if (
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day
  ) {
    return null
  }

  return date
}

function parseDateTimeValue(value?: string | null): DateTimeSegments | null {
  if (!value) {
    return null
  }

  const [dateText, timeText] = value.split('T')

  if (!dateText || !timeText) {
    return null
  }

  const date = parseDateValue(dateText)
  const time = parseTimeValue(timeText)

  if (!date || !time) {
    return null
  }

  return {
    date,
    time,
  }
}

function startOfMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), 1)
}

function endOfMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0)
}

function addDays(date: Date, amount: number) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + amount)
}

function addMonths(date: Date, amount: number) {
  return new Date(date.getFullYear(), date.getMonth() + amount, 1)
}

function getDateTimestamp(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime()
}

function isSameDay(firstDate: Date | null, secondDate: Date | null) {
  if (!firstDate || !secondDate) {
    return false
  }

  return getDateTimestamp(firstDate) === getDateTimestamp(secondDate)
}

function isDateOutsideRange(date: Date, minimumDate: Date | null, maximumDate: Date | null) {
  const timestamp = getDateTimestamp(date)

  if (minimumDate && timestamp < getDateTimestamp(minimumDate)) {
    return true
  }

  if (maximumDate && timestamp > getDateTimestamp(maximumDate)) {
    return true
  }

  return false
}

function isDateWithinRange(date: Date, rangeStartDate: Date | null, rangeEndDate: Date | null) {
  if (!rangeStartDate || !rangeEndDate) {
    return false
  }

  const timestamp = getDateTimestamp(date)

  return timestamp > getDateTimestamp(rangeStartDate) && timestamp < getDateTimestamp(rangeEndDate)
}

function buildCalendarDays(
  calendarMonth: Date,
  selectedDate: Date | null,
  rangeStartDate: Date | null,
  rangeEndDate: Date | null,
  minimumDate: Date | null,
  maximumDate: Date | null,
) {
  const firstDayOfMonth = startOfMonth(calendarMonth)
  const firstCalendarDay = addDays(firstDayOfMonth, -firstDayOfMonth.getDay())
  const today = new Date()

  return Array.from({ length: 42 }, (_, index): CalendarDayCell => {
    const dayDate = addDays(firstCalendarDay, index)
    const isRangeStart = isSameDay(dayDate, rangeStartDate)
    const isRangeEnd = isSameDay(dayDate, rangeEndDate)

    return {
      date: dayDate,
      value: formatDateValue(dayDate),
      dayNumber: dayDate.getDate(),
      isCurrentMonth: dayDate.getMonth() === calendarMonth.getMonth(),
      isSelected: isSameDay(dayDate, selectedDate) || isRangeStart || isRangeEnd,
      isRangeStart,
      isRangeEnd,
      isInRange: isDateWithinRange(dayDate, rangeStartDate, rangeEndDate),
      isToday: isSameDay(dayDate, today),
      isDisabled: isDateOutsideRange(dayDate, minimumDate, maximumDate),
    }
  })
}

function padTimeSegment(value: number) {
  return String(value).padStart(2, '0')
}

function parseTimeValue(value?: string | null): TimeSegments | null {
  if (!value) {
    return null
  }

  const [hoursText, minutesText] = value.split(':')
  const hours = Number(hoursText)
  const minutes = Number(minutesText)

  if (
    Number.isNaN(hours) ||
    Number.isNaN(minutes) ||
    hours < 0 ||
    hours > 23 ||
    minutes < 0 ||
    minutes > 59
  ) {
    return null
  }

  return {
    hours,
    minutes,
  }
}

function formatTimeValue({ hours, minutes }: TimeSegments) {
  return `${padTimeSegment(hours)}:${padTimeSegment(minutes)}`
}

function formatDateDisplayValue(date: Date) {
  return `${padTimeSegment(date.getDate())}/${padTimeSegment(date.getMonth() + 1)}/${date.getFullYear()}`
}

function formatTimeDisplayValue(time: TimeSegments) {
  return formatTimeValue(time)
}

function formatDateAccessibleValue(date: Date) {
  return accessibleDateFormatter.format(date)
}

function formatTimeAccessibleValue(time: TimeSegments) {
  const hoursLabel = time.hours === 1 ? 'hora' : 'horas'
  const minutesLabel = time.minutes === 1 ? 'minuto' : 'minutos'

  if (time.minutes === 0) {
    return `${time.hours} ${hoursLabel}`
  }

  return `${time.hours} ${hoursLabel} e ${time.minutes} ${minutesLabel}`
}

function getAccessibleValueAnnouncement(variant: DatePickerVariant, value?: string | null) {
  if (!value) {
    return 'Nenhum valor selecionado.'
  }

  if (variant === 'date') {
    const parsedDate = parseDateValue(value)

    return parsedDate
      ? `Data selecionada: ${formatDateAccessibleValue(parsedDate)}.`
      : `Valor selecionado: ${value}.`
  }

  if (variant === 'time') {
    const parsedTime = parseTimeValue(value)

    return parsedTime
      ? `Horário selecionado: ${formatTimeAccessibleValue(parsedTime)}.`
      : `Valor selecionado: ${value}.`
  }

  const parsedDateTime = parseDateTimeValue(value)

  return parsedDateTime
    ? `Data e horário selecionados: ${formatDateAccessibleValue(parsedDateTime.date)}, ${formatTimeAccessibleValue(parsedDateTime.time)}.`
    : `Valor selecionado: ${value}.`
}

function getAccessibilityHint(variant: DatePickerVariant, isOpen: boolean) {
  const openHint =
    variant === 'date'
      ? 'Pressione Enter ou seta para baixo para abrir o seletor de data.'
      : variant === 'time'
        ? 'Pressione Enter ou seta para baixo para abrir o seletor de horário.'
        : 'Pressione Enter ou seta para baixo para abrir o seletor de data e horário.'
  const navigationHint =
    variant === 'date'
      ? 'Com o seletor aberto, use Tab para navegar pelo calendário.'
      : variant === 'time'
        ? 'Com o seletor aberto, use Tab para navegar entre hora e minuto.'
        : 'Com o seletor aberto, use Tab para navegar entre o calendário e os campos de horário.'

  return isOpen
    ? `${openHint} ${navigationHint} Pressione Escape para fechar o seletor.`
    : openHint
}

function getCalendarDayAccessibleLabel(day: CalendarDayCell) {
  const labelParts = [formatDateAccessibleValue(day.date)]

  if (day.isToday) {
    labelParts.push('hoje')
  }

  if (day.isRangeStart && day.isRangeEnd) {
    labelParts.push('início e fim do intervalo')
  } else if (day.isRangeStart) {
    labelParts.push('início do intervalo')
  } else if (day.isRangeEnd) {
    labelParts.push('fim do intervalo')
  } else if (day.isInRange) {
    labelParts.push('dentro do intervalo selecionado')
  } else if (day.isSelected) {
    labelParts.push('selecionado')
  }

  if (day.isDisabled) {
    labelParts.push('indisponível')
  } else if (!day.isCurrentMonth) {
    labelParts.push('fora do mês atual')
  }

  return labelParts.join(', ')
}

function sanitizeDateRangeValue(value?: Partial<DatePickerRangeValue> | null): DatePickerRangeValue {
  const start = sanitizeValue('date', value?.start)
  const end = sanitizeValue('date', value?.end)

  if (!start && !end) {
    return {
      start: null,
      end: null,
    }
  }

  if (!start && end) {
    return {
      start: end,
      end: null,
    }
  }

  if (start && !end) {
    return {
      start,
      end: null,
    }
  }

  const startDate = parseDateValue(start)
  const endDate = parseDateValue(end)

  if (!startDate || !endDate) {
    return {
      start,
      end,
    }
  }

  return getDateTimestamp(startDate) <= getDateTimestamp(endDate)
    ? { start, end }
    : { start: end, end: start }
}

function formatDateRangeDisplayValue(rangeValue: DatePickerRangeValue) {
  const startDate = parseDateValue(rangeValue.start)
  const endDate = parseDateValue(rangeValue.end)

  if (!startDate && !endDate) {
    return ''
  }

  if (startDate && !endDate) {
    return `${formatDateDisplayValue(startDate)} -`
  }

  if (startDate && endDate) {
    return `${formatDateDisplayValue(startDate)} - ${formatDateDisplayValue(endDate)}`
  }

  return ''
}

function getDateRangeAccessibleAnnouncement(rangeValue: DatePickerRangeValue) {
  const startDate = parseDateValue(rangeValue.start)
  const endDate = parseDateValue(rangeValue.end)

  if (!startDate && !endDate) {
    return 'Nenhum intervalo selecionado.'
  }

  if (startDate && !endDate) {
    return `Data inicial selecionada: ${formatDateAccessibleValue(startDate)}. Selecione a data final.`
  }

  if (startDate && endDate) {
    return `Intervalo selecionado: de ${formatDateAccessibleValue(startDate)} até ${formatDateAccessibleValue(endDate)}.`
  }

  return 'Nenhum intervalo selecionado.'
}

function getNativeInputType(variant: DatePickerVariant) {
  return variant === 'datetime' ? 'datetime-local' : variant
}

function getRangeInputNames({
  inputId,
  name,
  startName,
  endName,
  nameMode = 'object',
}: {
  inputId: string
  name?: string
  startName?: string
  endName?: string
  nameMode?: DatePickerRangeNameMode
}) {
  let derivedStartName: string | undefined
  let derivedEndName: string | undefined

  if (name) {
    if (nameMode === 'suffix') {
      derivedStartName = `${name}Start`
      derivedEndName = `${name}End`
    } else if (nameMode === 'indexed') {
      derivedStartName = `${name}[0]`
      derivedEndName = `${name}[1]`
    } else {
      derivedStartName = `${name}[start]`
      derivedEndName = `${name}[end]`
    }
  }

  return {
    startId: `${inputId}-start-native-input`,
    endId: `${inputId}-end-native-input`,
    startName: startName ?? derivedStartName,
    endName: endName ?? derivedEndName,
  }
}

function formatDisplayValue(variant: DatePickerVariant, value?: string | null) {
  if (!value) {
    return ''
  }

  if (variant === 'date') {
    const parsedDate = parseDateValue(value)

    return parsedDate ? formatDateDisplayValue(parsedDate) : value
  }

  if (variant === 'time') {
    const parsedTime = parseTimeValue(value)

    return parsedTime ? formatTimeDisplayValue(parsedTime) : value
  }

  const parsedDateTime = parseDateTimeValue(value)

  if (!parsedDateTime) {
    return value
  }

  return `${formatDateDisplayValue(parsedDateTime.date)} ${formatTimeDisplayValue(parsedDateTime.time)}`
}

function formatTimeDraft(time: TimeSegments | null): TimeDraft {
  return {
    hours: padTimeSegment(time?.hours ?? 0),
    minutes: padTimeSegment(time?.minutes ?? 0),
  }
}

function toTimeMinutes(value?: string) {
  const parsed = parseTimeValue(value)

  if (!parsed) {
    return null
  }

  return parsed.hours * 60 + parsed.minutes
}

function fromTimeMinutes(totalMinutes: number): TimeSegments {
  const minutesInDay = 24 * 60
  const normalizedMinutes = ((totalMinutes % minutesInDay) + minutesInDay) % minutesInDay

  return {
    hours: Math.floor(normalizedMinutes / 60),
    minutes: normalizedMinutes % 60,
  }
}

function clampMinutes(totalMinutes: number, minimumMinutes: number | null, maximumMinutes: number | null) {
  let nextMinutes = totalMinutes

  if (minimumMinutes !== null && nextMinutes < minimumMinutes) {
    nextMinutes = minimumMinutes
  }

  if (maximumMinutes !== null && nextMinutes > maximumMinutes) {
    nextMinutes = maximumMinutes
  }

  return nextMinutes
}

function getDateTimeTimeBounds(
  date: Date,
  minimumDateTime: DateTimeSegments | null,
  maximumDateTime: DateTimeSegments | null,
) {
  return {
    minimumMinutes:
      minimumDateTime && isSameDay(date, minimumDateTime.date)
        ? minimumDateTime.time.hours * 60 + minimumDateTime.time.minutes
        : null,
    maximumMinutes:
      maximumDateTime && isSameDay(date, maximumDateTime.date)
        ? maximumDateTime.time.hours * 60 + maximumDateTime.time.minutes
        : null,
  }
}

function clampTimeSegmentsForDate(
  date: Date,
  time: TimeSegments,
  minimumDateTime: DateTimeSegments | null,
  maximumDateTime: DateTimeSegments | null,
) {
  const { minimumMinutes, maximumMinutes } = getDateTimeTimeBounds(
    date,
    minimumDateTime,
    maximumDateTime,
  )

  return fromTimeMinutes(
    clampMinutes(time.hours * 60 + time.minutes, minimumMinutes, maximumMinutes),
  )
}

function getMinuteStep(step?: number) {
  if (!step) {
    return 1
  }

  return Math.max(1, Math.round(step / 60))
}

export function DatePicker(props: DatePickerProps) {
  const {
    value: controlledValue,
    defaultValue,
    onChange,
    selectionMode,
    rangeValue,
    defaultRangeValue,
    onRangeChange,
    nameMode = 'object',
    startName,
    endName,
    variant = 'date',
    min,
    max,
    id,
    name,
    className,
    ariaLabel,
    disabled = false,
    placeholder,
    showClearButton = true,
    clearButtonLabel = 'Limpar valor',
  } = props

  const isRangeMode = variant === 'date' && selectionMode === 'range'

  const step =
    props.variant === 'time' || props.variant === 'datetime' ? props.step : undefined

  const generatedId = useId().replace(/:/g, '')
  const inputId = id ?? `govrs-date-picker-${generatedId}`
  const panelId = `${inputId}-panel`
  const hintTextId = `${inputId}-hint`
  const rootRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const floatingPanelRef = useRef<HTMLDivElement>(null)
  const initialCalendarFocusRef = useRef<HTMLButtonElement>(null)
  const initialTimeInputRef = useRef<HTMLInputElement>(null)
  const previousPanelOpenRef = useRef(false)
  const isControlled = controlledValue !== undefined
  const isRangeControlled = rangeValue !== undefined
  const [internalValue, setInternalValue] = useState<DatePickerValue>(() =>
    sanitizeValue(variant, defaultValue),
  )
  const [internalRangeValue, setInternalRangeValue] = useState<DatePickerRangeValue>(() =>
    sanitizeDateRangeValue(defaultRangeValue),
  )
  const [isDatePanelOpen, setIsDatePanelOpen] = useState(false)
  const [isTimePanelOpen, setIsTimePanelOpen] = useState(false)
  const [isDateTimePanelOpen, setIsDateTimePanelOpen] = useState(false)
  const [timeDraft, setTimeDraft] = useState<TimeDraft | null>(null)
  const [floatingPanelStyle, setFloatingPanelStyle] = useState<CSSProperties | null>(null)
  const [calendarMonth, setCalendarMonth] = useState(() => {
    const initialRangeValue = sanitizeDateRangeValue(rangeValue ?? defaultRangeValue)
    const initialDate =
      (isRangeMode
        ? parseDateValue(initialRangeValue.end) ?? parseDateValue(initialRangeValue.start)
        : variant === 'datetime'
          ? parseDateTimeValue(sanitizeValue('datetime', controlledValue ?? defaultValue))?.date ?? null
          : parseDateValue(sanitizeValue('date', controlledValue ?? defaultValue))) ??
      (variant === 'datetime'
        ? parseDateTimeValue(sanitizeConstraint('datetime', min))?.date ?? null
        : parseDateValue(sanitizeConstraint('date', min))) ??
      new Date()

    return startOfMonth(initialDate)
  })

  const currentValue = isRangeMode
    ? null
    : isControlled
      ? sanitizeValue(variant, controlledValue)
      : internalValue
  const currentRangeValue = isRangeMode
    ? isRangeControlled
      ? sanitizeDateRangeValue(rangeValue)
      : internalRangeValue
    : null
  const resolvedRangeValue = currentRangeValue ?? { start: null, end: null }
  const rangeStartValue = resolvedRangeValue.start
  const rangeEndValue = resolvedRangeValue.end
  const rangeStartDate = parseDateValue(rangeStartValue)
  const rangeEndDate = parseDateValue(rangeEndValue)
  const hasCompletedRange = Boolean(rangeStartDate && rangeEndDate)
  const rangeInputNames = isRangeMode
    ? getRangeInputNames({
        inputId,
        name,
        startName,
        endName,
        nameMode,
      })
    : null

  const displayValue = isRangeMode
    ? formatDateRangeDisplayValue(resolvedRangeValue)
    : formatDisplayValue(variant, currentValue)
  const resolvedPlaceholder = placeholder || getDefaultPlaceholder(variant)
  const hasValue = isRangeMode ? Boolean(rangeStartValue || rangeEndValue) : Boolean(currentValue)
  const normalizedMin = sanitizeConstraint(variant, min)
  const normalizedMax = sanitizeConstraint(variant, max)
  const selectedDateTime = variant === 'datetime' ? parseDateTimeValue(currentValue) : null
  const minimumDateTime = variant === 'datetime' ? parseDateTimeValue(normalizedMin) : null
  const maximumDateTime = variant === 'datetime' ? parseDateTimeValue(normalizedMax) : null
  const selectedDate =
    variant === 'time'
      ? null
      : variant === 'datetime'
        ? selectedDateTime?.date ?? null
        : isRangeMode
          ? rangeEndDate ?? rangeStartDate
          : parseDateValue(currentValue)
  const minimumDate =
    variant === 'time'
      ? null
      : variant === 'datetime'
        ? minimumDateTime?.date ?? null
        : parseDateValue(normalizedMin)
  const maximumDate =
    variant === 'time'
      ? null
      : variant === 'datetime'
        ? maximumDateTime?.date ?? null
        : parseDateValue(normalizedMax)
  const fallbackDateForDateTime = selectedDate ?? minimumDate ?? new Date()
  const timeValue =
    variant === 'time'
      ? parseTimeValue(currentValue) ?? parseTimeValue(normalizedMin) ?? { hours: 0, minutes: 0 }
      : variant === 'datetime'
        ? clampTimeSegmentsForDate(
            fallbackDateForDateTime,
            selectedDateTime?.time ?? minimumDateTime?.time ?? { hours: 0, minutes: 0 },
            minimumDateTime,
            maximumDateTime,
          )
      : null
  const calendarDays = useMemo<CalendarDayCell[]>(() => {
    if (variant === 'time') {
      return []
    }

    return buildCalendarDays(
      calendarMonth,
      selectedDate,
      rangeStartDate,
      rangeEndDate,
      minimumDate,
      maximumDate,
    )
  }, [calendarMonth, maximumDate, minimumDate, rangeEndDate, rangeStartDate, selectedDate, variant])
  const previousMonth = addMonths(calendarMonth, -1)
  const nextMonth = addMonths(calendarMonth, 1)
  const isPreviousMonthDisabled =
    variant !== 'time' && minimumDate
      ? getDateTimestamp(endOfMonth(previousMonth)) < getDateTimestamp(minimumDate)
      : false
  const isNextMonthDisabled =
    variant !== 'time' && maximumDate
      ? getDateTimestamp(startOfMonth(nextMonth)) > getDateTimestamp(maximumDate)
      : false
  const isCustomPanelOpen =
    variant === 'date'
      ? isDatePanelOpen
      : variant === 'time'
        ? isTimePanelOpen
        : isDateTimePanelOpen
  const accessibilityHint = getAccessibilityHint(variant, isCustomPanelOpen)
  const accessibleValueAnnouncement = isRangeMode
    ? getDateRangeAccessibleAnnouncement(resolvedRangeValue)
    : getAccessibleValueAnnouncement(variant, currentValue)
  const initialCalendarFocusValue = useMemo(() => {
    if (variant === 'time') {
      return null
    }

    return (
      calendarDays.find((day) => day.isSelected && !day.isDisabled)?.value ??
      calendarDays.find((day) => day.isToday && !day.isDisabled)?.value ??
      calendarDays.find((day) => !day.isDisabled)?.value ??
      null
    )
  }, [calendarDays, variant])

  useEffect(() => {
    if (!isCustomPanelOpen || !timeValue) {
      setTimeDraft(null)
      return
    }

    const nextDraft = formatTimeDraft(timeValue)

    setTimeDraft((currentDraft) => {
      if (
        currentDraft?.hours === nextDraft.hours &&
        currentDraft?.minutes === nextDraft.minutes
      ) {
        return currentDraft
      }

      return nextDraft
    })
  }, [isCustomPanelOpen, timeValue?.hours, timeValue?.minutes])

  useEffect(() => {
    if (typeof window === 'undefined') {
      previousPanelOpenRef.current = isCustomPanelOpen
      return
    }

    let frameId: number | null = null

    if (isCustomPanelOpen && !previousPanelOpenRef.current) {
      frameId = window.requestAnimationFrame(() => {
        if (variant === 'time') {
          initialTimeInputRef.current?.focus()
          initialTimeInputRef.current?.select()
          return
        }

        if (initialCalendarFocusRef.current) {
          initialCalendarFocusRef.current.focus()
          return
        }

        if (variant === 'datetime') {
          initialTimeInputRef.current?.focus()
          initialTimeInputRef.current?.select()
        }
      })
    }

    previousPanelOpenRef.current = isCustomPanelOpen

    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId)
      }
    }
  }, [isCustomPanelOpen, variant])

  useEffect(() => {
    if (isRangeMode || isControlled) {
      return
    }

    setInternalValue((current) => sanitizeValue(variant, current))
  }, [isControlled, isRangeMode, variant])

  useEffect(() => {
    if (variant !== 'date' || disabled) {
      setIsDatePanelOpen(false)
    }

    if (variant !== 'time' || disabled) {
      setIsTimePanelOpen(false)
    }

    if (variant !== 'datetime' || disabled) {
      setIsDateTimePanelOpen(false)
    }
  }, [disabled, variant])

  useEffect(() => {
    if (variant === 'time') {
      return
    }

    const nextCalendarMonth = startOfMonth(
      isRangeMode
        ? rangeEndDate ?? rangeStartDate ?? minimumDate ?? new Date()
        : selectedDate ?? minimumDate ?? new Date(),
    )

    setCalendarMonth((currentMonth) => {
      if (
        currentMonth.getFullYear() === nextCalendarMonth.getFullYear() &&
        currentMonth.getMonth() === nextCalendarMonth.getMonth()
      ) {
        return currentMonth
      }

      return nextCalendarMonth
    })
  }, [isRangeMode, minimumDate, rangeEndDate, rangeStartDate, selectedDate, variant])

  const closeCustomPanels = () => {
    setIsDatePanelOpen(false)
    setIsTimePanelOpen(false)
    setIsDateTimePanelOpen(false)
  }

  useEffect(() => {
    if (!isCustomPanelOpen) {
      return
    }

    const handlePointerDown = (event: PointerEvent) => {
      const targetNode = event.target as Node

      if (
        !rootRef.current?.contains(targetNode) &&
        !floatingPanelRef.current?.contains(targetNode)
      ) {
        closeCustomPanels()
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeCustomPanels()
        inputRef.current?.focus()
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isCustomPanelOpen])

  useEffect(() => {
    if (!isCustomPanelOpen || typeof window === 'undefined') {
      setFloatingPanelStyle(null)
      return
    }

    const updateFloatingPanelPosition = () => {
      const rootElement = rootRef.current

      if (!rootElement) {
        return
      }

      const rootRect = rootElement.getBoundingClientRect()
      const panelElement = floatingPanelRef.current
      const viewportPadding = 16
      const panelOffset = 8
      const fallbackWidth =
        variant === 'date'
          ? Math.min(448, window.innerWidth - viewportPadding * 2)
          : variant === 'datetime'
            ? Math.min(624, window.innerWidth - viewportPadding * 2)
            : 176
      const panelWidth = panelElement?.offsetWidth ?? fallbackWidth

      let left = rootRect.left
      left = Math.max(viewportPadding, Math.min(left, window.innerWidth - viewportPadding - panelWidth))

      const top = rootRect.bottom + panelOffset

      setFloatingPanelStyle({
        position: 'fixed',
        top: Math.round(top),
        left: Math.round(left),
        zIndex: 10000,
      })
    }

    updateFloatingPanelPosition()

    window.addEventListener('resize', updateFloatingPanelPosition)
    window.addEventListener('scroll', updateFloatingPanelPosition, true)

    return () => {
      window.removeEventListener('resize', updateFloatingPanelPosition)
      window.removeEventListener('scroll', updateFloatingPanelPosition, true)
    }
  }, [isCustomPanelOpen, variant])

  const handleChange = (nextValue: string) => {
    const resolvedValue = sanitizeValue(variant, nextValue)

    if (!isControlled) {
      setInternalValue(resolvedValue)
    }

    onChange?.(resolvedValue)
  }

  const handleRangeChange = (nextValue: Partial<DatePickerRangeValue>) => {
    const resolvedValue = sanitizeDateRangeValue(nextValue)

    if (!isRangeControlled) {
      setInternalRangeValue(resolvedValue)
    }

    onRangeChange?.(resolvedValue)
  }

  const normalizeTimeDraft = (draft: TimeDraft) => {
    const fallbackDraft = formatTimeDraft(timeValue)
    const hoursValue =
      draft.hours === '' ? Number(fallbackDraft.hours) : Math.max(0, Math.min(Number(draft.hours), 23))
    const minutesValue =
      draft.minutes === ''
        ? Number(fallbackDraft.minutes)
        : Math.max(0, Math.min(Number(draft.minutes), 59))

    return {
      hours: padTimeSegment(Number.isNaN(hoursValue) ? Number(fallbackDraft.hours) : hoursValue),
      minutes: padTimeSegment(
        Number.isNaN(minutesValue) ? Number(fallbackDraft.minutes) : minutesValue,
      ),
    }
  }

  const commitTimeDraft = (draft: TimeDraft) => {
    if (variant !== 'time' && variant !== 'datetime') {
      return
    }

    const normalizedDraft = normalizeTimeDraft(draft)
    const nextBaseTime = {
      hours: Number(normalizedDraft.hours),
      minutes: Number(normalizedDraft.minutes),
    }

    if (variant === 'datetime') {
      const referenceDate = selectedDate ?? minimumDate ?? new Date()
      const nextTime = clampTimeSegmentsForDate(
        referenceDate,
        nextBaseTime,
        minimumDateTime,
        maximumDateTime,
      )
      const nextDraft = formatTimeDraft(nextTime)

      setTimeDraft(nextDraft)
      handleChange(formatDateTimeValue(referenceDate, nextTime))
      return
    }

    const minimumMinutes = toTimeMinutes(normalizedMin)
    const maximumMinutes = toTimeMinutes(normalizedMax)
    const nextTime = fromTimeMinutes(
      clampMinutes(
        nextBaseTime.hours * 60 + nextBaseTime.minutes,
        minimumMinutes,
        maximumMinutes,
      ),
    )
    const nextDraft = formatTimeDraft(nextTime)

    setTimeDraft(nextDraft)
    handleChange(formatTimeValue(nextTime))
  }

  const handleTimeInputChange = (segment: 'hours' | 'minutes', rawValue: string) => {
    const currentDraft = timeDraft ?? formatTimeDraft(timeValue)
    const nextValue = rawValue.replace(/\D/g, '').slice(0, 2)
    const nextDraft = {
      ...currentDraft,
      [segment]: nextValue,
    }

    setTimeDraft(nextDraft)

    if (nextDraft.hours.length === 2 && nextDraft.minutes.length === 2) {
      commitTimeDraft(nextDraft)
    }
  }

  const handleTimeInputBlur = () => {
    const currentDraft = timeDraft ?? formatTimeDraft(timeValue)
    const normalizedDraft = normalizeTimeDraft(currentDraft)
    const committedDraft = formatTimeDraft(timeValue)

    setTimeDraft(normalizedDraft)

    if (
      normalizedDraft.hours === committedDraft.hours &&
      normalizedDraft.minutes === committedDraft.minutes
    ) {
      return
    }

    commitTimeDraft(normalizedDraft)
  }

  const handleTimeInputKeyDown = (
    segment: 'hours' | 'minutes',
    event: ReactKeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
      event.preventDefault()
      handleAdjustTime(segment, event.key === 'ArrowUp' ? 1 : -1)
      return
    }

    if (event.key === 'Enter') {
      event.preventDefault()
      handleTimeInputBlur()
    }
  }

  const openCustomPanel = () => {
    if (disabled) {
      return
    }

    if (variant === 'date') {
      setIsDatePanelOpen(true)
      setIsTimePanelOpen(false)
      setIsDateTimePanelOpen(false)
      return
    }

    if (variant === 'time') {
      setIsTimePanelOpen(true)
      setIsDatePanelOpen(false)
      setIsDateTimePanelOpen(false)
      return
    }

    setIsDateTimePanelOpen(true)
    setIsDatePanelOpen(false)
    setIsTimePanelOpen(false)
  }

  const handleOpenPicker = () => {
    if (disabled) {
      return
    }

    if (variant === 'date') {
      setIsDatePanelOpen((previousState) => !previousState)
      setIsTimePanelOpen(false)
      setIsDateTimePanelOpen(false)
      return
    }

    if (variant === 'time') {
      setIsTimePanelOpen((previousState) => !previousState)
      setIsDatePanelOpen(false)
      setIsDateTimePanelOpen(false)
      return
    }

    setIsDateTimePanelOpen((previousState) => !previousState)
    setIsDatePanelOpen(false)
    setIsTimePanelOpen(false)
  }

  const handleClearSelection = () => {
    if (isRangeMode) {
      const clearedRangeValue: DatePickerRangeValue = {
        start: null,
        end: null,
      }

      if (!isRangeControlled) {
        setInternalRangeValue(clearedRangeValue)
      }

      onRangeChange?.(clearedRangeValue)
      inputRef.current?.focus()
      return
    }

    if (!isControlled) {
      setInternalValue(null)
    }

    onChange?.(null)
    inputRef.current?.focus()
  }

  const handleCustomInputKeyDown = (event: ReactKeyboardEvent<HTMLInputElement>) => {
    if (disabled) {
      return
    }

    if (event.key === 'Enter' || event.key === ' ' || event.key === 'ArrowDown') {
      event.preventDefault()
      openCustomPanel()
    }

    if (event.key === 'Escape') {
      closeCustomPanels()
    }
  }

  const handleSelectDate = (date: Date) => {
    if ((variant !== 'date' && variant !== 'datetime') || isDateOutsideRange(date, minimumDate, maximumDate)) {
      return
    }

    if (isRangeMode) {
      const nextValue = formatDateValue(date)

      if (!rangeStartValue || rangeEndValue) {
        handleRangeChange({
          start: nextValue,
          end: null,
        })
        return
      }

      if (!rangeStartDate) {
        handleRangeChange({
          start: nextValue,
          end: null,
        })
        return
      }

      if (getDateTimestamp(date) < getDateTimestamp(rangeStartDate)) {
        handleRangeChange({
          start: nextValue,
          end: rangeStartValue,
        })
      } else {
        handleRangeChange({
          start: rangeStartValue,
          end: nextValue,
        })
      }

      setIsDatePanelOpen(false)
      inputRef.current?.focus()
      return
    }

    if (variant === 'datetime') {
      const nextTime = clampTimeSegmentsForDate(
        date,
        timeValue ?? { hours: 0, minutes: 0 },
        minimumDateTime,
        maximumDateTime,
      )

      setTimeDraft(formatTimeDraft(nextTime))
      handleChange(formatDateTimeValue(date, nextTime))
      return
    }

    handleChange(formatDateValue(date))
    setIsDatePanelOpen(false)
    inputRef.current?.focus()
  }

  const handleChangeMonth = (month: number) => {
    setCalendarMonth(new Date(calendarMonth.getFullYear(), month, 1))
  }

  const handleChangeYear = (yearText: string) => {
    if (!yearText) {
      return
    }

    const nextYear = Number(yearText)

    if (Number.isNaN(nextYear)) {
      return
    }

    setCalendarMonth(new Date(nextYear, calendarMonth.getMonth(), 1))
  }

  const handleNavigateMonth = (direction: 1 | -1) => {
    setCalendarMonth(addMonths(calendarMonth, direction))
  }

  const focusCalendarDayByIndex = (index: number) => {
    floatingPanelRef.current
      ?.querySelector<HTMLButtonElement>(`[data-day-index="${index}"]`)
      ?.focus()
  }

  const getNextCalendarFocusIndex = (startIndex: number, step: number) => {
    let nextIndex = startIndex + step

    while (nextIndex >= 0 && nextIndex < calendarDays.length) {
      if (!calendarDays[nextIndex]?.isDisabled) {
        return nextIndex
      }

      nextIndex += step
    }

    return null
  }

  const handleCalendarDayKeyDown = (
    index: number,
    event: ReactKeyboardEvent<HTMLButtonElement>,
  ) => {
    let nextIndex: number | null = null

    switch (event.key) {
      case 'ArrowRight':
        nextIndex = getNextCalendarFocusIndex(index, 1)
        break
      case 'ArrowLeft':
        nextIndex = getNextCalendarFocusIndex(index, -1)
        break
      case 'ArrowDown':
        nextIndex = getNextCalendarFocusIndex(index, 7)
        break
      case 'ArrowUp':
        nextIndex = getNextCalendarFocusIndex(index, -7)
        break
      case 'Home': {
        const rowStart = Math.floor(index / 7) * 7

        nextIndex = getNextCalendarFocusIndex(rowStart - 1, 1)
        break
      }
      case 'End': {
        const rowEnd = Math.min(Math.floor(index / 7) * 7 + 6, calendarDays.length - 1)

        nextIndex = getNextCalendarFocusIndex(rowEnd + 1, -1)
        break
      }
      default:
        return
    }

    if (nextIndex === null) {
      return
    }

    event.preventDefault()
    focusCalendarDayByIndex(nextIndex)
  }

  const handleAdjustTime = (segment: 'hours' | 'minutes', direction: 1 | -1) => {
    if ((variant !== 'time' && variant !== 'datetime') || !timeValue) {
      return
    }

    const increment = segment === 'hours' ? 60 : getMinuteStep(step)
    const baseMinutes = timeValue.hours * 60 + timeValue.minutes
    let nextMinutes = baseMinutes + direction * increment

    if (variant === 'datetime') {
      const referenceDate = selectedDate ?? minimumDate ?? new Date()
      const { minimumMinutes, maximumMinutes } = getDateTimeTimeBounds(
        referenceDate,
        minimumDateTime,
        maximumDateTime,
      )

      nextMinutes = clampMinutes(nextMinutes, minimumMinutes, maximumMinutes)
      const nextTime = fromTimeMinutes(nextMinutes)

      setTimeDraft(formatTimeDraft(nextTime))
      handleChange(formatDateTimeValue(referenceDate, nextTime))
      return
    }

    const minimumMinutes = toTimeMinutes(normalizedMin)
    const maximumMinutes = toTimeMinutes(normalizedMax)
    nextMinutes = clampMinutes(nextMinutes, minimumMinutes, maximumMinutes)
    const nextTime = fromTimeMinutes(nextMinutes)

    setTimeDraft(formatTimeDraft(nextTime))
    handleChange(formatTimeValue(nextTime))
  }

  const hiddenFloatingPanelStyle: CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    visibility: 'hidden',
    pointerEvents: 'none',
  }
  const resolvedTimeDraft = timeDraft ?? formatTimeDraft(timeValue)

  const datePanelContent = (
    <>
      <div className="govrs-date-picker__date-header">
        <button
          type="button"
          className="govrs-date-picker__date-nav-button"
          aria-label="Mes anterior"
          onClick={() => handleNavigateMonth(-1)}
          disabled={isPreviousMonthDisabled}
        >
          <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden>
            <path fill="currentColor" d="m15.41 7.41-1.41-1.42L8.59 11.4 14 16.83l1.41-1.42L11.41 11.4z" />
          </svg>
        </button>

        <label className="govrs-date-picker__month-control">
          <span className="govrs-date-picker__sr-only">Mes</span>
          <select
            className="govrs-date-picker__month-select"
            value={calendarMonth.getMonth()}
            onChange={(event) => handleChangeMonth(Number(event.target.value))}
          >
            {monthLabels.map((label, index) => (
              <option key={label} value={index}>
                {label}
              </option>
            ))}
          </select>

          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
            <path fill="currentColor" d="m7.41 8.83 4.59 4.58 4.59-4.58L18 10.24l-6 6-6-6z" />
          </svg>
        </label>

        <input
          type="number"
          className="govrs-date-picker__year-input"
          aria-label="Ano"
          value={calendarMonth.getFullYear()}
          min={1000}
          max={9999}
          onChange={(event) => handleChangeYear(event.target.value)}
        />

        <button
          type="button"
          className="govrs-date-picker__date-nav-button"
          aria-label="Proximo mes"
          onClick={() => handleNavigateMonth(1)}
          disabled={isNextMonthDisabled}
        >
          <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden>
            <path fill="currentColor" d="m8.59 16.59 1.41 1.42 5.41-5.41L10 7.17 8.59 8.59 12.59 12.6z" />
          </svg>
        </button>
      </div>

      <div className="govrs-date-picker__weekday-row">
        {weekdayLabels.map((label) => (
          <span key={label} className="govrs-date-picker__weekday">
            {label}
          </span>
        ))}
      </div>

      <div className="govrs-date-picker__day-grid" role="grid">
        {calendarDays.map((day, index) => (
          <button
            key={day.value}
            type="button"
            data-day-index={index}
            className={joinClassNames(
              'govrs-date-picker__day-button',
              !day.isCurrentMonth && 'govrs-date-picker__day-button--outside-month',
              day.isToday && 'govrs-date-picker__day-button--today',
              isRangeMode && hasCompletedRange && day.isInRange && 'govrs-date-picker__day-button--in-range',
              isRangeMode && hasCompletedRange && day.isRangeStart && 'govrs-date-picker__day-button--range-start',
              isRangeMode && hasCompletedRange && day.isRangeEnd && 'govrs-date-picker__day-button--range-end',
              day.isSelected && 'govrs-date-picker__day-button--selected',
              day.isDisabled && 'govrs-date-picker__day-button--disabled',
            )}
            ref={day.value === initialCalendarFocusValue ? initialCalendarFocusRef : undefined}
            disabled={day.isDisabled}
            aria-label={getCalendarDayAccessibleLabel(day)}
            aria-current={day.isToday ? 'date' : undefined}
            aria-pressed={day.isSelected || (hasCompletedRange && day.isInRange)}
            onKeyDown={(event) => handleCalendarDayKeyDown(index, event)}
            onClick={() => handleSelectDate(day.date)}
          >
            {day.dayNumber}
          </button>
        ))}
      </div>
    </>
  )

  const timePanelContent = timeValue ? (
    <>
      <div className="govrs-date-picker__time-column">
        <button
          type="button"
          className="govrs-date-picker__time-step-button"
          aria-label="Aumentar hora"
          onClick={() => handleAdjustTime('hours', 1)}
        >
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
            <path fill="currentColor" d="M7.41 14.59 12 10l4.59 4.59L18 13.17 12 7.17l-6 6z" />
          </svg>
        </button>

        <input
          ref={initialTimeInputRef}
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={2}
          className="govrs-date-picker__time-input"
          aria-label="Hora"
          value={resolvedTimeDraft.hours}
          onChange={(event) => handleTimeInputChange('hours', event.target.value)}
          onBlur={handleTimeInputBlur}
          onFocus={(event) => event.currentTarget.select()}
          onKeyDown={(event) => handleTimeInputKeyDown('hours', event)}
        />

        <button
          type="button"
          className="govrs-date-picker__time-step-button"
          aria-label="Diminuir hora"
          onClick={() => handleAdjustTime('hours', -1)}
        >
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
            <path fill="currentColor" d="m7.41 8.83 4.59 4.58 4.59-4.58L18 10.24l-6 6-6-6z" />
          </svg>
        </button>
      </div>

      <span className="govrs-date-picker__time-separator" aria-hidden>
        :
      </span>

      <div className="govrs-date-picker__time-column">
        <button
          type="button"
          className="govrs-date-picker__time-step-button"
          aria-label="Aumentar minuto"
          onClick={() => handleAdjustTime('minutes', 1)}
        >
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
            <path fill="currentColor" d="M7.41 14.59 12 10l4.59 4.59L18 13.17 12 7.17l-6 6z" />
          </svg>
        </button>

        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={2}
          className="govrs-date-picker__time-input"
          aria-label="Minuto"
          value={resolvedTimeDraft.minutes}
          onChange={(event) => handleTimeInputChange('minutes', event.target.value)}
          onBlur={handleTimeInputBlur}
          onFocus={(event) => event.currentTarget.select()}
          onKeyDown={(event) => handleTimeInputKeyDown('minutes', event)}
        />

        <button
          type="button"
          className="govrs-date-picker__time-step-button"
          aria-label="Diminuir minuto"
          onClick={() => handleAdjustTime('minutes', -1)}
        >
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
            <path fill="currentColor" d="m7.41 8.83 4.59 4.58 4.59-4.58L18 10.24l-6 6-6-6z" />
          </svg>
        </button>
      </div>
    </>
  ) : null

  const datePanel =
    variant === 'date' && isDatePanelOpen && typeof document !== 'undefined'
      ? createPortal(
          <div
            ref={floatingPanelRef}
            id={panelId}
            className="govrs-date-picker__date-panel"
            style={floatingPanelStyle ?? hiddenFloatingPanelStyle}
            role="dialog"
            aria-label="Selecionar data"
          >
            {datePanelContent}
          </div>,
          document.body,
        )
      : null

  const timePanel =
    variant === 'time' && isTimePanelOpen && timeValue && typeof document !== 'undefined'
      ? createPortal(
          <div
            ref={floatingPanelRef}
            id={panelId}
            className="govrs-date-picker__time-panel"
            style={floatingPanelStyle ?? hiddenFloatingPanelStyle}
            role="dialog"
            aria-label="Selecionar horário"
          >
            {timePanelContent}
          </div>,
          document.body,
        )
      : null

  const dateTimePanel =
    variant === 'datetime' && isDateTimePanelOpen && timePanelContent && typeof document !== 'undefined'
      ? createPortal(
          <div
            ref={floatingPanelRef}
            id={panelId}
            className="govrs-date-picker__datetime-panel"
            style={floatingPanelStyle ?? hiddenFloatingPanelStyle}
            role="dialog"
            aria-label="Selecionar data e horário"
          >
            <div className="govrs-date-picker__datetime-date-section">{datePanelContent}</div>
            <div className="govrs-date-picker__datetime-time-section">{timePanelContent}</div>
          </div>,
          document.body,
        )
      : null

  return (
    <>
      <div
        ref={rootRef}
        className={joinClassNames(
          'govrs-date-picker',
          `govrs-date-picker--${variant}`,
          disabled && 'govrs-date-picker--disabled',
          className,
        )}
      >
        {isRangeMode ? (
          <>
            <input
              id={rangeInputNames?.startId}
              type={getNativeInputType(variant)}
              name={rangeInputNames?.startName}
              value={rangeStartValue ?? ''}
              min={normalizedMin}
              max={normalizedMax}
              disabled={disabled}
              readOnly
              tabIndex={-1}
              aria-hidden="true"
              className="govrs-date-picker__native-input"
            />

            <input
              id={rangeInputNames?.endId}
              type={getNativeInputType(variant)}
              name={rangeInputNames?.endName}
              value={rangeEndValue ?? ''}
              min={normalizedMin}
              max={normalizedMax}
              disabled={disabled}
              readOnly
              tabIndex={-1}
              aria-hidden="true"
              className="govrs-date-picker__native-input"
            />
          </>
        ) : (
          <input
            type={getNativeInputType(variant)}
            name={name}
            value={currentValue ?? ''}
            min={normalizedMin}
            max={normalizedMax}
            step={variant === 'time' || variant === 'datetime' ? step : undefined}
            disabled={disabled}
            readOnly
            tabIndex={-1}
            aria-hidden="true"
            className="govrs-date-picker__native-input"
          />
        )}

      <input
        ref={inputRef}
        id={inputId}
        type="text"
        value={displayValue}
        placeholder={resolvedPlaceholder}
        className="govrs-date-picker__input"
        aria-label={getAriaLabel(ariaLabel, variant)}
        aria-controls={isCustomPanelOpen ? panelId : undefined}
        aria-describedby={hintTextId}
        aria-haspopup="dialog"
        aria-expanded={isCustomPanelOpen}
        disabled={disabled}
        readOnly
        onClick={openCustomPanel}
        onKeyDown={handleCustomInputKeyDown}
      />

      {!hasValue && resolvedPlaceholder ? (
        <span className="govrs-date-picker__placeholder" aria-hidden>
          {resolvedPlaceholder}
        </span>
      ) : null}

      <div className="govrs-date-picker__actions">
        {showClearButton && hasValue && !disabled ? (
          <button
            type="button"
            onClick={handleClearSelection}
            className="govrs-date-picker__clear-button"
            aria-label={clearButtonLabel}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden>
              <path
                fill="currentColor"
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
              />
            </svg>
          </button>
        ) : null}

        <button
          type="button"
          className="govrs-date-picker__action-button"
          onClick={handleOpenPicker}
          aria-label={getOpenButtonLabel(variant)}
          aria-controls={isCustomPanelOpen ? panelId : undefined}
          aria-haspopup="dialog"
          aria-expanded={isCustomPanelOpen}
          disabled={disabled}
        >
          {variant === 'time' ? (
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden>
              <path
                fill="currentColor"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.25 14.33L11 13.25V7h1.5v5.44l4.5 2.67-.75 1.22z"
              />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden>
              <path
                fill="currentColor"
                d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"
              />
            </svg>
          )}
        </button>
      </div>

      <span id={hintTextId} className="govrs-date-picker__sr-only">
        {accessibilityHint}
      </span>

      <span className="govrs-date-picker__sr-only" aria-live="polite" aria-atomic="true">
        {accessibleValueAnnouncement}
      </span>

      </div>

      {datePanel}
      {timePanel}
      {dateTimePanel}
    </>
  )
}

export namespace DatePicker {
  export type Props = DatePickerProps
  export type Variant = DatePickerVariant
  export type Value = DatePickerValue
  export type RangeValue = DatePickerRangeValue
  export type SelectionMode = DatePickerSelectionMode
  export type RangeNameMode = DatePickerRangeNameMode
  export type SingleProps = DatePickerSingleProps
  export type DateProps = DatePickerDateProps
  export type DateRangeProps = DatePickerDateRangeProps
  export type TimeProps = DatePickerTimeProps
  export type DateTimeProps = DatePickerDateTimeProps
}

export default DatePicker