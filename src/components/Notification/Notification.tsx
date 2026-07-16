import { useEffect, useId, useRef, useState, type ReactNode } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faXmark } from '@fortawesome/free-solid-svg-icons'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { Button } from '../Button/Button'
import './Notification.scss'

export type NotificationItem = {
  id: string | number
  title: ReactNode
  description: ReactNode
  time?: ReactNode
  isNew?: boolean
  disabled?: boolean
}

export type NotificationTab = {
  id: string | number
  /**
   * Conteúdo textual/JSX da aba.
   * Combinações suportadas:
   * - só texto: label
   * - só ícone: icon
   * - ícone e texto: icon + label
   */
  label?: ReactNode
  /** Ícone Font Awesome para a aba */
  icon?: IconDefinition
  items: NotificationItem[]
}

export type NotificationProps = {
  /** Rótulo do botão que dispara o modal (se vazio, mostra apenas o ícone) */
  buttonLabel?: ReactNode
  /** Usar ícone de sininho no botão */
  useBellIcon?: boolean
  /** Variante do botão */
  buttonVariant?: 'primary' | 'secondary' | 'tertiary'
  /** Tamanho do botão */
  buttonSize?: 'small' | 'medium' | 'large'
  /** Abas de notificações */
  tabs: NotificationTab[]
  /** Mostrar seção de usuário */
  showUserArea?: boolean
  /** Dados do usuário (nome e email) */
  user?: {
    name?: ReactNode
    email?: ReactNode
  }
  /** Callback quando fechar o modal */
  onClose?: () => void
  /** Exibir botão de fechar no painel (padrão: true) */
  showCloseButton?: boolean
  /** Callback quando clicar em uma notificação */
  onNotificationClick?: (notificationId: string | number) => void
  /** Classe customizada para o container */
  className?: string
}

export function Notification({
  buttonLabel = 'Notificações',
  useBellIcon = true,
  buttonVariant = 'secondary',
  buttonSize = 'medium',
  tabs,
  showUserArea = true,
  user,
  onClose,
  showCloseButton = true,
  onNotificationClick,
  className,
}: NotificationProps) {
  const validTabs = tabs && tabs.length > 0 ? tabs : []
  const [isOpen, setIsOpen] = useState(false)
  const [activeTabId, setActiveTabId] = useState(validTabs[0]?.id)
  const [panelAlignment, setPanelAlignment] = useState<'left' | 'right'>('left')
  const containerRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const panelId = useId()

  const handleTogglePanel = () => {
    setIsOpen((currentState) => !currentState)
  }

  const handleClosePanel = () => {
    setIsOpen(false)
    onClose?.()
  }

  useEffect(() => {
    if (!isOpen) {
      return undefined
    }

    function handleOutsideClick(event: MouseEvent | TouchEvent) {
      const eventTarget = event.target

      if (!(eventTarget instanceof Node)) {
        return
      }

      if (!containerRef.current?.contains(eventTarget)) {
        handleClosePanel()
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        handleClosePanel()
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)
    document.addEventListener('touchstart', handleOutsideClick)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
      document.removeEventListener('touchstart', handleOutsideClick)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) {
      return undefined
    }

    function updatePanelAlignment() {
      const triggerRect = triggerRef.current?.getBoundingClientRect()
      const panelRect = panelRef.current?.getBoundingClientRect()

      if (!triggerRect || !panelRect) {
        return
      }

      const viewportWidth = window.innerWidth
      const horizontalPadding = 16
      const wouldOverflowRight = triggerRect.left + panelRect.width > viewportWidth - horizontalPadding

      setPanelAlignment(wouldOverflowRight ? 'right' : 'left')
    }

    updatePanelAlignment()
    window.addEventListener('resize', updatePanelAlignment)

    return () => {
      window.removeEventListener('resize', updatePanelAlignment)
    }
  }, [isOpen])

  const handleNotificationClick = (notificationId: string | number) => {
    onNotificationClick?.(notificationId)
  }

  const hasUserArea = showUserArea && Boolean(user)
  const hasVisualTabs = validTabs.length > 1
  const shouldReserveContentTopSpace = showCloseButton && !hasUserArea && !hasVisualTabs

  const activeTab = validTabs.find((tab) => tab.id === activeTabId)

  return (
    <div ref={containerRef} className={`govrs-notification ${className || ''}`}>
      {/* Botão para abrir modal */}
      <div ref={triggerRef}>
        <Button
          variant={buttonVariant}
          size={buttonSize}
          circle={!buttonLabel}
          onClick={handleTogglePanel}
          aria-expanded={isOpen}
          aria-controls={panelId}
          aria-label={typeof buttonLabel === 'string' ? buttonLabel : 'Abrir notificações'}
        >
          {useBellIcon && (
            <FontAwesomeIcon icon={faBell} style={buttonLabel ? { marginRight: '0.5rem' } : undefined} />
          )}
          {buttonLabel}
        </Button>
      </div>

      {/* Painel de notificações */}
      {isOpen && (
        <div
          id={panelId}
          ref={panelRef}
          className={`govrs-notification__modal govrs-notification__modal--${panelAlignment}`}
          role="dialog"
          aria-label="Notificações"
          aria-modal="false"
        >
          <div className="govrs-notification__container">
            {showCloseButton && (
              <button
                type="button"
                className="govrs-notification__close-button"
                onClick={handleClosePanel}
                aria-label="Fechar notificações"
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            )}

            {/* Área do usuário */}
            {hasUserArea && (
              <div
                className={[
                  'govrs-notification__user-area',
                  showCloseButton ? 'govrs-notification__user-area--with-close' : '',
                ].filter(Boolean).join(' ')}
              >
                <div className="govrs-notification__user-info">
                  {user?.name && (
                    <p className="govrs-notification__user-name">{user?.name}</p>
                  )}
                  {user?.email && (
                    <p className="govrs-notification__user-email">{user?.email}</p>
                  )}
                </div>
              </div>
            )}

            {/* Tabs */}
            {hasVisualTabs && (
              <div
                className={[
                  'govrs-notification__tabs',
                  showCloseButton && !hasUserArea ? 'govrs-notification__tabs--with-close' : '',
                ].filter(Boolean).join(' ')}
              >
                <div className="govrs-notification__tab-list" role="tablist">
                  {validTabs.map((tab) => {
                    const isIconOnly = tab.icon && !tab.label
                    const ariaLabel = typeof tab.label === 'string'
                      ? tab.label
                      : isIconOnly
                        ? `Aba ${String(tab.id)}`
                        : undefined

                    return (
                      <button
                        key={tab.id}
                        role="tab"
                        aria-selected={tab.id === activeTabId}
                        aria-label={ariaLabel}
                        className={[
                          'govrs-notification__tab',
                          tab.id === activeTabId ? 'govrs-notification__tab--active' : '',
                          isIconOnly ? 'govrs-notification__tab--icon-only' : '',
                        ].filter(Boolean).join(' ')}
                        onClick={() => setActiveTabId(tab.id)}
                      >
                        {tab.icon && (
                          <FontAwesomeIcon
                            icon={tab.icon}
                            aria-hidden
                            className={tab.label ? 'govrs-notification__tab-icon' : undefined}
                          />
                        )}
                        {tab.label}
                      </button>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Lista de notificações */}
            <div
              className={[
                'govrs-notification__content',
                shouldReserveContentTopSpace ? 'govrs-notification__content--with-close' : '',
              ].filter(Boolean).join(' ')}
            >
              {activeTab && activeTab.items.length > 0 ? (
                <div className="govrs-notification__items">
                  {activeTab.items.map((item) => (
                    <div
                      key={item.id}
                      className={`govrs-notification__item${item.disabled ? ' govrs-notification__item--disabled' : ''}`}
                      role="button"
                      tabIndex={item.disabled ? -1 : 0}
                      aria-disabled={item.disabled || undefined}
                      onClick={item.disabled ? undefined : () => handleNotificationClick(item.id)}
                      onKeyDown={(e) => {
                        if (item.disabled) return
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault()
                          handleNotificationClick(item.id)
                        }
                      }}
                    >
                      <div className="govrs-notification__item-header">
                        <h3 className="govrs-notification__item-title">
                          {item.isNew ? (
                            <span className="govrs-notification__item-new-indicator" aria-hidden />
                          ) : null}
                          <span>{item.title}</span>
                        </h3>
                        {item.time && (
                          <span className="govrs-notification__item-time">
                            {item.time}
                          </span>
                        )}
                      </div>
                      <p className="govrs-notification__item-description">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="govrs-notification__empty-state">
                  <p>Nenhuma notificação neste momento</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export namespace Notification {
  export type Props = NotificationProps
  export type Tab = NotificationTab
  export type Item = NotificationItem
  export type TabIcon = IconDefinition
}

export default Notification
