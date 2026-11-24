import { useEffect, useMemo } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUniversalAccess } from '@fortawesome/free-solid-svg-icons'
import './BarraAcessibilidade.scss'

import { AccessibilityActions, type AccessibilityActionsProps } from './AccessibilityActions'

type AccessibilityShortcut = {
  title: string
  href: string
  onActivate?: () => void
}

type BarraAcessibilidadeProps = AccessibilityActionsProps & {
  hrefAccessibility?: string
  shortcuts?: AccessibilityShortcut[]
  secretariatName?: string
  secretariatImageSrc?: string
  secretariatImageAlt?: string
}

export function BarraAcessibilidade({
  defaultHighContrast,
  disableHighContrastToggle = false,
  hrefAccessibility,
  hrefContact,
  hrefSitemap,
  shortcuts,
  secretariatName,
  secretariatImageSrc,
  secretariatImageAlt = '',
}: BarraAcessibilidadeProps) {
  const hasSecretariat = Boolean(secretariatName?.trim() || secretariatImageSrc)

  const shortcutItems = useMemo(() => {
    if (Array.isArray(shortcuts) && shortcuts.length > 0) return shortcuts
    return []
  }, [shortcuts])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.defaultPrevented) return

      const target = event.target as HTMLElement | null
      if (target) {
        const tag = target.tagName?.toLowerCase()
        if (tag === 'input' || tag === 'textarea' || tag === 'select') return
        if (target.isContentEditable) return
      }

      if (!event.altKey) return
      const key = event.key
      if (!/^[1-3]$/.test(key)) return
      const index = parseInt(key, 10) - 1
      const item = shortcutItems[index]
      if (!item) return

      event.preventDefault()

      if (item.onActivate) {
        item.onActivate()
        return
      }

      const href = item.href
      if (href.startsWith('#')) {
        const id = href.slice(1)
        const el = document.getElementById(id)
        el?.scrollIntoView({ behavior: 'smooth' })
      } else if (typeof window !== 'undefined') {
        window.location.href = href
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [shortcutItems])

  return (
    <div className={`acess-bar${hasSecretariat ? ' acess-bar--secretariat' : ''}`}>
      <div className="acess-wrapper">
        {hasSecretariat ? (
          <div className="acess-secretariat">
            {secretariatImageSrc ? (
              <img className="acess-secretariat__image" src={secretariatImageSrc} alt={secretariatImageAlt} />
            ) : null}
            {secretariatName ? <span className="acess-secretariat__name">{secretariatName}</span> : null}
          </div>
        ) : null}
        <div className="acess-right">
          <ul className="acess-ul">
            {shortcutItems.map((item, idx) => (
              <li key={idx}>
                <a
                  title={`Ir para ${item.title.toLowerCase()}`}
                  href={item.href}
                  onClick={(event) => {
                    if (!item.onActivate) return
                    event.preventDefault()
                    item.onActivate()
                  }}
                >
                  {item.title} [{idx + 1}]
                </a>{' '}
              </li>
            ))}

            {hrefAccessibility ? (
              <li>
                <a href={hrefAccessibility}>
                  <FontAwesomeIcon icon={faUniversalAccess} height={'12px'} width={'12px'} /> Acessibilidade
                </a>
              </li>
            ) : null}
          </ul>
        </div>

        <div className="acess-left">
          <AccessibilityActions
            defaultHighContrast={defaultHighContrast}
            disableHighContrastToggle={disableHighContrastToggle}
            hrefContact={hrefContact}
            hrefSitemap={hrefSitemap}
            contrastButtonId="btn-contraste"
          />
        </div>
      </div>
    </div>
  )
}

export namespace BarraAcessibilidade {
  export type Props = BarraAcessibilidadeProps
}

export default BarraAcessibilidade
