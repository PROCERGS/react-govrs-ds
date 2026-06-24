// (function () {
//   'use strict';

//   var STYLE_ID = 'barra-estado-standalone-style';
//   var HOST_ATTR = 'data-barra-estado-host';
//   var toggleSequence = 0;

//   var STYLE_TEXT = `
// :host { display:block;width:100%;--barra-estado-background:#4f4f4f;--barra-estado-menu-background:#f8f8f8;}
// .barra-estado{background:var(--barra-estado-background);min-height:32px}
// .barra-estado__menu>li{list-style:none;float:left}
// .barra-estado__menu{background:var(--barra-estado-menu-background)}
// .barra-estado__nav{float:right}
// .barra-estado__menu>li>a{display:block;padding:13px 40px;font-weight:bold;color:#1a7235;text-decoration:none}
// .barra-estado__menu>li>a:hover{color:#000}
// `;

//   var RS_GOV_SVG = `
// <svg width="77" height="16" viewBox="0 0 77 16">
//   <path d="M5.64,6.15c-1.8,0-2.92,1.09-2.92,3.4v3.55H0V3.48H2.73v1.94c.56-1.32,1.45-2.19,3.07-2.12v2.85Z"/>
// </svg>
// `;

//   var MENU_ITEMS = [
//     { href: 'https://estado.rs.gov.br/agencia-de-noticias', label: 'Notícias' },
//     { href: 'https://www.rs.gov.br/', label: 'Serviços' },
//     { href: 'https://www.centraldocidadao.rs.gov.br/', label: 'Central do Cidadão' },
//     { href: 'http://www.transparencia.rs.gov.br/', label: 'Transparência' }
//   ];

//   function renderMenuItem(item) {
//     return `<li><a target="_blank" href="${item.href}">${item.label}</a></li>`;
//   }

//   function createToggleId() {
//     toggleSequence++;
//     return `barra-estado__toggle-${toggleSequence}`;
//   }

//   function ensureStyles(shadow) {
//     if (shadow.querySelector(`#${STYLE_ID}`)) return;
//     var style = document.createElement('style');
//     style.id = STYLE_ID;
//     style.textContent = STYLE_TEXT;
//     shadow.appendChild(style);
//   }

//   function renderMarkup(toggleId) {
//     return `
// <div class="barra-estado">
//  <div class="barra-estado__container">
//    <a href="https://www.rs.gov.br/">${RS_GOV_SVG}</a>
//    <div class="barra-estado__nav">
//      <input type="checkbox" id="${toggleId}">
//      <label for="${toggleId}">•••</label>
//      <ul class="barra-estado__menu">
//        ${MENU_ITEMS.map(renderMenuItem).join('')}
//      </ul>
//    </div>
//  </div>
// </div>`;
//   }

//   function mount() {
//     var host = document.querySelector(`[${HOST_ATTR}]`);
//     if (!host) {
//       host = document.createElement('div');
//       host.setAttribute(HOST_ATTR, 'true');
//       document.body.prepend(host);
//     }

//     var shadow = host.shadowRoot || host.attachShadow({ mode: 'open' });
//     shadow.innerHTML = '';

//     ensureStyles(shadow);

//     var wrapper = document.createElement('div');
//     wrapper.innerHTML = renderMarkup(createToggleId());

//     while (wrapper.firstChild) {
//       shadow.appendChild(wrapper.firstChild);
//     }
//   }

//   if (document.readyState === 'loading') {
//     document.addEventListener('DOMContentLoaded', mount);
//   } else {
//     mount();
//   }
// })();
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

  --barra-estado-background: #4f4f4f;
  --barra-estado-menu-background: #737474;
  --barra-estado-hover-color: #fff;
  --barra-estado-active-color: #e4e4e4;
  --barra-estado-font-size: 12px;
  --barra-estado-height: 32px;
  --barra-estado-highlight-color: #ffffff;
}

/* base */
.barra-estado {
  background: var(--barra-estado-background);
  min-height: var(--barra-estado-height);
  display: flex;
  align-items: center;
}

.barra-estado__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  margin: 0 auto;
  width: 100%;
  max-width: 1170px;
}

.barra-estado__logo svg path {
  fill: #f4f4f1;
}

/* nav */
.barra-estado__nav {
  position: relative;
}

/* menu */
.barra-estado__menu {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  background: transparent;
}

.barra-estado__menu > li {
  display: flex;
}

.barra-estado__menu > li > a {
  display: block;
  padding: 9px 13px;
  font-size: var(--barra-estado-font-size);
  text-decoration: none;
  color: #e4e4e4;
  transition: all .2s ease;
}

.barra-estado__menu > li > a:hover,
.barra-estado__menu > li > a:focus {
  color: var(--barra-estado-hover-color);
  box-shadow: inset 0 2px var(--barra-estado-highlight-color);
}

.barra-estado__menu > li > a:active {
  color: var(--barra-estado-active-color);
}

/* toggle */
input.barra-estado__checkbox {
  display: none;
}

.barra-estado__toggle {
  display: none;
  cursor: pointer;
  font-size: 18px;
  color: #bcbcbb;
}

.barra-estado__toggle:hover {
  color: #fff;
}

/* MOBILE */
@media (max-width: 991px) {

  .barra-estado__toggle {
    display: block;
  }

  .barra-estado__menu {
    flex-direction: column;
    position: absolute;
    right: 0;
    top: 32px;
    width: 280px;
    background: var(--barra-estado-menu-background);
    opacity: 0;
    pointer-events: none;
    transition: opacity .2s ease;
  }

  .barra-estado__menu > li > a {
    padding: 13px 20px;
  }

  input.barra-estado__checkbox:checked ~ .barra-estado__menu {
    opacity: 1;
    pointer-events: all;
  }
}

/* acessibilidade */
.visually-hidden {
  position: absolute !important;
  overflow: hidden !important;
  width: 1px !important;
  height: 1px !important;
  margin: -1px !important;
}
`

  var RS_GOV_SVG = `
<svg
  version="1.1"
  id="rs-gov"
  xmlns="http://www.w3.org/2000/svg"
  width="77px"
  height="16px"
  viewBox="0 0 77 16"
>
  <path d="M5.64,6.15c-1.8,0-2.92,1.09-2.92,3.4v3.55H0V3.48H2.73v1.94c.56-1.32,1.45-2.19,3.07-2.12v2.85h-.15Z" fill="#eb0f0f"/>
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
  <path d="M38.35,5.71c.18,0,.35-.02.53-.02.04-.07.1-.14.16-.2.07.1.13.2.2.31.06-.11.11-.25.15-.37.03-.1.06-.22.12-.31.04.07.07.16.1.23.04.12.08.24.12.37.02.07.03.13.06.2.03-.09.05-.19.08-.28l.13-.43c.04-.14.08-.29.15-.43.06.13.09.28.12.43.04.16.08.32.11.48.02-.05.03-.11.05-.17.03-.1.06-.2.09-.31.04-.15.21-.93.3-1h.01s.06.1.08.14c.04.1.07.21.09.32.05.19.09.38.12.57.02.11.03.23.06.34.04-.24.21-1.12.34-1.28.13.17.3,1.22.33,1.46.05-.39.11-.78.18-1.18.05-.32.1-.63.16-.95.04-.26.09-.53.16-.79.02-.08.04-.17.08-.25.02-.04.04-.07.08-.09.01,0,.03,0,.04.01.07.04.1.2.13.27.03.1.04.2.07.29.06.29.12.58.16.87.03.2.07.4.1.61.04.25.08.5.12.75.03.14.04.29.08.43.01-.12.03-.25.04-.37.04-.35.09-.71.2-1.05.01-.05.03-.12.07-.16h.01s.04.05.04.07c.08.16.13.33.18.5.09.32.16.64.24.97.02-.07.03-.15.05-.22l.07-.32c.04-.16.07-.32.13-.47.03.07.04.14.07.2l.09.32c.07.22.15.44.21.66.08-.31.16-.61.25-.92.04.08.06.16.09.25.09.23.17.46.27.68.03-.07.06-.15.08-.22.05-.14.1-.29.16-.43.08.19.17.37.26.55.06-.1.13-.2.2-.31.05.07.1.14.15.21.15,0,.29.01.43.02L43.94.22h-3.08l-2.58,5.5h.07,0Z" fill="#eb0f0f" />
  <path d="M46.55,5.77c-.22,0-.44.01-.66.01-.04.1-.11.19-.16.28-.04-.07-.08-.14-.12-.21-.04-.07-.08-.13-.11-.2-.04.08-.25.64-.29.67-.05-.02-.25-.5-.3-.58-.06.11-.28.77-.35.8h-.03s-.04-.04-.05-.06c-.04-.08-.08-.17-.11-.26-.05-.14-.09-.28-.16-.42-.06.11-.17.44-.27.5h-.03c-.08-.05-.25-.44-.28-.54-.03-.07-.04-.14-.07-.22-.04.14-.06.29-.09.43-.03.12-.15.64-.25.7h-.02c-.07-.04-.28-.62-.32-.72,0,.14-.03.29-.04.43-.03.34-.07.68-.11,1.02-.04.26-.08.52-.12.77-.03.14-.04.28-.07.41,0,.04-.02.1-.05.13h-.03s-.03-.04-.03-.06c-.03-.11-.04-.22-.06-.33-.03-.16-.05-.32-.08-.49-.08-.5-.13-1-.18-1.5-.01-.13-.02-.26-.04-.4-.08.17-.13.37-.22.53-.01.02-.03.06-.06.07-.01,0-.02,0-.03,0-.11-.07-.23-.66-.27-.8-.06.37-.1.74-.2,1.1-.03.09-.04.19-.09.28-.01.03-.04.08-.07.09h-.03c-.1-.07-.28-1.09-.3-1.24-.03-.14-.04-.28-.07-.42-.06.14-.11.29-.17.44-.03.07-.06.15-.1.22-.02.04-.04.08-.08.1h-.02c-.11-.04-.2-.37-.26-.47-.05.09-.32.63-.35.65h0c-.06-.07-.08-.16-.1-.24l-.12-.34c-.03-.07-.05-.15-.09-.22-.1.11-.14.26-.23.38-.04-.04-.17-.27-.2-.28-.01,0-.03.02-.04.02h-.49c-.08-.01-.16-.01-.25-.01l-3.39,7.22h3.19l1.19-2.74h6.25l1.19,2.74h3.27l-3.4-7.22v-.02Z" fill="#eb0f0f" />
  <path d="M31.41.22h3.11v12.77h-3.11V.22Z" />
  <path d="M30.93,3.03v2.63c-.25-.02-.44-.04-.67-.04-1.65,0-2.75.86-2.75,2.74v4.63h-3V3.18h2.87v1.3c.73-.95,1.96-1.44,3.56-1.44h0Z" fill="#eb0f0f" />
  <path d="M23.88,3.18v9.81h-2.85v-1.16c-.79.86-1.94,1.31-3.21,1.31-2.59,0-4.42-1.39-4.42-4.41V3.18h3v5.13c0,1.64.77,2.37,2.09,2.37s2.39-.84,2.39-2.65V3.18h3Z" fill="#eb0f0f" />
  <path d="M9.94,6.41h2.85v5.18c-1.48,1.06-3.52,1.62-5.44,1.62C3.11,13.21,0,10.45,0,6.6S3.11,0,7.4,0c2.37,0,4.33.77,5.63,2.21l-2,1.75c-.98-.98-2.11-1.44-3.48-1.44-2.61,0-4.4,1.66-4.4,4.09s1.79,4.09,4.37,4.09c.85,0,1.63-.14,2.42-.55v-3.74h0Z" fill="#eb0f0f" />
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
    { href: 'https://estado.rs.gov.br/institucional', label: 'Locais e Órgãos' },
    {
      href: 'https://www.rs.gov.br/guria',
      className: 'barra-estado__guria-link',
      html: '<span class="visually-hidden">Estado </span>' + GURIA_SVG,
    },
  ]

  var MENU_ITEMS_HTML = MENU_ITEMS.map(renderMenuItem).join('')

  function ensureStyles(styleHost) {
    if (styleHost.querySelector('#' + STYLE_ID)) return

    var styleElement = document.createElement('style')
    styleElement.id = STYLE_ID
    styleElement.textContent = STYLE_TEXT
    styleHost.appendChild(styleElement)
  }

  function createToggleId() {
    toggleSequence += 1
    return 'barra-estado__toggle-' + toggleSequence
  }

  function renderMarkup(toggleId) {
    return `
<div class="barra-estado">
  <div class="barra-estado__container">
    <a class="barra-estado__logo" href="https://www.rs.gov.br/" target="_blank">
      ${RS_GOV_SVG}
    </a>

    <div class="barra-estado__nav">
      <input type="checkbox" id="${toggleId}" class="barra-estado__checkbox">
      <label for="${toggleId}" class="barra-estado__toggle">•••</label>

      <ul class="barra-estado__menu">
        ${MENU_ITEMS_HTML}
      </ul>
    </div>
  </div>
</div>`
  }

  function mountBarraEstado(hostElement) {
    var renderRoot = hostElement.shadowRoot || hostElement.attachShadow({ mode: 'open' })
    renderRoot.innerHTML = ''

    ensureStyles(renderRoot)

    var wrapper = document.createElement('div')
    wrapper.innerHTML = renderMarkup(createToggleId())

    while (wrapper.firstChild) {
      renderRoot.appendChild(wrapper.firstChild)
    }

    hostElement.setAttribute(MOUNT_ATTR, 'true')
    return hostElement
  }

  function createMountHost() {
    var host = document.createElement('div')
    host.setAttribute(HOST_ATTR, 'true')
    document.body.prepend(host)
    return host
  }

  function bootstrap() {
    var host = createMountHost()
    mountBarraEstado(host)
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootstrap)
  } else {
    bootstrap()
  }

})()