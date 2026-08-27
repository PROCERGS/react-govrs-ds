import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as m}from"./index-DyTKwKRb.js";import{F as M,c as x,g as le,d as Y,p as Z,v as ee,w as oe}from"./index-A9ZUQmzb.js";import{D as de,S as ce,s as n,a as _,c,b as r}from"./storyDocs-CoQtGjOG.js";import{B as me}from"./Button-DnfRrOli.js";import{T as O}from"./Tab-DwzPEIKy.js";/* empty css              */import"./_commonjsHelpers-Cpj98o6Y.js";function i({buttonLabel:t="Notificações",useBellIcon:y=!0,buttonVariant:j="secondary",buttonSize:b="medium",tabs:v,iconPosition:h,showUserArea:C=!0,user:s,onClose:A,showCloseButton:w=!0,onNotificationClick:T,className:te}){const E=v&&v.length>0?v:[],[f,U]=m.useState(!1),[ie,se]=m.useState("left"),R=m.useRef(null),B=m.useRef(null),D=m.useRef(null),q=m.useId(),ne=()=>{U(o=>!o)},P=()=>{U(!1),A==null||A()};m.useEffect(()=>{if(!f)return;function o(d){var p;const a=d.target;a instanceof Node&&((p=R.current)!=null&&p.contains(a)||P())}function u(d){d.key==="Escape"&&P()}return document.addEventListener("mousedown",o),document.addEventListener("touchstart",o),document.addEventListener("keydown",u),()=>{document.removeEventListener("mousedown",o),document.removeEventListener("touchstart",o),document.removeEventListener("keydown",u)}},[f]),m.useEffect(()=>{if(!f)return;function o(){var H,k;const u=(H=B.current)==null?void 0:H.getBoundingClientRect(),d=(k=D.current)==null?void 0:k.getBoundingClientRect();if(!u||!d)return;const a=window.innerWidth,re=u.left+d.width>a-16;se(re?"right":"left")}return o(),window.addEventListener("resize",o),()=>{window.removeEventListener("resize",o)}},[f]);const L=o=>{T==null||T(o)},I=C&&!!s,z=E.length>1,V=w&&!I&&!z;return e.jsxs("div",{ref:R,className:`govrs-notification ${te||""}`,children:[e.jsx("div",{ref:B,children:e.jsxs(me,{variant:j,size:b,circle:!t,onClick:ne,"aria-expanded":f,"aria-controls":q,"aria-label":typeof t=="string"?t:"Abrir notificações",children:[y&&e.jsx(M,{icon:x,style:t?{marginRight:"0.5rem"}:void 0}),t]})}),f&&e.jsx("div",{id:q,ref:D,className:`govrs-notification__modal govrs-notification__modal--${ie}`,role:"dialog","aria-label":"Notificações","aria-modal":"false",children:e.jsxs("div",{className:"govrs-notification__container",children:[w&&e.jsx("button",{type:"button",className:"govrs-notification__close-button",onClick:P,"aria-label":"Fechar notificações",children:e.jsx(M,{icon:le})}),I&&e.jsx("div",{className:["govrs-notification__user-area",w?"govrs-notification__user-area--with-close":""].filter(Boolean).join(" "),children:e.jsxs("div",{className:"govrs-notification__user-info",children:[(s==null?void 0:s.name)&&e.jsx("p",{className:"govrs-notification__user-name",children:s==null?void 0:s.name}),(s==null?void 0:s.email)&&e.jsx("p",{className:"govrs-notification__user-email",children:s==null?void 0:s.email})]})}),E.length>0?e.jsx(O,{ariaLabel:"Categorias de notificações",hideTabList:!z,iconPosition:h,className:["govrs-notification__tabs",z&&w&&!I?"govrs-notification__tabs--with-close":""].filter(Boolean).join(" "),children:E.map(o=>{const u=["govrs-notification__content",V?"govrs-notification__content--with-close":""].filter(Boolean).join(" "),d=e.jsx("div",{className:u,children:o.items.length>0?e.jsx("div",{className:"govrs-notification__items",children:o.items.map(a=>e.jsxs("div",{className:`govrs-notification__item${a.disabled?" govrs-notification__item--disabled":""}`,role:"button",tabIndex:a.disabled?-1:0,"aria-disabled":a.disabled||void 0,onClick:a.disabled?void 0:()=>L(a.id),onKeyDown:p=>{a.disabled||(p.key==="Enter"||p.key===" ")&&(p.preventDefault(),L(a.id))},children:[e.jsxs("div",{className:"govrs-notification__item-header",children:[e.jsxs("h3",{className:"govrs-notification__item-title",children:[a.isNew?e.jsx("span",{className:"govrs-notification__item-new-indicator","aria-hidden":!0}):null,e.jsx("span",{children:a.title})]}),a.time?e.jsx("span",{className:"govrs-notification__item-time",children:a.time}):null]}),e.jsx("p",{className:"govrs-notification__item-description",children:a.description})]},a.id))}):e.jsx("div",{className:"govrs-notification__empty-state",children:e.jsx("p",{children:"Nenhuma notificação neste momento"})})});return o.icon&&!o.label?e.jsx(O.Item,{id:o.id,icon:o.icon,ariaLabel:o.ariaLabel??`Aba ${String(o.id)}`,children:d},o.id):e.jsx(O.Item,{id:o.id,label:o.label??`Aba ${String(o.id)}`,icon:o.icon,ariaLabel:o.ariaLabel,children:d},o.id)})}):e.jsx("div",{className:["govrs-notification__content",V?"govrs-notification__content--with-close":""].filter(Boolean).join(" "),children:e.jsx("div",{className:"govrs-notification__empty-state",children:e.jsx("p",{children:"Nenhuma notificação neste momento"})})})]})})]})}i.__docgenInfo={description:"",methods:[],displayName:"Notification",props:{buttonLabel:{required:!1,tsType:{name:"ReactNode"},description:"",defaultValue:{value:"'Notificações'",computed:!1}},useBellIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},buttonVariant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'tertiary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"}]},description:"",defaultValue:{value:"'secondary'",computed:!1}},buttonSize:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},tabs:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string | number
  label?: ReactNode
  icon?: IconDefinition
  ariaLabel?: string
  items: NotificationItem[]
}`,signature:{properties:[{key:"id",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}},{key:"label",value:{name:"ReactNode",required:!1}},{key:"icon",value:{name:"IconDefinition",required:!1}},{key:"ariaLabel",value:{name:"string",required:!1}},{key:"items",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string | number
  title: ReactNode
  description: ReactNode
  time?: ReactNode
  isNew?: boolean
  disabled?: boolean
}`,signature:{properties:[{key:"id",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}},{key:"title",value:{name:"ReactNode",required:!0}},{key:"description",value:{name:"ReactNode",required:!0}},{key:"time",value:{name:"ReactNode",required:!1}},{key:"isNew",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"NotificationItem[]",required:!0}}]}}],raw:"NotificationTab[]"},description:""},iconPosition:{required:!1,tsType:{name:"union",raw:"'left' | 'right' | 'top' | 'bottom'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"}]},description:""},showUserArea:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},user:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  name?: ReactNode
  email?: ReactNode
}`,signature:{properties:[{key:"name",value:{name:"ReactNode",required:!1}},{key:"email",value:{name:"ReactNode",required:!1}}]}},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onNotificationClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(notificationId: string | number) => void",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"notificationId"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const ue=[{title:"Quando usar",text:"Use para informar eventos e atualizações do sistema sem tirar o usuário do fluxo principal."},{title:"Melhor exploração",text:"Use a página 'Interativo' para testar combinações de botão, usuário, abas e estado vazio."},{title:"Comportamento",text:"Abre como painel ancorado ao botão, fecha com clique fora, tecla Esc e botão de fechar."}],pe=`const tabs = [
  {
    id: 'all',
    label: 'Todas',
    items: [
      {
        id: 'n1',
        title: 'Seu documento foi aprovado',
        description: 'Seu processo avançou para a próxima etapa.',
        time: 'Há 5 min',
      },
    ],
  },
]

<Notification tabs={tabs} />`,be=`const tabs = [
  {
    id: 'important',
    label: 'Importantes',
    items: [{ id: 'n1', title: 'Prazo vencendo', description: 'Faltam 3 dias', time: 'Agora' }],
  },
  {
    id: 'updates',
    label: 'Atualizações',
    items: [{ id: 'n2', title: 'Sistema atualizado', description: 'Nova funcionalidade liberada', time: 'Há 1h' }],
  },
  {
    id: 'messages',
    label: 'Mensagens',
    items: [{ id: 'n3', title: 'Nova mensagem', description: 'Você recebeu uma nova mensagem', time: 'Há 2h' }],
  },
]

<Notification tabs={tabs} showUserArea user={{ name: 'Nome do Usuário', email: 'nome@dominio.com' }} />`,fe=`import { faBell, faStar, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const tabs = [
  {
    id: 'all',
    label: 'Todas',
    icon: faBell,
    items: [...],
  },
  {
    id: 'important',
    label: 'Importantes',
    icon: faStar,
    items: [...],
  },
  {
    id: 'messages',
    label: 'Mensagens',
    icon: faEnvelope,
    items: [...],
  },
]

<Notification tabs={tabs} iconPosition="top" />`,ve=`import { faBell, faTriangleExclamation, faRefresh } from '@fortawesome/free-solid-svg-icons'

const tabs = [
  {
    id: 'all',
    icon: faBell,
    items: [...],
  },
  {
    id: 'important',
    icon: faTriangleExclamation,
    items: [...],
  },
  {
    id: 'updates',
    icon: faRefresh,
    items: [...],
  },
]

<Notification tabs={tabs} />`,xe=`<Notification
  buttonLabel="Notificações"
  useBellIcon
  buttonVariant="secondary"
  tabs={tabsSingle}
/>`,ge=`<Notification
  buttonLabel="Notificações"
  tabs={tabsSingle}
  showUserArea
  user={{
    name: 'Nome do Usuário',
    email: 'nome.sobrenome@dominio.com',
  }}
/>`,ye=`<Notification
  buttonLabel="Notificações"
  tabs={tabsMultiple}
  showUserArea
  user={{
    name: 'Nome do Usuário',
    email: 'nome.sobrenome@dominio.com',
  }}
/>`,he=`<Notification
  buttonLabel=""
  useBellIcon
  buttonVariant="secondary"
  tabs={tabsSingle}
/>`,we=`<Notification
  buttonLabel="Notificações"
  tabs={[
    { id: 'all', label: 'Todas', items: [] },
  ]}
  showUserArea
  user={{
    name: 'Nome do Usuário',
    email: 'nome.sobrenome@dominio.com',
  }}
/>`,Ne=`<Notification
  buttonLabel="Notificações"
  useBellIcon
  tabs={tabsSingle}
  showUserArea={false}
  showCloseButton={false}
/>`,Se=`<div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
  <Notification
    buttonLabel="Primário grande"
    buttonVariant="primary"
    buttonSize="large"
    tabs={tabsSingle}
    showUserArea={false}
  />

  <Notification
    buttonLabel="Secundário médio"
    buttonVariant="secondary"
    buttonSize="medium"
    tabs={tabsSingle}
    showUserArea={false}
  />

  <Notification
    buttonLabel="Terciário pequeno"
    buttonVariant="tertiary"
    buttonSize="small"
    tabs={tabsSingle}
    showUserArea={false}
  />
</div>`,l=[{id:"all",label:"Todas",items:[{id:"notif-1",title:"Seu documento foi aprovado",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis nisl eget mauris dignissim.",time:"Há 00 min",isNew:!0},{id:"notif-2",title:"Nova solicitação disponível",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis nisl eget mauris dignissim.",time:"Há 1 hora"},{id:"notif-3",title:"Atualização do sistema",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis nisl eget mauris dignissim.",time:"Há 2 horas"}]}],g=[{id:"important",label:"Importantes",items:[{id:"notif-1",title:"Seu documento foi aprovado",description:"Ação importante: seu documento foi revisado e aprovado. Clique para mais detalhes.",time:"Há 00 min"},{id:"notif-2",title:"Aviso: Prazo vencendo",description:"Seu prazo para enviar documentação vence em 3 dias. Não perca!",time:"Há 1 hora"}]},{id:"updates",label:"Atualizações",items:[{id:"notif-3",title:"Atualização do sistema",description:"O sistema foi atualizado com novas funcionalidades.",time:"Há 2 horas"},{id:"notif-4",title:"Nova versão disponível",description:"Uma nova versão da plataforma está disponível.",time:"Há 5 horas"}]},{id:"messages",label:"Mensagens",items:[{id:"notif-5",title:"Você tem uma nova mensagem",description:"João Silva enviou uma mensagem para você. Verifique seu inbox.",time:"Há 30 min"}]}],je=[{id:"all",label:"Todas",icon:x,items:l[0].items},{id:"important",label:"Importantes",icon:Y,items:g[0].items},{id:"messages",label:"Mensagens",icon:Z,items:g[2].items}],Ce=[{id:"all",icon:x,items:l[0].items},{id:"important",icon:ee,items:g[0].items},{id:"updates",icon:oe,items:g[1].items}],ae=[{id:"all",label:"Todas",items:[{id:"p1",title:"Documento aprovado",description:"Seu processo avançou para a próxima etapa.",time:"Há 5 min",isNew:!0},{id:"p2",title:"Nova solicitação disponível",description:"Uma solicitação foi atribuída a você.",time:"Há 1 hora",isNew:!0},{id:"p3",title:"Atualização do sistema",description:"O sistema foi atualizado com melhorias de desempenho.",time:"Há 3 horas"}]}],Ae=[{id:"all",label:"Todas",items:[{id:"n1",title:"Prazo vencendo amanhã",description:"Você tem um prazo crítico para amanhã às 18h.",time:"Agora",isNew:!0},{id:"n2",title:"Nova mensagem recebida",description:"Maria Souza enviou uma mensagem para você.",time:"Há 2 min",isNew:!0},{id:"n3",title:"Aprovação pendente",description:"Um documento aguarda sua aprovação.",time:"Há 10 min",isNew:!0},{id:"n4",title:"Relatório gerado",description:"O relatório mensal está pronto para download.",time:"Há 30 min",isNew:!0}]}],Te=[{id:"all",label:"Todas",items:[{id:"d1",title:"Solicitação em análise",description:"Aguarde, sua solicitação está sendo analisada.",time:"Há 1 hora",isNew:!0},{id:"d2",title:"Acesso restrito",description:"Você não tem permissão para esta ação.",time:"Há 2 horas",disabled:!0},{id:"d3",title:"Notificação expirada",description:"Este aviso não está mais disponível.",time:"Há 5 horas",disabled:!0},{id:"d4",title:"Cadastro atualizado",description:"Seus dados foram atualizados com sucesso.",time:"Há 1 dia"}]}],Ee=[{id:"all",label:"Todas",items:[{id:"r1",title:"Sistema restaurado",description:"A manutenção foi concluída e o sistema está normal.",time:"Há 2 dias"},{id:"r2",title:"Relatório de agosto",description:"O relatório de agosto está disponível no portal.",time:"Há 3 dias"},{id:"r3",title:"Senha alterada",description:"Sua senha foi alterada com sucesso.",time:"Há 5 dias"}]}],Pe=[{id:"all",label:"Todas",items:[{id:"s1",title:"Único aviso importante",description:"Verifique as novas diretrizes publicadas nesta semana.",time:"Agora",isNew:!0}]}],Ie={default:ae,allNew:Ae,withDisabled:Te,allRead:Ee,single:Pe},Qe={title:"Feedback/Notifications",component:i,parameters:{layout:"padded",controls:{expanded:!0,sort:"requiredFirst"}}};function W(){return e.jsx("div",{style:{minHeight:720,display:"flex",alignItems:"flex-start"},children:e.jsx(i,{className:"govrs-notification--docs-inline",buttonLabel:"Notificações",useBellIcon:!0,buttonVariant:"secondary",tabs:l,showUserArea:!1})})}function ze(){return e.jsx("div",{style:{minHeight:760,display:"flex",alignItems:"flex-start"},children:e.jsx(i,{className:"govrs-notification--docs-inline",buttonLabel:"Notificações",useBellIcon:!0,tabs:l,showUserArea:!0,user:{name:"Nome do Usuário",email:"nome.sobrenome@dominio.com"}})})}function F(){return e.jsx("div",{style:{minHeight:760,display:"flex",alignItems:"flex-start"},children:e.jsx(i,{className:"govrs-notification--docs-inline",buttonLabel:"Notificações",useBellIcon:!0,tabs:g,showUserArea:!0,user:{name:"Nome do Usuário",email:"nome.sobrenome@dominio.com"}})})}function _e(){return e.jsx("div",{style:{minHeight:760,display:"flex",alignItems:"flex-start"},children:e.jsx(i,{className:"govrs-notification--docs-inline",buttonLabel:"Notificações",useBellIcon:!0,tabs:je,iconPosition:"top",showUserArea:!1})})}function Oe(){return e.jsx("div",{style:{minHeight:760,display:"flex",alignItems:"flex-start"},children:e.jsx(i,{className:"govrs-notification--docs-inline",buttonLabel:"Notificações",useBellIcon:!0,tabs:Ce,showUserArea:!1})})}function Ue(){return e.jsx("div",{style:{minHeight:720,display:"flex",alignItems:"flex-start"},children:e.jsx(i,{className:"govrs-notification--docs-inline",buttonLabel:"",useBellIcon:!0,buttonVariant:"secondary",tabs:l,showUserArea:!1})})}function Re(){return e.jsx("div",{style:{minHeight:620,display:"flex",alignItems:"flex-start"},children:e.jsx(i,{className:"govrs-notification--docs-inline",buttonLabel:"Notificações",useBellIcon:!0,tabs:[{id:"all",label:"Todas",items:[]}],showUserArea:!0,user:{name:"Nome do Usuário",email:"nome.sobrenome@dominio.com"}})})}function Be(){return e.jsx("div",{style:{minHeight:720,display:"flex",alignItems:"flex-start"},children:e.jsx(i,{className:"govrs-notification--docs-inline",buttonLabel:"Notificações",useBellIcon:!0,tabs:l,showUserArea:!1,showCloseButton:!1})})}function De(){return e.jsx("div",{style:{minHeight:760,display:"flex",alignItems:"flex-start"},children:e.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap"},children:[e.jsx(i,{className:"govrs-notification--docs-inline",buttonLabel:"Primário grande",useBellIcon:!0,buttonVariant:"primary",buttonSize:"large",tabs:l,showUserArea:!1}),e.jsx(i,{className:"govrs-notification--docs-inline",buttonLabel:"Secundário médio",useBellIcon:!0,buttonVariant:"secondary",buttonSize:"medium",tabs:l,showUserArea:!1}),e.jsx(i,{className:"govrs-notification--docs-inline",buttonLabel:"Terciário pequeno",useBellIcon:!0,buttonVariant:"tertiary",buttonSize:"small",tabs:l,showUserArea:!1})]})})}const N={name:"Documentação",args:{tabs:l},parameters:{docsOnly:!0,controls:{disable:!0}},render:()=>e.jsxs(de,{children:[e.jsx(ce,{eyebrow:"Documentação Guiada",title:e.jsx("h3",{style:n.heroTitle,children:"Notificações"}),description:"Componente para exibir notificações em painel ancorado ao botão, com suporte a usuário, abas e estado vazio.",stats:ue}),e.jsxs(_,{title:"Estrutura do objeto tabs",description:"A prop tabs é obrigatória e define as seções e itens exibidos no painel.",children:[e.jsxs("div",{style:n.cardGrid,children:[e.jsx(c,{label:"Tipos",children:e.jsx("pre",{style:n.codeBlock,children:e.jsx("code",{children:`type NotificationItem = {
  id: string | number
  title: ReactNode
  description: ReactNode
  time?: ReactNode
}

type NotificationTab = {
  id: string | number
  label?: ReactNode
  icon?: IconDefinition
  items: NotificationItem[]
}`})})}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(c,{label:"Sem abas visuais (1 grupo)",children:e.jsx("p",{style:n.statText,children:"Para não exibir navegação de abas, envie apenas 1 item no array de tabs."})}),e.jsx(c,{label:"Com abas visuais (2+ grupos)",children:e.jsx("p",{style:n.statText,children:"Para exibir o seletor de abas, envie 2 ou mais grupos no array de tabs."})})]})]}),e.jsx(r,{title:"Exemplo sem abas visuais",description:"Apenas um grupo em tabs. O painel mostra direto a lista de notificações.",code:pe,allowOverflow:!0,children:e.jsx(W,{})}),e.jsx(r,{title:"Exemplo com abas visuais — só texto",description:"Dois ou mais grupos em tabs. O painel passa a renderizar a barra de abas.",code:be,allowOverflow:!0,children:e.jsx(F,{})}),e.jsx(r,{title:"Exemplo com abas visuais — ícone e texto",description:"Informe icon e label na tab. A posição do ícone é definida por iconPosition no Notification (left, right, top ou bottom).",code:fe,allowOverflow:!0,children:e.jsx(_e,{})}),e.jsx(r,{title:"Exemplo com abas visuais — só ícone",description:"Omita label e informe apenas icon. A aba exibe somente o ícone.",code:ve,allowOverflow:!0,children:e.jsx(Oe,{})})]}),e.jsx(_,{title:"Props principais",description:"Resumo das props mais relevantes para controlar conteúdo, estilo e comportamento do componente.",children:e.jsxs("div",{style:n.cardGrid,children:[e.jsx(c,{label:"tabs (obrigatório)",children:e.jsx("p",{style:n.statText,children:"Array de grupos de notificações. Controla conteúdo e, com 2+ grupos, exibe navegação por abas."})}),e.jsx(c,{label:"buttonLabel",children:e.jsx("p",{style:n.statText,children:"Texto do botão disparador. Se vazio, o botão mostra apenas o ícone (modo circular)."})}),e.jsx(c,{label:"showUserArea + user",children:e.jsx("p",{style:n.statText,children:"Exibe a área do usuário no topo do painel. user aceita name e email (ambos opcionais)."})}),e.jsx(c,{label:"buttonVariant e buttonSize",children:e.jsx("p",{style:n.statText,children:"Permite combinar estilo e tamanho do botão disparador com o restante da interface."})}),e.jsx(c,{label:"onNotificationClick",children:e.jsx("p",{style:n.statText,children:"Callback chamado ao clicar em um item da lista, recebendo o id da notificação."})}),e.jsx(c,{label:"onClose",children:e.jsx("p",{style:n.statText,children:"Callback chamado quando o painel é fechado por botão fechar, clique fora ou tecla Esc."})})]})}),e.jsxs(_,{title:"Exemplos de uso",description:"Cenários comuns de implementação com trecho de código para copiar e testar.",children:[e.jsx(r,{title:"Variações do botão disparador",description:"Exemplo com combinações de buttonVariant e buttonSize para ajustar estilo e hierarquia visual.",code:Se,allowOverflow:!0,children:e.jsx(De,{})}),e.jsx(r,{title:"Básico",description:"Botão com rótulo e lista de notificações sem área do usuário.",code:xe,allowOverflow:!0,children:e.jsx(W,{})}),e.jsx(r,{title:"Com área do usuário",description:"Exibe nome e e-mail no topo do painel.",code:ge,allowOverflow:!0,children:e.jsx(ze,{})}),e.jsx(r,{title:"Com tabs",description:"Notificações agrupadas em múltiplas abas.",code:ye,allowOverflow:!0,children:e.jsx(F,{})}),e.jsx(r,{title:"Botão somente com sino",description:"Quando buttonLabel é vazio, o gatilho vira botão circular com ícone.",code:he,allowOverflow:!0,children:e.jsx(Ue,{})}),e.jsx(r,{title:"Estado vazio",description:"Quando items estiver vazio, o componente mostra a mensagem de vazio.",code:we,allowOverflow:!0,children:e.jsx(Re,{})}),e.jsx(r,{title:"Sem botão de fechar (X)",description:"Use showCloseButton={false} quando o painel não deve exibir o botão X no cabeçalho.",code:Ne,allowOverflow:!0,children:e.jsx(Be,{})})]})]})};function qe(t){var h;const[y,j]=m.useState(null),b=((h=(Ie[t.dataPreset??"default"]??ae)[0])==null?void 0:h.items)??[],v=t.emptyState?[{id:"all",label:"Todas",items:[]}]:t.tabMode==="iconAndText"?[{id:"all",label:"Todas",icon:x,items:b},{id:"important",label:"Importantes",icon:Y,items:[]},{id:"messages",label:"Mensagens",icon:Z,items:[]}]:t.tabMode==="iconOnly"?[{id:"all",icon:x,items:b},{id:"important",icon:ee,items:[]},{id:"updates",icon:oe,items:[]}]:t.tabMode==="text"?[{id:"important",label:"Importantes",items:b},{id:"updates",label:"Atualizações",items:[]},{id:"messages",label:"Mensagens",items:[]}]:[{id:"all",label:"Todas",items:b}];return e.jsxs("div",{style:{display:"grid",gap:20},children:[e.jsx(i,{buttonLabel:"Notificações (3)",useBellIcon:!0,buttonVariant:"secondary",buttonSize:"medium",tabs:v,iconPosition:t.tabMode==="iconAndText"?t.iconPosition:void 0,showUserArea:t.showUserArea,user:t.showUserArea?{name:"Nome do Usuário",email:"nome.sobrenome@dominio.com"}:void 0,onNotificationClick:C=>j(C)}),y?e.jsxs("p",{style:{...n.statText,margin:0},children:["Última notificação clicada: ",e.jsx("strong",{children:y})]}):null]})}const S={name:"Interativo",render:t=>e.jsx(qe,{...t}),args:{tabMode:"text",iconPosition:"left",showUserArea:!0,emptyState:!1,dataPreset:"default",modoContraste:!1},parameters:{controls:{include:["tabMode","iconPosition","showUserArea","emptyState","dataPreset","modoContraste"]}},argTypes:{modoContraste:{control:"boolean",description:"Visualiza o componente no modo de alto contraste.",table:{category:"Acessibilidade"}},tabMode:{control:"select",options:["single","text","iconAndText","iconOnly"],description:"Modo das abas: uma única lista (single), só texto (text), ícone + texto (iconAndText) ou só ícone (iconOnly).",table:{category:"Aparência",defaultValue:{summary:"text"}}},iconPosition:{name:"iconPosition",control:"select",options:["left","right","top","bottom"],description:"Posição do ícone nas abas. Disponível quando tabMode é iconAndText.",if:{arg:"tabMode",eq:"iconAndText"},table:{category:"Aparência",type:{summary:"'left' | 'right' | 'top' | 'bottom'"},defaultValue:{summary:"left"}}},showUserArea:{control:"boolean",table:{category:"Conteúdo"}},emptyState:{control:"boolean",description:"Mostra estado vazio de notificações.",table:{category:"Conteúdo"}},dataPreset:{control:"select",options:["default","allNew","withDisabled","allRead","single"],description:"Conjunto de dados das notificações exibidas na primeira aba.",table:{category:"Conteúdo",defaultValue:{summary:"default"},type:{summary:"string",detail:`default — mix de novas e lidas
allNew — todas novas
withDisabled — com itens desabilitados
allRead — todas lidas
single — apenas uma notificação`}}}}};var G,Q,X;N.parameters={...N.parameters,docs:{...(G=N.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Documentação',
  args: {
    tabs: tabsSingle
  },
  parameters: {
    docsOnly: true,
    controls: {
      disable: true
    }
  },
  render: () => <DocsStoryLayout>
      <DocsHero eyebrow="Documentação Guiada" title={<h3 style={storyDocsStyles.heroTitle}>Notificações</h3>} description="Componente para exibir notificações em painel ancorado ao botão, com suporte a usuário, abas e estado vazio." stats={docsHeroStats} />

      <SectionCard title="Estrutura do objeto tabs" description="A prop tabs é obrigatória e define as seções e itens exibidos no painel.">
        <div style={storyDocsStyles.cardGrid}>
          <StoryPreviewCard label="Tipos">
            <pre style={storyDocsStyles.codeBlock}>
              <code>{\`type NotificationItem = {
  id: string | number
  title: ReactNode
  description: ReactNode
  time?: ReactNode
}

type NotificationTab = {
  id: string | number
  label?: ReactNode
  icon?: IconDefinition
  items: NotificationItem[]
}\`}</code>
            </pre>
          </StoryPreviewCard>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 16
        }}>
          <StoryPreviewCard label="Sem abas visuais (1 grupo)">
            <p style={storyDocsStyles.statText}>
              Para não exibir navegação de abas, envie apenas 1 item no array de tabs.
            </p>
          </StoryPreviewCard>

          <StoryPreviewCard label="Com abas visuais (2+ grupos)">
            <p style={storyDocsStyles.statText}>
              Para exibir o seletor de abas, envie 2 ou mais grupos no array de tabs.
            </p>
          </StoryPreviewCard>
        </div>
        </div>

        <SandboxExample title="Exemplo sem abas visuais" description="Apenas um grupo em tabs. O painel mostra direto a lista de notificações." code={tabsSingleCode} allowOverflow>
          <BasicPreview />
        </SandboxExample>

        <SandboxExample title="Exemplo com abas visuais — só texto" description="Dois ou mais grupos em tabs. O painel passa a renderizar a barra de abas." code={tabsMultipleCode} allowOverflow>
          <TabsPreview />
        </SandboxExample>

        <SandboxExample title="Exemplo com abas visuais — ícone e texto" description="Informe icon e label na tab. A posição do ícone é definida por iconPosition no Notification (left, right, top ou bottom)." code={tabsWithIconAndTextCode} allowOverflow>
          <TabsIconAndTextPreview />
        </SandboxExample>

        <SandboxExample title="Exemplo com abas visuais — só ícone" description="Omita label e informe apenas icon. A aba exibe somente o ícone." code={tabsIconOnlyCode} allowOverflow>
          <TabsIconOnlyPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="Props principais" description="Resumo das props mais relevantes para controlar conteúdo, estilo e comportamento do componente.">
        <div style={storyDocsStyles.cardGrid}>
          <StoryPreviewCard label="tabs (obrigatório)">
            <p style={storyDocsStyles.statText}>
              Array de grupos de notificações. Controla conteúdo e, com 2+ grupos, exibe navegação por abas.
            </p>
          </StoryPreviewCard>
          <StoryPreviewCard label="buttonLabel">
            <p style={storyDocsStyles.statText}>
              Texto do botão disparador. Se vazio, o botão mostra apenas o ícone (modo circular).
            </p>
          </StoryPreviewCard>
          <StoryPreviewCard label="showUserArea + user">
            <p style={storyDocsStyles.statText}>
              Exibe a área do usuário no topo do painel. user aceita name e email (ambos opcionais).
            </p>
          </StoryPreviewCard>
          <StoryPreviewCard label="buttonVariant e buttonSize">
            <p style={storyDocsStyles.statText}>
              Permite combinar estilo e tamanho do botão disparador com o restante da interface.
            </p>
          </StoryPreviewCard>
          <StoryPreviewCard label="onNotificationClick">
            <p style={storyDocsStyles.statText}>
              Callback chamado ao clicar em um item da lista, recebendo o id da notificação.
            </p>
          </StoryPreviewCard>
          <StoryPreviewCard label="onClose">
            <p style={storyDocsStyles.statText}>
              Callback chamado quando o painel é fechado por botão fechar, clique fora ou tecla Esc.
            </p>
          </StoryPreviewCard>
        </div>
      </SectionCard>

      <SectionCard title="Exemplos de uso" description="Cenários comuns de implementação com trecho de código para copiar e testar.">
        <SandboxExample title="Variações do botão disparador" description="Exemplo com combinações de buttonVariant e buttonSize para ajustar estilo e hierarquia visual." code={triggerStylesExampleCode} allowOverflow>
          <TriggerStylesPreview />
        </SandboxExample>

        <SandboxExample title="Básico" description="Botão com rótulo e lista de notificações sem área do usuário." code={basicExampleCode} allowOverflow>
          <BasicPreview />
        </SandboxExample>

        <SandboxExample title="Com área do usuário" description="Exibe nome e e-mail no topo do painel." code={userAreaExampleCode} allowOverflow>
          <UserAreaPreview />
        </SandboxExample>

        <SandboxExample title="Com tabs" description="Notificações agrupadas em múltiplas abas." code={tabsExampleCode} allowOverflow>
          <TabsPreview />
        </SandboxExample>

        <SandboxExample title="Botão somente com sino" description="Quando buttonLabel é vazio, o gatilho vira botão circular com ícone." code={iconOnlyExampleCode} allowOverflow>
          <IconOnlyPreview />
        </SandboxExample>

        <SandboxExample title="Estado vazio" description="Quando items estiver vazio, o componente mostra a mensagem de vazio." code={emptyStateExampleCode} allowOverflow>
          <EmptyStatePreview />
        </SandboxExample>

        <SandboxExample title="Sem botão de fechar (X)" description="Use showCloseButton={false} quando o painel não deve exibir o botão X no cabeçalho." code={noCloseButtonExampleCode} allowOverflow>
          <NoCloseButtonPreview />
        </SandboxExample>
      </SectionCard>

    </DocsStoryLayout>
}`,...(X=(Q=N.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var $,J,K;S.parameters={...S.parameters,docs:{...($=S.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'Interativo',
  render: args => <InteractivePreview {...args} />,
  args: {
    tabMode: 'text',
    iconPosition: 'left',
    showUserArea: true,
    emptyState: false,
    dataPreset: 'default',
    modoContraste: false
  },
  parameters: {
    controls: {
      include: ['tabMode', 'iconPosition', 'showUserArea', 'emptyState', 'dataPreset', 'modoContraste']
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
    tabMode: {
      control: 'select',
      options: ['single', 'text', 'iconAndText', 'iconOnly'],
      description: 'Modo das abas: uma única lista (single), só texto (text), ícone + texto (iconAndText) ou só ícone (iconOnly).',
      table: {
        category: 'Aparência',
        defaultValue: {
          summary: 'text'
        }
      }
    },
    iconPosition: {
      name: 'iconPosition',
      control: 'select',
      options: ['left', 'right', 'top', 'bottom'],
      description: 'Posição do ícone nas abas. Disponível quando tabMode é iconAndText.',
      if: {
        arg: 'tabMode',
        eq: 'iconAndText'
      },
      table: {
        category: 'Aparência',
        type: {
          summary: "'left' | 'right' | 'top' | 'bottom'"
        },
        defaultValue: {
          summary: 'left'
        }
      }
    },
    showUserArea: {
      control: 'boolean',
      table: {
        category: 'Conteúdo'
      }
    },
    emptyState: {
      control: 'boolean',
      description: 'Mostra estado vazio de notificações.',
      table: {
        category: 'Conteúdo'
      }
    },
    dataPreset: {
      control: 'select',
      options: ['default', 'allNew', 'withDisabled', 'allRead', 'single'],
      description: 'Conjunto de dados das notificações exibidas na primeira aba.',
      table: {
        category: 'Conteúdo',
        defaultValue: {
          summary: 'default'
        },
        type: {
          summary: 'string',
          detail: 'default — mix de novas e lidas\\nallNew — todas novas\\nwithDisabled — com itens desabilitados\\nallRead — todas lidas\\nsingle — apenas uma notificação'
        }
      }
    }
  }
}`,...(K=(J=S.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const Xe=["Documentation","Interactive"];export{N as Documentation,S as Interactive,Xe as __namedExportsOrder,Qe as default};
