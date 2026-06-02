import { useId, useRef, useState, type InputHTMLAttributes, type ReactNode } from 'react'

import { Badges } from '../Badges/Badges'

import { ensureStylesheet } from '../../runtime/ensureStylesheet'
import stylesheetUrl from './Upload.scss?url'

ensureStylesheet(stylesheetUrl)

type UploadChangeHandler = (files: File[]) => void
type UploadHandler = (files: File[]) => void | Promise<void>

type UploadFeedbackState = {
  files: File[]
  isUploading: boolean
  error: string | null
  message: string
  valid: boolean
  invalid: boolean
  disabled: boolean
  maxFileSize?: number
  maxFiles?: number
  accept?: string
}

type UploadProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'children' | 'className' | 'defaultValue' | 'multiple' | 'onChange' | 'size' | 'type' | 'value'
> & {
  className?: string
  multiple?: boolean
  buttonLabel?: ReactNode
  loadingLabel?: ReactNode
  maxFileSize?: number
  maxFiles?: number
  onChange?: UploadChangeHandler
  onUpload?: UploadHandler
  renderFeedback?: (state: UploadFeedbackState) => ReactNode
}

function getClassName(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(' ')
}

function UploadIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" aria-hidden="true" focusable="false">
      <path d="M9.25 13H6.75C6.3125 13 6 12.6875 6 12.25V7H3.25C2.6875 7 2.40625 6.34375 2.8125 5.9375L7.5625 1.1875C7.78125 0.96875 8.1875 0.96875 8.40625 1.1875L13.1562 5.9375C13.5625 6.34375 13.2812 7 12.7188 7H10V12.25C10 12.6875 9.65625 13 9.25 13ZM16 12.75V16.25C16 16.6875 15.6562 17 15.25 17H0.75C0.3125 17 0 16.6875 0 16.25V12.75C0 12.3438 0.3125 12 0.75 12H5V12.25C5 13.2188 5.78125 14 6.75 14H9.25C10.1875 14 11 13.2188 11 12.25V12H15.25C15.6562 12 16 12.3438 16 12.75ZM12.125 15.5C12.125 15.1562 11.8438 14.875 11.5 14.875C11.1562 14.875 10.875 15.1562 10.875 15.5C10.875 15.8438 11.1562 16.125 11.5 16.125C11.8438 16.125 12.125 15.8438 12.125 15.5ZM14.125 15.5C14.125 15.1562 13.8438 14.875 13.5 14.875C13.1562 14.875 12.875 15.1562 12.875 15.5C12.875 15.8438 13.1562 16.125 13.5 16.125C13.8438 16.125 14.125 15.8438 14.125 15.5Z" fill="currentColor" />
    </svg>
  )
}

function RemoveIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="16" height="16" aria-hidden="true" focusable="false">
      <path d="M232.7 69.9L224 96L128 96C110.3 96 96 110.3 96 128C96 145.7 110.3 160 128 160L512 160C529.7 160 544 145.7 544 128C544 110.3 529.7 96 512 96L416 96L407.3 69.9C402.9 56.8 390.7 48 376.9 48L263.1 48C249.3 48 237.1 56.8 232.7 69.9zM512 208L128 208L149.1 531.1C150.7 556.4 171.7 576 197 576L443 576C468.3 576 489.3 556.4 490.9 531.1L512 208z" fill="currentColor" />
    </svg>
  )
}

function fileMatchesAccept(file: File, accept?: string) {
  if (!accept) {
    return true
  }

  const acceptedFormats = accept
    .split(',')
    .map((format) => format.trim())
    .filter(Boolean)

  if (acceptedFormats.length === 0) {
    return true
  }

  return acceptedFormats.some((format) => {
    if (format === '*/*') {
      return true
    }

    if (format.endsWith('/*')) {
      const typePrefix = format.replace(/\/\*$/, '')

      return file.type.startsWith(typePrefix)
    }

    if (format.startsWith('.')) {
      return file.name.toLowerCase().endsWith(format.toLowerCase())
    }

    return file.type === format
  })
}

function convertMbToBytes(maxFileSize?: number) {
  if (typeof maxFileSize !== 'number' || Number.isNaN(maxFileSize)) {
    return null
  }

  return Math.round(maxFileSize * 1024 * 1024)
}

function getSelectedMessage(fileCount: number, multiple: boolean) {
  if (fileCount <= 0) {
    return ''
  }

  if (!multiple) {
    return 'Arquivo selecionado'
  }

  return fileCount === 1 ? 'Arquivo selecionado' : 'Arquivos selecionados'
}

export function Upload({
  id,
  name,
  multiple = false,
  accept,
  disabled = false,
  className,
  onChange,
  onUpload,
  maxFileSize,
  maxFiles,
  renderFeedback,
  buttonLabel,
  loadingLabel = 'Carregando...',
  ...props
}: UploadProps) {
  const generatedId = useId().replace(/:/g, '')
  const inputId = id ?? `govrs-upload-${generatedId}`
  const feedbackId = `${inputId}-feedback`
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
  const [valid, setValid] = useState(false)
  const [invalid, setInvalid] = useState(false)
  const [message, setMessage] = useState('')
  const [liveMessage, setLiveMessage] = useState('')
  const [isUploading, setIsUploading] = useState(false)

  function clearNativeSelection() {
    if (inputRef.current) {
      inputRef.current.value = ''
    }
  }

  function setErrorState(nextMessage: string) {
    setInvalid(true)
    setValid(false)
    setMessage(nextMessage)
    setLiveMessage(nextMessage)
  }

  function setSuccessState(nextFiles: File[], nextMessage: string) {
    setUploadedFiles(nextFiles)
    setValid(nextFiles.length > 0)
    setInvalid(false)
    setMessage(nextMessage)
    setLiveMessage(nextMessage)
    onChange?.(nextFiles)
  }

  function resetState(nextFiles: File[] = []) {
    setUploadedFiles(nextFiles)
    setValid(false)
    setInvalid(false)
    setMessage('')
    setLiveMessage('')
    onChange?.(nextFiles)
  }

  async function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const selectedFiles = event.target.files ? Array.from(event.target.files) : []

    if (selectedFiles.length === 0) {
      return
    }

    const normalizedFiles = multiple ? selectedFiles : selectedFiles.slice(0, 1)

    if (typeof maxFiles === 'number') {
      const projectedCount = multiple
        ? uploadedFiles.length + normalizedFiles.length
        : normalizedFiles.length

      if (projectedCount > maxFiles) {
        const remaining = Math.max(0, maxFiles - uploadedFiles.length)
        const nextMessage = remaining > 0
          ? `Número máximo de arquivos: ${maxFiles} (restam ${remaining})`
          : `Número máximo de arquivos: ${maxFiles}`

        setErrorState(nextMessage)
        clearNativeSelection()
        onChange?.(uploadedFiles)
        return
      }
    }

    const maxFileSizeBytes = convertMbToBytes(maxFileSize)
    const oversizedFile = maxFileSizeBytes == null
      ? undefined
      : normalizedFiles.find((file) => file.size > maxFileSizeBytes)

    if (oversizedFile) {
      setErrorState(`O arquivo excede o tamanho máximo de ${maxFileSize} MB`)
      clearNativeSelection()
      onChange?.(uploadedFiles)
      return
    }

    const invalidFormatFile = accept
      ? normalizedFiles.find((file) => !fileMatchesAccept(file, accept))
      : undefined

    if (invalidFormatFile) {
      setErrorState(`Arquivo com formato inválido: ${invalidFormatFile.name}`)
      clearNativeSelection()
      onChange?.(uploadedFiles)
      return
    }

    const nextFiles = multiple ? [...uploadedFiles, ...normalizedFiles] : normalizedFiles

    if (typeof onUpload === 'function') {
      try {
        setIsUploading(true)
        await Promise.resolve(onUpload(normalizedFiles))
        setSuccessState(nextFiles, 'Upload concluído')
      } catch (error) {
        const nextMessage = error instanceof Error
          ? `Falha no carregamento do arquivo: ${error.message}`
          : 'Falha no carregamento do arquivo'

        setErrorState(nextMessage)
        onChange?.(uploadedFiles)
      } finally {
        setIsUploading(false)
        clearNativeSelection()
      }

      return
    }

    setSuccessState(nextFiles, getSelectedMessage(nextFiles.length, multiple))
    clearNativeSelection()
  }

  function handleRemoveFile(index: number) {
    if (disabled || isUploading) {
      return
    }

    const nextFiles = uploadedFiles.filter((_, fileIndex) => fileIndex !== index)

    if (nextFiles.length === 0) {
      resetState([])
      return
    }

    setSuccessState(nextFiles, getSelectedMessage(nextFiles.length, multiple))
  }

  const feedbackNode = renderFeedback?.({
    files: uploadedFiles,
    isUploading,
    error: invalid ? message : null,
    message,
    valid,
    invalid,
    disabled,
    maxFileSize,
    maxFiles,
    accept,
  })

  const defaultFeedback = feedbackNode ? null : (
    disabled ? (
      <Badges variant="warning" message="Campo desabilitado" />
    ) : invalid ? (
      <Badges variant="error" message={message || 'Arquivo inválido'} />
    ) : valid ? (
      <Badges variant="success" message={message || getSelectedMessage(uploadedFiles.length, multiple)} />
    ) : null
  )

  const resolvedButtonLabel = buttonLabel ?? (multiple ? 'Selecione o(s) arquivo(s)' : 'Selecione o arquivo')

  return (
    <div
      className={getClassName(
        'govrs-upload',
        disabled && 'govrs-upload--disabled',
        valid && 'govrs-upload--valid',
        invalid && 'govrs-upload--invalid',
        uploadedFiles.length > 0 && 'govrs-upload--has-files',
        className,
      )}
    >
      <input
        {...props}
        id={inputId}
        ref={inputRef}
        className="govrs-upload__native"
        type="file"
        name={name}
        multiple={multiple}
        accept={accept || undefined}
        disabled={disabled || isUploading}
        onChange={handleChange}
        aria-label={typeof resolvedButtonLabel === 'string' ? resolvedButtonLabel : 'Envio de arquivos'}
        aria-invalid={invalid || undefined}
        aria-describedby={feedbackId}
      />

      <label htmlFor={inputId} className="govrs-upload__trigger" aria-disabled={disabled || isUploading}>
        <span className="govrs-upload__icon" aria-hidden="true">
          <UploadIcon />
        </span>
        <span className="govrs-upload__label">{resolvedButtonLabel}</span>
      </label>

      {isUploading ? (
        <div className="govrs-upload__loading" aria-live="polite">
          <span className="govrs-upload__spinner" aria-hidden="true" />
          <span className="govrs-upload__loading-text">{loadingLabel}</span>
        </div>
      ) : null}

      <div className="govrs-upload__live" aria-live="polite">
        {liveMessage}
      </div>

      <div id={feedbackId} className="govrs-upload__feedback" role="status" aria-live="polite">
        {feedbackNode || defaultFeedback}
      </div>

      {uploadedFiles.length > 0 ? (
        <div className="govrs-upload__list" aria-live="polite">
          {uploadedFiles.map((file, index) => (
            <div key={`${file.name}-${file.lastModified}-${index}`} className="govrs-upload__item">
              <div className="govrs-upload__item-content">{file.name}</div>
              <button
                type="button"
                className="govrs-upload__item-remove"
                onClick={() => handleRemoveFile(index)}
                aria-label={`Remover ${file.name}`}
                disabled={disabled || isUploading}
              >
                <RemoveIcon />
              </button>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  )
}

export namespace Upload {
  export type Props = UploadProps
  export type ChangeHandler = UploadChangeHandler
  export type Handler = UploadHandler
  export type FeedbackState = UploadFeedbackState
}

export default Upload