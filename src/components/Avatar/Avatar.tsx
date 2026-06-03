import { useState, type KeyboardEvent } from 'react'

import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { colors } from '../../tokens/colors'

import './Avatar.scss'


type AvatarSize = 'small' | 'medium' | 'large'

type AvatarMenuItem = {
  label: string
  onClick: () => void
}

type AvatarProps = {
  name: string
  size?: AvatarSize
  letter?: boolean
  iconic?: boolean
  dropdown?: boolean
  imageUrl?: string
  menuItems?: AvatarMenuItem[]
  className?: string
}

const avatarToneCount = colors.avatar.tones.length

function getClassName(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(' ')
}

function getToneIndexFromName(name: string) {
  let hash = 0

  for (let index = 0; index < name.length; index += 1) {
    hash = name.charCodeAt(index) + ((hash << 5) - hash)
  }

  return Math.abs(hash) % avatarToneCount
}

function getFirstName(name: string) {
  const [firstName] = name.trim().split(/\s+/)

  return firstName || name
}

function getInitial(name: string) {
  return name.charAt(0) || '?'
}

type AvatarVisualProps = {
  name: string
  size: AvatarSize
  imageUrl?: string
  letter?: boolean
  iconic?: boolean
  toneIndex: number
  className?: string
}

function AvatarVisual({
  name,
  size,
  imageUrl,
  letter = false,
  iconic = false,
  toneIndex,
  className,
}: AvatarVisualProps) {
  const classes = getClassName(
    'govrs-avatar',
    `govrs-avatar--${size}`,
    `govrs-avatar--tone-${toneIndex}`,
    className,
  )

  return (
    <div className={classes} aria-label={imageUrl ? undefined : name}>
      {iconic ? (
        <div className="govrs-avatar__icon-surface" aria-hidden="true">
          <FontAwesomeIcon icon={faUser} />
        </div>
      ) : !letter && imageUrl ? (
        <img className="govrs-avatar__image" src={imageUrl} alt={name} />
      ) : (
        <span className="govrs-avatar__initial" aria-hidden="true">
          {getInitial(name)}
        </span>
      )}
    </div>
  )
}

function ChevronIcon({ expanded }: { expanded: boolean }) {
  return expanded ? (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M4 10l4-4 4 4z" />
    </svg>
  ) : (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M4 6l4 4 4-4z" />
    </svg>
  )
}

export function Avatar({
  name,
  size = 'medium',
  imageUrl,
  letter = false,
  iconic = false,
  dropdown = false,
  menuItems = [],
  className,
}: AvatarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toneIndex = getToneIndexFromName(name)
  const firstName = getFirstName(name)

  const avatarVisual = (
    <AvatarVisual
      name={name}
      size={size}
      imageUrl={imageUrl}
      letter={letter}
      iconic={iconic}
      toneIndex={toneIndex}
      className={!dropdown ? className : undefined}
    />
  )

  function toggleMenu() {
    setIsMenuOpen((currentState) => !currentState)
  }

  function handleWrapperKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key !== 'Enter' && event.key !== ' ') {
      return
    }

    event.preventDefault()
    toggleMenu()
  }

  if (!dropdown) {
    return avatarVisual
  }

  return (
    <div
      className={getClassName('govrs-avatar-dropdown-wrapper', className)}
      onClick={toggleMenu}
      onKeyDown={handleWrapperKeyDown}
      role="button"
      tabIndex={0}
      aria-haspopup={menuItems.length > 0 ? 'menu' : undefined}
      aria-expanded={isMenuOpen}
    >
      <div className="govrs-avatar-dropdown">
        <AvatarVisual
          name={name}
          size={size}
          imageUrl={imageUrl}
          letter={letter}
          iconic={iconic}
          toneIndex={toneIndex}
        />

        <div className="govrs-avatar-dropdown__content">
          <p>
            Ola, <b>{firstName}</b>
          </p>
        </div>

        <button
          type="button"
          className="govrs-avatar-dropdown__trigger"
          aria-label="Alternar menu do avatar"
          aria-hidden="true"
          tabIndex={-1}
        >
          <ChevronIcon expanded={isMenuOpen} />
        </button>
      </div>

      {isMenuOpen && menuItems.length > 0 ? (
        <div className="govrs-avatar-dropdown__menu" role="menu">
          {menuItems.map((item, index) => (
            <button
              key={`${item.label}-${index}`}
              type="button"
              className="govrs-avatar-dropdown__menu-item"
              role="menuitem"
              onClick={(event) => {
                event.stopPropagation()
                item.onClick()
                setIsMenuOpen(false)
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  )
}

export namespace Avatar {
  export type Props = AvatarProps
  export type Size = AvatarSize
  export type MenuItem = AvatarMenuItem
}

export default Avatar