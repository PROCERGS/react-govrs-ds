import { useEffect, useState } from 'react';
import './Footer.scss'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import brasao from './assets/brasao-RS.svg?url';
import facebookIcon from './assets/facebook.svg?url';
import instaIcon from './assets/insta.svg?url';
import ytIcon from './assets/yt.svg?url';
import xIcon from './assets/x.svg?url';
import procergsLogo from './assets/procergs.svg?url';

export namespace Footer {
  export type Item = {
    title?: string;
    url?: string;
    href?: string;
    items?: Item[];
  };

  export type Section = {
    title?: string;
    url?: string;
    href?: string;
    items?: Item[];
  };

  export type SocialLinks = {
    facebook?: string;
    instagram?: string;
    youtube?: string;
    x?: string;
  };

  export interface Props {
    items?: Section[];
    images?: string[];
    className?: string;
    navigationLabel?: string;
    children?: React.ReactNode;
    asidePosition?: 'before' | 'after';
    socialLinks?: SocialLinks;
    license?: string;
  }
}

export function Footer({ items = [], images = [], className = '', navigationLabel = 'Rodapé', children, asidePosition = 'after', socialLinks = {}, license = '' }: Footer.Props) {
  const [openMap, setOpenMap] = useState<Record<number, boolean>>({});
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const raw = getComputedStyle(root).getPropertyValue('--govrs-breakpoint-smartphone-landscape-tablet-portrait-max') || '48rem';
    const bp = raw.trim() || '48rem';
    let mq: MediaQueryList;
    try {
      mq = window.matchMedia(`(max-width: ${bp})`);
    } catch (e) {
      mq = window.matchMedia('(max-width: 48rem)');
    }

    const onChange = () => setIsMobile(mq.matches);
    onChange();
    if (mq.addEventListener) mq.addEventListener('change', onChange);
    else mq.addListener(onChange);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', onChange as any);
      else mq.removeListener(onChange as any);
    };
  }, []);

  const toggle = (index: number) => {
    setOpenMap((s) => ({ ...s, [index]: !s[index] }));
  };

  const hasSocial = !!(socialLinks && (socialLinks.facebook || socialLinks.instagram || socialLinks.youtube || socialLinks.x));

  return (
    <footer className={`govrs-footer ${className}`} data-mobile={isMobile}>
      <div className="govrs-footer__container">
        <figure className="govrs-footer__brasao" aria-hidden="true">
          <img src={brasao} alt="Brasão do RS" />
        </figure>
        <div className="govrs-footer__content">
        {asidePosition === 'before' && children ? (
          <aside className={`govrs-footer__aside govrs-footer__aside--before`} aria-label="footer-aside">
            {children}
          </aside>
        ) : null}

        <nav className="govrs-footer__nav" aria-label={navigationLabel}>
          <ul className="govrs-footer__sitemap">
            {items.map((section, idx) => {
            const hasChildren = !!(section.items && section.items.length > 0);
            const sublistStyle: React.CSSProperties | undefined = isMobile
              ? { maxHeight: openMap[idx] ? '100vh' : '0', overflow: 'hidden', transition: 'max-height 220ms ease' }
              : undefined

            return (
              <li key={idx} className={`govrs-footer__item ${openMap[idx] ? 'accordion-open' : ''}`}>
                <div className="govrs-footer__header">
                  {hasChildren && isMobile ? (
                    <button
                      className="govrs-footer__toggle-button"
                      aria-expanded={!!openMap[idx]}
                      aria-controls={`govrs-footer-section-${idx}`}
                      onClick={() => toggle(idx)}
                      type="button"
                    >
                      <span className="govrs-footer__title">{section.title}</span>
                      <span className="govrs-footer__toggle-icon">
                        <FontAwesomeIcon icon={openMap[idx] ? faChevronUp : faChevronDown} />
                      </span>
                    </button>
                  ) : (
                    section.url || section.href ? (
                      <a href={section.url ?? section.href} title={section.title}>
                        <span className="govrs-footer__title">{section.title}</span>
                      </a>
                    ) : (
                      <div className="govrs-footer__title">{section.title}</div>
                    )
                  )}
                </div>

                {hasChildren && (
                  <ul
                    id={`govrs-footer-section-${idx}`}
                    className="govrs-footer__sublist"
                    style={sublistStyle}
                    aria-hidden={isMobile ? !openMap[idx] : false}
                  >
                    {section.items!.map((it, j) => (
                      <li key={j}>
                        {it.url ?? it.href ? (
                          <a href={it.url ?? it.href} title={it.title}>
                            <span className="govrs-footer__subitem">{it.title}</span>
                          </a>
                        ) : (
                          <span className="govrs-footer__subitem">{it.title}</span>
                        )}
                        {it.items && it.items.length > 0 && (
                          <ul className="govrs-footer__sublist">
                            {it.items.map((sub, k) => (
                              <li key={k}>
                                {sub.url ?? sub.href ? (
                                  <a href={sub.url ?? sub.href} title={sub.title}>
                                    <span className="govrs-footer__subitem">{sub.title}</span>
                                  </a>
                                ) : (
                                  <span className="govrs-footer__subitem">{sub.title}</span>
                                )}
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
          </ul>
        </nav>

        {asidePosition === 'after' && children ? (
          <aside className={`govrs-footer__aside govrs-footer__aside--after`} aria-label="footer-aside">
            {children}
          </aside>
        ) : null}
        </div>

        <div className="govrs-footer__images">
        {hasSocial ? (
          <div className="govrs-footer__socialBlock">
            <div className="govrs-footer__social-title">Redes Sociais</div>
            <div className="govrs-footer__socials">
              {socialLinks.facebook && (
                <a href={socialLinks.facebook} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                  <img src={facebookIcon} alt="facebook" />
                </a>
              )}
              {socialLinks.instagram && (
                <a href={socialLinks.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <img src={instaIcon} alt="instagram" />
                </a>
              )}
              {socialLinks.youtube && (
                <a href={socialLinks.youtube} aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                  <img src={ytIcon} alt="youtube" />
                </a>
              )}
              {socialLinks.x && (
                <a href={socialLinks.x} aria-label="X" target="_blank" rel="noopener noreferrer">
                  <img src={xIcon} alt="x" />
                </a>
              )}
            </div>
          </div>
        ) : null}

        <div className="govrs-footer__images-list">
          {(images.length > 0 ? images : []).map((src, i) => (
            <img key={i} src={src} alt="rodape-logo" />
          ))}
        </div>
        </div>
        <div className="govrs-footer__bottom">
          <div className="govrs-footer__separator" />
          <div className="govrs-footer__license-row">
            <p className="govrs-footer__license">
              Texto destinado a exibição das informações relacionadas à{' '}
              {license ? (
                <a href={license} className="govrs-footer__license-link" target="_blank" rel="noopener noreferrer">
                  <strong>licença de uso</strong>
                </a>
              ) : (
                <strong>licença de uso</strong>
              )}
              .
            </p>
            <div className="govrs-footer__brand" aria-hidden="true">
              <img className="govrs-footer__brand-logo" src={procergsLogo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
