import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as I}from"./index-DyTKwKRb.js";import{D as L,S as q,s as c,a as v,b as h,c as y}from"./storyDocs-CoQtGjOG.js";import{L as A}from"./List-Bmh8Dhx-.js";/* empty css              */import"./_commonjsHelpers-Cpj98o6Y.js";import"./Card-UAWlkjxH.js";import"./Text-DqgU3e9e.js";function x(){return e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,children:[e.jsx("path",{d:"M4 5H16",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"}),e.jsx("path",{d:"M4 10H16",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"}),e.jsx("path",{d:"M4 15H12",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"}),e.jsx("circle",{cx:"14.5",cy:"15",r:"1.5",fill:"currentColor"})]})}const M=[{id:"c1",label:"Grupo 1",title:"Item 1",text:"Descrição curta do item.",checked:!1},{id:"c2",label:"Grupo 1",title:"Item 2",text:"Descrição curta do item.",checked:!0},{id:"c3",label:"Grupo 2",title:"Item 3",text:"Descrição curta do item.",checked:!1},{id:"c4",label:"Grupo 2",title:"Item 4",text:"Descrição curta do item.",checked:!1}],z=[{id:"cm1",label:"Grupo 1",title:"Item com ícone",text:"Descrição curta do item com ícone.",icon:e.jsx(x,{}),checked:!1},{id:"cm2",label:"Grupo 1",title:"Item com imagem",text:"Descrição curta do item com imagem.",image:"https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",imageAlt:"Foto de exemplo",checked:!0},{id:"cm3",label:"Grupo 2",title:"Item sem mídia",text:"Item que não possui imagem nem ícone.",checked:!1},{id:"cm4",label:"Grupo 2",title:"Outro item com ícone",text:"Exemplo adicional para os presets de mídia.",icon:e.jsx(x,{}),checked:!1}];function H({labeled:o,withMedia:i=!1}){const n=i?z:M;return o?n:n.map((a,m)=>({...a,id:`check-${m}`,label:void 0}))}function g({title:o="Título",labeled:i=!0,collapsible:n=!1,horizontal:s=!1,multiple:a=!0,mediaPreset:m="mixed",withMedia:D=!1}){const[b,k]=I.useState(()=>H({labeled:i,withMedia:D}));function E(r,p){k(u=>u.map(t=>p.multiple?t.id===r.id?{...t,checked:!t.checked}:t:{...t,checked:t.id===r.id?!t.checked:!1}))}function G(r,p){k(u=>u.map(t=>t.label===r?{...t,checked:p}:t))}return e.jsxs("div",{style:{display:"grid",gap:16},children:[e.jsx(A,{variant:"check",title:o,labeled:i,collapsible:n,horizontal:s,multiple:a,mediaPreset:m,items:b,onToggle:E,onToggleGroup:G}),e.jsxs("p",{style:c.statText,children:[e.jsx("strong",{children:"Selecionados:"})," ",b.filter(r=>r.checked).length]})]})}const F=["title","multiple","labeled","collapsible","mediaPreset"],K=[{title:"Quando usar",text:"Quando a coleção precisa preservar a leitura da variante default, mas acrescentar seleção com checkbox por item e, opcionalmente, por grupo."},{title:"Melhor exploração",text:"Use o story 'Interativo' para alternar título, agrupamento, colapso, horizontalidade e seleção múltipla. A documentação mostra o comportamento controlado esperado."},{title:"Comportamento",text:"A variante check não gerencia checked internamente: ela delega a atualização ao consumidor via onToggle e onToggleGroup."}],N=`const [items, setItems] = useState([
  { id: 'c1', label: 'Equipe A', title: 'Item 1', checked: false },
  { id: 'c2', label: 'Equipe A', title: 'Item 2', checked: true },
])

<List
  variant="check"
  title="Permissões"
  labeled
  multiple
  items={items}
  onToggle={(item, { multiple }) => {
    setItems((current) =>
      current.map((entry) =>
        multiple
          ? entry.id === item.id
            ? { ...entry, checked: !entry.checked }
            : entry
          : { ...entry, checked: entry.id === item.id ? !entry.checked : false },
      ),
    )
  }}
  onToggleGroup={(label, checked) => {
    setItems((current) =>
      current.map((entry) =>
        entry.label === label ? { ...entry, checked } : entry,
      ),
    )
  }}
/>`,O=`<List
  variant="check"
  title="Permissões"
  items={items}
  onToggle={(item) => {
    setItems((current) =>
      current.map((entry) => ({
        ...entry,
        checked: entry.id === item.id ? !entry.checked : false,
      })),
    )
  }}
/>`,Q=`const [items, setItems] = useState([
  {
    id: 'm1',
    title: 'Com ícone',
    text: 'Texto de apoio com mídia lateral.',
    icon: <Icone />,
    checked: false,
  },
  {
    id: 'm2',
    title: 'Com imagem',
    text: 'Texto de apoio com imagem lateral.',
    image: 'https://.../foto.jpg',
    imageAlt: 'Foto de exemplo',
    checked: true,
  },
])

<List
  variant="check"
  title="Título"
  multiple
  mediaPreset="mixed"
  items={items}
  onToggle={(item) => {
    setItems((current) =>
      current.map((entry) =>
        entry.id === item.id ? { ...entry, checked: !entry.checked } : entry,
      ),
    )
  }}
/>`,ee={title:"Conteúdo/List/Check",component:w,args:{title:"Título",horizontal:!1,labeled:!0,collapsible:!1,multiple:!0,mediaPreset:"mixed"},parameters:{layout:"padded",controls:{expanded:!0,sort:"requiredFirst"}}};function V(o){return[o.title,o.horizontal,o.labeled,o.collapsible,o.multiple,o.mediaPreset].join("::")}function w(o){return e.jsx("div",{style:{...c.previewStage,justifyItems:"stretch"},children:e.jsx(g,{...o,withMedia:!0})})}function R(){const[o,i]=I.useState([{id:"m1",title:"Com ícone",text:"Texto de apoio com mídia lateral.",icon:e.jsx(x,{}),checked:!1},{id:"m2",title:"Com imagem",text:"Texto de apoio com imagem lateral.",image:"https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",imageAlt:"Foto de exemplo",checked:!0}]);return e.jsx(A,{variant:"check",title:"Título",multiple:!0,items:o,onToggle:n=>{i(s=>s.map(a=>a.id===n.id?{...a,checked:!a.checked}:a))}})}function W(){return e.jsxs("div",{style:c.cardGrid,children:[e.jsx(y,{label:"Seleção",children:e.jsxs("ul",{style:c.list,children:[e.jsxs("li",{children:[e.jsx("code",{children:"onToggle"})," recebe o item e um objeto com ",e.jsx("code",{children:"multiple"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"multiple"})," define se mais de um item pode permanecer marcado."]}),e.jsx("li",{children:"Sem callback, a marcação visual não se atualiza sozinha."})]})}),e.jsx(y,{label:"Grupos",children:e.jsxs("ul",{style:c.list,children:[e.jsxs("li",{children:[e.jsx("code",{children:"labeled"})," agrupa por ",e.jsx("code",{children:"label"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"onToggleGroup"})," só faz sentido quando grupos e múltipla seleção coexistem."]}),e.jsxs("li",{children:[e.jsx("code",{children:"collapsible"})," mantém o mesmo comportamento da variante default."]}),e.jsxs("li",{children:[e.jsx("code",{children:"mediaPreset"})," reaproveita a mesma lógica de mídia da variante default, incluindo a prioridade de imagem sobre ícone."]})]})})]})}const l={name:"Documentação",parameters:{controls:{disable:!0}},render:()=>e.jsxs(L,{children:[e.jsx(q,{eyebrow:"Documentação guiada",title:e.jsx("h3",{style:c.heroTitle,children:"List Check"}),description:e.jsxs(e.Fragment,{children:["A variante ",e.jsx("code",{children:"check"})," reaproveita a anatomia da lista default e acrescenta um checkbox por item, com suporte a agrupamento por rótulo e seleção de grupo quando o consumo pede isso."]}),variantTags:F,stats:K}),e.jsx(v,{title:"Modelo de controle",description:"A seleção é externa ao componente. O story abaixo mostra a composição recomendada: a lista recebe items já marcados e devolve intenções de mudança pelos callbacks.",children:e.jsx(h,{title:"Exemplo controlado",description:"Neste exemplo, o consumidor decide como alternar itens individualmente e por grupo.",code:N,notes:["A variante check não mantém estado de checked por conta própria.","Quando labeled e multiple estão ativos, o cabeçalho do grupo ganha um checkbox adicional."],children:e.jsx(g,{})})}),e.jsxs(v,{title:"Props principais",description:"Além da estrutura dos itens, a variante check depende principalmente das regras de seleção que o consumidor adota.",children:[e.jsx(W,{}),e.jsx(h,{title:"Seleção única",description:"Sem multiple, o callback pode garantir que apenas um item permaneça marcado por vez.",code:O,children:e.jsx(g,{labeled:!1,multiple:!1})}),e.jsx(h,{title:"Com imagem ou ícone",description:"Assim como na variante default, cada item pode combinar texto de apoio com mídia opcional na coluna lateral.",code:Q,notes:['mediaPreset="images" mantém só imagens, mediaPreset="icons" mantém só ícones e mediaPreset="none" remove ambos.',"Se um item tiver image e icon ao mesmo tempo, a imagem continua tendo prioridade visual."],children:e.jsx(R,{})})]})]})},d={name:"Interativo",argTypes:{modoContraste:{control:"boolean",description:"Visualiza o componente no modo de alto contraste.",table:{category:"Acessibilidade"}},title:{control:"text",description:"Título exibido acima da coleção.",table:{category:"Conteúdo"}},horizontal:{control:"boolean",description:"Reorganiza os itens em uma linha com quebra automática.",table:{category:"Layout"}},labeled:{control:"boolean",description:"Agrupa itens pela prop label.",table:{category:"Agrupamento"}},collapsible:{control:"boolean",description:"Permite expandir ou recolher grupos quando labeled está ativo.",table:{category:"Agrupamento"}},multiple:{control:"boolean",description:"Indica ao callback se a seleção pode permanecer múltipla.",table:{category:"Seleção"}},mediaPreset:{control:{type:"select"},options:["mixed","images","icons","none"],labels:{mixed:"Misto",images:"Só imagens",icons:"Só ícones",none:"Sem mídia"},description:"Controla se a variante mostra mídia mista, só imagens, só ícones ou nenhuma mídia.",table:{category:"Mídia"}}},parameters:{controls:{exclude:["className","items","itemKey","variant","onToggle","onToggleGroup"]}},render:o=>e.jsx(w,{...o},V(o))};var j,f,S;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Documentação',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <DocsStoryLayout>
      <DocsHero eyebrow="Documentação guiada" title={<h3 style={storyDocsStyles.heroTitle}>List Check</h3>} description={<>
            A variante <code>check</code> reaproveita a anatomia da lista default e
            acrescenta um checkbox por item, com suporte a agrupamento por rótulo e
            seleção de grupo quando o consumo pede isso.
          </>} variantTags={docsVariantTags} stats={docsHeroStats} />

      <SectionCard title="Modelo de controle" description="A seleção é externa ao componente. O story abaixo mostra a composição recomendada: a lista recebe items já marcados e devolve intenções de mudança pelos callbacks.">
        <SandboxExample title="Exemplo controlado" description="Neste exemplo, o consumidor decide como alternar itens individualmente e por grupo." code={checkExampleCode} notes={['A variante check não mantém estado de checked por conta própria.', 'Quando labeled e multiple estão ativos, o cabeçalho do grupo ganha um checkbox adicional.']}>
          <ControlledCheckPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="Props principais" description="Além da estrutura dos itens, a variante check depende principalmente das regras de seleção que o consumidor adota.">
        <CheckPropsGuidePreview />

        <SandboxExample title="Seleção única" description="Sem multiple, o callback pode garantir que apenas um item permaneça marcado por vez." code={singleSelectionCode}>
          <ControlledCheckPreview labeled={false} multiple={false} />
        </SandboxExample>

        <SandboxExample title="Com imagem ou ícone" description="Assim como na variante default, cada item pode combinar texto de apoio com mídia opcional na coluna lateral." code={checkMediaExampleCode} notes={['mediaPreset="images" mantém só imagens, mediaPreset="icons" mantém só ícones e mediaPreset="none" remove ambos.', 'Se um item tiver image e icon ao mesmo tempo, a imagem continua tendo prioridade visual.']}>
          <CheckMediaPreview />
        </SandboxExample>
      </SectionCard>
    </DocsStoryLayout>
}`,...(S=(f=l.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var C,T,P;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
      description: 'Título exibido acima da coleção.',
      table: {
        category: 'Conteúdo'
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
    multiple: {
      control: 'boolean',
      description: 'Indica ao callback se a seleção pode permanecer múltipla.',
      table: {
        category: 'Seleção'
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
      exclude: ['className', 'items', 'itemKey', 'variant', 'onToggle', 'onToggleGroup']
    }
  },
  render: args => <ListCheckInteractivePreview key={getCheckInteractivePreviewKey(args)} {...args} />
}`,...(P=(T=d.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};const oe=["Documentacao","Interativo"];export{l as Documentacao,d as Interativo,oe as __namedExportsOrder,ee as default};
