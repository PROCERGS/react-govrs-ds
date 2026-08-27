import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{D as re,S as ne,s as m,a as u,b as g,c as j}from"./storyDocs-CoQtGjOG.js";import{r as s}from"./index-DyTKwKRb.js";import{F as q,f as ie,k as se,i as le}from"./index-A9ZUQmzb.js";/* empty css              */import"./_commonjsHelpers-Cpj98o6Y.js";function ce(...a){return a.filter(Boolean).join(" ")}function E(a){return a==null||typeof a=="boolean"?"":typeof a=="string"||typeof a=="number"?String(a):Array.isArray(a)?a.map(E).join(" "):s.isValidElement(a)?E(a.props.children):""}function O(a,p){return p||a.length===0?[]:[a[0].id??""]}function A({items:a,headline:p,titleSize:_="h3",theme:U="default",rightArrows:W=!0,collapsed:C=!0,nonExclusive:f=!0,filtering:S=!1,filterPlaceholder:K="Digite para filtrar...",filterLabel:J="Filtrar painéis do accordion",clearFilterLabel:X="Limpar filtro",noResultsMessage:Y="Nenhum painel corresponde ao filtro informado.",className:Z}){const x=s.useId().replace(/:/g,""),[h,k]=s.useState(""),l=s.useMemo(()=>a.map((o,t)=>({...o,id:o.id??`govrs-accordion-${x}-item-${t}`})),[x,a]),w=l.map(o=>o.id).join("|"),d=s.useRef(new Map),i=s.useRef(new Set(O(l,C)));s.useEffect(()=>{const o=new Set(O(l,C));i.current=o,d.current.forEach((t,r)=>{const n=o.has(r);t.open!==n&&(t.open=n)})},[C,w]),s.useEffect(()=>{if(f||i.current.size<=1)return;const o=new Set;l.some(t=>{const r=t.id??"";return i.current.has(r)?(o.add(r),!0):!1}),i.current=o,d.current.forEach((t,r)=>{const n=o.has(r);t.open!==n&&(t.open=n)})},[w,f,l]);const z=s.useMemo(()=>{const o=h.trim().toLowerCase();return!S||o.length===0?l:l.filter(t=>[t.title,t.searchText??E(t.content)].join(" ").toLowerCase().includes(o))},[h,S,l]);function ee(o,t,r){const n=r.currentTarget;if(t){n.open&&(n.open=!1),i.current.delete(o);return}if(n.open){if(f){i.current.add(o);return}const D=new Set([o]);i.current=D,d.current.forEach((N,te)=>{const P=D.has(te);N.open!==P&&(N.open=P)});return}i.current.delete(o)}const oe=_,I=`govrs-accordion-${x}-filter`,ae=`govrs-accordion-${x}-group`;return e.jsxs("div",{className:ce("govrs-accordion",Z),"data-theme":U,"data-right-arrows":String(W),children:[p?e.jsx("h2",{className:"govrs-accordion__headline",children:p}):null,S?e.jsxs("div",{className:"govrs-accordion__filter",children:[e.jsx("label",{htmlFor:I,className:"govrs-accordion__visually-hidden",children:J}),e.jsxs("div",{className:"govrs-accordion__filter-control",children:[e.jsx("span",{className:"govrs-accordion__filter-icon","aria-hidden":"true",children:e.jsx(q,{icon:ie})}),e.jsx("input",{id:I,type:"search",className:"govrs-accordion__filter-input",value:h,placeholder:K,onChange:o=>k(o.target.value)}),h?e.jsx("button",{type:"button",className:"govrs-accordion__filter-clear",onClick:()=>k(""),"aria-label":X,children:e.jsx(q,{icon:se})}):null]})]}):null,e.jsx("div",{className:"govrs-accordion__list",children:z.length>0?z.map(o=>{const t=o.id??"";return e.jsxs("details",{className:"govrs-accordion__item",name:f?void 0:ae,"data-disabled":String(!!o.disabled),onToggle:r=>ee(t,o.disabled,r),ref:r=>{if(r){d.current.set(t,r);const n=i.current.has(t);r.open!==n&&(r.open=n);return}d.current.delete(t)},children:[e.jsx("summary",{className:"govrs-accordion__trigger","aria-disabled":o.disabled?"true":void 0,tabIndex:o.disabled?-1:void 0,onClick:o.disabled?r=>{r.preventDefault()}:void 0,children:e.jsx(oe,{className:`govrs-accordion__heading govrs-accordion__heading--${_}`,children:e.jsxs("span",{className:"govrs-accordion__heading-content",children:[e.jsx("span",{className:"govrs-accordion__icon","aria-hidden":"true",children:e.jsx(q,{icon:le})}),e.jsx("span",{className:"govrs-accordion__title",children:o.title})]})})}),e.jsx("div",{children:e.jsx("div",{className:"govrs-accordion__content-body",children:o.content})})]},t)}):e.jsx("div",{className:"govrs-accordion__empty",role:"status",children:Y})})]})}A.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id?: string
  title: string
  content?: ReactNode
  disabled?: boolean
  searchText?: string
}`,signature:{properties:[{key:"id",value:{name:"string",required:!1}},{key:"title",value:{name:"string",required:!0}},{key:"content",value:{name:"ReactNode",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"searchText",value:{name:"string",required:!1}}]}}],raw:"AccordionItem[]"},description:""},headline:{required:!1,tsType:{name:"ReactNode"},description:""},titleSize:{required:!1,tsType:{name:"union",raw:"'h2' | 'h3' | 'h4' | 'h5' | 'h6'",elements:[{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"},{name:"literal",value:"'h4'"},{name:"literal",value:"'h5'"},{name:"literal",value:"'h6'"}]},description:"",defaultValue:{value:"'h3'",computed:!1}},theme:{required:!1,tsType:{name:"union",raw:"'default' | 'dark'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'dark'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},rightArrows:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},collapsed:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},nonExclusive:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},filtering:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},filterPlaceholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Digite para filtrar...'",computed:!1}},filterLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Filtrar painéis do accordion'",computed:!1}},clearFilterLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Limpar filtro'",computed:!1}},noResultsMessage:{required:!1,tsType:{name:"ReactNode"},description:"",defaultValue:{value:"'Nenhum painel corresponde ao filtro informado.'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const de=["default","dark","filtering","exclusive"],ue=[{title:"Quando usar",text:"Quando o conteúdo precisa ser organizado em painéis colapsáveis, com opção de abertura exclusiva, tema escuro e filtragem local por título ou conteúdo."},{title:"Melhor exploração",text:"Use o story 'Interativo' para alternar tema, posição das setas, abertura exclusiva e filtragem. A documentação concentra a comparação visual entre temas, enquanto o story 'Filtragem' isola a busca local."},{title:"Comportamento",text:"O componente abre o primeiro painel quando não inicia colapsado, pode manter múltiplos painéis abertos e filtra localmente usando o texto visível de cada item."}],T=[{id:"volto",title:"O que foi migrado do Accordion do Volto?",content:e.jsxs("p",{children:["A migração preserva a ideia de painéis colapsáveis com tema, filtragem e abertura exclusiva ou múltipla, mas traduz o contrato para React puro com",e.jsx("code",{children:" items "})," tipados em vez de blocos CMS."]})},{id:"itens",title:"Como estruturar os itens?",content:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Cada item recebe um título e um conteúdo React."}),e.jsxs("p",{children:["Isso permite usar texto simples, listas, links ou composições mais ricas sem depender de ",e.jsx("code",{children:"RenderBlocks"}),"."]})]})},{id:"filtro",title:"A filtragem procura só no título?",content:e.jsxs("p",{children:["Não. Quando ",e.jsx("code",{children:"filtering"})," está ativo, o componente procura no título e também no texto renderizado dentro do conteúdo de cada painel."]})},{id:"tema",title:"Quando usar o tema dark?",content:e.jsx("p",{children:"O tema dark funciona bem em seções de destaque ou superfícies onde o contraste alto ajuda a separar o bloco do restante da página."})}],me=`<Accordion
  headline="Perguntas frequentes"
  items={[
    {
      id: 'volto',
      title: 'O que foi migrado do Accordion do Volto?',
      content: <p>Contrato traduzido para React puro.</p>,
    },
    {
      id: 'itens',
      title: 'Como estruturar os itens?',
      content: <p>Cada item recebe título e conteúdo React.</p>,
    },
  ]}
  titleSize="h5"
  collapsed={false}
/>`,pe=`<Accordion
  items={items}
  theme="default"
/>

<Accordion
  items={items}
  theme="dark"
/>
`,fe=`<Accordion
  items={items}
  nonExclusive={true}
  collapsed={false}
/>

<Accordion
  items={items}
  nonExclusive={false}
  collapsed={false}
/>
`,xe=`<Accordion
  items={items}
  filtering
  filterPlaceholder="Busque por Volto, tema ou filtros"
/>`,qe={title:"Conteúdo/Accordion",component:A,args:{items:T,headline:"Perguntas frequentes",titleSize:"h5",theme:"default",rightArrows:!0,collapsed:!0,nonExclusive:!0,filtering:!1,filterPlaceholder:"Digite para filtrar..."},parameters:{layout:"padded",controls:{expanded:!0,sort:"requiredFirst"}}};function c(a={}){return e.jsx("div",{style:{width:"100%",maxWidth:760},children:e.jsx(A,{items:T,titleSize:"h5",...a})})}function he(){return e.jsxs("div",{style:m.cardGrid,children:[e.jsx(j,{label:"Default",children:e.jsx(c,{headline:"Tema default",theme:"default",collapsed:!1})}),e.jsx(j,{label:"Dark",children:e.jsx(c,{headline:"Tema dark",theme:"dark",collapsed:!1})})]})}function ge(){return e.jsxs("div",{style:m.cardGrid,children:[e.jsx(j,{label:"Múltiplos painéis",children:e.jsx(c,{headline:"Abertura não exclusiva",collapsed:!1,nonExclusive:!0})}),e.jsx(j,{label:"Um painel por vez",children:e.jsx(c,{headline:"Abertura exclusiva",collapsed:!1,nonExclusive:!1})})]})}function G(){return e.jsx(c,{headline:"Buscar perguntas",collapsed:!1,filtering:!0,filterPlaceholder:"Busque por Volto, tema ou filtros"})}function ve(a){return e.jsx("div",{style:{width:"100%",maxWidth:760},children:e.jsx(A,{...a,items:T})})}const v={name:"Documentação",parameters:{controls:{disable:!0}},render:()=>e.jsxs(re,{children:[e.jsx(ne,{eyebrow:"Documentação guiada",title:e.jsx("h3",{style:m.heroTitle,children:"Accordion"}),description:e.jsxs(e.Fragment,{children:["O componente ",e.jsx("code",{children:"Accordion"})," organiza conteúdo em painéis expansíveis com tema, filtro local e modo exclusivo ou múltiplo."]}),variantTags:de,stats:ue}),e.jsxs(u,{title:"Como usar",description:"A versão migrada preserva a intenção do Accordion do Volto, mas troca o contrato baseado em blocos por uma API tipada com items e conteúdo React puro. Isso reduz acoplamento com CMS e mantém a composição executável no Storybook.",children:[e.jsxs("ul",{style:m.list,children:[e.jsxs("li",{children:[e.jsx("code",{children:"items"})," define a lista de painéis com título, conteúdo e texto opcional de busca."]}),e.jsxs("li",{children:[e.jsx("code",{children:"headline"})," contextualiza o conjunto quando o accordion aparece como seção da página."]}),e.jsxs("li",{children:[e.jsx("code",{children:"theme"})," alterna entre visual default e dark sem mudar a semântica."]}),e.jsxs("li",{children:[e.jsx("code",{children:"nonExclusive"})," decide se vários painéis podem ficar abertos ao mesmo tempo."]}),e.jsxs("li",{children:[e.jsx("code",{children:"filtering"})," habilita a busca local por título e conteúdo."]})]}),e.jsx(g,{title:"Estrutura base",description:"Exemplo direto da composição recomendada para FAQ, ajuda contextual ou listas de instruções progressivas.",code:me,children:e.jsx(c,{headline:"Perguntas frequentes",collapsed:!1})})]}),e.jsx(u,{title:"Temas disponíveis",description:"O tema default mantém a aparência clara e neutra. O tema dark reaproveita a paleta de marca para blocos mais destacados.",children:e.jsx(g,{title:"Default e dark",description:"Comparação rápida entre os dois tratamentos visuais preservando o mesmo conteúdo e o mesmo comportamento.",code:pe,children:e.jsx(he,{})})}),e.jsx(u,{title:"Comportamento de abertura",description:"O componente pode funcionar como lista de painéis independentes ou como accordion exclusivo. A decisão depende mais do fluxo de leitura do que da aparência.",children:e.jsx(g,{title:"Múltiplos versus exclusivo",description:"Quando só um painel deve permanecer aberto por vez, use nonExclusive=false.",code:fe,children:e.jsx(ge,{})})}),e.jsx(u,{title:"Filtragem local",description:"A filtragem traduz o recurso da origem para uma busca local e autocontida. Isso facilita uso em FAQs extensas sem carregar dependências externas ou estado global.",children:e.jsx(g,{title:"Busca por título e conteúdo",description:"Digite termos como Volto, tema ou filtro para verificar quais painéis continuam visíveis.",code:xe,children:e.jsx(G,{})})}),e.jsx(u,{title:"Limitações e contrato",description:"O componente cobre a superfície reutilizável do accordion, mas deliberadamente não transporta o acoplamento da origem com querystring, RenderBlocks, edição inline e schema de bloco.",children:e.jsxs("ul",{style:m.list,children:[e.jsx("li",{children:"A busca é local ao conjunto renderizado; ela não consulta APIs nem sincroniza resultado com rota."}),e.jsx("li",{children:"O conteúdo é recebido por props como ReactNode, então a montagem dos itens continua responsabilidade do consumidor."}),e.jsx("li",{children:"O estado de abertura é interno; se o produto precisar orquestrar isso globalmente, vale encapsular o componente em uma camada superior."}),e.jsx("li",{children:"O tema atual replica apenas as opções default e dark observadas na origem, sem expandir a paleta sem necessidade."})]})})]})},b={name:"Interativo",argTypes:{modoContraste:{control:"boolean",description:"Visualiza o componente no modo de alto contraste.",table:{category:"Acessibilidade"}},items:{control:!1,description:"A story usa um conjunto fixo de itens para manter a comparação entre estados.",table:{category:"Composição"}},headline:{control:"text",description:"Título opcional exibido acima do conjunto.",table:{category:"Conteúdo"}},titleSize:{control:{type:"radio"},options:["h2","h3","h4","h5","h6"],description:"Define o nível semântico dos títulos dos painéis.",table:{category:"Composição"}},theme:{control:{type:"radio"},options:["default","dark"],description:"Seleciona o tema visual do accordion.",table:{category:"Estado visual"}},rightArrows:{control:"boolean",description:"Posiciona as setas à direita quando true e à esquerda quando false.",table:{category:"Estado visual"}},collapsed:{control:"boolean",description:"Quando false, o primeiro painel já inicia aberto.",table:{category:"Comportamento"}},nonExclusive:{control:"boolean",description:"Permite múltiplos painéis abertos ao mesmo tempo.",table:{category:"Comportamento"}},filtering:{control:"boolean",description:"Habilita filtro local por título e conteúdo.",table:{category:"Comportamento"}},filterPlaceholder:{control:"text",description:"Texto exibido no campo de filtro quando ele estiver ativo.",table:{category:"Conteúdo"}},filterLabel:{control:"text",description:"Rótulo acessível do campo de filtro.",table:{category:"Acessibilidade"}},clearFilterLabel:{control:"text",description:"Rótulo acessível do botão de limpar filtro.",table:{category:"Acessibilidade"}},noResultsMessage:{control:"text",description:"Mensagem exibida quando o filtro não encontra nenhum painel.",table:{category:"Conteúdo"}}},render:a=>e.jsx(ve,{...a})},y={name:"Filtragem",parameters:{controls:{disable:!0}},render:()=>e.jsx(G,{})};var F,R,V;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Documentação',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <DocsStoryLayout>
      <DocsHero eyebrow="Documentação guiada" title={<h3 style={storyDocsStyles.heroTitle}>Accordion</h3>} description={<>
            O componente <code>Accordion</code> organiza conteúdo em painéis
            expansíveis com tema, filtro local e modo exclusivo ou múltiplo.
          </>} variantTags={docsVariantTags} stats={docsHeroStats} />

      <SectionCard title="Como usar" description="A versão migrada preserva a intenção do Accordion do Volto, mas troca o contrato baseado em blocos por uma API tipada com items e conteúdo React puro. Isso reduz acoplamento com CMS e mantém a composição executável no Storybook.">
        <ul style={storyDocsStyles.list}>
          <li><code>items</code> define a lista de painéis com título, conteúdo e texto opcional de busca.</li>
          <li><code>headline</code> contextualiza o conjunto quando o accordion aparece como seção da página.</li>
          <li><code>theme</code> alterna entre visual default e dark sem mudar a semântica.</li>
          <li><code>nonExclusive</code> decide se vários painéis podem ficar abertos ao mesmo tempo.</li>
          <li><code>filtering</code> habilita a busca local por título e conteúdo.</li>
        </ul>

        <SandboxExample title="Estrutura base" description="Exemplo direto da composição recomendada para FAQ, ajuda contextual ou listas de instruções progressivas." code={basicExampleCode}>
          <AccordionPreview headline="Perguntas frequentes" collapsed={false} />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="Temas disponíveis" description="O tema default mantém a aparência clara e neutra. O tema dark reaproveita a paleta de marca para blocos mais destacados.">
        <SandboxExample title="Default e dark" description="Comparação rápida entre os dois tratamentos visuais preservando o mesmo conteúdo e o mesmo comportamento." code={themesExampleCode}>
          <AccordionThemesPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="Comportamento de abertura" description="O componente pode funcionar como lista de painéis independentes ou como accordion exclusivo. A decisão depende mais do fluxo de leitura do que da aparência.">
        <SandboxExample title="Múltiplos versus exclusivo" description="Quando só um painel deve permanecer aberto por vez, use nonExclusive=false." code={behaviorExampleCode}>
          <AccordionBehaviorPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="Filtragem local" description="A filtragem traduz o recurso da origem para uma busca local e autocontida. Isso facilita uso em FAQs extensas sem carregar dependências externas ou estado global.">
        <SandboxExample title="Busca por título e conteúdo" description="Digite termos como Volto, tema ou filtro para verificar quais painéis continuam visíveis." code={filteringExampleCode}>
          <AccordionFilteringPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="Limitações e contrato" description="O componente cobre a superfície reutilizável do accordion, mas deliberadamente não transporta o acoplamento da origem com querystring, RenderBlocks, edição inline e schema de bloco.">
        <ul style={storyDocsStyles.list}>
          <li>A busca é local ao conjunto renderizado; ela não consulta APIs nem sincroniza resultado com rota.</li>
          <li>O conteúdo é recebido por props como ReactNode, então a montagem dos itens continua responsabilidade do consumidor.</li>
          <li>O estado de abertura é interno; se o produto precisar orquestrar isso globalmente, vale encapsular o componente em uma camada superior.</li>
          <li>O tema atual replica apenas as opções default e dark observadas na origem, sem expandir a paleta sem necessidade.</li>
        </ul>
      </SectionCard>
    </DocsStoryLayout>
}`,...(V=(R=v.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var B,M,L;b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Interativo',
  argTypes: {
    modoContraste: {
      control: 'boolean',
      description: 'Visualiza o componente no modo de alto contraste.',
      table: {
        category: 'Acessibilidade'
      }
    },
    items: {
      control: false,
      description: 'A story usa um conjunto fixo de itens para manter a comparação entre estados.',
      table: {
        category: 'Composição'
      }
    },
    headline: {
      control: 'text',
      description: 'Título opcional exibido acima do conjunto.',
      table: {
        category: 'Conteúdo'
      }
    },
    titleSize: {
      control: {
        type: 'radio'
      },
      options: ['h2', 'h3', 'h4', 'h5', 'h6'],
      description: 'Define o nível semântico dos títulos dos painéis.',
      table: {
        category: 'Composição'
      }
    },
    theme: {
      control: {
        type: 'radio'
      },
      options: ['default', 'dark'],
      description: 'Seleciona o tema visual do accordion.',
      table: {
        category: 'Estado visual'
      }
    },
    rightArrows: {
      control: 'boolean',
      description: 'Posiciona as setas à direita quando true e à esquerda quando false.',
      table: {
        category: 'Estado visual'
      }
    },
    collapsed: {
      control: 'boolean',
      description: 'Quando false, o primeiro painel já inicia aberto.',
      table: {
        category: 'Comportamento'
      }
    },
    nonExclusive: {
      control: 'boolean',
      description: 'Permite múltiplos painéis abertos ao mesmo tempo.',
      table: {
        category: 'Comportamento'
      }
    },
    filtering: {
      control: 'boolean',
      description: 'Habilita filtro local por título e conteúdo.',
      table: {
        category: 'Comportamento'
      }
    },
    filterPlaceholder: {
      control: 'text',
      description: 'Texto exibido no campo de filtro quando ele estiver ativo.',
      table: {
        category: 'Conteúdo'
      }
    },
    filterLabel: {
      control: 'text',
      description: 'Rótulo acessível do campo de filtro.',
      table: {
        category: 'Acessibilidade'
      }
    },
    clearFilterLabel: {
      control: 'text',
      description: 'Rótulo acessível do botão de limpar filtro.',
      table: {
        category: 'Acessibilidade'
      }
    },
    noResultsMessage: {
      control: 'text',
      description: 'Mensagem exibida quando o filtro não encontra nenhum painel.',
      table: {
        category: 'Conteúdo'
      }
    }
  },
  render: args => <AccordionInteractivePreview {...args} />
}`,...(L=(M=b.parameters)==null?void 0:M.docs)==null?void 0:L.source}}};var Q,H,$;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'Filtragem',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <AccordionFilteringPreview />
}`,...($=(H=y.parameters)==null?void 0:H.docs)==null?void 0:$.source}}};const Ee=["AccordionDocumentacao","AccordionInterativo","AccordionFiltragem"];export{v as AccordionDocumentacao,y as AccordionFiltragem,b as AccordionInterativo,Ee as __namedExportsOrder,qe as default};
