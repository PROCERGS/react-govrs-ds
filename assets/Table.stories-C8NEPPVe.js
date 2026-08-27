import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as p}from"./index-DyTKwKRb.js";import{D as W,S as X,s as h,a as P,c as S,b as E}from"./storyDocs-CoQtGjOG.js";import{B as Ve}from"./Button-DnfRrOli.js";import{P as k}from"./Pagination-inYhgkAI.js";/* empty css              */import"./_commonjsHelpers-Cpj98o6Y.js";import"./breakpoints-LdF9JrQK.js";const Te=[20,50,100];function $(a){return a.render==null}function ue(a,r){return!Number.isFinite(a)||a==null?r:Math.max(1,Math.floor(a))}function Oe(a,r){return!Number.isFinite(a)||a==null?r:Math.max(0,Math.floor(a))}function Be(a,r){if(!a)return null;const o=r.find(s=>s.key===a.key);return!o||!$(o)?null:a}function J({columns:a,lockedSearchColumn:r,query:o}){var m;const s=r??((m=a[0])==null?void 0:m.key)??null,u=o==null?void 0:o.searchColumn,c=u!=null&&a.some(d=>d.key===u);return{search:typeof(o==null?void 0:o.search)=="string"?o.search:"",searchColumn:r??(c?u:s),sort:Be(o==null?void 0:o.sort,a),page:ue(o==null?void 0:o.page,1),pageSize:ue(o==null?void 0:o.pageSize,Te[0])}}function He(a){return a.variant==="irregular"}function Ie(a){return typeof a!="string"?!1:/^\d{4}-\d{2}-\d{2}(T|$)/.test(a)&&!Number.isNaN(Date.parse(a))}function Q(a,r){return a.id!==void 0&&a.id!==null?String(a.id):`__idx_${r.indexOf(a)}`}function $e(){return e.jsx("svg",{width:"28",height:"32",viewBox:"0 0 28 32",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:e.jsx("path",{d:"M21.6943 21.8438C21.9755 22.1562 21.9755 22.625 21.663 22.9062L20.788 23.7812C20.5068 24.0938 20.038 24.0938 19.7255 23.7812L16.6318 20.6875C16.4755 20.5312 16.413 20.3438 16.413 20.1562V19.625C15.288 20.5 13.913 21 12.413 21C8.81929 21 5.91304 18.0938 5.91304 14.5C5.91304 10.9375 8.81929 8 12.413 8C15.9755 8 18.913 10.9375 18.913 14.5C18.913 16.0312 18.3818 17.4062 17.538 18.5H18.038C18.2255 18.5 18.413 18.5938 18.5693 18.7188L21.6943 21.8438ZM12.413 18.5C14.6005 18.5 16.413 16.7188 16.413 14.5C16.413 12.3125 14.6005 10.5 12.413 10.5C10.1943 10.5 8.41304 12.3125 8.41304 14.5C8.41304 16.7188 10.1943 18.5 12.413 18.5Z",fill:"currentColor"})})}function Ue(){return e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:e.jsx("path",{d:"M11 1L1 11M1 1l10 10",stroke:"currentColor",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"})})}function Ze(){return e.jsx("svg",{width:"28",height:"32",viewBox:"0 0 28 32",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:e.jsx("path",{d:"M10.1943 17H17.6318C18.288 17 18.6318 17.8125 18.163 18.2812L14.4443 22C14.1318 22.3125 13.663 22.3125 13.3818 22L9.66304 18.2812C9.16304 17.8125 9.50679 17 10.1943 17ZM18.163 13.7188C18.6318 14.2188 18.288 15 17.6318 15H10.1943C9.50679 15 9.16304 14.2188 9.66304 13.7188L13.3818 10C13.663 9.71875 14.1318 9.71875 14.4443 10L18.163 13.7188Z",fill:"currentColor"})})}function Ke(a,r){const o=r.slice(0,20);return a.reduce((s,u)=>{const c={date:0,number:0,string:0};return o.forEach(m=>{const d=m[u.key],C=typeof d=="string"?d.trim():null;if(Ie(d)){c.date+=1;return}if(d!=null&&(typeof d=="number"||C!=null&&/^-?\d+(\.\d+)?$/.test(C))){c.number+=1;return}c.string+=1}),s[u.key]=c.date>c.number&&c.date>c.string?"date":c.number>c.string?"number":"string",s},{})}function Ge(a,r,o){const s=["govrs-table","govrs-table--irregular",o].filter(Boolean).join(" ");return e.jsxs("div",{id:r,className:s,children:[a.title?e.jsx("div",{className:"govrs-table__header",children:e.jsx("div",{className:"govrs-table__title",children:a.title})}):null,e.jsx("div",{className:"govrs-table__wrapper",children:a.children})]})}function y(a){const r=p.useId().replace(/:/g,""),o=a.id??`govrs-table-${r}`;return He(a)?Ge(a,o,a.className):e.jsx(Je,{...a,tableId:o})}function Je(a){var ie;const{tableId:r,title:o,columns:s,items:u=[],showCheckbox:c=!1,searchable:m=!0,searchColumn:d=null,onSelectionChange:C,className:N}=a,ee=p.useRef(null),Z=m&&!!o,ae=a.queryMode??"local",A=a.queryMode==="external"?a.query:null,te=a.queryMode==="external"?a.totalItems:void 0,oe=a.queryMode==="external"?a.onQueryChange:null,[re,ke]=p.useState(()=>J({columns:s,lockedSearchColumn:d})),i=p.useMemo(()=>J({columns:s,lockedSearchColumn:d,query:A??re}),[s,d,A,re]),Ne=d??i.searchColumn??((ie=s[0])==null?void 0:ie.key)??"",[K,Ae]=p.useState(()=>i.search.trim()),[T,se]=p.useState(()=>!!((A==null?void 0:A.search)??"")),[_,De]=p.useState(new Set),g=u;p.useEffect(()=>{var t;T&&((t=ee.current)==null||t.focus())},[T]),p.useEffect(()=>{const t=window.setTimeout(()=>Ae(i.search.trim()),250);return()=>window.clearTimeout(t)},[i.search]);const ne=p.useMemo(()=>Ke(s,g),[s,g]),D=(t,n)=>{const l=J({columns:s,lockedSearchColumn:d,query:{...i,...t}});if(oe){oe({query:l,previousQuery:i,reason:n});return}ke(l)},I=p.useMemo(()=>{if(ae==="external"){const x=Oe(te,g.length),f=Math.max(1,Math.ceil(x/i.pageSize)),w=Math.min(i.page,f),z=x>0?(w-1)*i.pageSize:0,q=x>0?Math.min(x,z+g.length):0;return{items:g,totalFiltered:x,totalPages:f,startIndex:z,endIndex:q,currentPage:w}}const t=Z&&K?K.toLowerCase():"",n=d??i.searchColumn,l=t?g.filter(x=>n?String(x[n]??"").toLowerCase().includes(t):s.some(f=>String(x[f.key]??"").toLowerCase().includes(t))):g,b=l.length,v=i.sort?s.find(x=>{var f;return x.key===((f=i.sort)==null?void 0:f.key)&&$(x)}):null,j=i.sort&&v?i.sort:null,L=j?[...l].sort((x,f)=>{const w=j.direction==="desc"?-1:1,z=ne[j.key]??"string",q=x[j.key],G=f[j.key];return z==="number"?(Number(q)-Number(G))*w:z==="date"?(Date.parse(String(q))-Date.parse(String(G)))*w:String(q??"").localeCompare(String(G??""))*w}):l,F=Math.max(1,Math.ceil(b/i.pageSize)),ce=Math.min(i.page,F),R=(ce-1)*i.pageSize,de=L.slice(R,R+i.pageSize),Re=b>0?Math.min(b,R+de.length):0;return{items:de,totalFiltered:b,totalPages:F,startIndex:R,endIndex:Re,currentPage:ce}},[g,K,Z,d,i,s,ne,ae,te]),M=I.items,ze=M.length>0&&M.every(t=>_.has(Q(t,g))),qe=I.currentPage,Qe=["govrs-table","govrs-table--default",N].filter(Boolean).join(" "),Ee=t=>{D({page:t},"page")},Pe=t=>{D({page:1,pageSize:t},"pageSize")},le=t=>{if(_.size===t.size){let l=!0;if(t.forEach(b=>{_.has(b)||(l=!1)}),l)return}const n=new Set(t);De(n),C==null||C(g.filter(l=>n.has(Q(l,g))))},Me=()=>{const t=new Set(M.map(l=>Q(l,g))),n=new Set(_);Array.from(t).every(l=>_.has(l))?t.forEach(l=>n.delete(l)):t.forEach(l=>n.add(l)),le(n)},Le=t=>{const n=new Set(_),l=Q(t,g);n.has(l)?n.delete(l):n.add(l),le(n)},Fe=t=>{var v,j,L;if(!$(t))return;const n=t.key,l=((v=i.sort)==null?void 0:v.key)===n;let b=null;if(l)((L=i.sort)==null?void 0:L.direction)==="asc"&&(b={key:n,direction:"desc"});else{const F=(j=g[0])==null?void 0:j[n];b={key:n,direction:Ie(F)?"desc":"asc"}}D({sort:b,page:1},"sort")};return e.jsxs("div",{id:r,className:Qe,children:[o?e.jsxs("div",{className:"govrs-table__header",children:[e.jsx("div",{className:"govrs-table__title",children:o}),Z?e.jsxs("div",{className:"govrs-table__search",children:[T?null:e.jsx("button",{type:"button",className:"govrs-table__icon-button","aria-expanded":T,"aria-label":T?"Fechar pesquisa":"Abrir pesquisa",onClick:()=>se(t=>!t),children:e.jsx($e,{})}),e.jsxs("div",{className:["govrs-table__search-controls",T?"govrs-table__search-controls--open":void 0].filter(Boolean).join(" "),children:[d?null:e.jsx("select",{className:"govrs-table__select",value:Ne,onChange:t=>{const n=t.target.value;D({searchColumn:n,page:1},"searchColumn")},"aria-label":"Coluna de pesquisa",children:s.map(t=>e.jsx("option",{value:t.key,children:typeof t.label=="string"?t.label:t.key},t.key))}),e.jsx("input",{ref:ee,type:"search",className:"govrs-table__input",placeholder:"Pesquisar...",value:i.search,onChange:t=>{const n=t.target.value;D({search:n,page:1},"search")},"aria-label":"Pesquisar na tabela"}),e.jsx("button",{type:"button",className:"govrs-table__icon-button govrs-table__icon-button--close","aria-label":"Fechar pesquisa",onClick:()=>se(!1),children:e.jsx(Ue,{})})]})]}):null]}):null,e.jsx("div",{className:"govrs-table__wrapper",children:e.jsxs("table",{className:"govrs-table__table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[c?e.jsx("th",{className:"govrs-table__checkbox-col",children:e.jsx("input",{type:"checkbox","aria-label":"Selecionar todas as linhas visíveis",onChange:Me,checked:ze})}):null,s.map(t=>{var v,j;const n=$(t),l=n&&((v=i.sort)==null?void 0:v.key)===t.key,b=l?((j=i.sort)==null?void 0:j.direction)==="asc"?"ascending":"descending":"none";return e.jsx("th",{className:"govrs-table__head-cell","aria-sort":n?b:void 0,children:n?e.jsxs("button",{type:"button",className:["govrs-table__head-button",l?"govrs-table__head-button--sorted":void 0].filter(Boolean).join(" "),onClick:()=>Fe(t),children:[e.jsx("span",{className:"govrs-table__head-label",children:t.label}),e.jsx("span",{className:["govrs-table__sort-icon",l?void 0:"govrs-table__sort-icon--hidden"].filter(Boolean).join(" "),"aria-hidden":"true",children:e.jsx(Ze,{})})]}):e.jsx("div",{className:"govrs-table__head-content",children:e.jsx("span",{className:"govrs-table__head-label",children:t.label})})},t.key)})]})}),e.jsx("tbody",{children:M.map((t,n)=>{const l=Q(t,g);return e.jsxs("tr",{className:"govrs-table__row",children:[c?e.jsx("td",{className:"govrs-table__checkbox-col",children:e.jsx("input",{type:"checkbox","aria-label":`Selecionar linha ${I.startIndex+n+1}`,checked:_.has(l),onChange:()=>Le(t)})}):null,s.map(b=>{const v=t[b.key];return e.jsx("td",{className:"govrs-table__cell",children:b.render?b.render({value:v,item:t,rowIndex:I.startIndex+n}):v??""},b.key)})]},l)})})]})}),e.jsxs(k,{page:qe,pageSize:i.pageSize,totalItems:I.totalFiltered,pageSizeOptions:[...Te],onPageChange:Ee,onPageSizeChange:Pe,className:"govrs-table__pagination",children:[e.jsxs(k.Group,{align:"start",children:[e.jsx(k.PageSize,{}),e.jsx(k.Range,{})]}),I.totalFiltered>i.pageSize?e.jsx(k.Group,{align:"end",children:e.jsx(k.Pages,{variant:"jump"})}):null]})]})}y.__docgenInfo={description:"",methods:[],displayName:"Table"};const We=["default","local","seleção"],Xe=[{title:"Quando usar",text:"Quando a aplicação já possui todos os dados em memória e precisa que busca, ordenação e paginação sejam feitas localmente após entregar a lista completa de items."},{title:"Melhor exploração",text:"Use esta documentação para entender a variante default no modo local e o story 'Interativo' para validar a anatomia base da tabela."},{title:"Comportamento",text:"A própria tabela filtra, ordena e pagina os items recebidos, iniciando sempre com os defaults internos de página, tamanho de página, busca e ordenação."}],Ye=["default","external","controlado"],ea=[{title:"Quando usar",text:"Quando a lista de items depende de backend para paginação ou ordenação, mas a UI da tabela deve continuar padronizada dentro do design system."},{title:"Melhor exploração",text:"Leia este story como contrato de integração: a Table emite a próxima query e o consumidor controla a busca, os items e o total."},{title:"Comportamento",text:"No modo external, a Table renderiza os items recebidos e chama onQueryChange a cada interação."}],aa=["irregular","semântica","html"],ta=[{title:"Quando usar",text:"Quando a estrutura da tabela não é regular e precisa de rowSpan, colSpan, agrupamentos visuais ou cabeçalhos com múltiplos níveis."},{title:"Melhor exploração",text:"Use este story para entender a marcação recomendada e as classes utilitárias que preservam o visual do componente."},{title:"Comportamento",text:"A variante irregular não aplica busca, ordenação ou paginação automática. Ela só fornece o wrapper visual e delega a semântica da tabela ao consumidor."}],Y=[{key:"name",label:"Nome"},{key:"amount",label:"Valor"},{key:"date",label:"Data"}],oa=[{key:"nome",label:"Nome"},{key:"status",label:"Status"},{key:"criadoEm",label:"Criado em"}],ra=[{key:"name",label:"Nome"},{key:"amount",label:"Valor"},{key:"actionLabel",label:"Ação",render:({value:a,item:r})=>e.jsx(Ve,{size:"small",variant:"secondary","aria-label":`Abrir detalhes de ${String(r.name??"item")}`,children:a??"Detalhes"})}],sa=`type PaymentRow = {
  id: string
  name: string
  amount: number
  date: string
}

const columns: Table.Column<PaymentRow>[] = [
  { key: 'name', label: 'Nome' },
  { key: 'amount', label: 'Valor' },
  { key: 'date', label: 'Data' },
]

<Table
  title="Lista de pagamentos"
  columns={columns}
  items={items}
  searchable
/>
`,na=`type PaymentRow = {
  id: string
  name: string
  amount: number
  date: string
}

const [selectedItems, setSelectedItems] = useState<PaymentRow[]>([])

<Table
  title="Com seleção"
  columns={columns}
  items={items}
  searchable
  showCheckbox
  onSelectionChange={setSelectedItems}
/>
`,la=`type FormularioRow = {
  id: string
  nome: string
  status: string
  criadoEm: string
}

const columns: Table.Column<FormularioRow>[] = [
  { key: 'nome', label: 'Nome' },
  { key: 'status', label: 'Status' },
  { key: 'criadoEm', label: 'Criado em' },
]

const initialQuery: Table.Query<FormularioRow> = {
  search: '',
  searchColumn: 'nome',
  sort: null,
  page: 1,
  pageSize: 20,
}

function FormulariosTable() {
  const [query, setQuery] = useState<Table.Query<FormularioRow>>(initialQuery)
  const [items, setItems] = useState<FormularioRow[]>([])
  const [totalItems, setTotalItems] = useState(0)

  async function loadFormularios(nextQuery: Table.Query<FormularioRow>) {
    setQuery(nextQuery)

    const { items: nextItems, totalItems: nextTotalItems } = await formulariosService.list(nextQuery)

    setItems(nextItems)
    setTotalItems(nextTotalItems)
  }

  useEffect(() => {
    void loadFormularios(initialQuery)
  }, [])

  return (
    <Table
      title="Formulários"
      columns={columns}
      items={items}
      searchable
      queryMode="external"
      query={query}
      totalItems={totalItems}
      onQueryChange={({ query: nextQuery }) => {
        void loadFormularios(nextQuery)
      }}
    />
  )
}`,ia=`type PaymentRow = {
  id: string
  name: string
  amount: number
  date: string
  actionLabel?: string
}

const columns: Table.Column<PaymentRow>[] = [
  { key: 'name', label: 'Nome' },
  { key: 'amount', label: 'Valor' },
  {
    key: 'actionLabel',
    label: 'Ação',
    render: ({ value, item }) => (
      <Button
        size="small"
        variant="secondary"
        aria-label={\`Abrir detalhes de \${item.name}\`}
      >
        {value}
      </Button>
    ),
  },
]

<Table
  title="Lista com ações"
  columns={columns}
  items={items}
/>
`,ca=`<Table variant="irregular" title="Tabela irregular">
  <table>
    <thead>
      <tr>
        <th className="govrs-table__border-bottom" scope="col">Poster</th>
        <th className="govrs-table__border-bottom govrs-table__border-left" scope="col">Cor</th>
        <th
          className="govrs-table__border-bottom govrs-table__border-left"
          colSpan={3}
          scope="colgroup"
        >
          Tamanhos disponíveis
        </th>
      </tr>
      <tr>
        <th className="govrs-table__border-bottom" scope="col">&nbsp;</th>
        <th className="govrs-table__border-bottom govrs-table__border-left" scope="col">&nbsp;</th>
        <th className="govrs-table__border-bottom" scope="col">A2</th>
        <th className="govrs-table__border-bottom" scope="col">A3</th>
        <th className="govrs-table__border-bottom" scope="col">A4</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th className="govrs-table__border-right" rowSpan={3} scope="rowgroup">Zodiac</th>
        <td>Full color</td>
        <td>A2</td>
        <td>A3</td>
        <td>A4</td>
      </tr>
    </tbody>
  </table>
</Table>
`;function U(a=200){const r=new Date("2026-05-20T12:00:00.000Z");return Array.from({length:a},(o,s)=>{const u=`Item ${String(s+1).padStart(4,"0")}`,c=Number((s*97%1e4+s/1e3).toFixed(2)),m=new Date(r.getTime()-s*24*60*60*1e3);return{id:`row-${s+1}`,name:u,amount:c,date:m.toISOString().slice(0,10)}})}function da(a=6){return U(a).map((r,o)=>({...r,actionLabel:o%2===0?"Detalhes":"Editar"}))}function ua(a=40){const r=new Date("2026-05-20T12:00:00.000Z"),o=["Rascunho","Publicado","Arquivado"];return Array.from({length:a},(s,u)=>{const c=new Date(r.getTime()-u*24*60*60*1e3);return{id:`form-${u+1}`,nome:`Formulario ${String(u+1).padStart(3,"0")}`,status:o[u%o.length],criadoEm:c.toISOString().slice(0,10)}})}function ma(a,r){if(!r)return a;const o=[...a],s=r.direction==="desc"?-1:1;return o.sort((u,c)=>{const m=u[r.key],d=c[r.key];return typeof m=="number"||typeof d=="number"?(Number(m)-Number(d))*s:typeof m=="string"&&typeof d=="string"&&/^\d{4}-\d{2}-\d{2}(T|$)/.test(m)&&/^\d{4}-\d{2}-\d{2}(T|$)/.test(d)?(Date.parse(m)-Date.parse(d))*s:String(m??"").localeCompare(String(d??""))*s}),o}function me(a,r){const o=r.search.trim().toLowerCase(),s=o?a.filter(m=>String(m[r.searchColumn??"name"]??"").toLowerCase().includes(o)):a,u=ma(s,r.sort),c=(r.page-1)*r.pageSize;return{items:u.slice(c,c+r.pageSize),totalItems:u.length}}function we(){return e.jsxs("table",{children:[e.jsxs("thead",{children:[e.jsxs("tr",{children:[e.jsx("th",{className:"govrs-table__border-bottom",scope:"col",children:"Poster"}),e.jsx("th",{className:"govrs-table__border-bottom govrs-table__border-left",scope:"col",children:"Cor"}),e.jsx("th",{className:"govrs-table__border-bottom govrs-table__border-left",colSpan:3,scope:"colgroup",children:"Tamanhos disponíveis"})]}),e.jsxs("tr",{children:[e.jsx("th",{className:"govrs-table__border-bottom",scope:"col",children:" "}),e.jsx("th",{className:"govrs-table__border-bottom govrs-table__border-left",scope:"col",children:" "}),e.jsx("th",{className:"govrs-table__border-bottom",scope:"col",children:"A2"}),e.jsx("th",{className:"govrs-table__border-bottom",scope:"col",children:"A3"}),e.jsx("th",{className:"govrs-table__border-bottom",scope:"col",children:"A4"})]})]}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{className:"govrs-table__border-right",rowSpan:3,scope:"rowgroup",children:"Zodiac"}),e.jsx("td",{children:"Full color"}),e.jsx("td",{children:"A2"}),e.jsx("td",{children:"A3"}),e.jsx("td",{children:"A4"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Black and white"}),e.jsx("td",{children:"A1"}),e.jsx("td",{children:"A2"}),e.jsx("td",{children:"A3"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Sepia"}),e.jsx("td",{children:"A3"}),e.jsx("td",{children:"A4"}),e.jsx("td",{children:"A5"})]})]}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{className:"govrs-table__border-right",rowSpan:2,scope:"rowgroup",children:"Angels"}),e.jsx("td",{children:"Black and white"}),e.jsx("td",{children:"A1"}),e.jsx("td",{children:"A3"}),e.jsx("td",{children:"A4"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Sepia"}),e.jsx("td",{children:"A2"}),e.jsx("td",{children:"A3"}),e.jsx("td",{children:"A5"})]})]})]})}function ha(){return e.jsx(y,{title:"Lista de exemplo",columns:Y,items:U(6),searchable:!0})}function ba(){const[a,r]=p.useState([]);return e.jsxs("div",{style:{display:"grid",gap:16},children:[e.jsx(y,{title:"Com seleção",columns:Y,items:U(12),searchable:!0,showCheckbox:!0,onSelectionChange:r}),e.jsxs("p",{style:h.statText,children:[e.jsx("strong",{children:"Selecionados:"})," ",a.length>0?a.map(o=>o.name).join(", "):"Nenhum item selecionado"]})]})}function pa(){const[a]=p.useState(()=>ua(40)),r={search:"",searchColumn:"nome",sort:null,page:1,pageSize:20},[o,s]=p.useState(r),[u,c]=p.useState(()=>me(a,r)),[m,d]=p.useState(null),C=N=>{d(N),s(N.query),c(me(a,N.query))};return e.jsxs("div",{style:{display:"grid",gap:16},children:[e.jsx(y,{title:"Formulários remotos",columns:oa,items:u.items,searchable:!0,queryMode:"external",query:o,totalItems:u.totalItems,onQueryChange:C}),e.jsxs("p",{style:h.statText,children:[e.jsx("strong",{children:"Última query:"})," ",JSON.stringify(m)]})]})}function ga(){return e.jsxs(W,{children:[e.jsx(X,{eyebrow:"Documentação guiada",title:e.jsx("h3",{style:h.heroTitle,children:"Table Default"}),description:e.jsxs(e.Fragment,{children:["Esta documentação cobre a variante ",e.jsx("code",{children:"default"})," no modo local. Aqui a própria ",e.jsx("code",{children:"Table"})," faz busca, ordenação e paginação sobre os ",e.jsx("code",{children:"items"})," recebidos, mantendo o contrato simples para o consumidor do design system."]}),variantTags:We,stats:Xe}),e.jsxs(P,{title:"Contrato da variante default",description:"A variante default recebe colunas tipadas e uma lista de itens. No uso local, basta passar items: a Table aplica internamente os defaults de busca, ordenação e paginação.",children:[e.jsxs("div",{style:h.cardGrid,children:[e.jsx(S,{label:"Props principais",children:e.jsxs("ul",{style:h.list,children:[e.jsxs("li",{children:[e.jsx("code",{children:"columns"})," define a ordem, a chave de leitura e o rótulo de cada coluna."]}),e.jsxs("li",{children:[e.jsx("code",{children:"items"})," fornece as linhas e pode incluir ",e.jsx("code",{children:"id"})," para estabilizar seleção e paginação."]}),e.jsxs("li",{children:[e.jsx("code",{children:"searchable"})," ativa a busca no cabeçalho."]}),e.jsxs("li",{children:[e.jsx("code",{children:"searchColumn"})," fixa a busca em uma coluna específica e remove o seletor de coluna."]}),e.jsx("li",{children:"O modo local sempre inicia na página 1, com 20 itens por página, sem busca e sem ordenação ativa."}),e.jsxs("li",{children:[e.jsx("code",{children:"render"})," permite enriquecer células específicas sem abrir mão da estrutura padrão da tabela."]})]})}),e.jsx(S,{label:"O que já vem pronto",children:e.jsxs("ul",{style:h.list,children:[e.jsx("li",{children:"O clique no cabeçalho alterna entre ascendente, descendente e sem ordenação."}),e.jsx("li",{children:"Números e datas ISO são detectados automaticamente para ordenação local."}),e.jsx("li",{children:"O seletor de quantidade por página e a navegação entre páginas já funcionam sem callbacks adicionais."}),e.jsxs("li",{children:["Não existe ",e.jsx("code",{children:"onPageChange"})," público no modo local porque a própria Table já controla essa interação."]})]})})]}),e.jsx(E,{title:"Paginação e ordenação local",description:"Exemplo base da variante default em modo local, com ordenação e paginação já habilitadas pela própria Table.",code:sa,notes:["No modo local, a Table usa defaults internos fixos e não expõe query inicial por prop.",'Sem queryMode="external", a própria Table filtra, ordena e pagina os items recebidos.',"Esse é o fluxo mais simples para aplicações que já carregaram toda a lista na memória."],children:e.jsx(ha,{})})]}),e.jsxs(P,{title:"Recursos complementares",description:"A mesma variante default também cobre seleção de linhas e células customizadas, mantendo a mesma experiência base da tabela.",children:[e.jsx(E,{title:"Seleção de linhas",description:"Quando showCheckbox está ativo, a Table adiciona uma coluna de seleção no início e devolve os itens marcados via onSelectionChange.",code:na,notes:["O checkbox do cabeçalho seleciona ou limpa apenas as linhas visíveis na página atual.","O callback recebe os itens completos; não é necessário mapear ids manualmente antes do retorno."],children:e.jsx(ba,{})}),e.jsx(E,{title:"Células customizadas",description:"Use render quando uma coluna precisa exibir ações, status ou conteúdo composto sem migrar para a variante irregular.",code:ia,notes:["A busca continua usando o valor bruto do item, não o JSX retornado por render.","Colunas com render deixam de ser ordenáveis para evitar ordenação por conteúdo visual composto.","Esse formato mantém a tabela intuitiva e reaproveitável dentro do design system."],children:e.jsx(va,{})})]})]})}function xa(){return e.jsxs(W,{children:[e.jsx(X,{eyebrow:"Documentação guiada",title:e.jsx("h3",{style:h.heroTitle,children:"Table External"}),description:e.jsxs(e.Fragment,{children:["Esta documentação cobre a variante ",e.jsx("code",{children:"default"})," no modo ",e.jsx("code",{children:"external"}),". Aqui a ",e.jsx("code",{children:"Table"})," mantém a UI padronizada e emite a próxima query em ",e.jsx("code",{children:"onQueryChange"}),", enquanto a aplicação consumidora controla a busca remota, os ",e.jsx("code",{children:"items"})," e o ",e.jsx("code",{children:"totalItems"}),"."]}),variantTags:Ye,stats:ea}),e.jsxs(P,{title:"Contrato de integração externa",description:"O objetivo do design system aqui é separar responsabilidades: a Table calcula o próximo estado de interação, mas quem executa a consulta e devolve a lista atualizada é sempre a aplicação consumidora.",children:[e.jsxs("div",{style:h.cardGrid,children:[e.jsx(S,{label:"O que a Table já faz",children:e.jsxs("ul",{style:h.list,children:[e.jsx("li",{children:"Abre e fecha a busca, troca a coluna ativa, alterna a ordenação e reseta a página quando necessário."}),e.jsx("li",{children:"Controla internamente os cliques de paginação e o seletor de quantidade por página."}),e.jsxs("li",{children:["Chama ",e.jsx("code",{children:"onQueryChange"})," a cada mudança envolvendo paginação, ordenação e busca."]}),e.jsxs("li",{children:["Renderiza a página atual usando somente os ",e.jsx("code",{children:"items"})," e o ",e.jsx("code",{children:"totalItems"})," recebidos por props."]})]})}),e.jsx(S,{label:"O que o consumidor implementa",children:e.jsxs("ul",{style:h.list,children:[e.jsxs("li",{children:["No contrato do componente, use ",e.jsx("code",{children:'queryMode="external"'}),", ",e.jsx("code",{children:"query"}),", ",e.jsx("code",{children:"totalItems"})," e ",e.jsx("code",{children:"onQueryChange"}),"."]}),e.jsx("li",{children:"Mantenha o endpoint, o client HTTP, autenticação, debounce e deduplicação de requests fora da Table."}),e.jsxs("li",{children:["Atualize ",e.jsx("code",{children:"query"}),", ",e.jsx("code",{children:"items"})," e ",e.jsx("code",{children:"totalItems"})," no estado da aplicação quando uma nova consulta terminar."]})]})})]}),e.jsxs("ul",{style:h.list,children:[e.jsxs("li",{children:[e.jsx("code",{children:"query"})," é a fonte controlada de busca, coluna ativa, ordenação, página e tamanho da página."]}),e.jsxs("li",{children:[e.jsx("code",{children:"onQueryChange"})," recebe ",e.jsxs("code",{children:["{"," query, previousQuery, reason ","}"]})," quando a UI pede uma nova consulta."]}),e.jsxs("li",{children:[e.jsx("code",{children:"items"})," deve conter a página atual já filtrada, ordenada e paginada pela aplicação consumidora."]}),e.jsxs("li",{children:[e.jsx("code",{children:"totalItems"})," deve refletir o total retornado pela consulta remota para a paginação da Table continuar correta."]}),e.jsxs("li",{children:[e.jsx("code",{children:"reason"})," informa se a mudança veio de busca, troca de coluna, ordenação, página ou tamanho da página."]})]})]}),e.jsxs(P,{title:"Passo a passo de implementação",description:"O fluxo externo recomendado é sempre o mesmo. O exemplo abaixo mantém o endpoint dentro de um serviço da aplicação e mostra apenas como a Table recebe query, items, totalItems e onQueryChange.",children:[e.jsxs("div",{style:h.cardGrid,children:[e.jsx(S,{label:"Passo 1",children:e.jsxs("ul",{style:h.list,children:[e.jsxs("li",{children:["Crie um estado inicial de ",e.jsx("code",{children:"query"})," com busca, coluna ativa, ordenação, página e tamanho de página."]}),e.jsx("li",{children:"Mantenha endpoint, headers, autenticação e mapeamento de resposta dentro de um serviço da aplicação."}),e.jsxs("li",{children:["Faça esse serviço receber a ",e.jsx("code",{children:"query"})," emitida pela Table."]})]})}),e.jsx(S,{label:"Passo 2",children:e.jsxs("ul",{style:h.list,children:[e.jsxs("li",{children:["No ",e.jsx("code",{children:"onQueryChange"}),", salve a nova ",e.jsx("code",{children:"query"})," e dispare a consulta remota."]}),e.jsxs("li",{children:["Depois da resposta, use os ",e.jsx("code",{children:"items"})," já normalizados pelo serviço."]}),e.jsxs("li",{children:["Atualize ",e.jsx("code",{children:"items"})," e ",e.jsx("code",{children:"totalItems"}),"; a Table renderiza a nova página a partir dessas props."]})]})})]}),e.jsx(E,{title:"Query externa controlada",description:"Exemplo prático do fluxo external. No preview do Storybook, a consulta remota é simulada localmente; na aplicação real, o serviço chamaria o endpoint e devolveria items e totalItems já normalizados.",code:la,notes:["A Table não faz fetch e não guarda resultado remoto no modo external.","Endpoint, headers, autenticação e mapeamento de resposta ficam encapsulados no serviço da aplicação.","Quem atualiza a lista visual da tabela é o estado externo de items e totalItems."],children:e.jsx(pa,{})})]})]})}function ja(){return e.jsxs(W,{children:[e.jsx(X,{eyebrow:"Documentação guiada",title:e.jsx("h3",{style:h.heroTitle,children:"Table Irregular"}),description:e.jsxs(e.Fragment,{children:["Esta documentação cobre a variante ",e.jsx("code",{children:"irregular"}),". Ela existe para cenários em que a tabela precisa de uma estrutura HTML mais livre, com agrupamentos, subcolunas ou células mescladas, mas ainda deve herdar o visual do design system."]}),variantTags:aa,stats:ta}),e.jsxs(P,{title:"Quando escolher a variante irregular",description:"Use a variante irregular quando a estrutura semântica da tabela deixar de ser uma grade simples de colunas e linhas. Nesses casos, a liberdade estrutural vale mais do que os comportamentos automáticos da variante default.",children:[e.jsxs("div",{style:h.cardGrid,children:[e.jsx(S,{label:"Use quando",children:e.jsxs("ul",{style:h.list,children:[e.jsxs("li",{children:["Houver necessidade de ",e.jsx("code",{children:"rowSpan"}),", ",e.jsx("code",{children:"colSpan"})," ou cabeçalhos com múltiplos níveis."]}),e.jsx("li",{children:"As linhas representarem grupos diferentes de conteúdo."}),e.jsxs("li",{children:["A tabela precisar de anatomia customizada além do contrato padrão de ",e.jsx("code",{children:"columns"})," e ",e.jsx("code",{children:"items"}),"."]})]})}),e.jsx(S,{label:"O que muda",children:e.jsxs("ul",{style:h.list,children:[e.jsx("li",{children:"A Table deixa de gerar células automaticamente."}),e.jsx("li",{children:"Busca, ordenação e paginação passam a não existir por padrão nessa variante."}),e.jsx("li",{children:"O consumidor escreve a marcação HTML diretamente dentro do componente."})]})})]}),e.jsxs("ul",{style:h.list,children:[e.jsxs("li",{children:["Monte a estrutura com ",e.jsx("code",{children:"table"}),", ",e.jsx("code",{children:"thead"}),", ",e.jsx("code",{children:"tbody"}),", ",e.jsx("code",{children:"th"})," e ",e.jsx("code",{children:"td"}),"."]}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"govrs-table__border-left"}),", ",e.jsx("code",{children:"govrs-table__border-right"})," e ",e.jsx("code",{children:"govrs-table__border-bottom"})," para complementar a divisão visual quando a grade não for regular."]}),e.jsx("li",{children:"Pense nessa variante como um wrapper visual e semântico, não como uma grade de dados com recursos automáticos."})]}),e.jsx(E,{title:"Anatomia irregular",description:"Exemplo de tabela com grupos de linhas e subcolunas, mantendo a semântica HTML dentro do wrapper do componente.",code:ca,notes:["A tabela interna continua sendo HTML puro, com suporte a rowSpan e colSpan.","Essa variante é ideal quando a liberdade estrutural é mais importante do que busca, ordenação e paginação internas."],children:e.jsx(fa,{})})]})]})}function va(){return e.jsx(y,{title:"Lista com ações",columns:ra,items:da(6)})}function fa(){return e.jsx(y,{variant:"irregular",title:"Tabela irregular — exemplo",children:e.jsx(we,{})})}function ya(a){return a.variant==="irregular"?e.jsx("div",{style:{padding:16},children:e.jsx(y,{variant:"irregular",title:a.title||"Tabela irregular",children:e.jsx(we,{})})}):e.jsx("div",{style:{padding:16},children:e.jsx(y,{title:a.title||"Tabela interativa",columns:Y,items:U(200),showCheckbox:a.showCheckbox,searchable:a.searchable,searchColumn:a.searchColumn||null})})}const Aa={title:"Conteúdo/Table",component:y,args:{variant:"default",title:"Tabela interativa",showCheckbox:!1,searchable:!0,searchColumn:""},parameters:{layout:"padded",controls:{expanded:!0,sort:"requiredFirst"}}},V={name:"Documentação - Default local",parameters:{controls:{disable:!0}},render:()=>e.jsx(ga,{})},O={name:"Documentação - Externa",parameters:{controls:{disable:!0}},render:()=>e.jsx(xa,{})},B={name:"Documentação - Irregular",parameters:{controls:{disable:!0}},render:()=>e.jsx(ja,{})},H={name:"Interativo",argTypes:{modoContraste:{control:"boolean",description:"Visualiza o componente no modo de alto contraste.",table:{category:"Acessibilidade"}},variant:{control:"radio",options:["default","irregular"],description:"Alterna entre a variante padrão com dados tipados e a anatomia irregular baseada em marcação HTML.",table:{category:"Variação"}},title:{control:"text",description:"Título exibido no cabeçalho da tabela.",table:{category:"Conteúdo"}},showCheckbox:{control:"boolean",description:"Adiciona coluna de seleção por linha na variante padrão.",if:{arg:"variant",eq:"default"},table:{category:"Comportamento"}},searchable:{control:"boolean",description:"Define se a busca local fica disponível no cabeçalho da variante padrão.",if:{arg:"variant",eq:"default"},table:{category:"Comportamento"}},searchColumn:{control:"select",options:["","name","amount","date"],description:"Restringe a busca a uma coluna específica na variante padrão; vazio mantém a escolha aberta no cabeçalho.",if:{arg:"variant",eq:"default"},table:{category:"Comportamento"}}},render:a=>e.jsx(ya,{variant:a.variant==="irregular"?"irregular":"default",title:typeof a.title=="string"?a.title:"Tabela interativa",showCheckbox:!!a.showCheckbox,searchable:typeof a.searchable=="boolean"?a.searchable:!0,searchColumn:typeof a.searchColumn=="string"?a.searchColumn:""})};var he,be,pe;V.parameters={...V.parameters,docs:{...(he=V.parameters)==null?void 0:he.docs,source:{originalSource:`{
  name: 'Documentação - Default local',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <TableDefaultLocalDocs />
}`,...(pe=(be=V.parameters)==null?void 0:be.docs)==null?void 0:pe.source}}};var ge,xe,je;O.parameters={...O.parameters,docs:{...(ge=O.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  name: 'Documentação - Externa',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <TableExternalDocs />
}`,...(je=(xe=O.parameters)==null?void 0:xe.docs)==null?void 0:je.source}}};var ve,fe,ye;B.parameters={...B.parameters,docs:{...(ve=B.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  name: 'Documentação - Irregular',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <TableIrregularDocs />
}`,...(ye=(fe=B.parameters)==null?void 0:fe.docs)==null?void 0:ye.source}}};var Ce,Se,_e;H.parameters={...H.parameters,docs:{...(Ce=H.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
      control: 'radio',
      options: ['default', 'irregular'],
      description: 'Alterna entre a variante padrão com dados tipados e a anatomia irregular baseada em marcação HTML.',
      table: {
        category: 'Variação'
      }
    },
    title: {
      control: 'text',
      description: 'Título exibido no cabeçalho da tabela.',
      table: {
        category: 'Conteúdo'
      }
    },
    showCheckbox: {
      control: 'boolean',
      description: 'Adiciona coluna de seleção por linha na variante padrão.',
      if: {
        arg: 'variant',
        eq: 'default'
      },
      table: {
        category: 'Comportamento'
      }
    },
    searchable: {
      control: 'boolean',
      description: 'Define se a busca local fica disponível no cabeçalho da variante padrão.',
      if: {
        arg: 'variant',
        eq: 'default'
      },
      table: {
        category: 'Comportamento'
      }
    },
    searchColumn: {
      control: 'select',
      options: ['', 'name', 'amount', 'date'],
      description: 'Restringe a busca a uma coluna específica na variante padrão; vazio mantém a escolha aberta no cabeçalho.',
      if: {
        arg: 'variant',
        eq: 'default'
      },
      table: {
        category: 'Comportamento'
      }
    }
  },
  render: (args: TableStoryArgs) => <TableInteractivePreview variant={args.variant === 'irregular' ? 'irregular' : 'default'} title={typeof args.title === 'string' ? args.title : 'Tabela interativa'} showCheckbox={Boolean(args.showCheckbox)} searchable={typeof args.searchable === 'boolean' ? args.searchable : true} searchColumn={typeof args.searchColumn === 'string' ? args.searchColumn as TableStoryArgs['searchColumn'] : ''} />
}`,...(_e=(Se=H.parameters)==null?void 0:Se.docs)==null?void 0:_e.source}}};const Da=["TableDocumentacaoDefaultLocal","TableDocumentacaoExterna","TableDocumentacaoIrregular","TableInterativo"];export{V as TableDocumentacaoDefaultLocal,O as TableDocumentacaoExterna,B as TableDocumentacaoIrregular,H as TableInterativo,Da as __namedExportsOrder,Aa as default};
