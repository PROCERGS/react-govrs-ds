import { useState } from 'react'

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

const checkItems: List.CheckItem[] = [
  { id: 'c1', label: 'Grupo 1', title: 'Item 1', text: 'Descrição curta do item.', checked: false },
  { id: 'c2', label: 'Grupo 1', title: 'Item 2', text: 'Descrição curta do item.', checked: true },
  { id: 'c3', label: 'Grupo 2', title: 'Item 3', text: 'Descrição curta do item.', checked: false },
  { id: 'c4', label: 'Grupo 2', title: 'Item 4', text: 'Descrição curta do item.', checked: false },
]

const checkMediaItems: List.CheckItem[] = [
  {
    id: 'cm1',
    label: 'Grupo 1',
    title: 'Item com ícone',
    text: 'Descrição curta do item com ícone.',
    icon: <SampleIcon />,
    checked: false,
  },
  {
    id: 'cm2',
    label: 'Grupo 1',
    title: 'Item com imagem',
    text: 'Descrição curta do item com imagem.',
    image:
      'https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0',
    imageAlt: 'Foto de exemplo',
    checked: true,
  },
  {
    id: 'cm3',
    label: 'Grupo 2',
    title: 'Item sem mídia',
    text: 'Item que não possui imagem nem ícone.',
    checked: false,
  },
  {
    id: 'cm4',
    label: 'Grupo 2',
    title: 'Outro item com ícone',
    text: 'Exemplo adicional para os presets de mídia.',
    icon: <SampleIcon />,
    checked: false,
  },
]

function createCheckItems({
  labeled,
  withMedia = false,
}: {
  labeled: boolean
  withMedia?: boolean
}) {
  const sourceItems = withMedia ? checkMediaItems : checkItems
  const baseItems = labeled
    ? sourceItems
    : sourceItems.map((item, index) => ({
        ...item,
        id: `check-${index}`,
        label: undefined,
      }))

  return baseItems
}

function ControlledCheckPreview({
  title = 'Título',
  labeled = true,
  collapsible = false,
  horizontal = false,
  multiple = true,
  mediaPreset = 'mixed',
  withMedia = false,
}: {
  title?: string
  labeled?: boolean
  collapsible?: boolean
  horizontal?: boolean
  multiple?: boolean
  mediaPreset?: MediaPreset
  withMedia?: boolean
}) {
  const [items, setItems] = useState<List.CheckItem[]>(() =>
    createCheckItems({ labeled, withMedia }),
  )

  function onToggle(item: List.CheckItem, options: { multiple: boolean }) {
    setItems((currentItems) =>
      currentItems.map((currentItem) => {
        if (options.multiple) {
          return currentItem.id === item.id
            ? { ...currentItem, checked: !currentItem.checked }
            : currentItem
        }

        return {
          ...currentItem,
          checked: currentItem.id === item.id ? !currentItem.checked : false,
        }
      }),
    )
  }

  function onToggleGroup(label: string, checked: boolean) {
    setItems((currentItems) =>
      currentItems.map((currentItem) =>
        currentItem.label === label ? { ...currentItem, checked } : currentItem,
      ),
    )
  }

  return (
    <div style={{ display: 'grid', gap: 16 }}>
      <List
        variant="check"
        title={title}
        labeled={labeled}
        collapsible={collapsible}
        horizontal={horizontal}
        multiple={multiple}
        mediaPreset={mediaPreset}
        items={items}
        onToggle={onToggle}
        onToggleGroup={onToggleGroup}
      />

      <p style={storyDocsStyles.statText}>
        <strong>Selecionados:</strong> {items.filter((item) => item.checked).length}
      </p>
    </div>
  )
}

const docsVariantTags = ['title', 'multiple', 'labeled', 'collapsible', 'mediaPreset']

const docsHeroStats = [
  {
    title: 'Quando usar',
    text: 'Quando a coleção precisa preservar a leitura da variante default, mas acrescentar seleção com checkbox por item e, opcionalmente, por grupo.',
  },
  {
    title: 'Melhor exploração',
    text: "Use o story 'Interativo' para alternar título, agrupamento, colapso, horizontalidade e seleção múltipla. A documentação mostra o comportamento controlado esperado.",
  },
  {
    title: 'Comportamento',
    text: 'A variante check não gerencia checked internamente: ela delega a atualização ao consumidor via onToggle e onToggleGroup.',
  },
]

const checkExampleCode = `const [items, setItems] = useState([
  { id: 'c1', label: 'Equipe A', title: 'Item 1', checked: false },
  { id: 'c2', label: 'Equipe A', title: 'Item 2', checked: true },
])

<List
  variant="check"
  title="Permissões"
  labeled
  multiple
  items={items}
  onToggle={(item, { multiple }) => {
    setItems((current) =>
      current.map((entry) =>
        multiple
          ? entry.id === item.id
            ? { ...entry, checked: !entry.checked }
            : entry
          : { ...entry, checked: entry.id === item.id ? !entry.checked : false },
      ),
    )
  }}
  onToggleGroup={(label, checked) => {
    setItems((current) =>
      current.map((entry) =>
        entry.label === label ? { ...entry, checked } : entry,
      ),
    )
  }}
/>`

const singleSelectionCode = `<List
  variant="check"
  title="Permissões"
  items={items}
  onToggle={(item) => {
    setItems((current) =>
      current.map((entry) => ({
        ...entry,
        checked: entry.id === item.id ? !entry.checked : false,
      })),
    )
  }}
/>`

const checkMediaExampleCode = `const [items, setItems] = useState([
  {
    id: 'm1',
    title: 'Com ícone',
    text: 'Texto de apoio com mídia lateral.',
    icon: <Icone />,
    checked: false,
  },
  {
    id: 'm2',
    title: 'Com imagem',
    text: 'Texto de apoio com imagem lateral.',
    image: 'https://.../foto.jpg',
    imageAlt: 'Foto de exemplo',
    checked: true,
  },
])

<List
  variant="check"
  title="Título"
  multiple
  mediaPreset="mixed"
  items={items}
  onToggle={(item) => {
    setItems((current) =>
      current.map((entry) =>
        entry.id === item.id ? { ...entry, checked: !entry.checked } : entry,
      ),
    )
  }}
/>`

type ListCheckInteractiveArgs = {
  title: string
  horizontal: boolean
  labeled: boolean
  collapsible: boolean
  multiple: boolean
  mediaPreset: MediaPreset
}

const meta = {
  title: 'Conteúdo/List/Check',
  component: ListCheckInteractivePreview,
  args: {
    title: 'Título',
    horizontal: false,
    labeled: true,
    collapsible: false,
    multiple: true,
    mediaPreset: 'mixed',
  },
  parameters: {
    layout: 'padded',
    controls: {
      expanded: true,
      sort: 'requiredFirst',
    },
  },
} satisfies Meta<typeof ListCheckInteractivePreview>

export default meta

type Story = StoryObj<typeof meta>

function getCheckInteractivePreviewKey(args: ListCheckInteractiveArgs) {
  return [
    args.title,
    args.horizontal,
    args.labeled,
    args.collapsible,
    args.multiple,
    args.mediaPreset,
  ].join('::')
}

function ListCheckInteractivePreview(args: ListCheckInteractiveArgs) {
  return (
    <div style={{ ...storyDocsStyles.previewStage, justifyItems: 'stretch' }}>
      <ControlledCheckPreview {...args} withMedia />
    </div>
  )
}

function CheckMediaPreview() {
  const [items, setItems] = useState<List.CheckItem[]>([
    {
      id: 'm1',
      title: 'Com ícone',
      text: 'Texto de apoio com mídia lateral.',
      icon: <SampleIcon />,
      checked: false,
    },
    {
      id: 'm2',
      title: 'Com imagem',
      text: 'Texto de apoio com imagem lateral.',
      image:
        'https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0',
      imageAlt: 'Foto de exemplo',
      checked: true,
    },
  ])

  return (
    <List
      variant="check"
      title="Título"
      multiple
      items={items}
      onToggle={(item) => {
        setItems((current) =>
          current.map((entry) =>
            entry.id === item.id ? { ...entry, checked: !entry.checked } : entry,
          ),
        )
      }}
    />
  )
}

function CheckPropsGuidePreview() {
  return (
    <div style={storyDocsStyles.cardGrid}>
      <StoryPreviewCard label="Seleção">
        <ul style={storyDocsStyles.list}>
          <li><code>onToggle</code> recebe o item e um objeto com <code>multiple</code>.</li>
          <li><code>multiple</code> define se mais de um item pode permanecer marcado.</li>
          <li>Sem callback, a marcação visual não se atualiza sozinha.</li>
        </ul>
      </StoryPreviewCard>

      <StoryPreviewCard label="Grupos">
        <ul style={storyDocsStyles.list}>
          <li><code>labeled</code> agrupa por <code>label</code>.</li>
          <li><code>onToggleGroup</code> só faz sentido quando grupos e múltipla seleção coexistem.</li>
          <li><code>collapsible</code> mantém o mesmo comportamento da variante default.</li>
          <li><code>mediaPreset</code> reaproveita a mesma lógica de mídia da variante default, incluindo a prioridade de imagem sobre ícone.</li>
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
        title={<h3 style={storyDocsStyles.heroTitle}>List Check</h3>}
        description={
          <>
            A variante <code>check</code> reaproveita a anatomia da lista default e
            acrescenta um checkbox por item, com suporte a agrupamento por rótulo e
            seleção de grupo quando o consumo pede isso.
          </>
        }
        variantTags={docsVariantTags}
        stats={docsHeroStats}
      />

      <SectionCard
        title="Modelo de controle"
        description="A seleção é externa ao componente. O story abaixo mostra a composição recomendada: a lista recebe items já marcados e devolve intenções de mudança pelos callbacks."
      >
        <SandboxExample
          title="Exemplo controlado"
          description="Neste exemplo, o consumidor decide como alternar itens individualmente e por grupo."
          code={checkExampleCode}
          notes={[
            'A variante check não mantém estado de checked por conta própria.',
            'Quando labeled e multiple estão ativos, o cabeçalho do grupo ganha um checkbox adicional.',
          ]}
        >
          <ControlledCheckPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Props principais"
        description="Além da estrutura dos itens, a variante check depende principalmente das regras de seleção que o consumidor adota."
      >
        <CheckPropsGuidePreview />

        <SandboxExample
          title="Seleção única"
          description="Sem multiple, o callback pode garantir que apenas um item permaneça marcado por vez."
          code={singleSelectionCode}
        >
          <ControlledCheckPreview labeled={false} multiple={false} />
        </SandboxExample>

        <SandboxExample
          title="Com imagem ou ícone"
          description="Assim como na variante default, cada item pode combinar texto de apoio com mídia opcional na coluna lateral."
          code={checkMediaExampleCode}
          notes={[
            'mediaPreset="images" mantém só imagens, mediaPreset="icons" mantém só ícones e mediaPreset="none" remove ambos.',
            'Se um item tiver image e icon ao mesmo tempo, a imagem continua tendo prioridade visual.',
          ]}
        >
          <CheckMediaPreview />
        </SandboxExample>
      </SectionCard>
    </DocsStoryLayout>
  ),
}

export const Interativo: Story = {
  name: 'Interativo',
  argTypes: {
    title: {
      control: 'text',
      description: 'Título exibido acima da coleção.',
      table: { category: 'Conteúdo' },
    },
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
    multiple: {
      control: 'boolean',
      description: 'Indica ao callback se a seleção pode permanecer múltipla.',
      table: { category: 'Seleção' },
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
      exclude: ['className', 'items', 'itemKey', 'variant', 'onToggle', 'onToggleGroup'],
    },
  },
  render: (args) => (
    <ListCheckInteractivePreview
      key={getCheckInteractivePreviewKey(args)}
      {...args}
    />
  ),
}