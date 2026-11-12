import type { Meta, StoryObj } from '@storybook/react'

import {
  DocsHero,
  DocsStoryLayout,
  SandboxExample,
  SectionCard,
  storyDocsStyles,
} from '../../../.storybook/docs/storyDocs'
import { Divisor, type DivisorThickness, type DivisorVariant } from './Divisor'
import '../../foundations/styles/index.scss'

const meta = {
  title: 'Layout/Divisor',
  component: Divisor,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Divisor>

export default meta

type Story = StoryObj<typeof meta>

const thicknesses: DivisorThickness[] = [1, 2, 4]
const variants: DivisorVariant[] = ['default', 'dashed']

const variantsExampleCode = [
  '// Default: 1, 2 e 4px',
  '<Divisor variant="default" thickness={1} />',
  '<Divisor variant="default" thickness={2} />',
  '<Divisor variant="default" thickness={4} />',
  '',
  '// Dashed: 1, 2 e 4px',
  '<Divisor variant="dashed" thickness={1} />',
  '<Divisor variant="dashed" thickness={2} />',
  '<Divisor variant="dashed" thickness={4} />',
].join('\n')

const verticalExampleCode = [
  '<div style={{ display: "flex", alignItems: "stretch", gap: 20, minHeight: 100 }}>',
  '  <div style={{ flex: 1, minWidth: 0 }}>Bloco à esquerda</div>',
  '  <Divisor orientation="vertical" variant="dashed" thickness={2} />',
  '  <div style={{ flex: 1, minWidth: 0 }}>Bloco à direita</div>',
  '</div>',
].join('\n')

function VariantsPreview() {
  return (
    <div style={{ display: 'grid', gap: 24, width: '100%' }}>
      {variants.map((variant) => (
        <section key={variant} style={{ display: 'grid', gap: 16 }}>
          <h4 style={{ margin: 0, textTransform: 'capitalize' }}>{variant}</h4>
          {thicknesses.map((thickness) => (
            <div key={thickness} style={{ display: 'grid', gap: 8 }}>
              <span>{thickness}px</span>
              <Divisor variant={variant} thickness={thickness} />
            </div>
          ))}
        </section>
      ))}
    </div>
  )
}

function VerticalPreview() {
  return (
    <div style={{ display: 'flex', alignItems: 'stretch', gap: 20, minHeight: 100 }}>
      <div style={{ flex: 1, minWidth: 0 }}>Bloco à esquerda</div>
      <Divisor orientation="vertical" variant="dashed" thickness={2} />
      <div style={{ flex: 1, minWidth: 0 }}>Bloco à direita</div>
    </div>
  )
}

export const DivisorDocumentacao: Story = {
  name: 'Documentação',
  parameters: { controls: { disable: true } },
  render: () => (
    <DocsStoryLayout>
      <DocsHero
        eyebrow="Layout"
        title="Divisor"
        description="Separa visualmente seções ou blocos relacionados. A versão horizontal ocupa toda a largura disponível no contêiner."
        variantTags={['Default', 'Dashed', 'Vertical']}
        stats={[
          { title: 'Traço', text: 'Default usa linha contínua; Dashed usa linha tracejada.' },
          { title: 'Espessura', text: 'thickness aceita 1, 2 ou 4 pixels.' },
          { title: 'Orientação', text: 'orientation permite separar blocos lado a lado na vertical.' },
        ]}
      />

      <SectionCard
        title="Variações e espessuras"
        description="As duas variações têm as mesmas três espessuras e acompanham a largura do contêiner."
      >
        <SandboxExample
          title="Seis combinações"
          description="Compare o traço contínuo e o tracejado em 1, 2 e 4 pixels."
          code={variantsExampleCode}
        >
          <VariantsPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Orientação vertical"
        description="Use entre blocos dispostos lado a lado; o divisor acompanha a altura da linha de conteúdo."
      >
        <SandboxExample
          title="Entre dois blocos"
          description="O parâmetro orientation ativa a linha vertical."
          code={verticalExampleCode}
        >
          <VerticalPreview />
        </SandboxExample>
        <ul style={storyDocsStyles.list}>
          <li>O divisor horizontal usa largura de 100% da área disponível.</li>
          <li>Na vertical, posicione o componente entre blocos alinhados horizontalmente.</li>
          <li>É possível ajustar a cor com a variável CSS <code>--govrs-divisor-color</code>.</li>
        </ul>
      </SectionCard>
    </DocsStoryLayout>
  ),
}

export const DivisorInterativo: Story = {
  name: 'Interativo',
  argTypes: {
    variant: {
      control: 'radio',
      options: ['default', 'dashed'],
      description: 'Escolhe linha contínua ou tracejada.',
    },
    thickness: {
      control: 'radio',
      options: [1, 2, 4],
      description: 'Define a espessura em pixels.',
    },
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      description: 'Define a orientação da linha.',
    },
  },
  args: {
    variant: 'default',
    thickness: 1,
    orientation: 'horizontal',
  },
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'stretch', gap: 20, minHeight: 100 }}>
      {args.orientation === 'vertical' ? <div style={{ flex: 1 }}>Bloco à esquerda</div> : null}
      <Divisor {...args} />
      {args.orientation === 'vertical' ? <div style={{ flex: 1 }}>Bloco à direita</div> : null}
    </div>
  ),
}

export const DivisorVariacoes: Story = {
  name: 'Variações',
  parameters: { controls: { disable: true } },
  render: () => <VariantsPreview />,
}
