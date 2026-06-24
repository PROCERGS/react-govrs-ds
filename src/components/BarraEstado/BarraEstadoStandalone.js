(function () {
  'use strict';

  var STYLE_ID = 'barra-estado-standalone-style';
  var HOST_ATTR = 'data-barra-estado-host';
  var toggleSequence = 0;

  var STYLE_TEXT = `
:host { display:block;width:100%;--barra-estado-background:#4f4f4f;--barra-estado-menu-background:#f8f8f8;}
.barra-estado{background:var(--barra-estado-background);min-height:32px}
.barra-estado__menu>li{list-style:none;float:left}
.barra-estado__menu{background:var(--barra-estado-menu-background)}
.barra-estado__nav{float:right}
.barra-estado__menu>li>a{display:block;padding:13px 40px;font-weight:bold;color:#1a7235;text-decoration:none}
.barra-estado__menu>li>a:hover{color:#000}
`;

  var RS_GOV_SVG = `
<svg width="77" height="16" viewBox="0 0 77 16">
  <path d="M5.64,6.15c-1.8,0-2.92,1.09-2.92,3.4v3.55H0V3.48H2.73v1.94c.56-1.32,1.45-2.19,3.07-2.12v2.85Z"/>
</svg>
`;

  var MENU_ITEMS = [
    { href: 'https://estado.rs.gov.br/agencia-de-noticias', label: 'Notícias' },
    { href: 'https://www.rs.gov.br/', label: 'Serviços' },
    { href: 'https://www.centraldocidadao.rs.gov.br/', label: 'Central do Cidadão' },
    { href: 'http://www.transparencia.rs.gov.br/', label: 'Transparência' }
  ];

  function renderMenuItem(item) {
    return `<li><a target="_blank" href="${item.href}">${item.label}</a></li>`;
  }

  function createToggleId() {
    toggleSequence++;
    return `barra-estado__toggle-${toggleSequence}`;
  }

  function ensureStyles(shadow) {
    if (shadow.querySelector(`#${STYLE_ID}`)) return;
    var style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = STYLE_TEXT;
    shadow.appendChild(style);
  }

  function renderMarkup(toggleId) {
    return `
<div class="barra-estado">
 <div class="barra-estado__container">
   <a href="https://www.rs.gov.br/">${RS_GOV_SVG}</a>
   <div class="barra-estado__nav">
     <input type="checkbox" id="${toggleId}">
     <label for="${toggleId}">•••</label>
     <ul class="barra-estado__menu">
       ${MENU_ITEMS.map(renderMenuItem).join('')}
     </ul>
   </div>
 </div>
</div>`;
  }

  function mount() {
    var host = document.querySelector(`[${HOST_ATTR}]`);
    if (!host) {
      host = document.createElement('div');
      host.setAttribute(HOST_ATTR, 'true');
      document.body.prepend(host);
    }

    var shadow = host.shadowRoot || host.attachShadow({ mode: 'open' });
    shadow.innerHTML = '';

    ensureStyles(shadow);

    var wrapper = document.createElement('div');
    wrapper.innerHTML = renderMarkup(createToggleId());

    while (wrapper.firstChild) {
      shadow.appendChild(wrapper.firstChild);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
