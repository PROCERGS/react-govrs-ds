import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as b}from"./index-DyTKwKRb.js";import{D as O,S as _,s as n,a as p,b as v,c as l}from"./storyDocs-CoQtGjOG.js";import{F as V,a as F}from"./index-A9ZUQmzb.js";import{c as J}from"./colors-LWidNtQl.js";/* empty css              */import"./_commonjsHelpers-Cpj98o6Y.js";const L=J.avatar.tones.length;function q(...a){return a.filter(Boolean).join(" ")}function B(a){let o=0;for(let i=0;i<a.length;i+=1)o=a.charCodeAt(i)+((o<<5)-o);return Math.abs(o)%L}function Q(a){const[o]=a.trim().split(/\s+/);return o||a}function $(a){return a.charAt(0)||"?"}function A({name:a,size:o,imageUrl:i,letter:t=!1,iconic:c=!1,toneIndex:d,className:m}){const u=q("govrs-avatar",`govrs-avatar--${o}`,`govrs-avatar--tone-${d}`,m);return e.jsx("div",{className:u,"aria-label":i?void 0:a,children:c?e.jsx("div",{className:"govrs-avatar__icon-surface","aria-hidden":"true",children:e.jsx(V,{icon:F})}):!t&&i?e.jsx("img",{className:"govrs-avatar__image",src:i,alt:a}):e.jsx("span",{className:"govrs-avatar__initial","aria-hidden":"true",children:$(a)})})}function G({expanded:a}){return a?e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true",focusable:"false",children:e.jsx("path",{d:"M4 10l4-4 4 4z"})}):e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true",focusable:"false",children:e.jsx("path",{d:"M4 6l4 4 4-4z"})})}function r({name:a,size:o="medium",imageUrl:i,letter:t=!1,iconic:c=!1,dropdown:d=!1,menuItems:m=[],className:u}){const[g,j]=b.useState(!1),f=B(a),k=Q(a),E=e.jsx(A,{name:a,size:o,imageUrl:i,letter:t,iconic:c,toneIndex:f,className:d?void 0:u});function y(){j(s=>!s)}function M(s){s.key!=="Enter"&&s.key!==" "||(s.preventDefault(),y())}return d?e.jsxs("div",{className:q("govrs-avatar-dropdown-wrapper",u),onClick:y,onKeyDown:M,role:"button",tabIndex:0,"aria-haspopup":m.length>0?"menu":void 0,"aria-expanded":g,children:[e.jsxs("div",{className:"govrs-avatar-dropdown",children:[e.jsx(A,{name:a,size:o,imageUrl:i,letter:t,iconic:c,toneIndex:f}),e.jsx("div",{className:"govrs-avatar-dropdown__content",children:e.jsxs("p",{children:["Ola, ",e.jsx("b",{children:k})]})}),e.jsx("button",{type:"button",className:"govrs-avatar-dropdown__trigger","aria-label":"Alternar menu do avatar","aria-hidden":"true",tabIndex:-1,children:e.jsx(G,{expanded:g})})]}),g&&m.length>0?e.jsx("div",{className:"govrs-avatar-dropdown__menu",role:"menu",children:m.map((s,N)=>e.jsx("button",{type:"button",className:"govrs-avatar-dropdown__menu-item",role:"menuitem",onClick:T=>{T.stopPropagation(),s.onClick(),j(!1)},children:s.label},`${s.label}-${N}`))}):null]}):E}r.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{name:{required:!0,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},letter:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},iconic:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},dropdown:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},imageUrl:{required:!1,tsType:{name:"string"},description:""},menuItems:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string
  onClick: () => void
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}}]}}],raw:"AvatarMenuItem[]"},description:"",defaultValue:{value:"[]",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const R=`<Avatar name="João Silva" />
<Avatar name="Maria Santos" imageUrl="https://i.pravatar.cc/150?img=1" />
<Avatar name="Alice Oliveira" letter />
<Avatar name="Usuário Genérico" iconic />`,H=`<Avatar name="João Silva" size="small" />
<Avatar name="João Silva" size="medium" />
<Avatar name="João Silva" size="large" />`,K=`const menuItems = [
  { label: 'Perfil', onClick: () => {} },
  { label: 'Configurações', onClick: () => {} },
  { label: 'Sair', onClick: () => {} },
]

<Avatar name="Sarah Connor" dropdown menuItems={menuItems} />`,W=`<Avatar name="Alice Andrade" />
<Avatar name="Bruno Barbosa" />
<Avatar name="Carla Cardoso" />`,X=["small","medium","large","image","letter","iconic","dropdown"],Y=[{title:"Quando usar",text:"Quando a interface precisa representar uma pessoa por imagem, inicial ou ícone, incluindo cabeçalhos de conta e pontos de acesso a menus de perfil."},{title:"Melhor exploração",text:"Use o story 'Interativo' para testar tamanhos, modos de exibição, dropdown e menu. A documentação destaca as regras de prioridade entre imagem, letra e ícone."},{title:"Comportamento",text:"O componente gera uma cor consistente a partir do nome, pode exibir imagem, inicial ou ícone e, quando dropdown estiver ativo, abre um menu local a partir do próprio avatar."}],U={account:["Perfil","Configurações","Sair"],session:["Minha conta","Privacidade","Ajuda","Desconectar"]},pe={title:"Identidade/Avatar",component:D,args:{name:"João Silva",size:"medium",imageUrl:"",letter:!1,iconic:!1,dropdown:!1,menuPreset:"account"},parameters:{layout:"padded",controls:{expanded:!0,sort:"requiredFirst"}}};function Z(){return e.jsxs("div",{style:n.cardGrid,children:[e.jsx(l,{label:"Inicial",children:e.jsx(r,{name:"João Silva"})}),e.jsx(l,{label:"Imagem",children:e.jsx(r,{name:"Maria Santos",imageUrl:"https://i.pravatar.cc/150?img=1"})}),e.jsx(l,{label:"Letra forçada",children:e.jsx(r,{name:"Alice Oliveira",letter:!0,imageUrl:"https://i.pravatar.cc/150?img=3"})}),e.jsx(l,{label:"Icônico",children:e.jsx(r,{name:"Usuário Genérico",iconic:!0})})]})}function ee(){return e.jsxs("div",{style:n.cardGrid,children:[e.jsx(l,{label:"Small",children:e.jsx(r,{name:"João Silva",size:"small"})}),e.jsx(l,{label:"Medium",children:e.jsx(r,{name:"João Silva",size:"medium"})}),e.jsx(l,{label:"Large",children:e.jsx(r,{name:"João Silva",size:"large"})})]})}function ae(){const[a,o]=b.useState(null),i=[{label:"Perfil",onClick:()=>o("Perfil")},{label:"Configurações",onClick:()=>o("Configurações")},{label:"Sair",onClick:()=>o("Sair")}],t=[{label:"Minha conta",onClick:()=>o("Minha conta")},{label:"Privacidade",onClick:()=>o("Privacidade")},{label:"Ajuda",onClick:()=>o("Ajuda")},{label:"Desconectar",onClick:()=>o("Desconectar")}];return e.jsxs("div",{style:{display:"grid",gap:16},children:[e.jsxs("div",{style:n.cardGrid,children:[e.jsx(l,{label:"Com inicial",children:e.jsx(r,{name:"Sarah Connor",dropdown:!0,menuItems:i})}),e.jsx(l,{label:"Com imagem",children:e.jsx(r,{name:"John Connor",dropdown:!0,imageUrl:"https://i.pravatar.cc/150?img=5",menuItems:t})})]}),e.jsxs("p",{style:n.statText,children:[e.jsx("strong",{children:"Ultima acao:"})," ",a??"Nenhuma ainda"]})]})}function oe(){const a=["Alice Andrade","Bruno Barbosa","Carla Cardoso","Daniel Dias","Elisa Esteves","Felipe Fernandes"];return e.jsx("div",{style:n.previewGrid,children:a.map(o=>e.jsxs("div",{style:n.previewItem,children:[e.jsx(r,{name:o,size:"small"}),e.jsx("p",{style:n.previewLabel,children:o})]},o))})}function ie(a){const o=[`<Avatar name="${a.name}"`];if(a.size!=="medium"&&o.push(`  size="${a.size}"`),a.imageUrl.trim().length>0&&o.push(`  imageUrl="${a.imageUrl}"`),a.letter&&o.push("  letter"),a.iconic&&o.push("  iconic"),a.dropdown&&o.push("  dropdown"),a.dropdown&&a.menuPreset!=="none"){const i=U[a.menuPreset].map(t=>`    { label: '${t}', onClick: () => {} }`);o.push("  menuItems={["),o.push(...i),o.push("  ]}")}return o.push("/>"),o.join(`
`)}function ne(a){return[a.name,a.size,a.imageUrl,a.letter,a.iconic,a.dropdown,a.menuPreset].join("::")}function D(a){const[o,i]=b.useState(null),t=a.dropdown&&a.menuPreset!=="none"?U[a.menuPreset].map(d=>({label:d,onClick:()=>i(d)})):[],c=a.imageUrl.trim().length>0?a.imageUrl:void 0;return e.jsxs("div",{style:{...n.previewStage,justifyItems:"start"},children:[e.jsx(r,{name:a.name,size:a.size,imageUrl:c,letter:a.letter,iconic:a.iconic,dropdown:a.dropdown,menuItems:t}),a.dropdown&&t.length>0?e.jsxs("p",{style:n.statText,children:[e.jsx("strong",{children:"Ultima acao:"})," ",o??"Clique em um item do menu"]}):null,e.jsx("pre",{style:n.codeBlock,children:e.jsx("code",{children:ie(a)})})]})}const x={name:"Documentação",parameters:{controls:{disable:!0}},render:()=>e.jsxs(O,{children:[e.jsx(_,{eyebrow:"Documentação guiada",title:e.jsx("h3",{style:n.heroTitle,children:"Avatar"}),description:e.jsxs(e.Fragment,{children:["O componente ",e.jsx("code",{children:"Avatar"})," representa pessoas por imagem, inicial ou ícone, com suporte a três tamanhos, cor gerada automaticamente pelo nome e menu dropdown opcional."]}),variantTags:X,stats:Y}),e.jsx(p,{title:"Props principais",description:"Estas são as props universais do componente. Elas definem a identidade base do avatar e continuam valendo em qualquer modo de exibição, com ou sem dropdown.",children:e.jsxs("ul",{style:n.list,children:[e.jsxs("li",{children:[e.jsx("code",{children:"name"})," é obrigatória e define a inicial exibida no fallback, a cor calculada e o primeiro nome mostrado no dropdown."]}),e.jsxs("li",{children:[e.jsx("code",{children:"size"})," aceita ",e.jsx("code",{children:"small"}),", ",e.jsx("code",{children:"medium"})," e ",e.jsx("code",{children:"large"}),", controlando a escala visual do avatar em todos os modos."]})]})}),e.jsxs(p,{title:"Modos de exibição",description:"O Avatar alterna entre quatro estados principais: inicial, imagem, letra forçada e ícone. A prioridade visual segue a implementação do componente: iconic sobrescreve imageUrl e letter; letter sobrescreve imageUrl.",children:[e.jsxs("ul",{style:n.list,children:[e.jsxs("li",{children:[e.jsx("code",{children:"imageUrl"})," renderiza a foto quando nenhuma variante de sobreposição estiver ativa."]}),e.jsxs("li",{children:[e.jsx("code",{children:"letter"})," força a inicial do nome mesmo quando existe imagem disponível."]}),e.jsxs("li",{children:[e.jsx("code",{children:"iconic"})," ativa o modo com ícone e tem prioridade máxima sobre imagem e inicial."]})]}),e.jsx(v,{title:"Inicial, imagem, letra e ícone",description:"Esses exemplos mostram as combinações centrais do componente e deixam explícita a variante icônica, que preserva a mesma moldura circular com o ícone apoiado na base do avatar.",code:R,notes:["Quando imageUrl não estiver presente, a inicial do nome é usada como fallback.","letter força a exibição da inicial mesmo quando existe imagem.","iconic tem prioridade máxima e substitui imagem e inicial."],children:e.jsx(Z,{})})]}),e.jsxs(p,{title:"Tamanhos e cor automática",description:"A escala do Avatar replica os três tamanhos do componente original e mantém a cor consistente por nome, usando a mesma paleta fixa de quinze tons.",children:[e.jsxs("ul",{style:n.list,children:[e.jsxs("li",{children:[e.jsx("code",{children:"size"})," ajusta apenas a escala do avatar, sem mudar a regra de prioridade entre imagem, inicial e ícone."]}),e.jsxs("li",{children:[e.jsx("code",{children:"name"})," também participa da geração da cor de fundo; o mesmo nome sempre reaproveita o mesmo tom da paleta."]})]}),e.jsx(v,{title:"Escalas disponíveis",description:"Comparativo entre small, medium e large usando o mesmo nome para manter a cor estável e destacar apenas a mudança de dimensão.",code:H,children:e.jsx(ee,{})}),e.jsx(v,{title:"Paleta consistente por nome",description:"A cor de fundo do avatar é calculada a partir do nome. O mesmo nome sempre cai no mesmo tom, o que ajuda a manter reconhecimento visual mesmo sem imagem.",code:W,children:e.jsx(oe,{})})]}),e.jsxs(p,{title:"Dropdown e menu",description:"Quando dropdown estiver ativo, o componente envolve o avatar com uma superfície clicável, exibe a saudação usando apenas o primeiro nome e abre um menu posicionado abaixo do gatilho.",children:[e.jsxs("ul",{style:n.list,children:[e.jsxs("li",{children:[e.jsx("code",{children:"dropdown"})," ativa a anatomia expandida com saudação e gatilho de menu."]}),e.jsxs("li",{children:[e.jsx("code",{children:"menuItems"})," recebe itens com ",e.jsx("code",{children:"label"})," e ",e.jsx("code",{children:"onClick"})," para montar o menu local do avatar."]}),e.jsxs("li",{children:[e.jsx("code",{children:"name"})," segue sendo reutilizado para extrair o primeiro nome exibido dentro do dropdown."]})]}),e.jsx(v,{title:"Avatar com menu local",description:"Os exemplos abaixo mostram o mesmo comportamento de dropdown com inicial e com imagem. O menu fecha ao selecionar uma opção.",code:K,notes:["O menu é controlado internamente pelo próprio componente.","Sem menuItems, o gatilho ainda expande visualmente, mas não renderiza lista."],children:e.jsx(ae,{})})]}),e.jsx(p,{title:"Regras de prioridade",description:"As props visuais podem ser combinadas, mas o componente resolve conflitos sempre da mesma forma para manter previsibilidade no consumo.",children:e.jsxs("ul",{style:n.list,children:[e.jsxs("li",{children:[e.jsx("code",{children:"iconic"})," sobrescreve ",e.jsx("code",{children:"letter"})," e ",e.jsx("code",{children:"imageUrl"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"letter"})," sobrescreve ",e.jsx("code",{children:"imageUrl"}),"."]}),e.jsx("li",{children:"Sem imagem, letra forçada ou ícone, o componente usa a inicial como fallback padrão."}),e.jsxs("li",{children:["Quando ",e.jsx("code",{children:"dropdown"})," estiver ativo sem ",e.jsx("code",{children:"menuItems"}),", o avatar ainda expande visualmente, mas não renderiza a lista de ações."]})]})})]})},h={name:"Interativo",argTypes:{modoContraste:{control:"boolean",description:"Visualiza o componente no modo de alto contraste.",table:{category:"Acessibilidade"}},name:{control:"text",description:"Nome usado para inicial, cor e saudação do dropdown.",table:{category:"Conteudo"}},size:{control:{type:"radio"},options:["small","medium","large"],description:"Escolhe a escala visual do avatar.",table:{category:"Apresentacao"}},imageUrl:{control:"text",description:"URL opcional da imagem do avatar. É ignorada se letter ou iconic estiverem ativos.",table:{category:"Apresentacao"}},letter:{control:"boolean",description:"Força a exibição da inicial do nome, mesmo quando existe imageUrl.",table:{category:"Apresentacao"}},iconic:{control:"boolean",description:"Ativa o modo com ícone de usuário e sobrescreve imagem e inicial.",table:{category:"Apresentacao"}},dropdown:{control:"boolean",description:"Ativa a anatomia com saudação e menu local.",table:{category:"Comportamento"}},menuPreset:{control:{type:"select"},options:["none","account","session"],labels:{none:"Sem itens",account:"Conta",session:"Sessão"},description:"Preset de menu usado pelo story interativo quando dropdown estiver ativo.",table:{category:"Story"}}},parameters:{controls:{exclude:["className","menuItems"]}},render:a=>e.jsx(D,{...a},ne(a))};var w,S,C;x.parameters={...x.parameters,docs:{...(w=x.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Documentação',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <DocsStoryLayout>
      <DocsHero eyebrow="Documentação guiada" title={<h3 style={storyDocsStyles.heroTitle}>Avatar</h3>} description={<>
            O componente <code>Avatar</code> representa pessoas por imagem, inicial ou
            ícone, com suporte a três tamanhos, cor gerada automaticamente pelo nome
            e menu dropdown opcional.
          </>} variantTags={docsVariantTags} stats={docsHeroStats} />

      <SectionCard title="Props principais" description="Estas são as props universais do componente. Elas definem a identidade base do avatar e continuam valendo em qualquer modo de exibição, com ou sem dropdown.">
        <ul style={storyDocsStyles.list}>
          <li><code>name</code> é obrigatória e define a inicial exibida no fallback, a cor calculada e o primeiro nome mostrado no dropdown.</li>
          <li><code>size</code> aceita <code>small</code>, <code>medium</code> e <code>large</code>, controlando a escala visual do avatar em todos os modos.</li>
        </ul>
      </SectionCard>

      <SectionCard title="Modos de exibição" description="O Avatar alterna entre quatro estados principais: inicial, imagem, letra forçada e ícone. A prioridade visual segue a implementação do componente: iconic sobrescreve imageUrl e letter; letter sobrescreve imageUrl.">
        <ul style={storyDocsStyles.list}>
          <li><code>imageUrl</code> renderiza a foto quando nenhuma variante de sobreposição estiver ativa.</li>
          <li><code>letter</code> força a inicial do nome mesmo quando existe imagem disponível.</li>
          <li><code>iconic</code> ativa o modo com ícone e tem prioridade máxima sobre imagem e inicial.</li>
        </ul>

        <SandboxExample title="Inicial, imagem, letra e ícone" description="Esses exemplos mostram as combinações centrais do componente e deixam explícita a variante icônica, que preserva a mesma moldura circular com o ícone apoiado na base do avatar." code={displayModesCode} notes={['Quando imageUrl não estiver presente, a inicial do nome é usada como fallback.', 'letter força a exibição da inicial mesmo quando existe imagem.', 'iconic tem prioridade máxima e substitui imagem e inicial.']}>
          <DisplayModesPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="Tamanhos e cor automática" description="A escala do Avatar replica os três tamanhos do componente original e mantém a cor consistente por nome, usando a mesma paleta fixa de quinze tons.">
        <ul style={storyDocsStyles.list}>
          <li><code>size</code> ajusta apenas a escala do avatar, sem mudar a regra de prioridade entre imagem, inicial e ícone.</li>
          <li><code>name</code> também participa da geração da cor de fundo; o mesmo nome sempre reaproveita o mesmo tom da paleta.</li>
        </ul>

        <SandboxExample title="Escalas disponíveis" description="Comparativo entre small, medium e large usando o mesmo nome para manter a cor estável e destacar apenas a mudança de dimensão." code={sizeExampleCode}>
          <AvatarSizePreview />
        </SandboxExample>

        <SandboxExample title="Paleta consistente por nome" description="A cor de fundo do avatar é calculada a partir do nome. O mesmo nome sempre cai no mesmo tom, o que ajuda a manter reconhecimento visual mesmo sem imagem." code={paletteExampleCode}>
          <AvatarPalettePreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="Dropdown e menu" description="Quando dropdown estiver ativo, o componente envolve o avatar com uma superfície clicável, exibe a saudação usando apenas o primeiro nome e abre um menu posicionado abaixo do gatilho.">
        <ul style={storyDocsStyles.list}>
          <li><code>dropdown</code> ativa a anatomia expandida com saudação e gatilho de menu.</li>
          <li><code>menuItems</code> recebe itens com <code>label</code> e <code>onClick</code> para montar o menu local do avatar.</li>
          <li><code>name</code> segue sendo reutilizado para extrair o primeiro nome exibido dentro do dropdown.</li>
        </ul>

        <SandboxExample title="Avatar com menu local" description="Os exemplos abaixo mostram o mesmo comportamento de dropdown com inicial e com imagem. O menu fecha ao selecionar uma opção." code={dropdownExampleCode} notes={['O menu é controlado internamente pelo próprio componente.', 'Sem menuItems, o gatilho ainda expande visualmente, mas não renderiza lista.']}>
          <AvatarDropdownPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="Regras de prioridade" description="As props visuais podem ser combinadas, mas o componente resolve conflitos sempre da mesma forma para manter previsibilidade no consumo.">
        <ul style={storyDocsStyles.list}>
          <li><code>iconic</code> sobrescreve <code>letter</code> e <code>imageUrl</code>.</li>
          <li><code>letter</code> sobrescreve <code>imageUrl</code>.</li>
          <li>Sem imagem, letra forçada ou ícone, o componente usa a inicial como fallback padrão.</li>
          <li>Quando <code>dropdown</code> estiver ativo sem <code>menuItems</code>, o avatar ainda expande visualmente, mas não renderiza a lista de ações.</li>
        </ul>
      </SectionCard>
    </DocsStoryLayout>
}`,...(C=(S=x.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var I,z,P;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
      description: 'Nome usado para inicial, cor e saudação do dropdown.',
      table: {
        category: 'Conteudo'
      }
    },
    size: {
      control: {
        type: 'radio'
      },
      options: ['small', 'medium', 'large'],
      description: 'Escolhe a escala visual do avatar.',
      table: {
        category: 'Apresentacao'
      }
    },
    imageUrl: {
      control: 'text',
      description: 'URL opcional da imagem do avatar. É ignorada se letter ou iconic estiverem ativos.',
      table: {
        category: 'Apresentacao'
      }
    },
    letter: {
      control: 'boolean',
      description: 'Força a exibição da inicial do nome, mesmo quando existe imageUrl.',
      table: {
        category: 'Apresentacao'
      }
    },
    iconic: {
      control: 'boolean',
      description: 'Ativa o modo com ícone de usuário e sobrescreve imagem e inicial.',
      table: {
        category: 'Apresentacao'
      }
    },
    dropdown: {
      control: 'boolean',
      description: 'Ativa a anatomia com saudação e menu local.',
      table: {
        category: 'Comportamento'
      }
    },
    menuPreset: {
      control: {
        type: 'select'
      },
      options: ['none', 'account', 'session'],
      labels: {
        none: 'Sem itens',
        account: 'Conta',
        session: 'Sessão'
      },
      description: 'Preset de menu usado pelo story interativo quando dropdown estiver ativo.',
      table: {
        category: 'Story'
      }
    }
  },
  parameters: {
    controls: {
      exclude: ['className', 'menuItems']
    }
  },
  render: args => <AvatarInteractivePreview key={getAvatarInteractivePreviewKey(args)} {...args} />
}`,...(P=(z=h.parameters)==null?void 0:z.docs)==null?void 0:P.source}}};const ue=["AvatarDocumentacao","AvatarInterativo"];export{x as AvatarDocumentacao,h as AvatarInterativo,ue as __namedExportsOrder,pe as default};
