import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{b as L,D as k,S as G,s as d,a as S,c as n}from"./storyDocs-CoQtGjOG.js";import{r as E}from"./index-DyTKwKRb.js";/* empty css              */import"./_commonjsHelpers-Cpj98o6Y.js";const f=84,j=10,U=30,r=f/2,y=f/2-j/2,B=y-j/2-U,g=2*Math.PI*y,$="var(--govrs-color-brand-primary, #1A7235)";function H(a){const i=Number(String(a??0).replace(/[^0-9.-]/g,""))||0;return Math.max(0,Math.min(100,i))}function N(...a){return a.filter(Boolean).join(" ")}function M(a){return a==null||a===!1?!1:typeof a=="string"?a.trim().length>0:!0}function F(a){return a==="top"||a==="left"||a==="right"?a:"bottom"}function _({id:a,label:i,position:p}){return e.jsx("span",{id:a,className:`govrs-loader__label govrs-loader__label--${p}`,children:i})}function W({label:a,labelPosition:i="bottom",className:p,...l}){const c=E.useId(),t=F(i),u=M(a),P=l["aria-label"]||l["aria-labelledby"]?{}:u?{"aria-labelledby":c}:{"aria-label":"Carregando"},x=u&&(t==="top"||t==="left"),C=u&&!x;return e.jsxs("div",{...l,...P,className:N("govrs-loader","govrs-loader--default",`govrs-loader--label-${t}`,p),role:"status","aria-live":"polite",children:[x?e.jsx(_,{id:c,label:a,position:t}):null,e.jsx("span",{className:"govrs-loader__spinner-wrap","aria-hidden":"true",children:e.jsx("svg",{className:"govrs-loader__spinner",viewBox:"0 0 50 50",focusable:"false",children:e.jsx("circle",{className:"govrs-loader__path",cx:"25",cy:"25",r:"20",fill:"none",strokeWidth:"4"})})}),C?e.jsx(_,{id:c,label:a,position:t}):null]})}function Q({value:a=65,color:i=$,className:p,...l}){const c=H(a),t=Math.round(c),u=g-c/100*g,[P,x]=E.useState(g);E.useEffect(()=>{const V=window.setTimeout(()=>{x(u)},20);return()=>{window.clearTimeout(V)}},[u]);const C=l["aria-label"]||l["aria-labelledby"]?{}:{"aria-label":"Progresso"};return e.jsx("div",{...l,...C,className:N("govrs-loader","govrs-loader--percentage",p),role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":c,"aria-valuetext":`${t}%`,children:e.jsxs("svg",{className:"govrs-loader__progress-svg",viewBox:`0 0 ${f} ${f}`,"aria-hidden":"true",focusable:"false",children:[e.jsx("circle",{className:"govrs-loader__progress-track",cx:r,cy:r,r:y,transform:`rotate(270 ${r} ${r})`,strokeWidth:j}),e.jsx("circle",{className:"govrs-loader__progress-bar",cx:r,cy:r,r:y,transform:`rotate(270 ${r} ${r})`,strokeWidth:j,stroke:i,strokeDasharray:g,strokeDashoffset:P}),e.jsx("circle",{className:"govrs-loader__progress-center",cx:r,cy:r,r:B}),e.jsxs("text",{className:"govrs-loader__percentage-text",x:r,y:r,fill:i,children:[t,"%"]})]})})}function o({variant:a="default",label:i,labelPosition:p,value:l,color:c,...t}){return a==="percentage"?e.jsx(Q,{...t,value:l,color:c}):e.jsx(W,{...t,label:i,labelPosition:p})}o.__docgenInfo={description:"",methods:[],displayName:"Loader",props:{variant:{required:!1,tsType:{name:"union",raw:"'default' | 'percentage'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'percentage'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},label:{required:!1,tsType:{name:"ReactNode"},description:""},labelPosition:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom' | 'left' | 'right'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:""},value:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},color:{required:!1,tsType:{name:"string"},description:""}}};const K=["default","percentage"],m={blue:"#2563EB",orange:"#EA580C",magenta:"#C026D3"},Z=[{title:"Quando usar",text:"Use default para espera indeterminada e percentage quando a interface realmente conhece o progresso atual da operação."},{title:"Melhor exploração",text:"Use o story 'Interativo' para alternar variant, label, labelPosition, value e color. O story 'Combinados' resume os cenários mais comuns em uma leitura rápida."},{title:"Comportamento",text:"A variante default expõe role status com anúncio polido. A variante percentage usa role progressbar e limita value ao intervalo entre 0 e 100."}],J=`
        <Loader label="Carregando" labelPosition="top" />
        <Loader label="Carregando" labelPosition="bottom" />
        <Loader label="Carregando" labelPosition="left" />
        <Loader label="Carregando" labelPosition="right" />`,X=`<Loader variant="percentage" value={25} color="#2563EB" />
<Loader variant="percentage" value={65} color="#EA580C" />
<Loader variant="percentage" value={100} color="#C026D3" />`,Y=`<Loader label="Carregando..." />
<Loader label="Buscando dados" labelPosition="right" />
<Loader variant="percentage" value={65} color="#EA580C" />
<Loader variant="percentage" value={100} color="#C026D3" />`,ce={title:"Feedback/Loader",component:o,parameters:{layout:"padded",controls:{expanded:!0,sort:"requiredFirst"}}};function s({children:a}){return e.jsx("div",{style:{display:"grid",placeItems:"center",minHeight:120},children:a})}function ee(){return e.jsxs("div",{style:d.previewGrid,children:[e.jsx(n,{label:"Topo",children:e.jsx(s,{children:e.jsx(o,{label:"Carregando",labelPosition:"top"})})}),e.jsx(n,{label:"Base",children:e.jsx(s,{children:e.jsx(o,{label:"Carregando",labelPosition:"bottom"})})}),e.jsx(n,{label:"Esquerda",children:e.jsx(s,{children:e.jsx(o,{label:"Carregando",labelPosition:"left"})})}),e.jsx(n,{label:"Direita",children:e.jsx(s,{children:e.jsx(o,{label:"Carregando",labelPosition:"right"})})})]})}function ae(){return e.jsxs("div",{style:d.previewGrid,children:[e.jsx(n,{label:"25%",children:e.jsx(s,{children:e.jsx(o,{variant:"percentage",value:25,color:m.blue})})}),e.jsx(n,{label:"65%",children:e.jsx(s,{children:e.jsx(o,{variant:"percentage",value:65,color:m.orange})})}),e.jsx(n,{label:"100%",children:e.jsx(s,{children:e.jsx(o,{variant:"percentage",value:100,color:m.magenta})})})]})}function oe(){return e.jsxs("div",{style:d.cardGrid,children:[e.jsx(n,{label:"Espera indeterminada",children:e.jsx(s,{children:e.jsx(o,{label:"Carregando..."})})}),e.jsx(n,{label:"Acompanhando tarefa",children:e.jsx(s,{children:e.jsx(o,{label:"Buscando dados",labelPosition:"right"})})}),e.jsx(n,{label:"Progresso em andamento",children:e.jsx(s,{children:e.jsx(o,{variant:"percentage",value:65,color:m.orange})})}),e.jsx(n,{label:"Concluido",children:e.jsx(s,{children:e.jsx(o,{variant:"percentage",value:100,color:m.magenta})})})]})}function re(a){return e.jsx("div",{style:{...d.previewStage,padding:16,justifyItems:"center"},children:e.jsx(o,{...a})})}const v={name:"Documentação",parameters:{controls:{disable:!0}},render:()=>e.jsxs(k,{children:[e.jsx(G,{eyebrow:"Documentação guiada",title:e.jsx("h3",{style:d.heroTitle,children:"Loader"}),description:e.jsxs(e.Fragment,{children:["O componente ",e.jsx("code",{children:"Loader"})," comunica espera e progresso sem depender de integração com produto específico. A variante ",e.jsx("code",{children:"default"})," cobre carregamentos indeterminados e a variante ",e.jsx("code",{children:"percentage"})," mostra progresso já conhecido."]}),variantTags:K,stats:Z}),e.jsxs(S,{title:"Variante default",description:"Use a versão com spinner quando a interface ainda não conhece o percentual da operação. label é opcional e labelPosition ajuda a encaixar o texto no contexto sem criar estruturas extras ao redor do componente.",children:[e.jsxs("ul",{style:d.list,children:[e.jsxs("li",{children:[e.jsx("code",{children:"label"})," adiciona contexto textual ao estado de carregamento."]}),e.jsxs("li",{children:[e.jsx("code",{children:"labelPosition"})," aceita top, bottom, left e right."]}),e.jsxs("li",{children:["Sem rótulo visível, o componente continua anunciando ",e.jsx("code",{children:"Carregando"})," para tecnologias assistivas."]})]}),e.jsx(L,{title:"Posições de rótulo",description:"Panorama rápido das quatro posições suportadas para o texto auxiliar da variante default.",code:J,notes:["Prefira top ou bottom quando o loader estiver sozinho em uma área dedicada.","Left e right costumam funcionar melhor quando o feedback divide linha com outros elementos."],children:e.jsx(ee,{})})]}),e.jsxs(S,{title:"Variante percentage",description:"Use a versão circular com número central apenas quando o percentual for real e atualizado pela aplicação. O valor é limitado automaticamente ao intervalo entre 0 e 100 para evitar estados inválidos no progresso.",children:[e.jsxs("ul",{style:d.list,children:[e.jsxs("li",{children:[e.jsx("code",{children:"value"})," aceita número ou string numérica e é normalizado para o intervalo de 0 a 100."]}),e.jsxs("li",{children:[e.jsx("code",{children:"color"})," permite customizar a cor do anel e do texto central."]}),e.jsxs("li",{children:["A variante usa ",e.jsx("code",{children:'role="progressbar"'})," com ",e.jsx("code",{children:"aria-valuenow"}),", ",e.jsx("code",{children:"aria-valuemin"})," e ",e.jsx("code",{children:"aria-valuemax"}),"."]})]}),e.jsx(L,{title:"Escala de progresso",description:"Exemplos rápidos para comparar leitura do número central, preenchimento do anel e uso de cor customizada.",code:X,notes:["Os exemplos abaixo usam cores propositalmente bem diferentes para evidenciar a possibilidade de customização.","Para progresso desconhecido, volte para a variante default em vez de inventar percentuais artificiais."],children:e.jsx(ae,{})})]}),e.jsx(S,{title:"Limites e decisões de uso",description:"Loader deve comunicar espera, não substituir mensagens de resultado. Quando a tarefa falhar, concluir ou exigir ação da pessoa usuária, o feedback precisa migrar para outro componente mais explícito.",children:e.jsxs("ul",{style:d.list,children:[e.jsx("li",{children:"A variante default é indeterminada por definição: não combine com texto prometendo percentual exato."}),e.jsx("li",{children:"A variante percentage é melhor para uploads, sincronizações e etapas de processamento monitoradas pela aplicação."}),e.jsx("li",{children:"O componente não inclui ações, cancelamento ou mensagem de erro. Esses comportamentos devem vir do contexto ao redor."})]})})]})},b={name:"Interativo",args:{variant:"default",label:"Carregando...",labelPosition:"bottom",value:65,color:"#1A7235"},argTypes:{modoContraste:{control:"boolean",description:"Visualiza o componente no modo de alto contraste.",table:{category:"Acessibilidade"}},variant:{control:{type:"radio"},options:["default","percentage"],description:"Escolhe entre o spinner indeterminado e o anel com progresso explícito.",table:{category:"Variação"}},label:{control:"text",description:"Texto opcional usado apenas na variante default.",table:{category:"Conteúdo"}},labelPosition:{control:{type:"select"},options:["top","bottom","left","right"],description:"Posição do rótulo na variante default.",table:{category:"Conteúdo"}},value:{control:{type:"range",min:0,max:100,step:1},description:"Percentual usado na variante percentage.",table:{category:"Progressão"}},color:{control:"text",description:"Cor customizada do anel e do texto central na variante percentage.",table:{category:"Progressão"}}},render:a=>e.jsx(re,{...a})},h={name:"Combinados",parameters:{controls:{disable:!0}},render:()=>e.jsx(L,{title:"Inventário rápido",description:"Leitura compacta dos cenários mais recorrentes para validar se a escolha entre spinner e progresso explícito continua coerente com o contexto.",code:Y,children:e.jsx(oe,{})})};var w,D,R;v.parameters={...v.parameters,docs:{...(w=v.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Documentação',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <DocsStoryLayout>
      <DocsHero eyebrow="Documentação guiada" title={<h3 style={storyDocsStyles.heroTitle}>Loader</h3>} description={<>
            O componente <code>Loader</code> comunica espera e progresso sem depender
            de integração com produto específico. A variante <code>default</code> cobre 
            carregamentos indeterminados e a variante <code>percentage</code> mostra progresso já conhecido.
          </>} variantTags={docsVariantTags} stats={docsHeroStats} />

      <SectionCard title="Variante default" description="Use a versão com spinner quando a interface ainda não conhece o percentual da operação. label é opcional e labelPosition ajuda a encaixar o texto no contexto sem criar estruturas extras ao redor do componente.">
        <ul style={storyDocsStyles.list}>
          <li><code>label</code> adiciona contexto textual ao estado de carregamento.</li>
          <li><code>labelPosition</code> aceita top, bottom, left e right.</li>
          <li>Sem rótulo visível, o componente continua anunciando <code>Carregando</code> para tecnologias assistivas.</li>
        </ul>

        <SandboxExample title="Posições de rótulo" description="Panorama rápido das quatro posições suportadas para o texto auxiliar da variante default." code={defaultExampleCode} notes={['Prefira top ou bottom quando o loader estiver sozinho em uma área dedicada.', 'Left e right costumam funcionar melhor quando o feedback divide linha com outros elementos.']}>
          <LoaderDefaultPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="Variante percentage" description="Use a versão circular com número central apenas quando o percentual for real e atualizado pela aplicação. O valor é limitado automaticamente ao intervalo entre 0 e 100 para evitar estados inválidos no progresso.">
        <ul style={storyDocsStyles.list}>
          <li><code>value</code> aceita número ou string numérica e é normalizado para o intervalo de 0 a 100.</li>
          <li><code>color</code> permite customizar a cor do anel e do texto central.</li>
          <li>A variante usa <code>role=&quot;progressbar&quot;</code> com <code>aria-valuenow</code>, <code>aria-valuemin</code> e <code>aria-valuemax</code>.</li>
        </ul>

        <SandboxExample title="Escala de progresso" description="Exemplos rápidos para comparar leitura do número central, preenchimento do anel e uso de cor customizada." code={percentageExampleCode} notes={['Os exemplos abaixo usam cores propositalmente bem diferentes para evidenciar a possibilidade de customização.', 'Para progresso desconhecido, volte para a variante default em vez de inventar percentuais artificiais.']}>
          <LoaderPercentagePreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="Limites e decisões de uso" description="Loader deve comunicar espera, não substituir mensagens de resultado. Quando a tarefa falhar, concluir ou exigir ação da pessoa usuária, o feedback precisa migrar para outro componente mais explícito.">
        <ul style={storyDocsStyles.list}>
          <li>A variante default é indeterminada por definição: não combine com texto prometendo percentual exato.</li>
          <li>A variante percentage é melhor para uploads, sincronizações e etapas de processamento monitoradas pela aplicação.</li>
          <li>O componente não inclui ações, cancelamento ou mensagem de erro. Esses comportamentos devem vir do contexto ao redor.</li>
        </ul>
      </SectionCard>
    </DocsStoryLayout>
}`,...(R=(D=v.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var A,I,O;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Interativo',
  args: {
    variant: 'default',
    label: 'Carregando...',
    labelPosition: 'bottom',
    value: 65,
    color: '#1A7235'
  },
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
      options: ['default', 'percentage'],
      description: 'Escolhe entre o spinner indeterminado e o anel com progresso explícito.',
      table: {
        category: 'Variação'
      }
    },
    label: {
      control: 'text',
      description: 'Texto opcional usado apenas na variante default.',
      table: {
        category: 'Conteúdo'
      }
    },
    labelPosition: {
      control: {
        type: 'select'
      },
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Posição do rótulo na variante default.',
      table: {
        category: 'Conteúdo'
      }
    },
    value: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1
      },
      description: 'Percentual usado na variante percentage.',
      table: {
        category: 'Progressão'
      }
    },
    color: {
      control: 'text',
      description: 'Cor customizada do anel e do texto central na variante percentage.',
      table: {
        category: 'Progressão'
      }
    }
  },
  render: args => <LoaderInteractivePreview {...args} />
}`,...(O=(I=b.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var T,z,q;h.parameters={...h.parameters,docs:{...(T=h.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Combinados',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <SandboxExample title="Inventário rápido" description="Leitura compacta dos cenários mais recorrentes para validar se a escolha entre spinner e progresso explícito continua coerente com o contexto." code={combinedExampleCode}>
      <LoaderCombinedPreview />
    </SandboxExample>
}`,...(q=(z=h.parameters)==null?void 0:z.docs)==null?void 0:q.source}}};const de=["LoaderDocumentacao","LoaderInterativo","LoaderCombinados"];export{h as LoaderCombinados,v as LoaderDocumentacao,b as LoaderInterativo,de as __namedExportsOrder,ce as default};
