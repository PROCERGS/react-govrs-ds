import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{D as B,S,s as i,a as r,b as n,c as t}from"./storyDocs-CoQtGjOG.js";import{B as a}from"./Button-DnfRrOli.js";/* empty css              */import"./index-DyTKwKRb.js";import"./_commonjsHelpers-Cpj98o6Y.js";const q=["primary","secondary","tertiary"],C=[{title:"Quando usar",text:"Quando a interface precisa expor uma ação clicável com hierarquia visual clara."},{title:"Melhor exploração",text:"Use o story 'Interativo' para testar variant, size e estados. O story 'Exemplos Combinados' resume os cenários mais recorrentes em uma visão única."},{title:"Comportamento",text:"O componente repassa props nativas do button HTML. type padrão é button, loading desabilita clique e submit, e darkMode troca apenas os tokens do próprio botão."}],k=`<Button variant="primary">Primário</Button>
<Button variant="secondary">Secundário</Button>
<Button variant="tertiary">Terciário</Button>`,E=`<Button variant="primary" size="small">Pequeno</Button>
<Button variant="primary">Médio</Button>
<Button variant="primary" size="large">Grande</Button>
<Button variant="primary" loading>Carregando</Button>
<Button variant="primary" disabled>Desabilitado</Button>
<Button variant="primary" active>Ativo</Button>`,M=`
          <Button variant="primary" circle aria-label="Adicionar item">+</Button>
          <Button variant="secondary" circle aria-label="Fechar">x</Button>
          <Button variant="tertiary" circle aria-label="Remover">-</Button>

          <Button variant="primary" fullWidth>Ação em bloco</Button>
          <Button variant="secondary" fullWidth>Ação secundária em bloco</Button>`,w=`function MeuFormulario() {
  return (
    <form onSubmit={handleSubmit}>
      <Button onClick={handleClick}>Ação comum</Button>

      <Button type="submit" name="acao" value="salvar">
        Salvar formulário
      </Button>
    </form>
  )
}`,W=`<div style={{ background: '#04290f', padding: 16 }}>
  <Button variant="primary" darkMode>Primário escuro</Button>
  <Button variant="secondary" darkMode>Secundário escuro</Button>
  <Button variant="tertiary" darkMode>Terciário escuro</Button>
</div>`,f={display:"flex",gap:12,flexWrap:"wrap",alignItems:"center",padding:18,borderRadius:20,background:"linear-gradient(135deg, #04290f 0%, #0b431a 100%)"},G={title:"Ações/Button",component:a,parameters:{layout:"padded",controls:{expanded:!0,sort:"requiredFirst"}}};function z(){return e.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap"},children:[e.jsx(a,{variant:"primary",children:"Primário"}),e.jsx(a,{variant:"secondary",children:"Secundário"}),e.jsx(a,{variant:"tertiary",children:"Terciário"})]})}function D(){return e.jsxs("div",{style:i.previewGrid,children:[e.jsx(t,{label:"Small",children:e.jsx(a,{variant:"primary",size:"small",children:"Pequeno"})}),e.jsx(t,{label:"Medium",children:e.jsx(a,{variant:"primary",children:"Médio"})}),e.jsx(t,{label:"Large",children:e.jsx(a,{variant:"primary",size:"large",children:"Grande"})}),e.jsx(t,{label:"Loading",children:e.jsx(a,{variant:"primary",loading:!0,children:"Carregando"})}),e.jsx(t,{label:"Disabled",children:e.jsx(a,{variant:"primary",disabled:!0,children:"Desabilitado"})}),e.jsx(t,{label:"Active",children:e.jsx(a,{variant:"primary",active:!0,children:"Ativo"})})]})}function P(){return e.jsxs("div",{style:i.cardGrid,children:[e.jsx(t,{label:"Circular",children:e.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap",alignItems:"center"},children:[e.jsx(a,{variant:"primary",circle:!0,"aria-label":"Adicionar item",children:"+"}),e.jsx(a,{variant:"secondary",circle:!0,"aria-label":"Fechar",children:"x"}),e.jsx(a,{variant:"tertiary",circle:!0,"aria-label":"Remover",children:"-"})]})}),e.jsx(t,{label:"Full width",children:e.jsxs("div",{style:{display:"grid",gap:12,width:"100%",maxWidth:340},children:[e.jsx(a,{variant:"primary",fullWidth:!0,children:"Ação em bloco"}),e.jsx(a,{variant:"secondary",fullWidth:!0,children:"Ação secundária em bloco"})]})})]})}function j(){return e.jsxs("div",{style:f,children:[e.jsx(a,{variant:"primary",darkMode:!0,children:"Primário escuro"}),e.jsx(a,{variant:"secondary",darkMode:!0,children:"Secundário escuro"}),e.jsx(a,{variant:"tertiary",darkMode:!0,children:"Terciário escuro"})]})}function A(){return e.jsxs("div",{style:i.cardGrid,children:[e.jsx(t,{label:"Evento nativo",children:e.jsxs("div",{style:{display:"grid",gap:12,justifyItems:"start"},children:[e.jsx(a,{variant:"primary",onClick:()=>{},children:"onClick padrão"}),e.jsxs("p",{style:i.statText,children:["Props como ",e.jsx("code",{children:"onClick"}),", ",e.jsx("code",{children:"name"}),", ",e.jsx("code",{children:"value"}),","," ",e.jsx("code",{children:"form"}),", ",e.jsx("code",{children:"aria-*"})," e ",e.jsx("code",{children:"data-*"})," seguem o contrato nativo do elemento ",e.jsx("code",{children:"button"}),"."]})]})}),e.jsx(t,{label:"Submit de formulário",children:e.jsxs("div",{style:{display:"grid",gap:12,width:"100%",maxWidth:320},children:[e.jsxs("form",{onSubmit:o=>{o.preventDefault()},style:{display:"grid",gap:12},children:[e.jsx(a,{variant:"secondary",children:"type padrão = button"}),e.jsx(a,{type:"submit",children:"type submit"})]}),e.jsxs("p",{style:i.statText,children:["O componente não submete formulário sozinho por padrão: para isso, use"," ",e.jsx("code",{children:'type="submit"'})," no botão e ",e.jsx("code",{children:"onSubmit"})," no"," ",e.jsx("code",{children:"form"}),"."]})]})})]})}function T(){return e.jsxs("div",{style:{display:"grid",gap:16,maxWidth:760},children:[e.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap"},children:[e.jsx(a,{variant:"primary",children:"Primário"}),e.jsx(a,{variant:"secondary",children:"Secundário"}),e.jsx(a,{variant:"tertiary",children:"Terciário"})]}),e.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap",alignItems:"center"},children:[e.jsx(a,{variant:"primary",size:"small",children:"Pequeno"}),e.jsx(a,{variant:"primary",children:"Médio"}),e.jsx(a,{variant:"primary",size:"large",children:"Grande"}),e.jsx(a,{variant:"primary",loading:!0,children:"Carregando"}),e.jsx(a,{variant:"primary",disabled:!0,children:"Desabilitado"}),e.jsx(a,{variant:"primary",active:!0,children:"Ativo"}),e.jsx(a,{variant:"secondary",circle:!0,"aria-label":"Adicionar item",children:"+"})]}),e.jsx(j,{})]})}function L(o){const g=o.darkMode?{...f,width:o.fullWidth?"100%":void 0,maxWidth:o.fullWidth?420:void 0}:{...i.previewStage,padding:16,width:o.fullWidth?"100%":void 0,maxWidth:o.fullWidth?420:void 0};return e.jsx("div",{style:g,children:e.jsx(a,{...o})})}const s={name:"Documentação",parameters:{controls:{disable:!0}},render:()=>e.jsxs(B,{children:[e.jsx(S,{eyebrow:"Documentação guiada",title:e.jsx("h3",{style:i.heroTitle,children:"Button"}),description:e.jsxs(e.Fragment,{children:["O componente ",e.jsx("code",{children:"Button"})," representa ações acionáveis com níveis diferentes de destaque visual."]}),variantTags:q,stats:C}),e.jsxs(r,{title:"Hierarquia visual",description:"Escolha a variante pelo papel da ação na tela: primary para principal, secondary para ações de apoio ainda relevantes e tertiary para ações mais discretas.",children:[e.jsxs("ul",{style:i.list,children:[e.jsxs("li",{children:[e.jsx("code",{children:"variant"})," define a prioridade visual entre primary, secondary e tertiary."]}),e.jsxs("li",{children:[e.jsx("code",{children:"children"})," permite a criação de estruturas mais complexas dentro do botão."]}),e.jsx("li",{children:"O mesmo contrato pode ser combinado com size, fullWidth, circle e darkMode sem trocar o papel semântico do botão."})]}),e.jsx(n,{title:"Variantes básicas",description:"Comparativo direto entre os três níveis de destaque para ajudar a escolher a hierarquia correta antes de ajustar o restante das props.",code:k,notes:["A variant deve refletir a prioridade da ação no fluxo, não apenas preferência estética.","Se várias ações estiverem disputando destaque, o problema tende a estar na hierarquia da tela, não no botão."],children:e.jsx(z,{})})]}),e.jsx(r,{title:"Tamanhos e estados",description:"size ajusta a densidade visual, enquanto loading, disabled e active alteram o comportamento percebido. loading desabilita a interação e active continua sendo um estado visual controlado externamente. Quando loading estiver ativo, o texto tende a deixar de aparecer visualmente e o indicador de carregamento assume esse espaço.",children:e.jsx(n,{title:"Escala e feedback",description:"Snapshot com tamanhos e estados mais recorrentes para verificar densidade, contraste e feedback visual lado a lado.",code:E,notes:["loading substitui a disponibilidade de clique; não use esperando interação simultânea.","Quando loading está ativo, o conteúdo textual tende a ficar oculto visualmente e o ícone de carregamento vira o feedback principal do botão.","active não alterna sozinho: o consumidor define quando esse destaque faz sentido."],children:e.jsx(D,{})})}),e.jsx(r,{title:"Layout e composição",description:"circle e fullWidth mudam a forma de encaixe do botão na interface. circle funciona melhor com conteúdo curto ou icon-only, enquanto fullWidth depende diretamente da largura disponível no container pai.",children:e.jsx(n,{title:"Forma e ocupação",description:"Exemplos lado a lado para decidir quando usar um botão circular e quando faz mais sentido ocupar toda a largura disponível.",code:M,notes:["Se o botão circular não tiver texto explícito, forneça um nome acessível por aria-label.","fullWidth ocupa apenas a largura que o container disponibiliza; ele não ignora limites do layout pai."],children:e.jsx(P,{})})}),e.jsx(r,{title:"Eventos nativos e formulário",description:"O componente herda o contrato nativo de um button HTML, então aceita eventos e atributos como onClick, name, value, form, aria-* e data-*. A diferença principal é que o type padrão aqui é button, não submit.",children:e.jsx(n,{title:"Clique comum e submit explícito",description:"Exemplo resumido para deixar claro quando o botão se comporta como ação comum e quando ele realmente participa da submissão de um formulário.",code:w,notes:["onClick funciona como em um button HTML comum, porque as props nativas são repassadas ao elemento real.",'Para submissão de formulário, use type="submit" no Button e onSubmit no form.',"Se loading ou disabled estiverem ativos, o botão fica desabilitado e deixa de clicar ou submeter."],children:e.jsx(A,{})})}),e.jsx(r,{title:"Dark mode",description:"darkMode troca os tokens do próprio componente para uso sobre superfícies escuras, mas o fundo do container continua sendo responsabilidade de quem consome o design system.",children:e.jsx(n,{title:"Contraste sobre fundo escuro",description:"Exemplo direto do mesmo conjunto de variantes renderizado em uma superfície escura controlada pela própria story.",code:W,notes:["darkMode não aplica tema global; ele apenas escolhe a variação de contraste do botão.","Vale validar o contraste do container real da interface quando o botão for usado em produto."],children:e.jsx(j,{})})}),e.jsx(r,{title:"Limitações e dependências",description:"O componente cobre bem a apresentação da ação, mas continua dependendo do contexto de uso para acessibilidade final, largura disponível e controle de estado.",children:e.jsxs("ul",{style:i.list,children:[e.jsxs("li",{children:[e.jsx("code",{children:"circle"})," faz mais sentido com conteúdo curto; em uso icon-only, forneça ",e.jsx("code",{children:"aria-label"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"darkMode"})," não desenha a superfície escura ao redor; o container continua sob responsabilidade de quem consome."]}),e.jsxs("li",{children:[e.jsx("code",{children:"loading"})," torna o botão indisponível enquanto o feedback visual de carregamento estiver ativo."]}),e.jsxs("li",{children:["O tipo padrão é ",e.jsx("code",{children:"button"}),"; para submissão de formulário, defina ",e.jsx("code",{children:'type="submit"'})," explicitamente."]}),e.jsxs("li",{children:[e.jsx("code",{children:"active"})," é apenas visual e deve refletir estado externo do fluxo, aba ou seleção atual."]}),e.jsxs("li",{children:[e.jsx("code",{children:"fullWidth"})," depende do container pai; em um wrapper estreito, o botão continuará respeitando esse limite."]})]})})]})},d={name:"Interativo",argTypes:{modoContraste:{control:"boolean",description:"Visualiza o componente no modo de alto contraste.",table:{category:"Acessibilidade"}},variant:{control:{type:"radio"},options:["primary","secondary","tertiary"],description:"Define a hierarquia visual da ação.",table:{category:"Estado visual"}},size:{control:{type:"radio"},options:["small","medium","large"],description:"Ajusta a altura e a densidade visual do botão.",table:{category:"Estado visual"}},children:{control:"text",description:"Rótulo visível exibido dentro do botão.",table:{category:"Conteúdo"}},circle:{control:"boolean",description:"Aplica o formato circular; em uso icon-only, combine com aria-label.",table:{category:"Layout"}},fullWidth:{control:"boolean",description:"Ocupa 100% da largura disponível no container pai.",table:{category:"Layout"}},loading:{control:"boolean",description:"Mostra o estado de carregamento e desabilita a interação.",table:{category:"Estado"}},active:{control:"boolean",description:"Aplica apenas o estado visual ativo; o controle desse estado é externo.",table:{category:"Estado"}},darkMode:{control:"boolean",description:"Usa os tokens de contraste do componente para superfícies escuras.",table:{category:"Contexto"}},disabled:{control:"boolean",description:"Bloqueia a interação e aplica o estado visual desabilitado.",table:{category:"Estado"}},onClick:{action:"clicked",description:"Recebe o clique do botão quando ele estiver habilitado.",table:{category:"Eventos"}}},args:{variant:"primary",size:"medium",children:"Button de exemplo",circle:!1,fullWidth:!1,loading:!1,active:!1,darkMode:!1,disabled:!1},render:o=>e.jsx(L,{...o})},l={name:"Exemplos Combinados",parameters:{controls:{disable:!0}},render:()=>e.jsx(T,{})};var c,u,p;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Documentação',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <DocsStoryLayout>
      <DocsHero eyebrow="Documentação guiada" title={<h3 style={storyDocsStyles.heroTitle}>Button</h3>} description={<>
            O componente <code>Button</code> representa ações acionáveis com níveis
            diferentes de destaque visual.
          </>} variantTags={docsVariantTags} stats={docsHeroStats} />

      <SectionCard title="Hierarquia visual" description="Escolha a variante pelo papel da ação na tela: primary para principal, secondary para ações de apoio ainda relevantes e tertiary para ações mais discretas.">
        <ul style={storyDocsStyles.list}>
          <li><code>variant</code> define a prioridade visual entre primary, secondary e tertiary.</li>
          <li><code>children</code> permite a criação de estruturas mais complexas dentro do botão.</li>
          <li>O mesmo contrato pode ser combinado com size, fullWidth, circle e darkMode sem trocar o papel semântico do botão.</li>
        </ul>

        <SandboxExample title="Variantes básicas" description="Comparativo direto entre os três níveis de destaque para ajudar a escolher a hierarquia correta antes de ajustar o restante das props." code={variantsExampleCode} notes={['A variant deve refletir a prioridade da ação no fluxo, não apenas preferência estética.', 'Se várias ações estiverem disputando destaque, o problema tende a estar na hierarquia da tela, não no botão.']}>
          <ButtonVariantsPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="Tamanhos e estados" description="size ajusta a densidade visual, enquanto loading, disabled e active alteram o comportamento percebido. loading desabilita a interação e active continua sendo um estado visual controlado externamente. Quando loading estiver ativo, o texto tende a deixar de aparecer visualmente e o indicador de carregamento assume esse espaço.">
        <SandboxExample title="Escala e feedback" description="Snapshot com tamanhos e estados mais recorrentes para verificar densidade, contraste e feedback visual lado a lado." code={statesExampleCode} notes={['loading substitui a disponibilidade de clique; não use esperando interação simultânea.', 'Quando loading está ativo, o conteúdo textual tende a ficar oculto visualmente e o ícone de carregamento vira o feedback principal do botão.', 'active não alterna sozinho: o consumidor define quando esse destaque faz sentido.']}>
          <ButtonStatesPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="Layout e composição" description="circle e fullWidth mudam a forma de encaixe do botão na interface. circle funciona melhor com conteúdo curto ou icon-only, enquanto fullWidth depende diretamente da largura disponível no container pai.">
        <SandboxExample title="Forma e ocupação" description="Exemplos lado a lado para decidir quando usar um botão circular e quando faz mais sentido ocupar toda a largura disponível." code={layoutExampleCode} notes={['Se o botão circular não tiver texto explícito, forneça um nome acessível por aria-label.', 'fullWidth ocupa apenas a largura que o container disponibiliza; ele não ignora limites do layout pai.']}>
          <ButtonLayoutPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="Eventos nativos e formulário" description="O componente herda o contrato nativo de um button HTML, então aceita eventos e atributos como onClick, name, value, form, aria-* e data-*. A diferença principal é que o type padrão aqui é button, não submit.">
        <SandboxExample title="Clique comum e submit explícito" description="Exemplo resumido para deixar claro quando o botão se comporta como ação comum e quando ele realmente participa da submissão de um formulário." code={nativeBehaviorExampleCode} notes={['onClick funciona como em um button HTML comum, porque as props nativas são repassadas ao elemento real.', 'Para submissão de formulário, use type="submit" no Button e onSubmit no form.', 'Se loading ou disabled estiverem ativos, o botão fica desabilitado e deixa de clicar ou submeter.']}>
          <ButtonNativeBehaviorPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="Dark mode" description="darkMode troca os tokens do próprio componente para uso sobre superfícies escuras, mas o fundo do container continua sendo responsabilidade de quem consome o design system.">
        <SandboxExample title="Contraste sobre fundo escuro" description="Exemplo direto do mesmo conjunto de variantes renderizado em uma superfície escura controlada pela própria story." code={darkModeExampleCode} notes={['darkMode não aplica tema global; ele apenas escolhe a variação de contraste do botão.', 'Vale validar o contraste do container real da interface quando o botão for usado em produto.']}>
          <ButtonDarkModePreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="Limitações e dependências" description="O componente cobre bem a apresentação da ação, mas continua dependendo do contexto de uso para acessibilidade final, largura disponível e controle de estado.">
        <ul style={storyDocsStyles.list}>
          <li><code>circle</code> faz mais sentido com conteúdo curto; em uso icon-only, forneça <code>aria-label</code>.</li>
          <li><code>darkMode</code> não desenha a superfície escura ao redor; o container continua sob responsabilidade de quem consome.</li>
          <li><code>loading</code> torna o botão indisponível enquanto o feedback visual de carregamento estiver ativo.</li>
          <li>O tipo padrão é <code>button</code>; para submissão de formulário, defina <code>type=&quot;submit&quot;</code> explicitamente.</li>
          <li><code>active</code> é apenas visual e deve refletir estado externo do fluxo, aba ou seleção atual.</li>
          <li><code>fullWidth</code> depende do container pai; em um wrapper estreito, o botão continuará respeitando esse limite.</li>
        </ul>
      </SectionCard>
    </DocsStoryLayout>
}`,...(p=(u=s.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var m,v,b;d.parameters={...d.parameters,docs:{...(m=d.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
      control: {
        type: 'radio'
      },
      options: ['primary', 'secondary', 'tertiary'],
      description: 'Define a hierarquia visual da ação.',
      table: {
        category: 'Estado visual'
      }
    },
    size: {
      control: {
        type: 'radio'
      },
      options: ['small', 'medium', 'large'],
      description: 'Ajusta a altura e a densidade visual do botão.',
      table: {
        category: 'Estado visual'
      }
    },
    children: {
      control: 'text',
      description: 'Rótulo visível exibido dentro do botão.',
      table: {
        category: 'Conteúdo'
      }
    },
    circle: {
      control: 'boolean',
      description: 'Aplica o formato circular; em uso icon-only, combine com aria-label.',
      table: {
        category: 'Layout'
      }
    },
    fullWidth: {
      control: 'boolean',
      description: 'Ocupa 100% da largura disponível no container pai.',
      table: {
        category: 'Layout'
      }
    },
    loading: {
      control: 'boolean',
      description: 'Mostra o estado de carregamento e desabilita a interação.',
      table: {
        category: 'Estado'
      }
    },
    active: {
      control: 'boolean',
      description: 'Aplica apenas o estado visual ativo; o controle desse estado é externo.',
      table: {
        category: 'Estado'
      }
    },
    darkMode: {
      control: 'boolean',
      description: 'Usa os tokens de contraste do componente para superfícies escuras.',
      table: {
        category: 'Contexto'
      }
    },
    disabled: {
      control: 'boolean',
      description: 'Bloqueia a interação e aplica o estado visual desabilitado.',
      table: {
        category: 'Estado'
      }
    },
    onClick: {
      action: 'clicked',
      description: 'Recebe o clique do botão quando ele estiver habilitado.',
      table: {
        category: 'Eventos'
      }
    }
  },
  args: {
    variant: 'primary',
    size: 'medium',
    children: 'Button de exemplo',
    circle: false,
    fullWidth: false,
    loading: false,
    active: false,
    darkMode: false,
    disabled: false
  },
  render: args => <ButtonInteractivePreview {...args} />
}`,...(b=(v=d.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var x,y,h;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Exemplos Combinados',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <ButtonCombinedPreview />
}`,...(h=(y=l.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};const Q=["ButtonDocumentacao","ButtonInterativo","ButtonCombinados"];export{l as ButtonCombinados,s as ButtonDocumentacao,d as ButtonInterativo,Q as __namedExportsOrder,G as default};
