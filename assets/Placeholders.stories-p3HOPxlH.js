import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{D as m,S as u,s as r,a as t,b as h}from"./storyDocs-CoQtGjOG.js";/* empty css              */import"./index-DyTKwKRb.js";import"./_commonjsHelpers-Cpj98o6Y.js";const x='<input class="input-placeholder" placeholder="Exemplo" />';function p(){return e.jsx("div",{style:{maxWidth:420},children:e.jsx("input",{className:"input-placeholder",placeholder:"Exemplo",style:{padding:8,width:"100%"}})})}const E={title:"Tipografia/Placeholders",parameters:{layout:"padded"}},o={name:"Documentação",parameters:{controls:{disable:!0}},render:()=>e.jsxs(m,{children:[e.jsx(u,{eyebrow:"Placeholder",title:e.jsx("h3",{style:r.heroTitle,children:"Placeholders"}),description:"A fundação de placeholders padroniza o texto de sugestão dentro de campos. Ela atua apenas no próprio input, sem modificar a anatomia externa do componente consumidor."}),e.jsx(t,{title:"Aplicação correta",description:"O estilo de placeholder só entra em vigor quando a classe é aplicada diretamente no elemento input. Esse detalhe é a principal restrição de uso desta fundação.",children:e.jsx(h,{title:"Markup mínimo",description:"Exemplo direto da aplicação correta da classe input-placeholder.",code:x,notes:["Wrappers pais não propagam o estilo do placeholder.","Quando o campo exigir estrutura mais rica, o componente Input continua sendo a camada apropriada."],children:e.jsx(p,{})})}),e.jsx(t,{title:"Boas práticas",description:"A fundação de placeholder existe para consistência visual, não para substituir componentes completos de formulário.",children:e.jsxs("ul",{style:r.list,children:[e.jsx("li",{children:"Prefira combinar esta fundação com componentes ou estruturas que já resolvam label, feedback e estados."}),e.jsx("li",{children:"Evite usar placeholder como único meio de descrever o campo quando o formulário exigir contexto persistente."}),e.jsx("li",{children:"Mantenha o texto curto e orientado a exemplo, não como substituto da instrução principal do campo."})]})})]})},a={name:"Galeria",parameters:{controls:{disable:!0}},render:()=>e.jsx(p,{})};var s,i,n;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: 'Documentação',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <DocsStoryLayout>
      <DocsHero eyebrow="Placeholder" title={<h3 style={storyDocsStyles.heroTitle}>Placeholders</h3>} description="A fundação de placeholders padroniza o texto de sugestão dentro de campos. Ela atua apenas no próprio input, sem modificar a anatomia externa do componente consumidor." />

      <SectionCard title="Aplicação correta" description="O estilo de placeholder só entra em vigor quando a classe é aplicada diretamente no elemento input. Esse detalhe é a principal restrição de uso desta fundação.">
        <SandboxExample title="Markup mínimo" description="Exemplo direto da aplicação correta da classe input-placeholder." code={placeholderCode} notes={['Wrappers pais não propagam o estilo do placeholder.', 'Quando o campo exigir estrutura mais rica, o componente Input continua sendo a camada apropriada.']}>
          <PlaceholderPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="Boas práticas" description="A fundação de placeholder existe para consistência visual, não para substituir componentes completos de formulário.">
        <ul style={storyDocsStyles.list}>
          <li>Prefira combinar esta fundação com componentes ou estruturas que já resolvam label, feedback e estados.</li>
          <li>Evite usar placeholder como único meio de descrever o campo quando o formulário exigir contexto persistente.</li>
          <li>Mantenha o texto curto e orientado a exemplo, não como substituto da instrução principal do campo.</li>
        </ul>
      </SectionCard>
    </DocsStoryLayout>
}`,...(n=(i=o.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};var l,c,d;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Galeria',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <PlaceholderPreview />
}`,...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const g=["Documentacao","Galeria"];export{o as Documentacao,a as Galeria,g as __namedExportsOrder,E as default};
