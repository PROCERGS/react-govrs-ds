import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { faCar, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import {
  DocsHero,
  DocsStoryLayout,
  SandboxExample,
  SectionCard,
  StoryPreviewCard,
  storyDocsStyles,
} from '../../../.storybook/docs/storyDocs'
import { Tag } from './Tag'
import './Tag.scss'
import '../../foundations/styles/index.scss'

const docsVariantTags = ['interactive', 'text', 'icon', 'score', 'status']

const docsHeroStats = [
  {
    title: 'Quando usar',
    text: 'Para selecionar filtros ou identificar itens curtos e exibir uma informação compacta de status, ícone ou pontuação.',
  },
  {
    title: 'Comportamento',
    text: 'A variante interactive é um botão de alternância controlado. O estado default não exibe indicador; selected mostra uma confirmação e disabled mostra X.',
  },
]

const interactiveExampleCode = `const [selected, setSelected] = useState(false)

<Tag
  label="Veículo"
  Icon={faCar}
  selected={selected}
  onSelectedChange={setSelected}
/>

<Tag label="Veículo" Icon={faCar} disabled />`

const typesExampleCode = `<Tag variant="text" label="Veículo" Icon={faCar} />
<Tag variant="text" label="Sem ícone" showIcon={false} />
<Tag variant="icon" Icon={faCar} label="Veículo" />
<Tag variant="score" score={9} />
<Tag variant="status" label="Disponível" />`

const meta = {
  title: 'Feedback/Tag',
  component: Tag,
  parameters: {
    layout: 'padded',
    controls: {
      expanded: true,
      sort: 'requiredFirst',
    },
  },
} satisfies Meta<typeof Tag>

export default meta

type Story = StoryObj<typeof meta>

function TypesPreview() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center' }}>
      <Tag variant="text" label="Veículo" Icon={faCar} />
      <Tag variant="icon" Icon={faCar} label="Veículo" />
      <Tag variant="score" score={9} />
      <Tag variant="status" label="Disponível" />
    </div>
  )
}

function TagInteractivePreview(args: React.ComponentProps<typeof Tag>) {
  const [selected, setSelected] = useState(Boolean(args.selected))

  return (
    <Tag
      {...args}
      selected={selected}
      onSelectedChange={(nextSelected) => {
        setSelected(nextSelected)
        args.onSelectedChange?.(nextSelected)
      }}
    />
  )
}

export const TagDocumentacao: Story = {
  name: 'Documentação',
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <DocsStoryLayout>
      <DocsHero
        eyebrow="Documentação guiada"
        title={<h3 style={storyDocsStyles.heroTitle}>Tag</h3>}
        description={
          <>
            O componente <code>Tag</code> apresenta rótulos compactos segundo as cinco anatomias
            definidas no design system: interactive, text, icon, score e status.
          </>
        }
        variantTags={docsVariantTags}
        stats={docsHeroStats}
      />

      <SectionCard
        title="Tag interativa"
        description="A tag interativa é um botão de alternância. No estado default, ela exibe ícone e rótulo; selected mostra uma confirmação, e disabled mostra X."
      >
        <SandboxExample
          title="Seleção controlada e desabilitada"
          description="Use selected e onSelectedChange para sincronizar a seleção com o estado da aplicação."
          code={interactiveExampleCode}
          notes={[
            'O botão informa seu estado com aria-pressed e pode ser acionado com teclado.',
            'disabled impede a alteração da seleção.',
            'O estado desabilitado aplica a opacidade definida no Figma.',
            'O estado default não exibe indicador após o rótulo.',
          ]}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
            <Tag label="Veículo" Icon={faCar} />
            <Tag label="Sem ícone" showIcon={false} />
            <Tag label="Selecionada" Icon={faCar} selected />
            <Tag label="Desabilitada" Icon={faCar} disabled />
          </div>
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Anatomias estáticas"
        description="Text, icon, score e status são elementos informativos. Elas não assumem ações nem semântica de checkbox, rádio ou filtro."
      >
        <SandboxExample
          title="Variações disponíveis"
          description="As cores, dimensões e densidade acompanham as variantes correspondentes no Figma."
          code={typesExampleCode}
        >
          <TypesPreview />
        </SandboxExample>

        <div style={{ ...storyDocsStyles.cardGrid, alignItems: 'start' }}>
          <StoryPreviewCard label="Text">
            <p style={storyDocsStyles.statText}>Rótulo verde com ícone opcional.</p>
          </StoryPreviewCard>
          <StoryPreviewCard label="Icon">
            <p style={storyDocsStyles.statText}>Ícone verde de 40 por 40 pixels. Sempre forneça label para um nome acessível.</p>
          </StoryPreviewCard>
          <StoryPreviewCard label="Score">
            <p style={storyDocsStyles.statText}>Pontuação numérica curta em superfície circular verde.</p>
          </StoryPreviewCard>
          <StoryPreviewCard label="Status">
            <p style={storyDocsStyles.statText}>Indicador verde com rótulo opcional; sem rótulo, o conteúdo ainda nomeia o indicador para leitores de tela.</p>
          </StoryPreviewCard>
        </div>
      </SectionCard>

      <SectionCard
        title="Limites de uso"
        description="Tags devem manter textos curtos. Para valores submetidos por formulário, use os controles de formulário adequados; para mensagens, prefira Alerts ou Badges."
      >
        <ul style={storyDocsStyles.list}>
          <li>O consumidor define se as tags formam uma seleção exclusiva ou múltipla.</li>
          <li>Não use a variante icon sem um <code>label</code> que explique o ícone.</li>
          <li>Use <code>selected</code> e <code>onSelectedChange</code> para sincronizar o estado externo.</li>
        </ul>
      </SectionCard>
    </DocsStoryLayout>
  ),
}

export const TagInterativo: Story = {
  name: 'Interativo',
  argTypes: {
    modoContraste: {
      control: 'boolean',
      description: 'Visualiza o componente no modo de alto contraste.',
      table: { category: 'Acessibilidade' },
    },
    variant: {
      control: { type: 'radio' },
      options: ['interactive', 'text', 'icon', 'score', 'status'],
      description: 'Escolhe uma das cinco anatomias definidas no Figma.',
      table: { category: 'Variante' },
    },
    label: {
      control: 'text',
      description: 'Rótulo do conteúdo e nome acessível da variante icon.',
      table: { category: 'Conteúdo' },
    },
    selected: {
      control: 'boolean',
      description: 'Exibe o estado selected com confirmação na variante interactive.',
      table: { category: 'Estado' },
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita a alteração de seleção na variante interactive.',
      table: { category: 'Estado' },
    },
    showIcon: {
      control: 'boolean',
      description: 'Exibe o ícone nas variantes interactive e text.',
      table: { category: 'Estrutura' },
    },
    showLabel: {
      control: 'boolean',
      description: 'Exibe o rótulo nas variantes interactive, text e status.',
      table: { category: 'Estrutura' },
    },
    score: {
      control: 'text',
      description: 'Valor exibido pela variante score.',
      table: { category: 'Conteúdo' },
    },
    onSelectedChange: {
      action: 'selected changed',
      description: 'Recebe o próximo estado de seleção da variante interactive.',
      table: { category: 'Eventos' },
    },
  },
  args: {
    variant: 'interactive',
    label: 'Veículo',
    Icon: faMagnifyingGlass,
    showIcon: true,
    showLabel: true,
    selected: false,
    disabled: false,
    score: 9,
  },
  parameters: {
    controls: { exclude: ['children', 'className', 'onClick'] },
  },
  render: (args) => <TagInteractivePreview key={String(args.selected)} {...args} />,
}
