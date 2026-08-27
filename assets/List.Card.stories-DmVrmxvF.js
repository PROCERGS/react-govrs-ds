import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{D as y,S as j,s as t,a as d,b as c,c as l}from"./storyDocs-CoQtGjOG.js";import{L as n}from"./List-Bmh8Dhx-.js";/* empty css              */import"./index-DyTKwKRb.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Card-UAWlkjxH.js";import"./Text-DqgU3e9e.js";const r=[{id:"card1",title:"Card 1",description:"Descrição do card 1",variant:"news",image:"https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",imageAlt:"Imagem card 1",href:"#",tags:["noticias","Bento","comunicacao"]},{id:"card2",title:"Card 2",description:"Descrição do card 2",variant:"news",image:"https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",imageAlt:"Imagem card 2",href:"#",tags:["enoturismo","Serra Gaúcha"]},{id:"card3",title:"Card 3",description:"Descrição do card 3",variant:"news",href:"#",tags:["Matriz3"]},{id:"card4",title:"Card 4 com título longo o suficiente para quebrar em mais de uma linha no card de notícia",description:"Descrição do card 4",variant:"news",image:"https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&h=400&fit=crop",imageAlt:"Imagem card 4",href:"#",tags:["noticias","Bento Gonçalves","comunicacao","extra"]}];function w(){const a=[{label:"Uma coluna",perRow:1,items:r.slice(0,2)},{label:"Duas colunas",perRow:2,items:r.slice(0,2)},{label:"Três colunas",perRow:3,items:r}];return e.jsx("div",{style:{display:"grid",gap:16},children:a.map(o=>e.jsxs("div",{style:{display:"grid",gap:16,padding:"16px 18px",borderRadius:18,border:"1px solid #e2e8f0",background:"#ffffff"},children:[e.jsx("p",{style:t.previewLabel,children:o.label}),e.jsx("div",{style:{overflowX:"auto",paddingBottom:4},children:e.jsx("div",{style:{minWidth:`${o.perRow*320}px`},children:e.jsx(n,{variant:"card",items:o.items,perRow:o.perRow})})})]},o.label))})}const f=["perRow","grid","card"],C=[{title:"Quando usar",text:"Quando a coleção precisa distribuir cards do design system em uma grade, mantendo a mesma API de dados da lista e o controle de colunas por linha."},{title:"Melhor exploração",text:"Use o story 'Interativo' para variar o número de colunas. A documentação mostra a mesma coleção em uma, duas e três colunas."},{title:"Comportamento",text:"Cada item da variante card reaproveita diretamente o componente Card já migrado para o projeto atual, inclusive suas variantes e props próprias."}],I=`<div>
  <div>
    <p>Uma coluna</p>
    <List
      variant="card"
      perRow={1}
      items={cardItems.slice(0, 2)}
    />
  </div>

  <div>
    <p>Duas colunas</p>
    <List
      variant="card"
      perRow={2}
      items={cardItems.slice(0, 2)}
    />
  </div>

  <div>
    <p>Três colunas</p>
    <List
      variant="card"
      perRow={3}
      items={cardItems}
    />
  </div>
</div>`,L=`<List
  variant="card"
  perRow={3}
  items={[
    {
      id: 'card-1',
      title: 'Título de exemplo',
      description: 'Descrição curta do card',
      image: 'https://.../header.jpg',
      imageAlt: 'Imagem do card',
      bodyImg: 'https://.../body.jpg',
      bodyImgAlt: 'Imagem do corpo',
      size: 'small',
      disabled: false,
      href: '/pagina',
      acao: { label: 'Ler mais', url: '/pagina' },
      itens: [{ value: 'Ponto A' }, { value: 'Ponto B' }],
    },
  ]}
/>`,Q={title:"Conteúdo/List/Card",component:x,args:{perRow:3,overflow:"wrap",showInteractive:!0,tagsLimit:3,items:r},parameters:{layout:"padded",controls:{expanded:!0,sort:"requiredFirst"}}};function S(a){return`${a.perRow}-${a.overflow}-${a.showInteractive}-${a.tagsLimit}`}function x(a){const o=a.items.map(b=>({...b,tagsLimit:a.tagsLimit,onLike:a.showInteractive?()=>{}:void 0,onShare:a.showInteractive?()=>{}:void 0}));return e.jsxs("div",{style:{...t.previewStage,justifyItems:"stretch"},children:[e.jsx(n,{variant:"card",items:o,perRow:a.perRow,overflow:a.overflow}),e.jsxs("p",{style:t.statText,children:[e.jsx("strong",{children:"Colunas ativas:"})," ",a.perRow," · ",e.jsx("strong",{children:"Overflow:"})," ",a.overflow]})]})}function R(){return e.jsxs("div",{style:t.cardGrid,children:[e.jsx(l,{label:"Layout da grade",children:e.jsxs("ul",{style:t.list,children:[e.jsxs("li",{children:[e.jsx("code",{children:"perRow"})," controla quantas colunas aparecem por linha."]}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"1"})," quando a intenção for uma pilha vertical."]}),e.jsx("li",{children:"Em telas menores, a grade cai automaticamente para uma coluna."})]})}),e.jsx(l,{label:"Formato dos itens",children:e.jsxs("ul",{style:t.list,children:[e.jsxs("li",{children:["Cada item recebe o mesmo contrato aceito por ",e.jsx("code",{children:"Card"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"id"})," é opcional e serve como chave estável da lista."]}),e.jsxs("li",{children:["As variantes do próprio ",e.jsx("code",{children:"Card"})," continuam válidas dentro da grade."]}),e.jsxs("li",{children:[e.jsx("code",{children:"mediaPreset"})," não se aplica aqui: a variante card delega o tratamento de mídia integralmente ao componente ",e.jsx("code",{children:"Card"}),"."]})]})})]})}const i={name:"Documentação",parameters:{controls:{disable:!0}},render:()=>e.jsxs(y,{children:[e.jsx(j,{eyebrow:"Documentação guiada",title:e.jsx("h3",{style:t.heroTitle,children:"List Card"}),description:e.jsxs(e.Fragment,{children:["A variante ",e.jsx("code",{children:"card"})," organiza uma coleção de ",e.jsx("code",{children:"Card"}),"s em grade, reaproveitando o componente já presente no design system em vez de introduzir uma anatomia paralela."]}),variantTags:f,stats:C}),e.jsx(d,{title:"Grade e quantidade de colunas",description:"O papel dessa variante é distribuir cards já tipados pelo design system. O principal ajuste global fica por conta de perRow.",children:e.jsx(c,{title:"Mesma coleção em grades diferentes",description:"Os exemplos abaixo mostram a mesma base de itens em uma, duas e três colunas.",code:I,notes:["A grade respeita o Card atual do projeto, inclusive quando um item usa variant news.","Não há componente de card paralelo dentro do List: a composição delega para Card."],children:e.jsx(w,{})})}),e.jsxs(d,{title:"Contrato dos itens",description:"A variante card não inventa um novo formato de item. Ela apenas recebe o mesmo objeto que você já passaria ao componente Card.",children:[e.jsx(R,{}),e.jsx(c,{title:"Formato esperado do item",description:"Este é o formato de dados recomendado para cada entrada da grade.",code:L,children:e.jsx(n,{variant:"card",items:r,perRow:3})})]})]})},s={name:"Interativo",argTypes:{modoContraste:{control:"boolean",description:"Visualiza o componente no modo de alto contraste.",table:{category:"Acessibilidade"}},perRow:{control:{type:"number",min:1,max:6,step:1},description:"Quantidade de colunas exibidas por linha.",table:{category:"Layout"}},overflow:{control:{type:"radio"},options:["wrap","scroll"],labels:{wrap:"Quebrar linha",scroll:"Rolagem horizontal"},description:"Define se os cards extras quebram linha ou ficam em uma faixa com scroll.",table:{category:"Layout"}},showInteractive:{control:"boolean",description:"Quando ligado, exibe o menu do cabeçalho e os ícones de curtir/compartilhar em cada card.",table:{category:"Interação"}},tagsLimit:{control:{type:"select"},options:[1,2,3],description:"Quantidade máxima de tags visíveis em cada card (1 a 3).",table:{category:"Conteúdo"}},items:{control:"object",description:"Objetos renderizados em cada card. Edite title, description, image, href, tags e variant neste painel.",table:{category:"Conteúdo"}}},parameters:{controls:{exclude:["className","itemKey","variant"]}},render:a=>e.jsx(x,{...a},S(a))};var m,p,u;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Documentação',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <DocsStoryLayout>
      <DocsHero eyebrow="Documentação guiada" title={<h3 style={storyDocsStyles.heroTitle}>List Card</h3>} description={<>
            A variante <code>card</code> organiza uma coleção de <code>Card</code>s
            em grade, reaproveitando o componente já presente no design system em vez
            de introduzir uma anatomia paralela.
          </>} variantTags={docsVariantTags} stats={docsHeroStats} />

      <SectionCard title="Grade e quantidade de colunas" description="O papel dessa variante é distribuir cards já tipados pelo design system. O principal ajuste global fica por conta de perRow.">
        <SandboxExample title="Mesma coleção em grades diferentes" description="Os exemplos abaixo mostram a mesma base de itens em uma, duas e três colunas." code={cardExampleCode} notes={['A grade respeita o Card atual do projeto, inclusive quando um item usa variant news.', 'Não há componente de card paralelo dentro do List: a composição delega para Card.']}>
          <CardVariantGalleryPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="Contrato dos itens" description="A variante card não inventa um novo formato de item. Ela apenas recebe o mesmo objeto que você já passaria ao componente Card.">
        <CardPropsGuidePreview />

        <SandboxExample title="Formato esperado do item" description="Este é o formato de dados recomendado para cada entrada da grade." code={itemShapeCode}>
          <List variant="card" items={cardItems} perRow={3} />
        </SandboxExample>
      </SectionCard>
    </DocsStoryLayout>
}`,...(u=(p=i.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var v,g,h;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Interativo',
  argTypes: {
    modoContraste: {
      control: 'boolean',
      description: 'Visualiza o componente no modo de alto contraste.',
      table: {
        category: 'Acessibilidade'
      }
    },
    perRow: {
      control: {
        type: 'number',
        min: 1,
        max: 6,
        step: 1
      },
      description: 'Quantidade de colunas exibidas por linha.',
      table: {
        category: 'Layout'
      }
    },
    overflow: {
      control: {
        type: 'radio'
      },
      options: ['wrap', 'scroll'],
      labels: {
        wrap: 'Quebrar linha',
        scroll: 'Rolagem horizontal'
      },
      description: 'Define se os cards extras quebram linha ou ficam em uma faixa com scroll.',
      table: {
        category: 'Layout'
      }
    },
    showInteractive: {
      control: 'boolean',
      description: 'Quando ligado, exibe o menu do cabeçalho e os ícones de curtir/compartilhar em cada card.',
      table: {
        category: 'Interação'
      }
    },
    tagsLimit: {
      control: {
        type: 'select'
      },
      options: [1, 2, 3],
      description: 'Quantidade máxima de tags visíveis em cada card (1 a 3).',
      table: {
        category: 'Conteúdo'
      }
    },
    items: {
      control: 'object',
      description: 'Objetos renderizados em cada card. Edite title, description, image, href, tags e variant neste painel.',
      table: {
        category: 'Conteúdo'
      }
    }
  },
  parameters: {
    controls: {
      exclude: ['className', 'itemKey', 'variant']
    }
  },
  render: args => <ListCardInteractivePreview key={getCardInteractivePreviewKey(args)} {...args} />
}`,...(h=(g=s.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const G=["Documentacao","Interativo"];export{i as Documentacao,s as Interativo,G as __namedExportsOrder,Q as default};
