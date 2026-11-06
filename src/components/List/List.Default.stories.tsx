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

const LONG_TITLE =
  'Título longo o suficiente para ultrapassar cento e quarenta caracteres e demonstrar o truncamento com reticências no item da lista default'

const LONG_TEXT =
  'Descrição também longa o bastante para ser cortada em cento e quarenta caracteres, exatamente como o Card news faz com título e texto de apoio na listagem.'

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
    tags: ['noticias', 'Bento', 'comunicacao'],
  },
  {
    id: 'd2',
    title: 'Item só com ícone',
    text: 'Item com ícone SVG na coluna esquerda.',
    icon: <SampleIcon />,
    label: 'Guias',
    tags: ['enoturismo', 'Serra Gaúcha'],
  },
  {
    id: 'd3',
    title: 'Item sem mídia',
    text: 'Item que não possui imagem nem ícone.',
    label: 'Atendimento',
    tags: ['Matriz3'],
  },
  {
    id: 'd4',
    title: LONG_TITLE,
    text: LONG_TEXT,
    image:
      'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0',
    imageAlt: 'Outra foto',
    icon: <SampleIcon />,
    label: 'Atendimento',
    tags: ['noticias', 'Bento Gonçalves', 'comunicacao', 'extra'],
  },
]

const densityItems: List.DefaultItem[] = Array.from({ length: 7 }, (_, index) => ({
  id: `density-${index + 1}`,
  title: `Item ${index + 1}`,
  text: `Descrição curta do item ${index + 1}.`,
  image:
    index % 2 === 0
      ? 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0'
      : 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0',
  imageAlt: `Imagem do item ${index + 1}`,
  tags: ['editoria', 'porto alegre'],
}))

const horizontalPresetItems: List.DefaultItem[] = [
  {
    id: 'h1',
    title: 'Cartão 1',
    text: 'Descrição curta do cartão 1.',
    image:
      'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0',
    imageAlt: 'Imagem do cartão 1',
    icon: <SampleIcon />,
    tags: ['noticias', 'Bento'],
  },
  {
    id: 'h2',
    title: 'Cartão 2',
    text: 'Descrição curta do cartão 2.',
    image:
      'https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0',
    imageAlt: 'Imagem do cartão 2',
    icon: <SampleIcon />,
    tags: ['enoturismo'],
  },
  {
    id: 'h3',
    title: 'Cartão 3',
    text: 'Descrição curta do cartão 3.',
    image:
      'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0',
    imageAlt: 'Imagem do cartão 3',
    icon: <SampleIcon />,
    tags: ['Matriz3'],
  },
]

function createDefaultItems(labeled: boolean, tagsLimit = 3) {
  return labeled
    ? defaultItems.map((item) => ({ ...item, tagsLimit }))
    : defaultItems.map((item, index) => ({
        ...item,
        id: `default-${index}`,
        label: undefined,
        tagsLimit,
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

      <StoryPreviewCard label="Horizontal 3 por linha">
        <List items={densityItems} horizontal perRow={3} mediaPreset="images" />
      </StoryPreviewCard>

      <StoryPreviewCard label="Vertical 3 por coluna">
        <List items={densityItems} perColumn={3} mediaPreset="images" />
      </StoryPreviewCard>

      <StoryPreviewCard label="Agrupada e recolhível">
        <List items={defaultItems} labeled collapsible mediaPreset="mixed" />
      </StoryPreviewCard>
    </div>
  )
}

const docsVariantTags = ['vertical', 'horizontal', 'perRow', 'perColumn', 'tags', 'labeled']

const docsHeroStats = [
  {
    title: 'Quando usar',
    text: 'Quando a interface precisa listar itens com leitura rápida, mídia opcional e agrupamento simples por rótulo, sem transformar a coleção em navegação ou seleção.',
  },
  {
    title: 'Melhor exploração',
    text: "Use o story 'Interativo' para testar mídia, densidade, tags, agrupamento e colapso. A documentação compara os formatos mais comuns dessa variante.",
  },
  {
    title: 'Comportamento',
    text: 'A variante default replica o conteúdo do Card news (imagem, tags e truncamento de 140 caracteres), sem caixa. Em horizontal usa perRow; em vertical, perColumn preenche coluna a coluna.',
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
  mediaPosition: List.MediaPosition
  perRow: number
  tagsLimit: number
}

const meta = {
  title: 'Conteúdo/List/Default',
  component: ListDefaultInteractivePreview,
  args: {
    horizontal: false,
    labeled: false,
    collapsible: false,
    mediaPreset: 'mixed',
    mediaPosition: 'left',
    perRow: 3,
    tagsLimit: 3,
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
  return [
    args.horizontal,
    args.labeled,
    args.collapsible,
    args.mediaPreset,
    args.mediaPosition,
    args.perRow,
    args.tagsLimit,
  ].join('::')
}

function ListDefaultInteractivePreview(args: ListDefaultInteractiveArgs) {
  return (
    <div style={{ ...storyDocsStyles.previewStage, justifyItems: 'stretch' }}>
      <List
        items={createDefaultItems(args.labeled, args.tagsLimit)}
        horizontal={args.horizontal}
        labeled={args.labeled}
        collapsible={args.collapsible}
        mediaPreset={args.mediaPreset}
        mediaPosition={args.mediaPosition}
        perRow={args.perRow}
      />
    </div>
  )
}

function DefaultItemGuidePreview() {
  return (
    <div style={storyDocsStyles.cardGrid}>
      <StoryPreviewCard label="Campos principais">
        <ul style={storyDocsStyles.list}>
          <li><code>title</code> e <code>text</code> são truncados em 140 caracteres, como no Card news.</li>
          <li><code>tags</code> e <code>tagsLimit</code> (1 a 3) aparecem em maiúsculas abaixo da mídia, ou acima do título quando não há imagem.</li>
          <li><code>image</code> ocupa a largura do item; <code>icon</code> só entra se não houver imagem.</li>
          <li><code>perRow</code> vale no layout horizontal; <code>perColumn</code> no vertical (preenchimento de cima para baixo).</li>
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
          <List horizontal perRow={3} mediaPreset={row.mediaPreset} items={horizontalPresetItems} />
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
            A variante <code>default</code> cobre listas de leitura com o mesmo conteúdo do Card
            news (imagem, tags e truncamento), sem borda nem sombra. Densidade vem de
            <code>perRow</code> (horizontal) ou <code>perColumn</code> (vertical).
          </>
        }
        variantTags={docsVariantTags}
        stats={docsHeroStats}
      />

      <SectionCard
        title="Formas principais"
        description="A mesma variante pode aparecer como lista vertical, grade horizontal com perRow, colunas verticais com perColumn ou lista agrupada por rótulo."
      >
        <SandboxExample
          title="Visão comparativa"
          description="Os cenários abaixo cobrem leitura simples, densidade horizontal, densidade vertical e agrupamento."
          code={`<List variant="default" items={items} />\n<List variant="default" horizontal perRow={3} items={items} />\n<List variant="default" perColumn={3} items={items} />\n<List variant="default" labeled collapsible items={items} />`}
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
          description="Em horizontal, perRow define quantos itens cabem por linha. A coleção ainda pode ser apresentada só com ícones, só com imagens ou sem mídia."
          code={horizontalExampleCode}
          notes={[
            'perRow controla as colunas do grid; o padrão é 3.',
            'mediaPreset="icons" preserva apenas os ícones da coleção.',
            'mediaPreset="images" preserva apenas as imagens; se um item tiver image e icon, a imagem continua tendo prioridade.',
            'mediaPreset="none" remove toda a mídia e mantém tags e conteúdo textual.',
          ]}
        >
          <HorizontalPresetPreview />
        </SandboxExample>

        <SandboxExample
          title="Mídia à esquerda"
          description="Na lista vertical, mediaPosition='left' coloca a imagem ou o ícone ao lado do título."
          code={`<List variant="default" mediaPosition="left" items={items} />`}
          notes={[
            'O padrão continua above: mídia acima do texto, igual ao Card news.',
            'Em horizontal, mediaPosition é ignorada.',
          ]}
        >
          <List items={densityItems} mediaPosition="left" mediaPreset="images" />
        </SandboxExample>

        <SandboxExample
          title="Vertical por coluna"
          description="Com perColumn, os itens preenchem de cima para baixo e só depois abrem a próxima coluna."
          code={`<List variant="default" perColumn={3} items={items} />`}
          notes={[
            'Sem perColumn, a lista vertical permanece em uma coluna.',
            'O preenchimento é coluna a coluna, não linha a linha.',
          ]}
        >
          <List items={densityItems} perColumn={3} mediaPreset="images" />
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
    modoContraste: {
      control: 'boolean',
      description: 'Visualiza o componente no modo de alto contraste.',
      table: { category: 'Acessibilidade' },
    },
    horizontal: {
      control: 'boolean',
      description: 'Reorganiza os itens em um grid preenchido da esquerda para a direita.',
      table: { category: 'Layout' },
    },
    perRow: {
      if: { arg: 'horizontal', eq: true },
      control: { type: 'number', min: 1, max: 6, step: 1 },
      description: 'Quantos itens aparecem por linha quando horizontal está ativo.',
      table: { category: 'Layout' },
    },
    tagsLimit: {
      control: { type: 'number', min: 1, max: 3, step: 1 },
      description: 'Quantidade máxima de tags visíveis por item (1 a 3).',
      table: { category: 'Conteúdo' },
    },
    labeled: {
      control: 'boolean',
      description: 'Agrupa itens pela prop label.',
      table: { category: 'Agrupamento' },
    },
    collapsible: {
      if: { arg: 'labeled', eq: true },
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
    mediaPosition: {
      if: { arg: 'horizontal', eq: false },
      control: { type: 'select' },
      options: ['above', 'left'],
      labels: {
        above: 'Acima do texto',
        left: 'À esquerda do texto',
      },
      description: 'Na lista vertical, posiciona a mídia acima ou à esquerda do título.',
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