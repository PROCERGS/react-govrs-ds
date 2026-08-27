import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{D as f,S as j,s as a,a as r,b as l,c}from"./storyDocs-CoQtGjOG.js";import{M as t}from"./MenuHamburger-DYtvmstP.js";/* empty css              */import"./index-DyTKwKRb.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-A9ZUQmzb.js";const i=[{title:"Institucional",url:"#institucional",items:[{title:"Sobre o órgão",url:"#sobre"},{title:"Estrutura",url:"#estrutura"},{title:"Departamentos",url:"#departamentos",items:[{title:"Planejamento",url:"#planejamento"},{title:"Atendimento ao cidadão",url:"#atendimento"}]}]},{title:"Serviços",url:"#servicos",items:[{title:"Solicitar atendimento",url:"#solicitar"},{title:"Consultar protocolo",url:"#protocolo"},{title:"Guias e orientações",url:"#guias",items:[{title:"Documentos necessários",url:"#documentos"},{title:"Prazos de atendimento",url:"#prazos"},{title:"Canais digitais",url:"#canais"}]}]},{title:"Notícias",url:"#noticias"},{title:"Contato",url:"#contato"}],C=[{title:"Quando usar",text:"Quando a navegação principal precisa abrir uma árvore de links a partir de um acionador compacto no cabeçalho ou em barras de navegação."},{title:"Melhor exploração",text:"Use o story 'Interativo' para testar abertura inicial, limite de níveis desktop e breakpoint usado para alternar entre colunas e submenus expansíveis."},{title:"Comportamento",text:"No desktop, níveis adicionais aparecem por hover ou foco. Em telas compactas, cada item com filhos expande e recolhe seu submenu no próprio fluxo vertical."}],S=`<MenuHamburger
  items={[
    {
      title: 'Institucional',
      url: '#institucional',
      items: [
        { title: 'Sobre o órgão', url: '#sobre' },
        { title: 'Estrutura', url: '#estrutura' },
      ],
    },
    { title: 'Contato', url: '#contato' },
  ]}
/>`,k=`const [open, setOpen] = useState(false)

<MenuHamburger
  items={navigationItems}
  open={open}
  onOpenChange={setOpen}
/>`,z=`<MenuHamburger
  items={navigationItems}
  defaultOpen
/>`,M={display:"grid",alignContent:"start",minHeight:360,border:"1px solid var(--govrs-color-border-default, #dbe5f0)",borderRadius:12,overflow:"hidden",background:"var(--govrs-color-surface-muted, #f8fafc)"},D={position:"relative",display:"flex",minHeight:58,alignItems:"center",gap:12,padding:"0 18px",borderBottom:"1px solid var(--govrs-color-border-default, #dbe5f0)",background:"var(--govrs-color-surface-base, #ffffff)"},E={margin:0,color:"var(--govrs-color-text-muted, #475569)",fontSize:14},R={title:"Navegação/MenuHamburger",component:t,args:{items:i,defaultOpen:!0,navigationLabel:"Navegação principal",openButtonLabel:"Abrir menu",closeButtonLabel:"Fechar menu",expandButtonLabel:"Expandir submenu",collapseButtonLabel:"Recolher submenu",maxDesktopLevels:4},parameters:{layout:"padded",controls:{expanded:!0,sort:"requiredFirst"}}};function d({children:o,label:y}){return e.jsx("div",{style:M,children:e.jsxs("div",{style:D,children:[o,e.jsx("p",{style:E,children:y})]})})}function u(){return e.jsx(d,{label:"Menu desktop aberto",children:e.jsx(t,{items:i,defaultOpen:!0})})}function m(){return e.jsx(d,{label:"Menu mobile aberto",children:e.jsx(t,{items:i,defaultOpen:!0})})}function O(){return e.jsx(d,{label:"Estado aberto por props",children:e.jsx(t,{items:i,open:!0})})}function L(o){return e.jsx(d,{label:"Use o botão para abrir e fechar; no desktop, passe o mouse nos itens com filhos.",children:e.jsx(t,{...o},`${o.defaultOpen}-${o.maxDesktopLevels}`)})}const n={name:"Documentação",parameters:{controls:{disable:!0}},render:()=>e.jsxs(f,{children:[e.jsx(j,{eyebrow:"Documentação guiada",title:e.jsx("h3",{style:a.heroTitle,children:"MenuHamburger"}),description:e.jsx(e.Fragment,{children:"O componente recebe uma árvore de itens e renderiza o acionador de menu com navegação por níveis no desktop e submenus expansíveis em telas compactas."}),variantTags:["desktop em colunas","mobile expansível","controlável por props"],stats:C}),e.jsxs(r,{title:"Estrutura de itens",description:"Cada item pode ter title ou label, url ou href, e filhos em items. Links sem destino continuam renderizados como texto navegável visualmente, preservando a hierarquia sem inventar rota no design system.",children:[e.jsxs("ul",{style:a.list,children:[e.jsxs("li",{children:[e.jsx("code",{children:"items"})," define a árvore de navegação que será exibida no painel."]}),e.jsxs("li",{children:[e.jsx("code",{children:"open"})," e ",e.jsx("code",{children:"onOpenChange"})," permitem controlar o estado de abertura externamente."]}),e.jsxs("li",{children:[e.jsx("code",{children:"defaultOpen"})," inicializa o estado quando o componente é usado de forma não controlada."]}),e.jsxs("li",{children:["O breakpoint responsivo é controlado pelo token CSS ",e.jsx("code",{children:"--govrs-breakpoint-smartphone-landscape-tablet-portrait-max"}),"."]})]}),e.jsx(l,{title:"Uso básico",description:"Contrato mínimo para criar o acionador do menu e preencher a primeira árvore de navegação.",code:S,notes:["Forneça rótulos claros em cada item para que a navegação por teclado e leitores de tela fique previsível.","Use urls reais no produto consumidor; os exemplos usam âncoras apenas para manter a story autocontida."],children:e.jsx(u,{})})]}),e.jsxs(r,{title:"Estados e responsividade",description:"O mesmo conjunto de dados muda de apresentação conforme o breakpoint. Em telas amplas, os subníveis aparecem em listas laterais; em telas compactas, o usuário expande cada ramo no fluxo vertical.",children:[e.jsxs("div",{style:a.cardGrid,children:[e.jsx(c,{label:"Desktop",children:e.jsx(u,{})}),e.jsx(c,{label:"Mobile",children:e.jsx(m,{})})]}),e.jsx(l,{title:"Forçando o modo mobile",description:"A story usa um breakpoint alto apenas para demonstrar a estrutura mobile dentro do canvas.",code:z,children:e.jsx(m,{})})]}),e.jsxs(r,{title:"Camadas de z-index",description:"O painel aberto usa --govrs-z-index-navigation (50). Quando integrado ao Header, o wrapper pai também recebe data-menu-open para escapar de stacking contexts baixos.",children:[e.jsxs("ul",{style:a.list,children:[e.jsxs("li",{children:[e.jsx("code",{children:".govrs-header-wrapper[data-menu-open='true']"})," eleva o header inteiro para a camada de navegação."]}),e.jsxs("li",{children:["O root do menu usa ",e.jsx("code",{children:"position: static"})," para o painel absoluto ancorar no header (largura total), não só no botão toggle."]}),e.jsxs("li",{children:[e.jsx("code",{children:".govrs-menu-hamburger__content"})," usa o mesmo token; o toggle fica em ",e.jsx("code",{children:"calc(var(--govrs-z-index-navigation) + 1)"}),"."]}),e.jsx("li",{children:"Em editores drag-and-drop, prefira estes tokens em vez de valores mágicos (ex.: 99, 101) para permitir override no tema consumidor."}),e.jsxs("li",{children:["Backdrops globais devem usar ",e.jsx("code",{children:"--govrs-z-index-overlay"})," (ou a classe ",e.jsx("code",{children:".govrs-overlay-backdrop"}),") acima da navegação."]})]}),e.jsx("div",{style:a.codeBlock,children:e.jsx("pre",{children:e.jsx("code",{children:`.govrs-header-wrapper[data-menu-open='true'] {
  z-index: var(--govrs-z-index-navigation);
}

.govrs-menu-hamburger__content {
  z-index: var(--govrs-z-index-navigation);
}`})})})]}),e.jsx(r,{title:"Controle externo",description:"Quando o estado precisa acompanhar outro componente, analytics ou um cabeçalho composto, use open e onOpenChange em vez de deixar o MenuHamburger gerenciar tudo sozinho.",children:e.jsx(l,{title:"Abertura controlada",description:"O componente expõe o estado de abertura sem exigir store, router ou qualquer infraestrutura externa.",code:k,children:e.jsx(O,{})})})]})},s={name:"Interativo",argTypes:{modoContraste:{control:"boolean",description:"Visualiza o componente no modo de alto contraste.",table:{category:"Acessibilidade"}},items:{control:"object",description:"Árvore de itens exibida no menu.",table:{category:"Conteúdo"}},defaultOpen:{control:"boolean",description:"Define se o menu inicia aberto no modo não controlado.",table:{category:"Estado"}},maxDesktopLevels:{control:{type:"number",min:1,max:6,step:1},description:"Quantidade máxima de níveis laterais renderizados no desktop.",table:{category:"Comportamento"}},navigationLabel:{control:"text",description:"Nome acessível do nav interno.",table:{category:"Acessibilidade"}},openButtonLabel:{control:"text",description:"Rótulo acessível do botão quando o menu está fechado.",table:{category:"Acessibilidade"}},closeButtonLabel:{control:"text",description:"Rótulo acessível do botão quando o menu está aberto.",table:{category:"Acessibilidade"}},expandButtonLabel:{control:"text",description:"Rótulo acessível dos botões de expandir submenu.",table:{category:"Acessibilidade"}},collapseButtonLabel:{control:"text",description:"Rótulo acessível dos botões de recolher submenu.",table:{category:"Acessibilidade"}},onOpenChange:{action:"open changed",description:"Callback chamado quando o menu abre ou fecha.",table:{category:"Eventos"}}},render:o=>e.jsx(L,{...o})};var p,b,v;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Documentação',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <DocsStoryLayout>
      <DocsHero eyebrow="Documentação guiada" title={<h3 style={storyDocsStyles.heroTitle}>MenuHamburger</h3>} description={<>
            O componente recebe uma árvore de itens e renderiza o acionador de menu com
            navegação por níveis no desktop e submenus expansíveis em telas compactas.
          </>} variantTags={['desktop em colunas', 'mobile expansível', 'controlável por props']} stats={docsHeroStats} />

      <SectionCard title="Estrutura de itens" description="Cada item pode ter title ou label, url ou href, e filhos em items. Links sem destino continuam renderizados como texto navegável visualmente, preservando a hierarquia sem inventar rota no design system.">
        <ul style={storyDocsStyles.list}>
          <li><code>items</code> define a árvore de navegação que será exibida no painel.</li>
          <li><code>open</code> e <code>onOpenChange</code> permitem controlar o estado de abertura externamente.</li>
          <li><code>defaultOpen</code> inicializa o estado quando o componente é usado de forma não controlada.</li>
          <li>O breakpoint responsivo é controlado pelo token CSS <code>--govrs-breakpoint-smartphone-landscape-tablet-portrait-max</code>.</li>
        </ul>

        <SandboxExample title="Uso básico" description="Contrato mínimo para criar o acionador do menu e preencher a primeira árvore de navegação." code={basicExampleCode} notes={['Forneça rótulos claros em cada item para que a navegação por teclado e leitores de tela fique previsível.', 'Use urls reais no produto consumidor; os exemplos usam âncoras apenas para manter a story autocontida.']}>
          <MenuDesktopPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="Estados e responsividade" description="O mesmo conjunto de dados muda de apresentação conforme o breakpoint. Em telas amplas, os subníveis aparecem em listas laterais; em telas compactas, o usuário expande cada ramo no fluxo vertical.">
        <div style={storyDocsStyles.cardGrid}>
          <StoryPreviewCard label="Desktop">
            <MenuDesktopPreview />
          </StoryPreviewCard>

          <StoryPreviewCard label="Mobile">
            <MenuMobilePreview />
          </StoryPreviewCard>
        </div>

        <SandboxExample title="Forçando o modo mobile" description="A story usa um breakpoint alto apenas para demonstrar a estrutura mobile dentro do canvas." code={mobileExampleCode}>
          <MenuMobilePreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="Camadas de z-index" description="O painel aberto usa --govrs-z-index-navigation (50). Quando integrado ao Header, o wrapper pai também recebe data-menu-open para escapar de stacking contexts baixos.">
        <ul style={storyDocsStyles.list}>
          <li><code>.govrs-header-wrapper[data-menu-open='true']</code> eleva o header inteiro para a camada de navegação.</li>
          <li>O root do menu usa <code>position: static</code> para o painel absoluto ancorar no header (largura total), não só no botão toggle.</li>
          <li><code>.govrs-menu-hamburger__content</code> usa o mesmo token; o toggle fica em <code>calc(var(--govrs-z-index-navigation) + 1)</code>.</li>
          <li>Em editores drag-and-drop, prefira estes tokens em vez de valores mágicos (ex.: 99, 101) para permitir override no tema consumidor.</li>
          <li>Backdrops globais devem usar <code>--govrs-z-index-overlay</code> (ou a classe <code>.govrs-overlay-backdrop</code>) acima da navegação.</li>
        </ul>

        <div style={storyDocsStyles.codeBlock}>
          <pre>
            <code>{\`.govrs-header-wrapper[data-menu-open='true'] {
  z-index: var(--govrs-z-index-navigation);
}

.govrs-menu-hamburger__content {
  z-index: var(--govrs-z-index-navigation);
}\`}</code>
          </pre>
        </div>
      </SectionCard>

      <SectionCard title="Controle externo" description="Quando o estado precisa acompanhar outro componente, analytics ou um cabeçalho composto, use open e onOpenChange em vez de deixar o MenuHamburger gerenciar tudo sozinho.">
        <SandboxExample title="Abertura controlada" description="O componente expõe o estado de abertura sem exigir store, router ou qualquer infraestrutura externa." code={controlledExampleCode}>
          <MenuControlledPreview />
        </SandboxExample>
      </SectionCard>
    </DocsStoryLayout>
}`,...(v=(b=n.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var x,g,h;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
      control: 'object',
      description: 'Árvore de itens exibida no menu.',
      table: {
        category: 'Conteúdo'
      }
    },
    defaultOpen: {
      control: 'boolean',
      description: 'Define se o menu inicia aberto no modo não controlado.',
      table: {
        category: 'Estado'
      }
    },
    maxDesktopLevels: {
      control: {
        type: 'number',
        min: 1,
        max: 6,
        step: 1
      },
      description: 'Quantidade máxima de níveis laterais renderizados no desktop.',
      table: {
        category: 'Comportamento'
      }
    },
    navigationLabel: {
      control: 'text',
      description: 'Nome acessível do nav interno.',
      table: {
        category: 'Acessibilidade'
      }
    },
    openButtonLabel: {
      control: 'text',
      description: 'Rótulo acessível do botão quando o menu está fechado.',
      table: {
        category: 'Acessibilidade'
      }
    },
    closeButtonLabel: {
      control: 'text',
      description: 'Rótulo acessível do botão quando o menu está aberto.',
      table: {
        category: 'Acessibilidade'
      }
    },
    expandButtonLabel: {
      control: 'text',
      description: 'Rótulo acessível dos botões de expandir submenu.',
      table: {
        category: 'Acessibilidade'
      }
    },
    collapseButtonLabel: {
      control: 'text',
      description: 'Rótulo acessível dos botões de recolher submenu.',
      table: {
        category: 'Acessibilidade'
      }
    },
    onOpenChange: {
      action: 'open changed',
      description: 'Callback chamado quando o menu abre ou fecha.',
      table: {
        category: 'Eventos'
      }
    }
  },
  render: args => <MenuInteractivePreview {...args} />
}`,...(h=(g=s.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const _=["MenuHamburgerDocumentacao","MenuHamburgerInterativo"];export{n as MenuHamburgerDocumentacao,s as MenuHamburgerInterativo,_ as __namedExportsOrder,R as default};
