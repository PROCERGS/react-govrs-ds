import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{D,S as V,s as o,a as n,b as c,c as s}from"./storyDocs-CoQtGjOG.js";import{C as r}from"./Card-UAWlkjxH.js";/* empty css              */import"./index-DyTKwKRb.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Text-DqgU3e9e.js";const A=["post","list","news","icon"],T=[{title:"Quando usar",text:"Quando a interface precisa resumir conteúdo em um bloco clicável, com variações entre destaque editorial, lista, notícia ou acesso iconográfico."},{title:"Melhor exploração",text:"Use o story 'Interativo' para configurar um card por vez. O story 'Variantes' compara os quatro formatos principais lado a lado."},{title:"Comportamento",text:"A variante list expande itens localmente, post suporta ação e callbacks sociais, e news ou icon cobrem superfícies mais enxutas de navegação."}],m="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",w="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",I="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&h=400&fit=crop",L="https://api.iconify.design/mdi/lightbulb-on.svg?color=%231A7235&width=200&height=200",u=[{value:"Item 1"},{value:"Item 2"},{value:"Item 3"}],x={label:"Ver mais",url:"#"},O=`<Card variant="post" title="Card de Post" description="Card com ações sociais" image="https://..." />
<Card variant="list" title="Card de Lista" description="Lista expansível" image="https://..." />
<Card variant="news" title="Card de Notícia" description="Resumo editorial" image="https://..." />
<Card variant="icon" title="Card de Ícone" description="Ícone e texto" image="https://..." />`,N=`<Card
  variant="post"
  image="https://.../imagem.jpg"
  title="Card de Post"
  description="Card com ações sociais"
  acao={{ label: 'Ver mais', url: '#' }}
  href="#"
  onLike={handleLike}
  onShare={handleShare}
>
  Área de conteúdo principal do card.
</Card>`,G=`<Card
  variant="list"
  image="https://.../imagem.jpg"
  title="Card de Lista"
  description="Lista expansível"
  itens={[{ value: 'Item 1' }, { value: 'Item 2' }, { value: 'Item 3' }]}
  href="#"
/>
`,R=`<Card
  variant="news"
  image="https://.../imagem.jpg"
  title="Card de Notícia"
  description="Exemplo de notícia"
  href="#"
/>

<Card
  variant="icon"
  image="https://.../icone.svg"
  title="Card de Ícone"
  description="Ícone e texto"
  href="#"
/>`;function M(i){switch(i){case"list":return w;case"news":return I;case"icon":return L;case"post":default:return m}}const Y={title:"Conteúdo/Card",component:r,args:{title:"Título base do Card"},parameters:{layout:"padded",controls:{expanded:!0,sort:"requiredFirst"}}};function q(){return e.jsx(r,{variant:"post",image:m,title:"Card de Post",description:"Card com ações sociais",acao:x,href:"#",onLike:()=>{},onShare:()=>{},children:"Área de conteúdo principal do card."})}function E(){return e.jsx(r,{variant:"list",image:w,title:"Card de Lista",description:"Lista expansível",itens:u,href:"#"})}function P(){return e.jsx(r,{variant:"news",image:I,title:"Card de Notícia",description:"Exemplo de notícia",href:"#"})}function z(){return e.jsx(r,{variant:"icon",image:L,title:"Card de Ícone",description:"Ícone e texto",href:"#"})}function k(){return e.jsxs("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:16,alignItems:"stretch"},children:[e.jsx(q,{}),e.jsx(E,{}),e.jsx(P,{}),e.jsx(z,{})]})}function _(){return e.jsxs("div",{style:o.cardGrid,children:[e.jsx(P,{}),e.jsx(z,{})]})}function Q(){return e.jsxs("div",{style:o.cardGrid,children:[e.jsx(s,{label:"Comuns a todas",children:e.jsxs("ul",{style:o.list,children:[e.jsxs("li",{children:[e.jsx("code",{children:"title"})," é obrigatório em todas as variantes."]}),e.jsxs("li",{children:[e.jsx("code",{children:"description"})," complementa o resumo quando existir contexto adicional."]}),e.jsxs("li",{children:[e.jsx("code",{children:"image"})," e ",e.jsx("code",{children:"imageAlt"})," podem aparecer em todas."]}),e.jsxs("li",{children:[e.jsx("code",{children:"href"}),", ",e.jsx("code",{children:"disabled"})," e ",e.jsx("code",{children:"size"})," continuam válidos em qualquer formato."]})]})}),e.jsx(s,{label:"Post",children:e.jsxs("ul",{style:o.list,children:[e.jsxs("li",{children:[e.jsx("code",{children:"children"})," compõe o corpo principal do card."]}),e.jsxs("li",{children:[e.jsx("code",{children:"acao"})," adiciona a chamada de rodapé."]}),e.jsxs("li",{children:[e.jsx("code",{children:"onLike"})," e ",e.jsx("code",{children:"onShare"})," controlam as ações sociais."]}),e.jsxs("li",{children:[e.jsx("code",{children:"tags"})," aparece como parágrafo verde abaixo do cabeçalho; sem tags, essa faixa não aparece."]}),e.jsxs("li",{children:[e.jsx("code",{children:"bodyImg"})," e ",e.jsx("code",{children:"bodyImgAlt"})," adicionam imagem extra no corpo."]})]})}),e.jsx(s,{label:"List",children:e.jsxs("ul",{style:o.list,children:[e.jsxs("li",{children:[e.jsx("code",{children:"itens"})," é a prop que realmente caracteriza a variante list."]}),e.jsxs("li",{children:[e.jsx("code",{children:"children"})," e ",e.jsx("code",{children:"bodyImg"})," ainda podem aparecer porque a base visual é compartilhada com post."]}),e.jsxs("li",{children:[e.jsx("code",{children:"acao"}),", ",e.jsx("code",{children:"onLike"})," e ",e.jsx("code",{children:"onShare"})," deixam de ser o uso esperado quando a lista expansível está presente."]})]})}),e.jsx(s,{label:"News",children:e.jsxs("ul",{style:o.list,children:[e.jsxs("li",{children:[e.jsx("code",{children:"children"})," é opcional e entra como corpo extra abaixo da descrição, sem alterar a ordem da imagem, das tags e do cabeçalho."]}),e.jsxs("li",{children:[e.jsx("code",{children:"tags"})," e ",e.jsx("code",{children:"tagsLimit"})," viram um parágrafo verde abaixo da imagem; sem tags, essa faixa não aparece."]}),e.jsxs("li",{children:[e.jsx("code",{children:"onLike"})," e ",e.jsx("code",{children:"onShare"})," exibem os ícones sociais e o menu do cabeçalho."]}),e.jsxs("li",{children:[e.jsx("code",{children:"acao"}),", ",e.jsx("code",{children:"itens"})," e ",e.jsx("code",{children:"bodyImg"})," não entram na renderização desta variante."]})]})}),e.jsx(s,{label:"Icon",children:e.jsxs("ul",{style:o.list,children:[e.jsxs("li",{children:["O foco fica em ",e.jsx("code",{children:"image"}),", ",e.jsx("code",{children:"title"}),", ",e.jsx("code",{children:"description"})," e ",e.jsx("code",{children:"href"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"children"}),", ",e.jsx("code",{children:"acao"}),", ",e.jsx("code",{children:"itens"}),", ",e.jsx("code",{children:"bodyImg"}),", ",e.jsx("code",{children:"onLike"})," e ",e.jsx("code",{children:"onShare"})," são ignorados nessa anatomia."]})]})})]})}function U({showInteractive:i=!0,...t}){const a=t.variant??"post";return e.jsxs("div",{className:i?void 0:"govrs-story-card-no-interactive",style:{padding:12,maxWidth:1200},children:[i?null:e.jsx("style",{children:".govrs-story-card-no-interactive .govrs-card-interactive { display: none; }"}),e.jsx(r,{...t,image:t.image||M(a),href:t.href||"#",acao:a==="post"?t.acao??x:void 0,itens:a==="list"?t.itens??u:void 0,tags:a==="icon"||a==="list"?void 0:t.tags,tagsLimit:a==="icon"||a==="list"?void 0:t.tagsLimit,onLike:(a==="post"||a==="news")&&i?t.onLike:void 0,onShare:(a==="post"||a==="news")&&i?t.onShare:void 0,children:a==="icon"?void 0:t.children})]})}const d={name:"Documentação",parameters:{controls:{disable:!0}},render:()=>e.jsxs(D,{children:[e.jsx(V,{eyebrow:"Documentação guiada",title:e.jsx("h3",{style:o.heroTitle,children:"Card"}),description:e.jsxs(e.Fragment,{children:["O componente ",e.jsx("code",{children:"Card"})," cobre quatro formatos recorrentes de resumo de conteúdo."]}),variantTags:A,stats:T}),e.jsxs(n,{title:"Como escolher a variante",description:"A escolha da variante depende menos da aparência isolada e mais do papel do bloco na página. Post prioriza conteúdo com ação e interação social; list destaca uma coleção expansível; news resume destaque editorial; icon cobre chamadas compactas.",children:[e.jsxs("ul",{style:o.list,children:[e.jsxs("li",{children:[e.jsx("code",{children:"post"})," combina imagem, descrição, children, ação e callbacks sociais."]}),e.jsxs("li",{children:[e.jsx("code",{children:"list"})," adiciona uma lista expansível controlada localmente pelo próprio componente."]}),e.jsxs("li",{children:[e.jsx("code",{children:"news"})," funciona bem para destaques editoriais com leitura mais direta."]}),e.jsxs("li",{children:[e.jsx("code",{children:"icon"})," reduz a estrutura para um acesso compacto com imagem ou ícone e textos curtos."]})]}),e.jsx(c,{title:"Galeria de variantes",description:"Visão comparativa das quatro estruturas principais para ajudar na escolha do contrato certo antes de ajustar detalhes.",code:O,notes:["A composição muda bastante entre as variantes, então vale escolher primeiro o formato e depois refinar props.","O story Variantes mantém essa comparação disponível como uma história dedicada para exploração rápida."],children:e.jsx(k,{})})]}),e.jsx(n,{title:"Variante post",description:"Use post quando o card precisa acomodar mais contexto, uma ação explícita no rodapé e callbacks para curtir ou compartilhar. É a superfície mais completa entre as quatro variantes.",children:e.jsx(c,{title:"Card com ação e interações",description:"Exemplo principal da variante post com imagem, descrição, children e ação no rodapé.",code:N,children:e.jsx(q,{})})}),e.jsx(n,{title:"Variante list",description:"List reaproveita a base do card, mas troca o rodapé por uma lista expansível. Ela funciona bem para agrupar itens relacionados sob um mesmo título e resumo.",children:e.jsx(c,{title:"Lista expansível",description:"O componente controla a abertura da lista internamente, enquanto os itens continuam vindo por props.",code:G,children:e.jsx(E,{})})}),e.jsxs(n,{title:"News e icon",description:"Essas duas variantes cobrem casos mais enxutos. News tende a destacar conteúdo editorial ou notícia, enquanto icon favorece acessos rápidos com uma imagem mais simbólica.",children:[e.jsx(c,{title:"Resumo editorial e acesso compacto",description:"Comparativo direto entre as variantes news e icon, preservando a intenção dos exemplos anteriores.",code:R,children:e.jsx(_,{})}),e.jsxs("p",{style:o.text,children:["Em ",e.jsx("code",{children:"news"})," e ",e.jsx("code",{children:"post"}),", ",e.jsx("code",{children:"tags"})," é opcional e aparece como um parágrafo na cor verde padrão, abaixo da imagem ou do cabeçalho. Sem tags, essa faixa não é renderizada."]})]}),e.jsxs(n,{title:"Props principais",description:"Pense o componente em duas camadas: primeiro as props comuns, depois as props que realmente entram na anatomia da variante escolhida. Quando uma prop não participa daquele formato, ela tende a não alterar a renderização final.",children:[e.jsxs("p",{style:o.text,children:["Leitura rápida: escolha primeiro a ",e.jsx("code",{children:"variant"})," e depois concentre o uso nas props daquele formato. Isso evita passar props que existem no tipo geral, mas não aparecem visualmente em todas as variantes."]}),e.jsx(Q,{})]}),e.jsx(n,{title:"Limitações e dependências",description:"O componente organiza bem conteúdo resumido, mas a variante certa continua sendo a decisão que mais afeta clareza e manutenção do uso final.",children:e.jsxs("ul",{style:o.list,children:[e.jsxs("li",{children:[e.jsx("code",{children:"list"})," controla apenas a abertura local; ele não faz fetch nem sincroniza itens externamente."]}),e.jsxs("li",{children:[e.jsx("code",{children:"post"})," é a variante indicada para ação de rodapé e callbacks sociais; nas demais, essas props perdem sentido."]}),e.jsxs("li",{children:[e.jsx("code",{children:"disabled"})," reduz navegação e interação, mas não substitui regras de permissão ou negócio fora do componente."]}),e.jsx("li",{children:"Como a estrutura varia bastante, mudar apenas props sem revisar a variante pode gerar um card visualmente incoerente para o contexto."})]})})]})},l={name:"Interativo",argTypes:{modoContraste:{control:"boolean",description:"Visualiza o componente no modo de alto contraste.",table:{category:"Acessibilidade"}},variant:{control:{type:"radio"},options:["post","list","news","icon"],description:"Seleciona a anatomia principal do card.",table:{category:"Composição"}},size:{control:{type:"select"},options:["padrao","small","large"],mapping:{padrao:void 0,small:"small",large:"large"},labels:{padrao:"Padrao",small:"Small",large:"Large"},description:"Ajusta a escala visual quando a variante suportar esse refinamento.",table:{category:"Estado visual"}},title:{control:"text",description:"Título principal do bloco.",table:{category:"Conteúdo"}},description:{control:"text",description:"Resumo curto exibido abaixo do título quando informado.",table:{category:"Conteúdo"}},children:{control:"text",description:"Conteúdo adicional exibido nas variantes que suportam corpo textual.",table:{category:"Conteúdo"}},image:{control:"text",description:"URL da imagem principal do card.",table:{category:"Conteúdo"}},href:{control:"text",description:"Destino do link principal do card.",table:{category:"Composição"}},showInteractive:{control:"boolean",description:"Mostra ou oculta os controles com a classe govrs-card-interactive (menu, ação, curtir e compartilhar).",table:{category:"Interação"}},bodyImg:{control:"text",description:"Imagem adicional exibida no corpo das variantes baseadas em post.",table:{category:"Conteúdo"}},disabled:{control:"boolean",description:"Reduz interação e navegação do card.",table:{category:"Estado visual"}},acao:{control:"object",description:"Objeto da ação de rodapé na variante post (`label` e `url`).",table:{category:"Conteúdo"}},itens:{control:"object",description:"Lista de objetos exibidos na variante list.",table:{category:"Conteúdo"}},tags:{control:"object",description:"Tags opcionais nas variantes news e post. Aparecem como um parágrafo verde, não como o componente Tag. Sem tags, só os ícones (quando existirem) aparecem.",table:{category:"Conteúdo"}},tagsLimit:{control:{type:"select"},options:[1,2,3],description:"Quantidade máxima de tags visíveis na variante news (1 a 3).",table:{category:"Conteúdo"}},onLike:{action:"liked",description:"Callback usado na variante post para a ação de curtir.",table:{category:"Eventos"}},onShare:{action:"shared",description:"Callback usado na variante post para a ação de compartilhar.",table:{category:"Eventos"}}},args:{variant:"post",size:void 0,title:"Título do Card",description:"Descrição do card",children:"Conteúdo opcional via children. Configure props no painel.",image:m,href:"#",disabled:!1,bodyImg:void 0,showInteractive:!0,acao:x,itens:u,tags:["noticias","Bento Gonçalves","comunicacao","enoturismo"],tagsLimit:3},render:i=>e.jsx(U,{...i})},p={name:"Variantes",parameters:{controls:{disable:!0}},render:()=>e.jsx(k,{})};var h,v,g;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Documentação',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <DocsStoryLayout>
      <DocsHero eyebrow="Documentação guiada" title={<h3 style={storyDocsStyles.heroTitle}>Card</h3>} description={<>
            O componente <code>Card</code> cobre quatro formatos recorrentes de resumo de
            conteúdo.
          </>} variantTags={docsVariantTags} stats={docsHeroStats} />

      <SectionCard title="Como escolher a variante" description="A escolha da variante depende menos da aparência isolada e mais do papel do bloco na página. Post prioriza conteúdo com ação e interação social; list destaca uma coleção expansível; news resume destaque editorial; icon cobre chamadas compactas.">
        <ul style={storyDocsStyles.list}>
          <li><code>post</code> combina imagem, descrição, children, ação e callbacks sociais.</li>
          <li><code>list</code> adiciona uma lista expansível controlada localmente pelo próprio componente.</li>
          <li><code>news</code> funciona bem para destaques editoriais com leitura mais direta.</li>
          <li><code>icon</code> reduz a estrutura para um acesso compacto com imagem ou ícone e textos curtos.</li>
        </ul>

        <SandboxExample title="Galeria de variantes" description="Visão comparativa das quatro estruturas principais para ajudar na escolha do contrato certo antes de ajustar detalhes." code={variantsOverviewCode} notes={['A composição muda bastante entre as variantes, então vale escolher primeiro o formato e depois refinar props.', 'O story Variantes mantém essa comparação disponível como uma história dedicada para exploração rápida.']}>
          <CardVariantsPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="Variante post" description="Use post quando o card precisa acomodar mais contexto, uma ação explícita no rodapé e callbacks para curtir ou compartilhar. É a superfície mais completa entre as quatro variantes.">
        <SandboxExample title="Card com ação e interações" description="Exemplo principal da variante post com imagem, descrição, children e ação no rodapé." code={postExampleCode}>
          <CardPostPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="Variante list" description="List reaproveita a base do card, mas troca o rodapé por uma lista expansível. Ela funciona bem para agrupar itens relacionados sob um mesmo título e resumo.">
        <SandboxExample title="Lista expansível" description="O componente controla a abertura da lista internamente, enquanto os itens continuam vindo por props." code={listExampleCode}>
          <CardListPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="News e icon" description="Essas duas variantes cobrem casos mais enxutos. News tende a destacar conteúdo editorial ou notícia, enquanto icon favorece acessos rápidos com uma imagem mais simbólica.">
        <SandboxExample title="Resumo editorial e acesso compacto" description="Comparativo direto entre as variantes news e icon, preservando a intenção dos exemplos anteriores." code={newsIconExampleCode}>
          <CardNewsIconPreview />
        </SandboxExample>
        <p style={storyDocsStyles.text}>
          Em <code>news</code> e <code>post</code>, <code>tags</code> é opcional e aparece
          como um parágrafo na cor verde padrão, abaixo da imagem ou do cabeçalho. Sem tags,
          essa faixa não é renderizada.
        </p>
      </SectionCard>

      <SectionCard title="Props principais" description="Pense o componente em duas camadas: primeiro as props comuns, depois as props que realmente entram na anatomia da variante escolhida. Quando uma prop não participa daquele formato, ela tende a não alterar a renderização final.">
        <p style={storyDocsStyles.text}>
          Leitura rápida: escolha primeiro a <code>variant</code> e depois concentre o uso
          nas props daquele formato. Isso evita passar props que existem no tipo geral,
          mas não aparecem visualmente em todas as variantes.
        </p>

        <CardPropsGuidePreview />
      </SectionCard>

      <SectionCard title="Limitações e dependências" description="O componente organiza bem conteúdo resumido, mas a variante certa continua sendo a decisão que mais afeta clareza e manutenção do uso final.">
        <ul style={storyDocsStyles.list}>
          <li><code>list</code> controla apenas a abertura local; ele não faz fetch nem sincroniza itens externamente.</li>
          <li><code>post</code> é a variante indicada para ação de rodapé e callbacks sociais; nas demais, essas props perdem sentido.</li>
          <li><code>disabled</code> reduz navegação e interação, mas não substitui regras de permissão ou negócio fora do componente.</li>
          <li>Como a estrutura varia bastante, mudar apenas props sem revisar a variante pode gerar um card visualmente incoerente para o contexto.</li>
        </ul>
      </SectionCard>
    </DocsStoryLayout>
}`,...(g=(v=d.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var b,j,C;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
      options: ['post', 'list', 'news', 'icon'],
      description: 'Seleciona a anatomia principal do card.',
      table: {
        category: 'Composição'
      }
    },
    size: {
      control: {
        type: 'select'
      },
      options: ['padrao', 'small', 'large'],
      mapping: {
        padrao: undefined,
        small: 'small',
        large: 'large'
      },
      labels: {
        padrao: 'Padrao',
        small: 'Small',
        large: 'Large'
      },
      description: 'Ajusta a escala visual quando a variante suportar esse refinamento.',
      table: {
        category: 'Estado visual'
      }
    },
    title: {
      control: 'text',
      description: 'Título principal do bloco.',
      table: {
        category: 'Conteúdo'
      }
    },
    description: {
      control: 'text',
      description: 'Resumo curto exibido abaixo do título quando informado.',
      table: {
        category: 'Conteúdo'
      }
    },
    children: {
      control: 'text',
      description: 'Conteúdo adicional exibido nas variantes que suportam corpo textual.',
      table: {
        category: 'Conteúdo'
      }
    },
    image: {
      control: 'text',
      description: 'URL da imagem principal do card.',
      table: {
        category: 'Conteúdo'
      }
    },
    href: {
      control: 'text',
      description: 'Destino do link principal do card.',
      table: {
        category: 'Composição'
      }
    },
    showInteractive: {
      control: 'boolean',
      description: 'Mostra ou oculta os controles com a classe govrs-card-interactive (menu, ação, curtir e compartilhar).',
      table: {
        category: 'Interação'
      }
    },
    bodyImg: {
      control: 'text',
      description: 'Imagem adicional exibida no corpo das variantes baseadas em post.',
      table: {
        category: 'Conteúdo'
      }
    },
    disabled: {
      control: 'boolean',
      description: 'Reduz interação e navegação do card.',
      table: {
        category: 'Estado visual'
      }
    },
    acao: {
      control: 'object',
      description: 'Objeto da ação de rodapé na variante post (\`label\` e \`url\`).',
      table: {
        category: 'Conteúdo'
      }
    },
    itens: {
      control: 'object',
      description: 'Lista de objetos exibidos na variante list.',
      table: {
        category: 'Conteúdo'
      }
    },
    tags: {
      control: 'object',
      description: 'Tags opcionais nas variantes news e post. Aparecem como um parágrafo verde, não como o componente Tag. Sem tags, só os ícones (quando existirem) aparecem.',
      table: {
        category: 'Conteúdo'
      }
    },
    tagsLimit: {
      control: {
        type: 'select'
      },
      options: [1, 2, 3],
      description: 'Quantidade máxima de tags visíveis na variante news (1 a 3).',
      table: {
        category: 'Conteúdo'
      }
    },
    onLike: {
      action: 'liked',
      description: 'Callback usado na variante post para a ação de curtir.',
      table: {
        category: 'Eventos'
      }
    },
    onShare: {
      action: 'shared',
      description: 'Callback usado na variante post para a ação de compartilhar.',
      table: {
        category: 'Eventos'
      }
    }
  },
  args: {
    variant: 'post',
    size: undefined,
    title: 'Título do Card',
    description: 'Descrição do card',
    children: 'Conteúdo opcional via children. Configure props no painel.',
    image: POST_IMAGE,
    href: '#',
    disabled: false,
    bodyImg: undefined,
    showInteractive: true,
    acao: postAction,
    itens: listItems,
    tags: ['noticias', 'Bento Gonçalves', 'comunicacao', 'enoturismo'],
    tagsLimit: 3
  },
  render: args => <CardInteractivePreview {...args} />
}`,...(C=(j=l.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var y,f,S;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Variantes',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <CardVariantsPreview />
}`,...(S=(f=p.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};const Z=["CardDocumentacao","CardInterativo","CardVariantes"];export{d as CardDocumentacao,l as CardInterativo,p as CardVariantes,Z as __namedExportsOrder,Y as default};
