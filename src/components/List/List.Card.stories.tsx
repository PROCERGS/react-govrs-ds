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

const cardItems: List.CardItem[] = [
  {
    id: 'card1',
    title: 'Card 1',
    description: 'Descrição do card 1',
    image:
      'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0',
    imageAlt: 'Imagem card 1',
  },
  {
    id: 'card2',
    title: 'Card 2',
    description: 'Descrição do card 2',
    image:
      'https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0',
    imageAlt: 'Imagem card 2',
  },
  {
    id: 'card3',
    title: 'Card 3',
    description: 'Descrição do card 3',
  },
  {
    id: 'card4',
    title: 'Card 4',
    description: 'Descrição do card 4',
    variant: 'news',
    image:
      'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&h=400&fit=crop',
    imageAlt: 'Imagem card 4',
  },
]

function CardVariantGalleryPreview() {
  const rows = [
    { label: 'Uma coluna', perRow: 1, items: cardItems.slice(0, 2) },
    { label: 'Duas colunas', perRow: 2, items: cardItems.slice(0, 2) },
    { label: 'Três colunas', perRow: 3, items: cardItems },
  ] as const

  return (
    <div style={{ display: 'grid', gap: 16 }}>
      {rows.map((row) => (
        <div
          key={row.label}
          style={{
            display: 'grid',
            gap: 16,
            padding: '16px 18px',
            borderRadius: 18,
            border: '1px solid #e2e8f0',
            background: '#ffffff',
          }}
        >
          <p style={storyDocsStyles.previewLabel}>{row.label}</p>

          <div style={{ overflowX: 'auto', paddingBottom: 4 }}>
            <div style={{ minWidth: `${row.perRow * 320}px` }}>
              <List variant="card" items={row.items} perRow={row.perRow} />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

const docsVariantTags = ['perRow', 'grid', 'card']

const docsHeroStats = [
  {
    title: 'Quando usar',
    text: 'Quando a coleção precisa distribuir cards do design system em uma grade, mantendo a mesma API de dados da lista e o controle de colunas por linha.',
  },
  {
    title: 'Melhor exploração',
    text: "Use o story 'Interativo' para variar o número de colunas. A documentação mostra a mesma coleção em uma, duas e três colunas.",
  },
  {
    title: 'Comportamento',
    text: 'Cada item da variante card reaproveita diretamente o componente Card já migrado para o projeto atual, inclusive suas variantes e props próprias.',
  },
]

const cardExampleCode = `<div>
  <div>
    <p>Uma coluna</p>
    <List
      variant="card"
      perRow={1}
      items={cardItems.slice(0, 2)}
    />
  </div>

  <div>
    <p>Duas colunas</p>
    <List
      variant="card"
      perRow={2}
      items={cardItems.slice(0, 2)}
    />
  </div>

  <div>
    <p>Três colunas</p>
    <List
      variant="card"
      perRow={3}
      items={cardItems}
    />
  </div>
</div>`

const itemShapeCode = `<List
  variant="card"
  perRow={3}
  items={[
    {
      id: 'card-1',
      title: 'Título de exemplo',
      description: 'Descrição curta do card',
      image: 'https://.../header.jpg',
      imageAlt: 'Imagem do card',
      bodyImg: 'https://.../body.jpg',
      bodyImgAlt: 'Imagem do corpo',
      size: 'small',
      disabled: false,
      href: '/pagina',
      acao: { label: 'Ler mais', url: '/pagina' },
      itens: [{ value: 'Ponto A' }, { value: 'Ponto B' }],
    },
  ]}
/>`

type ListCardInteractiveArgs = {
  perRow: number
}

const meta = {
  title: 'Conteúdo/List/Card',
  component: ListCardInteractivePreview,
  args: {
    perRow: 3,
  },
  parameters: {
    layout: 'padded',
    controls: {
      expanded: true,
      sort: 'requiredFirst',
    },
  },
} satisfies Meta<typeof ListCardInteractivePreview>

export default meta

type Story = StoryObj<typeof meta>

function getCardInteractivePreviewKey(args: ListCardInteractiveArgs) {
  return String(args.perRow)
}

function ListCardInteractivePreview(args: ListCardInteractiveArgs) {
  return (
    <div style={{ ...storyDocsStyles.previewStage, justifyItems: 'stretch' }}>
      <List variant="card" items={cardItems} perRow={args.perRow} />

      <p style={storyDocsStyles.statText}>
        <strong>Colunas ativas:</strong> {args.perRow}
      </p>
    </div>
  )
}

function CardPropsGuidePreview() {
  return (
    <div style={storyDocsStyles.cardGrid}>
      <StoryPreviewCard label="Layout da grade">
        <ul style={storyDocsStyles.list}>
          <li><code>perRow</code> controla quantas colunas aparecem por linha.</li>
          <li>Use <code>1</code> quando a intenção for uma pilha vertical.</li>
          <li>Em telas menores, a grade cai automaticamente para uma coluna.</li>
        </ul>
      </StoryPreviewCard>

      <StoryPreviewCard label="Formato dos itens">
        <ul style={storyDocsStyles.list}>
          <li>Cada item recebe o mesmo contrato aceito por <code>Card</code>.</li>
          <li><code>id</code> é opcional e serve como chave estável da lista.</li>
          <li>As variantes do próprio <code>Card</code> continuam válidas dentro da grade.</li>
          <li><code>mediaPreset</code> não se aplica aqui: a variante card delega o tratamento de mídia integralmente ao componente <code>Card</code>.</li>
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
        title={<h3 style={storyDocsStyles.heroTitle}>List Card</h3>}
        description={
          <>
            A variante <code>card</code> organiza uma coleção de <code>Card</code>s
            em grade, reaproveitando o componente já presente no design system em vez
            de introduzir uma anatomia paralela.
          </>
        }
        variantTags={docsVariantTags}
        stats={docsHeroStats}
      />

      <SectionCard
        title="Grade e quantidade de colunas"
        description="O papel dessa variante é distribuir cards já tipados pelo design system. O principal ajuste global fica por conta de perRow."
      >
        <SandboxExample
          title="Mesma coleção em grades diferentes"
          description="Os exemplos abaixo mostram a mesma base de itens em uma, duas e três colunas."
          code={cardExampleCode}
          notes={[
            'A grade respeita o Card atual do projeto, inclusive quando um item usa variant news.',
            'Não há componente de card paralelo dentro do List: a composição delega para Card.',
          ]}
        >
          <CardVariantGalleryPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Contrato dos itens"
        description="A variante card não inventa um novo formato de item. Ela apenas recebe o mesmo objeto que você já passaria ao componente Card."
      >
        <CardPropsGuidePreview />

        <SandboxExample
          title="Formato esperado do item"
          description="Este é o formato de dados recomendado para cada entrada da grade."
          code={itemShapeCode}
        >
          <List variant="card" items={cardItems} perRow={3} />
        </SandboxExample>
      </SectionCard>
    </DocsStoryLayout>
  ),
}

export const Interativo: Story = {
  name: 'Interativo',
  argTypes: {
    perRow: {
      control: { type: 'number', min: 1, max: 6, step: 1 },
      description: 'Quantidade de colunas exibidas por linha.',
      table: { category: 'Layout' },
    },
  },
  parameters: {
    controls: {
      exclude: ['className', 'items', 'itemKey', 'variant'],
    },
  },
  render: (args) => (
    <ListCardInteractivePreview
      key={getCardInteractivePreviewKey(args)}
      {...args}
    />
  ),
}