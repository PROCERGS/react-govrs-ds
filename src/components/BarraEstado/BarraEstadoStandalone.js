// barra-estado.js
// Web Component da barra de estado do Governo do RS

const COMPONENT_TAG = 'barra-estado';

const DEFAULT_BLOCKED_HOSTS = [ "sitedpers.des.intra.rs.gov.br",
            "sitedpers.hml.rs.gov.br",
            "www.defensoria.rs.def.br",
            "www.defensoria.rs.gov.br",
            "www.dpe.rs.gov.br",
            "matriz2-hotsite.des.procergs.localhost",
            "servicos.detran.rs.gov.br",
            "siteexp.des.procergs.localhost",
            "siteexp.des.intra.rs.gov.br",
            "siteexp.hml.rs.gov.br",
            "expointer.rs.gov.br",
            "www.expointer.rs.gov.br",
            "sitedigx.des.intra.rs.gov.br",
            "sitedigx01.hml.rs.gov.br",
            "sitedigx03.rs.gov.br",
            "conversasdigitais.rs.gov.br",
            "www.conversasdigitais.rs.gov.br"];

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

function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

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

const GURIA_SVG = normalizeEscapedHtml(`
<svg id="GurIA" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="49.94px" height="13.21px"
     viewBox="0 0 49.94 13.21" enable-background="new 0 0 49.94 13.21" aria-hidden="true" focusable="false">
  <title>GurIA</title>
  <desc>A tua nova assistente digital</desc>
  <path d="M38.35,5.71c.18,0,.35-.02.53-.02.04-.07.1-.14.16-.2.07.1.13.2.2.31.06-.11.11-.25.15-.37.03-.1.06-.22.12-.31.04.07.07.16.1.23.04.12.08.24.12.37.02.07.03.13.06.2.03-.09.05-.19.08-.28l.13-.43c.04-.14.08-.29.15-.43.06.13.09.28.12.43.04.16.08.32.11.48.02-.05.03-.11.05-.17.03-.1.06-.2.09-.31.04-.15.21-.93.3-1h.01s.06.1.08.14c.04.1.07.21.09.32.05.19.09.38.12.57.02.11.03.23.06.34.04-.24.21-1.12.34-1.28.13.17.3,1.22.33,1.46.05-.39.11-.78.18-1.18.05-.32.1-.63.16-.95.04-.26.09-.53.16-.79.02-.08.04-.17.08-.25.02-.04.04-.07.08-.09.01,0,.03,0,.04.01.07.04.1.2.13.27.03.1.04.2.07.29.06.29.12.58.16.87.03.2.07.4.1.61.04.25.08.5.12.75.03.14.04.29.08.43.01-.12.03-.25.04-.37.04-.35.09-.71.2-1.05.01-.05.03-.12.07-.16h.01s.04.05.04.07c.08.16.13.33.18.5.09.32.16.64.24.97.02-.07.03-.15.05-.22l.07-.32c.04-.16.07-.32.13-.47.03.07.04.14.07.2l.09.32c.07.22.15.44.21.66.08-.31.16-.61.25-.92.04.08.06.16.09.25.09.23.17.46.27.68.03-.07.06-.15.08-.22.05-.14.1-.29.16-.43.08.19.17.37.26.55.06-.1.13-.2.2-.31.05.07.1.14.15.21.15,0,.29.01.43.02L43.94.22h-3.08l-2.58,5.5h.07,0Z" fill="#fff"/>
  <path d="M46.55,5.77c-.22,0-.44.01-.66.01-.04.1-.11.19-.16.28-.04-.07-.08-.14-.12-.21-.04-.07-.08-.13-.11-.2-.04.08-.25.64-.29.67-.05-.02-.25-.5-.3-.58-.06.11-.28.77-.35.8h-.03s-.04-.04-.05-.06c-.04-.08-.08-.17-.11-.26-.05-.14-.09-.28-.16-.42-.06.11-.17.44-.27.5h-.03c-.08-.05-.25-.44-.28-.54-.03-.07-.04-.14-.07-.22-.04.14-.06.29-.09.43-.03.12-.15.64-.25.7h-.02c-.07-.04-.28-.62-.32-.72,0,.14-.03.29-.04.43-.03.34-.07.68-.11,1.02-.04.26-.08.52-.12.77-.03.14-.04.28-.07.41,0,.04-.02.1-.05.13h-.03s-.03-.04-.03-.06c-.03-.11-.04-.22-.06-.33-.03-.16-.05-.32-.08-.49-.08-.5-.13-1-.18-1.5-.01-.13-.02-.26-.04-.4-.08.17-.13.37-.22.53-.01.02-.03.06-.06.07-.01,0-.02,0-.03,0-.11-.07-.23-.66-.27-.8-.06.37-.1.74-.2,1.1-.03.09-.04.19-.09.28-.01.03-.04.08-.07.09h-.03c-.1-.07-.28-1.09-.3-1.24-.03-.14-.04-.28-.07-.42-.06.14-.11.29-.17.44-.03.07-.06.15-.1.22-.02.04-.04.08-.08.1h-.02c-.11-.04-.2-.37-.26-.47-.05.09-.32.63-.35.65h0c-.06-.07-.08-.16-.1-.24l-.12-.34c-.03-.07-.05-.15-.09-.22-.1.11-.14.26-.23.38-.04-.04-.17-.27-.2-.28-.01,0-.03.02-.04.02h-.49c-.08-.01-.16-.01-.25-.01l-3.39,7.22h3.19l1.19-2.74h6.25l1.19,2.74h3.27l-3.4-7.22v-.02Z" fill="#fff"/>
  <path d="M31.41.22h3.11v12.77h-3.11V.22Z" fill="#fff"/>
  <path d="M30.93,3.03v2.63c-.25-.02-.44-.04-.67-.04-1.65,0-2.75.86-2.75,2.74v4.63h-3V3.18h2.87v1.3c.73-.95,1.96-1.44,3.56-1.44h0Z" fill="#fff"/>
  <path d="M23.88,3.18v9.81h-2.85v-1.16c-.79.86-1.94,1.31-3.21,1.31-2.59,0-4.42-1.39-4.42-4.41V3.18h3v5.13c0,1.64.77,2.37,2.09,2.37s2.39-.84,2.39-2.65V3.18h3Z" fill="#fff"/>
  <path d="M9.94,6.41h2.85v5.18c-1.48,1.06-3.52,1.62-5.44,1.62C3.11,13.21,0,10.45,0,6.6S3.11,0,7.4,0c2.37,0,4.33.77,5.63,2.21l-2,1.75c-.98-.98-2.11-1.44-3.48-1.44-2.61,0-4.4,1.66-4.4,4.09s1.79,4.09,4.37,4.09c.85,0,1.63-.14,2.42-.55v-3.74h0Z" fill="#fff"/>
</svg>
`);

const DEFAULT_LINKS = [
  { href: 'https://estado.rs.gov.br/agencia-de-noticias', label: 'Notícias', srPrefix: 'Estado ' },
  { href: 'https://www.rs.gov.br/', label: 'Serviços', srPrefix: 'Estado ' },
  { href: 'https://www.centraldocidadao.rs.gov.br/', label: 'Central do Cidadão', srPrefix: 'Estado ' },
  { href: 'http://www.transparencia.rs.gov.br/', label: 'Transparência', srPrefix: 'Estado ' },
  { href: 'https://estado.rs.gov.br/institucional', label: 'Secretarias e Órgãos', srPrefix: 'Estado ' },
  { href: 'https://www.diariooficial.rs.gov.br/', label: 'Diário Oficial', srPrefix: 'Estado ' },
  { href: 'https://www.rs.gov.br/guria', label: 'GurIA', srPrefix: 'Estado ', svgHtml: GURIA_SVG },
];

const CSS_TEXT = normalizeEscapedHtml(`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

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
  font-family: Roboto, Arial, sans-serif;
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
  inset-block-start: 8px;
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
  display: inline-flex;
  align-items: stretch;
  block-size: 100%;
}

#barra-estado__toggle,
.barra-estado__toggle {
  display: none;
}

.barra-estado__menu {
  margin: 0;
  padding: 0;
  block-size: 100%;
  display: flex;
  align-items: stretch;
  background: var(--barra-estado-menu-bg);
  border-block-start: 1px solid #fff;
  text-transform: uppercase;
  font-family: 'Roboto', Arial, sans-serif;
  list-style: none;
}



.barra-estado__menu > li {
  list-style: none;
  display: flex;
  align-items: stretch;
}

.barra-estado__menu > li > a {
  display: flex;
  align-items: center;
  padding: 0 13px;
  color: var(--barra-estado-text);
  font-size: 12px;
  font-weight: 700;
  line-height: 1;
  white-space: nowrap;
  transition: box-shadow .25s linear, color .25s linear;
  text-decoration: none;
  font-family: 'Roboto', Arial, sans-serif;
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

.barra-estado__menu > li > a svg {
  display: inline-block;
  vertical-align: middle;
  block-size: auto;
  max-block-size: 14px;
}

.barra-estado__menu > li > a svg#GurIA {
  transform: translateY(-2px);
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
    padding: 0 13px;
    font-size: 11px;
    font-family: 'Roboto', Arial, sans-serif;
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

    
    if (typeof item.svgHtml === 'string' && item.svgHtml.trim()) {
      const svg = normalizeEscapedHtml(item.svgHtml);
      return `
      <li>
        <a target="${target}" href="${href}"${rel}>
          <span class="sr-only">${srPrefix}${label}</span>${svg}
        </a>
      </li>`;
    }

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

class BarraEstado extends HTMLElement {
  static get observedAttributes() {
    return ['links'];
  }

  // constructor() {
  //   super();
  //   this.attachShadow({ mode: 'closed' });
  //   this._links = null;
  //   this._onToggleChange = null;
  //   this._onToggleKeydown = null;
  // }
  constructor() {
  super();

  this._shadow = this.attachShadow({ mode: 'closed' });

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

  // render() {
  //   if (!this.shadowRoot) return;

  //   this.removeA11yListeners();

  //   const safeCss = normalizeEscapedHtml(CSS_TEXT);
  //   const safeHtml = createMenuHtml(this.links);

  //   this.shadowRoot.innerHTML = `
  //     <style>${safeCss}</style>
  //     ${safeHtml}
  //   `;

  //   this.setupA11y();
  // }
  render() {
  if (!this._shadow) return;

  this.removeA11yListeners();

  const safeCss = normalizeEscapedHtml(CSS_TEXT);
  const safeHtml = createMenuHtml(this.links);

  this._shadow.innerHTML = `
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

function defineBarraEstado(tagName = COMPONENT_TAG) {
  if (typeof window === 'undefined' || !('customElements' in window)) return;
  if (!window.customElements.get(tagName)) {
    window.customElements.define(tagName, BarraEstado);
  }
}

function isHostBlocked() {
  if (typeof window === 'undefined' || !window.location) return false;

  const config = window.barraEstadoConfig || {};
  const extra = Array.isArray(config.blockedHosts) ? config.blockedHosts : [];
  const patterns = DEFAULT_BLOCKED_HOSTS.concat(extra);
  const host = String(window.location.hostname || '').toLowerCase();

  return patterns.some((pattern) => {
    if (pattern instanceof RegExp) return pattern.test(host);
    if (typeof pattern !== 'string' || pattern === '') return false;

    const p = pattern.toLowerCase();
    
    if (p.startsWith('.')) {
      return host === p.slice(1) || host.endsWith(p);
    }
    return host === p;
  });
}

function injectBodyReset() {
  if (typeof document === 'undefined' || !document.head) return;
  if (document.getElementById('barra-estado-body-reset')) return;

  const style = document.createElement('style');
  style.id = 'barra-estado-body-reset';
  style.textContent =
    'html.barra-estado-mounted,' +
    'body.barra-estado-mounted{' +
      'margin-top:0 !important;' +
      'padding-top:0 !important;' +
    '}';
  document.head.appendChild(style);
}

/**
 * Auto-injeta a barra no início do <body>, removendo qualquer instância
 */
function autoMountBarraEstado() {
  if (typeof document === 'undefined') return;
  if (isHostBlocked()) return;

  const mount = () => {
    
    document.querySelectorAll(
      '.barra-estado, .container-menu, .barra-estado-host, ' + COMPONENT_TAG
    ).forEach((node) => node.remove());

    if (!document.body) return;

  
    injectBodyReset();
    document.documentElement.classList.add('barra-estado-mounted');
    document.body.classList.add('barra-estado-mounted');

    const wrapper = document.createElement('div');
    wrapper.className = 'barra-estado-host container-menu';
    wrapper.style.cssText =
      'margin:0;padding:0;display:block;width:100%;line-height:0;';

    const barra = document.createElement(COMPONENT_TAG);
    barra.className = 'barra-estado';
    barra.style.cssText = 'display:block;margin:0;padding:0;line-height:normal;';
    wrapper.appendChild(barra);

    document.body.prepend(wrapper);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount, { once: true });
  } else {
    mount();
  }
}

if (typeof window !== 'undefined') {
  window.BarraEstado = BarraEstado;
  window.defineBarraEstado = defineBarraEstado;
  window.mountBarraEstado = autoMountBarraEstado;
  window.isBarraEstadoHostBlocked = isHostBlocked;
  window.BARRA_ESTADO_DEFAULT_BLOCKED_HOSTS = DEFAULT_BLOCKED_HOSTS.slice();
}

defineBarraEstado();
autoMountBarraEstado();

