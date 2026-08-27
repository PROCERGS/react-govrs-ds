import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as l}from"./index-DyTKwKRb.js";import{s as c,S as R,a as u,b as x,c as d}from"./storyDocs-CoQtGjOG.js";import{B as T}from"./Button-DnfRrOli.js";/* empty css              */import"./_commonjsHelpers-Cpj98o6Y.js";function a({id:t,label:o,description:r,variant:n="default",indeterminate:i=!1,group:m=!1,className:h,disabled:b=!1,...y}){const s=l.useId().replace(/:/g,""),v=t??`govrs-checkbox-${s}`,p=r?`${v}-description`:void 0,k=l.useRef(null);l.useEffect(()=>{k.current&&(k.current.indeterminate=i)},[i]);const U=["govrs-checkbox",n!=="default"?`govrs-checkbox--${n}`:void 0,m?"govrs-checkbox--group":void 0,h].filter(Boolean).join(" ");return e.jsxs("label",{className:`govrs-checkbox-field ${b?"govrs-checkbox-field--disabled":""}`,children:[e.jsx("input",{...y,ref:k,id:v,type:"checkbox",className:U,disabled:b,"aria-describedby":p,"aria-invalid":n==="danger"||void 0}),o||r?e.jsxs("span",{className:"govrs-checkbox-field__content",children:[o?e.jsx("span",{className:"govrs-checkbox-field__label",children:o}):null,r?e.jsx("span",{id:p,className:"govrs-checkbox-field__description",children:r}):null]}):null]})}a.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{label:{required:!1,tsType:{name:"ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'danger' | 'success'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'success'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},indeterminate:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},group:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};const C=`// Não controlado
<Checkbox label="Receber novidades" defaultChecked />

// Controlado
<Checkbox
  label="Aceito os termos"
  checked={accepted}
  onChange={(event) => setAccepted(event.target.checked)}
/>`,V=`<Checkbox
  name="terms"
  value="accepted"
  label="Aceito os termos de uso"
  description="Necessário para concluir o envio."
  variant="danger"
/>`,F=`<Checkbox label="Normal" />
<Checkbox label="Marcado" defaultChecked />
<Checkbox label="Disabled" disabled />
<Checkbox label="Danger" variant="danger" />
<Checkbox label="Success" variant="success" defaultChecked />
<Checkbox label="Intermediario" group indeterminate />`,O=`<Checkbox
  label="Receber notificações"
  description="Escolha esta opção para permitir o envio de notificações por e-mail."
/>`,B=`const [checkedItems, setCheckedItems] = useState<string[]>([])

<Checkbox
  label="Selecionar todos"
  checked={checkedItems.length === items.length}
  indeterminate={checkedItems.length > 0 && checkedItems.length < items.length}
  group
  onChange={toggleAll}
/>

{items.map((item) => (
  <Checkbox
    key={item}
    label={item}
    checked={checkedItems.includes(item)}
    onChange={() => toggleItem(item)}
  />
))}`,Q=`const [receiveEmail, setReceiveEmail] = useState(true)
const [submittedValue, setSubmittedValue] = useState('Nenhum envio ainda')

<div style={{ ...storyDocsStyles.previewStage, maxWidth: 520 }}>
  <form
    onSubmit={(event) => {
      event.preventDefault()
      const formData = new FormData(event.currentTarget)
      setSubmittedValue(formData.get('notifications')?.toString() ?? 'Nenhum valor enviado')
    }}
    style={{ display: 'grid', gap: 12 }}
  >
    <div style={{ display: 'grid', gap: 8 }}>
      <strong style={{ color: '#0f172a' }}>Preferências de contato</strong>
      <p style={storyDocsStyles.text}>
        Este bloco mostra como o componente continua aceitando <code>name</code>,
        <code> value</code> e outras props nativas de formulário.
      </p>
    </div>

    <Checkbox
      name="notifications"
      value="email"
      label="Receber avisos por e-mail"
      description="Você poderá alterar essa preferência depois."
      checked={receiveEmail}
      onChange={(event) => setReceiveEmail(event.target.checked)}
    />

    <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
      <Button type="submit" variant="primary">
        Enviar preferências
      </Button>
      <span style={storyDocsStyles.statText}>
        <strong>Payload:</strong> {submittedValue}
      </span>
    </div>
  </form>
</div>`,Z={title:"Formulários/Checkbox",component:a,parameters:{layout:"padded",controls:{expanded:!0,sort:"requiredFirst"}}};function _({modoContraste:t=!1,...o}){const[r,n]=l.useState(!!o.checked);return l.useEffect(()=>{n(!!o.checked)},[o.checked]),e.jsx("div",{style:{padding:12,backgroundColor:t?"var(--govrs-color-contrast-background)":void 0,color:t?"var(--govrs-color-contrast-foreground)":void 0},children:e.jsx(a,{...o,checked:r,onChange:i=>{var m;n(i.target.checked),(m=o.onChange)==null||m.call(o,i)}})})}function G(){const t=["A","B","C"],[o,r]=l.useState(new Set),[n,i]=l.useState(null),m=o.size===t.length,h=o.size>0&&o.size<t.length,b=()=>{r(s=>s.size===t.length?new Set:new Set(t))},y=s=>{r(v=>{const p=new Set(v);return p.has(s)?p.delete(s):p.add(s),p})};return e.jsx("div",{style:{display:"grid",gap:12,maxWidth:720},children:e.jsxs("div",{style:{...c.previewStage,padding:16},children:[e.jsx(a,{label:"Selecionar todos",checked:m,indeterminate:h,group:!0,onChange:b}),e.jsx("div",{style:{display:"grid",gap:10,paddingLeft:32},children:t.map(s=>e.jsx(a,{label:`Item ${s}`,checked:o.has(s),onChange:()=>y(s)},s))}),e.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",flexWrap:"wrap"},children:[e.jsx(T,{variant:"primary",onClick:()=>i(Array.from(o)),children:"Enviar"}),e.jsxs("span",{style:c.statText,children:[e.jsx("strong",{children:"Valor submetido:"})," ",n==null?"Nenhum envio ainda":n.length===0?"Nenhum item selecionado":n.join(", ")]})]})]})})}function S(){const[t,o]=l.useState(!1);return e.jsxs("div",{style:c.cardGrid,children:[e.jsx(d,{label:"Controlado",children:e.jsx(a,{label:"Aceito os termos",description:"O estado é controlado pelo React.",checked:t,onChange:r=>o(r.target.checked)})}),e.jsx(d,{label:"Não controlado",children:e.jsx(a,{label:"Receber novidades",description:"Usa o estado inicial e delega a interação ao navegador.",defaultChecked:!0})})]})}function M(){return e.jsxs("div",{style:c.previewGrid,children:[e.jsx(d,{label:"Base",children:e.jsx(a,{label:"Normal"})}),e.jsx(d,{label:"Marcado",children:e.jsx(a,{label:"Marcado",defaultChecked:!0})}),e.jsx(d,{label:"Disabled",children:e.jsx(a,{label:"Disabled",disabled:!0})}),e.jsx(d,{label:"Danger",children:e.jsx(a,{label:"Danger",variant:"danger"})}),e.jsx(d,{label:"Success",children:e.jsx(a,{label:"Success",variant:"success",defaultChecked:!0})}),e.jsx(d,{label:"Intermediario",children:e.jsx(a,{label:"Intermediario",group:!0,indeterminate:!0})})]})}function W(){return e.jsxs("div",{style:c.cardGrid,children:[e.jsx(d,{label:"Informativo",children:e.jsx(a,{label:"Receber notificações",description:"Escolha esta opção para permitir o envio de notificações por e-mail."})}),e.jsx(d,{label:"Requer atenção",children:e.jsx(a,{label:"Termos e condições",description:"A aceitação dos termos é obrigatória para concluir o cadastro.",variant:"danger"})})]})}function L(){const[t,o]=l.useState(!0),[r,n]=l.useState("Nenhum envio ainda");return e.jsx("div",{style:{...c.previewStage,maxWidth:520},children:e.jsxs("form",{onSubmit:i=>{var h;i.preventDefault();const m=new FormData(i.currentTarget);n(((h=m.get("notifications"))==null?void 0:h.toString())??"Nenhum valor enviado")},style:{display:"grid",gap:12},children:[e.jsxs("div",{style:{display:"grid",gap:8},children:[e.jsx("strong",{style:{color:"#0f172a"},children:"Preferências de contato"}),e.jsxs("p",{style:c.text,children:["Este bloco mostra como o componente continua aceitando ",e.jsx("code",{children:"name"}),",",e.jsx("code",{children:" value"})," e outras props nativas de formulário."]})]}),e.jsx(a,{name:"notifications",value:"email",label:"Receber avisos por e-mail",description:"Você poderá alterar essa preferência depois.",checked:t,onChange:i=>o(i.target.checked)}),e.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",flexWrap:"wrap"},children:[e.jsx(T,{type:"submit",variant:"primary",children:"Enviar preferências"}),e.jsxs("span",{style:c.statText,children:[e.jsx("strong",{children:"Payload:"})," ",r]})]})]})})}const g={name:"Documentacao",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:c.docsContainer,children:[e.jsx(R,{eyebrow:"Documentação guiada",title:"Checkbox",description:e.jsxs(e.Fragment,{children:["O componente ",e.jsx("code",{children:"Checkbox"})," permite selecionar uma ou mais opções de forma independente."]}),variantTags:["default","danger","success"],stats:[{title:"Quando usar",text:"Quando cada opção pode ser marcada ou desmarcada sem interferir nas demais."},{title:"Melhor exploração",text:"Use o story 'Interativo' para visualizar o funcionamento de diferentes formas e o story 'Grupo Interativo' para explorar cenários com múltiplos checkboxes."},{title:"Comportamento",text:"Mantém input nativo, foco previsível, espaço no teclado e integração com formulários HTML."}]}),e.jsxs(u,{title:"Como usar",description:e.jsx(e.Fragment,{children:"Use o checkbox quando cada escolha for independente. Quando se quer que o checkbox venha marcado por default, defaultChecked resolve bem. Quando o valor precisa refletir dados, validação ou store externa, prefira o modo controlado com checked e onChange."}),children:[e.jsxs("ul",{style:c.list,children:[e.jsxs("li",{children:[e.jsx("code",{children:"defaultChecked"})," define apenas o estado inicial marcado."]}),e.jsxs("li",{children:[e.jsx("code",{children:"checked"})," e ",e.jsx("code",{children:"onChange"})," sincronizam o valor com estado React."]}),e.jsxs("li",{children:[e.jsx("code",{children:"group"})," e ",e.jsx("code",{children:"indeterminate"})," fazem mais sentido em um checkbox mestre."]})]}),e.jsx(x,{title:"Controle básico",description:"Um comparativo direto entre uso controlado e não controlado, com troca entre preview e código no mesmo bloco.",code:C,notes:["No modo controlado, o valor precisa ser atualizado por quem consome o componente.","No modo não controlado, o browser assume a interação após o estado inicial."],children:e.jsx(S,{})})]}),e.jsxs(u,{title:"Props principais",description:e.jsx(e.Fragment,{children:"A ideia aqui é deixar visível o que muda o comportamento, o que muda apenas o tom visual e o que continua vindo do input nativo."}),children:[e.jsxs("ul",{style:c.list,children:[e.jsxs("li",{children:[e.jsx("code",{children:"label"})," define o texto principal clicável associado ao campo."]}),e.jsxs("li",{children:[e.jsx("code",{children:"description"})," adiciona contexto complementar por ",e.jsx("code",{children:"aria-describedby"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"variant"})," ajusta o tom visual para ",e.jsx("code",{children:"default"}),", ",e.jsx("code",{children:"danger"})," ou ",e.jsx("code",{children:"success"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"checked"})," e ",e.jsx("code",{children:"onChange"})," formam o par recomendado no modo controlado."]}),e.jsxs("li",{children:[e.jsx("code",{children:"defaultChecked"})," cobre casos simples com estado inicial marcado."]}),e.jsxs("li",{children:[e.jsx("code",{children:"group"})," e ",e.jsx("code",{children:"indeterminate"})," representam seleção parcial em checkboxes mestres."]}),e.jsxs("li",{children:["Props nativas como ",e.jsx("code",{children:"name"}),", ",e.jsx("code",{children:"value"}),", ",e.jsx("code",{children:"required"})," e ",e.jsx("code",{children:"aria-label"})," continuam disponiveis."]})]}),e.jsx(x,{title:"Exemplo de composição",description:"Um recorte mínimo da assinatura mais comum para formulários com validação ou submissão tradicional.",code:V,children:e.jsx("div",{style:{maxWidth:420},children:e.jsx(a,{name:"terms",value:"accepted",label:"Aceito os termos de uso",description:"Necessário para concluir o envio.",variant:"danger"})})})]}),e.jsx(u,{title:"Estados básicos",description:e.jsx(e.Fragment,{children:"Foco, tecla de espaço e mudança de estado continuam previsíveis porque o componente usa o controle nativo. As variações visuais ajudam a contextualizar o campo sem alterar o comportamento do dado."}),children:e.jsx(x,{title:"Galeria de estados",description:"Um snapshot visual rápido dos estados mais recorrentes para comparação lado a lado.",code:F,children:e.jsx(M,{})})}),e.jsx(u,{title:"Com descrição",description:e.jsx(e.Fragment,{children:"Use description para complementar o rótulo com uma orientação curta ou uma consequência da escolha. O texto continua separado do nome principal, mas é anunciado junto ao campo."}),children:e.jsx(x,{title:"Contexto adicional",description:"Exemplos em que a descrição ajuda a reduzir ambiguidade sem sobrecarregar o label principal.",code:O,children:e.jsx(W,{})})}),e.jsx(u,{title:"Grupo com estado intermediário",description:e.jsx(e.Fragment,{children:"Quando um checkbox mestre representa um conjunto, indeterminate comunica que apenas parte do grupo está selecionada. A lógica para marcar todos, limpar todos ou calcular a seleção parcial continua sendo responsabilidade de quem consome."}),children:e.jsx(x,{title:"Seleção parcial",description:"Este sandbox simula uma lista real, com um checkbox mestre e o retorno do valor submetido.",code:B,notes:["O estado intermediário é apenas visual; ele não representa um valor enviado por si só.","A história Grupo Interativo mantém esse cenário disponível como uma história dedicada para exploração rápida."],children:e.jsx(G,{})})}),e.jsx(u,{title:"Integração com formulário",description:e.jsx(e.Fragment,{children:"Como o componente expõe as props nativas do input, você pode usar name, value, required e aria-label normalmente. O rótulo envolve o controle inteiro, o que amplia a área clicável e melhora a usabilidade."}),children:e.jsx(x,{title:"Props nativas em ação",description:"O preview abaixo simula um envio simples para deixar explícito o payload gerado a partir de name e value.",code:Q,children:e.jsx(L,{})})}),e.jsxs(u,{title:"Limitações e dependências",description:e.jsx(e.Fragment,{children:"O componente cobre bem o contrato visual e a integração nativa com formulários, mas não substitui a lógica de negócio do formulário nem gerencia grupos automaticamente."}),children:[e.jsxs("ul",{style:c.list,children:[e.jsxs("li",{children:[e.jsx("code",{children:"checked"})," no modo controlado depende de ",e.jsx("code",{children:"onChange"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"indeterminate"})," é apenas visual e faz mais sentido em um checkbox mestre."]}),e.jsxs("li",{children:[e.jsx("code",{children:"group"})," muda a aparência do checkbox, mas não sincroniza filhos automaticamente."]}),e.jsxs("li",{children:[e.jsx("code",{children:"description"})," não substitui o nome acessível; sem label visível, forneça pelo menos ",e.jsx("code",{children:"aria-label"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"variant"})," altera apenas o tom visual do controle; ele não valida dados sozinho."]})]}),e.jsx(x,{title:"Controlado x não controlado",description:"Este bloco reforça a principal diferença de responsabilidade entre o componente e o consumidor.",code:C,children:e.jsx(S,{})})]})]})},f={name:"Interativo",argTypes:{modoContraste:{control:"boolean",description:"Visualiza o componente no modo de alto contraste.",table:{category:"Acessibilidade"}},label:{control:"text",description:"Texto principal associado ao checkbox e usado como nome acessível quando visível.",table:{category:"Conteudo"}},description:{control:"text",description:"Texto complementar anunciado junto ao campo por aria-describedby.",table:{category:"Conteudo"}},variant:{control:{type:"radio"},options:["default","danger","success"],description:"Altera apenas o tom visual do checkbox.",table:{category:"Estado visual"}},checked:{control:"boolean",description:"Use junto com onChange quando o componente for controlado.",table:{category:"Controle"}},disabled:{control:"boolean",description:"Bloqueia a interação e aplica o estado visual desabilitado.",table:{category:"Estado visual"}},indeterminate:{control:"boolean",description:"Estado visual parcial; normalmente usado com group em um checkbox mestre.",table:{category:"Grupo"}},group:{control:"boolean",description:"Aplica a aparência de checkbox de grupo, mas não controla os filhos automaticamente.",table:{category:"Grupo"}},onChange:{action:"changed",description:"Recebe o evento nativo quando o usuário altera o valor do controle.",table:{category:"Eventos"}}},args:{label:"Checkbox interativo",description:"Altere os Controls para testar o componente em tempo real.",variant:"default",checked:!1,disabled:!1,indeterminate:!1,group:!1},render:t=>e.jsx(_,{...t})},j={name:"Grupo Interativo",argTypes:{modoContraste:{control:"boolean",description:"Visualiza o componente no modo de alto contraste.",table:{category:"Acessibilidade"}}},parameters:{controls:{disable:!0}},render:()=>e.jsx(G,{})};var E,q,D;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Documentacao',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={storyDocsStyles.docsContainer}>
      <StoryDocsHero eyebrow="Documentação guiada" title="Checkbox" description={<>
            O componente <code>Checkbox</code> permite selecionar uma ou mais opções de
            forma independente.
          </>} variantTags={['default', 'danger', 'success']} stats={[{
      title: 'Quando usar',
      text: 'Quando cada opção pode ser marcada ou desmarcada sem interferir nas demais.'
    }, {
      title: 'Melhor exploração',
      text: "Use o story 'Interativo' para visualizar o funcionamento de diferentes formas e o story 'Grupo Interativo' para explorar cenários com múltiplos checkboxes."
    }, {
      title: 'Comportamento',
      text: 'Mantém input nativo, foco previsível, espaço no teclado e integração com formulários HTML.'
    }]} />

      <StoryDocsSection title="Como usar" description={<>
            Use o checkbox quando cada escolha for independente. Quando se quer que o checkbox venha marcado por default, defaultChecked resolve bem. Quando o valor precisa refletir dados,
            validação ou store externa, prefira o modo controlado com checked e
            onChange.
          </>}>
        <ul style={storyDocsStyles.list}>
          <li><code>defaultChecked</code> define apenas o estado inicial marcado.</li>
          <li><code>checked</code> e <code>onChange</code> sincronizam o valor com estado React.</li>
          <li><code>group</code> e <code>indeterminate</code> fazem mais sentido em um checkbox mestre.</li>
        </ul>

        <StorySandboxExample title="Controle básico" description="Um comparativo direto entre uso controlado e não controlado, com troca entre preview e código no mesmo bloco." code={basicUsageCode} notes={['No modo controlado, o valor precisa ser atualizado por quem consome o componente.', 'No modo não controlado, o browser assume a interação após o estado inicial.']}>
          <CheckboxControlledVsUncontrolledPreview />
        </StorySandboxExample>
      </StoryDocsSection>

      <StoryDocsSection title="Props principais" description={<>
            A ideia aqui é deixar visível o que muda
            o comportamento, o que muda apenas o tom visual e o que continua vindo do
            input nativo.
          </>}>
        <ul style={storyDocsStyles.list}>
          <li><code>label</code> define o texto principal clicável associado ao campo.</li>
          <li><code>description</code> adiciona contexto complementar por <code>aria-describedby</code>.</li>
          <li><code>variant</code> ajusta o tom visual para <code>default</code>, <code>danger</code> ou <code>success</code>.</li>
          <li><code>checked</code> e <code>onChange</code> formam o par recomendado no modo controlado.</li>
          <li><code>defaultChecked</code> cobre casos simples com estado inicial marcado.</li>
          <li><code>group</code> e <code>indeterminate</code> representam seleção parcial em checkboxes mestres.</li>
          <li>Props nativas como <code>name</code>, <code>value</code>, <code>required</code> e <code>aria-label</code> continuam disponiveis.</li>
        </ul>

        <StorySandboxExample title="Exemplo de composição" description="Um recorte mínimo da assinatura mais comum para formulários com validação ou submissão tradicional." code={propsExampleCode}>
          <div style={{
          maxWidth: 420
        }}>
            <Checkbox name="terms" value="accepted" label="Aceito os termos de uso" description="Necessário para concluir o envio." variant="danger" />
          </div>
        </StorySandboxExample>
      </StoryDocsSection>

      <StoryDocsSection title="Estados básicos" description={<>
            Foco, tecla de espaço e mudança de estado continuam previsíveis porque o
            componente usa o controle nativo. As variações visuais ajudam a contextualizar
            o campo sem alterar o comportamento do dado.
          </>}>
        <StorySandboxExample title="Galeria de estados" description="Um snapshot visual rápido dos estados mais recorrentes para comparação lado a lado." code={statesExampleCode}>
          <CheckboxStatesPreview />
        </StorySandboxExample>
      </StoryDocsSection>

      <StoryDocsSection title="Com descrição" description={<>
            Use description para complementar o rótulo com uma orientação curta ou uma
            consequência da escolha. O texto continua separado do nome principal, mas é
            anunciado junto ao campo.
          </>}>
        <StorySandboxExample title="Contexto adicional" description="Exemplos em que a descrição ajuda a reduzir ambiguidade sem sobrecarregar o label principal." code={descriptionExampleCode}>
          <CheckboxDescriptionPreview />
        </StorySandboxExample>
      </StoryDocsSection>

      <StoryDocsSection title="Grupo com estado intermediário" description={<>
            Quando um checkbox mestre representa um conjunto, indeterminate comunica que
            apenas parte do grupo está selecionada. A lógica para marcar todos, limpar
            todos ou calcular a seleção parcial continua sendo responsabilidade de quem
            consome.
          </>}>
        <StorySandboxExample title="Seleção parcial" description="Este sandbox simula uma lista real, com um checkbox mestre e o retorno do valor submetido." code={groupExampleCode} notes={['O estado intermediário é apenas visual; ele não representa um valor enviado por si só.', 'A história Grupo Interativo mantém esse cenário disponível como uma história dedicada para exploração rápida.']}>
          <CheckboxGroupPreview />
        </StorySandboxExample>
      </StoryDocsSection>

      <StoryDocsSection title="Integração com formulário" description={<>
            Como o componente expõe as props nativas do input, você pode usar name,
            value, required e aria-label normalmente. O rótulo envolve o controle inteiro,
            o que amplia a área clicável e melhora a usabilidade.
          </>}>
        <StorySandboxExample title="Props nativas em ação" description="O preview abaixo simula um envio simples para deixar explícito o payload gerado a partir de name e value." code={formExampleCode}>
          <CheckboxFormPreview />
        </StorySandboxExample>
      </StoryDocsSection>

      <StoryDocsSection title="Limitações e dependências" description={<>
            O componente cobre bem o contrato visual e a integração nativa com formulários,
            mas não substitui a lógica de negócio do formulário nem gerencia grupos
            automaticamente.
          </>}>
        <ul style={storyDocsStyles.list}>
          <li><code>checked</code> no modo controlado depende de <code>onChange</code>.</li>
          <li><code>indeterminate</code> é apenas visual e faz mais sentido em um checkbox mestre.</li>
          <li><code>group</code> muda a aparência do checkbox, mas não sincroniza filhos automaticamente.</li>
          <li><code>description</code> não substitui o nome acessível; sem label visível, forneça pelo menos <code>aria-label</code>.</li>
          <li><code>variant</code> altera apenas o tom visual do controle; ele não valida dados sozinho.</li>
        </ul>

        <StorySandboxExample title="Controlado x não controlado" description="Este bloco reforça a principal diferença de responsabilidade entre o componente e o consumidor." code={basicUsageCode}>
          <CheckboxControlledVsUncontrolledPreview />
        </StorySandboxExample>
      </StoryDocsSection>
    </div>
}`,...(D=(q=g.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var I,w,A;f.parameters={...f.parameters,docs:{...(I=f.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
      description: 'Texto principal associado ao checkbox e usado como nome acessível quando visível.',
      table: {
        category: 'Conteudo'
      }
    },
    description: {
      control: 'text',
      description: 'Texto complementar anunciado junto ao campo por aria-describedby.',
      table: {
        category: 'Conteudo'
      }
    },
    variant: {
      control: {
        type: 'radio'
      },
      options: ['default', 'danger', 'success'],
      description: 'Altera apenas o tom visual do checkbox.',
      table: {
        category: 'Estado visual'
      }
    },
    checked: {
      control: 'boolean',
      description: 'Use junto com onChange quando o componente for controlado.',
      table: {
        category: 'Controle'
      }
    },
    disabled: {
      control: 'boolean',
      description: 'Bloqueia a interação e aplica o estado visual desabilitado.',
      table: {
        category: 'Estado visual'
      }
    },
    indeterminate: {
      control: 'boolean',
      description: 'Estado visual parcial; normalmente usado com group em um checkbox mestre.',
      table: {
        category: 'Grupo'
      }
    },
    group: {
      control: 'boolean',
      description: 'Aplica a aparência de checkbox de grupo, mas não controla os filhos automaticamente.',
      table: {
        category: 'Grupo'
      }
    },
    onChange: {
      action: 'changed',
      description: 'Recebe o evento nativo quando o usuário altera o valor do controle.',
      table: {
        category: 'Eventos'
      }
    }
  },
  args: {
    label: 'Checkbox interativo',
    description: 'Altere os Controls para testar o componente em tempo real.',
    variant: 'default',
    checked: false,
    disabled: false,
    indeterminate: false,
    group: false
  },
  render: args => <CheckboxInteractivePreview {...args as CheckboxInteractiveArgs} />
}`,...(A=(w=f.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var z,N,P;j.parameters={...j.parameters,docs:{...(z=j.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
  render: () => <CheckboxGroupPreview />
}`,...(P=(N=j.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};const ee=["CheckboxDocumentacao","CheckboxInterativo","CheckboxGrupo"];export{g as CheckboxDocumentacao,j as CheckboxGrupo,f as CheckboxInterativo,ee as __namedExportsOrder,Z as default};
