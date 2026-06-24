// barra-estado.js
// Web Component da>// Web Component da barra de estado do Governo do RS
//
// Também pode ser servido por CDN (ex.: jsDelivr) a partir de GitHub ou npm.

const COMPONENT_TAG = 'barra-estado';

const DEFAULT_LINKS = [
  { href: 'https://estado.rs.gov.br/agencia-de-noticias', label: 'Notícias', srPrefix: 'Estado ' },
  { href: 'https://www.rs.gov.br/', label: 'Serviços', srPrefix: 'Estado ' },
  { href: 'https://www.centraldocidadao.rs.gov.br/', label: 'Central do Cidadão', srPrefix: 'Estado ' },
  { href: 'http://www.transparencia.rs.gov.br/', label: 'Transparência', srPrefix: 'Estado ' },
  { href: 'https://estado.rs.gov.br/institucional', label: 'Secretarias e Órgãos', srPrefix: 'Estado ' },
  { href: 'https://www.diariooficial.rs.gov.br/', label: 'Diário Oficial', srPrefix: 'Estado ' },
  { href: 'https://sosenchentes.rs.gov.br', label: '>> SOS RS <<', srPrefix: 'Estado ' },
];

/**
 * Decodifica entidades HTML comuns e também casos duplamente escapados,
 * por exemplo:
 *   &lt;div&gt;       -> <div>
 *   &amp;gt;         -> >
 *   &amp;amp;lt;     -> <
 *
 * Essa função protege o conteúdo de templates, CSS inline e SVG inline,
 * caso algum processo de publicação/editor tenha escapado o HTML.
 */
function normalizeEscapedHtml(input = '') {
  if (typeof input !== 'string') return input;

  const entityMap = {
    '&lt;': '<',
    '&gt;': '>',
    '&amp;': '&',
    '&quot;': '"',
    '&#39;': "'",
    '&apos;': "'",
    '&#x2F;': '/',
    '&#47;': '/',
    '&nbsp;': ' ',
  };

  const entityRegex = /&(lt|gt|amp|quot|#39|apos|#x2F|#47|nbsp);/g;

  let output = input;
  let previous;

  // Reaplica até estabilizar, para corrigir casos duplamente escapados.
  do {
    previous = output;
    output = output.replace(entityRegex, (match) => entityMap[match] ?? match);
  } while (output !== previous && entityRegex.test(output));

  return output;
}

/**
 * Escapa texto para inserção segura em HTML.
 * Usado para labels/textos vindos de atributos/propriedades.
 */
function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

/**
 * Sanitiza URL minimamente para uso em href.
 * Aceita apenas protocolos seguros comuns.
 */
function sanitizeUrl(url = '') {
  const value = normalizeEscapedHtml(String(url).trim());

  try {
    const parsed = new URL(value, window.location.href);
    const allowedProtocols = ['http:', 'https:', 'mailto:', 'tel:'];
    return allowedProtocols.includes(parsed.protocol) ? parsed.href : '#';
  } catch {
    return '#';
  }
}

const LOGO_SVG = normalizeEscapedHtml(`
<svg version="1.1" id="rs-gov-br" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="77px" height="16px"
     viewBox="0 0 77 16" enable-background="new 0 0 77 16" xml:space="preserve" aria-hidden="true" focusable="false">
  <title>RS.GOV.BR</title>
  <desc>Governo do Estado do Rio Grande do Sul</desc>
  <path d="M5.64,6.15c-1.8,0-2.92,1.09-2.92,3.4v3.55H0V3.48H2.73v1.94c.56-1.32,1.45-2.19,3.07-2.12v2.85h-.15Z" fill="#fff"/>
  <path d="M10.78,13.28c-1.34,0-2.85-.44-4.12-1.45l1.17-1.8c1.04,.76,2.13,1.15,3.03,1.15,.79,0,1.15-.29,1.15-.71v-.04c0-.59-.93-.79-1.99-1.11-1.34-.4-2.87-1.02-2.87-2.89v-.04c0-1.96,1.57-3.05,3.52-3.05,1.22,0,2.54,.42,3.58,1.11l-1.04,1.88c-.95-.56-1.9-.9-2.6-.9s-1,.29-1,.67v.04c0,.54,.92,.79,1.96,1.15,1.34,.44,2.91,1.09,2.91,2.85v.04c0,2.13-1.6,3.1-3.67,3.1h0Z" fill="#fff"/>
  <path d="M16.21,13.09v-2.87h2.91v2.87h-2.91Z" fill="#fff"/>
  <path d="M25.48,16c-1.56,0-3.03-.36-4.25-1l.93-2.04c.99,.56,1.97,.88,3.24,.88,1.87,0,2.75-.9,2.75-2.62v-.46c-.81,.97-1.68,1.56-3.14,1.56-2.24,0-4.28-1.64-4.28-4.49v-.04c0-2.87,2.06-4.49,4.28-4.49,1.48,0,2.36,.63,3.1,1.43v-1.24h2.73v7.45c0,3.63-1.8,5.08-5.37,5.08Zm2.67-8.21c0-1.31-1.02-2.22-2.35-2.22s-2.33,.92-2.33,2.22v.04c0,1.32,1,2.22,2.33,2.22s2.35-.92,2.35-2.22v-.04Z" fill="#fff"/>
  <path d="M37.91,13.32c-2.98,0-5.18-2.2-5.18-4.97v-.04c0-2.76,2.22-5,5.22-5s5.18,2.2,5.18,4.97v.04c0,2.76-2.22,5-5.22,5Zm2.53-5c0-1.42-1.02-2.66-2.53-2.66s-2.5,1.2-2.5,2.62v.04c0,1.42,1.02,2.66,2.53,2.66s2.5-1.2,2.5-2.62v-.04Z" fill="#fff"/>
  <path d="M49.88,13.17h-2.47l-3.79-9.69h2.89l2.15,6.44,2.17-6.44h2.84l-3.79,9.69Z" fill="#fff"/>
  <path d="M53.52,13.09v-2.87h2.91v2.87h-2.91Z" fill="#fff"/>
  <path d="M64.39,13.28c-1.45,0-2.35-.67-3-1.43v1.25h-2.73V0h2.73V4.86c.67-.9,1.57-1.56,3-1.56,2.24,0,4.38,1.76,4.38,4.97v.04c0,3.22-2.11,4.98-4.38,4.98h0Zm1.65-5.02c0-1.59-1.08-2.66-2.35-2.66s-2.33,1.06-2.33,2.66v.04c0,1.59,1.06,2.66,2.33,2.66s2.35-1.04,2.35-2.66v-.04Z" fill="#fff"/>
  <path d="M76.34,6.15c-1.8,0-2.92,1.09-2.92,3.4v3.55h-2.73V3.48h2.73v1.94c.56-1.32,1.45-2.19,3.07-2.12v2.85h-.15Z" fill="#fff"/>
</svg>
`);

const CSS_TEXT = normalizeEscapedHtml(`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap');

:host {
  --barra-estado-height: 32px;
  --barra-estado-bg: #4f4f4f;
  --barra-estado-menu-bg: #737474;
  --barra-estado-text: #e4e4e4;
  --barra-estado-text-hover: #ffffff;
  --barra-estado-alt-text: #bcbcbb;
  --barra-estado-logo-fill: #f4f4f1;
  --barra-estado-container-max-768: 750px;
  --barra-estado-container-max-992: 970px;
  --barra-estado-container-max-1200: 1170px;
  display: block;
  contain: content;
  font-family: Roboto, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
}

*, *::before, *::after {
  box-sizing: border-box;
}

@keyframes bugfix {
  from, to { padding: 0; }
}

:host {
  -webkit-animation: bugfix infinite 1s;
  animation: bugfix infinite 1s;
}

.sr-only {
  position: absolute;
  inline-size: 1px;
  block-size: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.barra-estado {
  block-size: var(--barra-estado-height);
  background-color: var(--barra-estado-bg);
}

.barra-estado__container {
  position: relative;
  inline-size: 100%;
  block-size: 100%;
  margin-inline: auto;
  padding-inline: 15px;
}

.barra-estado__container a {
  text-decoration: none;
}

.barra-estado__logo {
  position: absolute;
  inset-inline-start: 15px;
  inset-block-start: 6px;
  inline-size: 77px;
  block-size: 16px;
  display: inline-flex;
  align-items: center;
}

.barra-estado__logo svg {
  display: block;
  inline-size: 77px;
  block-size: 16px;
}

.barra-estado__logo svg path {
  fill: var(--barra-estado-logo-fill);
}

.barra-estado__nav {
  display: block;
  float: right;
  block-size: 100%;
}

.barra-estado__nav__form {
  margin: 0;
  padding: 0;
  display: inline-block;
}

#barra-estado__toggle,
.barra-estado__toggle {
  display: none;
}

.barra-estado__menu,
.barra-estado__menu > li,
.barra-estado__menu > li > a,
.barra-estado__nav {
  block-size: 100%;
}

.barra-estado__menu {
  margin: 0;
  padding: 14px 0 20px;
  background: var(--barra-estado-menu-bg);
  border-block-start: 1px solid #fff;
  text-transform: uppercase;
  font-family: inherit;
  list-style: none;
}

.barra-estado__menu,
.barra-estado__menu > li,
.barra-estado__menu > li > a {
  block-size: auto;
}

.barra-estado__menu > li {
  list-style: none;
  float: left;
}

.barra-estado__menu > li > a {
  display: block;
  padding: 13px 40px;
  color: var(--barra-estado-text);
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
  transition: box-shadow .25s linear, color .25s linear;
  text-decoration: none;
}

.barra-estado__menu > li > a:visited,
.barra-estado__menu > li > a:active {
  color: var(--barra-estado-text) !important;
}

.barra-estado__menu > li > a:hover,
.barra-estado__menu > li > a:focus-visible {
  box-shadow: inset 5px 0 #fff;
  color: var(--barra-estado-text-hover);
  outline: none;
}

.barra-estado__toggle {
  z-index: 2;
}

.barra-estado__toggle::after {
  content: attr(data-open);
  position: absolute;
  inset-inline-end: 0;
  display: block;
  inline-size: 45px;
  block-size: 32px;
  color: var(--barra-estado-alt-text);
  font-size: 18px;
  line-height: 13px;
  text-align: right;
  transition: color .5s linear;
}

.barra-estado__toggle:hover::after,
.barra-estado__toggle:focus-visible::after {
  color: #fff;
}

#barra-estado__toggle:checked + .barra-estado__toggle::after {
  content: attr(data-close);
}

@media only screen and (max-width: 991px) {
  .barra-estado__menu {
    position: absolute;
    inset-inline-end: 0;
    inset-block-start: 32px;
    z-index: 999;
    display: none;
    inline-size: 280px;
    opacity: 0;
  }

  .barra-estado__menu > li {
    display: block;
    inline-size: 100%;
    margin: 0;
  }

  .barra-estado__menu > li > a {
    display: block;
    inline-size: 100%;
  }

  .barra-estado__toggle {
    position: relative;
    display: block;
    cursor: pointer;
    user-select: none;
    -webkit-touch-callout: none;
  }

  #barra-estado__toggle:checked ~ .barra-estado__menu {
    display: block;
    opacity: 1;
  }
}

@media (min-width: 768px) {
  .barra-estado__container {
    max-inline-size: var(--barra-estado-container-max-768);
  }
}

@media (min-width: 992px) {
  .barra-estado__container {
    max-inline-size: var(--barra-estado-container-max-992);
  }

  .barra-estado__menu {
    margin-top: 0;
    padding: 0;
    background: transparent;
    border-block-start: none;
  }

  .barra-estado__menu > li > a {
    padding: 9px 13px;
    font-size: 11px;
  }

  .barra-estado__menu > li > a:hover,
  .barra-estado__menu > li > a:focus-visible {
    box-shadow: inset 0 2px #fff;
    color: var(--barra-estado-text-hover);
  }
}

@media (min-width: 1200px) {
  .barra-estado__container {
    max-inline-size: var(--barra-estado-container-max-1200);
  }
}
`);

function createMenuHtml(links) {
  const items = links.map((item) => {
    const target = item.target === '_blank' ? '_blank' : '_self';
    const rel = target === '_blank' ? ' rel="noopener noreferrer"' : '';

    const href = sanitizeUrl(item.href);
    const label = escapeHtml(normalizeEscapedHtml(item.label || ''));
    const srPrefix = escapeHtml(normalizeEscapedHtml(item.srPrefix || ''));

    return `
      <li>
        <a target="${target}" href="${href}"${rel}>
          <span class="sr-only">${srPrefix}</span>${label}
        </a>
      </li>`;
  }).join('');

  return normalizeEscapedHtml(`
    <div class="barra-estado" part="root">
      <div class="barra-estado__container" part="container">
        <a
          class="barra-estado__logo"
          part="logo"
          title="rs.gov"
          href="https://www.rs.gov.br/"
          aria-label="RS.GOV.BR - Governo do Estado do Rio Grande do Sul"
        >
          ${LOGO_SVG}
        </a>

        <div class="barra-estado__nav" part="nav">
          <div class="barra-estado__nav__form">
            <input type="checkbox" id="barra-estado__toggle" aria-hidden="true">
            <label
              for="barra-estado__toggle"
              class="barra-estado__toggle"
              data-open="•••"
              data-close="•••"
              aria-label="Abrir ou fechar menu"
              tabindex="0"
            ></label>

            <ul class="barra-estado__menu" part="menu">
              ${items}
            </ul>
          </div>
        </div>
      </div>
    </div>
  `);
}

export class BarraEstado extends HTMLElement {
  static get observedAttributes() {
    return ['links'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._links = null;
    this._onToggleChange = null;
    this._onToggleKeydown = null;
  }

  get links() {
    return this._links ?? DEFAULT_LINKS;
  }

  set links(value) {
    if (Array.isArray(value) && value.length > 0) {
      this._links = value;
      this.render();
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'links' && oldValue !== newValue && typeof newValue === 'string') {
      try {
        const parsed = JSON.parse(newValue);
        if (Array.isArray(parsed)) {
          this._links = parsed;
          this.render();
        }
      } catch {
        // Ignora JSON inválido e mantém os links padrão.
      }
    }
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {
    this.removeA11yListeners();
  }

  render() {
    if (!this.shadowRoot) return;

    this.removeA11yListeners();

    const safeCss = normalizeEscapedHtml(CSS_TEXT);
    const safeHtml = createMenuHtml(this.links);

    this.shadowRoot.innerHTML = `
      <style>${safeCss}</style>
      ${safeHtml}
    `;

    this.setupA11y();
  }

  setupA11y() {
    const toggleInput = this.shadowRoot?.querySelector('#barra-estado__toggle');
    const toggleLabel = this.shadowRoot?.querySelector('.barra-estado__toggle');

    if (!toggleInput || !toggleLabel) return;

    this._onToggleChange = () => {
      toggleLabel.setAttribute('aria-expanded', String(toggleInput.checked));
    };

    this._onToggleKeydown = (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggleInput.checked = !toggleInput.checked;
        toggleInput.dispatchEvent(new Event('change', { bubbles: true }));
      }
    };

    this._onToggleChange();
    toggleInput.addEventListener('change', this._onToggleChange, { passive: true });
    toggleLabel.addEventListener('keydown', this._onToggleKeydown);
  }

  removeA11yListeners() {
    const toggleInput = this.shadowRoot?.querySelector('#barra-estado__toggle');
    const toggleLabel = this.shadowRoot?.querySelector('.barra-estado__toggle');

    if (toggleInput && this._onToggleChange) {
      toggleInput.removeEventListener('change', this._onToggleChange);
    }

    if (toggleLabel && this._onToggleKeydown) {
      toggleLabel.removeEventListener('keydown', this._onToggleKeydown);
    }

    this._onToggleChange = null;
    this._onToggleKeydown = null;
  }
}

export function defineBarraEstado(tagName = COMPONENT_TAG) {
  if (typeof window === 'undefined' || !('customElements' in window)) return;
  if (!window.customElements.get(tagName)) {
    window.customElements.define(tagName, BarraEstado);
  }
}

// Auto-registro em ambiente de navegador.
defineBarraEstado();

export default BarraEstado;
// Uso:
//   import './barra-estado.js';
