import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as c}from"./index-DyTKwKRb.js";import{D as be,S as ge,s as u,a as F,b as P}from"./storyDocs-CoQtGjOG.js";import{B as g}from"./Badges-CJIQjlwW.js";import{B as xe}from"./Button-DnfRrOli.js";/* empty css              */import"./_commonjsHelpers-Cpj98o6Y.js";import"./Text-DqgU3e9e.js";function fe(...o){return o.filter(Boolean).join(" ")}function he(){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"17",viewBox:"0 0 16 17","aria-hidden":"true",focusable:"false",children:e.jsx("path",{d:"M9.25 13H6.75C6.3125 13 6 12.6875 6 12.25V7H3.25C2.6875 7 2.40625 6.34375 2.8125 5.9375L7.5625 1.1875C7.78125 0.96875 8.1875 0.96875 8.40625 1.1875L13.1562 5.9375C13.5625 6.34375 13.2812 7 12.7188 7H10V12.25C10 12.6875 9.65625 13 9.25 13ZM16 12.75V16.25C16 16.6875 15.6562 17 15.25 17H0.75C0.3125 17 0 16.6875 0 16.25V12.75C0 12.3438 0.3125 12 0.75 12H5V12.25C5 13.2188 5.78125 14 6.75 14H9.25C10.1875 14 11 13.2188 11 12.25V12H15.25C15.6562 12 16 12.3438 16 12.75ZM12.125 15.5C12.125 15.1562 11.8438 14.875 11.5 14.875C11.1562 14.875 10.875 15.1562 10.875 15.5C10.875 15.8438 11.1562 16.125 11.5 16.125C11.8438 16.125 12.125 15.8438 12.125 15.5ZM14.125 15.5C14.125 15.1562 13.8438 14.875 13.5 14.875C13.1562 14.875 12.875 15.1562 12.875 15.5C12.875 15.8438 13.1562 16.125 13.5 16.125C13.8438 16.125 14.125 15.8438 14.125 15.5Z",fill:"currentColor"})})}function ye(){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 640",width:"16",height:"16","aria-hidden":"true",focusable:"false",children:e.jsx("path",{d:"M232.7 69.9L224 96L128 96C110.3 96 96 110.3 96 128C96 145.7 110.3 160 128 160L512 160C529.7 160 544 145.7 544 128C544 110.3 529.7 96 512 96L416 96L407.3 69.9C402.9 56.8 390.7 48 376.9 48L263.1 48C249.3 48 237.1 56.8 232.7 69.9zM512 208L128 208L149.1 531.1C150.7 556.4 171.7 576 197 576L443 576C468.3 576 489.3 556.4 490.9 531.1L512 208z",fill:"currentColor"})})}function qe(o,s){if(!s)return!0;const r=s.split(",").map(a=>a.trim()).filter(Boolean);return r.length===0?!0:r.some(a=>{if(a==="*/*")return!0;if(a.endsWith("/*")){const d=a.replace(/\/\*$/,"");return o.type.startsWith(d)}return a.startsWith(".")?o.name.toLowerCase().endsWith(a.toLowerCase()):o.type===a})}function je(o){return typeof o!="number"||Number.isNaN(o)?null:Math.round(o*1024*1024)}function I(o,s){return o<=0?"":s?o===1?"Arquivo selecionado":"Arquivos selecionados":"Arquivo selecionado"}function x({id:o,name:s,multiple:r=!1,accept:a,disabled:d=!1,className:k,onChange:i,onUpload:H,maxFileSize:D,maxFiles:v,renderFeedback:z,buttonLabel:re,loadingLabel:se="Carregando...",...ne}){const le=c.useId().replace(/:/g,""),E=o??`govrs-upload-${le}`,R=`${E}-feedback`,L=c.useRef(null),[n,$]=c.useState([]),[T,N]=c.useState(!1),[f,_]=c.useState(!1),[y,M]=c.useState(""),[de,V]=c.useState(""),[b,W]=c.useState(!1);function h(){L.current&&(L.current.value="")}function q(t){_(!0),N(!1),M(t),V(t)}function B(t,l){$(t),N(t.length>0),_(!1),M(l),V(l),i==null||i(t)}function ce(t=[]){$(t),N(!1),_(!1),M(""),V(""),i==null||i(t)}async function me(t){const l=t.target.files?Array.from(t.target.files):[];if(l.length===0)return;const m=r?l:l.slice(0,1);if(typeof v=="number"&&(r?n.length+m.length:m.length)>v){const S=Math.max(0,v-n.length),ve=S>0?`Número máximo de arquivos: ${v} (restam ${S})`:`Número máximo de arquivos: ${v}`;q(ve),h(),i==null||i(n);return}const j=je(D);if(j==null?void 0:m.find(p=>p.size>j)){q(`O arquivo excede o tamanho máximo de ${D} MB`),h(),i==null||i(n);return}const Z=a?m.find(p=>!qe(p,a)):void 0;if(Z){q(`Arquivo com formato inválido: ${Z.name}`),h(),i==null||i(n);return}const A=r?[...n,...m]:m;if(typeof H=="function"){try{W(!0),await Promise.resolve(H(m)),B(A,"Upload concluído")}catch(p){const S=p instanceof Error?`Falha no carregamento do arquivo: ${p.message}`:"Falha no carregamento do arquivo";q(S),i==null||i(n)}finally{W(!1),h()}return}B(A,I(A.length,r)),h()}function ue(t){if(d||b)return;const l=n.filter((m,j)=>j!==t);if(l.length===0){ce([]);return}B(l,I(l.length,r))}const Q=z==null?void 0:z({files:n,isUploading:b,error:f?y:null,message:y,valid:T,invalid:f,disabled:d,maxFileSize:D,maxFiles:v,accept:a}),pe=Q?null:d?e.jsx(g,{variant:"warning",message:"Campo desabilitado"}):f?e.jsx(g,{variant:"error",message:y||"Arquivo inválido"}):T?e.jsx(g,{variant:"success",message:y||I(n.length,r)}):null,O=re??(r?"Selecione o(s) arquivo(s)":"Selecione o arquivo");return e.jsxs("div",{className:fe("govrs-upload",d&&"govrs-upload--disabled",T&&"govrs-upload--valid",f&&"govrs-upload--invalid",n.length>0&&"govrs-upload--has-files",k),children:[e.jsx("input",{...ne,id:E,ref:L,className:"govrs-upload__native",type:"file",name:s,multiple:r,accept:a||void 0,disabled:d||b,onChange:me,"aria-label":typeof O=="string"?O:"Envio de arquivos","aria-invalid":f||void 0,"aria-describedby":R}),e.jsxs("label",{htmlFor:E,className:"govrs-upload__trigger","aria-disabled":d||b,children:[e.jsx("span",{className:"govrs-upload__icon","aria-hidden":"true",children:e.jsx(he,{})}),e.jsx("span",{className:"govrs-upload__label",children:O})]}),b?e.jsxs("div",{className:"govrs-upload__loading","aria-live":"polite",children:[e.jsx("span",{className:"govrs-upload__spinner","aria-hidden":"true"}),e.jsx("span",{className:"govrs-upload__loading-text",children:se})]}):null,e.jsx("div",{className:"govrs-upload__live","aria-live":"polite",children:de}),e.jsx("div",{id:R,className:"govrs-upload__feedback",role:"status","aria-live":"polite",children:Q||pe}),n.length>0?e.jsx("div",{className:"govrs-upload__list","aria-live":"polite",children:n.map((t,l)=>e.jsxs("div",{className:"govrs-upload__item",children:[e.jsx("div",{className:"govrs-upload__item-content",children:t.name}),e.jsx("button",{type:"button",className:"govrs-upload__item-remove",onClick:()=>ue(l),"aria-label":`Remover ${t.name}`,disabled:d||b,children:e.jsx(ye,{})})]},`${t.name}-${t.lastModified}-${l}`))}):null]})}x.__docgenInfo={description:"",methods:[],displayName:"Upload",props:{className:{required:!1,tsType:{name:"string"},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},buttonLabel:{required:!1,tsType:{name:"ReactNode"},description:""},loadingLabel:{required:!1,tsType:{name:"ReactNode"},description:"",defaultValue:{value:"'Carregando...'",computed:!1}},maxFileSize:{required:!1,tsType:{name:"number"},description:""},maxFiles:{required:!1,tsType:{name:"number"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(files: File[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"File"}],raw:"File[]"},name:"files"}],return:{name:"void"}}},description:""},onUpload:{required:!1,tsType:{name:"signature",type:"function",raw:"(files: File[]) => void | Promise<void>",signature:{arguments:[{type:{name:"Array",elements:[{name:"File"}],raw:"File[]"},name:"files"}],return:{name:"union",raw:"void | Promise<void>",elements:[{name:"void"},{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}]}}},description:""},renderFeedback:{required:!1,tsType:{name:"signature",type:"function",raw:"(state: UploadFeedbackState) => ReactNode",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  files: File[]
  isUploading: boolean
  error: string | null
  message: string
  valid: boolean
  invalid: boolean
  disabled: boolean
  maxFileSize?: number
  maxFiles?: number
  accept?: string
}`,signature:{properties:[{key:"files",value:{name:"Array",elements:[{name:"File"}],raw:"File[]",required:!0}},{key:"isUploading",value:{name:"boolean",required:!0}},{key:"error",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"message",value:{name:"string",required:!0}},{key:"valid",value:{name:"boolean",required:!0}},{key:"invalid",value:{name:"boolean",required:!0}},{key:"disabled",value:{name:"boolean",required:!0}},{key:"maxFileSize",value:{name:"number",required:!1}},{key:"maxFiles",value:{name:"number",required:!1}},{key:"accept",value:{name:"string",required:!1}}]}},name:"state"}],return:{name:"ReactNode"}}},description:""},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};const Se=["single","multiple","custom feedback"],Fe=[{title:"Quando usar",text:"Quando a interface precisa permitir seleção local de arquivos com limites de quantidade, tamanho e tipo, sem acoplar o design system à infraestrutura de upload do produto."},{title:"Melhor exploração",text:"Use o story 'Interativo' para testar limites, multiple, accept e disabled. O story 'Em formulários (controlado)' mostra o uso recomendado hoje, baseado em onChange e estado React."},{title:"Comportamento",text:"O componente mantém uma lista interna dos arquivos aceitos, pode executar onUpload assíncrono e expõe feedback customizável por callback. Atualmente, essa lista não é serializada automaticamente por FormData nativo."}],Ce=`<Upload
  maxFiles={3}
  maxFileSize={2}
  multiple
  onChange={() => {}}
/>`,Ue=`<Upload
  maxFiles={3}
  maxFileSize={2}
  onChange={() => {}}
  renderFeedback={({ invalid, error, valid, disabled }) => {
    if (invalid) {
      return <Badges variant="error" message={error || 'Arquivo inválido'} />
    }

    if (valid) {
      return <Badges variant="success" message="Campo correto" />
    }

    if (disabled) {
      return <Badges variant="warning" message="Campo desabilitado" />
    }

    return null
  }}
/>`,we=`const [files, setFiles] = useState<File[]>([])
const [submittedValue, setSubmittedValue] = useState('Nenhum arquivo enviado')

// Observação: hoje o Upload não participa automaticamente de FormData nativo.
// O fluxo recomendado usa a lista recebida em onChange.

<div style={{ ...storyDocsStyles.previewStage, maxWidth: 520 }}>
  <form
    onSubmit={(event) => {
      event.preventDefault()
      setSubmittedValue(files.length > 0 ? files.map((file) => file.name).join(', ') : 'Nenhum arquivo enviado')
    }}
    style={{ display: 'grid', gap: 12 }}
  >
    <Upload
      name="attachments"
      maxFiles={2}
      maxFileSize={2}
      multiple
      onChange={setFiles}
    />

    <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
      <Button type="submit">Enviar arquivos</Button>
      <span style={storyDocsStyles.statText}>
        <strong>Payload:</strong> {submittedValue}
      </span>
    </div>
  </form>
</div>`,Ae={title:"Formulários/Upload",component:x,args:{maxFiles:3,maxFileSize:2,multiple:!0,disabled:!1,accept:"",buttonLabel:"Selecione o(s) arquivo(s)"},parameters:{layout:"padded",controls:{expanded:!0,sort:"requiredFirst"}}};function ke(){return e.jsx("div",{style:{maxWidth:550},children:e.jsx(x,{maxFiles:3,maxFileSize:2,multiple:!0,onChange:()=>{}})})}function De(){return e.jsx("div",{style:{maxWidth:550},children:e.jsx(x,{maxFiles:3,maxFileSize:2,onChange:()=>{},renderFeedback:({invalid:o,error:s,valid:r,disabled:a})=>o?e.jsx(g,{variant:"error",message:s||"Arquivo inválido"}):r?e.jsx(g,{variant:"success",message:"Campo correto"}):a?e.jsx(g,{variant:"warning",message:"Campo desabilitado"}):null})})}function ze(o){const[s,r]=c.useState([]);return e.jsxs("div",{style:{...u.previewStage,gap:12,padding:16,maxWidth:720},children:[e.jsx(x,{...o,onChange:a=>{r(a)}}),e.jsxs("p",{style:{...u.statText,color:"inherit"},children:[e.jsx("strong",{children:"Selecionado:"})," ",s.length>0?s.map(a=>a.name).join(", "):"—"]})]})}function ie(){const[o,s]=c.useState([]),[r,a]=c.useState("Nenhum arquivo enviado");return e.jsx("div",{style:{...u.previewStage,maxWidth:520},children:e.jsxs("form",{onSubmit:d=>{d.preventDefault(),a(o.length>0?o.map(k=>k.name).join(", "):"Nenhum arquivo enviado")},style:{display:"grid",gap:12},children:[e.jsx(x,{name:"attachments",maxFiles:2,maxFileSize:2,multiple:!0,onChange:s}),e.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",flexWrap:"wrap"},children:[e.jsx(xe,{type:"submit",children:"Enviar arquivos"}),e.jsxs("span",{style:u.statText,children:[e.jsx("strong",{children:"Payload:"})," ",r]})]})]})})}const C={name:"Documentação",parameters:{controls:{disable:!0}},render:()=>e.jsxs(be,{children:[e.jsx(ge,{eyebrow:"Documentação guiada",title:e.jsx("h3",{style:u.heroTitle,children:"Upload"}),description:e.jsxs(e.Fragment,{children:["O ",e.jsx("code",{children:"Upload"})," migra o controle visual do design system legado para um componente React puro, mantendo a seleção e o feedback sob responsabilidade do componente e deixando a estratégia de envio real sob responsabilidade do produto consumidor. Atualmente, a lista visual de arquivos aceitos não é serializada automaticamente por ",e.jsx("code",{children:"FormData"})," nativo."]}),variantTags:Se,stats:Fe}),e.jsxs(F,{title:"Estrutura base",description:"O contrato preserva os principais limites do componente legado, mas agora em TypeScript: quantidade máxima de arquivos, tamanho máximo por arquivo, múltipla seleção e filtro por accept continuam disponíveis sem acoplamento a serviços externos.",children:[e.jsxs("ul",{style:u.list,children:[e.jsxs("li",{children:[e.jsx("code",{children:"maxFiles"})," limita quantos arquivos podem ser mantidos na seleção."]}),e.jsxs("li",{children:[e.jsx("code",{children:"maxFileSize"})," recebe o tamanho máximo por arquivo em MB."]}),e.jsxs("li",{children:[e.jsx("code",{children:"multiple"})," habilita seleção acumulada de mais de um arquivo."]}),e.jsxs("li",{children:[e.jsx("code",{children:"accept"})," reaproveita o mesmo formato do atributo nativo do input file."]})]}),e.jsx(P,{title:"Seleção básica",description:"Exemplo mínimo do controle de upload com limite de quantidade e tamanho por arquivo.",code:Ce,notes:["O componente continua acessível por teclado porque o input nativo permanece focável no DOM.","Quando a seleção é válida, os arquivos passam a aparecer na lista abaixo do botão e podem ser removidos individualmente."],children:e.jsx(ke,{})})]}),e.jsx(F,{title:"Feedback customizado",description:"Assim como na origem, o consumidor pode substituir o feedback padrão por qualquer UI própria via renderFeedback, usando o estado interno do componente como entrada.",children:e.jsx(P,{title:"Renderização do feedback",description:"O preview abaixo mostra a substituição explícita do badge padrão por uma função de renderização customizada.",code:Ue,notes:["O callback recebe lista de arquivos, flags de validade, loading e a mensagem de erro atual.","Se renderFeedback não for informado, o componente usa Badges internamente para estados de sucesso, erro e disabled."],children:e.jsx(De,{})})}),e.jsxs(F,{title:"Uso em formulários",description:"O controle pode continuar dentro de formulários HTML ou React, mas atualmente o uso recomendado é controlado por onChange ou onUpload. A lista visual de arquivos aceitos não entra automaticamente no FormData nativo do formulário.",children:[e.jsxs("ul",{style:u.list,children:[e.jsxs("li",{children:["Hoje o componente não garante que ",e.jsx("code",{children:"new FormData(form)"})," inclua os arquivos exibidos na lista visual."]}),e.jsxs("li",{children:["Para montar payload local, submit controlado ou upload remoto, use a lista entregue por ",e.jsx("code",{children:"onChange"}),"."]}),e.jsxs("li",{children:["Se o produto precisar de submit HTML nativo com ",e.jsx("code",{children:"FormData"}),", o componente ainda precisa evoluir para manter o ",e.jsx("code",{children:"FileList"})," nativo sincronizado."]})]}),e.jsx(P,{title:"Submit controlado",description:"Exemplo simples de integração com formulário, reaproveitando a lista atual de arquivos selecionados como payload local após o submit, sem depender de FormData nativo.",code:we,notes:["Este exemplo usa a lista recebida em onChange porque o componente ainda não participa automaticamente de FormData nativo.","O design system não faz upload automático nem serialização nativa de FormData por conta própria.","Se a aplicação precisar enviar os arquivos para um backend, esse passo deve acontecer ao redor de onChange ou onUpload."],children:e.jsx(ie,{})})]}),e.jsx(F,{title:"Limites e responsabilidades",description:"A migração preserva o comportamento útil do componente original, mas elimina qualquer suposição sobre CMS, endpoint, autenticação ou backend de armazenamento.",children:e.jsxs("ul",{style:u.list,children:[e.jsxs("li",{children:[e.jsx("code",{children:"onUpload"})," é opcional e pode ser assíncrono, mas o design system não decide para onde o arquivo será enviado."]}),e.jsxs("li",{children:[e.jsx("code",{children:"onChange"})," recebe a lista atual de arquivos aceitos depois de cada interação relevante."]}),e.jsx("li",{children:"O componente valida limites básicos no cliente, mas não substitui validação do servidor."}),e.jsx("li",{children:"Para fluxos grandes de upload em lote, progresso granular ou drag and drop, vale tratar isso como evolução futura separada."})]})})]})},U={name:"Interativo",argTypes:{modoContraste:{control:"boolean",description:"Visualiza o componente no modo de alto contraste.",table:{category:"Acessibilidade"}},maxFiles:{control:"number",description:"Quantidade máxima de arquivos permitidos.",table:{category:"Validação"}},maxFileSize:{control:"number",description:"Tamanho máximo por arquivo em MB.",table:{category:"Validação"}},multiple:{control:"boolean",description:"Permite selecionar múltiplos arquivos.",table:{category:"Comportamento"}},disabled:{control:"boolean",description:"Desabilita a interação com o controle.",table:{category:"Estado"}},accept:{control:"text",description:"Filtro de tipos aceitos no formato do atributo accept nativo.",table:{category:"Validação"}},buttonLabel:{control:"text",description:"Texto visível do botão de seleção.",table:{category:"Conteúdo"}},loadingLabel:{control:"text",description:"Texto exibido durante onUpload assíncrono.",table:{category:"Conteúdo"}},onChange:{table:{disable:!0}},onUpload:{table:{disable:!0}},renderFeedback:{table:{disable:!0}}},render:o=>e.jsx(ze,{...o})},w={name:"Em formulários (controlado)",parameters:{controls:{disable:!0}},render:()=>e.jsx(ie,{})};var G,J,K;C.parameters={...C.parameters,docs:{...(G=C.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Documentação',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <DocsStoryLayout>
      <DocsHero eyebrow="Documentação guiada" title={<h3 style={storyDocsStyles.heroTitle}>Upload</h3>} description={<>
            O <code>Upload</code> migra o controle visual do design system legado para um componente React puro,
            mantendo a seleção e o feedback sob responsabilidade do componente e deixando a estratégia de envio real sob responsabilidade do produto consumidor.
            Atualmente, a lista visual de arquivos aceitos não é serializada automaticamente por <code>FormData</code> nativo.
          </>} variantTags={docsVariantTags} stats={docsHeroStats} />

      <SectionCard title="Estrutura base" description="O contrato preserva os principais limites do componente legado, mas agora em TypeScript: quantidade máxima de arquivos, tamanho máximo por arquivo, múltipla seleção e filtro por accept continuam disponíveis sem acoplamento a serviços externos.">
        <ul style={storyDocsStyles.list}>
          <li><code>maxFiles</code> limita quantos arquivos podem ser mantidos na seleção.</li>
          <li><code>maxFileSize</code> recebe o tamanho máximo por arquivo em MB.</li>
          <li><code>multiple</code> habilita seleção acumulada de mais de um arquivo.</li>
          <li><code>accept</code> reaproveita o mesmo formato do atributo nativo do input file.</li>
        </ul>

        <SandboxExample title="Seleção básica" description="Exemplo mínimo do controle de upload com limite de quantidade e tamanho por arquivo." code={basicExampleCode} notes={['O componente continua acessível por teclado porque o input nativo permanece focável no DOM.', 'Quando a seleção é válida, os arquivos passam a aparecer na lista abaixo do botão e podem ser removidos individualmente.']}>
          <UploadBasicPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="Feedback customizado" description="Assim como na origem, o consumidor pode substituir o feedback padrão por qualquer UI própria via renderFeedback, usando o estado interno do componente como entrada.">
        <SandboxExample title="Renderização do feedback" description="O preview abaixo mostra a substituição explícita do badge padrão por uma função de renderização customizada." code={feedbackExampleCode} notes={['O callback recebe lista de arquivos, flags de validade, loading e a mensagem de erro atual.', 'Se renderFeedback não for informado, o componente usa Badges internamente para estados de sucesso, erro e disabled.']}>
          <UploadFeedbackPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="Uso em formulários" description="O controle pode continuar dentro de formulários HTML ou React, mas atualmente o uso recomendado é controlado por onChange ou onUpload. A lista visual de arquivos aceitos não entra automaticamente no FormData nativo do formulário.">
        <ul style={storyDocsStyles.list}>
          <li>Hoje o componente não garante que <code>new FormData(form)</code> inclua os arquivos exibidos na lista visual.</li>
          <li>Para montar payload local, submit controlado ou upload remoto, use a lista entregue por <code>onChange</code>.</li>
          <li>Se o produto precisar de submit HTML nativo com <code>FormData</code>, o componente ainda precisa evoluir para manter o <code>FileList</code> nativo sincronizado.</li>
        </ul>

        <SandboxExample title="Submit controlado" description="Exemplo simples de integração com formulário, reaproveitando a lista atual de arquivos selecionados como payload local após o submit, sem depender de FormData nativo." code={formExampleCode} notes={['Este exemplo usa a lista recebida em onChange porque o componente ainda não participa automaticamente de FormData nativo.', 'O design system não faz upload automático nem serialização nativa de FormData por conta própria.', 'Se a aplicação precisar enviar os arquivos para um backend, esse passo deve acontecer ao redor de onChange ou onUpload.']}>
          <UploadFormPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="Limites e responsabilidades" description="A migração preserva o comportamento útil do componente original, mas elimina qualquer suposição sobre CMS, endpoint, autenticação ou backend de armazenamento.">
        <ul style={storyDocsStyles.list}>
          <li><code>onUpload</code> é opcional e pode ser assíncrono, mas o design system não decide para onde o arquivo será enviado.</li>
          <li><code>onChange</code> recebe a lista atual de arquivos aceitos depois de cada interação relevante.</li>
          <li>O componente valida limites básicos no cliente, mas não substitui validação do servidor.</li>
          <li>Para fluxos grandes de upload em lote, progresso granular ou drag and drop, vale tratar isso como evolução futura separada.</li>
        </ul>
      </SectionCard>
    </DocsStoryLayout>
}`,...(K=(J=C.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var X,Y,ee;U.parameters={...U.parameters,docs:{...(X=U.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'Interativo',
  argTypes: {
    modoContraste: {
      control: 'boolean',
      description: 'Visualiza o componente no modo de alto contraste.',
      table: {
        category: 'Acessibilidade'
      }
    },
    maxFiles: {
      control: 'number',
      description: 'Quantidade máxima de arquivos permitidos.',
      table: {
        category: 'Validação'
      }
    },
    maxFileSize: {
      control: 'number',
      description: 'Tamanho máximo por arquivo em MB.',
      table: {
        category: 'Validação'
      }
    },
    multiple: {
      control: 'boolean',
      description: 'Permite selecionar múltiplos arquivos.',
      table: {
        category: 'Comportamento'
      }
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita a interação com o controle.',
      table: {
        category: 'Estado'
      }
    },
    accept: {
      control: 'text',
      description: 'Filtro de tipos aceitos no formato do atributo accept nativo.',
      table: {
        category: 'Validação'
      }
    },
    buttonLabel: {
      control: 'text',
      description: 'Texto visível do botão de seleção.',
      table: {
        category: 'Conteúdo'
      }
    },
    loadingLabel: {
      control: 'text',
      description: 'Texto exibido durante onUpload assíncrono.',
      table: {
        category: 'Conteúdo'
      }
    },
    onChange: {
      table: {
        disable: true
      }
    },
    onUpload: {
      table: {
        disable: true
      }
    },
    renderFeedback: {
      table: {
        disable: true
      }
    }
  },
  render: args => <UploadInteractivePreview {...args} />
}`,...(ee=(Y=U.parameters)==null?void 0:Y.docs)==null?void 0:ee.source}}};var oe,ae,te;w.parameters={...w.parameters,docs:{...(oe=w.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: 'Em formulários (controlado)',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <UploadFormPreview />
}`,...(te=(ae=w.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};const Pe=["UploadDocumentacao","UploadInterativo","UploadEmFormularios"];export{C as UploadDocumentacao,w as UploadEmFormularios,U as UploadInterativo,Pe as __namedExportsOrder,Ae as default};
