(function () {
  'use strict'

  var STYLE_ID = 'barra-estado-standalone-style'
  var MOUNT_ATTR = 'data-barra-estado-mounted'
  var HOST_ATTR = 'data-barra-estado-host'
  var toggleSequence = 0

  var STYLE_TEXT = `
:host {
  display: block;
  width: 100%;

  --barra-estado-background: transparent;
  --barra-estado-background: #4f4f4f;
  --barra-estado-menu-background: #f8f8f8;
  --barra-estado-hover-color: #000000;
  --barra-estado-active-color: #e4e4e4;
  --barra-estado-font-size: 12px;
  --barra-estado-font-size-desktop: var(--barra-estado-font-size, 12px);
  --barra-estado-height: 32px;
  --barra-estado-link-padding: 13px 40px;
  --barra-estado-link-padding-desktop: 9px 13px;
  --barra-estado-guria-link-padding: 7px 13px;
  --barra-estado-highlight-color: var(--green-matriz-link-activated, #135428);
  --barra-estado-toggle-color: #bcbcbb;
  --barra-estado-toggle-hover-color: #fff;
}

#rs-gov {
  color: var(--green-matriz-link, #1a7235);
  vertical-align: initial;
}

input.barra-estado__checkbox,
.barra-estado__toggle {
  display: none;
}

.barra-estado {
  background: var(--barra-estado-background);
  min-height: var(--barra-estado-height);
}

.barra-estado__container {
  min-height: var(--barra-estado-height);
}

.barra-estado__menu {
  background: var(--barra-estado-menu-background);
}

.barra-estado__menu > li {
  float: left;
  list-style: none;
}

.barra-estado__nav {
  display: block;
  float: right;
}

.barra-estado__menu,
.barra-estado__menu > li,
.barra-estado__menu > li > a,
.barra-estado__nav {
  height: 100%;
}

.barra-estado__nav__form {
  display: inline-block;
  padding: 0;
  margin: 0;
  min-height: var(--barra-estado-height);
}

.barra-estado__menu > li > a {
  display: block;
  box-sizing: border-box;
  padding: var(--barra-estado-link-padding);
  color: var(--green-matriz-link, #1a7235);
  font-size: var(--barra-estado-font-size);
  font-weight: 700;
  line-height: 1;
  transition: box-shadow 0.25s linear, color 0.25s linear;
}

.barra-estado__menu > li > a:hover > svg > path,
.barra-estado__menu > li > a:focus > svg > path {
  fill: var(--barra-estado-hover-color);
}

.barra-estado__menu > li > a:focus,
.barra-estado__menu > li > a:hover {
  box-shadow: inset 5px 0 var(--barra-estado-highlight-color);
  color: var(--barra-estado-hover-color);
}

.barra-estado__menu > li > a:active {
  color: var(--barra-estado-active-color) !important;
}

.barra-estado__menu,
.barra-estado__menu > li,
.barra-estado__menu > li > a {
  height: auto;
}

.barra-estado__toggle {
  z-index: 2;
}

.barra-estado__toggle:after {
  color: var(--barra-estado-toggle-color);
  content: attr(data-open);
  transition: all 0.5s linear;
}

.barra-estado__toggle:hover:after {
  color: var(--barra-estado-toggle-hover-color);
}

.barra-estado__toggle:focus-visible {
  outline: 2px solid var(--govrs-color-focus, #ffcd07);
  outline-offset: 2px;
}

input.barra-estado__checkbox:checked + label.barra-estado__toggle:after {
  content: attr(data-close);
}

@media only screen and (min-width: 992px) {
  .barra-estado__menu {
    padding: 0;
    border-top: none;
    margin-top: 0;
    background: var(--barra-estado-menu-background);
  }

  .barra-estado__menu > li > a {
    padding: var(--barra-estado-link-padding-desktop);
    font-size: var(--barra-estado-font-size-desktop);
  }

  .barra-estado__menu > li > a:focus,
  .barra-estado__menu > li > a:hover {
    box-shadow: inset 0 2px var(--barra-estado-highlight-color);
    color: var(--barra-estado-hover-color);
  }
}

.barra-estado__menu > li > a.barra-estado__guria-link {
  padding: var(--barra-estado-guria-link-padding);
}

.visually-hidden {
  position: absolute !important;
  overflow: hidden !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  border: 0 !important;
  margin: -1px !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
}

:host-context(.high-contrast) .barra-estado {
  border-bottom: 1px solid var(--govrs-color-contrast-foreground, #ffffff) !important;
  background-color: var(--govrs-color-contrast-background, #000000) !important;
}

:host-context(.high-contrast) .barra-estado__menu {
  background-color: var(--govrs-color-contrast-background, #000000) !important;
}

:host-context(.high-contrast) .barra-estado__menu > li > a > #GurIA path {
  fill: var(--govrs-color-contrast-foreground, #ffffff) !important;
}

:host-context(.high-contrast) .barra-estado__menu > li > a:focus {
  box-shadow: inset 0 5px var(--govrs-color-contrast-foreground, #ffffff) !important;
  color: var(--govrs-color-contrast-foreground, #ffffff) !important;
}

:host-context(.high-contrast) .barra-estado__menu > li > a:hover {
  box-shadow: inset 0 5px var(--govrs-color-contrast-foreground, #ffffff) !important;
  color: var(--govrs-color-contrast-foreground, #ffffff) !important;
}

:host-context(.high-contrast) #rs-gov > path {
  fill: var(--govrs-color-contrast-foreground, #ffffff) !important;
}
`

  var RS_GOV_SVG = `
<svg
  version="1.1"
  id="rs-gov"
  xmlns="http://www.w3.org/2000/svg"
  x="0px"
  y="0px"
  width="77px"
  height="16px"
  viewBox="0 0 77 16"
  enable-background="new 0 0 77 16"
  xml:space="preserve"
>
  <title class="rsgov">RS.GOV</title>
  <desc>Governo do Estado do Rio Grande do Sul</desc>
  <path d="M5.64,6.15c-1.8,0-2.92,1.09-2.92,3.4v3.55H0V3.48H2.73v1.94c.56-1.32,1.45-2.19,3.07-2.12v2.85h-.15Z" fill="#1A7235" />
  <path d="M10.78,13.28c-1.34,0-2.85-.44-4.12-1.45l1.17-1.8c1.04,.76,2.13,1.15,3.03,1.15,.79,0,1.15-.29,1.15-.71v-.04c0-.59-.93-.79-1.99-1.11-1.34-.4-2.87-1.02-2.87-2.89v-.04c0-1.96,1.57-3.05,3.52-3.05,1.22,0,2.54,.42,3.58,1.11l-1.04,1.88c-.95-.56-1.9-.9-2.6-.9s-1,.29-1,.67v.04c0,.54,.92,.79,1.96,1.15,1.34,.44,2.91,1.09,2.91,2.85v.04c0,2.13-1.6,3.1-3.67,3.1h0Z" fill="#1A7235" />
  <path d="M16.21,13.09v-2.87h2.91v2.87h-2.91Z" fill="#1A7235" />
  <path d="M25.48,16c-1.56,0-3.03-.36-4.25-1l.93-2.04c.99,.56,1.97,.88,3.24,.88,1.87,0,2.75-.9,2.75-2.62v-.46c-.81,.97-1.68,1.56-3.14,1.56-2.24,0-4.28-1.64-4.28-4.49v-.04c0-2.87,2.06-4.49,4.28-4.49,1.48,0,2.36,.63,3.1,1.43v-1.24h2.73v7.45c0,3.63-1.8,5.08-5.37,5.08Zm2.67-8.21c0-1.31-1.02-2.22-2.35-2.22s-2.33,.92-2.33,2.22v.04c0,1.32,1,2.22,2.33,2.22s2.35-.92,2.35-2.22v-.04Z" fill="#1A7235" />
  <path d="M37.91,13.32c-2.98,0-5.18-2.2-5.18-4.97v-.04c0-2.76,2.22-5,5.22-5s5.18,2.2,5.18,4.97v.04c0,2.76-2.22,5-5.22,5Zm2.53-5c0-1.42-1.02-2.66-2.53-2.66s-2.5,1.2-2.5,2.62v.04c0,1.42,1.02,2.66,2.53,2.66s2.5-1.2,2.5-2.62v-.04Z" fill="#1A7235" />
  <path d="M49.88,13.17h-2.47l-3.79-9.69h2.89l2.15,6.44,2.17-6.44h2.84l-3.79,9.69Z" fill="#1A7235" />
  <path d="M53.52,13.09v-2.87h2.91v2.87h-2.91Z" fill="#1A7235" />
  <path d="M64.39,13.28c-1.45,0-2.35-.67-3-1.43v1.25h-2.73V0h2.73V4.86c.67-.9,1.57-1.56,3-1.56,2.24,0,4.38,1.76,4.38,4.97v.04c0,3.22-2.11,4.98-4.38,4.98h0Zm1.65-5.02c0-1.59-1.08-2.66-2.35-2.66s-2.33,1.06-2.33,2.66v.04c0,1.59,1.06,2.66,2.33,2.66s2.35-1.04,2.35-2.66v-.04Z" fill="#1A7235" />
  <path d="M76.34,6.15c-1.8,0-2.92,1.09-2.92,3.4v3.55h-2.73V3.48h2.73v1.94c.56-1.32,1.45-2.19,3.07-2.12v2.85h-.15Z" fill="#1A7235" />
</svg>
`

  var GURIA_SVG = `
<svg
  id="GurIA"
  xmlns="http://www.w3.org/2000/svg"
  x="0px"
  y="0px"
  width="49.94px"
  height="13.21px"
  viewBox="0 0 49.94 13.21"
  enable-background="new 0 0 49.94 13.21"
>
  <title>GurIA</title>
  <desc>A tua nova assistente digital</desc>
  <path d="M38.35,5.71c.18,0,.35-.02.53-.02.04-.07.1-.14.16-.2.07.1.13.2.2.31.06-.11.11-.25.15-.37.03-.1.06-.22.12-.31.04.07.07.16.1.23.04.12.08.24.12.37.02.07.03.13.06.2.03-.09.05-.19.08-.28l.13-.43c.04-.14.08-.29.15-.43.06.13.09.28.12.43.04.16.08.32.11.48.02-.05.03-.11.05-.17.03-.1.06-.2.09-.31.04-.15.21-.93.3-1h.01s.06.1.08.14c.04.1.07.21.09.32.05.19.09.38.12.57.02.11.03.23.06.34.04-.24.21-1.12.34-1.28.13.17.3,1.22.33,1.46.05-.39.11-.78.18-1.18.05-.32.1-.63.16-.95.04-.26.09-.53.16-.79.02-.08.04-.17.08-.25.02-.04.04-.07.08-.09.01,0,.03,0,.04.01.07.04.1.2.13.27.03.1.04.2.07.29.06.29.12.58.16.87.03.2.07.4.1.61.04.25.08.5.12.75.03.14.04.29.08.43.01-.12.03-.25.04-.37.04-.35.09-.71.2-1.05.01-.05.03-.12.07-.16h.01s.04.05.04.07c.08.16.13.33.18.5.09.32.16.64.24.97.02-.07.03-.15.05-.22l.07-.32c.04-.16.07-.32.13-.47.03.07.04.14.07.2l.09.32c.07.22.15.44.21.66.08-.31.16-.61.25-.92.04.08.06.16.09.25.09.23.17.46.27.68.03-.07.06-.15.08-.22.05-.14.1-.29.16-.43.08.19.17.37.26.55.06-.1.13-.2.2-.31.05.07.1.14.15.21.15,0,.29.01.43.02L43.94.22h-3.08l-2.58,5.5h.07,0Z" fill="#1A7235" />
  <path d="M46.55,5.77c-.22,0-.44.01-.66.01-.04.1-.11.19-.16.28-.04-.07-.08-.14-.12-.21-.04-.07-.08-.13-.11-.2-.04.08-.25.64-.29.67-.05-.02-.25-.5-.3-.58-.06.11-.28.77-.35.8h-.03s-.04-.04-.05-.06c-.04-.08-.08-.17-.11-.26-.05-.14-.09-.28-.16-.42-.06.11-.17.44-.27.5h-.03c-.08-.05-.25-.44-.28-.54-.03-.07-.04-.14-.07-.22-.04.14-.06.29-.09.43-.03.12-.15.64-.25.7h-.02c-.07-.04-.28-.62-.32-.72,0,.14-.03.29-.04.43-.03.34-.07.68-.11,1.02-.04.26-.08.52-.12.77-.03.14-.04.28-.07.41,0,.04-.02.1-.05.13h-.03s-.03-.04-.03-.06c-.03-.11-.04-.22-.06-.33-.03-.16-.05-.32-.08-.49-.08-.5-.13-1-.18-1.5-.01-.13-.02-.26-.04-.4-.08.17-.13.37-.22.53-.01.02-.03.06-.06.07-.01,0-.02,0-.03,0-.11-.07-.23-.66-.27-.8-.06.37-.1.74-.2,1.1-.03.09-.04.19-.09.28-.01.03-.04.08-.07.09h-.03c-.1-.07-.28-1.09-.3-1.24-.03-.14-.04-.28-.07-.42-.06.14-.11.29-.17.44-.03.07-.06.15-.1.22-.02.04-.04.08-.08.1h-.02c-.11-.04-.2-.37-.26-.47-.05.09-.32.63-.35.65h0c-.06-.07-.08-.16-.1-.24l-.12-.34c-.03-.07-.05-.15-.09-.22-.1.11-.14.26-.23.38-.04-.04-.17-.27-.2-.28-.01,0-.03.02-.04.02h-.49c-.08-.01-.16-.01-.25-.01l-3.39,7.22h3.19l1.19-2.74h6.25l1.19,2.74h3.27l-3.4-7.22v-.02Z" fill="#1A7235" />
  <path d="M31.41.22h3.11v12.77h-3.11V.22Z" />
  <path d="M30.93,3.03v2.63c-.25-.02-.44-.04-.67-.04-1.65,0-2.75.86-2.75,2.74v4.63h-3V3.18h2.87v1.3c.73-.95,1.96-1.44,3.56-1.44h0Z" fill="#1A7235" />
  <path d="M23.88,3.18v9.81h-2.85v-1.16c-.79.86-1.94,1.31-3.21,1.31-2.59,0-4.42-1.39-4.42-4.41V3.18h3v5.13c0,1.64.77,2.37,2.09,2.37s2.39-.84,2.39-2.65V3.18h3Z" fill="#1A7235" />
  <path d="M9.94,6.41h2.85v5.18c-1.48,1.06-3.52,1.62-5.44,1.62C3.11,13.21,0,10.45,0,6.6S3.11,0,7.4,0c2.37,0,4.33.77,5.63,2.21l-2,1.75c-.98-.98-2.11-1.44-3.48-1.44-2.61,0-4.4,1.66-4.4,4.09s1.79,4.09,4.37,4.09c.85,0,1.63-.14,2.42-.55v-3.74h0Z" fill="#1A7235" />
</svg>
`

  function renderMenuItem(item) {
    var className = item.className ? ' class="' + item.className + '"' : ''
    var content = item.html || '<span class="visually-hidden">Estado </span>' + item.label

    return '<li><a target="_blank" rel="noreferrer noopener" href="' + item.href + '"' + className + '>' + content + '</a></li>'
  }

  var MENU_ITEMS = [
    { href: 'https://estado.rs.gov.br/agencia-de-noticias', label: 'Notícias' },
    { href: 'https://www.rs.gov.br/', label: 'Serviços' },
    { href: 'https://www.centraldocidadao.rs.gov.br/', label: 'Central do Cidadão' },
    { href: 'http://www.transparencia.rs.gov.br/', label: 'Transparência' },
    { href: 'https://estado.rs.gov.br/institucional', label: 'Locais e Órgãos', className: 'barra-letters' },
    { href: 'https://www.diariooficial.rs.gov.br/', label: 'Diário Oficial' },
    {
      href: 'https://www.rs.gov.br/guria',
      className: 'barra-estado__guria-link',
      html: '<span class="visually-hidden">Estado </span>' + GURIA_SVG,
    },
  ]

  var MENU_ITEMS_HTML = MENU_ITEMS.map(renderMenuItem).join('')

  function ensureWindowOrigin() {
    if (typeof window === 'undefined') return

    if (!('origin' in window.location)) {
      try {
        var locationObject = window.location
        locationObject.origin = locationObject.protocol + '//' + locationObject.host
      } catch (error) {
      }
    }
  }

  function ensureStyles(styleHost) {
    if (typeof document === 'undefined' || !styleHost) return null

    if (typeof styleHost.querySelector === 'function') {
      var existingStyle = styleHost.querySelector('#' + STYLE_ID)
      if (existingStyle) return existingStyle
    }

    var styleElement = document.createElement('style')
    styleElement.id = STYLE_ID
    styleElement.type = 'text/css'
    styleElement.textContent = STYLE_TEXT

    if (typeof styleHost.appendChild === 'function') {
      styleHost.appendChild(styleElement)
      return styleElement
    }

    return null
  }

  function createToggleId() {
    toggleSequence += 1
    return 'barra-estado__toggle-' + toggleSequence
  }

  function renderMarkup(toggleId) {
    return [
      '<div class="container-menu">',
      '<div class="barra-estado">',
      '<div class="barra-estado__container">',
      '<a class="barra-estado__logo" title="rs.gov" target="_blank" rel="noreferrer noopener" href="https://www.rs.gov.br/">',
      RS_GOV_SVG,
      '</a>',
      '<div class="barra-estado__nav">',
      '<div class="barra-estado__nav__form">',
      '<input type="checkbox" id="' + toggleId + '" class="barra-estado__checkbox" />',
      '<label for="' + toggleId + '" id="' + toggleId + '-toggle" class="barra-estado__toggle" data-open="•••" data-close="•••" tabindex="0" role="button" aria-expanded="false" aria-controls="' + toggleId + '-menu" aria-label="Abrir ou fechar o menu da barra do estado"></label>',
      '<ul class="barra-estado__menu" id="' + toggleId + '-menu" aria-label="Links institucionais">',
      MENU_ITEMS_HTML,
      '</ul>',
      '</div>',
      '</div>',
      '</div>',
      '</div>',
      '</div>',
    ].join('')
  }

  function createRenderRoot(hostElement) {
    if (!hostElement) return null

    if (hostElement.shadowRoot) return hostElement.shadowRoot

    if (typeof hostElement.attachShadow !== 'function') {
      console.error('BarraEstadoStandalone: Shadow DOM não é suportado neste ambiente.')
      return null
    }

    try {
      return hostElement.attachShadow({ mode: 'open' })
    } catch (error) {
      console.error('BarraEstadoStandalone: falha ao criar Shadow DOM.', error)
      return null
    }
  }

  function clearRenderRoot(renderRoot) {
    if (!renderRoot) return

    while (renderRoot.firstChild) {
      renderRoot.removeChild(renderRoot.firstChild)
    }
  }

  function bindToggleBehavior(renderRoot, toggleId) {
    if (!renderRoot || typeof renderRoot.querySelector !== 'function') return

    var checkbox = renderRoot.querySelector('#' + toggleId)
    var toggle = renderRoot.querySelector('#' + toggleId + '-toggle')

    if (!checkbox || !toggle) return

    var syncAriaState = function () {
      var isOpen = Boolean(checkbox.checked)
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false')
    }

    toggle.addEventListener('keydown', function (event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault()
        checkbox.click()
      }

      if (event.key === 'Escape' && checkbox.checked) {
        event.preventDefault()
        checkbox.checked = false
        checkbox.dispatchEvent(new Event('change', { bubbles: true }))
      }
    })

    checkbox.addEventListener('change', syncAriaState)
    syncAriaState()
  }

  function mountBarraEstado(hostElement) {
    if (typeof document === 'undefined' || !hostElement) return null

    ensureWindowOrigin()

    var renderRoot = createRenderRoot(hostElement)
    if (!renderRoot) return null

    var toggleId = createToggleId()

    clearRenderRoot(renderRoot)
    ensureStyles(renderRoot)

    var fragmentHost = document.createElement('div')
    fragmentHost.innerHTML = renderMarkup(toggleId)

    while (fragmentHost.firstChild) {
      renderRoot.appendChild(fragmentHost.firstChild)
    }

    bindToggleBehavior(renderRoot, toggleId)
    hostElement.setAttribute(MOUNT_ATTR, 'true')

    return hostElement
  }

  function getExistingHost() {
    if (typeof document === 'undefined') return null
    return document.querySelector('[' + HOST_ATTR + '="true"]')
  }

  function createMountHost() {
    if (typeof document === 'undefined' || !document.body) return null

    var existingHost = getExistingHost()
    if (existingHost) return existingHost

    var host = document.createElement('div')
    host.setAttribute(HOST_ATTR, 'true')
    host.setAttribute(MOUNT_ATTR, 'false')

    if (document.body.firstChild) {
      document.body.insertBefore(host, document.body.firstChild)
    } else {
      document.body.appendChild(host)
    }

    return host
  }

  function bootstrapIntoBody() {
    if (typeof document === 'undefined') return null

    var run = function () {
      var host = createMountHost()

      if (!host) {
        console.error('BarraEstadoStandalone: não foi possível criar o host no <body>.')
        return null
      }

      return mountBarraEstado(host)
    }

    if (document.body) {
      return run()
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', run, { once: true })
      return null
    }

    window.addEventListener('load', run, { once: true })
    return null
  }

  bootstrapIntoBody()
})()