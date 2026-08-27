import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{D as p,S as u,s as o,a as r,b as t,c as l}from"./storyDocs-CoQtGjOG.js";/* empty css              */import"./index-DyTKwKRb.js";import"./_commonjsHelpers-Cpj98o6Y.js";const x='<label class="label-base">Label</label>',v=`<div class="label-base">
  <label>Label</label>
</div>`,h=`<label class="label-tab">Geral</label>
<label class="label-tab">Conteúdo</label>
<label class="label-tab">Permissões</label>`;function j(){return e.jsxs("div",{style:o.cardGrid,children:[e.jsx(l,{label:"Label base",children:e.jsx("label",{className:"label-base",children:"Label"})}),e.jsx(l,{label:"Label tab",children:e.jsxs("div",{style:{display:"flex",gap:16,flexWrap:"wrap"},children:[e.jsx("label",{className:"label-tab",children:"Geral"}),e.jsx("label",{className:"label-tab",children:"Conteúdo"}),e.jsx("label",{className:"label-tab",children:"Permissões"})]})})]})}function f(){return e.jsxs("div",{style:o.cardGrid,children:[e.jsx(l,{label:"Aplicar na tag",children:e.jsx("label",{className:"label-base",children:"Label"})}),e.jsx(l,{label:"Aplicar no wrapper",children:e.jsx("div",{style:{border:"1px dashed #cbd5e1",padding:12,borderRadius:12},children:e.jsx("div",{className:"label-base",children:e.jsx("label",{children:"Label"})})})})]})}const A={title:"Tipografia/Labels",parameters:{layout:"padded"}},a={name:"Documentação",parameters:{controls:{disable:!0}},render:()=>e.jsxs(p,{children:[e.jsx(u,{eyebrow:"Rótulos visuais",title:e.jsx("h3",{style:o.heroTitle,children:"Labels"}),description:"A fundação de labels cobre duas necessidades visuais distintas: o rótulo base e a aparência de aba. O comportamento continua sob responsabilidade do componente que consome essas classes."}),e.jsx(r,{title:"Label base",description:"Use o label base quando o objetivo for manter um rótulo simples, consistente e alinhado a formulários ou pequenas composições informativas.",children:e.jsx(t,{title:"Aplicação no elemento ou no wrapper",description:"As duas formas abaixo mostram a mesma aparência visual e deixam a composição mais flexível para outros componentes do sistema.",code:`${x}

${v}`,notes:["A semântica continua sendo do elemento label original.","A escolha entre aplicar na tag ou no wrapper depende da estrutura do componente consumidor."],children:e.jsx(f,{})})}),e.jsx(r,{title:"Label tab",description:"A classe label-tab existe para reproduzir a aparência visual de uma barra de abas, sem assumir papéis ARIA ou navegação por teclado.",children:e.jsx(t,{title:"Composição visual de abas",description:"Exemplo de rótulos lado a lado para compor uma faixa visual semelhante a tabs.",code:h,notes:["Quando houver um componente real de tabs, a semântica e a navegação devem ser implementadas por ele, não por esta fundação."],children:e.jsxs("div",{style:{display:"flex",gap:24,alignItems:"center",flexWrap:"wrap"},children:[e.jsx("label",{className:"label-tab",children:"Geral"}),e.jsx("label",{className:"label-tab",children:"Conteúdo"}),e.jsx("label",{className:"label-tab",children:"Permissões"})]})})}),e.jsx(r,{title:"Boas práticas",description:"Labels são fundações visuais. Elas não devem esconder comportamento interativo que não esteja explicitamente implementado em um componente acima delas.",children:e.jsxs("ul",{style:o.list,children:[e.jsxs("li",{children:["Prefira ",e.jsx("code",{children:"label-base"})," para rótulos de formulário e identificação simples."]}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"label-tab"})," apenas quando a interface já tiver um contrato claro de navegação por abas."]}),e.jsx("li",{children:"Evite usar labels como substituto de botões ou links quando a intenção for ação, não rotulagem."})]})})]})},s={name:"Galeria",parameters:{controls:{disable:!0}},render:()=>e.jsx(j,{})};var i,n,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'Documentação',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <DocsStoryLayout>
      <DocsHero eyebrow="Rótulos visuais" title={<h3 style={storyDocsStyles.heroTitle}>Labels</h3>} description="A fundação de labels cobre duas necessidades visuais distintas: o rótulo base e a aparência de aba. O comportamento continua sob responsabilidade do componente que consome essas classes." />

      <SectionCard title="Label base" description="Use o label base quando o objetivo for manter um rótulo simples, consistente e alinhado a formulários ou pequenas composições informativas.">
        <SandboxExample title="Aplicação no elemento ou no wrapper" description="As duas formas abaixo mostram a mesma aparência visual e deixam a composição mais flexível para outros componentes do sistema." code={\`\${baseLabelCode}

\${wrapperLabelCode}\`} notes={['A semântica continua sendo do elemento label original.', 'A escolha entre aplicar na tag ou no wrapper depende da estrutura do componente consumidor.']}>
          <LabelsUsagePreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="Label tab" description="A classe label-tab existe para reproduzir a aparência visual de uma barra de abas, sem assumir papéis ARIA ou navegação por teclado.">
        <SandboxExample title="Composição visual de abas" description="Exemplo de rótulos lado a lado para compor uma faixa visual semelhante a tabs." code={tabLabelCode} notes={['Quando houver um componente real de tabs, a semântica e a navegação devem ser implementadas por ele, não por esta fundação.']}>
          <div style={{
          display: 'flex',
          gap: 24,
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
            <label className="label-tab">Geral</label>
            <label className="label-tab">Conteúdo</label>
            <label className="label-tab">Permissões</label>
          </div>
        </SandboxExample>
      </SectionCard>

      <SectionCard title="Boas práticas" description="Labels são fundações visuais. Elas não devem esconder comportamento interativo que não esteja explicitamente implementado em um componente acima delas.">
        <ul style={storyDocsStyles.list}>
          <li>Prefira <code>label-base</code> para rótulos de formulário e identificação simples.</li>
          <li>Use <code>label-tab</code> apenas quando a interface já tiver um contrato claro de navegação por abas.</li>
          <li>Evite usar labels como substituto de botões ou links quando a intenção for ação, não rotulagem.</li>
        </ul>
      </SectionCard>
    </DocsStoryLayout>
}`,...(d=(n=a.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var c,b,m;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Galeria',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <LabelsGalleryPreview />
}`,...(m=(b=s.parameters)==null?void 0:b.docs)==null?void 0:m.source}}};const w=["Documentacao","Galeria"];export{a as Documentacao,s as Galeria,w as __namedExportsOrder,A as default};
