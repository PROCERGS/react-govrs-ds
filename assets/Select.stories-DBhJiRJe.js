import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as i}from"./index-DyTKwKRb.js";import{D as Ae,S as _e,s as k,a as w,b as O}from"./storyDocs-CoQtGjOG.js";import{B as C}from"./Badges-CJIQjlwW.js";import{B as Oe}from"./Button-DnfRrOli.js";import{F as ie,f as Ie,i as Re}from"./index-A9ZUQmzb.js";/* empty css              */import"./_commonjsHelpers-Cpj98o6Y.js";import"./Text-DqgU3e9e.js";function Q(a){return a.findIndex(n=>!n.disabled)}function de(a){var n;for(let r=a.length-1;r>=0;r-=1)if(!((n=a[r])!=null&&n.disabled))return r;return-1}function Fe(a,n,r){var t;let d=n;for(;d>=0&&d<a.length;){if(!((t=a[d])!=null&&t.disabled))return d;d+=r}return-1}function x({options:a=[],value:n,defaultValue:r=null,onChange:d,placeholder:t="Selecione uma opção",disabled:u=!1,ariaLabel:m,multiple:l=!1,className:P,name:q,id:B,label:E,helperText:z,feedback:Se,renderFeedback:G,state:V}){var le,re;const je=i.useId().replace(/:/g,""),v=B??`govrs-select-${je}`,T=E?`${v}-label`:void 0,K=`${v}-value`,ke=`${v}-control`,J=`${v}-list`,X=z?`${v}-helper`:void 0,Y=q??(B?`${B}-name`:`${v}-name`),Z=i.useRef(null),ee=i.useRef(null),L=i.useMemo(()=>a.map(o=>o.value),[a]),N=o=>l?Array.isArray(o)?Array.from(new Set(o.filter(s=>L.includes(s)))):[]:typeof o!="string"?null:L.includes(o)?o:null,D=n!==void 0,[b,H]=i.useState(()=>N(D?n:l?r??[]:r??null)),[p,U]=i.useState(!1),[f,h]=i.useState(-1);i.useEffect(()=>{if(D){H(N(n));return}H(o=>N(o))},[n,D,l,L.join("|")]),i.useEffect(()=>{if(!p)return;const o=s=>{var c;(c=Z.current)!=null&&c.contains(s.target)||U(!1)};return document.addEventListener("mousedown",o),()=>document.removeEventListener("mousedown",o)},[p]),i.useEffect(()=>{var s;if(!p||f<0)return;const o=(s=ee.current)==null?void 0:s.querySelector(`#${v}-opt-${f}`);o==null||o.scrollIntoView({block:"nearest"})},[v,f,p]);const y=l?Array.isArray(b)?b:[]:[],g=!l&&typeof b=="string"?a.find(o=>o.value===b)??null:null,S=l?a.filter(o=>y.includes(o.value)):g?[g]:[],M=G?G({value:b,selectedOption:g,selectedOptions:S,options:a,multiple:l,isDisabled:u}):Se,oe=M?`${v}-feedback`:void 0,Ce=[X,oe].filter(Boolean).join(" ")||void 0,Ee=l?y.length>0:g!=null,we=l?S.length>0?S.length===1?(le=S[0])==null?void 0:le.label:e.jsxs(e.Fragment,{children:[(re=S[0])==null?void 0:re.label," + (",S.length-1,")"]}):t:(g==null?void 0:g.label)??t,ae=m??(typeof E=="string"?E:"Select"),qe=()=>{var s;const o=l?y.length>0?a.findIndex(c=>c.value===y[0]):-1:a.findIndex(c=>c.value===b);return o>=0&&!((s=a[o])!=null&&s.disabled)?o:Q(a)},j=()=>{u||(U(!0),h(qe()))},A=()=>{U(!1)},Te=()=>{if(p){A();return}j()},te=(o,s)=>{D||H(o),d==null||d(o,s)},se=o=>{const s=a[o];if(!(!s||s.disabled)){if(l){const c=Array.isArray(b)?[...b]:[],_=c.indexOf(s.value);_>=0?c.splice(_,1):c.push(s.value),te(N(c),s),h(o);return}te(s.value,s),A()}},ne=o=>{if(!a.length)return;if(f===-1){h(o===1?Q(a):de(a));return}const s=Fe(a,f+o,o);s>=0&&h(s)},Ne=o=>{if(!u)switch(o.key){case"ArrowDown":o.preventDefault(),p?ne(1):j();break;case"ArrowUp":o.preventDefault(),p?ne(-1):j();break;case"Home":o.preventDefault(),j(),h(Q(a));break;case"End":o.preventDefault(),j(),h(de(a));break;case"Enter":case" ":o.preventDefault(),p?f>=0&&se(f):j();break;case"Escape":p&&(o.preventDefault(),A());break;case"Tab":A();break}},De=["govrs-select",l?"govrs-select--multiple":void 0,p?"govrs-select--open":void 0,u?"govrs-select--disabled":void 0,V?`govrs-select--${V}`:void 0,P].filter(Boolean).join(" ");return e.jsxs("div",{className:De,ref:Z,children:[E?e.jsx("span",{id:T,className:"govrs-select__label",children:E}):null,e.jsxs("div",{className:"govrs-select__wrapper",children:[e.jsxs("button",{id:ke,type:"button",className:"govrs-select__control","aria-haspopup":"listbox","aria-expanded":p,"aria-controls":J,"aria-labelledby":T?`${T} ${K}`:void 0,"aria-label":T?void 0:ae,"aria-describedby":Ce,disabled:u,onClick:Te,onKeyDown:Ne,children:[e.jsx("span",{className:"govrs-select__leading-icon","aria-hidden":"true",children:e.jsx(ie,{icon:Ie})}),e.jsx("span",{id:K,className:`govrs-select__value ${Ee?"":"govrs-select__value--placeholder"}`,children:we}),e.jsx("span",{className:"govrs-select__indicator","aria-hidden":"true",children:e.jsx(ie,{icon:Re})})]}),p?e.jsxs("div",{id:J,className:"govrs-select__list",role:"listbox","aria-label":ae,"aria-multiselectable":l||void 0,ref:ee,children:[e.jsx("div",{className:"govrs-select__item govrs-select__item--header",role:"presentation","aria-hidden":"true",children:t}),a.map((o,s)=>{const c=l?y.includes(o.value):(g==null?void 0:g.value)===o.value,_=f===s;return e.jsxs("div",{id:`${v}-opt-${s}`,className:["govrs-select__item",c?"govrs-select__item--selected":void 0,_?"govrs-select__item--highlighted":void 0,o.disabled?"govrs-select__item--disabled":void 0].filter(Boolean).join(" "),role:"option","aria-selected":c,"aria-disabled":o.disabled||void 0,onMouseEnter:()=>{o.disabled||h(s)},onClick:()=>se(s),children:[l?e.jsx("span",{className:"govrs-select__item-marker","aria-hidden":"true"}):null,e.jsx("span",{className:"govrs-select__item-label",children:o.label})]},o.value)})]}):null]}),M?e.jsx("div",{id:oe,className:"govrs-select__feedback",role:V==="danger"?"alert":"status","aria-live":"polite",children:M}):null,z?e.jsx("small",{id:X,className:"govrs-select__helper",children:z}):null,l?y.map(o=>e.jsx("input",{type:"hidden",name:Y,value:o,disabled:u},o)):e.jsx("input",{type:"hidden",name:Y,value:typeof b=="string"?b:"",disabled:u})]})}x.__docgenInfo={description:"",methods:[],displayName:"Select",props:{options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  value: string
  label: ReactNode
  disabled?: boolean
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"ReactNode",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"SelectOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},value:{required:!1,tsType:{name:"union",raw:"string | string[] | null",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"null"}]},description:""},defaultValue:{required:!1,tsType:{name:"union",raw:"string | string[] | null",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | string[], option: SelectOption) => void",signature:{arguments:[{type:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},name:"value"},{type:{name:"signature",type:"object",raw:`{
  value: string
  label: ReactNode
  disabled?: boolean
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"ReactNode",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}},name:"option"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Selecione uma opção'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"ReactNode"},description:""},helperText:{required:!1,tsType:{name:"ReactNode"},description:""},feedback:{required:!1,tsType:{name:"ReactNode"},description:""},renderFeedback:{required:!1,tsType:{name:"signature",type:"function",raw:"(context: SelectFeedbackContext) => ReactNode",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  value: SelectValue
  selectedOption: SelectOption | null
  selectedOptions: SelectOption[]
  options: SelectOption[]
  multiple: boolean
  isDisabled: boolean
}`,signature:{properties:[{key:"value",value:{name:"union",raw:"string | string[] | null",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"null"}],required:!0}},{key:"selectedOption",value:{name:"union",raw:"SelectOption | null",elements:[{name:"signature",type:"object",raw:`{
  value: string
  label: ReactNode
  disabled?: boolean
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"ReactNode",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}},{name:"null"}],required:!0}},{key:"selectedOptions",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  value: string
  label: ReactNode
  disabled?: boolean
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"ReactNode",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"SelectOption[]",required:!0}},{key:"options",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  value: string
  label: ReactNode
  disabled?: boolean
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"ReactNode",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"SelectOption[]",required:!0}},{key:"multiple",value:{name:"boolean",required:!0}},{key:"isDisabled",value:{name:"boolean",required:!0}}]}},name:"context"}],return:{name:"ReactNode"}}},description:""},state:{required:!1,tsType:{name:"union",raw:"'danger' | 'success' | 'warning' | 'info'",elements:[{name:"literal",value:"'danger'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"}]},description:""}}};const $e=["danger","success","warning","info"],Pe=[{title:"Quando usar",text:"Quando a interface precisa resumir uma lista de escolhas em um controle compacto, mantendo navegação por teclado, feedback contextual e opção de múltipla seleção."},{title:"Melhor exploração",text:"Use o story 'Interativo' para alternar entre os modos simples e múltiplo. O story 'Exemplos Combinados' resume os cenários recorrentes em uma leitura única."},{title:"Comportamento",text:"No modo simples o menu fecha após a escolha; em múltiplo, a lista permanece aberta, a seleção é alternada por item e o resumo do valor mostra o primeiro rótulo seguido de + (N)."}],$=[{value:"rascunho",label:"Rascunho"},{value:"revisao",label:"Em revisão"},{value:"publicado",label:"Publicado"},{value:"arquivado",label:"Arquivado",disabled:!0}],W=[{value:"react",label:"React"},{value:"typescript",label:"TypeScript"},{value:"a11y",label:"Acessibilidade"},{value:"storybook",label:"Storybook"},{value:"tokens",label:"Design tokens"}],Be=`const [status, setStatus] = useState('publicado')

<Select
  label="Status"
  options={[
    { value: 'rascunho', label: 'Rascunho' },
    { value: 'publicado', label: 'Publicado' },
  ]}
  value={status}
  onChange={(nextValue) => setStatus(nextValue)}
/>`,ze=`// Simples
<Select options={singleOptions} value={status} onChange={setStatus} />

// Multiplo
<Select multiple options={multipleOptions} value={topics} onChange={setTopics} />`,Ve=`<Select
  label="Status"
  options={singleOptions}
  value={status}
  onChange={setStatus}
  renderFeedback={({ value }) => {
    if (!value) return null
    return value === 'publicado'
      ? <Badges variant="success" message="Selecao valida" />
      : <Badges variant="warning" message="Ainda em edicao" />
  }}
/>`,Le=`<form onSubmit={handleSubmit}>
  <Select
    name="status"
    label="Status da publicacao"
    options={singleOptions}
    value={status}
    onChange={setStatus}
  />

  <Select
    name="topics"
    label="Temas relacionados"
    options={multipleOptions}
    value={topics}
    multiple
    onChange={setTopics}
  />

  <Button type="submit">Enviar</Button>
</form>`;function He(a){return Array.isArray(a)?a.length>0?a.join(", "):"Nenhum valor selecionado":a||"Nenhum valor selecionado"}const oo={title:"Formulários/Select",component:x,parameters:{layout:"padded",controls:{expanded:!0,sort:"requiredFirst"}}};function he(a){const[n,r]=i.useState(a.multiple?[]:null);i.useEffect(()=>{r(a.multiple?[]:null)},[a.multiple]);const d=a.multiple?W:$;return e.jsxs("div",{style:{...k.previewStage,padding:16,maxWidth:720},children:[e.jsx(x,{...a,options:d,value:n,onChange:(t,u)=>{var m;r(t),(m=a.onChange)==null||m.call(a,t,u)},renderFeedback:({value:t,isDisabled:u})=>u?e.jsx(C,{variant:"warning",message:"Campo desabilitado"}):!t||Array.isArray(t)&&t.length===0?null:(Array.isArray(t)?t.includes("storybook")||t.includes("tokens"):t==="publicado")?e.jsx(C,{variant:"success",message:"Seleção válida"}):e.jsx(C,{variant:"error",message:"Seleção ainda incompleta"})}),e.jsxs("p",{style:k.statText,children:[e.jsx("strong",{children:"Valor atual:"})," ",He(n)]})]})}function Ue(){const[a,n]=i.useState("publicado");return e.jsx("div",{style:{maxWidth:480},children:e.jsx(x,{label:"Status da publicação",helperText:"Escolha o estado atual do conteúdo.",options:$,value:a,onChange:r=>n(r)})})}function ye(){const[a,n]=i.useState("publicado"),[r,d]=i.useState(["react","storybook"]);return e.jsxs("div",{style:{display:"grid",gap:16,maxWidth:720},children:[e.jsx(x,{label:"Status da publicação",helperText:"Escolha o estado atual do conteúdo.",options:$,value:a,onChange:t=>n(t),feedback:e.jsx(C,{variant:"info",message:"Exemplo com feedback estático."})}),e.jsx(x,{label:"Temas relacionados",helperText:"Selecione um ou mais temas para classificar o conteúdo.",options:W,value:r,multiple:!0,onChange:t=>d(t),renderFeedback:({value:t})=>!Array.isArray(t)||t.length===0?null:t.length>=2?e.jsx(C,{variant:"success",message:"Seleção suficiente para classificação."}):e.jsx(C,{variant:"warning",message:"Selecione mais um tema."})})]})}function Me(){const[a,n]=i.useState("publicado"),[r,d]=i.useState(["react","storybook"]),[t,u]=i.useState("Nenhum envio ainda");return e.jsxs("form",{onSubmit:m=>{m.preventDefault();const l=new FormData(m.currentTarget),P=l.get("status"),q=l.getAll("topics");u(`status=${String(P??"")||"vazio"} | topics=${q.length>0?q.join(", "):"vazio"}`)},style:{display:"grid",gap:16,maxWidth:720},children:[e.jsx(x,{name:"status",label:"Status da publicação",helperText:"Este valor será enviado pelo input oculto interno.",options:$,value:a,onChange:m=>n(m)}),e.jsx(x,{name:"topics",label:"Temas relacionados",helperText:"No modo múltiplo, o componente gera um input oculto por item selecionado.",options:W,value:r,multiple:!0,onChange:m=>d(m)}),e.jsx("div",{children:e.jsx(Oe,{type:"submit",variant:"primary",children:"Simular envio"})}),e.jsxs("p",{style:k.statText,children:[e.jsx("strong",{children:"Payload:"})," ",t]})]})}const I={name:"Documentação",parameters:{controls:{disable:!0}},render:()=>e.jsxs(Ae,{children:[e.jsx(_e,{eyebrow:"Documentação guiada",title:e.jsx("h3",{style:k.heroTitle,children:"Select"}),description:e.jsxs(e.Fragment,{children:["O componente ",e.jsx("code",{children:"Select"})," permite escolher uma opção única ou várias opções em uma lista customizada, mantendo navegação por teclado, feedback visual e participação em formulários por meio de inputs ocultos."]}),variantTags:$e,stats:Pe}),e.jsxs(w,{title:"Como usar",description:"Passe as opções em options, escolha o modo simples ou múltiplo com multiple e defina value com onChange quando quiser controlar o valor externamente. O componente também aceita defaultValue para um estado inicial sem controle explícito.",children:[e.jsxs("ul",{style:k.list,children:[e.jsxs("li",{children:[e.jsx("code",{children:"options"})," recebe um array com ",e.jsx("code",{children:"value"}),", ",e.jsx("code",{children:"label"})," e opcionalmente ",e.jsx("code",{children:"disabled"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"value"})," e ",e.jsx("code",{children:"onChange"})," controlam o valor atual do select."]}),e.jsx("li",{children:"No modo múltiplo, o valor passa a ser um array de strings."})]}),e.jsx(O,{title:"Assinatura controlada",description:"Exemplo mínimo de uso controlado em seleção simples para reforçar o contrato principal do componente.",code:Be,notes:["O placeholder nunca é tratado como valor válido; valores desconhecidos são sanitizados com base em options.","Quando name não é informado, o componente gera um nome único por instância para os inputs ocultos do formulário."],children:e.jsx(Ue,{})})]}),e.jsx(w,{title:"Seleção simples e múltipla",description:"No modo simples, o select fecha ao escolher uma opção. Em múltiplo, a seleção alterna a opção atual, mantém a lista aberta e resume o valor selecionado exibindo o primeiro rótulo seguido de + (N) quando houver mais itens selecionados.",children:e.jsx(O,{title:"Dois modos de seleção",description:"Comparativo entre seleção simples e múltipla, preservando o mesmo contrato de label, helperText e feedback.",code:ze,notes:["No modo múltiplo, value e defaultValue precisam ser arrays; no modo simples, o valor esperado é string ou null.","Opções com disabled não podem ser selecionadas nem destacadas pela navegação de teclado."],children:e.jsx(ye,{})})}),e.jsx(w,{title:"Feedback, estados e acessibilidade",description:"O feedback pode ser passado como no React estático em feedback ou calculado por renderFeedback usando o valor selecionado. O componente mantém navegação por teclado com ArrowUp, ArrowDown, Home, End, Enter, Space, Escape e Tab.",children:e.jsx(O,{title:"Feedback dinâmico",description:"Exemplo de feedback calculado a partir da seleção atual, sem perder a estrutura de helperText e o controle visual por state.",code:Ve,notes:["renderFeedback tem precedência sobre feedback quando ambos são fornecidos.","state altera apenas o tom visual do controle; a semântica de sucesso ou erro continua sendo responsabilidade do consumidor."],children:e.jsx(he,{label:"Status do conteúdo",placeholder:"Selecione uma opção",helperText:"Exemplo de feedback calculado pela seleção atual.",multiple:!1,disabled:!1,state:void 0})})}),e.jsx(w,{title:"Formulários e inputs ocultos",description:"Como se trata de um select customizado, a participação em formulários acontece pelos inputs ocultos gerados internamente. Com name definido, o componente monta o payload para submit tanto no modo simples quanto no múltiplo.",children:e.jsx(O,{title:"Simulação de envio",description:"Formulário demonstrando como o componente participa do submit por inputs ocultos, inclusive quando múltiplo gera vários valores com o mesmo name.",code:Le,children:e.jsx(Me,{})})}),e.jsx(w,{title:"Limitações e dependências",description:"O componente cobre bem o contrato visual, a acessibilidade básica e a participação em formulários, mas continua dependendo do consumidor para modelagem do valor, consistência do feedback e regras de negócio.",children:e.jsxs("ul",{style:k.list,children:[e.jsxs("li",{children:[e.jsx("code",{children:"onChange"})," retorna o novo valor e a opção alterada, não o evento nativo do DOM."]}),e.jsxs("li",{children:[e.jsx("code",{children:"state"})," altera apenas o tom visual do controle; a semântica de sucesso ou erro continua sendo responsabilidade do consumidor."]}),e.jsx("li",{children:"Como se trata de um select customizado, a participação em formulários acontece pelos inputs ocultos gerados internamente."}),e.jsx("li",{children:"Em seleção múltipla, o componente resume visualmente os itens escolhidos; se o produto precisar listar todos de forma expandida, isso deve ser tratado fora do controle base."})]})})]})},R={name:"Interativo",argTypes:{modoContraste:{control:"boolean",description:"Visualiza o componente no modo de alto contraste.",table:{category:"Acessibilidade"}},label:{control:"text",description:"Rótulo principal exibido acima do controle.",table:{category:"Conteudo"}},placeholder:{control:"text",description:"Texto exibido quando nada está selecionado.",table:{category:"Conteudo"}},helperText:{control:"text",description:"Texto auxiliar associado ao controle por aria-describedby.",table:{category:"Conteudo"}},multiple:{control:"boolean",description:"Ativa a seleção múltipla.",table:{category:"Comportamento"}},disabled:{control:"boolean",description:"Bloqueia a interação e impede a abertura da lista.",table:{category:"Estado visual"}},state:{control:{type:"radio"},options:[void 0,"danger","success","warning","info"],description:"Define apenas o estado visual da borda do controle.",table:{category:"Estado visual"}},onChange:{action:"changed",description:"Recebe o novo valor selecionado e a opção alterada.",table:{category:"Eventos"}}},args:{label:"Status do conteúdo",placeholder:"Selecione uma opção",helperText:"Use os Controls para alternar entre os modos simples e múltiplo.",multiple:!1,disabled:!1,state:void 0},render:a=>e.jsx(he,{...a})},F={name:"Exemplos Combinados",parameters:{controls:{disable:!0}},render:()=>e.jsx(ye,{})};var ce,ue,me;I.parameters={...I.parameters,docs:{...(ce=I.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  name: 'Documentação',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <DocsStoryLayout>
      <DocsHero eyebrow="Documentação guiada" title={<h3 style={storyDocsStyles.heroTitle}>Select</h3>} description={<>
            O componente <code>Select</code> permite escolher uma opção única ou várias
            opções em uma lista customizada, mantendo navegação por teclado, feedback visual
            e participação em formulários por meio de inputs ocultos.
          </>} variantTags={docsVariantTags} stats={docsHeroStats} />

      <SectionCard title="Como usar" description="Passe as opções em options, escolha o modo simples ou múltiplo com multiple e defina value com onChange quando quiser controlar o valor externamente. O componente também aceita defaultValue para um estado inicial sem controle explícito.">
        <ul style={storyDocsStyles.list}>
          <li><code>options</code> recebe um array com <code>value</code>, <code>label</code> e opcionalmente <code>disabled</code>.</li>
          <li><code>value</code> e <code>onChange</code> controlam o valor atual do select.</li>
          <li>No modo múltiplo, o valor passa a ser um array de strings.</li>
        </ul>

        <SandboxExample title="Assinatura controlada" description="Exemplo mínimo de uso controlado em seleção simples para reforçar o contrato principal do componente." code={usageExampleCode} notes={['O placeholder nunca é tratado como valor válido; valores desconhecidos são sanitizados com base em options.', 'Quando name não é informado, o componente gera um nome único por instância para os inputs ocultos do formulário.']}>
          <SelectUsagePreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="Seleção simples e múltipla" description="No modo simples, o select fecha ao escolher uma opção. Em múltiplo, a seleção alterna a opção atual, mantém a lista aberta e resume o valor selecionado exibindo o primeiro rótulo seguido de + (N) quando houver mais itens selecionados.">
        <SandboxExample title="Dois modos de seleção" description="Comparativo entre seleção simples e múltipla, preservando o mesmo contrato de label, helperText e feedback." code={multipleExampleCode} notes={['No modo múltiplo, value e defaultValue precisam ser arrays; no modo simples, o valor esperado é string ou null.', 'Opções com disabled não podem ser selecionadas nem destacadas pela navegação de teclado.']}>
          <SelectExamplesPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="Feedback, estados e acessibilidade" description="O feedback pode ser passado como no React estático em feedback ou calculado por renderFeedback usando o valor selecionado. O componente mantém navegação por teclado com ArrowUp, ArrowDown, Home, End, Enter, Space, Escape e Tab.">
        <SandboxExample title="Feedback dinâmico" description="Exemplo de feedback calculado a partir da seleção atual, sem perder a estrutura de helperText e o controle visual por state." code={feedbackExampleCode} notes={['renderFeedback tem precedência sobre feedback quando ambos são fornecidos.', 'state altera apenas o tom visual do controle; a semântica de sucesso ou erro continua sendo responsabilidade do consumidor.']}>
          <SelectInteractivePreview label="Status do conteúdo" placeholder="Selecione uma opção" helperText="Exemplo de feedback calculado pela seleção atual." multiple={false} disabled={false} state={undefined} />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="Formulários e inputs ocultos" description="Como se trata de um select customizado, a participação em formulários acontece pelos inputs ocultos gerados internamente. Com name definido, o componente monta o payload para submit tanto no modo simples quanto no múltiplo.">
        <SandboxExample title="Simulação de envio" description="Formulário demonstrando como o componente participa do submit por inputs ocultos, inclusive quando múltiplo gera vários valores com o mesmo name." code={formExampleCode}>
          <SelectFormPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="Limitações e dependências" description="O componente cobre bem o contrato visual, a acessibilidade básica e a participação em formulários, mas continua dependendo do consumidor para modelagem do valor, consistência do feedback e regras de negócio.">
        <ul style={storyDocsStyles.list}>
          <li><code>onChange</code> retorna o novo valor e a opção alterada, não o evento nativo do DOM.</li>
          <li><code>state</code> altera apenas o tom visual do controle; a semântica de sucesso ou erro continua sendo responsabilidade do consumidor.</li>
          <li>Como se trata de um select customizado, a participação em formulários acontece pelos inputs ocultos gerados internamente.</li>
          <li>Em seleção múltipla, o componente resume visualmente os itens escolhidos; se o produto precisar listar todos de forma expandida, isso deve ser tratado fora do controle base.</li>
        </ul>
      </SectionCard>
    </DocsStoryLayout>
}`,...(me=(ue=I.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var pe,ve,be;R.parameters={...R.parameters,docs:{...(pe=R.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
      description: 'Rótulo principal exibido acima do controle.',
      table: {
        category: 'Conteudo'
      }
    },
    placeholder: {
      control: 'text',
      description: 'Texto exibido quando nada está selecionado.',
      table: {
        category: 'Conteudo'
      }
    },
    helperText: {
      control: 'text',
      description: 'Texto auxiliar associado ao controle por aria-describedby.',
      table: {
        category: 'Conteudo'
      }
    },
    multiple: {
      control: 'boolean',
      description: 'Ativa a seleção múltipla.',
      table: {
        category: 'Comportamento'
      }
    },
    disabled: {
      control: 'boolean',
      description: 'Bloqueia a interação e impede a abertura da lista.',
      table: {
        category: 'Estado visual'
      }
    },
    state: {
      control: {
        type: 'radio'
      },
      options: [undefined, 'danger', 'success', 'warning', 'info'],
      description: 'Define apenas o estado visual da borda do controle.',
      table: {
        category: 'Estado visual'
      }
    },
    onChange: {
      action: 'changed',
      description: 'Recebe o novo valor selecionado e a opção alterada.',
      table: {
        category: 'Eventos'
      }
    }
  },
  args: {
    label: 'Status do conteúdo',
    placeholder: 'Selecione uma opção',
    helperText: 'Use os Controls para alternar entre os modos simples e múltiplo.',
    multiple: false,
    disabled: false,
    state: undefined
  },
  render: args => <SelectInteractivePreview {...args} />
}`,...(be=(ve=R.parameters)==null?void 0:ve.docs)==null?void 0:be.source}}};var ge,fe,xe;F.parameters={...F.parameters,docs:{...(ge=F.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  name: 'Exemplos Combinados',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <SelectExamplesPreview />
}`,...(xe=(fe=F.parameters)==null?void 0:fe.docs)==null?void 0:xe.source}}};const ao=["SelectDocumentacao","SelectInterativo","SelectCombinados"];export{F as SelectCombinados,I as SelectDocumentacao,R as SelectInterativo,ao as __namedExportsOrder,oo as default};
