import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as m}from"./index-DyTKwKRb.js";import{D as v,S as C,s as f,a as s,b as r}from"./storyDocs-CoQtGjOG.js";import{P as a}from"./Pagination-inYhgkAI.js";/* empty css              */import"./_commonjsHelpers-Cpj98o6Y.js";import"./breakpoints-LdF9JrQK.js";const J={title:"Navegação/Pagination",component:a,parameters:{layout:"padded"}},G=[{title:"Ideia central",text:"O pai decide página, tamanho e total. A Pagination só exibe controles e avisa mudanças — não busca dados e não se liga a List/Table por id."},{title:"Três camadas",text:"Compose em camadas: root (dados), Group (posição) e átomos (UI)."},{title:"Duas navegações",text:'Pages variant="numbers" (círculos) ou variant="jump" (select + setas). Use só uma por barra.'}];function I(){return e.jsx(a,{defaultPage:5,defaultPageSize:20,totalItems:800,children:e.jsx(a.Group,{align:"center",children:e.jsx(a.Pages,{variant:"numbers"})})})}const E=`<Pagination defaultPage={5} defaultPageSize={20} totalItems={800}>
  <Pagination.Group align="center">
    <Pagination.Pages variant="numbers" />
  </Pagination.Group>
</Pagination>`;function u(){return e.jsxs(a,{defaultPage:12,defaultPageSize:20,totalItems:200,children:[e.jsxs(a.Group,{align:"start",children:[e.jsx(a.PageSize,{}),e.jsx(a.Range,{})]}),e.jsx(a.Group,{align:"end",children:e.jsx(a.Pages,{variant:"jump"})})]})}const y=`<Pagination defaultPage={12} defaultPageSize={20} totalItems={200}>
  <Pagination.Group align="start">
    <Pagination.PageSize />
    <Pagination.Range />
  </Pagination.Group>
  <Pagination.Group align="end">
    <Pagination.Pages variant="jump" />
  </Pagination.Group>
</Pagination>`;function q(){return e.jsxs(a,{defaultPage:1,defaultPageSize:20,totalItems:200,children:[e.jsxs(a.Group,{align:"start",children:[e.jsx(a.PageSize,{}),e.jsx(a.Range,{})]}),e.jsx(a.Group,{align:"center",children:e.jsx(a.Pages,{variant:"numbers"})})]})}const R=`<Pagination defaultPage={1} defaultPageSize={20} totalItems={200}>
  <Pagination.Group align="start">
    <Pagination.PageSize />
    <Pagination.Range />
  </Pagination.Group>
  <Pagination.Group align="center">
    <Pagination.Pages variant="numbers" />
  </Pagination.Group>
</Pagination>`;function D(){return e.jsxs(a,{defaultPage:1,pageSize:50,totalItems:800,children:[e.jsxs(a.Group,{align:"start",children:[e.jsx(a.PageSize,{}),e.jsx(a.Range,{})]}),e.jsx(a.Group,{align:"end",children:e.jsx(a.Pages,{variant:"jump"})})]})}const O=`<Pagination page={page} pageSize={50} totalItems={800} onPageChange={setPage}>
  <Pagination.Group align="start">
    <Pagination.PageSize />
    <Pagination.Range />
  </Pagination.Group>
  <Pagination.Group align="end">
    <Pagination.Pages variant="jump" />
  </Pagination.Group>
</Pagination>`;function w(){const n=Array.from({length:47},(o,j)=>`Item ${j+1}`),[i,g]=m.useState(1),[t,l]=m.useState(10),c=n.slice((i-1)*t,i*t);return e.jsxs("div",{style:{display:"grid",gap:"1rem"},children:[e.jsx("ul",{style:{margin:0,paddingLeft:"1.25rem"},children:c.map(o=>e.jsx("li",{children:o},o))}),e.jsxs(a,{page:i,pageSize:t,totalItems:n.length,pageSizeOptions:[10,20,40],onPageChange:g,onPageSizeChange:o=>{l(o),g(1)},children:[e.jsxs(a.Group,{align:"start",children:[e.jsx(a.PageSize,{}),e.jsx(a.Range,{})]}),e.jsx(a.Group,{align:"end",children:e.jsx(a.Pages,{variant:"jump"})})]})]})}const A=`const [page, setPage] = useState(1)
const [pageSize, setPageSize] = useState(10)
const pageItems = items.slice((page - 1) * pageSize, page * pageSize)

<>
  <ul>{pageItems.map((item) => <li key={item}>{item}</li>)}</ul>

  <Pagination
    page={page}
    pageSize={pageSize}
    totalItems={items.length}
    pageSizeOptions={[10, 20, 40]}
    onPageChange={setPage}
    onPageSizeChange={(size) => {
      setPageSize(size)
      setPage(1)
    }}
  >
    <Pagination.Group align="start">
      <Pagination.PageSize />
      <Pagination.Range />
    </Pagination.Group>
    <Pagination.Group align="end">
      <Pagination.Pages variant="jump" />
    </Pagination.Group>
  </Pagination>
</>`;function T({pagesVariant:n,totalItems:i}){const[g,t]=m.useState(1),[l,c]=m.useState(20);return e.jsxs("div",{style:{display:"grid",gap:"1rem"},children:[e.jsxs("p",{style:{margin:0,fontSize:"0.875rem"},children:["Página ",g," · ",l," itens por página · ",i," no total"]}),e.jsx(a,{page:g,pageSize:l,totalItems:i,onPageChange:t,onPageSizeChange:o=>{c(o),t(1)},children:n==="jump"?e.jsxs(e.Fragment,{children:[e.jsxs(a.Group,{align:"start",children:[e.jsx(a.PageSize,{}),e.jsx(a.Range,{})]}),e.jsx(a.Group,{align:"end",children:e.jsx(a.Pages,{variant:"jump"})})]}):e.jsx(a.Group,{align:"center",children:e.jsx(a.Pages,{variant:"numbers"})})})]})}const d={name:"Documentação",args:{totalItems:200,children:null},parameters:{docsOnly:!0,controls:{disable:!0}},render:()=>e.jsxs(v,{children:[e.jsx(C,{eyebrow:"Documentação guiada",title:e.jsx("h3",{style:f.heroTitle,children:"Pagination"}),description:"Comece pelo modelo mental, depois monte a UI em camadas. A Pagination não pagina sozinha a lista: ela reflete o estado que o pai controla.",stats:G}),e.jsx(s,{title:"1. Anatomia em três camadas",description:e.jsxs(e.Fragment,{children:["Memorize esta ordem:",e.jsx("br",{}),"1) Root guarda o estado (dados, onPageChange e onPageSizeChange).",e.jsx("br",{}),"2) Group posiciona (start, center, end).",e.jsx("br",{}),"3) Átomos mostram a UI (PageSize, Range, Pages)."]}),children:e.jsx(r,{title:"Peças e responsabilidades",description:e.jsxs(e.Fragment,{children:["Root: page, pageSize, totalItems; onPageChange (nova página) e onPageSizeChange (novo tamanho do Exibir).",e.jsx("br",{}),"Group align: start | center | end (em telas estreitas os grupos quebram para a linha de baixo).",e.jsx("br",{}),"Átomos: PageSize (Exibir), Range (1-20 de N itens), Pages (numbers ou jump)."]}),code:`<Pagination
  page={...}
  pageSize={...}
  totalItems={...}
  onPageChange={...}
  onPageSizeChange={...}
>
  <Pagination.Group align="start">
    <Pagination.PageSize />
    <Pagination.Range />
  </Pagination.Group>

  <Pagination.Group align="end">
    <Pagination.Pages variant="jump" />
  </Pagination.Group>
</Pagination>`,children:e.jsx(u,{})})}),e.jsx(s,{title:"2. Caso mais simples: só números",description:'Neste caso você precisa de três peças: o root Pagination, com totalItems obrigatório (e opcionalmente defaultPage / defaultPageSize); um Group com align para posicionar o bloco (aqui, center); e Pages com variant="numbers" para a navegação por círculos. Use quando basta trocar de página, sem o select Exibir na barra.',children:e.jsx(r,{title:'Pages variant="numbers"',description:"Desktop mostra até 2 vizinhos da página atual; tablet e mobile mostram 1. Em mobile, os botões da 1ª e da última página somem e o “…” leva às extremidades.",code:E,children:e.jsx(I,{})})}),e.jsx(s,{title:"3. Caso Table / listagem: Exibir + range + jump",description:"É o padrão do footer da Table: à esquerda o tamanho e o intervalo; à direita o salto de página.",children:e.jsx(r,{title:'Pages variant="jump" com PageSize e Range',description:"Inclua Pagination.PageSize só se o usuário puder mudar o tamanho. O Range calcula sozinho o texto “X-Y de Z itens” a partir de page, pageSize e totalItems.",code:y,children:e.jsx(u,{})})}),e.jsx(s,{title:"4. Misturando peças",description:"Você escolhe quais átomos entram e onde cada Group fica (start, center ou end).",children:e.jsx(r,{title:"Exibir + range à esquerda, numbers no centro",description:'align="start" e align="center" posicionam o resumo à esquerda e a navegação no meio da barra. Em telas estreitas, o Group que não cabe desce para a linha de baixo.',code:R,children:e.jsx(q,{})})}),e.jsx(s,{title:"5. O pai controla os dados",description:e.jsxs(e.Fragment,{children:["A Pagination não fatia a lista. Guarde page e pageSize no pai, derive os itens da página e passe totalItems.",e.jsx("br",{}),"onPageChange(page): o usuário mudou de página (números, setas ou jump) — atualize page e fatie/busque de novo.",e.jsx("br",{}),"onPageSizeChange(pageSize): o usuário mudou o Exibir — atualize pageSize e, em geral, volte para a página 1."]}),children:e.jsx(r,{title:"Lista + Pagination controlada",description:"O pai fatia (ou busca) com page + pageSize e usa os dois callbacks para manter o estado sincronizado com a UI.",code:A,children:e.jsx(w,{})})}),e.jsx(s,{title:"6. pageSize fixo (sem select Exibir)",description:"O valor sempre vem do root (pageSize ou defaultPageSize). O select some quando o tamanho não é alterável.",children:e.jsx(r,{title:"Quando o select desaparece",description:"Dois caminhos: (1) pageSize controlado sem onPageSizeChange; (2) pageSizeOptions com um único valor. PageSize no JSX pode continuar — ele simplesmente não renderiza o select.",code:O,children:e.jsx(D,{})})})]})},p={name:"Interativo",render:n=>e.jsx(T,{...n}),args:{pagesVariant:"numbers",totalItems:800,modoContraste:!1},parameters:{controls:{exclude:["children","page","defaultPage","pageSize","defaultPageSize","pageSizeOptions","siblingCount","onPageChange","onPageSizeChange","ariaLabel","className"]}},argTypes:{modoContraste:{control:"boolean",description:"Visualiza o componente no modo de alto contraste.",table:{category:"Acessibilidade"}},pagesVariant:{control:"select",options:["numbers","jump"],description:"Variante de Pagination.Pages no preview (numbers ou jump).",table:{category:"Aparência",type:{summary:"'numbers' | 'jump'"}}},totalItems:{control:{type:"number",min:0,step:1},description:"Total de itens do conjunto paginado.",table:{category:"Dados"}}}};var P,x,S;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Documentação',
  args: {
    totalItems: 200,
    children: null
  },
  parameters: {
    docsOnly: true,
    controls: {
      disable: true
    }
  },
  render: () => <DocsStoryLayout>
      <DocsHero eyebrow="Documentação guiada" title={<h3 style={storyDocsStyles.heroTitle}>Pagination</h3>} description="Comece pelo modelo mental, depois monte a UI em camadas. A Pagination não pagina sozinha a lista: ela reflete o estado que o pai controla." stats={docsHeroStats} />

      <SectionCard title="1. Anatomia em três camadas" description={<>
            Memorize esta ordem:
            <br />
            1) Root guarda o estado (dados, onPageChange e onPageSizeChange).
            <br />
            2) Group posiciona (start, center, end).
            <br />
            3) Átomos mostram a UI (PageSize, Range, Pages).
          </>}>
        <SandboxExample title="Peças e responsabilidades" description={<>
              Root: page, pageSize, totalItems; onPageChange (nova página) e onPageSizeChange (novo tamanho do Exibir).
              <br />
              Group align: start | center | end (em telas estreitas os grupos quebram para a linha de baixo).
              <br />
              Átomos: PageSize (Exibir), Range (1-20 de N itens), Pages (numbers ou jump).
            </>} code={\`<Pagination
  page={...}
  pageSize={...}
  totalItems={...}
  onPageChange={...}
  onPageSizeChange={...}
>
  <Pagination.Group align="start">
    <Pagination.PageSize />
    <Pagination.Range />
  </Pagination.Group>

  <Pagination.Group align="end">
    <Pagination.Pages variant="jump" />
  </Pagination.Group>
</Pagination>\`}>
          <JumpPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="2. Caso mais simples: só números" description="Neste caso você precisa de três peças: o root Pagination, com totalItems obrigatório (e opcionalmente defaultPage / defaultPageSize); um Group com align para posicionar o bloco (aqui, center); e Pages com variant=&quot;numbers&quot; para a navegação por círculos. Use quando basta trocar de página, sem o select Exibir na barra.">
        <SandboxExample title="Pages variant=&quot;numbers&quot;" description="Desktop mostra até 2 vizinhos da página atual; tablet e mobile mostram 1. Em mobile, os botões da 1ª e da última página somem e o “…” leva às extremidades." code={numbersExampleCode}>
          <NumbersPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="3. Caso Table / listagem: Exibir + range + jump" description="É o padrão do footer da Table: à esquerda o tamanho e o intervalo; à direita o salto de página.">
        <SandboxExample title="Pages variant=&quot;jump&quot; com PageSize e Range" description="Inclua Pagination.PageSize só se o usuário puder mudar o tamanho. O Range calcula sozinho o texto “X-Y de Z itens” a partir de page, pageSize e totalItems." code={jumpExampleCode}>
          <JumpPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="4. Misturando peças" description="Você escolhe quais átomos entram e onde cada Group fica (start, center ou end).">
        <SandboxExample title="Exibir + range à esquerda, numbers no centro" description="align=&quot;start&quot; e align=&quot;center&quot; posicionam o resumo à esquerda e a navegação no meio da barra. Em telas estreitas, o Group que não cabe desce para a linha de baixo." code={mixedExampleCode}>
          <MixedPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="5. O pai controla os dados" description={<>
            A Pagination não fatia a lista. Guarde page e pageSize no pai, derive os itens da página e passe totalItems.
            <br />
            onPageChange(page): o usuário mudou de página (números, setas ou jump) — atualize page e fatie/busque de novo.
            <br />
            onPageSizeChange(pageSize): o usuário mudou o Exibir — atualize pageSize e, em geral, volte para a página 1.
          </>}>
        <SandboxExample title="Lista + Pagination controlada" description="O pai fatia (ou busca) com page + pageSize e usa os dois callbacks para manter o estado sincronizado com a UI." code={listCompositionExampleCode}>
          <ListCompositionPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="6. pageSize fixo (sem select Exibir)" description="O valor sempre vem do root (pageSize ou defaultPageSize). O select some quando o tamanho não é alterável.">
        <SandboxExample title="Quando o select desaparece" description="Dois caminhos: (1) pageSize controlado sem onPageSizeChange; (2) pageSizeOptions com um único valor. PageSize no JSX pode continuar — ele simplesmente não renderiza o select." code={fixedPageSizeExampleCode}>
          <FixedPageSizePreview />
        </SandboxExample>
      </SectionCard>
    </DocsStoryLayout>
}`,...(S=(x=d.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var b,z,h;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Interativo',
  render: args => <InteractivePreview {...args} />,
  args: {
    pagesVariant: 'numbers',
    totalItems: 800,
    modoContraste: false
  },
  parameters: {
    controls: {
      exclude: ['children', 'page', 'defaultPage', 'pageSize', 'defaultPageSize', 'pageSizeOptions', 'siblingCount', 'onPageChange', 'onPageSizeChange', 'ariaLabel', 'className']
    }
  },
  argTypes: {
    modoContraste: {
      control: 'boolean',
      description: 'Visualiza o componente no modo de alto contraste.',
      table: {
        category: 'Acessibilidade'
      }
    },
    pagesVariant: {
      control: 'select',
      options: ['numbers', 'jump'],
      description: 'Variante de Pagination.Pages no preview (numbers ou jump).',
      table: {
        category: 'Aparência',
        type: {
          summary: "'numbers' | 'jump'"
        }
      }
    },
    totalItems: {
      control: {
        type: 'number',
        min: 0,
        step: 1
      },
      description: 'Total de itens do conjunto paginado.',
      table: {
        category: 'Dados'
      }
    }
  }
}`,...(h=(z=p.parameters)==null?void 0:z.docs)==null?void 0:h.source}}};const H=["Documentation","Interactive"];export{d as Documentation,p as Interactive,H as __namedExportsOrder,J as default};
