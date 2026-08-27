import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{D as h,S as v,s as i,a as o,b as g}from"./storyDocs-CoQtGjOG.js";/* empty css              */import"./index-DyTKwKRb.js";import"./_commonjsHelpers-Cpj98o6Y.js";const b=`<ul class="listas-base">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>`;function f({size:p,lineHeight:u,weight:x}){return e.jsxs("p",{style:{margin:0,fontSize:13,lineHeight:1.55,color:"var(--govrs-color-text-muted)"},children:[p," / ",u," / ",x]})}function m(){return e.jsx("div",{className:"listas-container",style:{maxWidth:960},children:e.jsx("div",{className:"listas-base",children:e.jsxs("div",{className:"listas-demo",children:[e.jsxs("ul",{children:[e.jsx("li",{children:"Lista 1"}),e.jsx("li",{children:"Lista 2"}),e.jsx("li",{children:"Lista 3"})]}),e.jsx(f,{size:"20px",lineHeight:"32px",weight:"400"})]})})})}const q={title:"Tipografia/Lists",parameters:{layout:"padded"}},a={name:"Documentação",parameters:{controls:{disable:!0}},render:()=>e.jsxs(h,{children:[e.jsx(v,{eyebrow:"Listas tipográficas",title:e.jsx("h3",{style:i.heroTitle,children:"Lists"}),description:"A fundação Lists centraliza a apresentação tipográfica de listas simples e ajuda a evitar repetição de regras de texto em componentes e páginas consumidoras. A lista como bloco termina com 1,25rem de margem antes do próximo elemento de conteúdo."}),e.jsx(o,{title:"Uso recomendado",description:"Use a classe listas-base para listas simples que precisam herdar a escala tipográfica do sistema sem virar um componente composto.",children:e.jsx(g,{title:"Markup mínimo",description:"Estrutura básica para listas que seguem a fundação tipográfica documentada.",code:b,notes:["Essa fundação cobre listas textuais simples; listas com comportamento adicional devem subir para um componente ou pattern.","Ritmo vertical: a lista usa margin-bottom de 1,25rem (--govrs-space-5); o espaçamento entre itens permanece próprio da lista."],children:e.jsx(m,{})})}),e.jsx(o,{title:"Quando não usar",description:"A fundação de listas não substitui componentes que precisam de semântica extra, ícones, estados interativos ou composições mais ricas.",children:e.jsxs("ul",{style:i.list,children:[e.jsx("li",{children:"Se a lista exigir interação por item, considere um componente dedicado em vez da fundação tipográfica."}),e.jsx("li",{children:"Se houver necessidade recorrente de variações de espaçamento ou hierarquia, avalie evoluir a base compartilhada antes de criar overrides locais."}),e.jsxs("li",{children:["Mantenha a semântica nativa de ",e.jsx("code",{children:"ul"})," e ",e.jsx("code",{children:"li"})," sempre que possível."]})]})})]})},s={name:"Galeria",parameters:{controls:{disable:!0}},render:()=>e.jsx(m,{})};var t,r,n;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: 'Documentação',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <DocsStoryLayout>
      <DocsHero eyebrow="Listas tipográficas" title={<h3 style={storyDocsStyles.heroTitle}>Lists</h3>} description="A fundação Lists centraliza a apresentação tipográfica de listas simples e ajuda a evitar repetição de regras de texto em componentes e páginas consumidoras. A lista como bloco termina com 1,25rem de margem antes do próximo elemento de conteúdo." />

      <SectionCard title="Uso recomendado" description="Use a classe listas-base para listas simples que precisam herdar a escala tipográfica do sistema sem virar um componente composto.">
        <SandboxExample title="Markup mínimo" description="Estrutura básica para listas que seguem a fundação tipográfica documentada." code={listCode} notes={['Essa fundação cobre listas textuais simples; listas com comportamento adicional devem subir para um componente ou pattern.', 'Ritmo vertical: a lista usa margin-bottom de 1,25rem (--govrs-space-5); o espaçamento entre itens permanece próprio da lista.']}>
          <ListsPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="Quando não usar" description="A fundação de listas não substitui componentes que precisam de semântica extra, ícones, estados interativos ou composições mais ricas.">
        <ul style={storyDocsStyles.list}>
          <li>Se a lista exigir interação por item, considere um componente dedicado em vez da fundação tipográfica.</li>
          <li>Se houver necessidade recorrente de variações de espaçamento ou hierarquia, avalie evoluir a base compartilhada antes de criar overrides locais.</li>
          <li>Mantenha a semântica nativa de <code>ul</code> e <code>li</code> sempre que possível.</li>
        </ul>
      </SectionCard>
    </DocsStoryLayout>
}`,...(n=(r=a.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};var c,l,d;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Galeria',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <ListsPreview />
}`,...(d=(l=s.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const E=["Documentacao","Galeria"];export{a as Documentacao,s as Galeria,E as __namedExportsOrder,q as default};
