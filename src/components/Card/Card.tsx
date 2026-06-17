import { useState, type MouseEvent, type ReactNode } from 'react';

import { Stack, Text } from '../../primitives';

import './Card.scss'


type CardVariant = 'post' | 'list' | 'news' | 'icon';
type CardSize = 'small' | 'large';

type CardAction = {
  label: string;
  url?: string;
};

type CardProps = {
  title: string;
  variant?: CardVariant;
  description?: string;
  image?: string;
  imageAlt?: string;
  size?: CardSize;
  disabled?: boolean;
  href?: string;
  linkTarget?: '_blank' | '_self';
  children?: ReactNode;
  acao?: CardAction;
  onLike?: () => void;
  onShare?: () => void;
  itens?: Array<{
    value: string;
  }>;
  bodyImg?: string;
  bodyImgAlt?: string;
};

// ******************************************************************************************************************
// SVG
// ******************************************************************************************************************
const LikeIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M32.0469 16.9609C34.5078 19.0703 34.625 22.8203 32.4375 25.0859L24.8594 32.8984C24.3906 33.4062 23.5703 33.4062 23.1016 32.8984L15.5234 25.0859C13.3359 22.8203 13.4531 19.0703 15.9141 16.9609C18.0625 15.125 21.2656 15.4766 23.2188 17.5078L24 18.2891L24.7422 17.5078C26.7344 15.4766 29.8984 15.125 32.0469 16.9609Z"
      fill="currentColor"
    />
  </svg>
);

const ShareIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.6484 6.92188C20.0781 7.3125 20.0781 7.97656 19.6484 8.36719L12.7734 14.3047C12.1875 14.8125 11.25 14.3828 11.25 13.5625V10.1641C5.15624 10.2422 2.57811 11.7266 4.33593 17.3906C4.53124 18.0156 3.74999 18.5234 3.24218 18.1328C1.52343 16.8828 -1.14441e-05 14.5 -1.14441e-05 12.1172C-1.14441e-05 6.17969 4.96093 4.89062 11.25 4.85156V1.72656C11.25 0.90625 12.1875 0.476562 12.7734 0.984375L19.6484 6.92188Z"
      fill="currentColor"
      transform="translate(14, 15) scale(1.1)"
    />
  </svg>
);

const ChevronIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg
    className={`govrs-card-chevron ${isOpen ? 'govrs-card-chevron--open' : ''}`}
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 9L12 15L18 9"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PLACEHOLDER_IMAGE =
  "data:image/svg+xml,%3Csvg viewBox='0 0 200 200' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='200' height='200' fill='%23E8F5E9'/%3E%3Cpath d='M100 60C88.95 60 80 68.95 80 80C80 91.05 88.95 100 100 100C111.05 100 120 91.05 120 80C120 68.95 111.05 60 100 60ZM140 120H60L75 95L90 115L110 85L140 120Z' fill='%231A7235' opacity='0.3'/%3E%3C/svg%3E";

function handleDisabledAnchorClick(disabled?: boolean) {
  return (event: MouseEvent<HTMLAnchorElement>) => {
    if (disabled) {
      event.preventDefault();
    }
  };
}

function getCardClassName(
  size?: CardSize,
  disabled?: boolean,
  extraClassName?: string,
  isLinked?: boolean,
) {
  return [
    'govrs-card',
    extraClassName,
    size,
    isLinked ? 'govrs-card--linked' : undefined,
    disabled ? 'govrs-card-disabled' : undefined,
  ]
    .filter(Boolean)
    .join(' ');
}

function CardStretchedLink({
  href,
  title,
  linkTarget,
}: {
  href: string;
  title: string;
  linkTarget?: '_blank' | '_self';
}) {
  return (
    <a
      className="govrs-card-stretched-link"
      href={href}
      aria-label={title}
      target={linkTarget}
      rel={linkTarget === '_blank' ? 'noopener noreferrer' : undefined}
    />
  );
}

function CardTitleLink({
  title,
  href,
  disabled,
  useStretchedLink,
}: {
  title: string;
  href?: string;
  disabled?: boolean;
  useStretchedLink?: boolean;
}) {
  if (useStretchedLink || !href) {
    return <h3>{title}</h3>;
  }

  return (
    <a
      className={`govrs-card-title-link ${disabled ? 'govrs-card-title-link-disabled' : ''}`}
      href={disabled ? undefined : href}
      onClick={handleDisabledAnchorClick(disabled)}
      aria-disabled={disabled || undefined}
      tabIndex={disabled ? -1 : undefined}
    >
      <h3>{title}</h3>
    </a>
  );
}

function CardHeaderText({
  title,
  description,
  href,
  disabled,
  useStretchedLink,
}: {
  title: string;
  description?: string;
  href?: string;
  disabled?: boolean;
  useStretchedLink?: boolean;
}) {
  return (
    <Stack className="govrs-card-header-text" gap={1}>
      <CardTitleLink
        title={title}
        href={href}
        disabled={disabled}
        useStretchedLink={useStretchedLink}
      />
      {description ? (
        <Text className="govrs-card-copy" size="sm" tone="muted">
          {description}
        </Text>
      ) : null}
    </Stack>
  );
}

function CardBody({ children }: { children?: ReactNode }) {
  if (!children) {
    return null;
  }

  return (
    <Stack className="govrs-card-body" gap={2}>
      <Text>{children}</Text>
    </Stack>
  );
}

// ******************************************************************************************************************
// POST / LIST
// ******************************************************************************************************************
function PostList({
  title,
  description,
  image,
  imageAlt,
  size,
  disabled,
  href,
  linkTarget,
  children,
  acao,
  onLike,
  onShare,
  itens,
  bodyImg,
  bodyImgAlt,
}: CardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const hasListItems = itens && itens.length > 0;
  const hasStretchedLink = Boolean(href && !disabled);

  return (
    <div
      className={getCardClassName(
        size,
        disabled,
        hasListItems ? 'govrs-card-list' : undefined,
        hasStretchedLink,
      )}
    >
      {hasStretchedLink && href ? (
        <CardStretchedLink href={href} title={title} linkTarget={linkTarget} />
      ) : null}
      <div className="govrs-card-header">
        {image && (
          <img
            src={image || PLACEHOLDER_IMAGE}
            alt={imageAlt || `Imagem de ${title || 'card'}`}
          />
        )}
        <CardHeaderText
          title={title}
          description={description}
          href={hasStretchedLink ? undefined : href}
          disabled={disabled}
          useStretchedLink={hasStretchedLink}
        />
        <button
          type="button"
          className="govrs-card-header-menu govrs-card-interactive"
          aria-label="Opcoes do card"
          disabled={disabled}
        >
          <span>⋮</span>
        </button>
      </div>
      {bodyImg && (
        <img
          src={bodyImg}
          alt={bodyImgAlt || `Imagem de ${title || 'card'}`}
          className="govrs-card-body-image"
        />
      )}
      <CardBody>{children}</CardBody>
      {hasListItems ? (
        <>
          <button
            type="button"
            className="govrs-card-list-toggle govrs-card-interactive"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Fechar lista' : 'Abrir lista'}
            disabled={disabled}
          >
            <ChevronIcon isOpen={isOpen} />
          </button>
          {isOpen && (
            <Stack className="govrs-card-list-items" gap={1}>
              {itens.map((item, index) => (
                <div key={index} className="govrs-card-list-item">
                  <span className="govrs-card-list-item-label">*</span>
                  <span className="govrs-card-list-item-value">
                    {item.value}
                  </span>
                </div>
              ))}
            </Stack>
          )}
        </>
      ) : (
        <div className="govrs-card-footer govrs-card-interactive">
          {acao && (
            <div className="govrs-card-footer-action">
              <a href={acao.url} className="govrs-card-interactive">
                {acao.label}
              </a>
            </div>
          )}
          <Stack className="govrs-card-footer-like-share" direction="row" align="center" gap={1}>
            <button type="button" aria-label="Curtir" onClick={onLike} disabled={disabled}>
              <LikeIcon />
            </button>
            <button type="button" aria-label="Compartilhar" onClick={onShare} disabled={disabled}>
              <ShareIcon />
            </button>
          </Stack>
        </div>
      )}
    </div>
  );
}

// ******************************************************************************************************************
// NEWS
// ******************************************************************************************************************
function News({
  title,
  description,
  image,
  imageAlt,
  size,
  disabled,
  href,
  linkTarget,
  children,
}: CardProps) {
  const hasStretchedLink = Boolean(href && !disabled);

  return (
    <div className={getCardClassName(size, disabled, 'govrs-card-news', hasStretchedLink)}>
      {hasStretchedLink && href ? (
        <CardStretchedLink href={href} title={title} linkTarget={linkTarget} />
      ) : null}
      {!children && (
        <img
          src={image || PLACEHOLDER_IMAGE}
          alt={imageAlt || `Imagem de ${title || 'card'}`}
          className="govrs-card-image"
        />
      )}
      <div className="govrs-card-header">
        <CardHeaderText
          title={title}
          description={description}
          href={hasStretchedLink ? undefined : href}
          disabled={disabled}
          useStretchedLink={hasStretchedLink}
        />
        {children && (
          <button
            type="button"
            className="govrs-card-header-menu govrs-card-interactive"
            aria-label="Opcoes do card"
            disabled={disabled}
          >
            <span>⋮</span>
          </button>
        )}
      </div>
      {children && (
        <img
          src={image || PLACEHOLDER_IMAGE}
          alt={imageAlt || `Imagem de ${title || 'card'}`}
          className="govrs-card-image"
        />
      )}
      <CardBody>{children}</CardBody>
    </div>
  );
}

// ******************************************************************************************************************
// ICON
// ******************************************************************************************************************
function Icon({
  title,
  description,
  image,
  disabled,
  href,
  linkTarget,
  size,
}: CardProps) {
  const hasStretchedLink = Boolean(href && !disabled);

  return (
    <div className={getCardClassName(size, disabled, 'govrs-card-icon', hasStretchedLink)}>
      {hasStretchedLink && href ? (
        <CardStretchedLink href={href} title={title} linkTarget={linkTarget} />
      ) : null}
      <img
        src={image || PLACEHOLDER_IMAGE}
        alt=""
        className="govrs-card-icon-img"
      />
      <div className="govrs-card-header">
        <CardHeaderText
          title={title}
          description={description}
          href={hasStretchedLink ? undefined : href}
          disabled={disabled}
          useStretchedLink={hasStretchedLink}
        />
      </div>
    </div>
  );
}

// ******************************************************************************************************************
// CARD FUNCTION
// ******************************************************************************************************************
export function Card({
  title,
  variant,
  description,
  image,
  imageAlt,
  size,
  disabled,
  href,
  linkTarget,
  children,
  acao,
  onLike,
  onShare,
  itens,
  bodyImg,
  bodyImgAlt,
}: CardProps) {
  if (variant === 'news') {
    return (
      <News
        title={title}
        variant={variant}
        description={description}
        image={image}
        imageAlt={imageAlt}
        size={size}
        disabled={disabled}
        href={href}
        linkTarget={linkTarget}
        children={children}
      />
    );
  }
  if (variant === 'icon') {
    return (
      <Icon
        title={title}
        variant={variant}
        description={description}
        image={image}
        imageAlt={imageAlt}
        size={size}
        disabled={disabled}
        href={href}
        linkTarget={linkTarget}
      />
    );
  }

  // Default to PostList for both 'post' and 'list' variants
  return (
    <PostList
      title={title}
      variant={variant}
      description={description}
      image={image}
      imageAlt={imageAlt}
      size={size}
      disabled={disabled}
      href={href}
      linkTarget={linkTarget}
      children={children}
      acao={acao}
      onLike={onLike}
      onShare={onShare}
      itens={itens}
      bodyImg={bodyImg}
      bodyImgAlt={bodyImgAlt}
    />
  );
}

export namespace Card {
  export type Props = CardProps;
  export type Variant = CardVariant;
}
