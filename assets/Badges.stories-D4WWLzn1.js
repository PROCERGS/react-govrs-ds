import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{D as j,S as f,s as o,a as s,b as n}from"./storyDocs-CoQtGjOG.js";import{B as a}from"./Badges-CJIQjlwW.js";/* empty css              */import"./index-DyTKwKRb.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Text-DqgU3e9e.js";const y=["success","warning","error","info","outline"],C=[{title:"Quando usar",text:"Quando a mensagem precisa apenas sinalizar estado ou classificação sem ocupar a hierarquia visual de um alerta completo."},{title:"Melhor exploração",text:"Use o story 'Interativo' para testar variant, message e outline. O story 'Exemplos Combinados' resume as variantes preenchidas em uma leitura rápida."},{title:"Comportamento",text:"Badges são estáticas e compactas. Se a interface precisar de fechamento, destaque maior ou bloco multiline, Alerts tende a ser mais apropriado."}],B=`<Badges variant="success" message="Campo correto" />
<Badges variant="error" message="Campo inválido" />
<Badges variant="warning" message="Atenção" />
<Badges variant="info" message="Informação" />`,S=`// Via prop
<Badges variant="info" message="Mensagem via prop" />

// Via children
<Badges variant="info">
  <strong>Via children</strong>
</Badges>`,E=`
    <Badges variant="success" message="Campo correto" />
    <Badges variant="success" message="Campo correto" outline />
`,q=`<Badges variant="success" message="Campo correto" />
<Badges variant="error" message="Campo inválido" />
<Badges variant="warning" message="Atenção" />
<Badges variant="info" message="Informação" />`,M={title:"Feedback/Badges",component:a,parameters:{layout:"padded",controls:{expanded:!0,sort:"requiredFirst"}}};function w(){return e.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap",alignItems:"center"},children:[e.jsx(a,{variant:"success",message:"Campo correto"}),e.jsx(a,{variant:"error",message:"Campo inválido"}),e.jsx(a,{variant:"warning",message:"Atenção"}),e.jsx(a,{variant:"info",message:"Informação"})]})}function A(){return e.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap",alignItems:"center"},children:[e.jsx(a,{variant:"info",message:"Mensagem via prop"}),e.jsx(a,{variant:"info",children:e.jsx("strong",{children:"Via children"})})]})}function D(){return e.jsxs("div",{style:o.cardGrid,children:[e.jsxs("div",{style:o.previewItem,children:[e.jsx("p",{style:o.previewLabel,children:"Preenchida"}),e.jsx(a,{variant:"success",message:"Campo correto"})]}),e.jsxs("div",{style:o.previewItem,children:[e.jsx("p",{style:o.previewLabel,children:"Outline"}),e.jsx(a,{variant:"success",message:"Campo correto",outline:!0})]})]})}function h(){return e.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap",alignItems:"center"},children:[e.jsx(a,{variant:"success",message:"Campo correto"}),e.jsx(a,{variant:"error",message:"Campo inválido"}),e.jsx(a,{variant:"warning",message:"Atenção"}),e.jsx(a,{variant:"info",message:"Informação"})]})}const r={name:"Documentação",parameters:{controls:{disable:!0}},render:()=>e.jsxs(j,{children:[e.jsx(f,{eyebrow:"Documentação guiada",title:e.jsx("h3",{style:o.heroTitle,children:"Badges"}),description:e.jsxs(e.Fragment,{children:["O componente ",e.jsx("code",{children:"Badges"})," exibe rótulos compactos para estados e classificações."]}),variantTags:y,stats:C}),e.jsxs(s,{title:"Como usar",description:"Badges funcionam melhor quando a mensagem é curta e o objetivo é apenas sinalizar contexto. Elas compartilham as mesmas variantes semânticas dos Alerts, mas sem o peso visual de um bloco expandido.",children:[e.jsxs("ul",{style:o.list,children:[e.jsxs("li",{children:[e.jsx("code",{children:"variant"})," define o tom visual: success, error, warning ou info."]}),e.jsxs("li",{children:[e.jsx("code",{children:"message"})," define o texto a ser exibido na badge."]}),e.jsxs("li",{children:[e.jsx("code",{children:"children"})," permite passar estruturas mais complexas para dentro da badge."]}),e.jsxs("li",{children:[e.jsx("code",{children:"outline"})," troca o preenchimento por uma versão contornada."]})]}),e.jsx(n,{title:"Galeria de variantes",description:"Snapshot rápido das badges preenchidas para comparar tom visual e densidade do componente.",code:B,notes:["As variantes seguem a mesma linguagem visual usada nos Alerts.","Badges continuam sendo elementos compactos e estáticos, sem ação de fechamento."],children:e.jsx(w,{})})]}),e.jsx(s,{title:"Message e children",description:"O componente aceita tanto uma string simples quanto conteúdo React. A escolha depende mais do nível de destaque interno que você precisa do que de qualquer diferença comportamental.",children:e.jsx(n,{title:"Conteúdo mínimo",description:"Comparativo direto entre passar a mensagem pela prop message e usar children para um pequeno destaque interno.",code:S,children:e.jsx(A,{})})}),e.jsx(s,{title:"Variação outline",description:"Quando o contexto pede uma presença mais leve, outline reaproveita a mesma semântica sem preencher toda a superfície da badge.",children:e.jsx(n,{title:"Cheio versus contornado",description:"A comparação abaixo ajuda a decidir quando o visual preenchido pode competir demais com outros elementos da tela.",code:E,children:e.jsx(D,{})})}),e.jsx(s,{title:"Exemplos combinados",description:"A história combinada continua útil para um inventário rápido das badges preenchidas disponíveis no catálogo.",children:e.jsx(n,{title:"Panorama rápido",description:"Mesmo conjunto essencial de exemplos do story combinado anterior, agora dentro do layout compartilhado.",code:q,children:e.jsx(h,{})})}),e.jsx(s,{title:"Limitações e dependências",description:"Badges foram pensadas para sinalização compacta, não para narrativa longa, ações ou blocos de feedback que precisem ganhar largura e respiro maiores.",children:e.jsxs("ul",{style:o.list,children:[e.jsx("li",{children:"Badges não são dismissible. Se a pessoa usuária precisar fechar a mensagem, prefira Alerts."}),e.jsxs("li",{children:[e.jsx("code",{children:"message"})," tem precedência sobre ",e.jsx("code",{children:"children"})," quando ambos forem informados."]}),e.jsxs("li",{children:[e.jsx("code",{children:"outline"})," altera apenas o tratamento visual, sem mudar semântica ou comportamento."]}),e.jsx("li",{children:"Para textos longos, o componente perde a principal vantagem de densidade e leitura rápida."})]})})]})},i={name:"Interativo",argTypes:{modoContraste:{control:"boolean",description:"Visualiza o componente no modo de alto contraste.",table:{category:"Acessibilidade"}},variant:{control:{type:"radio"},options:["success","warning","error","info"],description:"Define o tom visual e semântico da badge.",table:{category:"Estado visual"}},message:{control:"text",description:"Texto principal exibido na badge.",table:{category:"Conteúdo"}},outline:{control:"boolean",description:"Ativa a variação contornada em vez do preenchimento padrão.",table:{category:"Estado visual"}}},args:{variant:"info",message:"Exemplo de badge",outline:!1},parameters:{controls:{exclude:["children"]}},render:b=>e.jsx("div",{style:{padding:12},children:e.jsx(a,{...b})})},t={name:"Exemplos Combinados",parameters:{controls:{disable:!0}},render:()=>e.jsx(h,{})};var d,c,l;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Documentação',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <DocsStoryLayout>
      <DocsHero eyebrow="Documentação guiada" title={<h3 style={storyDocsStyles.heroTitle}>Badges</h3>} description={<>
            O componente <code>Badges</code> exibe rótulos compactos para estados e
            classificações.
          </>} variantTags={docsVariantTags} stats={docsHeroStats} />

      <SectionCard title="Como usar" description="Badges funcionam melhor quando a mensagem é curta e o objetivo é apenas sinalizar contexto. Elas compartilham as mesmas variantes semânticas dos Alerts, mas sem o peso visual de um bloco expandido.">
        <ul style={storyDocsStyles.list}>
          <li><code>variant</code> define o tom visual: success, error, warning ou info.</li>
          <li><code>message</code> define o texto a ser exibido na badge.</li>
          <li><code>children</code> permite passar estruturas mais complexas para dentro da badge.</li>
          <li><code>outline</code> troca o preenchimento por uma versão contornada.</li>
        </ul>

        <SandboxExample title="Galeria de variantes" description="Snapshot rápido das badges preenchidas para comparar tom visual e densidade do componente." code={variantExampleCode} notes={['As variantes seguem a mesma linguagem visual usada nos Alerts.', 'Badges continuam sendo elementos compactos e estáticos, sem ação de fechamento.']}>
          <BadgesVariantsPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="Message e children" description="O componente aceita tanto uma string simples quanto conteúdo React. A escolha depende mais do nível de destaque interno que você precisa do que de qualquer diferença comportamental.">
        <SandboxExample title="Conteúdo mínimo" description="Comparativo direto entre passar a mensagem pela prop message e usar children para um pequeno destaque interno." code={contentExampleCode}>
          <BadgesContentPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="Variação outline" description="Quando o contexto pede uma presença mais leve, outline reaproveita a mesma semântica sem preencher toda a superfície da badge.">
        <SandboxExample title="Cheio versus contornado" description="A comparação abaixo ajuda a decidir quando o visual preenchido pode competir demais com outros elementos da tela." code={outlineExampleCode}>
          <BadgesOutlinePreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="Exemplos combinados" description="A história combinada continua útil para um inventário rápido das badges preenchidas disponíveis no catálogo.">
        <SandboxExample title="Panorama rápido" description="Mesmo conjunto essencial de exemplos do story combinado anterior, agora dentro do layout compartilhado." code={combinedExampleCode}>
          <BadgesCombinedPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="Limitações e dependências" description="Badges foram pensadas para sinalização compacta, não para narrativa longa, ações ou blocos de feedback que precisem ganhar largura e respiro maiores.">
        <ul style={storyDocsStyles.list}>
          <li>Badges não são dismissible. Se a pessoa usuária precisar fechar a mensagem, prefira Alerts.</li>
          <li><code>message</code> tem precedência sobre <code>children</code> quando ambos forem informados.</li>
          <li><code>outline</code> altera apenas o tratamento visual, sem mudar semântica ou comportamento.</li>
          <li>Para textos longos, o componente perde a principal vantagem de densidade e leitura rápida.</li>
        </ul>
      </SectionCard>
    </DocsStoryLayout>
}`,...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var m,p,u;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Interativo',
  argTypes: {
    modoContraste: {
      control: 'boolean',
      description: 'Visualiza o componente no modo de alto contraste.',
      table: {
        category: 'Acessibilidade'
      }
    },
    variant: {
      control: {
        type: 'radio'
      },
      options: ['success', 'warning', 'error', 'info'],
      description: 'Define o tom visual e semântico da badge.',
      table: {
        category: 'Estado visual'
      }
    },
    message: {
      control: 'text',
      description: 'Texto principal exibido na badge.',
      table: {
        category: 'Conteúdo'
      }
    },
    outline: {
      control: 'boolean',
      description: 'Ativa a variação contornada em vez do preenchimento padrão.',
      table: {
        category: 'Estado visual'
      }
    }
  },
  args: {
    variant: 'info',
    message: 'Exemplo de badge',
    outline: false
  },
  parameters: {
    controls: {
      exclude: ['children']
    }
  },
  render: args => <div style={{
    padding: 12
  }}>
      <Badges {...args} />
    </div>
}`,...(u=(p=i.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,x,v;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Exemplos Combinados',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <BadgesCombinedPreview />
}`,...(v=(x=t.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};const H=["BadgesDocumentacao","BadgesInterativo","BadgesCombinados"];export{t as BadgesCombinados,r as BadgesDocumentacao,i as BadgesInterativo,H as __namedExportsOrder,M as default};
