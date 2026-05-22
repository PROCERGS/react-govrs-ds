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

type MediaPreset = List.MediaPreset

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

const defaultItems: List.DefaultItem[] = [
  {
    id: 'd1',
    title: 'Item com imagem e label',
    text: 'Descrição curta do item com imagem.',
    image:
      'https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0',
    imageAlt: 'Foto de exemplo',
    icon: <SampleIcon />,
    label: 'Guias',
  },
  {
    id: 'd2',
    title: 'Item só com ícone',
    text: 'Item com ícone SVG na coluna esquerda.',
    icon: <SampleIcon />,
    label: 'Guias',
  },
  {
    id: 'd3',
    title: 'Item sem mídia',
    text: 'Item que não possui imagem nem ícone.',
    label: 'Atendimento',
  },
  {
    id: 'd4',
    title: 'Item grande com imagem',
    text: 'Um texto mais longo para demonstrar quebra de linha e comportamento responsivo na lista horizontal.',
    image:
      'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0',
    imageAlt: 'Outra foto',
    icon: <SampleIcon />,
    label: 'Atendimento',
  },
]

const horizontalPresetItems: List.DefaultItem[] = [
  {
    id: 'h1',
    title: 'Cartão 1',
    text: 'Descrição curta do cartão 1.',
    image:
      'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0',
    imageAlt: 'Imagem do cartão 1',
    icon: <SampleIcon />,
  },
  {
    id: 'h2',
    title: 'Cartão 2',
    text: 'Descrição curta do cartão 2.',
    image:
      'https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0',
    imageAlt: 'Imagem do cartão 2',
    icon: <SampleIcon />,
  },
  {
    id: 'h3',
    title: 'Cartão 3',
    text: 'Descrição curta do cartão 3.',
    image:
      'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0',
    imageAlt: 'Imagem do cartão 3',
    icon: <SampleIcon />,
  },
]

function createDefaultItems(labeled: boolean) {
  return labeled
    ? defaultItems
    : defaultItems.map((item, index) => ({
        ...item,
        id: `default-${index}`,
        label: undefined,
      }))
}

function DefaultVariantGalleryPreview() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <StoryPreviewCard label="Vertical simples">
        <List
          items={defaultItems.slice(0, 3).map((item, index) => ({
            ...item,
            label: undefined,
            id: `preview-default-${index}`,
          }))}
          mediaPreset="mixed"
        />
      </StoryPreviewCard>

      <StoryPreviewCard label="Horizontal com mídia">
        <List items={defaultItems} horizontal mediaPreset="mixed" />
      </StoryPreviewCard>

      <StoryPreviewCard label="Agrupada e recolhível">
        <List items={defaultItems} labeled collapsible mediaPreset="mixed" />
      </StoryPreviewCard>
    </div>
  )
}

const docsVariantTags = ['vertical', 'horizontal', 'labeled', 'collapsible', 'mediaPreset']

const docsHeroStats = [
  {
    title: 'Quando usar',
    text: 'Quando a interface precisa listar itens com leitura rápida, mídia opcional e agrupamento simples por rótulo, sem transformar a coleção em navegação ou seleção.',
  },
  {
    title: 'Melhor exploração',
    text: "Use o story 'Interativo' para testar mídia, horizontalidade, agrupamento e colapso. A documentação compara os formatos mais comuns dessa variante.",
  },
  {
    title: 'Comportamento',
    text: 'A variante default aceita imagem ou ícone por item, pode quebrar em uma linha horizontal e só usa colapso quando a lista está agrupada por label.',
  },
]

const defaultExampleCode = `<List
  variant="default"
  items={[
    { id: 'd1', title: 'Item um' },
    { id: 'd2', title: 'Item dois' },
    { id: 'd3', title: 'Item três' },
  ]}
/>`

const horizontalExampleCode = `const items = [
  {
    id: 'h1',
    title: 'Cartão 1',
    text: 'Descrição curta do cartão 1.',
    image: 'https://.../card-1.jpg',
    imageAlt: 'Imagem do cartão 1',
    icon: <Icone />,
  },
  {
    id: 'h2',
    title: 'Cartão 2',
    text: 'Descrição curta do cartão 2.',
    image: 'https://.../card-2.jpg',
    imageAlt: 'Imagem do cartão 2',
    icon: <Icone />,
  },
  {
    id: 'h3',
    title: 'Cartão 3',
    text: 'Descrição curta do cartão 3.',
    image: 'https://.../card-3.jpg',
    imageAlt: 'Imagem do cartão 3',
    icon: <Icone />,
  },
]

<div>
  <div>
    <p>Só ícones</p>
    <List variant="default" horizontal mediaPreset="icons" items={items} />
  </div>

  <div>
    <p>Só imagens</p>
    <List variant="default" horizontal mediaPreset="images" items={items} />
  </div>

  <div>
    <p>Sem mídia</p>
    <List variant="default" horizontal mediaPreset="none" items={items} />
  </div>
</div>`

const labeledExampleCode = `<List
  variant="default"
  labeled
  collapsible
  items={[
    { id: 'l1', label: 'Guias', title: 'Primeiros passos', icon: <Icone /> },
    { id: 'l2', label: 'Guias', title: 'Documentos necessários' },
    { id: 'l3', label: 'Atendimento', title: 'Canais disponíveis' },
  ]}
/>`

type ListDefaultInteractiveArgs = {
  horizontal: boolean
  labeled: boolean
  collapsible: boolean
  mediaPreset: MediaPreset
}

const meta = {
  title: 'Conteúdo/List/Default',
  component: ListDefaultInteractivePreview,
  args: {
    horizontal: false,
    labeled: false,
    collapsible: false,
    mediaPreset: 'mixed',
  },
  parameters: {
    layout: 'padded',
    controls: {
      expanded: true,
      sort: 'requiredFirst',
    },
  },
} satisfies Meta<typeof ListDefaultInteractivePreview>

export default meta

type Story = StoryObj<typeof meta>

function getDefaultInteractivePreviewKey(args: ListDefaultInteractiveArgs) {
  return [args.horizontal, args.labeled, args.collapsible, args.mediaPreset].join('::')
}

function ListDefaultInteractivePreview(args: ListDefaultInteractiveArgs) {
  return (
    <div style={{ ...storyDocsStyles.previewStage, justifyItems: 'stretch' }}>
      <List
        items={createDefaultItems(args.labeled)}
        horizontal={args.horizontal}
        labeled={args.labeled}
        collapsible={args.collapsible}
        mediaPreset={args.mediaPreset}
      />
    </div>
  )
}

function DefaultItemGuidePreview() {
  return (
    <div style={storyDocsStyles.cardGrid}>
      <StoryPreviewCard label="Campos principais">
        <ul style={storyDocsStyles.list}>
          <li><code>title</code> é o conteúdo obrigatório de cada item.</li>
          <li><code>text</code> adiciona uma linha de apoio abaixo do título.</li>
          <li><code>image</code> e <code>icon</code> ocupam a coluna lateral, com prioridade para imagem.</li>
          <li><code>mediaPreset</code> controla se a variante exibe mídia mista, só imagens, só ícones ou nenhuma mídia.</li>
        </ul>
      </StoryPreviewCard>

      <StoryPreviewCard label="Agrupamento">
        <ul style={storyDocsStyles.list}>
          <li><code>label</code> só entra em cena quando <code>labeled</code> está ativo.</li>
          <li><code>collapsible</code> só afeta listas agrupadas.</li>
          <li>A horizontalidade afeta os itens do grupo, não o cabeçalho do grupo.</li>
        </ul>
      </StoryPreviewCard>
    </div>
  )
}

function HorizontalPresetPreview() {
  const rows = [
    { label: 'Só ícones', mediaPreset: 'icons' as const },
    { label: 'Só imagens', mediaPreset: 'images' as const },
    { label: 'Sem mídia', mediaPreset: 'none' as const },
  ]

  return (
    <div style={{ display: 'grid', gap: 16 }}>
      {rows.map((row) => (
        <StoryPreviewCard key={row.label} label={row.label}>
          <List horizontal mediaPreset={row.mediaPreset} items={horizontalPresetItems} />
        </StoryPreviewCard>
      ))}
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
        title={<h3 style={storyDocsStyles.heroTitle}>List Default</h3>}
        description={
          <>
            A variante <code>default</code> cobre listas de leitura simples com imagem,
            ícone, texto de apoio e agrupamento opcional. É a base visual reutilizada
            também pela variante <code>check</code>.
          </>
        }
        variantTags={docsVariantTags}
        stats={docsHeroStats}
      />

      <SectionCard
        title="Formas principais"
        description="A mesma variante pode aparecer como lista vertical tradicional, como linha de cartões com quebra automática ou como lista agrupada por rótulo."
      >
        <SandboxExample
          title="Visão comparativa"
          description="Os três cenários abaixo cobrem a leitura mais comum da variante default: simples, horizontal e agrupada."
          code={`<List variant="default" items={items} />\n<List variant="default" horizontal items={items} />\n<List variant="default" labeled collapsible items={items} />`}
        >
          <DefaultVariantGalleryPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Props e estrutura dos itens"
        description="A variante default depende mais da forma dos itens do que de props globais. A mídia é opcional e o agrupamento é totalmente derivado de label."
      >
        <DefaultItemGuidePreview />

        <SandboxExample
          title="Uso básico"
          description="A lista simples funciona mesmo sem mídia e sem agrupamento. O componente assume a variante default quando a prop variant não é informada."
          code={defaultExampleCode}
        >
          <List
            items={[
              { id: 'simple-1', title: 'Item um' },
              { id: 'simple-2', title: 'Item dois' },
              { id: 'simple-3', title: 'Item três' },
            ]}
          />
        </SandboxExample>

        <SandboxExample
          title="Horizontal"
          description="Em horizontal, a mesma coleção pode ser apresentada só com ícones, só com imagens ou sem nenhuma mídia, de acordo com o mediaPreset."
          code={horizontalExampleCode}
          notes={[
            'mediaPreset="icons" preserva apenas os ícones da coleção.',
            'mediaPreset="images" preserva apenas as imagens; se um item tiver image e icon, a imagem continua tendo prioridade.',
            'mediaPreset="none" remove toda a mídia e mantém apenas o conteúdo textual.',
          ]}
        >
          <HorizontalPresetPreview />
        </SandboxExample>

        <SandboxExample
          title="Agrupamento com colapso"
          description="Quando labeled e collapsible aparecem juntos, cada grupo passa a abrir e fechar localmente a partir do próprio cabeçalho."
          code={labeledExampleCode}
          notes={[
            'Sem labeled, a prop label é ignorada na renderização.',
            'Sem collapsible, os grupos continuam visíveis o tempo todo.',
          ]}
        >
          <List items={defaultItems} labeled collapsible />
        </SandboxExample>
      </SectionCard>
    </DocsStoryLayout>
  ),
}

export const Interativo: Story = {
  name: 'Interativo',
  argTypes: {
    horizontal: {
      control: 'boolean',
      description: 'Reorganiza os itens em uma linha com quebra automática.',
      table: { category: 'Layout' },
    },
    labeled: {
      control: 'boolean',
      description: 'Agrupa itens pela prop label.',
      table: { category: 'Agrupamento' },
    },
    collapsible: {
      control: 'boolean',
      description: 'Permite expandir ou recolher grupos quando labeled está ativo.',
      table: { category: 'Agrupamento' },
    },
    mediaPreset: {
      control: { type: 'select' },
      options: ['mixed', 'images', 'icons', 'none'],
      labels: {
        mixed: 'Misto',
        images: 'Só imagens',
        icons: 'Só ícones',
        none: 'Sem mídia',
      },
      description: 'Controla se a variante mostra mídia mista, só imagens, só ícones ou nenhuma mídia.',
      table: { category: 'Mídia' },
    },
  },
  parameters: {
    controls: {
      exclude: ['className', 'items', 'itemKey', 'variant'],
    },
  },
  render: (args) => (
    <ListDefaultInteractivePreview
      key={getDefaultInteractivePreviewKey(args)}
      {...args}
    />
  ),
}