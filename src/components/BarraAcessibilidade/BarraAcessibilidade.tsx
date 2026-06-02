import { useEffect, useMemo } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleHalfStroke,
  faEnvelope,
  faSitemap,
  faUniversalAccess,
} from '@fortawesome/free-solid-svg-icons'
import { ensureStylesheet } from '../../runtime/ensureStylesheet'
import stylesheetUrl from './BarraAcessibilidade.scss?url'

ensureStylesheet(stylesheetUrl)
import useHighContrast from '../../hooks/useHighContrast'

type BarraAcessibilidadeProps = {
  defaultHighContrast?: boolean
  hrefAccessibility?: string
  hrefContact?: string
  hrefSitemap?: string
  shortcuts?: Array<{ title: string; href: string }>
}

export function BarraAcessibilidade({
  defaultHighContrast,
  hrefAccessibility,
  hrefContact,
  hrefSitemap,
  shortcuts,
}: BarraAcessibilidadeProps) {
  const { enabled: isHighContrast, toggle: toggleContrast } = useHighContrast(Boolean(defaultHighContrast))

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
      if (!/^[1-9]$/.test(key)) return
      const index = parseInt(key, 10) - 1
      const item = shortcutItems[index]
      if (!item || !item.href) return

      const href = item.href
      if (href.startsWith('#')) {
        const id = href.slice(1)
        if (index === 2) {
          setTimeout(() => {
            const el = document.getElementById(id) as HTMLElement | null
            el?.focus()
            el?.scrollIntoView({ behavior: 'smooth' })
          }, 0)
        } else {
          const el = document.getElementById(id)
          el?.scrollIntoView({ behavior: 'smooth' })
        }
      } else if (typeof window !== 'undefined') {
        window.location.href = href
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [shortcutItems])

  return (
    <div className="acess-wrapper">
      <div className="acess-right">
        <ul className="acess-ul">
          {shortcutItems.map((item, idx) => (
            <li key={idx}>
              <a title={`Ir para ${item.title.toLowerCase()}`} href={item.href}>
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
        <ul className="acess-ul">
          <li>
            <button
              id="btn-contraste"
              type="button"
              aria-pressed={isHighContrast}
              aria-label={isHighContrast ? 'Desativar alto contraste' : 'Ativar alto contraste'}
              onClick={toggleContrast}
              className="acess-contrast-btn"
            >
              <FontAwesomeIcon icon={faCircleHalfStroke} height={'16px'} width={'16px'} />
            </button>
          </li>

          {hrefContact ? (
            <li>
              <a href={hrefContact} aria-label="Contato">
                <FontAwesomeIcon icon={faEnvelope} height={'16px'} width={'16px'} />
              </a>
            </li>
          ) : null}

          {hrefSitemap ? (
            <li>
              <a href={hrefSitemap} aria-label="Mapa do site">
                <FontAwesomeIcon icon={faSitemap} height={'16px'} width={'16px'} />
              </a>
            </li>
          ) : null}
        </ul>
      </div>
    </div>
  )
}

export namespace BarraAcessibilidade {
  export type Props = BarraAcessibilidadeProps
}

export default BarraAcessibilidade
