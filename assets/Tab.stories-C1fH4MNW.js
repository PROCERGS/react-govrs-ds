import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as A}from"./index-DyTKwKRb.js";import{c as p,d as b,e as x}from"./index-A9ZUQmzb.js";import{D as S,S as C,s as D,a as d,b as m}from"./storyDocs-CoQtGjOG.js";import{T as o}from"./Tab-DwzPEIKy.js";/* empty css              */import"./_commonjsHelpers-Cpj98o6Y.js";const s=[{id:"notifications",label:"Notificações",icon:p},{id:"favorites",label:"Favoritos",icon:b},{id:"files",label:"Arquivos",icon:x}];function L({tabMode:i,iconPosition:c}){const[f,j]=A.useState(s[0].id),y=s.some(a=>a.id===f)?f:s[0].id;return e.jsx(o,{activeId:y,onActiveChange:j,ariaLabel:"Demonstração de abas",iconPosition:i==="iconAndText"?c:void 0,children:s.map(a=>{const l=e.jsx(t,{title:a.label,children:e.jsxs("p",{children:['Conteúdo da aba "',a.label,'".']})});return i==="iconOnly"?e.jsx(o.Item,{id:a.id,icon:a.icon,ariaLabel:a.label,children:l},a.id):i==="iconAndText"?e.jsx(o.Item,{id:a.id,label:a.label,icon:a.icon,children:l},a.id):e.jsx(o.Item,{id:a.id,label:a.label,children:l},a.id)})})}const Q={title:"Navegação/Tab",component:o,parameters:{layout:"padded"}},P=[{title:"Quando usar",text:"Use para alternar entre painéis relacionados, mantendo visível apenas o conteúdo da aba selecionada."},{title:"Composição",text:"Cada painel é declarado como children de Tab.Item; label e icon definem automaticamente a apresentação do trigger."},{title:"Acessibilidade",text:"Abas podem ser navegadas por setas, Home e End. Abas somente com ícone precisam de ariaLabel."}];function t({title:i,children:c}){return e.jsxs("section",{style:{padding:"var(--govrs-space-4)"},children:[e.jsx("h4",{style:{marginTop:0},children:i}),c]})}function q(){return e.jsxs(o,{defaultActiveId:"overview",ariaLabel:"Seções do perfil",children:[e.jsx(o.Item,{id:"overview",label:"Visão geral",children:e.jsx(t,{title:"Visão geral",children:e.jsx("p",{children:"Resumo das informações do perfil."})})}),e.jsx(o.Item,{id:"documents",label:"Documentos",children:e.jsx(t,{title:"Documentos",children:e.jsx("p",{children:"Arquivos e documentos vinculados ao perfil."})})}),e.jsx(o.Item,{id:"history",label:"Histórico",children:e.jsx(t,{title:"Histórico",children:e.jsx("p",{children:"Registro das últimas alterações."})})})]})}const E=`<Tab defaultActiveId="overview" ariaLabel="Seções do perfil">
  <Tab.Item id="overview" label="Visão geral">
    <section>
      <h4>Visão geral</h4>
      <p>Resumo das informações do perfil.</p>
    </section>
  </Tab.Item>
  <Tab.Item id="documents" label="Documentos">
    <section>
      <h4>Documentos</h4>
      <p>Arquivos e documentos vinculados ao perfil.</p>
    </section>
  </Tab.Item>
  <Tab.Item id="history" label="Histórico">
    <section>
      <h4>Histórico</h4>
      <p>Registro das últimas alterações.</p>
    </section>
  </Tab.Item>
</Tab>`;function w(){return e.jsxs(o,{defaultActiveId:"notifications",ariaLabel:"Categorias de mensagens",iconPosition:"top",children:[e.jsx(o.Item,{id:"notifications",label:"Notificações",icon:p,children:e.jsx(t,{title:"Notificações",children:e.jsx("p",{children:"Você tem três notificações pendentes."})})}),e.jsx(o.Item,{id:"favorites",label:"Favoritos",icon:b,children:e.jsx(t,{title:"Favoritos",children:e.jsx("p",{children:"Itens salvos para consulta posterior."})})}),e.jsx(o.Item,{id:"files",label:"Arquivos",icon:x,children:e.jsx(t,{title:"Arquivos",children:e.jsx("p",{children:"Documentos compartilhados com você."})})})]})}const F=`import { faBell, faStar, faFolder } from '@fortawesome/free-solid-svg-icons'

<Tab defaultActiveId="notifications" ariaLabel="Categorias de mensagens" iconPosition="top">
  <Tab.Item id="notifications" label="Notificações" icon={faBell}>
    <section>
      <h4>Notificações</h4>
      <p>Você tem três notificações pendentes.</p>
    </section>
  </Tab.Item>
  <Tab.Item id="favorites" label="Favoritos" icon={faStar}>
    <section>
      <h4>Favoritos</h4>
      <p>Itens salvos para consulta posterior.</p>
    </section>
  </Tab.Item>
  <Tab.Item id="files" label="Arquivos" icon={faFolder}>
    <section>
      <h4>Arquivos</h4>
      <p>Documentos compartilhados com você.</p>
    </section>
  </Tab.Item>
</Tab>`;function N(){return e.jsxs(o,{defaultActiveId:"notifications",ariaLabel:"Categorias de mensagens",children:[e.jsx(o.Item,{id:"notifications",icon:p,ariaLabel:"Notificações",children:e.jsx(t,{title:"Notificações",children:e.jsx("p",{children:"Você tem três notificações pendentes."})})}),e.jsx(o.Item,{id:"favorites",icon:b,ariaLabel:"Favoritos",children:e.jsx(t,{title:"Favoritos",children:e.jsx("p",{children:"Itens salvos para consulta posterior."})})}),e.jsx(o.Item,{id:"files",icon:x,ariaLabel:"Arquivos",children:e.jsx(t,{title:"Arquivos",children:e.jsx("p",{children:"Documentos compartilhados com você."})})})]})}const O=`import { faBell, faStar, faFolder } from '@fortawesome/free-solid-svg-icons'

<Tab defaultActiveId="notifications" ariaLabel="Categorias de mensagens">
  <Tab.Item id="notifications" icon={faBell} ariaLabel="Notificações">
    <section>
      <h4>Notificações</h4>
      <p>Você tem três notificações pendentes.</p>
    </section>
  </Tab.Item>
  <Tab.Item id="favorites" icon={faStar} ariaLabel="Favoritos">
    <section>
      <h4>Favoritos</h4>
      <p>Itens salvos para consulta posterior.</p>
    </section>
  </Tab.Item>
  <Tab.Item id="files" icon={faFolder} ariaLabel="Arquivos">
    <section>
      <h4>Arquivos</h4>
      <p>Documentos compartilhados com você.</p>
    </section>
  </Tab.Item>
</Tab>`,n={name:"Documentação",args:{children:null},parameters:{docsOnly:!0,controls:{disable:!0}},render:()=>e.jsxs(S,{children:[e.jsx(C,{eyebrow:"Documentação guiada",title:e.jsx("h3",{style:D.heroTitle,children:"Tab"}),description:"Componente composto para organizar conteúdo relacionado em painéis alternáveis.",stats:P}),e.jsx(d,{title:"Apenas texto",description:"Forneça somente label em cada Tab.Item para exibir abas textuais.",children:e.jsx(m,{title:"Seções de perfil",description:"A seleção revela o painel declarado como children de cada item.",code:E,children:e.jsx(q,{})})}),e.jsx(d,{title:"Texto e ícone",description:"Passe label e icon em cada Tab.Item. Defina iconPosition no Tab para padronizar a posição do ícone em todas as abas (left, right, top ou bottom).",children:e.jsx(m,{title:"Categorias de mensagens",description:'iconPosition="top" no Tab aplica o ícone acima do texto em todos os itens.',code:F,children:e.jsx(w,{})})}),e.jsx(d,{title:"Somente ícone",description:"Abas sem label precisam de ariaLabel para manter o nome acessível.",children:e.jsx(m,{title:"Categorias compactas",description:"ariaLabel fornece o nome acessível quando não há texto visível.",code:O,children:e.jsx(N,{})})})]})},r={name:"Interativo",render:i=>e.jsx(L,{...i}),args:{tabMode:"text",iconPosition:"left",modoContraste:!1},parameters:{controls:{exclude:["children","activeId","defaultActiveId","onActiveChange","ariaLabel","hideTabList","className"]}},argTypes:{modoContraste:{control:"boolean",description:"Visualiza o componente no modo de alto contraste.",table:{category:"Acessibilidade"}},tabMode:{control:"select",options:["text","iconAndText","iconOnly"],description:"Tipo de aba: somente texto, ícone e texto, ou somente ícone.",table:{category:"Aparência",type:{summary:"'text' | 'iconAndText' | 'iconOnly'"}}},iconPosition:{control:"select",options:["left","right","top","bottom"],description:"Posição do ícone no Tab. Só tem efeito quando as abas têm label e icon.",if:{arg:"tabMode",eq:"iconAndText"},table:{category:"Aparência",type:{summary:"'left' | 'right' | 'top' | 'bottom'"}}}}};var u,h,v;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Documentação',
  args: {
    children: null
  },
  parameters: {
    docsOnly: true,
    controls: {
      disable: true
    }
  },
  render: () => <DocsStoryLayout>
      <DocsHero eyebrow="Documentação guiada" title={<h3 style={storyDocsStyles.heroTitle}>Tab</h3>} description="Componente composto para organizar conteúdo relacionado em painéis alternáveis." stats={docsHeroStats} />

      <SectionCard title="Apenas texto" description="Forneça somente label em cada Tab.Item para exibir abas textuais.">
        <SandboxExample title="Seções de perfil" description="A seleção revela o painel declarado como children de cada item." code={textTabsExampleCode}>
          <TextTabsPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="Texto e ícone" description="Passe label e icon em cada Tab.Item. Defina iconPosition no Tab para padronizar a posição do ícone em todas as abas (left, right, top ou bottom).">
        <SandboxExample title="Categorias de mensagens" description="iconPosition=&quot;top&quot; no Tab aplica o ícone acima do texto em todos os itens." code={iconTextTabsExampleCode}>
          <IconTextTabsPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="Somente ícone" description="Abas sem label precisam de ariaLabel para manter o nome acessível.">
        <SandboxExample title="Categorias compactas" description="ariaLabel fornece o nome acessível quando não há texto visível." code={iconOnlyTabsExampleCode}>
          <IconOnlyTabsPreview />
        </SandboxExample>
      </SectionCard>
    </DocsStoryLayout>
}`,...(v=(h=n.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var T,I,g;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Interativo',
  render: args => <InteractivePreview {...args} />,
  args: {
    tabMode: 'text',
    iconPosition: 'left',
    modoContraste: false
  },
  parameters: {
    controls: {
      exclude: ['children', 'activeId', 'defaultActiveId', 'onActiveChange', 'ariaLabel', 'hideTabList', 'className']
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
    tabMode: {
      control: 'select',
      options: ['text', 'iconAndText', 'iconOnly'],
      description: 'Tipo de aba: somente texto, ícone e texto, ou somente ícone.',
      table: {
        category: 'Aparência',
        type: {
          summary: "'text' | 'iconAndText' | 'iconOnly'"
        }
      }
    },
    iconPosition: {
      control: 'select',
      options: ['left', 'right', 'top', 'bottom'],
      description: 'Posição do ícone no Tab. Só tem efeito quando as abas têm label e icon.',
      if: {
        arg: 'tabMode',
        eq: 'iconAndText'
      },
      table: {
        category: 'Aparência',
        type: {
          summary: "'left' | 'right' | 'top' | 'bottom'"
        }
      }
    }
  }
}`,...(g=(I=r.parameters)==null?void 0:I.docs)==null?void 0:g.source}}};const U=["Documentation","Interactive"];export{n as Documentation,r as Interactive,U as __namedExportsOrder,Q as default};
