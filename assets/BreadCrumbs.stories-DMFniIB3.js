import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{D as w,S as H,s as n,a as s,b as m,c as u}from"./storyDocs-CoQtGjOG.js";/* empty css              */import"./index-DyTKwKRb.js";import"./_commonjsHelpers-Cpj98o6Y.js";function k(...a){return a.filter(Boolean).join(" ")}function E(){return e.jsx("svg",{className:"govrs-breadcrumbs__home-icon",width:"19",height:"14",viewBox:"0 0 19 14",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",children:e.jsx("path",{d:"M8.78125 3.625C8.84375 3.5625 8.9375 3.53125 9.03125 3.53125C9.09375 3.53125 9.1875 3.5625 9.25 3.625L15.0313 8.34375V13.4688C15.0313 13.75 14.7813 13.9688 14.5313 13.9688H11C10.75 13.9688 10.5 13.75 10.5 13.4688V10.4688C10.5 10.2188 10.2813 9.96875 10 9.96875H8C7.75 9.96875 7.5 10.2188 7.5 10.4688V13.4688C7.5 13.75 7.28125 13.9688 7.03125 13.9688H3.53125C3.25 13.9688 3.03125 13.75 3.03125 13.4688V8.375L8.78125 3.625ZM17.875 6.84375C17.9688 6.90625 18.0313 7.03125 18.0313 7.125C18.0313 7.21875 18 7.3125 17.9375 7.375L17.125 8.34375C17.0625 8.4375 16.9688 8.46875 16.8438 8.46875C16.75 8.46875 16.6563 8.4375 16.5938 8.375L9.25 2.34375C9.1875 2.28125 9.09375 2.25 9.03125 2.25C8.9375 2.25 8.84375 2.28125 8.78125 2.34375L1.4375 8.375C1.375 8.4375 1.28125 8.46875 1.1875 8.46875C1.0625 8.46875 0.968754 8.4375 0.906254 8.34375L0.0937538 7.375C0.0625038 7.3125 3.8147e-06 7.21875 3.8147e-06 7.125C3.8147e-06 7.03125 0.0625038 6.90625 0.156254 6.84375L8.0625 0.3125C8.3125 0.125 8.65625 0 9.03125 0C9.375 0 9.71875 0.125 9.96875 0.3125L12.7813 2.625V0.375C12.7813 0.15625 12.9375 0 13.1563 0H14.9063C15.0938 0 15.2813 0.15625 15.2813 0.375V4.6875L17.875 6.84375Z",fill:"currentColor"})})}function r({items:a=[],homeHref:o="/",homeLabel:c="Página inicial",showHome:h=!0,ariaLabel:j="Migalhas de pão",className:A}){return(h?1:0)+a.length<2?null:e.jsx("nav",{className:k("govrs-breadcrumbs",A),"aria-label":j,children:e.jsxs("ol",{className:"govrs-breadcrumbs__list",children:[h?e.jsx("li",{className:"govrs-breadcrumbs__item",children:e.jsx("a",{className:"govrs-breadcrumbs__link govrs-breadcrumbs__link--home",href:o,"aria-label":c,children:e.jsx(E,{})})}):null,a.map((t,d)=>{const p=d===a.length-1,S=typeof t.label=="string"||typeof t.label=="number"?`${t.label}-${d}`:d;return e.jsx("li",{className:"govrs-breadcrumbs__item",children:p||!t.href?e.jsx("span",{className:"govrs-breadcrumbs__current","aria-current":p?"page":void 0,children:t.label}):e.jsx("a",{className:"govrs-breadcrumbs__link",href:t.href,children:t.label})},S)})]})})}r.__docgenInfo={description:"",methods:[],displayName:"BreadCrumbs",props:{items:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: ReactNode
  href?: string
}`,signature:{properties:[{key:"label",value:{name:"ReactNode",required:!0}},{key:"href",value:{name:"string",required:!1}}]}}],raw:"BreadCrumbsItem[]"},description:"",defaultValue:{value:"[]",computed:!1}},homeHref:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'/'",computed:!1}},homeLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Página inicial'",computed:!1}},showHome:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Migalhas de pão'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const L=["home","links","current","separator"],P=[{title:"Quando usar",text:"Quando a interface precisa mostrar o caminho hierárquico até a página atual e permitir retorno rápido aos níveis anteriores."},{title:"Melhor exploração",text:"Use o story 'Interativo' para alternar home, labels dos ancestrais, página atual e modo de alto contraste."},{title:"Comportamento",text:"A raiz usa o ícone de home. Itens com href viram links. O último item da trilha é sempre texto da página atual, sem link."}],y=[{label:"Página Ancestral 01",href:"#ancestral-01"},{label:"Página Ancestral 02",href:"#ancestral-02"},{label:"Página Ancestral 03",href:"#ancestral-03"},{label:"Página Atual"}],T=`<BreadCrumbs
  homeHref="/"
  items={[
    { label: 'Página Ancestral 01', href: '/ancestral-01' },
    { label: 'Página Ancestral 02', href: '/ancestral-02' },
    { label: 'Página Ancestral 03', href: '/ancestral-03' },
    { label: 'Página Atual' },
  ]}
/>`,z=`<BreadCrumbs
  homeHref="/"
  items={[{ label: 'Página Atual' }]}
/>`,D=`<BreadCrumbs
  showHome
  homeHref="/"
  homeLabel="Página inicial"
  items={[
    { label: 'Ancestral', href: '/ancestral' },
    { label: 'Página Atual' },
  ]}
/>`,Q={title:"Navegação/BreadCrumbs",component:r,parameters:{layout:"padded",controls:{expanded:!0,sort:"requiredFirst"}}};function q(){return e.jsx(r,{homeHref:"#",items:y})}function B(){return e.jsx(r,{homeHref:"#",items:[{label:"Página Atual"}]})}function I(){return e.jsxs("div",{style:n.cardGrid,children:[e.jsx(u,{label:"Trilha completa",children:e.jsx(r,{homeHref:"#",items:y})}),e.jsx(u,{label:"Trilha curta",children:e.jsx(r,{homeHref:"#",items:[{label:"Página Atual"}]})}),e.jsx(u,{label:"Sem home",children:e.jsx(r,{showHome:!1,items:[{label:"Seção",href:"#secao"},{label:"Página Atual"}]})})]})}function N(a){const o=[];return a.showAncestral01&&a.ancestral01.trim()&&o.push({label:a.ancestral01,href:"#ancestral-01"}),a.showAncestral02&&a.ancestral02.trim()&&o.push({label:a.ancestral02,href:"#ancestral-02"}),a.showAncestral03&&a.ancestral03.trim()&&o.push({label:a.ancestral03,href:"#ancestral-03"}),o.push({label:a.currentLabel||"Página Atual"}),o}const i={name:"Documentação",parameters:{controls:{disable:!0}},render:()=>e.jsxs(w,{children:[e.jsx(H,{eyebrow:"Documentação guiada",title:e.jsx("h3",{style:n.heroTitle,children:"BreadCrumbs"}),description:e.jsxs(e.Fragment,{children:["O componente ",e.jsx("code",{children:"BreadCrumbs"})," monta o caminho de migalhas até a página atual: ícone de home na raiz, links para os níveis anteriores e texto simples no item corrente."]}),variantTags:L,stats:P}),e.jsxs(s,{title:"Anatomia",description:"A trilha combina quatro peças: home com ícone, separador >, links ancestrais e o texto da página atual.",children:[e.jsxs("ul",{style:n.list,children:[e.jsxs("li",{children:[e.jsx("code",{children:"showHome"})," e ",e.jsx("code",{children:"homeHref"})," controlam a raiz com o ícone de casinha."]}),e.jsxs("li",{children:[e.jsx("code",{children:"items"})," recebe a lista ordenada do caminho. Cada item com ",e.jsx("code",{children:"href"})," vira link."]}),e.jsxs("li",{children:["O último item de ",e.jsx("code",{children:"items"})," é sempre a página atual: renderiza como texto, mesmo se vier com ",e.jsx("code",{children:"href"}),"."]}),e.jsxs("li",{children:["O separador ",e.jsx("code",{children:">"})," é inserido pelo CSS entre os itens, sem entrar no markup de conteúdo."]})]}),e.jsx(m,{title:"Peças da trilha",description:"Compare a trilha completa, a trilha curta (home + atual) e uma variação sem o ícone da raiz.",code:D,notes:["Com menos de dois níveis (só home ou só a página atual), o componente não renderiza.","Links usam <a> nativo — o Design System não depende de router."],children:e.jsx(I,{})})]}),e.jsx(s,{title:"Exemplo do mockup",description:"Trilha com três páginas ancestrais e a página atual, no mesmo formato visual de referência.",children:e.jsx(m,{title:"Home + ancestrais + atual",description:"A raiz usa o SVG de home. Os ancestrais são links verdes. A página atual permanece em texto cinza, sem link.",code:T,notes:["Omita href no último item para deixar explícito que ele é a página atual.","homeHref aponta para a raiz do site consumidor."],children:e.jsx(q,{})})}),e.jsx(s,{title:"Trilha curta",description:"Quando há apenas um nível abaixo da home, a trilha reduz para ícone + página atual.",children:e.jsx(m,{title:"Home e página atual",description:"Útil em páginas logo abaixo da raiz, sem ancestrais intermediários.",code:z,children:e.jsx(B,{})})}),e.jsx(s,{title:"Limites de uso",description:"BreadCrumbs descreve navegação hierárquica. Ele não pagina listas, não lê CMS e não colapsa o meio da trilha nesta versão.",children:e.jsxs("ul",{style:n.list,children:[e.jsxs("li",{children:["O pai monta ",e.jsx("code",{children:"items"}),"; o componente só renderiza a trilha."]}),e.jsxs("li",{children:["Trilha com um único nível (somente home ou somente a página atual) retorna ",e.jsx("code",{children:"null"})," — não há migalhas úteis nesse caso."]}),e.jsxs("li",{children:["O último item nunca vira link, mesmo que ",e.jsx("code",{children:"href"})," seja informado."]}),e.jsxs("li",{children:[e.jsx("code",{children:"homeHref"})," e os ",e.jsx("code",{children:"href"})," dos itens são URLs nativas — integração com Volto/",e.jsx("code",{children:"UniversalLink"})," fica no consumidor."]}),e.jsxs("li",{children:["Não há colapso com reticências nesta versão; em telas estreitas a trilha quebra com ",e.jsx("code",{children:"flex-wrap"}),"."]})]})})]})},l={name:"Interativo",args:{showHome:!0,homeHref:"#",showAncestral01:!0,ancestral01:"Página Ancestral 01",showAncestral02:!0,ancestral02:"Página Ancestral 02",showAncestral03:!0,ancestral03:"Página Ancestral 03",currentLabel:"Página Atual",modoContraste:!1},argTypes:{modoContraste:{control:"boolean",description:"Visualiza o componente no modo de alto contraste.",table:{category:"Acessibilidade"}},showHome:{control:"boolean",description:"Exibe o ícone de home no início da trilha.",table:{category:"Estrutura"}},homeHref:{control:"text",description:"URL da raiz. No Storybook use # para evitar navegação real.",table:{category:"Estrutura"}},showAncestral01:{control:"boolean",description:"Inclui o primeiro ancestral na trilha de demonstração.",table:{category:"Exemplos"}},ancestral01:{control:"text",description:"Rótulo do primeiro ancestral.",table:{category:"Exemplos"}},showAncestral02:{control:"boolean",description:"Inclui o segundo ancestral na trilha de demonstração.",table:{category:"Exemplos"}},ancestral02:{control:"text",description:"Rótulo do segundo ancestral.",table:{category:"Exemplos"}},showAncestral03:{control:"boolean",description:"Inclui o terceiro ancestral na trilha de demonstração.",table:{category:"Exemplos"}},ancestral03:{control:"text",description:"Rótulo do terceiro ancestral.",table:{category:"Exemplos"}},currentLabel:{control:"text",description:"Texto da página atual (sempre sem link).",table:{category:"Conteúdo"}}},parameters:{controls:{exclude:["items","homeLabel","ariaLabel","className"]}},render:a=>{const o=N(a),c=(a.showHome?1:0)+o.length;return e.jsx("div",{style:n.previewStage,children:c<2?e.jsx("p",{style:n.statText,children:"Com menos de dois níveis a trilha não é renderizada (não há breadcrumbs úteis)."}):e.jsx(r,{showHome:a.showHome,homeHref:a.homeHref||"#",items:o})})}};var b,x,g;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Documentação',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <DocsStoryLayout>
      <DocsHero eyebrow="Documentação guiada" title={<h3 style={storyDocsStyles.heroTitle}>BreadCrumbs</h3>} description={<>
            O componente <code>BreadCrumbs</code> monta o caminho de migalhas até a página atual:
            ícone de home na raiz, links para os níveis anteriores e texto simples no item corrente.
          </>} variantTags={docsVariantTags} stats={docsHeroStats} />

      <SectionCard title="Anatomia" description="A trilha combina quatro peças: home com ícone, separador &gt;, links ancestrais e o texto da página atual.">
        <ul style={storyDocsStyles.list}>
          <li><code>showHome</code> e <code>homeHref</code> controlam a raiz com o ícone de casinha.</li>
          <li><code>items</code> recebe a lista ordenada do caminho. Cada item com <code>href</code> vira link.</li>
          <li>O último item de <code>items</code> é sempre a página atual: renderiza como texto, mesmo se vier com <code>href</code>.</li>
          <li>O separador <code>&gt;</code> é inserido pelo CSS entre os itens, sem entrar no markup de conteúdo.</li>
        </ul>

        <SandboxExample title="Peças da trilha" description="Compare a trilha completa, a trilha curta (home + atual) e uma variação sem o ícone da raiz." code={anatomyExampleCode} notes={['Com menos de dois níveis (só home ou só a página atual), o componente não renderiza.', 'Links usam <a> nativo — o Design System não depende de router.']}>
          <AnatomyPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="Exemplo do mockup" description="Trilha com três páginas ancestrais e a página atual, no mesmo formato visual de referência.">
        <SandboxExample title="Home + ancestrais + atual" description="A raiz usa o SVG de home. Os ancestrais são links verdes. A página atual permanece em texto cinza, sem link." code={mockupExampleCode} notes={['Omita href no último item para deixar explícito que ele é a página atual.', 'homeHref aponta para a raiz do site consumidor.']}>
          <MockupPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="Trilha curta" description="Quando há apenas um nível abaixo da home, a trilha reduz para ícone + página atual.">
        <SandboxExample title="Home e página atual" description="Útil em páginas logo abaixo da raiz, sem ancestrais intermediários." code={shortTrailExampleCode}>
          <ShortTrailPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="Limites de uso" description="BreadCrumbs descreve navegação hierárquica. Ele não pagina listas, não lê CMS e não colapsa o meio da trilha nesta versão.">
        <ul style={storyDocsStyles.list}>
          <li>O pai monta <code>items</code>; o componente só renderiza a trilha.</li>
          <li>Trilha com um único nível (somente home ou somente a página atual) retorna <code>null</code> — não há migalhas úteis nesse caso.</li>
          <li>O último item nunca vira link, mesmo que <code>href</code> seja informado.</li>
          <li><code>homeHref</code> e os <code>href</code> dos itens são URLs nativas — integração com Volto/<code>UniversalLink</code> fica no consumidor.</li>
          <li>Não há colapso com reticências nesta versão; em telas estreitas a trilha quebra com <code>flex-wrap</code>.</li>
        </ul>
      </SectionCard>
    </DocsStoryLayout>
}`,...(g=(x=i.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var f,v,C;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Interativo',
  args: {
    showHome: true,
    homeHref: '#',
    showAncestral01: true,
    ancestral01: 'Página Ancestral 01',
    showAncestral02: true,
    ancestral02: 'Página Ancestral 02',
    showAncestral03: true,
    ancestral03: 'Página Ancestral 03',
    currentLabel: 'Página Atual',
    modoContraste: false
  },
  argTypes: {
    modoContraste: {
      control: 'boolean',
      description: 'Visualiza o componente no modo de alto contraste.',
      table: {
        category: 'Acessibilidade'
      }
    },
    showHome: {
      control: 'boolean',
      description: 'Exibe o ícone de home no início da trilha.',
      table: {
        category: 'Estrutura'
      }
    },
    homeHref: {
      control: 'text',
      description: 'URL da raiz. No Storybook use # para evitar navegação real.',
      table: {
        category: 'Estrutura'
      }
    },
    showAncestral01: {
      control: 'boolean',
      description: 'Inclui o primeiro ancestral na trilha de demonstração.',
      table: {
        category: 'Exemplos'
      }
    },
    ancestral01: {
      control: 'text',
      description: 'Rótulo do primeiro ancestral.',
      table: {
        category: 'Exemplos'
      }
    },
    showAncestral02: {
      control: 'boolean',
      description: 'Inclui o segundo ancestral na trilha de demonstração.',
      table: {
        category: 'Exemplos'
      }
    },
    ancestral02: {
      control: 'text',
      description: 'Rótulo do segundo ancestral.',
      table: {
        category: 'Exemplos'
      }
    },
    showAncestral03: {
      control: 'boolean',
      description: 'Inclui o terceiro ancestral na trilha de demonstração.',
      table: {
        category: 'Exemplos'
      }
    },
    ancestral03: {
      control: 'text',
      description: 'Rótulo do terceiro ancestral.',
      table: {
        category: 'Exemplos'
      }
    },
    currentLabel: {
      control: 'text',
      description: 'Texto da página atual (sempre sem link).',
      table: {
        category: 'Conteúdo'
      }
    }
  },
  parameters: {
    controls: {
      exclude: ['items', 'homeLabel', 'ariaLabel', 'className']
    }
  },
  render: args => {
    const items = buildInteractiveItems(args);
    const levelCount = (args.showHome ? 1 : 0) + items.length;
    return <div style={storyDocsStyles.previewStage}>
        {levelCount < 2 ? <p style={storyDocsStyles.statText}>
            Com menos de dois níveis a trilha não é renderizada (não há breadcrumbs úteis).
          </p> : <BreadCrumbs showHome={args.showHome} homeHref={args.homeHref || '#'} items={items} />}
      </div>;
  }
}`,...(C=(v=l.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};const G=["BreadCrumbsDocumentacao","BreadCrumbsInterativo"];export{i as BreadCrumbsDocumentacao,l as BreadCrumbsInterativo,G as __namedExportsOrder,Q as default};
