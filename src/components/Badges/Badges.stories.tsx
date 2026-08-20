import type { Meta, StoryObj } from '@storybook/react'

import {
  DocsHero,
  DocsStoryLayout,
  SandboxExample,
  SectionCard,
  storyDocsStyles,
} from '../../../.storybook/docs/storyDocs'
import { Badges } from './Badges'
import './Badges.scss'
import '../../foundations/styles/index.scss'

const docsVariantTags = ['success', 'warning', 'error', 'info', 'outline']

const docsHeroStats = [
  {
    title: 'Quando usar',
    text: 'Quando a mensagem precisa apenas sinalizar estado ou classificação sem ocupar a hierarquia visual de um alerta completo.',
  },
  {
    title: 'Melhor exploração',
    text: "Use o story 'Interativo' para testar variant, message e outline. O story 'Exemplos Combinados' resume as variantes preenchidas em uma leitura rápida.",
  },
  {
    title: 'Comportamento',
    text: 'Badges são estáticas e compactas. Se a interface precisar de fechamento, destaque maior ou bloco multiline, Alerts tende a ser mais apropriado.',
  },
]

const variantExampleCode = `<Badges variant="success" message="Campo correto" />
<Badges variant="error" message="Campo inválido" />
<Badges variant="warning" message="Atenção" />
<Badges variant="info" message="Informação" />`

const contentExampleCode = `// Via prop
<Badges variant="info" message="Mensagem via prop" />

// Via children
<Badges variant="info">
  <strong>Via children</strong>
</Badges>`

const outlineExampleCode = `
    <Badges variant="success" message="Campo correto" />
    <Badges variant="success" message="Campo correto" outline />
`

const combinedExampleCode = `<Badges variant="success" message="Campo correto" />
<Badges variant="error" message="Campo inválido" />
<Badges variant="warning" message="Atenção" />
<Badges variant="info" message="Informação" />`

const meta = {
  title: 'Feedback/Badges',
  component: Badges,
  parameters: {
    layout: 'padded',
    controls: {
      expanded: true,
      sort: 'requiredFirst',
    },
  },
} satisfies Meta<typeof Badges>

export default meta

type Story = StoryObj<typeof meta>

function BadgesVariantsPreview() {
  return (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
      <Badges variant="success" message="Campo correto" />
      <Badges variant="error" message="Campo inválido" />
      <Badges variant="warning" message="Atenção" />
      <Badges variant="info" message="Informação" />
    </div>
  )
}

function BadgesContentPreview() {
  return (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
      <Badges variant="info" message="Mensagem via prop" />
      <Badges variant="info">
        <strong>Via children</strong>
      </Badges>
    </div>
  )
}

function BadgesOutlinePreview() {
  return (
    <div style={storyDocsStyles.cardGrid}>
      <div style={storyDocsStyles.previewItem}>
        <p style={storyDocsStyles.previewLabel}>Preenchida</p>
        <Badges variant="success" message="Campo correto" />
      </div>

      <div style={storyDocsStyles.previewItem}>
        <p style={storyDocsStyles.previewLabel}>Outline</p>
        <Badges variant="success" message="Campo correto" outline />
      </div>
    </div>
  )
}

function BadgesCombinedPreview() {
  return (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
      <Badges variant="success" message="Campo correto" />
      <Badges variant="error" message="Campo inválido" />
      <Badges variant="warning" message="Atenção" />
      <Badges variant="info" message="Informação" />
    </div>
  )
}

export const BadgesDocumentacao: Story = {
  name: 'Documentação',
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <DocsStoryLayout>
      <DocsHero
        eyebrow="Documentação guiada"
        title={<h3 style={storyDocsStyles.heroTitle}>Badges</h3>}
        description={
          <>
            O componente <code>Badges</code> exibe rótulos compactos para estados e
            classificações.
          </>
        }
        variantTags={docsVariantTags}
        stats={docsHeroStats}
      />

      <SectionCard
        title="Como usar"
        description="Badges funcionam melhor quando a mensagem é curta e o objetivo é apenas sinalizar contexto. Elas compartilham as mesmas variantes semânticas dos Alerts, mas sem o peso visual de um bloco expandido."
      >
        <ul style={storyDocsStyles.list}>
          <li><code>variant</code> define o tom visual: success, error, warning ou info.</li>
          <li><code>message</code> define o texto a ser exibido na badge.</li>
          <li><code>children</code> permite passar estruturas mais complexas para dentro da badge.</li>
          <li><code>outline</code> troca o preenchimento por uma versão contornada.</li>
        </ul>

        <SandboxExample
          title="Galeria de variantes"
          description="Snapshot rápido das badges preenchidas para comparar tom visual e densidade do componente."
          code={variantExampleCode}
          notes={[
            'As variantes seguem a mesma linguagem visual usada nos Alerts.',
            'Badges continuam sendo elementos compactos e estáticos, sem ação de fechamento.',
          ]}
        >
          <BadgesVariantsPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Message e children"
        description="O componente aceita tanto uma string simples quanto conteúdo React. A escolha depende mais do nível de destaque interno que você precisa do que de qualquer diferença comportamental."
      >
        <SandboxExample
          title="Conteúdo mínimo"
          description="Comparativo direto entre passar a mensagem pela prop message e usar children para um pequeno destaque interno."
          code={contentExampleCode}
        >
          <BadgesContentPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Variação outline"
        description="Quando o contexto pede uma presença mais leve, outline reaproveita a mesma semântica sem preencher toda a superfície da badge."
      >
        <SandboxExample
          title="Cheio versus contornado"
          description="A comparação abaixo ajuda a decidir quando o visual preenchido pode competir demais com outros elementos da tela."
          code={outlineExampleCode}
        >
          <BadgesOutlinePreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Exemplos combinados"
        description="A história combinada continua útil para um inventário rápido das badges preenchidas disponíveis no catálogo."
      >
        <SandboxExample
          title="Panorama rápido"
          description="Mesmo conjunto essencial de exemplos do story combinado anterior, agora dentro do layout compartilhado."
          code={combinedExampleCode}
        >
          <BadgesCombinedPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Limitações e dependências"
        description="Badges foram pensadas para sinalização compacta, não para narrativa longa, ações ou blocos de feedback que precisem ganhar largura e respiro maiores."
      >
        <ul style={storyDocsStyles.list}>
          <li>Badges não são dismissible. Se a pessoa usuária precisar fechar a mensagem, prefira Alerts.</li>
          <li><code>message</code> tem precedência sobre <code>children</code> quando ambos forem informados.</li>
          <li><code>outline</code> altera apenas o tratamento visual, sem mudar semântica ou comportamento.</li>
          <li>Para textos longos, o componente perde a principal vantagem de densidade e leitura rápida.</li>
        </ul>
      </SectionCard>
    </DocsStoryLayout>
  ),
}

export const BadgesInterativo: Story = {
  name: 'Interativo',
  argTypes: {
    modoContraste: {
      control: 'boolean',
      description: 'Visualiza o componente no modo de alto contraste.',
      table: { category: 'Acessibilidade' },
    },
    variant: {
      control: { type: 'radio' },
      options: ['success', 'warning', 'error', 'info'],
      description: 'Define o tom visual e semântico da badge.',
      table: { category: 'Estado visual' },
    },
    message: {
      control: 'text',
      description: 'Texto principal exibido na badge.',
      table: { category: 'Conteúdo' },
    },
    outline: {
      control: 'boolean',
      description: 'Ativa a variação contornada em vez do preenchimento padrão.',
      table: { category: 'Estado visual' },
    },
  },
  args: {
    variant: 'info',
    message: 'Exemplo de badge',
    outline: false,
  },
  parameters: {
    controls: { exclude: ['children'] },
  },
  render: (args) => (
    <div style={{ padding: 12 }}>
      <Badges {...args} />
    </div>
  ),
}

export const BadgesCombinados: Story = {
  name: 'Exemplos Combinados',
  parameters: {
    controls: { disable: true },
  },
  render: () => <BadgesCombinedPreview />,
}
