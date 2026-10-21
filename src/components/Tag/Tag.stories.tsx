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
    text: 'Para identificar itens curtos, remover uma classificação já aplicada ou exibir uma informação compacta de status, ícone ou pontuação.',
  },
  {
    title: 'Comportamento',
    text: 'A tag não é um controle de seleção. A variante interactive apenas oferece a ação de remover e a representação visual de um estado selecionado.',
  },
]

const interactiveExampleCode = `<Tag label="Veículo" Icon={faCar} onClose={() => removeTag()} />
<Tag label="Sem ícone" showIcon={false} onClose={() => removeTag()} />
<Tag label="Veículo" Icon={faCar} selected />
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
        description="A tag interativa exibe ícone, rótulo e, por padrão, um botão para remover a própria tag. O estado selected é apenas visual e substitui o botão por uma confirmação."
      >
        <SandboxExample
          title="Remoção, seleção e desabilitada"
          description="Use onClose para sincronizar a remoção com o estado da aplicação. selected é útil para representar uma seleção já determinada pela interface, não para criar grupos de opções."
          code={interactiveExampleCode}
          notes={[
            'O botão de remover tem nome acessível configurável por closeButtonLabel.',
            'disabled impede exclusivamente a ação de remoção.',
            'showButton, showIcon e showLabel permitem ocultar partes da anatomia do Figma.',
          ]}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
            <Tag label="Veículo" Icon={faCar} onClose={() => undefined} />
            <Tag label="Sem ícone" showIcon={false} onClose={() => undefined} />
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
        description="Tags devem manter textos curtos. Para seleção exclusiva ou múltipla, use os controles de formulário adequados; para mensagens, prefira Alerts ou Badges."
      >
        <ul style={storyDocsStyles.list}>
          <li>Não use Tag como radio, checkbox ou grupo de filtros.</li>
          <li>Não use a variante icon sem um <code>label</code> que explique o ícone.</li>
          <li>Use <code>onClose</code> para tratar a remoção na aplicação; o componente não oculta a tag automaticamente.</li>
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
      description: 'Mostra a confirmação visual na variante interactive.',
      table: { category: 'Estado' },
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita o botão de remoção na variante interactive.',
      table: { category: 'Estado' },
    },
    showButton: {
      control: 'boolean',
      description: 'Exibe o botão de remoção na variante interactive.',
      table: { category: 'Estrutura' },
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
  },
  args: {
    variant: 'interactive',
    label: 'Veículo',
    Icon: faMagnifyingGlass,
    showIcon: true,
    showLabel: true,
    showButton: true,
    selected: false,
    disabled: false,
    score: 9,
  },
  parameters: {
    controls: { exclude: ['children', 'className', 'closeButtonLabel', 'onClose'] },
  },
  render: (args) => <Tag {...args} onClose={() => undefined} />,
}
