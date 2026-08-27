import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as v}from"./index-DyTKwKRb.js";import{f as x,a as c,b as k}from"./index-A9ZUQmzb.js";import{D as P,S as q,s as t,a as d,b as p,c as r}from"./storyDocs-CoQtGjOG.js";import{B as n}from"./Badges-CJIQjlwW.js";import{I as o}from"./Input-CUoEfCmV.js";/* empty css              */import"./_commonjsHelpers-Cpj98o6Y.js";import"./Text-DqgU3e9e.js";const D=["danger","success","warning","info"],U=[{title:"Quando usar",text:"Quando o formulário precisa coletar texto curto com orientação visível, feedback contextual e estados de validação ou atenção."},{title:"Melhor exploração",text:"Use o story 'Interativo' para testar label, helperText, type, state e ícones. O story 'Exemplos Combinados' resume os casos mais recorrentes do componente."},{title:"Comportamento",text:"O input é controlado externamente, o toggle de senha só atua em type=password e o feedback pode ser anunciado como status ou alert conforme o state."}],O=`<Input
  label="E-mail"
  helperText="Use o endereço institucional."
  feedback={<Badges variant="info" message="Não compartilhamos esse dado." />}
  value={email}
  onChange={(event) => setEmail(event.target.value)}
/>`,V=`<Input
  label="Usuario"
  value={value}
  onChange={(event) => setValue(event.target.value)}
  leftIcon={faUser}
  placeholder="Digite seu nome"
/>

<Input
  label="Senha"
  type="password"
  value={password}
  onChange={(event) => setPassword(event.target.value)}
/>`,z=`<Input
  label="Senha"
  type="password"
  value={password}
  onChange={(event) => setPassword(event.target.value)}
  feedback={<Badges variant="error" message="O campo não pode ser vazio." />}
  state="danger"
/>`,G=`const [email, setEmail] = useState('maria@exemplo.rs.gov.br')
const [password, setPassword] = useState('segredo123')

<Input
  label="E-mail"
  value={email}
  onChange={(event) => setEmail(event.target.value)}
  leftIcon={faUser}
/>

<Input
  label="Senha"
  type="password"
  value={password}
  onChange={(event) => setPassword(event.target.value)}
  helperText="Use ao menos 8 caracteres."
/>`;function R(a){switch(a){case"danger":return e.jsx(n,{variant:"error",message:"O campo não pode ficar vazio."});case"success":return e.jsx(n,{variant:"success",message:"Valor validado com sucesso."});case"warning":return e.jsx(n,{variant:"warning",message:"Revise este valor antes de continuar."});case"info":return e.jsx(n,{variant:"info",message:"Informação adicional sobre o preenchimento."});default:return}}const $={title:"Formulários/Input",component:o,args:{label:"Campo base"},parameters:{layout:"padded",controls:{expanded:!0,sort:"requiredFirst"}}};function A(a){const[l,i]=v.useState(typeof a.value=="string"?a.value:"");v.useEffect(()=>{i(typeof a.value=="string"?a.value:"")},[a.value]);const g=R(a.state);return e.jsxs("div",{style:{...t.previewStage,padding:16,maxWidth:720},children:[e.jsx(o,{...a,value:l,feedback:g,onChange:s=>{var f;i(s.target.value),(f=a.onChange)==null||f.call(a,s)}}),e.jsxs("p",{style:t.statText,children:[e.jsx("strong",{children:"Valor atual:"})," ",l||"Nenhum valor digitado"]})]})}function M(){return e.jsx("div",{style:{maxWidth:480},children:e.jsx(o,{label:"E-mail",value:"maria@exemplo.rs.gov.br",onChange:()=>{},helperText:"Use o endereço institucional.",feedback:e.jsx(n,{variant:"info",message:"Não compartilhamos esse dado."}),leftIcon:c,placeholder:"nome@dominio.rs.gov.br"})})}function B(){return e.jsxs("div",{style:t.cardGrid,children:[e.jsx(r,{label:"Texto simples",children:e.jsx(o,{label:"Default sem ícone",value:"",onChange:()=>{},placeholder:"Placeholder"})}),e.jsx(r,{label:"Com ícone",children:e.jsx(o,{label:"Default com ícone",value:"",onChange:()=>{},leftIcon:x,placeholder:"Pesquisar"})}),e.jsx(r,{label:"Senha",children:e.jsx(o,{label:"Senha",value:"segredo123",onChange:()=>{},type:"password",placeholder:"Sua senha"})}),e.jsx(r,{label:"Campo com calendário",children:e.jsx(o,{label:"Data",value:"10/04/2026",onChange:()=>{},leftIcon:k,placeholder:"dd/mm/aaaa"})})]})}function L(){return e.jsxs("div",{style:{display:"grid",gap:12},children:[e.jsx(o,{label:"Danger",value:"Valor invalido",onChange:()=>{},state:"danger",helperText:"Texto auxiliar para prevenir erros.",feedback:e.jsx(n,{variant:"error",message:"O campo não pode ser vazio."})}),e.jsx(o,{label:"Success",value:"Valor válido",onChange:()=>{},state:"success",helperText:"Texto auxiliar para confirmar o preenchimento.",feedback:e.jsx(n,{variant:"success",message:"Valor validado com sucesso."})}),e.jsx(o,{label:"Info",value:"Detalhe informativo",onChange:()=>{},state:"info",feedback:e.jsx(n,{variant:"info",message:"Esta é uma mensagem de informação."})}),e.jsx(o,{label:"Warning",value:"Atenção",onChange:()=>{},state:"warning",feedback:e.jsx(n,{variant:"warning",message:"Esta é uma mensagem de aviso."})}),e.jsx(o,{label:"Disabled",value:"Campo desabilitado",onChange:()=>{},disabled:!0,leftIcon:c,helperText:"Texto auxiliar para campo indisponível."})]})}function N(){const[a,l]=v.useState("maria@exemplo.rs.gov.br"),[i,g]=v.useState("segredo123");return e.jsxs("div",{style:{display:"grid",gap:16},children:[e.jsxs("div",{style:t.cardGrid,children:[e.jsx(r,{label:"Controlado",children:e.jsx(o,{label:"E-mail",value:a,onChange:s=>l(s.target.value),leftIcon:c,helperText:"Exemplo de valor controlado pelo React."})}),e.jsx(r,{label:"Senha com toggle",children:e.jsx(o,{label:"Senha",type:"password",value:i,onChange:s=>g(s.target.value),helperText:"Use ao menos 8 caracteres."})})]}),e.jsxs("p",{style:t.statText,children:[e.jsx("strong",{children:"Valores atuais:"})," email=",a," | senha=",i]})]})}function F(){return e.jsxs("div",{style:{display:"grid",gap:16,maxWidth:900},children:[e.jsxs("div",{style:t.cardGrid,children:[e.jsx(o,{label:"Busca",value:"",onChange:()=>{},leftIcon:x,placeholder:"Pesquisar"}),e.jsx(o,{label:"Usuario",value:"Maria da Silva",onChange:()=>{},leftIcon:c,helperText:"Exemplo de texto auxiliar."})]}),e.jsxs("div",{style:t.cardGrid,children:[e.jsx(o,{label:"Senha",value:"segredo123",onChange:()=>{},type:"password"}),e.jsx(o,{label:"Campo com erro",value:"",onChange:()=>{},state:"danger",feedback:e.jsx(n,{variant:"error",message:"Preencha este campo."})})]})]})}const m={name:"Documentação",parameters:{controls:{disable:!0}},render:()=>e.jsxs(P,{children:[e.jsx(q,{eyebrow:"Documentação guiada",title:e.jsx("h3",{style:t.heroTitle,children:"Input"}),description:e.jsxs(e.Fragment,{children:["O componente ",e.jsx("code",{children:"Input"})," coleta texto com rótulo, orientação e feedback visual."]}),variantTags:D,stats:U}),e.jsxs(d,{title:"Anatomia e acessibilidade",description:"label, helperText e feedback estruturam a comunicação do campo com quem preenche o formulário e com tecnologias assistivas. Quando state for danger, o input também recebe aria-invalid e o feedback passa a ser anunciado como alerta.",children:[e.jsxs("ul",{style:t.list,children:[e.jsxs("li",{children:[e.jsx("code",{children:"label"})," nomeia o campo e deve descrever claramente o dado esperado."]}),e.jsxs("li",{children:[e.jsx("code",{children:"helperText"})," e ",e.jsx("code",{children:"feedback"})," entram em ",e.jsx("code",{children:"aria-describedby"})," quando presentes."]}),e.jsxs("li",{children:[e.jsx("code",{children:"feedback"})," pode ser qualquer no React, preferencialmente badges do design system."]})]}),e.jsx(p,{title:"Estrutura principal",description:"Um exemplo único com label, helperText, ícone e feedback para deixar explícita a anatomia recomendada do componente.",code:O,notes:["No estado danger, o feedback é anunciado como alert; nos demais estados, como status.","O ícone é decorativo e não substitui o nome acessível do campo."],children:e.jsx(M,{})})]}),e.jsx(d,{title:"Exemplos básicos",description:"A base do componente é a mesma para entradas simples, campos com ícone e campos de senha. O toggle de senha aparece automaticamente quando type=password e showPasswordToggle não for desativado.",children:e.jsx(p,{title:"Combinacoes mais comuns",description:"Galeria com texto simples, ícone, senha e um campo com ícone de calendário para explorar variações de composição sem mudar a base do componente.",code:V,notes:["leftIcon reforça contexto visual, mas continua sendo decorativo.","O mesmo campo pode ser reutilizado em diferentes fluxos sem mudar a semântica do input nativo."],children:e.jsx(B,{})})}),e.jsx(d,{title:"Estados e feedback",description:"Use state para indicar o tom visual do campo e combine com feedback quando for necessário exibir orientação, confirmação ou erro. helperText funciona melhor para instruções persistentes; feedback costuma representar o retorno do preenchimento atual.",children:e.jsx(p,{title:"Tons de validação",description:"Panorama com os estados visuais mais recorrentes, incluindo disabled, para comparar borda, feedback e comunicação do campo.",code:z,notes:["state e feedback são relacionados por convenção de uso, não por acoplamento automático no componente.","disabled bloqueia edição e também remove a alternância de visibilidade da senha."],children:e.jsx(L,{})})}),e.jsx(d,{title:"Controle do valor e senha",description:"O componente foi pensado para uso controlado, então o valor exibido deve vir do estado da aplicação e ser atualizado por onChange. Em campos de senha, o botão de alternância troca apenas a visualização do conteúdo; ele não modifica o valor nem executa validação por conta própria.",children:e.jsx(p,{title:"Valor controlado e toggle",description:"Dois exemplos lado a lado para reforçar o contrato controlado do input e o comportamento específico de senha.",code:G,notes:["Se o valor não puder mudar, prefira readOnly ou disabled em vez de manter onChange inoperante.","showPasswordToggle só tem efeito quando type=password."],children:e.jsx(N,{})})}),e.jsx(d,{title:"Limitações e dependências",description:"O componente cobre bem a entrada de texto e o feedback visual, mas continua dependendo do consumidor para controle de estado, consistência entre state e mensagem e regras de validação do formulário.",children:e.jsxs("ul",{style:t.list,children:[e.jsxs("li",{children:[e.jsx("code",{children:"value"})," faz mais sentido no modo controlado junto com ",e.jsx("code",{children:"onChange"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"showPasswordToggle"})," só tem efeito quando ",e.jsx("code",{children:"type=password"}),"; em outros tipos, a prop é ignorada."]}),e.jsxs("li",{children:[e.jsx("code",{children:"state"})," controla apenas o estado visual da borda; para mensagem de orientação ou erro, combine com ",e.jsx("code",{children:"feedback"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"feedback"})," aceita qualquer no React e não cria relação automática com ",e.jsx("code",{children:"state"}),"; essa consistência deve ser definida por quem consome."]}),e.jsxs("li",{children:[e.jsx("code",{children:"leftIcon"})," é decorativo e não substitui o rótulo. Sempre use ",e.jsx("code",{children:"label"})," ou outro nome acessível equivalente."]})]})})]})},u={name:"Interativo",argTypes:{modoContraste:{control:"boolean",description:"Visualiza o componente no modo de alto contraste.",table:{category:"Acessibilidade"}},label:{control:"text",description:"Rótulo visível associado ao campo; e o principal nome acessível do input.",table:{category:"Conteudo"}},placeholder:{control:"text",description:"Texto de sugestão exibido dentro do campo antes do preenchimento.",table:{category:"Conteudo"}},helperText:{control:"text",description:"Texto auxiliar persistente associado ao input por aria-describedby.",table:{category:"Conteudo"}},value:{control:"text",description:"Valor atual do campo quando ele está sendo controlado externamente.",table:{category:"Conteudo"}},state:{control:{type:"radio"},options:[void 0,"danger","success","warning","info"],description:"Define apenas o estado visual da borda; o preview gera um feedback sintético a partir desse valor.",table:{category:"Estado visual"}},type:{control:{type:"radio"},options:["text","password"],description:"Define o tipo do campo. Em password, o toggle de visibilidade pode ser exibido automaticamente.",table:{category:"Composicao"}},leftIcon:{control:{type:"select"},options:[void 0,"faMagnifyingGlass","faCalendarDays","faUser"],mapping:{faMagnifyingGlass:x,faCalendarDays:k,faUser:c,undefined:void 0},labels:{faMagnifyingGlass:"Pesquisa",faCalendarDays:"Calendario",faUser:"Usuario"},description:"Ícone decorativo exibido à esquerda do campo para reforçar o contexto visual.",table:{category:"Composicao"}},showPasswordToggle:{control:"boolean",description:"Só tem efeito quando type=password.",table:{category:"Composicao"}},disabled:{control:"boolean",description:"Impede edição, desabilita o toggle de senha e aplica o estado visual correspondente.",table:{category:"Estado visual"}},feedback:{control:!1,description:"Aceita um nó React para mensagens de erro, sucesso, aviso ou informação.",table:{category:"Conteudo"}},onChange:{action:"changed",description:"Recebe o evento nativo sempre que o usuário altera o conteúdo do campo.",table:{category:"Eventos"}}},args:{label:"Campo interativo",placeholder:"Digite para testar",helperText:"Use os Controls para configurar o input.",leftIcon:x,state:void 0,type:"text",showPasswordToggle:!0,disabled:!1,value:""},render:a=>e.jsx(A,{...a})},b={name:"Exemplos Combinados",parameters:{controls:{disable:!0}},render:()=>e.jsx(F,{})};var h,y,C;m.parameters={...m.parameters,docs:{...(h=m.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Documentação',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <DocsStoryLayout>
      <DocsHero eyebrow="Documentação guiada" title={<h3 style={storyDocsStyles.heroTitle}>Input</h3>} description={<>
            O componente <code>Input</code> coleta texto com rótulo, orientação e
            feedback visual.
          </>} variantTags={docsVariantTags} stats={docsHeroStats} />

      <SectionCard title="Anatomia e acessibilidade" description="label, helperText e feedback estruturam a comunicação do campo com quem preenche o formulário e com tecnologias assistivas. Quando state for danger, o input também recebe aria-invalid e o feedback passa a ser anunciado como alerta.">
        <ul style={storyDocsStyles.list}>
          <li><code>label</code> nomeia o campo e deve descrever claramente o dado esperado.</li>
          <li><code>helperText</code> e <code>feedback</code> entram em <code>aria-describedby</code> quando presentes.</li>
          <li><code>feedback</code> pode ser qualquer no React, preferencialmente badges do design system.</li>
        </ul>

        <SandboxExample title="Estrutura principal" description="Um exemplo único com label, helperText, ícone e feedback para deixar explícita a anatomia recomendada do componente." code={anatomyExampleCode} notes={['No estado danger, o feedback é anunciado como alert; nos demais estados, como status.', 'O ícone é decorativo e não substitui o nome acessível do campo.']}>
          <InputAnatomyPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="Exemplos básicos" description="A base do componente é a mesma para entradas simples, campos com ícone e campos de senha. O toggle de senha aparece automaticamente quando type=password e showPasswordToggle não for desativado.">
        <SandboxExample title="Combinacoes mais comuns" description="Galeria com texto simples, ícone, senha e um campo com ícone de calendário para explorar variações de composição sem mudar a base do componente." code={basicExamplesCode} notes={['leftIcon reforça contexto visual, mas continua sendo decorativo.', 'O mesmo campo pode ser reutilizado em diferentes fluxos sem mudar a semântica do input nativo.']}>
          <InputBasicsPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="Estados e feedback" description="Use state para indicar o tom visual do campo e combine com feedback quando for necessário exibir orientação, confirmação ou erro. helperText funciona melhor para instruções persistentes; feedback costuma representar o retorno do preenchimento atual.">
        <SandboxExample title="Tons de validação" description="Panorama com os estados visuais mais recorrentes, incluindo disabled, para comparar borda, feedback e comunicação do campo." code={feedbackExamplesCode} notes={['state e feedback são relacionados por convenção de uso, não por acoplamento automático no componente.', 'disabled bloqueia edição e também remove a alternância de visibilidade da senha.']}>
          <InputStatesPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="Controle do valor e senha" description="O componente foi pensado para uso controlado, então o valor exibido deve vir do estado da aplicação e ser atualizado por onChange. Em campos de senha, o botão de alternância troca apenas a visualização do conteúdo; ele não modifica o valor nem executa validação por conta própria.">
        <SandboxExample title="Valor controlado e toggle" description="Dois exemplos lado a lado para reforçar o contrato controlado do input e o comportamento específico de senha." code={controlledPasswordCode} notes={['Se o valor não puder mudar, prefira readOnly ou disabled em vez de manter onChange inoperante.', 'showPasswordToggle só tem efeito quando type=password.']}>
          <InputControlledPasswordPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="Limitações e dependências" description="O componente cobre bem a entrada de texto e o feedback visual, mas continua dependendo do consumidor para controle de estado, consistência entre state e mensagem e regras de validação do formulário.">
        <ul style={storyDocsStyles.list}>
          <li><code>value</code> faz mais sentido no modo controlado junto com <code>onChange</code>.</li>
          <li><code>showPasswordToggle</code> só tem efeito quando <code>type=password</code>; em outros tipos, a prop é ignorada.</li>
          <li><code>state</code> controla apenas o estado visual da borda; para mensagem de orientação ou erro, combine com <code>feedback</code>.</li>
          <li><code>feedback</code> aceita qualquer no React e não cria relação automática com <code>state</code>; essa consistência deve ser definida por quem consome.</li>
          <li><code>leftIcon</code> é decorativo e não substitui o rótulo. Sempre use <code>label</code> ou outro nome acessível equivalente.</li>
        </ul>
      </SectionCard>
    </DocsStoryLayout>
}`,...(C=(y=m.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var j,w,S;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
      description: 'Rótulo visível associado ao campo; e o principal nome acessível do input.',
      table: {
        category: 'Conteudo'
      }
    },
    placeholder: {
      control: 'text',
      description: 'Texto de sugestão exibido dentro do campo antes do preenchimento.',
      table: {
        category: 'Conteudo'
      }
    },
    helperText: {
      control: 'text',
      description: 'Texto auxiliar persistente associado ao input por aria-describedby.',
      table: {
        category: 'Conteudo'
      }
    },
    value: {
      control: 'text',
      description: 'Valor atual do campo quando ele está sendo controlado externamente.',
      table: {
        category: 'Conteudo'
      }
    },
    state: {
      control: {
        type: 'radio'
      },
      options: [undefined, 'danger', 'success', 'warning', 'info'],
      description: 'Define apenas o estado visual da borda; o preview gera um feedback sintético a partir desse valor.',
      table: {
        category: 'Estado visual'
      }
    },
    type: {
      control: {
        type: 'radio'
      },
      options: ['text', 'password'],
      description: 'Define o tipo do campo. Em password, o toggle de visibilidade pode ser exibido automaticamente.',
      table: {
        category: 'Composicao'
      }
    },
    leftIcon: {
      control: {
        type: 'select'
      },
      options: [undefined, 'faMagnifyingGlass', 'faCalendarDays', 'faUser'],
      mapping: {
        faMagnifyingGlass,
        faCalendarDays,
        faUser,
        undefined
      },
      labels: {
        faMagnifyingGlass: 'Pesquisa',
        faCalendarDays: 'Calendario',
        faUser: 'Usuario'
      },
      description: 'Ícone decorativo exibido à esquerda do campo para reforçar o contexto visual.',
      table: {
        category: 'Composicao'
      }
    },
    showPasswordToggle: {
      control: 'boolean',
      description: 'Só tem efeito quando type=password.',
      table: {
        category: 'Composicao'
      }
    },
    disabled: {
      control: 'boolean',
      description: 'Impede edição, desabilita o toggle de senha e aplica o estado visual correspondente.',
      table: {
        category: 'Estado visual'
      }
    },
    feedback: {
      control: false,
      description: 'Aceita um nó React para mensagens de erro, sucesso, aviso ou informação.',
      table: {
        category: 'Conteudo'
      }
    },
    onChange: {
      action: 'changed',
      description: 'Recebe o evento nativo sempre que o usuário altera o conteúdo do campo.',
      table: {
        category: 'Eventos'
      }
    }
  },
  args: {
    label: 'Campo interativo',
    placeholder: 'Digite para testar',
    helperText: 'Use os Controls para configurar o input.',
    leftIcon: faMagnifyingGlass,
    state: undefined,
    type: 'text',
    showPasswordToggle: true,
    disabled: false,
    value: ''
  },
  render: args => <InputInteractivePreview {...args} />
}`,...(S=(w=u.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var I,T,E;b.parameters={...b.parameters,docs:{...(I=b.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Exemplos Combinados',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <InputCombinedPreview />
}`,...(E=(T=b.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};const ee=["InputDocumentacao","InputInterativo","InputCombinados"];export{b as InputCombinados,m as InputDocumentacao,u as InputInterativo,ee as __namedExportsOrder,$ as default};
