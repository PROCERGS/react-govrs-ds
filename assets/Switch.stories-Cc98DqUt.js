import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as l}from"./index-DyTKwKRb.js";import{D as I,S as O,s as r,a as s,b as c,c as p}from"./storyDocs-CoQtGjOG.js";import{B as z}from"./Button-DnfRrOli.js";/* empty css              */import"./_commonjsHelpers-Cpj98o6Y.js";function a({id:o,label:n,description:i,className:d,disabled:t=!1,...D}){const A=l.useId().replace(/:/g,""),x=o??`govrs-switch-${A}`,b=i?`${x}-description`:void 0,P=["govrs-switch",d].filter(Boolean).join(" ");return e.jsxs("label",{className:`govrs-switch-field ${t?"govrs-switch-field--disabled":""}`,children:[e.jsx("input",{...D,id:x,type:"checkbox",role:"switch",className:P,disabled:t,"aria-describedby":b}),n||i?e.jsxs("span",{className:"govrs-switch-field__content",children:[n?e.jsx("span",{className:"govrs-switch-field__label",children:n}):null,i?e.jsx("span",{id:b,className:"govrs-switch-field__description",children:i}):null]}):null]})}a.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{label:{required:!1,tsType:{name:"ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactNode"},description:""},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};const F=[{title:"Quando usar",text:"Quando a interface precisa ligar ou desligar uma configuração imediatamente, como preferencias de interface, permissões simples ou recursos ativáveis no próprio contexto."},{title:"Melhor exploração",text:"Use o story 'Interativo' para testar label, description, disabled e o estado controlado. O story 'Em Formulário' mostra a participação do switch no submit tradicional."},{title:"Comportamento",text:"O componente usa checkbox nativo com role switch, mantém foco por teclado e acionamento por espaço, e checked depende de onChange quando o uso for controlado."}],N=`// Não controlado
<Switch label="Receber notificações" defaultChecked />

// Controlado
<Switch
  label="Ativar modo escuro"
  checked={enabled}
  onChange={(event) => setEnabled(event.target.checked)}
/>`,T=`<Switch
  name="darkMode"
  value="enabled"
  label="Ativar modo escuro"
  description="Aplica a interface escura em toda a aplicação."
/>`,L=`<Switch label="Desligado" />
<Switch label="Ligado" defaultChecked />
<Switch label="Desabilitado" disabled />
<Switch label="Ligado e desabilitado" defaultChecked disabled />`,R=`<Switch
  label="Receber novidades"
  description="Ative para permitir o envio de novidades por e-mail."
/>`,_=`const [enabled, setEnabled] = useState(false)

<Switch
  name="darkMode"
  label="Ativar modo escuro"
  checked={enabled}
  onChange={(event) => setEnabled(event.target.checked)}
/>`,Q={title:"Formulários/Switch",component:a,parameters:{layout:"padded",controls:{expanded:!0,sort:"requiredFirst"}}};function E(o){const[n,i]=l.useState(!!o.checked);return l.useEffect(()=>{i(!!o.checked)},[o.checked]),e.jsxs(e.Fragment,{children:[e.jsx(a,{...o,checked:n,onChange:d=>{var t;i(d.target.checked),(t=o.onChange)==null||t.call(o,d)}}),e.jsxs("p",{style:{...r.statText,color:"inherit"},children:[e.jsx("strong",{children:"Estado atual:"})," ",n?"Ativado":"Desativado"]})]})}function B(){return e.jsxs("div",{style:r.previewGrid,children:[e.jsx(p,{label:"Desligado",children:e.jsx(a,{label:"Desligado"})}),e.jsx(p,{label:"Ligado",children:e.jsx(a,{label:"Ligado",defaultChecked:!0})}),e.jsx(p,{label:"Desabilitado",children:e.jsx(a,{label:"Desabilitado",disabled:!0})}),e.jsx(p,{label:"Ligado e desabilitado",children:e.jsx(a,{label:"Ligado e desabilitado",defaultChecked:!0,disabled:!0})})]})}function M(){return e.jsxs("div",{style:{display:"grid",gap:12,maxWidth:420},children:[e.jsx(a,{label:"Receber novidades",description:"Ative para permitir o envio de novidades por e-mail."}),e.jsx(a,{label:"Compartilhar localização",description:"Usa sua localização apenas para sugerir conteúdo da sua região.",defaultChecked:!0})]})}function q(){const[o,n]=l.useState(!1),[i,d]=l.useState(null);return e.jsxs("div",{style:{display:"grid",gap:12,maxWidth:720},children:[e.jsx("form",{onSubmit:t=>{t.preventDefault(),d(o)},children:e.jsxs("div",{style:{...r.previewStage,padding:16},children:[e.jsx(a,{name:"darkMode",value:"enabled",label:"Ativar modo escuro",description:"Altere este controle para escurecer a interface.",checked:o,onChange:t=>n(t.target.checked)}),e.jsx("div",{children:e.jsx(z,{type:"submit",variant:"primary",children:"Enviar"})})]})}),e.jsxs("p",{style:r.statText,children:[e.jsx("strong",{children:"Valor submetido:"})," ",i==null?"Nenhum envio ainda":i?"Ativado":"Desativado"]})]})}const m={name:"Documentação",parameters:{controls:{disable:!0}},render:()=>e.jsxs(I,{children:[e.jsx(O,{eyebrow:"Documentação guiada",title:e.jsx("h3",{style:r.heroTitle,children:"Switch"}),description:e.jsxs(e.Fragment,{children:["O componente ",e.jsx("code",{children:"Switch"})," representa uma alternância binária entre ligado e desligado. Ele usa ",e.jsx("code",{children:"checkbox"})," com ",e.jsx("code",{children:'role="switch"'}),"para manter a semântica acessível e pode receber rótulo e descrição opcionais."]}),stats:F}),e.jsxs(s,{title:"Como usar",description:"Use o switch quando a ação representar ligar ou desligar uma configuração imediatamente, como preferências de interface, permissões simples ou recursos que podem ser ativados no próprio contexto. Para um valor inicial, defaultChecked é suficiente; quando o valor depende do estado da aplicação, prefira checked e onChange.",children:[e.jsxs("ul",{style:r.list,children:[e.jsxs("li",{children:[e.jsx("code",{children:"checked"})," e ",e.jsx("code",{children:"onChange"})," controlam explicitamente o estado ligado ou desligado."]}),e.jsxs("li",{children:[e.jsx("code",{children:"defaultChecked"})," define apenas o estado inicial no modo não controlado."]}),e.jsx("li",{children:"O componente participa normalmente de formulários por ser baseado em input nativo."})]}),e.jsx(c,{title:"Controlado e não controlado",description:"Comparativo mínimo entre o uso com estado inicial local do navegador e o uso controlado por estado React.",code:N,notes:["No modo controlado, o valor visual depende da atualização feita por quem consome o componente.","No modo não controlado, defaultChecked só define o ponto de partida do estado."],children:e.jsx(E,{label:"Ativar modo escuro",description:"Exemplo controlado no Storybook.",checked:!1,disabled:!1})})]}),e.jsxs(s,{title:"Props principais",description:"A API permanece pequena e previsível. O foco é deixar claro o que altera comportamento, o que adiciona contexto e o que continua vindo do input checkbox nativo.",children:[e.jsxs("ul",{style:r.list,children:[e.jsxs("li",{children:[e.jsx("code",{children:"label"})," define o texto principal associado ao controle."]}),e.jsxs("li",{children:[e.jsx("code",{children:"description"})," complementa o contexto e é ligada ao campo por ",e.jsx("code",{children:"aria-describedby"}),"."]}),e.jsxs("li",{children:["Props nativas como ",e.jsx("code",{children:"name"}),", ",e.jsx("code",{children:"value"}),", ",e.jsx("code",{children:"disabled"})," e ",e.jsx("code",{children:"required"})," continuam disponíveis."]})]}),e.jsx(c,{title:"Assinatura comum",description:"Exemplo de uma configuração típica de switch em preferência de interface ou recurso ativável.",code:T,children:e.jsx("div",{style:{maxWidth:420},children:e.jsx(a,{name:"darkMode",value:"enabled",label:"Ativar modo escuro",description:"Aplica a interface escura em toda a aplicação."})})})]}),e.jsx(s,{title:"Estados básicos",description:"O switch mantém foco por teclado, navegação por tab e acionamento por espaço como qualquer checkbox nativo. O estado desabilitado reduz contraste visual e impede interação.",children:e.jsx(c,{title:"Galeria de estados",description:"Snapshot visual rápido dos estados mais recorrentes para comparação lado a lado.",code:L,children:e.jsx(B,{})})}),e.jsx(s,{title:"Com descrição",description:"A descrição ajuda a deixar claro o efeito da alternância sem sobrecarregar o texto principal. Ela é útil quando o rótulo sozinho não explica o impacto de ligar ou desligar a opção.",children:e.jsx(c,{title:"Contexto adicional",description:"Dois exemplos com descrição para demonstrar como o componente pode explicar melhor o efeito da alternância.",code:R,children:e.jsx(M,{})})}),e.jsx(s,{title:"Integração com formulário",description:"Por ser baseado em um input nativo, o switch participa normalmente de formulários, inclusive com name, value e submissão tradicional. O exemplo abaixo demonstra o uso controlado com envio do estado atual.",children:e.jsx(c,{title:"Submit tradicional",description:"Formulário demonstrando o uso controlado do switch e a leitura do estado submetido.",code:_,children:e.jsx(q,{})})}),e.jsx(s,{title:"Limitações e dependências",description:"O componente cobre bem a alternância binária imediata, mas continua dependendo do consumidor para sincronizar estado controlado e definir quando a ação realmente deve ser persistida ou refletida no restante da interface.",children:e.jsxs("ul",{style:r.list,children:[e.jsxs("li",{children:[e.jsx("code",{children:"checked"})," no modo controlado depende de ",e.jsx("code",{children:"onChange"}),"; sem isso, o switch fica visualmente travado."]}),e.jsxs("li",{children:[e.jsx("code",{children:"defaultChecked"})," define apenas o estado inicial e não sincroniza com estado externo depois do primeiro render."]}),e.jsxs("li",{children:[e.jsx("code",{children:"description"})," complementa o contexto, mas não substitui o nome acessível do controle."]}),e.jsx("li",{children:"Como o componente representa uma alternância binária imediata, ele não substitui grupos de opções mutuamente exclusivas."})]})})]})},u={name:"Interativo",argTypes:{modoContraste:{control:"boolean",description:"Visualiza o componente no modo de alto contraste.",table:{category:"Acessibilidade"}},label:{control:"text",description:"Texto principal associado ao controle.",table:{category:"Conteúdo"}},description:{control:"text",description:"Texto complementar anunciado junto ao switch por aria-describedby.",table:{category:"Conteúdo"}},checked:{control:"boolean",description:"Estado atual do switch quando o componente é controlado.",table:{category:"Estado visual"}},disabled:{control:"boolean",description:"Bloqueia a interação e aplica o estado visual desabilitado.",table:{category:"Estado visual"}},onChange:{action:"changed",description:"Recebe o evento nativo quando o valor do switch muda.",table:{category:"Eventos"}}},args:{label:"Ativar recurso",description:"Exemplo de switch controlado no Storybook.",checked:!1,disabled:!1},render:o=>e.jsx(E,{...o})},h={name:"Em Formulário",parameters:{controls:{disable:!0}},render:()=>e.jsx(q,{})};var v,f,g;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Documentação',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <DocsStoryLayout>
      <DocsHero eyebrow="Documentação guiada" title={<h3 style={storyDocsStyles.heroTitle}>Switch</h3>} description={<>
            O componente <code>Switch</code> representa uma alternância binária entre
            ligado e desligado. Ele usa <code>checkbox</code> com <code>role="switch"</code>
            para manter a semântica acessível e pode receber rótulo e descrição opcionais.
          </>} stats={docsHeroStats} />

      <SectionCard title="Como usar" description="Use o switch quando a ação representar ligar ou desligar uma configuração imediatamente, como preferências de interface, permissões simples ou recursos que podem ser ativados no próprio contexto. Para um valor inicial, defaultChecked é suficiente; quando o valor depende do estado da aplicação, prefira checked e onChange.">
        <ul style={storyDocsStyles.list}>
          <li><code>checked</code> e <code>onChange</code> controlam explicitamente o estado ligado ou desligado.</li>
          <li><code>defaultChecked</code> define apenas o estado inicial no modo não controlado.</li>
          <li>O componente participa normalmente de formulários por ser baseado em input nativo.</li>
        </ul>

        <SandboxExample title="Controlado e não controlado" description="Comparativo mínimo entre o uso com estado inicial local do navegador e o uso controlado por estado React." code={usageExampleCode} notes={['No modo controlado, o valor visual depende da atualização feita por quem consome o componente.', 'No modo não controlado, defaultChecked só define o ponto de partida do estado.']}>
          <SwitchInteractivePreview label="Ativar modo escuro" description="Exemplo controlado no Storybook." checked={false} disabled={false} />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="Props principais" description="A API permanece pequena e previsível. O foco é deixar claro o que altera comportamento, o que adiciona contexto e o que continua vindo do input checkbox nativo.">
        <ul style={storyDocsStyles.list}>
          <li><code>label</code> define o texto principal associado ao controle.</li>
          <li><code>description</code> complementa o contexto e é ligada ao campo por <code>aria-describedby</code>.</li>
          <li>Props nativas como <code>name</code>, <code>value</code>, <code>disabled</code> e <code>required</code> continuam disponíveis.</li>
        </ul>

        <SandboxExample title="Assinatura comum" description="Exemplo de uma configuração típica de switch em preferência de interface ou recurso ativável." code={propsExampleCode}>
          <div style={{
          maxWidth: 420
        }}>
            <Switch name="darkMode" value="enabled" label="Ativar modo escuro" description="Aplica a interface escura em toda a aplicação." />
          </div>
        </SandboxExample>
      </SectionCard>

      <SectionCard title="Estados básicos" description="O switch mantém foco por teclado, navegação por tab e acionamento por espaço como qualquer checkbox nativo. O estado desabilitado reduz contraste visual e impede interação.">
        <SandboxExample title="Galeria de estados" description="Snapshot visual rápido dos estados mais recorrentes para comparação lado a lado." code={statesExampleCode}>
          <SwitchStatesPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="Com descrição" description="A descrição ajuda a deixar claro o efeito da alternância sem sobrecarregar o texto principal. Ela é útil quando o rótulo sozinho não explica o impacto de ligar ou desligar a opção.">
        <SandboxExample title="Contexto adicional" description="Dois exemplos com descrição para demonstrar como o componente pode explicar melhor o efeito da alternância." code={descriptionExampleCode}>
          <SwitchDescriptionPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="Integração com formulário" description="Por ser baseado em um input nativo, o switch participa normalmente de formulários, inclusive com name, value e submissão tradicional. O exemplo abaixo demonstra o uso controlado com envio do estado atual.">
        <SandboxExample title="Submit tradicional" description="Formulário demonstrando o uso controlado do switch e a leitura do estado submetido." code={formExampleCode}>
          <SwitchFormPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="Limitações e dependências" description="O componente cobre bem a alternância binária imediata, mas continua dependendo do consumidor para sincronizar estado controlado e definir quando a ação realmente deve ser persistida ou refletida no restante da interface.">
        <ul style={storyDocsStyles.list}>
          <li><code>checked</code> no modo controlado depende de <code>onChange</code>; sem isso, o switch fica visualmente travado.</li>
          <li><code>defaultChecked</code> define apenas o estado inicial e não sincroniza com estado externo depois do primeiro render.</li>
          <li><code>description</code> complementa o contexto, mas não substitui o nome acessível do controle.</li>
          <li>Como o componente representa uma alternância binária imediata, ele não substitui grupos de opções mutuamente exclusivas.</li>
        </ul>
      </SectionCard>
    </DocsStoryLayout>
}`,...(g=(f=m.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var S,j,w;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Interativo',
  argTypes: {
    modoContraste: {
      control: 'boolean',
      description: 'Visualiza o componente no modo de alto contraste.',
      table: {
        category: 'Acessibilidade'
      }
    },
    label: {
      control: 'text',
      description: 'Texto principal associado ao controle.',
      table: {
        category: 'Conteúdo'
      }
    },
    description: {
      control: 'text',
      description: 'Texto complementar anunciado junto ao switch por aria-describedby.',
      table: {
        category: 'Conteúdo'
      }
    },
    checked: {
      control: 'boolean',
      description: 'Estado atual do switch quando o componente é controlado.',
      table: {
        category: 'Estado visual'
      }
    },
    disabled: {
      control: 'boolean',
      description: 'Bloqueia a interação e aplica o estado visual desabilitado.',
      table: {
        category: 'Estado visual'
      }
    },
    onChange: {
      action: 'changed',
      description: 'Recebe o evento nativo quando o valor do switch muda.',
      table: {
        category: 'Eventos'
      }
    }
  },
  args: {
    label: 'Ativar recurso',
    description: 'Exemplo de switch controlado no Storybook.',
    checked: false,
    disabled: false
  },
  render: args => <SwitchInteractivePreview {...args} />
}`,...(w=(j=u.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var C,y,k;h.parameters={...h.parameters,docs:{...(C=h.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Em Formulário',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <SwitchFormPreview />
}`,...(k=(y=h.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};const J=["SwitchDocumentacao","SwitchInterativo","SwitchEmFormulario"];export{m as SwitchDocumentacao,h as SwitchEmFormulario,u as SwitchInterativo,J as __namedExportsOrder,Q as default};
