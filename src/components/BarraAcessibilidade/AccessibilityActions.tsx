import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleHalfStroke, faEnvelope, faSitemap } from '@fortawesome/free-solid-svg-icons'
import { useHighContrast } from '../../hooks/useHighContrast'
import './AccessibilityActions.scss'

export type AccessibilityActionsProps = {
  defaultHighContrast?: boolean
  disableHighContrastToggle?: boolean
  hrefContact?: string
  hrefSitemap?: string
}

type Props = AccessibilityActionsProps & {
  showLabels?: boolean
  contrastButtonId?: string
}

export function AccessibilityActions({
  defaultHighContrast,
  disableHighContrastToggle = false,
  hrefContact,
  hrefSitemap,
  showLabels = false,
  contrastButtonId,
}: Props) {
  const contactHref = hrefContact?.trim()
  const { enabled, toggle } = useHighContrast(
    Boolean(defaultHighContrast),
    undefined,
    { sync: !disableHighContrastToggle },
  )

  return (
    <ul className={`govrs-accessibility-actions${showLabels ? ' govrs-accessibility-actions--labels' : ''}`}>
      <li>
        <button
          id={contrastButtonId}
          type="button"
          aria-pressed={enabled}
          aria-label={enabled ? 'Desativar alto contraste' : 'Ativar alto contraste'}
          disabled={disableHighContrastToggle}
          onClick={disableHighContrastToggle ? undefined : toggle}
          className="acess-contrast-btn"
        >
          <FontAwesomeIcon icon={faCircleHalfStroke} />
          {showLabels ? <span>Contraste</span> : null}
        </button>
      </li>
      {contactHref ? (
        <li>
          <a href={contactHref} aria-label="Contato">
            <FontAwesomeIcon icon={faEnvelope} />
            {showLabels ? <span>Fale conosco</span> : null}
          </a>
        </li>
      ) : null}
      {hrefSitemap ? (
        <li>
          <a href={hrefSitemap} aria-label="Mapa do site">
            <FontAwesomeIcon icon={faSitemap} />
            {showLabels ? <span>Mapa do site</span> : null}
          </a>
        </li>
      ) : null}
    </ul>
  )
}
