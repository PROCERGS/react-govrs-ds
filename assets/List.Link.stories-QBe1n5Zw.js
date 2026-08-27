import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{D as b,S as j,s as i,a as d,b as n,c as a}from"./storyDocs-CoQtGjOG.js";import{L as t}from"./List-Bmh8Dhx-.js";/* empty css              */import"./index-DyTKwKRb.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Card-UAWlkjxH.js";import"./Text-DqgU3e9e.js";function L(){return e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,children:[e.jsx("path",{d:"M4 5H16",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"}),e.jsx("path",{d:"M4 10H16",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"}),e.jsx("path",{d:"M4 15H12",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"}),e.jsx("circle",{cx:"14.5",cy:"15",r:"1.5",fill:"currentColor"})]})}const c=[{id:"l1",meta:"RECOMENDADOS",title:"Solicitar Benefício Assistencial ao Idoso",href:"#"},{id:"l2",meta:"RECOMENDADOS",title:"Inscrever-se no Cadastro Único",href:"#"}],l=c.map(o=>({...o,icon:e.jsx(L,{})}));function S(){return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:20},children:[e.jsx(a,{label:"Padrão",children:e.jsx(t,{variant:"link",items:c})}),e.jsx(a,{label:"Numerada",children:e.jsx(t,{variant:"link",items:c,numbered:!0})}),e.jsx(a,{label:"Ícone e ordem invertida",children:e.jsx(t,{variant:"link",items:l,invert:!0,mediaPreset:"icons"})})]})}const y=["numbered","invert","mediaPreset"],f=[{title:"Quando usar",text:"Quando a lista precisa funcionar como navegação, agrupando um meta curto e um título clicável com apoio visual por número ou ícone."},{title:"Melhor exploração",text:"Use o story 'Interativo' para alternar numeração, disponibilidade de ícone e ordem de leitura. A documentação mostra as três composições principais da variante."},{title:"Comportamento",text:"Quando o item traz icon e o mediaPreset permite mídia, o ícone ocupa a coluna esquerda e prevalece sobre a numeração. A prop invert apenas troca a ordem entre meta e link dentro do conteúdo."}],C=`<List
  variant="link"
  items={[
    { id: 'l1', meta: 'SERVIÇOS', title: 'Solicitar atendimento', href: '#' },
    { id: 'l2', meta: 'SERVIÇOS', title: 'Consultar protocolo', href: '#' },
  ]}
/>`,g=`<List
  variant="link"
  mediaPreset="icons"
  items={[
    { id: 'l1', meta: 'RECOMENDADOS', title: 'Ação 1', href: '#', icon: <Icone /> },
    { id: 'l2', meta: 'RECOMENDADOS', title: 'Ação 2', href: '#', icon: <Icone /> },
  ]}
/>`,P=`<List
  variant="link"
  invert
  items={[
    { id: 'l1', meta: 'INFO', title: 'Leia antes', href: '#' },
    { id: 'l2', meta: 'INFO', title: 'Leia depois', href: '#' },
  ]}
/>`,F={title:"Conteúdo/List/Link",component:k,args:{numbered:!1,invert:!1,mediaPreset:"none"},parameters:{layout:"padded",controls:{expanded:!0,sort:"requiredFirst"}}};function I(o){return[o.numbered,o.invert,o.mediaPreset].join("::")}function k(o){return e.jsx("div",{style:{...i.previewStage,justifyItems:"stretch"},children:e.jsx(t,{variant:"link",items:l,mediaPreset:o.mediaPreset,numbered:o.numbered,invert:o.invert})})}function D(){return e.jsxs("div",{style:i.cardGrid,children:[e.jsx(a,{label:"Coluna esquerda",children:e.jsxs("ul",{style:i.list,children:[e.jsxs("li",{children:[e.jsx("code",{children:"numbered"})," usa a posição do item como marcador visual."]}),e.jsxs("li",{children:[e.jsx("code",{children:"mediaPreset"})," controla se a prop ",e.jsx("code",{children:"icon"})," do item pode ocupar a coluna lateral."]}),e.jsxs("li",{children:["Se houver ícone disponível e ",e.jsx("code",{children:"numbered"})," também estiver ativo, o ícone tem prioridade."]}),e.jsxs("li",{children:["A opção ",e.jsx("code",{children:"images"})," não se aplica a esta variante."]})]})}),e.jsx(a,{label:"Conteúdo",children:e.jsxs("ul",{style:i.list,children:[e.jsxs("li",{children:[e.jsx("code",{children:"meta"})," funciona como texto de apoio curto."]}),e.jsxs("li",{children:[e.jsx("code",{children:"title"})," vira o conteúdo do link clicável quando ",e.jsx("code",{children:"href"})," é informado."]}),e.jsxs("li",{children:["Sem ",e.jsx("code",{children:"href"}),", o título continua visível, mas é renderizado como texto em vez de link."]}),e.jsxs("li",{children:[e.jsx("code",{children:"invert"})," troca a ordem entre meta e link."]})]})})]})}const r={name:"Documentação",parameters:{controls:{disable:!0}},render:()=>e.jsxs(b,{children:[e.jsx(j,{eyebrow:"Documentação guiada",title:e.jsx("h3",{style:i.heroTitle,children:"List Link"}),description:e.jsxs(e.Fragment,{children:["A variante ",e.jsx("code",{children:"link"})," transforma a coleção em uma lista navegável, com meta opcional, coluna lateral de apoio e um link principal por item."]}),variantTags:y,stats:f}),e.jsx(d,{title:"Composições mais comuns",description:"A variante link pode aparecer sem marcador lateral, com numeração automática ou com ícones explícitos.",children:e.jsx(n,{title:"Comparativo de modos",description:"Os três exemplos abaixo mostram as combinações mais recorrentes da variante.",code:`<List variant="link" items={items} />
<List variant="link" numbered items={items} />
<List variant="link" invert mediaPreset="icons" items={itemsWithIcons} />`,children:e.jsx(S,{})})}),e.jsxs(d,{title:"Props e formato dos itens",description:"Os itens da variante link são mais enxutos do que nas variantes default e check. Aqui o foco está no conteúdo navegável e no apoio visual lateral.",children:[e.jsx(D,{}),e.jsx(n,{title:"Uso básico",description:"Sem numeração ou ícone lateral, a estrutura fica concentrada em meta e link.",code:C,children:e.jsx(t,{variant:"link",items:c})}),e.jsx(n,{title:"Com ícones",description:"Quando os itens trazem icon e o mediaPreset permite mídia, o ícone ocupa a coluna esquerda de cada item.",code:g,children:e.jsx(t,{variant:"link",items:l,mediaPreset:"icons"})}),e.jsx(n,{title:"Ordem invertida",description:"invert é útil quando o título do link precisa aparecer antes do meta dentro do bloco textual.",code:P,children:e.jsx(t,{variant:"link",invert:!0,items:[{id:"i1",meta:"INFO",title:"Leia antes",href:"#"},{id:"i2",meta:"INFO",title:"Leia depois",href:"#"}]})})]})]})},s={name:"Interativo",argTypes:{modoContraste:{control:"boolean",description:"Visualiza o componente no modo de alto contraste.",table:{category:"Acessibilidade"}},numbered:{control:"boolean",description:"Exibe a posição do item na coluna lateral.",table:{category:"Apresentação"}},invert:{control:"boolean",description:"Troca a ordem entre meta e link dentro do conteúdo.",table:{category:"Conteúdo"}},mediaPreset:{control:{type:"select"},options:["icons","none"],labels:{icons:"Só ícones",none:"Sem mídia"},description:"Controla se o ícone do item aparece na coluna lateral na variante link.",table:{category:"Mídia"}}},parameters:{controls:{exclude:["className","items","itemKey","variant"]}},render:o=>e.jsx(k,{...o},I(o))};var m,p,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Documentação',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <DocsStoryLayout>
      <DocsHero eyebrow="Documentação guiada" title={<h3 style={storyDocsStyles.heroTitle}>List Link</h3>} description={<>
            A variante <code>link</code> transforma a coleção em uma lista navegável,
            com meta opcional, coluna lateral de apoio e um link principal por item.
          </>} variantTags={docsVariantTags} stats={docsHeroStats} />

      <SectionCard title="Composições mais comuns" description="A variante link pode aparecer sem marcador lateral, com numeração automática ou com ícones explícitos.">
        <SandboxExample title="Comparativo de modos" description="Os três exemplos abaixo mostram as combinações mais recorrentes da variante." code={\`<List variant="link" items={items} />\\n<List variant="link" numbered items={items} />\\n<List variant="link" invert mediaPreset="icons" items={itemsWithIcons} />\`}>
          <LinkVariantGalleryPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="Props e formato dos itens" description="Os itens da variante link são mais enxutos do que nas variantes default e check. Aqui o foco está no conteúdo navegável e no apoio visual lateral.">
        <LinkPropsGuidePreview />

        <SandboxExample title="Uso básico" description="Sem numeração ou ícone lateral, a estrutura fica concentrada em meta e link." code={basicLinkCode}>
          <List variant="link" items={baseLinkItems} />
        </SandboxExample>

        <SandboxExample title="Com ícones" description="Quando os itens trazem icon e o mediaPreset permite mídia, o ícone ocupa a coluna esquerda de cada item." code={iconLinkCode}>
          <List variant="link" items={iconLinkItems} mediaPreset="icons" />
        </SandboxExample>

        <SandboxExample title="Ordem invertida" description="invert é útil quando o título do link precisa aparecer antes do meta dentro do bloco textual." code={invertedLinkCode}>
          <List variant="link" invert items={[{
          id: 'i1',
          meta: 'INFO',
          title: 'Leia antes',
          href: '#'
        }, {
          id: 'i2',
          meta: 'INFO',
          title: 'Leia depois',
          href: '#'
        }]} />
        </SandboxExample>
      </SectionCard>
    </DocsStoryLayout>
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var v,x,h;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Interativo',
  argTypes: {
    modoContraste: {
      control: 'boolean',
      description: 'Visualiza o componente no modo de alto contraste.',
      table: {
        category: 'Acessibilidade'
      }
    },
    numbered: {
      control: 'boolean',
      description: 'Exibe a posição do item na coluna lateral.',
      table: {
        category: 'Apresentação'
      }
    },
    invert: {
      control: 'boolean',
      description: 'Troca a ordem entre meta e link dentro do conteúdo.',
      table: {
        category: 'Conteúdo'
      }
    },
    mediaPreset: {
      control: {
        type: 'select'
      },
      options: ['icons', 'none'],
      labels: {
        icons: 'Só ícones',
        none: 'Sem mídia'
      },
      description: 'Controla se o ícone do item aparece na coluna lateral na variante link.',
      table: {
        category: 'Mídia'
      }
    }
  },
  parameters: {
    controls: {
      exclude: ['className', 'items', 'itemKey', 'variant']
    }
  },
  render: args => <ListLinkInteractivePreview key={getLinkInteractivePreviewKey(args)} {...args} />
}`,...(h=(x=s.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};const V=["Documentacao","Interativo"];export{r as Documentacao,s as Interativo,V as __namedExportsOrder,F as default};
