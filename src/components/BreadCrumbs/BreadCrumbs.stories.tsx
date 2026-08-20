import type { Meta, StoryObj } from '@storybook/react'

import {
  DocsHero,
  DocsStoryLayout,
  SandboxExample,
  SectionCard,
  StoryPreviewCard,
  storyDocsStyles,
} from '../../../.storybook/docs/storyDocs'
import { BreadCrumbs } from './BreadCrumbs'
import './BreadCrumbs.scss'
import '../../foundations/styles/index.scss'

type BreadCrumbsInteractiveArgs = {
  showHome: boolean
  homeHref: string
  ancestral01: string
  ancestral02: string
  ancestral03: string
  currentLabel: string
  showAncestral01: boolean
  showAncestral02: boolean
  showAncestral03: boolean
  modoContraste?: boolean
}

const docsVariantTags = ['home', 'links', 'current', 'separator']

const docsHeroStats = [
  {
    title: 'Quando usar',
    text: 'Quando a interface precisa mostrar o caminho hierárquico até a página atual e permitir retorno rápido aos níveis anteriores.',
  },
  {
    title: 'Melhor exploração',
    text: "Use o story 'Interativo' para alternar home, labels dos ancestrais, página atual e modo de alto contraste.",
  },
  {
    title: 'Comportamento',
    text: 'A raiz usa o ícone de home. Itens com href viram links. O último item da trilha é sempre texto da página atual, sem link.',
  },
]

const mockupItems: BreadCrumbs.Item[] = [
  { label: 'Página Ancestral 01', href: '#ancestral-01' },
  { label: 'Página Ancestral 02', href: '#ancestral-02' },
  { label: 'Página Ancestral 03', href: '#ancestral-03' },
  { label: 'Página Atual' },
]

const mockupExampleCode = `<BreadCrumbs
  homeHref="/"
  items={[
    { label: 'Página Ancestral 01', href: '/ancestral-01' },
    { label: 'Página Ancestral 02', href: '/ancestral-02' },
    { label: 'Página Ancestral 03', href: '/ancestral-03' },
    { label: 'Página Atual' },
  ]}
/>`

const shortTrailExampleCode = `<BreadCrumbs
  homeHref="/"
  items={[{ label: 'Página Atual' }]}
/>`

const anatomyExampleCode = `<BreadCrumbs
  showHome
  homeHref="/"
  homeLabel="Página inicial"
  items={[
    { label: 'Ancestral', href: '/ancestral' },
    { label: 'Página Atual' },
  ]}
/>`

const meta = {
  title: 'Navegação/BreadCrumbs',
  component: BreadCrumbs,
  parameters: {
    layout: 'padded',
    controls: {
      expanded: true,
      sort: 'requiredFirst',
    },
  },
} satisfies Meta<BreadCrumbsInteractiveArgs>

export default meta

type Story = StoryObj<BreadCrumbsInteractiveArgs>

function MockupPreview() {
  return <BreadCrumbs homeHref="#" items={mockupItems} />
}

function ShortTrailPreview() {
  return <BreadCrumbs homeHref="#" items={[{ label: 'Página Atual' }]} />
}

function AnatomyPreview() {
  return (
    <div style={storyDocsStyles.cardGrid}>
      <StoryPreviewCard label="Trilha completa">
        <BreadCrumbs homeHref="#" items={mockupItems} />
      </StoryPreviewCard>

      <StoryPreviewCard label="Trilha curta">
        <BreadCrumbs homeHref="#" items={[{ label: 'Página Atual' }]} />
      </StoryPreviewCard>

      <StoryPreviewCard label="Sem home">
        <BreadCrumbs
          showHome={false}
          items={[
            { label: 'Seção', href: '#secao' },
            { label: 'Página Atual' },
          ]}
        />
      </StoryPreviewCard>
    </div>
  )
}

function buildInteractiveItems(args: BreadCrumbsInteractiveArgs): BreadCrumbs.Item[] {
  const items: BreadCrumbs.Item[] = []

  if (args.showAncestral01 && args.ancestral01.trim()) {
    items.push({ label: args.ancestral01, href: '#ancestral-01' })
  }

  if (args.showAncestral02 && args.ancestral02.trim()) {
    items.push({ label: args.ancestral02, href: '#ancestral-02' })
  }

  if (args.showAncestral03 && args.ancestral03.trim()) {
    items.push({ label: args.ancestral03, href: '#ancestral-03' })
  }

  items.push({ label: args.currentLabel || 'Página Atual' })

  return items
}

export const BreadCrumbsDocumentacao: Story = {
  name: 'Documentação',
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <DocsStoryLayout>
      <DocsHero
        eyebrow="Documentação guiada"
        title={<h3 style={storyDocsStyles.heroTitle}>BreadCrumbs</h3>}
        description={
          <>
            O componente <code>BreadCrumbs</code> monta o caminho de migalhas até a página atual:
            ícone de home na raiz, links para os níveis anteriores e texto simples no item corrente.
          </>
        }
        variantTags={docsVariantTags}
        stats={docsHeroStats}
      />

      <SectionCard
        title="Anatomia"
        description="A trilha combina quatro peças: home com ícone, separador &gt;, links ancestrais e o texto da página atual."
      >
        <ul style={storyDocsStyles.list}>
          <li><code>showHome</code> e <code>homeHref</code> controlam a raiz com o ícone de casinha.</li>
          <li><code>items</code> recebe a lista ordenada do caminho. Cada item com <code>href</code> vira link.</li>
          <li>O último item de <code>items</code> é sempre a página atual: renderiza como texto, mesmo se vier com <code>href</code>.</li>
          <li>O separador <code>&gt;</code> é inserido pelo CSS entre os itens, sem entrar no markup de conteúdo.</li>
        </ul>

        <SandboxExample
          title="Peças da trilha"
          description="Compare a trilha completa, a trilha curta (home + atual) e uma variação sem o ícone da raiz."
          code={anatomyExampleCode}
          notes={[
            'Com menos de dois níveis (só home ou só a página atual), o componente não renderiza.',
            'Links usam <a> nativo — o Design System não depende de router.',
          ]}
        >
          <AnatomyPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Exemplo do mockup"
        description="Trilha com três páginas ancestrais e a página atual, no mesmo formato visual de referência."
      >
        <SandboxExample
          title="Home + ancestrais + atual"
          description="A raiz usa o SVG de home. Os ancestrais são links verdes. A página atual permanece em texto cinza, sem link."
          code={mockupExampleCode}
          notes={[
            'Omita href no último item para deixar explícito que ele é a página atual.',
            'homeHref aponta para a raiz do site consumidor.',
          ]}
        >
          <MockupPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Trilha curta"
        description="Quando há apenas um nível abaixo da home, a trilha reduz para ícone + página atual."
      >
        <SandboxExample
          title="Home e página atual"
          description="Útil em páginas logo abaixo da raiz, sem ancestrais intermediários."
          code={shortTrailExampleCode}
        >
          <ShortTrailPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Limites de uso"
        description="BreadCrumbs descreve navegação hierárquica. Ele não pagina listas, não lê CMS e não colapsa o meio da trilha nesta versão."
      >
        <ul style={storyDocsStyles.list}>
          <li>O pai monta <code>items</code>; o componente só renderiza a trilha.</li>
          <li>Trilha com um único nível (somente home ou somente a página atual) retorna <code>null</code> — não há migalhas úteis nesse caso.</li>
          <li>O último item nunca vira link, mesmo que <code>href</code> seja informado.</li>
          <li><code>homeHref</code> e os <code>href</code> dos itens são URLs nativas — integração com Volto/<code>UniversalLink</code> fica no consumidor.</li>
          <li>Não há colapso com reticências nesta versão; em telas estreitas a trilha quebra com <code>flex-wrap</code>.</li>
        </ul>
      </SectionCard>
    </DocsStoryLayout>
  ),
}

export const BreadCrumbsInterativo: Story = {
  name: 'Interativo',
  args: {
    showHome: true,
    homeHref: '#',
    showAncestral01: true,
    ancestral01: 'Página Ancestral 01',
    showAncestral02: true,
    ancestral02: 'Página Ancestral 02',
    showAncestral03: true,
    ancestral03: 'Página Ancestral 03',
    currentLabel: 'Página Atual',
    modoContraste: false,
  },
  argTypes: {
    modoContraste: {
      control: 'boolean',
      description: 'Visualiza o componente no modo de alto contraste.',
      table: { category: 'Acessibilidade' },
    },
    showHome: {
      control: 'boolean',
      description: 'Exibe o ícone de home no início da trilha.',
      table: { category: 'Estrutura' },
    },
    homeHref: {
      control: 'text',
      description: 'URL da raiz. No Storybook use # para evitar navegação real.',
      table: { category: 'Estrutura' },
    },
    showAncestral01: {
      control: 'boolean',
      description: 'Inclui o primeiro ancestral na trilha de demonstração.',
      table: { category: 'Exemplos' },
    },
    ancestral01: {
      control: 'text',
      description: 'Rótulo do primeiro ancestral.',
      table: { category: 'Exemplos' },
    },
    showAncestral02: {
      control: 'boolean',
      description: 'Inclui o segundo ancestral na trilha de demonstração.',
      table: { category: 'Exemplos' },
    },
    ancestral02: {
      control: 'text',
      description: 'Rótulo do segundo ancestral.',
      table: { category: 'Exemplos' },
    },
    showAncestral03: {
      control: 'boolean',
      description: 'Inclui o terceiro ancestral na trilha de demonstração.',
      table: { category: 'Exemplos' },
    },
    ancestral03: {
      control: 'text',
      description: 'Rótulo do terceiro ancestral.',
      table: { category: 'Exemplos' },
    },
    currentLabel: {
      control: 'text',
      description: 'Texto da página atual (sempre sem link).',
      table: { category: 'Conteúdo' },
    },
  },
  parameters: {
    controls: {
      exclude: ['items', 'homeLabel', 'ariaLabel', 'className'],
    },
  },
  render: (args) => {
    const items = buildInteractiveItems(args)
    const levelCount = (args.showHome ? 1 : 0) + items.length

    return (
      <div style={storyDocsStyles.previewStage}>
        {levelCount < 2 ? (
          <p style={storyDocsStyles.statText}>
            Com menos de dois níveis a trilha não é renderizada (não há breadcrumbs úteis).
          </p>
        ) : (
          <BreadCrumbs
            showHome={args.showHome}
            homeHref={args.homeHref || '#'}
            items={items}
          />
        )}
      </div>
    )
  },
}
