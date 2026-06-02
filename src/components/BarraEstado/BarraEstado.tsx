import { useEffect } from 'react'
import { ensureStylesheet } from '../../runtime/ensureStylesheet'
import stylesheetUrl from './BarraEstado.scss?url'

ensureStylesheet(stylesheetUrl)

type BarraEstadoProps = {}

export function BarraEstado(_: BarraEstadoProps = {}) {
  useEffect(() => {
    if (typeof window === 'undefined') return

    if (!('origin' in window.location)) {
      try {
        const loc = window.location as any
        loc.origin = loc.protocol + '//' + loc.host
      } catch (e) {
      }
    }
  }, [])

  return (
    <div className="container-menu">
      <div className="barra-estado">
        <div className="barra-estado__container">
          <a
            className="barra-estado__logo"
            title="rs.gov"
            href="https://www.rs.gov.br/"
          >
            <svg
              version="1.1"
              id="rs-gov"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="77px"
              height="16px"
              viewBox="0 0 77 16"
              enableBackground="new 0 0 77 16"
              xmlSpace="preserve"
            >
              <title className="rsgov">RS.GOV</title>
              <desc>Governo do Estado do Rio Grande do Sul</desc>
              <path
                d="M5.64,6.15c-1.8,0-2.92,1.09-2.92,3.4v3.55H0V3.48H2.73v1.94c.56-1.32,1.45-2.19,3.07-2.12v2.85h-.15Z"
                fill="#1A7235"
              />
              <path
                d="M10.78,13.28c-1.34,0-2.85-.44-4.12-1.45l1.17-1.8c1.04,.76,2.13,1.15,3.03,1.15,.79,0,1.15-.29,1.15-.71v-.04c0-.59-.93-.79-1.99-1.11-1.34-.4-2.87-1.02-2.87-2.89v-.04c0-1.96,1.57-3.05,3.52-3.05,1.22,0,2.54,.42,3.58,1.11l-1.04,1.88c-.95-.56-1.9-.9-2.6-.9s-1,.29-1,.67v.04c0,.54,.92,.79,1.96,1.15,1.34,.44,2.91,1.09,2.91,2.85v.04c0,2.13-1.6,3.1-3.67,3.1h0Z"
                fill="#1A7235"
              />
              <path d="M16.21,13.09v-2.87h2.91v2.87h-2.91Z" fill="#1A7235" />
              <path
                d="M25.48,16c-1.56,0-3.03-.36-4.25-1l.93-2.04c.99,.56,1.97,.88,3.24,.88,1.87,0,2.75-.9,2.75-2.62v-.46c-.81,.97-1.68,1.56-3.14,1.56-2.24,0-4.28-1.64-4.28-4.49v-.04c0-2.87,2.06-4.49,4.28-4.49,1.48,0,2.36,.63,3.1,1.43v-1.24h2.73v7.45c0,3.63-1.8,5.08-5.37,5.08Zm2.67-8.21c0-1.31-1.02-2.22-2.35-2.22s-2.33,.92-2.33,2.22v.04c0,1.32,1,2.22,2.33,2.22s2.35-.92,2.35-2.22v-.04Z"
                fill="#1A7235"
              />
              <path
                d="M37.91,13.32c-2.98,0-5.18-2.2-5.18-4.97v-.04c0-2.76,2.22-5,5.22-5s5.18,2.2,5.18,4.97v.04c0,2.76-2.22,5-5.22,5Zm2.53-5c0-1.42-1.02-2.66-2.53-2.66s-2.5,1.2-2.5,2.62v.04c0,1.42,1.02,2.66,2.53,2.66s2.5-1.2,2.5-2.62v-.04Z"
                fill="#1A7235"
              />
              <path
                d="M49.88,13.17h-2.47l-3.79-9.69h2.89l2.15,6.44,2.17-6.44h2.84l-3.79,9.69Z"
                fill="#1A7235"
              />
              <path d="M53.52,13.09v-2.87h2.91v2.87h-2.91Z" fill="#1A7235" />
              <path
                d="M64.39,13.28c-1.45,0-2.35-.67-3-1.43v1.25h-2.73V0h2.73V4.86c.67-.9,1.57-1.56,3-1.56,2.24,0,4.38,1.76,4.38,4.97v.04c0,3.22-2.11,4.98-4.38,4.98h0Zm1.65-5.02c0-1.59-1.08-2.66-2.35-2.66s-2.33,1.06-2.33,2.66v.04c0,1.59,1.06,2.66,2.33,2.66s2.35-1.04,2.35-2.66v-.04Z"
                fill="#1A7235"
              />
              <path
                d="M76.34,6.15c-1.8,0-2.92,1.09-2.92,3.4v3.55h-2.73V3.48h2.73v1.94c.56-1.32,1.45-2.19,3.07-2.12v2.85h-.15Z"
                fill="#1A7235"
              />
            </svg>
          </a>
          <div className="barra-estado__nav">
            <div className="barra-estado__nav__form">
              <input
                type="checkbox"
                id="barra-estado__toggle"
                className="barra-estado__checkbox"
                defaultChecked={false}
              />
              <label
                htmlFor="barra-estado__toggle"
                className="barra-estado__toggle"
                data-open="•••"
                data-close="•••"
              />

              <ul className="barra-estado__menu">
                <li>
                  <a
                    target="_self"
                    rel="noreferrer"
                    href="https://estado.rs.gov.br/agencia-de-noticias"
                  >
                    <span className="visually-hidden">Estado </span>Notícias
                  </a>
                </li>
                <li>
                  <a target="_self" rel="noreferrer" href="https://www.rs.gov.br/">
                    <span className="visually-hidden">Estado </span>Serviços
                  </a>
                </li>
                <li>
                  <a target="_self" rel="noreferrer" href="https://www.centraldocidadao.rs.gov.br/">
                    <span className="visually-hidden">Estado </span>Central do
                    Cidadão
                  </a>
                </li>
                <li>
                  <a target="_self" rel="noreferrer" href="http://www.transparencia.rs.gov.br/">
                    <span className="visually-hidden">Estado </span>
                    Transparência
                  </a>
                </li>
                <li>
                  <a
                    className="barra-letters"
                    target="_self"
                    rel="noreferrer"
                    href="https://estado.rs.gov.br/institucional"
                  >
                    <span className="visually-hidden">Estado </span>Locais e
                    Órgãos
                  </a>
                </li>
                <li>
                  <a target="_self" rel="noreferrer" href="https://www.diariooficial.rs.gov.br/">
                    <span className="visually-hidden">Estado </span>Diário
                    Oficial
                  </a>
                </li>
                <li>
                  <a
                    target="_self"
                    rel="noreferrer"
                    href="https://www.rs.gov.br/guria"
                    style={{ padding: '7px 13px' }}
                  >
                    <span className="visually-hidden">Estado </span>
                    <svg
                      id="GurIA"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="49.94px"
                      height="13.21px"
                      viewBox="0 0 49.94 13.21"
                      enableBackground="new 0 0 49.94 13.21"
                    >
                      <title>GurIA</title>
                      <desc>A tua nova assistente digital</desc>
                      <path
                        d="M38.35,5.71c.18,0,.35-.02.53-.02.04-.07.1-.14.16-.2.07.1.13.2.2.31.06-.11.11-.25.15-.37.03-.1.06-.22.12-.31.04.07.07.16.1.23.04.12.08.24.12.37.02.07.03.13.06.2.03-.09.05-.19.08-.28l.13-.43c.04-.14.08-.29.15-.43.06.13.09.28.12.43.04.16.08.32.11.48.02-.05.03-.11.05-.17.03-.1.06-.2.09-.31.04-.15.21-.93.3-1h.01s.06.1.08.14c.04.1.07.21.09.32.05.19.09.38.12.57.02.11.03.23.06.34.04-.24.21-1.12.34-1.28.13.17.3,1.22.33,1.46.05-.39.11-.78.18-1.18.05-.32.1-.63.16-.95.04-.26.09-.53.16-.79.02-.08.04-.17.08-.25.02-.04.04-.07.08-.09.01,0,.03,0,.04.01.07.04.1.2.13.27.03.1.04.2.07.29.06.29.12.58.16.87.03.2.07.4.1.61.04.25.08.5.12.75.03.14.04.29.08.43.01-.12.03-.25.04-.37.04-.35.09-.71.2-1.05.01-.05.03-.12.07-.16h.01s.04.05.04.07c.08.16.13.33.18.5.09.32.16.64.24.97.02-.07.03-.15.05-.22l.07-.32c.04-.16.07-.32.13-.47.03.07.04.14.07.2l.09.32c.07.22.15.44.21.66.08-.31.16-.61.25-.92.04.08.06.16.09.25.09.23.17.46.27.68.03-.07.06-.15.08-.22.05-.14.1-.29.16-.43.08.19.17.37.26.55.06-.1.13-.2.2-.31.05.07.10.14.15.21.15,0,.29.01.43.02L43.94.22h-3.08l-2.58,5.5h.07,0Z"
                        fill="#1A7235"
                      />
                      <path
                        d="M46.55,5.77c-.22,0-.44.01-.66.01-.04.1-.11.19-.16.28-.04-.07-.08-.14-.12-.21-.04-.07-.08-.13-.11-.2-.04.08-.25.64-.29.67-.05-.02-.25-.5-.3-.58-.06.11-.28.77-.35.8h-.03s-.04-.04-.05-.06c-.04-.08-.08-.17-.11-.26-.05-.14-.09-.28-.16-.42-.06.11-.17.44-.27.5h-.03c-.08-.05-.25-.44-.28-.54-.03-.07-.04-.14-.07-.22-.04.14-.06.29-.09.43-.03.12-.15.64-.25.7h-.02c-.07-.04-.28-.62-.32-.72,0,.14-.03.29-.04.43-.03.34-.07.68-.11,1.02-.04.26-.08.52-.12.77-.03.14-.04.28-.07.41,0,.04-.02.10-.05.13h-.03s-.03-.04-.03-.06c-.03-.11-.04-.22-.06-.33-.03-.16-.05-.32-.08-.49-.08-.5-.13-1-.18-1.5-.01-.13-.02-.26-.04-.4-.08.17-.13.37-.22.53-.01.02-.03.06-.06.07-.01,0-.02,0-.03,0-.11-.07-.23-.66-.27-.8-.06.37-.10.74-.20,1.10-.03.09-.04.19-.09.28-.01.03-.04.08-.07.09h-.03c-.10-.07-.28-1.09-.3-1.24-.03-.14-.04-.28-.07-.42-.06.14-.11.29-.17.44-.03.07-.06.15-.10.22-.02.04-.04.08-.08.10h-.02c-.11-.04-.20-.37-.26-.47-.05.09-.32.63-.35.65h0c-.06-.07-.08-.16-.10-.24l-.12-.34c-.03-.07-.05-.15-.09-.22-.10.11-.14.26-.23.38-.04-.04-.17-.27-.20-.28-.01,0-.03.02-.04.02h-.49c-.08-.01-.16-.01-.25-.01l-3.39,7.22h3.19l1.19-2.74h6.25l1.19,2.74h3.27l-3.4-7.22v-.02Z"
                        fill="#1A7235"
                      />
                      <path d="M31.41.22h3.11v12.77h-3.11V.22Z" fill="#1A7235" />
                      <path
                        d="M30.93,3.03v2.63c-.25-.02-.44-.04-.67-.04-1.65,0-2.75.86-2.75,2.74v4.63h-3V3.18h2.87v1.3c.73-.95,1.96-1.44,3.56-1.44h0Z"
                        fill="#1A7235"
                      />
                      <path
                        d="M23.88,3.18v9.81h-2.85v-1.16c-.79.86-1.94,1.31-3.21,1.31-2.59,0-4.42-1.39-4.42-4.41V3.18h3v5.13c0,1.64.77,2.37,2.09,2.37s2.39-.84,2.39-2.65V3.18h3Z"
                        fill="#1A7235"
                      />
                      <path
                        d="M9.94,6.41h2.85v5.18c-1.48,1.06-3.52,1.62-5.44,1.62C3.11,13.21,0,10.45,0,6.6S3.11,0,7.4,0c2.37,0,4.33.77,5.63,2.21l-2,1.75c-.98-.98-2.11-1.44-3.48-1.44-2.61,0-4.4,1.66-4.4,4.09s1.79,4.09,4.37,4.09c.85,0,1.63-.14,2.42-.55v-3.74h0Z"
                        fill="#1A7235"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export namespace BarraEstado {
  export type Props = BarraEstadoProps
}

export default BarraEstado
