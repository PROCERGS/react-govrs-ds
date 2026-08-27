import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as g}from"./index-DyTKwKRb.js";import{F as X,x as K,a as N,f as O}from"./index-A9ZUQmzb.js";import{D as Y,S as ee,s as u,a as T,b as k,c as f}from"./storyDocs-CoQtGjOG.js";import{B as ae}from"./Button-DnfRrOli.js";/* empty css              */import"./_commonjsHelpers-Cpj98o6Y.js";function w(...a){return a.filter(Boolean).join(" ")}function Q(a){return a.findIndex(t=>!t.disabled)}function z(a,t=!1){var s;if(!t)return Q(a);for(let c=a.length-1;c>=0;c-=1)if(!((s=a[c])!=null&&s.disabled))return c;return-1}function _(a,t,s){var r;if(!a.length)return-1;let c=t;for(let d=0;d<a.length;d+=1)if(c=(c+s+a.length)%a.length,!((r=a[c])!=null&&r.disabled))return c;return-1}function B(a,t){const s=a.findIndex(c=>c.id===t&&!c.disabled);return s>=0?s:Q(a)}function Z(a,t,s){return a??t??s}function oe(a){const t=Number(a);return Number.isFinite(t)?t>999?"999+":String(t):a!=null?String(a):"0"}function F(a){switch(a){case"offline":return"Offline";case"away":return"Ausente";case"online":default:return"Online"}}function te(){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 28 28","aria-hidden":"true",focusable:"false",children:e.jsx("path",{fill:"currentColor",d:"M16.0625 14L19.1875 17.1562C19.5938 17.5312 19.5938 18.1562 19.1875 18.5312L18.5 19.2188C18.125 19.625 17.5 19.625 17.125 19.2188L14 16.0938L10.8438 19.2188C10.4688 19.625 9.84375 19.625 9.46875 19.2188L8.78125 18.5312C8.375 18.1562 8.375 17.5312 8.78125 17.1562L11.9062 14L8.78125 10.875C8.375 10.5 8.375 9.875 8.78125 9.5L9.46875 8.8125C9.84375 8.40625 10.4688 8.40625 10.8438 8.8125L14 11.9375L17.125 8.8125C17.5 8.40625 18.125 8.40625 18.5 8.8125L19.1875 9.5C19.5938 9.875 19.5938 10.5 19.1875 10.875L16.0625 14Z"})})}function ne(){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 28 32","aria-hidden":"true",focusable:"false",children:e.jsx("path",{fill:"currentColor",d:"M11.4062 21.75L6.21874 16.5625C5.90624 16.25 5.90624 15.7188 6.21874 15.4062L7.34374 14.2812C7.65624 13.9688 8.15624 13.9688 8.46874 14.2812L12 17.7812L19.5 10.2812C19.8125 9.96875 20.3125 9.96875 20.625 10.2812L21.75 11.4062C22.0625 11.7188 22.0625 12.25 21.75 12.5625L12.5625 21.75C12.25 22.0625 11.7187 22.0625 11.4062 21.75Z"})})}function $({Icon:a}){return e.jsx("span",{className:"govrs-tag__icon","aria-hidden":"true",children:e.jsx(X,{icon:a})})}function se({label:a,children:t,disabled:s=!1,showIcon:c=!1,Icon:r,showClose:d=!0,className:h,closeButtonLabel:j="Fechar tag",onClose:x}){const[p,m]=g.useState(!0),v=Z(a,t,"Tag");if(!p)return null;const I=w("govrs-tag","govrs-tag--default",s&&"govrs-tag--disabled",h);return e.jsxs("span",{className:I,"aria-disabled":s||void 0,children:[c&&r&&e.jsx($,{Icon:r}),e.jsx("span",{className:"govrs-tag__label",children:v}),d&&e.jsx("button",{type:"button",className:"govrs-tag__action","aria-label":j,disabled:s,onClick:()=>{s||(m(!1),x==null||x())},children:e.jsx(te,{})})]})}function D({label:a,children:t,disabled:s=!1,showIcon:c=!1,Icon:r,checkIcon:d=!0,checked:h,defaultChecked:j=!1,onChange:x,className:p,role:m,ariaChecked:v,tabIndex:I,onKeyDown:P,onFocus:C,buttonRef:S}){const[G,q]=g.useState(j),o=h!==void 0,i=o?h:G,l=Z(a,t,"Tag persistente");return e.jsxs("button",{ref:S,type:"button",className:w("govrs-tag","govrs-tag--persistent",i&&"govrs-tag--checked",s&&"govrs-tag--disabled",p),disabled:s,tabIndex:I,"aria-pressed":m==="radio"||!d?void 0:i,role:m,"aria-checked":m==="radio"?v:void 0,onKeyDown:P,onFocus:C,onClick:()=>{const b=!i;o||q(b),x==null||x(b)},children:[c&&r&&e.jsx($,{Icon:r}),e.jsx("span",{className:"govrs-tag__label",children:l}),d&&i&&e.jsx("span",{className:"govrs-tag__indicator","aria-hidden":"true",children:e.jsx(ne,{})})]})}function ce({items:a,radio:t=!1,defaultSelected:s=null,selected:c,onChange:r,allowUnselect:d=!0,ariaLabel:h="Grupo de tags",className:j}){const[x,p]=g.useState(s),m=c!==void 0,v=m?c:x,I=g.useRef([]),[P,C]=g.useState(()=>B(a,v));g.useEffect(()=>{I.current=I.current.slice(0,a.length),C(B(a,v))},[a,v]);function S(o){var b,y;if(o===v)return;const i=a.find(A=>A.id===v);i&&((b=i.onChange)==null||b.call(i,!1));const l=a.find(A=>A.id===o);l&&((y=l.onChange)==null||y.call(l,!0)),m||p(o),r==null||r(o)}function G(o){var i;o<0||(C(o),(i=I.current[o])==null||i.focus())}function q(o){return i=>{let l=-1;switch(i.key){case"ArrowRight":case"ArrowDown":l=_(a,o,1);break;case"ArrowLeft":case"ArrowUp":l=_(a,o,-1);break;case"Home":l=z(a);break;case"End":l=z(a,!0);break;default:return}if(l<0||l===o)return;i.preventDefault();const b=a[l];b&&(S(b.id),G(l))}}return t?e.jsx("div",{className:w("govrs-tag-group",j),role:"radiogroup","aria-label":h,"aria-orientation":"horizontal",children:a.map((o,i)=>{const l=o.id===v,b=o.disabled?void 0:i===P?0:-1;return e.jsx(D,{label:o.label,children:o.children,disabled:o.disabled,showIcon:o.showIcon,Icon:o.Icon,checkIcon:o.checkIcon??!0,checked:l,className:o.className,role:"radio",ariaChecked:l,tabIndex:b,onFocus:()=>{C(i)},onKeyDown:q(i),buttonRef:y=>{I.current[i]=y},onChange:y=>{if(!y&&d){S(null);return}y&&S(o.id)}},o.id)})}):e.jsx("div",{className:w("govrs-tag-group",j),role:"group","aria-label":h,children:a.map(o=>e.jsx(D,{label:o.label,children:o.children,disabled:o.disabled,showIcon:o.showIcon,Icon:o.Icon,checkIcon:o.checkIcon,checked:o.checked,defaultChecked:o.defaultChecked,onChange:o.onChange,className:o.className},o.id))})}function re({status:a="online",label:t,showLabel:s=!0,className:c}){const r=t??F(a),d=s&&r!=="",h=typeof r=="string"&&r.length>0?r:F(a);return e.jsxs("span",{className:w("govrs-tag-status",`govrs-tag-status--${a}`,c),"aria-label":h,children:[e.jsx("span",{className:"govrs-tag-status__dot","aria-hidden":"true"}),d&&e.jsx("span",{className:"govrs-tag-status__label",children:r})]})}function ie({count:a,className:t}){const s=oe(a);return e.jsx("span",{className:w("govrs-tag","govrs-tag--count",t),"aria-label":`Contagem ${s}`,children:e.jsx("span",{className:"govrs-tag__label",children:s})})}function n(a){switch(a.variant){case"persistent":return e.jsx(D,{...a});case"persistentGroup":return e.jsx(ce,{...a});case"status":return e.jsx(re,{...a});case"count":return e.jsx(ie,{...a});case"default":default:return e.jsx(se,{...a})}}n.__docgenInfo={description:"",methods:[],displayName:"Tag"};const le=["default","persistent","persistentGroup","status","count"],de=[{title:"Quando usar",text:"Quando a interface precisa rotular, indicar estado, oferecer remoção rápida ou permitir seleção compacta sem expandir a área ocupada por filtros e categorias."},{title:"Melhor exploração",text:"Use o story 'Interativo' para alternar variant, ícone, fechamento, seleção persistente, status e contagem em uma única superfície de teste. A seção 'Guia de props' resume o que cada conjunto de props controla."},{title:"Comportamento",text:"A variante default pode ser dispensada localmente, persistent mantém seleção de forma local ou controlada, persistentGroup funciona como grupo livre ou seleção única, status ignora props de ícone e count permanece apenas visual."}],ue=`<Tag label="Label 1" />
<Tag label="Busca" showIcon Icon={faMagnifyingGlass} />
<Tag label="Label" disabled />
<Tag label="Somente texto" showClose={false} />`,pe=`<Tag variant="persistent" label="Tag 1" />
<Tag variant="persistent" label="Perfil" showIcon Icon={faUser} />
<Tag variant="persistent" label="Tag já ativa" defaultChecked disabled />`,me=`const items = [
  { id: 'tag1', label: 'Tag 1' },
  { id: 'tag2', label: 'Tag 2' },
  { id: 'tag3', label: 'Tag 3', showIcon: true, Icon: faTag },
]

<Tag
  variant="persistentGroup"
  radio
  defaultSelected="tag2"
  items={items}
/>`,he=`<Tag variant="status" status="online" label="Online" />
<Tag variant="status" status="offline" label="Offline" />
<Tag variant="status" status="away" label="Ausente" />
<Tag variant="status" status="online" showLabel={false} />
<Tag variant="status" status="online" showIcon Icon={faMagnifyingGlass} />`,xe=`<Tag variant="count" count={9} />
<Tag variant="count" count={90} />
<Tag variant="count" count={190} />
<Tag variant="count" count={999} />
<Tag variant="count" count={2000} />`,ge=[{id:"tag1",label:"Tag 1"},{id:"tag2",label:"Tag 2"},{id:"tag3",label:"Tag 3",showIcon:!0,Icon:K}],ve=[void 0,"faMagnifyingGlass","faUser","faTag"],be={faMagnifyingGlass:O,faUser:N,faTag:K,undefined:void 0},fe={faMagnifyingGlass:"Pesquisa",faUser:"Usuario",faTag:"Tag"},J={none:null,tag1:"tag1",tag2:"tag2",tag3:"tag3"},De={title:"Feedback/Tag",component:n,args:{variant:"default",label:"Label de exemplo",disabled:!1,showIcon:!1,Icon:void 0,showClose:!0,checkIcon:!0,defaultChecked:!1,radio:!0,allowUnselect:!0,defaultSelected:"tag2",status:"online",showLabel:!0,count:"190"},parameters:{layout:"padded",controls:{expanded:!0,sort:"requiredFirst"}}};function je(){return e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:12,alignItems:"center"},children:[e.jsx(n,{label:"Label 1"}),e.jsx(n,{label:"Busca",showIcon:!0,Icon:O}),e.jsx(n,{label:"Label",disabled:!0}),e.jsx(n,{label:"Somente texto",showClose:!1})]})}function Ie(){return e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:12,alignItems:"center"},children:[e.jsx(n,{variant:"persistent",label:"Tag 1"}),e.jsx(n,{variant:"persistent",label:"Perfil",showIcon:!0,Icon:N}),e.jsx(n,{variant:"persistent",label:"Tag ativa",defaultChecked:!0}),e.jsx(n,{variant:"persistent",label:"Tag desabilitada",defaultChecked:!0,disabled:!0})]})}function ye(){const[a,t]=g.useState("tag2");return e.jsxs("div",{style:{display:"grid",gap:12},children:[e.jsx(n,{variant:"persistentGroup",radio:!0,selected:a,onChange:t,items:ge}),e.jsxs("p",{style:u.statText,children:[e.jsx("strong",{children:"Selecionada:"})," ",a??"Nenhuma"]})]})}function we(){return e.jsxs("div",{style:u.cardGrid,children:[e.jsx(f,{label:"Com rótulo",children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:12,alignItems:"center"},children:[e.jsx(n,{variant:"status",status:"online",label:"Online"}),e.jsx(n,{variant:"status",status:"offline",label:"Offline"}),e.jsx(n,{variant:"status",status:"away",label:"Ausente"})]})}),e.jsx(f,{label:"Somente indicador",children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:12,alignItems:"center"},children:[e.jsx(n,{variant:"status",status:"online",showLabel:!1}),e.jsx(n,{variant:"status",status:"offline",showLabel:!1}),e.jsx(n,{variant:"status",status:"away",showLabel:!1})]})}),e.jsx(f,{label:"Props de ícone ignoradas",children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:12,alignItems:"center"},children:[e.jsx(n,{variant:"status",status:"online",label:"Online",showIcon:!0,Icon:O}),e.jsx(n,{variant:"status",status:"offline",label:"Offline",showIcon:!0,Icon:N})]})})]})}function Ce(){return e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:12,alignItems:"center"},children:[e.jsx(n,{variant:"count",count:9}),e.jsx(n,{variant:"count",count:90}),e.jsx(n,{variant:"count",count:190}),e.jsx(n,{variant:"count",count:999}),e.jsx(n,{variant:"count",count:2e3})]})}function Se(a){return[{id:"tag1",label:a.label||"Tag 1",disabled:a.disabled,showIcon:a.showIcon,Icon:a.Icon,checkIcon:a.checkIcon},{id:"tag2",label:"Tag 2",disabled:a.disabled,showIcon:a.showIcon,Icon:a.Icon,checkIcon:a.checkIcon},{id:"tag3",label:"Tag 3",disabled:a.disabled,showIcon:a.showIcon,Icon:a.Icon,checkIcon:a.checkIcon}]}function Te(a){const[t,s]=g.useState(0),c=J[a.defaultSelected],[r,d]=g.useState(c);g.useEffect(()=>{s(m=>m+1)},[a.variant,a.label,a.disabled,a.showIcon,a.Icon,a.showClose,a.checkIcon,a.defaultChecked,a.status,a.showLabel,a.count]),g.useEffect(()=>{d(c)},[a.variant,a.radio,c]);const h=a.variant==="default"&&a.showClose,j=a.variant==="persistentGroup"&&a.radio,x=a.variant==="status"&&(a.showIcon||a.Icon);let p=null;switch(a.variant){case"persistent":p=e.jsx(n,{variant:"persistent",label:a.label,disabled:a.disabled,showIcon:a.showIcon,Icon:a.Icon,checkIcon:a.checkIcon,defaultChecked:a.defaultChecked},t);break;case"persistentGroup":p=e.jsx(n,{variant:"persistentGroup",items:Se(a),radio:a.radio,allowUnselect:a.allowUnselect,defaultSelected:c,selected:a.radio?r:void 0,onChange:a.radio?d:void 0,ariaLabel:"Grupo interativo de tags"},t);break;case"status":p=e.jsx(n,{variant:"status",status:a.status,label:a.label,showLabel:a.showLabel,showIcon:a.showIcon,Icon:a.Icon},t);break;case"count":p=e.jsx(n,{variant:"count",count:a.count},t);break;case"default":default:p=e.jsx(n,{label:a.label,disabled:a.disabled,showIcon:a.showIcon,Icon:a.Icon,showClose:a.showClose},t);break}return e.jsxs("div",{style:{display:"grid",gap:12,justifyItems:"start"},children:[p,h?e.jsx(ae,{variant:"secondary",size:"small",onClick:()=>s(m=>m+1),children:"Restaurar tag"}):null,j?e.jsxs("p",{style:u.statText,children:[e.jsx("strong",{children:"Selecionada:"})," ",r??"Nenhuma"]}):null,x?e.jsxs("p",{style:u.statText,children:[e.jsx("strong",{children:"Observação:"})," a variante status ignora ",e.jsx("code",{children:"showIcon"})," e ",e.jsx("code",{children:"Icon"}),"."]}):null]})}const E={name:"Documentação",parameters:{controls:{disable:!0}},render:()=>e.jsxs(Y,{children:[e.jsx(ee,{eyebrow:"Documentação guiada",title:e.jsx("h3",{style:u.heroTitle,children:"Tag"}),description:e.jsxs(e.Fragment,{children:["O componente ",e.jsx("code",{children:"Tag"})," reúne elementos compactos para interação rápida, seleção persistente, status, suporte opcional a ícones e contagem curta."]}),variantTags:le,stats:de}),e.jsx(T,{title:"Interação compacta",description:"A variação default cobre tags dispensáveis e também a leitura estática quando o botão de fechamento é ocultado. Ela mantém a ideia visual da origem, mas agora encaixada no contrato tipado do design system atual.",children:e.jsx(k,{title:"Dispensável e texto simples",description:"As tags abaixo cobrem os cenários de remoção rápida, ocultação do ícone e versão puramente textual.",code:ue,notes:["showClose remove apenas a instância renderizada localmente.","showIcon decide se quer se mostrar um ícone na tag, vem false por padrão.","O ícone só aparece quando showIcon=true e a prop Icon recebe um ícone válido."],children:e.jsx(je,{})})}),e.jsx(T,{title:"Guia de props",description:"As props do Tag mudam de peso conforme a variante ativa. O resumo abaixo separa o que é compartilhado pelas tags interativas e o que é específico de cada família para reduzir combinações confusas no consumo.",children:e.jsxs("div",{style:{...u.cardGrid,alignItems:"start"},children:[e.jsx(f,{label:"Base interativa",children:e.jsxs("ul",{style:u.list,children:[e.jsxs("li",{children:[e.jsx("code",{children:"label"})," define o conteúdo textual principal exibido pela tag."]}),e.jsxs("li",{children:[e.jsx("code",{children:"children"})," pode substituir ",e.jsx("code",{children:"label"})," quando o conteúdo precisar de marcação React adicional."]}),e.jsxs("li",{children:[e.jsx("code",{children:"disabled"})," bloqueia clique, fechamento e alternância nas variantes interativas."]}),e.jsxs("li",{children:[e.jsx("code",{children:"showIcon"})," habilita a área de ícone, mas não renderiza nada sozinho."]}),e.jsxs("li",{children:[e.jsx("code",{children:"Icon"})," informa qual ícone do Font Awesome deve aparecer quando ",e.jsx("code",{children:"showIcon"})," estiver ativo."]})]})}),e.jsx(f,{label:"Default",children:e.jsxs("ul",{style:u.list,children:[e.jsxs("li",{children:[e.jsx("code",{children:"showClose"})," adiciona o botão de remoção local e torna a tag dispensável."]}),e.jsxs("li",{children:[e.jsx("code",{children:"closeButtonLabel"})," ajusta o rótulo acessível do botão de fechar."]}),e.jsxs("li",{children:[e.jsx("code",{children:"onClose"})," permite reagir ao fechamento local com analytics, estado externo ou telemetria."]})]})}),e.jsx(f,{label:"Persistent",children:e.jsxs("ul",{style:u.list,children:[e.jsxs("li",{children:[e.jsx("code",{children:"checkIcon"})," controla a presença do marcador visual de seleção."]}),e.jsxs("li",{children:[e.jsx("code",{children:"defaultChecked"})," define o estado inicial em uso não controlado."]}),e.jsxs("li",{children:[e.jsx("code",{children:"checked"})," e ",e.jsx("code",{children:"onChange"})," permitem transformar a tag em um componente controlado."]}),e.jsx("li",{children:"Essa variante funciona como toggle compacto e preserva a mesma base visual da tag interativa comum."})]})}),e.jsx(f,{label:"PersistentGroup",children:e.jsxs("ul",{style:u.list,children:[e.jsxs("li",{children:[e.jsx("code",{children:"items"})," recebe a lista de tags do grupo. Cada item aceita ",e.jsx("code",{children:"id"}),", ",e.jsx("code",{children:"label"}),", ",e.jsx("code",{children:"children"}),", ",e.jsx("code",{children:"disabled"}),", ",e.jsx("code",{children:"showIcon"}),", ",e.jsx("code",{children:"Icon"}),", ",e.jsx("code",{children:"checkIcon"}),", ",e.jsx("code",{children:"checked"}),", ",e.jsx("code",{children:"defaultChecked"}),", ",e.jsx("code",{children:"onChange"})," e ",e.jsx("code",{children:"className"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"radio"})," troca entre seleção única e renderização livre do grupo."]}),e.jsxs("li",{children:[e.jsx("code",{children:"defaultSelected"})," define qual item começa ativo em modo radio."]}),e.jsxs("li",{children:[e.jsx("code",{children:"selected"})," e ",e.jsx("code",{children:"onChange"})," permitem controle externo da seleção do grupo."]}),e.jsxs("li",{children:["Sem ",e.jsx("code",{children:"radio"}),", cada item pode continuar controlado individualmente pelo próprio conjunto ",e.jsx("code",{children:"checked"})," e ",e.jsx("code",{children:"onChange"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"allowUnselect"})," decide se o item ativo pode ser desmarcado ao receber um novo clique."]}),e.jsxs("li",{children:[e.jsx("code",{children:"ariaLabel"})," ajusta a descrição acessível do agrupamento."]})]})}),e.jsx(f,{label:"Status",children:e.jsxs("ul",{style:u.list,children:[e.jsxs("li",{children:[e.jsx("code",{children:"status"})," escolhe o indicador visual entre ",e.jsx("code",{children:"online"}),", ",e.jsx("code",{children:"offline"})," e ",e.jsx("code",{children:"away"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"label"})," controla o texto ao lado do indicador."]}),e.jsxs("li",{children:[e.jsx("code",{children:"showLabel"})," permite mostrar apenas o ponto de status quando necessário."]}),e.jsxs("li",{children:[e.jsx("code",{children:"showIcon"})," e ",e.jsx("code",{children:"Icon"})," são ignorados nessa variante para manter a anatomia de status estável."]})]})}),e.jsx(f,{label:"Count",children:e.jsxs("ul",{style:u.list,children:[e.jsxs("li",{children:[e.jsx("code",{children:"count"})," aceita número ou string para a contagem exibida."]}),e.jsxs("li",{children:["Valores numéricos acima de ",e.jsx("code",{children:"999"})," são truncados visualmente para ",e.jsx("code",{children:"999+"}),"."]}),e.jsx("li",{children:"Essa variante é puramente visual e não expõe comportamento de clique ou alternância."})]})})]})}),e.jsxs(T,{title:"Persistência e grupo",description:"As variantes persistent e persistentGroup cobrem seleção individual, agrupamento livre e seleção única, mantendo a semântica do componente de origem sem depender de subcomponentes externos ao arquivo principal.",children:[e.jsx(k,{title:"Tag persistente",description:e.jsxs(e.Fragment,{children:["A tag persistente se comporta como um toggle compacto, com suporte a estado interno, controle externo e ícone de confirmação. O conjunto ",e.jsx("code",{children:"checked"}),", ",e.jsx("code",{children:"defaultChecked"}),","," ",e.jsx("code",{children:"checkIcon"})," e ",e.jsx("code",{children:"onChange"})," concentra o contrato principal dessa variação."]}),code:pe,children:e.jsx(Ie,{})}),e.jsx(k,{title:"Grupo persistente",description:e.jsxs(e.Fragment,{children:["A API recebe uma lista de itens tipados em vez de children soltos, o que aproxima a implementação do padrão do projeto atual. Em modo livre, cada item pode usar ",e.jsx("code",{children:"checked"}),","," ",e.jsx("code",{children:"defaultChecked"}),", ",e.jsx("code",{children:"onChange"})," e ",e.jsx("code",{children:"className"}),"; com ",e.jsx("code",{children:"radio"}),", props como"," ",e.jsx("code",{children:"defaultSelected"}),", ",e.jsx("code",{children:"selected"})," e ",e.jsx("code",{children:"allowUnselect"})," controlam a seleção única."]}),code:me,children:e.jsx(ye,{})})]}),e.jsxs(T,{title:"Status e contagem",description:"As variantes não interativas preservam os cenários do catálogo original para indicador de presença e contagem compacta. O ícone continua sendo um refinamento das tags interativas e não cria uma variante separada no componente.",children:[e.jsx(k,{title:"Status",description:e.jsxs(e.Fragment,{children:["Indicadores de status aceitam rótulo textual ou apenas a superfície circular. A combinação entre"," ",e.jsx("code",{children:"status"}),", ",e.jsx("code",{children:"label"})," e ",e.jsx("code",{children:"showLabel"})," cobre toda a variação visual; mesmo com"," ",e.jsx("code",{children:"showIcon"})," e ",e.jsx("code",{children:"Icon"})," informados, a renderização de status não muda."]}),code:he,children:e.jsx(we,{})}),e.jsx(k,{title:"Contagem",description:e.jsxs(e.Fragment,{children:["A variante count limita valores numéricos acima de 999 para manter a largura estável. Na prática, a prop ",e.jsx("code",{children:"count"})," é o único ponto de configuração relevante dessa anatomia."]}),code:xe,children:e.jsx(Ce,{})})]}),e.jsx(T,{title:"Limites de uso",description:"Tag funciona melhor com textos curtos e seleção compacta. Para mensagens longas ou feedback estruturado, Alerts e Badges continuam sendo escolhas mais apropriadas no catálogo atual.",children:e.jsxs("ul",{style:u.list,children:[e.jsxs("li",{children:[e.jsx("code",{children:"default"})," e ",e.jsx("code",{children:"persistent"})," compartilham base visual, mas só ",e.jsx("code",{children:"persistent"})," representa estado selecionável."]}),e.jsxs("li",{children:[e.jsx("code",{children:"persistentGroup"})," usa ",e.jsx("code",{children:"items"})," para manter a API explícita e mais alinhada aos outros componentes do projeto."]}),e.jsxs("li",{children:[e.jsx("code",{children:"showIcon"})," e ",e.jsx("code",{children:"Icon"})," refinam apenas as tags interativas; em ",e.jsx("code",{children:"status"})," essas props são ignoradas."]}),e.jsxs("li",{children:[e.jsx("code",{children:"status"})," e ",e.jsx("code",{children:"count"})," são variantes visuais e não oferecem clique."]}),e.jsxs("li",{children:["Se a interface precisar apenas de um rótulo sem interação e com semântica de feedback, ",e.jsx("code",{children:"Badges"})," tende a comunicar melhor a intenção."]})]})})]})},L={name:"Interativo",argTypes:{modoContraste:{control:"boolean",description:"Visualiza o componente no modo de alto contraste.",table:{category:"Acessibilidade"}},variant:{control:{type:"radio"},options:["default","persistent","persistentGroup","status","count"],description:"Seleciona a anatomia principal do componente.",table:{category:"Variante"}},label:{control:"text",description:"Texto principal da tag. Em persistentGroup, alimenta o primeiro item do conjunto.",table:{category:"Conteúdo"}},disabled:{control:"boolean",description:"Desabilita a interação nas variantes clicáveis e nos itens do grupo persistente.",table:{category:"Estado"}},showIcon:{control:"boolean",description:"Ativa a área de ícone nas variantes interativas, mas só renderiza algo quando a prop Icon também for informada.",table:{category:"Estrutura"}},Icon:{control:{type:"select"},options:ve,mapping:be,labels:fe,description:"Escolhe o ícone exibido. Sem showIcon=true, esta prop não gera renderização visual.",table:{category:"Estrutura"}},showClose:{control:"boolean",description:"Exibe o botão de remoção local. Só tem efeito na variante default.",table:{category:"Estrutura"}},checkIcon:{control:"boolean",description:"Exibe o ícone de confirmação nas variantes persistent e persistentGroup.",table:{category:"Estrutura"}},defaultChecked:{control:"boolean",description:"Define o estado inicial da seleção na variante persistent.",table:{category:"Estado"}},radio:{control:"boolean",description:"Ativa o comportamento de seleção única na variante persistentGroup.",table:{category:"Comportamento"}},allowUnselect:{control:"boolean",description:"Permite limpar a seleção ao clicar novamente no item ativo no grupo persistente.",table:{category:"Comportamento"}},defaultSelected:{control:{type:"select"},options:Object.keys(J),labels:{none:"Nenhuma",tag1:"Tag 1",tag2:"Tag 2",tag3:"Tag 3"},description:"Seleciona o item inicial quando a variante persistentGroup estiver em modo radio.",table:{category:"Estado"}},status:{control:{type:"radio"},options:["online","offline","away"],description:"Escolhe o estado visual quando a variante status estiver ativa.",table:{category:"Estado"}},showLabel:{control:"boolean",description:"Mostra ou oculta o rótulo textual na variante status.",table:{category:"Estrutura"}},count:{control:"text",description:"Valor exibido na variante count. Valores acima de 999 viram 999+.",table:{category:"Conteúdo"}}},render:a=>e.jsx(Te,{...a})};var U,V,M;E.parameters={...E.parameters,docs:{...(U=E.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Documentação',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <DocsStoryLayout>
      <DocsHero eyebrow="Documentação guiada" title={<h3 style={storyDocsStyles.heroTitle}>Tag</h3>} description={<>
            O componente <code>Tag</code> reúne elementos compactos para interação rápida,
            seleção persistente, status, suporte opcional a ícones e contagem curta.
          </>} variantTags={docsVariantTags} stats={docsHeroStats} />

      <SectionCard title="Interação compacta" description="A variação default cobre tags dispensáveis e também a leitura estática quando o botão de fechamento é ocultado. Ela mantém a ideia visual da origem, mas agora encaixada no contrato tipado do design system atual.">
        <SandboxExample title="Dispensável e texto simples" description="As tags abaixo cobrem os cenários de remoção rápida, ocultação do ícone e versão puramente textual." code={interactionExampleCode} notes={['showClose remove apenas a instância renderizada localmente.', 'showIcon decide se quer se mostrar um ícone na tag, vem false por padrão.', 'O ícone só aparece quando showIcon=true e a prop Icon recebe um ícone válido.']}>
          <InteractionPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="Guia de props" description="As props do Tag mudam de peso conforme a variante ativa. O resumo abaixo separa o que é compartilhado pelas tags interativas e o que é específico de cada família para reduzir combinações confusas no consumo.">
        <div style={{
        ...storyDocsStyles.cardGrid,
        alignItems: 'start'
      }}>
          <StoryPreviewCard label="Base interativa">
            <ul style={storyDocsStyles.list}>
              <li><code>label</code> define o conteúdo textual principal exibido pela tag.</li>
              <li><code>children</code> pode substituir <code>label</code> quando o conteúdo precisar de marcação React adicional.</li>
              <li><code>disabled</code> bloqueia clique, fechamento e alternância nas variantes interativas.</li>
              <li><code>showIcon</code> habilita a área de ícone, mas não renderiza nada sozinho.</li>
              <li><code>Icon</code> informa qual ícone do Font Awesome deve aparecer quando <code>showIcon</code> estiver ativo.</li>
            </ul>
          </StoryPreviewCard>

          <StoryPreviewCard label="Default">
            <ul style={storyDocsStyles.list}>
              <li><code>showClose</code> adiciona o botão de remoção local e torna a tag dispensável.</li>
              <li><code>closeButtonLabel</code> ajusta o rótulo acessível do botão de fechar.</li>
              <li><code>onClose</code> permite reagir ao fechamento local com analytics, estado externo ou telemetria.</li>
            </ul>
          </StoryPreviewCard>

          <StoryPreviewCard label="Persistent">
            <ul style={storyDocsStyles.list}>
              <li><code>checkIcon</code> controla a presença do marcador visual de seleção.</li>
              <li><code>defaultChecked</code> define o estado inicial em uso não controlado.</li>
              <li><code>checked</code> e <code>onChange</code> permitem transformar a tag em um componente controlado.</li>
              <li>Essa variante funciona como toggle compacto e preserva a mesma base visual da tag interativa comum.</li>
            </ul>
          </StoryPreviewCard>

          <StoryPreviewCard label="PersistentGroup">
            <ul style={storyDocsStyles.list}>
              <li><code>items</code> recebe a lista de tags do grupo. Cada item aceita <code>id</code>, <code>label</code>, <code>children</code>, <code>disabled</code>, <code>showIcon</code>, <code>Icon</code>, <code>checkIcon</code>, <code>checked</code>, <code>defaultChecked</code>, <code>onChange</code> e <code>className</code>.</li>
              <li><code>radio</code> troca entre seleção única e renderização livre do grupo.</li>
              <li><code>defaultSelected</code> define qual item começa ativo em modo radio.</li>
              <li><code>selected</code> e <code>onChange</code> permitem controle externo da seleção do grupo.</li>
              <li>Sem <code>radio</code>, cada item pode continuar controlado individualmente pelo próprio conjunto <code>checked</code> e <code>onChange</code>.</li>
              <li><code>allowUnselect</code> decide se o item ativo pode ser desmarcado ao receber um novo clique.</li>
              <li><code>ariaLabel</code> ajusta a descrição acessível do agrupamento.</li>
            </ul>
          </StoryPreviewCard>

          <StoryPreviewCard label="Status">
            <ul style={storyDocsStyles.list}>
              <li><code>status</code> escolhe o indicador visual entre <code>online</code>, <code>offline</code> e <code>away</code>.</li>
              <li><code>label</code> controla o texto ao lado do indicador.</li>
              <li><code>showLabel</code> permite mostrar apenas o ponto de status quando necessário.</li>
              <li><code>showIcon</code> e <code>Icon</code> são ignorados nessa variante para manter a anatomia de status estável.</li>
            </ul>
          </StoryPreviewCard>

          <StoryPreviewCard label="Count">
            <ul style={storyDocsStyles.list}>
              <li><code>count</code> aceita número ou string para a contagem exibida.</li>
              <li>Valores numéricos acima de <code>999</code> são truncados visualmente para <code>999+</code>.</li>
              <li>Essa variante é puramente visual e não expõe comportamento de clique ou alternância.</li>
            </ul>
          </StoryPreviewCard>
        </div>
      </SectionCard>

      <SectionCard title="Persistência e grupo" description="As variantes persistent e persistentGroup cobrem seleção individual, agrupamento livre e seleção única, mantendo a semântica do componente de origem sem depender de subcomponentes externos ao arquivo principal.">
        <SandboxExample title="Tag persistente" description={<>
              A tag persistente se comporta como um toggle compacto, com suporte a estado interno,
              controle externo e ícone de confirmação. O conjunto <code>checked</code>, <code>defaultChecked</code>,{' '}
              <code>checkIcon</code> e <code>onChange</code> concentra o contrato principal dessa variação.
            </>} code={persistentExampleCode}>
          <PersistentPreview />
        </SandboxExample>

        <SandboxExample title="Grupo persistente" description={<>
              A API recebe uma lista de itens tipados em vez de children soltos, o que aproxima a implementação
              do padrão do projeto atual. Em modo livre, cada item pode usar <code>checked</code>,{' '}
              <code>defaultChecked</code>, <code>onChange</code> e <code>className</code>; com <code>radio</code>, props como{' '}
              <code>defaultSelected</code>, <code>selected</code> e <code>allowUnselect</code> controlam a seleção única.
            </>} code={groupExampleCode}>
          <PersistentGroupPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="Status e contagem" description="As variantes não interativas preservam os cenários do catálogo original para indicador de presença e contagem compacta. O ícone continua sendo um refinamento das tags interativas e não cria uma variante separada no componente.">
        <SandboxExample title="Status" description={<>
              Indicadores de status aceitam rótulo textual ou apenas a superfície circular. A combinação entre{' '}
              <code>status</code>, <code>label</code> e <code>showLabel</code> cobre toda a variação visual; mesmo com{' '}
              <code>showIcon</code> e <code>Icon</code> informados, a renderização de status não muda.
            </>} code={statusExampleCode}>
          <StatusPreview />
        </SandboxExample>

        <SandboxExample title="Contagem" description={<>
              A variante count limita valores numéricos acima de 999 para manter a largura estável. Na prática,
              a prop <code>count</code> é o único ponto de configuração relevante dessa anatomia.
            </>} code={countExampleCode}>
          <CountPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="Limites de uso" description="Tag funciona melhor com textos curtos e seleção compacta. Para mensagens longas ou feedback estruturado, Alerts e Badges continuam sendo escolhas mais apropriadas no catálogo atual.">
        <ul style={storyDocsStyles.list}>
          <li><code>default</code> e <code>persistent</code> compartilham base visual, mas só <code>persistent</code> representa estado selecionável.</li>
          <li><code>persistentGroup</code> usa <code>items</code> para manter a API explícita e mais alinhada aos outros componentes do projeto.</li>
          <li><code>showIcon</code> e <code>Icon</code> refinam apenas as tags interativas; em <code>status</code> essas props são ignoradas.</li>
          <li><code>status</code> e <code>count</code> são variantes visuais e não oferecem clique.</li>
          <li>Se a interface precisar apenas de um rótulo sem interação e com semântica de feedback, <code>Badges</code> tende a comunicar melhor a intenção.</li>
        </ul>
      </SectionCard>
    </DocsStoryLayout>
}`,...(M=(V=E.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};var R,W,H;L.parameters={...L.parameters,docs:{...(R=L.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Interativo',
  argTypes: {
    modoContraste: {
      control: 'boolean',
      description: 'Visualiza o componente no modo de alto contraste.',
      table: {
        category: 'Acessibilidade'
      }
    },
    variant: {
      control: {
        type: 'radio'
      },
      options: ['default', 'persistent', 'persistentGroup', 'status', 'count'],
      description: 'Seleciona a anatomia principal do componente.',
      table: {
        category: 'Variante'
      }
    },
    label: {
      control: 'text',
      description: 'Texto principal da tag. Em persistentGroup, alimenta o primeiro item do conjunto.',
      table: {
        category: 'Conteúdo'
      }
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita a interação nas variantes clicáveis e nos itens do grupo persistente.',
      table: {
        category: 'Estado'
      }
    },
    showIcon: {
      control: 'boolean',
      description: 'Ativa a área de ícone nas variantes interativas, mas só renderiza algo quando a prop Icon também for informada.',
      table: {
        category: 'Estrutura'
      }
    },
    Icon: {
      control: {
        type: 'select'
      },
      options: interactiveIconOptions,
      mapping: interactiveIconMapping,
      labels: interactiveIconLabels,
      description: 'Escolhe o ícone exibido. Sem showIcon=true, esta prop não gera renderização visual.',
      table: {
        category: 'Estrutura'
      }
    },
    showClose: {
      control: 'boolean',
      description: 'Exibe o botão de remoção local. Só tem efeito na variante default.',
      table: {
        category: 'Estrutura'
      }
    },
    checkIcon: {
      control: 'boolean',
      description: 'Exibe o ícone de confirmação nas variantes persistent e persistentGroup.',
      table: {
        category: 'Estrutura'
      }
    },
    defaultChecked: {
      control: 'boolean',
      description: 'Define o estado inicial da seleção na variante persistent.',
      table: {
        category: 'Estado'
      }
    },
    radio: {
      control: 'boolean',
      description: 'Ativa o comportamento de seleção única na variante persistentGroup.',
      table: {
        category: 'Comportamento'
      }
    },
    allowUnselect: {
      control: 'boolean',
      description: 'Permite limpar a seleção ao clicar novamente no item ativo no grupo persistente.',
      table: {
        category: 'Comportamento'
      }
    },
    defaultSelected: {
      control: {
        type: 'select'
      },
      options: Object.keys(interactiveDefaultSelectedMapping),
      labels: {
        none: 'Nenhuma',
        tag1: 'Tag 1',
        tag2: 'Tag 2',
        tag3: 'Tag 3'
      },
      description: 'Seleciona o item inicial quando a variante persistentGroup estiver em modo radio.',
      table: {
        category: 'Estado'
      }
    },
    status: {
      control: {
        type: 'radio'
      },
      options: ['online', 'offline', 'away'],
      description: 'Escolhe o estado visual quando a variante status estiver ativa.',
      table: {
        category: 'Estado'
      }
    },
    showLabel: {
      control: 'boolean',
      description: 'Mostra ou oculta o rótulo textual na variante status.',
      table: {
        category: 'Estrutura'
      }
    },
    count: {
      control: 'text',
      description: 'Valor exibido na variante count. Valores acima de 999 viram 999+.',
      table: {
        category: 'Conteúdo'
      }
    }
  },
  render: args => <TagInteractiveCanvas {...args as TagInteractiveArgs} />
}`,...(H=(W=L.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};const Ne=["TagDocumentacao","TagInterativo"];export{E as TagDocumentacao,L as TagInterativo,Ne as __namedExportsOrder,De as default};
