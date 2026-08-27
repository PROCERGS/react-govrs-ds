import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as l}from"./index-DyTKwKRb.js";import{D as R,S as G,s as o,a as b,b as B,c as _}from"./storyDocs-CoQtGjOG.js";import{F as T,n as Ce,L as He,M as we,p as Te,N as Be}from"./index-A9ZUQmzb.js";import{M as Ee}from"./MenuHamburger-DYtvmstP.js";import{S as qe}from"./Search-CTbXdl1P.js";/* empty css              */import"./_commonjsHelpers-Cpj98o6Y.js";const Ie="/react-govrs-ds/assets/brasao-RS-CdLMttjR.svg";function V(...a){return a.filter(Boolean).join(" ")}function S({siteTitle:a,homeHref:r="/",logo:s,logoHref:u="https://www.estado.rs.gov.br/inicial",logoAriaLabel:p="Governo do Estado do Rio Grande do Sul",menuItems:m=[],menuOpen:c,onMenuOpenChange:n,searchValue:i,defaultSearchValue:t="",onSearchValueChange:d,onSearch:v,searchActive:A,defaultSearchActive:N=!1,onSearchActiveChange:x,searchPlaceholder:C="O que você procura?",searchInputAriaLabel:E="Campo de busca",searchButtonLabel:f="Pesquisar",searchCloseButtonLabel:H="Fechar busca",showScrollTopButton:ce=!0,scrollTargetId:de="main",scrollTopButtonLabel:ue="Voltar ao topo",onScrollTop:y,className:pe}){const F=l.useId().replace(/:/g,""),Q=A!==void 0,[me,he]=l.useState(N),[q,be]=l.useState(!1),O=Q?A:me,xe=q?O:!0,$=c!==void 0,[ge,ve]=l.useState(!1),fe=$?c:ge,W=m.length>0;function ye(h){$||ve(h),n==null||n(h)}function je(h){Q||he(h),x==null||x(h)}function Se(){if(typeof document>"u"){y==null||y();return}const h=document.getElementById(de);h?h.scrollIntoView({behavior:"smooth",block:"start"}):typeof window<"u"&&window.scrollTo({top:0,behavior:"smooth"}),y==null||y()}return l.useEffect(()=>{if(typeof window>"u"||typeof getComputedStyle!="function")return;const Ae=(getComputedStyle(document.documentElement).getPropertyValue("--govrs-breakpoint-smartphone-landscape-tablet-portrait-max")||"48rem").trim(),j=window.matchMedia(`(max-width: ${Ae})`),w=()=>be(j.matches);return w(),typeof j.addEventListener=="function"?(j.addEventListener("change",w),()=>j.removeEventListener("change",w)):(j.addListener(w),()=>j.removeListener(w))},[]),e.jsx("header",{className:V("govrs-header-wrapper",pe),"data-menu-open":fe&&W?"true":void 0,children:e.jsxs("div",{className:"govrs-header",children:[e.jsxs("div",{className:"govrs-header__logo-nav-wrapper",children:[e.jsxs("div",{className:V("govrs-header__identity",q&&O&&"govrs-header__identity--hidden"),children:[W?e.jsx(Ee,{id:`govrs-header-menu-${F}`,items:m,open:c,onOpenChange:ye}):null,e.jsx("a",{className:"govrs-header__logo-link",href:u,"aria-label":p,children:s??e.jsx("img",{className:"govrs-header__logo-image",src:Ie,alt:"","aria-hidden":"true"})}),e.jsx("a",{className:"govrs-header__title",href:r,children:a})]}),e.jsx("div",{className:V("govrs-header__search-wrapper",q&&O&&"govrs-header__search-wrapper--active"),children:e.jsx(qe,{id:`govrs-header-search-${F}`,value:i,defaultValue:t,onChange:d,onSearch:v,collapsible:q,active:xe,onActiveChange:je,placeholder:C,inputAriaLabel:E,searchButtonLabel:f,closeButtonLabel:H,fullWidth:!0})})]}),ce?e.jsx("button",{type:"button",className:"govrs-header__scroll-top","aria-label":ue,onClick:Se,children:e.jsx(T,{icon:Ce})}):null]})})}S.__docgenInfo={description:"",methods:[],displayName:"Header",props:{siteTitle:{required:!0,tsType:{name:"ReactNode"},description:""},homeHref:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'/'",computed:!1}},logo:{required:!1,tsType:{name:"ReactNode"},description:""},logoHref:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'https://www.estado.rs.gov.br/inicial'",computed:!1}},logoAriaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Governo do Estado do Rio Grande do Sul'",computed:!1}},menuItems:{required:!1,tsType:{name:"Array",elements:[{name:"MenuHamburger.Item"}],raw:"MenuHamburger.Item[]"},description:"",defaultValue:{value:"[]",computed:!1}},menuOpen:{required:!1,tsType:{name:"boolean"},description:""},onMenuOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},searchValue:{required:!1,tsType:{name:"string"},description:""},defaultSearchValue:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},onSearchValueChange:{required:!1,tsType:{name:"Search.Props['onChange']",raw:"Search.Props['onChange']"},description:""},onSearch:{required:!1,tsType:{name:"Search.Props['onSearch']",raw:"Search.Props['onSearch']"},description:""},searchActive:{required:!1,tsType:{name:"boolean"},description:""},defaultSearchActive:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onSearchActiveChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(active: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"active"}],return:{name:"void"}}},description:""},searchPlaceholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'O que você procura?'",computed:!1}},searchInputAriaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Campo de busca'",computed:!1}},searchButtonLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Pesquisar'",computed:!1}},searchCloseButtonLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Fechar busca'",computed:!1}},showScrollTopButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},scrollTargetId:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'main'",computed:!1}},scrollTopButtonLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Voltar ao topo'",computed:!1}},onScrollTop:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};function U(a={}){return l.useEffect(()=>{if(!(typeof window>"u")&&!("origin"in window.location))try{const r=window.location;r.origin=r.protocol+"//"+r.host}catch{}},[]),e.jsx("div",{className:"container-menu",children:e.jsx("div",{className:"barra-estado",children:e.jsxs("div",{className:"barra-estado__container",children:[e.jsx("a",{className:"barra-estado__logo",title:"rs.gov",href:"https://www.rs.gov.br/",children:e.jsxs("svg",{version:"1.1",id:"rs-gov",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"77px",height:"16px",viewBox:"0 0 77 16",enableBackground:"new 0 0 77 16",xmlSpace:"preserve",children:[e.jsx("title",{className:"rsgov",children:"RS.GOV"}),e.jsx("desc",{children:"Governo do Estado do Rio Grande do Sul"}),e.jsx("path",{d:"M5.64,6.15c-1.8,0-2.92,1.09-2.92,3.4v3.55H0V3.48H2.73v1.94c.56-1.32,1.45-2.19,3.07-2.12v2.85h-.15Z",fill:"#1A7235"}),e.jsx("path",{d:"M10.78,13.28c-1.34,0-2.85-.44-4.12-1.45l1.17-1.8c1.04,.76,2.13,1.15,3.03,1.15,.79,0,1.15-.29,1.15-.71v-.04c0-.59-.93-.79-1.99-1.11-1.34-.4-2.87-1.02-2.87-2.89v-.04c0-1.96,1.57-3.05,3.52-3.05,1.22,0,2.54,.42,3.58,1.11l-1.04,1.88c-.95-.56-1.9-.9-2.6-.9s-1,.29-1,.67v.04c0,.54,.92,.79,1.96,1.15,1.34,.44,2.91,1.09,2.91,2.85v.04c0,2.13-1.6,3.1-3.67,3.1h0Z",fill:"#1A7235"}),e.jsx("path",{d:"M16.21,13.09v-2.87h2.91v2.87h-2.91Z",fill:"#1A7235"}),e.jsx("path",{d:"M25.48,16c-1.56,0-3.03-.36-4.25-1l.93-2.04c.99,.56,1.97,.88,3.24,.88,1.87,0,2.75-.9,2.75-2.62v-.46c-.81,.97-1.68,1.56-3.14,1.56-2.24,0-4.28-1.64-4.28-4.49v-.04c0-2.87,2.06-4.49,4.28-4.49,1.48,0,2.36,.63,3.1,1.43v-1.24h2.73v7.45c0,3.63-1.8,5.08-5.37,5.08Zm2.67-8.21c0-1.31-1.02-2.22-2.35-2.22s-2.33,.92-2.33,2.22v.04c0,1.32,1,2.22,2.33,2.22s2.35-.92,2.35-2.22v-.04Z",fill:"#1A7235"}),e.jsx("path",{d:"M37.91,13.32c-2.98,0-5.18-2.2-5.18-4.97v-.04c0-2.76,2.22-5,5.22-5s5.18,2.2,5.18,4.97v.04c0,2.76-2.22,5-5.22,5Zm2.53-5c0-1.42-1.02-2.66-2.53-2.66s-2.5,1.2-2.5,2.62v.04c0,1.42,1.02,2.66,2.53,2.66s2.5-1.2,2.5-2.62v-.04Z",fill:"#1A7235"}),e.jsx("path",{d:"M49.88,13.17h-2.47l-3.79-9.69h2.89l2.15,6.44,2.17-6.44h2.84l-3.79,9.69Z",fill:"#1A7235"}),e.jsx("path",{d:"M53.52,13.09v-2.87h2.91v2.87h-2.91Z",fill:"#1A7235"}),e.jsx("path",{d:"M64.39,13.28c-1.45,0-2.35-.67-3-1.43v1.25h-2.73V0h2.73V4.86c.67-.9,1.57-1.56,3-1.56,2.24,0,4.38,1.76,4.38,4.97v.04c0,3.22-2.11,4.98-4.38,4.98h0Zm1.65-5.02c0-1.59-1.08-2.66-2.35-2.66s-2.33,1.06-2.33,2.66v.04c0,1.59,1.06,2.66,2.33,2.66s2.35-1.04,2.35-2.66v-.04Z",fill:"#1A7235"}),e.jsx("path",{d:"M76.34,6.15c-1.8,0-2.92,1.09-2.92,3.4v3.55h-2.73V3.48h2.73v1.94c.56-1.32,1.45-2.19,3.07-2.12v2.85h-.15Z",fill:"#1A7235"})]})}),e.jsx("div",{className:"barra-estado__nav",children:e.jsxs("div",{className:"barra-estado__nav__form",children:[e.jsx("input",{type:"checkbox",id:"barra-estado__toggle",className:"barra-estado__checkbox",defaultChecked:!1}),e.jsx("label",{htmlFor:"barra-estado__toggle",className:"barra-estado__toggle","data-open":"•••","data-close":"•••"}),e.jsxs("ul",{className:"barra-estado__menu",children:[e.jsx("li",{children:e.jsxs("a",{target:"_self",rel:"noreferrer",href:"https://estado.rs.gov.br/agencia-de-noticias",children:[e.jsx("span",{className:"visually-hidden",children:"Estado "}),"Notícias"]})}),e.jsx("li",{children:e.jsxs("a",{target:"_self",rel:"noreferrer",href:"https://www.rs.gov.br/",children:[e.jsx("span",{className:"visually-hidden",children:"Estado "}),"Serviços"]})}),e.jsx("li",{children:e.jsxs("a",{target:"_self",rel:"noreferrer",href:"https://www.centraldocidadao.rs.gov.br/",children:[e.jsx("span",{className:"visually-hidden",children:"Estado "}),"Central do Cidadão"]})}),e.jsx("li",{children:e.jsxs("a",{target:"_self",rel:"noreferrer",href:"http://www.transparencia.rs.gov.br/",children:[e.jsx("span",{className:"visually-hidden",children:"Estado "}),"Transparência"]})}),e.jsx("li",{children:e.jsxs("a",{className:"barra-letters",target:"_self",rel:"noreferrer",href:"https://estado.rs.gov.br/institucional",children:[e.jsx("span",{className:"visually-hidden",children:"Estado "}),"Locais e Órgãos"]})}),e.jsx("li",{children:e.jsxs("a",{target:"_self",rel:"noreferrer",href:"https://www.diariooficial.rs.gov.br/",children:[e.jsx("span",{className:"visually-hidden",children:"Estado "}),"Diário Oficial"]})}),e.jsx("li",{children:e.jsxs("a",{target:"_self",rel:"noreferrer",href:"https://www.rs.gov.br/guria",style:{padding:"7px 13px"},children:[e.jsx("span",{className:"visually-hidden",children:"Estado "}),e.jsxs("svg",{id:"GurIA",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"49.94px",height:"13.21px",viewBox:"0 0 49.94 13.21",enableBackground:"new 0 0 49.94 13.21",children:[e.jsx("title",{children:"GurIA"}),e.jsx("desc",{children:"A tua nova assistente digital"}),e.jsx("path",{d:"M38.35,5.71c.18,0,.35-.02.53-.02.04-.07.1-.14.16-.2.07.1.13.2.2.31.06-.11.11-.25.15-.37.03-.1.06-.22.12-.31.04.07.07.16.1.23.04.12.08.24.12.37.02.07.03.13.06.2.03-.09.05-.19.08-.28l.13-.43c.04-.14.08-.29.15-.43.06.13.09.28.12.43.04.16.08.32.11.48.02-.05.03-.11.05-.17.03-.1.06-.2.09-.31.04-.15.21-.93.3-1h.01s.06.1.08.14c.04.1.07.21.09.32.05.19.09.38.12.57.02.11.03.23.06.34.04-.24.21-1.12.34-1.28.13.17.3,1.22.33,1.46.05-.39.11-.78.18-1.18.05-.32.1-.63.16-.95.04-.26.09-.53.16-.79.02-.08.04-.17.08-.25.02-.04.04-.07.08-.09.01,0,.03,0,.04.01.07.04.1.2.13.27.03.1.04.2.07.29.06.29.12.58.16.87.03.2.07.4.1.61.04.25.08.5.12.75.03.14.04.29.08.43.01-.12.03-.25.04-.37.04-.35.09-.71.2-1.05.01-.05.03-.12.07-.16h.01s.04.05.04.07c.08.16.13.33.18.5.09.32.16.64.24.97.02-.07.03-.15.05-.22l.07-.32c.04-.16.07-.32.13-.47.03.07.04.14.07.2l.09.32c.07.22.15.44.21.66.08-.31.16-.61.25-.92.04.08.06.16.09.25.09.23.17.46.27.68.03-.07.06-.15.08-.22.05-.14.1-.29.16-.43.08.19.17.37.26.55.06-.1.13-.2.2-.31.05.07.10.14.15.21.15,0,.29.01.43.02L43.94.22h-3.08l-2.58,5.5h.07,0Z",fill:"#1A7235"}),e.jsx("path",{d:"M46.55,5.77c-.22,0-.44.01-.66.01-.04.1-.11.19-.16.28-.04-.07-.08-.14-.12-.21-.04-.07-.08-.13-.11-.2-.04.08-.25.64-.29.67-.05-.02-.25-.5-.3-.58-.06.11-.28.77-.35.8h-.03s-.04-.04-.05-.06c-.04-.08-.08-.17-.11-.26-.05-.14-.09-.28-.16-.42-.06.11-.17.44-.27.5h-.03c-.08-.05-.25-.44-.28-.54-.03-.07-.04-.14-.07-.22-.04.14-.06.29-.09.43-.03.12-.15.64-.25.7h-.02c-.07-.04-.28-.62-.32-.72,0,.14-.03.29-.04.43-.03.34-.07.68-.11,1.02-.04.26-.08.52-.12.77-.03.14-.04.28-.07.41,0,.04-.02.10-.05.13h-.03s-.03-.04-.03-.06c-.03-.11-.04-.22-.06-.33-.03-.16-.05-.32-.08-.49-.08-.5-.13-1-.18-1.5-.01-.13-.02-.26-.04-.4-.08.17-.13.37-.22.53-.01.02-.03.06-.06.07-.01,0-.02,0-.03,0-.11-.07-.23-.66-.27-.8-.06.37-.10.74-.20,1.10-.03.09-.04.19-.09.28-.01.03-.04.08-.07.09h-.03c-.10-.07-.28-1.09-.3-1.24-.03-.14-.04-.28-.07-.42-.06.14-.11.29-.17.44-.03.07-.06.15-.10.22-.02.04-.04.08-.08.10h-.02c-.11-.04-.20-.37-.26-.47-.05.09-.32.63-.35.65h0c-.06-.07-.08-.16-.10-.24l-.12-.34c-.03-.07-.05-.15-.09-.22-.10.11-.14.26-.23.38-.04-.04-.17-.27-.20-.28-.01,0-.03.02-.04.02h-.49c-.08-.01-.16-.01-.25-.01l-3.39,7.22h3.19l1.19-2.74h6.25l1.19,2.74h3.27l-3.4-7.22v-.02Z",fill:"#1A7235"}),e.jsx("path",{d:"M31.41.22h3.11v12.77h-3.11V.22Z",fill:"#1A7235"}),e.jsx("path",{d:"M30.93,3.03v2.63c-.25-.02-.44-.04-.67-.04-1.65,0-2.75.86-2.75,2.74v4.63h-3V3.18h2.87v1.3c.73-.95,1.96-1.44,3.56-1.44h0Z",fill:"#1A7235"}),e.jsx("path",{d:"M23.88,3.18v9.81h-2.85v-1.16c-.79.86-1.94,1.31-3.21,1.31-2.59,0-4.42-1.39-4.42-4.41V3.18h3v5.13c0,1.64.77,2.37,2.09,2.37s2.39-.84,2.39-2.65V3.18h3Z",fill:"#1A7235"}),e.jsx("path",{d:"M9.94,6.41h2.85v5.18c-1.48,1.06-3.52,1.62-5.44,1.62C3.11,13.21,0,10.45,0,6.6S3.11,0,7.4,0c2.37,0,4.33.77,5.63,2.21l-2,1.75c-.98-.98-2.11-1.44-3.48-1.44-2.61,0-4.4,1.66-4.4,4.09s1.79,4.09,4.37,4.09c.85,0,1.63-.14,2.42-.55v-3.74h0Z",fill:"#1A7235"})]})]})})]})]})})]})})})}U.__docgenInfo={description:"",methods:[],displayName:"BarraEstado"};const P="govrs:high-contrast",ke="govrs:high-contrast";function ze(){if(typeof document>"u")return!1;const a=document.documentElement;return a.classList.contains("high-contrast")||a.dataset.govrsContrast==="high"}function Le(a,r){if(typeof window>"u")return r;try{const s=window.localStorage.getItem(a);if(s!==null)return s==="1"}catch{}return ze()||r}function Me(a){if(typeof document>"u")return;const r=document.documentElement;r.classList.toggle("high-contrast",a),a?r.dataset.govrsContrast="high":delete r.dataset.govrsContrast}function De(a=!1,r=ke,{sync:s=!0}={}){const[u,p]=l.useState(()=>s?Le(r,a):a);l.useEffect(()=>{if(!s||typeof window>"u")return;Me(u);try{window.localStorage.setItem(r,u?"1":"0")}catch{}window.dispatchEvent(new CustomEvent(P,{detail:{enabled:u}}));const c=i=>{i.key!==r||i.newValue===null||p(i.newValue==="1")},n=i=>{var d;const t=i;typeof((d=t.detail)==null?void 0:d.enabled)=="boolean"&&p(t.detail.enabled)};return window.addEventListener("storage",c),window.addEventListener(P,n),()=>{window.removeEventListener("storage",c),window.removeEventListener(P,n)}},[u,r,s]);const m=l.useCallback(()=>p(c=>!c),[]);return{enabled:u,toggle:m,setEnabled:p}}function M({defaultHighContrast:a,disableHighContrastToggle:r=!1,hrefAccessibility:s,hrefContact:u,hrefSitemap:p,shortcuts:m}){const{enabled:c,toggle:n}=De(!!a,void 0,{sync:!r}),i=l.useMemo(()=>Array.isArray(m)&&m.length>0?m:[],[m]);return l.useEffect(()=>{const t=d=>{var E;if(d.defaultPrevented)return;const v=d.target;if(v){const f=(E=v.tagName)==null?void 0:E.toLowerCase();if(f==="input"||f==="textarea"||f==="select"||v.isContentEditable)return}if(!d.altKey)return;const A=d.key;if(!/^[1-3]$/.test(A))return;const N=parseInt(A,10)-1,x=i[N];if(!x)return;if(d.preventDefault(),x.onActivate){x.onActivate();return}const C=x.href;if(C.startsWith("#")){const f=C.slice(1),H=document.getElementById(f);H==null||H.scrollIntoView({behavior:"smooth"})}else typeof window<"u"&&(window.location.href=C)};return window.addEventListener("keydown",t),()=>window.removeEventListener("keydown",t)},[i]),e.jsx("div",{className:"acess-bar",children:e.jsxs("div",{className:"acess-wrapper",children:[e.jsx("div",{className:"acess-right",children:e.jsxs("ul",{className:"acess-ul",children:[i.map((t,d)=>e.jsxs("li",{children:[e.jsxs("a",{title:`Ir para ${t.title.toLowerCase()}`,href:t.href,onClick:v=>{t.onActivate&&(v.preventDefault(),t.onActivate())},children:[t.title," [",d+1,"]"]})," "]},d)),s?e.jsx("li",{children:e.jsxs("a",{href:s,children:[e.jsx(T,{icon:He,height:"12px",width:"12px"})," Acessibilidade"]})}):null]})}),e.jsx("div",{className:"acess-left",children:e.jsxs("ul",{className:"acess-ul",children:[e.jsx("li",{children:e.jsx("button",{id:"btn-contraste",type:"button","aria-pressed":c,"aria-label":c?"Desativar alto contraste":"Ativar alto contraste",disabled:r,onClick:r?void 0:n,className:"acess-contrast-btn",children:e.jsx(T,{icon:we,height:"16px",width:"16px"})})}),u?e.jsx("li",{children:e.jsx("a",{href:u,"aria-label":"Contato",children:e.jsx(T,{icon:Te,height:"16px",width:"16px"})})}):null,p?e.jsx("li",{children:e.jsx("a",{href:p,"aria-label":"Mapa do site",children:e.jsx(T,{icon:Be,height:"16px",width:"16px"})})}):null]})})]})})}M.__docgenInfo={description:"",methods:[],displayName:"BarraAcessibilidade",props:{defaultHighContrast:{required:!1,tsType:{name:"boolean"},description:""},disableHighContrastToggle:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hrefAccessibility:{required:!1,tsType:{name:"string"},description:""},hrefContact:{required:!1,tsType:{name:"string"},description:""},hrefSitemap:{required:!1,tsType:{name:"string"},description:""},shortcuts:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  title: string
  href: string
  onActivate?: () => void
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!0}},{key:"onActivate",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}}],raw:"AccessibilityShortcut[]"},description:""}}};const D=[{title:"Institucional",url:"#institucional",items:[{title:"Sobre o órgão",url:"#sobre"},{title:"Estrutura",url:"#estrutura"},{title:"Departamentos",url:"#departamentos",items:[{title:"Planejamento",url:"#planejamento"},{title:"Atendimento ao cidadão",url:"#atendimento"}]}]},{title:"Serviços",url:"#servicos",items:[{title:"Solicitar atendimento",url:"#solicitar"},{title:"Consultar protocolo",url:"#protocolo"},{title:"Guias e orientações",url:"#guias"}]},{title:"Notícias",url:"#noticias"},{title:"Contato",url:"#contato"}],Ne=[{title:"Quando usar",text:"Quando a página precisa apresentar identidade institucional, acionador de navegação, título do site e busca no topo da experiência."},{title:"Melhor exploração",text:"Use o story 'Interativo' para testar título, itens do menu, busca e botão de voltar ao topo em uma composição única."},{title:"Comportamento",text:"Em telas amplas, a busca permanece visível. Em telas compactas, ela abre pelo botão, oculta temporariamente a identidade e expande a partir do alinhamento direito original."}],Oe=["identidade","menu integrado","busca responsiva","retorno ao topo"],Ve=["faixa institucional","links fixos","menu compacto"],Pe=[{title:"Quando usar",text:"Quando a interface precisa de uma faixa institucional fixa acima do restante do cabeçalho, com links rápidos do ecossistema do estado."},{title:"Melhor exploração",text:"Use este story para entender o contrato da barra e o story 'Interativo' de Header para validar a composição completa das três faixas."},{title:"Comportamento",text:"Em larguras reduzidas, os links deixam de ficar todos em linha e passam a ser acessados por um menu compacto acionado pelo botão de reticências."}],_e=["atalhos numerados","alto contraste","links auxiliares"],Re=[{title:"Quando usar",text:"Quando a página precisa oferecer atalhos de teclado, toggle global de contraste e links institucionais de acessibilidade no topo da experiência."},{title:"Melhor exploração",text:"Use este story para entender o contrato de props e o story 'Interativo' de Header para validar a barra junto com Barra Estado e Header."},{title:"Comportamento",text:"Os três primeiros atalhos respondem a Alt+1, Alt+2 e Alt+3. Cada item pode declarar uma ação própria ou manter a navegação por href."}],Ge=`<Header
  siteTitle="Governo do Estado do Rio Grande do Sul"
  homeHref="#inicio"
  logoHref="#governo"
  menuItems={headerMenuItems}
/>`,Ue=`<Header
  siteTitle="Governo do Estado do Rio Grande do Sul"
  homeHref="#inicio"
  logoHref="#governo"
  menuItems={headerMenuItems}
  searchPlaceholder="Pesquisar no site"
  searchInputAriaLabel="Campo de busca do site"
  onSearch={(term) => buscarConteudo(term)}
/>`,Ze=`<Header
  siteTitle="Governo do Estado do Rio Grande do Sul"
  homeHref="#inicio"
  logoHref="#governo"
  menuItems={headerMenuItems}
  showScrollTopButton
  scrollTargetId="header-story-main"
/>`,Fe="<BarraEstado />",Qe=`<BarraAcessibilidade
  shortcuts={[
    { title: 'Conteúdo', href: '#conteudo', onActivate: focarConteudo },
    { title: 'Menu', href: '#menu', onActivate: abrirMenu },
    { title: 'Busca', href: '#buscar', onActivate: focarBusca },
  ]}
  hrefAccessibility="/acessibilidade"
  hrefContact="/contato"
  hrefSitemap="/sitemap"
/>`,$e=`<BarraAcessibilidade
  shortcuts={[
    { title: 'Conteúdo', href: '#conteudo' },
    { title: 'Busca', href: '#buscar' },
  ]}
  hrefContact="/contato"
  hrefSitemap="/sitemap"
/>`,We={position:"relative",display:"grid",alignContent:"start",minHeight:430,border:"1px solid var(--govrs-color-border-default, #dbe5f0)",borderRadius:12,overflow:"hidden",background:"var(--govrs-color-surface-base, #ffffff)"},Ke={margin:0,padding:"28px 24px",color:"var(--govrs-color-text-muted, #64748b)",fontSize:14},Ye={display:"grid",gap:10},ca={title:"Navegação/Header",component:S,args:{siteTitle:"Governo do Estado do Rio Grande do Sul",homeHref:"#inicio",logoHref:"#governo",logoAriaLabel:"Governo do Estado do Rio Grande do Sul",menuItems:D,searchPlaceholder:"O que você procura?",searchInputAriaLabel:"Campo de busca do site",searchButtonLabel:"Pesquisar",searchCloseButtonLabel:"Fechar busca",showScrollTopButton:!1,scrollTargetId:"header-story-main"},parameters:{layout:"padded",controls:{expanded:!0,sort:"requiredFirst"}}};function Z({children:a}){return e.jsxs("div",{style:We,children:[a,e.jsx("main",{id:"header-story-main",children:e.jsx("p",{style:Ke,children:"Área de conteúdo usada apenas para demonstrar o encaixe do cabeçalho."})})]})}function g({label:a,children:r}){return e.jsx(_,{label:a,children:e.jsx("div",{style:Ye,children:r})})}function Je(){return e.jsx(Z,{children:e.jsx(S,{siteTitle:"Governo do Estado do Rio Grande do Sul",homeHref:"#inicio",logoHref:"#governo",menuItems:D})})}function K(){const[a,r]=l.useState(null);return e.jsxs(Z,{children:[e.jsx(S,{siteTitle:"Governo do Estado do Rio Grande do Sul",homeHref:"#inicio",logoHref:"#governo",menuItems:D,searchPlaceholder:"Pesquisar no site",searchInputAriaLabel:"Campo de busca do site",onSearch:s=>r(s)}),e.jsxs("p",{style:{...o.statText,padding:"0 24px 24px"},children:[e.jsx("strong",{children:"Última busca:"})," ",a??"Nenhum envio ainda"]})]})}function Xe(){return e.jsx(Z,{children:e.jsx(S,{siteTitle:"Governo do Estado do Rio Grande do Sul",homeHref:"#inicio",logoHref:"#governo",menuItems:D,showScrollTopButton:!0,scrollTargetId:"header-story-main"})})}function ea(a){const[r,s]=l.useState(null),[u,p]=l.useState(0),m=`${String(a.menuOpen)}-${String(a.defaultSearchActive)}`,c=a.barraAcessibilidadeShortcuts??[{title:"Conteúdo",href:"#conteudo"},{title:"Menu",href:"#menu"},{title:"Busca",href:"#buscar"}];return e.jsxs(e.Fragment,{children:[e.jsx(U,{}),e.jsx(M,{shortcuts:c,hrefAccessibility:a.barraAcessibilidadeHrefAccessibility??"/acessibilidade",hrefContact:a.barraAcessibilidadeHrefContact??"/contato",hrefSitemap:a.barraAcessibilidadeHrefSitemap??"/sitemap",disableHighContrastToggle:!0}),e.jsx(S,{...a,onSearch:(n,i)=>{var t;s(n),(t=a.onSearch)==null||t.call(a,n,i)},onScrollTop:()=>{var n;p(i=>i+1),(n=a.onScrollTop)==null||n.call(a)}},m),e.jsxs("div",{style:{display:"grid",gap:12,paddingTop:12},children:[e.jsxs("p",{style:o.statText,children:[e.jsx("strong",{children:"Última busca:"})," ",r??"Nenhum envio ainda"]}),e.jsxs("p",{style:o.statText,children:[e.jsx("strong",{children:"Cliques em voltar ao topo:"})," ",u]})]})]})}const I={name:"Documentação",parameters:{controls:{disable:!0}},render:()=>e.jsxs(R,{children:[e.jsx(G,{eyebrow:"Documentação guiada",title:e.jsx("h3",{style:o.heroTitle,children:"Header"}),description:e.jsx(e.Fragment,{children:"O componente compõe identidade, menu principal, título do site, busca e retorno ao topo em uma estrutura reutilizável de cabeçalho."}),variantTags:Oe,stats:Ne}),e.jsxs(b,{title:"Mapa de props",description:"A API do Header fica mais fácil de entender quando agrupada pelo papel de cada prop: identidade, menu, busca e comportamento de página. O componente recebe dados já resolvidos e coordena MenuHamburger e Search internamente.",children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:20},children:[e.jsxs(g,{label:"Identidade e links",children:[e.jsx("p",{style:o.statText,children:"Essas props definem o bloco institucional visível no topo do cabeçalho."}),e.jsxs("ul",{style:o.list,children:[e.jsxs("li",{children:[e.jsx("code",{children:"siteTitle"})," define o conteúdo clicável exibido como título principal."]}),e.jsxs("li",{children:[e.jsx("code",{children:"homeHref"})," define o destino do link aplicado ao título."]}),e.jsxs("li",{children:[e.jsx("code",{children:"logo"})," substitui o símbolo padrão por qualquer ",e.jsx("code",{children:"ReactNode"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"logoHref"})," define o destino do link aplicado ao símbolo institucional."]}),e.jsxs("li",{children:[e.jsx("code",{children:"logoAriaLabel"})," nomeia o link do logo para tecnologias assistivas."]})]})]}),e.jsxs(g,{label:"Menu integrado",children:[e.jsxs("p",{style:o.statText,children:["O Header repassa configuração e controle para o ",e.jsx("code",{children:"MenuHamburger"})," interno."]}),e.jsxs("ul",{style:o.list,children:[e.jsxs("li",{children:[e.jsx("code",{children:"menuItems"})," recebe a mesma estrutura hierárquica aceita por ",e.jsx("code",{children:"MenuHamburger"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"menuOpen"})," coloca o menu em modo controlado externamente."]}),e.jsxs("li",{children:["O estado do menu pode ser controlado externamente através de ",e.jsx("code",{children:"menuOpen"})," e ",e.jsx("code",{children:"onMenuOpenChange"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"onMenuOpenChange"})," avisa quando o usuário abre ou fecha o menu."]})]})]}),e.jsxs(g,{label:"Busca integrada",children:[e.jsxs("p",{style:o.statText,children:["A busca usa o componente ",e.jsx("code",{children:"Search"})," internamente e expõe tanto props de conteúdo quanto pares controlado/não controlado."]}),e.jsxs("ul",{style:o.list,children:[e.jsxs("li",{children:[e.jsx("code",{children:"searchValue"}),", ",e.jsx("code",{children:"defaultSearchValue"})," e ",e.jsx("code",{children:"onSearchValueChange"})," controlam ou inicializam o texto do campo."]}),e.jsxs("li",{children:[e.jsx("code",{children:"onSearch"})," recebe o valor submetido e o evento de envio do Search interno."]}),e.jsxs("li",{children:[e.jsx("code",{children:"searchActive"}),", ",e.jsx("code",{children:"defaultSearchActive"})," e ",e.jsx("code",{children:"onSearchActiveChange"})," controlam a abertura da busca recolhível em telas compactas."]}),e.jsxs("li",{children:[e.jsx("code",{children:"searchPlaceholder"}),", ",e.jsx("code",{children:"searchInputAriaLabel"}),", ",e.jsx("code",{children:"searchButtonLabel"})," e ",e.jsx("code",{children:"searchCloseButtonLabel"})," ajustam os textos da experiência de busca."]}),e.jsxs("li",{children:['A Search Bar usa por padrão o placeholder "O que você procura?", mas ele pode ser redefinido com a prop ',e.jsx("code",{children:"searchPlaceholder"}),"."]})]})]}),e.jsxs(g,{label:"Página e responsividade",children:[e.jsx("p",{style:o.statText,children:"Essas props ajustam o encaixe do Header no layout e seu comportamento em página longa."}),e.jsxs("ul",{style:o.list,children:[e.jsxs("li",{children:[e.jsx("code",{children:"showScrollTopButton"})," liga ou desliga o botão fixo de retorno ao topo."]}),e.jsxs("li",{children:[e.jsx("code",{children:"scrollTargetId"})," define qual elemento será procurado para rolagem; se ele não existir, a janela volta ao topo."]}),e.jsxs("li",{children:[e.jsx("code",{children:"scrollTopButtonLabel"})," define o nome acessível do botão fixo."]}),e.jsxs("li",{children:[e.jsx("code",{children:"onScrollTop"})," permite sincronizar analytics ou efeitos externos depois do clique."]})]})]})]}),e.jsx(B,{title:"Cabeçalho base",description:"Exemplo de uso recomendado com identidade padrão, links principais e menu integrado sem estados controlados externamente.",code:Ge,notes:["Use menuItems com a mesma estrutura aceita pelo MenuHamburger.","O logo padrão pode ser substituído por qualquer ReactNode via prop logo.","Se menuItems estiver vazio, o acionador do menu não é renderizado."],children:e.jsx(Je,{})})]}),e.jsxs(b,{title:"Menu e busca",description:"Menu e busca são as partes mais sensíveis do contrato porque combinam props visuais com pares controlado/não controlado. Em desktop a busca permanece aberta; abaixo do breakpoint responsivo ela passa a ser recolhível para preservar espaço horizontal e, ao abrir, mantém sua borda direita alinhada ao ícone fechado.",children:[e.jsxs("ul",{style:o.list,children:[e.jsxs("li",{children:[e.jsx("code",{children:"menuOpen"})," com ",e.jsx("code",{children:"onMenuOpenChange"})," coloca o menu em modo controlado."]}),e.jsxs("li",{children:[e.jsx("code",{children:"searchValue"})," com ",e.jsx("code",{children:"onSearchValueChange"})," controla o conteúdo digitado; ",e.jsx("code",{children:"defaultSearchValue"})," apenas define o valor inicial."]}),e.jsxs("li",{children:[e.jsx("code",{children:"searchActive"})," com ",e.jsx("code",{children:"onSearchActiveChange"})," controla a abertura da busca móvel; em desktop essa prop não fecha a busca, porque o Header a mantém visível."]}),e.jsx("li",{children:"O mesmo token CSS é usado pelo Search e pelo MenuHamburger para manter a troca de layout coerente."}),e.jsx("li",{children:"Em mobile, a busca aberta cresce para a esquerda a partir da posição original do ícone e usa no máximo 24,0625rem."})]}),e.jsxs("div",{style:{...o.cardGrid,display:"flex",flexDirection:"column"},children:[e.jsx(_,{label:"Menu aberto",children:e.jsx(Xe,{})}),e.jsx(_,{label:"Busca com callback",children:e.jsx(K,{})})]}),e.jsx(B,{title:"Busca no cabeçalho",description:"O Header repassa rótulos, valor e callback para o Search interno, mas mantém a decisão do que fazer com a busca fora do componente.",code:Ue,notes:["onSearch recebe o termo digitado e o evento de submissão do Search interno.","searchInputAriaLabel, searchButtonLabel e searchCloseButtonLabel ajudam a fechar o contrato de acessibilidade sem depender de texto fixo."],children:e.jsx(K,{})})]}),e.jsx(b,{title:"Retorno ao topo",description:"O botão fixo é opcional e resolve um comportamento de página, não de navegação. Quando ativo, ele tenta localizar o elemento de scrollTargetId; se não encontrar, aplica scroll no topo da janela e ainda chama onScrollTop.",children:e.jsxs("div",{style:o.sandbox,children:[e.jsx("div",{style:o.sandboxHeader,children:e.jsxs("div",{style:{display:"grid",gap:6},children:[e.jsx("strong",{style:{color:"#0f172a",fontSize:16},children:"Botão fixo opcional"}),e.jsxs("div",{style:o.text,children:["Ative ",e.jsx("code",{children:"showScrollTopButton"})," quando o cabeçalho fizer parte de páginas longas que precisam de retorno rápido ao início."]})]})}),e.jsx("div",{style:o.sandboxBody,children:e.jsx("pre",{style:o.codeBlock,children:e.jsx("code",{children:Ze})})}),e.jsxs("ul",{style:o.sandboxNoteList,children:[e.jsx("li",{children:"O alvo padrão é o elemento com id main."}),e.jsx("li",{children:"onScrollTop pode ser usado para sincronizar analytics ou estado visual externo."}),e.jsx("li",{children:"A visualização desse recurso está disponível no story Interativo, pois pelo comportamento absoluto do botão, ele precisa ser renderizado em um contexto real de página para funcionar corretamente."})]})]})}),e.jsxs(b,{title:"Camadas de z-index",description:"Header e Menu Hamburger usam tokens CSS para ficar acima do conteúdo da página e de controles de edição com z-index baixo (~10), sem bloquear overlays globais configuráveis.",children:[e.jsx("div",{style:o.codeBlock,children:e.jsx("pre",{children:e.jsx("code",{children:`conteúdo da página < controles de edição (~10)
< header (10) < navegação aberta (50) < dropdown (60)
< overlay/fade (100+, configurável) < modal (110) < toast (120)`})})}),e.jsxs("ul",{style:o.list,children:[e.jsxs("li",{children:[e.jsx("code",{children:"--govrs-z-index-header"})," (10): barra do header em scroll normal."]}),e.jsxs("li",{children:[e.jsx("code",{children:"--govrs-z-index-navigation"})," (50): painel do menu aberto; o wrapper recebe ",e.jsx("code",{children:'data-menu-open="true"'})," e sobe para esta camada."]}),e.jsxs("li",{children:[e.jsx("code",{children:"--govrs-z-index-dropdown"})," (60): popovers e dropdowns do header (ex.: Select, Tooltip)."]}),e.jsxs("li",{children:[e.jsx("code",{children:"--govrs-z-index-overlay"})," (100): fade/backdrop de tela inteira — sobrescrevível no consumidor."]}),e.jsxs("li",{children:[e.jsx("code",{children:"--govrs-z-index-modal"})," (110) e ",e.jsx("code",{children:"--govrs-z-index-toast"})," (120): modais e notificações acima do overlay."]})]}),e.jsx("div",{style:o.codeBlock,children:e.jsx("pre",{children:e.jsx("code",{children:`:root {
  --govrs-z-index-overlay: 1000;
  --govrs-z-index-modal: 1010;
  --govrs-z-index-toast: 1020;
}

.govrs-overlay-backdrop {
}`})})}),e.jsxs("ul",{style:o.list,children:[e.jsx("li",{children:"Integração com editores de blocos: com o menu aberto, links do painel ficam acima de handles de arrastar que usam z-index ~10."}),e.jsxs("li",{children:["O botão de voltar ao topo usa ",e.jsx("code",{children:"--govrs-z-index-toast"})," para permanecer acessível em páginas longas."]})]})]}),e.jsx(b,{title:"Limites do contrato",description:"O Header resolve a composição visual do topo, mas ainda depende de quem o consome para decidir links, logo customizado e a integração final com o layout da página.",children:e.jsxs("ul",{style:o.list,children:[e.jsxs("li",{children:[e.jsx("code",{children:"logo"})," troca só o conteúdo visual do link do símbolo; o destino e o nome acessível continuam sendo definidos por ",e.jsx("code",{children:"logoHref"})," e ",e.jsx("code",{children:"logoAriaLabel"}),"."]}),e.jsxs("li",{children:["Se você precisar de mais customização estrutural do menu ou da busca, o ponto de extensão tende a estar nos componentes ",e.jsx("code",{children:"MenuHamburger"})," e ",e.jsx("code",{children:"Search"}),", não em variações ad hoc do Header."]})]})})]})},k={name:"Barra Estado",parameters:{controls:{disable:!0}},render:()=>e.jsxs(R,{children:[e.jsx(G,{eyebrow:"Documentação guiada",title:e.jsx("h3",{style:o.heroTitle,children:"Barra Estado"}),description:e.jsx(e.Fragment,{children:"A Barra Estado é a faixa institucional superior com links rápidos e identidade reduzida do governo. O contrato atual é propositalmente enxuto."}),variantTags:Ve,stats:Pe}),e.jsxs(b,{title:"Mapa de props",description:"Hoje a Barra Estado expõe uma API pequena. Isso facilita o uso, mas também significa que boa parte do conteúdo visual permanece fixa para preservar fidelidade ao componente original migrado.",children:[e.jsx("div",{style:o.cardGrid,children:e.jsxs(g,{label:"Conteúdo fixo",children:[e.jsx("p",{style:o.statText,children:"Os links e rótulos da barra são fixos nesta migração para preservar o contrato institucional do componente original."}),e.jsxs("ul",{style:o.list,children:[e.jsx("li",{children:"Não há props para trocar títulos, URLs ou itens do menu."}),e.jsx("li",{children:"Use a Barra Estado como faixa institucional pronta, e não como um menu configurável genérico."})]})]})}),e.jsx(B,{title:"Uso básico",description:"A forma recomendada de consumo é renderizar a barra no topo da página ou acima do Header principal, sem precisar configurar outros dados.",code:Fe,notes:["Os links institucionais fazem parte do contrato visual desta barra e não são montados por props."],children:e.jsx(U,{})})]}),e.jsx(b,{title:"Comportamento responsivo e limites",description:"A Barra Estado resolve uma necessidade bem específica: oferecer navegação institucional rápida sem competir com o Header principal. Ela deve ser tratada como uma faixa pronta, não como uma navegação totalmente customizável.",children:e.jsxs("ul",{style:o.list,children:[e.jsx("li",{children:"Em desktop, os links aparecem distribuídos em linha na própria faixa."}),e.jsxs("li",{children:["Em larguras menores, os itens deixam de ficar todos visíveis ao mesmo tempo e passam a ser acessados pelo menu compacto acionado por ",e.jsx("strong",{children:"•••"}),"."]}),e.jsx("li",{children:"Como o conteúdo é fixo, customizações de negócio devem acontecer na camada de composição da página, não por extensão desta barra."}),e.jsx("li",{children:"O uso mais comum é compor Barra Estado acima de Barra Acessibilidade e Header, como no story Interativo."})]})})]})},z={name:"Barra Acessibilidade",parameters:{controls:{disable:!0}},render:()=>e.jsxs(R,{children:[e.jsx(G,{eyebrow:"Documentação guiada",title:e.jsx("h3",{style:o.heroTitle,children:"Barra Acessibilidade"}),description:e.jsx(e.Fragment,{children:"A Barra Acessibilidade combina atalhos numerados, botão de alto contraste e links auxiliares em uma faixa superior pronta para compor o topo da página."}),variantTags:_e,stats:Re}),e.jsxs(b,{title:"Mapa de props",description:"As props da Barra Acessibilidade se dividem em três grupos: atalhos numerados, estado inicial do alto contraste e rotas auxiliares opcionais.",children:[e.jsxs("div",{style:o.cardGrid,children:[e.jsxs(g,{label:"shortcuts",children:[e.jsx("p",{style:o.statText,children:"Define todos os atalhos numerados exibidos no lado direito da barra."}),e.jsxs("ul",{style:o.list,children:[e.jsxs("li",{children:[e.jsx("code",{children:"shortcuts"})," recebe objetos ",e.jsx("code",{children:"{ title: string; href: string; onActivate?: () => void }"}),"."]}),e.jsx("li",{children:"Alt+1, Alt+2 e Alt+3 acionam respectivamente os três primeiros itens declarados."}),e.jsxs("li",{children:[e.jsx("code",{children:"onActivate"})," substitui o href ao clicar ou usar a tecla de aderência; sem a ação, hashes rolam para um elemento e outras URLs navegam normalmente."]})]})]}),e.jsxs(g,{label:"Links auxiliares",children:[e.jsx("p",{style:o.statText,children:"Os links institucionais extras são independentes entre si e só aparecem quando a prop correspondente é declarada."}),e.jsxs("ul",{style:o.list,children:[e.jsxs("li",{children:[e.jsx("code",{children:"hrefAccessibility"})," renderiza o item de acessibilidade com ícone universal."]}),e.jsxs("li",{children:[e.jsx("code",{children:"hrefContact"})," renderiza o ícone de envelope para contato."]}),e.jsxs("li",{children:[e.jsx("code",{children:"hrefSitemap"})," renderiza o ícone de sitemap."]}),e.jsx("li",{children:"Se uma dessas props não for informada, o item correspondente não aparece."})]})]}),e.jsxs(g,{label:"Alto contraste",children:[e.jsx("p",{style:o.statText,children:"Na aplicação consumidora, o botão alterna o estado global e preserva a preferência. No Storybook, o contraste é controlado pela story."}),e.jsxs("ul",{style:o.list,children:[e.jsxs("li",{children:[e.jsx("code",{children:"defaultHighContrast"})," define o estado inicial quando não há preferência persistida."]}),e.jsxs("li",{children:[e.jsx("code",{children:"disableHighContrastToggle"})," desabilita o botão e impede leitura, gravação e alteração do estado global."]})]})]})]}),e.jsx(B,{title:"Configuração completa",description:"Exemplo recomendado quando a página precisa expor atalhos numerados, contraste e todas as rotas auxiliares da barra.",code:Qe,notes:["Use onActivate quando o atalho precisa abrir, focar ou selecionar elementos controlados pela aplicação.","Alt+4 até Alt+9 não recebem comportamento pela Barra de Acessibilidade.","Na aplicação consumidora, o botão de contraste mantém a preferência do usuário em localStorage para reutilização entre visitas.","Nesta documentação, o botão permanece isolado; use modoContraste na story Interativo para visualizar o tema."],children:e.jsx(M,{disableHighContrastToggle:!0,shortcuts:[{title:"Conteúdo",href:"#conteudo"},{title:"Menu",href:"#menu"},{title:"Busca",href:"#buscar"}],hrefAccessibility:"/acessibilidade",hrefContact:"/contato",hrefSitemap:"/sitemap"})})]}),e.jsxs(b,{title:"Configuração parcial e limites",description:"A barra aceita combinações parciais. Isso significa que você pode esconder links auxiliares ou atalhos simplesmente omitindo props, sem precisar passar valores vazios ou flags extras.",children:[e.jsx(B,{title:"Rotas personalizadas",description:"Exemplo mostrando uma configuração reduzida, com atalhos parciais e apenas parte dos links auxiliares declarada.",code:$e,notes:["Sem shortcuts, a barra deixa de renderizar os atalhos numerados.","Sem hrefAccessibility, hrefContact ou hrefSitemap, o item correspondente não aparece.","Na aplicação consumidora, a barra resolve a interação de alto contraste globalmente; o efeito visual final depende da folha global que estiliza a classe high-contrast.","Para visualizar o contraste no Storybook, abra uma story Interativo e ative o switch modoContraste no painel de Controls. A prévia fica isolada, sem ler ou persistir a preferência no localStorage."],children:e.jsx(M,{disableHighContrastToggle:!0,shortcuts:[{title:"Conteúdo",href:"#conteudo"},{title:"Busca",href:"#buscar"}],hrefContact:"/contato",hrefSitemap:"/sitemap"})}),e.jsxs("ul",{style:o.list,children:[e.jsxs("li",{children:["Use hashes em ",e.jsx("code",{children:"shortcuts"})," quando quiser rolar até partes da mesma página; use URLs absolutas ou relativas quando a navegação precisar sair do contexto atual."]}),e.jsx("li",{children:"A barra não recebe props para customizar ícones ou o texto do botão de contraste; esse contrato permanece fixo para manter consistência institucional."}),e.jsxs("li",{children:["Na aplicação consumidora, o contraste é aplicado globalmente via classe e atributo em ",e.jsx("code",{children:"document.documentElement"}),"; o restante da aplicação precisa conhecer e estilizar esse estado para o efeito visual acontecer."]}),e.jsxs("li",{children:["No Storybook, use o switch ",e.jsx("code",{children:"modoContraste"})," das stories Interativo para conferir fundos pretos, bordas brancas, textos e ícones funcionais brancos, mantendo imagens, vídeos e mapas sem alterações. Esse control atua somente na prévia; a Barra de Acessibilidade fica em modo passivo, sem alterar documento, evento ou localStorage."]})]})]})]})},L={name:"Interativo",parameters:{layout:"fullscreen",controls:{sort:"none",include:["modoContraste","barraAcessibilidadeShortcuts","barraAcessibilidadeHrefAccessibility","barraAcessibilidadeHrefContact","barraAcessibilidadeHrefSitemap","siteTitle","homeHref","logoHref","logoAriaLabel","showScrollTopButton","scrollTargetId","scrollTopButtonLabel","menuItems","menuOpen","onMenuOpenChange","searchValue","defaultSearchValue","defaultSearchActive","searchPlaceholder","searchInputAriaLabel","searchButtonLabel","searchCloseButtonLabel","onSearch","onSearchValueChange","onSearchActiveChange","onScrollTop"]}},argTypes:{modoContraste:{control:"boolean",description:"Visualiza o componente no modo de alto contraste.",table:{category:"Acessibilidade"}},barraAcessibilidadeShortcuts:{control:"object",table:{category:"BarraAcessibilidade"}},barraAcessibilidadeHrefAccessibility:{control:"text",table:{category:"BarraAcessibilidade"}},barraAcessibilidadeHrefContact:{control:"text",table:{category:"BarraAcessibilidade"}},barraAcessibilidadeHrefSitemap:{control:"text",table:{category:"BarraAcessibilidade"}},siteTitle:{control:"text",table:{category:"Header"}},homeHref:{control:"text",table:{category:"Header"}},logoHref:{control:"text",table:{category:"Header"}},logoAriaLabel:{control:"text",table:{category:"Header"}},showScrollTopButton:{control:"boolean",table:{category:"Header"}},scrollTargetId:{control:"text",table:{category:"Header"}},scrollTopButtonLabel:{control:"text",table:{category:"Header"}},onScrollTop:{action:"scroll top",table:{category:"Header"}},menuItems:{control:"object",table:{category:"MenuHamburger"}},menuOpen:{control:"boolean",table:{category:"MenuHamburger"}},onMenuOpenChange:{action:"menu open change",table:{category:"MenuHamburger"}},searchValue:{control:"text",table:{category:"Search"}},defaultSearchValue:{control:"text",table:{category:"Search"}},defaultSearchActive:{control:"boolean",table:{category:"Search"}},searchPlaceholder:{control:"text",table:{category:"Search"}},searchInputAriaLabel:{control:"text",table:{category:"Search"}},searchButtonLabel:{control:"text",table:{category:"Search"}},searchCloseButtonLabel:{control:"text",table:{category:"Search"}},onSearch:{action:"searched",table:{category:"Search"}},onSearchValueChange:{action:"search value change",table:{category:"Search"}},onSearchActiveChange:{action:"search active change",table:{category:"Search"}}},render:a=>e.jsx(ea,{...a})};var Y,J,X;I.parameters={...I.parameters,docs:{...(Y=I.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'Documentação',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <DocsStoryLayout>
      <DocsHero eyebrow="Documentação guiada" title={<h3 style={storyDocsStyles.heroTitle}>Header</h3>} description={<>
            O componente compõe identidade, menu principal, título do site, busca e
            retorno ao topo em uma estrutura reutilizável de cabeçalho.
          </>} variantTags={headerDocsVariantTags} stats={docsHeroStats} />

      <SectionCard title="Mapa de props" description="A API do Header fica mais fácil de entender quando agrupada pelo papel de cada prop: identidade, menu, busca e comportamento de página. O componente recebe dados já resolvidos e coordena MenuHamburger e Search internamente.">
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 20
      }}>
          <PropsCard label="Identidade e links">
            <p style={storyDocsStyles.statText}>
              Essas props definem o bloco institucional visível no topo do cabeçalho.
            </p>

            <ul style={storyDocsStyles.list}>
              <li><code>siteTitle</code> define o conteúdo clicável exibido como título principal.</li>
              <li><code>homeHref</code> define o destino do link aplicado ao título.</li>
              <li><code>logo</code> substitui o símbolo padrão por qualquer <code>ReactNode</code>.</li>
              <li><code>logoHref</code> define o destino do link aplicado ao símbolo institucional.</li>
              <li><code>logoAriaLabel</code> nomeia o link do logo para tecnologias assistivas.</li>
            </ul>
          </PropsCard>

          <PropsCard label="Menu integrado">
            <p style={storyDocsStyles.statText}>
              O Header repassa configuração e controle para o <code>MenuHamburger</code> interno.
            </p>

            <ul style={storyDocsStyles.list}>
              <li><code>menuItems</code> recebe a mesma estrutura hierárquica aceita por <code>MenuHamburger</code>.</li>
              <li><code>menuOpen</code> coloca o menu em modo controlado externamente.</li>
              <li>O estado do menu pode ser controlado externamente através de <code>menuOpen</code> e <code>onMenuOpenChange</code>.</li>
              <li><code>onMenuOpenChange</code> avisa quando o usuário abre ou fecha o menu.</li>
            </ul>
          </PropsCard>

          <PropsCard label="Busca integrada">
            <p style={storyDocsStyles.statText}>
              A busca usa o componente <code>Search</code> internamente e expõe tanto props de conteúdo quanto pares controlado/não controlado.
            </p>

            <ul style={storyDocsStyles.list}>
              <li><code>searchValue</code>, <code>defaultSearchValue</code> e <code>onSearchValueChange</code> controlam ou inicializam o texto do campo.</li>
              <li><code>onSearch</code> recebe o valor submetido e o evento de envio do Search interno.</li>
              <li><code>searchActive</code>, <code>defaultSearchActive</code> e <code>onSearchActiveChange</code> controlam a abertura da busca recolhível em telas compactas.</li>
              <li><code>searchPlaceholder</code>, <code>searchInputAriaLabel</code>, <code>searchButtonLabel</code> e <code>searchCloseButtonLabel</code> ajustam os textos da experiência de busca.</li>
              <li>A Search Bar usa por padrão o placeholder "O que você procura?", mas ele pode ser redefinido com a prop <code>searchPlaceholder</code>.</li>
            </ul>
          </PropsCard>

          <PropsCard label="Página e responsividade">
            <p style={storyDocsStyles.statText}>
              Essas props ajustam o encaixe do Header no layout e seu comportamento em página longa.
            </p>

            <ul style={storyDocsStyles.list}>
              <li><code>showScrollTopButton</code> liga ou desliga o botão fixo de retorno ao topo.</li>
              <li><code>scrollTargetId</code> define qual elemento será procurado para rolagem; se ele não existir, a janela volta ao topo.</li>
              <li><code>scrollTopButtonLabel</code> define o nome acessível do botão fixo.</li>
              <li><code>onScrollTop</code> permite sincronizar analytics ou efeitos externos depois do clique.</li>
            </ul>
          </PropsCard>
        </div>

        <SandboxExample title="Cabeçalho base" description="Exemplo de uso recomendado com identidade padrão, links principais e menu integrado sem estados controlados externamente." code={headerBasicExampleCode} notes={['Use menuItems com a mesma estrutura aceita pelo MenuHamburger.', 'O logo padrão pode ser substituído por qualquer ReactNode via prop logo.', 'Se menuItems estiver vazio, o acionador do menu não é renderizado.']}>
          <HeaderBasePreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="Menu e busca" description="Menu e busca são as partes mais sensíveis do contrato porque combinam props visuais com pares controlado/não controlado. Em desktop a busca permanece aberta; abaixo do breakpoint responsivo ela passa a ser recolhível para preservar espaço horizontal e, ao abrir, mantém sua borda direita alinhada ao ícone fechado.">
        <ul style={storyDocsStyles.list}>
              <li><code>menuOpen</code> com <code>onMenuOpenChange</code> coloca o menu em modo controlado.</li>
          <li><code>searchValue</code> com <code>onSearchValueChange</code> controla o conteúdo digitado; <code>defaultSearchValue</code> apenas define o valor inicial.</li>
          <li><code>searchActive</code> com <code>onSearchActiveChange</code> controla a abertura da busca móvel; em desktop essa prop não fecha a busca, porque o Header a mantém visível.</li>
          <li>O mesmo token CSS é usado pelo Search e pelo MenuHamburger para manter a troca de layout coerente.</li>
          <li>Em mobile, a busca aberta cresce para a esquerda a partir da posição original do ícone e usa no máximo 24,0625rem.</li>
        </ul>

        <div style={{
        ...storyDocsStyles.cardGrid,
        display: 'flex',
        flexDirection: 'column'
      }}>
          <StoryPreviewCard label="Menu aberto">
            <HeaderMenuOpenPreview />
          </StoryPreviewCard>

          <StoryPreviewCard label="Busca com callback">
            <HeaderSearchPreview />
          </StoryPreviewCard>
        </div>

        <SandboxExample title="Busca no cabeçalho" description="O Header repassa rótulos, valor e callback para o Search interno, mas mantém a decisão do que fazer com a busca fora do componente." code={headerSearchExampleCode} notes={['onSearch recebe o termo digitado e o evento de submissão do Search interno.', 'searchInputAriaLabel, searchButtonLabel e searchCloseButtonLabel ajudam a fechar o contrato de acessibilidade sem depender de texto fixo.']}>
          <HeaderSearchPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="Retorno ao topo" description="O botão fixo é opcional e resolve um comportamento de página, não de navegação. Quando ativo, ele tenta localizar o elemento de scrollTargetId; se não encontrar, aplica scroll no topo da janela e ainda chama onScrollTop.">
        <div style={storyDocsStyles.sandbox}>
          <div style={storyDocsStyles.sandboxHeader}>
            <div style={{
            display: 'grid',
            gap: 6
          }}>
              <strong style={{
              color: '#0f172a',
              fontSize: 16
            }}>Botão fixo opcional</strong>
              <div style={storyDocsStyles.text}>
                Ative <code>showScrollTopButton</code> quando o cabeçalho fizer parte de páginas
                longas que precisam de retorno rápido ao início.
              </div>
            </div>
          </div>

          <div style={storyDocsStyles.sandboxBody}>
            <pre style={storyDocsStyles.codeBlock}>
              <code>{headerScrollExampleCode}</code>
            </pre>
          </div>

          <ul style={storyDocsStyles.sandboxNoteList}>
            <li>O alvo padrão é o elemento com id main.</li>
            <li>onScrollTop pode ser usado para sincronizar analytics ou estado visual externo.</li>
            <li>A visualização desse recurso está disponível no story Interativo, pois pelo comportamento absoluto do botão, ele precisa ser renderizado em um contexto real de página para funcionar corretamente.</li>
          </ul>
        </div>
      </SectionCard>

      <SectionCard title="Camadas de z-index" description="Header e Menu Hamburger usam tokens CSS para ficar acima do conteúdo da página e de controles de edição com z-index baixo (~10), sem bloquear overlays globais configuráveis.">
        <div style={storyDocsStyles.codeBlock}>
          <pre>
            <code>{\`conteúdo da página < controles de edição (~10)
< header (10) < navegação aberta (50) < dropdown (60)
< overlay/fade (100+, configurável) < modal (110) < toast (120)\`}</code>
          </pre>
        </div>

        <ul style={storyDocsStyles.list}>
          <li><code>--govrs-z-index-header</code> (10): barra do header em scroll normal.</li>
          <li><code>--govrs-z-index-navigation</code> (50): painel do menu aberto; o wrapper recebe <code>data-menu-open=&quot;true&quot;</code> e sobe para esta camada.</li>
          <li><code>--govrs-z-index-dropdown</code> (60): popovers e dropdowns do header (ex.: Select, Tooltip).</li>
          <li><code>--govrs-z-index-overlay</code> (100): fade/backdrop de tela inteira — sobrescrevível no consumidor.</li>
          <li><code>--govrs-z-index-modal</code> (110) e <code>--govrs-z-index-toast</code> (120): modais e notificações acima do overlay.</li>
        </ul>

        <div style={storyDocsStyles.codeBlock}>
          <pre>
            <code>{\`:root {
  --govrs-z-index-overlay: 1000;
  --govrs-z-index-modal: 1010;
  --govrs-z-index-toast: 1020;
}

.govrs-overlay-backdrop {
}\`}</code>
          </pre>
        </div>

        <ul style={storyDocsStyles.list}>
          <li>Integração com editores de blocos: com o menu aberto, links do painel ficam acima de handles de arrastar que usam z-index ~10.</li>
          <li>O botão de voltar ao topo usa <code>--govrs-z-index-toast</code> para permanecer acessível em páginas longas.</li>
        </ul>
      </SectionCard>

      <SectionCard title="Limites do contrato" description="O Header resolve a composição visual do topo, mas ainda depende de quem o consome para decidir links, logo customizado e a integração final com o layout da página.">
        <ul style={storyDocsStyles.list}>
          <li><code>logo</code> troca só o conteúdo visual do link do símbolo; o destino e o nome acessível continuam sendo definidos por <code>logoHref</code> e <code>logoAriaLabel</code>.</li>
          <li>Se você precisar de mais customização estrutural do menu ou da busca, o ponto de extensão tende a estar nos componentes <code>MenuHamburger</code> e <code>Search</code>, não em variações ad hoc do Header.</li>
        </ul>
      </SectionCard>
    </DocsStoryLayout>
}`,...(X=(J=I.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var ee,ae,oe;k.parameters={...k.parameters,docs:{...(ee=k.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: 'Barra Estado',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <DocsStoryLayout>
      <DocsHero eyebrow="Documentação guiada" title={<h3 style={storyDocsStyles.heroTitle}>Barra Estado</h3>} description={<>
            A Barra Estado é a faixa institucional superior com links rápidos e
            identidade reduzida do governo. O contrato atual é propositalmente enxuto.
          </>} variantTags={barraEstadoDocsVariantTags} stats={barraEstadoDocsHeroStats} />

      <SectionCard title="Mapa de props" description="Hoje a Barra Estado expõe uma API pequena. Isso facilita o uso, mas também significa que boa parte do conteúdo visual permanece fixa para preservar fidelidade ao componente original migrado.">
        <div style={storyDocsStyles.cardGrid}>
          

          <PropsCard label="Conteúdo fixo">
            <p style={storyDocsStyles.statText}>
              Os links e rótulos da barra são fixos nesta migração para preservar o contrato institucional do componente original.
            </p>

            <ul style={storyDocsStyles.list}>
              <li>Não há props para trocar títulos, URLs ou itens do menu.</li>
              <li>Use a Barra Estado como faixa institucional pronta, e não como um menu configurável genérico.</li>
            </ul>
          </PropsCard>
        </div>

        <SandboxExample title="Uso básico" description="A forma recomendada de consumo é renderizar a barra no topo da página ou acima do Header principal, sem precisar configurar outros dados." code={barraEstadoExampleCode} notes={['Os links institucionais fazem parte do contrato visual desta barra e não são montados por props.']}>
          <BarraEstado />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="Comportamento responsivo e limites" description="A Barra Estado resolve uma necessidade bem específica: oferecer navegação institucional rápida sem competir com o Header principal. Ela deve ser tratada como uma faixa pronta, não como uma navegação totalmente customizável.">
        <ul style={storyDocsStyles.list}>
          <li>Em desktop, os links aparecem distribuídos em linha na própria faixa.</li>
          <li>Em larguras menores, os itens deixam de ficar todos visíveis ao mesmo tempo e passam a ser acessados pelo menu compacto acionado por <strong>•••</strong>.</li>
          <li>Como o conteúdo é fixo, customizações de negócio devem acontecer na camada de composição da página, não por extensão desta barra.</li>
          <li>O uso mais comum é compor Barra Estado acima de Barra Acessibilidade e Header, como no story Interativo.</li>
        </ul>
      </SectionCard>
    </DocsStoryLayout>
}`,...(oe=(ae=k.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var re,te,se;z.parameters={...z.parameters,docs:{...(re=z.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: 'Barra Acessibilidade',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <DocsStoryLayout>
      <DocsHero eyebrow="Documentação guiada" title={<h3 style={storyDocsStyles.heroTitle}>Barra Acessibilidade</h3>} description={<>
            A Barra Acessibilidade combina atalhos numerados, botão de alto contraste
            e links auxiliares em uma faixa superior pronta para compor o topo da página.
          </>} variantTags={barraAcessibilidadeDocsVariantTags} stats={barraAcessibilidadeDocsHeroStats} />

      <SectionCard title="Mapa de props" description="As props da Barra Acessibilidade se dividem em três grupos: atalhos numerados, estado inicial do alto contraste e rotas auxiliares opcionais.">
        <div style={storyDocsStyles.cardGrid}>
          <PropsCard label="shortcuts">
            <p style={storyDocsStyles.statText}>
              Define todos os atalhos numerados exibidos no lado direito da barra.
            </p>

            <ul style={storyDocsStyles.list}>
              <li><code>shortcuts</code> recebe objetos <code>{'{ title: string; href: string; onActivate?: () => void }'}</code>.</li>
              <li>Alt+1, Alt+2 e Alt+3 acionam respectivamente os três primeiros itens declarados.</li>
              <li><code>onActivate</code> substitui o href ao clicar ou usar a tecla de aderência; sem a ação, hashes rolam para um elemento e outras URLs navegam normalmente.</li>
            </ul>
          </PropsCard>

          <PropsCard label="Links auxiliares">
            <p style={storyDocsStyles.statText}>
              Os links institucionais extras são independentes entre si e só aparecem quando a prop correspondente é declarada.
            </p>

            <ul style={storyDocsStyles.list}>
              <li><code>hrefAccessibility</code> renderiza o item de acessibilidade com ícone universal.</li>
              <li><code>hrefContact</code> renderiza o ícone de envelope para contato.</li>
              <li><code>hrefSitemap</code> renderiza o ícone de sitemap.</li>
              <li>Se uma dessas props não for informada, o item correspondente não aparece.</li>
            </ul>
          </PropsCard>

          <PropsCard label="Alto contraste">
            <p style={storyDocsStyles.statText}>
              Na aplicação consumidora, o botão alterna o estado global e preserva a preferência. No Storybook, o contraste é controlado pela story.
            </p>

            <ul style={storyDocsStyles.list}>
              <li><code>defaultHighContrast</code> define o estado inicial quando não há preferência persistida.</li>
              <li><code>disableHighContrastToggle</code> desabilita o botão e impede leitura, gravação e alteração do estado global.</li>
            </ul>
          </PropsCard>
        </div>

        <SandboxExample title="Configuração completa" description="Exemplo recomendado quando a página precisa expor atalhos numerados, contraste e todas as rotas auxiliares da barra." code={barraAcessibilidadeExampleCode} notes={['Use onActivate quando o atalho precisa abrir, focar ou selecionar elementos controlados pela aplicação.', 'Alt+4 até Alt+9 não recebem comportamento pela Barra de Acessibilidade.', 'Na aplicação consumidora, o botão de contraste mantém a preferência do usuário em localStorage para reutilização entre visitas.', 'Nesta documentação, o botão permanece isolado; use modoContraste na story Interativo para visualizar o tema.']}>
          <BarraAcessibilidade disableHighContrastToggle shortcuts={[{
          title: 'Conteúdo',
          href: '#conteudo'
        }, {
          title: 'Menu',
          href: '#menu'
        }, {
          title: 'Busca',
          href: '#buscar'
        }]} hrefAccessibility="/acessibilidade" hrefContact="/contato" hrefSitemap="/sitemap" />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="Configuração parcial e limites" description="A barra aceita combinações parciais. Isso significa que você pode esconder links auxiliares ou atalhos simplesmente omitindo props, sem precisar passar valores vazios ou flags extras.">
        <SandboxExample title="Rotas personalizadas" description="Exemplo mostrando uma configuração reduzida, com atalhos parciais e apenas parte dos links auxiliares declarada." code={barraAcessibilidadeRoutesExampleCode} notes={['Sem shortcuts, a barra deixa de renderizar os atalhos numerados.', 'Sem hrefAccessibility, hrefContact ou hrefSitemap, o item correspondente não aparece.', 'Na aplicação consumidora, a barra resolve a interação de alto contraste globalmente; o efeito visual final depende da folha global que estiliza a classe high-contrast.', 'Para visualizar o contraste no Storybook, abra uma story Interativo e ative o switch modoContraste no painel de Controls. A prévia fica isolada, sem ler ou persistir a preferência no localStorage.']}>
          <BarraAcessibilidade disableHighContrastToggle shortcuts={[{
          title: 'Conteúdo',
          href: '#conteudo'
        }, {
          title: 'Busca',
          href: '#buscar'
        }]} hrefContact="/contato" hrefSitemap="/sitemap" />
        </SandboxExample>

        <ul style={storyDocsStyles.list}>
          <li>Use hashes em <code>shortcuts</code> quando quiser rolar até partes da mesma página; use URLs absolutas ou relativas quando a navegação precisar sair do contexto atual.</li>
          <li>A barra não recebe props para customizar ícones ou o texto do botão de contraste; esse contrato permanece fixo para manter consistência institucional.</li>
          <li>Na aplicação consumidora, o contraste é aplicado globalmente via classe e atributo em <code>document.documentElement</code>; o restante da aplicação precisa conhecer e estilizar esse estado para o efeito visual acontecer.</li>
          <li>No Storybook, use o switch <code>modoContraste</code> das stories Interativo para conferir fundos pretos, bordas brancas, textos e ícones funcionais brancos, mantendo imagens, vídeos e mapas sem alterações. Esse control atua somente na prévia; a Barra de Acessibilidade fica em modo passivo, sem alterar documento, evento ou localStorage.</li>
        </ul>
      </SectionCard>
    </DocsStoryLayout>
}`,...(se=(te=z.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var ie,ne,le;L.parameters={...L.parameters,docs:{...(ie=L.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  name: 'Interativo',
  parameters: {
    layout: 'fullscreen',
    controls: {
      sort: 'none',
      include: ['modoContraste', 'barraAcessibilidadeShortcuts', 'barraAcessibilidadeHrefAccessibility', 'barraAcessibilidadeHrefContact', 'barraAcessibilidadeHrefSitemap', 'siteTitle', 'homeHref', 'logoHref', 'logoAriaLabel', 'showScrollTopButton', 'scrollTargetId', 'scrollTopButtonLabel', 'menuItems', 'menuOpen', 'onMenuOpenChange', 'searchValue', 'defaultSearchValue', 'defaultSearchActive', 'searchPlaceholder', 'searchInputAriaLabel', 'searchButtonLabel', 'searchCloseButtonLabel', 'onSearch', 'onSearchValueChange', 'onSearchActiveChange', 'onScrollTop']
    }
  },
  argTypes: {
    modoContraste: {
      control: 'boolean',
      description: 'Visualiza o componente no modo de alto contraste.',
      table: {
        category: 'Acessibilidade'
      }
    },
    // BarraEstado props

    // BarraAcessibilidade props
    barraAcessibilidadeShortcuts: {
      control: 'object',
      table: {
        category: 'BarraAcessibilidade'
      }
    },
    barraAcessibilidadeHrefAccessibility: {
      control: 'text',
      table: {
        category: 'BarraAcessibilidade'
      }
    },
    barraAcessibilidadeHrefContact: {
      control: 'text',
      table: {
        category: 'BarraAcessibilidade'
      }
    },
    barraAcessibilidadeHrefSitemap: {
      control: 'text',
      table: {
        category: 'BarraAcessibilidade'
      }
    },
    // Header props
    siteTitle: {
      control: 'text',
      table: {
        category: 'Header'
      }
    },
    homeHref: {
      control: 'text',
      table: {
        category: 'Header'
      }
    },
    logoHref: {
      control: 'text',
      table: {
        category: 'Header'
      }
    },
    logoAriaLabel: {
      control: 'text',
      table: {
        category: 'Header'
      }
    },
    showScrollTopButton: {
      control: 'boolean',
      table: {
        category: 'Header'
      }
    },
    scrollTargetId: {
      control: 'text',
      table: {
        category: 'Header'
      }
    },
    scrollTopButtonLabel: {
      control: 'text',
      table: {
        category: 'Header'
      }
    },
    onScrollTop: {
      action: 'scroll top',
      table: {
        category: 'Header'
      }
    },
    // MenuHamburger props
    menuItems: {
      control: 'object',
      table: {
        category: 'MenuHamburger'
      }
    },
    menuOpen: {
      control: 'boolean',
      table: {
        category: 'MenuHamburger'
      }
    },
    onMenuOpenChange: {
      action: 'menu open change',
      table: {
        category: 'MenuHamburger'
      }
    },
    // Search props
    searchValue: {
      control: 'text',
      table: {
        category: 'Search'
      }
    },
    defaultSearchValue: {
      control: 'text',
      table: {
        category: 'Search'
      }
    },
    defaultSearchActive: {
      control: 'boolean',
      table: {
        category: 'Search'
      }
    },
    searchPlaceholder: {
      control: 'text',
      table: {
        category: 'Search'
      }
    },
    searchInputAriaLabel: {
      control: 'text',
      table: {
        category: 'Search'
      }
    },
    searchButtonLabel: {
      control: 'text',
      table: {
        category: 'Search'
      }
    },
    searchCloseButtonLabel: {
      control: 'text',
      table: {
        category: 'Search'
      }
    },
    onSearch: {
      action: 'searched',
      table: {
        category: 'Search'
      }
    },
    onSearchValueChange: {
      action: 'search value change',
      table: {
        category: 'Search'
      }
    },
    onSearchActiveChange: {
      action: 'search active change',
      table: {
        category: 'Search'
      }
    }
  } as any,
  render: args => <HeaderInteractivePreview {...args} />
}`,...(le=(ne=L.parameters)==null?void 0:ne.docs)==null?void 0:le.source}}};const da=["HeaderDocumentacao","BarraEstadoDoc","BarraAcessibilidadeDoc","HeaderInterativo"];export{z as BarraAcessibilidadeDoc,k as BarraEstadoDoc,I as HeaderDocumentacao,L as HeaderInterativo,da as __namedExportsOrder,ca as default};
