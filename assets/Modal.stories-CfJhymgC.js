import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as i}from"./index-DyTKwKRb.js";import{F as A,g as ne,n as le,i as re,o as ie,a as G,p as K,q as ce,r as de,s as me,t as pe,u as ue}from"./index-A9ZUQmzb.js";import{D as fe,S as ve,s as x,a as O,b as _,c as w}from"./storyDocs-CoQtGjOG.js";import{B as b}from"./Button-DnfRrOli.js";import{I as xe}from"./Input-CUoEfCmV.js";/* empty css              */import"./_commonjsHelpers-Cpj98o6Y.js";function he(...o){return o.filter(Boolean).join(" ")}function P(o){if(!o)return[];const a=o.querySelectorAll('button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])');return Array.from(a).filter(n=>{const t=window.getComputedStyle(n);return t.display!=="none"&&t.visibility!=="hidden"&&!n.ariaHidden})}function be(){return e.jsx("span",{className:"govrs-modal__placeholder","aria-hidden":"true",children:e.jsx(A,{icon:ie})})}function ge({items:o=[],imageErrors:a,onImageError:n}){const[t,c]=i.useState(new Set);function l(s){c(d=>{const r=new Set(d);return r.has(s)?r.delete(s):r.add(s),r})}return e.jsx("div",{className:"govrs-modal__items",children:o.map((s,d)=>{const r=t.has(d),p=s.image??s.img,v=s.imageAlt??(typeof s.label=="string"?s.label:"Item do modal");return e.jsxs("article",{className:"govrs-modal__item",children:[e.jsxs("button",{type:"button",className:"govrs-modal__item-toggle",onClick:()=>l(d),"aria-expanded":r,children:[e.jsxs("span",{className:"govrs-modal__item-summary",children:[p&&!a.has(d)?e.jsx("img",{className:"govrs-modal__item-image",src:p,alt:v,onError:()=>n(d)}):e.jsx(be,{}),e.jsx("span",{className:"govrs-modal__item-label",children:s.label})]}),e.jsx(A,{icon:r?le:re,className:"govrs-modal__item-icon"})]}),r&&s.content?e.jsx("div",{className:"govrs-modal__item-content",children:s.content}):null]},`${d}-${String(v)}`)})})}function ye({inputs:o=[]}){const[a,n]=i.useState({});return e.jsx("div",{className:"govrs-modal__form-fields",children:o.map((t,c)=>{const{auxiliaryText:l,defaultValue:s,helperText:d,label:r,onChange:p,value:v,...C}=t,h=t.name??t.id??`field-${c}`,I=v??a[h]??s??"";return i.createElement(xe,{...C,key:h,label:r,helperText:d??l,value:I,onChange:g=>{v===void 0&&n(y=>({...y,[h]:g.target.value})),p==null||p(g)}})})})}function f({title:o,onClose:a,buttonLeft:n,buttonRight:t,type:c,children:l,items:s,inputs:d,closeOnOverlayClick:r=!0,closeOnEscape:p=!0,className:v}){const C=i.useId().replace(/:/g,""),h=`govrs-modal-title-${C}`,I=`govrs-modal-body-${C}`,g=i.useRef(null),y=i.useRef(null),[Y,ee]=i.useState(new Set);i.useEffect(()=>{const m=y.current;if(!m)return;const j=document.activeElement instanceof HTMLElement?document.activeElement:null,se=document.body.style.overflow;document.body.style.overflow="hidden";const D=P(m)[0];D?D.focus():m.focus();function N(u){var F;if(u.key==="Escape"&&p&&a){u.preventDefault(),a();return}if(u.key!=="Tab")return;const E=P(m);if(E.length===0){u.preventDefault(),(F=y.current)==null||F.focus();return}const T=E[0],q=E[E.length-1];u.shiftKey&&document.activeElement===T&&(u.preventDefault(),q.focus()),!u.shiftKey&&document.activeElement===q&&(u.preventDefault(),T.focus())}return m.addEventListener("keydown",N),()=>{document.body.style.overflow=se,m.removeEventListener("keydown",N),j==null||j.focus()}},[p,a]);function oe(m){ee(j=>new Set(j).add(m))}function ae(m){!r||!a||m.target!==g.current||a()}function te(){return c==="items"?e.jsxs(e.Fragment,{children:[l?e.jsx("div",{className:"govrs-modal__lead",children:l}):null,e.jsx(ge,{items:s,imageErrors:Y,onImageError:oe})]}):c==="form"?e.jsxs(e.Fragment,{children:[l?e.jsx("div",{className:"govrs-modal__lead",children:l}):null,e.jsx(ye,{inputs:d})]}):l?e.jsx("div",{className:"govrs-modal__lead govrs-modal__lead--custom",children:l}):null}return e.jsx("div",{ref:g,className:he("govrs-modal",v),onClick:ae,children:e.jsxs("div",{ref:y,className:"govrs-modal__dialog",role:"dialog","aria-modal":"true","aria-labelledby":o?h:void 0,"aria-label":o?void 0:"Modal","aria-describedby":I,"data-type":c,tabIndex:-1,children:[o||a?e.jsxs("header",{className:"govrs-modal__header",children:[o?e.jsx("h2",{id:h,className:"govrs-modal__title",children:o}):e.jsx("span",{className:"govrs-modal__title-placeholder"}),a?e.jsx("button",{type:"button",className:"govrs-modal__close","aria-label":"Fechar modal",onClick:a,children:e.jsx(A,{icon:ne})}):null]}):null,e.jsx("div",{id:I,className:"govrs-modal__body",children:te()}),n||t?e.jsxs("footer",{className:"govrs-modal__footer",children:[n?e.jsx(b,{variant:n.variant??"secondary",onClick:n.onClick,disabled:n.disabled,children:n.label}):null,t?e.jsx(b,{variant:t.variant??"primary",onClick:t.onClick,disabled:t.disabled,children:t.label}):null]}):null]})})}f.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{closeOnOverlayClick:{defaultValue:{value:"true",computed:!1},required:!1},closeOnEscape:{defaultValue:{value:"true",computed:!1},required:!1}}};const je=["custom","items","form"],Ce=[{title:"Quando usar",text:"Quando a interface precisa interromper o fluxo principal para confirmar uma ação, detalhar opções expansíveis ou coletar um pequeno conjunto de campos."},{title:"Melhor exploração",text:"Use o story 'Interativo' para alternar entre os três tipos de modal. O story 'Exemplos de uso' resume os cenários mais recorrentes em uma visão comparativa."},{title:"Comportamento",text:"O Modal prende o foco enquanto está aberto, separa o fechamento por clique no overlay do fechamento por Escape e reaproveita Button e Input do próprio design system."}],X="data:image/svg+xml,%3Csvg viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='80' height='80' rx='40' fill='%23DDF9E3'/%3E%3Cpath d='M24 48h32V54H24zM28 28h24v16H28z' fill='%231A7235'/%3E%3C/svg%3E",Ie="data:image/svg+xml,%3Csvg viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='80' height='80' rx='40' fill='%23E9F5FF'/%3E%3Cpath d='M40 18c-9 0-16 7-16 16 0 12 16 28 16 28s16-16 16-28c0-9-7-16-16-16Zm0 21a5 5 0 1 1 0-10 5 5 0 0 1 0 10Z' fill='%232B86D8'/%3E%3C/svg%3E",Ee=[{label:"Atendimento presencial",img:X,content:e.jsxs("div",{children:[e.jsx("p",{children:"Atende de segunda a sexta, das 8h30 às 17h30."}),e.jsxs("ul",{children:[e.jsx("li",{children:"Retirada de documentos."}),e.jsx("li",{children:"Protocolo de solicitações."})]})]})},{label:"Unidades regionais",img:Ie,content:e.jsxs("div",{children:[e.jsx("p",{children:"Consulte a unidade mais próxima antes de agendar sua visita."}),e.jsxs("ul",{children:[e.jsx("li",{children:"Porto Alegre."}),e.jsx("li",{children:"Santa Maria."}),e.jsx("li",{children:"Pelotas."})]})]})},{label:"Informações complementares",content:e.jsx("p",{children:"Item sem imagem para demonstrar o placeholder interno do componente."})}],Oe=[{label:"Atendimento presencial",img:X,content:e.jsx("p",{children:"Atende de segunda a sexta, das 8h30 às 17h30."})},{label:"Informações complementares",content:e.jsx("p",{children:"Item sem imagem para demonstrar o placeholder interno do componente."})}],Se=[{label:"Nome completo",placeholder:"Digite seu nome",auxiliaryText:"Campo obrigatório",leftIcon:G,name:"fullName"},{label:"E-mail institucional",placeholder:"nome@orgao.rs.gov.br",leftIcon:K,name:"email",type:"email"},{label:"Telefone",placeholder:"(51) 99999-9999",leftIcon:ce,name:"phone"},{label:"Órgão",placeholder:"Informe o órgão responsável",leftIcon:de,name:"department"},{label:"Matrícula funcional",placeholder:"Digite sua matrícula",leftIcon:me,name:"registration"},{label:"Município",placeholder:"Cidade de atuação",leftIcon:pe,name:"city"},{label:"Senha de confirmação",placeholder:"Digite a senha",leftIcon:ue,name:"password",type:"password"}],ke=[{label:"Nome completo",placeholder:"Digite seu nome",auxiliaryText:"Campo obrigatório",leftIcon:G,name:"fullName"},{label:"E-mail institucional",placeholder:"nome@orgao.rs.gov.br",leftIcon:K,name:"email",type:"email"}],Me=`const [isOpen, setIsOpen] = useState(false)

<div style={{ display: 'grid', gap: 12, justifyItems: 'start' }}>
  <Button onClick={() => setIsOpen(true)}>Abrir modal de confirmação</Button>

  {isOpen ? (
    <Modal
      title="Confirmar publicação"
      type="custom"
      onClose={() => setIsOpen(false)}
      buttonLeft={{ label: 'Cancelar', onClick: () => setIsOpen(false) }}
      buttonRight={{ label: 'Publicar', onClick: () => setIsOpen(false) }}
    >
      <div>
        <p>Você está prestes a publicar este conteúdo no portal institucional.</p>
        <p>Revise o material e confirme se ele já passou por validação editorial.</p>
      </div>
    </Modal>
  ) : null}
</div>`,_e=`const previewItems = [
  {
    label: 'Atendimento presencial',
    img: ITEM_IMAGE_SERVICE,
    content: <p>Atende de segunda a sexta, das 8h30 às 17h30.</p>,
  },
  {
    label: 'Informações complementares',
    content: <p>Item sem imagem para demonstrar o placeholder interno do componente.</p>,
  },
]

const [isOpen, setIsOpen] = useState(false)

<div style={{ display: 'grid', gap: 12, justifyItems: 'start' }}>
  <Button variant="secondary" onClick={() => setIsOpen(true)}>
    Abrir modal com itens
  </Button>

  {isOpen ? (
    <Modal
      title="Serviços disponíveis"
      type="items"
      items={previewItems}
      onClose={() => setIsOpen(false)}
      buttonRight={{ label: 'Entendi', onClick: () => setIsOpen(false) }}
    >
      <p>Escolha um item para expandir o conteúdo e consultar mais detalhes.</p>
    </Modal>
  ) : null}
</div>`,we=`const previewInputs = [
  {
    label: 'Nome completo',
    placeholder: 'Digite seu nome',
    auxiliaryText: 'Campo obrigatório',
    leftIcon: faUser,
    name: 'fullName',
  },
  {
    label: 'E-mail institucional',
    placeholder: 'nome@orgao.rs.gov.br',
    leftIcon: faEnvelope,
    name: 'email',
    type: 'email',
  },
]

const [isOpen, setIsOpen] = useState(false)

<div style={{ display: 'grid', gap: 12, justifyItems: 'start' }}>
  <Button onClick={() => setIsOpen(true)}>Abrir modal com formulário</Button>

  {isOpen ? (
    <Modal
      title="Atualizar cadastro"
      type="form"
      inputs={previewInputs}
      onClose={() => setIsOpen(false)}
      buttonLeft={{ label: 'Cancelar', onClick: () => setIsOpen(false) }}
      buttonRight={{ label: 'Salvar', onClick: () => setIsOpen(false) }}
    >
      <div>
        <p>Preencha os campos abaixo para atualizar os dados de identificação.</p>
      </div>
    </Modal>
  ) : null}
</div>`,ze={title:"Sobreposições/Modal",component:f,args:{title:"Confirmar ação",type:"custom",closeOnOverlayClick:!0,closeOnEscape:!0},parameters:{layout:"padded",controls:{expanded:!0,sort:"requiredFirst"}}};function Z(){const[o,a]=i.useState(!1);return e.jsxs("div",{style:{display:"grid",gap:12,justifyItems:"start"},children:[e.jsx(b,{onClick:()=>a(!0),children:"Abrir modal de confirmação"}),o?e.jsx(f,{title:"Confirmar publicação",type:"custom",onClose:()=>a(!1),buttonLeft:{label:"Cancelar",onClick:()=>a(!1)},buttonRight:{label:"Publicar",onClick:()=>a(!1)},children:e.jsxs("div",{children:[e.jsx("p",{children:"Você está prestes a publicar este conteúdo no portal institucional."}),e.jsx("p",{children:"Revise o material e confirme se ele já passou por validação editorial."})]})}):null]})}function J(){const[o,a]=i.useState(!1);return e.jsxs("div",{style:{display:"grid",gap:12,justifyItems:"start"},children:[e.jsx(b,{variant:"secondary",onClick:()=>a(!0),children:"Abrir modal com itens"}),o?e.jsx(f,{title:"Serviços disponíveis",type:"items",items:Oe,onClose:()=>a(!1),buttonRight:{label:"Entendi",onClick:()=>a(!1)},children:e.jsx("p",{children:"Escolha um item para expandir o conteúdo e consultar mais detalhes."})}):null]})}function W(){const[o,a]=i.useState(!1);return e.jsxs("div",{style:{display:"grid",gap:12,justifyItems:"start"},children:[e.jsx(b,{onClick:()=>a(!0),children:"Abrir modal com formulário"}),o?e.jsx(f,{title:"Atualizar cadastro",type:"form",inputs:ke,onClose:()=>a(!1),buttonLeft:{label:"Cancelar",onClick:()=>a(!1)},buttonRight:{label:"Salvar",onClick:()=>a(!1)},children:e.jsx("div",{children:e.jsx("p",{children:"Preencha os campos abaixo para atualizar os dados de identificação."})})}):null]})}function Ae(){return e.jsxs("div",{style:x.cardGrid,children:[e.jsx(w,{label:"Custom",children:e.jsx(Z,{})}),e.jsx(w,{label:"Items",children:e.jsx(J,{})}),e.jsx(w,{label:"Form",children:e.jsx(W,{})})]})}function De(o){const[a,n]=i.useState(!1),t=()=>{var s;n(!1),(s=o.onClose)==null||s.call(o)},c={label:"Cancelar",onClick:()=>n(!1)},l={label:o.type==="form"?"Salvar":"Confirmar",onClick:()=>n(!1)};return e.jsxs("div",{style:{...x.previewStage,gap:12,padding:16,justifyItems:"start"},children:[e.jsx(b,{onClick:()=>n(!0),children:"Abrir modal"}),e.jsxs("p",{style:x.statText,children:[e.jsx("strong",{children:"Tipo atual:"})," ",o.type]}),e.jsxs("p",{style:x.statText,children:[e.jsx("strong",{children:"Fechamento por overlay:"})," ",o.closeOnOverlayClick?"Ativo":"Desligado"]}),a?o.type==="items"?e.jsx(f,{title:o.title,type:"items",closeOnOverlayClick:o.closeOnOverlayClick,className:o.className,onClose:t,buttonLeft:c,buttonRight:l,items:Ee,children:e.jsx("p",{children:"Abra os itens para revisar as informações complementares."})}):o.type==="form"?e.jsx(f,{title:o.title,type:"form",closeOnOverlayClick:o.closeOnOverlayClick,className:o.className,onClose:t,buttonLeft:c,buttonRight:l,inputs:Se,children:e.jsx("p",{children:"Este exemplo usa Input do próprio design system para montar o formulário."})}):e.jsx(f,{title:o.title,type:"custom",closeOnOverlayClick:o.closeOnOverlayClick,className:o.className,onClose:t,buttonLeft:c,buttonRight:l,children:e.jsxs("div",{children:[e.jsx("p",{children:"Use o tipo custom quando o conteúdo do modal for montado livremente por composição."}),e.jsx("p",{children:"O fechamento por ESC pode ser controlado separadamente via closeOnEscape."})]})}):null]})}const S={name:"Documentação",parameters:{controls:{disable:!0}},render:()=>e.jsxs(fe,{children:[e.jsx(ve,{eyebrow:"Documentação guiada",title:e.jsx("h3",{style:x.heroTitle,children:"Modal"}),description:e.jsxs(e.Fragment,{children:["O ",e.jsx("code",{children:"Modal"})," é um componente usado para exibir conteúdo em uma janela sobreposta, interrompendo o fluxo principal da interface e garantindo foco controlado e interação acessível."]}),variantTags:je,stats:Ce}),e.jsxs(O,{title:"Estrutura base",description:"O contrato base continua simples: o consumidor controla abertura e fechamento, enquanto o componente cuida do overlay, do foco, da navegação por teclado e do rodapé opcional com ações.",children:[e.jsxs("ul",{style:x.list,children:[e.jsxs("li",{children:[e.jsx("code",{children:"title"})," define o título do diálogo e alimenta a rotulagem acessível."]}),e.jsxs("li",{children:[e.jsx("code",{children:"onClose"})," controla fechamento pelo botão X, pelo overlay e por Escape quando esses comportamentos estiverem habilitados."]}),e.jsxs("li",{children:[e.jsx("code",{children:"closeOnOverlayClick"})," afeta apenas clique fora do diálogo."]}),e.jsxs("li",{children:[e.jsx("code",{children:"closeOnEscape"})," controla o fechamento pelo teclado sem acoplar isso ao overlay."]}),e.jsxs("li",{children:[e.jsx("code",{children:"buttonLeft"})," e ",e.jsx("code",{children:"buttonRight"})," configuram as ações de rodapé reutilizando o componente Button do design system."]}),e.jsxs("li",{children:[e.jsx("code",{children:"type"})," troca entre conteúdo customizado, lista expansível de itens ou formulário contextual."]})]}),e.jsx(_,{title:"Confirmação customizada",description:"Exemplo mínimo para confirmar uma ação antes de seguir no fluxo da interface.",code:Me,notes:["O componente não controla por conta própria se está aberto; essa responsabilidade permanece do lado consumidor.","Focus trap e restauração do foco anterior são tratados internamente enquanto o modal está montado."],children:e.jsx(Z,{})})]}),e.jsx(O,{title:"Variante items",description:"A variante items preserva o comportamento da origem: uma lista de entradas expansíveis com imagem opcional e conteúdo detalhado local.",children:e.jsx(_,{title:"Lista expansível",description:"Cada item vira um cabeçalho acionável, com placeholder automático quando a imagem falha ou não é fornecida.",code:_e,notes:["A estrutura continua neutra em relação a dados externos; basta passar um array de itens com label e content.","Esse formato é útil para comparativos, opções de serviço e resumos com detalhamento sob demanda."],children:e.jsx(J,{})})}),e.jsx(O,{title:"Variante form",description:"A variante form reaproveita o componente Input do próprio design system e mantém a ideia do modal original para pequenos formulários contextuais.",children:e.jsx(_,{title:"Formulário contextual",description:"Os campos são descritos por uma lista de configurações tipadas e podem usar helperText, feedback, ícones e os tipos nativos do Input atual.",code:we,notes:["Quando nenhum value controlado é passado, o Modal guarda localmente o estado dos campos apenas para demonstrar o preenchimento.","Se o consumidor precisar controlar os campos, basta fornecer value e onChange em cada configuração de input."],children:e.jsx(W,{})})}),e.jsx(O,{title:"Limites e acessibilidade",description:"A migração removeu o acoplamento com wiring do Volto, mas preservou a intenção principal do componente: interromper o fluxo com foco controlado e interação acessível.",children:e.jsxs("ul",{style:x.list,children:[e.jsx("li",{children:"O foco permanece dentro do diálogo enquanto ele está aberto."}),e.jsxs("li",{children:["Quando ",e.jsx("code",{children:"closeOnOverlayClick"})," está ativo, clique no overlay aciona ",e.jsx("code",{children:"onClose"}),"."]}),e.jsxs("li",{children:["Quando ",e.jsx("code",{children:"closeOnEscape"})," está ativo, a tecla Escape também aciona ",e.jsx("code",{children:"onClose"}),"."]}),e.jsx("li",{children:"O componente não implementa submit, validação remota nem envio de dados; essas responsabilidades continuam do lado consumidor."}),e.jsx("li",{children:"Prefira a variante form apenas para poucos campos. Formulários extensos continuam pertencendo a páginas ou fluxos dedicados."})]})})]})},k={name:"Interativo",argTypes:{modoContraste:{control:"boolean",description:"Visualiza o componente no modo de alto contraste.",table:{category:"Acessibilidade"}},title:{control:"text",description:"Título principal do diálogo.",table:{category:"Conteúdo"}},type:{control:{type:"select"},options:["custom","items","form"],description:"Define a anatomia do corpo do modal.",table:{category:"Variação"}},closeOnOverlayClick:{control:"boolean",description:"Quando ativo, clique no overlay dispara onClose.",table:{category:"Comportamento"}},closeOnEscape:{control:"boolean",description:"Quando ativo, a tecla Escape dispara onClose.",table:{category:"Comportamento"}},buttonLeft:{table:{disable:!0}},buttonRight:{table:{disable:!0}},children:{table:{disable:!0}},inputs:{table:{disable:!0}},items:{table:{disable:!0}},onClose:{table:{disable:!0}}},render:o=>e.jsx(De,{...o})},M={name:"Exemplos de uso",parameters:{controls:{disable:!0}},render:()=>e.jsx(Ae,{})};var V,B,L;S.parameters={...S.parameters,docs:{...(V=S.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Documentação',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <DocsStoryLayout>
      <DocsHero eyebrow="Documentação guiada" title={<h3 style={storyDocsStyles.heroTitle}>Modal</h3>} description={<>
            O <code>Modal</code> é um componente usado para exibir conteúdo em uma janela sobreposta, interrompendo o fluxo principal da interface e garantindo foco controlado e interação acessível.
          </>} variantTags={docsVariantTags} stats={docsHeroStats} />

      <SectionCard title="Estrutura base" description="O contrato base continua simples: o consumidor controla abertura e fechamento, enquanto o componente cuida do overlay, do foco, da navegação por teclado e do rodapé opcional com ações.">
        <ul style={storyDocsStyles.list}>
          <li><code>title</code> define o título do diálogo e alimenta a rotulagem acessível.</li>
          <li><code>onClose</code> controla fechamento pelo botão X, pelo overlay e por Escape quando esses comportamentos estiverem habilitados.</li>
          <li><code>closeOnOverlayClick</code> afeta apenas clique fora do diálogo.</li>
          <li><code>closeOnEscape</code> controla o fechamento pelo teclado sem acoplar isso ao overlay.</li>
          <li><code>buttonLeft</code> e <code>buttonRight</code> configuram as ações de rodapé reutilizando o componente Button do design system.</li>
          <li><code>type</code> troca entre conteúdo customizado, lista expansível de itens ou formulário contextual.</li>
        </ul>

        <SandboxExample title="Confirmação customizada" description="Exemplo mínimo para confirmar uma ação antes de seguir no fluxo da interface." code={basicExampleCode} notes={['O componente não controla por conta própria se está aberto; essa responsabilidade permanece do lado consumidor.', 'Focus trap e restauração do foco anterior são tratados internamente enquanto o modal está montado.']}>
          <ModalCustomPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="Variante items" description="A variante items preserva o comportamento da origem: uma lista de entradas expansíveis com imagem opcional e conteúdo detalhado local.">
        <SandboxExample title="Lista expansível" description="Cada item vira um cabeçalho acionável, com placeholder automático quando a imagem falha ou não é fornecida." code={itemsExampleCode} notes={['A estrutura continua neutra em relação a dados externos; basta passar um array de itens com label e content.', 'Esse formato é útil para comparativos, opções de serviço e resumos com detalhamento sob demanda.']}>
          <ModalItemsPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="Variante form" description="A variante form reaproveita o componente Input do próprio design system e mantém a ideia do modal original para pequenos formulários contextuais.">
        <SandboxExample title="Formulário contextual" description="Os campos são descritos por uma lista de configurações tipadas e podem usar helperText, feedback, ícones e os tipos nativos do Input atual." code={formExampleCode} notes={['Quando nenhum value controlado é passado, o Modal guarda localmente o estado dos campos apenas para demonstrar o preenchimento.', 'Se o consumidor precisar controlar os campos, basta fornecer value e onChange em cada configuração de input.']}>
          <ModalFormPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="Limites e acessibilidade" description="A migração removeu o acoplamento com wiring do Volto, mas preservou a intenção principal do componente: interromper o fluxo com foco controlado e interação acessível.">
        <ul style={storyDocsStyles.list}>
          <li>O foco permanece dentro do diálogo enquanto ele está aberto.</li>
          <li>Quando <code>closeOnOverlayClick</code> está ativo, clique no overlay aciona <code>onClose</code>.</li>
          <li>Quando <code>closeOnEscape</code> está ativo, a tecla Escape também aciona <code>onClose</code>.</li>
          <li>O componente não implementa submit, validação remota nem envio de dados; essas responsabilidades continuam do lado consumidor.</li>
          <li>Prefira a variante form apenas para poucos campos. Formulários extensos continuam pertencendo a páginas ou fluxos dedicados.</li>
        </ul>
      </SectionCard>
    </DocsStoryLayout>
}`,...(L=(B=S.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var R,z,Q;k.parameters={...k.parameters,docs:{...(R=k.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Interativo',
  argTypes: {
    modoContraste: {
      control: 'boolean',
      description: 'Visualiza o componente no modo de alto contraste.',
      table: {
        category: 'Acessibilidade'
      }
    },
    title: {
      control: 'text',
      description: 'Título principal do diálogo.',
      table: {
        category: 'Conteúdo'
      }
    },
    type: {
      control: {
        type: 'select'
      },
      options: ['custom', 'items', 'form'],
      description: 'Define a anatomia do corpo do modal.',
      table: {
        category: 'Variação'
      }
    },
    closeOnOverlayClick: {
      control: 'boolean',
      description: 'Quando ativo, clique no overlay dispara onClose.',
      table: {
        category: 'Comportamento'
      }
    },
    closeOnEscape: {
      control: 'boolean',
      description: 'Quando ativo, a tecla Escape dispara onClose.',
      table: {
        category: 'Comportamento'
      }
    },
    buttonLeft: {
      table: {
        disable: true
      }
    },
    buttonRight: {
      table: {
        disable: true
      }
    },
    children: {
      table: {
        disable: true
      }
    },
    inputs: {
      table: {
        disable: true
      }
    },
    items: {
      table: {
        disable: true
      }
    },
    onClose: {
      table: {
        disable: true
      }
    }
  },
  render: args => <ModalInteractivePreview {...args} />
}`,...(Q=(z=k.parameters)==null?void 0:z.docs)==null?void 0:Q.source}}};var H,U,$;M.parameters={...M.parameters,docs:{...(H=M.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Exemplos de uso',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <ModalExamplesPreview />
}`,...($=(U=M.parameters)==null?void 0:U.docs)==null?void 0:$.source}}};const Qe=["ModalDocumentacao","ModalInterativo","ModalExemplosDeUso"];export{S as ModalDocumentacao,M as ModalExemplosDeUso,k as ModalInterativo,Qe as __namedExportsOrder,ze as default};
