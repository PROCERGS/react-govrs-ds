import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as a}from"./index-DyTKwKRb.js";import{b as u,D as P,S as w,s as t,a as p,c as x}from"./storyDocs-CoQtGjOG.js";import{S as n}from"./Search-CTbXdl1P.js";/* empty css              */import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-A9ZUQmzb.js";const V=[{title:"Quando usar",text:"Quando a interface precisa coletar um termo de busca e delegar ao consumidor o que fazer com esse valor, sem embutir rota, querystring ou integração de produto."},{title:"Melhor exploração",text:"Use o story 'Interativo' para testar placeholder, disabled, fullWidth, collapsible e comando por voz. O story 'Controlado' mostra a integração recomendada com callback de busca."},{title:"Comportamento",text:"O componente renderiza um form com input search, dispara onSearch apenas quando há texto, pode abrir e fechar quando collapsible estiver ativo e pode exibir uma ação adicional de voz ao lado do botão de busca."}],D=`const [query, setQuery] = useState('')

<Search
  value={query}
  onChange={(event) => setQuery(event.target.value)}
  onSearch={(term) => console.log(term)}
  inputAriaLabel="Campo de busca"
  placeholder="O que você procura?"
/>`,O=`<Search placeholder="Pesquisar publicações" />
<Search placeholder="Pesquisar em toda a página" fullWidth />
<Search placeholder="Campo indisponível" disabled />`,I=`const [isOpen, setIsOpen] = useState(false)

<Search
  collapsible
  active={isOpen}
  onActiveChange={setIsOpen}
  placeholder="Pesquisar..."
/>`,Q=`<Search
  voiceCommand
  onVoice={() => console.log('abrir captura de audio')}
  placeholder="Pesquisar com apoio de voz"
/>`,T=`const [query, setQuery] = useState('')
const [lastSearch, setLastSearch] = useState<string | null>(null)

<Search
  value={query}
  onChange={(event) => setQuery(event.target.value)}
  onSearch={(term) => setLastSearch(term)}
  placeholder="Pesquisar publicações"
/>`,X={title:"Busca/Search",component:n,args:{placeholder:"O que você procura?",collapsible:!1,active:!0,voiceCommand:!1,fullWidth:!1,disabled:!1,inputAriaLabel:"Campo de busca",closeButtonLabel:"Fechar busca",voiceButtonLabel:"Comando por voz",value:""},parameters:{layout:"padded",controls:{expanded:!0,sort:"requiredFirst"}}};function k(){const[o,s]=a.useState(""),[c,i]=a.useState(null);return e.jsxs("div",{style:{display:"grid",gap:12,maxWidth:480},children:[e.jsx(n,{value:o,onChange:r=>s(r.target.value),onSearch:r=>i(r),placeholder:"O que você procura?"}),e.jsxs("p",{style:t.statText,children:[e.jsx("strong",{children:"Última busca:"})," ",c??"Nenhum envio ainda"]})]})}function W(){return e.jsxs("div",{style:{display:"grid",gap:16},children:[e.jsx(x,{label:"Base",children:e.jsx(n,{placeholder:"Pesquisar publicações"})}),e.jsx(x,{label:"Largura total",children:e.jsx("div",{style:{width:"100%",maxWidth:720},children:e.jsx(n,{placeholder:"Pesquisar em toda a página",fullWidth:!0})})}),e.jsx(x,{label:"Disabled",children:e.jsx(n,{placeholder:"Campo indisponível",disabled:!0})})]})}function B(){const[o,s]=a.useState(0);return e.jsxs("div",{style:{display:"grid",gap:12,maxWidth:480},children:[e.jsx(n,{voiceCommand:!0,onVoice:()=>s(c=>c+1),placeholder:"Pesquisar com apoio de voz"}),e.jsxs("p",{style:t.statText,children:[e.jsx("strong",{children:"Acionamentos de voz:"})," ",o]})]})}function F(){const[o,s]=a.useState(""),[c,i]=a.useState(!1),[r,v]=a.useState(null);return e.jsxs("div",{style:{display:"grid",gap:12,maxWidth:360},children:[e.jsx(n,{collapsible:!0,active:c,onActiveChange:i,value:o,onChange:l=>s(l.target.value),onSearch:l=>v(l),placeholder:"Pesquisar..."}),e.jsxs("p",{style:t.statText,children:[e.jsx("strong",{children:"Estado aberto:"})," ",c?"Sim":"Não"]}),e.jsxs("p",{style:t.statText,children:[e.jsx("strong",{children:"Última busca:"})," ",r??"Nenhum envio ainda"]})]})}function N(o){const[s,c]=a.useState(o.value??""),[i,r]=a.useState(o.active??!0),[v,l]=a.useState(null),[z,L]=a.useState(0);return a.useEffect(()=>{c(o.value??"")},[o.value]),a.useEffect(()=>{r(o.active??!0)},[o.active]),e.jsxs("div",{style:{...t.previewStage,gap:12,padding:16},children:[e.jsx("div",{style:{width:"100%",maxWidth:o.fullWidth?720:360},children:e.jsx(n,{...o,value:s,active:i,onChange:d=>{c(d.target.value)},onActiveChange:d=>{r(d)},onVoice:()=>{L(d=>d+1)},onSearch:d=>{l(d)}})}),e.jsxs("p",{style:t.statText,children:[e.jsx("strong",{children:"Valor atual:"})," ",s||"Vazio"]}),e.jsxs("p",{style:t.statText,children:[e.jsx("strong",{children:"Última busca:"})," ",v??"Nenhum envio ainda"]}),e.jsxs("p",{style:t.statText,children:[e.jsx("strong",{children:"Estado aberto:"})," ",o.collapsible?i?"Sim":"Não":"Sempre aberto"]}),e.jsxs("p",{style:t.statText,children:[e.jsx("strong",{children:"Acionamentos de voz:"})," ",z]})]})}function R(){const[o,s]=a.useState("licitacoes"),[c,i]=a.useState(null);return e.jsxs("div",{style:{display:"grid",gap:12,maxWidth:720},children:[e.jsx(n,{value:o,onChange:r=>s(r.target.value),onSearch:r=>i(r),placeholder:"Pesquisar publicações",fullWidth:!0}),e.jsxs("p",{style:t.statText,children:[e.jsx("strong",{children:"Valor controlado:"})," ",o]}),e.jsxs("p",{style:t.statText,children:[e.jsx("strong",{children:"Última busca enviada:"})," ",c??"Nenhum envio ainda"]})]})}const m={name:"Documentação",parameters:{controls:{disable:!0}},render:()=>e.jsxs(P,{children:[e.jsx(w,{eyebrow:"Documentação guiada",title:e.jsx("h3",{style:t.heroTitle,children:"Search"}),description:e.jsx(e.Fragment,{children:"O design system entrega o campo, os botões e o callback; a navegação e a execução da busca continuam responsabilidade do desenvolvedor."}),stats:V}),e.jsxs(p,{title:"Estrutura base",description:"O componente é um campo de busca reutilizável: o valor pode ser controlado ou não controlado, onSearch dispara apenas quando existe texto e o componente permanece neutro em relação ao destino dessa busca.",children:[e.jsxs("ul",{style:t.list,children:[e.jsxs("li",{children:[e.jsx("code",{children:"value"})," e ",e.jsx("code",{children:"onChange"})," permitem o uso controlado tradicional."]}),e.jsxs("li",{children:[e.jsx("code",{children:"onSearch"})," recebe o termo atual quando a submissão acontece com texto válido."]}),e.jsxs("li",{children:[e.jsx("code",{children:"inputAriaLabel"})," separa o nome acessível do campo do rótulo usado nos botões internos."]}),e.jsxs("li",{children:[e.jsx("code",{children:"collapsible"}),", ",e.jsx("code",{children:"active"})," e ",e.jsx("code",{children:"onActiveChange"})," permitem abrir e recolher a busca em áreas compactas."]}),e.jsxs("li",{children:[e.jsx("code",{children:"voiceCommand"})," e ",e.jsx("code",{children:"onVoice"})," habilitam um gatilho visual para integração de captura por voz."]}),e.jsxs("li",{children:[e.jsx("code",{children:"placeholder"}),", ",e.jsx("code",{children:"name"})," e props nativas do input seguem disponíveis."]})]}),e.jsx(u,{title:"Busca básica",description:"Exemplo mínimo do contrato recomendado, com valor controlado e callback explícito para o termo submetido.",code:D,notes:["O componente não faz navegação nem monta querystring automaticamente.","A decisão sobre debouncing, chamada de API ou redirecionamento pertence ao consumidor."],children:e.jsx(k,{})})]}),e.jsx(p,{title:"Estados visuais",description:"A migração preserva o visual compacto do campo de busca e adiciona controles esperados no design system atual, como largura total e tratamento consistente para disabled.",children:e.jsx(u,{title:"Base, full width e disabled",description:"Comparativo rápido dos estados mais úteis para validar encaixe do componente em cabeçalhos, barras e áreas de conteúdo.",code:O,children:e.jsx(W,{})})}),e.jsx(p,{title:"Fluxo collapsible",description:"Quando collapsible estiver ativo, o Search pode começar recolhido e abrir pelo botão de busca. Depois de aberto, o input recebe foco e o componente pode ser fechado por clique externo, Escape ou botão de fechar.",children:e.jsx(u,{title:"Abrir, buscar e recolher",description:"Esse é o fluxo pensado para headers, toolbars e faixas compactas em que a busca não precisa ficar sempre expandida.",code:I,notes:["Fechado, o componente mostra apenas a ação principal de busca e ocupa o espaço de um botão.","Aberto, o campo recebe foco automaticamente para acelerar a digitação.","Se voiceCommand também estiver ativo, o botão de voz aparece apenas no estado aberto para preservar o comportamento compacto."],children:e.jsx(F,{})})}),e.jsx(p,{title:"Comando por voz",description:"Quando voiceCommand estiver ativo, o Search exibe um botão adicional ao lado do botão de busca para que o produto consumidor conecte fluxos como captura, transcrição ou abertura de modal de áudio.",children:e.jsx(u,{title:"Ação auxiliar por voz",description:"O design system não implementa a recepção de áudio; ele apenas rende o ícone e expõe o callback onVoice quando voiceCommand estiver habilitado.",code:Q,notes:["Quando voiceCommand for false, o ícone não é renderizado e o callback onVoice não participa da interação.","Quando voiceCommand for usado com collapsible, o ícone de voz só aparece depois que a busca é expandida.","A captura de microfone, permissões do navegador e transcrição continuam responsabilidade do consumidor."],children:e.jsx(B,{})})}),e.jsx(p,{title:"Limites e responsabilidades",description:"A migração separa claramente o que pertence ao design system e o que pertence ao produto consumidor. Isso evita repetir o acoplamento do widget antigo com rotas e filtros de página.",children:e.jsxs("ul",{style:t.list,children:[e.jsxs("li",{children:["O componente não conhece ",e.jsx("code",{children:"pathname"}),", ",e.jsx("code",{children:"history.push"})," nem parâmetros de busca do produto."]}),e.jsxs("li",{children:["Internacionalização específica da aplicação deve ser resolvida pelo consumidor via props como ",e.jsx("code",{children:"placeholder"})," e rótulos dos botões."]}),e.jsxs("li",{children:["Se a aplicação precisar de analytics, debounce, abertura controlada, captura de áudio ou integração remota, esses fluxos devem ser adicionados ao redor de ",e.jsx("code",{children:"onSearch"}),", ",e.jsx("code",{children:"onActiveChange"})," e ",e.jsx("code",{children:"onVoice"}),"."]})]})})]})},b={name:"Interativo",argTypes:{modoContraste:{control:"boolean",description:"Visualiza o componente no modo de alto contraste.",table:{category:"Acessibilidade"}},placeholder:{control:"text",description:"Texto exibido quando o campo está vazio.",table:{category:"Conteúdo"}},disabled:{control:"boolean",description:"Desabilita input e botões internos.",table:{category:"Estado"}},fullWidth:{control:"boolean",description:"Faz o componente ocupar toda a largura disponível.",table:{category:"Layout"}},inputAriaLabel:{control:"text",description:"Nome acessível específico do campo de busca.",table:{category:"Acessibilidade"}},collapsible:{control:"boolean",description:"Ativa o fluxo aberto/fechado para uso em áreas compactas.",table:{category:"Comportamento"}},active:{control:"boolean",description:"Controla externamente o estado aberto quando collapsible estiver ativo.",table:{category:"Comportamento"}},voiceCommand:{control:"boolean",description:"Exibe o botão de comando por voz ao lado do botão de busca.",table:{category:"Comportamento"}},closeButtonLabel:{control:"text",description:"Rótulo acessível do botão de fechar no modo collapsible.",table:{category:"Conteúdo"}},voiceButtonLabel:{control:"text",description:"Rótulo acessível do botão de comando por voz.",table:{category:"Conteúdo"}},value:{control:"text",description:"Valor atual do campo no preview interativo.",table:{category:"Conteúdo"}}},render:o=>e.jsx(N,{...o})},h={name:"Controlado",parameters:{controls:{disable:!0}},render:()=>e.jsx(u,{title:"Integração controlada",description:"Exemplo direto de integração com estado React e callback de busca, sem qualquer dependência de infraestrutura externa.",code:T,children:e.jsx(R,{})})};var g,S,y;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Documentação',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <DocsStoryLayout>
      <DocsHero eyebrow="Documentação guiada" title={<h3 style={storyDocsStyles.heroTitle}>Search</h3>} description={<>
            O design system entrega o campo, os botões e o callback; a navegação e a
            execução da busca continuam responsabilidade do desenvolvedor.
          </>} stats={docsHeroStats} />

      <SectionCard title="Estrutura base" description="O componente é um campo de busca reutilizável: o valor pode ser controlado ou não controlado, onSearch dispara apenas quando existe texto e o componente permanece neutro em relação ao destino dessa busca.">
        <ul style={storyDocsStyles.list}>
          <li><code>value</code> e <code>onChange</code> permitem o uso controlado tradicional.</li>
          <li><code>onSearch</code> recebe o termo atual quando a submissão acontece com texto válido.</li>
          <li><code>inputAriaLabel</code> separa o nome acessível do campo do rótulo usado nos botões internos.</li>
          <li><code>collapsible</code>, <code>active</code> e <code>onActiveChange</code> permitem abrir e recolher a busca em áreas compactas.</li>
          <li><code>voiceCommand</code> e <code>onVoice</code> habilitam um gatilho visual para integração de captura por voz.</li>
          <li><code>placeholder</code>, <code>name</code> e props nativas do input seguem disponíveis.</li>
        </ul>

        <SandboxExample title="Busca básica" description="Exemplo mínimo do contrato recomendado, com valor controlado e callback explícito para o termo submetido." code={anatomyExampleCode} notes={['O componente não faz navegação nem monta querystring automaticamente.', 'A decisão sobre debouncing, chamada de API ou redirecionamento pertence ao consumidor.']}>
          <SearchAnatomyPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="Estados visuais" description="A migração preserva o visual compacto do campo de busca e adiciona controles esperados no design system atual, como largura total e tratamento consistente para disabled.">
        <SandboxExample title="Base, full width e disabled" description="Comparativo rápido dos estados mais úteis para validar encaixe do componente em cabeçalhos, barras e áreas de conteúdo." code={statesExampleCode}>
          <SearchStatesPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="Fluxo collapsible" description="Quando collapsible estiver ativo, o Search pode começar recolhido e abrir pelo botão de busca. Depois de aberto, o input recebe foco e o componente pode ser fechado por clique externo, Escape ou botão de fechar.">
        <SandboxExample title="Abrir, buscar e recolher" description="Esse é o fluxo pensado para headers, toolbars e faixas compactas em que a busca não precisa ficar sempre expandida." code={collapsibleExampleCode} notes={['Fechado, o componente mostra apenas a ação principal de busca e ocupa o espaço de um botão.', 'Aberto, o campo recebe foco automaticamente para acelerar a digitação.', 'Se voiceCommand também estiver ativo, o botão de voz aparece apenas no estado aberto para preservar o comportamento compacto.']}>
          <SearchCollapsiblePreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="Comando por voz" description="Quando voiceCommand estiver ativo, o Search exibe um botão adicional ao lado do botão de busca para que o produto consumidor conecte fluxos como captura, transcrição ou abertura de modal de áudio.">
        <SandboxExample title="Ação auxiliar por voz" description="O design system não implementa a recepção de áudio; ele apenas rende o ícone e expõe o callback onVoice quando voiceCommand estiver habilitado." code={voiceExampleCode} notes={['Quando voiceCommand for false, o ícone não é renderizado e o callback onVoice não participa da interação.', 'Quando voiceCommand for usado com collapsible, o ícone de voz só aparece depois que a busca é expandida.', 'A captura de microfone, permissões do navegador e transcrição continuam responsabilidade do consumidor.']}>
          <SearchVoicePreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="Limites e responsabilidades" description="A migração separa claramente o que pertence ao design system e o que pertence ao produto consumidor. Isso evita repetir o acoplamento do widget antigo com rotas e filtros de página.">
        <ul style={storyDocsStyles.list}>
          <li>O componente não conhece <code>pathname</code>, <code>history.push</code> nem parâmetros de busca do produto.</li>
          <li>Internacionalização específica da aplicação deve ser resolvida pelo consumidor via props como <code>placeholder</code> e rótulos dos botões.</li>
          <li>Se a aplicação precisar de analytics, debounce, abertura controlada, captura de áudio ou integração remota, esses fluxos devem ser adicionados ao redor de <code>onSearch</code>, <code>onActiveChange</code> e <code>onVoice</code>.</li>
        </ul>
      </SectionCard>
    </DocsStoryLayout>
}`,...(y=(S=m.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var C,j,f;b.parameters={...b.parameters,docs:{...(C=b.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Interativo',
  argTypes: {
    modoContraste: {
      control: 'boolean',
      description: 'Visualiza o componente no modo de alto contraste.',
      table: {
        category: 'Acessibilidade'
      }
    },
    placeholder: {
      control: 'text',
      description: 'Texto exibido quando o campo está vazio.',
      table: {
        category: 'Conteúdo'
      }
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita input e botões internos.',
      table: {
        category: 'Estado'
      }
    },
    fullWidth: {
      control: 'boolean',
      description: 'Faz o componente ocupar toda a largura disponível.',
      table: {
        category: 'Layout'
      }
    },
    inputAriaLabel: {
      control: 'text',
      description: 'Nome acessível específico do campo de busca.',
      table: {
        category: 'Acessibilidade'
      }
    },
    collapsible: {
      control: 'boolean',
      description: 'Ativa o fluxo aberto/fechado para uso em áreas compactas.',
      table: {
        category: 'Comportamento'
      }
    },
    active: {
      control: 'boolean',
      description: 'Controla externamente o estado aberto quando collapsible estiver ativo.',
      table: {
        category: 'Comportamento'
      }
    },
    voiceCommand: {
      control: 'boolean',
      description: 'Exibe o botão de comando por voz ao lado do botão de busca.',
      table: {
        category: 'Comportamento'
      }
    },
    closeButtonLabel: {
      control: 'text',
      description: 'Rótulo acessível do botão de fechar no modo collapsible.',
      table: {
        category: 'Conteúdo'
      }
    },
    voiceButtonLabel: {
      control: 'text',
      description: 'Rótulo acessível do botão de comando por voz.',
      table: {
        category: 'Conteúdo'
      }
    },
    value: {
      control: 'text',
      description: 'Valor atual do campo no preview interativo.',
      table: {
        category: 'Conteúdo'
      }
    }
  },
  render: args => <SearchInteractivePreview {...args} />
}`,...(f=(j=b.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var q,E,A;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Controlado',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <SandboxExample title="Integração controlada" description="Exemplo direto de integração com estado React e callback de busca, sem qualquer dependência de infraestrutura externa." code={controlledExampleCode}>
      <SearchControlledPreview />
    </SandboxExample>
}`,...(A=(E=h.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};const Y=["SearchDocumentacao","SearchInterativo","SearchControlado"];export{h as SearchControlado,m as SearchDocumentacao,b as SearchInterativo,Y as __namedExportsOrder,X as default};
