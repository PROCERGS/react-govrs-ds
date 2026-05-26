import { useCallback, useEffect, useState } from 'react'

export function useHighContrast(defaultValue?: boolean, storageKey = 'govrs:high-contrast') {
  const getInitial = () => {
    if (typeof window === 'undefined') return Boolean(defaultValue)
    try {
      const raw = localStorage.getItem(storageKey)
      if (raw !== null) return raw === '1'
    } catch (e) {
      // ignore
    }
    return Boolean(defaultValue)
  }

  const [enabled, setEnabled] = useState<boolean>(getInitial)

  useEffect(() => {
    if (typeof window === 'undefined') return
    try {
      document.documentElement.classList.toggle('high-contrast', enabled)
      localStorage.setItem(storageKey, enabled ? '1' : '0')
      // emit a custom event useful for analytics or other parts of the app
      try {
        window.dispatchEvent(new CustomEvent('govrs:high-contrast', { detail: { enabled } } as any))
      } catch {}
    } catch (e) {
      // ignore
    }
  }, [enabled, storageKey])

  const toggle = useCallback(() => setEnabled((v) => !v), [])

  return { enabled, toggle, setEnabled }
}

export default useHighContrast
