import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{D as A,S as L,s as n,a as i,b as r,c as p}from"./storyDocs-CoQtGjOG.js";import{B as t}from"./Button-DnfRrOli.js";import{T as e}from"./Tooltip-xV-v16gC.js";/* empty css              */import"./index-DyTKwKRb.js";import"./_commonjsHelpers-Cpj98o6Y.js";const O=["top","right","bottom","left","states"],q=[{title:"Quando usar",text:"Quando a interface precisa complementar um botão, rótulo ou opção com informação curta e contextual sem expandir o layout principal."},{title:"Melhor exploração",text:"Use o story 'Interativo' para testar conteúdo, título, posição, estado e uso com ícone. A documentação resume os padrões de trigger, estados e posições."},{title:"Comportamento",text:"O Tooltip abre em hover e foco, fecha com Escape e mantém o contrato legado em que children pode ser trigger ou corpo do balão dependendo da presença de content."}],S=o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",children:[o.jsx("circle",{cx:"14",cy:"14",r:"14",fill:"#E52207"}),o.jsx("path",{d:"M16.0625 14L19.1875 17.1562C19.5938 17.5312 19.5938 18.1562 19.1875 18.5312L18.5 19.2188C18.125 19.625 17.5 19.625 17.125 19.2188L14 16.0938L10.8438 19.2188C10.4688 19.625 9.84377 19.625 9.46877 19.2188L8.78127 18.5312C8.37502 18.1562 8.37502 17.5312 8.78127 17.1562L11.9063 14L8.78127 10.875C8.37502 10.5 8.37502 9.875 8.78127 9.5L9.46877 8.8125C9.84377 8.40625 10.4688 8.40625 10.8438 8.8125L14 11.9375L17.125 8.8125C17.5 8.40625 18.125 8.40625 18.5 8.8125L19.1875 9.5C19.5938 9.875 19.5938 10.5 19.1875 10.875L16.0625 14Z",fill:"white"})]}),z=`<Tooltip content="Rótulo do passo" position="top">
  <Button>Trigger</Button>
</Tooltip>`,D=`<Tooltip position="top">
  <div>Conteúdo do tooltip (children = body)</div>
</Tooltip>`,R=`<Tooltip content="Topo" position="top"><Button>Top</Button></Tooltip>
<Tooltip content="Direita" position="right"><Button>Right</Button></Tooltip>
<Tooltip content="Baixo" position="bottom"><Button>Bottom</Button></Tooltip>
<Tooltip content="Esquerda" position="left"><Button>Left</Button></Tooltip>`,U=`<Tooltip content="Sucesso" state="success"><Button>S</Button></Tooltip>
<Tooltip content="Atenção" state="warning"><Button>W</Button></Tooltip>
<Tooltip content="Erro" state="error"><Button>E</Button></Tooltip>
<Tooltip content="Info" state="info"><Button>I</Button></Tooltip>`,Z={title:"Sobreposições/Tooltip",component:e,args:{content:"Texto do tooltip de exemplo",title:void 0,position:"top",state:void 0},parameters:{layout:"padded",controls:{expanded:!0,sort:"requiredFirst"}}};function H(){return o.jsxs("div",{style:n.cardGrid,children:[o.jsx(p,{label:"Children como trigger",children:o.jsxs("div",{style:{display:"grid",gap:12,justifyItems:"start"},children:[o.jsxs("p",{style:n.statText,children:["Passe o conteúdo do balão em ",o.jsx("code",{children:"content"})," e use o children como elemento visível que ativa o tooltip."]}),o.jsx(e,{content:"Rótulo do passo",position:"top",children:o.jsx(t,{children:"Trigger"})})]})}),o.jsx(p,{label:"Children como corpo",children:o.jsxs("div",{style:{display:"grid",gap:12,justifyItems:"start"},children:[o.jsxs("p",{style:n.statText,children:["Sem ",o.jsx("code",{children:"content"}),", o componente mantém o comportamento legado e renderiza um trigger padrão com o children dentro do balão."]}),o.jsx(e,{position:"top",children:o.jsx("div",{children:"Conteúdo do tooltip renderizado via children."})})]})})]})}function w(){return o.jsxs("div",{style:{display:"flex",gap:40,alignItems:"center",justifyContent:"center",minHeight:220,flexWrap:"wrap"},children:[o.jsx(e,{content:"Topo",position:"top",children:o.jsx(t,{children:"Top"})}),o.jsx(e,{content:"Direita",position:"right",children:o.jsx(t,{children:"Right"})}),o.jsx(e,{content:"Baixo",position:"bottom",children:o.jsx(t,{children:"Bottom"})}),o.jsx(e,{content:"Esquerda",position:"left",children:o.jsx(t,{children:"Left"})})]})}function P(){return o.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",flexWrap:"wrap"},children:[o.jsx(e,{content:"Sucesso",state:"success",children:o.jsx(t,{children:"S"})}),o.jsx(e,{content:"Atenção",state:"warning",children:o.jsx(t,{children:"W"})}),o.jsx(e,{content:"Erro",state:"error",children:o.jsx(t,{children:"E"})}),o.jsx(e,{content:"Info",state:"info",children:o.jsx(t,{children:"I"})})]})}function W(){return o.jsxs("div",{style:{display:"grid",gap:16},children:[o.jsx(e,{content:"Opção A: descrição",position:"right",children:o.jsxs("label",{style:{cursor:"pointer",display:"inline-flex",gap:8,alignItems:"center"},children:[o.jsx("input",{type:"radio",name:"tooltip-radio"}),o.jsx("span",{children:"Opção A"})]})}),o.jsx(e,{content:o.jsx("span",{children:"Este é um aviso importante"}),title:"Atenção",icon:S,position:"right",children:o.jsx(t,{variant:"secondary",children:"Com ícone e título"})})]})}function M(d){const{withIcon:E=!1,state:B,...I}=d;return o.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"60vh"},children:o.jsx(e,{...I,state:B,icon:E?S:null,children:o.jsx(t,{children:"Trigger"})})})}const a={name:"Documentação",parameters:{controls:{disable:!0}},render:()=>o.jsxs(A,{children:[o.jsx(L,{eyebrow:"Documentação guiada",title:o.jsx("h3",{style:n.heroTitle,children:"Tooltip"}),description:o.jsxs(o.Fragment,{children:["O componente ",o.jsx("code",{children:"Tooltip"})," exibe conteúdo contextual em hover ou foco, preservando o contrato legado de trigger customizado ou trigger padrão com children como corpo."]}),variantTags:O,stats:q}),o.jsxs(i,{title:"Padrões de uso",description:"A origem suporta dois modos. O recomendado é usar children como trigger e content como conteúdo do balão. Para compatibilidade, o componente também aceita children como corpo quando content não é informado.",children:[o.jsxs("ul",{style:n.list,children:[o.jsxs("li",{children:[o.jsx("code",{children:"content"})," define o corpo do tooltip e libera o children para atuar como trigger."]}),o.jsxs("li",{children:["Sem ",o.jsx("code",{children:"content"}),", o componente renderiza um trigger padrão e usa o children como corpo do balão."]}),o.jsxs("li",{children:[o.jsx("code",{children:"title"})," adiciona um cabeçalho curto acima do conteúdo."]}),o.jsxs("li",{children:[o.jsx("code",{children:"icon"})," reforça visualmente o conteúdo quando o contexto pede um aviso ou destaque."]})]}),o.jsx(r,{title:"Trigger customizado e modo legado",description:"Comparação entre o uso recomendado e o comportamento legado trazido da origem.",code:`${z}

${D}`,children:o.jsx(H,{})})]}),o.jsxs(i,{title:"Posições e estados",description:"O Tooltip mantém as quatro posições da origem e aceita estados visuais para contextualizar sucesso, atenção, erro ou informação.",children:[o.jsx(r,{title:"Posicionamento",description:"Use top, right, bottom ou left conforme o espaço disponível ao redor do trigger.",code:R,children:o.jsx(w,{})}),o.jsx(r,{title:"Estados visuais",description:"Os estados reutilizam as cores semânticas do design system para diferenciar o contexto do conteúdo exibido.",code:U,children:o.jsx(P,{})})]}),o.jsx(i,{title:"Composição com outros elementos",description:"O componente pode envolver botões, labels e pequenos wrappers de inputs para disponibilizar ajuda contextual sem duplicar layout.",children:o.jsx(r,{title:"Exemplos compostos",description:"O exemplo abaixo cobre uso com opção de formulário e com conteúdo enriquecido por título e ícone.",code:`<Tooltip content="Opção A: descrição" position="right">
  <label>...</label>
</Tooltip>

<Tooltip content={<span>Este é um aviso importante</span>} title="Atenção" icon={<AlertIcon />} position="right">
  <Button variant="secondary">Com ícone e título</Button>
</Tooltip>`,children:o.jsx(W,{})})}),o.jsx(i,{title:"Limitações e acessibilidade",description:"Tooltips funcionam melhor com mensagens curtas e contexto complementar. Conteúdo essencial para a tarefa não deve depender apenas de hover.",children:o.jsxs("ul",{style:n.list,children:[o.jsx("li",{children:"Prefira conteúdo curto; mensagens longas começam a competir com padrões mais adequados como popover, alert ou modal."}),o.jsx("li",{children:"O componente abre em foco e hover, mas informações críticas ainda devem existir em outro ponto acessível da interface."}),o.jsx("li",{children:"Quando o trigger não for naturalmente focável, o componente adiciona foco por teclado na renderização do gatilho simples."}),o.jsx("li",{children:"Os estados visuais mudam apenas a apresentação; eles não substituem semântica ou validação do fluxo principal."})]})})]})},s={name:"Interativo",argTypes:{modoContraste:{control:"boolean",description:"Visualiza o componente no modo de alto contraste.",table:{category:"Acessibilidade"}},children:{control:!1,description:"A story usa um botão fixo como trigger para manter a comparação consistente.",table:{category:"Composição"}},content:{control:"text",description:"Texto principal exibido dentro do balão.",table:{category:"Conteúdo"}},title:{control:"text",description:"Cabeçalho opcional do tooltip.",table:{category:"Conteúdo"}},position:{control:{type:"radio"},options:["top","right","bottom","left"],description:"Posiciona o balão em relação ao trigger.",table:{category:"Composição"}},state:{control:{type:"select"},options:["none","success","warning","error","info"],mapping:{none:void 0,success:"success",warning:"warning",error:"error",info:"info"},labels:{none:"Nenhum",success:"Success",warning:"Warning",error:"Error",info:"Info"},description:"Aplica o estado visual semântico do tooltip.",table:{category:"Estado visual"}},icon:{control:!1,description:"A story controla o ícone pela flag withIcon para simplificar a interação.",table:{category:"Conteúdo"}},withIcon:{control:"boolean",description:"Adiciona o ícone decorativo ao lado do título e do conteúdo.",table:{category:"Conteúdo"}},defaultTriggerLabel:{control:"text",description:"Rótulo acessível do trigger padrão quando o componente não recebe content.",table:{category:"Acessibilidade"}}},args:{content:"Texto do tooltip de exemplo",title:"",position:"top",state:void 0,withIcon:!1,defaultTriggerLabel:"Mostrar informação contextual"},render:d=>o.jsx(M,{...d})},c={name:"Posições",parameters:{controls:{disable:!0}},render:()=>o.jsx(w,{})},l={name:"Estados",parameters:{controls:{disable:!0}},render:()=>o.jsx(P,{})};var m,u,g;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Documentação',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <DocsStoryLayout>
      <DocsHero eyebrow="Documentação guiada" title={<h3 style={storyDocsStyles.heroTitle}>Tooltip</h3>} description={<>
            O componente <code>Tooltip</code> exibe conteúdo contextual em hover ou
            foco, preservando o contrato legado de trigger customizado ou trigger
            padrão com children como corpo.
          </>} variantTags={docsVariantTags} stats={docsHeroStats} />

      <SectionCard title="Padrões de uso" description="A origem suporta dois modos. O recomendado é usar children como trigger e content como conteúdo do balão. Para compatibilidade, o componente também aceita children como corpo quando content não é informado.">
        <ul style={storyDocsStyles.list}>
          <li><code>content</code> define o corpo do tooltip e libera o children para atuar como trigger.</li>
          <li>Sem <code>content</code>, o componente renderiza um trigger padrão e usa o children como corpo do balão.</li>
          <li><code>title</code> adiciona um cabeçalho curto acima do conteúdo.</li>
          <li><code>icon</code> reforça visualmente o conteúdo quando o contexto pede um aviso ou destaque.</li>
        </ul>

        <SandboxExample title="Trigger customizado e modo legado" description="Comparação entre o uso recomendado e o comportamento legado trazido da origem." code={\`\${recommendedUsageCode}\\n\\n\${compatibilityUsageCode}\`}>
          <TooltipPatternsPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="Posições e estados" description="O Tooltip mantém as quatro posições da origem e aceita estados visuais para contextualizar sucesso, atenção, erro ou informação.">
        <SandboxExample title="Posicionamento" description="Use top, right, bottom ou left conforme o espaço disponível ao redor do trigger." code={positionsCode}>
          <TooltipPositionsPreview />
        </SandboxExample>

        <SandboxExample title="Estados visuais" description="Os estados reutilizam as cores semânticas do design system para diferenciar o contexto do conteúdo exibido." code={statesCode}>
          <TooltipStatesPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="Composição com outros elementos" description="O componente pode envolver botões, labels e pequenos wrappers de inputs para disponibilizar ajuda contextual sem duplicar layout.">
        <SandboxExample title="Exemplos compostos" description="O exemplo abaixo cobre uso com opção de formulário e com conteúdo enriquecido por título e ícone." code={\`<Tooltip content="Opção A: descrição" position="right">\\n  <label>...</label>\\n</Tooltip>\\n\\n<Tooltip content={<span>Este é um aviso importante</span>} title="Atenção" icon={<AlertIcon />} position="right">\\n  <Button variant="secondary">Com ícone e título</Button>\\n</Tooltip>\`}>
          <TooltipCompositionPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="Limitações e acessibilidade" description="Tooltips funcionam melhor com mensagens curtas e contexto complementar. Conteúdo essencial para a tarefa não deve depender apenas de hover.">
        <ul style={storyDocsStyles.list}>
          <li>Prefira conteúdo curto; mensagens longas começam a competir com padrões mais adequados como popover, alert ou modal.</li>
          <li>O componente abre em foco e hover, mas informações críticas ainda devem existir em outro ponto acessível da interface.</li>
          <li>Quando o trigger não for naturalmente focável, o componente adiciona foco por teclado na renderização do gatilho simples.</li>
          <li>Os estados visuais mudam apenas a apresentação; eles não substituem semântica ou validação do fluxo principal.</li>
        </ul>
      </SectionCard>
    </DocsStoryLayout>
}`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var x,h,b;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Interativo',
  argTypes: {
    modoContraste: {
      control: 'boolean',
      description: 'Visualiza o componente no modo de alto contraste.',
      table: {
        category: 'Acessibilidade'
      }
    },
    children: {
      control: false,
      description: 'A story usa um botão fixo como trigger para manter a comparação consistente.',
      table: {
        category: 'Composição'
      }
    },
    content: {
      control: 'text',
      description: 'Texto principal exibido dentro do balão.',
      table: {
        category: 'Conteúdo'
      }
    },
    title: {
      control: 'text',
      description: 'Cabeçalho opcional do tooltip.',
      table: {
        category: 'Conteúdo'
      }
    },
    position: {
      control: {
        type: 'radio'
      },
      options: ['top', 'right', 'bottom', 'left'],
      description: 'Posiciona o balão em relação ao trigger.',
      table: {
        category: 'Composição'
      }
    },
    state: {
      control: {
        type: 'select'
      },
      options: ['none', 'success', 'warning', 'error', 'info'],
      mapping: {
        none: undefined,
        success: 'success',
        warning: 'warning',
        error: 'error',
        info: 'info'
      },
      labels: {
        none: 'Nenhum',
        success: 'Success',
        warning: 'Warning',
        error: 'Error',
        info: 'Info'
      },
      description: 'Aplica o estado visual semântico do tooltip.',
      table: {
        category: 'Estado visual'
      }
    },
    icon: {
      control: false,
      description: 'A story controla o ícone pela flag withIcon para simplificar a interação.',
      table: {
        category: 'Conteúdo'
      }
    },
    withIcon: {
      control: 'boolean',
      description: 'Adiciona o ícone decorativo ao lado do título e do conteúdo.',
      table: {
        category: 'Conteúdo'
      }
    },
    defaultTriggerLabel: {
      control: 'text',
      description: 'Rótulo acessível do trigger padrão quando o componente não recebe content.',
      table: {
        category: 'Acessibilidade'
      }
    }
  },
  args: {
    content: 'Texto do tooltip de exemplo',
    title: '',
    position: 'top',
    state: undefined,
    withIcon: false,
    defaultTriggerLabel: 'Mostrar informação contextual'
  },
  render: args => <TooltipInteractivePreview {...args} />
}`,...(b=(h=s.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var f,v,y;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Posições',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <TooltipPositionsPreview />
}`,...(y=(v=c.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var T,j,C;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Estados',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <TooltipStatesPreview />
}`,...(C=(j=l.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};const k=["TooltipDocumentacao","TooltipInterativo","TooltipPosicoes","TooltipEstados"];export{a as TooltipDocumentacao,l as TooltipEstados,s as TooltipInterativo,c as TooltipPosicoes,k as __namedExportsOrder,Z as default};
