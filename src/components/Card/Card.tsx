import { useState, type ReactNode, type MouseEvent } from 'react';
import './Card.scss';

type CardVariant = 'post' | 'list' | 'news' | 'icon';

type CardProps = {
  title: string;
  variant?: CardVariant;
  description?: string;
  image?: string;
  imageAlt?: string;
  size?: 'small' | 'large';
  disabled?: boolean;
  href?: string;
  children?: ReactNode;
  acao?: {
    label: string;
    url?: string;
  };
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
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
      transition: 'transform 0.3s ease',
    }}
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
  children,
  acao,
  onLike,
  onShare,
  itens,
  bodyImg,
  bodyImgAlt,
}: CardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (disabled) {
      e.preventDefault();
    }
  };

  const hasListItems = itens && itens.length > 0;
  const variantClass = hasListItems ? 'govrs-card-list' : '';

  return (
    <div
      className={`govrs-card ${variantClass} ${size ? `${size}` : ''} ${disabled ? 'govrs-card-disabled' : ''}`}
    >
      <div className="govrs-card-header">
        {image && (
          <img
            src={image || PLACEHOLDER_IMAGE}
            alt={imageAlt || `Imagem de ${title || 'card'}`}
          />
        )}
        <div className="govrs-card-header-text">
          <a
            href={href}
            onClick={handleClick}
            style={{ pointerEvents: disabled ? 'none' : 'auto' }}
          >
            <h3>{title}</h3>
          </a>
          {description && <p>{description}</p>}
        </div>
        <button
          className="govrs-card-header-menu"
          aria-label="Options"
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
      {children && (
        <div className="govrs-card-body">
          <p>{children}</p>
        </div>
      )}
      {hasListItems ? (
        <>
          <button
            className="govrs-card-list-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Fechar lista' : 'Abrir lista'}
            disabled={disabled}
          >
            <ChevronIcon isOpen={isOpen} />
          </button>
          {isOpen && (
            <div className="govrs-card-list-items">
              {itens.map((item, index) => (
                <div key={index} className="govrs-card-list-item">
                  <span className="govrs-card-list-item-label">*</span>
                  <span className="govrs-card-list-item-value">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          )}
        </>
      ) : (
        <div className="govrs-card-footer">
          {acao && (
            <div className="govrs-card-footer-action">
              <a href={acao.url}>{acao.label}</a>
            </div>
          )}
          <div className="govrs-card-footer-like-share">
            <button aria-label="Like" onClick={onLike} disabled={disabled}>
              <LikeIcon />
            </button>
            <button aria-label="Share" onClick={onShare} disabled={disabled}>
              <ShareIcon />
            </button>
          </div>
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
  children,
}: CardProps) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (disabled) {
      e.preventDefault();
    }
  };

  return (
    <div
      className={`govrs-card govrs-card-news ${size ? `${size}` : ''} ${disabled ? 'govrs-card-disabled' : ''}`}
    >
      {!children && (
        <img
          src={image || PLACEHOLDER_IMAGE}
          alt={imageAlt || `Imagem de ${title || 'card'}`}
          className="govrs-card-image"
        />
      )}
      <div className="govrs-card-header">
        <div className="govrs-card-header-text">
          <a
            href={href}
            onClick={handleClick}
            style={{ pointerEvents: disabled ? 'none' : 'auto' }}
          >
            <h3>{title}</h3>
          </a>
          {description && <p>{description}</p>}
        </div>
        {children && (
          <button
            className="govrs-card-header-menu"
            aria-label="Options"
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
      {children && (
        <div className="govrs-card-body">
          <p>{children}</p>
        </div>
      )}
    </div>
  );
}

// ******************************************************************************************************************
// ICON
// ******************************************************************************************************************
function Icon({ title, description, image, disabled, href }: CardProps) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (disabled) {
      e.preventDefault();
    }
  };

  return (
    <div
      className={`govrs-card govrs-card-icon ${disabled ? 'govrs-card-disabled' : ''}`}
    >
      <img
        src={image || PLACEHOLDER_IMAGE}
        alt=""
        className="govrs-card-icon-img"
      />
      <div className="govrs-card-header">
        <div className="govrs-card-header-text">
          <a
            href={href}
            onClick={handleClick}
            style={{ pointerEvents: disabled ? 'none' : 'auto' }}
          >
            <h3>{title}</h3>
          </a>
          {description && <p>{description}</p>}
        </div>
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
  children,
  acao,
  onLike,
  onShare,
  itens,
  bodyImg,
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
        size={size}
        disabled={disabled}
        href={href}
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
      children={children}
      acao={acao}
      onLike={onLike}
      onShare={onShare}
      itens={itens}
      bodyImg={bodyImg}
    />
  );
}

export namespace Card {
  export type Props = CardProps;
  export type Variant = CardVariant;
}
