import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{D as v,S as f,s,a as t,b as j,c as i}from"./storyDocs-CoQtGjOG.js";/* empty css              */import"./index-DyTKwKRb.js";import"./_commonjsHelpers-Cpj98o6Y.js";const y=`<p class="paragraph-12-short">Parágrafo curto - exemplo de texto.</p>
<p class="paragraph-12-small">Parágrafo pequeno - exemplo de texto.</p>
<p class="paragraph-12-long">Parágrafo longo - exemplo de texto.</p>`,S=`<p class="paragraph-4-short">Parágrafo curto - exemplo de texto.</p>
<p class="paragraph-4-long">Parágrafo longo - exemplo de texto.</p>`;function e({size:h,lineHeight:x,weight:u}){return a.jsxs("p",{style:{margin:0,fontSize:13,lineHeight:1.55,color:"var(--govrs-color-text-muted)"},children:[h," / ",x," / ",u]})}function g(){return a.jsxs("div",{style:s.cardGrid,children:[a.jsx(i,{label:"12 col (base)",children:a.jsx("div",{className:"paragraphs-container",style:{minWidth:280},children:a.jsxs("div",{className:"paragraphs-12",children:[a.jsxs("div",{className:"paragraphs-demo",children:[a.jsx("p",{className:"paragraph-12-short",children:"Parágrafo curto - exemplo de texto."}),a.jsx(e,{size:"20px",lineHeight:"32px",weight:"400"})]}),a.jsxs("div",{className:"paragraphs-demo",children:[a.jsx("p",{className:"paragraph-12-small",children:"Parágrafo pequeno - exemplo de texto."}),a.jsx(e,{size:"16px",lineHeight:"24px",weight:"400"})]}),a.jsxs("div",{className:"paragraphs-demo",children:[a.jsx("p",{className:"paragraph-12-long",children:"Parágrafo longo - exemplo de texto. Este parágrafo é declarado separadamente mesmo que compartilhe valores com o curto."}),a.jsx(e,{size:"20px",lineHeight:"32px",weight:"400"})]})]})})}),a.jsx(i,{label:"4 col (base)",children:a.jsx("div",{className:"paragraphs-container",style:{minWidth:280},children:a.jsxs("div",{className:"paragraphs-4",children:[a.jsxs("div",{className:"paragraphs-demo",children:[a.jsx("p",{className:"paragraph-4-short",children:"Parágrafo curto - exemplo de texto."}),a.jsx(e,{size:"16px",lineHeight:"24px",weight:"400"})]}),a.jsxs("div",{className:"paragraphs-demo",children:[a.jsx("p",{className:"paragraph-4-long",children:"Parágrafo longo - exemplo de texto."}),a.jsx(e,{size:"16px",lineHeight:"28px",weight:"400"})]})]})})})]})}const z={title:"Tipografia/Paragraphs",parameters:{layout:"padded"}},r={name:"Documentação",parameters:{controls:{disable:!0}},render:()=>a.jsxs(v,{children:[a.jsx(f,{eyebrow:"Escalas de parágrafo",title:a.jsx("h3",{style:s.heroTitle,children:"Paragraphs"}),description:"A fundação de paragraphs define classes nomeadas por grade e variante para padronizar texto corrido no design system sem exigir combinações ad hoc de tamanho e line-height. A cor do texto vem de <code>--govrs-color-text-primary</code> (verde escuro RS), com 1,25rem de margem inferior para manter o ritmo entre blocos de conteúdo."}),a.jsx(t,{title:"Variações por grade",description:"A grade 12 col oferece variantes curta, pequena e longa. A grade 4 col simplifica a família e aproxima a escala curta da pequena.",children:a.jsx(j,{title:"Comparativo das classes",description:"Visualização lado a lado das variações disponíveis nas duas grades base.",code:`${y}

${S}`,notes:["A variação longa em 12 col compartilha a mesma escala do parágrafo curto, mas permanece nomeada separadamente por clareza de uso.","No sistema 4 col, a variação curta cobre o caso que historicamente se aproximava do parágrafo pequeno.","Cor do texto: --govrs-color-text-primary (verde institucional RS).","Ritmo vertical: todos os parágrafos usam margin-bottom de 1,25rem (--govrs-space-5)."],children:a.jsx(g,{})})}),a.jsx(t,{title:"Naming e aplicação",description:"As classes seguem o formato paragraph-<cols>-<variant> para deixar a escolha mais explícita e evitar empilhamento de várias classes no mesmo elemento.",children:a.jsxs("ul",{style:s.list,children:[a.jsxs("li",{children:["Exemplos: ",a.jsx("code",{children:"paragraph-12-short"}),", ",a.jsx("code",{children:"paragraph-12-small"}),", ",a.jsx("code",{children:"paragraph-4-long"}),"."]}),a.jsx("li",{children:"Prefira usar a classe final desejada diretamente no elemento de texto."}),a.jsx("li",{children:"Se um caso recorrente não estiver coberto, evolua a fundação antes de criar estilos locais repetidos."})]})})]})},o={name:"Galeria",parameters:{controls:{disable:!0}},render:()=>a.jsx(g,{})};var l,c,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Documentação',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <DocsStoryLayout>
      <DocsHero eyebrow="Escalas de parágrafo" title={<h3 style={storyDocsStyles.heroTitle}>Paragraphs</h3>} description="A fundação de paragraphs define classes nomeadas por grade e variante para padronizar texto corrido no design system sem exigir combinações ad hoc de tamanho e line-height. A cor do texto vem de <code>--govrs-color-text-primary</code> (verde escuro RS), com 1,25rem de margem inferior para manter o ritmo entre blocos de conteúdo." />

      <SectionCard title="Variações por grade" description="A grade 12 col oferece variantes curta, pequena e longa. A grade 4 col simplifica a família e aproxima a escala curta da pequena.">
        <SandboxExample title="Comparativo das classes" description="Visualização lado a lado das variações disponíveis nas duas grades base." code={\`\${paragraphs12Code}

\${paragraphs4Code}\`} notes={['A variação longa em 12 col compartilha a mesma escala do parágrafo curto, mas permanece nomeada separadamente por clareza de uso.', 'No sistema 4 col, a variação curta cobre o caso que historicamente se aproximava do parágrafo pequeno.', 'Cor do texto: --govrs-color-text-primary (verde institucional RS).', 'Ritmo vertical: todos os parágrafos usam margin-bottom de 1,25rem (--govrs-space-5).']}>
          <ParagraphsScalePreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="Naming e aplicação" description="As classes seguem o formato paragraph-<cols>-<variant> para deixar a escolha mais explícita e evitar empilhamento de várias classes no mesmo elemento.">
        <ul style={storyDocsStyles.list}>
          <li>Exemplos: <code>paragraph-12-short</code>, <code>paragraph-12-small</code>, <code>paragraph-4-long</code>.</li>
          <li>Prefira usar a classe final desejada diretamente no elemento de texto.</li>
          <li>Se um caso recorrente não estiver coberto, evolua a fundação antes de criar estilos locais repetidos.</li>
        </ul>
      </SectionCard>
    </DocsStoryLayout>
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,n,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Galeria',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <ParagraphsScalePreview />
}`,...(m=(n=o.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};const A=["Documentacao","Galeria"];export{r as Documentacao,o as Galeria,A as __namedExportsOrder,z as default};
