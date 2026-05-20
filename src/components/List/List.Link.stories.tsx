import type { Meta, StoryObj } from '@storybook/react'

import {
  DocsHero,
  DocsStoryLayout,
  SandboxExample,
  SectionCard,
  StoryPreviewCard,
  storyDocsStyles,
} from '../../../.storybook/docs/storyDocs'
import { List } from './List'
import './List.scss'
import '../../foundations/styles/index.scss'

type MediaPreset = List.LinkMediaPreset

function SampleIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M4 5H16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M4 10H16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M4 15H12"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="14.5" cy="15" r="1.5" fill="currentColor" />
    </svg>
  )
}

const baseLinkItems: List.LinkItem[] = [
  {
    id: 'l1',
    meta: 'RECOMENDADOS',
    title: 'Solicitar Benefício Assistencial ao Idoso',
    href: '#',
  },
  {
    id: 'l2',
    meta: 'RECOMENDADOS',
    title: 'Inscrever-se no Cadastro Único',
    href: '#',
  },
]

const iconLinkItems: List.LinkItem[] = baseLinkItems.map((item) => ({
  ...item,
  icon: <SampleIcon />,
}))

function LinkVariantGalleryPreview() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <StoryPreviewCard label="Padrão">
        <List variant="link" items={baseLinkItems} />
      </StoryPreviewCard>

      <StoryPreviewCard label="Numerada">
        <List variant="link" items={baseLinkItems} numbered />
      </StoryPreviewCard>

      <StoryPreviewCard label="Ícone e ordem invertida">
        <List variant="link" items={iconLinkItems} invert mediaPreset="icons" />
      </StoryPreviewCard>
    </div>
  )
}

const docsVariantTags = ['numbered', 'invert', 'mediaPreset']

const docsHeroStats = [
  {
    title: 'Quando usar',
    text: 'Quando a lista precisa funcionar como navegação, agrupando um meta curto e um título clicável com apoio visual por número ou ícone.',
  },
  {
    title: 'Melhor exploração',
    text: "Use o story 'Interativo' para alternar numeração, disponibilidade de ícone e ordem de leitura. A documentação mostra as três composições principais da variante.",
  },
  {
    title: 'Comportamento',
    text: 'Quando o item traz icon e o mediaPreset permite mídia, o ícone ocupa a coluna esquerda e prevalece sobre a numeração. A prop invert apenas troca a ordem entre meta e link dentro do conteúdo.',
  },
]

const basicLinkCode = `<List
  variant="link"
  items={[
    { id: 'l1', meta: 'SERVIÇOS', title: 'Solicitar atendimento', href: '#' },
    { id: 'l2', meta: 'SERVIÇOS', title: 'Consultar protocolo', href: '#' },
  ]}
/>`

const iconLinkCode = `<List
  variant="link"
  mediaPreset="icons"
  items={[
    { id: 'l1', meta: 'RECOMENDADOS', title: 'Ação 1', href: '#', icon: <Icone /> },
    { id: 'l2', meta: 'RECOMENDADOS', title: 'Ação 2', href: '#', icon: <Icone /> },
  ]}
/>`

const invertedLinkCode = `<List
  variant="link"
  invert
  items={[
    { id: 'l1', meta: 'INFO', title: 'Leia antes', href: '#' },
    { id: 'l2', meta: 'INFO', title: 'Leia depois', href: '#' },
  ]}
/>`

type ListLinkInteractiveArgs = {
  numbered: boolean
  invert: boolean
  mediaPreset: MediaPreset
}

const meta = {
  title: 'Conteúdo/List/Link',
  component: ListLinkInteractivePreview,
  args: {
    numbered: false,
    invert: false,
    mediaPreset: 'none',
  },
  parameters: {
    layout: 'padded',
    controls: {
      expanded: true,
      sort: 'requiredFirst',
    },
  },
} satisfies Meta<typeof ListLinkInteractivePreview>

export default meta

type Story = StoryObj<typeof meta>

function getLinkInteractivePreviewKey(args: ListLinkInteractiveArgs) {
  return [args.numbered, args.invert, args.mediaPreset].join('::')
}

function ListLinkInteractivePreview(args: ListLinkInteractiveArgs) {
  return (
    <div style={{ ...storyDocsStyles.previewStage, justifyItems: 'stretch' }}>
      <List
        variant="link"
        items={iconLinkItems}
        mediaPreset={args.mediaPreset}
        numbered={args.numbered}
        invert={args.invert}
      />
    </div>
  )
}

function LinkPropsGuidePreview() {
  return (
    <div style={storyDocsStyles.cardGrid}>
      <StoryPreviewCard label="Coluna esquerda">
        <ul style={storyDocsStyles.list}>
          <li><code>numbered</code> usa a posição do item como marcador visual.</li>
          <li><code>mediaPreset</code> controla se a prop <code>icon</code> do item pode ocupar a coluna lateral.</li>
          <li>Se houver ícone disponível e <code>numbered</code> também estiver ativo, o ícone tem prioridade.</li>
          <li>A opção <code>images</code> não se aplica a esta variante.</li>
        </ul>
      </StoryPreviewCard>

      <StoryPreviewCard label="Conteúdo">
        <ul style={storyDocsStyles.list}>
          <li><code>meta</code> funciona como texto de apoio curto.</li>
          <li><code>title</code> vira o conteúdo do link clicável quando <code>href</code> é informado.</li>
          <li>Sem <code>href</code>, o título continua visível, mas é renderizado como texto em vez de link.</li>
          <li><code>invert</code> troca a ordem entre meta e link.</li>
        </ul>
      </StoryPreviewCard>
    </div>
  )
}

export const Documentacao: Story = {
  name: 'Documentação',
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <DocsStoryLayout>
      <DocsHero
        eyebrow="Documentação guiada"
        title={<h3 style={storyDocsStyles.heroTitle}>List Link</h3>}
        description={
          <>
            A variante <code>link</code> transforma a coleção em uma lista navegável,
            com meta opcional, coluna lateral de apoio e um link principal por item.
          </>
        }
        variantTags={docsVariantTags}
        stats={docsHeroStats}
      />

      <SectionCard
        title="Composições mais comuns"
        description="A variante link pode aparecer sem marcador lateral, com numeração automática ou com ícones explícitos."
      >
        <SandboxExample
          title="Comparativo de modos"
          description="Os três exemplos abaixo mostram as combinações mais recorrentes da variante."
          code={`<List variant="link" items={items} />\n<List variant="link" numbered items={items} />\n<List variant="link" invert mediaPreset="icons" items={itemsWithIcons} />`}
        >
          <LinkVariantGalleryPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Props e formato dos itens"
        description="Os itens da variante link são mais enxutos do que nas variantes default e check. Aqui o foco está no conteúdo navegável e no apoio visual lateral."
      >
        <LinkPropsGuidePreview />

        <SandboxExample
          title="Uso básico"
          description="Sem numeração ou ícone lateral, a estrutura fica concentrada em meta e link."
          code={basicLinkCode}
        >
          <List variant="link" items={baseLinkItems} />
        </SandboxExample>

        <SandboxExample
          title="Com ícones"
          description="Quando os itens trazem icon e o mediaPreset permite mídia, o ícone ocupa a coluna esquerda de cada item."
          code={iconLinkCode}
        >
          <List variant="link" items={iconLinkItems} mediaPreset="icons" />
        </SandboxExample>

        <SandboxExample
          title="Ordem invertida"
          description="invert é útil quando o título do link precisa aparecer antes do meta dentro do bloco textual."
          code={invertedLinkCode}
        >
          <List
            variant="link"
            invert
            items={[
              { id: 'i1', meta: 'INFO', title: 'Leia antes', href: '#' },
              { id: 'i2', meta: 'INFO', title: 'Leia depois', href: '#' },
            ]}
          />
        </SandboxExample>
      </SectionCard>
    </DocsStoryLayout>
  ),
}

export const Interativo: Story = {
  name: 'Interativo',
  argTypes: {
    numbered: {
      control: 'boolean',
      description: 'Exibe a posição do item na coluna lateral.',
      table: { category: 'Apresentação' },
    },
    invert: {
      control: 'boolean',
      description: 'Troca a ordem entre meta e link dentro do conteúdo.',
      table: { category: 'Conteúdo' },
    },
    mediaPreset: {
      control: { type: 'select' },
      options: ['icons', 'none'],
      labels: {
        icons: 'Só ícones',
        none: 'Sem mídia',
      },
      description: 'Controla se o ícone do item aparece na coluna lateral na variante link.',
      table: { category: 'Mídia' },
    },
  },
  parameters: {
    controls: {
      exclude: ['className', 'items', 'itemKey', 'variant'],
    },
  },
  render: (args) => (
    <ListLinkInteractivePreview
      key={getLinkInteractivePreviewKey(args)}
      {...args}
    />
  ),
}