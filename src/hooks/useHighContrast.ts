import { useCallback, useEffect, useState } from 'react'

export const HIGH_CONTRAST_EVENT = 'govrs:high-contrast'
export const HIGH_CONTRAST_STORAGE_KEY = 'govrs:high-contrast'

type HighContrastEventDetail = {
  enabled: boolean
}

export type UseHighContrastOptions = {
  sync?: boolean
}

function isHighContrastRootEnabled() {
  if (typeof document === 'undefined') {
    return false
  }

  const root = document.documentElement

  return root.classList.contains('high-contrast')
    || root.dataset.govrsContrast === 'high'
}

function readStoredValue(storageKey: string, fallback: boolean) {
  if (typeof window === 'undefined') {
    return fallback
  }

  try {
    const storedValue = window.localStorage.getItem(storageKey)

    if (storedValue !== null) {
      return storedValue === '1'
    }
  } catch {
    // Storage can be unavailable in private browsing or restricted contexts.
  }

  return isHighContrastRootEnabled() || fallback
}

function applyHighContrastState(enabled: boolean) {
  if (typeof document === 'undefined') {
    return
  }

  const root = document.documentElement

  root.classList.toggle('high-contrast', enabled)

  if (enabled) {
    root.dataset.govrsContrast = 'high'
  } else {
    delete root.dataset.govrsContrast
  }
}

export function useHighContrast(
  defaultValue = false,
  storageKey = HIGH_CONTRAST_STORAGE_KEY,
  { sync = true }: UseHighContrastOptions = {},
) {
  const [enabled, setEnabled] = useState<boolean>(() => (
    sync ? readStoredValue(storageKey, defaultValue) : defaultValue
  ))

  useEffect(() => {
    if (!sync || typeof window === 'undefined') {
      return undefined
    }

    applyHighContrastState(enabled)

    try {
      window.localStorage.setItem(storageKey, enabled ? '1' : '0')
    } catch {
      // Storage can be unavailable in private browsing or restricted contexts.
    }

    window.dispatchEvent(
      new CustomEvent<HighContrastEventDetail>(HIGH_CONTRAST_EVENT, {
        detail: { enabled },
      }),
    )

    const handleStorage = (event: StorageEvent) => {
      if (event.key !== storageKey || event.newValue === null) {
        return
      }

      setEnabled(event.newValue === '1')
    }

    const handleContrastEvent = (event: Event) => {
      const contrastEvent = event as CustomEvent<HighContrastEventDetail>

      if (typeof contrastEvent.detail?.enabled === 'boolean') {
        setEnabled(contrastEvent.detail.enabled)
      }
    }

    window.addEventListener('storage', handleStorage)
    window.addEventListener(HIGH_CONTRAST_EVENT, handleContrastEvent)

    return () => {
      window.removeEventListener('storage', handleStorage)
      window.removeEventListener(HIGH_CONTRAST_EVENT, handleContrastEvent)
    }
  }, [enabled, storageKey, sync])

  const toggle = useCallback(() => setEnabled((value) => !value), [])

  return { enabled, toggle, setEnabled }
}
