import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as m}from"./index-DyTKwKRb.js";import{D as N,S as O,s,a as t,b as c,c as l}from"./storyDocs-CoQtGjOG.js";import{B as G}from"./Button-DnfRrOli.js";/* empty css              */import"./_commonjsHelpers-Cpj98o6Y.js";function a({id:o,name:i,checked:n,defaultChecked:d,label:r,description:u,variant:h="default",className:I,disabled:b=!1,...P}){const T=m.useId().replace(/:/g,""),g=o??`govrs-radio-${T}`,f=u?`${g}-description`:void 0,j=typeof i=="string"&&i.trim().length>0?i:void 0,V=j&&n===void 0?d:void 0,w=["govrs-radio",h!=="default"?`govrs-radio--${h}`:void 0,I].filter(Boolean).join(" ");return e.jsxs("label",{className:`govrs-radio-field ${b?"govrs-radio-field--disabled":""}`,children:[e.jsx("input",{...P,id:g,name:j,type:"radio",className:w,disabled:b,checked:n,defaultChecked:V,"aria-describedby":f,"aria-invalid":h==="danger"||void 0}),r||u?e.jsxs("span",{className:"govrs-radio-field__content",children:[r?e.jsx("span",{className:"govrs-radio-field__label",children:r}):null,u?e.jsx("span",{id:f,className:"govrs-radio-field__description",children:u}):null]}):null]})}a.__docgenInfo={description:"",methods:[],displayName:"Radio",props:{label:{required:!1,tsType:{name:"ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'danger' | 'success'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'success'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};const _=["default","danger","success"],Q=[{title:"Quando usar",text:"Quando o usuário precisa escolher apenas uma opção entre alternativas mutuamente exclusivas, ou quando um único radio isolado faz parte de um fluxo específico."},{title:"Melhor exploração",text:"Use o story 'Interativo' para testar label, description, variant e o comportamento isolado. O story 'Grupo Interativo' demonstra o caso mais comum de seleção exclusiva por name."},{title:"Comportamento",text:"O agrupamento depende de name, checked continua sendo controlado externamente e defaultChecked só faz sentido quando a radio participa de um grupo válido."}],U=`<Radio name="cores" value="vermelho" label="Vermelho" />
<Radio name="cores" value="verde" label="Verde" />
<Radio name="cores" value="azul" label="Azul" />`,B=`<Radio
  label="Confirmo esta opcao"
  description="Exemplo de radio usada sozinha, sem compartilhar grupo com outras opções."
/>`,L=`<Radio
  name="planos"
  value="premium"
  label="Plano premium"
  description="Inclui recursos adicionais e atendimento prioritário."
  variant="success"
/>`,M=`<Radio label="Normal" name="estado-demo-a" />
<Radio label="Marcado" name="estado-demo-b" defaultChecked />
<Radio label="Desabilitado" name="estado-demo-c" disabled />
<Radio label="Danger" name="estado-demo-d" variant="danger" />
<Radio label="Success" name="estado-demo-e" variant="success" defaultChecked />`,W=`<Radio
  name="envio"
  value="email"
  label="Receber por e-mail"
  description="Enviaremos comunicações apenas para o endereço principal da conta."
/>`,ae={title:"Formulários/Radio",component:a,args:{label:"Opção A"},parameters:{layout:"padded",controls:{expanded:!0,sort:"requiredFirst"}}};function F(o){const[i,n]=m.useState(!!o.checked);return m.useEffect(()=>{n(!!o.checked)},[o.checked]),e.jsxs(e.Fragment,{children:[e.jsx(a,{...o,checked:i,onChange:d=>{var r;n(d.target.checked),(r=o.onChange)==null||r.call(o,d)}}),e.jsxs("p",{style:{...s.statText,color:"inherit"},children:[e.jsx("strong",{children:"Selecionado:"})," ",i?"Sim":"Nao"]})]})}function H(){return e.jsx("div",{style:{maxWidth:460},children:e.jsx(a,{label:"Confirmo esta opção",description:"Exemplo de radio usada sozinha, sem compartilhar grupo com outras opções."})})}function $(){return e.jsxs("div",{style:s.previewGrid,children:[e.jsx(l,{label:"Normal",children:e.jsx(a,{label:"Normal",name:"estado-demo-a"})}),e.jsx(l,{label:"Marcado",children:e.jsx(a,{label:"Marcado",name:"estado-demo-b",defaultChecked:!0})}),e.jsx(l,{label:"Desabilitado",children:e.jsx(a,{label:"Desabilitado",name:"estado-demo-c",disabled:!0})}),e.jsx(l,{label:"Danger",children:e.jsx(a,{label:"Danger",name:"estado-demo-d",variant:"danger"})}),e.jsx(l,{label:"Success",children:e.jsx(a,{label:"Success",name:"estado-demo-e",variant:"success",defaultChecked:!0})})]})}function J(){return e.jsxs("div",{style:{display:"grid",gap:12,maxWidth:460},children:[e.jsx(a,{name:"envio",value:"email",label:"Receber por e-mail",description:"Enviaremos comunicações apenas para o endereço principal da conta."}),e.jsx(a,{name:"envio",value:"sms",label:"Receber por SMS",description:"Use esta opção quando o número de telefone estiver validado."})]})}function D(){const[o,i]=m.useState("verde"),[n,d]=m.useState(null);return e.jsxs("div",{style:{display:"grid",gap:12,maxWidth:720},children:[e.jsx("form",{onSubmit:r=>{r.preventDefault(),d(o)},children:e.jsxs("div",{style:{...s.previewStage,padding:16},children:[e.jsx(a,{name:"cores",value:"vermelho",label:"Vermelho",checked:o==="vermelho",onChange:()=>i("vermelho")}),e.jsx(a,{name:"cores",value:"verde",label:"Verde",checked:o==="verde",onChange:()=>i("verde")}),e.jsx(a,{name:"cores",value:"azul",label:"Azul",checked:o==="azul",onChange:()=>i("azul")}),e.jsx("div",{children:e.jsx(G,{type:"submit",variant:"primary",children:"Enviar"})})]})}),e.jsxs("p",{style:s.statText,children:[e.jsx("strong",{children:"Valor submetido:"})," ",n??"Nenhum envio ainda"]})]})}const p={name:"Documentação",parameters:{controls:{disable:!0}},render:()=>e.jsxs(N,{children:[e.jsx(O,{eyebrow:"Documentação guiada",title:e.jsx("h3",{style:s.heroTitle,children:"Radio"}),description:e.jsxs(e.Fragment,{children:["O componente ",e.jsx("code",{children:"Radio"})," normalmente representa uma escolha única dentro de um grupo, mas também pode ser usado sozinho quando o formulário precisa de um único controle desse tipo."]}),variantTags:_,stats:Q}),e.jsxs(t,{title:"Como usar",description:"Use radio quando a pessoa usuária precisar escolher apenas uma opção entre várias alternativas mutuamente exclusivas. Quando houver grupo, o agrupamento é feito por name, então todas as radios do mesmo conjunto precisam compartilhar o mesmo valor desse atributo.",children:[e.jsxs("ul",{style:s.list,children:[e.jsxs("li",{children:[e.jsx("code",{children:"name"})," é o ponto de agrupamento entre radios exclusivas."]}),e.jsxs("li",{children:[e.jsx("code",{children:"label"})," define o texto visível associado a cada opção."]}),e.jsxs("li",{children:[e.jsx("code",{children:"checked"})," e ",e.jsx("code",{children:"onChange"})," controlam explicitamente a seleção em React."]})]}),e.jsx(c,{title:"Grupo básico",description:"Exemplo mínimo de radios agrupadas por name para reforçar o contrato básico de seleção exclusiva.",code:U,notes:["Se cada radio tiver um name diferente, elas deixam de formar um grupo exclusivo.","A semântica nativa continua sendo do input radio do navegador."],children:e.jsx(D,{})})]}),e.jsx(t,{title:"Uso isolado",description:"Embora o uso mais comum seja em grupo, a radio também pode aparecer sozinha. Nesse caso, basta omitir name e tratar o estado como um valor isolado da interface ou do formulário.",children:e.jsx(c,{title:"Radio fora de grupo",description:"Exemplo de uma única radio renderizada sem agrupamento, preservando a semântica nativa do componente.",code:B,notes:["Sem name, a radio funciona isoladamente e o componente ignora defaultChecked.","Isso evita um estado inicial marcado que a pessoa usuária não conseguiria desfazer com um novo clique."],children:e.jsx(H,{})})}),e.jsxs(t,{title:"Props principais",description:"A API do componente continua pequena e previsível. O foco é deixar claro o que controla agrupamento, o que muda apenas o tom visual e o que continua vindo do input nativo.",children:[e.jsxs("ul",{style:s.list,children:[e.jsxs("li",{children:[e.jsx("code",{children:"name"})," é opcional. Quando informado, agrupa radios e define que apenas uma delas pode permanecer marcada."]}),e.jsxs("li",{children:[e.jsx("code",{children:"description"})," adiciona contexto complementar abaixo do rótulo principal."]}),e.jsxs("li",{children:[e.jsx("code",{children:"defaultChecked"})," só faz sentido quando a radio participa de um grupo; em uso isolado, o componente ignora esse valor."]}),e.jsxs("li",{children:[e.jsx("code",{children:"variant"})," ajusta o tom visual da borda e do preenchimento interno."]})]}),e.jsx(c,{title:"Assinatura comum",description:"Um recorte mínimo da forma mais comum de uso em grupos com contexto adicional e variação visual.",code:L,children:e.jsx("div",{style:{maxWidth:460},children:e.jsx(a,{name:"planos",value:"premium",label:"Plano premium",description:"Inclui recursos adicionais e atendimento prioritário.",variant:"success"})})})]}),e.jsx(t,{title:"Estados básicos",description:"A radio pode aparecer desmarcada, marcada, desabilitada ou com variações visuais de sucesso e erro. As variantes alteram o tom do controle, sem mudar a lógica de agrupamento.",children:e.jsx(c,{title:"Galeria de estados",description:"Snapshot visual rápido dos estados mais recorrentes para comparação lado a lado.",code:M,children:e.jsx($,{})})}),e.jsx(t,{title:"Com descrição",description:"A descrição ajuda a diferenciar opções parecidas ou a explicar consequências da escolha. Isso é especialmente útil quando o grupo exige uma decisão mais contextualizada.",children:e.jsx(c,{title:"Contexto adicional",description:"Duas radios do mesmo grupo com descrições complementares para demonstrar leitura e comparação entre opções.",code:W,children:e.jsx(J,{})})}),e.jsx(t,{title:"Limitações e dependências",description:"O componente cobre bem o contrato visual e a semântica nativa de radio, mas continua dependendo do consumidor para controle de estado, agrupamento correto e modelagem do formulário.",children:e.jsxs("ul",{style:s.list,children:[e.jsxs("li",{children:["O agrupamento depende de ",e.jsx("code",{children:"name"}),"; se cada radio tiver um nome diferente, elas não formarão um grupo exclusivo."]}),e.jsxs("li",{children:["Sem ",e.jsx("code",{children:"name"}),", a radio funciona sozinha. Ainda assim, ela preserva a semântica nativa de radio, então um novo clique não a desmarca automaticamente depois de marcada."]}),e.jsxs("li",{children:["Por esse motivo, ",e.jsx("code",{children:"defaultChecked"})," é ignorado em uso isolado e a radio sempre começa desmarcada quando não pertence a um grupo."]}),e.jsxs("li",{children:[e.jsx("code",{children:"checked"})," no modo controlado depende de ",e.jsx("code",{children:"onChange"})," ou outra lógica externa para atualizar a seleção."]}),e.jsxs("li",{children:[e.jsx("code",{children:"variant"})," altera apenas o tom visual do componente e não faz validação sozinho."]}),e.jsxs("li",{children:["Para múltiplas seleções independentes, use ",e.jsx("code",{children:"Checkbox"})," em vez de radio."]})]})})]})},v={name:"Interativo",argTypes:{modoContraste:{control:"boolean",description:"Visualiza o componente no modo de alto contraste.",table:{category:"Acessibilidade"}},name:{control:"text",description:"Opcional. Quando informado, agrupa radios com o mesmo nome; vazio ou ausente mantém a radio isolada.",table:{category:"Agrupamento"}},value:{control:"text",description:"Valor submetido pelo radio quando ele participa de um formulário.",table:{category:"Agrupamento"}},label:{control:"text",description:"Texto principal associado à opção.",table:{category:"Conteudo"}},description:{control:"text",description:"Texto complementar exibido abaixo do rótulo.",table:{category:"Conteudo"}},variant:{control:{type:"radio"},options:["default","danger","success"],description:"Altera o tom visual da radio.",table:{category:"Estado visual"}},checked:{control:"boolean",description:"Estado da opção quando o componente é controlado.",table:{category:"Estado visual"}},disabled:{control:"boolean",description:"Bloqueia a interação e aplica o estado visual desabilitado.",table:{category:"Estado visual"}},onChange:{action:"changed",description:"Recebe o evento nativo quando a opção é selecionada.",table:{category:"Eventos"}}},args:{name:"",value:"opcao-a",label:"Opção A",description:"Altere pelos Controls",variant:"default",checked:!1,disabled:!1},render:o=>e.jsx(F,{...o})},x={name:"Grupo Interativo",argTypes:{modoContraste:{control:"boolean",description:"Visualiza o componente no modo de alto contraste.",table:{category:"Acessibilidade"}}},parameters:{controls:{disable:!0}},render:()=>e.jsx(D,{})};var y,C,S;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Documentação',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <DocsStoryLayout>
      <DocsHero eyebrow="Documentação guiada" title={<h3 style={storyDocsStyles.heroTitle}>Radio</h3>} description={<>
            O componente <code>Radio</code> normalmente representa uma escolha única
            dentro de um grupo, mas também pode ser usado sozinho quando o formulário
            precisa de um único controle desse tipo. 
          </>} variantTags={docsVariantTags} stats={docsHeroStats} />

      <SectionCard title="Como usar" description="Use radio quando a pessoa usuária precisar escolher apenas uma opção entre várias alternativas mutuamente exclusivas. Quando houver grupo, o agrupamento é feito por name, então todas as radios do mesmo conjunto precisam compartilhar o mesmo valor desse atributo.">
        <ul style={storyDocsStyles.list}>
          <li><code>name</code> é o ponto de agrupamento entre radios exclusivas.</li>
          <li><code>label</code> define o texto visível associado a cada opção.</li>
          <li><code>checked</code> e <code>onChange</code> controlam explicitamente a seleção em React.</li>
        </ul>

        <SandboxExample title="Grupo básico" description="Exemplo mínimo de radios agrupadas por name para reforçar o contrato básico de seleção exclusiva." code={groupExampleCode} notes={['Se cada radio tiver um name diferente, elas deixam de formar um grupo exclusivo.', 'A semântica nativa continua sendo do input radio do navegador.']}>
          <RadioGroupPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="Uso isolado" description="Embora o uso mais comum seja em grupo, a radio também pode aparecer sozinha. Nesse caso, basta omitir name e tratar o estado como um valor isolado da interface ou do formulário.">
        <SandboxExample title="Radio fora de grupo" description="Exemplo de uma única radio renderizada sem agrupamento, preservando a semântica nativa do componente." code={isolatedExampleCode} notes={['Sem name, a radio funciona isoladamente e o componente ignora defaultChecked.', 'Isso evita um estado inicial marcado que a pessoa usuária não conseguiria desfazer com um novo clique.']}>
          <RadioIsolatedPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="Props principais" description="A API do componente continua pequena e previsível. O foco é deixar claro o que controla agrupamento, o que muda apenas o tom visual e o que continua vindo do input nativo.">
        <ul style={storyDocsStyles.list}>
          <li><code>name</code> é opcional. Quando informado, agrupa radios e define que apenas uma delas pode permanecer marcada.</li>
          <li><code>description</code> adiciona contexto complementar abaixo do rótulo principal.</li>
          <li><code>defaultChecked</code> só faz sentido quando a radio participa de um grupo; em uso isolado, o componente ignora esse valor.</li>
          <li><code>variant</code> ajusta o tom visual da borda e do preenchimento interno.</li>
        </ul>

        <SandboxExample title="Assinatura comum" description="Um recorte mínimo da forma mais comum de uso em grupos com contexto adicional e variação visual." code={propsExampleCode}>
          <div style={{
          maxWidth: 460
        }}>
            <Radio name="planos" value="premium" label="Plano premium" description="Inclui recursos adicionais e atendimento prioritário." variant="success" />
          </div>
        </SandboxExample>
      </SectionCard>

      <SectionCard title="Estados básicos" description="A radio pode aparecer desmarcada, marcada, desabilitada ou com variações visuais de sucesso e erro. As variantes alteram o tom do controle, sem mudar a lógica de agrupamento.">
        <SandboxExample title="Galeria de estados" description="Snapshot visual rápido dos estados mais recorrentes para comparação lado a lado." code={statesExampleCode}>
          <RadioStatesPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="Com descrição" description="A descrição ajuda a diferenciar opções parecidas ou a explicar consequências da escolha. Isso é especialmente útil quando o grupo exige uma decisão mais contextualizada.">
        <SandboxExample title="Contexto adicional" description="Duas radios do mesmo grupo com descrições complementares para demonstrar leitura e comparação entre opções." code={descriptionExampleCode}>
          <RadioDescriptionPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="Limitações e dependências" description="O componente cobre bem o contrato visual e a semântica nativa de radio, mas continua dependendo do consumidor para controle de estado, agrupamento correto e modelagem do formulário.">
        <ul style={storyDocsStyles.list}>
          <li>O agrupamento depende de <code>name</code>; se cada radio tiver um nome diferente, elas não formarão um grupo exclusivo.</li>
          <li>Sem <code>name</code>, a radio funciona sozinha. Ainda assim, ela preserva a semântica nativa de radio, então um novo clique não a desmarca automaticamente depois de marcada.</li>
          <li>Por esse motivo, <code>defaultChecked</code> é ignorado em uso isolado e a radio sempre começa desmarcada quando não pertence a um grupo.</li>
          <li><code>checked</code> no modo controlado depende de <code>onChange</code> ou outra lógica externa para atualizar a seleção.</li>
          <li><code>variant</code> altera apenas o tom visual do componente e não faz validação sozinho.</li>
          <li>Para múltiplas seleções independentes, use <code>Checkbox</code> em vez de radio.</li>
        </ul>
      </SectionCard>
    </DocsStoryLayout>
}`,...(S=(C=p.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var E,R,q;v.parameters={...v.parameters,docs:{...(E=v.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Interativo',
  argTypes: {
    modoContraste: {
      control: 'boolean',
      description: 'Visualiza o componente no modo de alto contraste.',
      table: {
        category: 'Acessibilidade'
      }
    },
    name: {
      control: 'text',
      description: 'Opcional. Quando informado, agrupa radios com o mesmo nome; vazio ou ausente mantém a radio isolada.',
      table: {
        category: 'Agrupamento'
      }
    },
    value: {
      control: 'text',
      description: 'Valor submetido pelo radio quando ele participa de um formulário.',
      table: {
        category: 'Agrupamento'
      }
    },
    label: {
      control: 'text',
      description: 'Texto principal associado à opção.',
      table: {
        category: 'Conteudo'
      }
    },
    description: {
      control: 'text',
      description: 'Texto complementar exibido abaixo do rótulo.',
      table: {
        category: 'Conteudo'
      }
    },
    variant: {
      control: {
        type: 'radio'
      },
      options: ['default', 'danger', 'success'],
      description: 'Altera o tom visual da radio.',
      table: {
        category: 'Estado visual'
      }
    },
    checked: {
      control: 'boolean',
      description: 'Estado da opção quando o componente é controlado.',
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
      description: 'Recebe o evento nativo quando a opção é selecionada.',
      table: {
        category: 'Eventos'
      }
    }
  },
  args: {
    name: '',
    value: 'opcao-a',
    label: 'Opção A',
    description: 'Altere pelos Controls',
    variant: 'default',
    checked: false,
    disabled: false
  },
  render: args => <RadioInteractivePreview {...args} />
}`,...(q=(R=v.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var z,A,k;x.parameters={...x.parameters,docs:{...(z=x.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Grupo Interativo',
  argTypes: {
    modoContraste: {
      control: 'boolean',
      description: 'Visualiza o componente no modo de alto contraste.',
      table: {
        category: 'Acessibilidade'
      }
    }
  },
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <RadioGroupPreview />
}`,...(k=(A=x.parameters)==null?void 0:A.docs)==null?void 0:k.source}}};const ie=["RadioDocumentacao","RadioInterativo","RadioGrupo"];export{p as RadioDocumentacao,x as RadioGrupo,v as RadioInterativo,ie as __namedExportsOrder,ae as default};
