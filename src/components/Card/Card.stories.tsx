import type { Meta, StoryObj } from '@storybook/react'

import {
  DocsHero,
  DocsStoryLayout,
  SandboxExample,
  SectionCard,
  StoryPreviewCard,
  storyDocsStyles,
} from '../../../.storybook/docs/storyDocs'
import { Card } from './Card'
import './Card.scss'
import '../../foundations/styles/index.scss'

const docsVariantTags = ['post', 'list', 'news', 'icon']

const docsHeroStats = [
  {
    title: 'Quando usar',
    text: 'Quando a interface precisa resumir conteúdo em um bloco clicável, com variações entre destaque editorial, lista, notícia ou acesso iconográfico.',
  },
  {
    title: 'Melhor exploração',
    text: "Use o story 'Interativo' para configurar um card por vez. O story 'Variantes' compara os quatro formatos principais lado a lado.",
  },
  {
    title: 'Comportamento',
    text: 'A variante list expande itens localmente, post suporta ação e callbacks sociais, e news ou icon cobrem superfícies mais enxutas de navegação.',
  },
]

const POST_IMAGE =
  'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop'
const LIST_IMAGE =
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop'
const NEWS_IMAGE =
  'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&h=400&fit=crop'
const ICON_IMAGE =
  'https://api.iconify.design/mdi/lightbulb-on.svg?color=%231A7235&width=200&height=200'

const listItems = [{ value: 'Item 1' }, { value: 'Item 2' }, { value: 'Item 3' }]
const postAction = { label: 'Ver mais', url: '#' }

const variantsOverviewCode = `<Card variant="post" title="Card de Post" description="Card com ações sociais" image="https://..." />
<Card variant="list" title="Card de Lista" description="Lista expansível" image="https://..." />
<Card variant="news" title="Card de Notícia" description="Resumo editorial" image="https://..." />
<Card variant="icon" title="Card de Ícone" description="Ícone e texto" image="https://..." />`

const postExampleCode = `<Card
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
</Card>`

const listExampleCode = `<Card
  variant="list"
  image="https://.../imagem.jpg"
  title="Card de Lista"
  description="Lista expansível"
  itens={[{ value: 'Item 1' }, { value: 'Item 2' }, { value: 'Item 3' }]}
  href="#"
/>
`

const newsIconExampleCode = `<Card
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
/>`

function resolveCardImage(variant: Card.Variant | undefined) {
  switch (variant) {
    case 'list':
      return LIST_IMAGE
    case 'news':
      return NEWS_IMAGE
    case 'icon':
      return ICON_IMAGE
    case 'post':
    default:
      return POST_IMAGE
  }
}

const meta = {
  title: 'Conteúdo/Card',
  component: Card,
  args: {
    title: 'Título base do Card',
  },
  parameters: {
    layout: 'padded',
    controls: {
      expanded: true,
      sort: 'requiredFirst',
    },
  },
} satisfies Meta<typeof Card>

export default meta

type Story = StoryObj<typeof meta>

function CardPostPreview() {
  return (
    <Card
      variant="post"
      image={POST_IMAGE}
      title="Card de Post"
      description="Card com ações sociais"
      acao={postAction}
      href="#"
      onLike={() => {}}
      onShare={() => {}}
    >
      Área de conteúdo principal do card.
    </Card>
  )
}

function CardListPreview() {
  return (
    <Card
      variant="list"
      image={LIST_IMAGE}
      title="Card de Lista"
      description="Lista expansível"
      itens={listItems}
      href="#"
    />
  )
}

function CardNewsPreview() {
  return (
    <Card
      variant="news"
      image={NEWS_IMAGE}
      title="Card de Notícia"
      description="Exemplo de notícia"
      href="#"
    />
  )
}

function CardIconPreview() {
  return (
    <Card
      variant="icon"
      image={ICON_IMAGE}
      title="Card de Ícone"
      description="Ícone e texto"
      href="#"
    />
  )
}

function CardVariantsPreview() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 16,
        alignItems: 'stretch',
      }}
    >
      <CardPostPreview />
      <CardListPreview />
      <CardNewsPreview />
      <CardIconPreview />
    </div>
  )
}

function CardNewsIconPreview() {
  return (
    <div style={storyDocsStyles.cardGrid}>
      <CardNewsPreview />
      <CardIconPreview />
    </div>
  )
}

function CardPropsGuidePreview() {
  return (
    <div style={storyDocsStyles.cardGrid}>
      <StoryPreviewCard label="Comuns a todas">
        <ul style={storyDocsStyles.list}>
          <li><code>title</code> é obrigatório em todas as variantes.</li>
          <li><code>description</code> complementa o resumo quando existir contexto adicional.</li>
          <li><code>image</code> e <code>imageAlt</code> podem aparecer em todas.</li>
          <li><code>href</code>, <code>disabled</code> e <code>size</code> continuam válidos em qualquer formato.</li>
        </ul>
      </StoryPreviewCard>

      <StoryPreviewCard label="Post">
        <ul style={storyDocsStyles.list}>
          <li><code>children</code> compõe o corpo principal do card.</li>
          <li><code>acao</code> adiciona a chamada de rodapé.</li>
          <li><code>onLike</code> e <code>onShare</code> controlam as ações sociais.</li>
          <li><code>tags</code> aparece como parágrafo verde abaixo do cabeçalho; sem tags, essa faixa não aparece.</li>
          <li><code>bodyImg</code> e <code>bodyImgAlt</code> adicionam imagem extra no corpo.</li>
        </ul>
      </StoryPreviewCard>

      <StoryPreviewCard label="List">
        <ul style={storyDocsStyles.list}>
          <li><code>itens</code> é a prop que realmente caracteriza a variante list.</li>
          <li><code>children</code> e <code>bodyImg</code> ainda podem aparecer porque a base visual é compartilhada com post.</li>
          <li><code>acao</code>, <code>onLike</code> e <code>onShare</code> deixam de ser o uso esperado quando a lista expansível está presente.</li>
        </ul>
      </StoryPreviewCard>

      <StoryPreviewCard label="News">
        <ul style={storyDocsStyles.list}>
          <li><code>children</code> é opcional e reorganiza a posição da imagem e do cabeçalho.</li>
          <li><code>tags</code> e <code>tagsLimit</code> viram um parágrafo verde abaixo da imagem; sem tags, essa faixa não aparece.</li>
          <li><code>onLike</code> e <code>onShare</code> exibem os ícones sociais e o menu do cabeçalho.</li>
          <li><code>acao</code>, <code>itens</code> e <code>bodyImg</code> não entram na renderização desta variante.</li>
        </ul>
      </StoryPreviewCard>

      <StoryPreviewCard label="Icon">
        <ul style={storyDocsStyles.list}>
          <li>O foco fica em <code>image</code>, <code>title</code>, <code>description</code> e <code>href</code>.</li>
          <li><code>children</code>, <code>acao</code>, <code>itens</code>, <code>bodyImg</code>, <code>onLike</code> e <code>onShare</code> são ignorados nessa anatomia.</li>
        </ul>
      </StoryPreviewCard>
    </div>
  )
}

function CardInteractivePreview({
  showInteractive = true,
  ...args
}: Card.Props & { showInteractive?: boolean }) {
  const variant = args.variant ?? 'post'

  return (
    <div
      className={showInteractive ? undefined : 'govrs-story-card-no-interactive'}
      style={{ padding: 12, maxWidth: 1200 }}
    >
      {!showInteractive ? (
        <style>
          {`.govrs-story-card-no-interactive .govrs-card-interactive { display: none; }`}
        </style>
      ) : null}
      <Card
        {...args}
        image={args.image || resolveCardImage(variant)}
        href={args.href || '#'}
        acao={variant === 'post' ? args.acao ?? postAction : undefined}
        itens={variant === 'list' ? args.itens ?? listItems : undefined}
        tags={variant === 'icon' || variant === 'list' ? undefined : args.tags}
        tagsLimit={variant === 'icon' || variant === 'list' ? undefined : args.tagsLimit}
        onLike={
          (variant === 'post' || variant === 'news') && showInteractive
            ? args.onLike
            : undefined
        }
        onShare={
          (variant === 'post' || variant === 'news') && showInteractive
            ? args.onShare
            : undefined
        }
      >
        {variant === 'icon' ? undefined : args.children}
      </Card>
    </div>
  )
}

export const CardDocumentacao: Story = {
  name: 'Documentação',
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <DocsStoryLayout>
      <DocsHero
        eyebrow="Documentação guiada"
        title={<h3 style={storyDocsStyles.heroTitle}>Card</h3>}
        description={
          <>
            O componente <code>Card</code> cobre quatro formatos recorrentes de resumo de
            conteúdo.
          </>
        }
        variantTags={docsVariantTags}
        stats={docsHeroStats}
      />

      <SectionCard
        title="Como escolher a variante"
        description="A escolha da variante depende menos da aparência isolada e mais do papel do bloco na página. Post prioriza conteúdo com ação e interação social; list destaca uma coleção expansível; news resume destaque editorial; icon cobre chamadas compactas."
      >
        <ul style={storyDocsStyles.list}>
          <li><code>post</code> combina imagem, descrição, children, ação e callbacks sociais.</li>
          <li><code>list</code> adiciona uma lista expansível controlada localmente pelo próprio componente.</li>
          <li><code>news</code> funciona bem para destaques editoriais com leitura mais direta.</li>
          <li><code>icon</code> reduz a estrutura para um acesso compacto com imagem ou ícone e textos curtos.</li>
        </ul>

        <SandboxExample
          title="Galeria de variantes"
          description="Visão comparativa das quatro estruturas principais para ajudar na escolha do contrato certo antes de ajustar detalhes."
          code={variantsOverviewCode}
          notes={[
            'A composição muda bastante entre as variantes, então vale escolher primeiro o formato e depois refinar props.',
            'O story Variantes mantém essa comparação disponível como uma história dedicada para exploração rápida.',
          ]}
        >
          <CardVariantsPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Variante post"
        description="Use post quando o card precisa acomodar mais contexto, uma ação explícita no rodapé e callbacks para curtir ou compartilhar. É a superfície mais completa entre as quatro variantes."
      >
        <SandboxExample
          title="Card com ação e interações"
          description="Exemplo principal da variante post com imagem, descrição, children e ação no rodapé."
          code={postExampleCode}
        >
          <CardPostPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Variante list"
        description="List reaproveita a base do card, mas troca o rodapé por uma lista expansível. Ela funciona bem para agrupar itens relacionados sob um mesmo título e resumo."
      >
        <SandboxExample
          title="Lista expansível"
          description="O componente controla a abertura da lista internamente, enquanto os itens continuam vindo por props."
          code={listExampleCode}
        >
          <CardListPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="News e icon"
        description="Essas duas variantes cobrem casos mais enxutos. News tende a destacar conteúdo editorial ou notícia, enquanto icon favorece acessos rápidos com uma imagem mais simbólica."
      >
        <SandboxExample
          title="Resumo editorial e acesso compacto"
          description="Comparativo direto entre as variantes news e icon, preservando a intenção dos exemplos anteriores."
          code={newsIconExampleCode}
        >
          <CardNewsIconPreview />
        </SandboxExample>
        <p style={storyDocsStyles.text}>
          Em <code>news</code> e <code>post</code>, <code>tags</code> é opcional e aparece
          como um parágrafo na cor verde padrão, abaixo da imagem ou do cabeçalho. Sem tags,
          essa faixa não é renderizada.
        </p>
      </SectionCard>

      <SectionCard
        title="Props principais"
        description="Pense o componente em duas camadas: primeiro as props comuns, depois as props que realmente entram na anatomia da variante escolhida. Quando uma prop não participa daquele formato, ela tende a não alterar a renderização final."
      >
        <p style={storyDocsStyles.text}>
          Leitura rápida: escolha primeiro a <code>variant</code> e depois concentre o uso
          nas props daquele formato. Isso evita passar props que existem no tipo geral,
          mas não aparecem visualmente em todas as variantes.
        </p>

        <CardPropsGuidePreview />
      </SectionCard>

      <SectionCard
        title="Limitações e dependências"
        description="O componente organiza bem conteúdo resumido, mas a variante certa continua sendo a decisão que mais afeta clareza e manutenção do uso final."
      >
        <ul style={storyDocsStyles.list}>
          <li><code>list</code> controla apenas a abertura local; ele não faz fetch nem sincroniza itens externamente.</li>
          <li><code>post</code> é a variante indicada para ação de rodapé e callbacks sociais; nas demais, essas props perdem sentido.</li>
          <li><code>disabled</code> reduz navegação e interação, mas não substitui regras de permissão ou negócio fora do componente.</li>
          <li>Como a estrutura varia bastante, mudar apenas props sem revisar a variante pode gerar um card visualmente incoerente para o contexto.</li>
        </ul>
      </SectionCard>
    </DocsStoryLayout>
  ),
}

export const CardInterativo: Story = {
  name: 'Interativo',
  argTypes: {
    modoContraste: {
      control: 'boolean',
      description: 'Visualiza o componente no modo de alto contraste.',
      table: { category: 'Acessibilidade' },
    },
    variant: {
      control: { type: 'radio' },
      options: ['post', 'list', 'news', 'icon'],
      description: 'Seleciona a anatomia principal do card.',
      table: { category: 'Composição' },
    },
    size: {
      control: { type: 'select' },
      options: ['padrao', 'small', 'large'],
      mapping: {
        padrao: undefined,
        small: 'small',
        large: 'large',
      },
      labels: {
        padrao: 'Padrao',
        small: 'Small',
        large: 'Large',
      },
      description: 'Ajusta a escala visual quando a variante suportar esse refinamento.',
      table: { category: 'Estado visual' },
    },
    title: {
      control: 'text',
      description: 'Título principal do bloco.',
      table: { category: 'Conteúdo' },
    },
    description: {
      control: 'text',
      description: 'Resumo curto exibido abaixo do título quando informado.',
      table: { category: 'Conteúdo' },
    },
    children: {
      control: 'text',
      description: 'Conteúdo adicional exibido nas variantes que suportam corpo textual.',
      table: { category: 'Conteúdo' },
    },
    image: {
      control: 'text',
      description: 'URL da imagem principal do card.',
      table: { category: 'Conteúdo' },
    },
    href: {
      control: 'text',
      description: 'Destino do link principal do card.',
      table: { category: 'Composição' },
    },
    showInteractive: {
      control: 'boolean',
      description:
        'Mostra ou oculta os controles com a classe govrs-card-interactive (menu, ação, curtir e compartilhar).',
      table: { category: 'Interação' },
    },
    bodyImg: {
      control: 'text',
      description: 'Imagem adicional exibida no corpo das variantes baseadas em post.',
      table: { category: 'Conteúdo' },
    },
    disabled: {
      control: 'boolean',
      description: 'Reduz interação e navegação do card.',
      table: { category: 'Estado visual' },
    },
    acao: {
      control: 'object',
      description: 'Objeto da ação de rodapé na variante post (`label` e `url`).',
      table: { category: 'Conteúdo' },
    },
    itens: {
      control: 'object',
      description: 'Lista de objetos exibidos na variante list.',
      table: { category: 'Conteúdo' },
    },
    tags: {
      control: 'object',
      description:
        'Tags opcionais nas variantes news e post. Aparecem como um parágrafo verde, não como o componente Tag. Sem tags, só os ícones (quando existirem) aparecem.',
      table: { category: 'Conteúdo' },
    },
    tagsLimit: {
      control: { type: 'select' },
      options: [1, 2, 3],
      description: 'Quantidade máxima de tags visíveis na variante news (1 a 3).',
      table: { category: 'Conteúdo' },
    },
    onLike: {
      action: 'liked',
      description: 'Callback usado na variante post para a ação de curtir.',
      table: { category: 'Eventos' },
    },
    onShare: {
      action: 'shared',
      description: 'Callback usado na variante post para a ação de compartilhar.',
      table: { category: 'Eventos' },
    },
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
    tagsLimit: 3,
  },
  render: (args) => <CardInteractivePreview {...args} />,
}

export const CardVariantes: Story = {
  name: 'Variantes',
  parameters: {
    controls: { disable: true },
  },
  render: () => <CardVariantsPreview />,
}
