import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{D as j,S as y,s as n,a as c,b as l,c as i}from"./storyDocs-CoQtGjOG.js";import{L as o}from"./List-Bmh8Dhx-.js";/* empty css              */import"./index-DyTKwKRb.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Card-UAWlkjxH.js";import"./Text-DqgU3e9e.js";function s(){return e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,children:[e.jsx("path",{d:"M4 5H16",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"}),e.jsx("path",{d:"M4 10H16",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"}),e.jsx("path",{d:"M4 15H12",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"}),e.jsx("circle",{cx:"14.5",cy:"15",r:"1.5",fill:"currentColor"})]})}const r=[{id:"d1",title:"Item com imagem e label",text:"Descrição curta do item com imagem.",image:"https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",imageAlt:"Foto de exemplo",icon:e.jsx(s,{}),label:"Guias"},{id:"d2",title:"Item só com ícone",text:"Item com ícone SVG na coluna esquerda.",icon:e.jsx(s,{}),label:"Guias"},{id:"d3",title:"Item sem mídia",text:"Item que não possui imagem nem ícone.",label:"Atendimento"},{id:"d4",title:"Item grande com imagem",text:"Um texto mais longo para demonstrar quebra de linha e comportamento responsivo na lista horizontal.",image:"https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",imageAlt:"Outra foto",icon:e.jsx(s,{}),label:"Atendimento"}],S=[{id:"h1",title:"Cartão 1",text:"Descrição curta do cartão 1.",image:"https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",imageAlt:"Imagem do cartão 1",icon:e.jsx(s,{})},{id:"h2",title:"Cartão 2",text:"Descrição curta do cartão 2.",image:"https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",imageAlt:"Imagem do cartão 2",icon:e.jsx(s,{})},{id:"h3",title:"Cartão 3",text:"Descrição curta do cartão 3.",image:"https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",imageAlt:"Imagem do cartão 3",icon:e.jsx(s,{})}];function P(a){return a?r:r.map((t,f)=>({...t,id:`default-${f}`,label:void 0}))}function I(){return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:20},children:[e.jsx(i,{label:"Vertical simples",children:e.jsx(o,{items:r.slice(0,3).map((a,t)=>({...a,label:void 0,id:`preview-default-${t}`})),mediaPreset:"mixed"})}),e.jsx(i,{label:"Horizontal com mídia",children:e.jsx(o,{items:r,horizontal:!0,mediaPreset:"mixed"})}),e.jsx(i,{label:"Agrupada e recolhível",children:e.jsx(o,{items:r,labeled:!0,collapsible:!0,mediaPreset:"mixed"})})]})}const z=["vertical","horizontal","labeled","collapsible","mediaPreset"],A=[{title:"Quando usar",text:"Quando a interface precisa listar itens com leitura rápida, mídia opcional e agrupamento simples por rótulo, sem transformar a coleção em navegação ou seleção."},{title:"Melhor exploração",text:"Use o story 'Interativo' para testar mídia, horizontalidade, agrupamento e colapso. A documentação compara os formatos mais comuns dessa variante."},{title:"Comportamento",text:"A variante default aceita imagem ou ícone por item, pode quebrar em uma linha horizontal e só usa colapso quando a lista está agrupada por label."}],D=`<List
  variant="default"
  items={[
    { id: 'd1', title: 'Item um' },
    { id: 'd2', title: 'Item dois' },
    { id: 'd3', title: 'Item três' },
  ]}
/>`,C=`const items = [
  {
    id: 'h1',
    title: 'Cartão 1',
    text: 'Descrição curta do cartão 1.',
    image: 'https://.../card-1.jpg',
    imageAlt: 'Imagem do cartão 1',
    icon: <Icone />,
  },
  {
    id: 'h2',
    title: 'Cartão 2',
    text: 'Descrição curta do cartão 2.',
    image: 'https://.../card-2.jpg',
    imageAlt: 'Imagem do cartão 2',
    icon: <Icone />,
  },
  {
    id: 'h3',
    title: 'Cartão 3',
    text: 'Descrição curta do cartão 3.',
    image: 'https://.../card-3.jpg',
    imageAlt: 'Imagem do cartão 3',
    icon: <Icone />,
  },
]

<div>
  <div>
    <p>Só ícones</p>
    <List variant="default" horizontal mediaPreset="icons" items={items} />
  </div>

  <div>
    <p>Só imagens</p>
    <List variant="default" horizontal mediaPreset="images" items={items} />
  </div>

  <div>
    <p>Sem mídia</p>
    <List variant="default" horizontal mediaPreset="none" items={items} />
  </div>
</div>`,L=`<List
  variant="default"
  labeled
  collapsible
  items={[
    { id: 'l1', label: 'Guias', title: 'Primeiros passos', icon: <Icone /> },
    { id: 'l2', label: 'Guias', title: 'Documentos necessários' },
    { id: 'l3', label: 'Atendimento', title: 'Canais disponíveis' },
  ]}
/>`,K={title:"Conteúdo/List/Default",component:v,args:{horizontal:!1,labeled:!1,collapsible:!1,mediaPreset:"mixed"},parameters:{layout:"padded",controls:{expanded:!0,sort:"requiredFirst"}}};function w(a){return[a.horizontal,a.labeled,a.collapsible,a.mediaPreset].join("::")}function v(a){return e.jsx("div",{style:{...n.previewStage,justifyItems:"stretch"},children:e.jsx(o,{items:P(a.labeled),horizontal:a.horizontal,labeled:a.labeled,collapsible:a.collapsible,mediaPreset:a.mediaPreset})})}function q(){return e.jsxs("div",{style:n.cardGrid,children:[e.jsx(i,{label:"Campos principais",children:e.jsxs("ul",{style:n.list,children:[e.jsxs("li",{children:[e.jsx("code",{children:"title"})," é o conteúdo obrigatório de cada item."]}),e.jsxs("li",{children:[e.jsx("code",{children:"text"})," adiciona uma linha de apoio abaixo do título."]}),e.jsxs("li",{children:[e.jsx("code",{children:"image"})," e ",e.jsx("code",{children:"icon"})," ocupam a coluna lateral, com prioridade para imagem."]}),e.jsxs("li",{children:[e.jsx("code",{children:"mediaPreset"})," controla se a variante exibe mídia mista, só imagens, só ícones ou nenhuma mídia."]})]})}),e.jsx(i,{label:"Agrupamento",children:e.jsxs("ul",{style:n.list,children:[e.jsxs("li",{children:[e.jsx("code",{children:"label"})," só entra em cena quando ",e.jsx("code",{children:"labeled"})," está ativo."]}),e.jsxs("li",{children:[e.jsx("code",{children:"collapsible"})," só afeta listas agrupadas."]}),e.jsx("li",{children:"A horizontalidade afeta os itens do grupo, não o cabeçalho do grupo."})]})})]})}function E(){const a=[{label:"Só ícones",mediaPreset:"icons"},{label:"Só imagens",mediaPreset:"images"},{label:"Sem mídia",mediaPreset:"none"}];return e.jsx("div",{style:{display:"grid",gap:16},children:a.map(t=>e.jsx(i,{label:t.label,children:e.jsx(o,{horizontal:!0,mediaPreset:t.mediaPreset,items:S})},t.label))})}const d={name:"Documentação",parameters:{controls:{disable:!0}},render:()=>e.jsxs(j,{children:[e.jsx(y,{eyebrow:"Documentação guiada",title:e.jsx("h3",{style:n.heroTitle,children:"List Default"}),description:e.jsxs(e.Fragment,{children:["A variante ",e.jsx("code",{children:"default"})," cobre listas de leitura simples com imagem, ícone, texto de apoio e agrupamento opcional. É a base visual reutilizada também pela variante ",e.jsx("code",{children:"check"}),"."]}),variantTags:z,stats:A}),e.jsx(c,{title:"Formas principais",description:"A mesma variante pode aparecer como lista vertical tradicional, como linha de cartões com quebra automática ou como lista agrupada por rótulo.",children:e.jsx(l,{title:"Visão comparativa",description:"Os três cenários abaixo cobrem a leitura mais comum da variante default: simples, horizontal e agrupada.",code:`<List variant="default" items={items} />
<List variant="default" horizontal items={items} />
<List variant="default" labeled collapsible items={items} />`,children:e.jsx(I,{})})}),e.jsxs(c,{title:"Props e estrutura dos itens",description:"A variante default depende mais da forma dos itens do que de props globais. A mídia é opcional e o agrupamento é totalmente derivado de label.",children:[e.jsx(q,{}),e.jsx(l,{title:"Uso básico",description:"A lista simples funciona mesmo sem mídia e sem agrupamento. O componente assume a variante default quando a prop variant não é informada.",code:D,children:e.jsx(o,{items:[{id:"simple-1",title:"Item um"},{id:"simple-2",title:"Item dois"},{id:"simple-3",title:"Item três"}]})}),e.jsx(l,{title:"Horizontal",description:"Em horizontal, a mesma coleção pode ser apresentada só com ícones, só com imagens ou sem nenhuma mídia, de acordo com o mediaPreset.",code:C,notes:['mediaPreset="icons" preserva apenas os ícones da coleção.','mediaPreset="images" preserva apenas as imagens; se um item tiver image e icon, a imagem continua tendo prioridade.','mediaPreset="none" remove toda a mídia e mantém apenas o conteúdo textual.'],children:e.jsx(E,{})}),e.jsx(l,{title:"Agrupamento com colapso",description:"Quando labeled e collapsible aparecem juntos, cada grupo passa a abrir e fechar localmente a partir do próprio cabeçalho.",code:L,notes:["Sem labeled, a prop label é ignorada na renderização.","Sem collapsible, os grupos continuam visíveis o tempo todo."],children:e.jsx(o,{items:r,labeled:!0,collapsible:!0})})]})]})},m={name:"Interativo",argTypes:{modoContraste:{control:"boolean",description:"Visualiza o componente no modo de alto contraste.",table:{category:"Acessibilidade"}},horizontal:{control:"boolean",description:"Reorganiza os itens em uma linha com quebra automática.",table:{category:"Layout"}},labeled:{control:"boolean",description:"Agrupa itens pela prop label.",table:{category:"Agrupamento"}},collapsible:{control:"boolean",description:"Permite expandir ou recolher grupos quando labeled está ativo.",table:{category:"Agrupamento"}},mediaPreset:{control:{type:"select"},options:["mixed","images","icons","none"],labels:{mixed:"Misto",images:"Só imagens",icons:"Só ícones",none:"Sem mídia"},description:"Controla se a variante mostra mídia mista, só imagens, só ícones ou nenhuma mídia.",table:{category:"Mídia"}}},parameters:{controls:{exclude:["className","items","itemKey","variant"]}},render:a=>e.jsx(v,{...a},w(a))};var p,u,b;d.parameters={...d.parameters,docs:{...(p=d.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Documentação',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <DocsStoryLayout>
      <DocsHero eyebrow="Documentação guiada" title={<h3 style={storyDocsStyles.heroTitle}>List Default</h3>} description={<>
            A variante <code>default</code> cobre listas de leitura simples com imagem,
            ícone, texto de apoio e agrupamento opcional. É a base visual reutilizada
            também pela variante <code>check</code>.
          </>} variantTags={docsVariantTags} stats={docsHeroStats} />

      <SectionCard title="Formas principais" description="A mesma variante pode aparecer como lista vertical tradicional, como linha de cartões com quebra automática ou como lista agrupada por rótulo.">
        <SandboxExample title="Visão comparativa" description="Os três cenários abaixo cobrem a leitura mais comum da variante default: simples, horizontal e agrupada." code={\`<List variant="default" items={items} />\\n<List variant="default" horizontal items={items} />\\n<List variant="default" labeled collapsible items={items} />\`}>
          <DefaultVariantGalleryPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="Props e estrutura dos itens" description="A variante default depende mais da forma dos itens do que de props globais. A mídia é opcional e o agrupamento é totalmente derivado de label.">
        <DefaultItemGuidePreview />

        <SandboxExample title="Uso básico" description="A lista simples funciona mesmo sem mídia e sem agrupamento. O componente assume a variante default quando a prop variant não é informada." code={defaultExampleCode}>
          <List items={[{
          id: 'simple-1',
          title: 'Item um'
        }, {
          id: 'simple-2',
          title: 'Item dois'
        }, {
          id: 'simple-3',
          title: 'Item três'
        }]} />
        </SandboxExample>

        <SandboxExample title="Horizontal" description="Em horizontal, a mesma coleção pode ser apresentada só com ícones, só com imagens ou sem nenhuma mídia, de acordo com o mediaPreset." code={horizontalExampleCode} notes={['mediaPreset="icons" preserva apenas os ícones da coleção.', 'mediaPreset="images" preserva apenas as imagens; se um item tiver image e icon, a imagem continua tendo prioridade.', 'mediaPreset="none" remove toda a mídia e mantém apenas o conteúdo textual.']}>
          <HorizontalPresetPreview />
        </SandboxExample>

        <SandboxExample title="Agrupamento com colapso" description="Quando labeled e collapsible aparecem juntos, cada grupo passa a abrir e fechar localmente a partir do próprio cabeçalho." code={labeledExampleCode} notes={['Sem labeled, a prop label é ignorada na renderização.', 'Sem collapsible, os grupos continuam visíveis o tempo todo.']}>
          <List items={defaultItems} labeled collapsible />
        </SandboxExample>
      </SectionCard>
    </DocsStoryLayout>
}`,...(b=(u=d.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var x,g,h;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Interativo',
  argTypes: {
    modoContraste: {
      control: 'boolean',
      description: 'Visualiza o componente no modo de alto contraste.',
      table: {
        category: 'Acessibilidade'
      }
    },
    horizontal: {
      control: 'boolean',
      description: 'Reorganiza os itens em uma linha com quebra automática.',
      table: {
        category: 'Layout'
      }
    },
    labeled: {
      control: 'boolean',
      description: 'Agrupa itens pela prop label.',
      table: {
        category: 'Agrupamento'
      }
    },
    collapsible: {
      control: 'boolean',
      description: 'Permite expandir ou recolher grupos quando labeled está ativo.',
      table: {
        category: 'Agrupamento'
      }
    },
    mediaPreset: {
      control: {
        type: 'select'
      },
      options: ['mixed', 'images', 'icons', 'none'],
      labels: {
        mixed: 'Misto',
        images: 'Só imagens',
        icons: 'Só ícones',
        none: 'Sem mídia'
      },
      description: 'Controla se a variante mostra mídia mista, só imagens, só ícones ou nenhuma mídia.',
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
  render: args => <ListDefaultInteractivePreview key={getDefaultInteractivePreviewKey(args)} {...args} />
}`,...(h=(g=m.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const Q=["Documentacao","Interativo"];export{d as Documentacao,m as Interativo,Q as __namedExportsOrder,K as default};
