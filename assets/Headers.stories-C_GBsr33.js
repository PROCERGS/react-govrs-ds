import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{D as v,S as b,s as o,a as d,b as t,c as i}from"./storyDocs-CoQtGjOG.js";/* empty css              */import"./index-DyTKwKRb.js";import"./_commonjsHelpers-Cpj98o6Y.js";const S=`<h1 class="headers-12">Título principal</h1>
<h2 class="headers-12">Subtítulo</h2>
<h3 class="headers-12">Seção</h3>
<h4 class="headers-12">Legenda</h4>`,y=`<div class="headers-12">
  <h1>Título principal</h1>
  <h2>Subtítulo</h2>
  <h3>Seção</h3>
  <h4>Legenda</h4>
</div>`;function a({size:x,lineHeight:g,weight:j}){return e.jsxs("p",{style:{margin:0,fontSize:13,lineHeight:1.55,color:"var(--govrs-color-text-muted)"},children:[x," / ",g," / ",j]})}function u(){return e.jsxs("div",{style:o.cardGrid,children:[e.jsx(i,{label:"12 col (base)",children:e.jsx("div",{className:"headers-container",children:e.jsxs("div",{className:"headers-12",children:[e.jsxs("div",{className:"headers-demo",children:[e.jsx("h1",{children:"Header 1"}),e.jsx(a,{size:"41px",lineHeight:"58px",weight:"400"})]}),e.jsxs("div",{className:"headers-demo",children:[e.jsx("h2",{children:"Header 2"}),e.jsx(a,{size:"36px",lineHeight:"52px",weight:"400"})]}),e.jsxs("div",{className:"headers-demo",children:[e.jsx("h3",{children:"Header 3"}),e.jsx(a,{size:"30px",lineHeight:"42px",weight:"400"})]}),e.jsxs("div",{className:"headers-demo",children:[e.jsx("h4",{children:"Header 4"}),e.jsx(a,{size:"24px",lineHeight:"36px",weight:"400"})]})]})})}),e.jsx(i,{label:"4 col (base)",children:e.jsx("div",{className:"headers-container",children:e.jsxs("div",{className:"headers-4",children:[e.jsxs("div",{className:"headers-demo",children:[e.jsx("h1",{children:"Header 1"}),e.jsx(a,{size:"30px",lineHeight:"42px",weight:"400"})]}),e.jsxs("div",{className:"headers-demo",children:[e.jsx("h2",{children:"Header 2"}),e.jsx(a,{size:"24px",lineHeight:"36px",weight:"400"})]}),e.jsxs("div",{className:"headers-demo",children:[e.jsx("h3",{children:"Header 3"}),e.jsx(a,{size:"20px",lineHeight:"32px",weight:"400"})]}),e.jsxs("div",{className:"headers-demo",children:[e.jsx("h4",{children:"Header 4"}),e.jsx(a,{size:"18px",lineHeight:"28px",weight:"400"})]})]})})})]})}function f(){return e.jsxs("div",{style:o.cardGrid,children:[e.jsx(i,{label:"Aplicar na tag",children:e.jsxs("div",{children:[e.jsx("h1",{className:"headers-12",children:"Título principal"}),e.jsx("h2",{className:"headers-12",children:"Subtítulo"}),e.jsx("h3",{className:"headers-12",children:"Seção"}),e.jsx("h4",{className:"headers-12",children:"Legenda"})]})}),e.jsx(i,{label:"Aplicar no wrapper",children:e.jsx("div",{style:{border:"1px dashed #cbd5e1",padding:12,borderRadius:12},children:e.jsxs("div",{className:"headers-12",children:[e.jsx("h1",{children:"Título principal"}),e.jsx("h2",{children:"Subtítulo"}),e.jsx("h3",{children:"Seção"}),e.jsx("h4",{children:"Legenda"})]})})})]})}const A={title:"Tipografia/Headers",parameters:{layout:"padded"}},s={name:"Documentação",parameters:{controls:{disable:!0}},render:()=>e.jsxs(v,{children:[e.jsx(b,{eyebrow:"Escalas de títulos",title:e.jsx("h3",{style:o.heroTitle,children:"Headers"}),description:"A fundação de headers define o comportamento visual dos títulos de h1 a h4 em duas grades base. O objetivo é manter consistência tipográfica sem acoplar a escala a componentes específicos. A cor vem de <code>--govrs-color-text-primary</code> (verde escuro RS) e cada título termina com 1,25rem de margem para separar o próximo bloco de conteúdo."}),e.jsx(d,{title:"Escalas disponíveis",description:"Cada grade ajusta tamanho e line-height para os níveis de título. A grade 12 col favorece leitura ampla; a grade 4 col compacta o conjunto para contextos menores.",children:e.jsx(t,{title:"Comparativo das escalas",description:"Visualização lado a lado das classes base para as duas grades do sistema.",code:`<div class="headers-12">...</div>
<div class="headers-4">...</div>`,notes:["A semântica continua sendo definida pelas tags h1 a h4.","A classe controla apenas a escala visual associada ao contexto.","Cor do texto: --govrs-color-text-primary (verde institucional RS).","Ritmo vertical: todos os títulos usam margin-bottom de 1,25rem (--govrs-space-5)."],children:e.jsx(u,{})})}),e.jsx(d,{title:"Formas de aplicação",description:"Você pode aplicar a classe diretamente no título ou no wrapper pai. O comportamento visual é o mesmo, então a decisão pode seguir a organização do componente consumidor.",children:e.jsx(t,{title:"Tag ou wrapper",description:"As duas abordagens abaixo produzem o mesmo resultado e deixam a escolha na mão de quem compõe a interface.",code:`${S}

${y}`,children:e.jsx(f,{})})}),e.jsx(d,{title:"Boas práticas",description:"A fundação de headers existe para padronizar escala tipográfica, não para substituir a hierarquia estrutural do HTML.",children:e.jsxs("ul",{style:o.list,children:[e.jsx("li",{children:"Escolha a tag correta pela hierarquia de conteúdo e não apenas pelo tamanho visual desejado."}),e.jsx("li",{children:"Prefira manter a mesma grade visual ao longo de uma seção para evitar quebras bruscas de ritmo."}),e.jsx("li",{children:"Quando um componente precisar de uma escala diferente, ajuste a composição do design system antes de criar overrides locais recorrentes."})]})})]})},r={name:"Galeria",parameters:{controls:{disable:!0}},render:()=>e.jsx(u,{})};var c,l,n;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Documentação',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <DocsStoryLayout>
      <DocsHero eyebrow="Escalas de títulos" title={<h3 style={storyDocsStyles.heroTitle}>Headers</h3>} description="A fundação de headers define o comportamento visual dos títulos de h1 a h4 em duas grades base. O objetivo é manter consistência tipográfica sem acoplar a escala a componentes específicos. A cor vem de <code>--govrs-color-text-primary</code> (verde escuro RS) e cada título termina com 1,25rem de margem para separar o próximo bloco de conteúdo." />

      <SectionCard title="Escalas disponíveis" description="Cada grade ajusta tamanho e line-height para os níveis de título. A grade 12 col favorece leitura ampla; a grade 4 col compacta o conjunto para contextos menores.">
        <SandboxExample title="Comparativo das escalas" description="Visualização lado a lado das classes base para as duas grades do sistema." code={\`<div class="headers-12">...</div>
<div class="headers-4">...</div>\`} notes={['A semântica continua sendo definida pelas tags h1 a h4.', 'A classe controla apenas a escala visual associada ao contexto.', 'Cor do texto: --govrs-color-text-primary (verde institucional RS).', 'Ritmo vertical: todos os títulos usam margin-bottom de 1,25rem (--govrs-space-5).']}>
          <HeadersScalePreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="Formas de aplicação" description="Você pode aplicar a classe diretamente no título ou no wrapper pai. O comportamento visual é o mesmo, então a decisão pode seguir a organização do componente consumidor.">
        <SandboxExample title="Tag ou wrapper" description="As duas abordagens abaixo produzem o mesmo resultado e deixam a escolha na mão de quem compõe a interface." code={\`\${directCode}

\${wrapperCode}\`}>
          <HeadersUsagePreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="Boas práticas" description="A fundação de headers existe para padronizar escala tipográfica, não para substituir a hierarquia estrutural do HTML.">
        <ul style={storyDocsStyles.list}>
          <li>Escolha a tag correta pela hierarquia de conteúdo e não apenas pelo tamanho visual desejado.</li>
          <li>Prefira manter a mesma grade visual ao longo de uma seção para evitar quebras bruscas de ritmo.</li>
          <li>Quando um componente precisar de uma escala diferente, ajuste a composição do design system antes de criar overrides locais recorrentes.</li>
        </ul>
      </SectionCard>
    </DocsStoryLayout>
}`,...(n=(l=s.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};var m,p,h;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Galeria',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <HeadersScalePreview />
}`,...(h=(p=r.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};const D=["Documentacao","Galeria"];export{s as Documentacao,r as Galeria,D as __namedExportsOrder,A as default};
